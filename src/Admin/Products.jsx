// // // // import React from "react";

// // // // export default function Products({
// // // //     storedMetals,
// // // //     productFilterType,
// // // //     setProductFilterType,
// // // //     showAddProductForm,
// // // //     setShowAddProductForm,
// // // //     formData,
// // // //     handleInputChange,
// // // //     handleSubmit,
// // // //     fileInputRef,
// // // //     handleImageChange,
// // // //     previews,
// // // //     handleDragStart,
// // // //     handleDragEnter,
// // // //     handleDrop,
// // // //     handleDragEnd,
// // // //     removeImage,
// // // //     filteredProducts,
// // // //     confirmDeleteProduct,
// // // //     editingStockId,
// // // //     editingStockValue,
// // // //     setEditingStockValue,
// // // //     saveStockEdit,
// // // //     setEditingStockId,
// // // //     startStockEdit,
// // // // }) {
// // // //     const heading = {
// // // //         fontSize: "28px",
// // // //         fontWeight: "700",
// // // //         marginBottom: "24px",
// // // //         color: "#222",
// // // //     };

// // // //     const productsPageWrap = {
// // // //         width: "100%",
// // // //         maxWidth: "1300px",
// // // //     };

// // // //     const productsHeader = {
// // // //         display: "flex",
// // // //         justifyContent: "space-between",
// // // //         alignItems: "flex-start",
// // // //         gap: "12px",
// // // //         marginBottom: "24px",
// // // //         flexWrap: "wrap",
// // // //     };

// // // //     const productsTitle = {
// // // //         fontSize: "28px",
// // // //         fontWeight: "700",
// // // //         color: "#222",
// // // //         margin: 0,
// // // //     };

// // // //     const productsSubTitle = {
// // // //         fontSize: "14px",
// // // //         color: "#666",
// // // //         marginTop: "6px",
// // // //     };

// // // //     const productsActionRow = {
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //         gap: "12px",
// // // //         flexWrap: "wrap",
// // // //     };

// // // //     const filterSelect = {
// // // //         height: "44px",
// // // //         minWidth: "180px",
// // // //         border: "1px solid #ddd",
// // // //         borderRadius: "8px",
// // // //         padding: "0 12px",
// // // //         fontSize: "14px",
// // // //         outline: "none",
// // // //         background: "#fff",
// // // //         color: "#333",
// // // //         boxSizing: "border-box",
// // // //     };

// // // //     const addButton = {
// // // //         background: "#6f3f8f",
// // // //         color: "#fff",
// // // //         border: "none",
// // // //         borderRadius: "8px",
// // // //         padding: "11px 18px",
// // // //         fontSize: "14px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //         whiteSpace: "nowrap",
// // // //     };

// // // //     const addProductFormCard = {
// // // //         background: "#fff",
// // // //         border: "1px solid #e7dff0",
// // // //         borderRadius: "16px",
// // // //         padding: "28px",
// // // //         boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // // //         marginBottom: "24px",
// // // //     };

// // // //     const formHeaderRow = {
// // // //         display: "flex",
// // // //         justifyContent: "space-between",
// // // //         alignItems: "center",
// // // //         gap: "12px",
// // // //         marginBottom: "8px",
// // // //     };

// // // //     const closeButton = {
// // // //         width: "38px",
// // // //         height: "38px",
// // // //         borderRadius: "50%",
// // // //         border: "none",
// // // //         background: "#f3e9fb",
// // // //         color: "#5d3d75",
// // // //         fontSize: "18px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //         flexShrink: 0,
// // // //     };

// // // //     const grid = {
// // // //         display: "grid",
// // // //         gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // //         gap: "18px",
// // // //         marginBottom: "26px",
// // // //     };

// // // //     const detailGrid = {
// // // //         display: "grid",
// // // //         gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // // //         gap: "18px",
// // // //         marginBottom: "26px",
// // // //     };

// // // //     const fieldWrap = {
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //     };

// // // //     const label = {
// // // //         fontSize: "14px",
// // // //         fontWeight: "600",
// // // //         marginBottom: "8px",
// // // //         color: "#333",
// // // //     };

// // // //     const input = {
// // // //         height: "44px",
// // // //         border: "1px solid #ddd",
// // // //         borderRadius: "8px",
// // // //         padding: "0 12px",
// // // //         fontSize: "14px",
// // // //         outline: "none",
// // // //         boxSizing: "border-box",
// // // //         width: "100%",
// // // //         background: "#fff",
// // // //     };

// // // //     const textarea = {
// // // //         minHeight: "110px",
// // // //         border: "1px solid #ddd",
// // // //         borderRadius: "8px",
// // // //         padding: "12px",
// // // //         fontSize: "14px",
// // // //         outline: "none",
// // // //         resize: "vertical",
// // // //         fontFamily: "Arial, Helvetica, sans-serif",
// // // //         boxSizing: "border-box",
// // // //         width: "100%",
// // // //     };

// // // //     const descriptionWrap = {
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         marginBottom: "26px",
// // // //     };

// // // //     const sectionTitle = {
// // // //         fontSize: "18px",
// // // //         fontWeight: "700",
// // // //         margin: "24px 0 14px",
// // // //         color: "#2b2b2b",
// // // //     };

// // // //     const fileInput = {
// // // //         marginTop: "8px",
// // // //         marginBottom: "16px",
// // // //     };

// // // //     const hintText = {
// // // //         fontSize: "13px",
// // // //         color: "#666",
// // // //         marginTop: "-6px",
// // // //         marginBottom: "10px",
// // // //     };

// // // //     const previewWrap = {
// // // //         marginTop: "10px",
// // // //         marginBottom: "20px",
// // // //     };

// // // //     const previewGrid = {
// // // //         display: "grid",
// // // //         gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // // //         gap: "16px",
// // // //     };

// // // //     const previewCard = {
// // // //         border: "1px solid #ddd",
// // // //         borderRadius: "10px",
// // // //         padding: "10px",
// // // //         background: "#fff",
// // // //         cursor: "grab",
// // // //     };

// // // //     const previewImage = {
// // // //         width: "100%",
// // // //         height: "160px",
// // // //         objectFit: "cover",
// // // //         borderRadius: "8px",
// // // //         border: "1px solid #ddd",
// // // //         display: "block",
// // // //         marginBottom: "10px",
// // // //     };

// // // //     const previewOrder = {
// // // //         fontSize: "13px",
// // // //         fontWeight: "700",
// // // //         marginBottom: "8px",
// // // //         color: "#444",
// // // //     };

// // // //     const actionRow = {
// // // //         display: "flex",
// // // //         gap: "8px",
// // // //         flexWrap: "wrap",
// // // //     };

// // // //     const removeButton = {
// // // //         border: "none",
// // // //         background: "#b33939",
// // // //         color: "#fff",
// // // //         borderRadius: "6px",
// // // //         padding: "8px 10px",
// // // //         cursor: "pointer",
// // // //         fontSize: "12px",
// // // //         fontWeight: "700",
// // // //     };

// // // //     const submitButton = {
// // // //         marginTop: "10px",
// // // //         background: "#6f3f8f",
// // // //         color: "#fff",
// // // //         border: "none",
// // // //         borderRadius: "8px",
// // // //         padding: "13px 24px",
// // // //         fontSize: "15px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //     };

// // // //     const productsGrid = {
// // // //         display: "grid",
// // // //         gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// // // //         gap: "22px",
// // // //         alignItems: "stretch",
// // // //     };

// // // //     const productCard = {
// // // //         background: "#fff",
// // // //         border: "1px solid #e7dff0",
// // // //         borderRadius: "18px",
// // // //         overflow: "hidden",
// // // //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         height: "100%",
// // // //     };

// // // //     const productImage = {
// // // //         width: "100%",
// // // //         height: "220px",
// // // //         objectFit: "cover",
// // // //         background: "#f3e9fb",
// // // //         display: "block",
// // // //         flexShrink: 0,
// // // //     };

// // // //     const productInfo = {
// // // //         padding: "16px",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         gap: "12px",
// // // //         flex: 1,
// // // //     };

// // // //     const productHeaderRow = {
// // // //         display: "flex",
// // // //         justifyContent: "space-between",
// // // //         alignItems: "flex-start",
// // // //         gap: "12px",
// // // //     };

// // // //     const productName = {
// // // //         fontSize: "18px",
// // // //         fontWeight: "700",
// // // //         color: "#222",
// // // //         margin: 0,
// // // //         lineHeight: "1.4",
// // // //         flex: 1,
// // // //     };

// // // //     const deleteProductButton = {
// // // //         background: "#fff1f1",
// // // //         color: "#b33939",
// // // //         border: "1px solid #f0c7c7",
// // // //         borderRadius: "8px",
// // // //         padding: "8px 12px",
// // // //         fontSize: "12px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //         whiteSpace: "nowrap",
// // // //     };

// // // //     const productPrice = {
// // // //         fontSize: "18px",
// // // //         fontWeight: "700",
// // // //         color: "#6f3f8f",
// // // //         margin: 0,
// // // //     };

// // // //     const stockRow = {
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         gap: "8px",
// // // //     };

// // // //     const stockLabel = {
// // // //         fontSize: "13px",
// // // //         color: "#555",
// // // //         fontWeight: "600",
// // // //     };

// // // //     const stockActionRow = {
// // // //         display: "flex",
// // // //         alignItems: "center",
// // // //         gap: "10px",
// // // //         flexWrap: "wrap",
// // // //     };

// // // //     const stockValueText = {
// // // //         fontSize: "15px",
// // // //         fontWeight: "700",
// // // //         color: "#222",
// // // //         minWidth: "50px",
// // // //     };

// // // //     const stockInput = {
// // // //         height: "42px",
// // // //         border: "1px solid #ddd",
// // // //         borderRadius: "8px",
// // // //         padding: "0 12px",
// // // //         fontSize: "14px",
// // // //         outline: "none",
// // // //         width: "120px",
// // // //         boxSizing: "border-box",
// // // //     };

// // // //     const updateStockButton = {
// // // //         background: "#6f3f8f",
// // // //         color: "#fff",
// // // //         border: "none",
// // // //         borderRadius: "8px",
// // // //         padding: "10px 14px",
// // // //         fontSize: "13px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //     };

// // // //     const cancelStockButton = {
// // // //         background: "#fff",
// // // //         color: "#5d3d75",
// // // //         border: "1px solid #d8c9e4",
// // // //         borderRadius: "8px",
// // // //         padding: "10px 14px",
// // // //         fontSize: "13px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //     };

// // // //     const noProductsBox = {
// // // //         background: "#fff",
// // // //         border: "1px dashed #d9c8e7",
// // // //         borderRadius: "16px",
// // // //         padding: "40px 24px",
// // // //         textAlign: "center",
// // // //         color: "#666",
// // // //         fontSize: "15px",
// // // //     };

// // // //     return (
// // // //         <div style={productsPageWrap}>
// // // //             <div style={productsHeader}>
// // // //                 <div>
// // // //                     <h1 style={productsTitle}>Products</h1>
// // // //                     <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // // //                 </div>

// // // //                 <div style={productsActionRow}>
// // // //                     <select
// // // //                         value={productFilterType}
// // // //                         onChange={(e) => setProductFilterType(e.target.value)}
// // // //                         style={filterSelect}
// // // //                     >
// // // //                         <option value="all">All Products</option>
// // // //                         {storedMetals.map((metal) => (
// // // //                             <option key={metal} value={metal}>
// // // //                                 {metal}
// // // //                             </option>
// // // //                         ))}
// // // //                     </select>

// // // //                     <button
// // // //                         type="button"
// // // //                         style={addButton}
// // // //                         onClick={() => setShowAddProductForm((prev) => !prev)}
// // // //                     >
// // // //                         {showAddProductForm ? "Close Form" : "+ Add Product"}
// // // //                     </button>
// // // //                 </div>
// // // //             </div>

// // // //             {showAddProductForm ? (
// // // //                 <div style={addProductFormCard}>
// // // //                     <div style={formHeaderRow}>
// // // //                         <div style={heading}>Add Product</div>

// // // //                         <button
// // // //                             type="button"
// // // //                             style={closeButton}
// // // //                             onClick={() => setShowAddProductForm(false)}
// // // //                         >
// // // //                             ✕
// // // //                         </button>
// // // //                     </div>

// // // //                     <form onSubmit={handleSubmit}>
// // // //                         <div style={grid}>
// // // //                             <div style={fieldWrap}>
// // // //                                 <label style={label}>Product Name</label>
// // // //                                 <input
// // // //                                     type="text"
// // // //                                     name="productName"
// // // //                                     value={formData.productName}
// // // //                                     onChange={handleInputChange}
// // // //                                     placeholder="Enter product name"
// // // //                                     style={input}
// // // //                                 />
// // // //                             </div>

// // // //                             <div style={fieldWrap}>
// // // //                                 <label style={label}>Metal Type</label>
// // // //                                 <select
// // // //                                     name="metalType"
// // // //                                     value={formData.metalType}
// // // //                                     onChange={handleInputChange}
// // // //                                     style={input}
// // // //                                 >
// // // //                                     <option value="">Select metal type</option>
// // // //                                     {storedMetals.map((metal) => (
// // // //                                         <option key={metal} value={metal}>
// // // //                                             {metal}
// // // //                                         </option>
// // // //                                     ))}
// // // //                                 </select>
// // // //                             </div>
// // // //                         </div>

// // // //                         <div style={descriptionWrap}>
// // // //                             <label style={label}>Product Description</label>
// // // //                             <textarea
// // // //                                 name="productDescription"
// // // //                                 value={formData.productDescription}
// // // //                                 onChange={handleInputChange}
// // // //                                 placeholder="Enter product description"
// // // //                                 style={textarea}
// // // //                             />
// // // //                         </div>

// // // //                         {formData.metalType && (
// // // //                             <div style={detailGrid}>
// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Purity</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="purity"
// // // //                                         value={formData.purity}
// // // //                                         onChange={handleInputChange}
// // // //                                         placeholder="Enter purity"
// // // //                                         style={input}
// // // //                                     />
// // // //                                 </div>

// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Weight</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="weight"
// // // //                                         value={formData.weight}
// // // //                                         onChange={handleInputChange}
// // // //                                         placeholder="Enter weight"
// // // //                                         style={input}
// // // //                                     />
// // // //                                 </div>

// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Price Per Gram</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="pricePerGram"
// // // //                                         value={formData.pricePerGram}
// // // //                                         onChange={handleInputChange}
// // // //                                         placeholder="Enter price per gram"
// // // //                                         style={input}
// // // //                                     />
// // // //                                 </div>

// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Making Charges</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="makingCharges"
// // // //                                         value={formData.makingCharges}
// // // //                                         onChange={handleInputChange}
// // // //                                         placeholder="Enter making charges"
// // // //                                         style={input}
// // // //                                     />
// // // //                                 </div>

// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Offer Price</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="offerPrice"
// // // //                                         value={formData.offerPrice}
// // // //                                         onChange={handleInputChange}
// // // //                                         placeholder="Enter offer price"
// // // //                                         style={input}
// // // //                                     />
// // // //                                 </div>

// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Total Price</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="totalPrice"
// // // //                                         value={formData.totalPrice}
// // // //                                         readOnly
// // // //                                         placeholder="Auto calculated"
// // // //                                         style={{
// // // //                                             ...input,
// // // //                                             background: "#f4f0f8",
// // // //                                             color: "#5d3d75",
// // // //                                             fontWeight: "700",
// // // //                                         }}
// // // //                                     />
// // // //                                 </div>

// // // //                                 <div style={fieldWrap}>
// // // //                                     <label style={label}>Stock</label>
// // // //                                     <input
// // // //                                         type="number"
// // // //                                         name="stock"
// // // //                                         value={formData.stock}
// // // //                                         onChange={handleInputChange}
// // // //                                         placeholder="Enter stock"
// // // //                                         style={input}
// // // //                                     />
// // // //                                 </div>
// // // //                             </div>
// // // //                         )}

// // // //                         <div style={sectionTitle}>Final Photo Upload</div>

// // // //                         <div style={fieldWrap}>
// // // //                             <label style={label}>Upload Product Images</label>
// // // //                             <input
// // // //                                 ref={fileInputRef}
// // // //                                 type="file"
// // // //                                 accept="image/*"
// // // //                                 multiple
// // // //                                 onChange={handleImageChange}
// // // //                                 style={fileInput}
// // // //                             />
// // // //                             <div style={hintText}>
// // // //                                 Drag the uploaded images to arrange order. The first image will
// // // //                                 be the main image.
// // // //                             </div>
// // // //                         </div>

// // // //                         {previews.length > 0 && (
// // // //                             <div style={previewWrap}>
// // // //                                 <div style={previewGrid}>
// // // //                                     {previews.map((img, index) => (
// // // //                                         <div
// // // //                                             key={img.id}
// // // //                                             style={previewCard}
// // // //                                             draggable
// // // //                                             onDragStart={() => handleDragStart(index)}
// // // //                                             onDragEnter={() => handleDragEnter(index)}
// // // //                                             onDragOver={(e) => e.preventDefault()}
// // // //                                             onDrop={handleDrop}
// // // //                                             onDragEnd={handleDragEnd}
// // // //                                         >
// // // //                                             <img
// // // //                                                 src={img.src}
// // // //                                                 alt={`Preview ${index + 1}`}
// // // //                                                 style={previewImage}
// // // //                                             />

// // // //                                             <div style={previewOrder}>
// // // //                                                 Image {index + 1}
// // // //                                                 {index === 0 ? " (Main image)" : ""}
// // // //                                             </div>

// // // //                                             <div style={actionRow}>
// // // //                                                 <button
// // // //                                                     type="button"
// // // //                                                     style={removeButton}
// // // //                                                     onClick={() => removeImage(index)}
// // // //                                                 >
// // // //                                                     Remove
// // // //                                                 </button>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </div>
// // // //                         )}

// // // //                         <button type="submit" style={submitButton}>
// // // //                             Save Product
// // // //                         </button>
// // // //                     </form>
// // // //                 </div>
// // // //             ) : filteredProducts.length > 0 ? (
// // // //                 <div style={productsGrid}>
// // // //                     {filteredProducts.map((product) => {
// // // //                         const mainImage = product.images?.[0] || "";

// // // //                         return (
// // // //                             <div key={product.id} style={productCard}>
// // // //                                 {mainImage ? (
// // // //                                     <img src={mainImage} alt={product.name} style={productImage} />
// // // //                                 ) : (
// // // //                                     <div
// // // //                                         style={{
// // // //                                             ...productImage,
// // // //                                             display: "flex",
// // // //                                             alignItems: "center",
// // // //                                             justifyContent: "center",
// // // //                                             color: "#8b6aa3",
// // // //                                             fontWeight: "700",
// // // //                                         }}
// // // //                                     >
// // // //                                         No Image
// // // //                                     </div>
// // // //                                 )}

// // // //                                 <div style={productInfo}>
// // // //                                     <div style={productHeaderRow}>
// // // //                                         <div style={productName}>{product.name}</div>

// // // //                                         <button
// // // //                                             type="button"
// // // //                                             style={deleteProductButton}
// // // //                                             onClick={() => confirmDeleteProduct(product.id)}
// // // //                                         >
// // // //                                             Remove Product
// // // //                                         </button>
// // // //                                     </div>

// // // //                                     <div style={productPrice}>
// // // //                                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // // //                                     </div>

// // // //                                     <div style={stockRow}>
// // // //                                         <label style={stockLabel}>Stock</label>

// // // //                                         {editingStockId === product.id ? (
// // // //                                             <div style={stockActionRow}>
// // // //                                                 <input
// // // //                                                     type="number"
// // // //                                                     value={editingStockValue}
// // // //                                                     onChange={(e) => setEditingStockValue(e.target.value)}
// // // //                                                     placeholder="Enter stock"
// // // //                                                     style={stockInput}
// // // //                                                 />

// // // //                                                 <button
// // // //                                                     type="button"
// // // //                                                     style={updateStockButton}
// // // //                                                     onClick={() => saveStockEdit(product.id)}
// // // //                                                 >
// // // //                                                     Save
// // // //                                                 </button>

// // // //                                                 <button
// // // //                                                     type="button"
// // // //                                                     style={cancelStockButton}
// // // //                                                     onClick={() => {
// // // //                                                         setEditingStockId(null);
// // // //                                                     }}
// // // //                                                 >
// // // //                                                     Cancel
// // // //                                                 </button>
// // // //                                             </div>
// // // //                                         ) : (
// // // //                                             <div style={stockActionRow}>
// // // //                                                 <div style={stockValueText}>{product.stock ?? 0}</div>

// // // //                                                 <button
// // // //                                                     type="button"
// // // //                                                     style={updateStockButton}
// // // //                                                     onClick={() => startStockEdit(product)}
// // // //                                                 >
// // // //                                                     Update
// // // //                                                 </button>
// // // //                                             </div>
// // // //                                         )}
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         );
// // // //                     })}
// // // //                 </div>
// // // //             ) : (
// // // //                 <div style={noProductsBox}>
// // // //                     {productFilterType === "all" ? (
// // // //                         <>
// // // //                             No products uploaded yet. Click <strong>Add Product</strong> to
// // // //                             create your first product.
// // // //                         </>
// // // //                     ) : (
// // // //                         <>No {productFilterType} products found.</>
// // // //                     )}
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // }



// // // import React from "react";

// // // export default function Products({
// // //     storedMetals,
// // //     storedPurities,
// // //     productFilterType,
// // //     setProductFilterType,
// // //     showAddProductForm,
// // //     setShowAddProductForm,
// // //     formData,
// // //     handleInputChange,
// // //     handleSubmit,
// // //     fileInputRef,
// // //     handleImageChange,
// // //     previews,
// // //     handleDragStart,
// // //     handleDragEnter,
// // //     handleDrop,
// // //     handleDragEnd,
// // //     removeImage,
// // //     filteredProducts,
// // //     confirmDeleteProduct,
// // //     editingStockId,
// // //     editingStockValue,
// // //     setEditingStockValue,
// // //     saveStockEdit,
// // //     setEditingStockId,
// // //     startStockEdit,
// // // }) {
// // //     const heading = {
// // //         fontSize: "28px",
// // //         fontWeight: "700",
// // //         marginBottom: "24px",
// // //         color: "#222",
// // //     };

// // //     const productsPageWrap = {
// // //         width: "100%",
// // //         maxWidth: "1300px",
// // //     };

// // //     const productsHeader = {
// // //         display: "flex",
// // //         justifyContent: "space-between",
// // //         alignItems: "flex-start",
// // //         gap: "12px",
// // //         marginBottom: "24px",
// // //         flexWrap: "wrap",
// // //     };

// // //     const productsTitle = {
// // //         fontSize: "28px",
// // //         fontWeight: "700",
// // //         color: "#222",
// // //         margin: 0,
// // //     };

// // //     const productsSubTitle = {
// // //         fontSize: "14px",
// // //         color: "#666",
// // //         marginTop: "6px",
// // //     };

// // //     const productsActionRow = {
// // //         display: "flex",
// // //         alignItems: "center",
// // //         gap: "12px",
// // //         flexWrap: "wrap",
// // //     };

// // //     const filterSelect = {
// // //         height: "44px",
// // //         minWidth: "180px",
// // //         border: "1px solid #ddd",
// // //         borderRadius: "8px",
// // //         padding: "0 12px",
// // //         fontSize: "14px",
// // //         outline: "none",
// // //         background: "#fff",
// // //         color: "#333",
// // //         boxSizing: "border-box",
// // //     };

// // //     const addButton = {
// // //         background: "#6f3f8f",
// // //         color: "#fff",
// // //         border: "none",
// // //         borderRadius: "8px",
// // //         padding: "11px 18px",
// // //         fontSize: "14px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //         whiteSpace: "nowrap",
// // //     };

// // //     const addProductFormCard = {
// // //         background: "#fff",
// // //         border: "1px solid #e7dff0",
// // //         borderRadius: "16px",
// // //         padding: "28px",
// // //         boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// // //         marginBottom: "24px",
// // //     };

// // //     const formHeaderRow = {
// // //         display: "flex",
// // //         justifyContent: "space-between",
// // //         alignItems: "center",
// // //         gap: "12px",
// // //         marginBottom: "8px",
// // //     };

// // //     const closeButton = {
// // //         width: "38px",
// // //         height: "38px",
// // //         borderRadius: "50%",
// // //         border: "none",
// // //         background: "#f3e9fb",
// // //         color: "#5d3d75",
// // //         fontSize: "18px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //         flexShrink: 0,
// // //     };

// // //     const grid = {
// // //         display: "grid",
// // //         gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // //         gap: "18px",
// // //         marginBottom: "26px",
// // //     };

// // //     const detailGrid = {
// // //         display: "grid",
// // //         gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// // //         gap: "18px",
// // //         marginBottom: "26px",
// // //     };

// // //     const fieldWrap = {
// // //         display: "flex",
// // //         flexDirection: "column",
// // //     };

// // //     const label = {
// // //         fontSize: "14px",
// // //         fontWeight: "600",
// // //         marginBottom: "8px",
// // //         color: "#333",
// // //     };

// // //     const input = {
// // //         height: "44px",
// // //         border: "1px solid #ddd",
// // //         borderRadius: "8px",
// // //         padding: "0 12px",
// // //         fontSize: "14px",
// // //         outline: "none",
// // //         boxSizing: "border-box",
// // //         width: "100%",
// // //         background: "#fff",
// // //     };

// // //     const textarea = {
// // //         minHeight: "110px",
// // //         border: "1px solid #ddd",
// // //         borderRadius: "8px",
// // //         padding: "12px",
// // //         fontSize: "14px",
// // //         outline: "none",
// // //         resize: "vertical",
// // //         fontFamily: "Arial, Helvetica, sans-serif",
// // //         boxSizing: "border-box",
// // //         width: "100%",
// // //     };

// // //     const descriptionWrap = {
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         marginBottom: "26px",
// // //     };

// // //     const sectionTitle = {
// // //         fontSize: "18px",
// // //         fontWeight: "700",
// // //         margin: "24px 0 14px",
// // //         color: "#2b2b2b",
// // //     };

// // //     const fileInput = {
// // //         marginTop: "8px",
// // //         marginBottom: "16px",
// // //     };

// // //     const hintText = {
// // //         fontSize: "13px",
// // //         color: "#666",
// // //         marginTop: "-6px",
// // //         marginBottom: "10px",
// // //     };

// // //     const previewWrap = {
// // //         marginTop: "10px",
// // //         marginBottom: "20px",
// // //     };

// // //     const previewGrid = {
// // //         display: "grid",
// // //         gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// // //         gap: "16px",
// // //     };

// // //     const previewCard = {
// // //         border: "1px solid #ddd",
// // //         borderRadius: "10px",
// // //         padding: "10px",
// // //         background: "#fff",
// // //         cursor: "grab",
// // //     };

// // //     const previewImage = {
// // //         width: "100%",
// // //         height: "160px",
// // //         objectFit: "cover",
// // //         borderRadius: "8px",
// // //         border: "1px solid #ddd",
// // //         display: "block",
// // //         marginBottom: "10px",
// // //     };

// // //     const previewOrder = {
// // //         fontSize: "13px",
// // //         fontWeight: "700",
// // //         marginBottom: "8px",
// // //         color: "#444",
// // //     };

// // //     const actionRow = {
// // //         display: "flex",
// // //         gap: "8px",
// // //         flexWrap: "wrap",
// // //     };

// // //     const removeButton = {
// // //         border: "none",
// // //         background: "#b33939",
// // //         color: "#fff",
// // //         borderRadius: "6px",
// // //         padding: "8px 10px",
// // //         cursor: "pointer",
// // //         fontSize: "12px",
// // //         fontWeight: "700",
// // //     };

// // //     const submitButton = {
// // //         marginTop: "10px",
// // //         background: "#6f3f8f",
// // //         color: "#fff",
// // //         border: "none",
// // //         borderRadius: "8px",
// // //         padding: "13px 24px",
// // //         fontSize: "15px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //     };

// // //     const productsGrid = {
// // //         display: "grid",
// // //         gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// // //         gap: "22px",
// // //         alignItems: "stretch",
// // //     };

// // //     const productCard = {
// // //         background: "#fff",
// // //         border: "1px solid #e7dff0",
// // //         borderRadius: "18px",
// // //         overflow: "hidden",
// // //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         height: "100%",
// // //     };

// // //     const productImage = {
// // //         width: "100%",
// // //         height: "220px",
// // //         objectFit: "cover",
// // //         background: "#f3e9fb",
// // //         display: "block",
// // //         flexShrink: 0,
// // //     };

// // //     const productInfo = {
// // //         padding: "16px",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         gap: "12px",
// // //         flex: 1,
// // //     };

// // //     const productHeaderRow = {
// // //         display: "flex",
// // //         justifyContent: "space-between",
// // //         alignItems: "flex-start",
// // //         gap: "12px",
// // //     };

// // //     const productName = {
// // //         fontSize: "18px",
// // //         fontWeight: "700",
// // //         color: "#222",
// // //         margin: 0,
// // //         lineHeight: "1.4",
// // //         flex: 1,
// // //     };

// // //     const deleteProductButton = {
// // //         background: "#fff1f1",
// // //         color: "#b33939",
// // //         border: "1px solid #f0c7c7",
// // //         borderRadius: "8px",
// // //         padding: "8px 12px",
// // //         fontSize: "12px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //         whiteSpace: "nowrap",
// // //     };

// // //     const productPrice = {
// // //         fontSize: "18px",
// // //         fontWeight: "700",
// // //         color: "#6f3f8f",
// // //         margin: 0,
// // //     };

// // //     const metaInfoText = {
// // //         fontSize: "14px",
// // //         color: "#555",
// // //         fontWeight: "600",
// // //     };

// // //     const stockRow = {
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         gap: "8px",
// // //     };

// // //     const stockLabel = {
// // //         fontSize: "13px",
// // //         color: "#555",
// // //         fontWeight: "600",
// // //     };

// // //     const stockActionRow = {
// // //         display: "flex",
// // //         alignItems: "center",
// // //         gap: "10px",
// // //         flexWrap: "wrap",
// // //     };

// // //     const stockValueText = {
// // //         fontSize: "15px",
// // //         fontWeight: "700",
// // //         color: "#222",
// // //         minWidth: "50px",
// // //     };

// // //     const stockInput = {
// // //         height: "42px",
// // //         border: "1px solid #ddd",
// // //         borderRadius: "8px",
// // //         padding: "0 12px",
// // //         fontSize: "14px",
// // //         outline: "none",
// // //         width: "120px",
// // //         boxSizing: "border-box",
// // //     };

// // //     const updateStockButton = {
// // //         background: "#6f3f8f",
// // //         color: "#fff",
// // //         border: "none",
// // //         borderRadius: "8px",
// // //         padding: "10px 14px",
// // //         fontSize: "13px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //     };

// // //     const cancelStockButton = {
// // //         background: "#fff",
// // //         color: "#5d3d75",
// // //         border: "1px solid #d8c9e4",
// // //         borderRadius: "8px",
// // //         padding: "10px 14px",
// // //         fontSize: "13px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //     };

// // //     const noProductsBox = {
// // //         background: "#fff",
// // //         border: "1px dashed #d9c8e7",
// // //         borderRadius: "16px",
// // //         padding: "40px 24px",
// // //         textAlign: "center",
// // //         color: "#666",
// // //         fontSize: "15px",
// // //     };

// // //     return (
// // //         <div style={productsPageWrap}>
// // //             <div style={productsHeader}>
// // //                 <div>
// // //                     <h1 style={productsTitle}>Products</h1>
// // //                     <div style={productsSubTitle}>Manage and view all uploaded products</div>
// // //                 </div>

// // //                 <div style={productsActionRow}>
// // //                     <select
// // //                         value={productFilterType}
// // //                         onChange={(e) => setProductFilterType(e.target.value)}
// // //                         style={filterSelect}
// // //                     >
// // //                         <option value="all">All Products</option>
// // //                         {storedMetals.map((metal) => (
// // //                             <option key={metal} value={metal}>
// // //                                 {metal}
// // //                             </option>
// // //                         ))}
// // //                     </select>

// // //                     <button
// // //                         type="button"
// // //                         style={addButton}
// // //                         onClick={() => setShowAddProductForm((prev) => !prev)}
// // //                     >
// // //                         {showAddProductForm ? "Close Form" : "+ Add Product"}
// // //                     </button>
// // //                 </div>
// // //             </div>

// // //             {showAddProductForm ? (
// // //                 <div style={addProductFormCard}>
// // //                     <div style={formHeaderRow}>
// // //                         <div style={heading}>Add Product</div>

// // //                         <button
// // //                             type="button"
// // //                             style={closeButton}
// // //                             onClick={() => setShowAddProductForm(false)}
// // //                         >
// // //                             ✕
// // //                         </button>
// // //                     </div>

// // //                     <form onSubmit={handleSubmit}>
// // //                         <div style={grid}>
// // //                             <div style={fieldWrap}>
// // //                                 <label style={label}>Product Name</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="productName"
// // //                                     value={formData.productName}
// // //                                     onChange={handleInputChange}
// // //                                     placeholder="Enter product name"
// // //                                     style={input}
// // //                                 />
// // //                             </div>

// // //                             <div style={fieldWrap}>
// // //                                 <label style={label}>Metal Type</label>
// // //                                 <select
// // //                                     name="metalType"
// // //                                     value={formData.metalType}
// // //                                     onChange={handleInputChange}
// // //                                     style={input}
// // //                                 >
// // //                                     <option value="">Select metal type</option>
// // //                                     {storedMetals.map((metal) => (
// // //                                         <option key={metal} value={metal}>
// // //                                             {metal}
// // //                                         </option>
// // //                                     ))}
// // //                                 </select>
// // //                             </div>
// // //                         </div>

// // //                         <div style={descriptionWrap}>
// // //                             <label style={label}>Product Description</label>
// // //                             <textarea
// // //                                 name="productDescription"
// // //                                 value={formData.productDescription}
// // //                                 onChange={handleInputChange}
// // //                                 placeholder="Enter product description"
// // //                                 style={textarea}
// // //                             />
// // //                         </div>

// // //                         {formData.metalType && (
// // //                             <div style={detailGrid}>
// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Purity</label>
// // //                                     <select
// // //                                         name="purity"
// // //                                         value={formData.purity}
// // //                                         onChange={handleInputChange}
// // //                                         style={input}
// // //                                     >
// // //                                         <option value="">Select purity</option>
// // //                                         {storedPurities.map((purity) => (
// // //                                             <option key={purity} value={purity}>
// // //                                                 {purity}
// // //                                             </option>
// // //                                         ))}
// // //                                     </select>
// // //                                 </div>

// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Weight</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         name="weight"
// // //                                         value={formData.weight}
// // //                                         onChange={handleInputChange}
// // //                                         placeholder="Enter weight"
// // //                                         style={input}
// // //                                     />
// // //                                 </div>

// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Price Per Gram</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         name="pricePerGram"
// // //                                         value={formData.pricePerGram}
// // //                                         onChange={handleInputChange}
// // //                                         placeholder="Enter price per gram"
// // //                                         style={input}
// // //                                     />
// // //                                 </div>

// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Making Charges</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         name="makingCharges"
// // //                                         value={formData.makingCharges}
// // //                                         onChange={handleInputChange}
// // //                                         placeholder="Enter making charges"
// // //                                         style={input}
// // //                                     />
// // //                                 </div>

// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Offer Price</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         name="offerPrice"
// // //                                         value={formData.offerPrice}
// // //                                         onChange={handleInputChange}
// // //                                         placeholder="Enter offer price"
// // //                                         style={input}
// // //                                     />
// // //                                 </div>

// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Total Price</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         name="totalPrice"
// // //                                         value={formData.totalPrice}
// // //                                         readOnly
// // //                                         placeholder="Auto calculated"
// // //                                         style={{
// // //                                             ...input,
// // //                                             background: "#f4f0f8",
// // //                                             color: "#5d3d75",
// // //                                             fontWeight: "700",
// // //                                         }}
// // //                                     />
// // //                                 </div>

// // //                                 <div style={fieldWrap}>
// // //                                     <label style={label}>Stock</label>
// // //                                     <input
// // //                                         type="number"
// // //                                         name="stock"
// // //                                         value={formData.stock}
// // //                                         onChange={handleInputChange}
// // //                                         placeholder="Enter stock"
// // //                                         style={input}
// // //                                     />
// // //                                 </div>
// // //                             </div>
// // //                         )}

// // //                         <div style={sectionTitle}>Final Photo Upload</div>

// // //                         <div style={fieldWrap}>
// // //                             <label style={label}>Upload Product Images</label>
// // //                             <input
// // //                                 ref={fileInputRef}
// // //                                 type="file"
// // //                                 accept="image/*"
// // //                                 multiple
// // //                                 onChange={handleImageChange}
// // //                                 style={fileInput}
// // //                             />
// // //                             <div style={hintText}>
// // //                                 Drag the uploaded images to arrange order. The first image will
// // //                                 be the main image.
// // //                             </div>
// // //                         </div>

// // //                         {previews.length > 0 && (
// // //                             <div style={previewWrap}>
// // //                                 <div style={previewGrid}>
// // //                                     {previews.map((img, index) => (
// // //                                         <div
// // //                                             key={img.id}
// // //                                             style={previewCard}
// // //                                             draggable
// // //                                             onDragStart={() => handleDragStart(index)}
// // //                                             onDragEnter={() => handleDragEnter(index)}
// // //                                             onDragOver={(e) => e.preventDefault()}
// // //                                             onDrop={handleDrop}
// // //                                             onDragEnd={handleDragEnd}
// // //                                         >
// // //                                             <img
// // //                                                 src={img.src}
// // //                                                 alt={`Preview ${index + 1}`}
// // //                                                 style={previewImage}
// // //                                             />

// // //                                             <div style={previewOrder}>
// // //                                                 Image {index + 1}
// // //                                                 {index === 0 ? " (Main image)" : ""}
// // //                                             </div>

// // //                                             <div style={actionRow}>
// // //                                                 <button
// // //                                                     type="button"
// // //                                                     style={removeButton}
// // //                                                     onClick={() => removeImage(index)}
// // //                                                 >
// // //                                                     Remove
// // //                                                 </button>
// // //                                             </div>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             </div>
// // //                         )}

// // //                         <button type="submit" style={submitButton}>
// // //                             Save Product
// // //                         </button>
// // //                     </form>
// // //                 </div>
// // //             ) : filteredProducts.length > 0 ? (
// // //                 <div style={productsGrid}>
// // //                     {filteredProducts.map((product) => {
// // //                         const mainImage = product.images?.[0] || "";

// // //                         return (
// // //                             <div key={product.id} style={productCard}>
// // //                                 {mainImage ? (
// // //                                     <img src={mainImage} alt={product.name} style={productImage} />
// // //                                 ) : (
// // //                                     <div
// // //                                         style={{
// // //                                             ...productImage,
// // //                                             display: "flex",
// // //                                             alignItems: "center",
// // //                                             justifyContent: "center",
// // //                                             color: "#8b6aa3",
// // //                                             fontWeight: "700",
// // //                                         }}
// // //                                     >
// // //                                         No Image
// // //                                     </div>
// // //                                 )}

// // //                                 <div style={productInfo}>
// // //                                     <div style={productHeaderRow}>
// // //                                         <div style={productName}>{product.name}</div>

// // //                                         <button
// // //                                             type="button"
// // //                                             style={deleteProductButton}
// // //                                             onClick={() => confirmDeleteProduct(product.id)}
// // //                                         >
// // //                                             Remove Product
// // //                                         </button>
// // //                                     </div>

// // //                                     <div style={productPrice}>
// // //                                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// // //                                     </div>

// // //                                     <div style={metaInfoText}>
// // //                                         {product.metalType || "-"}{" "}
// // //                                         {product.purity ? `• ${product.purity}` : ""}
// // //                                     </div>

// // //                                     <div style={stockRow}>
// // //                                         <label style={stockLabel}>Stock</label>

// // //                                         {editingStockId === product.id ? (
// // //                                             <div style={stockActionRow}>
// // //                                                 <input
// // //                                                     type="number"
// // //                                                     value={editingStockValue}
// // //                                                     onChange={(e) => setEditingStockValue(e.target.value)}
// // //                                                     placeholder="Enter stock"
// // //                                                     style={stockInput}
// // //                                                 />

// // //                                                 <button
// // //                                                     type="button"
// // //                                                     style={updateStockButton}
// // //                                                     onClick={() => saveStockEdit(product.id)}
// // //                                                 >
// // //                                                     Save
// // //                                                 </button>

// // //                                                 <button
// // //                                                     type="button"
// // //                                                     style={cancelStockButton}
// // //                                                     onClick={() => {
// // //                                                         setEditingStockId(null);
// // //                                                     }}
// // //                                                 >
// // //                                                     Cancel
// // //                                                 </button>
// // //                                             </div>
// // //                                         ) : (
// // //                                             <div style={stockActionRow}>
// // //                                                 <div style={stockValueText}>{product.stock ?? 0}</div>

// // //                                                 <button
// // //                                                     type="button"
// // //                                                     style={updateStockButton}
// // //                                                     onClick={() => startStockEdit(product)}
// // //                                                 >
// // //                                                     Update
// // //                                                 </button>
// // //                                             </div>
// // //                                         )}
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         );
// // //                     })}
// // //                 </div>
// // //             ) : (
// // //                 <div style={noProductsBox}>
// // //                     {productFilterType === "all" ? (
// // //                         <>
// // //                             No products uploaded yet. Click <strong>Add Product</strong> to
// // //                             create your first product.
// // //                         </>
// // //                     ) : (
// // //                         <>No {productFilterType} products found.</>
// // //                     )}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }



// // import React from "react";

// // export default function Products({
// //     storedMetals = [],
// //     storedPurities = [],
// //     productFilterType,
// //     setProductFilterType,
// //     showAddProductForm,
// //     setShowAddProductForm,
// //     formData,
// //     handleInputChange,
// //     handleSubmit,
// //     fileInputRef,
// //     handleImageChange,
// //     previews = [],
// //     handleDragStart,
// //     handleDragEnter,
// //     handleDrop,
// //     handleDragEnd,
// //     removeImage,
// //     filteredProducts = [],
// //     confirmDeleteProduct,
// //     editingStockId,
// //     editingStockValue,
// //     setEditingStockValue,
// //     saveStockEdit,
// //     setEditingStockId,
// //     startStockEdit,
// // }) {
// //     const heading = {
// //         fontSize: "28px",
// //         fontWeight: "700",
// //         marginBottom: "24px",
// //         color: "#222",
// //     };

// //     const productsPageWrap = {
// //         width: "100%",
// //         maxWidth: "1300px",
// //     };

// //     const productsHeader = {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "flex-start",
// //         gap: "12px",
// //         marginBottom: "24px",
// //         flexWrap: "wrap",
// //     };

// //     const productsTitle = {
// //         fontSize: "28px",
// //         fontWeight: "700",
// //         color: "#222",
// //         margin: 0,
// //     };

// //     const productsSubTitle = {
// //         fontSize: "14px",
// //         color: "#666",
// //         marginTop: "6px",
// //     };

// //     const productsActionRow = {
// //         display: "flex",
// //         alignItems: "center",
// //         gap: "12px",
// //         flexWrap: "wrap",
// //     };

// //     const filterSelect = {
// //         height: "44px",
// //         minWidth: "180px",
// //         border: "1px solid #ddd",
// //         borderRadius: "8px",
// //         padding: "0 12px",
// //         fontSize: "14px",
// //         outline: "none",
// //         background: "#fff",
// //         color: "#333",
// //         boxSizing: "border-box",
// //     };

// //     const addButton = {
// //         background: "#6f3f8f",
// //         color: "#fff",
// //         border: "none",
// //         borderRadius: "8px",
// //         padding: "11px 18px",
// //         fontSize: "14px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //         whiteSpace: "nowrap",
// //     };

// //     const addProductFormCard = {
// //         background: "#fff",
// //         border: "1px solid #e7dff0",
// //         borderRadius: "16px",
// //         padding: "28px",
// //         boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// //         marginBottom: "24px",
// //     };

// //     const formHeaderRow = {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         gap: "12px",
// //         marginBottom: "8px",
// //     };

// //     const closeButton = {
// //         width: "38px",
// //         height: "38px",
// //         borderRadius: "50%",
// //         border: "none",
// //         background: "#f3e9fb",
// //         color: "#5d3d75",
// //         fontSize: "18px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //         flexShrink: 0,
// //     };

// //     const grid = {
// //         display: "grid",
// //         gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //         gap: "18px",
// //         marginBottom: "26px",
// //     };

// //     const detailGrid = {
// //         display: "grid",
// //         gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //         gap: "18px",
// //         marginBottom: "26px",
// //     };

// //     const fieldWrap = {
// //         display: "flex",
// //         flexDirection: "column",
// //     };

// //     const label = {
// //         fontSize: "14px",
// //         fontWeight: "600",
// //         marginBottom: "8px",
// //         color: "#333",
// //     };

// //     const input = {
// //         height: "44px",
// //         border: "1px solid #ddd",
// //         borderRadius: "8px",
// //         padding: "0 12px",
// //         fontSize: "14px",
// //         outline: "none",
// //         boxSizing: "border-box",
// //         width: "100%",
// //         background: "#fff",
// //     };

// //     const textarea = {
// //         minHeight: "110px",
// //         border: "1px solid #ddd",
// //         borderRadius: "8px",
// //         padding: "12px",
// //         fontSize: "14px",
// //         outline: "none",
// //         resize: "vertical",
// //         fontFamily: "Arial, Helvetica, sans-serif",
// //         boxSizing: "border-box",
// //         width: "100%",
// //     };

// //     const descriptionWrap = {
// //         display: "flex",
// //         flexDirection: "column",
// //         marginBottom: "26px",
// //     };

// //     const sectionTitle = {
// //         fontSize: "18px",
// //         fontWeight: "700",
// //         margin: "24px 0 14px",
// //         color: "#2b2b2b",
// //     };

// //     const fileInput = {
// //         marginTop: "8px",
// //         marginBottom: "16px",
// //     };

// //     const hintText = {
// //         fontSize: "13px",
// //         color: "#666",
// //         marginTop: "-6px",
// //         marginBottom: "10px",
// //     };

// //     const previewWrap = {
// //         marginTop: "10px",
// //         marginBottom: "20px",
// //     };

// //     const previewGrid = {
// //         display: "grid",
// //         gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// //         gap: "16px",
// //     };

// //     const previewCard = {
// //         border: "1px solid #ddd",
// //         borderRadius: "10px",
// //         padding: "10px",
// //         background: "#fff",
// //         cursor: "grab",
// //     };

// //     const previewImage = {
// //         width: "100%",
// //         height: "160px",
// //         objectFit: "cover",
// //         borderRadius: "8px",
// //         border: "1px solid #ddd",
// //         display: "block",
// //         marginBottom: "10px",
// //     };

// //     const previewOrder = {
// //         fontSize: "13px",
// //         fontWeight: "700",
// //         marginBottom: "8px",
// //         color: "#444",
// //     };

// //     const actionRow = {
// //         display: "flex",
// //         gap: "8px",
// //         flexWrap: "wrap",
// //     };

// //     const removeButton = {
// //         border: "none",
// //         background: "#b33939",
// //         color: "#fff",
// //         borderRadius: "6px",
// //         padding: "8px 10px",
// //         cursor: "pointer",
// //         fontSize: "12px",
// //         fontWeight: "700",
// //     };

// //     const submitButton = {
// //         marginTop: "10px",
// //         background: "#6f3f8f",
// //         color: "#fff",
// //         border: "none",
// //         borderRadius: "8px",
// //         padding: "13px 24px",
// //         fontSize: "15px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //     };

// //     const productsGrid = {
// //         display: "grid",
// //         gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// //         gap: "22px",
// //         alignItems: "stretch",
// //     };

// //     const productCard = {
// //         background: "#fff",
// //         border: "1px solid #e7dff0",
// //         borderRadius: "18px",
// //         overflow: "hidden",
// //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// //         display: "flex",
// //         flexDirection: "column",
// //         height: "100%",
// //     };

// //     const productImage = {
// //         width: "100%",
// //         height: "220px",
// //         objectFit: "cover",
// //         background: "#f3e9fb",
// //         display: "block",
// //         flexShrink: 0,
// //     };

// //     const productInfo = {
// //         padding: "16px",
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "12px",
// //         flex: 1,
// //     };

// //     const productHeaderRow = {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "flex-start",
// //         gap: "12px",
// //     };

// //     const productName = {
// //         fontSize: "18px",
// //         fontWeight: "700",
// //         color: "#222",
// //         margin: 0,
// //         lineHeight: "1.4",
// //         flex: 1,
// //     };

// //     const deleteProductButton = {
// //         background: "#fff1f1",
// //         color: "#b33939",
// //         border: "1px solid #f0c7c7",
// //         borderRadius: "8px",
// //         padding: "8px 12px",
// //         fontSize: "12px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //         whiteSpace: "nowrap",
// //     };

// //     const productPrice = {
// //         fontSize: "18px",
// //         fontWeight: "700",
// //         color: "#6f3f8f",
// //         margin: 0,
// //     };

// //     const metaInfoText = {
// //         fontSize: "14px",
// //         color: "#555",
// //         fontWeight: "600",
// //     };

// //     const stockRow = {
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "8px",
// //     };

// //     const stockLabel = {
// //         fontSize: "13px",
// //         color: "#555",
// //         fontWeight: "600",
// //     };

// //     const stockActionRow = {
// //         display: "flex",
// //         alignItems: "center",
// //         gap: "10px",
// //         flexWrap: "wrap",
// //     };

// //     const stockValueText = {
// //         fontSize: "15px",
// //         fontWeight: "700",
// //         color: "#222",
// //         minWidth: "50px",
// //     };

// //     const stockInput = {
// //         height: "42px",
// //         border: "1px solid #ddd",
// //         borderRadius: "8px",
// //         padding: "0 12px",
// //         fontSize: "14px",
// //         outline: "none",
// //         width: "120px",
// //         boxSizing: "border-box",
// //     };

// //     const updateStockButton = {
// //         background: "#6f3f8f",
// //         color: "#fff",
// //         border: "none",
// //         borderRadius: "8px",
// //         padding: "10px 14px",
// //         fontSize: "13px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //     };

// //     const cancelStockButton = {
// //         background: "#fff",
// //         color: "#5d3d75",
// //         border: "1px solid #d8c9e4",
// //         borderRadius: "8px",
// //         padding: "10px 14px",
// //         fontSize: "13px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //     };

// //     const noProductsBox = {
// //         background: "#fff",
// //         border: "1px dashed #d9c8e7",
// //         borderRadius: "16px",
// //         padding: "40px 24px",
// //         textAlign: "center",
// //         color: "#666",
// //         fontSize: "15px",
// //     };

// //     return (
// //         <div style={productsPageWrap}>
// //             <div style={productsHeader}>
// //                 <div>
// //                     <h1 style={productsTitle}>Products</h1>
// //                     <div style={productsSubTitle}>Manage and view all uploaded products</div>
// //                 </div>

// //                 <div style={productsActionRow}>
// //                     <select
// //                         value={productFilterType}
// //                         onChange={(e) => setProductFilterType(e.target.value)}
// //                         style={filterSelect}
// //                     >
// //                         <option value="all">All Products</option>
// //                         {storedMetals.map((metal) => (
// //                             <option key={metal} value={metal}>
// //                                 {metal}
// //                             </option>
// //                         ))}
// //                     </select>

// //                     <button
// //                         type="button"
// //                         style={addButton}
// //                         onClick={() => setShowAddProductForm((prev) => !prev)}
// //                     >
// //                         {showAddProductForm ? "Close Form" : "+ Add Product"}
// //                     </button>
// //                 </div>
// //             </div>

// //             {showAddProductForm ? (
// //                 <div style={addProductFormCard}>
// //                     <div style={formHeaderRow}>
// //                         <div style={heading}>Add Product</div>

// //                         <button
// //                             type="button"
// //                             style={closeButton}
// //                             onClick={() => setShowAddProductForm(false)}
// //                         >
// //                             ✕
// //                         </button>
// //                     </div>

// //                     <form onSubmit={handleSubmit}>
// //                         <div style={grid}>
// //                             <div style={fieldWrap}>
// //                                 <label style={label}>Product Name</label>
// //                                 <input
// //                                     type="text"
// //                                     name="productName"
// //                                     value={formData.productName}
// //                                     onChange={handleInputChange}
// //                                     placeholder="Enter product name"
// //                                     style={input}
// //                                 />
// //                             </div>

// //                             <div style={fieldWrap}>
// //                                 <label style={label}>Metal Type</label>
// //                                 <select
// //                                     name="metalType"
// //                                     value={formData.metalType}
// //                                     onChange={handleInputChange}
// //                                     style={input}
// //                                 >
// //                                     <option value="">Select metal type</option>
// //                                     {storedMetals.map((metal) => (
// //                                         <option key={metal} value={metal}>
// //                                             {metal}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                             </div>
// //                         </div>

// //                         <div style={descriptionWrap}>
// //                             <label style={label}>Product Description</label>
// //                             <textarea
// //                                 name="productDescription"
// //                                 value={formData.productDescription}
// //                                 onChange={handleInputChange}
// //                                 placeholder="Enter product description"
// //                                 style={textarea}
// //                             />
// //                         </div>

// //                         {formData.metalType && (
// //                             <div style={detailGrid}>
// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Purity</label>
// //                                     <select
// //                                         name="purity"
// //                                         value={formData.purity}
// //                                         onChange={handleInputChange}
// //                                         style={input}
// //                                     >
// //                                         <option value="">Select purity</option>
// //                                         {storedPurities.map((purity) => (
// //                                             <option key={purity} value={purity}>
// //                                                 {purity}
// //                                             </option>
// //                                         ))}
// //                                     </select>
// //                                 </div>

// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Weight</label>
// //                                     <input
// //                                         type="number"
// //                                         name="weight"
// //                                         value={formData.weight}
// //                                         onChange={handleInputChange}
// //                                         placeholder="Enter weight"
// //                                         style={input}
// //                                     />
// //                                 </div>

// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Price Per Gram</label>
// //                                     <input
// //                                         type="number"
// //                                         name="pricePerGram"
// //                                         value={formData.pricePerGram}
// //                                         onChange={handleInputChange}
// //                                         placeholder="Enter price per gram"
// //                                         style={input}
// //                                     />
// //                                 </div>

// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Making Charges</label>
// //                                     <input
// //                                         type="number"
// //                                         name="makingCharges"
// //                                         value={formData.makingCharges}
// //                                         onChange={handleInputChange}
// //                                         placeholder="Enter making charges"
// //                                         style={input}
// //                                     />
// //                                 </div>

// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Offer Price</label>
// //                                     <input
// //                                         type="number"
// //                                         name="offerPrice"
// //                                         value={formData.offerPrice}
// //                                         onChange={handleInputChange}
// //                                         placeholder="Enter offer price"
// //                                         style={input}
// //                                     />
// //                                 </div>

// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Total Price</label>
// //                                     <input
// //                                         type="number"
// //                                         name="totalPrice"
// //                                         value={formData.totalPrice}
// //                                         readOnly
// //                                         placeholder="Auto calculated"
// //                                         style={{
// //                                             ...input,
// //                                             background: "#f4f0f8",
// //                                             color: "#5d3d75",
// //                                             fontWeight: "700",
// //                                         }}
// //                                     />
// //                                 </div>

// //                                 <div style={fieldWrap}>
// //                                     <label style={label}>Stock</label>
// //                                     <input
// //                                         type="number"
// //                                         name="stock"
// //                                         value={formData.stock}
// //                                         onChange={handleInputChange}
// //                                         placeholder="Enter stock"
// //                                         style={input}
// //                                     />
// //                                 </div>
// //                             </div>
// //                         )}

// //                         <div style={sectionTitle}>Final Photo Upload</div>

// //                         <div style={fieldWrap}>
// //                             <label style={label}>Upload Product Images</label>
// //                             <input
// //                                 ref={fileInputRef}
// //                                 type="file"
// //                                 accept="image/*"
// //                                 multiple
// //                                 onChange={handleImageChange}
// //                                 style={fileInput}
// //                             />
// //                             <div style={hintText}>
// //                                 Drag the uploaded images to arrange order. The first image will
// //                                 be the main image.
// //                             </div>
// //                         </div>

// //                         {previews.length > 0 && (
// //                             <div style={previewWrap}>
// //                                 <div style={previewGrid}>
// //                                     {previews.map((img, index) => (
// //                                         <div
// //                                             key={img.id}
// //                                             style={previewCard}
// //                                             draggable
// //                                             onDragStart={() => handleDragStart(index)}
// //                                             onDragEnter={() => handleDragEnter(index)}
// //                                             onDragOver={(e) => e.preventDefault()}
// //                                             onDrop={handleDrop}
// //                                             onDragEnd={handleDragEnd}
// //                                         >
// //                                             <img
// //                                                 src={img.src}
// //                                                 alt={`Preview ${index + 1}`}
// //                                                 style={previewImage}
// //                                             />

// //                                             <div style={previewOrder}>
// //                                                 Image {index + 1}
// //                                                 {index === 0 ? " (Main image)" : ""}
// //                                             </div>

// //                                             <div style={actionRow}>
// //                                                 <button
// //                                                     type="button"
// //                                                     style={removeButton}
// //                                                     onClick={() => removeImage(index)}
// //                                                 >
// //                                                     Remove
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         )}

// //                         <button type="submit" style={submitButton}>
// //                             Save Product
// //                         </button>
// //                     </form>
// //                 </div>
// //             ) : filteredProducts.length > 0 ? (
// //                 <div style={productsGrid}>
// //                     {filteredProducts.map((product) => {
// //                         const mainImage = product.images?.[0] || "";

// //                         return (
// //                             <div key={product.id} style={productCard}>
// //                                 {mainImage ? (
// //                                     <img src={mainImage} alt={product.name} style={productImage} />
// //                                 ) : (
// //                                     <div
// //                                         style={{
// //                                             ...productImage,
// //                                             display: "flex",
// //                                             alignItems: "center",
// //                                             justifyContent: "center",
// //                                             color: "#8b6aa3",
// //                                             fontWeight: "700",
// //                                         }}
// //                                     >
// //                                         No Image
// //                                     </div>
// //                                 )}

// //                                 <div style={productInfo}>
// //                                     <div style={productHeaderRow}>
// //                                         <div style={productName}>{product.name}</div>

// //                                         <button
// //                                             type="button"
// //                                             style={deleteProductButton}
// //                                             onClick={() => confirmDeleteProduct(product.id)}
// //                                         >
// //                                             Remove Product
// //                                         </button>
// //                                     </div>

// //                                     <div style={productPrice}>
// //                                         ₹{Number(product.totalPrice || 0).toLocaleString()}
// //                                     </div>

// //                                     <div style={metaInfoText}>
// //                                         {product.metalType || "-"}
// //                                         {product.purity ? ` • ${product.purity}` : ""}
// //                                     </div>

// //                                     <div style={stockRow}>
// //                                         <label style={stockLabel}>Stock</label>

// //                                         {editingStockId === product.id ? (
// //                                             <div style={stockActionRow}>
// //                                                 <input
// //                                                     type="number"
// //                                                     value={editingStockValue}
// //                                                     onChange={(e) => setEditingStockValue(e.target.value)}
// //                                                     placeholder="Enter stock"
// //                                                     style={stockInput}
// //                                                 />

// //                                                 <button
// //                                                     type="button"
// //                                                     style={updateStockButton}
// //                                                     onClick={() => saveStockEdit(product.id)}
// //                                                 >
// //                                                     Save
// //                                                 </button>

// //                                                 <button
// //                                                     type="button"
// //                                                     style={cancelStockButton}
// //                                                     onClick={() => {
// //                                                         setEditingStockId(null);
// //                                                     }}
// //                                                 >
// //                                                     Cancel
// //                                                 </button>
// //                                             </div>
// //                                         ) : (
// //                                             <div style={stockActionRow}>
// //                                                 <div style={stockValueText}>{product.stock ?? 0}</div>

// //                                                 <button
// //                                                     type="button"
// //                                                     style={updateStockButton}
// //                                                     onClick={() => startStockEdit(product)}
// //                                                 >
// //                                                     Update
// //                                                 </button>
// //                                             </div>
// //                                         )}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         );
// //                     })}
// //                 </div>
// //             ) : (
// //                 <div style={noProductsBox}>
// //                     {productFilterType === "all" ? (
// //                         <>
// //                             No products uploaded yet. Click <strong>Add Product</strong> to
// //                             create your first product.
// //                         </>
// //                     ) : (
// //                         <>No {productFilterType} products found.</>
// //                     )}
// //                 </div>
// //             )}
// //         </div>
// //     );
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
//   editingStockId,
//   editingStockValue,
//   setEditingStockValue,
//   saveStockEdit,
//   setEditingStockId,
//   startStockEdit,
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

//   const productsGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//     gap: "22px",
//     alignItems: "stretch",
//   };

//   const productCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "18px",
//     overflow: "hidden",
//     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
//     display: "flex",
//     flexDirection: "column",
//     height: "100%",
//   };

//   const productImage = {
//     width: "100%",
//     height: "220px",
//     objectFit: "cover",
//     background: "#f3e9fb",
//     display: "block",
//     flexShrink: 0,
//   };

//   const productInfo = {
//     padding: "16px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//     flex: 1,
//   };

//   const productHeaderRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//   };

//   const productName = {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//     lineHeight: "1.4",
//     flex: 1,
//   };

//   const deleteProductButton = {
//     background: "#fff1f1",
//     color: "#b33939",
//     border: "1px solid #f0c7c7",
//     borderRadius: "8px",
//     padding: "8px 12px",
//     fontSize: "12px",
//     fontWeight: "700",
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   };

//   const productPrice = {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#6f3f8f",
//     margin: 0,
//   };

//   const metaInfoText = {
//     fontSize: "14px",
//     color: "#555",
//     fontWeight: "600",
//   };

//   const stockRow = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//   };

//   const stockLabel = {
//     fontSize: "13px",
//     color: "#555",
//     fontWeight: "600",
//   };

//   const stockActionRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     flexWrap: "wrap",
//   };

//   const stockValueText = {
//     fontSize: "15px",
//     fontWeight: "700",
//     color: "#222",
//     minWidth: "50px",
//   };

//   const stockInput = {
//     height: "42px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0 12px",
//     fontSize: "14px",
//     outline: "none",
//     width: "120px",
//     boxSizing: "border-box",
//   };

//   const updateStockButton = {
//     background: "#6f3f8f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     fontSize: "13px",
//     fontWeight: "700",
//     cursor: "pointer",
//   };

//   const cancelStockButton = {
//     background: "#fff",
//     color: "#5d3d75",
//     border: "1px solid #d8c9e4",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     fontSize: "13px",
//     fontWeight: "700",
//     cursor: "pointer",
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

//   return (
//     <div style={productsPageWrap}>
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
//               <option key={metal} value={metal}>
//                 {metal}
//               </option>
//             ))}
//           </select>

//           <button
//             type="button"
//             style={addButton}
//             onClick={() => setShowAddProductForm((prev) => !prev)}
//           >
//             {showAddProductForm ? "Close Form" : "+ Add Product"}
//           </button>
//         </div>
//       </div>

//       {showAddProductForm ? (
//         <div style={addProductFormCard}>
//           <div style={formHeaderRow}>
//             <div style={heading}>Add Product</div>

//             <button
//               type="button"
//               style={closeButton}
//               onClick={() => setShowAddProductForm(false)}
//             >
//               ✕
//             </button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div style={grid}>
//               <div style={fieldWrap}>
//                 <label style={label}>Product Name</label>
//                 <input
//                   type="text"
//                   name="productName"
//                   value={formData.productName}
//                   onChange={handleInputChange}
//                   placeholder="Enter product name"
//                   style={input}
//                 />
//               </div>

//               <div style={fieldWrap}>
//                 <label style={label}>Metal Type</label>
//                 <select
//                   name="metalType"
//                   value={formData.metalType}
//                   onChange={handleInputChange}
//                   style={input}
//                 >
//                   <option value="">Select metal type</option>
//                   {storedMetals.map((metal) => (
//                     <option key={metal} value={metal}>
//                       {metal}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div style={descriptionWrap}>
//               <label style={label}>Product Description</label>
//               <textarea
//                 name="productDescription"
//                 value={formData.productDescription}
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
//                     value={formData.purity}
//                     onChange={handleInputChange}
//                     style={input}
//                   >
//                     <option value="">Select purity</option>
//                     {(metalPurities[formData.metalType] || []).map((purity) => (
//                       <option key={purity} value={purity}>
//                         {purity}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Weight</label>
//                   <input
//                     type="number"
//                     name="weight"
//                     value={formData.weight}
//                     onChange={handleInputChange}
//                     placeholder="Enter weight"
//                     style={input}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Price Per Gram</label>
//                   <input
//                     type="number"
//                     name="pricePerGram"
//                     value={formData.pricePerGram}
//                     onChange={handleInputChange}
//                     placeholder="Enter price per gram"
//                     style={input}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Making Charges</label>
//                   <input
//                     type="number"
//                     name="makingCharges"
//                     value={formData.makingCharges}
//                     onChange={handleInputChange}
//                     placeholder="Enter making charges"
//                     style={input}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Offer Price</label>
//                   <input
//                     type="number"
//                     name="offerPrice"
//                     value={formData.offerPrice}
//                     onChange={handleInputChange}
//                     placeholder="Enter offer price"
//                     style={input}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Total Price</label>
//                   <input
//                     type="number"
//                     name="totalPrice"
//                     value={formData.totalPrice}
//                     readOnly
//                     placeholder="Auto calculated"
//                     style={{
//                       ...input,
//                       background: "#f4f0f8",
//                       color: "#5d3d75",
//                       fontWeight: "700",
//                     }}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Stock</label>
//                   <input
//                     type="number"
//                     name="stock"
//                     value={formData.stock}
//                     onChange={handleInputChange}
//                     placeholder="Enter stock"
//                     style={input}
//                   />
//                 </div>
//               </div>
//             )}

//             <div style={sectionTitle}>Final Photo Upload</div>

//             <div style={fieldWrap}>
//               <label style={label}>Upload Product Images</label>
//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImageChange}
//                 style={fileInput}
//               />
//               <div style={hintText}>
//                 Drag the uploaded images to arrange order. The first image will be
//                 the main image.
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
//                       <img
//                         src={img.src}
//                         alt={`Preview ${index + 1}`}
//                         style={previewImage}
//                       />

//                       <div style={previewOrder}>
//                         Image {index + 1}
//                         {index === 0 ? " (Main image)" : ""}
//                       </div>

//                       <div style={actionRow}>
//                         <button
//                           type="button"
//                           style={removeButton}
//                           onClick={() => removeImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <button type="submit" style={submitButton}>
//               Save Product
//             </button>
//           </form>
//         </div>
//       ) : filteredProducts.length > 0 ? (
//         <div style={productsGrid}>
//           {filteredProducts.map((product) => {
//             const mainImage = product.images?.[0] || "";

//             return (
//               <div key={product.id} style={productCard}>
//                 {mainImage ? (
//                   <img src={mainImage} alt={product.name} style={productImage} />
//                 ) : (
//                   <div
//                     style={{
//                       ...productImage,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#8b6aa3",
//                       fontWeight: "700",
//                     }}
//                   >
//                     No Image
//                   </div>
//                 )}

//                 <div style={productInfo}>
//                   <div style={productHeaderRow}>
//                     <div style={productName}>{product.name}</div>

//                     <button
//                       type="button"
//                       style={deleteProductButton}
//                       onClick={() => confirmDeleteProduct(product.id)}
//                     >
//                       Remove Product
//                     </button>
//                   </div>

//                   <div style={productPrice}>
//                     ₹{Number(product.totalPrice || 0).toLocaleString()}
//                   </div>

//                   <div style={metaInfoText}>
//                     {product.metalType || "-"}
//                     {product.purity ? ` • ${product.purity}` : ""}
//                   </div>

//                   <div style={stockRow}>
//                     <label style={stockLabel}>Stock</label>

//                     {editingStockId === product.id ? (
//                       <div style={stockActionRow}>
//                         <input
//                           type="number"
//                           value={editingStockValue}
//                           onChange={(e) => setEditingStockValue(e.target.value)}
//                           placeholder="Enter stock"
//                           style={stockInput}
//                         />

//                         <button
//                           type="button"
//                           style={updateStockButton}
//                           onClick={() => saveStockEdit(product.id)}
//                         >
//                           Save
//                         </button>

//                         <button
//                           type="button"
//                           style={cancelStockButton}
//                           onClick={() => {
//                             setEditingStockId(null);
//                           }}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <div style={stockActionRow}>
//                         <div style={stockValueText}>{product.stock ?? 0}</div>

//                         <button
//                           type="button"
//                           style={updateStockButton}
//                           onClick={() => startStockEdit(product)}
//                         >
//                           Update
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div style={noProductsBox}>
//           {productFilterType === "all" ? (
//             <>
//               No products uploaded yet. Click <strong>Add Product</strong> to create
//               your first product.
//             </>
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
  editingStockId,
  editingStockValue,
  setEditingStockValue,
  saveStockEdit,
  setEditingStockId,
  startStockEdit,
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

  const productsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "22px",
    alignItems: "stretch",
  };

  const productCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const productImage = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    background: "#f3e9fb",
    display: "block",
    flexShrink: 0,
  };

  const productInfo = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1,
  };

  const productHeaderRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
  };

  const productName = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
    lineHeight: "1.4",
    flex: 1,
  };

  const deleteProductButton = {
    background: "#fff1f1",
    color: "#b33939",
    border: "1px solid #f0c7c7",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const productPrice = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#6f3f8f",
    margin: 0,
  };

  const metaInfoText = {
    fontSize: "14px",
    color: "#555",
    fontWeight: "600",
  };

  const stockRow = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const stockLabel = {
    fontSize: "13px",
    color: "#555",
    fontWeight: "600",
  };

  const stockActionRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  };

  const stockValueText = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#222",
    minWidth: "50px",
  };

  const stockInput = {
    height: "42px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0 12px",
    fontSize: "14px",
    outline: "none",
    width: "120px",
    boxSizing: "border-box",
  };

  const updateStockButton = {
    background: "#6f3f8f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  };

  const cancelStockButton = {
    background: "#fff",
    color: "#5d3d75",
    border: "1px solid #d8c9e4",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
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

  return (
    <div style={productsPageWrap}>
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
              <option key={metal} value={metal}>
                {metal}
              </option>
            ))}
          </select>

          <button
            type="button"
            style={addButton}
            onClick={() => setShowAddProductForm((prev) => !prev)}
          >
            {showAddProductForm ? "Close Form" : "+ Add Product"}
          </button>
        </div>
      </div>

      {showAddProductForm ? (
        <div style={addProductFormCard}>
          <div style={formHeaderRow}>
            <div style={heading}>Add Product</div>

            <button
              type="button"
              style={closeButton}
              onClick={() => setShowAddProductForm(false)}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={grid}>
              <div style={fieldWrap}>
                <label style={label}>Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  style={input}
                />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Metal Type</label>
                <select
                  name="metalType"
                  value={formData.metalType}
                  onChange={handleInputChange}
                  style={input}
                >
                  <option value="">Select metal type</option>
                  {storedMetals.map((metal) => (
                    <option key={metal} value={metal}>
                      {metal}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={descriptionWrap}>
              <label style={label}>Product Description</label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
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
                    value={formData.purity}
                    onChange={handleInputChange}
                    style={input}
                  >
                    <option value="">Select purity</option>
                    {(metalPurities[formData.metalType] || []).map((purity) => (
                      <option key={purity} value={purity}>
                        {purity}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Weight</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder="Enter weight"
                    style={input}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Price Per Gram</label>
                  <input
                    type="number"
                    name="pricePerGram"
                    value={formData.pricePerGram}
                    onChange={handleInputChange}
                    placeholder="Enter price per gram"
                    style={input}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Making Charges</label>
                  <input
                    type="number"
                    name="makingCharges"
                    value={formData.makingCharges}
                    onChange={handleInputChange}
                    placeholder="Enter making charges"
                    style={input}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Offer Price</label>
                  <input
                    type="number"
                    name="offerPrice"
                    value={formData.offerPrice}
                    onChange={handleInputChange}
                    placeholder="Enter offer price"
                    style={input}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Total Price</label>
                  <input
                    type="number"
                    name="totalPrice"
                    value={formData.totalPrice}
                    readOnly
                    placeholder="Auto calculated"
                    style={{
                      ...input,
                      background: "#f4f0f8",
                      color: "#5d3d75",
                      fontWeight: "700",
                    }}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="Enter stock"
                    style={input}
                  />
                </div>
              </div>
            )}

            <div style={sectionTitle}>Final Photo Upload</div>

            <div style={fieldWrap}>
              <label style={label}>Upload Product Images</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={fileInput}
              />
              <div style={hintText}>
                Drag the uploaded images to arrange order. The first image will be
                the main image.
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
                      <img
                        src={img.src}
                        alt={`Preview ${index + 1}`}
                        style={previewImage}
                      />

                      <div style={previewOrder}>
                        Image {index + 1}
                        {index === 0 ? " (Main image)" : ""}
                      </div>

                      <div style={actionRow}>
                        <button
                          type="button"
                          style={removeButton}
                          onClick={() => removeImage(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button type="submit" style={submitButton}>
              Save Product
            </button>
          </form>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div style={productsGrid}>
          {filteredProducts.map((product) => {
            const mainImage = product.images?.[0] || "";

            return (
              <div key={product.id} style={productCard}>
                {mainImage ? (
                  <img src={mainImage} alt={product.name} style={productImage} />
                ) : (
                  <div
                    style={{
                      ...productImage,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8b6aa3",
                      fontWeight: "700",
                    }}
                  >
                    No Image
                  </div>
                )}

                <div style={productInfo}>
                  <div style={productHeaderRow}>
                    <div style={productName}>{product.name}</div>

                    <button
                      type="button"
                      style={deleteProductButton}
                      onClick={() => confirmDeleteProduct(product.id)}
                    >
                      Remove Product
                    </button>
                  </div>

                  <div style={productPrice}>
                    ₹{Number(product.totalPrice || 0).toLocaleString()}
                  </div>

                  <div style={metaInfoText}>
                    {product.metalType || "-"}
                    {product.purity ? ` • ${product.purity}` : ""}
                  </div>

                  <div style={stockRow}>
                    <label style={stockLabel}>Stock</label>

                    {editingStockId === product.id ? (
                      <div style={stockActionRow}>
                        <input
                          type="number"
                          value={editingStockValue}
                          onChange={(e) => setEditingStockValue(e.target.value)}
                          placeholder="Enter stock"
                          style={stockInput}
                        />

                        <button
                          type="button"
                          style={updateStockButton}
                          onClick={() => saveStockEdit(product.id)}
                        >
                          Save
                        </button>

                        <button
                          type="button"
                          style={cancelStockButton}
                          onClick={() => {
                            setEditingStockId(null);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div style={stockActionRow}>
                        <div style={stockValueText}>{product.stock ?? 0}</div>

                        <button
                          type="button"
                          style={updateStockButton}
                          onClick={() => startStockEdit(product)}
                        >
                          Update
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={noProductsBox}>
          {productFilterType === "all" ? (
            <>
              No products uploaded yet. Click <strong>Add Product</strong> to create
              your first product.
            </>
          ) : (
            <>No {productFilterType} products found.</>
          )}
        </div>
      )}
    </div>
  );
}