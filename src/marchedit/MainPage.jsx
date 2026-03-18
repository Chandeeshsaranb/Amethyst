
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function MainPage({ products = [] }) {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState("featured");
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    switch (sortKey) {
      case "priceLow":  arr.sort((a, b) => a.price - b.price); break;
      case "priceHigh": arr.sort((a, b) => b.price - a.price); break;
      case "az":        arr.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "za":        arr.sort((a, b) => b.name.localeCompare(a.name)); break;
      case "old":       arr.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)); break;
      case "new":       arr.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)); break;
      default: break;
    }
    return arr;
  }, [products, sortKey]);

  // ── Styles ────────────────────────────────────────────────────────────────
  const wrapper = {
    flex: 1,
    padding: "32px 36px",
    boxSizing: "border-box",
    background: "#fff",
    minHeight: "100vh",
  };

  const topBar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    paddingBottom: "20px",
    borderBottom: "1px solid #ede6f4",
  };

  const resultsCount = {
    fontSize: "14px",
    letterSpacing: "2px",
    fontWeight: "600",
    color: "#555",
    textTransform: "uppercase",
  };

  const sortWrap = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const sortLabel = {
    fontSize: "13px",
    letterSpacing: "2px",
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#666",
    whiteSpace: "nowrap",
  };

  const sortBox = {
    border: "1px solid #cfa9dc",
    padding: "9px 14px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    background: "#fff",
    color: "#222",
    outline: "none",
    letterSpacing: "0.5px",
    minWidth: "210px",
    appearance: "none",
    WebkitAppearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23999'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: "32px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px 28px",
  };

  const card = (slug) => ({
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    transform: hoveredSlug === slug ? "translateY(-3px)" : "translateY(0)",
  });

  const imageWrap = {
    width: "100%",
    aspectRatio: "1 / 1",
    background: "#f5f5f5",
    overflow: "hidden",
    marginBottom: "14px",
    position: "relative",
    borderRadius: "10px",
  };

  const image = (slug) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
    transform: hoveredSlug === slug ? "scale(1.04)" : "scale(1)",
  });

  const nameStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111",
    marginBottom: "6px",
    letterSpacing: "0.3px",
  };

  const priceStyle = {
    fontSize: "15px",
    fontWeight: "500",
    color: "#666",
    letterSpacing: "0.3px",
  };

  const outOfStockTag = {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "rgba(0,0,0,0.65)",
    color: "#fff",
    padding: "5px 10px",
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "600",
  };

  const emptyWrap = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "40vh",
    gap: "14px",
  };

  const emptyIcon = {
    fontSize: "36px",
    color: "#ddd",
  };

  const emptyTitle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#666",
    letterSpacing: "0.5px",
  };

  const emptySub = {
    fontSize: "14px",
    fontWeight: "400",
    color: "#aaa",
    letterSpacing: "0.3px",
  };

  return (
    <div style={wrapper}>

      {/* ── Top bar ── */}
      <div style={topBar}>
        <span style={resultsCount}>
          {sortedProducts.length} {sortedProducts.length === 1 ? "item" : "items"}
        </span>

        <div style={sortWrap}>
          <span style={sortLabel}>Sort by</span>
          <select
            style={sortBox}
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="az">Alphabetically, A–Z</option>
            <option value="za">Alphabetically, Z–A</option>
            <option value="priceLow">Price, low to high</option>
            <option value="priceHigh">Price, high to low</option>
            <option value="old">Date, old to new</option>
            <option value="new">Date, new to old</option>
          </select>
        </div>
      </div>

      {/* ── Product grid / empty state ── */}
      {sortedProducts.length === 0 ? (
        <div style={emptyWrap}>
          <span style={emptyIcon}>◇</span>
          <span style={emptyTitle}>No products found</span>
          <span style={emptySub}>Try adjusting your filters</span>
        </div>
      ) : (
        <div style={grid}>
          {sortedProducts.map((product) => (
            <div
              key={product.slug}
              style={card(product.slug)}
              onClick={() => navigate(`/product/${product.slug}`, { state: product })}
              onMouseEnter={() => setHoveredSlug(product.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <div style={imageWrap}>
                {product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={image(product.slug)}
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", background: "#f0eaf6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "28px", color: "#ccc" }}>◇</span>
                  </div>
                )}

                {product.stock === 0 && (
                  <div style={outOfStockTag}>Out of Stock</div>
                )}
              </div>

              <div style={nameStyle}>{product.name}</div>
              <div style={priceStyle}>{formatINR(product.price)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
