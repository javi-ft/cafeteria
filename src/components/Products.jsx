import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="product-card">
      {/* ... otros elementos del producto ... */}
      <button 
        onClick={handleAddToCart}
        className={`add-to-cart-btn ${isAdding ? "adding" : ""}`}
        disabled={isAdding}
      >
        {isAdding ? "✓ Añadido" : "Añadir al carrito"}
      </button>
    </div>
  );
}