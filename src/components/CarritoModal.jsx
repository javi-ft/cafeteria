export default function CarritoModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    return (
      <div className="modal">
        <h2>Carrito de Compras</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
  }