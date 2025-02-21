import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>No hay productos en esta categoría</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <Link to={`/producto/${item.id}`}>Ver detalles</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
