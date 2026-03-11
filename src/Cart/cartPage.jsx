
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartProducts from "../Cart/cartProducts";
import CartCheckout from "../Cart/cartCheckout";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    updateCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );

    updateCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    navigate("/payment", {
      state: {
        cartItems,
      },
    });
  };

  const page = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 28px 60px",
    boxSizing: "border-box",
    minHeight: "100vh",
    overflowY: "auto",
  };

  const layout = {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: "60px",
    alignItems: "start",
  };

  const productsScroll = {
    maxHeight: "80vh",
    overflowY: "auto",
    paddingRight: "10px",
  };

  return (
    <div style={page}>
      <div style={layout}>
        <div style={productsScroll}>
          <CartProducts
            cartItems={cartItems}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        </div>

        <CartCheckout cartItems={cartItems} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}