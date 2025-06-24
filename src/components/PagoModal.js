// src/components/PagoModal.js
import React, { useState } from 'react';

const PagoModal = ({ visible, cerrar, carrito, usuario, limpiarCarrito, notificar, pedirLogin }) => {
  const [metodo, setMetodo] = useState('');
  const [procesando, setProcesando] = useState(false);
  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  const confirmarPago = async () => {
    if (!usuario) {
      pedirLogin();
      return;
    }

    if (!metodo) {
      notificar('Selecciona un método de pago', 'error');
      return;
    }

    setProcesando(true);

    try {
      // 1. Simulación de pago (para desarrollo)
      if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay de red
        notificar('¡Pago exitoso! (modo simulación)', 'success');
        limpiarCarrito();
        cerrar();
        return;
      }

      // 2. Integración real con backend
      const response = await fetch('/api/procesar-pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${usuario.token}`
        },
        body: JSON.stringify({
          items: carrito,
          metodoPago: metodo,
          total: total,
          clienteId: usuario.id
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || 'Error en el pago');
      }

      notificar('¡Pago exitoso!', 'success');
      limpiarCarrito();
      cerrar();

      // 3. Redirección si es pago online
      if (metodo === 'tarjeta' && data.urlPago) {
        window.location.href = data.urlPago;
      }

    } catch (error) {
      console.error('Error en pago:', error);
      notificar(error.message || 'Ocurrió un error al procesar el pago', 'error');
    } finally {
      setProcesando(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal pago-modal">
        <button className="cerrar-modal" onClick={cerrar}>&times;</button>
        
        <h2>Confirmar Pago</h2>
        
        <div className="resumen-pago">
          <h3>Resumen de Compra</h3>
          {carrito.map(item => (
            <div key={item.id} className="item-resumen">
              <span>{item.nombre} x {item.cantidad}</span>
              <span>S/ {(item.precio * item.cantidad).toFixed(2)}</span>
            </div>
          ))}
          <div className="total-resumen">
            <strong>Total:</strong>
            <strong>S/ {total.toFixed(2)}</strong>
          </div>
        </div>

        <div className="metodos-pago">
          <h3>Método de Pago</h3>
          
          <div className={`opcion-pago ${metodo === 'tarjeta' ? 'seleccionado' : ''}`}>
            <label>
              <input 
                type="radio" 
                name="metodo" 
                value="tarjeta" 
                checked={metodo === 'tarjeta'}
                onChange={() => setMetodo('tarjeta')} 
              />
              <div className="icono-texto">
                <i className="fas fa-credit-card"></i>
                <span>Tarjeta (MercadoPago)</span>
              </div>
            </label>
          </div>

          <div className={`opcion-pago ${metodo === 'efectivo' ? 'seleccionado' : ''}`}>
            <label>
              <input 
                type="radio" 
                name="metodo" 
                value="efectivo" 
                checked={metodo === 'efectivo'}
                onChange={() => setMetodo('efectivo')} 
              />
              <div className="icono-texto">
                <i className="fas fa-money-bill-wave"></i>
                <span>Efectivo al recibir</span>
              </div>
            </label>
          </div>
        </div>

        <button 
          className="boton-confirmar" 
          onClick={confirmarPago}
          disabled={procesando}
        >
          {procesando ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Procesando...
            </>
          ) : (
            'Confirmar Pago'
          )}
        </button>

        {metodo === 'tarjeta' && (
          <div className="info-tarjeta">
            <p>Serás redirigido a MercadoPago para completar el pago</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagoModal;