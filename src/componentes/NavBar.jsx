import React from 'react';
import { Link } from 'react-router-dom';
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
      {/* Logo con enlace a Home */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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
        </Link>
      </div>

      {/* Menú de navegación con enlaces React Router */}
      <div>
        <Link to="/" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Inicio
        </Link>
        <Link to="/categoria/motores" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Motores
        </Link>
        <Link to="/categoria/turbo" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Turbos
        </Link>
        <Link to="/categoria/suspension" style={{ margin: '0 1rem', textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>
          Suspensión
        </Link>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
