// src/components/CartModal.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";
// Agrega al inicio de CartModal.jsx:
import './CartModal.css'; // Ajusta la ruta según tu estructura

export default function CartModal({ isOpen, onClose }) {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    try {
      // Aquí iría la integración con tu API de pagos
      // Ejemplo con MercadoPago, PayPal o tu propia API
      const response = await fetch("/api/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          customer: customerInfo,
          paymentMethod,
          total: cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setPaymentSuccess(true);
        clearCart();
      } else {
        alert("Error en el pago: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al procesar el pago");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  if (paymentSuccess) {
    return (
      <div className="cart-modal-unique">
        <h2>¡Pago Exitoso!</h2>
        <p>Gracias por tu compra. Hemos enviado un correo con los detalles.</p>
        <button onClick={onClose} className="close-btn">Cerrar</button>
      </div>
    );
  }

  return (
    <div className="cart-modal-unique">
      <h2>Tu Carrito</h2>
      <button onClick={onClose} className="close-btn">×</button>
      
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <span>{item.name}</span>
                  <span>S/ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          
          <div className="cart-total">
            <span>Total:</span>
            <span>S/ {cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
          </div>

          {/* Sección de información del cliente */}
          <div className="customer-info">
            <h3>Información de Contacto</h3>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={customerInfo.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={customerInfo.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={customerInfo.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección de entrega"
              value={customerInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Sección de métodos de pago */}
          <div className="payment-methods">
            <h3>Método de Pago</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              Efectivo al recibir
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={paymentMethod === "credit_card"}
                onChange={() => setPaymentMethod("credit_card")}
              />
              Tarjeta de crédito/débito
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>
          
          <button 
            className="checkout-btn" 
            onClick={handleCheckout}
            disabled={!paymentMethod || isProcessing || !customerInfo.name || !customerInfo.email}
          >
            {isProcessing ? "Procesando..." : "Pagar Ahora"}
          </button>
        </>
      )}
    </div>
  );
}