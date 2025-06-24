import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import './Home.css'; // Archivo CSS específico para la página de inicio

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga asíncrona
    const timer = setTimeout(() => {
      const featured = products.filter(product => product.isFeatured);
      setFeaturedProducts(featured);
      setLoading(false);
    }, 800); // Pequeño delay para mejor experiencia de carga

    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Cargando nuestros deliciosos productos...</p>
    </div>
  );

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a Frynha</h1>
          <p className="hero-slogan">"El auténtico sabor de la tradición horneada"</p>
          <Link to="/menu" className="cta-button">Descubre nuestro menú completo</Link>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Nuestros Productos Destacados</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}