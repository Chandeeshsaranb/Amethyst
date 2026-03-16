
// // // // import React, { useMemo, useState } from "react";
// // // // import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// // // // export default function Filter({
// // // //   products = [],
// // // //   selectedFilters,
// // // //   setSelectedFilters,
// // // //   priceRange,
// // // //   setPriceRange,
// // // //   maxPrice,
// // // // }) {
// // // //   const [openSections, setOpenSections] = useState({});

// // // //   const productFilters = useMemo(() => {
// // // //     try {
// // // //       return JSON.parse(localStorage.getItem("adminProductFilters")) || {};
// // // //     } catch (error) {
// // // //       return {};
// // // //     }
// // // //   }, []);

// // // //   const toggleSection = (section) => {
// // // //     setOpenSections((prev) => ({
// // // //       ...prev,
// // // //       [section]: prev[section] === undefined ? false : !prev[section],
// // // //     }));
// // // //   };

// // // //   const toggleItem = (categoryName, value) => {
// // // //     const currentValues = selectedFilters[categoryName] || [];

// // // //     if (currentValues.includes(value)) {
// // // //       setSelectedFilters((prev) => ({
// // // //         ...prev,
// // // //         [categoryName]: currentValues.filter((item) => item !== value),
// // // //       }));
// // // //     } else {
// // // //       setSelectedFilters((prev) => ({
// // // //         ...prev,
// // // //         [categoryName]: [...currentValues, value],
// // // //       }));
// // // //     }
// // // //   };

// // // //   const getOptionCount = (categoryName, optionValue) => {
// // // //     return products.filter((product) => {
// // // //       const productCategoryValues = product?.categories?.[categoryName] || [];
// // // //       return productCategoryValues.includes(optionValue);
// // // //     }).length;
// // // //   };

// // // //   const visibleProductFilters = useMemo(() => {
// // // //     const filtered = {};

// // // //     Object.entries(productFilters).forEach(([categoryName, options]) => {
// // // //       const validOptions = (options || []).filter(
// // // //         (option) => getOptionCount(categoryName, option) > 0
// // // //       );

// // // //       if (validOptions.length > 0) {
// // // //         filtered[categoryName] = validOptions;
// // // //       }
// // // //     });

// // // //     return filtered;
// // // //   }, [productFilters, products]);

// // // //   const sidebar = {
// // // //     width: "280px",
// // // //     minWidth: "280px",
// // // //     background: "#f7f7f7",
// // // //     padding: "20px 16px",
// // // //     boxSizing: "border-box",
// // // //     borderRight: "1px solid #e5e5e5",
// // // //     height: "100vh",
// // // //     overflowY: "auto",
// // // //     position: "sticky",
// // // //     top: 0,
// // // //   };

// // // //   const section = {
// // // //     marginBottom: "18px",
// // // //     paddingBottom: "14px",
// // // //     borderBottom: "1px solid #e8dff0",
// // // //   };

// // // //   const header = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     cursor: "pointer",
// // // //     marginBottom: "14px",
// // // //   };

// // // //   const heading = {
// // // //     fontSize: "12px",
// // // //     letterSpacing: "4px",
// // // //     fontWeight: "600",
// // // //     color: "#444",
// // // //     textTransform: "uppercase",
// // // //   };

// // // //   const item = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "10px",
// // // //     marginBottom: "10px",
// // // //     fontSize: "14px",
// // // //     color: "#444",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const checkbox = {
// // // //     width: "15px",
// // // //     height: "15px",
// // // //     accentColor: "#b58bb7",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const priceTextWrap = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     marginBottom: "12px",
// // // //     fontSize: "14px",
// // // //     color: "#333",
// // // //   };

// // // //   const range = {
// // // //     width: "100%",
// // // //     cursor: "pointer",
// // // //     accentColor: "#000",
// // // //   };

// // // //   const emptyText = {
// // // //     fontSize: "13px",
// // // //     color: "#777",
// // // //   };

// // // //   const renderCheckboxList = (categoryName, options) =>
// // // //     options.map((option, index) => {
// // // //       const count = getOptionCount(categoryName, option);

// // // //       return (
// // // //         <label key={`${categoryName}-${index}`} style={item}>
// // // //           <input
// // // //             type="checkbox"
// // // //             style={checkbox}
// // // //             checked={(selectedFilters[categoryName] || []).includes(option)}
// // // //             onChange={() => toggleItem(categoryName, option)}
// // // //           />
// // // //           <span>
// // // //             {option} ({count})
// // // //           </span>
// // // //         </label>
// // // //       );
// // // //     });

// // // //   return (
// // // //     <div style={sidebar}>
// // // //       {Object.entries(visibleProductFilters).map(([categoryName, options]) => {
// // // //         const sectionKey = categoryName;
// // // //         const isOpen =
// // // //           openSections[sectionKey] === undefined
// // // //             ? true
// // // //             : openSections[sectionKey];

// // // //         return (
// // // //           <div key={categoryName} style={section}>
// // // //             <div style={header} onClick={() => toggleSection(sectionKey)}>
// // // //               <div style={heading}>{categoryName}</div>
// // // //               {isOpen ? <IoChevronUp /> : <IoChevronDown />}
// // // //             </div>

// // // //             {isOpen &&
// // // //               (options.length > 0 ? (
// // // //                 renderCheckboxList(categoryName, options)
// // // //               ) : (
// // // //                 <div style={emptyText}>No items available.</div>
// // // //               ))}
// // // //           </div>
// // // //         );
// // // //       })}

// // // //       <div style={section}>
// // // //         <div style={header} onClick={() => toggleSection("price")}>
// // // //           <div style={heading}>Price</div>
// // // //           {(openSections.price === undefined ? true : openSections.price) ? (
// // // //             <IoChevronUp />
// // // //           ) : (
// // // //             <IoChevronDown />
// // // //           )}
// // // //         </div>

// // // //         {(openSections.price === undefined ? true : openSections.price) && (
// // // //           <>
// // // //             <div style={priceTextWrap}>
// // // //               <span>₹ 0</span>
// // // //               <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
// // // //             </div>
// // // //             <input
// // // //               type="range"
// // // //               min="0"
// // // //               max={maxPrice}
// // // //               value={priceRange}
// // // //               onChange={(e) => setPriceRange(Number(e.target.value))}
// // // //               style={range}
// // // //             />
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useMemo, useState } from "react";
// // // import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// // // export default function Filter({
// // //   products = [],
// // //   selectedFilters,
// // //   setSelectedFilters,
// // //   priceRange,
// // //   setPriceRange,
// // //   maxPrice,
// // // }) {
// // //   const [openSections, setOpenSections] = useState({});

// // //   // ── Derive filter options directly from the uploaded products ────────────
// // //   // Builds: { Category: ["Rings", "Necklaces", ...], Metal: ["Gold", ...], Purity: ["22k", ...] }
// // //   const derivedFilters = useMemo(() => {
// // //     const category = new Set();
// // //     const metal    = new Set();
// // //     const purity   = new Set();

// // //     products.forEach((p) => {
// // //       if (p.category && p.category.trim()) category.add(p.category.trim());
// // //       if (p.metalType && p.metalType.trim()) metal.add(p.metalType.trim());
// // //       if (p.purity && p.purity.trim()) purity.add(p.purity.trim());
// // //     });

// // //     const result = {};
// // //     if (category.size > 0) result["Category"] = [...category];
// // //     if (metal.size > 0)    result["Metal"]    = [...metal];
// // //     if (purity.size > 0)   result["Purity"]   = [...purity];
// // //     return result;
// // //   }, [products]);

// // //   // Map each filter section key to the product field it matches
// // //   const filterFieldMap = {
// // //     Category: "category",
// // //     Metal:    "metalType",
// // //     Purity:   "purity",
// // //   };

// // //   const toggleSection = (section) => {
// // //     setOpenSections((prev) => ({
// // //       ...prev,
// // //       [section]: prev[section] === undefined ? false : !prev[section],
// // //     }));
// // //   };

// // //   const toggleItem = (sectionName, value) => {
// // //     const current = selectedFilters[sectionName] || [];
// // //     setSelectedFilters((prev) => ({
// // //       ...prev,
// // //       [sectionName]: current.includes(value)
// // //         ? current.filter((v) => v !== value)
// // //         : [...current, value],
// // //     }));
// // //   };

// // //   // Count how many products match a given filter option
// // //   const getCount = (sectionName, value) => {
// // //     const field = filterFieldMap[sectionName];
// // //     if (!field) return 0;
// // //     return products.filter(
// // //       (p) => (p[field] || "").trim().toLowerCase() === value.trim().toLowerCase()
// // //     ).length;
// // //   };

// // //   // ── Styles ────────────────────────────────────────────────────────────────
// // //   const sidebar = {
// // //     width: "280px",
// // //     minWidth: "280px",
// // //     background: "#f7f7f7",
// // //     padding: "20px 16px",
// // //     boxSizing: "border-box",
// // //     borderRight: "1px solid #e5e5e5",
// // //     height: "100vh",
// // //     overflowY: "auto",
// // //     position: "sticky",
// // //     top: 0,
// // //   };

// // //   const section = {
// // //     marginBottom: "18px",
// // //     paddingBottom: "14px",
// // //     borderBottom: "1px solid #e8dff0",
// // //   };

// // //   const headerRow = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     cursor: "pointer",
// // //     marginBottom: "14px",
// // //   };

// // //   const heading = {
// // //     fontSize: "12px",
// // //     letterSpacing: "4px",
// // //     fontWeight: "600",
// // //     color: "#444",
// // //     textTransform: "uppercase",
// // //   };

// // //   const item = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "10px",
// // //     marginBottom: "10px",
// // //     fontSize: "14px",
// // //     color: "#444",
// // //     cursor: "pointer",
// // //   };

// // //   const checkbox = {
// // //     width: "15px",
// // //     height: "15px",
// // //     accentColor: "#b58bb7",
// // //     cursor: "pointer",
// // //   };

// // //   const priceTextWrap = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     marginBottom: "12px",
// // //     fontSize: "14px",
// // //     color: "#333",
// // //   };

// // //   const range = {
// // //     width: "100%",
// // //     cursor: "pointer",
// // //     accentColor: "#000",
// // //   };

// // //   const emptyText = {
// // //     fontSize: "13px",
// // //     color: "#777",
// // //   };

// // //   const isSectionOpen = (key) =>
// // //     openSections[key] === undefined ? true : openSections[key];

// // //   return (
// // //     <div style={sidebar}>

// // //       {/* ── Dynamic filter sections from products ── */}
// // //       {Object.entries(derivedFilters).map(([sectionName, options]) => (
// // //         <div key={sectionName} style={section}>
// // //           <div style={headerRow} onClick={() => toggleSection(sectionName)}>
// // //             <div style={heading}>{sectionName}</div>
// // //             {isSectionOpen(sectionName) ? <IoChevronUp /> : <IoChevronDown />}
// // //           </div>

// // //           {isSectionOpen(sectionName) && (
// // //             options.length > 0 ? (
// // //               options.map((option) => {
// // //                 const count = getCount(sectionName, option);
// // //                 return (
// // //                   <label key={option} style={item}>
// // //                     <input
// // //                       type="checkbox"
// // //                       style={checkbox}
// // //                       checked={(selectedFilters[sectionName] || []).includes(option)}
// // //                       onChange={() => toggleItem(sectionName, option)}
// // //                     />
// // //                     <span>{option} ({count})</span>
// // //                   </label>
// // //                 );
// // //               })
// // //             ) : (
// // //               <div style={emptyText}>No items available.</div>
// // //             )
// // //           )}
// // //         </div>
// // //       ))}

// // //       {/* ── Price range ── */}
// // //       <div style={section}>
// // //         <div style={headerRow} onClick={() => toggleSection("price")}>
// // //           <div style={heading}>Price</div>
// // //           {isSectionOpen("price") ? <IoChevronUp /> : <IoChevronDown />}
// // //         </div>

// // //         {isSectionOpen("price") && (
// // //           <>
// // //             <div style={priceTextWrap}>
// // //               <span>₹ 0</span>
// // //               <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
// // //             </div>
// // //             <input
// // //               type="range"
// // //               min="0"
// // //               max={maxPrice}
// // //               value={priceRange}
// // //               onChange={(e) => setPriceRange(Number(e.target.value))}
// // //               style={range}
// // //             />
// // //           </>
// // //         )}
// // //       </div>

// // //     </div>
// // //   );
// // // }


// // import React, { useMemo, useState } from "react";
// // import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// // export default function Filter({
// //   products = [],
// //   selectedFilters,
// //   setSelectedFilters,
// //   priceRange,
// //   setPriceRange,
// //   maxPrice,
// // }) {
// //   const [openSections, setOpenSections] = useState({});

// //   // ── Derive filter options from the actual product fields ─────────────────
// //   const derivedFilters = useMemo(() => {
// //     const category = new Set();
// //     const metal    = new Set();
// //     const purity   = new Set();

// //     products.forEach((p) => {
// //       if (p.category  && p.category.trim())  category.add(p.category.trim());
// //       if (p.metalType && p.metalType.trim()) metal.add(p.metalType.trim());
// //       if (p.purity    && p.purity.trim())    purity.add(p.purity.trim());
// //     });

// //     const result = {};
// //     if (category.size > 0) result["Category"] = [...category];
// //     if (metal.size > 0)    result["Metal"]    = [...metal];
// //     if (purity.size > 0)   result["Purity"]   = [...purity];
// //     return result;
// //   }, [products]);

// //   const filterFieldMap = {
// //     Category: "category",
// //     Metal:    "metalType",
// //     Purity:   "purity",
// //   };

// //   const toggleSection = (key) => {
// //     setOpenSections((prev) => ({
// //       ...prev,
// //       [key]: prev[key] === undefined ? false : !prev[key],
// //     }));
// //   };

// //   const toggleItem = (sectionName, value) => {
// //     const current = selectedFilters[sectionName] || [];
// //     setSelectedFilters((prev) => ({
// //       ...prev,
// //       [sectionName]: current.includes(value)
// //         ? current.filter((v) => v !== value)
// //         : [...current, value],
// //     }));
// //   };

// //   const getCount = (sectionName, value) => {
// //     const field = filterFieldMap[sectionName];
// //     if (!field) return 0;
// //     return products.filter(
// //       (p) => (p[field] || "").trim().toLowerCase() === value.trim().toLowerCase()
// //     ).length;
// //   };

// //   const hasActiveFilters =
// //     Object.values(selectedFilters).some((v) => v && v.length > 0) ||
// //     priceRange < maxPrice;

// //   const clearAll = () => {
// //     setSelectedFilters({});
// //     setPriceRange(maxPrice);
// //   };

// //   const isSectionOpen = (key) =>
// //     openSections[key] === undefined ? true : openSections[key];

// //   // ── Styles ────────────────────────────────────────────────────────────────
// //   const sidebar = {
// //     width: "260px",
// //     minWidth: "260px",
// //     background: "#fff",
// //     borderRight: "1px solid #e8e0ef",
// //     height: "100vh",
// //     overflowY: "auto",
// //     position: "sticky",
// //     top: 0,
// //     boxSizing: "border-box",
// //     // custom scrollbar via global CSS ideally; this is a fallback
// //   };

// //   const sidebarInner = {
// //     padding: "32px 24px",
// //   };

// //   const filterHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "baseline",
// //     marginBottom: "28px",
// //   };

// //   const filterTitle = {
// //     fontSize: "11px",
// //     letterSpacing: "5px",
// //     fontWeight: "600",
// //     color: "#111",
// //     textTransform: "uppercase",
// //     fontFamily: "serif",
// //   };

// //   const clearBtn = {
// //     background: "none",
// //     border: "none",
// //     padding: 0,
// //     fontSize: "11px",
// //     letterSpacing: "2px",
// //     textTransform: "uppercase",
// //     color: hasActiveFilters ? "#8a4aa2" : "#bbb",
// //     cursor: hasActiveFilters ? "pointer" : "default",
// //     fontFamily: "inherit",
// //   };

// //   const section = {
// //     marginBottom: "0",
// //     borderBottom: "1px solid #ede6f4",
// //   };

// //   const sectionHeaderRow = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     cursor: "pointer",
// //     padding: "16px 0",
// //     userSelect: "none",
// //   };

// //   const sectionLabel = {
// //     fontSize: "11px",
// //     letterSpacing: "4px",
// //     fontWeight: "600",
// //     color: "#333",
// //     textTransform: "uppercase",
// //   };

// //   const chevronStyle = {
// //     color: "#888",
// //     flexShrink: 0,
// //   };

// //   const optionsWrap = {
// //     paddingBottom: "16px",
// //   };

// //   const optionLabel = (checked) => ({
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     padding: "6px 0",
// //     cursor: "pointer",
// //     fontSize: "14px",
// //     color: checked ? "#111" : "#555",
// //     fontFamily: "serif",
// //     transition: "color 0.15s",
// //   });

// //   const checkboxWrap = (checked) => ({
// //     width: "16px",
// //     height: "16px",
// //     border: checked ? "2px solid #8a4aa2" : "1px solid #bbb",
// //     background: checked ? "#8a4aa2" : "#fff",
// //     borderRadius: "2px",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     flexShrink: 0,
// //     transition: "all 0.15s",
// //   });

// //   const checkmark = {
// //     width: "8px",
// //     height: "5px",
// //     borderLeft: "1.5px solid #fff",
// //     borderBottom: "1.5px solid #fff",
// //     transform: "rotate(-45deg) translateY(-1px)",
// //     display: "block",
// //   };

// //   const countStyle = {
// //     marginLeft: "auto",
// //     fontSize: "12px",
// //     color: "#aaa",
// //     fontFamily: "inherit",
// //   };

// //   const priceValuesRow = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     marginBottom: "12px",
// //     fontSize: "13px",
// //     fontFamily: "serif",
// //     color: "#444",
// //   };

// //   const rangeTrackStyle = {
// //     width: "100%",
// //     WebkitAppearance: "none",
// //     appearance: "none",
// //     height: "2px",
// //     background: `linear-gradient(to right, #8a4aa2 0%, #8a4aa2 ${maxPrice > 0 ? (priceRange / maxPrice) * 100 : 0}%, #ddd ${maxPrice > 0 ? (priceRange / maxPrice) * 100 : 0}%, #ddd 100%)`,
// //     outline: "none",
// //     cursor: "pointer",
// //     borderRadius: "2px",
// //     marginBottom: "6px",
// //     accentColor: "#8a4aa2",
// //   };

// //   const emptyText = {
// //     fontSize: "13px",
// //     color: "#aaa",
// //     fontFamily: "serif",
// //     fontStyle: "italic",
// //     paddingBottom: "12px",
// //   };

// //   return (
// //     <div style={sidebar}>
// //       <div style={sidebarInner}>

// //         {/* ── Header ── */}
// //         <div style={filterHeader}>
// //           <span style={filterTitle}>Filters</span>
// //           <button style={clearBtn} onClick={hasActiveFilters ? clearAll : undefined}>
// //             Clear all
// //           </button>
// //         </div>

// //         {/* ── Dynamic filter sections ── */}
// //         {Object.entries(derivedFilters).map(([sectionName, options]) => (
// //           <div key={sectionName} style={section}>
// //             <div style={sectionHeaderRow} onClick={() => toggleSection(sectionName)}>
// //               <span style={sectionLabel}>{sectionName}</span>
// //               <span style={chevronStyle}>
// //                 {isSectionOpen(sectionName) ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
// //               </span>
// //             </div>

// //             {isSectionOpen(sectionName) && (
// //               <div style={optionsWrap}>
// //                 {options.length > 0 ? options.map((option) => {
// //                   const checked = (selectedFilters[sectionName] || []).includes(option);
// //                   const count   = getCount(sectionName, option);
// //                   return (
// //                     <label
// //                       key={option}
// //                       style={optionLabel(checked)}
// //                       onClick={() => toggleItem(sectionName, option)}
// //                     >
// //                       {/* Custom styled checkbox */}
// //                       <span style={checkboxWrap(checked)}>
// //                         {checked && <span style={checkmark} />}
// //                       </span>
// //                       <span>{option}</span>
// //                       <span style={countStyle}>{count}</span>
// //                     </label>
// //                   );
// //                 }) : (
// //                   <div style={emptyText}>No options available</div>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //         {/* ── Price range ── */}
// //         <div style={section}>
// //           <div style={sectionHeaderRow} onClick={() => toggleSection("price")}>
// //             <span style={sectionLabel}>Price</span>
// //             <span style={chevronStyle}>
// //               {isSectionOpen("price") ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
// //             </span>
// //           </div>

// //           {isSectionOpen("price") && (
// //             <div style={optionsWrap}>
// //               <div style={priceValuesRow}>
// //                 <span>₹ 0</span>
// //                 <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
// //               </div>
// //               <input
// //                 type="range"
// //                 min="0"
// //                 max={maxPrice || 1}
// //                 value={priceRange}
// //                 onChange={(e) => setPriceRange(Number(e.target.value))}
// //                 style={rangeTrackStyle}
// //               />
// //             </div>
// //           )}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }





// import React, { useMemo, useState } from "react";
// import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// export default function Filter({
//   products = [],
//   selectedFilters,
//   setSelectedFilters,
//   priceRange,
//   setPriceRange,
//   maxPrice,
// }) {
//   const [openSections, setOpenSections] = useState({});

//   // ── Derive filter options from the actual product fields ─────────────────
//   const derivedFilters = useMemo(() => {
//     const category = new Set();
//     const metal    = new Set();
//     const purity   = new Set();

//     products.forEach((p) => {
//       if (p.category  && p.category.trim())  category.add(p.category.trim());
//       if (p.metalType && p.metalType.trim()) metal.add(p.metalType.trim());
//       if (p.purity    && p.purity.trim())    purity.add(p.purity.trim());
//     });

//     const result = {};
//     if (category.size > 0) result["Category"] = [...category];
//     if (metal.size > 0)    result["Metal"]    = [...metal];
//     if (purity.size > 0)   result["Purity"]   = [...purity];
//     return result;
//   }, [products]);

//   const filterFieldMap = {
//     Category: "category",
//     Metal:    "metalType",
//     Purity:   "purity",
//   };

//   const toggleSection = (key) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [key]: prev[key] === undefined ? false : !prev[key],
//     }));
//   };

//   const toggleItem = (sectionName, value) => {
//     const current = selectedFilters[sectionName] || [];
//     setSelectedFilters((prev) => ({
//       ...prev,
//       [sectionName]: current.includes(value)
//         ? current.filter((v) => v !== value)
//         : [...current, value],
//     }));
//   };

//   const getCount = (sectionName, value) => {
//     const field = filterFieldMap[sectionName];
//     if (!field) return 0;
//     return products.filter(
//       (p) => (p[field] || "").trim().toLowerCase() === value.trim().toLowerCase()
//     ).length;
//   };

//   const hasActiveFilters =
//     Object.values(selectedFilters).some((v) => v && v.length > 0) ||
//     priceRange < maxPrice;

//   const clearAll = () => {
//     setSelectedFilters({});
//     setPriceRange(maxPrice);
//   };

//   const isSectionOpen = (key) =>
//     openSections[key] === undefined ? true : openSections[key];

//   // ── Styles ────────────────────────────────────────────────────────────────
//   const sidebar = {
//     width: "260px",
//     minWidth: "260px",
//     background: "#fff",
//     borderRight: "1px solid #e8e0ef",
//     height: "100vh",
//     overflowY: "auto",
//     position: "sticky",
//     top: 0,
//     boxSizing: "border-box",
//     // custom scrollbar via global CSS ideally; this is a fallback
//   };

//   const sidebarInner = {
//     padding: "32px 24px",
//   };

//   const filterHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "baseline",
//     marginBottom: "28px",
//   };

//   const filterTitle = {
//     fontSize: "11px",
//     letterSpacing: "5px",
//     fontWeight: "600",
//     color: "#111",
//     textTransform: "uppercase",
//   };

//   const clearBtn = {
//     background: "none",
//     border: "none",
//     padding: 0,
//     fontSize: "11px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     color: hasActiveFilters ? "#8a4aa2" : "#bbb",
//     cursor: hasActiveFilters ? "pointer" : "default",
//   };

//   const section = {
//     marginBottom: "0",
//     borderBottom: "1px solid #ede6f4",
//   };

//   const sectionHeaderRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     cursor: "pointer",
//     padding: "16px 0",
//     userSelect: "none",
//   };

//   const sectionLabel = {
//     fontSize: "11px",
//     letterSpacing: "4px",
//     fontWeight: "600",
//     color: "#333",
//     textTransform: "uppercase",
//   };

//   const chevronStyle = {
//     color: "#888",
//     flexShrink: 0,
//   };

//   const optionsWrap = {
//     paddingBottom: "16px",
//   };

//   const optionLabel = (checked) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "6px 0",
//     cursor: "pointer",
//     fontSize: "14px",
//     color: checked ? "#111" : "#555",
//     transition: "color 0.15s",
//   });

//   const checkboxWrap = (checked) => ({
//     width: "16px",
//     height: "16px",
//     border: checked ? "2px solid #8a4aa2" : "1px solid #bbb",
//     background: checked ? "#8a4aa2" : "#fff",
//     borderRadius: "2px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//     transition: "all 0.15s",
//   });

//   const checkmark = {
//     width: "8px",
//     height: "5px",
//     borderLeft: "1.5px solid #fff",
//     borderBottom: "1.5px solid #fff",
//     transform: "rotate(-45deg) translateY(-1px)",
//     display: "block",
//   };

//   const countStyle = {
//     marginLeft: "auto",
//     fontSize: "12px",
//     color: "#aaa",
//     fontFamily: "inherit",
//   };

//   const priceValuesRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "12px",
//     fontSize: "13px",
//     color: "#444",
//   };

//   const rangeTrackStyle = {
//     width: "100%",
//     WebkitAppearance: "none",
//     appearance: "none",
//     height: "2px",
//     background: `linear-gradient(to right, #8a4aa2 0%, #8a4aa2 ${maxPrice > 0 ? (priceRange / maxPrice) * 100 : 0}%, #ddd ${maxPrice > 0 ? (priceRange / maxPrice) * 100 : 0}%, #ddd 100%)`,
//     outline: "none",
//     cursor: "pointer",
//     borderRadius: "2px",
//     marginBottom: "6px",
//     accentColor: "#8a4aa2",
//   };

//   const emptyText = {
//     fontSize: "13px",
//     color: "#aaa",
//     fontStyle: "italic",
//     paddingBottom: "12px",
//   };

//   return (
//     <div style={sidebar}>
//       <div style={sidebarInner}>

//         {/* ── Header ── */}
//         <div style={filterHeader}>
//           <span style={filterTitle}>Filters</span>
//           <button style={clearBtn} onClick={hasActiveFilters ? clearAll : undefined}>
//             Clear all
//           </button>
//         </div>

//         {/* ── Dynamic filter sections ── */}
//         {Object.entries(derivedFilters).map(([sectionName, options]) => (
//           <div key={sectionName} style={section}>
//             <div style={sectionHeaderRow} onClick={() => toggleSection(sectionName)}>
//               <span style={sectionLabel}>{sectionName}</span>
//               <span style={chevronStyle}>
//                 {isSectionOpen(sectionName) ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
//               </span>
//             </div>

//             {isSectionOpen(sectionName) && (
//               <div style={optionsWrap}>
//                 {options.length > 0 ? options.map((option) => {
//                   const checked = (selectedFilters[sectionName] || []).includes(option);
//                   const count   = getCount(sectionName, option);
//                   return (
//                     <label
//                       key={option}
//                       style={optionLabel(checked)}
//                       onClick={() => toggleItem(sectionName, option)}
//                     >
//                       {/* Custom styled checkbox */}
//                       <span style={checkboxWrap(checked)}>
//                         {checked && <span style={checkmark} />}
//                       </span>
//                       <span>{option}</span>
//                       <span style={countStyle}>{count}</span>
//                     </label>
//                   );
//                 }) : (
//                   <div style={emptyText}>No options available</div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}

//         {/* ── Price range ── */}
//         <div style={section}>
//           <div style={sectionHeaderRow} onClick={() => toggleSection("price")}>
//             <span style={sectionLabel}>Price</span>
//             <span style={chevronStyle}>
//               {isSectionOpen("price") ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
//             </span>
//           </div>

//           {isSectionOpen("price") && (
//             <div style={optionsWrap}>
//               <div style={priceValuesRow}>
//                 <span>₹ 0</span>
//                 <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
//               </div>
//               <input
//                 type="range"
//                 min="0"
//                 max={maxPrice || 1}
//                 value={priceRange}
//                 onChange={(e) => setPriceRange(Number(e.target.value))}
//                 style={rangeTrackStyle}
//               />
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useMemo, useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

export default function Filter({
  products = [],
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
  maxPrice,
}) {
  const [openSections, setOpenSections] = useState({});

  // ── Derive filter options from the actual product fields ─────────────────
  const derivedFilters = useMemo(() => {
    const category = new Set();
    const metal    = new Set();
    const purity   = new Set();

    products.forEach((p) => {
      if (p.category  && p.category.trim())  category.add(p.category.trim());
      if (p.metalType && p.metalType.trim()) metal.add(p.metalType.trim());
      if (p.purity    && p.purity.trim())    purity.add(p.purity.trim());
    });

    const result = {};
    if (category.size > 0) result["Category"] = [...category];
    if (metal.size > 0)    result["Metal"]    = [...metal];
    if (purity.size > 0)   result["Purity"]   = [...purity];
    return result;
  }, [products]);

  const filterFieldMap = {
    Category: "category",
    Metal:    "metalType",
    Purity:   "purity",
  };

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: prev[key] === undefined ? false : !prev[key],
    }));
  };

  const toggleItem = (sectionName, value) => {
    const current = selectedFilters[sectionName] || [];
    setSelectedFilters((prev) => ({
      ...prev,
      [sectionName]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    }));
  };

  const getCount = (sectionName, value) => {
    const field = filterFieldMap[sectionName];
    if (!field) return 0;
    return products.filter(
      (p) => (p[field] || "").trim().toLowerCase() === value.trim().toLowerCase()
    ).length;
  };

  const hasActiveFilters =
    Object.values(selectedFilters).some((v) => v && v.length > 0) ||
    priceRange < maxPrice;

  const clearAll = () => {
    setSelectedFilters({});
    setPriceRange(maxPrice);
  };

  const isSectionOpen = (key) =>
    openSections[key] === undefined ? true : openSections[key];

  // ── Styles ────────────────────────────────────────────────────────────────
  const sidebar = {
    width: "260px",
    minWidth: "260px",
    background: "#fff",
    borderRight: "1px solid #e8e0ef",
    height: "100vh",
    overflowY: "auto",
    position: "sticky",
    top: 0,
    boxSizing: "border-box",
    // custom scrollbar via global CSS ideally; this is a fallback
  };

  const sidebarInner = {
    padding: "32px 24px",
  };

  const filterHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "28px",
  };

  const filterTitle = {
    fontSize: "13px",
    letterSpacing: "5px",
    fontWeight: "700",
    color: "#111",
    textTransform: "uppercase",
  };

  const clearBtn = {
    background: "none",
    border: "none",
    padding: 0,
    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "600",
    color: hasActiveFilters ? "#8a4aa2" : "#bbb",
    cursor: hasActiveFilters ? "pointer" : "default",
  };

  const section = {
    marginBottom: "0",
    borderBottom: "1px solid #ede6f4",
  };

  const sectionHeaderRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "16px 0",
    userSelect: "none",
  };

  const sectionLabel = {
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: "700",
    color: "#222",
    textTransform: "uppercase",
  };

  const chevronStyle = {
    color: "#888",
    flexShrink: 0,
  };

  const optionsWrap = {
    paddingBottom: "16px",
  };

  const optionLabel = (checked) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "6px 0",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: checked ? "600" : "400",
    color: checked ? "#111" : "#444",
    transition: "color 0.15s",
  });

  const checkboxWrap = (checked) => ({
    width: "16px",
    height: "16px",
    border: checked ? "2px solid #8a4aa2" : "1px solid #bbb",
    background: checked ? "#8a4aa2" : "#fff",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.15s",
  });

  const checkmark = {
    width: "8px",
    height: "5px",
    borderLeft: "1.5px solid #fff",
    borderBottom: "1.5px solid #fff",
    transform: "rotate(-45deg) translateY(-1px)",
    display: "block",
  };

  const countStyle = {
    marginLeft: "auto",
    fontSize: "12px",
    color: "#aaa",
    fontFamily: "inherit",
  };

  const priceValuesRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
  };

  const rangeTrackStyle = {
    width: "100%",
    WebkitAppearance: "none",
    appearance: "none",
    height: "2px",
    background: `linear-gradient(to right, #8a4aa2 0%, #8a4aa2 ${maxPrice > 0 ? (priceRange / maxPrice) * 100 : 0}%, #ddd ${maxPrice > 0 ? (priceRange / maxPrice) * 100 : 0}%, #ddd 100%)`,
    outline: "none",
    cursor: "pointer",
    borderRadius: "2px",
    marginBottom: "6px",
    accentColor: "#8a4aa2",
  };

  const emptyText = {
    fontSize: "13px",
    color: "#aaa",
    fontStyle: "italic",
    paddingBottom: "12px",
  };

  return (
    <div style={sidebar}>
      <div style={sidebarInner}>

        {/* ── Header ── */}
        <div style={filterHeader}>
          <span style={filterTitle}>Filters</span>
          <button style={clearBtn} onClick={hasActiveFilters ? clearAll : undefined}>
            Clear all
          </button>
        </div>

        {/* ── Dynamic filter sections ── */}
        {Object.entries(derivedFilters).map(([sectionName, options]) => (
          <div key={sectionName} style={section}>
            <div style={sectionHeaderRow} onClick={() => toggleSection(sectionName)}>
              <span style={sectionLabel}>{sectionName}</span>
              <span style={chevronStyle}>
                {isSectionOpen(sectionName) ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
              </span>
            </div>

            {isSectionOpen(sectionName) && (
              <div style={optionsWrap}>
                {options.length > 0 ? options.map((option) => {
                  const checked = (selectedFilters[sectionName] || []).includes(option);
                  const count   = getCount(sectionName, option);
                  return (
                    <label
                      key={option}
                      style={optionLabel(checked)}
                      onClick={() => toggleItem(sectionName, option)}
                    >
                      {/* Custom styled checkbox */}
                      <span style={checkboxWrap(checked)}>
                        {checked && <span style={checkmark} />}
                      </span>
                      <span>{option}</span>
                      <span style={countStyle}>{count}</span>
                    </label>
                  );
                }) : (
                  <div style={emptyText}>No options available</div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* ── Price range ── */}
        <div style={section}>
          <div style={sectionHeaderRow} onClick={() => toggleSection("price")}>
            <span style={sectionLabel}>Price</span>
            <span style={chevronStyle}>
              {isSectionOpen("price") ? <IoChevronUp size={14} /> : <IoChevronDown size={14} />}
            </span>
          </div>

          {isSectionOpen("price") && (
            <div style={optionsWrap}>
              <div style={priceValuesRow}>
                <span>₹ 0</span>
                <span>₹ {Number(priceRange || 0).toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="0"
                max={maxPrice || 1}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                style={rangeTrackStyle}
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
