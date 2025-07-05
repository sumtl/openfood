import { Container } from "semantic-ui-react";
import "../App.css";

// Composant Accueil
// Affiche un message de bienvenue et des informations sur le projet OpenFood

const Accueil = () => {
  return (
    <Container className="welcome-container">
      <h1>Bienvenue sur OpenFood</h1>
      <p>
        Explorez les informations nutritionnelles des produits alimentaires
        grâce à la base de données <strong>Open Food Facts</strong>. Recherchez
        par nom, marque ou mot-clé via notre interface.
      </p>
      <p>
        Grâce à notre moteur de <strong>recherche en texte intégral</strong>,
        vous pouvez trouver des produits par nom, marque, catégorie, pays ou
        mot-clé. 
      </p>
      <p>
        Commencez dès maintenant en cliquant sur <strong>Recherche</strong> dans
        le menu.
      </p>
      <p>
        Ce projet a été réalisé par <strong>Wansu Wang</strong>
      </p>
      <p>
        Cliquez sur ce lien pour consulter le code source complet sur{" "}
        <a
          href="https://github.com/sumtl/openfood"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          <strong>GitHub</strong>
        </a>
        .
      </p>
    </Container>
  );
};

export default Accueil;
