import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación siempre visible */}
      <NavBar />

      {/* Definimos las rutas */}
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a Torettos Shop - partes para tu auto!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer mensaje="Filtrando por categoría" />} />
        <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
