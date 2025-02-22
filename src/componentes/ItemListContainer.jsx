import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const productos = [
  { id: 1, nombre: "Turbo Garrett GT35", categoria: "turbo", precio: 500 },
  { id: 2, nombre: "Motor V8 Supercharged", categoria: "motores", precio: 10000 },
  { id: 3, nombre: "Kit Suspensión Deportiva", categoria: "suspension", precio: 1200 },
  { id: 4, nombre: "Filtro de aire K&N", categoria: "accesorios", precio: 80 },
  { id: 5, nombre: "Escape deportivo Borla", categoria: "escape", precio: 600 }
];

const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 1000);
  });
};

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductos().then((data) => {
      if (categoriaId) {
        setItems(data.filter((item) => item.categoria === categoriaId));
      } else {
        setItems(data);
      }
      setLoading(false);
    });
  }, [categoriaId]); 

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Todos los productos"}</h2>
      {loading ? <p>Encendiendo motores...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
