// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from './context/CartContext';
import { CartProvider } from "./context/CartContext";
import Header from './components/Header';
import ModalAuth from './components/ModalAuth';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import CartModal from './components/CartModal';

import './App.css';

export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header
        onLoginClick={() => setShowLoginModal(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <ModalAuth
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
  function App() {
    return (
      <CartProvider>
        {/* Tus rutas y componentes */}
      </CartProvider>
    );
  }
}
