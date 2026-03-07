// import React, { useState } from "react";

// export default function AdminPage() {
//   const [activeSection, setActiveSection] = useState("products");
//   const [productName, setProductName] = useState("");
//   const [productImage, setProductImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setProductImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!productName || !productImage) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newProduct = {
//       id: Date.now(),
//       name: productName,
//       image: preview, // for now storing preview URL
//     };

//     const existingProducts = JSON.parse(localStorage.getItem("adminProducts") || "[]");
//     existingProducts.push(newProduct);
//     localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

//     alert("Product added successfully");

//     setProductName("");
//     setProductImage(null);
//     setPreview("");
//   };

//   const page = {
//     display: "flex",
//     minHeight: "100vh",
//     fontFamily: "Arial, sans-serif",
//     background: "#f7f7f7",
//   };

//   const sidebar = {
//     width: "240px",
//     background: "#2f2438",
//     color: "#fff",
//     padding: "20px 0",
//   };

//   const logo = {
//     fontSize: "22px",
//     fontWeight: "700",
//     textAlign: "center",
//     marginBottom: "30px",
//   };

//   const menuItem = (active) => ({
//     padding: "14px 24px",
//     cursor: "pointer",
//     background: active ? "#4b355d" : "transparent",
//     borderLeft: active ? "4px solid #c79ae0" : "4px solid transparent",
//     fontSize: "15px",
//   });

//   const main = {
//     flex: 1,
//     padding: "40px",
//   };

//   const card = {
//     maxWidth: "600px",
//     background: "#fff",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//   };

//   const title = {
//     fontSize: "26px",
//     fontWeight: "700",
//     marginBottom: "24px",
//     color: "#222",
//   };

//   const label = {
//     display: "block",
//     fontSize: "14px",
//     fontWeight: "600",
//     marginBottom: "8px",
//     color: "#333",
//   };

//   const input = {
//     width: "100%",
//     height: "44px",
//     padding: "0 12px",
//     border: "1px solid #ddd",
//     borderRadius: "6px",
//     marginBottom: "18px",
//     boxSizing: "border-box",
//     fontSize: "14px",
//   };

//   const fileInput = {
//     marginBottom: "18px",
//   };

//   const button = {
//     background: "#6f3f8f",
//     color: "#fff",
//     border: "none",
//     padding: "12px 20px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "600",
//     fontSize: "14px",
//   };

//   const previewBox = {
//     marginTop: "10px",
//     marginBottom: "20px",
//   };

//   const previewImage = {
//     width: "160px",
//     height: "160px",
//     objectFit: "cover",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//   };

//   return (
//     <div style={page}>
//       <div style={sidebar}>
//         <div style={logo}>Admin Panel</div>

//         <div
//           style={menuItem(activeSection === "products")}
//           onClick={() => setActiveSection("products")}
//         >
//           Products
//         </div>
//       </div>

//       <div style={main}>
//         {activeSection === "products" && (
//           <div style={card}>
//             <div style={title}>Add Product</div>

//             <form onSubmit={handleSubmit}>
//               <label style={label}>Product Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter product name"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//                 style={input}
//               />

//               <label style={label}>Upload Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 style={fileInput}
//               />

//               {preview && (
//                 <div style={previewBox}>
//                   <img src={preview} alt="Preview" style={previewImage} />
//                 </div>
//               )}

//               <button type="submit" style={button}>
//                 Save Product
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";

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

//   const [formData, setFormData] = useState({
//     productName: "",
//     productCode: "",
//     productPrice: "",
//   });

//   const [selectedFilters, setSelectedFilters] = useState({
//     "Product Type": [],
//     Occasions: [],
//     "Finish and Design": [],
//     "Jewel Type": [],
//     Size: [],
//   });

//   const [productImage, setProductImage] = useState(null);
//   const [preview, setPreview] = useState("");

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

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setProductImage(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.productName.trim() ||
//       !formData.productCode.trim() ||
//       !formData.productPrice.trim() ||
//       !preview
//     ) {
//       alert("Please fill product name, product code, product price and upload a photo.");
//       return;
//     }

//     const newProduct = {
//       id: Date.now(),
//       productName: formData.productName,
//       productCode: formData.productCode,
//       productPrice: formData.productPrice,
//       categories: selectedFilters,
//       image: preview,
//       createdAt: new Date().toISOString(),
//     };

//     const existingProducts = JSON.parse(
//       localStorage.getItem("adminProducts") || "[]"
//     );

//     existingProducts.push(newProduct);
//     localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

//     alert("Product saved successfully");

//     setFormData({
//       productName: "",
//       productCode: "",
//       productPrice: "",
//     });

//     setSelectedFilters({
//       "Product Type": [],
//       Occasions: [],
//       "Finish and Design": [],
//       "Jewel Type": [],
//       Size: [],
//     });

//     setProductImage(null);
//     setPreview("");
//   };

//   const page = {
//     display: "flex",
//     minHeight: "100vh",
//     background: "#f6f4f8",
//     fontFamily: "Arial, Helvetica, sans-serif",
//   };

//   const sidebar = {
//     width: "240px",
//     background: "#2f2438",
//     color: "#fff",
//     padding: "24px 0",
//     boxShadow: "2px 0 12px rgba(0,0,0,0.08)",
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
//     gridTemplateColumns: "repeat(3, 1fr)",
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

//   const previewWrap = {
//     marginTop: "10px",
//     marginBottom: "20px",
//   };

//   const previewImage = {
//     width: "180px",
//     height: "180px",
//     objectFit: "cover",
//     borderRadius: "10px",
//     border: "1px solid #ddd",
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
//                 <label style={label}>Upload Product Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   style={fileInput}
//                 />
//               </div>

//               {preview && (
//                 <div style={previewWrap}>
//                   <img src={preview} alt="Preview" style={previewImage} />
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



import React, { useState } from "react";

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

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("products");

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

  const [productImage, setProductImage] = useState(null);
  const [preview, setPreview] = useState("");

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setProductImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.productName.trim() ||
      !formData.productCode.trim() ||
      !formData.productPrice.trim() ||
      !formData.productDescription.trim() ||
      !preview
    ) {
      alert(
        "Please fill product name, product code, product price, product description and upload a photo."
      );
      return;
    }

    const newProduct = {
      id: Date.now(),
      productName: formData.productName,
      productCode: formData.productCode,
      productPrice: formData.productPrice,
      productDescription: formData.productDescription,
      categories: selectedFilters,
      image: preview,
      createdAt: new Date().toISOString(),
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    existingProducts.push(newProduct);
    localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

    alert("Product saved successfully");

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

    setProductImage(null);
    setPreview("");
  };

  const page = {
    display: "flex",
    minHeight: "100vh",
    background: "#f6f4f8",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const sidebar = {
    width: "240px",
    background: "#2f2438",
    color: "#fff",
    padding: "24px 0",
    boxShadow: "2px 0 12px rgba(0,0,0,0.08)",
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
    gridTemplateColumns: "repeat(3, 1fr)",
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

  const previewWrap = {
    marginTop: "10px",
    marginBottom: "20px",
  };

  const previewImage = {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "1px solid #ddd",
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

        <div
          style={menuItem(activeSection === "products")}
          onClick={() => setActiveSection("products")}
        >
          Products
        </div>
      </aside>

      <main style={main}>
        {activeSection === "products" && (
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
                <label style={label}>Upload Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={fileInput}
                />
              </div>

              {preview && (
                <div style={previewWrap}>
                  <img src={preview} alt="Preview" style={previewImage} />
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