import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span style={{ marginLeft: '0.5rem' }}>3</span>
      </div>
    );
  };

export default CartWidget;
