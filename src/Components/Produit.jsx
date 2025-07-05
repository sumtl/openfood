import { Container, Image, Card, Header, List, Loader } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Produit = () => {
  // Récupération du code produit depuis les paramètres de l'URL
  const { code: produitCode } = useParams();
  // État pour stocker les informations du produit
  const [produit, setProduit] = useState(null);

  // Appel à l'API Open Food Facts pour obtenir les informations du produit
  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v1/product/${produitCode}`)
      .then((response) => response.json())
      .then((data) => {
        setProduit(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la recherche du produit : ", error);
      });
  }, [produitCode]);

  // Affichage du produit dans la console (pour le débogage)
  console.log("Code produit recherché :", produitCode);

  // Si aucun produit choisi, informez l'utilisateur de revenir à la page de recherche.
  if (!produitCode) {
    return (
      <Container className="welcome-container">
        <p>
          Aucun produit sélectionné. <br />
          Veuillez utiliser la page de recherche pour choisir un produit.
        </p>
      </Container>
    );
  }

  // Si le produit n'est pas encore chargé (ex: en attente de la réponse API), affichez un indicateur de chargement
  if (!produit) {
    return (
      <div>
        <Loader active inline="centered">
          Chargement du produit...
        </Loader>
      </div>
    );
  }
  if (produit.status !== 1) {
    return (
      <Container className="welcome-container">
        <p>
          Produit non trouvé. <br />
          Veuillez vérifier le code produit ou utiliser la page de recherche.
        </p>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "3rem" }}>
      <Card fluid>
        <Card.Content>
          {/* Titre: nom du produit */}
          <Header as="h2" className="product-title">
            {produit.product.product_name || "Nom inconnu"}
          </Header>

          {/* Images: image du produit et informations nutritionnelles */}
          <div className="product-images">
            {produit.product.image_url && (
              <div>
                <Header as="h3">Image du produit</Header>
                <Image src={produit.product.image_url} alt="Image du produit" />
              </div>
            )}
            {produit.product.image_nutrition_url && (
              <div>
                <Header as="h3">Informations nutritionnelles</Header>
                <Image
                  src={produit.product.image_nutrition_url}
                  alt="Informations nutritionnelles"
                />
              </div>
            )}
          </div>

          {/* Liste d'informations: code produit, marque, ingrédients, quantité, origines, lieu de vente, écoscore, nutriscore */}
          <List className="product-info-list">
            <List.Item>
              <strong>Code produit :</strong> {produit.product.code}
            </List.Item>
            <List.Item>
              <strong>Marque :</strong> 
              {produit.product.brands || "Non renseignée"}
            </List.Item>
            <List.Item>
              <strong>Ingrédients :</strong> 
              {produit.product.ingredients_text || "Non renseignée"}
            </List.Item>
            <List.Item>
              <strong>Quantité :</strong> 
              {produit.product.quantity || "Non renseignée"}
            </List.Item>
            <List.Item>
              <strong>Origines :</strong> 
              {produit.product.origins || "Non renseignées"}
            </List.Item>
            <List.Item>
              <strong>Lieu de vente :</strong> 
              {produit.product.purchase_places || "Non renseigné"}
            </List.Item>
            <List.Item>
              <strong>Écoscore :</strong> 
              {produit.product.ecoscore_score || "Non renseigné"}
            </List.Item>
            <List.Item>
              <strong>Nutriscore :</strong> 
              {produit.product.nutriscore_grade?.toUpperCase() ||
                "Non renseigné"}
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </Container>
  );
};
export default Produit;
