import React, { useEffect } from 'react';
import './Notificacion.css';

function Notificacion({ mensaje, cerrar }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      cerrar();
    }, 3000); // La notificación se cierra automáticamente después de 3 segundos

    return () => clearTimeout(timer);
  }, [cerrar]);

  return (
    <div className="notificacion">
      {mensaje}
    </div>
  );
}

export default Notificacion;
