import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">☕ Cafetería Frynha</div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default NavBar;
