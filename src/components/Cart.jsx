import React, { useState, useEffect } from "react";
import { getCart, clearCart } from "../services/api";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleClearCart = () => {
    clearCart();
    setCart([]);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
