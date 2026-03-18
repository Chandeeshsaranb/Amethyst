

import React from "react";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function CartCheckout({ cartItems, onCheckout }) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        position: "sticky",
        top: "20px",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "20px" }}>Order Summary</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        <span>Subtotal</span>
        <span>{formatINR(subtotal)}</span>
      </div>

      <button
        onClick={onCheckout}
        style={{
          width: "100%",
          background: "#8a4aa2",
          color: "#fff",
          border: "none",
          padding: "14px",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: "700",
          cursor: "pointer",
          marginTop: "16px",
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
}