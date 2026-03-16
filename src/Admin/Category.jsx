import React from "react";

export default function Category({
  categories = [],
  setShowAddCategoryModal,
  confirmDeleteCategory,
}) {
  const pageWrap = {
    width: "100%",
    maxWidth: "1300px",
  };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "12px",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const subTitle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "6px",
  };

  const addButton = {
    background: "#6f3f8f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "11px 18px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  };

  const card = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "14px",
    padding: "20px 22px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  };

  const cardLeft = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    minWidth: 0,
  };

  const iconBox = {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "#f3e9fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const cardName = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#2b2b2b",
    margin: 0,
    wordBreak: "break-word",
  };

  const deleteBtn = {
    background: "#fff1f1",
    color: "#b33939",
    border: "1px solid #f0c7c7",
    borderRadius: "8px",
    width: "34px",
    height: "34px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    padding: 0,
  };

  const emptyBox = {
    background: "#fff",
    border: "1px dashed #d9c8e7",
    borderRadius: "16px",
    padding: "40px 24px",
    textAlign: "center",
    color: "#666",
    fontSize: "15px",
  };

  return (
    <div style={pageWrap}>
      {/* Header */}
      <div style={header}>
        <div>
          <h1 style={title}>Categories</h1>
          <div style={subTitle}>Manage product categories</div>
        </div>
        <button type="button" style={addButton} onClick={() => setShowAddCategoryModal(true)}>
          + Add Category
        </button>
      </div>

      {/* Cards */}
      {categories.length > 0 ? (
        <div style={grid}>
          {categories.map((cat) => (
            <div key={cat} style={card}>
              <div style={cardLeft}>
                <div style={iconBox}>
                  {/* Tag icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f3f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                </div>
                <p style={cardName}>{cat}</p>
              </div>

              <button
                type="button"
                style={deleteBtn}
                title="Remove category"
                onClick={() => confirmDeleteCategory(cat)}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                  <path d="M10 11v6"/><path d="M14 11v6"/>
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={emptyBox}>
          No categories added yet. Click <strong>+ Add Category</strong> to create your first one.
        </div>
      )}
    </div>
  );
}
