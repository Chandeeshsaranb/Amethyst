import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function MainPage({ products }) {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState("featured");

  const normalizedProducts = useMemo(() => {
    return (products || []).map((product) => ({
      ...product,
      name: product.name || "",
      price: Number(product.price || 0),
      images: Array.isArray(product.images) ? product.images : [],
    }));
  }, [products]);

  const sortedProducts = useMemo(() => {
    let arr = [...normalizedProducts];

    switch (sortKey) {
      case "priceLow":
        arr.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        arr.sort((a, b) => b.price - a.price);
        break;

      case "az":
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        arr.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "old":
        arr.sort(
          (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
        );
        break;

      case "new":
        arr.sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
        break;

      default:
        break;
    }

    return arr;
  }, [normalizedProducts, sortKey]);

  const wrapper = {
    flex: 1,
    padding: "20px 24px",
    boxSizing: "border-box",
    background: "#fff",
  };

  const topBar = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  };

  const sortBox = {
    border: "1px solid #000",
    padding: "10px 16px",
    fontSize: "14px",
    cursor: "pointer",
    minWidth: "220px",
    background: "#fff",
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
      <div style={topBar}>
        <select
          style={sortBox}
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="az">Alphabetically, A-Z</option>
          <option value="za">Alphabetically, Z-A</option>
          <option value="priceLow">Price, low to high</option>
          <option value="priceHigh">Price, high to low</option>
          <option value="old">Date, old to new</option>
          <option value="new">Date, new to old</option>
        </select>
      </div>

      {sortedProducts.length === 0 ? (
        <div style={emptyState}>No products found.</div>
      ) : (
        <div style={grid}>
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              style={card}
              onClick={() =>
                navigate(`/product/${product.id}`, { state: product })
              }
            >
              <div style={imageWrap}>
                {product.images.length > 0 && (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={image}
                  />
                )}
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