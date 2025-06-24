// ContactSection.jsx
function ContactSection() {
    return (
      <section className="contact-section">
        <div className="contact-info">
          <h2>Visítanos</h2>
          <p>☕ Horario: Lunes a Domingo - 7am a 9pm</p>
          <p>📞 Teléfono: +51 944 975 522</p>
          <p>📍 Dirección: Av. San Carlos, Huancayo</p>
        </div>
  
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.789..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
  
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </section>
    );
  }