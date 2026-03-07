import React from "react";
import { useNavigate } from "react-router-dom";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function MainPage({ title, products }) {
  const navigate = useNavigate();

  const wrapper = {
    flex: 1,
    padding: "20px 24px",
    boxSizing: "border-box",
    background: "#fff",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "500",
    marginBottom: "20px",
    color: "#222",
  };

  const countStyle = {
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px 24px",
  };

  const card = {
    textAlign: "center",
    cursor: "pointer",
  };

  const imageWrap = {
    width: "100%",
    aspectRatio: "1 / 1",
    background: "#f5f5f5",
    overflow: "hidden",
    marginBottom: "12px",
  };

  const image = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const name = {
    fontSize: "16px",
    color: "#333",
    marginBottom: "6px",
  };

  const price = {
    fontSize: "15px",
    color: "#666",
  };

  const emptyState = {
    fontSize: "16px",
    color: "#666",
    padding: "40px 0",
  };

  return (
    <div style={wrapper}>
      <div style={titleStyle}>{title}</div>
      <div style={countStyle}>{products.length} items</div>

      {products.length === 0 ? (
        <div style={emptyState}>No products found.</div>
      ) : (
        <div style={grid}>
          {products.map((product) => (
            <div
              key={product.id}
              style={card}
              onClick={() => navigate(`/product/${product.slug}`)}
            >
              <div style={imageWrap}>
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  style={image}
                />
              </div>
              <div style={name}>{product.name}</div>
              <div style={price}>{formatINR(product.price)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}