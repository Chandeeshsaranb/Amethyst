// import React, { useMemo, useState } from "react";
// import { useParams } from "react-router-dom";
// import { PRODUCTS } from "../Data/Products";
// import { FiTruck } from "react-icons/fi";
// import { TbWorld } from "react-icons/tb";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function ProductDetails() {
//   const { slug } = useParams();

//   const product = useMemo(
//     () => PRODUCTS.find((item) => item.slug === slug),
//     [slug]
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

//   if (!product) {
//     return (
//       <div style={{ padding: "40px", fontSize: "18px" }}>
//         Product not found.
//       </div>
//     );
//   }

//   const page = {
//     width: "100%",
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     padding: "40px 50px",
//     boxSizing: "border-box",
//   };

//   const container = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "80px 1.1fr 1fr",
//     gap: "28px",
//     alignItems: "start",
//   };

//   const thumbsWrap = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   };

//   const thumb = (active) => ({
//     width: "64px",
//     height: "64px",
//     border: active ? "2px solid #222" : "1px solid #ddd",
//     overflow: "hidden",
//     cursor: "pointer",
//     background: "#fff",
//   });

//   const thumbImg = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   const mainImageWrap = {
//     width: "100%",
//     background: "#fff",
//   };

//   const mainImage = {
//     width: "100%",
//     display: "block",
//     objectFit: "cover",
//   };

//   const details = {
//     background: "#f5f5f5",
//     padding: "6px 10px",
//     boxSizing: "border-box",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     textTransform: "uppercase",
//     marginBottom: "10px",
//     color: "#111",
//     fontFamily: "serif",
//   };

//   const sku = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "20px",
//   };

//   const price = {
//     fontSize: "34px",
//     color: "#8a8a8a",
//     marginBottom: "2px",
//     fontFamily: "serif",
//   };

//   const tax = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "22px",
//   };

//   const divider = {
//     border: "none",
//     borderTop: "1px solid #cfa9dc",
//     margin: "0 0 22px 0",
//   };

//   const button = {
//     width: "100%",
//     background: "#8a4aa2",
//     color: "#fff",
//     border: "none",
//     padding: "18px 20px",
//     fontSize: "15px",
//     letterSpacing: "4px",
//     fontWeight: "700",
//     cursor: "pointer",
//     marginBottom: "22px",
//   };

//   const infoRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     color: "#111",
//     fontSize: "16px",
//   };

//   const sectionTitle = {
//     fontWeight: "700",
//     fontSize: "16px",
//     marginTop: "24px",
//     marginBottom: "8px",
//     color: "#111",
//   };

//   const sectionText = {
//     fontSize: "16px",
//     lineHeight: "1.8",
//     color: "#222",
//   };

//   const readMore = {
//     fontSize: "16px",
//     color: "#c6a4d3",
//     marginTop: "12px",
//     marginBottom: "24px",
//     cursor: "pointer",
//     textTransform: "uppercase",
//   };

//   return (
//     <div style={page}>
//       <div style={container}>
//         <div style={thumbsWrap}>
//           {product.images.map((img, index) => (
//             <div
//               key={index}
//               style={thumb(selectedImage === img)}
//               onClick={() => setSelectedImage(img)}
//             >
//               <img src={img} alt={product.name} style={thumbImg} />
//             </div>
//           ))}
//         </div>

//         <div style={mainImageWrap}>
//           <img src={selectedImage} alt={product.name} style={mainImage} />
//         </div>

//         <div style={details}>
//           <div style={title}>{product.name}</div>
//           <div style={sku}>{product.sku}</div>

//           <div style={price}>{formatINR(product.price)}</div>
//           <div style={tax}>Tax included. Shipping calculated at checkout.</div>

//           <hr style={divider} />

//           <button style={button}>ADD TO CART</button>

//           <div style={infoRow}>
//             <FiTruck />
//             <span>Free Shipping Across India</span>
//           </div>

//           <div style={infoRow}>
//             <TbWorld />
//             <span>Worldwide : Free Insurance & Shipping</span>
//           </div>

//           <div style={sectionTitle}>Export Return Policy</div>
//           <div style={sectionText}>
//             If an export customer requests cancellation before dispatch of the shipment, a return may be considered as per policy.
//           </div>

//           <div style={readMore}>READ MORE</div>

//           <div style={sectionTitle}>Description</div>
//           <div style={sectionText}>{product.description}</div>

//           <div style={{ ...sectionText, marginTop: "10px" }}>
//             Size : {product.size}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useMemo, useState } from "react";
// import { useParams } from "react-router-dom";
// import { PRODUCTS } from "../Data/Products";
// import { FiTruck } from "react-icons/fi";
// import { TbWorld } from "react-icons/tb";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function ProductDetails() {
//   const { slug } = useParams();

//   const product = useMemo(
//     () => PRODUCTS.find((item) => item.slug === slug),
//     [slug]
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

//   if (!product) {
//     return (
//       <div style={{ padding: "40px", fontSize: "18px" }}>
//         Product not found.
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingItem = existingCart.find((item) => item.id === product.id);

//     let updatedCart;

//     if (existingItem) {
//       updatedCart = existingCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...existingCart,
//         {
//           id: product.id,
//           name: product.name,
//           slug: product.slug,
//           price: product.price,
//           quantity: 1,
//           image: product.images?.[0] || "",
//         },
//       ];
//     }

//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     alert("Added to cart");
//   };

//   const page = {
//     width: "100%",
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     padding: "40px 50px",
//     boxSizing: "border-box",
//   };

//   const container = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "80px 1.1fr 1fr",
//     gap: "28px",
//     alignItems: "start",
//   };

//   const thumbsWrap = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   };

//   const thumb = (active) => ({
//     width: "64px",
//     height: "64px",
//     border: active ? "2px solid #222" : "1px solid #ddd",
//     overflow: "hidden",
//     cursor: "pointer",
//     background: "#fff",
//   });

//   const thumbImg = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   const mainImageWrap = {
//     width: "100%",
//     background: "#fff",
//   };

//   const mainImage = {
//     width: "100%",
//     display: "block",
//     objectFit: "cover",
//   };

//   const details = {
//     background: "#f5f5f5",
//     padding: "6px 10px",
//     boxSizing: "border-box",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     textTransform: "uppercase",
//     marginBottom: "10px",
//     color: "#111",
//     fontFamily: "serif",
//   };

//   const sku = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "20px",
//   };

//   const price = {
//     fontSize: "34px",
//     color: "#8a8a8a",
//     marginBottom: "2px",
//     fontFamily: "serif",
//   };

//   const tax = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "22px",
//   };

//   const divider = {
//     border: "none",
//     borderTop: "1px solid #cfa9dc",
//     margin: "0 0 22px 0",
//   };

//   const button = {
//     width: "100%",
//     background: "#8a4aa2",
//     color: "#fff",
//     border: "none",
//     padding: "18px 20px",
//     fontSize: "15px",
//     letterSpacing: "4px",
//     fontWeight: "700",
//     cursor: "pointer",
//     marginBottom: "22px",
//   };

//   const infoRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     color: "#111",
//     fontSize: "16px",
//   };

//   const sectionTitle = {
//     fontWeight: "700",
//     fontSize: "16px",
//     marginTop: "24px",
//     marginBottom: "8px",
//     color: "#111",
//   };

//   const sectionText = {
//     fontSize: "16px",
//     lineHeight: "1.8",
//     color: "#222",
//   };

//   const readMore = {
//     fontSize: "16px",
//     color: "#c6a4d3",
//     marginTop: "12px",
//     marginBottom: "24px",
//     cursor: "pointer",
//     textTransform: "uppercase",
//   };

//   return (
//     <div style={page}>
//       <div style={container}>
//         <div style={thumbsWrap}>
//           {product.images.map((img, index) => (
//             <div
//               key={index}
//               style={thumb(selectedImage === img)}
//               onClick={() => setSelectedImage(img)}
//             >
//               <img src={img} alt={product.name} style={thumbImg} />
//             </div>
//           ))}
//         </div>

//         <div style={mainImageWrap}>
//           <img src={selectedImage} alt={product.name} style={mainImage} />
//         </div>

//         <div style={details}>
//           <div style={title}>{product.name}</div>
//           <div style={sku}>{product.sku}</div>

//           <div style={price}>{formatINR(product.price)}</div>
//           <div style={tax}>Tax included. Shipping calculated at checkout.</div>

//           <hr style={divider} />

//           <button style={button} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <div style={infoRow}>
//             <FiTruck />
//             <span>Free Shipping Across India</span>
//           </div>

//           <div style={infoRow}>
//             <TbWorld />
//             <span>Worldwide : Free Insurance & Shipping</span>
//           </div>

//           <div style={sectionTitle}>Export Return Policy</div>
//           <div style={sectionText}>
//             If an export customer requests cancellation before dispatch of the
//             shipment, a return may be considered as per policy.
//           </div>

//           <div style={readMore}>READ MORE</div>

//           <div style={sectionTitle}>Description</div>
//           <div style={sectionText}>{product.description}</div>

//           <div style={{ ...sectionText, marginTop: "10px" }}>
//             Size : {product.size}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { PRODUCTS } from "../Data/Products";
// import { FiTruck } from "react-icons/fi";
// import { TbWorld } from "react-icons/tb";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function ProductDetails() {
//   const { slug } = useParams();

//   const product = useMemo(
//     () => PRODUCTS.find((item) => item.slug === slug),
//     [slug]
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

//   if (!product) {
//     return (
//       <div style={{ padding: "40px", fontSize: "18px" }}>
//         Product not found.
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingItem = existingCart.find((item) => item.id === product.id);

//     let updatedCart;

//     if (existingItem) {
//       updatedCart = existingCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...existingCart,
//         {
//           id: product.id,
//           name: product.name,
//           slug: product.slug,
//           price: product.price,
//           quantity: 1,
//           image: product.images?.[0] || "",
//         },
//       ];
//     }

//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     alert("Added to cart");
//   };

//   const page = {
//     width: "100%",
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     padding: "40px 50px",
//     boxSizing: "border-box",
//   };

//   const container = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "80px 1.1fr 1fr",
//     gap: "28px",
//     alignItems: "start",
//   };

//   const thumbsWrap = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   };

//   const thumb = (active) => ({
//     width: "64px",
//     height: "64px",
//     border: active ? "2px solid #222" : "1px solid #ddd",
//     overflow: "hidden",
//     cursor: "pointer",
//     background: "#fff",
//   });

//   const thumbImg = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   const mainImageWrap = {
//     width: "100%",
//     background: "#fff",
//   };

//   const mainImage = {
//     width: "100%",
//     display: "block",
//     objectFit: "cover",
//   };

//   const details = {
//     background: "#f5f5f5",
//     padding: "6px 10px",
//     boxSizing: "border-box",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     textTransform: "uppercase",
//     marginBottom: "10px",
//     color: "#111",
//     fontFamily: "serif",
//   };

//   const sku = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "20px",
//   };

//   const price = {
//     fontSize: "34px",
//     color: "#8a8a8a",
//     marginBottom: "2px",
//     fontFamily: "serif",
//   };

//   const tax = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "22px",
//   };

//   const divider = {
//     border: "none",
//     borderTop: "1px solid #cfa9dc",
//     margin: "0 0 22px 0",
//   };

//   const buyNowButton = {
//     width: "100%",
//     background: "#b884c9",
//     color: "#fff",
//     border: "none",
//     padding: "18px 20px",
//     fontSize: "15px",
//     letterSpacing: "4px",
//     fontWeight: "700",
//     cursor: "pointer",
//     marginBottom: "14px",
//     textAlign: "center",
//     textDecoration: "none",
//     display: "block",
//     boxSizing: "border-box",
//   };

//   const button = {
//     width: "100%",
//     background: "#8a4aa2",
//     color: "#fff",
//     border: "none",
//     padding: "18px 20px",
//     fontSize: "15px",
//     letterSpacing: "4px",
//     fontWeight: "700",
//     cursor: "pointer",
//     marginBottom: "22px",
//   };

//   const infoRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     color: "#111",
//     fontSize: "16px",
//   };

//   const sectionTitle = {
//     fontWeight: "700",
//     fontSize: "16px",
//     marginTop: "24px",
//     marginBottom: "8px",
//     color: "#111",
//   };

//   const sectionText = {
//     fontSize: "16px",
//     lineHeight: "1.8",
//     color: "#222",
//   };

//   const readMore = {
//     fontSize: "16px",
//     color: "#c6a4d3",
//     marginTop: "12px",
//     marginBottom: "24px",
//     cursor: "pointer",
//     textTransform: "uppercase",
//   };

//   return (
//     <div style={page}>
//       <div style={container}>
//         <div style={thumbsWrap}>
//           {product.images.map((img, index) => (
//             <div
//               key={index}
//               style={thumb(selectedImage === img)}
//               onClick={() => setSelectedImage(img)}
//             >
//               <img src={img} alt={product.name} style={thumbImg} />
//             </div>
//           ))}
//         </div>

//         <div style={mainImageWrap}>
//           <img src={selectedImage} alt={product.name} style={mainImage} />
//         </div>

//         <div style={details}>
//           <div style={title}>{product.name}</div>
//           <div style={sku}>{product.sku}</div>

//           <div style={price}>{formatINR(product.price)}</div>
//           <div style={tax}>Tax included. Shipping calculated at checkout.</div>

//           <hr style={divider} />

//           <Link to="#" style={buyNowButton}>
//             BUY NOW
//           </Link>

//           <button style={button} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <div style={infoRow}>
//             <FiTruck />
//             <span>Free Shipping Across India</span>
//           </div>

//           <div style={infoRow}>
//             <TbWorld />
//             <span>Worldwide : Free Insurance & Shipping</span>
//           </div>

//           <div style={sectionTitle}>Export Return Policy</div>
//           <div style={sectionText}>
//             If an export customer requests cancellation before dispatch of the
//             shipment, a return may be considered as per policy.
//           </div>

//           <div style={readMore}>READ MORE</div>

//           <div style={sectionTitle}>Description</div>
//           <div style={sectionText}>{product.description}</div>

//           <div style={{ ...sectionText, marginTop: "10px" }}>
//             Size : {product.size}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { PRODUCTS } from "../Data/Products";
// import { FiTruck } from "react-icons/fi";
// import { TbWorld } from "react-icons/tb";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function ProductDetails() {
//   const { slug } = useParams();

//   const product = useMemo(
//     () => PRODUCTS.find((item) => item.slug === slug),
//     [slug]
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

//   if (!product) {
//     return (
//       <div style={{ padding: "40px", fontSize: "18px" }}>
//         Product not found.
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingItem = existingCart.find((item) => item.id === product.id);

//     let updatedCart;

//     if (existingItem) {
//       updatedCart = existingCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...existingCart,
//         {
//           id: product.id,
//           name: product.name,
//           slug: product.slug,
//           price: product.price,
//           quantity: 1,
//           image: product.images?.[0] || "",
//         },
//       ];
//     }

//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     alert("Added to cart");
//   };

//   const page = {
//     width: "100%",
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     padding: "40px 50px",
//     boxSizing: "border-box",
//   };

//   const container = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "80px 1.1fr 1fr",
//     gap: "28px",
//     alignItems: "start",
//   };

//   const thumbsWrap = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   };

//   const thumb = (active) => ({
//     width: "64px",
//     height: "64px",
//     border: active ? "2px solid #222" : "1px solid #ddd",
//     overflow: "hidden",
//     cursor: "pointer",
//     background: "#fff",
//   });

//   const thumbImg = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   const mainImageWrap = {
//     width: "100%",
//     background: "#fff",
//   };

//   const mainImage = {
//     width: "100%",
//     display: "block",
//     objectFit: "cover",
//   };

//   const details = {
//     background: "#f5f5f5",
//     padding: "6px 10px",
//     boxSizing: "border-box",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     textTransform: "uppercase",
//     marginBottom: "10px",
//     color: "#111",
//     fontFamily: "serif",
//   };

//   const sku = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "20px",
//   };

//   const price = {
//     fontSize: "34px",
//     color: "#8a8a8a",
//     marginBottom: "2px",
//     fontFamily: "serif",
//   };

//   const tax = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "22px",
//   };

//   const divider = {
//     border: "none",
//     borderTop: "1px solid #cfa9dc",
//     margin: "0 0 22px 0",
//   };

//   const button = {
//     width: "100%",
//     background: "#8a4aa2",
//     color: "#fff",
//     border: "none",
//     padding: "18px 20px",
//     fontSize: "15px",
//     letterSpacing: "4px",
//     fontWeight: "700",
//     cursor: "pointer",
//     marginBottom: "14px",
//   };

//   const infoRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     color: "#111",
//     fontSize: "16px",
//   };

//   const sectionTitle = {
//     fontWeight: "700",
//     fontSize: "16px",
//     marginTop: "24px",
//     marginBottom: "8px",
//     color: "#111",
//   };

//   const sectionText = {
//     fontSize: "16px",
//     lineHeight: "1.8",
//     color: "#222",
//   };

//   const readMore = {
//     fontSize: "16px",
//     color: "#c6a4d3",
//     marginTop: "12px",
//     marginBottom: "24px",
//     cursor: "pointer",
//     textTransform: "uppercase",
//   };

//   return (
//     <div style={page}>
//       <div style={container}>
//         <div style={thumbsWrap}>
//           {product.images.map((img, index) => (
//             <div
//               key={index}
//               style={thumb(selectedImage === img)}
//               onClick={() => setSelectedImage(img)}
//             >
//               <img src={img} alt={product.name} style={thumbImg} />
//             </div>
//           ))}
//         </div>

//         <div style={mainImageWrap}>
//           <img src={selectedImage} alt={product.name} style={mainImage} />
//         </div>

//         <div style={details}>
//           <div style={title}>{product.name}</div>
//           <div style={sku}>{product.sku}</div>

//           <div style={price}>{formatINR(product.price)}</div>
//           <div style={tax}>Tax included. Shipping calculated at checkout.</div>

//           <hr style={divider} />

//           <button
//             style={button}
//             onClick={() => {
//               window.location.href = "#";
//             }}
//           >
//             BUY NOW
//           </button>

//           <button style={button} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <div style={infoRow}>
//             <FiTruck />
//             <span>Free Shipping Across India</span>
//           </div>

//           <div style={infoRow}>
//             <TbWorld />
//             <span>Worldwide : Free Insurance & Shipping</span>
//           </div>

//           <div style={sectionTitle}>Export Return Policy</div>
//           <div style={sectionText}>
//             If an export customer requests cancellation before dispatch of the
//             shipment, a return may be considered as per policy.
//           </div>

//           <div style={readMore}>READ MORE</div>

//           <div style={sectionTitle}>Description</div>
//           <div style={sectionText}>{product.description}</div>

//           <div style={{ ...sectionText, marginTop: "10px" }}>
//             Size : {product.size}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useMemo, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { PRODUCTS } from "../Data/Products";
// import { FiTruck } from "react-icons/fi";
// import { TbWorld } from "react-icons/tb";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function ProductDetails() {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const product = useMemo(
//     () => PRODUCTS.find((item) => item.slug === slug),
//     [slug]
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

//   if (!product) {
//     return (
//       <div style={{ padding: "40px", fontSize: "18px" }}>
//         Product not found.
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingItem = existingCart.find((item) => item.id === product.id);

//     let updatedCart;

//     if (existingItem) {
//       updatedCart = existingCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...existingCart,
//         {
//           id: product.id,
//           name: product.name,
//           title: product.name,
//           slug: product.slug,
//           price: product.price,
//           quantity: 1,
//           image: product.images?.[0] || "",
//           images: product.images || [],
//           description: product.description || "",
//           size: product.size || "",
//           sku: product.sku || "",
//         },
//       ];
//     }

//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     alert("Added to cart");
//   };

//   const handleBuyNow = () => {
//     navigate("/payment", {
//       state: {
//         cartItems: [
//           {
//             id: product.id,
//             name: product.name,
//             title: product.name,
//             slug: product.slug,
//             price: product.price,
//             quantity: 1,
//             image: product.images?.[0] || "",
//             images: product.images || [],
//             description: product.description || "",
//             size: product.size || "",
//             sku: product.sku || "",
//           },
//         ],
//       },
//     });
//   };

//   const page = {
//     width: "100%",
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     padding: "40px 50px",
//     boxSizing: "border-box",
//   };

//   const container = {
//     maxWidth: "1280px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "80px 1.1fr 1fr",
//     gap: "28px",
//     alignItems: "start",
//   };

//   const thumbsWrap = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   };

//   const thumb = (active) => ({
//     width: "64px",
//     height: "64px",
//     border: active ? "2px solid #222" : "1px solid #ddd",
//     overflow: "hidden",
//     cursor: "pointer",
//     background: "#fff",
//   });

//   const thumbImg = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   };

//   const mainImageWrap = {
//     width: "100%",
//     background: "#fff",
//   };

//   const mainImage = {
//     width: "100%",
//     display: "block",
//     objectFit: "cover",
//   };

//   const details = {
//     background: "#f5f5f5",
//     padding: "6px 10px",
//     boxSizing: "border-box",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     textTransform: "uppercase",
//     marginBottom: "10px",
//     color: "#111",
//     fontFamily: "serif",
//   };

//   const sku = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "20px",
//   };

//   const price = {
//     fontSize: "34px",
//     color: "#8a8a8a",
//     marginBottom: "2px",
//     fontFamily: "serif",
//   };

//   const tax = {
//     fontSize: "16px",
//     color: "#333",
//     marginBottom: "22px",
//   };

//   const divider = {
//     border: "none",
//     borderTop: "1px solid #cfa9dc",
//     margin: "0 0 22px 0",
//   };

//   const button = {
//     width: "100%",
//     background: "#8a4aa2",
//     color: "#fff",
//     border: "none",
//     padding: "18px 20px",
//     fontSize: "15px",
//     letterSpacing: "4px",
//     fontWeight: "700",
//     cursor: "pointer",
//     marginBottom: "14px",
//   };

//   const infoRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     color: "#111",
//     fontSize: "16px",
//   };

//   const sectionTitle = {
//     fontWeight: "700",
//     fontSize: "16px",
//     marginTop: "24px",
//     marginBottom: "8px",
//     color: "#111",
//   };

//   const sectionText = {
//     fontSize: "16px",
//     lineHeight: "1.8",
//     color: "#222",
//   };

//   const readMore = {
//     fontSize: "16px",
//     color: "#c6a4d3",
//     marginTop: "12px",
//     marginBottom: "24px",
//     cursor: "pointer",
//     textTransform: "uppercase",
//   };

//   return (
//     <div style={page}>
//       <div style={container}>
//         <div style={thumbsWrap}>
//           {product.images.map((img, index) => (
//             <div
//               key={index}
//               style={thumb(selectedImage === img)}
//               onClick={() => setSelectedImage(img)}
//             >
//               <img src={img} alt={product.name} style={thumbImg} />
//             </div>
//           ))}
//         </div>

//         <div style={mainImageWrap}>
//           <img src={selectedImage} alt={product.name} style={mainImage} />
//         </div>

//         <div style={details}>
//           <div style={title}>{product.name}</div>
//           <div style={sku}>{product.sku}</div>

//           <div style={price}>{formatINR(product.price)}</div>
//           <div style={tax}>Tax included. Shipping calculated at checkout.</div>

//           <hr style={divider} />

//           <button style={button} onClick={handleBuyNow}>
//             BUY NOW
//           </button>

//           <button style={button} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <div style={infoRow}>
//             <FiTruck />
//             <span>Free Shipping Across India</span>
//           </div>

//           <div style={infoRow}>
//             <TbWorld />
//             <span>Worldwide : Free Insurance & Shipping</span>
//           </div>

//           <div style={sectionTitle}>Export Return Policy</div>
//           <div style={sectionText}>
//             If an export customer requests cancellation before dispatch of the
//             shipment, a return may be considered as per policy.
//           </div>

//           <div style={readMore}>READ MORE</div>

//           <div style={sectionTitle}>Description</div>
//           <div style={sectionText}>{product.description}</div>

//           <div style={{ ...sectionText, marginTop: "10px" }}>
//             Size : {product.size}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const product = useMemo(() => {
    if (location.state) {
      return location.state;
    }

    const storedProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    const found = storedProducts.find(
      (item) => String(item.id) === String(id)
    );

    if (!found) return null;

    return {
      id: found.id,
      name: found.productName || "",
      price: Number(found.productPrice || 0),
      description: found.productDescription || "",
      image: found.image || "",
      createdAt: found.createdAt || "",
      productTypes: found.categories?.["Product Type"] || [],
      occasions: found.categories?.Occasions || [],
      finishDesign: found.categories?.["Finish and Design"] || [],
      jewelTypes: found.categories?.["Jewel Type"] || [],
      sizes: found.categories?.Size || [],
    };
  }, [id, location.state]);

  const imageList = product?.image ? [product.image] : [];
  const [selectedImage, setSelectedImage] = useState(
    product?.image || ""
  );

  if (!product) {
    return (
      <div style={{ padding: "40px", fontSize: "18px" }}>
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = existingCart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: product.id,
          name: product.name,
          title: product.name,
          price: product.price,
          quantity: 1,
          image: product.image || "",
          description: product.description || "",
          size: product.sizes?.join(", ") || "",
        },
      ];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert("Added to cart");
  };

  const handleBuyNow = () => {
    navigate("/payment", {
      state: {
        cartItems: [
          {
            id: product.id,
            name: product.name,
            title: product.name,
            price: product.price,
            quantity: 1,
            image: product.image || "",
            description: product.description || "",
            size: product.sizes?.join(", ") || "",
          },
        ],
      },
    });
  };

  const page = {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "40px 50px",
    boxSizing: "border-box",
  };

  const container = {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "80px 1.1fr 1fr",
    gap: "28px",
    alignItems: "start",
  };

  const thumbsWrap = {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  };

  const thumb = (active) => ({
    width: "64px",
    height: "64px",
    border: active ? "2px solid #222" : "1px solid #ddd",
    overflow: "hidden",
    cursor: "pointer",
    background: "#fff",
  });

  const thumbImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const mainImageWrap = {
    width: "100%",
    background: "#fff",
  };

  const mainImage = {
    width: "100%",
    display: "block",
    objectFit: "cover",
  };

  const details = {
    background: "#f5f5f5",
    padding: "6px 10px",
    boxSizing: "border-box",
  };

  const title = {
    fontSize: "24px",
    fontWeight: "500",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    marginBottom: "12px",
    color: "#111",
    fontFamily: "serif",
  };

  const price = {
    fontSize: "34px",
    color: "#8a8a8a",
    marginBottom: "6px",
    fontFamily: "serif",
  };

  const tax = {
    fontSize: "16px",
    color: "#333",
    marginBottom: "22px",
  };

  const divider = {
    border: "none",
    borderTop: "1px solid #cfa9dc",
    margin: "0 0 22px 0",
  };

  const button = {
    width: "100%",
    background: "#8a4aa2",
    color: "#fff",
    border: "none",
    padding: "18px 20px",
    fontSize: "15px",
    letterSpacing: "4px",
    fontWeight: "700",
    cursor: "pointer",
    marginBottom: "14px",
  };

  const infoRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    color: "#111",
    fontSize: "16px",
  };

  const sectionTitle = {
    fontWeight: "700",
    fontSize: "16px",
    marginTop: "24px",
    marginBottom: "8px",
    color: "#111",
  };

  const sectionText = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#222",
  };

  const detailLine = {
    ...sectionText,
    marginTop: "8px",
  };

  return (
    <div style={page}>
      <div style={container}>
        <div style={thumbsWrap}>
          {imageList.map((img, index) => (
            <div
              key={index}
              style={thumb(selectedImage === img)}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={product.name} style={thumbImg} />
            </div>
          ))}
        </div>

        <div style={mainImageWrap}>
          <img src={selectedImage} alt={product.name} style={mainImage} />
        </div>

        <div style={details}>
          <div style={title}>{product.name}</div>

          <div style={price}>{formatINR(product.price)}</div>
          <div style={tax}>Tax included. Shipping calculated at checkout.</div>

          <hr style={divider} />

          <button style={button} onClick={handleBuyNow}>
            BUY NOW
          </button>

          <button style={button} onClick={handleAddToCart}>
            ADD TO CART
          </button>

          <div style={infoRow}>
            <FiTruck />
            <span>Free Shipping Across India</span>
          </div>

          <div style={infoRow}>
            <TbWorld />
            <span>Worldwide shipping available</span>
          </div>

          <div style={sectionTitle}>Description</div>
          <div style={sectionText}>{product.description || "No description available."}</div>

          {product.productTypes?.length > 0 && (
            <div style={detailLine}>
              <strong>Product Type:</strong> {product.productTypes.join(", ")}
            </div>
          )}

          {product.occasions?.length > 0 && (
            <div style={detailLine}>
              <strong>Occasions:</strong> {product.occasions.join(", ")}
            </div>
          )}

          {product.finishDesign?.length > 0 && (
            <div style={detailLine}>
              <strong>Finish and Design:</strong> {product.finishDesign.join(", ")}
            </div>
          )}

          {product.jewelTypes?.length > 0 && (
            <div style={detailLine}>
              <strong>Jewel Type:</strong> {product.jewelTypes.join(", ")}
            </div>
          )}

          {product.sizes?.length > 0 && (
            <div style={detailLine}>
              <strong>Size:</strong> {product.sizes.join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}