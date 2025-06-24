// src/pages/Menu.jsx
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProducts = activeCategory === "todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="menu-page">
      <h1>Menú Completo</h1>
      
      <div className="category-filters">
        <button onClick={() => setActiveCategory("todos")}>Todos</button>
        <button onClick={() => setActiveCategory("panadería")}>Panadería</button>
        <button onClick={() => setActiveCategory("bebidas")}>Bebidas</button>
        <button onClick={() => setActiveCategory("pastelería")}>Pastelería</button>
        <button onClick={() => setActiveCategory("desayunos")}>Desayunos</button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}