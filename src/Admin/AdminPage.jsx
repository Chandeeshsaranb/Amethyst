


// import React, { useRef, useState } from "react";

// const PRODUCT_FILTERS = {
//   "Product Type": [
//     "Bangles",
//     "Bracelets",
//     "Chain",
//     "Earrings",
//     "Hair Jewel",
//     "Jadai / Hair Accessories",
//     "Maangtikka",
//     "Necklaces",
//     "Oddiyanam / Hip Belts",
//     "Pendants",
//     "Rings",
//   ],
//   Occasions: [
//     "Haldi",
//     "Mehndi",
//     "Muhurtham",
//     "Party wear",
//     "Pooja / Mini Occasion",
//     "Reception",
//     "Sangeeth",
//     "Work wear",
//   ],
//   "Finish and Design": [
//     "Antique Collection",
//     "Boho Goddess",
//     "Gold Plated Kundan",
//     "Gold Plated Stone",
//     "Mosaicette Collection",
//     "Mother Of Pearls",
//     "Nagai / Nakshi",
//     "One Of A Kind Dual Tone",
//     "Oxidised",
//     "Turquoise",
//   ],
//   "Jewel Type": [
//     "Attigai",
//     "Bends",
//     "Bugudi",
//     "Centre hook",
//     "Chain",
//     "Chain With Earrings",
//     "Choker Necklace",
//     "Close Setting",
//     "Drops",
//     "Hook Drops",
//     "Jadai Billa",
//     "Jhumkas",
//     "Kaappu",
//     "Layer Chain Model",
//     "Long Earrings",
//     "Long Necklace",
//     "Mini Chokers",
//     "Mugappu Chain",
//     "Necklace And Earrings",
//     "Pair Bangle",
//     "Pendant with Earrings",
//     "Reversible Necklace",
//     "Short Necklace",
//     "Side hook",
//     "Single Chain Model",
//     "Single Strand",
//     "Staff Oddiyanam",
//     "Studs",
//   ],
//   Size: ["2.4"],
// };

// export default function AdminPage() {
//   const [activeSection, setActiveSection] = useState("products");
//   const fileInputRef = useRef(null);
//   const dragItemIndex = useRef(null);
//   const dragOverItemIndex = useRef(null);

//   const [formData, setFormData] = useState({
//     productName: "",
//     productCode: "",
//     productPrice: "",
//     productDescription: "",
//   });

//   const [selectedFilters, setSelectedFilters] = useState({
//     "Product Type": [],
//     Occasions: [],
//     "Finish and Design": [],
//     "Jewel Type": [],
//     Size: [],
//   });

//   const [previews, setPreviews] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (group, value) => {
//     setSelectedFilters((prev) => {
//       const alreadySelected = prev[group].includes(value);

//       return {
//         ...prev,
//         [group]: alreadySelected
//           ? prev[group].filter((item) => item !== value)
//           : [...prev[group], value],
//       };
//     });
//   };

//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files || []);
//     if (!files.length) return;

//     const base64Images = await Promise.all(
//       files.map(
//         (file) =>
//           new Promise((resolve) => {
//             const reader = new FileReader();
//             reader.onloadend = () =>
//               resolve({
//                 id: `${Date.now()}-${Math.random()}-${file.name}`,
//                 src: reader.result,
//                 name: file.name,
//               });
//             reader.readAsDataURL(file);
//           })
//       )
//     );

//     setPreviews((prev) => [...prev, ...base64Images]);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const removeImage = (indexToRemove) => {
//     setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
//   };

//   const handleDragStart = (index) => {
//     dragItemIndex.current = index;
//   };

//   const handleDragEnter = (index) => {
//     dragOverItemIndex.current = index;
//   };

//   const handleDrop = () => {
//     const fromIndex = dragItemIndex.current;
//     const toIndex = dragOverItemIndex.current;

//     if (
//       fromIndex === null ||
//       toIndex === null ||
//       fromIndex === toIndex ||
//       fromIndex < 0 ||
//       toIndex < 0
//     ) {
//       dragItemIndex.current = null;
//       dragOverItemIndex.current = null;
//       return;
//     }

//     setPreviews((prev) => {
//       const updated = [...prev];
//       const draggedItem = updated[fromIndex];
//       updated.splice(fromIndex, 1);
//       updated.splice(toIndex, 0, draggedItem);
//       return updated;
//     });

//     dragItemIndex.current = null;
//     dragOverItemIndex.current = null;
//   };

//   const handleDragEnd = () => {
//     dragItemIndex.current = null;
//     dragOverItemIndex.current = null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.productName.trim() ||
//       !formData.productCode.trim() ||
//       !formData.productPrice.trim() ||
//       !formData.productDescription.trim() ||
//       previews.length === 0
//     ) {
//       alert(
//         "Please fill product name, product code, product price, product description and upload at least one photo."
//       );
//       return;
//     }

//     const newProduct = {
//       id: Date.now(),
//       name: formData.productName.trim(),
//       productCode: formData.productCode.trim(),
//       price: Number(formData.productPrice),
//       description: formData.productDescription.trim(),
//       categories: selectedFilters,
//       images: previews.map((item) => item.src),
//       createdAt: new Date().toISOString(),
//     };

//     const existingProducts = JSON.parse(
//       localStorage.getItem("adminProducts") || "[]"
//     );

//     existingProducts.push(newProduct);
//     localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

//     alert("Product saved successfully in localStorage");

//     setFormData({
//       productName: "",
//       productCode: "",
//       productPrice: "",
//       productDescription: "",
//     });

//     setSelectedFilters({
//       "Product Type": [],
//       Occasions: [],
//       "Finish and Design": [],
//       "Jewel Type": [],
//       Size: [],
//     });

//     setPreviews([]);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const page = {
//     display: "flex",
//     minHeight: "100vh",
//     background: "#f6f4f8",
//     fontFamily: "Arial, Helvetica, sans-serif",
//   };

//   const sidebar = {
//     width: "300px",
//     minWidth: "300px",
//     background: "#2f2438",
//     color: "#fff",
//     height: "100vh",
//     overflowY: "auto",
//     overflowX: "hidden",
//     padding: "24px 0",
//     boxSizing: "border-box",
//     position: "sticky",
//     top: 0,
//   };

//   const sidebarTitle = {
//     fontSize: "22px",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: "28px",
//   };

//   const menuItem = (active) => ({
//     padding: "14px 22px",
//     cursor: "pointer",
//     background: active ? "#4b355d" : "transparent",
//     borderLeft: active ? "4px solid #c79ae0" : "4px solid transparent",
//     fontSize: "15px",
//     fontWeight: active ? "600" : "500",
//   });

//   const main = {
//     flex: 1,
//     padding: "30px",
//     boxSizing: "border-box",
//   };

//   const formCard = {
//     background: "#fff",
//     borderRadius: "12px",
//     padding: "28px",
//     boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
//     maxWidth: "1100px",
//   };

//   const heading = {
//     fontSize: "28px",
//     fontWeight: "700",
//     marginBottom: "24px",
//     color: "#222",
//   };

//   const grid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//     gap: "18px",
//     marginBottom: "26px",
//   };

//   const descriptionWrap = {
//     display: "flex",
//     flexDirection: "column",
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

//   const sectionTitle = {
//     fontSize: "18px",
//     fontWeight: "700",
//     margin: "24px 0 14px",
//     color: "#2b2b2b",
//   };

//   const categoryBox = {
//     border: "1px solid #e7dff0",
//     borderRadius: "10px",
//     padding: "16px",
//     marginBottom: "18px",
//     background: "#fcfaff",
//   };

//   const categoryHeading = {
//     fontSize: "15px",
//     fontWeight: "700",
//     marginBottom: "12px",
//     color: "#5d3d75",
//   };

//   const checkboxGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//     gap: "10px 16px",
//   };

//   const checkboxLabel = {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     fontSize: "14px",
//     color: "#333",
//     cursor: "pointer",
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

//   return (
//     <div style={page}>
//       <aside style={sidebar}>
//         <div style={sidebarTitle}>Admin Panel</div>

//         <div
//           style={menuItem(activeSection === "products")}
//           onClick={() => setActiveSection("products")}
//         >
//           Products
//         </div>
//       </aside>

//       <main style={main}>
//         {activeSection === "products" && (
//           <div style={formCard}>
//             <div style={heading}>Add Product</div>

//             <form onSubmit={handleSubmit}>
//               <div style={grid}>
//                 <div style={fieldWrap}>
//                   <label style={label}>Product Name</label>
//                   <input
//                     type="text"
//                     name="productName"
//                     value={formData.productName}
//                     onChange={handleInputChange}
//                     placeholder="Enter product name"
//                     style={input}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Product Code</label>
//                   <input
//                     type="text"
//                     name="productCode"
//                     value={formData.productCode}
//                     onChange={handleInputChange}
//                     placeholder="Enter product code"
//                     style={input}
//                   />
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Product Price</label>
//                   <input
//                     type="number"
//                     name="productPrice"
//                     value={formData.productPrice}
//                     onChange={handleInputChange}
//                     placeholder="Enter product price"
//                     style={input}
//                   />
//                 </div>
//               </div>

//               <div style={descriptionWrap}>
//                 <label style={label}>Product Description</label>
//                 <textarea
//                   name="productDescription"
//                   value={formData.productDescription}
//                   onChange={handleInputChange}
//                   placeholder="Enter product description"
//                   style={textarea}
//                 />
//               </div>

//               <div style={sectionTitle}>Categories</div>

//               {Object.entries(PRODUCT_FILTERS).map(([groupName, options]) => (
//                 <div key={groupName} style={categoryBox}>
//                   <div style={categoryHeading}>{groupName}</div>

//                   <div style={checkboxGrid}>
//                     {options.map((option) => (
//                       <label key={option} style={checkboxLabel}>
//                         <input
//                           type="checkbox"
//                           checked={selectedFilters[groupName].includes(option)}
//                           onChange={() => handleCheckboxChange(groupName, option)}
//                         />
//                         {option}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               <div style={sectionTitle}>Final Photo Upload</div>

//               <div style={fieldWrap}>
//                 <label style={label}>Upload Product Images</label>
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageChange}
//                   style={fileInput}
//                 />
//                 <div style={hintText}>
//                   Drag the uploaded images to arrange order. The first image will
//                   be the main image.
//                 </div>
//               </div>

//               {previews.length > 0 && (
//                 <div style={previewWrap}>
//                   <div style={previewGrid}>
//                     {previews.map((img, index) => (
//                       <div
//                         key={img.id}
//                         style={previewCard}
//                         draggable
//                         onDragStart={() => handleDragStart(index)}
//                         onDragEnter={() => handleDragEnter(index)}
//                         onDragOver={(e) => e.preventDefault()}
//                         onDrop={handleDrop}
//                         onDragEnd={handleDragEnd}
//                       >
//                         <img
//                           src={img.src}
//                           alt={`Preview ${index + 1}`}
//                           style={previewImage}
//                         />

//                         <div style={previewOrder}>
//                           Image {index + 1}
//                           {index === 0 ? " (Main image)" : ""}
//                         </div>

//                         <div style={actionRow}>
//                           <button
//                             type="button"
//                             style={removeButton}
//                             onClick={() => removeImage(index)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <button type="submit" style={submitButton}>
//                 Save Product
//               </button>
//             </form>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



import React, { useRef, useState } from "react";

const PRODUCT_FILTERS = {
  "Product Type": [
    "Bangles",
    "Bracelets",
    "Chain",
    "Earrings",
    "Hair Jewel",
    "Jadai / Hair Accessories",
    "Maangtikka",
    "Necklaces",
    "Oddiyanam / Hip Belts",
    "Pendants",
    "Rings",
  ],
  Occasions: [
    "Haldi",
    "Mehndi",
    "Muhurtham",
    "Party wear",
    "Pooja / Mini Occasion",
    "Reception",
    "Sangeeth",
    "Work wear",
  ],
  "Finish and Design": [
    "Antique Collection",
    "Boho Goddess",
    "Gold Plated Kundan",
    "Gold Plated Stone",
    "Mosaicette Collection",
    "Mother Of Pearls",
    "Nagai / Nakshi",
    "One Of A Kind Dual Tone",
    "Oxidised",
    "Turquoise",
  ],
  "Jewel Type": [
    "Attigai",
    "Bends",
    "Bugudi",
    "Centre hook",
    "Chain",
    "Chain With Earrings",
    "Choker Necklace",
    "Close Setting",
    "Drops",
    "Hook Drops",
    "Jadai Billa",
    "Jhumkas",
    "Kaappu",
    "Layer Chain Model",
    "Long Earrings",
    "Long Necklace",
    "Mini Chokers",
    "Mugappu Chain",
    "Necklace And Earrings",
    "Pair Bangle",
    "Pendant with Earrings",
    "Reversible Necklace",
    "Short Necklace",
    "Side hook",
    "Single Chain Model",
    "Single Strand",
    "Staff Oddiyanam",
    "Studs",
  ],
  Size: ["2.4"],
};

const SIDEBAR_ITEMS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "users", label: "Users" },
  { key: "categories", label: "Categories" },
  { key: "add-products", label: "Add Products" },
  { key: "shipping", label: "Shipping" },
  { key: "communication", label: "Communication" },
  { key: "admin-users", label: "Admin Users" },
  { key: "fee-setting", label: "Fee Setting" },
  { key: "privacy-policy", label: "Privacy Policy" },
  { key: "terms-conditions", label: "Terms & Conditions" },
];

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("add-products");
  const fileInputRef = useRef(null);
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  const [formData, setFormData] = useState({
    productName: "",
    productCode: "",
    productPrice: "",
    productDescription: "",
  });

  const [selectedFilters, setSelectedFilters] = useState({
    "Product Type": [],
    Occasions: [],
    "Finish and Design": [],
    "Jewel Type": [],
    Size: [],
  });

  const [previews, setPreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (group, value) => {
    setSelectedFilters((prev) => {
      const alreadySelected = prev[group].includes(value);

      return {
        ...prev,
        [group]: alreadySelected
          ? prev[group].filter((item) => item !== value)
          : [...prev[group], value],
      };
    });
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const base64Images = await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () =>
              resolve({
                id: `${Date.now()}-${Math.random()}-${file.name}`,
                src: reader.result,
                name: file.name,
              });
            reader.readAsDataURL(file);
          })
      )
    );

    setPreviews((prev) => [...prev, ...base64Images]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = (indexToRemove) => {
    setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleDragStart = (index) => {
    dragItemIndex.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItemIndex.current = index;
  };

  const handleDrop = () => {
    const fromIndex = dragItemIndex.current;
    const toIndex = dragOverItemIndex.current;

    if (
      fromIndex === null ||
      toIndex === null ||
      fromIndex === toIndex ||
      fromIndex < 0 ||
      toIndex < 0
    ) {
      dragItemIndex.current = null;
      dragOverItemIndex.current = null;
      return;
    }

    setPreviews((prev) => {
      const updated = [...prev];
      const draggedItem = updated[fromIndex];
      updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, draggedItem);
      return updated;
    });

    dragItemIndex.current = null;
    dragOverItemIndex.current = null;
  };

  const handleDragEnd = () => {
    dragItemIndex.current = null;
    dragOverItemIndex.current = null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.productName.trim() ||
      !formData.productCode.trim() ||
      !formData.productPrice.trim() ||
      !formData.productDescription.trim() ||
      previews.length === 0
    ) {
      alert(
        "Please fill product name, product code, product price, product description and upload at least one photo."
      );
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.productName.trim(),
      productCode: formData.productCode.trim(),
      price: Number(formData.productPrice),
      description: formData.productDescription.trim(),
      categories: selectedFilters,
      images: previews.map((item) => item.src),
      createdAt: new Date().toISOString(),
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    existingProducts.push(newProduct);
    localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

    alert("Product saved successfully in localStorage");

    setFormData({
      productName: "",
      productCode: "",
      productPrice: "",
      productDescription: "",
    });

    setSelectedFilters({
      "Product Type": [],
      Occasions: [],
      "Finish and Design": [],
      "Jewel Type": [],
      Size: [],
    });

    setPreviews([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const page = {
    display: "flex",
    minHeight: "100vh",
    background: "#f6f4f8",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const sidebar = {
    width: "300px",
    minWidth: "300px",
    background: "#2f2438",
    color: "#fff",
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "24px 0",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
  };

  const sidebarTitle = {
    fontSize: "22px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "28px",
  };

  const menuItem = (active) => ({
    padding: "14px 22px",
    cursor: "pointer",
    background: active ? "#4b355d" : "transparent",
    borderLeft: active ? "4px solid #c79ae0" : "4px solid transparent",
    fontSize: "15px",
    fontWeight: active ? "600" : "500",
  });

  const main = {
    flex: 1,
    padding: "30px",
    boxSizing: "border-box",
  };

  const formCard = {
    background: "#fff",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
    maxWidth: "1100px",
  };

  const heading = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#222",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "26px",
  };

  const descriptionWrap = {
    display: "flex",
    flexDirection: "column",
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

  const sectionTitle = {
    fontSize: "18px",
    fontWeight: "700",
    margin: "24px 0 14px",
    color: "#2b2b2b",
  };

  const categoryBox = {
    border: "1px solid #e7dff0",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "18px",
    background: "#fcfaff",
  };

  const categoryHeading = {
    fontSize: "15px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#5d3d75",
  };

  const checkboxGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "10px 16px",
  };

  const checkboxLabel = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#333",
    cursor: "pointer",
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

  return (
    <div style={page}>
      <aside style={sidebar}>
        <div style={sidebarTitle}>Admin Panel</div>

        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.key}
            style={menuItem(activeSection === item.key)}
            onClick={() => setActiveSection(item.key)}
          >
            {item.label}
          </div>
        ))}
      </aside>

      <main style={main}>
        {activeSection === "add-products" && (
          <div style={formCard}>
            <div style={heading}>Add Product</div>

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
                  <label style={label}>Product Code</label>
                  <input
                    type="text"
                    name="productCode"
                    value={formData.productCode}
                    onChange={handleInputChange}
                    placeholder="Enter product code"
                    style={input}
                  />
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Product Price</label>
                  <input
                    type="number"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={handleInputChange}
                    placeholder="Enter product price"
                    style={input}
                  />
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

              <div style={sectionTitle}>Categories</div>

              {Object.entries(PRODUCT_FILTERS).map(([groupName, options]) => (
                <div key={groupName} style={categoryBox}>
                  <div style={categoryHeading}>{groupName}</div>

                  <div style={checkboxGrid}>
                    {options.map((option) => (
                      <label key={option} style={checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={selectedFilters[groupName].includes(option)}
                          onChange={() => handleCheckboxChange(groupName, option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

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
                  Drag the uploaded images to arrange order. The first image will
                  be the main image.
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
        )}
      </main>
    </div>
  );
}