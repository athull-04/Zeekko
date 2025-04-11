import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api"; // Use real API
import { Link } from "react-router-dom";
import "./css/home.css";
import Header from "./Header";
import Footer from "./Footer";

const categories = ["Shirts", "Pants", "Jackets", "Dresses", "Shoes", "Accessories"];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Shirts");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts(); // Get all products
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter products by selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="homepage">
      <Header />

      <section className="hero">
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </section>

      {/* Category Section */}
      <section className="categories">
     
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="products">
  {loading ? (
    <p>Loading products...</p>
  ) : error ? (
    <p className="error">{error}</p>
  ) : filteredProducts.length === 0 ? (
    <p>No products found in this category.</p>
  ) : (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product._id} className="product-card">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h4>{product.name}</h4>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Rs. {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )}
</section>


      <Footer />
    </div>
  );
};

export default HomePage;
