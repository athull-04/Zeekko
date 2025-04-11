import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useSearch } from "../components/SearchContext"; // Import the useSearch hook
import "./css/product.css";
import Header from "./Header";
import Footer from "./Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { searchQuery } = useSearch(); // Get search query from context

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      console.log("Fetched products:", data); // Check fetched data
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h1>Clothing Store</h1>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products available matching your search.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>Category: {product.category}</p>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
