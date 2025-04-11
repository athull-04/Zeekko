import axios from "axios";

const API_URL = "https://bzeekko.onrender.com/api";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://bzeekko.onrender.com/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
