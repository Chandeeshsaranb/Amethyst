// // // // // // // // // import React from "react";

// // // // // // // // // export default function Products({
// // // // // // // // //   storedMetals = [],
// // // // // // // // //   metalPurities = {},
// // // // // // // // //   productFilterType,
// // // // // // // // //   setProductFilterType,
// // // // // // // // //   showAddProductForm,
// // // // // // // // //   setShowAddProductForm,
// // // // // // // // //   formData,
// // // // // // // // //   handleInputChange,
// // // // // // // // //   handleSubmit,
// // // // // // // // //   fileInputRef,
// // // // // // // // //   handleImageChange,
// // // // // // // // //   previews = [],
// // // // // // // // //   handleDragStart,
// // // // // // // // //   handleDragEnter,
// // // // // // // // //   handleDrop,
// // // // // // // // //   handleDragEnd,
// // // // // // // // //   removeImage,
// // // // // // // // //   filteredProducts = [],
// // // // // // // // //   confirmDeleteProduct,
// // // // // // // // //   editingStockId,
// // // // // // // // //   editingStockValue,
// // // // // // // // //   setEditingStockValue,
// // // // // // // // //   saveStockEdit,
// // // // // // // // //   setEditingStockId,
// // // // // // // // //   startStockEdit,
// // // // // // // // // }) {
// // // // // // // // //   const heading = {
// // // // // // // // //     fontSize: "28px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     marginBottom: "24px",
// // // // // // // // //     color: "#222",
// // // // // // // // //   };

// // // // // // // // //   const productsPageWrap = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     maxWidth: "1300px",
// // // // // // // // //   };

// // // // // // // // //   const productsHeader = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     alignItems: "flex-start",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     marginBottom: "24px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const productsTitle = {
// // // // // // // // //     fontSize: "28px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#222",
// // // // // // // // //     margin: 0,
// // // // // // // // //   };

// // // // // // // // //   const productsSubTitle = {
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     color: "#666",
// // // // // // // // //     marginTop: "6px",
// // // // // // // // //   };

// // // // // // // // //   const productsActionRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const filterSelect = {
// // // // // // // // //     height: "44px",
// // // // // // // // //     minWidth: "180px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "0 12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     background: "#fff",
// // // // // // // // //     color: "#333",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //   };

// // // // // // // // //   const addButton = {
// // // // // // // // //     background: "#6f3f8f",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     border: "none",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "11px 18px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     whiteSpace: "nowrap",
// // // // // // // // //   };

// // // // // // // // //   const addProductFormCard = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     border: "1px solid #e7dff0",
// // // // // // // // //     borderRadius: "16px",
// // // // // // // // //     padding: "28px",
// // // // // // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // // // // // //     marginBottom: "24px",
// // // // // // // // //   };

// // // // // // // // //   const formHeaderRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     marginBottom: "8px",
// // // // // // // // //   };

// // // // // // // // //   const closeButton = {
// // // // // // // // //     width: "38px",
// // // // // // // // //     height: "38px",
// // // // // // // // //     borderRadius: "50%",
// // // // // // // // //     border: "none",
// // // // // // // // //     background: "#f3e9fb",
// // // // // // // // //     color: "#5d3d75",
// // // // // // // // //     fontSize: "18px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   };

// // // // // // // // //   const grid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // // // //     gap: "18px",
// // // // // // // // //     marginBottom: "26px",
// // // // // // // // //   };

// // // // // // // // //   const detailGrid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // // // //     gap: "18px",
// // // // // // // // //     marginBottom: "26px",
// // // // // // // // //   };

// // // // // // // // //   const fieldWrap = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //   };

// // // // // // // // //   const label = {
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //     marginBottom: "8px",
// // // // // // // // //     color: "#333",
// // // // // // // // //   };

// // // // // // // // //   const input = {
// // // // // // // // //     height: "44px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "0 12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //     width: "100%",
// // // // // // // // //     background: "#fff",
// // // // // // // // //   };

// // // // // // // // //   const textarea = {
// // // // // // // // //     minHeight: "110px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     resize: "vertical",
// // // // // // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //     width: "100%",
// // // // // // // // //   };

// // // // // // // // //   const descriptionWrap = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //     marginBottom: "26px",
// // // // // // // // //   };

// // // // // // // // //   const sectionTitle = {
// // // // // // // // //     fontSize: "18px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     margin: "24px 0 14px",
// // // // // // // // //     color: "#2b2b2b",
// // // // // // // // //   };

// // // // // // // // //   const fileInput = {
// // // // // // // // //     marginTop: "8px",
// // // // // // // // //     marginBottom: "16px",
// // // // // // // // //   };

// // // // // // // // //   const hintText = {
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     color: "#666",
// // // // // // // // //     marginTop: "-6px",
// // // // // // // // //     marginBottom: "10px",
// // // // // // // // //   };

// // // // // // // // //   const previewWrap = {
// // // // // // // // //     marginTop: "10px",
// // // // // // // // //     marginBottom: "20px",
// // // // // // // // //   };

// // // // // // // // //   const previewGrid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // // // // // //     gap: "16px",
// // // // // // // // //   };

// // // // // // // // //   const previewCard = {
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "10px",
// // // // // // // // //     padding: "10px",
// // // // // // // // //     background: "#fff",
// // // // // // // // //     cursor: "grab",
// // // // // // // // //   };

// // // // // // // // //   const previewImage = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     height: "160px",
// // // // // // // // //     objectFit: "cover",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     display: "block",
// // // // // // // // //     marginBottom: "10px",
// // // // // // // // //   };

// // // // // // // // //   const previewOrder = {
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     marginBottom: "8px",
// // // // // // // // //     color: "#444",
// // // // // // // // //   };

// // // // // // // // //   const actionRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     gap: "8px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const removeButton = {
// // // // // // // // //     border: "none",
// // // // // // // // //     background: "#b33939",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     borderRadius: "6px",
// // // // // // // // //     padding: "8px 10px",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //   };

// // // // // // // // //   const submitButton = {
// // // // // // // // //     marginTop: "10px",
// // // // // // // // //     background: "#6f3f8f",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     border: "none",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "13px 24px",
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //   };

// // // // // // // // //   const productsGrid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// // // // // // // // //     gap: "22px",
// // // // // // // // //     alignItems: "stretch",
// // // // // // // // //   };

// // // // // // // // //   const productCard = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     border: "1px solid #e7dff0",
// // // // // // // // //     borderRadius: "18px",
// // // // // // // // //     overflow: "hidden",
// // // // // // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //     height: "100%",
// // // // // // // // //   };

// // // // // // // // //   const productImage = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     height: "220px",
// // // // // // // // //     objectFit: "cover",
// // // // // // // // //     background: "#f3e9fb",
// // // // // // // // //     display: "block",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   };

// // // // // // // // //   const productInfo = {
// // // // // // // // //     padding: "16px",
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     flex: 1,
// // // // // // // // //   };

// // // // // // // // //   const productHeaderRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     alignItems: "flex-start",
// // // // // // // // //     gap: "12px",
// // // // // // // // //   };

// // // // // // // // //   const productName = {
// // // // // // // // //     fontSize: "18px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#222",
// // // // // // // // //     margin: 0,
// // // // // // // // //     lineHeight: "1.4",
// // // // // // // // //     flex: 1,
// // // // // // // // //   };

// // // // // // // // //   const deleteProductButton = {
// // // // // // // // //     background: "#fff1f1",
// // // // // // // // //     color: "#b33939",
// // // // // // // // //     border: "1px solid #f0c7c7",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "8px 12px",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     whiteSpace: "nowrap",
// // // // // // // // //   };

// // // // // // // // //   const productPrice = {
// // // // // // // // //     fontSize: "18px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#6f3f8f",
// // // // // // // // //     margin: 0,
// // // // // // // // //   };

// // // // // // // // //   const metaInfoText = {
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     color: "#555",
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //   };

// // // // // // // // //   const stockRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //     gap: "8px",
// // // // // // // // //   };

// // // // // // // // //   const stockLabel = {
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     color: "#555",
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //   };

// // // // // // // // //   const stockActionRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "10px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const stockValueText = {
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#222",
// // // // // // // // //     minWidth: "50px",
// // // // // // // // //   };

// // // // // // // // //   const stockInput = {
// // // // // // // // //     height: "42px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "0 12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     width: "120px",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //   };

// // // // // // // // //   const updateStockButton = {
// // // // // // // // //     background: "#6f3f8f",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     border: "none",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "10px 14px",
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //   };

// // // // // // // // //   const cancelStockButton = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     color: "#5d3d75",
// // // // // // // // //     border: "1px solid #d8c9e4",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "10px 14px",
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //   };

// // // // // // // // //   const noProductsBox = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     border: "1px dashed #d9c8e7",
// // // // // // // // //     borderRadius: "16px",
// // // // // // // // //     padding: "40px 24px",
// // // // // // // // //     textAlign: "center",
// // // // // // // // //     color: "#666",
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={productsPageWrap}>
// // // // // // // // //       <div style={productsHeader}>
// // // // // // // // //         <div>
// // // // // // // // //           <h1 style={productsTitle}>Products</h1>
// // // // // // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // // // // // //         </div>

// // // // // // // // //         <div style={productsActionRow}>
// // // // // // // // //           <select
// // // // // // // // //             value={productFilterType}
// // // // // // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // // // // // //             style={filterSelect}
// // // // // // // // //           >
// // // // // // // // //             <option value="all">All Products</option>
// // // // // // // // //             {storedMetals.map((metal) => (
// // // // // // // // //               <option key={metal} value={metal}>
// // // // // // // // //                 {metal}
// // // // // // // // //               </option>
// // // // // // // // //             ))}
// // // // // // // // //           </select>

// // // // // // // // //           <button
// // // // // // // // //             type="button"
// // // // // // // // //             style={addButton}
// // // // // // // // //             onClick={() => setShowAddProductForm((prev) => !prev)}
// // // // // // // // //           >
// // // // // // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {showAddProductForm ? (
// // // // // // // // //         <div style={addProductFormCard}>
// // // // // // // // //           <div style={formHeaderRow}>
// // // // // // // // //             <div style={heading}>Add Product</div>

// // // // // // // // //             <button
// // // // // // // // //               type="button"
// // // // // // // // //               style={closeButton}
// // // // // // // // //               onClick={() => setShowAddProductForm(false)}
// // // // // // // // //             >
// // // // // // // // //               ✕
// // // // // // // // //             </button>
// // // // // // // // //           </div>

// // // // // // // // //           <form onSubmit={handleSubmit}>
// // // // // // // // //             <div style={grid}>
// // // // // // // // //               <div style={fieldWrap}>
// // // // // // // // //                 <label style={label}>Product Name</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   name="productName"
// // // // // // // // //                   value={formData.productName}
// // // // // // // // //                   onChange={handleInputChange}
// // // // // // // // //                   placeholder="Enter product name"
// // // // // // // // //                   style={input}
// // // // // // // // //                 />
// // // // // // // // //               </div>

// // // // // // // // //               <div style={fieldWrap}>
// // // // // // // // //                 <label style={label}>Metal Type</label>
// // // // // // // // //                 <select
// // // // // // // // //                   name="metalType"
// // // // // // // // //                   value={formData.metalType}
// // // // // // // // //                   onChange={handleInputChange}
// // // // // // // // //                   style={input}
// // // // // // // // //                 >
// // // // // // // // //                   <option value="">Select metal type</option>
// // // // // // // // //                   {storedMetals.map((metal) => (
// // // // // // // // //                     <option key={metal} value={metal}>
// // // // // // // // //                       {metal}
// // // // // // // // //                     </option>
// // // // // // // // //                   ))}
// // // // // // // // //                 </select>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             <div style={descriptionWrap}>
// // // // // // // // //               <label style={label}>Product Description</label>
// // // // // // // // //               <textarea
// // // // // // // // //                 name="productDescription"
// // // // // // // // //                 value={formData.productDescription}
// // // // // // // // //                 onChange={handleInputChange}
// // // // // // // // //                 placeholder="Enter product description"
// // // // // // // // //                 style={textarea}
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             {formData.metalType && (
// // // // // // // // //               <div style={detailGrid}>
// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Purity</label>
// // // // // // // // //                   <select
// // // // // // // // //                     name="purity"
// // // // // // // // //                     value={formData.purity}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     style={input}
// // // // // // // // //                   >
// // // // // // // // //                     <option value="">Select purity</option>
// // // // // // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // // // // // //                       <option key={purity} value={purity}>
// // // // // // // // //                         {purity}
// // // // // // // // //                       </option>
// // // // // // // // //                     ))}
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Weight</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="weight"
// // // // // // // // //                     value={formData.weight}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter weight"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Price Per Gram</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="pricePerGram"
// // // // // // // // //                     value={formData.pricePerGram}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter price per gram"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Making Charges</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="makingCharges"
// // // // // // // // //                     value={formData.makingCharges}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter making charges"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Offer Price</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="offerPrice"
// // // // // // // // //                     value={formData.offerPrice}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter offer price"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Total Price</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="totalPrice"
// // // // // // // // //                     value={formData.totalPrice}
// // // // // // // // //                     readOnly
// // // // // // // // //                     placeholder="Auto calculated"
// // // // // // // // //                     style={{
// // // // // // // // //                       ...input,
// // // // // // // // //                       background: "#f4f0f8",
// // // // // // // // //                       color: "#5d3d75",
// // // // // // // // //                       fontWeight: "700",
// // // // // // // // //                     }}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Stock</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="stock"
// // // // // // // // //                     value={formData.stock}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter stock"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // // // // // //             <div style={fieldWrap}>
// // // // // // // // //               <label style={label}>Upload Product Images</label>
// // // // // // // // //               <input
// // // // // // // // //                 ref={fileInputRef}
// // // // // // // // //                 type="file"
// // // // // // // // //                 accept="image/*"
// // // // // // // // //                 multiple
// // // // // // // // //                 onChange={handleImageChange}
// // // // // // // // //                 style={fileInput}
// // // // // // // // //               />
// // // // // // // // //               <div style={hintText}>
// // // // // // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // // // // // //                 the main image.
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {previews.length > 0 && (
// // // // // // // // //               <div style={previewWrap}>
// // // // // // // // //                 <div style={previewGrid}>
// // // // // // // // //                   {previews.map((img, index) => (
// // // // // // // // //                     <div
// // // // // // // // //                       key={img.id}
// // // // // // // // //                       style={previewCard}
// // // // // // // // //                       draggable
// // // // // // // // //                       onDragStart={() => handleDragStart(index)}
// // // // // // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // // // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // // // // // //                       onDrop={handleDrop}
// // // // // // // // //                       onDragEnd={handleDragEnd}
// // // // // // // // //                     >
// // // // // // // // //                       <img
// // // // // // // // //                         src={img.src}
// // // // // // // // //                         alt={`Preview ${index + 1}`}
// // // // // // // // //                         style={previewImage}
// // // // // // // // //                       />

// // // // // // // // //                       <div style={previewOrder}>
// // // // // // // // //                         Image {index + 1}
// // // // // // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // // // // // //                       </div>

// // // // // // // // //                       <div style={actionRow}>
// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           style={removeButton}
// // // // // // // // //                           onClick={() => removeImage(index)}
// // // // // // // // //                         >
// // // // // // // // //                           Remove
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             <button type="submit" style={submitButton}>
// // // // // // // // //               Save Product
// // // // // // // // //             </button>
// // // // // // // // //           </form>
// // // // // // // // //         </div>
// // // // // // // // //       ) : filteredProducts.length > 0 ? (
// // // // // // // // //         <div style={productsGrid}>
// // // // // // // // //           {filteredProducts.map((product) => {
// // // // // // // // //             const mainImage = product.images?.[0] || "";

// // // // // // // // //             return (
// // // // // // // // //               <div key={product.id} style={productCard}>
// // // // // // // // //                 {mainImage ? (
// // // // // // // // //                   <img src={mainImage} alt={product.name} style={productImage} />
// // // // // // // // //                 ) : (
// // // // // // // // //                   <div
// // // // // // // // //                     style={{
// // // // // // // // //                       ...productImage,
// // // // // // // // //                       display: "flex",
// // // // // // // // //                       alignItems: "center",
// // // // // // // // //                       justifyContent: "center",
// // // // // // // // //                       color: "#8b6aa3",
// // // // // // // // //                       fontWeight: "700",
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     No Image
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 <div style={productInfo}>
// // // // // // // // //                   <div style={productHeaderRow}>
// // // // // // // // //                     <div style={productName}>{product.name}</div>

// // // // // // // // //                     <button
// // // // // // // // //                       type="button"
// // // // // // // // //                       style={deleteProductButton}
// // // // // // // // //                       onClick={() => confirmDeleteProduct(product.id)}
// // // // // // // // //                     >
// // // // // // // // //                       Remove Product
// // // // // // // // //                     </button>
// // // // // // // // //                   </div>

// // // // // // // // //                   <div style={productPrice}>
// // // // // // // // //                     ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // // // // // //                   </div>

// // // // // // // // //                   <div style={metaInfoText}>
// // // // // // // // //                     {product.metalType || "-"}
// // // // // // // // //                     {product.purity ? ` • ${product.purity}` : ""}
// // // // // // // // //                   </div>

// // // // // // // // //                   <div style={stockRow}>
// // // // // // // // //                     <label style={stockLabel}>Stock</label>

// // // // // // // // //                     {editingStockId === product.id ? (
// // // // // // // // //                       <div style={stockActionRow}>
// // // // // // // // //                         <input
// // // // // // // // //                           type="number"
// // // // // // // // //                           value={editingStockValue}
// // // // // // // // //                           onChange={(e) => setEditingStockValue(e.target.value)}
// // // // // // // // //                           placeholder="Enter stock"
// // // // // // // // //                           style={stockInput}
// // // // // // // // //                         />

// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           style={updateStockButton}
// // // // // // // // //                           onClick={() => saveStockEdit(product.id)}
// // // // // // // // //                         >
// // // // // // // // //                           Save
// // // // // // // // //                         </button>

// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           style={cancelStockButton}
// // // // // // // // //                           onClick={() => {
// // // // // // // // //                             setEditingStockId(null);
// // // // // // // // //                           }}
// // // // // // // // //                         >
// // // // // // // // //                           Cancel
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     ) : (
// // // // // // // // //                       <div style={stockActionRow}>
// // // // // // // // //                         <div style={stockValueText}>{product.stock ?? 0}</div>

// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           style={updateStockButton}
// // // // // // // // //                           onClick={() => startStockEdit(product)}
// // // // // // // // //                         >
// // // // // // // // //                           Update
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             );
// // // // // // // // //           })}
// // // // // // // // //         </div>
// // // // // // // // //       ) : (
// // // // // // // // //         <div style={noProductsBox}>
// // // // // // // // //           {productFilterType === "all" ? (
// // // // // // // // //             <>
// // // // // // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // // // // // //               your first product.
// // // // // // // // //             </>
// // // // // // // // //           ) : (
// // // // // // // // //             <>No {productFilterType} products found.</>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // // import React from "react";

// // // // // // // // // export default function Products({
// // // // // // // // //   storedMetals = [],
// // // // // // // // //   metalPurities = {},
// // // // // // // // //   productFilterType,
// // // // // // // // //   setProductFilterType,
// // // // // // // // //   showAddProductForm,
// // // // // // // // //   setShowAddProductForm,
// // // // // // // // //   formData,
// // // // // // // // //   handleInputChange,
// // // // // // // // //   handleSubmit,
// // // // // // // // //   fileInputRef,
// // // // // // // // //   handleImageChange,
// // // // // // // // //   previews = [],
// // // // // // // // //   handleDragStart,
// // // // // // // // //   handleDragEnter,
// // // // // // // // //   handleDrop,
// // // // // // // // //   handleDragEnd,
// // // // // // // // //   removeImage,
// // // // // // // // //   filteredProducts = [],
// // // // // // // // //   confirmDeleteProduct,
// // // // // // // // //   editingStockId,
// // // // // // // // //   editingStockValue,
// // // // // // // // //   setEditingStockValue,
// // // // // // // // //   saveStockEdit,
// // // // // // // // //   setEditingStockId,
// // // // // // // // //   startStockEdit,
// // // // // // // // // }) {
// // // // // // // // //   const heading = {
// // // // // // // // //     fontSize: "28px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     marginBottom: "24px",
// // // // // // // // //     color: "#222",
// // // // // // // // //   };

// // // // // // // // //   const productsPageWrap = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     maxWidth: "1300px",
// // // // // // // // //   };

// // // // // // // // //   const productsHeader = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     alignItems: "flex-start",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     marginBottom: "24px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const productsTitle = {
// // // // // // // // //     fontSize: "28px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#222",
// // // // // // // // //     margin: 0,
// // // // // // // // //   };

// // // // // // // // //   const productsSubTitle = {
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     color: "#666",
// // // // // // // // //     marginTop: "6px",
// // // // // // // // //   };

// // // // // // // // //   const productsActionRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const filterSelect = {
// // // // // // // // //     height: "44px",
// // // // // // // // //     minWidth: "180px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "0 12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     background: "#fff",
// // // // // // // // //     color: "#333",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //   };

// // // // // // // // //   const addButton = {
// // // // // // // // //     background: "#6f3f8f",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     border: "none",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "11px 18px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     whiteSpace: "nowrap",
// // // // // // // // //   };

// // // // // // // // //   const addProductFormCard = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     border: "1px solid #e7dff0",
// // // // // // // // //     borderRadius: "16px",
// // // // // // // // //     padding: "28px",
// // // // // // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // // // // // //     marginBottom: "24px",
// // // // // // // // //   };

// // // // // // // // //   const formHeaderRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     marginBottom: "8px",
// // // // // // // // //   };

// // // // // // // // //   const closeButton = {
// // // // // // // // //     width: "38px",
// // // // // // // // //     height: "38px",
// // // // // // // // //     borderRadius: "50%",
// // // // // // // // //     border: "none",
// // // // // // // // //     background: "#f3e9fb",
// // // // // // // // //     color: "#5d3d75",
// // // // // // // // //     fontSize: "18px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   };

// // // // // // // // //   const grid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // // // //     gap: "18px",
// // // // // // // // //     marginBottom: "26px",
// // // // // // // // //   };

// // // // // // // // //   const detailGrid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // // // //     gap: "18px",
// // // // // // // // //     marginBottom: "26px",
// // // // // // // // //   };

// // // // // // // // //   const fieldWrap = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //   };

// // // // // // // // //   const label = {
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //     marginBottom: "8px",
// // // // // // // // //     color: "#333",
// // // // // // // // //   };

// // // // // // // // //   const input = {
// // // // // // // // //     height: "44px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "0 12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //     width: "100%",
// // // // // // // // //     background: "#fff",
// // // // // // // // //   };

// // // // // // // // //   const textarea = {
// // // // // // // // //     minHeight: "110px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "12px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     resize: "vertical",
// // // // // // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //     width: "100%",
// // // // // // // // //   };

// // // // // // // // //   const descriptionWrap = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     flexDirection: "column",
// // // // // // // // //     marginBottom: "26px",
// // // // // // // // //   };

// // // // // // // // //   const sectionTitle = {
// // // // // // // // //     fontSize: "18px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     margin: "24px 0 14px",
// // // // // // // // //     color: "#2b2b2b",
// // // // // // // // //   };

// // // // // // // // //   const fileInput = {
// // // // // // // // //     marginTop: "8px",
// // // // // // // // //     marginBottom: "16px",
// // // // // // // // //   };

// // // // // // // // //   const hintText = {
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     color: "#666",
// // // // // // // // //     marginTop: "-6px",
// // // // // // // // //     marginBottom: "10px",
// // // // // // // // //   };

// // // // // // // // //   const previewWrap = {
// // // // // // // // //     marginTop: "10px",
// // // // // // // // //     marginBottom: "20px",
// // // // // // // // //   };

// // // // // // // // //   const previewGrid = {
// // // // // // // // //     display: "grid",
// // // // // // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // // // // // //     gap: "16px",
// // // // // // // // //   };

// // // // // // // // //   const previewCard = {
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "10px",
// // // // // // // // //     padding: "10px",
// // // // // // // // //     background: "#fff",
// // // // // // // // //     cursor: "grab",
// // // // // // // // //   };

// // // // // // // // //   const previewImage = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     height: "160px",
// // // // // // // // //     objectFit: "cover",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     display: "block",
// // // // // // // // //     marginBottom: "10px",
// // // // // // // // //   };

// // // // // // // // //   const previewOrder = {
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     marginBottom: "8px",
// // // // // // // // //     color: "#444",
// // // // // // // // //   };

// // // // // // // // //   const actionRow = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     gap: "8px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const removeButton = {
// // // // // // // // //     border: "none",
// // // // // // // // //     background: "#b33939",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     borderRadius: "6px",
// // // // // // // // //     padding: "8px 10px",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //   };

// // // // // // // // //   const submitButton = {
// // // // // // // // //     marginTop: "10px",
// // // // // // // // //     background: "#6f3f8f",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     border: "none",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "13px 24px",
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //   };

// // // // // // // // //   const tableWrap = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     overflowX: "auto",
// // // // // // // // //     background: "#fff",
// // // // // // // // //     border: "1px solid #e7dff0",
// // // // // // // // //     borderRadius: "16px",
// // // // // // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // // // // // //   };

// // // // // // // // //   const table = {
// // // // // // // // //     width: "100%",
// // // // // // // // //     borderCollapse: "collapse",
// // // // // // // // //     minWidth: "1000px",
// // // // // // // // //   };

// // // // // // // // //   const th = {
// // // // // // // // //     textAlign: "left",
// // // // // // // // //     fontSize: "13px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#666",
// // // // // // // // //     background: "#faf7fd",
// // // // // // // // //     padding: "14px 16px",
// // // // // // // // //     borderBottom: "1px solid #eadff3",
// // // // // // // // //     whiteSpace: "nowrap",
// // // // // // // // //   };

// // // // // // // // //   const td = {
// // // // // // // // //     padding: "14px 16px",
// // // // // // // // //     borderBottom: "1px solid #f0e8f6",
// // // // // // // // //     verticalAlign: "middle",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     color: "#333",
// // // // // // // // //   };

// // // // // // // // //   const productCell = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "12px",
// // // // // // // // //     minWidth: "260px",
// // // // // // // // //   };

// // // // // // // // //   const productThumb = {
// // // // // // // // //     width: "52px",
// // // // // // // // //     height: "52px",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     objectFit: "cover",
// // // // // // // // //     border: "1px solid #e5dced",
// // // // // // // // //     background: "#f3e9fb",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   };

// // // // // // // // //   const productThumbPlaceholder = {
// // // // // // // // //     width: "52px",
// // // // // // // // //     height: "52px",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     border: "1px solid #e5dced",
// // // // // // // // //     background: "#f3e9fb",
// // // // // // // // //     display: "flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     fontSize: "11px",
// // // // // // // // //     color: "#8b6aa3",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   };

// // // // // // // // //   const productName = {
// // // // // // // // //     margin: 0,
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#2b2b2b",
// // // // // // // // //     lineHeight: "1.4",
// // // // // // // // //   };

// // // // // // // // //   const productSubText = {
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     color: "#777",
// // // // // // // // //     marginTop: "4px",
// // // // // // // // //   };

// // // // // // // // //   const priceMain = {
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#6f3f8f",
// // // // // // // // //   };

// // // // // // // // //   const stockPill = {
// // // // // // // // //     display: "inline-flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     padding: "6px 10px",
// // // // // // // // //     borderRadius: "999px",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     background: "#eaf8ee",
// // // // // // // // //     color: "#1f8b4c",
// // // // // // // // //     minWidth: "80px",
// // // // // // // // //   };

// // // // // // // // //   const outOfStockPill = {
// // // // // // // // //     ...stockPill,
// // // // // // // // //     background: "#fff0f0",
// // // // // // // // //     color: "#c0392b",
// // // // // // // // //   };

// // // // // // // // //   const stockEditWrap = {
// // // // // // // // //     display: "flex",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: "8px",
// // // // // // // // //     flexWrap: "wrap",
// // // // // // // // //   };

// // // // // // // // //   const stockInput = {
// // // // // // // // //     height: "38px",
// // // // // // // // //     border: "1px solid #ddd",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "0 10px",
// // // // // // // // //     fontSize: "14px",
// // // // // // // // //     outline: "none",
// // // // // // // // //     width: "90px",
// // // // // // // // //     boxSizing: "border-box",
// // // // // // // // //   };

// // // // // // // // //   const smallPrimaryButton = {
// // // // // // // // //     background: "#6f3f8f",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     border: "none",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "8px 12px",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //   };

// // // // // // // // //   const smallSecondaryButton = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     color: "#5d3d75",
// // // // // // // // //     border: "1px solid #d8c9e4",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "8px 12px",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //   };

// // // // // // // // //   const deleteButton = {
// // // // // // // // //     background: "#fff1f1",
// // // // // // // // //     color: "#b33939",
// // // // // // // // //     border: "1px solid #f0c7c7",
// // // // // // // // //     borderRadius: "8px",
// // // // // // // // //     padding: "8px 12px",
// // // // // // // // //     fontSize: "12px",
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     cursor: "pointer",
// // // // // // // // //     whiteSpace: "nowrap",
// // // // // // // // //   };

// // // // // // // // //   const noProductsBox = {
// // // // // // // // //     background: "#fff",
// // // // // // // // //     border: "1px dashed #d9c8e7",
// // // // // // // // //     borderRadius: "16px",
// // // // // // // // //     padding: "40px 24px",
// // // // // // // // //     textAlign: "center",
// // // // // // // // //     color: "#666",
// // // // // // // // //     fontSize: "15px",
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={productsPageWrap}>
// // // // // // // // //       <div style={productsHeader}>
// // // // // // // // //         <div>
// // // // // // // // //           <h1 style={productsTitle}>Products</h1>
// // // // // // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // // // // // //         </div>

// // // // // // // // //         <div style={productsActionRow}>
// // // // // // // // //           <select
// // // // // // // // //             value={productFilterType}
// // // // // // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // // // // // //             style={filterSelect}
// // // // // // // // //           >
// // // // // // // // //             <option value="all">All Products</option>
// // // // // // // // //             {storedMetals.map((metal) => (
// // // // // // // // //               <option key={metal} value={metal}>
// // // // // // // // //                 {metal}
// // // // // // // // //               </option>
// // // // // // // // //             ))}
// // // // // // // // //           </select>

// // // // // // // // //           <button
// // // // // // // // //             type="button"
// // // // // // // // //             style={addButton}
// // // // // // // // //             onClick={() => setShowAddProductForm((prev) => !prev)}
// // // // // // // // //           >
// // // // // // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {showAddProductForm ? (
// // // // // // // // //         <div style={addProductFormCard}>
// // // // // // // // //           <div style={formHeaderRow}>
// // // // // // // // //             <div style={heading}>Add Product</div>

// // // // // // // // //             <button
// // // // // // // // //               type="button"
// // // // // // // // //               style={closeButton}
// // // // // // // // //               onClick={() => setShowAddProductForm(false)}
// // // // // // // // //             >
// // // // // // // // //               ✕
// // // // // // // // //             </button>
// // // // // // // // //           </div>

// // // // // // // // //           <form onSubmit={handleSubmit}>
// // // // // // // // //             <div style={grid}>
// // // // // // // // //               <div style={fieldWrap}>
// // // // // // // // //                 <label style={label}>Product Name</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   name="productName"
// // // // // // // // //                   value={formData.productName}
// // // // // // // // //                   onChange={handleInputChange}
// // // // // // // // //                   placeholder="Enter product name"
// // // // // // // // //                   style={input}
// // // // // // // // //                 />
// // // // // // // // //               </div>

// // // // // // // // //               <div style={fieldWrap}>
// // // // // // // // //                 <label style={label}>Metal Type</label>
// // // // // // // // //                 <select
// // // // // // // // //                   name="metalType"
// // // // // // // // //                   value={formData.metalType}
// // // // // // // // //                   onChange={handleInputChange}
// // // // // // // // //                   style={input}
// // // // // // // // //                 >
// // // // // // // // //                   <option value="">Select metal type</option>
// // // // // // // // //                   {storedMetals.map((metal) => (
// // // // // // // // //                     <option key={metal} value={metal}>
// // // // // // // // //                       {metal}
// // // // // // // // //                     </option>
// // // // // // // // //                   ))}
// // // // // // // // //                 </select>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             <div style={descriptionWrap}>
// // // // // // // // //               <label style={label}>Product Description</label>
// // // // // // // // //               <textarea
// // // // // // // // //                 name="productDescription"
// // // // // // // // //                 value={formData.productDescription}
// // // // // // // // //                 onChange={handleInputChange}
// // // // // // // // //                 placeholder="Enter product description"
// // // // // // // // //                 style={textarea}
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             {formData.metalType && (
// // // // // // // // //               <div style={detailGrid}>
// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Purity</label>
// // // // // // // // //                   <select
// // // // // // // // //                     name="purity"
// // // // // // // // //                     value={formData.purity}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     style={input}
// // // // // // // // //                   >
// // // // // // // // //                     <option value="">Select purity</option>
// // // // // // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // // // // // //                       <option key={purity} value={purity}>
// // // // // // // // //                         {purity}
// // // // // // // // //                       </option>
// // // // // // // // //                     ))}
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Weight</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="weight"
// // // // // // // // //                     value={formData.weight}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter weight"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Price Per Gram</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="pricePerGram"
// // // // // // // // //                     value={formData.pricePerGram}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter price per gram"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Making Charges</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="makingCharges"
// // // // // // // // //                     value={formData.makingCharges}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter making charges"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Offer Price</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="offerPrice"
// // // // // // // // //                     value={formData.offerPrice}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter offer price"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Total Price</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="totalPrice"
// // // // // // // // //                     value={formData.totalPrice}
// // // // // // // // //                     readOnly
// // // // // // // // //                     placeholder="Auto calculated"
// // // // // // // // //                     style={{
// // // // // // // // //                       ...input,
// // // // // // // // //                       background: "#f4f0f8",
// // // // // // // // //                       color: "#5d3d75",
// // // // // // // // //                       fontWeight: "700",
// // // // // // // // //                     }}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={fieldWrap}>
// // // // // // // // //                   <label style={label}>Stock</label>
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     name="stock"
// // // // // // // // //                     value={formData.stock}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter stock"
// // // // // // // // //                     style={input}
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // // // // // //             <div style={fieldWrap}>
// // // // // // // // //               <label style={label}>Upload Product Images</label>
// // // // // // // // //               <input
// // // // // // // // //                 ref={fileInputRef}
// // // // // // // // //                 type="file"
// // // // // // // // //                 accept="image/*"
// // // // // // // // //                 multiple
// // // // // // // // //                 onChange={handleImageChange}
// // // // // // // // //                 style={fileInput}
// // // // // // // // //               />
// // // // // // // // //               <div style={hintText}>
// // // // // // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // // // // // //                 the main image.
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {previews.length > 0 && (
// // // // // // // // //               <div style={previewWrap}>
// // // // // // // // //                 <div style={previewGrid}>
// // // // // // // // //                   {previews.map((img, index) => (
// // // // // // // // //                     <div
// // // // // // // // //                       key={img.id}
// // // // // // // // //                       style={previewCard}
// // // // // // // // //                       draggable
// // // // // // // // //                       onDragStart={() => handleDragStart(index)}
// // // // // // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // // // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // // // // // //                       onDrop={handleDrop}
// // // // // // // // //                       onDragEnd={handleDragEnd}
// // // // // // // // //                     >
// // // // // // // // //                       <img
// // // // // // // // //                         src={img.src}
// // // // // // // // //                         alt={`Preview ${index + 1}`}
// // // // // // // // //                         style={previewImage}
// // // // // // // // //                       />

// // // // // // // // //                       <div style={previewOrder}>
// // // // // // // // //                         Image {index + 1}
// // // // // // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // // // // // //                       </div>

// // // // // // // // //                       <div style={actionRow}>
// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           style={removeButton}
// // // // // // // // //                           onClick={() => removeImage(index)}
// // // // // // // // //                         >
// // // // // // // // //                           Remove
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             <button type="submit" style={submitButton}>
// // // // // // // // //               Save Product
// // // // // // // // //             </button>
// // // // // // // // //           </form>
// // // // // // // // //         </div>
// // // // // // // // //       ) : filteredProducts.length > 0 ? (
// // // // // // // // //         <div style={tableWrap}>
// // // // // // // // //           <table style={table}>
// // // // // // // // //             <thead>
// // // // // // // // //               <tr>
// // // // // // // // //                 <th style={th}>Product</th>
// // // // // // // // //                 <th style={th}>SKU</th>
// // // // // // // // //                 <th style={th}>Stock</th>
// // // // // // // // //                 <th style={th}>Price</th>
// // // // // // // // //                 <th style={th}>Category</th>
// // // // // // // // //                 <th style={th}>Purity</th>
// // // // // // // // //                 <th style={th}>Actions</th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>

// // // // // // // // //             <tbody>
// // // // // // // // //               {filteredProducts.map((product) => {
// // // // // // // // //                 const mainImage = product.images?.[0] || "";
// // // // // // // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // // // // // // //                 return (
// // // // // // // // //                   <tr key={product.id}>
// // // // // // // // //                     <td style={td}>
// // // // // // // // //                       <div style={productCell}>
// // // // // // // // //                         {mainImage ? (
// // // // // // // // //                           <img
// // // // // // // // //                             src={mainImage}
// // // // // // // // //                             alt={product.name}
// // // // // // // // //                             style={productThumb}
// // // // // // // // //                           />
// // // // // // // // //                         ) : (
// // // // // // // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // // // // // // //                         )}

// // // // // // // // //                         <div>
// // // // // // // // //                           <p style={productName}>{product.name}</p>
// // // // // // // // //                           <div style={productSubText}>
// // // // // // // // //                             {product.metalType || "-"}
// // // // // // // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                     </td>

// // // // // // // // //                     <td style={td}>{product.sku || "-"}</td>

// // // // // // // // //                     <td style={td}>
// // // // // // // // //                       {editingStockId === product.id ? (
// // // // // // // // //                         <div style={stockEditWrap}>
// // // // // // // // //                           <input
// // // // // // // // //                             type="number"
// // // // // // // // //                             value={editingStockValue}
// // // // // // // // //                             onChange={(e) => setEditingStockValue(e.target.value)}
// // // // // // // // //                             placeholder="Stock"
// // // // // // // // //                             style={stockInput}
// // // // // // // // //                           />
// // // // // // // // //                           <button
// // // // // // // // //                             type="button"
// // // // // // // // //                             style={smallPrimaryButton}
// // // // // // // // //                             onClick={() => saveStockEdit(product.id)}
// // // // // // // // //                           >
// // // // // // // // //                             Save
// // // // // // // // //                           </button>
// // // // // // // // //                           <button
// // // // // // // // //                             type="button"
// // // // // // // // //                             style={smallSecondaryButton}
// // // // // // // // //                             onClick={() => setEditingStockId(null)}
// // // // // // // // //                           >
// // // // // // // // //                             Cancel
// // // // // // // // //                           </button>
// // // // // // // // //                         </div>
// // // // // // // // //                       ) : (
// // // // // // // // //                         <div style={stockEditWrap}>
// // // // // // // // //                           <span style={isInStock ? stockPill : outOfStockPill}>
// // // // // // // // //                             {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // // // // // // //                           </span>
// // // // // // // // //                           <button
// // // // // // // // //                             type="button"
// // // // // // // // //                             style={smallPrimaryButton}
// // // // // // // // //                             onClick={() => startStockEdit(product)}
// // // // // // // // //                           >
// // // // // // // // //                             Update
// // // // // // // // //                           </button>
// // // // // // // // //                         </div>
// // // // // // // // //                       )}
// // // // // // // // //                     </td>

// // // // // // // // //                     <td style={td}>
// // // // // // // // //                       <div style={priceMain}>
// // // // // // // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // // // // // //                       </div>
// // // // // // // // //                     </td>

// // // // // // // // //                     <td style={td}>{product.metalType || "-"}</td>

// // // // // // // // //                     <td style={td}>{product.purity || "-"}</td>

// // // // // // // // //                     <td style={td}>
// // // // // // // // //                       <button
// // // // // // // // //                         type="button"
// // // // // // // // //                         style={deleteButton}
// // // // // // // // //                         onClick={() => confirmDeleteProduct(product.id)}
// // // // // // // // //                       >
// // // // // // // // //                         Remove
// // // // // // // // //                       </button>
// // // // // // // // //                     </td>
// // // // // // // // //                   </tr>
// // // // // // // // //                 );
// // // // // // // // //               })}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       ) : (
// // // // // // // // //         <div style={noProductsBox}>
// // // // // // // // //           {productFilterType === "all" ? (
// // // // // // // // //             <>
// // // // // // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // // // // // //               your first product.
// // // // // // // // //             </>
// // // // // // // // //           ) : (
// // // // // // // // //             <>No {productFilterType} products found.</>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }






// // // // // // // // import React from "react";

// // // // // // // // export default function Products({
// // // // // // // //   storedMetals = [],
// // // // // // // //   metalPurities = {},
// // // // // // // //   productFilterType,
// // // // // // // //   setProductFilterType,
// // // // // // // //   showAddProductForm,
// // // // // // // //   setShowAddProductForm,
// // // // // // // //   formData,
// // // // // // // //   handleInputChange,
// // // // // // // //   handleSubmit,
// // // // // // // //   fileInputRef,
// // // // // // // //   handleImageChange,
// // // // // // // //   previews = [],
// // // // // // // //   handleDragStart,
// // // // // // // //   handleDragEnter,
// // // // // // // //   handleDrop,
// // // // // // // //   handleDragEnd,
// // // // // // // //   removeImage,
// // // // // // // //   filteredProducts = [],
// // // // // // // //   confirmDeleteProduct,
// // // // // // // //   editingStockId,
// // // // // // // //   editingStockValue,
// // // // // // // //   setEditingStockValue,
// // // // // // // //   saveStockEdit,
// // // // // // // //   setEditingStockId,
// // // // // // // //   startStockEdit,
// // // // // // // //   handleEditProduct, // Prop for editing products
// // // // // // // //   setFormData, // Add this prop to reset/update form data
// // // // // // // //   setIsEditMode, // Add this prop to track edit mode
// // // // // // // // }) {
// // // // // // // //   const heading = {
// // // // // // // //     fontSize: "28px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     marginBottom: "24px",
// // // // // // // //     color: "#222",
// // // // // // // //   };

// // // // // // // //   const productsPageWrap = {
// // // // // // // //     width: "100%",
// // // // // // // //     maxWidth: "1300px",
// // // // // // // //   };

// // // // // // // //   const productsHeader = {
// // // // // // // //     display: "flex",
// // // // // // // //     justifyContent: "space-between",
// // // // // // // //     alignItems: "flex-start",
// // // // // // // //     gap: "12px",
// // // // // // // //     marginBottom: "24px",
// // // // // // // //     flexWrap: "wrap",
// // // // // // // //   };

// // // // // // // //   const productsTitle = {
// // // // // // // //     fontSize: "28px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#222",
// // // // // // // //     margin: 0,
// // // // // // // //   };

// // // // // // // //   const productsSubTitle = {
// // // // // // // //     fontSize: "14px",
// // // // // // // //     color: "#666",
// // // // // // // //     marginTop: "6px",
// // // // // // // //   };

// // // // // // // //   const productsActionRow = {
// // // // // // // //     display: "flex",
// // // // // // // //     alignItems: "center",
// // // // // // // //     gap: "12px",
// // // // // // // //     flexWrap: "wrap",
// // // // // // // //   };

// // // // // // // //   const filterSelect = {
// // // // // // // //     height: "44px",
// // // // // // // //     minWidth: "180px",
// // // // // // // //     border: "1px solid #ddd",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "0 12px",
// // // // // // // //     fontSize: "14px",
// // // // // // // //     outline: "none",
// // // // // // // //     background: "#fff",
// // // // // // // //     color: "#333",
// // // // // // // //     boxSizing: "border-box",
// // // // // // // //   };

// // // // // // // //   const addButton = {
// // // // // // // //     background: "#6f3f8f",
// // // // // // // //     color: "#fff",
// // // // // // // //     border: "none",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "11px 18px",
// // // // // // // //     fontSize: "14px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //     whiteSpace: "nowrap",
// // // // // // // //   };

// // // // // // // //   const addProductFormCard = {
// // // // // // // //     background: "#fff",
// // // // // // // //     border: "1px solid #e7dff0",
// // // // // // // //     borderRadius: "16px",
// // // // // // // //     padding: "28px",
// // // // // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // // // // //     marginBottom: "24px",
// // // // // // // //   };

// // // // // // // //   const formHeaderRow = {
// // // // // // // //     display: "flex",
// // // // // // // //     justifyContent: "space-between",
// // // // // // // //     alignItems: "center",
// // // // // // // //     gap: "12px",
// // // // // // // //     marginBottom: "8px",
// // // // // // // //   };

// // // // // // // //   const closeButton = {
// // // // // // // //     width: "38px",
// // // // // // // //     height: "38px",
// // // // // // // //     borderRadius: "50%",
// // // // // // // //     border: "none",
// // // // // // // //     background: "#f3e9fb",
// // // // // // // //     color: "#5d3d75",
// // // // // // // //     fontSize: "18px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //     flexShrink: 0,
// // // // // // // //   };

// // // // // // // //   const grid = {
// // // // // // // //     display: "grid",
// // // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // // //     gap: "18px",
// // // // // // // //     marginBottom: "26px",
// // // // // // // //   };

// // // // // // // //   const detailGrid = {
// // // // // // // //     display: "grid",
// // // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // // //     gap: "18px",
// // // // // // // //     marginBottom: "26px",
// // // // // // // //   };

// // // // // // // //   const fieldWrap = {
// // // // // // // //     display: "flex",
// // // // // // // //     flexDirection: "column",
// // // // // // // //   };

// // // // // // // //   const label = {
// // // // // // // //     fontSize: "14px",
// // // // // // // //     fontWeight: "600",
// // // // // // // //     marginBottom: "8px",
// // // // // // // //     color: "#333",
// // // // // // // //   };

// // // // // // // //   const input = {
// // // // // // // //     height: "44px",
// // // // // // // //     border: "1px solid #ddd",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "0 12px",
// // // // // // // //     fontSize: "14px",
// // // // // // // //     outline: "none",
// // // // // // // //     boxSizing: "border-box",
// // // // // // // //     width: "100%",
// // // // // // // //     background: "#fff",
// // // // // // // //   };

// // // // // // // //   const textarea = {
// // // // // // // //     minHeight: "110px",
// // // // // // // //     border: "1px solid #ddd",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "12px",
// // // // // // // //     fontSize: "14px",
// // // // // // // //     outline: "none",
// // // // // // // //     resize: "vertical",
// // // // // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // // // // //     boxSizing: "border-box",
// // // // // // // //     width: "100%",
// // // // // // // //   };

// // // // // // // //   const descriptionWrap = {
// // // // // // // //     display: "flex",
// // // // // // // //     flexDirection: "column",
// // // // // // // //     marginBottom: "26px",
// // // // // // // //   };

// // // // // // // //   const sectionTitle = {
// // // // // // // //     fontSize: "18px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     margin: "24px 0 14px",
// // // // // // // //     color: "#2b2b2b",
// // // // // // // //   };

// // // // // // // //   const fileInput = {
// // // // // // // //     marginTop: "8px",
// // // // // // // //     marginBottom: "16px",
// // // // // // // //   };

// // // // // // // //   const hintText = {
// // // // // // // //     fontSize: "13px",
// // // // // // // //     color: "#666",
// // // // // // // //     marginTop: "-6px",
// // // // // // // //     marginBottom: "10px",
// // // // // // // //   };

// // // // // // // //   const previewWrap = {
// // // // // // // //     marginTop: "10px",
// // // // // // // //     marginBottom: "20px",
// // // // // // // //   };

// // // // // // // //   const previewGrid = {
// // // // // // // //     display: "grid",
// // // // // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // // // // //     gap: "16px",
// // // // // // // //   };

// // // // // // // //   const previewCard = {
// // // // // // // //     border: "1px solid #ddd",
// // // // // // // //     borderRadius: "10px",
// // // // // // // //     padding: "10px",
// // // // // // // //     background: "#fff",
// // // // // // // //     cursor: "grab",
// // // // // // // //   };

// // // // // // // //   const previewImage = {
// // // // // // // //     width: "100%",
// // // // // // // //     height: "160px",
// // // // // // // //     objectFit: "cover",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     border: "1px solid #ddd",
// // // // // // // //     display: "block",
// // // // // // // //     marginBottom: "10px",
// // // // // // // //   };

// // // // // // // //   const previewOrder = {
// // // // // // // //     fontSize: "13px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     marginBottom: "8px",
// // // // // // // //     color: "#444",
// // // // // // // //   };

// // // // // // // //   const actionRow = {
// // // // // // // //     display: "flex",
// // // // // // // //     gap: "8px",
// // // // // // // //     flexWrap: "wrap",
// // // // // // // //   };

// // // // // // // //   const removeButton = {
// // // // // // // //     border: "none",
// // // // // // // //     background: "#b33939",
// // // // // // // //     color: "#fff",
// // // // // // // //     borderRadius: "6px",
// // // // // // // //     padding: "8px 10px",
// // // // // // // //     cursor: "pointer",
// // // // // // // //     fontSize: "12px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //   };

// // // // // // // //   const submitButton = {
// // // // // // // //     marginTop: "10px",
// // // // // // // //     background: "#6f3f8f",
// // // // // // // //     color: "#fff",
// // // // // // // //     border: "none",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "13px 24px",
// // // // // // // //     fontSize: "15px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //   };

// // // // // // // //   const tableWrap = {
// // // // // // // //     width: "100%",
// // // // // // // //     overflowX: "auto",
// // // // // // // //     background: "#fff",
// // // // // // // //     border: "1px solid #e7dff0",
// // // // // // // //     borderRadius: "16px",
// // // // // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // // // // //   };

// // // // // // // //   const table = {
// // // // // // // //     width: "100%",
// // // // // // // //     borderCollapse: "collapse",
// // // // // // // //     minWidth: "900px", // Reduced minWidth since SKU column is removed
// // // // // // // //   };

// // // // // // // //   const th = {
// // // // // // // //     textAlign: "left",
// // // // // // // //     fontSize: "13px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#666",
// // // // // // // //     background: "#faf7fd",
// // // // // // // //     padding: "14px 16px",
// // // // // // // //     borderBottom: "1px solid #eadff3",
// // // // // // // //     whiteSpace: "nowrap",
// // // // // // // //   };

// // // // // // // //   const td = {
// // // // // // // //     padding: "14px 16px",
// // // // // // // //     borderBottom: "1px solid #f0e8f6",
// // // // // // // //     verticalAlign: "middle",
// // // // // // // //     fontSize: "14px",
// // // // // // // //     color: "#333",
// // // // // // // //   };

// // // // // // // //   const productCell = {
// // // // // // // //     display: "flex",
// // // // // // // //     alignItems: "center",
// // // // // // // //     gap: "12px",
// // // // // // // //     minWidth: "260px",
// // // // // // // //   };

// // // // // // // //   const productThumb = {
// // // // // // // //     width: "52px",
// // // // // // // //     height: "52px",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     objectFit: "cover",
// // // // // // // //     border: "1px solid #e5dced",
// // // // // // // //     background: "#f3e9fb",
// // // // // // // //     flexShrink: 0,
// // // // // // // //   };

// // // // // // // //   const productThumbPlaceholder = {
// // // // // // // //     width: "52px",
// // // // // // // //     height: "52px",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     border: "1px solid #e5dced",
// // // // // // // //     background: "#f3e9fb",
// // // // // // // //     display: "flex",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     fontSize: "11px",
// // // // // // // //     color: "#8b6aa3",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     flexShrink: 0,
// // // // // // // //   };

// // // // // // // //   const productName = {
// // // // // // // //     margin: 0,
// // // // // // // //     fontSize: "15px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#2b2b2b",
// // // // // // // //     lineHeight: "1.4",
// // // // // // // //   };

// // // // // // // //   const productSubText = {
// // // // // // // //     fontSize: "12px",
// // // // // // // //     color: "#777",
// // // // // // // //     marginTop: "4px",
// // // // // // // //   };

// // // // // // // //   const priceMain = {
// // // // // // // //     fontSize: "15px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#6f3f8f",
// // // // // // // //   };

// // // // // // // //   const stockPill = {
// // // // // // // //     display: "inline-flex",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     padding: "6px 10px",
// // // // // // // //     borderRadius: "999px",
// // // // // // // //     fontSize: "12px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     background: "#eaf8ee",
// // // // // // // //     color: "#1f8b4c",
// // // // // // // //     minWidth: "80px",
// // // // // // // //   };

// // // // // // // //   const outOfStockPill = {
// // // // // // // //     ...stockPill,
// // // // // // // //     background: "#fff0f0",
// // // // // // // //     color: "#c0392b",
// // // // // // // //   };

// // // // // // // //   const stockEditWrap = {
// // // // // // // //     display: "flex",
// // // // // // // //     alignItems: "center",
// // // // // // // //     gap: "8px",
// // // // // // // //     flexWrap: "wrap",
// // // // // // // //   };

// // // // // // // //   const stockInput = {
// // // // // // // //     height: "38px",
// // // // // // // //     border: "1px solid #ddd",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "0 10px",
// // // // // // // //     fontSize: "14px",
// // // // // // // //     outline: "none",
// // // // // // // //     width: "90px",
// // // // // // // //     boxSizing: "border-box",
// // // // // // // //   };

// // // // // // // //   const smallPrimaryButton = {
// // // // // // // //     background: "#6f3f8f",
// // // // // // // //     color: "#fff",
// // // // // // // //     border: "none",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "8px 12px",
// // // // // // // //     fontSize: "12px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //   };

// // // // // // // //   const smallSecondaryButton = {
// // // // // // // //     background: "#fff",
// // // // // // // //     color: "#5d3d75",
// // // // // // // //     border: "1px solid #d8c9e4",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "8px 12px",
// // // // // // // //     fontSize: "12px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //   };

// // // // // // // //   const editButton = {
// // // // // // // //     background: "#6f3f8f", // Changed to purple to match the theme
// // // // // // // //     color: "#fff",
// // // // // // // //     border: "none",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "8px 12px",
// // // // // // // //     fontSize: "12px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //     marginRight: "8px",
// // // // // // // //   };

// // // // // // // //   const deleteButton = {
// // // // // // // //     background: "#fff1f1",
// // // // // // // //     color: "#b33939",
// // // // // // // //     border: "1px solid #f0c7c7",
// // // // // // // //     borderRadius: "8px",
// // // // // // // //     padding: "8px 12px",
// // // // // // // //     fontSize: "12px",
// // // // // // // //     fontWeight: "700",
// // // // // // // //     cursor: "pointer",
// // // // // // // //     whiteSpace: "nowrap",
// // // // // // // //   };

// // // // // // // //   const actionsContainer = {
// // // // // // // //     display: "flex",
// // // // // // // //     gap: "8px",
// // // // // // // //     flexWrap: "wrap",
// // // // // // // //   };

// // // // // // // //   const noProductsBox = {
// // // // // // // //     background: "#fff",
// // // // // // // //     border: "1px dashed #d9c8e7",
// // // // // // // //     borderRadius: "16px",
// // // // // // // //     padding: "40px 24px",
// // // // // // // //     textAlign: "center",
// // // // // // // //     color: "#666",
// // // // // // // //     fontSize: "15px",
// // // // // // // //   };

// // // // // // // //   // Function to handle edit button click
// // // // // // // //   const onEditClick = (product) => {
// // // // // // // //     // Populate form with product data
// // // // // // // //     setFormData({
// // // // // // // //       id: product.id,
// // // // // // // //       productName: product.name || "",
// // // // // // // //       metalType: product.metalType || "",
// // // // // // // //       productDescription: product.description || "",
// // // // // // // //       purity: product.purity || "",
// // // // // // // //       weight: product.weight || "",
// // // // // // // //       pricePerGram: product.pricePerGram || "",
// // // // // // // //       makingCharges: product.makingCharges || "",
// // // // // // // //       offerPrice: product.offerPrice || "",
// // // // // // // //       totalPrice: product.totalPrice || "",
// // // // // // // //       stock: product.stock || "",
// // // // // // // //     });
    
// // // // // // // //     // Set edit mode to true
// // // // // // // //     setIsEditMode(true);
    
// // // // // // // //     // Show the form
// // // // // // // //     setShowAddProductForm(true);
    
// // // // // // // //     // Call the parent's handleEditProduct if provided
// // // // // // // //     if (handleEditProduct) {
// // // // // // // //       handleEditProduct(product);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={productsPageWrap}>
// // // // // // // //       <div style={productsHeader}>
// // // // // // // //         <div>
// // // // // // // //           <h1 style={productsTitle}>Products</h1>
// // // // // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // // // // //         </div>

// // // // // // // //         <div style={productsActionRow}>
// // // // // // // //           <select
// // // // // // // //             value={productFilterType}
// // // // // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // // // // //             style={filterSelect}
// // // // // // // //           >
// // // // // // // //             <option value="all">All Products</option>
// // // // // // // //             {storedMetals.map((metal) => (
// // // // // // // //               <option key={metal} value={metal}>
// // // // // // // //                 {metal}
// // // // // // // //               </option>
// // // // // // // //             ))}
// // // // // // // //           </select>

// // // // // // // //           <button
// // // // // // // //             type="button"
// // // // // // // //             style={addButton}
// // // // // // // //             onClick={() => {
// // // // // // // //               // Reset form when adding new product
// // // // // // // //               setFormData({
// // // // // // // //                 productName: "",
// // // // // // // //                 metalType: "",
// // // // // // // //                 productDescription: "",
// // // // // // // //                 purity: "",
// // // // // // // //                 weight: "",
// // // // // // // //                 pricePerGram: "",
// // // // // // // //                 makingCharges: "",
// // // // // // // //                 offerPrice: "",
// // // // // // // //                 totalPrice: "",
// // // // // // // //                 stock: "",
// // // // // // // //               });
// // // // // // // //               setIsEditMode(false);
// // // // // // // //               setShowAddProductForm((prev) => !prev);
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {showAddProductForm ? (
// // // // // // // //         <div style={addProductFormCard}>
// // // // // // // //           <div style={formHeaderRow}>
// // // // // // // //             <div style={heading}>
// // // // // // // //               {formData.id ? "Edit Product" : "Add Product"}
// // // // // // // //             </div>

// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               style={closeButton}
// // // // // // // //               onClick={() => {
// // // // // // // //                 setShowAddProductForm(false);
// // // // // // // //                 setIsEditMode(false);
// // // // // // // //                 // Reset form
// // // // // // // //                 setFormData({
// // // // // // // //                   productName: "",
// // // // // // // //                   metalType: "",
// // // // // // // //                   productDescription: "",
// // // // // // // //                   purity: "",
// // // // // // // //                   weight: "",
// // // // // // // //                   pricePerGram: "",
// // // // // // // //                   makingCharges: "",
// // // // // // // //                   offerPrice: "",
// // // // // // // //                   totalPrice: "",
// // // // // // // //                   stock: "",
// // // // // // // //                 });
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               ✕
// // // // // // // //             </button>
// // // // // // // //           </div>

// // // // // // // //           <form onSubmit={handleSubmit}>
// // // // // // // //             <div style={grid}>
// // // // // // // //               <div style={fieldWrap}>
// // // // // // // //                 <label style={label}>Product Name</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   name="productName"
// // // // // // // //                   value={formData.productName}
// // // // // // // //                   onChange={handleInputChange}
// // // // // // // //                   placeholder="Enter product name"
// // // // // // // //                   style={input}
// // // // // // // //                 />
// // // // // // // //               </div>

// // // // // // // //               <div style={fieldWrap}>
// // // // // // // //                 <label style={label}>Metal Type</label>
// // // // // // // //                 <select
// // // // // // // //                   name="metalType"
// // // // // // // //                   value={formData.metalType}
// // // // // // // //                   onChange={handleInputChange}
// // // // // // // //                   style={input}
// // // // // // // //                 >
// // // // // // // //                   <option value="">Select metal type</option>
// // // // // // // //                   {storedMetals.map((metal) => (
// // // // // // // //                     <option key={metal} value={metal}>
// // // // // // // //                       {metal}
// // // // // // // //                     </option>
// // // // // // // //                   ))}
// // // // // // // //                 </select>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             <div style={descriptionWrap}>
// // // // // // // //               <label style={label}>Product Description</label>
// // // // // // // //               <textarea
// // // // // // // //                 name="productDescription"
// // // // // // // //                 value={formData.productDescription}
// // // // // // // //                 onChange={handleInputChange}
// // // // // // // //                 placeholder="Enter product description"
// // // // // // // //                 style={textarea}
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             {formData.metalType && (
// // // // // // // //               <div style={detailGrid}>
// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Purity</label>
// // // // // // // //                   <select
// // // // // // // //                     name="purity"
// // // // // // // //                     value={formData.purity}
// // // // // // // //                     onChange={handleInputChange}
// // // // // // // //                     style={input}
// // // // // // // //                   >
// // // // // // // //                     <option value="">Select purity</option>
// // // // // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // // // // //                       <option key={purity} value={purity}>
// // // // // // // //                         {purity}
// // // // // // // //                       </option>
// // // // // // // //                     ))}
// // // // // // // //                   </select>
// // // // // // // //                 </div>

// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Weight</label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     name="weight"
// // // // // // // //                     value={formData.weight}
// // // // // // // //                     onChange={handleInputChange}
// // // // // // // //                     placeholder="Enter weight"
// // // // // // // //                     style={input}
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Price Per Gram</label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     name="pricePerGram"
// // // // // // // //                     value={formData.pricePerGram}
// // // // // // // //                     onChange={handleInputChange}
// // // // // // // //                     placeholder="Enter price per gram"
// // // // // // // //                     style={input}
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Making Charges</label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     name="makingCharges"
// // // // // // // //                     value={formData.makingCharges}
// // // // // // // //                     onChange={handleInputChange}
// // // // // // // //                     placeholder="Enter making charges"
// // // // // // // //                     style={input}
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Offer Price</label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     name="offerPrice"
// // // // // // // //                     value={formData.offerPrice}
// // // // // // // //                     onChange={handleInputChange}
// // // // // // // //                     placeholder="Enter offer price"
// // // // // // // //                     style={input}
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Total Price</label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     name="totalPrice"
// // // // // // // //                     value={formData.totalPrice}
// // // // // // // //                     readOnly
// // // // // // // //                     placeholder="Auto calculated"
// // // // // // // //                     style={{
// // // // // // // //                       ...input,
// // // // // // // //                       background: "#f4f0f8",
// // // // // // // //                       color: "#5d3d75",
// // // // // // // //                       fontWeight: "700",
// // // // // // // //                     }}
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div style={fieldWrap}>
// // // // // // // //                   <label style={label}>Stock</label>
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     name="stock"
// // // // // // // //                     value={formData.stock}
// // // // // // // //                     onChange={handleInputChange}
// // // // // // // //                     placeholder="Enter stock"
// // // // // // // //                     style={input}
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // // // // //             <div style={fieldWrap}>
// // // // // // // //               <label style={label}>Upload Product Images</label>
// // // // // // // //               <input
// // // // // // // //                 ref={fileInputRef}
// // // // // // // //                 type="file"
// // // // // // // //                 accept="image/*"
// // // // // // // //                 multiple
// // // // // // // //                 onChange={handleImageChange}
// // // // // // // //                 style={fileInput}
// // // // // // // //               />
// // // // // // // //               <div style={hintText}>
// // // // // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // // // // //                 the main image.
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {previews.length > 0 && (
// // // // // // // //               <div style={previewWrap}>
// // // // // // // //                 <div style={previewGrid}>
// // // // // // // //                   {previews.map((img, index) => (
// // // // // // // //                     <div
// // // // // // // //                       key={img.id}
// // // // // // // //                       style={previewCard}
// // // // // // // //                       draggable
// // // // // // // //                       onDragStart={() => handleDragStart(index)}
// // // // // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // // // // //                       onDrop={handleDrop}
// // // // // // // //                       onDragEnd={handleDragEnd}
// // // // // // // //                     >
// // // // // // // //                       <img
// // // // // // // //                         src={img.src}
// // // // // // // //                         alt={`Preview ${index + 1}`}
// // // // // // // //                         style={previewImage}
// // // // // // // //                       />

// // // // // // // //                       <div style={previewOrder}>
// // // // // // // //                         Image {index + 1}
// // // // // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // // // // //                       </div>

// // // // // // // //                       <div style={actionRow}>
// // // // // // // //                         <button
// // // // // // // //                           type="button"
// // // // // // // //                           style={removeButton}
// // // // // // // //                           onClick={() => removeImage(index)}
// // // // // // // //                         >
// // // // // // // //                           Remove
// // // // // // // //                         </button>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             <button type="submit" style={submitButton}>
// // // // // // // //               {formData.id ? "Update Product" : "Save Product"}
// // // // // // // //             </button>
// // // // // // // //           </form>
// // // // // // // //         </div>
// // // // // // // //       ) : filteredProducts.length > 0 ? (
// // // // // // // //         <div style={tableWrap}>
// // // // // // // //           <table style={table}>
// // // // // // // //             <thead>
// // // // // // // //               <tr>
// // // // // // // //                 <th style={th}>Product</th>
// // // // // // // //                 <th style={th}>Stock</th>
// // // // // // // //                 <th style={th}>Price</th>
// // // // // // // //                 <th style={th}>Category</th>
// // // // // // // //                 <th style={th}>Purity</th>
// // // // // // // //                 <th style={th}>Actions</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>

// // // // // // // //             <tbody>
// // // // // // // //               {filteredProducts.map((product) => {
// // // // // // // //                 const mainImage = product.images?.[0] || "";
// // // // // // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // // // // // //                 return (
// // // // // // // //                   <tr key={product.id}>
// // // // // // // //                     <td style={td}>
// // // // // // // //                       <div style={productCell}>
// // // // // // // //                         {mainImage ? (
// // // // // // // //                           <img
// // // // // // // //                             src={mainImage}
// // // // // // // //                             alt={product.name}
// // // // // // // //                             style={productThumb}
// // // // // // // //                           />
// // // // // // // //                         ) : (
// // // // // // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // // // // // //                         )}

// // // // // // // //                         <div>
// // // // // // // //                           <p style={productName}>{product.name}</p>
// // // // // // // //                           <div style={productSubText}>
// // // // // // // //                             {product.metalType || "-"}
// // // // // // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     </td>

// // // // // // // //                     <td style={td}>
// // // // // // // //                       {editingStockId === product.id ? (
// // // // // // // //                         <div style={stockEditWrap}>
// // // // // // // //                           <input
// // // // // // // //                             type="number"
// // // // // // // //                             value={editingStockValue}
// // // // // // // //                             onChange={(e) => setEditingStockValue(e.target.value)}
// // // // // // // //                             placeholder="Stock"
// // // // // // // //                             style={stockInput}
// // // // // // // //                           />
// // // // // // // //                           <button
// // // // // // // //                             type="button"
// // // // // // // //                             style={smallPrimaryButton}
// // // // // // // //                             onClick={() => saveStockEdit(product.id)}
// // // // // // // //                           >
// // // // // // // //                             Save
// // // // // // // //                           </button>
// // // // // // // //                           <button
// // // // // // // //                             type="button"
// // // // // // // //                             style={smallSecondaryButton}
// // // // // // // //                             onClick={() => setEditingStockId(null)}
// // // // // // // //                           >
// // // // // // // //                             Cancel
// // // // // // // //                           </button>
// // // // // // // //                         </div>
// // // // // // // //                       ) : (
// // // // // // // //                         <div style={stockEditWrap}>
// // // // // // // //                           <span style={isInStock ? stockPill : outOfStockPill}>
// // // // // // // //                             {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // // // // // //                           </span>
// // // // // // // //                           <button
// // // // // // // //                             type="button"
// // // // // // // //                             style={smallPrimaryButton}
// // // // // // // //                             onClick={() => startStockEdit(product)}
// // // // // // // //                           >
// // // // // // // //                             Update
// // // // // // // //                           </button>
// // // // // // // //                         </div>
// // // // // // // //                       )}
// // // // // // // //                     </td>

// // // // // // // //                     <td style={td}>
// // // // // // // //                       <div style={priceMain}>
// // // // // // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // // // // //                       </div>
// // // // // // // //                     </td>

// // // // // // // //                     <td style={td}>{product.metalType || "-"}</td>

// // // // // // // //                     <td style={td}>{product.purity || "-"}</td>

// // // // // // // //                     <td style={td}>
// // // // // // // //                       <div style={actionsContainer}>
// // // // // // // //                         <button
// // // // // // // //                           type="button"
// // // // // // // //                           style={editButton}
// // // // // // // //                           onClick={() => onEditClick(product)}
// // // // // // // //                         >
// // // // // // // //                           Edit
// // // // // // // //                         </button>
// // // // // // // //                         <button
// // // // // // // //                           type="button"
// // // // // // // //                           style={deleteButton}
// // // // // // // //                           onClick={() => confirmDeleteProduct(product.id)}
// // // // // // // //                         >
// // // // // // // //                           Remove
// // // // // // // //                         </button>
// // // // // // // //                       </div>
// // // // // // // //                     </td>
// // // // // // // //                   </tr>
// // // // // // // //                 );
// // // // // // // //               })}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       ) : (
// // // // // // // //         <div style={noProductsBox}>
// // // // // // // //           {productFilterType === "all" ? (
// // // // // // // //             <>
// // // // // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // // // // //               your first product.
// // // // // // // //             </>
// // // // // // // //           ) : (
// // // // // // // //             <>No {productFilterType} products found.</>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // import React from "react";

// // // // // // // export default function Products({
// // // // // // //   storedMetals = [],
// // // // // // //   metalPurities = {},
// // // // // // //   productFilterType,
// // // // // // //   setProductFilterType,
// // // // // // //   showAddProductForm,
// // // // // // //   setShowAddProductForm,
// // // // // // //   formData,
// // // // // // //   handleInputChange,
// // // // // // //   handleSubmit,
// // // // // // //   fileInputRef,
// // // // // // //   handleImageChange,
// // // // // // //   previews = [],
// // // // // // //   handleDragStart,
// // // // // // //   handleDragEnter,
// // // // // // //   handleDrop,
// // // // // // //   handleDragEnd,
// // // // // // //   removeImage,
// // // // // // //   filteredProducts = [],
// // // // // // //   confirmDeleteProduct,
// // // // // // //   editingStockId,
// // // // // // //   editingStockValue,
// // // // // // //   setEditingStockValue,
// // // // // // //   saveStockEdit,
// // // // // // //   setEditingStockId,
// // // // // // //   startStockEdit,
// // // // // // //   setFormData,
// // // // // // //   setIsEditMode,
// // // // // // //   setPreviews,
// // // // // // // }) {
// // // // // // //   const heading = {
// // // // // // //     fontSize: "28px",
// // // // // // //     fontWeight: "700",
// // // // // // //     marginBottom: "24px",
// // // // // // //     color: "#222",
// // // // // // //   };

// // // // // // //   const productsPageWrap = {
// // // // // // //     width: "100%",
// // // // // // //     maxWidth: "1300px",
// // // // // // //   };

// // // // // // //   const productsHeader = {
// // // // // // //     display: "flex",
// // // // // // //     justifyContent: "space-between",
// // // // // // //     alignItems: "flex-start",
// // // // // // //     gap: "12px",
// // // // // // //     marginBottom: "24px",
// // // // // // //     flexWrap: "wrap",
// // // // // // //   };

// // // // // // //   const productsTitle = {
// // // // // // //     fontSize: "28px",
// // // // // // //     fontWeight: "700",
// // // // // // //     color: "#222",
// // // // // // //     margin: 0,
// // // // // // //   };

// // // // // // //   const productsSubTitle = {
// // // // // // //     fontSize: "14px",
// // // // // // //     color: "#666",
// // // // // // //     marginTop: "6px",
// // // // // // //   };

// // // // // // //   const productsActionRow = {
// // // // // // //     display: "flex",
// // // // // // //     alignItems: "center",
// // // // // // //     gap: "12px",
// // // // // // //     flexWrap: "wrap",
// // // // // // //   };

// // // // // // //   const filterSelect = {
// // // // // // //     height: "44px",
// // // // // // //     minWidth: "180px",
// // // // // // //     border: "1px solid #ddd",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "0 12px",
// // // // // // //     fontSize: "14px",
// // // // // // //     outline: "none",
// // // // // // //     background: "#fff",
// // // // // // //     color: "#333",
// // // // // // //     boxSizing: "border-box",
// // // // // // //   };

// // // // // // //   const addButton = {
// // // // // // //     background: "#6f3f8f",
// // // // // // //     color: "#fff",
// // // // // // //     border: "none",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "11px 18px",
// // // // // // //     fontSize: "14px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //     whiteSpace: "nowrap",
// // // // // // //   };

// // // // // // //   const addProductFormCard = {
// // // // // // //     background: "#fff",
// // // // // // //     border: "1px solid #e7dff0",
// // // // // // //     borderRadius: "16px",
// // // // // // //     padding: "28px",
// // // // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // // // //     marginBottom: "24px",
// // // // // // //   };

// // // // // // //   const formHeaderRow = {
// // // // // // //     display: "flex",
// // // // // // //     justifyContent: "space-between",
// // // // // // //     alignItems: "center",
// // // // // // //     gap: "12px",
// // // // // // //     marginBottom: "8px",
// // // // // // //   };

// // // // // // //   const closeButton = {
// // // // // // //     width: "38px",
// // // // // // //     height: "38px",
// // // // // // //     borderRadius: "50%",
// // // // // // //     border: "none",
// // // // // // //     background: "#f3e9fb",
// // // // // // //     color: "#5d3d75",
// // // // // // //     fontSize: "18px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //     flexShrink: 0,
// // // // // // //   };

// // // // // // //   const grid = {
// // // // // // //     display: "grid",
// // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // //     gap: "18px",
// // // // // // //     marginBottom: "26px",
// // // // // // //   };

// // // // // // //   const detailGrid = {
// // // // // // //     display: "grid",
// // // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // // //     gap: "18px",
// // // // // // //     marginBottom: "26px",
// // // // // // //   };

// // // // // // //   const fieldWrap = {
// // // // // // //     display: "flex",
// // // // // // //     flexDirection: "column",
// // // // // // //   };

// // // // // // //   const label = {
// // // // // // //     fontSize: "14px",
// // // // // // //     fontWeight: "600",
// // // // // // //     marginBottom: "8px",
// // // // // // //     color: "#333",
// // // // // // //   };

// // // // // // //   const input = {
// // // // // // //     height: "44px",
// // // // // // //     border: "1px solid #ddd",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "0 12px",
// // // // // // //     fontSize: "14px",
// // // // // // //     outline: "none",
// // // // // // //     boxSizing: "border-box",
// // // // // // //     width: "100%",
// // // // // // //     background: "#fff",
// // // // // // //   };

// // // // // // //   const textarea = {
// // // // // // //     minHeight: "110px",
// // // // // // //     border: "1px solid #ddd",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "12px",
// // // // // // //     fontSize: "14px",
// // // // // // //     outline: "none",
// // // // // // //     resize: "vertical",
// // // // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // // // //     boxSizing: "border-box",
// // // // // // //     width: "100%",
// // // // // // //   };

// // // // // // //   const descriptionWrap = {
// // // // // // //     display: "flex",
// // // // // // //     flexDirection: "column",
// // // // // // //     marginBottom: "26px",
// // // // // // //   };

// // // // // // //   const sectionTitle = {
// // // // // // //     fontSize: "18px",
// // // // // // //     fontWeight: "700",
// // // // // // //     margin: "24px 0 14px",
// // // // // // //     color: "#2b2b2b",
// // // // // // //   };

// // // // // // //   const fileInput = {
// // // // // // //     marginTop: "8px",
// // // // // // //     marginBottom: "16px",
// // // // // // //   };

// // // // // // //   const hintText = {
// // // // // // //     fontSize: "13px",
// // // // // // //     color: "#666",
// // // // // // //     marginTop: "-6px",
// // // // // // //     marginBottom: "10px",
// // // // // // //   };

// // // // // // //   const previewWrap = {
// // // // // // //     marginTop: "10px",
// // // // // // //     marginBottom: "20px",
// // // // // // //   };

// // // // // // //   const previewGrid = {
// // // // // // //     display: "grid",
// // // // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // // // //     gap: "16px",
// // // // // // //   };

// // // // // // //   const previewCard = {
// // // // // // //     border: "1px solid #ddd",
// // // // // // //     borderRadius: "10px",
// // // // // // //     padding: "10px",
// // // // // // //     background: "#fff",
// // // // // // //     cursor: "grab",
// // // // // // //   };

// // // // // // //   const previewImage = {
// // // // // // //     width: "100%",
// // // // // // //     height: "160px",
// // // // // // //     objectFit: "cover",
// // // // // // //     borderRadius: "8px",
// // // // // // //     border: "1px solid #ddd",
// // // // // // //     display: "block",
// // // // // // //     marginBottom: "10px",
// // // // // // //   };

// // // // // // //   const previewOrder = {
// // // // // // //     fontSize: "13px",
// // // // // // //     fontWeight: "700",
// // // // // // //     marginBottom: "8px",
// // // // // // //     color: "#444",
// // // // // // //   };

// // // // // // //   const actionRow = {
// // // // // // //     display: "flex",
// // // // // // //     gap: "8px",
// // // // // // //     flexWrap: "wrap",
// // // // // // //   };

// // // // // // //   const removeButton = {
// // // // // // //     border: "none",
// // // // // // //     background: "#b33939",
// // // // // // //     color: "#fff",
// // // // // // //     borderRadius: "6px",
// // // // // // //     padding: "8px 10px",
// // // // // // //     cursor: "pointer",
// // // // // // //     fontSize: "12px",
// // // // // // //     fontWeight: "700",
// // // // // // //   };

// // // // // // //   const submitButton = {
// // // // // // //     marginTop: "10px",
// // // // // // //     background: "#6f3f8f",
// // // // // // //     color: "#fff",
// // // // // // //     border: "none",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "13px 24px",
// // // // // // //     fontSize: "15px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //   };

// // // // // // //   const tableWrap = {
// // // // // // //     width: "100%",
// // // // // // //     overflowX: "auto",
// // // // // // //     background: "#fff",
// // // // // // //     border: "1px solid #e7dff0",
// // // // // // //     borderRadius: "16px",
// // // // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // // // //   };

// // // // // // //   const table = {
// // // // // // //     width: "100%",
// // // // // // //     borderCollapse: "collapse",
// // // // // // //     minWidth: "900px",
// // // // // // //   };

// // // // // // //   const th = {
// // // // // // //     textAlign: "left",
// // // // // // //     fontSize: "13px",
// // // // // // //     fontWeight: "700",
// // // // // // //     color: "#666",
// // // // // // //     background: "#faf7fd",
// // // // // // //     padding: "14px 16px",
// // // // // // //     borderBottom: "1px solid #eadff3",
// // // // // // //     whiteSpace: "nowrap",
// // // // // // //   };

// // // // // // //   const td = {
// // // // // // //     padding: "14px 16px",
// // // // // // //     borderBottom: "1px solid #f0e8f6",
// // // // // // //     verticalAlign: "middle",
// // // // // // //     fontSize: "14px",
// // // // // // //     color: "#333",
// // // // // // //   };

// // // // // // //   const productCell = {
// // // // // // //     display: "flex",
// // // // // // //     alignItems: "center",
// // // // // // //     gap: "12px",
// // // // // // //     minWidth: "260px",
// // // // // // //   };

// // // // // // //   const productThumb = {
// // // // // // //     width: "52px",
// // // // // // //     height: "52px",
// // // // // // //     borderRadius: "8px",
// // // // // // //     objectFit: "cover",
// // // // // // //     border: "1px solid #e5dced",
// // // // // // //     background: "#f3e9fb",
// // // // // // //     flexShrink: 0,
// // // // // // //   };

// // // // // // //   const productThumbPlaceholder = {
// // // // // // //     width: "52px",
// // // // // // //     height: "52px",
// // // // // // //     borderRadius: "8px",
// // // // // // //     border: "1px solid #e5dced",
// // // // // // //     background: "#f3e9fb",
// // // // // // //     display: "flex",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     fontSize: "11px",
// // // // // // //     color: "#8b6aa3",
// // // // // // //     fontWeight: "700",
// // // // // // //     flexShrink: 0,
// // // // // // //   };

// // // // // // //   const productName = {
// // // // // // //     margin: 0,
// // // // // // //     fontSize: "15px",
// // // // // // //     fontWeight: "700",
// // // // // // //     color: "#2b2b2b",
// // // // // // //     lineHeight: "1.4",
// // // // // // //   };

// // // // // // //   const productSubText = {
// // // // // // //     fontSize: "12px",
// // // // // // //     color: "#777",
// // // // // // //     marginTop: "4px",
// // // // // // //   };

// // // // // // //   const priceMain = {
// // // // // // //     fontSize: "15px",
// // // // // // //     fontWeight: "700",
// // // // // // //     color: "#6f3f8f",
// // // // // // //   };

// // // // // // //   const stockPill = {
// // // // // // //     display: "inline-flex",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     padding: "6px 10px",
// // // // // // //     borderRadius: "999px",
// // // // // // //     fontSize: "12px",
// // // // // // //     fontWeight: "700",
// // // // // // //     background: "#eaf8ee",
// // // // // // //     color: "#1f8b4c",
// // // // // // //     minWidth: "80px",
// // // // // // //   };

// // // // // // //   const outOfStockPill = {
// // // // // // //     ...stockPill,
// // // // // // //     background: "#fff0f0",
// // // // // // //     color: "#c0392b",
// // // // // // //   };

// // // // // // //   const stockEditWrap = {
// // // // // // //     display: "flex",
// // // // // // //     alignItems: "center",
// // // // // // //     gap: "8px",
// // // // // // //     flexWrap: "wrap",
// // // // // // //   };

// // // // // // //   const stockInput = {
// // // // // // //     height: "38px",
// // // // // // //     border: "1px solid #ddd",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "0 10px",
// // // // // // //     fontSize: "14px",
// // // // // // //     outline: "none",
// // // // // // //     width: "90px",
// // // // // // //     boxSizing: "border-box",
// // // // // // //   };

// // // // // // //   const smallPrimaryButton = {
// // // // // // //     background: "#6f3f8f",
// // // // // // //     color: "#fff",
// // // // // // //     border: "none",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "8px 12px",
// // // // // // //     fontSize: "12px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //   };

// // // // // // //   const smallSecondaryButton = {
// // // // // // //     background: "#fff",
// // // // // // //     color: "#5d3d75",
// // // // // // //     border: "1px solid #d8c9e4",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "8px 12px",
// // // // // // //     fontSize: "12px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //   };

// // // // // // //   const editButton = {
// // // // // // //     background: "#6f3f8f",
// // // // // // //     color: "#fff",
// // // // // // //     border: "none",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "8px 12px",
// // // // // // //     fontSize: "12px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //   };

// // // // // // //   const deleteButton = {
// // // // // // //     background: "#fff1f1",
// // // // // // //     color: "#b33939",
// // // // // // //     border: "1px solid #f0c7c7",
// // // // // // //     borderRadius: "8px",
// // // // // // //     padding: "8px 12px",
// // // // // // //     fontSize: "12px",
// // // // // // //     fontWeight: "700",
// // // // // // //     cursor: "pointer",
// // // // // // //     whiteSpace: "nowrap",
// // // // // // //   };

// // // // // // //   const actionsContainer = {
// // // // // // //     display: "flex",
// // // // // // //     gap: "8px",
// // // // // // //     flexWrap: "wrap",
// // // // // // //   };

// // // // // // //   const noProductsBox = {
// // // // // // //     background: "#fff",
// // // // // // //     border: "1px dashed #d9c8e7",
// // // // // // //     borderRadius: "16px",
// // // // // // //     padding: "40px 24px",
// // // // // // //     textAlign: "center",
// // // // // // //     color: "#666",
// // // // // // //     fontSize: "15px",
// // // // // // //   };

// // // // // // //   // Function to handle edit button click
// // // // // // //   const handleEditClick = (product) => {
// // // // // // //     // Map the product data to match formData structure
// // // // // // //     const editedFormData = {
// // // // // // //       id: product.id,
// // // // // // //       productName: product.name || "",
// // // // // // //       metalType: product.metalType || "",
// // // // // // //       productDescription: product.description || "",
// // // // // // //       purity: product.purity || "",
// // // // // // //       weight: product.weight || "",
// // // // // // //       pricePerGram: product.pricePerGram || "",
// // // // // // //       makingCharges: product.makingCharges || "",
// // // // // // //       offerPrice: product.offerPrice || "",
// // // // // // //       totalPrice: product.totalPrice || "",
// // // // // // //       stock: product.stock || "",
// // // // // // //     };
    
// // // // // // //     // Update form data with product details
// // // // // // //     setFormData(editedFormData);
    
// // // // // // //     // Set edit mode to true
// // // // // // //     setIsEditMode(true);
    
// // // // // // //     // Convert image URLs to preview format if they exist
// // // // // // //     if (product.images && product.images.length > 0) {
// // // // // // //       const imagePreviews = product.images.map((src, index) => ({
// // // // // // //         id: `existing-${index}-${Date.now()}`,
// // // // // // //         src: src,
// // // // // // //         name: `Image ${index + 1}`,
// // // // // // //       }));
// // // // // // //       setPreviews(imagePreviews);
// // // // // // //     }
    
// // // // // // //     // Show the form
// // // // // // //     setShowAddProductForm(true);
// // // // // // //   };

// // // // // // //   // Function to handle closing the form
// // // // // // //   const handleCloseForm = () => {
// // // // // // //     setShowAddProductForm(false);
// // // // // // //     setIsEditMode(false);
// // // // // // //     // Reset form
// // // // // // //     setFormData({
// // // // // // //       productName: "",
// // // // // // //       metalType: "",
// // // // // // //       productDescription: "",
// // // // // // //       purity: "",
// // // // // // //       weight: "",
// // // // // // //       pricePerGram: "",
// // // // // // //       makingCharges: "",
// // // // // // //       offerPrice: "",
// // // // // // //       totalPrice: "",
// // // // // // //       stock: "",
// // // // // // //     });
// // // // // // //     setPreviews([]);
// // // // // // //     if (fileInputRef.current) {
// // // // // // //       fileInputRef.current.value = "";
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Function to handle add new product button
// // // // // // //   const handleAddNewClick = () => {
// // // // // // //     // Reset form when adding new product
// // // // // // //     setFormData({
// // // // // // //       productName: "",
// // // // // // //       metalType: "",
// // // // // // //       productDescription: "",
// // // // // // //       purity: "",
// // // // // // //       weight: "",
// // // // // // //       pricePerGram: "",
// // // // // // //       makingCharges: "",
// // // // // // //       offerPrice: "",
// // // // // // //       totalPrice: "",
// // // // // // //       stock: "",
// // // // // // //     });
// // // // // // //     setIsEditMode(false);
// // // // // // //     setPreviews([]);
// // // // // // //     if (fileInputRef.current) {
// // // // // // //       fileInputRef.current.value = "";
// // // // // // //     }
// // // // // // //     setShowAddProductForm((prev) => !prev);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={productsPageWrap}>
// // // // // // //       <div style={productsHeader}>
// // // // // // //         <div>
// // // // // // //           <h1 style={productsTitle}>Products</h1>
// // // // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // // // //         </div>

// // // // // // //         <div style={productsActionRow}>
// // // // // // //           <select
// // // // // // //             value={productFilterType}
// // // // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // // // //             style={filterSelect}
// // // // // // //           >
// // // // // // //             <option value="all">All Products</option>
// // // // // // //             {storedMetals.map((metal) => (
// // // // // // //               <option key={metal} value={metal}>
// // // // // // //                 {metal}
// // // // // // //               </option>
// // // // // // //             ))}
// // // // // // //           </select>

// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             style={addButton}
// // // // // // //             onClick={handleAddNewClick}
// // // // // // //           >
// // // // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {showAddProductForm ? (
// // // // // // //         <div style={addProductFormCard}>
// // // // // // //           <div style={formHeaderRow}>
// // // // // // //             <div style={heading}>
// // // // // // //               {formData.id ? "Edit Product" : "Add Product"}
// // // // // // //             </div>

// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               style={closeButton}
// // // // // // //               onClick={handleCloseForm}
// // // // // // //             >
// // // // // // //               ✕
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //           <form onSubmit={handleSubmit}>
// // // // // // //             <div style={grid}>
// // // // // // //               <div style={fieldWrap}>
// // // // // // //                 <label style={label}>Product Name</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   name="productName"
// // // // // // //                   value={formData.productName || ""}
// // // // // // //                   onChange={handleInputChange}
// // // // // // //                   placeholder="Enter product name"
// // // // // // //                   style={input}
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               <div style={fieldWrap}>
// // // // // // //                 <label style={label}>Metal Type</label>
// // // // // // //                 <select
// // // // // // //                   name="metalType"
// // // // // // //                   value={formData.metalType || ""}
// // // // // // //                   onChange={handleInputChange}
// // // // // // //                   style={input}
// // // // // // //                 >
// // // // // // //                   <option value="">Select metal type</option>
// // // // // // //                   {storedMetals.map((metal) => (
// // // // // // //                     <option key={metal} value={metal}>
// // // // // // //                       {metal}
// // // // // // //                     </option>
// // // // // // //                   ))}
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             <div style={descriptionWrap}>
// // // // // // //               <label style={label}>Product Description</label>
// // // // // // //               <textarea
// // // // // // //                 name="productDescription"
// // // // // // //                 value={formData.productDescription || ""}
// // // // // // //                 onChange={handleInputChange}
// // // // // // //                 placeholder="Enter product description"
// // // // // // //                 style={textarea}
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             {formData.metalType && (
// // // // // // //               <div style={detailGrid}>
// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Purity</label>
// // // // // // //                   <select
// // // // // // //                     name="purity"
// // // // // // //                     value={formData.purity || ""}
// // // // // // //                     onChange={handleInputChange}
// // // // // // //                     style={input}
// // // // // // //                   >
// // // // // // //                     <option value="">Select purity</option>
// // // // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // // // //                       <option key={purity} value={purity}>
// // // // // // //                         {purity}
// // // // // // //                       </option>
// // // // // // //                     ))}
// // // // // // //                   </select>
// // // // // // //                 </div>

// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Weight</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     name="weight"
// // // // // // //                     value={formData.weight || ""}
// // // // // // //                     onChange={handleInputChange}
// // // // // // //                     placeholder="Enter weight"
// // // // // // //                     style={input}
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Price Per Gram</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     name="pricePerGram"
// // // // // // //                     value={formData.pricePerGram || ""}
// // // // // // //                     onChange={handleInputChange}
// // // // // // //                     placeholder="Enter price per gram"
// // // // // // //                     style={input}
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Making Charges</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     name="makingCharges"
// // // // // // //                     value={formData.makingCharges || ""}
// // // // // // //                     onChange={handleInputChange}
// // // // // // //                     placeholder="Enter making charges"
// // // // // // //                     style={input}
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Offer Price</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     name="offerPrice"
// // // // // // //                     value={formData.offerPrice || ""}
// // // // // // //                     onChange={handleInputChange}
// // // // // // //                     placeholder="Enter offer price"
// // // // // // //                     style={input}
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Total Price</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     name="totalPrice"
// // // // // // //                     value={formData.totalPrice || ""}
// // // // // // //                     readOnly
// // // // // // //                     placeholder="Auto calculated"
// // // // // // //                     style={{
// // // // // // //                       ...input,
// // // // // // //                       background: "#f4f0f8",
// // // // // // //                       color: "#5d3d75",
// // // // // // //                       fontWeight: "700",
// // // // // // //                     }}
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 <div style={fieldWrap}>
// // // // // // //                   <label style={label}>Stock</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     name="stock"
// // // // // // //                     value={formData.stock || ""}
// // // // // // //                     onChange={handleInputChange}
// // // // // // //                     placeholder="Enter stock"
// // // // // // //                     style={input}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // // // //             <div style={fieldWrap}>
// // // // // // //               <label style={label}>Upload Product Images</label>
// // // // // // //               <input
// // // // // // //                 ref={fileInputRef}
// // // // // // //                 type="file"
// // // // // // //                 accept="image/*"
// // // // // // //                 multiple
// // // // // // //                 onChange={handleImageChange}
// // // // // // //                 style={fileInput}
// // // // // // //               />
// // // // // // //               <div style={hintText}>
// // // // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // // // //                 the main image.
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {previews.length > 0 && (
// // // // // // //               <div style={previewWrap}>
// // // // // // //                 <div style={previewGrid}>
// // // // // // //                   {previews.map((img, index) => (
// // // // // // //                     <div
// // // // // // //                       key={img.id}
// // // // // // //                       style={previewCard}
// // // // // // //                       draggable
// // // // // // //                       onDragStart={() => handleDragStart(index)}
// // // // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // // // //                       onDrop={handleDrop}
// // // // // // //                       onDragEnd={handleDragEnd}
// // // // // // //                     >
// // // // // // //                       <img
// // // // // // //                         src={img.src}
// // // // // // //                         alt={`Preview ${index + 1}`}
// // // // // // //                         style={previewImage}
// // // // // // //                       />

// // // // // // //                       <div style={previewOrder}>
// // // // // // //                         Image {index + 1}
// // // // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // // // //                       </div>

// // // // // // //                       <div style={actionRow}>
// // // // // // //                         <button
// // // // // // //                           type="button"
// // // // // // //                           style={removeButton}
// // // // // // //                           onClick={() => removeImage(index)}
// // // // // // //                         >
// // // // // // //                           Remove
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             <button type="submit" style={submitButton}>
// // // // // // //               {formData.id ? "Update Product" : "Save Product"}
// // // // // // //             </button>
// // // // // // //           </form>
// // // // // // //         </div>
// // // // // // //       ) : filteredProducts.length > 0 ? (
// // // // // // //         <div style={tableWrap}>
// // // // // // //           <table style={table}>
// // // // // // //             <thead>
// // // // // // //               <tr>
// // // // // // //                 <th style={th}>Product</th>
// // // // // // //                 <th style={th}>Stock</th>
// // // // // // //                 <th style={th}>Price</th>
// // // // // // //                 <th style={th}>Category</th>
// // // // // // //                 <th style={th}>Purity</th>
// // // // // // //                 <th style={th}>Actions</th>
// // // // // // //               </tr>
// // // // // // //             </thead>

// // // // // // //             <tbody>
// // // // // // //               {filteredProducts.map((product) => {
// // // // // // //                 const mainImage = product.images?.[0] || "";
// // // // // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // // // // //                 return (
// // // // // // //                   <tr key={product.id}>
// // // // // // //                     <td style={td}>
// // // // // // //                       <div style={productCell}>
// // // // // // //                         {mainImage ? (
// // // // // // //                           <img
// // // // // // //                             src={mainImage}
// // // // // // //                             alt={product.name}
// // // // // // //                             style={productThumb}
// // // // // // //                           />
// // // // // // //                         ) : (
// // // // // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // // // // //                         )}

// // // // // // //                         <div>
// // // // // // //                           <p style={productName}>{product.name}</p>
// // // // // // //                           <div style={productSubText}>
// // // // // // //                             {product.metalType || "-"}
// // // // // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </td>

// // // // // // //                     <td style={td}>
// // // // // // //                       {editingStockId === product.id ? (
// // // // // // //                         <div style={stockEditWrap}>
// // // // // // //                           <input
// // // // // // //                             type="number"
// // // // // // //                             value={editingStockValue}
// // // // // // //                             onChange={(e) => setEditingStockValue(e.target.value)}
// // // // // // //                             placeholder="Stock"
// // // // // // //                             style={stockInput}
// // // // // // //                           />
// // // // // // //                           <button
// // // // // // //                             type="button"
// // // // // // //                             style={smallPrimaryButton}
// // // // // // //                             onClick={() => saveStockEdit(product.id)}
// // // // // // //                           >
// // // // // // //                             Save
// // // // // // //                           </button>
// // // // // // //                           <button
// // // // // // //                             type="button"
// // // // // // //                             style={smallSecondaryButton}
// // // // // // //                             onClick={() => setEditingStockId(null)}
// // // // // // //                           >
// // // // // // //                             Cancel
// // // // // // //                           </button>
// // // // // // //                         </div>
// // // // // // //                       ) : (
// // // // // // //                         <div style={stockEditWrap}>
// // // // // // //                           <span style={isInStock ? stockPill : outOfStockPill}>
// // // // // // //                             {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // // // // //                           </span>
// // // // // // //                           <button
// // // // // // //                             type="button"
// // // // // // //                             style={smallPrimaryButton}
// // // // // // //                             onClick={() => startStockEdit(product)}
// // // // // // //                           >
// // // // // // //                             Update
// // // // // // //                           </button>
// // // // // // //                         </div>
// // // // // // //                       )}
// // // // // // //                     </td>

// // // // // // //                     <td style={td}>
// // // // // // //                       <div style={priceMain}>
// // // // // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // // // //                       </div>
// // // // // // //                     </td>

// // // // // // //                     <td style={td}>{product.metalType || "-"}</td>

// // // // // // //                     <td style={td}>{product.purity || "-"}</td>

// // // // // // //                     <td style={td}>
// // // // // // //                       <div style={actionsContainer}>
// // // // // // //                         <button
// // // // // // //                           type="button"
// // // // // // //                           style={editButton}
// // // // // // //                           onClick={() => handleEditClick(product)}
// // // // // // //                         >
// // // // // // //                           Edit
// // // // // // //                         </button>
// // // // // // //                         <button
// // // // // // //                           type="button"
// // // // // // //                           style={deleteButton}
// // // // // // //                           onClick={() => confirmDeleteProduct(product.id)}
// // // // // // //                         >
// // // // // // //                           Remove
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </td>
// // // // // // //                   </tr>
// // // // // // //                 );
// // // // // // //               })}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <div style={noProductsBox}>
// // // // // // //           {productFilterType === "all" ? (
// // // // // // //             <>
// // // // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // // // //               your first product.
// // // // // // //             </>
// // // // // // //           ) : (
// // // // // // //             <>No {productFilterType} products found.</>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }




// // // // // // import React from "react";

// // // // // // export default function Products({
// // // // // //   storedMetals = [],
// // // // // //   metalPurities = {},
// // // // // //   productFilterType,
// // // // // //   setProductFilterType,
// // // // // //   showAddProductForm,
// // // // // //   setShowAddProductForm,
// // // // // //   formData,
// // // // // //   handleInputChange,
// // // // // //   handleSubmit,
// // // // // //   fileInputRef,
// // // // // //   handleImageChange,
// // // // // //   previews = [],
// // // // // //   handleDragStart,
// // // // // //   handleDragEnter,
// // // // // //   handleDrop,
// // // // // //   handleDragEnd,
// // // // // //   removeImage,
// // // // // //   filteredProducts = [],
// // // // // //   confirmDeleteProduct,
// // // // // //   setFormData,
// // // // // //   setIsEditMode,
// // // // // //   setPreviews,
// // // // // // }) {
// // // // // //   const heading = {
// // // // // //     fontSize: "28px",
// // // // // //     fontWeight: "700",
// // // // // //     marginBottom: "24px",
// // // // // //     color: "#222",
// // // // // //   };

// // // // // //   const productsPageWrap = {
// // // // // //     width: "100%",
// // // // // //     maxWidth: "1300px",
// // // // // //   };

// // // // // //   const productsHeader = {
// // // // // //     display: "flex",
// // // // // //     justifyContent: "space-between",
// // // // // //     alignItems: "flex-start",
// // // // // //     gap: "12px",
// // // // // //     marginBottom: "24px",
// // // // // //     flexWrap: "wrap",
// // // // // //   };

// // // // // //   const productsTitle = {
// // // // // //     fontSize: "28px",
// // // // // //     fontWeight: "700",
// // // // // //     color: "#222",
// // // // // //     margin: 0,
// // // // // //   };

// // // // // //   const productsSubTitle = {
// // // // // //     fontSize: "14px",
// // // // // //     color: "#666",
// // // // // //     marginTop: "6px",
// // // // // //   };

// // // // // //   const productsActionRow = {
// // // // // //     display: "flex",
// // // // // //     alignItems: "center",
// // // // // //     gap: "12px",
// // // // // //     flexWrap: "wrap",
// // // // // //   };

// // // // // //   const filterSelect = {
// // // // // //     height: "44px",
// // // // // //     minWidth: "180px",
// // // // // //     border: "1px solid #ddd",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "0 12px",
// // // // // //     fontSize: "14px",
// // // // // //     outline: "none",
// // // // // //     background: "#fff",
// // // // // //     color: "#333",
// // // // // //     boxSizing: "border-box",
// // // // // //   };

// // // // // //   const addButton = {
// // // // // //     background: "#6f3f8f",
// // // // // //     color: "#fff",
// // // // // //     border: "none",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "11px 18px",
// // // // // //     fontSize: "14px",
// // // // // //     fontWeight: "700",
// // // // // //     cursor: "pointer",
// // // // // //     whiteSpace: "nowrap",
// // // // // //   };

// // // // // //   const addProductFormCard = {
// // // // // //     background: "#fff",
// // // // // //     border: "1px solid #e7dff0",
// // // // // //     borderRadius: "16px",
// // // // // //     padding: "28px",
// // // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // // //     marginBottom: "24px",
// // // // // //   };

// // // // // //   const formHeaderRow = {
// // // // // //     display: "flex",
// // // // // //     justifyContent: "space-between",
// // // // // //     alignItems: "center",
// // // // // //     gap: "12px",
// // // // // //     marginBottom: "8px",
// // // // // //   };

// // // // // //   const closeButton = {
// // // // // //     width: "38px",
// // // // // //     height: "38px",
// // // // // //     borderRadius: "50%",
// // // // // //     border: "none",
// // // // // //     background: "#f3e9fb",
// // // // // //     color: "#5d3d75",
// // // // // //     fontSize: "18px",
// // // // // //     fontWeight: "700",
// // // // // //     cursor: "pointer",
// // // // // //     flexShrink: 0,
// // // // // //   };

// // // // // //   const grid = {
// // // // // //     display: "grid",
// // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // //     gap: "18px",
// // // // // //     marginBottom: "26px",
// // // // // //   };

// // // // // //   const detailGrid = {
// // // // // //     display: "grid",
// // // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // // //     gap: "18px",
// // // // // //     marginBottom: "26px",
// // // // // //   };

// // // // // //   const fieldWrap = {
// // // // // //     display: "flex",
// // // // // //     flexDirection: "column",
// // // // // //   };

// // // // // //   const label = {
// // // // // //     fontSize: "14px",
// // // // // //     fontWeight: "600",
// // // // // //     marginBottom: "8px",
// // // // // //     color: "#333",
// // // // // //   };

// // // // // //   const input = {
// // // // // //     height: "44px",
// // // // // //     border: "1px solid #ddd",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "0 12px",
// // // // // //     fontSize: "14px",
// // // // // //     outline: "none",
// // // // // //     boxSizing: "border-box",
// // // // // //     width: "100%",
// // // // // //     background: "#fff",
// // // // // //   };

// // // // // //   const textarea = {
// // // // // //     minHeight: "110px",
// // // // // //     border: "1px solid #ddd",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "12px",
// // // // // //     fontSize: "14px",
// // // // // //     outline: "none",
// // // // // //     resize: "vertical",
// // // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // // //     boxSizing: "border-box",
// // // // // //     width: "100%",
// // // // // //   };

// // // // // //   const descriptionWrap = {
// // // // // //     display: "flex",
// // // // // //     flexDirection: "column",
// // // // // //     marginBottom: "26px",
// // // // // //   };

// // // // // //   const sectionTitle = {
// // // // // //     fontSize: "18px",
// // // // // //     fontWeight: "700",
// // // // // //     margin: "24px 0 14px",
// // // // // //     color: "#2b2b2b",
// // // // // //   };

// // // // // //   const fileInput = {
// // // // // //     marginTop: "8px",
// // // // // //     marginBottom: "16px",
// // // // // //   };

// // // // // //   const hintText = {
// // // // // //     fontSize: "13px",
// // // // // //     color: "#666",
// // // // // //     marginTop: "-6px",
// // // // // //     marginBottom: "10px",
// // // // // //   };

// // // // // //   const previewWrap = {
// // // // // //     marginTop: "10px",
// // // // // //     marginBottom: "20px",
// // // // // //   };

// // // // // //   const previewGrid = {
// // // // // //     display: "grid",
// // // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // // //     gap: "16px",
// // // // // //   };

// // // // // //   const previewCard = {
// // // // // //     border: "1px solid #ddd",
// // // // // //     borderRadius: "10px",
// // // // // //     padding: "10px",
// // // // // //     background: "#fff",
// // // // // //     cursor: "grab",
// // // // // //   };

// // // // // //   const previewImage = {
// // // // // //     width: "100%",
// // // // // //     height: "160px",
// // // // // //     objectFit: "cover",
// // // // // //     borderRadius: "8px",
// // // // // //     border: "1px solid #ddd",
// // // // // //     display: "block",
// // // // // //     marginBottom: "10px",
// // // // // //   };

// // // // // //   const previewOrder = {
// // // // // //     fontSize: "13px",
// // // // // //     fontWeight: "700",
// // // // // //     marginBottom: "8px",
// // // // // //     color: "#444",
// // // // // //   };

// // // // // //   const actionRow = {
// // // // // //     display: "flex",
// // // // // //     gap: "8px",
// // // // // //     flexWrap: "wrap",
// // // // // //   };

// // // // // //   const removeButton = {
// // // // // //     border: "none",
// // // // // //     background: "#b33939",
// // // // // //     color: "#fff",
// // // // // //     borderRadius: "6px",
// // // // // //     padding: "8px 10px",
// // // // // //     cursor: "pointer",
// // // // // //     fontSize: "12px",
// // // // // //     fontWeight: "700",
// // // // // //   };

// // // // // //   const submitButton = {
// // // // // //     marginTop: "10px",
// // // // // //     background: "#6f3f8f",
// // // // // //     color: "#fff",
// // // // // //     border: "none",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "13px 24px",
// // // // // //     fontSize: "15px",
// // // // // //     fontWeight: "700",
// // // // // //     cursor: "pointer",
// // // // // //   };

// // // // // //   const tableWrap = {
// // // // // //     width: "100%",
// // // // // //     overflowX: "auto",
// // // // // //     background: "#fff",
// // // // // //     border: "1px solid #e7dff0",
// // // // // //     borderRadius: "16px",
// // // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // // //   };

// // // // // //   const table = {
// // // // // //     width: "100%",
// // // // // //     borderCollapse: "collapse",
// // // // // //     minWidth: "900px",
// // // // // //   };

// // // // // //   const th = {
// // // // // //     textAlign: "left",
// // // // // //     fontSize: "13px",
// // // // // //     fontWeight: "700",
// // // // // //     color: "#666",
// // // // // //     background: "#faf7fd",
// // // // // //     padding: "14px 16px",
// // // // // //     borderBottom: "1px solid #eadff3",
// // // // // //     whiteSpace: "nowrap",
// // // // // //   };

// // // // // //   const td = {
// // // // // //     padding: "14px 16px",
// // // // // //     borderBottom: "1px solid #f0e8f6",
// // // // // //     verticalAlign: "middle",
// // // // // //     fontSize: "14px",
// // // // // //     color: "#333",
// // // // // //   };

// // // // // //   const productCell = {
// // // // // //     display: "flex",
// // // // // //     alignItems: "center",
// // // // // //     gap: "12px",
// // // // // //     minWidth: "260px",
// // // // // //   };

// // // // // //   const productThumb = {
// // // // // //     width: "52px",
// // // // // //     height: "52px",
// // // // // //     borderRadius: "8px",
// // // // // //     objectFit: "cover",
// // // // // //     border: "1px solid #e5dced",
// // // // // //     background: "#f3e9fb",
// // // // // //     flexShrink: 0,
// // // // // //   };

// // // // // //   const productThumbPlaceholder = {
// // // // // //     width: "52px",
// // // // // //     height: "52px",
// // // // // //     borderRadius: "8px",
// // // // // //     border: "1px solid #e5dced",
// // // // // //     background: "#f3e9fb",
// // // // // //     display: "flex",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //     fontSize: "11px",
// // // // // //     color: "#8b6aa3",
// // // // // //     fontWeight: "700",
// // // // // //     flexShrink: 0,
// // // // // //   };

// // // // // //   const productName = {
// // // // // //     margin: 0,
// // // // // //     fontSize: "15px",
// // // // // //     fontWeight: "700",
// // // // // //     color: "#2b2b2b",
// // // // // //     lineHeight: "1.4",
// // // // // //   };

// // // // // //   const productSubText = {
// // // // // //     fontSize: "12px",
// // // // // //     color: "#777",
// // // // // //     marginTop: "4px",
// // // // // //   };

// // // // // //   const priceMain = {
// // // // // //     fontSize: "15px",
// // // // // //     fontWeight: "700",
// // // // // //     color: "#6f3f8f",
// // // // // //   };

// // // // // //   const stockPill = {
// // // // // //     display: "inline-flex",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //     padding: "6px 10px",
// // // // // //     borderRadius: "999px",
// // // // // //     fontSize: "12px",
// // // // // //     fontWeight: "700",
// // // // // //     background: "#eaf8ee",
// // // // // //     color: "#1f8b4c",
// // // // // //     minWidth: "80px",
// // // // // //   };

// // // // // //   const outOfStockPill = {
// // // // // //     ...stockPill,
// // // // // //     background: "#fff0f0",
// // // // // //     color: "#c0392b",
// // // // // //   };

// // // // // //   const editButton = {
// // // // // //     background: "#6f3f8f",
// // // // // //     color: "#fff",
// // // // // //     border: "none",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "8px 12px",
// // // // // //     fontSize: "12px",
// // // // // //     fontWeight: "700",
// // // // // //     cursor: "pointer",
// // // // // //   };

// // // // // //   const deleteButton = {
// // // // // //     background: "#fff1f1",
// // // // // //     color: "#b33939",
// // // // // //     border: "1px solid #f0c7c7",
// // // // // //     borderRadius: "8px",
// // // // // //     padding: "8px 12px",
// // // // // //     fontSize: "12px",
// // // // // //     fontWeight: "700",
// // // // // //     cursor: "pointer",
// // // // // //     whiteSpace: "nowrap",
// // // // // //   };

// // // // // //   const actionsContainer = {
// // // // // //     display: "flex",
// // // // // //     gap: "8px",
// // // // // //     flexWrap: "wrap",
// // // // // //   };

// // // // // //   const noProductsBox = {
// // // // // //     background: "#fff",
// // // // // //     border: "1px dashed #d9c8e7",
// // // // // //     borderRadius: "16px",
// // // // // //     padding: "40px 24px",
// // // // // //     textAlign: "center",
// // // // // //     color: "#666",
// // // // // //     fontSize: "15px",
// // // // // //   };

// // // // // //   // Function to handle edit button click
// // // // // //   const handleEditClick = (product) => {
// // // // // //     // Map the product data to match formData structure
// // // // // //     const editedFormData = {
// // // // // //       id: product.id,
// // // // // //       productName: product.name || "",
// // // // // //       metalType: product.metalType || "",
// // // // // //       productDescription: product.description || "",
// // // // // //       purity: product.purity || "",
// // // // // //       weight: product.weight || "",
// // // // // //       pricePerGram: product.pricePerGram || "",
// // // // // //       makingCharges: product.makingCharges || "",
// // // // // //       offerPrice: product.offerPrice || "",
// // // // // //       totalPrice: product.totalPrice || "",
// // // // // //       stock: product.stock || "",
// // // // // //     };
    
// // // // // //     // Update form data with product details
// // // // // //     setFormData(editedFormData);
    
// // // // // //     // Set edit mode to true
// // // // // //     setIsEditMode(true);
    
// // // // // //     // Convert image URLs to preview format if they exist
// // // // // //     if (product.images && product.images.length > 0) {
// // // // // //       const imagePreviews = product.images.map((src, index) => ({
// // // // // //         id: `existing-${index}-${Date.now()}`,
// // // // // //         src: src,
// // // // // //         name: `Image ${index + 1}`,
// // // // // //       }));
// // // // // //       setPreviews(imagePreviews);
// // // // // //     }
    
// // // // // //     // Show the form
// // // // // //     setShowAddProductForm(true);
// // // // // //   };

// // // // // //   // Function to handle closing the form
// // // // // //   const handleCloseForm = () => {
// // // // // //     setShowAddProductForm(false);
// // // // // //     setIsEditMode(false);
// // // // // //     // Reset form
// // // // // //     setFormData({
// // // // // //       productName: "",
// // // // // //       metalType: "",
// // // // // //       productDescription: "",
// // // // // //       purity: "",
// // // // // //       weight: "",
// // // // // //       pricePerGram: "",
// // // // // //       makingCharges: "",
// // // // // //       offerPrice: "",
// // // // // //       totalPrice: "",
// // // // // //       stock: "",
// // // // // //     });
// // // // // //     setPreviews([]);
// // // // // //     if (fileInputRef.current) {
// // // // // //       fileInputRef.current.value = "";
// // // // // //     }
// // // // // //   };

// // // // // //   // Function to handle add new product button
// // // // // //   const handleAddNewClick = () => {
// // // // // //     // Reset form when adding new product
// // // // // //     setFormData({
// // // // // //       productName: "",
// // // // // //       metalType: "",
// // // // // //       productDescription: "",
// // // // // //       purity: "",
// // // // // //       weight: "",
// // // // // //       pricePerGram: "",
// // // // // //       makingCharges: "",
// // // // // //       offerPrice: "",
// // // // // //       totalPrice: "",
// // // // // //       stock: "",
// // // // // //     });
// // // // // //     setIsEditMode(false);
// // // // // //     setPreviews([]);
// // // // // //     if (fileInputRef.current) {
// // // // // //       fileInputRef.current.value = "";
// // // // // //     }
// // // // // //     setShowAddProductForm((prev) => !prev);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={productsPageWrap}>
// // // // // //       <div style={productsHeader}>
// // // // // //         <div>
// // // // // //           <h1 style={productsTitle}>Products</h1>
// // // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // // //         </div>

// // // // // //         <div style={productsActionRow}>
// // // // // //           <select
// // // // // //             value={productFilterType}
// // // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // // //             style={filterSelect}
// // // // // //           >
// // // // // //             <option value="all">All Products</option>
// // // // // //             {storedMetals.map((metal) => (
// // // // // //               <option key={metal} value={metal}>
// // // // // //                 {metal}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>

// // // // // //           <button
// // // // // //             type="button"
// // // // // //             style={addButton}
// // // // // //             onClick={handleAddNewClick}
// // // // // //           >
// // // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {showAddProductForm ? (
// // // // // //         <div style={addProductFormCard}>
// // // // // //           <div style={formHeaderRow}>
// // // // // //             <div style={heading}>
// // // // // //               {formData.id ? "Edit Product" : "Add Product"}
// // // // // //             </div>

// // // // // //             <button
// // // // // //               type="button"
// // // // // //               style={closeButton}
// // // // // //               onClick={handleCloseForm}
// // // // // //             >
// // // // // //               ✕
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           <form onSubmit={handleSubmit}>
// // // // // //             <div style={grid}>
// // // // // //               <div style={fieldWrap}>
// // // // // //                 <label style={label}>Product Name</label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   name="productName"
// // // // // //                   value={formData.productName || ""}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   placeholder="Enter product name"
// // // // // //                   style={input}
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div style={fieldWrap}>
// // // // // //                 <label style={label}>Metal Type</label>
// // // // // //                 <select
// // // // // //                   name="metalType"
// // // // // //                   value={formData.metalType || ""}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   style={input}
// // // // // //                 >
// // // // // //                   <option value="">Select metal type</option>
// // // // // //                   {storedMetals.map((metal) => (
// // // // // //                     <option key={metal} value={metal}>
// // // // // //                       {metal}
// // // // // //                     </option>
// // // // // //                   ))}
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div style={descriptionWrap}>
// // // // // //               <label style={label}>Product Description</label>
// // // // // //               <textarea
// // // // // //                 name="productDescription"
// // // // // //                 value={formData.productDescription || ""}
// // // // // //                 onChange={handleInputChange}
// // // // // //                 placeholder="Enter product description"
// // // // // //                 style={textarea}
// // // // // //               />
// // // // // //             </div>

// // // // // //             {formData.metalType && (
// // // // // //               <div style={detailGrid}>
// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Purity</label>
// // // // // //                   <select
// // // // // //                     name="purity"
// // // // // //                     value={formData.purity || ""}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     style={input}
// // // // // //                   >
// // // // // //                     <option value="">Select purity</option>
// // // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // // //                       <option key={purity} value={purity}>
// // // // // //                         {purity}
// // // // // //                       </option>
// // // // // //                     ))}
// // // // // //                   </select>
// // // // // //                 </div>

// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Weight</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     name="weight"
// // // // // //                     value={formData.weight || ""}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     placeholder="Enter weight"
// // // // // //                     style={input}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Price Per Gram</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     name="pricePerGram"
// // // // // //                     value={formData.pricePerGram || ""}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     placeholder="Enter price per gram"
// // // // // //                     style={input}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Making Charges</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     name="makingCharges"
// // // // // //                     value={formData.makingCharges || ""}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     placeholder="Enter making charges"
// // // // // //                     style={input}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Offer Price</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     name="offerPrice"
// // // // // //                     value={formData.offerPrice || ""}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     placeholder="Enter offer price"
// // // // // //                     style={input}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Total Price</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     name="totalPrice"
// // // // // //                     value={formData.totalPrice || ""}
// // // // // //                     readOnly
// // // // // //                     placeholder="Auto calculated"
// // // // // //                     style={{
// // // // // //                       ...input,
// // // // // //                       background: "#f4f0f8",
// // // // // //                       color: "#5d3d75",
// // // // // //                       fontWeight: "700",
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 <div style={fieldWrap}>
// // // // // //                   <label style={label}>Stock</label>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     name="stock"
// // // // // //                     value={formData.stock || ""}
// // // // // //                     onChange={handleInputChange}
// // // // // //                     placeholder="Enter stock"
// // // // // //                     style={input}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // // //             <div style={fieldWrap}>
// // // // // //               <label style={label}>Upload Product Images</label>
// // // // // //               <input
// // // // // //                 ref={fileInputRef}
// // // // // //                 type="file"
// // // // // //                 accept="image/*"
// // // // // //                 multiple
// // // // // //                 onChange={handleImageChange}
// // // // // //                 style={fileInput}
// // // // // //               />
// // // // // //               <div style={hintText}>
// // // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // // //                 the main image.
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {previews.length > 0 && (
// // // // // //               <div style={previewWrap}>
// // // // // //                 <div style={previewGrid}>
// // // // // //                   {previews.map((img, index) => (
// // // // // //                     <div
// // // // // //                       key={img.id}
// // // // // //                       style={previewCard}
// // // // // //                       draggable
// // // // // //                       onDragStart={() => handleDragStart(index)}
// // // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // // //                       onDrop={handleDrop}
// // // // // //                       onDragEnd={handleDragEnd}
// // // // // //                     >
// // // // // //                       <img
// // // // // //                         src={img.src}
// // // // // //                         alt={`Preview ${index + 1}`}
// // // // // //                         style={previewImage}
// // // // // //                       />

// // // // // //                       <div style={previewOrder}>
// // // // // //                         Image {index + 1}
// // // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // // //                       </div>

// // // // // //                       <div style={actionRow}>
// // // // // //                         <button
// // // // // //                           type="button"
// // // // // //                           style={removeButton}
// // // // // //                           onClick={() => removeImage(index)}
// // // // // //                         >
// // // // // //                           Remove
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <button type="submit" style={submitButton}>
// // // // // //               {formData.id ? "Update Product" : "Save Product"}
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       ) : filteredProducts.length > 0 ? (
// // // // // //         <div style={tableWrap}>
// // // // // //           <table style={table}>
// // // // // //             <thead>
// // // // // //               <tr>
// // // // // //                 <th style={th}>Product</th>
// // // // // //                 <th style={th}>Stock</th>
// // // // // //                 <th style={th}>Price</th>
// // // // // //                 <th style={th}>Category</th>
// // // // // //                 <th style={th}>Purity</th>
// // // // // //                 <th style={th}>Actions</th>
// // // // // //               </tr>
// // // // // //             </thead>

// // // // // //             <tbody>
// // // // // //               {filteredProducts.map((product) => {
// // // // // //                 const mainImage = product.images?.[0] || "";
// // // // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // // // //                 return (
// // // // // //                   <tr key={product.id}>
// // // // // //                     <td style={td}>
// // // // // //                       <div style={productCell}>
// // // // // //                         {mainImage ? (
// // // // // //                           <img
// // // // // //                             src={mainImage}
// // // // // //                             alt={product.name}
// // // // // //                             style={productThumb}
// // // // // //                           />
// // // // // //                         ) : (
// // // // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // // // //                         )}

// // // // // //                         <div>
// // // // // //                           <p style={productName}>{product.name}</p>
// // // // // //                           <div style={productSubText}>
// // // // // //                             {product.metalType || "-"}
// // // // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </td>

// // // // // //                     <td style={td}>
// // // // // //                       <span style={isInStock ? stockPill : outOfStockPill}>
// // // // // //                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // // // //                       </span>
// // // // // //                     </td>

// // // // // //                     <td style={td}>
// // // // // //                       <div style={priceMain}>
// // // // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // // //                       </div>
// // // // // //                     </td>

// // // // // //                     <td style={td}>{product.metalType || "-"}</td>

// // // // // //                     <td style={td}>{product.purity || "-"}</td>

// // // // // //                     <td style={td}>
// // // // // //                       <div style={actionsContainer}>
// // // // // //                         <button
// // // // // //                           type="button"
// // // // // //                           style={editButton}
// // // // // //                           onClick={() => handleEditClick(product)}
// // // // // //                         >
// // // // // //                           Edit
// // // // // //                         </button>
// // // // // //                         <button
// // // // // //                           type="button"
// // // // // //                           style={deleteButton}
// // // // // //                           onClick={() => confirmDeleteProduct(product.id)}
// // // // // //                         >
// // // // // //                           Remove
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </td>
// // // // // //                   </tr>
// // // // // //                 );
// // // // // //               })}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <div style={noProductsBox}>
// // // // // //           {productFilterType === "all" ? (
// // // // // //             <>
// // // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // // //               your first product.
// // // // // //             </>
// // // // // //           ) : (
// // // // // //             <>No {productFilterType} products found.</>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // import React from "react";

// // // // // export default function Products({
// // // // //   storedMetals = [],
// // // // //   metalPurities = {},
// // // // //   productFilterType,
// // // // //   setProductFilterType,
// // // // //   showAddProductForm,
// // // // //   setShowAddProductForm,
// // // // //   formData,
// // // // //   handleInputChange,
// // // // //   handleSubmit,
// // // // //   fileInputRef,
// // // // //   handleImageChange,
// // // // //   previews = [],
// // // // //   handleDragStart,
// // // // //   handleDragEnter,
// // // // //   handleDrop,
// // // // //   handleDragEnd,
// // // // //   removeImage,
// // // // //   filteredProducts = [],
// // // // //   confirmDeleteProduct,
// // // // //   setFormData,
// // // // //   setIsEditMode,
// // // // //   setPreviews,
// // // // // }) {
// // // // //   const heading = {
// // // // //     fontSize: "28px",
// // // // //     fontWeight: "700",
// // // // //     marginBottom: "24px",
// // // // //     color: "#222",
// // // // //   };

// // // // //   const productsPageWrap = {
// // // // //     width: "100%",
// // // // //     maxWidth: "1300px",
// // // // //   };

// // // // //   const productsHeader = {
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "flex-start",
// // // // //     gap: "12px",
// // // // //     marginBottom: "24px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const productsTitle = {
// // // // //     fontSize: "28px",
// // // // //     fontWeight: "700",
// // // // //     color: "#222",
// // // // //     margin: 0,
// // // // //   };

// // // // //   const productsSubTitle = {
// // // // //     fontSize: "14px",
// // // // //     color: "#666",
// // // // //     marginTop: "6px",
// // // // //   };

// // // // //   const productsActionRow = {
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     gap: "12px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const filterSelect = {
// // // // //     height: "44px",
// // // // //     minWidth: "180px",
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "8px",
// // // // //     padding: "0 12px",
// // // // //     fontSize: "14px",
// // // // //     outline: "none",
// // // // //     background: "#fff",
// // // // //     color: "#333",
// // // // //     boxSizing: "border-box",
// // // // //   };

// // // // //   const addButton = {
// // // // //     background: "#6f3f8f",
// // // // //     color: "#fff",
// // // // //     border: "none",
// // // // //     borderRadius: "8px",
// // // // //     padding: "11px 18px",
// // // // //     fontSize: "14px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   const addProductFormCard = {
// // // // //     background: "#fff",
// // // // //     border: "1px solid #e7dff0",
// // // // //     borderRadius: "16px",
// // // // //     padding: "28px",
// // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // //     marginBottom: "24px",
// // // // //   };

// // // // //   const formHeaderRow = {
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     gap: "12px",
// // // // //     marginBottom: "8px",
// // // // //   };

// // // // //   const closeButton = {
// // // // //     width: "38px",
// // // // //     height: "38px",
// // // // //     borderRadius: "50%",
// // // // //     border: "none",
// // // // //     background: "#f3e9fb",
// // // // //     color: "#5d3d75",
// // // // //     fontSize: "18px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     flexShrink: 0,
// // // // //   };

// // // // //   const grid = {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // //     gap: "18px",
// // // // //     marginBottom: "26px",
// // // // //   };

// // // // //   const detailGrid = {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // //     gap: "18px",
// // // // //     marginBottom: "26px",
// // // // //   };

// // // // //   const fieldWrap = {
// // // // //     display: "flex",
// // // // //     flexDirection: "column",
// // // // //   };

// // // // //   const label = {
// // // // //     fontSize: "14px",
// // // // //     fontWeight: "600",
// // // // //     marginBottom: "8px",
// // // // //     color: "#333",
// // // // //   };

// // // // //   const input = {
// // // // //     height: "44px",
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "8px",
// // // // //     padding: "0 12px",
// // // // //     fontSize: "14px",
// // // // //     outline: "none",
// // // // //     boxSizing: "border-box",
// // // // //     width: "100%",
// // // // //     background: "#fff",
// // // // //   };

// // // // //   const textarea = {
// // // // //     minHeight: "110px",
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "8px",
// // // // //     padding: "12px",
// // // // //     fontSize: "14px",
// // // // //     outline: "none",
// // // // //     resize: "vertical",
// // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // //     boxSizing: "border-box",
// // // // //     width: "100%",
// // // // //   };

// // // // //   const descriptionWrap = {
// // // // //     display: "flex",
// // // // //     flexDirection: "column",
// // // // //     marginBottom: "26px",
// // // // //   };

// // // // //   const sectionTitle = {
// // // // //     fontSize: "18px",
// // // // //     fontWeight: "700",
// // // // //     margin: "24px 0 14px",
// // // // //     color: "#2b2b2b",
// // // // //   };

// // // // //   const fileInput = {
// // // // //     marginTop: "8px",
// // // // //     marginBottom: "16px",
// // // // //   };

// // // // //   const hintText = {
// // // // //     fontSize: "13px",
// // // // //     color: "#666",
// // // // //     marginTop: "-6px",
// // // // //     marginBottom: "10px",
// // // // //   };

// // // // //   const previewWrap = {
// // // // //     marginTop: "10px",
// // // // //     marginBottom: "20px",
// // // // //   };

// // // // //   const previewGrid = {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // //     gap: "16px",
// // // // //   };

// // // // //   const previewCard = {
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "10px",
// // // // //     padding: "10px",
// // // // //     background: "#fff",
// // // // //     cursor: "grab",
// // // // //   };

// // // // //   const previewImage = {
// // // // //     width: "100%",
// // // // //     height: "160px",
// // // // //     objectFit: "cover",
// // // // //     borderRadius: "8px",
// // // // //     border: "1px solid #ddd",
// // // // //     display: "block",
// // // // //     marginBottom: "10px",
// // // // //   };

// // // // //   const previewOrder = {
// // // // //     fontSize: "13px",
// // // // //     fontWeight: "700",
// // // // //     marginBottom: "8px",
// // // // //     color: "#444",
// // // // //   };

// // // // //   const actionRow = {
// // // // //     display: "flex",
// // // // //     gap: "8px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const removeButton = {
// // // // //     border: "none",
// // // // //     background: "#b33939",
// // // // //     color: "#fff",
// // // // //     borderRadius: "6px",
// // // // //     padding: "8px 10px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //   };

// // // // //   const submitButton = {
// // // // //     marginTop: "10px",
// // // // //     background: "#6f3f8f",
// // // // //     color: "#fff",
// // // // //     border: "none",
// // // // //     borderRadius: "8px",
// // // // //     padding: "13px 24px",
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //   };

// // // // //   const tableWrap = {
// // // // //     width: "100%",
// // // // //     overflowX: "auto",
// // // // //     background: "#fff",
// // // // //     border: "1px solid #e7dff0",
// // // // //     borderRadius: "16px",
// // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // //   };

// // // // //   const table = {
// // // // //     width: "100%",
// // // // //     borderCollapse: "collapse",
// // // // //     minWidth: "1100px", // Increased to accommodate description column
// // // // //   };

// // // // //   const th = {
// // // // //     textAlign: "left",
// // // // //     fontSize: "13px",
// // // // //     fontWeight: "700",
// // // // //     color: "#666",
// // // // //     background: "#faf7fd",
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #eadff3",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   const td = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //   };

// // // // //   const productCell = {
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     gap: "12px",
// // // // //     minWidth: "260px",
// // // // //   };

// // // // //   const productThumb = {
// // // // //     width: "52px",
// // // // //     height: "52px",
// // // // //     borderRadius: "8px",
// // // // //     objectFit: "cover",
// // // // //     border: "1px solid #e5dced",
// // // // //     background: "#f3e9fb",
// // // // //     flexShrink: 0,
// // // // //   };

// // // // //   const productThumbPlaceholder = {
// // // // //     width: "52px",
// // // // //     height: "52px",
// // // // //     borderRadius: "8px",
// // // // //     border: "1px solid #e5dced",
// // // // //     background: "#f3e9fb",
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     fontSize: "11px",
// // // // //     color: "#8b6aa3",
// // // // //     fontWeight: "700",
// // // // //     flexShrink: 0,
// // // // //   };

// // // // //   const productName = {
// // // // //     margin: 0,
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "700",
// // // // //     color: "#2b2b2b",
// // // // //     lineHeight: "1.4",
// // // // //   };

// // // // //   const productSubText = {
// // // // //     fontSize: "12px",
// // // // //     color: "#777",
// // // // //     marginTop: "4px",
// // // // //   };

// // // // //   const descriptionCell = {
// // // // //     maxWidth: "250px",
// // // // //     overflow: "hidden",
// // // // //     textOverflow: "ellipsis",
// // // // //     whiteSpace: "nowrap",
// // // // //     color: "#555",
// // // // //     fontSize: "13px",
// // // // //   };

// // // // //   const priceMain = {
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "700",
// // // // //     color: "#6f3f8f",
// // // // //   };

// // // // //   const stockPill = {
// // // // //     display: "inline-flex",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     padding: "6px 10px",
// // // // //     borderRadius: "999px",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //     background: "#eaf8ee",
// // // // //     color: "#1f8b4c",
// // // // //     minWidth: "80px",
// // // // //   };

// // // // //   const outOfStockPill = {
// // // // //     ...stockPill,
// // // // //     background: "#fff0f0",
// // // // //     color: "#c0392b",
// // // // //   };

// // // // //   const editButton = {
// // // // //     background: "#6f3f8f",
// // // // //     color: "#fff",
// // // // //     border: "none",
// // // // //     borderRadius: "8px",
// // // // //     padding: "8px 12px",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //   };

// // // // //   const deleteButton = {
// // // // //     background: "#fff1f1",
// // // // //     color: "#b33939",
// // // // //     border: "1px solid #f0c7c7",
// // // // //     borderRadius: "8px",
// // // // //     padding: "8px 12px",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   const actionsContainer = {
// // // // //     display: "flex",
// // // // //     gap: "8px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const noProductsBox = {
// // // // //     background: "#fff",
// // // // //     border: "1px dashed #d9c8e7",
// // // // //     borderRadius: "16px",
// // // // //     padding: "40px 24px",
// // // // //     textAlign: "center",
// // // // //     color: "#666",
// // // // //     fontSize: "15px",
// // // // //   };

// // // // //   // Function to handle edit button click
// // // // //   const handleEditClick = (product) => {
// // // // //     // Map the product data to match formData structure
// // // // //     const editedFormData = {
// // // // //       id: product.id,
// // // // //       productName: product.name || "",
// // // // //       metalType: product.metalType || "",
// // // // //       productDescription: product.description || "",
// // // // //       purity: product.purity || "",
// // // // //       weight: product.weight || "",
// // // // //       pricePerGram: product.pricePerGram || "",
// // // // //       makingCharges: product.makingCharges || "",
// // // // //       offerPrice: product.offerPrice || "",
// // // // //       totalPrice: product.totalPrice || "",
// // // // //       stock: product.stock || "",
// // // // //     };
    
// // // // //     // Update form data with product details
// // // // //     setFormData(editedFormData);
    
// // // // //     // Set edit mode to true
// // // // //     setIsEditMode(true);
    
// // // // //     // Convert image URLs to preview format if they exist
// // // // //     if (product.images && product.images.length > 0) {
// // // // //       const imagePreviews = product.images.map((src, index) => ({
// // // // //         id: `existing-${index}-${Date.now()}`,
// // // // //         src: src,
// // // // //         name: `Image ${index + 1}`,
// // // // //       }));
// // // // //       setPreviews(imagePreviews);
// // // // //     }
    
// // // // //     // Show the form
// // // // //     setShowAddProductForm(true);
// // // // //   };

// // // // //   // Function to handle closing the form
// // // // //   const handleCloseForm = () => {
// // // // //     setShowAddProductForm(false);
// // // // //     setIsEditMode(false);
// // // // //     // Reset form
// // // // //     setFormData({
// // // // //       productName: "",
// // // // //       metalType: "",
// // // // //       productDescription: "",
// // // // //       purity: "",
// // // // //       weight: "",
// // // // //       pricePerGram: "",
// // // // //       makingCharges: "",
// // // // //       offerPrice: "",
// // // // //       totalPrice: "",
// // // // //       stock: "",
// // // // //     });
// // // // //     setPreviews([]);
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.value = "";
// // // // //     }
// // // // //   };

// // // // //   // Function to handle add new product button
// // // // //   const handleAddNewClick = () => {
// // // // //     // Reset form when adding new product
// // // // //     setFormData({
// // // // //       productName: "",
// // // // //       metalType: "",
// // // // //       productDescription: "",
// // // // //       purity: "",
// // // // //       weight: "",
// // // // //       pricePerGram: "",
// // // // //       makingCharges: "",
// // // // //       offerPrice: "",
// // // // //       totalPrice: "",
// // // // //       stock: "",
// // // // //     });
// // // // //     setIsEditMode(false);
// // // // //     setPreviews([]);
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.value = "";
// // // // //     }
// // // // //     setShowAddProductForm((prev) => !prev);
// // // // //   };

// // // // //   // Function to truncate description
// // // // //   const truncateDescription = (desc, maxLength = 100) => {
// // // // //     if (!desc) return "-";
// // // // //     if (desc.length <= maxLength) return desc;
// // // // //     return desc.substring(0, maxLength) + "...";
// // // // //   };

// // // // //   return (
// // // // //     <div style={productsPageWrap}>
// // // // //       <div style={productsHeader}>
// // // // //         <div>
// // // // //           <h1 style={productsTitle}>Products</h1>
// // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // //         </div>

// // // // //         <div style={productsActionRow}>
// // // // //           <select
// // // // //             value={productFilterType}
// // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // //             style={filterSelect}
// // // // //           >
// // // // //             <option value="all">All Products</option>
// // // // //             {storedMetals.map((metal) => (
// // // // //               <option key={metal} value={metal}>
// // // // //                 {metal}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>

// // // // //           <button
// // // // //             type="button"
// // // // //             style={addButton}
// // // // //             onClick={handleAddNewClick}
// // // // //           >
// // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {showAddProductForm ? (
// // // // //         <div style={addProductFormCard}>
// // // // //           <div style={formHeaderRow}>
// // // // //             <div style={heading}>
// // // // //               {formData.id ? "Edit Product" : "Add Product"}
// // // // //             </div>

// // // // //             <button
// // // // //               type="button"
// // // // //               style={closeButton}
// // // // //               onClick={handleCloseForm}
// // // // //             >
// // // // //               ✕
// // // // //             </button>
// // // // //           </div>

// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <div style={grid}>
// // // // //               <div style={fieldWrap}>
// // // // //                 <label style={label}>Product Name</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="productName"
// // // // //                   value={formData.productName || ""}
// // // // //                   onChange={handleInputChange}
// // // // //                   placeholder="Enter product name"
// // // // //                   style={input}
// // // // //                 />
// // // // //               </div>

// // // // //               <div style={fieldWrap}>
// // // // //                 <label style={label}>Metal Type</label>
// // // // //                 <select
// // // // //                   name="metalType"
// // // // //                   value={formData.metalType || ""}
// // // // //                   onChange={handleInputChange}
// // // // //                   style={input}
// // // // //                 >
// // // // //                   <option value="">Select metal type</option>
// // // // //                   {storedMetals.map((metal) => (
// // // // //                     <option key={metal} value={metal}>
// // // // //                       {metal}
// // // // //                     </option>
// // // // //                   ))}
// // // // //                 </select>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div style={descriptionWrap}>
// // // // //               <label style={label}>Product Description</label>
// // // // //               <textarea
// // // // //                 name="productDescription"
// // // // //                 value={formData.productDescription || ""}
// // // // //                 onChange={handleInputChange}
// // // // //                 placeholder="Enter product description"
// // // // //                 style={textarea}
// // // // //               />
// // // // //             </div>

// // // // //             {formData.metalType && (
// // // // //               <div style={detailGrid}>
// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Purity</label>
// // // // //                   <select
// // // // //                     name="purity"
// // // // //                     value={formData.purity || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     style={input}
// // // // //                   >
// // // // //                     <option value="">Select purity</option>
// // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // //                       <option key={purity} value={purity}>
// // // // //                         {purity}
// // // // //                       </option>
// // // // //                     ))}
// // // // //                   </select>
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Weight</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="weight"
// // // // //                     value={formData.weight || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter weight"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Price Per Gram</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="pricePerGram"
// // // // //                     value={formData.pricePerGram || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter price per gram"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Making Charges</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="makingCharges"
// // // // //                     value={formData.makingCharges || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter making charges"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Offer Price</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="offerPrice"
// // // // //                     value={formData.offerPrice || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter offer price"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Total Price</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="totalPrice"
// // // // //                     value={formData.totalPrice || ""}
// // // // //                     readOnly
// // // // //                     placeholder="Auto calculated"
// // // // //                     style={{
// // // // //                       ...input,
// // // // //                       background: "#f4f0f8",
// // // // //                       color: "#5d3d75",
// // // // //                       fontWeight: "700",
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Stock</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="stock"
// // // // //                     value={formData.stock || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter stock"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // //             <div style={fieldWrap}>
// // // // //               <label style={label}>Upload Product Images</label>
// // // // //               <input
// // // // //                 ref={fileInputRef}
// // // // //                 type="file"
// // // // //                 accept="image/*"
// // // // //                 multiple
// // // // //                 onChange={handleImageChange}
// // // // //                 style={fileInput}
// // // // //               />
// // // // //               <div style={hintText}>
// // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // //                 the main image.
// // // // //               </div>
// // // // //             </div>

// // // // //             {previews.length > 0 && (
// // // // //               <div style={previewWrap}>
// // // // //                 <div style={previewGrid}>
// // // // //                   {previews.map((img, index) => (
// // // // //                     <div
// // // // //                       key={img.id}
// // // // //                       style={previewCard}
// // // // //                       draggable
// // // // //                       onDragStart={() => handleDragStart(index)}
// // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // //                       onDrop={handleDrop}
// // // // //                       onDragEnd={handleDragEnd}
// // // // //                     >
// // // // //                       <img
// // // // //                         src={img.src}
// // // // //                         alt={`Preview ${index + 1}`}
// // // // //                         style={previewImage}
// // // // //                       />

// // // // //                       <div style={previewOrder}>
// // // // //                         Image {index + 1}
// // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // //                       </div>

// // // // //                       <div style={actionRow}>
// // // // //                         <button
// // // // //                           type="button"
// // // // //                           style={removeButton}
// // // // //                           onClick={() => removeImage(index)}
// // // // //                         >
// // // // //                           Remove
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             <button type="submit" style={submitButton}>
// // // // //               {formData.id ? "Update Product" : "Save Product"}
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       ) : filteredProducts.length > 0 ? (
// // // // //         <div style={tableWrap}>
// // // // //           <table style={table}>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th style={th}>Product</th>
// // // // //                 <th style={th}>Description</th>
// // // // //                 <th style={th}>Stock</th>
// // // // //                 <th style={th}>Price</th>
// // // // //                 <th style={th}>Category</th>
// // // // //                 <th style={th}>Purity</th>
// // // // //                 <th style={th}>Actions</th>
// // // // //               </tr>
// // // // //             </thead>

// // // // //             <tbody>
// // // // //               {filteredProducts.map((product) => {
// // // // //                 const mainImage = product.images?.[0] || "";
// // // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // // //                 return (
// // // // //                   <tr key={product.id}>
// // // // //                     <td style={td}>
// // // // //                       <div style={productCell}>
// // // // //                         {mainImage ? (
// // // // //                           <img
// // // // //                             src={mainImage}
// // // // //                             alt={product.name}
// // // // //                             style={productThumb}
// // // // //                           />
// // // // //                         ) : (
// // // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // // //                         )}

// // // // //                         <div>
// // // // //                           <p style={productName}>{product.name}</p>
// // // // //                           <div style={productSubText}>
// // // // //                             {product.metalType || "-"}
// // // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </td>

// // // // //                     <td style={td}>
// // // // //                       <div style={descriptionCell} title={product.description || ""}>
// // // // //                         {truncateDescription(product.description)}
// // // // //                       </div>
// // // // //                     </td>

// // // // //                     <td style={td}>
// // // // //                       <span style={isInStock ? stockPill : outOfStockPill}>
// // // // //                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // // //                       </span>
// // // // //                     </td>

// // // // //                     <td style={td}>
// // // // //                       <div style={priceMain}>
// // // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // //                       </div>
// // // // //                     </td>

// // // // //                     <td style={td}>{product.metalType || "-"}</td>

// // // // //                     <td style={td}>{product.purity || "-"}</td>

// // // // //                     <td style={td}>
// // // // //                       <div style={actionsContainer}>
// // // // //                         <button
// // // // //                           type="button"
// // // // //                           style={editButton}
// // // // //                           onClick={() => handleEditClick(product)}
// // // // //                         >
// // // // //                           Edit
// // // // //                         </button>
// // // // //                         <button
// // // // //                           type="button"
// // // // //                           style={deleteButton}
// // // // //                           onClick={() => confirmDeleteProduct(product.id)}
// // // // //                         >
// // // // //                           Remove
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 );
// // // // //               })}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div style={noProductsBox}>
// // // // //           {productFilterType === "all" ? (
// // // // //             <>
// // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // //               your first product.
// // // // //             </>
// // // // //           ) : (
// // // // //             <>No {productFilterType} products found.</>
// // // // //           )}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // // import React from "react";

// // // // // export default function Products({
// // // // //   storedMetals = [],
// // // // //   metalPurities = {},
// // // // //   productFilterType,
// // // // //   setProductFilterType,
// // // // //   showAddProductForm,
// // // // //   setShowAddProductForm,
// // // // //   formData,
// // // // //   handleInputChange,
// // // // //   handleSubmit,
// // // // //   fileInputRef,
// // // // //   handleImageChange,
// // // // //   previews = [],
// // // // //   handleDragStart,
// // // // //   handleDragEnter,
// // // // //   handleDrop,
// // // // //   handleDragEnd,
// // // // //   removeImage,
// // // // //   filteredProducts = [],
// // // // //   confirmDeleteProduct,
// // // // //   setFormData,
// // // // //   setIsEditMode,
// // // // //   setPreviews,
// // // // // }) {
// // // // //   const heading = {
// // // // //     fontSize: "28px",
// // // // //     fontWeight: "700",
// // // // //     marginBottom: "24px",
// // // // //     color: "#222",
// // // // //   };

// // // // //   const productsPageWrap = {
// // // // //     width: "100%",
// // // // //     maxWidth: "1300px",
// // // // //   };

// // // // //   const productsHeader = {
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "flex-start",
// // // // //     gap: "12px",
// // // // //     marginBottom: "24px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const productsTitle = {
// // // // //     fontSize: "28px",
// // // // //     fontWeight: "700",
// // // // //     color: "#222",
// // // // //     margin: 0,
// // // // //   };

// // // // //   const productsSubTitle = {
// // // // //     fontSize: "14px",
// // // // //     color: "#666",
// // // // //     marginTop: "6px",
// // // // //   };

// // // // //   const productsActionRow = {
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     gap: "12px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const filterSelect = {
// // // // //     height: "44px",
// // // // //     minWidth: "180px",
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "8px",
// // // // //     padding: "0 12px",
// // // // //     fontSize: "14px",
// // // // //     outline: "none",
// // // // //     background: "#fff",
// // // // //     color: "#333",
// // // // //     boxSizing: "border-box",
// // // // //   };

// // // // //   const addButton = {
// // // // //     background: "#6f3f8f",
// // // // //     color: "#fff",
// // // // //     border: "none",
// // // // //     borderRadius: "8px",
// // // // //     padding: "11px 18px",
// // // // //     fontSize: "14px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   const addProductFormCard = {
// // // // //     background: "#fff",
// // // // //     border: "1px solid #e7dff0",
// // // // //     borderRadius: "16px",
// // // // //     padding: "28px",
// // // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // // //     marginBottom: "24px",
// // // // //   };

// // // // //   const formHeaderRow = {
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     gap: "12px",
// // // // //     marginBottom: "8px",
// // // // //   };

// // // // //   const closeButton = {
// // // // //     width: "38px",
// // // // //     height: "38px",
// // // // //     borderRadius: "50%",
// // // // //     border: "none",
// // // // //     background: "#f3e9fb",
// // // // //     color: "#5d3d75",
// // // // //     fontSize: "18px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     flexShrink: 0,
// // // // //   };

// // // // //   const grid = {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // //     gap: "18px",
// // // // //     marginBottom: "26px",
// // // // //   };

// // // // //   const detailGrid = {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // // //     gap: "18px",
// // // // //     marginBottom: "26px",
// // // // //   };

// // // // //   const fieldWrap = {
// // // // //     display: "flex",
// // // // //     flexDirection: "column",
// // // // //   };

// // // // //   const label = {
// // // // //     fontSize: "14px",
// // // // //     fontWeight: "600",
// // // // //     marginBottom: "8px",
// // // // //     color: "#333",
// // // // //   };

// // // // //   const input = {
// // // // //     height: "44px",
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "8px",
// // // // //     padding: "0 12px",
// // // // //     fontSize: "14px",
// // // // //     outline: "none",
// // // // //     boxSizing: "border-box",
// // // // //     width: "100%",
// // // // //     background: "#fff",
// // // // //   };

// // // // //   const textarea = {
// // // // //     minHeight: "110px",
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "8px",
// // // // //     padding: "12px",
// // // // //     fontSize: "14px",
// // // // //     outline: "none",
// // // // //     resize: "vertical",
// // // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // // //     boxSizing: "border-box",
// // // // //     width: "100%",
// // // // //   };

// // // // //   const descriptionWrap = {
// // // // //     display: "flex",
// // // // //     flexDirection: "column",
// // // // //     marginBottom: "26px",
// // // // //   };

// // // // //   const sectionTitle = {
// // // // //     fontSize: "18px",
// // // // //     fontWeight: "700",
// // // // //     margin: "24px 0 14px",
// // // // //     color: "#2b2b2b",
// // // // //   };

// // // // //   const fileInput = {
// // // // //     marginTop: "8px",
// // // // //     marginBottom: "16px",
// // // // //   };

// // // // //   const hintText = {
// // // // //     fontSize: "13px",
// // // // //     color: "#666",
// // // // //     marginTop: "-6px",
// // // // //     marginBottom: "10px",
// // // // //   };

// // // // //   const previewWrap = {
// // // // //     marginTop: "10px",
// // // // //     marginBottom: "20px",
// // // // //   };

// // // // //   const previewGrid = {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // // //     gap: "16px",
// // // // //   };

// // // // //   const previewCard = {
// // // // //     border: "1px solid #ddd",
// // // // //     borderRadius: "10px",
// // // // //     padding: "10px",
// // // // //     background: "#fff",
// // // // //     cursor: "grab",
// // // // //   };

// // // // //   const previewImage = {
// // // // //     width: "100%",
// // // // //     height: "160px",
// // // // //     objectFit: "cover",
// // // // //     borderRadius: "8px",
// // // // //     border: "1px solid #ddd",
// // // // //     display: "block",
// // // // //     marginBottom: "10px",
// // // // //   };

// // // // //   const previewOrder = {
// // // // //     fontSize: "13px",
// // // // //     fontWeight: "700",
// // // // //     marginBottom: "8px",
// // // // //     color: "#444",
// // // // //   };

// // // // //   const actionRow = {
// // // // //     display: "flex",
// // // // //     gap: "8px",
// // // // //     flexWrap: "wrap",
// // // // //   };

// // // // //   const removeButton = {
// // // // //     border: "none",
// // // // //     background: "#b33939",
// // // // //     color: "#fff",
// // // // //     borderRadius: "6px",
// // // // //     padding: "8px 10px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //   };

// // // // //   const submitButton = {
// // // // //     marginTop: "10px",
// // // // //     background: "#6f3f8f",
// // // // //     color: "#fff",
// // // // //     border: "none",
// // // // //     borderRadius: "8px",
// // // // //     padding: "13px 24px",
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //   };

// // // // //   const tableWrap = {
// // // // //     width: "100%",
// // // // //     overflowX: "auto",
// // // // //     background: "#fff",
// // // // //     border: "1px solid #e7dff0",
// // // // //     borderRadius: "16px",
// // // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // //   };

// // // // //   const table = {
// // // // //     width: "100%",
// // // // //     borderCollapse: "collapse",
// // // // //     tableLayout: "fixed",
// // // // //   };

// // // // //   // Column width definitions
// // // // //   const columnWidths = {
// // // // //     product: "25%",
// // // // //     description: "30%",
// // // // //     stock: "10%",
// // // // //     price: "10%",
// // // // //     category: "8%",
// // // // //     purity: "8%",
// // // // //     actions: "9%",
// // // // //   };

// // // // //   // Header styles with text alignment
// // // // //   const th = {
// // // // //     textAlign: "left",
// // // // //     fontSize: "13px",
// // // // //     fontWeight: "700",
// // // // //     color: "#666",
// // // // //     background: "#faf7fd",
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #eadff3",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   // Cell styles with specific text alignment for each column
// // // // //   const tdProduct = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "left",
// // // // //   };

// // // // //   const tdDescription = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "left",
// // // // //   };

// // // // //   const tdStock = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "center",
// // // // //   };

// // // // //   const tdPrice = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "right",
// // // // //   };

// // // // //   const tdCategory = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "center",
// // // // //   };

// // // // //   const tdPurity = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "center",
// // // // //   };

// // // // //   const tdActions = {
// // // // //     padding: "14px 16px",
// // // // //     borderBottom: "1px solid #f0e8f6",
// // // // //     verticalAlign: "middle",
// // // // //     fontSize: "14px",
// // // // //     color: "#333",
// // // // //     textAlign: "center",
// // // // //   };

// // // // //   const productCell = {
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     gap: "12px",
// // // // //   };

// // // // //   const productThumb = {
// // // // //     width: "52px",
// // // // //     height: "52px",
// // // // //     borderRadius: "8px",
// // // // //     objectFit: "cover",
// // // // //     border: "1px solid #e5dced",
// // // // //     background: "#f3e9fb",
// // // // //     flexShrink: 0,
// // // // //   };

// // // // //   const productThumbPlaceholder = {
// // // // //     width: "52px",
// // // // //     height: "52px",
// // // // //     borderRadius: "8px",
// // // // //     border: "1px solid #e5dced",
// // // // //     background: "#f3e9fb",
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     fontSize: "11px",
// // // // //     color: "#8b6aa3",
// // // // //     fontWeight: "700",
// // // // //     flexShrink: 0,
// // // // //   };

// // // // //   const productName = {
// // // // //     margin: 0,
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "700",
// // // // //     color: "#2b2b2b",
// // // // //     lineHeight: "1.4",
// // // // //     wordBreak: "break-word",
// // // // //     textAlign: "left",
// // // // //   };

// // // // //   const productSubText = {
// // // // //     fontSize: "12px",
// // // // //     color: "#777",
// // // // //     marginTop: "4px",
// // // // //     wordBreak: "break-word",
// // // // //     textAlign: "left",
// // // // //   };

// // // // //   const descriptionCell = {
// // // // //     maxWidth: "100%",
// // // // //     overflow: "hidden",
// // // // //     textOverflow: "ellipsis",
// // // // //     whiteSpace: "nowrap",
// // // // //     color: "#555",
// // // // //     fontSize: "13px",
// // // // //     textAlign: "left",
// // // // //   };

// // // // //   const priceMain = {
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "700",
// // // // //     color: "#6f3f8f",
// // // // //     whiteSpace: "nowrap",
// // // // //     textAlign: "right",
// // // // //   };

// // // // //   const stockPill = {
// // // // //     display: "inline-flex",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     padding: "6px 10px",
// // // // //     borderRadius: "999px",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //     background: "#eaf8ee",
// // // // //     color: "#1f8b4c",
// // // // //     whiteSpace: "nowrap",
// // // // //     maxWidth: "100%",
// // // // //     margin: "0 auto",
// // // // //   };

// // // // //   const outOfStockPill = {
// // // // //     ...stockPill,
// // // // //     background: "#fff0f0",
// // // // //     color: "#c0392b",
// // // // //   };

// // // // //   const editButton = {
// // // // //     background: "#6f3f8f",
// // // // //     color: "#fff",
// // // // //     border: "none",
// // // // //     borderRadius: "8px",
// // // // //     padding: "8px 12px",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   const deleteButton = {
// // // // //     background: "#fff1f1",
// // // // //     color: "#b33939",
// // // // //     border: "1px solid #f0c7c7",
// // // // //     borderRadius: "8px",
// // // // //     padding: "8px 12px",
// // // // //     fontSize: "12px",
// // // // //     fontWeight: "700",
// // // // //     cursor: "pointer",
// // // // //     whiteSpace: "nowrap",
// // // // //   };

// // // // //   const actionsContainer = {
// // // // //     display: "flex",
// // // // //     gap: "6px",
// // // // //     flexWrap: "wrap",
// // // // //     justifyContent: "center",
// // // // //   };

// // // // //   const noProductsBox = {
// // // // //     background: "#fff",
// // // // //     border: "1px dashed #d9c8e7",
// // // // //     borderRadius: "16px",
// // // // //     padding: "40px 24px",
// // // // //     textAlign: "center",
// // // // //     color: "#666",
// // // // //     fontSize: "15px",
// // // // //   };

// // // // //   // Function to handle edit button click
// // // // //   const handleEditClick = (product) => {
// // // // //     // Map the product data to match formData structure
// // // // //     const editedFormData = {
// // // // //       id: product.id,
// // // // //       productName: product.name || "",
// // // // //       metalType: product.metalType || "",
// // // // //       productDescription: product.description || "",
// // // // //       purity: product.purity || "",
// // // // //       weight: product.weight || "",
// // // // //       pricePerGram: product.pricePerGram || "",
// // // // //       makingCharges: product.makingCharges || "",
// // // // //       offerPrice: product.offerPrice || "",
// // // // //       totalPrice: product.totalPrice || "",
// // // // //       stock: product.stock || "",
// // // // //     };
    
// // // // //     // Update form data with product details
// // // // //     setFormData(editedFormData);
    
// // // // //     // Set edit mode to true
// // // // //     setIsEditMode(true);
    
// // // // //     // Convert image URLs to preview format if they exist
// // // // //     if (product.images && product.images.length > 0) {
// // // // //       const imagePreviews = product.images.map((src, index) => ({
// // // // //         id: `existing-${index}-${Date.now()}`,
// // // // //         src: src,
// // // // //         name: `Image ${index + 1}`,
// // // // //       }));
// // // // //       setPreviews(imagePreviews);
// // // // //     }
    
// // // // //     // Show the form
// // // // //     setShowAddProductForm(true);
// // // // //   };

// // // // //   // Function to handle closing the form
// // // // //   const handleCloseForm = () => {
// // // // //     setShowAddProductForm(false);
// // // // //     setIsEditMode(false);
// // // // //     // Reset form
// // // // //     setFormData({
// // // // //       productName: "",
// // // // //       metalType: "",
// // // // //       productDescription: "",
// // // // //       purity: "",
// // // // //       weight: "",
// // // // //       pricePerGram: "",
// // // // //       makingCharges: "",
// // // // //       offerPrice: "",
// // // // //       totalPrice: "",
// // // // //       stock: "",
// // // // //     });
// // // // //     setPreviews([]);
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.value = "";
// // // // //     }
// // // // //   };

// // // // //   // Function to handle add new product button
// // // // //   const handleAddNewClick = () => {
// // // // //     // Reset form when adding new product
// // // // //     setFormData({
// // // // //       productName: "",
// // // // //       metalType: "",
// // // // //       productDescription: "",
// // // // //       purity: "",
// // // // //       weight: "",
// // // // //       pricePerGram: "",
// // // // //       makingCharges: "",
// // // // //       offerPrice: "",
// // // // //       totalPrice: "",
// // // // //       stock: "",
// // // // //     });
// // // // //     setIsEditMode(false);
// // // // //     setPreviews([]);
// // // // //     if (fileInputRef.current) {
// // // // //       fileInputRef.current.value = "";
// // // // //     }
// // // // //     setShowAddProductForm((prev) => !prev);
// // // // //   };

// // // // //   // Function to truncate description
// // // // //   const truncateDescription = (desc, maxLength = 150) => {
// // // // //     if (!desc) return "-";
// // // // //     if (desc.length <= maxLength) return desc;
// // // // //     return desc.substring(0, maxLength) + "...";
// // // // //   };

// // // // //   return (
// // // // //     <div style={productsPageWrap}>
// // // // //       <div style={productsHeader}>
// // // // //         <div>
// // // // //           <h1 style={productsTitle}>Products</h1>
// // // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // // //         </div>

// // // // //         <div style={productsActionRow}>
// // // // //           <select
// // // // //             value={productFilterType}
// // // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // // //             style={filterSelect}
// // // // //           >
// // // // //             <option value="all">All Products</option>
// // // // //             {storedMetals.map((metal) => (
// // // // //               <option key={metal} value={metal}>
// // // // //                 {metal}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>

// // // // //           <button
// // // // //             type="button"
// // // // //             style={addButton}
// // // // //             onClick={handleAddNewClick}
// // // // //           >
// // // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {showAddProductForm ? (
// // // // //         <div style={addProductFormCard}>
// // // // //           <div style={formHeaderRow}>
// // // // //             <div style={heading}>
// // // // //               {formData.id ? "Edit Product" : "Add Product"}
// // // // //             </div>

// // // // //             <button
// // // // //               type="button"
// // // // //               style={closeButton}
// // // // //               onClick={handleCloseForm}
// // // // //             >
// // // // //               ✕
// // // // //             </button>
// // // // //           </div>

// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <div style={grid}>
// // // // //               <div style={fieldWrap}>
// // // // //                 <label style={label}>Product Name</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="productName"
// // // // //                   value={formData.productName || ""}
// // // // //                   onChange={handleInputChange}
// // // // //                   placeholder="Enter product name"
// // // // //                   style={input}
// // // // //                 />
// // // // //               </div>

// // // // //               <div style={fieldWrap}>
// // // // //                 <label style={label}>Metal Type</label>
// // // // //                 <select
// // // // //                   name="metalType"
// // // // //                   value={formData.metalType || ""}
// // // // //                   onChange={handleInputChange}
// // // // //                   style={input}
// // // // //                 >
// // // // //                   <option value="">Select metal type</option>
// // // // //                   {storedMetals.map((metal) => (
// // // // //                     <option key={metal} value={metal}>
// // // // //                       {metal}
// // // // //                     </option>
// // // // //                   ))}
// // // // //                 </select>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div style={descriptionWrap}>
// // // // //               <label style={label}>Product Description</label>
// // // // //               <textarea
// // // // //                 name="productDescription"
// // // // //                 value={formData.productDescription || ""}
// // // // //                 onChange={handleInputChange}
// // // // //                 placeholder="Enter product description"
// // // // //                 style={textarea}
// // // // //               />
// // // // //             </div>

// // // // //             {formData.metalType && (
// // // // //               <div style={detailGrid}>
// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Purity</label>
// // // // //                   <select
// // // // //                     name="purity"
// // // // //                     value={formData.purity || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     style={input}
// // // // //                   >
// // // // //                     <option value="">Select purity</option>
// // // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // // //                       <option key={purity} value={purity}>
// // // // //                         {purity}
// // // // //                       </option>
// // // // //                     ))}
// // // // //                   </select>
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Weight</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="weight"
// // // // //                     value={formData.weight || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter weight"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Price Per Gram</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="pricePerGram"
// // // // //                     value={formData.pricePerGram || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter price per gram"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Making Charges</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="makingCharges"
// // // // //                     value={formData.makingCharges || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter making charges"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Offer Price</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="offerPrice"
// // // // //                     value={formData.offerPrice || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter offer price"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Total Price</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="totalPrice"
// // // // //                     value={formData.totalPrice || ""}
// // // // //                     readOnly
// // // // //                     placeholder="Auto calculated"
// // // // //                     style={{
// // // // //                       ...input,
// // // // //                       background: "#f4f0f8",
// // // // //                       color: "#5d3d75",
// // // // //                       fontWeight: "700",
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div style={fieldWrap}>
// // // // //                   <label style={label}>Stock</label>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     name="stock"
// // // // //                     value={formData.stock || ""}
// // // // //                     onChange={handleInputChange}
// // // // //                     placeholder="Enter stock"
// // // // //                     style={input}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // // //             <div style={fieldWrap}>
// // // // //               <label style={label}>Upload Product Images</label>
// // // // //               <input
// // // // //                 ref={fileInputRef}
// // // // //                 type="file"
// // // // //                 accept="image/*"
// // // // //                 multiple
// // // // //                 onChange={handleImageChange}
// // // // //                 style={fileInput}
// // // // //               />
// // // // //               <div style={hintText}>
// // // // //                 Drag the uploaded images to arrange order. The first image will be
// // // // //                 the main image.
// // // // //               </div>
// // // // //             </div>

// // // // //             {previews.length > 0 && (
// // // // //               <div style={previewWrap}>
// // // // //                 <div style={previewGrid}>
// // // // //                   {previews.map((img, index) => (
// // // // //                     <div
// // // // //                       key={img.id}
// // // // //                       style={previewCard}
// // // // //                       draggable
// // // // //                       onDragStart={() => handleDragStart(index)}
// // // // //                       onDragEnter={() => handleDragEnter(index)}
// // // // //                       onDragOver={(e) => e.preventDefault()}
// // // // //                       onDrop={handleDrop}
// // // // //                       onDragEnd={handleDragEnd}
// // // // //                     >
// // // // //                       <img
// // // // //                         src={img.src}
// // // // //                         alt={`Preview ${index + 1}`}
// // // // //                         style={previewImage}
// // // // //                       />

// // // // //                       <div style={previewOrder}>
// // // // //                         Image {index + 1}
// // // // //                         {index === 0 ? " (Main image)" : ""}
// // // // //                       </div>

// // // // //                       <div style={actionRow}>
// // // // //                         <button
// // // // //                           type="button"
// // // // //                           style={removeButton}
// // // // //                           onClick={() => removeImage(index)}
// // // // //                         >
// // // // //                           Remove
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             <button type="submit" style={submitButton}>
// // // // //               {formData.id ? "Update Product" : "Save Product"}
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       ) : filteredProducts.length > 0 ? (
// // // // //         <div style={tableWrap}>
// // // // //           <table style={table}>
// // // // //             <colgroup>
// // // // //               <col style={{ width: columnWidths.product }} />
// // // // //               <col style={{ width: columnWidths.description }} />
// // // // //               <col style={{ width: columnWidths.stock }} />
// // // // //               <col style={{ width: columnWidths.price }} />
// // // // //               <col style={{ width: columnWidths.category }} />
// // // // //               <col style={{ width: columnWidths.purity }} />
// // // // //               <col style={{ width: columnWidths.actions }} />
// // // // //             </colgroup>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th style={{...th, textAlign: "left"}}>Product</th>
// // // // //                 <th style={{...th, textAlign: "left"}}>Description</th>
// // // // //                 <th style={{...th, textAlign: "center"}}>Stock</th>
// // // // //                 <th style={{...th, textAlign: "right"}}>Price</th>
// // // // //                 <th style={{...th, textAlign: "center"}}>Category</th>
// // // // //                 <th style={{...th, textAlign: "center"}}>Purity</th>
// // // // //                 <th style={{...th, textAlign: "center"}}>Actions</th>
// // // // //               </tr>
// // // // //             </thead>

// // // // //             <tbody>
// // // // //               {filteredProducts.map((product) => {
// // // // //                 const mainImage = product.images?.[0] || "";
// // // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // // //                 return (
// // // // //                   <tr key={product.id}>
// // // // //                     <td style={tdProduct}>
// // // // //                       <div style={productCell}>
// // // // //                         {mainImage ? (
// // // // //                           <img
// // // // //                             src={mainImage}
// // // // //                             alt={product.name}
// // // // //                             style={productThumb}
// // // // //                           />
// // // // //                         ) : (
// // // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // // //                         )}

// // // // //                         <div style={{ flex: 1, minWidth: 0 }}>
// // // // //                           <p style={productName}>{product.name}</p>
// // // // //                           <div style={productSubText}>
// // // // //                             {product.metalType || "-"}
// // // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </td>

// // // // //                     <td style={tdDescription}>
// // // // //                       <div style={descriptionCell} title={product.description || ""}>
// // // // //                         {truncateDescription(product.description)}
// // // // //                       </div>
// // // // //                     </td>

// // // // //                     <td style={tdStock}>
// // // // //                       <span style={isInStock ? stockPill : outOfStockPill}>
// // // // //                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // // //                       </span>
// // // // //                     </td>

// // // // //                     <td style={tdPrice}>
// // // // //                       <div style={priceMain}>
// // // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // // //                       </div>
// // // // //                     </td>

// // // // //                     <td style={tdCategory}>
// // // // //                       {product.metalType || "-"}
// // // // //                     </td>

// // // // //                     <td style={tdPurity}>
// // // // //                       {product.purity || "-"}
// // // // //                     </td>

// // // // //                     <td style={tdActions}>
// // // // //                       <div style={actionsContainer}>
// // // // //                         <button
// // // // //                           type="button"
// // // // //                           style={editButton}
// // // // //                           onClick={() => handleEditClick(product)}
// // // // //                         >
// // // // //                           Edit
// // // // //                         </button>
// // // // //                         <button
// // // // //                           type="button"
// // // // //                           style={deleteButton}
// // // // //                           onClick={() => confirmDeleteProduct(product.id)}
// // // // //                         >
// // // // //                           Remove
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 );
// // // // //               })}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div style={noProductsBox}>
// // // // //           {productFilterType === "all" ? (
// // // // //             <>
// // // // //               No products uploaded yet. Click <strong>Add Product</strong> to create
// // // // //               your first product.
// // // // //             </>
// // // // //           ) : (
// // // // //             <>No {productFilterType} products found.</>
// // // // //           )}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import React from "react";

// // // // export default function Products({
// // // //   storedMetals = [],
// // // //   metalPurities = {},
// // // //   productFilterType,
// // // //   setProductFilterType,
// // // //   showAddProductForm,
// // // //   setShowAddProductForm,
// // // //   formData,
// // // //   handleInputChange,
// // // //   handleSubmit,
// // // //   fileInputRef,
// // // //   handleImageChange,
// // // //   previews = [],
// // // //   handleDragStart,
// // // //   handleDragEnter,
// // // //   handleDrop,
// // // //   handleDragEnd,
// // // //   removeImage,
// // // //   filteredProducts = [],
// // // //   confirmDeleteProduct,
// // // //   setFormData,
// // // //   setIsEditMode,
// // // //   setPreviews,
// // // // }) {
// // // //   const heading = {
// // // //     fontSize: "28px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "24px",
// // // //     color: "#222",
// // // //   };

// // // //   const productsPageWrap = {
// // // //     width: "100%",
// // // //     maxWidth: "1300px",
// // // //   };

// // // //   const productsHeader = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "flex-start",
// // // //     gap: "12px",
// // // //     marginBottom: "24px",
// // // //     flexWrap: "wrap",
// // // //   };

// // // //   const productsTitle = {
// // // //     fontSize: "28px",
// // // //     fontWeight: "700",
// // // //     color: "#222",
// // // //     margin: 0,
// // // //   };

// // // //   const productsSubTitle = {
// // // //     fontSize: "14px",
// // // //     color: "#666",
// // // //     marginTop: "6px",
// // // //   };

// // // //   const productsActionRow = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "12px",
// // // //     flexWrap: "wrap",
// // // //   };

// // // //   const filterSelect = {
// // // //     height: "44px",
// // // //     minWidth: "180px",
// // // //     border: "1px solid #ddd",
// // // //     borderRadius: "8px",
// // // //     padding: "0 12px",
// // // //     fontSize: "14px",
// // // //     outline: "none",
// // // //     background: "#fff",
// // // //     color: "#333",
// // // //     boxSizing: "border-box",
// // // //   };

// // // //   const addButton = {
// // // //     background: "#6f3f8f",
// // // //     color: "#fff",
// // // //     border: "none",
// // // //     borderRadius: "8px",
// // // //     padding: "11px 18px",
// // // //     fontSize: "14px",
// // // //     fontWeight: "700",
// // // //     cursor: "pointer",
// // // //     whiteSpace: "nowrap",
// // // //   };

// // // //   const addProductFormCard = {
// // // //     background: "#fff",
// // // //     border: "1px solid #e7dff0",
// // // //     borderRadius: "16px",
// // // //     padding: "28px",
// // // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // //     marginBottom: "24px",
// // // //   };

// // // //   const formHeaderRow = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     gap: "12px",
// // // //     marginBottom: "8px",
// // // //   };

// // // //   const closeButton = {
// // // //     width: "38px",
// // // //     height: "38px",
// // // //     borderRadius: "50%",
// // // //     border: "none",
// // // //     background: "#f3e9fb",
// // // //     color: "#5d3d75",
// // // //     fontSize: "18px",
// // // //     fontWeight: "700",
// // // //     cursor: "pointer",
// // // //     flexShrink: 0,
// // // //   };

// // // //   const grid = {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // //     gap: "18px",
// // // //     marginBottom: "26px",
// // // //   };

// // // //   const detailGrid = {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // //     gap: "18px",
// // // //     marginBottom: "26px",
// // // //   };

// // // //   const fieldWrap = {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //   };

// // // //   const label = {
// // // //     fontSize: "14px",
// // // //     fontWeight: "600",
// // // //     marginBottom: "8px",
// // // //     color: "#333",
// // // //   };

// // // //   const input = {
// // // //     height: "44px",
// // // //     border: "1px solid #ddd",
// // // //     borderRadius: "8px",
// // // //     padding: "0 12px",
// // // //     fontSize: "14px",
// // // //     outline: "none",
// // // //     boxSizing: "border-box",
// // // //     width: "100%",
// // // //     background: "#fff",
// // // //   };

// // // //   const textarea = {
// // // //     minHeight: "110px",
// // // //     border: "1px solid #ddd",
// // // //     borderRadius: "8px",
// // // //     padding: "12px",
// // // //     fontSize: "14px",
// // // //     outline: "none",
// // // //     resize: "vertical",
// // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // //     boxSizing: "border-box",
// // // //     width: "100%",
// // // //   };

// // // //   const descriptionWrap = {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     marginBottom: "26px",
// // // //   };

// // // //   const sectionTitle = {
// // // //     fontSize: "18px",
// // // //     fontWeight: "700",
// // // //     margin: "24px 0 14px",
// // // //     color: "#2b2b2b",
// // // //   };

// // // //   const fileInput = {
// // // //     marginTop: "8px",
// // // //     marginBottom: "16px",
// // // //   };

// // // //   const hintText = {
// // // //     fontSize: "13px",
// // // //     color: "#666",
// // // //     marginTop: "-6px",
// // // //     marginBottom: "10px",
// // // //   };

// // // //   const previewWrap = {
// // // //     marginTop: "10px",
// // // //     marginBottom: "20px",
// // // //   };

// // // //   const previewGrid = {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // //     gap: "16px",
// // // //   };

// // // //   const previewCard = {
// // // //     border: "1px solid #ddd",
// // // //     borderRadius: "10px",
// // // //     padding: "10px",
// // // //     background: "#fff",
// // // //     cursor: "grab",
// // // //   };

// // // //   const previewImage = {
// // // //     width: "100%",
// // // //     height: "160px",
// // // //     objectFit: "cover",
// // // //     borderRadius: "8px",
// // // //     border: "1px solid #ddd",
// // // //     display: "block",
// // // //     marginBottom: "10px",
// // // //   };

// // // //   const previewOrder = {
// // // //     fontSize: "13px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "8px",
// // // //     color: "#444",
// // // //   };

// // // //   const actionRow = {
// // // //     display: "flex",
// // // //     gap: "8px",
// // // //     flexWrap: "wrap",
// // // //   };

// // // //   const removeButton = {
// // // //     border: "none",
// // // //     background: "#b33939",
// // // //     color: "#fff",
// // // //     borderRadius: "6px",
// // // //     padding: "8px 10px",
// // // //     cursor: "pointer",
// // // //     fontSize: "12px",
// // // //     fontWeight: "700",
// // // //   };

// // // //   const submitButton = {
// // // //     marginTop: "10px",
// // // //     background: "#6f3f8f",
// // // //     color: "#fff",
// // // //     border: "none",
// // // //     borderRadius: "8px",
// // // //     padding: "13px 24px",
// // // //     fontSize: "15px",
// // // //     fontWeight: "700",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const tableWrap = {
// // // //     width: "100%",
// // // //     overflowX: "auto",
// // // //     background: "#fff",
// // // //     border: "1px solid #e7dff0",
// // // //     borderRadius: "16px",
// // // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // //   };

// // // //   const table = {
// // // //     width: "100%",
// // // //     borderCollapse: "collapse",
// // // //     tableLayout: "fixed",
// // // //   };

// // // //   // ─── Shared base styles ───────────────────────────────────────────────
// // // //   const thBase = {
// // // //     fontSize: "13px",
// // // //     fontWeight: "700",
// // // //     color: "#666",
// // // //     background: "#faf7fd",
// // // //     padding: "14px 16px",
// // // //     borderBottom: "1px solid #eadff3",
// // // //     whiteSpace: "nowrap",
// // // //     verticalAlign: "middle",
// // // //   };

// // // //   const tdBase = {
// // // //     padding: "14px 16px",
// // // //     borderBottom: "1px solid #f0e8f6",
// // // //     verticalAlign: "middle",
// // // //     fontSize: "14px",
// // // //     color: "#333",
// // // //   };

// // // //   // ─── Per-column header styles ─────────────────────────────────────────
// // // //   const thProduct     = { ...thBase, textAlign: "left",   width: "25%" };
// // // //   const thDescription = { ...thBase, textAlign: "left",   width: "30%" };
// // // //   const thStock       = { ...thBase, textAlign: "center", width: "10%" };
// // // //   const thPrice       = { ...thBase, textAlign: "right",  width: "10%" };
// // // //   const thCategory    = { ...thBase, textAlign: "center", width: "8%"  };
// // // //   const thPurity      = { ...thBase, textAlign: "center", width: "8%"  };
// // // //   const thActions     = { ...thBase, textAlign: "center", width: "9%"  };

// // // //   // ─── Per-column cell styles ───────────────────────────────────────────
// // // //   const tdProduct     = { ...tdBase, textAlign: "left"   };
// // // //   const tdDescription = { ...tdBase, textAlign: "left"   };
// // // //   const tdStock       = { ...tdBase, textAlign: "center" };
// // // //   const tdPrice       = { ...tdBase, textAlign: "right"  };
// // // //   const tdCategory    = { ...tdBase, textAlign: "center" };
// // // //   const tdPurity      = { ...tdBase, textAlign: "center" };
// // // //   const tdActions     = { ...tdBase, textAlign: "center" };

// // // //   // ─── Product cell inner layout ────────────────────────────────────────
// // // //   const productCell = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "12px",
// // // //   };

// // // //   const productThumb = {
// // // //     width: "52px",
// // // //     height: "52px",
// // // //     borderRadius: "8px",
// // // //     objectFit: "cover",
// // // //     border: "1px solid #e5dced",
// // // //     background: "#f3e9fb",
// // // //     flexShrink: 0,
// // // //     display: "block",
// // // //   };

// // // //   const productThumbPlaceholder = {
// // // //     width: "52px",
// // // //     height: "52px",
// // // //     borderRadius: "8px",
// // // //     border: "1px solid #e5dced",
// // // //     background: "#f3e9fb",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     fontSize: "11px",
// // // //     color: "#8b6aa3",
// // // //     fontWeight: "700",
// // // //     flexShrink: 0,
// // // //     textAlign: "center",
// // // //   };

// // // //   const productName = {
// // // //     margin: 0,
// // // //     fontSize: "15px",
// // // //     fontWeight: "700",
// // // //     color: "#2b2b2b",
// // // //     lineHeight: "1.4",
// // // //     wordBreak: "break-word",
// // // //   };

// // // //   const productSubText = {
// // // //     fontSize: "12px",
// // // //     color: "#777",
// // // //     marginTop: "4px",
// // // //     wordBreak: "break-word",
// // // //   };

// // // //   const descriptionCell = {
// // // //     overflow: "hidden",
// // // //     textOverflow: "ellipsis",
// // // //     whiteSpace: "nowrap",
// // // //     color: "#555",
// // // //     fontSize: "13px",
// // // //   };

// // // //   const priceMain = {
// // // //     fontSize: "15px",
// // // //     fontWeight: "700",
// // // //     color: "#6f3f8f",
// // // //     whiteSpace: "nowrap",
// // // //   };

// // // //   const stockPillBase = {
// // // //     display: "inline-flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     padding: "5px 10px",
// // // //     borderRadius: "999px",
// // // //     fontSize: "12px",
// // // //     fontWeight: "700",
// // // //     whiteSpace: "nowrap",
// // // //   };

// // // //   const stockPill = {
// // // //     ...stockPillBase,
// // // //     background: "#eaf8ee",
// // // //     color: "#1f8b4c",
// // // //   };

// // // //   const outOfStockPill = {
// // // //     ...stockPillBase,
// // // //     background: "#fff0f0",
// // // //     color: "#c0392b",
// // // //   };

// // // //   const editButton = {
// // // //     background: "#6f3f8f",
// // // //     color: "#fff",
// // // //     border: "none",
// // // //     borderRadius: "8px",
// // // //     padding: "7px 12px",
// // // //     fontSize: "12px",
// // // //     fontWeight: "700",
// // // //     cursor: "pointer",
// // // //     whiteSpace: "nowrap",
// // // //     lineHeight: "1",
// // // //   };

// // // //   const deleteButton = {
// // // //     background: "#fff1f1",
// // // //     color: "#b33939",
// // // //     border: "1px solid #f0c7c7",
// // // //     borderRadius: "8px",
// // // //     padding: "7px 12px",
// // // //     fontSize: "12px",
// // // //     fontWeight: "700",
// // // //     cursor: "pointer",
// // // //     whiteSpace: "nowrap",
// // // //     lineHeight: "1",
// // // //   };

// // // //   const actionsContainer = {
// // // //     display: "flex",
// // // //     gap: "6px",
// // // //     flexWrap: "wrap",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   };

// // // //   const noProductsBox = {
// // // //     background: "#fff",
// // // //     border: "1px dashed #d9c8e7",
// // // //     borderRadius: "16px",
// // // //     padding: "40px 24px",
// // // //     textAlign: "center",
// // // //     color: "#666",
// // // //     fontSize: "15px",
// // // //   };

// // // //   // ─── Handlers ─────────────────────────────────────────────────────────
// // // //   const handleEditClick = (product) => {
// // // //     const editedFormData = {
// // // //       id: product.id,
// // // //       productName: product.name || "",
// // // //       metalType: product.metalType || "",
// // // //       productDescription: product.description || "",
// // // //       purity: product.purity || "",
// // // //       weight: product.weight || "",
// // // //       pricePerGram: product.pricePerGram || "",
// // // //       makingCharges: product.makingCharges || "",
// // // //       offerPrice: product.offerPrice || "",
// // // //       totalPrice: product.totalPrice || "",
// // // //       stock: product.stock || "",
// // // //     };
// // // //     setFormData(editedFormData);
// // // //     setIsEditMode(true);
// // // //     if (product.images && product.images.length > 0) {
// // // //       const imagePreviews = product.images.map((src, index) => ({
// // // //         id: `existing-${index}-${Date.now()}`,
// // // //         src,
// // // //         name: `Image ${index + 1}`,
// // // //       }));
// // // //       setPreviews(imagePreviews);
// // // //     }
// // // //     setShowAddProductForm(true);
// // // //   };

// // // //   const handleCloseForm = () => {
// // // //     setShowAddProductForm(false);
// // // //     setIsEditMode(false);
// // // //     setFormData({
// // // //       productName: "",
// // // //       metalType: "",
// // // //       productDescription: "",
// // // //       purity: "",
// // // //       weight: "",
// // // //       pricePerGram: "",
// // // //       makingCharges: "",
// // // //       offerPrice: "",
// // // //       totalPrice: "",
// // // //       stock: "",
// // // //     });
// // // //     setPreviews([]);
// // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // //   };

// // // //   const handleAddNewClick = () => {
// // // //     setFormData({
// // // //       productName: "",
// // // //       metalType: "",
// // // //       productDescription: "",
// // // //       purity: "",
// // // //       weight: "",
// // // //       pricePerGram: "",
// // // //       makingCharges: "",
// // // //       offerPrice: "",
// // // //       totalPrice: "",
// // // //       stock: "",
// // // //     });
// // // //     setIsEditMode(false);
// // // //     setPreviews([]);
// // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // //     setShowAddProductForm((prev) => !prev);
// // // //   };

// // // //   const truncateDescription = (desc, maxLength = 150) => {
// // // //     if (!desc) return "-";
// // // //     if (desc.length <= maxLength) return desc;
// // // //     return desc.substring(0, maxLength) + "...";
// // // //   };

// // // //   return (
// // // //     <div style={productsPageWrap}>
// // // //       {/* ── Header ── */}
// // // //       <div style={productsHeader}>
// // // //         <div>
// // // //           <h1 style={productsTitle}>Products</h1>
// // // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // //         </div>

// // // //         <div style={productsActionRow}>
// // // //           <select
// // // //             value={productFilterType}
// // // //             onChange={(e) => setProductFilterType(e.target.value)}
// // // //             style={filterSelect}
// // // //           >
// // // //             <option value="all">All Products</option>
// // // //             {storedMetals.map((metal) => (
// // // //               <option key={metal} value={metal}>{metal}</option>
// // // //             ))}
// // // //           </select>

// // // //           <button type="button" style={addButton} onClick={handleAddNewClick}>
// // // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* ── Add / Edit Form ── */}
// // // //       {showAddProductForm ? (
// // // //         <div style={addProductFormCard}>
// // // //           <div style={formHeaderRow}>
// // // //             <div style={heading}>{formData.id ? "Edit Product" : "Add Product"}</div>
// // // //             <button type="button" style={closeButton} onClick={handleCloseForm}>✕</button>
// // // //           </div>

// // // //           <form onSubmit={handleSubmit}>
// // // //             <div style={grid}>
// // // //               <div style={fieldWrap}>
// // // //                 <label style={label}>Product Name</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="productName"
// // // //                   value={formData.productName || ""}
// // // //                   onChange={handleInputChange}
// // // //                   placeholder="Enter product name"
// // // //                   style={input}
// // // //                 />
// // // //               </div>

// // // //               <div style={fieldWrap}>
// // // //                 <label style={label}>Metal Type</label>
// // // //                 <select
// // // //                   name="metalType"
// // // //                   value={formData.metalType || ""}
// // // //                   onChange={handleInputChange}
// // // //                   style={input}
// // // //                 >
// // // //                   <option value="">Select metal type</option>
// // // //                   {storedMetals.map((metal) => (
// // // //                     <option key={metal} value={metal}>{metal}</option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //             </div>

// // // //             <div style={descriptionWrap}>
// // // //               <label style={label}>Product Description</label>
// // // //               <textarea
// // // //                 name="productDescription"
// // // //                 value={formData.productDescription || ""}
// // // //                 onChange={handleInputChange}
// // // //                 placeholder="Enter product description"
// // // //                 style={textarea}
// // // //               />
// // // //             </div>

// // // //             {formData.metalType && (
// // // //               <div style={detailGrid}>
// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Purity</label>
// // // //                   <select
// // // //                     name="purity"
// // // //                     value={formData.purity || ""}
// // // //                     onChange={handleInputChange}
// // // //                     style={input}
// // // //                   >
// // // //                     <option value="">Select purity</option>
// // // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // // //                       <option key={purity} value={purity}>{purity}</option>
// // // //                     ))}
// // // //                   </select>
// // // //                 </div>

// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Weight</label>
// // // //                   <input type="number" name="weight" value={formData.weight || ""} onChange={handleInputChange} placeholder="Enter weight" style={input} />
// // // //                 </div>

// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Price Per Gram</label>
// // // //                   <input type="number" name="pricePerGram" value={formData.pricePerGram || ""} onChange={handleInputChange} placeholder="Enter price per gram" style={input} />
// // // //                 </div>

// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Making Charges</label>
// // // //                   <input type="number" name="makingCharges" value={formData.makingCharges || ""} onChange={handleInputChange} placeholder="Enter making charges" style={input} />
// // // //                 </div>

// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Offer Price</label>
// // // //                   <input type="number" name="offerPrice" value={formData.offerPrice || ""} onChange={handleInputChange} placeholder="Enter offer price" style={input} />
// // // //                 </div>

// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Total Price</label>
// // // //                   <input
// // // //                     type="number"
// // // //                     name="totalPrice"
// // // //                     value={formData.totalPrice || ""}
// // // //                     readOnly
// // // //                     placeholder="Auto calculated"
// // // //                     style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }}
// // // //                   />
// // // //                 </div>

// // // //                 <div style={fieldWrap}>
// // // //                   <label style={label}>Stock</label>
// // // //                   <input type="number" name="stock" value={formData.stock || ""} onChange={handleInputChange} placeholder="Enter stock" style={input} />
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             <div style={sectionTitle}>Final Photo Upload</div>

// // // //             <div style={fieldWrap}>
// // // //               <label style={label}>Upload Product Images</label>
// // // //               <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageChange} style={fileInput} />
// // // //               <div style={hintText}>
// // // //                 Drag the uploaded images to arrange order. The first image will be the main image.
// // // //               </div>
// // // //             </div>

// // // //             {previews.length > 0 && (
// // // //               <div style={previewWrap}>
// // // //                 <div style={previewGrid}>
// // // //                   {previews.map((img, index) => (
// // // //                     <div
// // // //                       key={img.id}
// // // //                       style={previewCard}
// // // //                       draggable
// // // //                       onDragStart={() => handleDragStart(index)}
// // // //                       onDragEnter={() => handleDragEnter(index)}
// // // //                       onDragOver={(e) => e.preventDefault()}
// // // //                       onDrop={handleDrop}
// // // //                       onDragEnd={handleDragEnd}
// // // //                     >
// // // //                       <img src={img.src} alt={`Preview ${index + 1}`} style={previewImage} />
// // // //                       <div style={previewOrder}>Image {index + 1}{index === 0 ? " (Main image)" : ""}</div>
// // // //                       <div style={actionRow}>
// // // //                         <button type="button" style={removeButton} onClick={() => removeImage(index)}>Remove</button>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             <button type="submit" style={submitButton}>
// // // //               {formData.id ? "Update Product" : "Save Product"}
// // // //             </button>
// // // //           </form>
// // // //         </div>

// // // //       ) : filteredProducts.length > 0 ? (
// // // //         /* ── Product Table ── */
// // // //         <div style={tableWrap}>
// // // //           <table style={table}>
// // // //             <colgroup>
// // // //               <col style={{ width: "25%" }} />
// // // //               <col style={{ width: "30%" }} />
// // // //               <col style={{ width: "10%" }} />
// // // //               <col style={{ width: "10%" }} />
// // // //               <col style={{ width: "8%"  }} />
// // // //               <col style={{ width: "8%"  }} />
// // // //               <col style={{ width: "9%"  }} />
// // // //             </colgroup>

// // // //             <thead>
// // // //               <tr>
// // // //                 <th style={thProduct}>Product</th>
// // // //                 <th style={thDescription}>Description</th>
// // // //                 <th style={thStock}>Stock</th>
// // // //                 <th style={thPrice}>Price</th>
// // // //                 <th style={thCategory}>Category</th>
// // // //                 <th style={thPurity}>Purity</th>
// // // //                 <th style={thActions}>Actions</th>
// // // //               </tr>
// // // //             </thead>

// // // //             <tbody>
// // // //               {filteredProducts.map((product) => {
// // // //                 const mainImage = product.images?.[0] || "";
// // // //                 const isInStock = Number(product.stock || 0) > 0;

// // // //                 return (
// // // //                   <tr key={product.id}>
// // // //                     {/* Product column */}
// // // //                     <td style={tdProduct}>
// // // //                       <div style={productCell}>
// // // //                         {mainImage ? (
// // // //                           <img src={mainImage} alt={product.name} style={productThumb} />
// // // //                         ) : (
// // // //                           <div style={productThumbPlaceholder}>No Image</div>
// // // //                         )}
// // // //                         <div style={{ flex: 1, minWidth: 0 }}>
// // // //                           <p style={productName}>{product.name}</p>
// // // //                           <div style={productSubText}>
// // // //                             {product.metalType || "-"}
// // // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </td>

// // // //                     {/* Description column */}
// // // //                     <td style={tdDescription}>
// // // //                       <div style={descriptionCell} title={product.description || ""}>
// // // //                         {truncateDescription(product.description)}
// // // //                       </div>
// // // //                     </td>

// // // //                     {/* Stock column */}
// // // //                     <td style={tdStock}>
// // // //                       <span style={isInStock ? stockPill : outOfStockPill}>
// // // //                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // // //                       </span>
// // // //                     </td>

// // // //                     {/* Price column */}
// // // //                     <td style={tdPrice}>
// // // //                       <span style={priceMain}>
// // // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // //                       </span>
// // // //                     </td>

// // // //                     {/* Category column */}
// // // //                     <td style={tdCategory}>
// // // //                       {product.metalType || "-"}
// // // //                     </td>

// // // //                     {/* Purity column */}
// // // //                     <td style={tdPurity}>
// // // //                       {product.purity || "-"}
// // // //                     </td>

// // // //                     {/* Actions column */}
// // // //                     <td style={tdActions}>
// // // //                       <div style={actionsContainer}>
// // // //                         <button type="button" style={editButton} onClick={() => handleEditClick(product)}>
// // // //                           Edit
// // // //                         </button>
// // // //                         <button type="button" style={deleteButton} onClick={() => confirmDeleteProduct(product.id)}>
// // // //                           Remove
// // // //                         </button>
// // // //                       </div>
// // // //                     </td>
// // // //                   </tr>
// // // //                 );
// // // //               })}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //       ) : (
// // // //         /* ── Empty state ── */
// // // //         <div style={noProductsBox}>
// // // //           {productFilterType === "all" ? (
// // // //             <>No products uploaded yet. Click <strong>Add Product</strong> to create your first product.</>
// // // //           ) : (
// // // //             <>No {productFilterType} products found.</>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }






// // // import React from "react";

// // // export default function Products({
// // //   storedMetals = [],
// // //   metalPurities = {},
// // //   productFilterType,
// // //   setProductFilterType,
// // //   showAddProductForm,
// // //   setShowAddProductForm,
// // //   formData,
// // //   handleInputChange,
// // //   handleSubmit,
// // //   fileInputRef,
// // //   handleImageChange,
// // //   previews = [],
// // //   handleDragStart,
// // //   handleDragEnter,
// // //   handleDrop,
// // //   handleDragEnd,
// // //   removeImage,
// // //   filteredProducts = [],
// // //   confirmDeleteProduct,
// // //   setFormData,
// // //   setIsEditMode,
// // //   setPreviews,
// // // }) {
// // //   const heading = {
// // //     fontSize: "28px",
// // //     fontWeight: "700",
// // //     marginBottom: "24px",
// // //     color: "#222",
// // //   };

// // //   const productsPageWrap = {
// // //     width: "100%",
// // //     maxWidth: "1300px",
// // //   };

// // //   const productsHeader = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "flex-start",
// // //     gap: "12px",
// // //     marginBottom: "24px",
// // //     flexWrap: "wrap",
// // //   };

// // //   const productsTitle = {
// // //     fontSize: "28px",
// // //     fontWeight: "700",
// // //     color: "#222",
// // //     margin: 0,
// // //   };

// // //   const productsSubTitle = {
// // //     fontSize: "14px",
// // //     color: "#666",
// // //     marginTop: "6px",
// // //   };

// // //   const productsActionRow = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "12px",
// // //     flexWrap: "wrap",
// // //   };

// // //   const filterSelect = {
// // //     height: "44px",
// // //     minWidth: "180px",
// // //     border: "1px solid #ddd",
// // //     borderRadius: "8px",
// // //     padding: "0 12px",
// // //     fontSize: "14px",
// // //     outline: "none",
// // //     background: "#fff",
// // //     color: "#333",
// // //     boxSizing: "border-box",
// // //   };

// // //   const addButton = {
// // //     background: "#6f3f8f",
// // //     color: "#fff",
// // //     border: "none",
// // //     borderRadius: "8px",
// // //     padding: "11px 18px",
// // //     fontSize: "14px",
// // //     fontWeight: "700",
// // //     cursor: "pointer",
// // //     whiteSpace: "nowrap",
// // //   };

// // //   const addProductFormCard = {
// // //     background: "#fff",
// // //     border: "1px solid #e7dff0",
// // //     borderRadius: "16px",
// // //     padding: "28px",
// // //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // //     marginBottom: "24px",
// // //   };

// // //   const formHeaderRow = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     gap: "12px",
// // //     marginBottom: "8px",
// // //   };

// // //   const closeButton = {
// // //     width: "38px",
// // //     height: "38px",
// // //     borderRadius: "50%",
// // //     border: "none",
// // //     background: "#f3e9fb",
// // //     color: "#5d3d75",
// // //     fontSize: "18px",
// // //     fontWeight: "700",
// // //     cursor: "pointer",
// // //     flexShrink: 0,
// // //   };

// // //   const grid = {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // //     gap: "18px",
// // //     marginBottom: "26px",
// // //   };

// // //   const detailGrid = {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // //     gap: "18px",
// // //     marginBottom: "26px",
// // //   };

// // //   const fieldWrap = {
// // //     display: "flex",
// // //     flexDirection: "column",
// // //   };

// // //   const label = {
// // //     fontSize: "14px",
// // //     fontWeight: "600",
// // //     marginBottom: "8px",
// // //     color: "#333",
// // //   };

// // //   const input = {
// // //     height: "44px",
// // //     border: "1px solid #ddd",
// // //     borderRadius: "8px",
// // //     padding: "0 12px",
// // //     fontSize: "14px",
// // //     outline: "none",
// // //     boxSizing: "border-box",
// // //     width: "100%",
// // //     background: "#fff",
// // //   };

// // //   const textarea = {
// // //     minHeight: "110px",
// // //     border: "1px solid #ddd",
// // //     borderRadius: "8px",
// // //     padding: "12px",
// // //     fontSize: "14px",
// // //     outline: "none",
// // //     resize: "vertical",
// // //     fontFamily: "Arial, Helvetica, sans-serif",
// // //     boxSizing: "border-box",
// // //     width: "100%",
// // //   };

// // //   const descriptionWrap = {
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     marginBottom: "26px",
// // //   };

// // //   const sectionTitle = {
// // //     fontSize: "18px",
// // //     fontWeight: "700",
// // //     margin: "24px 0 14px",
// // //     color: "#2b2b2b",
// // //   };

// // //   const fileInput = {
// // //     marginTop: "8px",
// // //     marginBottom: "16px",
// // //   };

// // //   const hintText = {
// // //     fontSize: "13px",
// // //     color: "#666",
// // //     marginTop: "-6px",
// // //     marginBottom: "10px",
// // //   };

// // //   const previewWrap = {
// // //     marginTop: "10px",
// // //     marginBottom: "20px",
// // //   };

// // //   const previewGrid = {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // //     gap: "16px",
// // //   };

// // //   const previewCard = {
// // //     border: "1px solid #ddd",
// // //     borderRadius: "10px",
// // //     padding: "10px",
// // //     background: "#fff",
// // //     cursor: "grab",
// // //   };

// // //   const previewImage = {
// // //     width: "100%",
// // //     height: "160px",
// // //     objectFit: "cover",
// // //     borderRadius: "8px",
// // //     border: "1px solid #ddd",
// // //     display: "block",
// // //     marginBottom: "10px",
// // //   };

// // //   const previewOrder = {
// // //     fontSize: "13px",
// // //     fontWeight: "700",
// // //     marginBottom: "8px",
// // //     color: "#444",
// // //   };

// // //   const actionRow = {
// // //     display: "flex",
// // //     gap: "8px",
// // //     flexWrap: "wrap",
// // //   };

// // //   const removeButton = {
// // //     border: "none",
// // //     background: "#b33939",
// // //     color: "#fff",
// // //     borderRadius: "6px",
// // //     padding: "8px 10px",
// // //     cursor: "pointer",
// // //     fontSize: "12px",
// // //     fontWeight: "700",
// // //   };

// // //   const submitButton = {
// // //     marginTop: "10px",
// // //     background: "#6f3f8f",
// // //     color: "#fff",
// // //     border: "none",
// // //     borderRadius: "8px",
// // //     padding: "13px 24px",
// // //     fontSize: "15px",
// // //     fontWeight: "700",
// // //     cursor: "pointer",
// // //   };

// // //   const tableWrap = {
// // //     width: "100%",
// // //     overflowX: "auto",
// // //     background: "#fff",
// // //     border: "1px solid #e7dff0",
// // //     borderRadius: "16px",
// // //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // //   };

// // //   const table = {
// // //     width: "100%",
// // //     borderCollapse: "collapse",
// // //     tableLayout: "fixed",
// // //   };

// // //   // ─── Shared base styles ───────────────────────────────────────────────
// // //   const thBase = {
// // //     fontSize: "13px",
// // //     fontWeight: "700",
// // //     color: "#666",
// // //     background: "#faf7fd",
// // //     padding: "14px 16px",
// // //     borderBottom: "1px solid #eadff3",
// // //     whiteSpace: "nowrap",
// // //     verticalAlign: "middle",
// // //   };

// // //   const tdBase = {
// // //     padding: "14px 16px",
// // //     borderBottom: "1px solid #f0e8f6",
// // //     verticalAlign: "middle",
// // //     fontSize: "14px",
// // //     color: "#333",
// // //   };

// // //   // ─── Per-column header styles ─────────────────────────────────────────
// // //   const thProduct     = { ...thBase, textAlign: "left",   width: "25%" };
// // //   const thDescription = { ...thBase, textAlign: "left",   width: "30%" };
// // //   const thStock       = { ...thBase, textAlign: "center", width: "10%" };
// // //   const thPrice       = { ...thBase, textAlign: "right",  width: "10%" };
// // //   const thCategory    = { ...thBase, textAlign: "center", width: "8%"  };
// // //   const thPurity      = { ...thBase, textAlign: "center", width: "8%"  };
// // //   const thActions     = { ...thBase, textAlign: "center", width: "9%"  };

// // //   // ─── Per-column cell styles ───────────────────────────────────────────
// // //   const tdProduct     = { ...tdBase, textAlign: "left"   };
// // //   const tdDescription = { ...tdBase, textAlign: "left"   };
// // //   const tdStock       = { ...tdBase, textAlign: "center" };
// // //   const tdPrice       = { ...tdBase, textAlign: "right"  };
// // //   const tdCategory    = { ...tdBase, textAlign: "center" };
// // //   const tdPurity      = { ...tdBase, textAlign: "center" };
// // //   const tdActions     = { ...tdBase, textAlign: "center" };

// // //   // ─── Product cell inner layout ────────────────────────────────────────
// // //   const productCell = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "12px",
// // //   };

// // //   const productThumb = {
// // //     width: "52px",
// // //     height: "52px",
// // //     borderRadius: "8px",
// // //     objectFit: "cover",
// // //     border: "1px solid #e5dced",
// // //     background: "#f3e9fb",
// // //     flexShrink: 0,
// // //     display: "block",
// // //   };

// // //   const productThumbPlaceholder = {
// // //     width: "52px",
// // //     height: "52px",
// // //     borderRadius: "8px",
// // //     border: "1px solid #e5dced",
// // //     background: "#f3e9fb",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     fontSize: "11px",
// // //     color: "#8b6aa3",
// // //     fontWeight: "700",
// // //     flexShrink: 0,
// // //     textAlign: "center",
// // //   };

// // //   const productName = {
// // //     margin: 0,
// // //     fontSize: "15px",
// // //     fontWeight: "700",
// // //     color: "#2b2b2b",
// // //     lineHeight: "1.4",
// // //     wordBreak: "break-word",
// // //   };

// // //   const productSubText = {
// // //     fontSize: "12px",
// // //     color: "#777",
// // //     marginTop: "4px",
// // //     wordBreak: "break-word",
// // //   };

// // //   const descriptionCell = {
// // //     overflow: "hidden",
// // //     textOverflow: "ellipsis",
// // //     whiteSpace: "nowrap",
// // //     color: "#555",
// // //     fontSize: "13px",
// // //   };

// // //   const priceMain = {
// // //     fontSize: "15px",
// // //     fontWeight: "700",
// // //     color: "#6f3f8f",
// // //     whiteSpace: "nowrap",
// // //   };

// // //   const stockPillBase = {
// // //     display: "inline-flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     padding: "5px 10px",
// // //     borderRadius: "999px",
// // //     fontSize: "12px",
// // //     fontWeight: "700",
// // //     whiteSpace: "nowrap",
// // //   };

// // //   const stockPill = {
// // //     ...stockPillBase,
// // //     background: "#eaf8ee",
// // //     color: "#1f8b4c",
// // //   };

// // //   const outOfStockPill = {
// // //     ...stockPillBase,
// // //     background: "#fff0f0",
// // //     color: "#c0392b",
// // //   };

// // //   const editButton = {
// // //     background: "#f3edfb",
// // //     color: "#6f3f8f",
// // //     border: "1px solid #ddd1ee",
// // //     borderRadius: "8px",
// // //     width: "34px",
// // //     height: "34px",
// // //     display: "inline-flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     cursor: "pointer",
// // //     flexShrink: 0,
// // //     padding: 0,
// // //   };

// // //   const deleteButton = {
// // //     background: "#fff1f1",
// // //     color: "#b33939",
// // //     border: "1px solid #f0c7c7",
// // //     borderRadius: "8px",
// // //     width: "34px",
// // //     height: "34px",
// // //     display: "inline-flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     cursor: "pointer",
// // //     flexShrink: 0,
// // //     padding: 0,
// // //   };

// // //   const actionsContainer = {
// // //     display: "flex",
// // //     gap: "8px",
// // //     flexWrap: "nowrap",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   };

// // //   const noProductsBox = {
// // //     background: "#fff",
// // //     border: "1px dashed #d9c8e7",
// // //     borderRadius: "16px",
// // //     padding: "40px 24px",
// // //     textAlign: "center",
// // //     color: "#666",
// // //     fontSize: "15px",
// // //   };

// // //   // ─── Handlers ─────────────────────────────────────────────────────────
// // //   const handleEditClick = (product) => {
// // //     const editedFormData = {
// // //       id: product.id,
// // //       productName: product.name || "",
// // //       metalType: product.metalType || "",
// // //       productDescription: product.description || "",
// // //       purity: product.purity || "",
// // //       weight: product.weight || "",
// // //       pricePerGram: product.pricePerGram || "",
// // //       makingCharges: product.makingCharges || "",
// // //       offerPrice: product.offerPrice || "",
// // //       totalPrice: product.totalPrice || "",
// // //       stock: product.stock || "",
// // //     };
// // //     setFormData(editedFormData);
// // //     setIsEditMode(true);
// // //     if (product.images && product.images.length > 0) {
// // //       const imagePreviews = product.images.map((src, index) => ({
// // //         id: `existing-${index}-${Date.now()}`,
// // //         src,
// // //         name: `Image ${index + 1}`,
// // //       }));
// // //       setPreviews(imagePreviews);
// // //     }
// // //     setShowAddProductForm(true);
// // //   };

// // //   const handleCloseForm = () => {
// // //     setShowAddProductForm(false);
// // //     setIsEditMode(false);
// // //     setFormData({
// // //       productName: "",
// // //       metalType: "",
// // //       productDescription: "",
// // //       purity: "",
// // //       weight: "",
// // //       pricePerGram: "",
// // //       makingCharges: "",
// // //       offerPrice: "",
// // //       totalPrice: "",
// // //       stock: "",
// // //     });
// // //     setPreviews([]);
// // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // //   };

// // //   const handleAddNewClick = () => {
// // //     setFormData({
// // //       productName: "",
// // //       metalType: "",
// // //       productDescription: "",
// // //       purity: "",
// // //       weight: "",
// // //       pricePerGram: "",
// // //       makingCharges: "",
// // //       offerPrice: "",
// // //       totalPrice: "",
// // //       stock: "",
// // //     });
// // //     setIsEditMode(false);
// // //     setPreviews([]);
// // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // //     setShowAddProductForm((prev) => !prev);
// // //   };

// // //   const truncateDescription = (desc, maxLength = 150) => {
// // //     if (!desc) return "-";
// // //     if (desc.length <= maxLength) return desc;
// // //     return desc.substring(0, maxLength) + "...";
// // //   };

// // //   return (
// // //     <div style={productsPageWrap}>
// // //       {/* ── Header ── */}
// // //       <div style={productsHeader}>
// // //         <div>
// // //           <h1 style={productsTitle}>Products</h1>
// // //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // //         </div>

// // //         <div style={productsActionRow}>
// // //           <select
// // //             value={productFilterType}
// // //             onChange={(e) => setProductFilterType(e.target.value)}
// // //             style={filterSelect}
// // //           >
// // //             <option value="all">All Products</option>
// // //             {storedMetals.map((metal) => (
// // //               <option key={metal} value={metal}>{metal}</option>
// // //             ))}
// // //           </select>

// // //           <button type="button" style={addButton} onClick={handleAddNewClick}>
// // //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* ── Add / Edit Form ── */}
// // //       {showAddProductForm ? (
// // //         <div style={addProductFormCard}>
// // //           <div style={formHeaderRow}>
// // //             <div style={heading}>{formData.id ? "Edit Product" : "Add Product"}</div>
// // //             <button type="button" style={closeButton} onClick={handleCloseForm}>✕</button>
// // //           </div>

// // //           <form onSubmit={handleSubmit}>
// // //             <div style={grid}>
// // //               <div style={fieldWrap}>
// // //                 <label style={label}>Product Name</label>
// // //                 <input
// // //                   type="text"
// // //                   name="productName"
// // //                   value={formData.productName || ""}
// // //                   onChange={handleInputChange}
// // //                   placeholder="Enter product name"
// // //                   style={input}
// // //                 />
// // //               </div>

// // //               <div style={fieldWrap}>
// // //                 <label style={label}>Metal Type</label>
// // //                 <select
// // //                   name="metalType"
// // //                   value={formData.metalType || ""}
// // //                   onChange={handleInputChange}
// // //                   style={input}
// // //                 >
// // //                   <option value="">Select metal type</option>
// // //                   {storedMetals.map((metal) => (
// // //                     <option key={metal} value={metal}>{metal}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             <div style={descriptionWrap}>
// // //               <label style={label}>Product Description</label>
// // //               <textarea
// // //                 name="productDescription"
// // //                 value={formData.productDescription || ""}
// // //                 onChange={handleInputChange}
// // //                 placeholder="Enter product description"
// // //                 style={textarea}
// // //               />
// // //             </div>

// // //             {formData.metalType && (
// // //               <div style={detailGrid}>
// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Purity</label>
// // //                   <select
// // //                     name="purity"
// // //                     value={formData.purity || ""}
// // //                     onChange={handleInputChange}
// // //                     style={input}
// // //                   >
// // //                     <option value="">Select purity</option>
// // //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// // //                       <option key={purity} value={purity}>{purity}</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>

// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Weight</label>
// // //                   <input type="number" name="weight" value={formData.weight || ""} onChange={handleInputChange} placeholder="Enter weight" style={input} />
// // //                 </div>

// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Price Per Gram</label>
// // //                   <input type="number" name="pricePerGram" value={formData.pricePerGram || ""} onChange={handleInputChange} placeholder="Enter price per gram" style={input} />
// // //                 </div>

// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Making Charges</label>
// // //                   <input type="number" name="makingCharges" value={formData.makingCharges || ""} onChange={handleInputChange} placeholder="Enter making charges" style={input} />
// // //                 </div>

// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Offer Price</label>
// // //                   <input type="number" name="offerPrice" value={formData.offerPrice || ""} onChange={handleInputChange} placeholder="Enter offer price" style={input} />
// // //                 </div>

// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Total Price</label>
// // //                   <input
// // //                     type="number"
// // //                     name="totalPrice"
// // //                     value={formData.totalPrice || ""}
// // //                     readOnly
// // //                     placeholder="Auto calculated"
// // //                     style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }}
// // //                   />
// // //                 </div>

// // //                 <div style={fieldWrap}>
// // //                   <label style={label}>Stock</label>
// // //                   <input type="number" name="stock" value={formData.stock || ""} onChange={handleInputChange} placeholder="Enter stock" style={input} />
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <div style={sectionTitle}>Final Photo Upload</div>

// // //             <div style={fieldWrap}>
// // //               <label style={label}>Upload Product Images</label>
// // //               <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageChange} style={fileInput} />
// // //               <div style={hintText}>
// // //                 Drag the uploaded images to arrange order. The first image will be the main image.
// // //               </div>
// // //             </div>

// // //             {previews.length > 0 && (
// // //               <div style={previewWrap}>
// // //                 <div style={previewGrid}>
// // //                   {previews.map((img, index) => (
// // //                     <div
// // //                       key={img.id}
// // //                       style={previewCard}
// // //                       draggable
// // //                       onDragStart={() => handleDragStart(index)}
// // //                       onDragEnter={() => handleDragEnter(index)}
// // //                       onDragOver={(e) => e.preventDefault()}
// // //                       onDrop={handleDrop}
// // //                       onDragEnd={handleDragEnd}
// // //                     >
// // //                       <img src={img.src} alt={`Preview ${index + 1}`} style={previewImage} />
// // //                       <div style={previewOrder}>Image {index + 1}{index === 0 ? " (Main image)" : ""}</div>
// // //                       <div style={actionRow}>
// // //                         <button type="button" style={removeButton} onClick={() => removeImage(index)}>Remove</button>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <button type="submit" style={submitButton}>
// // //               {formData.id ? "Update Product" : "Save Product"}
// // //             </button>
// // //           </form>
// // //         </div>

// // //       ) : filteredProducts.length > 0 ? (
// // //         /* ── Product Table ── */
// // //         <div style={tableWrap}>
// // //           <table style={table}>
// // //             <colgroup>
// // //               <col style={{ width: "25%" }} />
// // //               <col style={{ width: "30%" }} />
// // //               <col style={{ width: "10%" }} />
// // //               <col style={{ width: "10%" }} />
// // //               <col style={{ width: "8%"  }} />
// // //               <col style={{ width: "8%"  }} />
// // //               <col style={{ width: "9%"  }} />
// // //             </colgroup>

// // //             <thead>
// // //               <tr>
// // //                 <th style={thProduct}>Product</th>
// // //                 <th style={thDescription}>Description</th>
// // //                 <th style={thStock}>Stock</th>
// // //                 <th style={thPrice}>Price</th>
// // //                 <th style={thCategory}>Category</th>
// // //                 <th style={thPurity}>Purity</th>
// // //                 <th style={thActions}>Actions</th>
// // //               </tr>
// // //             </thead>

// // //             <tbody>
// // //               {filteredProducts.map((product) => {
// // //                 const mainImage = product.images?.[0] || "";
// // //                 const isInStock = Number(product.stock || 0) > 0;

// // //                 return (
// // //                   <tr key={product.id}>
// // //                     {/* Product column */}
// // //                     <td style={tdProduct}>
// // //                       <div style={productCell}>
// // //                         {mainImage ? (
// // //                           <img src={mainImage} alt={product.name} style={productThumb} />
// // //                         ) : (
// // //                           <div style={productThumbPlaceholder}>No Image</div>
// // //                         )}
// // //                         <div style={{ flex: 1, minWidth: 0 }}>
// // //                           <p style={productName}>{product.name}</p>
// // //                           <div style={productSubText}>
// // //                             {product.metalType || "-"}
// // //                             {product.weight ? ` • ${product.weight}g` : ""}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </td>

// // //                     {/* Description column */}
// // //                     <td style={tdDescription}>
// // //                       <div style={descriptionCell} title={product.description || ""}>
// // //                         {truncateDescription(product.description)}
// // //                       </div>
// // //                     </td>

// // //                     {/* Stock column */}
// // //                     <td style={tdStock}>
// // //                       <span style={isInStock ? stockPill : outOfStockPill}>
// // //                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// // //                       </span>
// // //                     </td>

// // //                     {/* Price column */}
// // //                     <td style={tdPrice}>
// // //                       <span style={priceMain}>
// // //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // //                       </span>
// // //                     </td>

// // //                     {/* Category column */}
// // //                     <td style={tdCategory}>
// // //                       {product.metalType || "-"}
// // //                     </td>

// // //                     {/* Purity column */}
// // //                     <td style={tdPurity}>
// // //                       {product.purity || "-"}
// // //                     </td>

// // //                     {/* Actions column */}
// // //                     <td style={tdActions}>
// // //                       <div style={actionsContainer}>
// // //                         <button type="button" style={editButton} title="Edit" onClick={() => handleEditClick(product)}>
// // //                           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// // //                             <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
// // //                             <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
// // //                           </svg>
// // //                         </button>
// // //                         <button type="button" style={deleteButton} title="Remove" onClick={() => confirmDeleteProduct(product.id)}>
// // //                           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// // //                             <polyline points="3 6 5 6 21 6"/>
// // //                             <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
// // //                             <path d="M10 11v6"/>
// // //                             <path d="M14 11v6"/>
// // //                             <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
// // //                           </svg>
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 );
// // //               })}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //       ) : (
// // //         /* ── Empty state ── */
// // //         <div style={noProductsBox}>
// // //           {productFilterType === "all" ? (
// // //             <>No products uploaded yet. Click <strong>Add Product</strong> to create your first product.</>
// // //           ) : (
// // //             <>No {productFilterType} products found.</>
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }




// // import React from "react";

// // export default function Products({
// //   storedMetals = [],
// //   metalPurities = {},
// //   productFilterType,
// //   setProductFilterType,
// //   showAddProductForm,
// //   setShowAddProductForm,
// //   formData,
// //   handleInputChange,
// //   handleSubmit,
// //   fileInputRef,
// //   handleImageChange,
// //   previews = [],
// //   handleDragStart,
// //   handleDragEnter,
// //   handleDrop,
// //   handleDragEnd,
// //   removeImage,
// //   filteredProducts = [],
// //   confirmDeleteProduct,
// //   setFormData,
// //   setIsEditMode,
// //   setPreviews,
// // }) {
// //   const heading = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     marginBottom: "24px",
// //     color: "#222",
// //   };

// //   const productsPageWrap = {
// //     width: "100%",
// //     maxWidth: "1300px",
// //   };

// //   const productsHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "12px",
// //     marginBottom: "24px",
// //     flexWrap: "wrap",
// //   };

// //   const productsTitle = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     color: "#222",
// //     margin: 0,
// //   };

// //   const productsSubTitle = {
// //     fontSize: "14px",
// //     color: "#666",
// //     marginTop: "6px",
// //   };

// //   const productsActionRow = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     flexWrap: "wrap",
// //   };

// //   const filterSelect = {
// //     height: "44px",
// //     minWidth: "180px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "0 12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     background: "#fff",
// //     color: "#333",
// //     boxSizing: "border-box",
// //   };

// //   const addButton = {
// //     background: "#6f3f8f",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     padding: "11px 18px",
// //     fontSize: "14px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     whiteSpace: "nowrap",
// //   };

// //   const addProductFormCard = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "16px",
// //     padding: "28px",
// //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// //     marginBottom: "24px",
// //   };

// //   const formHeaderRow = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     gap: "12px",
// //     marginBottom: "8px",
// //   };

// //   const closeButton = {
// //     width: "38px",
// //     height: "38px",
// //     borderRadius: "50%",
// //     border: "none",
// //     background: "#f3e9fb",
// //     color: "#5d3d75",
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     flexShrink: 0,
// //   };

// //   const grid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //     gap: "18px",
// //     marginBottom: "26px",
// //   };

// //   const detailGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //     gap: "18px",
// //     marginBottom: "26px",
// //   };

// //   const fieldWrap = {
// //     display: "flex",
// //     flexDirection: "column",
// //   };

// //   const label = {
// //     fontSize: "14px",
// //     fontWeight: "600",
// //     marginBottom: "8px",
// //     color: "#333",
// //   };

// //   const input = {
// //     height: "44px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "0 12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     boxSizing: "border-box",
// //     width: "100%",
// //     background: "#fff",
// //   };

// //   const textarea = {
// //     minHeight: "110px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     resize: "vertical",
// //     fontFamily: "Arial, Helvetica, sans-serif",
// //     boxSizing: "border-box",
// //     width: "100%",
// //   };

// //   const descriptionWrap = {
// //     display: "flex",
// //     flexDirection: "column",
// //     marginBottom: "26px",
// //   };

// //   const sectionTitle = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     margin: "24px 0 14px",
// //     color: "#2b2b2b",
// //   };

// //   const fileInput = {
// //     marginTop: "8px",
// //     marginBottom: "16px",
// //   };

// //   const hintText = {
// //     fontSize: "13px",
// //     color: "#666",
// //     marginTop: "-6px",
// //     marginBottom: "10px",
// //   };

// //   const previewWrap = {
// //     marginTop: "10px",
// //     marginBottom: "20px",
// //   };

// //   const previewGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// //     gap: "16px",
// //   };

// //   const previewCard = {
// //     border: "1px solid #ddd",
// //     borderRadius: "10px",
// //     padding: "10px",
// //     background: "#fff",
// //     cursor: "grab",
// //   };

// //   const previewImage = {
// //     width: "100%",
// //     height: "160px",
// //     objectFit: "cover",
// //     borderRadius: "8px",
// //     border: "1px solid #ddd",
// //     display: "block",
// //     marginBottom: "10px",
// //   };

// //   const previewOrder = {
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     marginBottom: "8px",
// //     color: "#444",
// //   };

// //   const actionRow = {
// //     display: "flex",
// //     gap: "8px",
// //     flexWrap: "wrap",
// //   };

// //   const removeButton = {
// //     border: "none",
// //     background: "#b33939",
// //     color: "#fff",
// //     borderRadius: "6px",
// //     padding: "8px 10px",
// //     cursor: "pointer",
// //     fontSize: "12px",
// //     fontWeight: "700",
// //   };

// //   const submitButton = {
// //     marginTop: "10px",
// //     background: "#6f3f8f",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     padding: "13px 24px",
// //     fontSize: "15px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //   };

// //   const tableWrap = {
// //     width: "100%",
// //     overflowX: "auto",
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "16px",
// //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// //   };

// //   const table = {
// //     width: "100%",
// //     borderCollapse: "collapse",
// //     tableLayout: "fixed",
// //   };

// //   // ─── Shared base styles ───────────────────────────────────────────────
// //   const thBase = {
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     color: "#666",
// //     background: "#faf7fd",
// //     padding: "14px 16px",
// //     borderBottom: "1px solid #eadff3",
// //     whiteSpace: "nowrap",
// //     verticalAlign: "middle",
// //   };

// //   const tdBase = {
// //     padding: "14px 16px",
// //     borderBottom: "1px solid #f0e8f6",
// //     verticalAlign: "middle",
// //     fontSize: "14px",
// //     color: "#333",
// //   };

// //   // ─── Per-column header styles ─────────────────────────────────────────
// //   const thProduct     = { ...thBase, textAlign: "left",   width: "20%" };
// //   const thDescription = { ...thBase, textAlign: "left",   width: "30%" };
// //   const thStock       = { ...thBase, textAlign: "center", width: "10%" };
// //   const thPrice       = { ...thBase, textAlign: "right",  width: "10%" };
// //   const thCategory    = { ...thBase, textAlign: "center", width: "8%"  };
// //   const thPurity      = { ...thBase, textAlign: "center", width: "8%"  };
// //   const thActions     = { ...thBase, textAlign: "center", width: "9%"  };

// //   // ─── Per-column cell styles ───────────────────────────────────────────
// //   const tdProduct     = { ...tdBase, textAlign: "left"   };
// //   const tdDescription = { ...tdBase, textAlign: "left"   };
// //   const tdStock       = { ...tdBase, textAlign: "center" };
// //   const tdPrice       = { ...tdBase, textAlign: "right"  };
// //   const tdCategory    = { ...tdBase, textAlign: "center" };
// //   const tdPurity      = { ...tdBase, textAlign: "center" };
// //   const tdActions     = { ...tdBase, textAlign: "center" };

// //   // ─── Product cell inner layout ────────────────────────────────────────
// //   const productCell = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "8px",
// //   };

// //   const productThumb = {
// //     width: "40px",
// //     height: "40px",
// //     borderRadius: "8px",
// //     objectFit: "cover",
// //     border: "1px solid #e5dced",
// //     background: "#f3e9fb",
// //     flexShrink: 0,
// //     display: "block",
// //   };

// //   const productThumbPlaceholder = {
// //     width: "40px",
// //     height: "40px",
// //     borderRadius: "8px",
// //     border: "1px solid #e5dced",
// //     background: "#f3e9fb",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     fontSize: "10px",
// //     color: "#8b6aa3",
// //     fontWeight: "700",
// //     flexShrink: 0,
// //     textAlign: "center",
// //   };

// //   const productName = {
// //     margin: 0,
// //     fontSize: "14px",
// //     fontWeight: "700",
// //     color: "#2b2b2b",
// //     lineHeight: "1.4",
// //     wordBreak: "break-word",
// //   };

// //   const productSubText = {
// //     fontSize: "12px",
// //     color: "#777",
// //     marginTop: "4px",
// //     wordBreak: "break-word",
// //   };

// //   const descriptionCell = {
// //     overflow: "hidden",
// //     textOverflow: "ellipsis",
// //     whiteSpace: "nowrap",
// //     color: "#555",
// //     fontSize: "13px",
// //   };

// //   const priceMain = {
// //     fontSize: "15px",
// //     fontWeight: "700",
// //     color: "#6f3f8f",
// //     whiteSpace: "nowrap",
// //   };

// //   const stockPillBase = {
// //     display: "inline-flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: "5px 10px",
// //     borderRadius: "999px",
// //     fontSize: "12px",
// //     fontWeight: "700",
// //     whiteSpace: "nowrap",
// //   };

// //   const stockPill = {
// //     ...stockPillBase,
// //     background: "#eaf8ee",
// //     color: "#1f8b4c",
// //   };

// //   const outOfStockPill = {
// //     ...stockPillBase,
// //     background: "#fff0f0",
// //     color: "#c0392b",
// //   };

// //   const editButton = {
// //     background: "#f3edfb",
// //     color: "#6f3f8f",
// //     border: "1px solid #ddd1ee",
// //     borderRadius: "8px",
// //     width: "34px",
// //     height: "34px",
// //     display: "inline-flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     cursor: "pointer",
// //     flexShrink: 0,
// //     padding: 0,
// //   };

// //   const deleteButton = {
// //     background: "#fff1f1",
// //     color: "#b33939",
// //     border: "1px solid #f0c7c7",
// //     borderRadius: "8px",
// //     width: "34px",
// //     height: "34px",
// //     display: "inline-flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     cursor: "pointer",
// //     flexShrink: 0,
// //     padding: 0,
// //   };

// //   const actionsContainer = {
// //     display: "flex",
// //     gap: "8px",
// //     flexWrap: "nowrap",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   };

// //   const noProductsBox = {
// //     background: "#fff",
// //     border: "1px dashed #d9c8e7",
// //     borderRadius: "16px",
// //     padding: "40px 24px",
// //     textAlign: "center",
// //     color: "#666",
// //     fontSize: "15px",
// //   };

// //   // ─── Handlers ─────────────────────────────────────────────────────────
// //   const handleEditClick = (product) => {
// //     const editedFormData = {
// //       id: product.id,
// //       productName: product.name || "",
// //       metalType: product.metalType || "",
// //       productDescription: product.description || "",
// //       purity: product.purity || "",
// //       weight: product.weight || "",
// //       pricePerGram: product.pricePerGram || "",
// //       makingCharges: product.makingCharges || "",
// //       offerPrice: product.offerPrice || "",
// //       totalPrice: product.totalPrice || "",
// //       stock: product.stock || "",
// //     };
// //     setFormData(editedFormData);
// //     setIsEditMode(true);
// //     if (product.images && product.images.length > 0) {
// //       const imagePreviews = product.images.map((src, index) => ({
// //         id: `existing-${index}-${Date.now()}`,
// //         src,
// //         name: `Image ${index + 1}`,
// //       }));
// //       setPreviews(imagePreviews);
// //     }
// //     setShowAddProductForm(true);
// //   };

// //   const handleCloseForm = () => {
// //     setShowAddProductForm(false);
// //     setIsEditMode(false);
// //     setFormData({
// //       productName: "",
// //       metalType: "",
// //       productDescription: "",
// //       purity: "",
// //       weight: "",
// //       pricePerGram: "",
// //       makingCharges: "",
// //       offerPrice: "",
// //       totalPrice: "",
// //       stock: "",
// //     });
// //     setPreviews([]);
// //     if (fileInputRef.current) fileInputRef.current.value = "";
// //   };

// //   const handleAddNewClick = () => {
// //     setFormData({
// //       productName: "",
// //       metalType: "",
// //       productDescription: "",
// //       purity: "",
// //       weight: "",
// //       pricePerGram: "",
// //       makingCharges: "",
// //       offerPrice: "",
// //       totalPrice: "",
// //       stock: "",
// //     });
// //     setIsEditMode(false);
// //     setPreviews([]);
// //     if (fileInputRef.current) fileInputRef.current.value = "";
// //     setShowAddProductForm((prev) => !prev);
// //   };

// //   const truncateDescription = (desc, maxLength = 150) => {
// //     if (!desc) return "-";
// //     if (desc.length <= maxLength) return desc;
// //     return desc.substring(0, maxLength) + "...";
// //   };

// //   return (
// //     <div style={productsPageWrap}>
// //       {/* ── Header ── */}
// //       <div style={productsHeader}>
// //         <div>
// //           <h1 style={productsTitle}>Products</h1>
// //           <div style={productsSubTitle}>Manage and view all uploaded products</div>
// //         </div>

// //         <div style={productsActionRow}>
// //           <select
// //             value={productFilterType}
// //             onChange={(e) => setProductFilterType(e.target.value)}
// //             style={filterSelect}
// //           >
// //             <option value="all">All Products</option>
// //             {storedMetals.map((metal) => (
// //               <option key={metal} value={metal}>{metal}</option>
// //             ))}
// //           </select>

// //           <button type="button" style={addButton} onClick={handleAddNewClick}>
// //             {showAddProductForm ? "Close Form" : "+ Add Product"}
// //           </button>
// //         </div>
// //       </div>

// //       {/* ── Add / Edit Form ── */}
// //       {showAddProductForm ? (
// //         <div style={addProductFormCard}>
// //           <div style={formHeaderRow}>
// //             <div style={heading}>{formData.id ? "Edit Product" : "Add Product"}</div>
// //             <button type="button" style={closeButton} onClick={handleCloseForm}>✕</button>
// //           </div>

// //           <form onSubmit={handleSubmit}>
// //             <div style={grid}>
// //               <div style={fieldWrap}>
// //                 <label style={label}>Product Name</label>
// //                 <input
// //                   type="text"
// //                   name="productName"
// //                   value={formData.productName || ""}
// //                   onChange={handleInputChange}
// //                   placeholder="Enter product name"
// //                   style={input}
// //                 />
// //               </div>

// //               <div style={fieldWrap}>
// //                 <label style={label}>Metal Type</label>
// //                 <select
// //                   name="metalType"
// //                   value={formData.metalType || ""}
// //                   onChange={handleInputChange}
// //                   style={input}
// //                 >
// //                   <option value="">Select metal type</option>
// //                   {storedMetals.map((metal) => (
// //                     <option key={metal} value={metal}>{metal}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>

// //             <div style={descriptionWrap}>
// //               <label style={label}>Product Description</label>
// //               <textarea
// //                 name="productDescription"
// //                 value={formData.productDescription || ""}
// //                 onChange={handleInputChange}
// //                 placeholder="Enter product description"
// //                 style={textarea}
// //               />
// //             </div>

// //             {formData.metalType && (
// //               <div style={detailGrid}>
// //                 <div style={fieldWrap}>
// //                   <label style={label}>Purity</label>
// //                   <select
// //                     name="purity"
// //                     value={formData.purity || ""}
// //                     onChange={handleInputChange}
// //                     style={input}
// //                   >
// //                     <option value="">Select purity</option>
// //                     {(metalPurities[formData.metalType] || []).map((purity) => (
// //                       <option key={purity} value={purity}>{purity}</option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Weight</label>
// //                   <input type="number" name="weight" value={formData.weight || ""} onChange={handleInputChange} placeholder="Enter weight" style={input} />
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Price Per Gram</label>
// //                   <input type="number" name="pricePerGram" value={formData.pricePerGram || ""} onChange={handleInputChange} placeholder="Enter price per gram" style={input} />
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Making Charges</label>
// //                   <input type="number" name="makingCharges" value={formData.makingCharges || ""} onChange={handleInputChange} placeholder="Enter making charges" style={input} />
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Offer Price</label>
// //                   <input type="number" name="offerPrice" value={formData.offerPrice || ""} onChange={handleInputChange} placeholder="Enter offer price" style={input} />
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Total Price</label>
// //                   <input
// //                     type="number"
// //                     name="totalPrice"
// //                     value={formData.totalPrice || ""}
// //                     readOnly
// //                     placeholder="Auto calculated"
// //                     style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }}
// //                   />
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Stock</label>
// //                   <input type="number" name="stock" value={formData.stock || ""} onChange={handleInputChange} placeholder="Enter stock" style={input} />
// //                 </div>
// //               </div>
// //             )}

// //             <div style={sectionTitle}>Final Photo Upload</div>

// //             <div style={fieldWrap}>
// //               <label style={label}>Upload Product Images</label>
// //               <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageChange} style={fileInput} />
// //               <div style={hintText}>
// //                 Drag the uploaded images to arrange order. The first image will be the main image.
// //               </div>
// //             </div>

// //             {previews.length > 0 && (
// //               <div style={previewWrap}>
// //                 <div style={previewGrid}>
// //                   {previews.map((img, index) => (
// //                     <div
// //                       key={img.id}
// //                       style={previewCard}
// //                       draggable
// //                       onDragStart={() => handleDragStart(index)}
// //                       onDragEnter={() => handleDragEnter(index)}
// //                       onDragOver={(e) => e.preventDefault()}
// //                       onDrop={handleDrop}
// //                       onDragEnd={handleDragEnd}
// //                     >
// //                       <img src={img.src} alt={`Preview ${index + 1}`} style={previewImage} />
// //                       <div style={previewOrder}>Image {index + 1}{index === 0 ? " (Main image)" : ""}</div>
// //                       <div style={actionRow}>
// //                         <button type="button" style={removeButton} onClick={() => removeImage(index)}>Remove</button>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             <button type="submit" style={submitButton}>
// //               {formData.id ? "Update Product" : "Save Product"}
// //             </button>
// //           </form>
// //         </div>

// //       ) : filteredProducts.length > 0 ? (
// //         /* ── Product Table ── */
// //         <div style={tableWrap}>
// //           <table style={table}>
// //             <colgroup>
// //               <col style={{ width: "20%" }} />
// //               <col style={{ width: "33%" }} />
// //               <col style={{ width: "11%" }} />
// //               <col style={{ width: "10%" }} />
// //               <col style={{ width: "9%"  }} />
// //               <col style={{ width: "8%"  }} />
// //               <col style={{ width: "9%"  }} />
// //             </colgroup>

// //             <thead>
// //               <tr>
// //                 <th style={thProduct}>Product</th>
// //                 <th style={thDescription}>Description</th>
// //                 <th style={thStock}>Stock</th>
// //                 <th style={thPrice}>Price</th>
// //                 <th style={thCategory}>Category</th>
// //                 <th style={thPurity}>Purity</th>
// //                 <th style={thActions}>Actions</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {filteredProducts.map((product) => {
// //                 const mainImage = product.images?.[0] || "";
// //                 const isInStock = Number(product.stock || 0) > 0;

// //                 return (
// //                   <tr key={product.id}>
// //                     {/* Product column */}
// //                     <td style={tdProduct}>
// //                       <div style={productCell}>
// //                         {mainImage ? (
// //                           <img src={mainImage} alt={product.name} style={productThumb} />
// //                         ) : (
// //                           <div style={productThumbPlaceholder}>No Image</div>
// //                         )}
// //                         <div style={{ flex: 1, minWidth: 0 }}>
// //                           <p style={productName}>{product.name}</p>
// //                           <div style={productSubText}>
// //                             {product.metalType || "-"}
// //                             {product.weight ? ` • ${product.weight}g` : ""}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </td>

// //                     {/* Description column */}
// //                     <td style={tdDescription}>
// //                       <div style={descriptionCell} title={product.description || ""}>
// //                         {truncateDescription(product.description)}
// //                       </div>
// //                     </td>

// //                     {/* Stock column */}
// //                     <td style={tdStock}>
// //                       <span style={isInStock ? stockPill : outOfStockPill}>
// //                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
// //                       </span>
// //                     </td>

// //                     {/* Price column */}
// //                     <td style={tdPrice}>
// //                       <span style={priceMain}>
// //                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// //                       </span>
// //                     </td>

// //                     {/* Category column */}
// //                     <td style={tdCategory}>
// //                       {product.metalType || "-"}
// //                     </td>

// //                     {/* Purity column */}
// //                     <td style={tdPurity}>
// //                       {product.purity || "-"}
// //                     </td>

// //                     {/* Actions column */}
// //                     <td style={tdActions}>
// //                       <div style={actionsContainer}>
// //                         <button type="button" style={editButton} title="Edit" onClick={() => handleEditClick(product)}>
// //                           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// //                             <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
// //                             <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
// //                           </svg>
// //                         </button>
// //                         <button type="button" style={deleteButton} title="Remove" onClick={() => confirmDeleteProduct(product.id)}>
// //                           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// //                             <polyline points="3 6 5 6 21 6"/>
// //                             <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
// //                             <path d="M10 11v6"/>
// //                             <path d="M14 11v6"/>
// //                             <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
// //                           </svg>
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 );
// //               })}
// //             </tbody>
// //           </table>
// //         </div>

// //       ) : (
// //         /* ── Empty state ── */
// //         <div style={noProductsBox}>
// //           {productFilterType === "all" ? (
// //             <>No products uploaded yet. Click <strong>Add Product</strong> to create your first product.</>
// //           ) : (
// //             <>No {productFilterType} products found.</>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// import React from "react";

// export default function Products({
//   storedMetals = [],
//   metalPurities = {},
//   productFilterType,
//   setProductFilterType,
//   showAddProductForm,
//   setShowAddProductForm,
//   formData,
//   handleInputChange,
//   handleSubmit,
//   fileInputRef,
//   handleImageChange,
//   previews = [],
//   handleDragStart,
//   handleDragEnter,
//   handleDrop,
//   handleDragEnd,
//   removeImage,
//   filteredProducts = [],
//   confirmDeleteProduct,
//   setFormData,
//   setIsEditMode,
//   setPreviews,
// }) {
//   const heading = {
//     fontSize: "28px",
//     fontWeight: "700",
//     marginBottom: "24px",
//     color: "#222",
//   };

//   const productsPageWrap = {
//     width: "100%",
//     maxWidth: "1300px",
//   };

//   const productsHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//     marginBottom: "24px",
//     flexWrap: "wrap",
//   };

//   const productsTitle = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//   };

//   const productsSubTitle = {
//     fontSize: "14px",
//     color: "#666",
//     marginTop: "6px",
//   };

//   const productsActionRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     flexWrap: "wrap",
//   };

//   const filterSelect = {
//     height: "44px",
//     minWidth: "180px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0 12px",
//     fontSize: "14px",
//     outline: "none",
//     background: "#fff",
//     color: "#333",
//     boxSizing: "border-box",
//   };

//   const addButton = {
//     background: "#6f3f8f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "11px 18px",
//     fontSize: "14px",
//     fontWeight: "700",
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   };

//   const addProductFormCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "16px",
//     padding: "28px",
//     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
//     marginBottom: "24px",
//   };

//   const formHeaderRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "8px",
//   };

//   const closeButton = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     border: "none",
//     background: "#f3e9fb",
//     color: "#5d3d75",
//     fontSize: "18px",
//     fontWeight: "700",
//     cursor: "pointer",
//     flexShrink: 0,
//   };

//   const grid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//     gap: "18px",
//     marginBottom: "26px",
//   };

//   const detailGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//     gap: "18px",
//     marginBottom: "26px",
//   };

//   const fieldWrap = {
//     display: "flex",
//     flexDirection: "column",
//   };

//   const label = {
//     fontSize: "14px",
//     fontWeight: "600",
//     marginBottom: "8px",
//     color: "#333",
//   };

//   const input = {
//     height: "44px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0 12px",
//     fontSize: "14px",
//     outline: "none",
//     boxSizing: "border-box",
//     width: "100%",
//     background: "#fff",
//   };

//   const textarea = {
//     minHeight: "110px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "12px",
//     fontSize: "14px",
//     outline: "none",
//     resize: "vertical",
//     fontFamily: "Arial, Helvetica, sans-serif",
//     boxSizing: "border-box",
//     width: "100%",
//   };

//   const descriptionWrap = {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: "26px",
//   };

//   const sectionTitle = {
//     fontSize: "18px",
//     fontWeight: "700",
//     margin: "24px 0 14px",
//     color: "#2b2b2b",
//   };

//   const fileInput = {
//     marginTop: "8px",
//     marginBottom: "16px",
//   };

//   const hintText = {
//     fontSize: "13px",
//     color: "#666",
//     marginTop: "-6px",
//     marginBottom: "10px",
//   };

//   const previewWrap = {
//     marginTop: "10px",
//     marginBottom: "20px",
//   };

//   const previewGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
//     gap: "16px",
//   };

//   const previewCard = {
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     padding: "10px",
//     background: "#fff",
//     cursor: "grab",
//   };

//   const previewImage = {
//     width: "100%",
//     height: "160px",
//     objectFit: "cover",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     display: "block",
//     marginBottom: "10px",
//   };

//   const previewOrder = {
//     fontSize: "13px",
//     fontWeight: "700",
//     marginBottom: "8px",
//     color: "#444",
//   };

//   const actionRow = {
//     display: "flex",
//     gap: "8px",
//     flexWrap: "wrap",
//   };

//   const removeButton = {
//     border: "none",
//     background: "#b33939",
//     color: "#fff",
//     borderRadius: "6px",
//     padding: "8px 10px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontWeight: "700",
//   };

//   const submitButton = {
//     marginTop: "10px",
//     background: "#6f3f8f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "13px 24px",
//     fontSize: "15px",
//     fontWeight: "700",
//     cursor: "pointer",
//   };

//   const tableWrap = {
//     width: "100%",
//     overflowX: "auto",
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "16px",
//     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
//   };

//   const table = {
//     width: "100%",
//     borderCollapse: "collapse",
//     tableLayout: "fixed",
//   };

//   // ─── Shared base styles ───────────────────────────────────────────────
//   const thBase = {
//     fontSize: "13px",
//     fontWeight: "700",
//     color: "#666",
//     background: "#faf7fd",
//     padding: "14px 16px",
//     borderBottom: "1px solid #eadff3",
//     whiteSpace: "nowrap",
//     verticalAlign: "middle",
//   };

//   const tdBase = {
//     padding: "14px 16px",
//     borderBottom: "1px solid #f0e8f6",
//     verticalAlign: "middle",
//     fontSize: "14px",
//     color: "#333",
//   };

//   // ─── Per-column header styles ─────────────────────────────────────────
//   const thProduct     = { ...thBase, textAlign: "left",   width: "20%" };
//   const thDescription = { ...thBase, textAlign: "left",   width: "30%" };
//   const thStock       = { ...thBase, textAlign: "center", width: "10%" };
//   const thPrice       = { ...thBase, textAlign: "center", width: "10%" };
//   const thCategory    = { ...thBase, textAlign: "center", width: "8%"  };
//   const thPurity      = { ...thBase, textAlign: "center", width: "8%"  };
//   const thActions     = { ...thBase, textAlign: "center", width: "9%"  };

//   // ─── Per-column cell styles ───────────────────────────────────────────
//   const tdProduct     = { ...tdBase, textAlign: "left"   };
//   const tdDescription = { ...tdBase, textAlign: "left"   };
//   const tdStock       = { ...tdBase, textAlign: "center" };
//   const tdPrice       = { ...tdBase, textAlign: "center" };
//   const tdCategory    = { ...tdBase, textAlign: "center" };
//   const tdPurity      = { ...tdBase, textAlign: "center" };
//   const tdActions     = { ...tdBase, textAlign: "center" };

//   // ─── Product cell inner layout ────────────────────────────────────────
//   const productCell = {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   };

//   const productThumb = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "8px",
//     objectFit: "cover",
//     border: "1px solid #e5dced",
//     background: "#f3e9fb",
//     flexShrink: 0,
//     display: "block",
//   };

//   const productThumbPlaceholder = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "8px",
//     border: "1px solid #e5dced",
//     background: "#f3e9fb",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "10px",
//     color: "#8b6aa3",
//     fontWeight: "700",
//     flexShrink: 0,
//     textAlign: "center",
//   };

//   const productName = {
//     margin: 0,
//     fontSize: "14px",
//     fontWeight: "700",
//     color: "#2b2b2b",
//     lineHeight: "1.4",
//     wordBreak: "break-word",
//   };

//   const productSubText = {
//     fontSize: "12px",
//     color: "#777",
//     marginTop: "4px",
//     wordBreak: "break-word",
//   };

//   const descriptionCell = {
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//     color: "#555",
//     fontSize: "13px",
//   };

//   const priceMain = {
//     fontSize: "15px",
//     fontWeight: "700",
//     color: "#6f3f8f",
//     whiteSpace: "nowrap",
//   };

//   const stockPillBase = {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "5px 10px",
//     borderRadius: "999px",
//     fontSize: "12px",
//     fontWeight: "700",
//     whiteSpace: "nowrap",
//   };

//   const stockPill = {
//     ...stockPillBase,
//     background: "#eaf8ee",
//     color: "#1f8b4c",
//   };

//   const outOfStockPill = {
//     ...stockPillBase,
//     background: "#fff0f0",
//     color: "#c0392b",
//   };

//   const editButton = {
//     background: "#f3edfb",
//     color: "#6f3f8f",
//     border: "1px solid #ddd1ee",
//     borderRadius: "8px",
//     width: "34px",
//     height: "34px",
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     flexShrink: 0,
//     padding: 0,
//   };

//   const deleteButton = {
//     background: "#fff1f1",
//     color: "#b33939",
//     border: "1px solid #f0c7c7",
//     borderRadius: "8px",
//     width: "34px",
//     height: "34px",
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     flexShrink: 0,
//     padding: 0,
//   };

//   const actionsContainer = {
//     display: "flex",
//     gap: "8px",
//     flexWrap: "nowrap",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const noProductsBox = {
//     background: "#fff",
//     border: "1px dashed #d9c8e7",
//     borderRadius: "16px",
//     padding: "40px 24px",
//     textAlign: "center",
//     color: "#666",
//     fontSize: "15px",
//   };

//   // ─── Handlers ─────────────────────────────────────────────────────────
//   const handleEditClick = (product) => {
//     const editedFormData = {
//       id: product.id,
//       productName: product.name || "",
//       metalType: product.metalType || "",
//       productDescription: product.description || "",
//       purity: product.purity || "",
//       weight: product.weight || "",
//       pricePerGram: product.pricePerGram || "",
//       makingCharges: product.makingCharges || "",
//       offerPrice: product.offerPrice || "",
//       totalPrice: product.totalPrice || "",
//       stock: product.stock || "",
//     };
//     setFormData(editedFormData);
//     setIsEditMode(true);
//     if (product.images && product.images.length > 0) {
//       const imagePreviews = product.images.map((src, index) => ({
//         id: `existing-${index}-${Date.now()}`,
//         src,
//         name: `Image ${index + 1}`,
//       }));
//       setPreviews(imagePreviews);
//     }
//     setShowAddProductForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowAddProductForm(false);
//     setIsEditMode(false);
//     setFormData({
//       productName: "",
//       metalType: "",
//       productDescription: "",
//       purity: "",
//       weight: "",
//       pricePerGram: "",
//       makingCharges: "",
//       offerPrice: "",
//       totalPrice: "",
//       stock: "",
//     });
//     setPreviews([]);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleAddNewClick = () => {
//     setFormData({
//       productName: "",
//       metalType: "",
//       productDescription: "",
//       purity: "",
//       weight: "",
//       pricePerGram: "",
//       makingCharges: "",
//       offerPrice: "",
//       totalPrice: "",
//       stock: "",
//     });
//     setIsEditMode(false);
//     setPreviews([]);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//     setShowAddProductForm((prev) => !prev);
//   };

//   const truncateDescription = (desc, maxLength = 150) => {
//     if (!desc) return "-";
//     if (desc.length <= maxLength) return desc;
//     return desc.substring(0, maxLength) + "...";
//   };

//   return (
//     <div style={productsPageWrap}>
//       {/* ── Header ── */}
//       <div style={productsHeader}>
//         <div>
//           <h1 style={productsTitle}>Products</h1>
//           <div style={productsSubTitle}>Manage and view all uploaded products</div>
//         </div>

//         <div style={productsActionRow}>
//           <select
//             value={productFilterType}
//             onChange={(e) => setProductFilterType(e.target.value)}
//             style={filterSelect}
//           >
//             <option value="all">All Products</option>
//             {storedMetals.map((metal) => (
//               <option key={metal} value={metal}>{metal}</option>
//             ))}
//           </select>

//           <button type="button" style={addButton} onClick={handleAddNewClick}>
//             {showAddProductForm ? "Close Form" : "+ Add Product"}
//           </button>
//         </div>
//       </div>

//       {/* ── Add / Edit Form ── */}
//       {showAddProductForm ? (
//         <div style={addProductFormCard}>
//           <div style={formHeaderRow}>
//             <div style={heading}>{formData.id ? "Edit Product" : "Add Product"}</div>
//             <button type="button" style={closeButton} onClick={handleCloseForm}>✕</button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div style={grid}>
//               <div style={fieldWrap}>
//                 <label style={label}>Product Name</label>
//                 <input
//                   type="text"
//                   name="productName"
//                   value={formData.productName || ""}
//                   onChange={handleInputChange}
//                   placeholder="Enter product name"
//                   style={input}
//                 />
//               </div>

//               <div style={fieldWrap}>
//                 <label style={label}>Metal Type</label>
//                 <select
//                   name="metalType"
//                   value={formData.metalType || ""}
//                   onChange={handleInputChange}
//                   style={input}
//                 >
//                   <option value="">Select metal type</option>
//                   {storedMetals.map((metal) => (
//                     <option key={metal} value={metal}>{metal}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div style={descriptionWrap}>
//               <label style={label}>Product Description</label>
//               <textarea
//                 name="productDescription"
//                 value={formData.productDescription || ""}
//                 onChange={handleInputChange}
//                 placeholder="Enter product description"
//                 style={textarea}
//               />
//             </div>

//             {formData.metalType && (
//               <div style={detailGrid}>
//                 <div style={fieldWrap}>
//                   <label style={label}>Purity</label>
//                   <select
//                     name="purity"
//                     value={formData.purity || ""}
//                     onChange={handleInputChange}
//                     style={input}
//                   >
//                     <option value="">Select purity</option>
//                     {(metalPurities[formData.metalType] || []).map((purity) => (
//                       <option key={purity} value={purity}>{purity}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Weight</label>
//                   <input type="number" name="weight" value={formData.weight || ""} onChange={handleInputChange} placeholder="Enter weight" style={input} />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Price Per Gram</label>
//                   <input type="number" name="pricePerGram" value={formData.pricePerGram || ""} onChange={handleInputChange} placeholder="Enter price per gram" style={input} />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Making Charges</label>
//                   <input type="number" name="makingCharges" value={formData.makingCharges || ""} onChange={handleInputChange} placeholder="Enter making charges" style={input} />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Offer Price</label>
//                   <input type="number" name="offerPrice" value={formData.offerPrice || ""} onChange={handleInputChange} placeholder="Enter offer price" style={input} />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Total Price</label>
//                   <input
//                     type="number"
//                     name="totalPrice"
//                     value={formData.totalPrice || ""}
//                     readOnly
//                     placeholder="Auto calculated"
//                     style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Stock</label>
//                   <input type="number" name="stock" value={formData.stock || ""} onChange={handleInputChange} placeholder="Enter stock" style={input} />
//                 </div>
//               </div>
//             )}

//             <div style={sectionTitle}>Final Photo Upload</div>

//             <div style={fieldWrap}>
//               <label style={label}>Upload Product Images</label>
//               <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageChange} style={fileInput} />
//               <div style={hintText}>
//                 Drag the uploaded images to arrange order. The first image will be the main image.
//               </div>
//             </div>

//             {previews.length > 0 && (
//               <div style={previewWrap}>
//                 <div style={previewGrid}>
//                   {previews.map((img, index) => (
//                     <div
//                       key={img.id}
//                       style={previewCard}
//                       draggable
//                       onDragStart={() => handleDragStart(index)}
//                       onDragEnter={() => handleDragEnter(index)}
//                       onDragOver={(e) => e.preventDefault()}
//                       onDrop={handleDrop}
//                       onDragEnd={handleDragEnd}
//                     >
//                       <img src={img.src} alt={`Preview ${index + 1}`} style={previewImage} />
//                       <div style={previewOrder}>Image {index + 1}{index === 0 ? " (Main image)" : ""}</div>
//                       <div style={actionRow}>
//                         <button type="button" style={removeButton} onClick={() => removeImage(index)}>Remove</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <button type="submit" style={submitButton}>
//               {formData.id ? "Update Product" : "Save Product"}
//             </button>
//           </form>
//         </div>

//       ) : filteredProducts.length > 0 ? (
//         /* ── Product Table ── */
//         <div style={tableWrap}>
//           <table style={table}>
//             <colgroup>
//               <col style={{ width: "20%" }} />
//               <col style={{ width: "33%" }} />
//               <col style={{ width: "11%" }} />
//               <col style={{ width: "10%" }} />
//               <col style={{ width: "9%"  }} />
//               <col style={{ width: "8%"  }} />
//               <col style={{ width: "9%"  }} />
//             </colgroup>

//             <thead>
//               <tr>
//                 <th style={thProduct}>Product</th>
//                 <th style={thDescription}>Description</th>
//                 <th style={thStock}>Stock</th>
//                 <th style={thPrice}>Price</th>
//                 <th style={thCategory}>Category</th>
//                 <th style={thPurity}>Purity</th>
//                 <th style={thActions}>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredProducts.map((product) => {
//                 const mainImage = product.images?.[0] || "";
//                 const isInStock = Number(product.stock || 0) > 0;

//                 return (
//                   <tr key={product.id}>
//                     {/* Product column */}
//                     <td style={tdProduct}>
//                       <div style={productCell}>
//                         {mainImage ? (
//                           <img src={mainImage} alt={product.name} style={productThumb} />
//                         ) : (
//                           <div style={productThumbPlaceholder}>No Image</div>
//                         )}
//                         <div style={{ flex: 1, minWidth: 0 }}>
//                           <p style={productName}>{product.name}</p>
//                           <div style={productSubText}>
//                             {product.metalType || "-"}
//                             {product.weight ? ` • ${product.weight}g` : ""}
//                           </div>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Description column */}
//                     <td style={tdDescription}>
//                       <div style={descriptionCell} title={product.description || ""}>
//                         {truncateDescription(product.description)}
//                       </div>
//                     </td>

//                     {/* Stock column */}
//                     <td style={tdStock}>
//                       <span style={isInStock ? stockPill : outOfStockPill}>
//                         {isInStock ? `In stock (${product.stock})` : "Out of stock"}
//                       </span>
//                     </td>

//                     {/* Price column */}
//                     <td style={tdPrice}>
//                       <span style={priceMain}>
//                         ₹{Number(product.totalPrice || 0).toLocaleString()}
//                       </span>
//                     </td>

//                     {/* Category column */}
//                     <td style={tdCategory}>
//                       {product.metalType || "-"}
//                     </td>

//                     {/* Purity column */}
//                     <td style={tdPurity}>
//                       {product.purity || "-"}
//                     </td>

//                     {/* Actions column */}
//                     <td style={tdActions}>
//                       <div style={actionsContainer}>
//                         <button type="button" style={editButton} title="Edit" onClick={() => handleEditClick(product)}>
//                           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
//                             <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
//                           </svg>
//                         </button>
//                         <button type="button" style={deleteButton} title="Remove" onClick={() => confirmDeleteProduct(product.id)}>
//                           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                             <polyline points="3 6 5 6 21 6"/>
//                             <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
//                             <path d="M10 11v6"/>
//                             <path d="M14 11v6"/>
//                             <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
//                           </svg>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//       ) : (
//         /* ── Empty state ── */
//         <div style={noProductsBox}>
//           {productFilterType === "all" ? (
//             <>No products uploaded yet. Click <strong>Add Product</strong> to create your first product.</>
//           ) : (
//             <>No {productFilterType} products found.</>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }




import React from "react";

export default function Products({
  storedMetals = [],
  metalPurities = {},
  categories = [],
  productFilterType,
  setProductFilterType,
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
  const heading = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#222",
  };

  const productsPageWrap = {
    width: "100%",
    maxWidth: "1300px",
  };

  const productsHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  };

  const productsTitle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const productsSubTitle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "6px",
  };

  const productsActionRow = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  };

  const filterSelect = {
    height: "44px",
    minWidth: "180px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0 12px",
    fontSize: "14px",
    outline: "none",
    background: "#fff",
    color: "#333",
    boxSizing: "border-box",
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

  const addProductFormCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
    marginBottom: "24px",
  };

  const formHeaderRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  };

  const closeButton = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    background: "#f3e9fb",
    color: "#5d3d75",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    flexShrink: 0,
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "26px",
  };

  const detailGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "26px",
  };

  const fieldWrap = {
    display: "flex",
    flexDirection: "column",
  };

  const label = {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  };

  const input = {
    height: "44px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0 12px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
    background: "#fff",
  };

  const textarea = {
    minHeight: "110px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "14px",
    outline: "none",
    resize: "vertical",
    fontFamily: "Arial, Helvetica, sans-serif",
    boxSizing: "border-box",
    width: "100%",
  };

  const descriptionWrap = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "26px",
  };

  const sectionTitle = {
    fontSize: "18px",
    fontWeight: "700",
    margin: "24px 0 14px",
    color: "#2b2b2b",
  };

  const fileInput = {
    marginTop: "8px",
    marginBottom: "16px",
  };

  const hintText = {
    fontSize: "13px",
    color: "#666",
    marginTop: "-6px",
    marginBottom: "10px",
  };

  const previewWrap = {
    marginTop: "10px",
    marginBottom: "20px",
  };

  const previewGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
    gap: "16px",
  };

  const previewCard = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    background: "#fff",
    cursor: "grab",
  };

  const previewImage = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid #ddd",
    display: "block",
    marginBottom: "10px",
  };

  const previewOrder = {
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#444",
  };

  const actionRow = {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  };

  const removeButton = {
    border: "none",
    background: "#b33939",
    color: "#fff",
    borderRadius: "6px",
    padding: "8px 10px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
  };

  const submitButton = {
    marginTop: "10px",
    background: "#6f3f8f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "13px 24px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
  };

  const tableWrap = {
    width: "100%",
    overflowX: "auto",
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "16px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  };

  // ─── Shared base styles ───────────────────────────────────────────────
  const thBase = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#666",
    background: "#faf7fd",
    padding: "14px 16px",
    borderBottom: "1px solid #eadff3",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
  };

  const tdBase = {
    padding: "14px 16px",
    borderBottom: "1px solid #f0e8f6",
    verticalAlign: "middle",
    fontSize: "14px",
    color: "#333",
  };

  // ─── Per-column header styles ─────────────────────────────────────────
  const thProduct     = { ...thBase, textAlign: "left",   width: "20%" };
  const thDescription = { ...thBase, textAlign: "left",   width: "30%" };
  const thStock       = { ...thBase, textAlign: "center", width: "10%" };
  const thPrice       = { ...thBase, textAlign: "center", width: "10%" };
  const thCategory    = { ...thBase, textAlign: "center", width: "8%"  };
  const thPurity      = { ...thBase, textAlign: "center", width: "8%"  };
  const thActions     = { ...thBase, textAlign: "center", width: "9%"  };

  // ─── Per-column cell styles ───────────────────────────────────────────
  const tdProduct     = { ...tdBase, textAlign: "left"   };
  const tdDescription = { ...tdBase, textAlign: "left"   };
  const tdStock       = { ...tdBase, textAlign: "center" };
  const tdPrice       = { ...tdBase, textAlign: "center" };
  const tdCategory    = { ...tdBase, textAlign: "center" };
  const tdPurity      = { ...tdBase, textAlign: "center" };
  const tdActions     = { ...tdBase, textAlign: "center" };

  // ─── Product cell inner layout ────────────────────────────────────────
  const productCell = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const productThumb = {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    objectFit: "cover",
    border: "1px solid #e5dced",
    background: "#f3e9fb",
    flexShrink: 0,
    display: "block",
  };

  const productThumbPlaceholder = {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #e5dced",
    background: "#f3e9fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#8b6aa3",
    fontWeight: "700",
    flexShrink: 0,
    textAlign: "center",
  };

  const productName = {
    margin: 0,
    fontSize: "14px",
    fontWeight: "700",
    color: "#2b2b2b",
    lineHeight: "1.4",
    wordBreak: "break-word",
  };

  const productSubText = {
    fontSize: "12px",
    color: "#777",
    marginTop: "4px",
    wordBreak: "break-word",
  };

  const descriptionCell = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#555",
    fontSize: "13px",
  };

  const priceMain = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#6f3f8f",
    whiteSpace: "nowrap",
  };

  const stockPillBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  };

  const stockPill = {
    ...stockPillBase,
    background: "#eaf8ee",
    color: "#1f8b4c",
  };

  const outOfStockPill = {
    ...stockPillBase,
    background: "#fff0f0",
    color: "#c0392b",
  };

  const editButton = {
    background: "#f3edfb",
    color: "#6f3f8f",
    border: "1px solid #ddd1ee",
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

  const deleteButton = {
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

  const actionsContainer = {
    display: "flex",
    gap: "8px",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const noProductsBox = {
    background: "#fff",
    border: "1px dashed #d9c8e7",
    borderRadius: "16px",
    padding: "40px 24px",
    textAlign: "center",
    color: "#666",
    fontSize: "15px",
  };

  // ─── Handlers ─────────────────────────────────────────────────────────
  const handleEditClick = (product) => {
    const editedFormData = {
      id: product.id,
      productName: product.name || "",
      metalType: product.metalType || "",
      productDescription: product.description || "",
      purity: product.purity || "",
      weight: product.weight || "",
      pricePerGram: product.pricePerGram || "",
      makingCharges: product.makingCharges || "",
      offerPrice: product.offerPrice || "",
      totalPrice: product.totalPrice || "",
      stock: product.stock || "",
    };
    setFormData(editedFormData);
    setIsEditMode(true);
    if (product.images && product.images.length > 0) {
      const imagePreviews = product.images.map((src, index) => ({
        id: `existing-${index}-${Date.now()}`,
        src,
        name: `Image ${index + 1}`,
      }));
      setPreviews(imagePreviews);
    }
    setShowAddProductForm(true);
  };

  const handleCloseForm = () => {
    setShowAddProductForm(false);
    setIsEditMode(false);
    setFormData({
      productName: "",
      metalType: "",
      category: "",
      productDescription: "",
      purity: "",
      weight: "",
      pricePerGram: "",
      makingCharges: "",
      offerPrice: "",
      totalPrice: "",
      stock: "",
    });
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAddNewClick = () => {
    setFormData({
      productName: "",
      metalType: "",
      category: "",
      productDescription: "",
      purity: "",
      weight: "",
      pricePerGram: "",
      makingCharges: "",
      offerPrice: "",
      totalPrice: "",
      stock: "",
    });
    setIsEditMode(false);
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setShowAddProductForm((prev) => !prev);
  };

  const truncateDescription = (desc, maxLength = 150) => {
    if (!desc) return "-";
    if (desc.length <= maxLength) return desc;
    return desc.substring(0, maxLength) + "...";
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
          <select
            value={productFilterType}
            onChange={(e) => setProductFilterType(e.target.value)}
            style={filterSelect}
          >
            <option value="all">All Products</option>
            {storedMetals.map((metal) => (
              <option key={metal} value={metal}>{metal}</option>
            ))}
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
                <input
                  type="text"
                  name="productName"
                  value={formData.productName || ""}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  style={input}
                />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Metal Type</label>
                <select
                  name="metalType"
                  value={formData.metalType || ""}
                  onChange={handleInputChange}
                  style={input}
                >
                  <option value="">Select metal type</option>
                  {storedMetals.map((metal) => (
                    <option key={metal} value={metal}>{metal}</option>
                  ))}
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>Category</label>
                <select
                  name="category"
                  value={formData.category || ""}
                  onChange={handleInputChange}
                  style={input}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={descriptionWrap}>
              <label style={label}>Product Description</label>
              <textarea
                name="productDescription"
                value={formData.productDescription || ""}
                onChange={handleInputChange}
                placeholder="Enter product description"
                style={textarea}
              />
            </div>

            {formData.metalType && (
              <div style={detailGrid}>
                <div style={fieldWrap}>
                  <label style={label}>Purity</label>
                  <select
                    name="purity"
                    value={formData.purity || ""}
                    onChange={handleInputChange}
                    style={input}
                  >
                    <option value="">Select purity</option>
                    {(metalPurities[formData.metalType] || []).map((purity) => (
                      <option key={purity} value={purity}>{purity}</option>
                    ))}
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Weight</label>
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
                  <input
                    type="number"
                    name="totalPrice"
                    value={formData.totalPrice || ""}
                    readOnly
                    placeholder="Auto calculated"
                    style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Stock</label>
                  <input type="number" name="stock" value={formData.stock || ""} onChange={handleInputChange} placeholder="Enter stock" style={input} />
                </div>
              </div>
            )}

            <div style={sectionTitle}>Final Photo Upload</div>

            <div style={fieldWrap}>
              <label style={label}>Upload Product Images</label>
              <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageChange} style={fileInput} />
              <div style={hintText}>
                Drag the uploaded images to arrange order. The first image will be the main image.
              </div>
            </div>

            {previews.length > 0 && (
              <div style={previewWrap}>
                <div style={previewGrid}>
                  {previews.map((img, index) => (
                    <div
                      key={img.id}
                      style={previewCard}
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragEnter={() => handleDragEnter(index)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onDragEnd={handleDragEnd}
                    >
                      <img src={img.src} alt={`Preview ${index + 1}`} style={previewImage} />
                      <div style={previewOrder}>Image {index + 1}{index === 0 ? " (Main image)" : ""}</div>
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
              <col style={{ width: "20%" }} />
              <col style={{ width: "33%" }} />
              <col style={{ width: "11%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "9%"  }} />
              <col style={{ width: "8%"  }} />
              <col style={{ width: "9%"  }} />
            </colgroup>

            <thead>
              <tr>
                <th style={thProduct}>Product</th>
                <th style={thDescription}>Description</th>
                <th style={thStock}>Stock</th>
                <th style={thPrice}>Price</th>
                <th style={thCategory}>Category</th>
                <th style={thPurity}>Purity</th>
                <th style={thActions}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => {
                const mainImage = product.images?.[0] || "";
                const isInStock = Number(product.stock || 0) > 0;

                return (
                  <tr key={product.id}>
                    {/* Product column */}
                    <td style={tdProduct}>
                      <div style={productCell}>
                        {mainImage ? (
                          <img src={mainImage} alt={product.name} style={productThumb} />
                        ) : (
                          <div style={productThumbPlaceholder}>No Image</div>
                        )}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={productName}>{product.name}</p>
                          <div style={productSubText}>
                            {product.metalType || "-"}
                            {product.weight ? ` • ${product.weight}g` : ""}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Description column */}
                    <td style={tdDescription}>
                      <div style={descriptionCell} title={product.description || ""}>
                        {truncateDescription(product.description)}
                      </div>
                    </td>

                    {/* Stock column */}
                    <td style={tdStock}>
                      <span style={isInStock ? stockPill : outOfStockPill}>
                        {isInStock ? `In stock (${product.stock})` : "Out of stock"}
                      </span>
                    </td>

                    {/* Price column */}
                    <td style={tdPrice}>
                      <span style={priceMain}>
                        ₹{Number(product.totalPrice || 0).toLocaleString()}
                      </span>
                    </td>

                    {/* Category column */}
                    <td style={tdCategory}>
                      {product.metalType || "-"}
                    </td>

                    {/* Purity column */}
                    <td style={tdPurity}>
                      {product.purity || "-"}
                    </td>

                    {/* Actions column */}
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
                            <path d="M10 11v6"/>
                            <path d="M14 11v6"/>
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
        /* ── Empty state ── */
        <div style={noProductsBox}>
          {productFilterType === "all" ? (
            <>No products uploaded yet. Click <strong>Add Product</strong> to create your first product.</>
          ) : (
            <>No {productFilterType} products found.</>
          )}
        </div>
      )}
    </div>
  );
}
