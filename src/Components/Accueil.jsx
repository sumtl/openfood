import { Container } from "semantic-ui-react";
import "../App.css";

// Composant Accueil
// Affiche un message de bienvenue et des informations sur le projet OpenFood

const Accueil = () => {
  return (
    <Container className="welcome-container">
      <h1>Bienvenue sur OpenFood</h1>
      <p>
        OpenFood est un site qui permet de rechercher des produits alimentaires
        et d'accéder à leurs informations nutritionnelles grâce à la base de
        données publique <strong> Open Food Facts</strong>.
      </p>
      <p>
        Vous pouvez effectuer une recherche par nom de produit, puis consulter
        les informations disponibles pour chaque résultat.
      </p>
      <p>
        Cliquez sur l'onglet <strong>Recherche</strong> dans le menu pour
        commencer.
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
