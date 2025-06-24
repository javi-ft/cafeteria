// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Horario Frynha</h3>
          <p>Lunes a Viernes: 7am - 8pm</p>
          <p>Sábado y Domingo: 8am - 6pm</p>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>contacto@frynha.com</p>
          <p>+51 944 975 522</p>
          <p>Av. Huancayo, Huancayo</p>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} <strong>Frynha</strong> - Panadería & Cafetería Artesanal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}