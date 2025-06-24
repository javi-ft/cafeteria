import "./ModalAuth.css"; // Asegúrate de crear este archivo

export default function ModalAuth({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Ingresar</button>
        </form>
        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
