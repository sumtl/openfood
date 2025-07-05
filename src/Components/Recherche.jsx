import { useState } from "react";
import { Container, Label, Input, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Composant de recherche
const Recherche = () => {
  // État pour le terme de recherche et les résultats
  const [nomProduit, setNomProduit] = useState("");
  // État pour stocker les résultats de la recherche
  const [resultats, setResultats] = useState([]);
  // État pour gérer les erreurs
  const [error, setError] = useState("");

  // Fonction appelée lors du clic sur le bouton de recherche
  const onClick = () => {
    setError("");
    setResultats([]);

    // Cas d'erreur 1 : terme de recherche vide(ex: click sur le bouton de recherche sans entrer de terme de recherche)
    if (!nomProduit.trim()) {
      setError("Veuillez entrer un terme de recherche.");
      return;
    }

    // Affichage du terme de recherche dans la console(pour le débogage)
    console.log("Recherche de produits:" + nomProduit);

    // Appel à l'API Open Food Facts pour rechercher des produits par catégorie
    fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${nomProduit}&search_simple=1&action=process&json=1`
    )
      .then((response) => response.json())
      .then((data) => {
        // Cas d'erreur 2 : pas de resultats trouvés(ex: recherche d'une catégorie inexistante)
        if (!data.products || data.products.length === 0) {
          setError("Aucun produit trouvé");
          return;
        }
        setResultats(data.products);
      })
      .catch((error) => {
        // Cas d'erreur 3 : Réponse vide ou mal formée(ex: document HTML au lieu de JSON).
        if (error.name === "SyntaxError") {
          setError("Réponse vide ou mal formée. Erreur: " + error.message);
        } else {
          // Cas d'erreur 4 : API inaccessible ou problème réseau（ex:mauvaise API URL, problème de connexion, etc.）
          setError(
            "Une erreur s'est produite lors de la recherche. Erreur: " + error.message
          );
        }
      });
  };

  // Fonction pour afficher les résultats de la recherche
  const renderResultats = () => {
    return resultats.map((produit) => {
      if (
        !produit.image_url ||
        !produit.product_name ||
        !produit.brands 
      ) {
        return null;  
      }
      return (
        <Link key={produit.code} to={`/produit/${produit.code}`}>
          <Card>
            <Image src={produit.image_front_url} alt={produit.product_name} />
            <Card.Content>
              <Card.Header>
                {produit.product_name || "Produit sans nom"}
              </Card.Header>
              <Card.Meta>
                <strong>Marque :</strong> {produit.brands || "Non renseignée"}
              </Card.Meta>
              <Card.Meta>
                <strong>Origins :</strong>{" "}
                {produit.origins || "Non renseignées"}
              </Card.Meta>
              <Card.Meta>
                <strong>Quantité :</strong>{" "}{produit.quantity || "Non renseignée"}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      );
    });
  };

  // Rendu du composant
  // Affiche un formulaire de recherche, les résultats et les erreurs éventuelles
  return (
    <Container>
      <h1>Recherchez un produit alimentaire dans la base Open Food Facts</h1>

      <div className="search-form">
        <Label pointing="right">Tapez nom, marque, pays ou mot-clé</Label>
        <Input
          type="text"
          name="nomProduit"
          value={nomProduit}
          onChange={(e) => setNomProduit(e.target.value)}
          placeholder="Ex. chocolat, Nestlé, France, bio, etc."
          style={{ minWidth: "350px", width: "30vw", maxWidth: "500px" }}
        />
        <button className="ui primary button" onClick={onClick}>
          Rechercher les produits
        </button>

        {/* Bouton de réinitialisation */}
        <button
          className="ui button"
          onClick={() => {
            setNomProduit("");
            setResultats([]);
            setError("");
          }}
        >
          Réinitialiser
        </button>
      </div>

      {error && <div className="ui negative message">{error}</div>}

      {/* Affichage des résultats de la recherche si ils existent */}
      <h2>Liste des produits:</h2>

      {resultats.length > 0 && (
        <h3 className="product-count">
          {resultats.length === 50
            ? "Plus de 50 produits trouvés. Seuls les 50 premiers avec nom, marque et image sont affichés."
            : `Il y a ${resultats.length} produits trouvés. Seuls ceux avec nom, marque et image sont affichés.`}
        </h3>
      )}

      <div className="products-grid">
        {resultats.length > 0 ? renderResultats() : undefined}
      </div>
    </Container>
  );
};
export default Recherche;
