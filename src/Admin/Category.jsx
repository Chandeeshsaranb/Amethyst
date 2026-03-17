import React from "react";

export default function Category({
  categories = [],          // [{ id, name, slug, image, description, stock }]
  setShowAddCategoryModal,
  confirmDeleteCategory,    // called with category.id
}) {
  const pageWrap = { width: "100%", maxWidth: "1300px" };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "12px",
  };

  const title    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
  const subTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

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
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  };

  const card = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "14px",
    padding: "20px 22px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const cardTop = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  };

  const cardLeft = { display: "flex", alignItems: "center", gap: "14px", minWidth: 0 };

  const catImage = {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    objectFit: "cover",
    border: "1px solid #e5dced",
    flexShrink: 0,
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

  const cardSlug = {
    fontSize: "12px",
    color: "#999",
    marginTop: "2px",
  };

  const cardDesc = {
    fontSize: "13px",
    color: "#555",
    lineHeight: "1.5",
    margin: 0,
  };

  const cardMeta = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    paddingTop: "8px",
    borderTop: "1px solid #f0e8f6",
  };

  const metaItem = {
    fontSize: "12px",
    color: "#777",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const stockBadge = (stock) => ({
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 8px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    background: stock > 0 ? "#eaf8ee" : "#fff0f0",
    color: stock > 0 ? "#1f8b4c" : "#c0392b",
  });

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
      <div style={header}>
        <div>
          <h1 style={title}>Categories</h1>
          <div style={subTitle}>Manage product categories</div>
        </div>
        <button type="button" style={addButton} onClick={() => setShowAddCategoryModal(true)}>
          + Add Category
        </button>
      </div>

      {categories.length > 0 ? (
        <div style={grid}>
          {categories.map((cat) => (
            <div key={cat.id} style={card}>
              {/* ── Top row: image/icon + name + delete ── */}
              <div style={cardTop}>
                <div style={cardLeft}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} style={catImage} />
                  ) : (
                    <div style={iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f3f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                      </svg>
                    </div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p style={cardName}>{cat.name}</p>
                    {cat.slug && <div style={cardSlug}>/{cat.slug}</div>}
                  </div>
                </div>

                <button
                  type="button"
                  style={deleteBtn}
                  title="Remove category"
                  onClick={() => confirmDeleteCategory(cat.id)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6"/><path d="M14 11v6"/>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                </button>
              </div>

              {/* ── Description ── */}
              {cat.description && (
                <p style={cardDesc}>{cat.description}</p>
              )}

              {/* ── Meta row: stock ── */}
              <div style={cardMeta}>
                <div style={metaItem}>
                  <span>Stock:</span>
                  <span style={stockBadge(cat.stock ?? 0)}>
                    {cat.stock != null ? cat.stock : "—"}
                  </span>
                </div>
              </div>
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
