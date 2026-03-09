

// import React, { useMemo, useState, useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { FiTruck } from "react-icons/fi";
// import { TbWorld } from "react-icons/tb";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const product = useMemo(() => {
//     if (location.state?.id) {
//       return location.state;
//     }

//     const storedProducts = JSON.parse(
//       localStorage.getItem("adminProducts") || "[]"
//     );

//     return (
//       storedProducts.find((item) => String(item.id) === String(id)) || null
//     );
//   }, [id, location.state]);

//   const imageList = Array.isArray(product?.images) ? product.images : [];
//   const [selectedImage, setSelectedImage] = useState(imageList[0] || "");

//   useEffect(() => {
//     setSelectedImage(imageList[0] || "");
//   }, [id, location.state, product]);

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
//           price: product.price,
//           quantity: 1,
//           images: product.images || [],
//           image: product.images?.[0] || "",
//           description: product.description || "",
//           size: product.categories?.Size?.join(", ") || "",
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
//             price: product.price,
//             quantity: 1,
//             images: product.images || [],
//             image: product.images?.[0] || "",
//             description: product.description || "",
//             size: product.categories?.Size?.join(", ") || "",
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
//     gridTemplateColumns: "1.1fr 1fr",
//     gap: "22px",
//     alignItems: "start",
//   };

//   const gallerySticky = {
//     position: "sticky",
//     top: "20px",
//     display: "grid",
//     gridTemplateColumns: "95px 1fr",
//     gap: "22px",
//     alignItems: "start",
//   };

//   const thumbsWrap = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//     maxHeight: "calc(100vh - 40px)",
//     overflowY: "auto",
//   };

//   const thumb = (active) => ({
//     width: "78px",
//     height: "95px",
//     border: active ? "2px solid #111" : "1px solid #ddd",
//     overflow: "hidden",
//     cursor: "pointer",
//     background: "#fff",
//     boxSizing: "border-box",
//     flexShrink: 0,
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
//     minHeight: "520px",
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
//     maxHeight: "calc(100vh - 40px)",
//     overflowY: "auto",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "500",
//     letterSpacing: "0.5px",
//     textTransform: "uppercase",
//     marginBottom: "12px",
//     color: "#111",
//     fontFamily: "serif",
//   };

//   const price = {
//     fontSize: "34px",
//     color: "#8a8a8a",
//     marginBottom: "6px",
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

//   const detailLine = {
//     ...sectionText,
//     marginTop: "8px",
//   };

//   return (
//     <div style={page}>
//       <div style={container}>
//         <div style={gallerySticky}>
//           <div style={thumbsWrap}>
//             {imageList.map((img, index) => (
//               <div
//                 key={index}
//                 style={thumb(selectedImage === img)}
//                 onClick={() => setSelectedImage(img)}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name}-${index + 1}`}
//                   style={thumbImg}
//                 />
//               </div>
//             ))}
//           </div>

//           <div style={mainImageWrap}>
//             {imageList.length > 0 && (
//               <img
//                 src={selectedImage || imageList[0]}
//                 alt={product.name}
//                 style={mainImage}
//               />
//             )}
//           </div>
//         </div>

//         <div style={details}>
//           <div style={title}>{product.name}</div>

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
//             <span>Worldwide shipping available</span>
//           </div>

//           <div style={sectionTitle}>Description</div>
//           <div style={sectionText}>
//             {product.description || "No description available."}
//           </div>

//           {product.categories?.["Product Type"]?.length > 0 && (
//             <div style={detailLine}>
//               <strong>Product Type:</strong>{" "}
//               {product.categories["Product Type"].join(", ")}
//             </div>
//           )}

//           {product.categories?.Occasions?.length > 0 && (
//             <div style={detailLine}>
//               <strong>Occasions:</strong>{" "}
//               {product.categories.Occasions.join(", ")}
//             </div>
//           )}

//           {product.categories?.["Finish and Design"]?.length > 0 && (
//             <div style={detailLine}>
//               <strong>Finish and Design:</strong>{" "}
//               {product.categories["Finish and Design"].join(", ")}
//             </div>
//           )}

//           {product.categories?.["Jewel Type"]?.length > 0 && (
//             <div style={detailLine}>
//               <strong>Jewel Type:</strong>{" "}
//               {product.categories["Jewel Type"].join(", ")}
//             </div>
//           )}

//           {product.categories?.Size?.length > 0 && (
//             <div style={detailLine}>
//               <strong>Size:</strong> {product.categories.Size.join(", ")}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useMemo, useState, useEffect } from "react";
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
    if (location.state?.id && String(location.state.id) === String(id)) {
      return {
        ...location.state,
        images: Array.isArray(location.state.images) ? location.state.images : [],
        categories: location.state.categories || {},
      };
    }

    const storedProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    const foundProduct = storedProducts.find(
      (item) => String(item.id) === String(id)
    );

    if (!foundProduct) return null;

    return {
      ...foundProduct,
      name: foundProduct.name || "",
      price: Number(foundProduct.price || 0),
      description: foundProduct.description || "",
      images: Array.isArray(foundProduct.images) ? foundProduct.images : [],
      categories: foundProduct.categories || {},
    };
  }, [id, location.state]);

  const imageList = useMemo(() => {
    return Array.isArray(product?.images) ? product.images : [];
  }, [product]);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(imageList[0] || "");
  }, [imageList]);

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
          price: Number(product.price || 0),
          quantity: 1,
          images: product.images || [],
          image: product.images?.[0] || "",
          description: product.description || "",
          size: product.categories?.Size?.join(", ") || "",
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
            price: Number(product.price || 0),
            quantity: 1,
            images: product.images || [],
            image: product.images?.[0] || "",
            description: product.description || "",
            size: product.categories?.Size?.join(", ") || "",
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
    gridTemplateColumns: "1.1fr 1fr",
    gap: "22px",
    alignItems: "start",
  };

  const gallerySticky = {
    position: "sticky",
    top: "20px",
    display: "grid",
    gridTemplateColumns: "95px 1fr",
    gap: "22px",
    alignItems: "start",
  };

  const thumbsWrap = {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
  };

  const thumb = (active) => ({
    width: "78px",
    height: "95px",
    border: active ? "2px solid #111" : "1px solid #ddd",
    overflow: "hidden",
    cursor: "pointer",
    background: "#fff",
    boxSizing: "border-box",
    flexShrink: 0,
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
    minHeight: "520px",
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
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
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
        <div style={gallerySticky}>
          <div style={thumbsWrap}>
            {imageList.map((img, index) => (
              <div
                key={index}
                style={thumb(selectedImage === img)}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${product.name}-${index + 1}`}
                  style={thumbImg}
                />
              </div>
            ))}
          </div>

          <div style={mainImageWrap}>
            {imageList.length > 0 && (
              <img
                src={selectedImage || imageList[0]}
                alt={product.name}
                style={mainImage}
              />
            )}
          </div>
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
          <div style={sectionText}>
            {product.description || "No description available."}
          </div>

          {product.categories?.["Product Type"]?.length > 0 && (
            <div style={detailLine}>
              <strong>Product Type:</strong>{" "}
              {product.categories["Product Type"].join(", ")}
            </div>
          )}

          {product.categories?.Occasions?.length > 0 && (
            <div style={detailLine}>
              <strong>Occasions:</strong>{" "}
              {product.categories.Occasions.join(", ")}
            </div>
          )}

          {product.categories?.["Finish and Design"]?.length > 0 && (
            <div style={detailLine}>
              <strong>Finish and Design:</strong>{" "}
              {product.categories["Finish and Design"].join(", ")}
            </div>
          )}

          {product.categories?.["Jewel Type"]?.length > 0 && (
            <div style={detailLine}>
              <strong>Jewel Type:</strong>{" "}
              {product.categories["Jewel Type"].join(", ")}
            </div>
          )}

          {product.categories?.Size?.length > 0 && (
            <div style={detailLine}>
              <strong>Size:</strong> {product.categories.Size.join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}