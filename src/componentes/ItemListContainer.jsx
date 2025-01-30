import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;
