import React from "react";

export default function Products({
  storedMetals = [],
  metalPurities = {},
  categories = [],
  productFilterType,
  setProductFilterType,
  categoryFilter,
  setCategoryFilter,
  showAddProductForm,
  setShowAddProductForm,
  formData,
  handleInputChange,
  handleSubmit,
  fileInputRef,
  handleImageChange,
  previews = [],
  handleDragStart,
  handleDragEnter,
  handleDrop,
  handleDragEnd,
  removeImage,
  filteredProducts = [],
  confirmDeleteProduct,
  setFormData,
  setIsEditMode,
  setPreviews,
}) {
  const heading = { fontSize: "28px", fontWeight: "700", marginBottom: "24px", color: "#222" };
  const productsPageWrap = { width: "100%", maxWidth: "1300px" };
  const productsHeader = { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "24px", flexWrap: "wrap" };
  const productsTitle = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
  const productsSubTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };
  const productsActionRow = { display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" };
  const filterSelect = { height: "44px", minWidth: "180px", border: "1px solid #ddd", borderRadius: "8px", padding: "0 12px", fontSize: "14px", outline: "none", background: "#fff", color: "#333", boxSizing: "border-box" };
  const addButton = { background: "#6f3f8f", color: "#fff", border: "none", borderRadius: "8px", padding: "11px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" };
  const addProductFormCard = { background: "#fff", border: "1px solid #e7dff0", borderRadius: "16px", padding: "28px", boxShadow: "0 10px 28px rgba(0,0,0,0.06)", marginBottom: "24px" };
  const formHeaderRow = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "8px" };
  const closeButton = { width: "38px", height: "38px", borderRadius: "50%", border: "none", background: "#f3e9fb", color: "#5d3d75", fontSize: "18px", fontWeight: "700", cursor: "pointer", flexShrink: 0 };
  const grid = { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px", marginBottom: "26px" };
  const detailGrid = { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px", marginBottom: "26px" };
  const fieldWrap = { display: "flex", flexDirection: "column" };
  const label = { fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#333" };
  const input = { height: "44px", border: "1px solid #ddd", borderRadius: "8px", padding: "0 12px", fontSize: "14px", outline: "none", boxSizing: "border-box", width: "100%", background: "#fff" };
  const textarea = { minHeight: "110px", border: "1px solid #ddd", borderRadius: "8px", padding: "12px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "Arial, Helvetica, sans-serif", boxSizing: "border-box", width: "100%" };
  const descriptionWrap = { display: "flex", flexDirection: "column", marginBottom: "26px" };
  const sectionTitle = { fontSize: "18px", fontWeight: "700", margin: "24px 0 14px", color: "#2b2b2b" };
  const fileInput = { marginTop: "8px", marginBottom: "16px" };
  const hintText = { fontSize: "13px", color: "#666", marginTop: "-6px", marginBottom: "10px" };
  const previewWrap = { marginTop: "10px", marginBottom: "20px" };
  const previewGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "16px" };
  const previewCard = { border: "1px solid #ddd", borderRadius: "10px", padding: "10px", background: "#fff", cursor: "grab" };
  const previewImage = { width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px", border: "1px solid #ddd", display: "block", marginBottom: "10px" };
  const previewOrder = { fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "#444" };
  const actionRow = { display: "flex", gap: "8px", flexWrap: "wrap" };
  const removeButton = { border: "none", background: "#b33939", color: "#fff", borderRadius: "6px", padding: "8px 10px", cursor: "pointer", fontSize: "12px", fontWeight: "700" };
  const submitButton = { marginTop: "10px", background: "#6f3f8f", color: "#fff", border: "none", borderRadius: "8px", padding: "13px 24px", fontSize: "15px", fontWeight: "700", cursor: "pointer" };
  const tableWrap = { width: "100%", overflowX: "auto", background: "#fff", border: "1px solid #e7dff0", borderRadius: "16px", boxShadow: "0 8px 22px rgba(0,0,0,0.05)" };
  const table = { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" };

  const thBase = { fontSize: "13px", fontWeight: "700", color: "#666", background: "#faf7fd", padding: "14px 16px", borderBottom: "1px solid #eadff3", whiteSpace: "nowrap", verticalAlign: "middle" };
  const tdBase = { padding: "14px 16px", borderBottom: "1px solid #f0e8f6", verticalAlign: "middle", fontSize: "14px", color: "#333" };

  const thProduct     = { ...thBase, textAlign: "left",   width: "20%" };
  const thDescription = { ...thBase, textAlign: "left",   width: "33%" };
  const thStock       = { ...thBase, textAlign: "center", width: "11%" };
  const thPrice       = { ...thBase, textAlign: "center", width: "10%" };
  const thCategory    = { ...thBase, textAlign: "center", width: "9%"  };
  const thPurity      = { ...thBase, textAlign: "center", width: "8%"  };
  const thActions     = { ...thBase, textAlign: "center", width: "9%"  };

  const tdProduct     = { ...tdBase, textAlign: "left"   };
  const tdDescription = { ...tdBase, textAlign: "left"   };
  const tdStock       = { ...tdBase, textAlign: "center" };
  const tdPrice       = { ...tdBase, textAlign: "center" };
  const tdCategory    = { ...tdBase, textAlign: "center" };
  const tdPurity      = { ...tdBase, textAlign: "center" };
  const tdActions     = { ...tdBase, textAlign: "center" };

  const productCell             = { display: "flex", alignItems: "center", gap: "8px" };
  const productThumb            = { width: "40px", height: "40px", borderRadius: "8px", objectFit: "cover", border: "1px solid #e5dced", background: "#f3e9fb", flexShrink: 0, display: "block" };
  const productThumbPlaceholder = { width: "40px", height: "40px", borderRadius: "8px", border: "1px solid #e5dced", background: "#f3e9fb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#8b6aa3", fontWeight: "700", flexShrink: 0, textAlign: "center" };
  const productName             = { margin: 0, fontSize: "14px", fontWeight: "700", color: "#2b2b2b", lineHeight: "1.4", wordBreak: "break-word" };
  const productSubText          = { fontSize: "12px", color: "#777", marginTop: "4px", wordBreak: "break-word" };
  const descriptionCell         = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#555", fontSize: "13px" };
  const priceMain               = { fontSize: "15px", fontWeight: "700", color: "#6f3f8f", whiteSpace: "nowrap" };
  const stockPillBase           = { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "5px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap" };
  const stockPill               = { ...stockPillBase, background: "#eaf8ee", color: "#1f8b4c" };
  const outOfStockPill          = { ...stockPillBase, background: "#fff0f0", color: "#c0392b" };
  const editButton              = { background: "#f3edfb", color: "#6f3f8f", border: "1px solid #ddd1ee", borderRadius: "8px", width: "34px", height: "34px", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, padding: 0 };
  const deleteButton            = { background: "#fff1f1", color: "#b33939", border: "1px solid #f0c7c7", borderRadius: "8px", width: "34px", height: "34px", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, padding: 0 };
  const actionsContainer        = { display: "flex", gap: "8px", flexWrap: "nowrap", justifyContent: "center", alignItems: "center" };
  const noProductsBox           = { background: "#fff", border: "1px dashed #d9c8e7", borderRadius: "16px", padding: "40px 24px", textAlign: "center", color: "#666", fontSize: "15px" };
  const imageLimitBadge         = { display: "inline-block", background: previews.length >= 4 ? "#fff0f0" : "#f3e9fb", color: previews.length >= 4 ? "#b33939" : "#5d3d75", border: `1px solid ${previews.length >= 4 ? "#f0c7c7" : "#d8c9e4"}`, borderRadius: "6px", padding: "4px 10px", fontSize: "12px", fontWeight: "700", marginBottom: "10px" };

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleEditClick = (product) => {
    setFormData({
      id:                 product.id,       // API id for PUT
      productName:        product.name || "",
      metalType:          product.metalType || "",
      category:           product.category || "",
      productDescription: product.description || "",
      purity:             product.purity || "",
      weight:             product.weight || "",
      pricePerGram:       product.pricePerGram || "",
      makingCharges:      product.makingCharges || "",
      offerPrice:         product.offerPrice || "",
      totalPrice:         product.totalPrice || "",
      stock:              product.stock || "",
    });
    setIsEditMode(true);
    if (product.images && product.images.length > 0) {
      setPreviews(product.images.map((src, index) => ({
        id:   `existing-${index}-${Date.now()}`,
        src,
        name: `Image ${index + 1}`,
        file: null, // existing images have no File object
      })));
    }
    setShowAddProductForm(true);
  };

  const emptyForm = {
    id: null, productName: "", metalType: "", category: "", productDescription: "",
    purity: "", weight: "", pricePerGram: "", makingCharges: "",
    offerPrice: "", totalPrice: "", stock: "",
  };

  const handleCloseForm = () => {
    setShowAddProductForm(false);
    setIsEditMode(false);
    setFormData(emptyForm);
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAddNewClick = () => {
    setFormData(emptyForm);
    setIsEditMode(false);
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setShowAddProductForm((prev) => !prev);
  };

  const truncateDescription = (desc, maxLength = 150) => {
    if (!desc) return "-";
    return desc.length <= maxLength ? desc : desc.substring(0, maxLength) + "...";
  };

  return (
    <div style={productsPageWrap}>

      {/* ── Header ── */}
      <div style={productsHeader}>
        <div>
          <h1 style={productsTitle}>Products</h1>
          <div style={productsSubTitle}>Manage and view all uploaded products</div>
        </div>

        <div style={productsActionRow}>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={filterSelect}>
            <option value="all">All Categories</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <select value={productFilterType} onChange={(e) => setProductFilterType(e.target.value)} style={filterSelect}>
            <option value="all">All Products</option>
            {storedMetals.map((metal) => <option key={metal} value={metal}>{metal}</option>)}
          </select>

          <button type="button" style={addButton} onClick={handleAddNewClick}>
            {showAddProductForm ? "Close Form" : "+ Add Product"}
          </button>
        </div>
      </div>

      {/* ── Add / Edit Form ── */}
      {showAddProductForm ? (
        <div style={addProductFormCard}>
          <div style={formHeaderRow}>
            <div style={heading}>{formData.id ? "Edit Product" : "Add Product"}</div>
            <button type="button" style={closeButton} onClick={handleCloseForm}>✕</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={grid}>
              <div style={fieldWrap}>
                <label style={label}>Product Name</label>
                <input type="text" name="productName" value={formData.productName || ""} onChange={handleInputChange} placeholder="Enter product name" style={input} />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Metal Type</label>
                <select name="metalType" value={formData.metalType || ""} onChange={handleInputChange} style={input}>
                  <option value="">Select metal type</option>
                  {storedMetals.map((metal) => <option key={metal} value={metal}>{metal}</option>)}
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>Category</label>
                <select name="category" value={formData.category || ""} onChange={handleInputChange} style={input}>
                  <option value="">Select category</option>
                  {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>

            <div style={descriptionWrap}>
              <label style={label}>Product Description</label>
              <textarea name="productDescription" value={formData.productDescription || ""} onChange={handleInputChange} placeholder="Enter product description" style={textarea} />
            </div>

            {formData.metalType && (
              <div style={detailGrid}>
                <div style={fieldWrap}>
                  <label style={label}>Purity</label>
                  <select name="purity" value={formData.purity || ""} onChange={handleInputChange} style={input}>
                    <option value="">Select purity</option>
                    {(metalPurities[formData.metalType] || []).map((p) => {
                      const pName = p?.name ?? p;
                      const pKey  = p?.id  ?? pName;
                      return <option key={pKey} value={pName}>{pName}</option>;
                    })}
                  </select>
                </div>
                <div style={fieldWrap}>
                  <label style={label}>Weight (g)</label>
                  <input type="number" name="weight" value={formData.weight || ""} onChange={handleInputChange} placeholder="Enter weight" style={input} />
                </div>
                <div style={fieldWrap}>
                  <label style={label}>Price Per Gram</label>
                  <input type="number" name="pricePerGram" value={formData.pricePerGram || ""} onChange={handleInputChange} placeholder="Enter price per gram" style={input} />
                </div>
                <div style={fieldWrap}>
                  <label style={label}>Making Charges</label>
                  <input type="number" name="makingCharges" value={formData.makingCharges || ""} onChange={handleInputChange} placeholder="Enter making charges" style={input} />
                </div>
                <div style={fieldWrap}>
                  <label style={label}>Offer Price</label>
                  <input type="number" name="offerPrice" value={formData.offerPrice || ""} onChange={handleInputChange} placeholder="Enter offer price" style={input} />
                </div>
                <div style={fieldWrap}>
                  <label style={label}>Total Price</label>
                  <input type="number" name="totalPrice" value={formData.totalPrice || ""} readOnly placeholder="Auto calculated" style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }} />
                </div>
                <div style={fieldWrap}>
                  <label style={label}>Stock</label>
                  <input type="number" name="stock" value={formData.stock || ""} onChange={handleInputChange} placeholder="Enter stock" style={input} />
                </div>
              </div>
            )}

            {/* ── Image Upload ── */}
            <div style={sectionTitle}>Product Images</div>
            <div style={fieldWrap}>
              <label style={label}>Upload Images</label>
              {/* Image count badge */}
              <div style={imageLimitBadge}>
                {previews.length} / 4 images{previews.length >= 4 ? " — limit reached" : ""}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={fileInput}
                disabled={previews.length >= 4}
              />
              <div style={hintText}>
                Maximum 4 images. Drag to reorder — the first image will be the main display image.
              </div>
            </div>

            {previews.length > 0 && (
              <div style={previewWrap}>
                <div style={previewGrid}>
                  {previews.map((img, index) => (
                    <div key={img.id} style={previewCard} draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragEnter={() => handleDragEnter(index)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onDragEnd={handleDragEnd}
                    >
                      <img src={img.src} alt={`Preview ${index + 1}`} style={previewImage} />
                      <div style={previewOrder}>Image {index + 1}{index === 0 ? " (Main)" : ""}</div>
                      <div style={actionRow}>
                        <button type="button" style={removeButton} onClick={() => removeImage(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button type="submit" style={submitButton}>
              {formData.id ? "Update Product" : "Save Product"}
            </button>
          </form>
        </div>

      ) : filteredProducts.length > 0 ? (
        /* ── Product Table ── */
        <div style={tableWrap}>
          <table style={table}>
            <colgroup>
              <col style={{ width: "20%" }} /><col style={{ width: "33%" }} />
              <col style={{ width: "11%" }} /><col style={{ width: "10%" }} />
              <col style={{ width: "9%"  }} /><col style={{ width: "8%"  }} />
              <col style={{ width: "9%"  }} />
            </colgroup>
            <thead>
              <tr>
                <th style={thProduct}>Product</th>
                <th style={thDescription}>Description</th>
                <th style={thStock}>Stock</th>
                <th style={thPrice}>Price</th>
                <th style={thCategory}>Metal</th>
                <th style={thPurity}>Purity</th>
                <th style={thActions}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                const mainImage = product.images?.[0] || "";
                const isInStock = Number(product.stock || 0) > 0;
                return (
                  <tr key={product.id ?? product.slug}>
                    <td style={tdProduct}>
                      <div style={productCell}>
                        {mainImage
                          ? <img src={mainImage} alt={product.name} style={productThumb} />
                          : <div style={productThumbPlaceholder}>No Image</div>
                        }
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={productName}>{product.name}</p>
                          <div style={productSubText}>
                            {product.metalType || "-"}{product.weight ? ` • ${product.weight}g` : ""}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style={tdDescription}>
                      <div style={descriptionCell} title={product.description || ""}>{truncateDescription(product.description)}</div>
                    </td>
                    <td style={tdStock}>
                      <span style={isInStock ? stockPill : outOfStockPill}>
                        {isInStock ? `In stock (${product.stock})` : "Out of stock"}
                      </span>
                    </td>
                    <td style={tdPrice}>
                      <span style={priceMain}>₹{Number(product.totalPrice || 0).toLocaleString()}</span>
                    </td>
                    <td style={tdCategory}>{product.metalType || "-"}</td>
                    <td style={tdPurity}>{product.purity || "-"}</td>
                    <td style={tdActions}>
                      <div style={actionsContainer}>
                        <button type="button" style={editButton} title="Edit" onClick={() => handleEditClick(product)}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                        <button type="button" style={deleteButton} title="Remove" onClick={() => confirmDeleteProduct(product.id)}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                            <path d="M10 11v6"/><path d="M14 11v6"/>
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      ) : (
        <div style={noProductsBox}>
          {productFilterType === "all" && categoryFilter === "all"
            ? <>No products uploaded yet. Click <strong>Add Product</strong> to create your first product.</>
            : <>No products found for the selected filters.</>
          }
        </div>
      )}
    </div>
  );
}
