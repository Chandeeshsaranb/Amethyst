// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // function formatINR(n) {
// // // //   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// // // // }

// // // // export default function MainPage({ title, products }) {
// // // //   const navigate = useNavigate();

// // // //   const wrapper = {
// // // //     flex: 1,
// // // //     padding: "20px 24px",
// // // //     boxSizing: "border-box",
// // // //     background: "#fff",
// // // //   };

// // // //   const titleStyle = {
// // // //     fontSize: "28px",
// // // //     fontWeight: "500",
// // // //     marginBottom: "20px",
// // // //     color: "#222",
// // // //   };

// // // //   const countStyle = {
// // // //     fontSize: "14px",
// // // //     color: "#777",
// // // //     marginBottom: "20px",
// // // //   };

// // // //   const grid = {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(3, 1fr)",
// // // //     gap: "28px 24px",
// // // //   };

// // // //   const card = {
// // // //     textAlign: "center",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const imageWrap = {
// // // //     width: "100%",
// // // //     aspectRatio: "1 / 1",
// // // //     background: "#f5f5f5",
// // // //     overflow: "hidden",
// // // //     marginBottom: "12px",
// // // //   };

// // // //   const image = {
// // // //     width: "100%",
// // // //     height: "100%",
// // // //     objectFit: "cover",
// // // //     display: "block",
// // // //   };

// // // //   const name = {
// // // //     fontSize: "16px",
// // // //     color: "#333",
// // // //     marginBottom: "6px",
// // // //   };

// // // //   const price = {
// // // //     fontSize: "15px",
// // // //     color: "#666",
// // // //   };

// // // //   const emptyState = {
// // // //     fontSize: "16px",
// // // //     color: "#666",
// // // //     padding: "40px 0",
// // // //   };

// // // //   return (
// // // //     <div style={wrapper}>
// // // //       <div style={titleStyle}>{title}</div>
// // // //       <div style={countStyle}>{products.length} items</div>

// // // //       {products.length === 0 ? (
// // // //         <div style={emptyState}>No products found.</div>
// // // //       ) : (
// // // //         <div style={grid}>
// // // //           {products.map((product) => (
// // // //             <div
// // // //               key={product.id}
// // // //               style={card}
// // // //               onClick={() => navigate(`/product/${product.slug}`)}
// // // //             >
// // // //               <div style={imageWrap}>
// // // //                 <img
// // // //                   src={product.images?.[0]}
// // // //                   alt={product.name}
// // // //                   style={image}
// // // //                 />
// // // //               </div>
// // // //               <div style={name}>{product.name}</div>
// // // //               <div style={price}>{formatINR(product.price)}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }



// // // import React, { useState, useMemo } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // function formatINR(n) {
// // //   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// // // }

// // // export default function MainPage({ products }) {
// // //   const navigate = useNavigate();
// // //   const [sortKey, setSortKey] = useState("featured");

// // //   const sortedProducts = useMemo(() => {
// // //     let arr = [...products];

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

// // //       default:
// // //         break;
// // //     }

// // //     return arr;
// // //   }, [products, sortKey]);

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
// // //     minWidth: "200px",
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

// // //       {/* Featured Sort Dropdown */}
// // //       <div style={topBar}>
// // //         <select
// // //           style={sortBox}
// // //           value={sortKey}
// // //           onChange={(e) => setSortKey(e.target.value)}
// // //         >
// // //           <option value="featured">Featured</option>
// // //           <option value="best">Best selling</option>
// // //           <option value="az">Alphabetically, A-Z</option>
// // //           <option value="za">Alphabetically, Z-A</option>
// // //           <option value="priceLow">Price, low to high</option>
// // //           <option value="priceHigh">Price, high to low</option>
// // //           <option value="old">Date, old to new</option>
// // //           <option value="new">Date, new to old</option>
// // //         </select>
// // //       </div>

// // //       {products.length === 0 ? (
// // //         <div style={emptyState}>No products found.</div>
// // //       ) : (
// // //         <div style={grid}>
// // //           {sortedProducts.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               style={card}
// // //               onClick={() => navigate(`/product/${product.slug}`)}
// // //             >
// // //               <div style={imageWrap}>
// // //                 <img
// // //                   src={product.images?.[0]}
// // //                   alt={product.name}
// // //                   style={image}
// // //                 />
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



// // import React, { useState, useMemo } from "react";
// // import { useNavigate } from "react-router-dom";

// // function formatINR(n) {
// //   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// // }

// // export default function MainPage({ products, title = "Products" }) {
// //   const navigate = useNavigate();
// //   const [sortKey, setSortKey] = useState("featured");

// //   const sortedProducts = useMemo(() => {
// //     let arr = [...products];

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
// //   }, [products, sortKey]);

// //   const wrapper = {
// //     flex: 1,
// //     padding: "20px 24px",
// //     boxSizing: "border-box",
// //     background: "#fff",
// //   };

// //   const titleStyle = {
// //     fontSize: "28px",
// //     fontWeight: "500",
// //     marginBottom: "8px",
// //     color: "#222",
// //   };

// //   const countStyle = {
// //     fontSize: "14px",
// //     color: "#777",
// //     marginBottom: "20px",
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
// //   };

// //   const emptyState = {
// //     fontSize: "16px",
// //     color: "#666",
// //     padding: "40px 0",
// //   };

// //   return (
// //     <div style={wrapper}>
// //       <div style={titleStyle}>{title}</div>
// //       <div style={countStyle}>{products.length} items</div>

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
// //               onClick={() => navigate(`/product/${product.id}`, { state: product })}
// //             >
// //               <div style={imageWrap}>
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   style={image}
// //                 />
// //               </div>
// //               <div style={name}>{product.name}</div>
// //               <div style={price}>{formatINR(product.price)}</div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function MainPage({ products, title = "Products" }) {
//   const navigate = useNavigate();
//   const [sortKey, setSortKey] = useState("featured");

//   const sortedProducts = useMemo(() => {
//     let arr = [...products];

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

//   const titleStyle = {
//     fontSize: "28px",
//     fontWeight: "500",
//     marginBottom: "20px",
//     color: "#222",
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

//   return (
//     <div style={wrapper}>
//       <div style={titleStyle}>{title}</div>

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
//               onClick={() => navigate(`/product/${product.id}`, { state: product })}
//             >
//               <div style={imageWrap}>
//                 <img src={product.image} alt={product.name} style={image} />
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



import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function MainPage({ products }) {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState("featured");

  const sortedProducts = useMemo(() => {
    let arr = [...products];

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
                <img src={product.image} alt={product.name} style={image} />
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