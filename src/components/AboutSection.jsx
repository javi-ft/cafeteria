import React from 'react';
import CoffeeBeanIcon from '../assets/coffee-bean-icon.svg'; // Asegúrate de que estos archivos existen
import BaristaIcon from '../assets/barista-icon.svg'; // y tienen contenido SVG válido

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">Sobre Nosotros</h2>
      <div className="about-container">
        <div className="about-card">
          <div className="icon-container">
            <img 
              src={CoffeeBeanIcon} 
              alt="Granos de café" 
              className="about-icon"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback-coffee-icon.png';
                console.error('Error al cargar el ícono de café');
              }}
            />
          </div>
          <h3 className="about-card-title">Misión</h3>
          <p className="about-card-text">
            Ofrecer café de origen sostenible con experiencias que conecten a las personas.
          </p>
        </div>

        <div className="about-card">
          <div className="icon-container">
            <img 
              src={BaristaIcon} 
              alt="Barista preparando café" 
              className="about-icon"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback-barista-icon.png';
                console.error('Error al cargar el ícono de barista');
              }}
            />
          </div>
          <h3 className="about-card-title">Visión</h3>
          <p className="about-card-text">
            Ser reconocidos como la cafetería líder en innovación y tradición para 2025.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;