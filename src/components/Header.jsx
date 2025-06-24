// src/components/Header.jsx
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./Header.css";
import logo from '../assets/logos.jpeg'; // Asegúrate de que la imagen existe en esa ruta

export default function Header({ onLoginClick = () => {}, onCartClick = () => {}, cartCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo y nombre */}
        <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-content">
            <img src={logo} alt="Logo Frynha" className="logo-image" />
            <span className="logo-text">Frynha</span>
          </div>
        </Link>

        {/* Botón menú móvil */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menú navegación */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menú</Link>
          <Link to="/nosotros" className="nav-link" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          <Link to="/contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </nav>

        {/* Acciones: Login y carrito */}
        <div className="header-actions">
          <button
            onClick={() => {
              onLoginClick();
              setIsMenuOpen(false);
            }}
            className="auth-btn"
          >
            <FaUser className="icon" />
            <span>Ingresar</span>
          </button>

          <button
            onClick={() => {
              onCartClick();
              setIsMenuOpen(false);
            }}
            className="cart-btn"
          >
            <FaShoppingCart className="icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
