import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "", // ✅ Add this
  });
  

  const [products, setProducts] = useState([]); // New state for storing products
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  if (!token) {
    // If no token is found, redirect to the login page
    navigate("/admin-login");
    return null; // Return null to prevent the component from rendering
  }

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data); // Set the products state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [token]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend to add the product
      const response = await axios.post(
        "http://localhost:5000/api/products", // Your backend API endpoint
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token to authenticate the admin
          },
        }
      );
      alert("Product added successfully!");
      setProduct({ name: "", description: "", price: "", image: "", category: "" });
      const updatedResponse = await axios.get("http://localhost:5000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(updatedResponse.data);
    } catch (error) {
      alert("Error adding product.");
    }
  };

  const deleteProduct = async (productId) => {
    try {
      // Send DELETE request to backend to delete the product
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product deleted successfully!");
      // After deletion, fetch the updated list of products
      const updatedResponse = await axios.get("http://localhost:5000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(updatedResponse.data);
    } catch (error) {
      alert("Error deleting product.");
    }
  };

  return (
    <div>
      <h2>Admin Panel - Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="Jackets">Jackets</option>
          <option value="Dresses">Dresses</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>

        <button type="submit">Add Product</button>
      </form>

      <h2>Existing Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} width="100" />
            <button onClick={() => deleteProduct(product._id)}>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
