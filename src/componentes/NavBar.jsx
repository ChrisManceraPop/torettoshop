import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/imagenes/logoTorettos.png';

const NavBar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '40px',
            marginRight: '1rem',
          }}
        />
        <h1
          style={{
            margin: 0,
            fontSize: '1.8rem', 
            color: '#2c3e50', 
            fontFamily: '"Poppins", sans-serif', 
            fontWeight: 'bold',
          }}
        >
          Toretto's Shop
        </h1>
      </div>
      <div>
        <a href="#home" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Inicio
        </a>
        <a href="#products" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Productos
        </a>
        <a href="#about" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Sobre Toretto´s
        </a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
