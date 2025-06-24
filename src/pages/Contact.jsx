import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa';

import './ContactPage.css';

export default function Contact() {
  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Visítanos o Contáctanos</h1>
          <p>Estamos aquí para responder tus preguntas y recibir tus comentarios</p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="contact-info">
        <div className="info-container">
          
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Dirección</h3>
            <p>Jr. Huancayo, Huancayo</p>
            <p>Ciudad Cafetalera, CP 12345</p>
          </div>

          <div className="info-card">
            <FaPhone className="info-icon" />
            <h3>Teléfono</h3>
            <p>+51 944 975 522</p>
            <p>Reservaciones: extensión 2</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Correo</h3>
            <p>jflores@frynha.com</p>
            <p>eventos@frynha.com</p>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <h3>Horario</h3>
            <p>Lunes a Viernes: 7:00 - 22:00</p>
            <p>Sábado y Domingo: 8:00 - 23:00</p>
          </div>

        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Envíanos un Mensaje</h2>
          <form className="contact-form">
            
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" placeholder="jflores@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <select id="subject" required>
                <option value="">Selecciona un tema</option>
                <option value="reservacion">Reservación</option>
                <option value="evento">Evento Privado</option>
                <option value="prensa">Prensa</option>
                <option value="trabajo">Oportunidades de Trabajo</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>

        {/* Mapa con Google Maps */}
        <div className="map-container">
          <iframe
            title="Ubicación de Frynha"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.965646244298!2d-75.199891!3d-12.04801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzUyLjgiUzc1wrAxMSc1OS42Ilc!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="social-media">
        <h2>Síguenos en Redes Sociales</h2>
        <div className="social-icons">
          <a href="https://instagram.com/frynha" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/frynha" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/frynha" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </section>
    </div>
  );
}
