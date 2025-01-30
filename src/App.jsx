import React from 'react';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <div>
      {/* Mi Nav BAr */}
      <NavBar />
      
      {/* Contenido */}
      <ItemListContainer mensaje="¡Bienvenido a Torettos Shop - partes para tu auto" />
    </div>
  );
}

export default App;
