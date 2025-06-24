import React from 'react';
import { FaCoffee, FaSeedling, FaChartLine, FaHeart, FaSmile, FaAward } from 'react-icons/fa';
import './AboutPage.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Sección Hero */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Nuestra Pasión por el Café</h1>
          <p className="hero-subtitle">Desde 2015, Frynha ha sido el refugio de los amantes del buen café en la ciudad</p>
        </div>
      </section>

      {/* Sección Historia */}
      <section className="about-history">
        <div className="history-content">
          <h2>Nuestra Historia</h2>
          <p>Frynha nació en el corazón de la ciudad como un pequeño local que buscaba rescatar las tradiciones cafetaleras. Hoy, seguimos tostando nuestros granos artesanalmente y preparando cada taza con el mismo amor del primer día.</p>
        </div>
        <div className="history-image"></div>
      </section>

      {/* Misión y Visión */}
      <section className="mission-vision">
        <div className="mission">
          <div className="icon-box">
            <FaCoffee className="section-icon" />
          </div>
          <h3>Misión</h3>
          <p>Ofrecer experiencias cafetaleras excepcionales a través de granos de origen sostenible, preparaciones artesanales y un servicio que hace sentir a cada cliente como en casa.</p>
        </div>

        <div className="vision">
          <div className="icon-box">
            <FaChartLine className="section-icon" />
          </div>
          <h3>Visión</h3>
          <p>Convertirnos en referente de la cultura cafetalera local, siendo reconocidos por nuestra calidad, innovación y compromiso con los productores de café de especialidad.</p>
        </div>
      </section>

      {/* Valores */}
      <section className="values">
        <h2 className="section-title">Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaSeedling className="value-icon" />
            <h4>Sostenibilidad</h4>
            <p>Trabajamos directamente con productores que practican agricultura responsable</p>
          </div>
          <div className="value-card">
            <FaHeart className="value-icon" />
            <h4>Pasión</h4>
            <p>Cada taza lleva nuestro amor por el arte del café bien preparado</p>
          </div>
          <div className="value-card">
            <FaSmile className="value-icon" />
            <h4>Hospitalidad</h4>
            <p>Creemos que un buen café va acompañado de una cálida sonrisa</p>
          </div>
          <div className="value-card">
            <FaAward className="value-icon" />
            <h4>Excelencia</h4>
            <p>Nos esmeramos en cada detalle para superar tus expectativas</p>
          </div>
        </div>
      </section>

      {/* Llamado a acción */}
      <section className="about-cta">
        <h2>¿Listo para vivir la experiencia Frynha?</h2>
        <button className="cta-button">Visítanos Hoy</button>
      </section>
    </div>
  );
}