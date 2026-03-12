
// // // import React, { useState, useMemo } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // function formatINR(n) {
// // //   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// // // }

// // // export default function MainPage({ products }) {
// // //   const navigate = useNavigate();
// // //   const [sortKey, setSortKey] = useState("featured");

// // //   const normalizedProducts = useMemo(() => {
// // //     return (products || []).map((product) => ({
// // //       ...product,
// // //       id: product.id,
// // //       name: product.name || "",
// // //       price: Number(product.price || 0),
// // //       images: Array.isArray(product.images) ? product.images : [],
// // //       createdAt: product.createdAt || "",
// // //     }));
// // //   }, [products]);

// // //   const sortedProducts = useMemo(() => {
// // //     const arr = [...normalizedProducts];

// // //     switch (sortKey) {
// // //       case "priceLow":
// // //         arr.sort((a, b) => a.price - b.price);
// // //         break;

// // //       case "priceHigh":
// // //         arr.sort((a, b) => b.price - a.price);
// // //         break;

// // //       case "az":
// // //         arr.sort((a, b) => a.name.localeCompare(b.name));
// // //         break;

// // //       case "za":
// // //         arr.sort((a, b) => b.name.localeCompare(a.name));
// // //         break;

// // //       case "old":
// // //         arr.sort(
// // //           (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
// // //         );
// // //         break;

// // //       case "new":
// // //         arr.sort(
// // //           (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
// // //         );
// // //         break;

// // //       default:
// // //         break;
// // //     }

// // //     return arr;
// // //   }, [normalizedProducts, sortKey]);

// // //   const wrapper = {
// // //     flex: 1,
// // //     padding: "20px 24px",
// // //     boxSizing: "border-box",
// // //     background: "#fff",
// // //   };

// // //   const topBar = {
// // //     display: "flex",
// // //     justifyContent: "flex-end",
// // //     marginBottom: "20px",
// // //   };

// // //   const sortBox = {
// // //     border: "1px solid #000",
// // //     padding: "10px 16px",
// // //     fontSize: "14px",
// // //     cursor: "pointer",
// // //     minWidth: "220px",
// // //     background: "#fff",
// // //   };

// // //   const grid = {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(3, 1fr)",
// // //     gap: "28px 24px",
// // //   };

// // //   const card = {
// // //     textAlign: "center",
// // //     cursor: "pointer",
// // //   };

// // //   const imageWrap = {
// // //     width: "100%",
// // //     aspectRatio: "1 / 1",
// // //     background: "#f5f5f5",
// // //     overflow: "hidden",
// // //     marginBottom: "12px",
// // //   };

// // //   const image = {
// // //     width: "100%",
// // //     height: "100%",
// // //     objectFit: "cover",
// // //     display: "block",
// // //   };

// // //   const name = {
// // //     fontSize: "16px",
// // //     color: "#333",
// // //     marginBottom: "6px",
// // //   };

// // //   const price = {
// // //     fontSize: "15px",
// // //     color: "#666",
// // //   };

// // //   const emptyState = {
// // //     fontSize: "16px",
// // //     color: "#666",
// // //     padding: "40px 0",
// // //   };

// // //   return (
// // //     <div style={wrapper}>
// // //       <div style={topBar}>
// // //         <select
// // //           style={sortBox}
// // //           value={sortKey}
// // //           onChange={(e) => setSortKey(e.target.value)}
// // //         >
// // //           <option value="featured">Featured</option>
// // //           <option value="az">Alphabetically, A-Z</option>
// // //           <option value="za">Alphabetically, Z-A</option>
// // //           <option value="priceLow">Price, low to high</option>
// // //           <option value="priceHigh">Price, high to low</option>
// // //           <option value="old">Date, old to new</option>
// // //           <option value="new">Date, new to old</option>
// // //         </select>
// // //       </div>

// // //       {sortedProducts.length === 0 ? (
// // //         <div style={emptyState}>No products found.</div>
// // //       ) : (
// // //         <div style={grid}>
// // //           {sortedProducts.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               style={card}
// // //               onClick={() =>
// // //                 navigate(`/product/${product.id}`, { state: product })
// // //               }
// // //             >
// // //               <div style={imageWrap}>
// // //                 {product.images.length > 0 && (
// // //                   <img
// // //                     src={product.images[0]}
// // //                     alt={product.name}
// // //                     style={image}
// // //                   />
// // //                 )}
// // //               </div>

// // //               <div style={name}>{product.name}</div>
// // //               <div style={price}>{formatINR(product.price)}</div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }




// // import React, { useState, useMemo, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // function formatINR(n) {
// //   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// // }

// // export default function MainPage({ products }) {
// //   const navigate = useNavigate();
// //   const [sortKey, setSortKey] = useState("featured");
// //   const [liveProducts, setLiveProducts] = useState([]);

// //   useEffect(() => {
// //     const storedProducts = JSON.parse(localStorage.getItem("adminProducts") || "[]");

// //     if (storedProducts.length > 0) {
// //       setLiveProducts(storedProducts);
// //     } else {
// //       setLiveProducts(products || []);
// //     }
// //   }, [products]);

// //   const normalizedProducts = useMemo(() => {
// //     return (liveProducts || []).map((product) => ({
// //       ...product,
// //       id: product.id,
// //       name: product.name || "",
// //       price: Number(product.totalPrice || product.price || 0),
// //       stock: Number(product.stock || 0),
// //       images: Array.isArray(product.images) ? product.images : [],
// //       createdAt: product.createdAt || "",
// //     }));
// //   }, [liveProducts]);

// //   const sortedProducts = useMemo(() => {
// //     const arr = [...normalizedProducts];

// //     switch (sortKey) {
// //       case "priceLow":
// //         arr.sort((a, b) => a.price - b.price);
// //         break;

// //       case "priceHigh":
// //         arr.sort((a, b) => b.price - a.price);
// //         break;

// //       case "az":
// //         arr.sort((a, b) => a.name.localeCompare(b.name));
// //         break;

// //       case "za":
// //         arr.sort((a, b) => b.name.localeCompare(a.name));
// //         break;

// //       case "old":
// //         arr.sort(
// //           (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
// //         );
// //         break;

// //       case "new":
// //         arr.sort(
// //           (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
// //         );
// //         break;

// //       default:
// //         break;
// //     }

// //     return arr;
// //   }, [normalizedProducts, sortKey]);

// //   const handleAddToCart = (e, product) => {
// //     e.stopPropagation();

// //     if (product.stock <= 0) return;

// //     const adminProducts = JSON.parse(localStorage.getItem("adminProducts") || "[]");

// //     const updatedProducts = adminProducts.map((item) =>
// //       item.id === product.id
// //         ? { ...item, stock: Math.max(Number(item.stock || 0) - 1, 0) }
// //         : item
// //     );

// //     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
// //     setLiveProducts(updatedProducts);

// //     const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
// //     const existingIndex = existingCart.findIndex((item) => item.id === product.id);

// //     if (existingIndex > -1) {
// //       existingCart[existingIndex] = {
// //         ...existingCart[existingIndex],
// //         quantity: Number(existingCart[existingIndex].quantity || 0) + 1,
// //       };
// //     } else {
// //       existingCart.push({
// //         id: product.id,
// //         name: product.name,
// //         price: product.price,
// //         image: product.images?.[0] || "",
// //         quantity: 1,
// //       });
// //     }

// //     localStorage.setItem("cartItems", JSON.stringify(existingCart));
// //   };

// //   const wrapper = {
// //     flex: 1,
// //     padding: "20px 24px",
// //     boxSizing: "border-box",
// //     background: "#fff",
// //   };

// //   const topBar = {
// //     display: "flex",
// //     justifyContent: "flex-end",
// //     marginBottom: "20px",
// //   };

// //   const sortBox = {
// //     border: "1px solid #000",
// //     padding: "10px 16px",
// //     fontSize: "14px",
// //     cursor: "pointer",
// //     minWidth: "220px",
// //     background: "#fff",
// //   };

// //   const grid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(3, 1fr)",
// //     gap: "28px 24px",
// //   };

// //   const card = {
// //     textAlign: "center",
// //     cursor: "pointer",
// //   };

// //   const imageWrap = {
// //     width: "100%",
// //     aspectRatio: "1 / 1",
// //     background: "#f5f5f5",
// //     overflow: "hidden",
// //     marginBottom: "12px",
// //     position: "relative",
// //   };

// //   const image = {
// //     width: "100%",
// //     height: "100%",
// //     objectFit: "cover",
// //     display: "block",
// //   };

// //   const name = {
// //     fontSize: "16px",
// //     color: "#333",
// //     marginBottom: "6px",
// //   };

// //   const price = {
// //     fontSize: "15px",
// //     color: "#666",
// //     marginBottom: "8px",
// //   };

// //   const outOfStockTag = {
// //     position: "absolute",
// //     top: "10px",
// //     right: "10px",
// //     background: "#b33939",
// //     color: "#fff",
// //     padding: "6px 10px",
// //     borderRadius: "6px",
// //     fontSize: "12px",
// //     fontWeight: "700",
// //   };

// //   const addToCartBtn = {
// //     marginTop: "8px",
// //     border: "1px solid #000",
// //     background: "#fff",
// //     padding: "8px 14px",
// //     fontSize: "13px",
// //     cursor: "pointer",
// //   };

// //   const emptyState = {
// //     fontSize: "16px",
// //     color: "#666",
// //     padding: "40px 0",
// //   };

// //   return (
// //     <div style={wrapper}>
// //       <div style={topBar}>
// //         <select
// //           style={sortBox}
// //           value={sortKey}
// //           onChange={(e) => setSortKey(e.target.value)}
// //         >
// //           <option value="featured">Featured</option>
// //           <option value="az">Alphabetically, A-Z</option>
// //           <option value="za">Alphabetically, Z-A</option>
// //           <option value="priceLow">Price, low to high</option>
// //           <option value="priceHigh">Price, high to low</option>
// //           <option value="old">Date, old to new</option>
// //           <option value="new">Date, new to old</option>
// //         </select>
// //       </div>

// //       {sortedProducts.length === 0 ? (
// //         <div style={emptyState}>No products found.</div>
// //       ) : (
// //         <div style={grid}>
// //           {sortedProducts.map((product) => (
// //             <div
// //               key={product.id}
// //               style={card}
// //               onClick={() =>
// //                 navigate(`/product/${product.id}`, { state: product })
// //               }
// //             >
// //               <div style={imageWrap}>
// //                 {product.images.length > 0 && (
// //                   <img
// //                     src={product.images[0]}
// //                     alt={product.name}
// //                     style={image}
// //                   />
// //                 )}

// //                 {product.stock === 0 && (
// //                   <div style={outOfStockTag}>Out of Stock</div>
// //                 )}
// //               </div>

// //               <div style={name}>{product.name}</div>
// //               <div style={price}>{formatINR(product.price)}</div>

// //               {product.stock > 0 && (
// //                 <button
// //                   type="button"
// //                   style={addToCartBtn}
// //                   onClick={(e) => handleAddToCart(e, product)}
// //                 >
// //                   Add to Cart
// //                 </button>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// // import React, { useMemo, useState, useEffect } from "react";
// // import { useParams, useNavigate, useLocation } from "react-router-dom";
// // import { FiTruck } from "react-icons/fi";
// // import { TbWorld } from "react-icons/tb";
// // import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// // function formatINR(n) {
// //   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// // }

// // export default function ProductDetails() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const product = useMemo(() => {
// //     if (location.state?.id && String(location.state.id) === String(id)) {
// //       return {
// //         ...location.state,
// //         images: Array.isArray(location.state.images)
// //           ? location.state.images
// //           : [],
// //         categories: location.state.categories || {},
// //       };
// //     }

// //     const storedProducts = JSON.parse(
// //       localStorage.getItem("adminProducts") || "[]"
// //     );

// //     const foundProduct = storedProducts.find(
// //       (item) => String(item.id) === String(id)
// //     );

// //     if (!foundProduct) return null;

// //     return {
// //       ...foundProduct,
// //       name: foundProduct.name || "",
// //       price: Number(foundProduct.price || 0),
// //       description: foundProduct.description || "",
// //       images: Array.isArray(foundProduct.images) ? foundProduct.images : [],
// //       categories: foundProduct.categories || {},
// //     };
// //   }, [id, location.state]);

// //   const imageList = useMemo(() => {
// //     return Array.isArray(product?.images) ? product.images : [];
// //   }, [product]);

// //   const [selectedImage, setSelectedImage] = useState("");
// //   const [showFullPolicy, setShowFullPolicy] = useState(false);
// //   const [careOpen, setCareOpen] = useState(false);
// //   const [disclaimerOpen, setDisclaimerOpen] = useState(false);

// //   useEffect(() => {
// //     setSelectedImage(imageList[0] || "");
// //   }, [imageList]);

// //   if (!product) {
// //     return (
// //       <div style={{ padding: "40px", fontSize: "18px" }}>
// //         Product not found.
// //       </div>
// //     );
// //   }

// //   const handleAddToCart = () => {
// //     const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

// //     const existingItem = existingCart.find((item) => item.id === product.id);

// //     let updatedCart;

// //     if (existingItem) {
// //       updatedCart = existingCart.map((item) =>
// //         item.id === product.id
// //           ? { ...item, quantity: item.quantity + 1 }
// //           : item
// //       );
// //     } else {
// //       updatedCart = [
// //         ...existingCart,
// //         {
// //           id: product.id,
// //           name: product.name,
// //           title: product.name,
// //           price: Number(product.price || 0),
// //           quantity: 1,
// //           images: product.images || [],
// //           image: product.images?.[0] || "",
// //           description: product.description || "",
// //           size: product.categories?.Size?.join(", ") || "",
// //         },
// //       ];
// //     }

// //     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
// //     alert("Added to cart");
// //   };

// //   const handleBuyNow = () => {
// //     navigate("/payment", {
// //       state: {
// //         cartItems: [
// //           {
// //             id: product.id,
// //             name: product.name,
// //             title: product.name,
// //             price: Number(product.price || 0),
// //             quantity: 1,
// //             images: product.images || [],
// //             image: product.images?.[0] || "",
// //             description: product.description || "",
// //             size: product.categories?.Size?.join(", ") || "",
// //           },
// //         ],
// //       },
// //     });
// //   };

// //   const policyFullText = [
// //     "Export Return Policy",
// //     "If an export customer requests cancellation before dispatch of the shipment, a return/cancellation charge of 5% of the invoice value will be deducted.",
// //     "Once the shipment has been dispatched from our end, cancellation or return may not be accepted.",
// //     "In case of unavoidable circumstances like wrong product, quality concerns, or damaged delivery, the company will review the request and decide at its sole discretion.",
// //     "International Shipping & Customs Delays",
// //     "Any delays, inspections, or holds by customs authorities are beyond the control of the company and shall not be considered the sole responsibility of the company.",
// //     "All international shipments are subject to customs clearance procedures of the destination country.",
// //     "All international duties and taxes are prepaid at checkout. No additional duties are expected at the time of delivery.",
// //     "Privacy Policy",
// //     "Customer details shared during checkout are used only for order processing, shipping, communication, and support.",
// //     "Your personal information will not be sold or misused and is handled with reasonable care in accordance with internal business practices.",
// //   ];

// //   const page = {
// //     width: "100%",
// //     minHeight: "100vh",
// //     background: "#f5f5f5",
// //     padding: "40px 50px",
// //     boxSizing: "border-box",
// //   };

// //   const container = {
// //     maxWidth: "1280px",
// //     margin: "0 auto",
// //     display: "grid",
// //     gridTemplateColumns: "1.1fr 1fr",
// //     gap: "22px",
// //     alignItems: "start",
// //   };

// //   const gallerySticky = {
// //     position: "sticky",
// //     top: "20px",
// //     display: "grid",
// //     gridTemplateColumns: "95px 1fr",
// //     gap: "22px",
// //     alignItems: "start",
// //   };

// //   const thumbsWrap = {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "14px",
// //     maxHeight: "calc(100vh - 40px)",
// //     overflowY: "auto",
// //   };

// //   const thumb = (active) => ({
// //     width: "78px",
// //     height: "95px",
// //     border: active ? "2px solid #111" : "1px solid #ddd",
// //     overflow: "hidden",
// //     cursor: "pointer",
// //     background: "#fff",
// //     boxSizing: "border-box",
// //     flexShrink: 0,
// //   });

// //   const thumbImg = {
// //     width: "100%",
// //     height: "100%",
// //     objectFit: "cover",
// //     display: "block",
// //   };

// //   const mainImageWrap = {
// //     width: "100%",
// //     background: "#fff",
// //     minHeight: "520px",
// //   };

// //   const mainImage = {
// //     width: "100%",
// //     display: "block",
// //     objectFit: "cover",
// //   };

// //   const details = {
// //     background: "#f5f5f5",
// //     padding: "6px 10px",
// //     boxSizing: "border-box",
// //   };

// //   const title = {
// //     fontSize: "24px",
// //     fontWeight: "500",
// //     letterSpacing: "0.5px",
// //     textTransform: "uppercase",
// //     marginBottom: "12px",
// //     color: "#111",
// //     fontFamily: "serif",
// //   };

// //   const price = {
// //     fontSize: "34px",
// //     color: "#8a8a8a",
// //     marginBottom: "6px",
// //     fontFamily: "serif",
// //   };

// //   const tax = {
// //     fontSize: "16px",
// //     color: "#333",
// //     marginBottom: "22px",
// //   };

// //   const divider = {
// //     border: "none",
// //     borderTop: "1px solid #cfa9dc",
// //     margin: "0 0 22px 0",
// //   };

// //   const button = {
// //     width: "100%",
// //     background: "#8a4aa2",
// //     color: "#fff",
// //     border: "none",
// //     padding: "18px 20px",
// //     fontSize: "15px",
// //     letterSpacing: "4px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     marginBottom: "14px",
// //   };

// //   const infoRow = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "10px",
// //     marginBottom: "10px",
// //     color: "#111",
// //     fontSize: "16px",
// //   };

// //   const sectionTitle = {
// //     fontWeight: "700",
// //     fontSize: "16px",
// //     marginTop: "24px",
// //     marginBottom: "8px",
// //     color: "#111",
// //   };

// //   const sectionText = {
// //     fontSize: "16px",
// //     lineHeight: "1.8",
// //     color: "#222",
// //   };

// //   const readToggle = {
// //     marginTop: "10px",
// //     background: "transparent",
// //     border: "none",
// //     padding: 0,
// //     color: "#ba93c8",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     textTransform: "uppercase",
// //     letterSpacing: "0.5px",
// //   };

// //   const policyBlock = {
// //     marginTop: "20px",
// //     marginBottom: "28px",
// //   };

// //   const policyHeading = {
// //     fontWeight: "700",
// //     fontSize: "16px",
// //     marginTop: "12px",
// //     marginBottom: "6px",
// //     color: "#111",
// //   };

// //   const policyText = {
// //     fontSize: "16px",
// //     lineHeight: "1.8",
// //     color: "#222",
// //     marginBottom: "2px",
// //   };

// //   const collapsedPolicy = {
// //     display: "-webkit-box",
// //     WebkitLineClamp: 2,
// //     WebkitBoxOrient: "vertical",
// //     overflow: "hidden",
// //   };

// //   const accordionWrapper = {
// //     marginTop: "26px",
// //     border: "1px solid #cfa9dc",
// //     background: "#fff",
// //   };

// //   const accordionHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     cursor: "pointer",
// //     padding: "18px 22px",
// //     letterSpacing: "4px",
// //     fontSize: "14px",
// //     color: "#333",
// //     fontWeight: "500",
// //   };

// //   const accordionDivider = {
// //     borderTop: "1px solid #e8dff0",
// //   };

// //   const accordionContent = {
// //     padding: "18px 22px 22px",
// //     fontSize: "16px",
// //     lineHeight: "1.8",
// //     color: "#222",
// //     borderTop: "1px solid #e8dff0",
// //   };

// //   const bulletList = {
// //     marginTop: "14px",
// //     paddingLeft: "22px",
// //   };

// //   const bulletItem = {
// //     marginBottom: "4px",
// //   };

// //   return (
// //     <div style={page}>
// //       <div style={container}>
// //         <div style={gallerySticky}>
// //           <div style={thumbsWrap}>
// //             {imageList.map((img, index) => (
// //               <div
// //                 key={index}
// //                 style={thumb(selectedImage === img)}
// //                 onClick={() => setSelectedImage(img)}
// //               >
// //                 <img
// //                   src={img}
// //                   alt={`${product.name}-${index + 1}`}
// //                   style={thumbImg}
// //                 />
// //               </div>
// //             ))}
// //           </div>

// //           <div style={mainImageWrap}>
// //             {imageList.length > 0 && (
// //               <img
// //                 src={selectedImage || imageList[0]}
// //                 alt={product.name}
// //                 style={mainImage}
// //               />
// //             )}
// //           </div>
// //         </div>

// //         <div style={details}>
// //           <div style={title}>{product.name}</div>

// //           <div style={price}>{formatINR(product.price)}</div>
// //           <div style={tax}>Tax included. Shipping calculated at checkout.</div>

// //           <hr style={divider} />

// //           <button style={button} onClick={handleBuyNow}>
// //             BUY NOW
// //           </button>

// //           <button style={button} onClick={handleAddToCart}>
// //             ADD TO CART
// //           </button>

// //           <div style={infoRow}>
// //             <FiTruck />
// //             <span>Free Shipping Across India</span>
// //           </div>

// //           <div style={infoRow}>
// //             <TbWorld />
// //             <span>Worldwide : Free Insurance & Shipping</span>
// //           </div>

// //           <div style={policyBlock}>
// //             <div style={!showFullPolicy ? collapsedPolicy : {}}>
// //               {policyFullText.map((line, index) => {
// //                 const isHeading =
// //                   line === "Export Return Policy" ||
// //                   line === "International Shipping & Customs Delays" ||
// //                   line === "Privacy Policy";

// //                 return (
// //                   <div
// //                     key={index}
// //                     style={isHeading ? policyHeading : policyText}
// //                   >
// //                     {line}
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             <button
// //               type="button"
// //               style={readToggle}
// //               onClick={() => setShowFullPolicy((prev) => !prev)}
// //             >
// //               {showFullPolicy ? "READ LESS" : "READ MORE"}
// //             </button>
// //           </div>

// //           <div style={sectionTitle}>Description</div>
// //           <div style={sectionText}>
// //             {product.description || "No description available."}
// //           </div>

// //           <div style={accordionWrapper}>
// //             <div
// //               style={accordionHeader}
// //               onClick={() => setCareOpen((prev) => !prev)}
// //             >
// //               <span>JEWELLERY CARE</span>
// //               {careOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
// //             </div>

// //             {careOpen && (
// //               <div style={accordionContent}>
// //                 <div>
// //                   Silver jewels have a soft luster, and so they can get
// //                   tarnished easily if not taken care of. Follow these simple
// //                   steps to care for your jewellery just like how you care for
// //                   yourself :)
// //                 </div>

// //                 <ul style={bulletList}>
// //                   <li style={bulletItem}>Do not wear when sweating.</li>
// //                   <li style={bulletItem}>
// //                     Avoid perfume, lotion or sunscreen after wearing the jewel.
// //                   </li>
// //                   <li style={bulletItem}>Do not wear when washing.</li>
// //                   <li style={bulletItem}>Avoid collide, grind or fire.</li>
// //                   <li style={bulletItem}>Do not wear when sleeping.</li>
// //                   <li style={bulletItem}>
// //                     Put inside a plastic box when not in use. Avoid velvet box.
// //                   </li>
// //                   <li style={bulletItem}>Do not clean with chemicals.</li>
// //                   <li style={bulletItem}>Use soft cloth to clean.</li>
// //                 </ul>
// //               </div>
// //             )}

// //             <div style={accordionDivider}></div>

// //             <div
// //               style={accordionHeader}
// //               onClick={() => setDisclaimerOpen((prev) => !prev)}
// //             >
// //               <span>JEWELLERY DISCLAIMER</span>
// //               {disclaimerOpen ? (
// //                 <IoChevronUp size={20} />
// //               ) : (
// //                 <IoChevronDown size={20} />
// //               )}
// //             </div>

// //             {disclaimerOpen && (
// //               <div style={accordionContent}>
// //                 Each piece is lovingly crafted and is one of a kind! The
// //                 handcrafted products may have slight irregularities or
// //                 imperfections. These irregularities are the result of human
// //                 involvement in the process, and they add charm to the finished
// //                 products while ensuring you have a one of a kind piece.
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState, useMemo, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function MainPage() {
//   const navigate = useNavigate();
//   const [sortKey, setSortKey] = useState("featured");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const loadProducts = () => {
//       const storedProducts = JSON.parse(
//         localStorage.getItem("adminProducts") || "[]"
//       );

//       const normalized = storedProducts.map((product) => ({
//         ...product,
//         id: product.id,
//         name: product.name || "",
//         price: Number(product.totalPrice || product.price || 0),
//         stock: Number(product.stock || 0),
//         images: Array.isArray(product.images) ? product.images : [],
//         createdAt: product.createdAt || "",
//       }));

//       setProducts(normalized);
//     };

//     loadProducts();

//     window.addEventListener("storage", loadProducts);
//     window.addEventListener("adminProductsUpdated", loadProducts);

//     return () => {
//       window.removeEventListener("storage", loadProducts);
//       window.removeEventListener("adminProductsUpdated", loadProducts);
//     };
//   }, []);

//   const sortedProducts = useMemo(() => {
//     const arr = [...products];

//     switch (sortKey) {
//       case "priceLow":
//         arr.sort((a, b) => a.price - b.price);
//         break;

//       case "priceHigh":
//         arr.sort((a, b) => b.price - a.price);
//         break;

//       case "az":
//         arr.sort((a, b) => a.name.localeCompare(b.name));
//         break;

//       case "za":
//         arr.sort((a, b) => b.name.localeCompare(a.name));
//         break;

//       case "old":
//         arr.sort(
//           (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
//         );
//         break;

//       case "new":
//         arr.sort(
//           (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
//         );
//         break;

//       default:
//         break;
//     }

//     return arr;
//   }, [products, sortKey]);

//   const wrapper = {
//     flex: 1,
//     padding: "20px 24px",
//     boxSizing: "border-box",
//     background: "#fff",
//   };

//   const topBar = {
//     display: "flex",
//     justifyContent: "flex-end",
//     marginBottom: "20px",
//   };

//   const sortBox = {
//     border: "1px solid #000",
//     padding: "10px 16px",
//     fontSize: "14px",
//     cursor: "pointer",
//     minWidth: "220px",
//     background: "#fff",
//   };

//   const grid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "28px 24px",
//   };

//   const card = {
//     textAlign: "center",
//     cursor: "pointer",
//   };

//   const imageWrap = {
//     width: "100%",
//     aspectRatio: "1 / 1",
//     background: "#f5f5f5",
//     overflow: "hidden",
//     marginBottom: "12px",
//     position: "relative",
//   };

//   const image = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   const name = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "6px",
//   };

//   const price = {
//     fontSize: "15px",
//     color: "#666",
//   };

//   const emptyState = {
//     fontSize: "16px",
//     color: "#666",
//     padding: "40px 0",
//   };

//   const outOfStockTag = {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     background: "#b33939",
//     color: "#fff",
//     padding: "6px 10px",
//     borderRadius: "6px",
//     fontSize: "12px",
//     fontWeight: "700",
//   };

//   return (
//     <div style={wrapper}>
//       <div style={topBar}>
//         <select
//           style={sortBox}
//           value={sortKey}
//           onChange={(e) => setSortKey(e.target.value)}
//         >
//           <option value="featured">Featured</option>
//           <option value="az">Alphabetically, A-Z</option>
//           <option value="za">Alphabetically, Z-A</option>
//           <option value="priceLow">Price, low to high</option>
//           <option value="priceHigh">Price, high to low</option>
//           <option value="old">Date, old to new</option>
//           <option value="new">Date, new to old</option>
//         </select>
//       </div>

//       {sortedProducts.length === 0 ? (
//         <div style={emptyState}>No products found.</div>
//       ) : (
//         <div style={grid}>
//           {sortedProducts.map((product) => (
//             <div
//               key={product.id}
//               style={card}
//               onClick={() =>
//                 navigate(`/product/${product.id}`, { state: product })
//               }
//             >
//               <div style={imageWrap}>
//                 {product.images.length > 0 && (
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     style={image}
//                   />
//                 )}

//                 {product.stock === 0 && (
//                   <div style={outOfStockTag}>Out of Stock</div>
//                 )}
//               </div>

//               <div style={name}>{product.name}</div>
//               <div style={price}>{formatINR(product.price)}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function MainPage() {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState("featured");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = () => {
      const storedProducts = JSON.parse(
        localStorage.getItem("adminProducts") || "[]"
      );

      const normalized = storedProducts.map((product) => ({
        ...product,
        id: product.id,
        name: product.name || "",
        price: Number(product.totalPrice || product.price || 0),
        stock: Number(product.stock || 0),
        images: Array.isArray(product.images) ? product.images : [],
        createdAt: product.createdAt || "",
      }));

      setProducts(normalized);
    };

    loadProducts();

    window.addEventListener("storage", loadProducts);
    window.addEventListener("adminProductsUpdated", loadProducts);

    return () => {
      window.removeEventListener("storage", loadProducts);
      window.removeEventListener("adminProductsUpdated", loadProducts);
    };
  }, []);

  const sortedProducts = useMemo(() => {
    const arr = [...products];

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
  }, [products, sortKey]);

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
    position: "relative",
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

  const outOfStockTag = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#b33939",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "700",
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

                {product.stock === 0 && (
                  <div style={outOfStockTag}>Out of Stock</div>
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