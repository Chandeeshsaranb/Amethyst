import React from "react";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function CartProducts({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const container = {
    flex: 1,
  };

  const titleWrap = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const title = {
    fontSize: "42px",
    fontWeight: "400",
    marginBottom: "8px",
    color: "#1f1a17",
    letterSpacing: "1px",
  };

  const continueShopping = {
    fontSize: "14px",
    color: "#1f1a17",
    textDecoration: "underline",
    cursor: "pointer",
  };

  const itemRow = {
    display: "grid",
    gridTemplateColumns: "95px 1fr auto",
    gap: "18px",
    alignItems: "start",
    padding: "18px 0",
    borderBottom: "1px solid #c8a9d8",
  };

  const image = {
    width: "95px",
    height: "95px",
    objectFit: "cover",
    background: "#f5f5f5",
  };

  const productInfo = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const productName = {
    fontSize: "18px",
    color: "#1f1a17",
    lineHeight: "1.4",
  };

  const qtyBox = {
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid #c8a9d8",
    width: "fit-content",
    height: "34px",
  };

  const qtyBtn = {
    width: "32px",
    height: "32px",
    border: "none",
    background: "white",
    fontSize: "18px",
    cursor: "pointer",
    color: "#4b2e5f",
  };

  const qtyValue = {
    width: "34px",
    textAlign: "center",
    fontSize: "14px",
    color: "#1f1a17",
  };

  const removeBtn = {
    background: "none",
    border: "none",
    padding: 0,
    width: "fit-content",
    fontSize: "14px",
    color: "#1f1a17",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const price = {
    fontSize: "16px",
    color: "#1f1a17",
    whiteSpace: "nowrap",
    paddingTop: "4px",
  };

  return (
    <div style={container}>
      <div style={titleWrap}>
        <div style={title}>CART</div>
        <div style={continueShopping}>Continue shopping</div>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} style={itemRow}>
          <img src={item.image} alt={item.name} style={image} />

          <div style={productInfo}>
            <div style={productName}>{item.name}</div>

            <div style={qtyBox}>
              <button style={qtyBtn} onClick={() => onDecrease(item.id)}>
                −
              </button>
              <div style={qtyValue}>{item.quantity}</div>
              <button style={qtyBtn} onClick={() => onIncrease(item.id)}>
                +
              </button>
            </div>

            <button style={removeBtn} onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>

          <div style={price}>{formatINR(item.price * item.quantity)}</div>
        </div>
      ))}
    </div>
  );
}