import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      addToCart(product);
      setIsAdded(true);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={`${process.env.PUBLIC_URL}/images/${product.image}`}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
            e.target.onerror = null;
          }}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </div>

      <div className="product-footer">
        <span className="product-price">S/ {product.price.toFixed(2)}</span>
        
        <motion.button
          onClick={handleAddToCart}
          className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
          disabled={isAnimating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={false}
        >
          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="btn-content"
              >
                <FaCheck className="icon" /> Añadido!
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="btn-content"
              >
                <FaShoppingCart className="icon" /> Añadir
              </motion.span>
            )}
          </AnimatePresence>
          
          {isAnimating && (
            <motion.span 
              className="cart-pulse"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          )}
        </motion.button>
      </div>
    </div>
  );
}