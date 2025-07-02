import { Container, Label, Input } from "semantic-ui-react";

const Recherche = () => {
  return (
    <Container>
      <h1>Recherche de produits</h1>
      <div className="search-form">
        <Label pointing="right">Nom du produit:</Label>
        <Input placeholder="Nom du produit" />
        <button className="ui primary button" >Rechercher les produits</button>
      </div>
      <h2>Liste des produits:</h2>
    </Container>
  );
};
export default Recherche;
