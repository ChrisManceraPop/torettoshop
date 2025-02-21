import { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <button onClick={decrementar} disabled={cantidad <= 1}>-</button>
      <span style={{ margin: "0 10px" }}>{cantidad}</span>
      <button onClick={incrementar} disabled={cantidad >= stock}>+</button>
      <br />
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
