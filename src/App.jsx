import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Accueil from "./Components/Accueil";
import Recherche from "./Components/Recherche";
import Produit from "./Components/Produit";
import Page404 from "./Components/Page404";
import "./App.css"; // Import CSS for styling

// Composant principal de l'application

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Open Food</h1>

        {/* Menu de Navigation avec les liens vers les differentes pages */}
        <Menu>
          {/* Lien vers la page d'accueil */}
          <Menu.Item
            as={NavLink}
            to="/"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "red" } : {}
            }
          >
            Accueil
          </Menu.Item>

          {/* Lien vers la page de recherche  */}
          <Menu.Item
            as={NavLink}
            to="/recherche"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "red" } : {}
            }
          >
            Recherche
          </Menu.Item>

          {/* Lien vers la page de produit  */}
          <Menu.Item
            as={NavLink}
            to="/produit"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "red" } : {}
            }
          >
            Produit
          </Menu.Item>
        </Menu>
      </header>

      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Accueil />} />

        {/* Route pour la page de recherche */}
        <Route path="/recherche" element={<Recherche />} />

        {/* Route pour la page de produit sans paramètre : affiche un message d'invitation à utiliser la page de recherche  */}
        <Route path="/produit" element={<Produit />} />
        
        {/* Route pour la page de produit avec code en paramètre : affiche les informations du produit */}
        <Route path="/produit/:code" element={<Produit />} />

        {/* Route pour toute URL inconnue */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
