import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const productos = [
  { id: 1, nombre: "Turbo Garrett GT35", categoria: "turbo", precio: 500, descripcion: "Turbo de alto rendimiento para autos deportivos.", stock: 5 },
  { id: 2, nombre: "Motor V8 Supercharged", categoria: "motores", precio: 10000, descripcion: "Motor V8 con supercargador, listo para la pista.", stock: 2 },
  { id: 3, nombre: "Kit Suspensión Deportiva", categoria: "suspension", precio: 1200, descripcion: "Mejora la estabilidad y agarre de tu auto.", stock: 8 },
  { id: 4, nombre: "Filtro de aire K&N", categoria: "accesorios", precio: 80, descripcion: "Filtro de aire de alto flujo para mejor rendimiento.", stock: 10 },
  { id: 5, nombre: "Escape deportivo Borla", categoria: "escape", precio: 600, descripcion: "Escape que mejora el sonido y la potencia del motor.", stock: 4 }
];

const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(id));
      resolve(producto);
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductoById(productoId).then((data) => {
      setProducto(data);
      setLoading(false);
    });
  }, [productoId]);

  const handleAddToCart = (cantidad) => {
    console.log(`Agregado al carrito: ${cantidad} unidades de ${producto.nombre}`);
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <ItemCount stock={producto.stock} inicial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
