
// // import React from "react";

// // export default function MetalTypes({
// //   storedMetals = [],      // [{ name, slug, description }, ...] or legacy plain strings
// //   metalPurities = {},
// //   setShowAddMetalModal,
// //   confirmDeleteMetal,
// //   confirmDeletePurity,
// //   getMetalProductCount,
// //   purityInputs = {},
// //   setPurityInputs,
// //   showPurityInputFor,
// //   setShowPurityInputFor,
// //   addPurityToMetal,
// // }) {
// //   // Normalise — support both plain string ("Gold") and object ({ name, slug, description })
// //   const normalise = (m) =>
// //     typeof m === "string" ? { name: m, slug: "", description: "" } : m;

// //   const metalPageWrap = { width: "100%", maxWidth: "1300px" };

// //   const metalHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "12px",
// //     marginBottom: "24px",
// //     flexWrap: "wrap",
// //   };

// //   const metalTitle    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
// //   const metalSubTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

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

// //   const metalGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
// //     gap: "22px",
// //   };

// //   const metalCard = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "18px",
// //     padding: "22px",
// //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// //   };

// //   const metalCardHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "12px",
// //     marginBottom: "6px",
// //   };

// //   const metalCardTitle = { fontSize: "20px", fontWeight: "700", color: "#222", margin: 0 };
// //   const metalCardSlug  = { fontSize: "12px", color: "#999", marginBottom: "6px" };
// //   const metalCardDesc  = { fontSize: "13px", color: "#555", lineHeight: "1.5", marginBottom: "12px" };
// //   const metalCardCount = { fontSize: "15px", color: "#6f3f8f", fontWeight: "600", marginBottom: "14px" };

// //   const removeMetalButton = {
// //     background: "#fff1f1",
// //     color: "#b33939",
// //     border: "1px solid #f0c7c7",
// //     borderRadius: "8px",
// //     padding: "8px 12px",
// //     fontSize: "12px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     whiteSpace: "nowrap",
// //   };

// //   const puritySectionTitle = { fontSize: "14px", fontWeight: "700", color: "#333", marginBottom: "10px" };
// //   const purityList         = { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "14px" };

// //   const purityItem = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     gap: "10px",
// //     padding: "10px 12px",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "10px",
// //     background: "#faf7fd",
// //   };

// //   const purityText = { fontSize: "14px", fontWeight: "600", color: "#4b3460" };

// //   const deletePurityButton = {
// //     background: "#fff1f1",
// //     color: "#b33939",
// //     border: "1px solid #f0c7c7",
// //     borderRadius: "7px",
// //     padding: "7px 10px",
// //     fontSize: "12px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     whiteSpace: "nowrap",
// //   };

// //   const addPurityButton = {
// //     background: "#f3e9fb",
// //     color: "#5d3d75",
// //     border: "1px solid #d8c9e4",
// //     borderRadius: "8px",
// //     padding: "10px 14px",
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     whiteSpace: "nowrap",
// //   };

// //   const purityInputWrap = { marginTop: "14px", display: "flex", flexDirection: "column", gap: "10px" };

// //   const purityInput = {
// //     height: "42px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "0 12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     width: "100%",
// //     boxSizing: "border-box",
// //     background: "#fff",
// //   };

// //   const purityActionRow = { display: "flex", gap: "10px", flexWrap: "wrap" };

// //   const saveButton = {
// //     background: "#6f3f8f",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     padding: "10px 14px",
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //   };

// //   const cancelButton = {
// //     background: "#fff",
// //     color: "#5d3d75",
// //     border: "1px solid #d8c9e4",
// //     borderRadius: "8px",
// //     padding: "10px 14px",
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     cursor: "pointer",
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

// //   return (
// //     <div style={metalPageWrap}>
// //       <div style={metalHeader}>
// //         <div>
// //           <h1 style={metalTitle}>Metal Types</h1>
// //           <div style={metalSubTitle}>Add and manage available metal types and their purity options</div>
// //         </div>
// //         <button type="button" style={addButton} onClick={() => setShowAddMetalModal(true)}>
// //           + Add Metal
// //         </button>
// //       </div>

// //       {storedMetals.length > 0 ? (
// //         <div style={metalGrid}>
// //           {storedMetals.map((raw) => {
// //             const metal       = normalise(raw);
// //             const purities    = metalPurities[metal.name] || [];
// //             const currentInput = purityInputs[metal.name] || "";

// //             return (
// //               <div key={metal.name} style={metalCard}>
// //                 {/* ── Header row ── */}
// //                 <div style={metalCardHeader}>
// //                   <div style={{ minWidth: 0 }}>
// //                     <h3 style={metalCardTitle}>{metal.name}</h3>
// //                     {metal.slug && (
// //                       <div style={metalCardSlug}>/{metal.slug}</div>
// //                     )}
// //                   </div>
// //                   <button
// //                     type="button"
// //                     style={removeMetalButton}
// //                     onClick={() => confirmDeleteMetal(metal.id)}
// //                   >
// //                     Remove
// //                   </button>
// //                 </div>

// //                 {/* ── Description ── */}
// //                 {metal.description && (
// //                   <div style={metalCardDesc}>{metal.description}</div>
// //                 )}

// //                 <div style={metalCardCount}>
// //                   Total Products: {getMetalProductCount(metal.name)}
// //                 </div>

// //                 <div style={puritySectionTitle}>Purity Options</div>

// //                 {purities.length > 0 ? (
// //                   <div style={purityList}>
// //                     {purities.map((purity) => {
// //                       // purity can be { id, name, slug } object or legacy plain string
// //                       const purityName = purity?.name ?? purity;
// //                       const purityKey  = purity?.id  ?? purityName;
// //                       return (
// //                         <div key={purityKey} style={purityItem}>
// //                           <div style={purityText}>{purityName}</div>
// //                           <button
// //                             type="button"
// //                             style={deletePurityButton}
// //                             onClick={() => confirmDeletePurity(metal.name, purity)}
// //                           >
// //                             Delete
// //                           </button>
// //                         </div>
// //                       );
// //                     })}
// //                   </div>
// //                 ) : (
// //                   <div style={{ fontSize: "13px", color: "#777", marginBottom: "14px" }}>
// //                     No purity added yet.
// //                   </div>
// //                 )}

// //                 {showPurityInputFor === metal.name ? (
// //                   <div style={purityInputWrap}>
// //                     <input
// //                       type="text"
// //                       placeholder="Enter purity like 22 Carat or 925"
// //                       value={currentInput}
// //                       onChange={(e) =>
// //                         setPurityInputs((prev) => ({ ...prev, [metal.name]: e.target.value }))
// //                       }
// //                       style={purityInput}
// //                     />
// //                     <div style={purityActionRow}>
// //                       <button type="button" style={saveButton} onClick={() => addPurityToMetal(metal.name)}>
// //                         Save Purity
// //                       </button>
// //                       <button
// //                         type="button"
// //                         style={cancelButton}
// //                         onClick={() => {
// //                           setShowPurityInputFor(null);
// //                           setPurityInputs((prev) => ({ ...prev, [metal.name]: "" }));
// //                         }}
// //                       >
// //                         Cancel
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   <button
// //                     type="button"
// //                     style={addPurityButton}
// //                     onClick={() => setShowPurityInputFor(metal.name)}
// //                   >
// //                     + Add Purity
// //                   </button>
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       ) : (
// //         <div style={noProductsBox}>No metal types available.</div>
// //       )}
// //     </div>
// //   );
// // }



// import React from "react";

// export default function MetalTypes({
//   storedMetals = [],      // [{ id, name, slug, description }] from API
//   metalPurities = {},     // { "Gold": [{ id, name, slug, metal_type }, ...] }
//   setShowAddMetalModal,
//   confirmDeleteMetal,     // called with metal.id
//   confirmDeletePurity,    // called with (metalName, purityObject)
//   getMetalProductCount,
//   purityInputs = {},
//   setPurityInputs,
//   showPurityInputFor,
//   setShowPurityInputFor,
//   addPurityToMetal,
// }) {
//   // Normalise — supports both plain string (legacy) and API object { id, name, slug, description }
//   const normalise = (m) =>
//     typeof m === "string"
//       ? { id: null, name: m, slug: "", description: "" }
//       : { id: m.id ?? null, name: m.name, slug: m.slug ?? "", description: m.description ?? "" };

//   const metalPageWrap = { width: "100%", maxWidth: "1300px" };

//   const metalHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//     marginBottom: "24px",
//     flexWrap: "wrap",
//   };

//   const metalTitle    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
//   const metalSubTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

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

//   const metalGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//     gap: "22px",
//   };

//   const metalCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "18px",
//     padding: "22px",
//     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
//   };

//   const metalCardHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//     marginBottom: "6px",
//   };

//   const metalCardTitle = { fontSize: "20px", fontWeight: "700", color: "#222", margin: 0 };
//   const metalCardSlug  = { fontSize: "12px", color: "#999", marginBottom: "6px" };
//   const metalCardDesc  = { fontSize: "13px", color: "#555", lineHeight: "1.5", marginBottom: "12px" };
//   const metalCardCount = { fontSize: "15px", color: "#6f3f8f", fontWeight: "600", marginBottom: "14px" };

//   const removeMetalButton = {
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

//   const puritySectionTitle = { fontSize: "14px", fontWeight: "700", color: "#333", marginBottom: "10px" };
//   const purityList         = { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "14px" };

//   const purityItem = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "10px",
//     padding: "10px 12px",
//     border: "1px solid #e7dff0",
//     borderRadius: "10px",
//     background: "#faf7fd",
//   };

//   const purityText = { fontSize: "14px", fontWeight: "600", color: "#4b3460" };

//   const deletePurityButton = {
//     background: "#fff1f1",
//     color: "#b33939",
//     border: "1px solid #f0c7c7",
//     borderRadius: "7px",
//     padding: "7px 10px",
//     fontSize: "12px",
//     fontWeight: "700",
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   };

//   const addPurityButton = {
//     background: "#f3e9fb",
//     color: "#5d3d75",
//     border: "1px solid #d8c9e4",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     fontSize: "13px",
//     fontWeight: "700",
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   };

//   const purityInputWrap = { marginTop: "14px", display: "flex", flexDirection: "column", gap: "10px" };

//   const purityInput = {
//     height: "42px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0 12px",
//     fontSize: "14px",
//     outline: "none",
//     width: "100%",
//     boxSizing: "border-box",
//     background: "#fff",
//   };

//   const purityActionRow = { display: "flex", gap: "10px", flexWrap: "wrap" };

//   const saveButton = {
//     background: "#6f3f8f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     fontSize: "13px",
//     fontWeight: "700",
//     cursor: "pointer",
//   };

//   const cancelButton = {
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
//     <div style={metalPageWrap}>
//       <div style={metalHeader}>
//         <div>
//           <h1 style={metalTitle}>Metal Types</h1>
//           <div style={metalSubTitle}>Add and manage available metal types and their purity options</div>
//         </div>
//         <button type="button" style={addButton} onClick={() => setShowAddMetalModal(true)}>
//           + Add Metal
//         </button>
//       </div>

//       {storedMetals.length > 0 ? (
//         <div style={metalGrid}>
//           {storedMetals.map((raw) => {
//             const metal        = normalise(raw);
//             const purities     = metalPurities[metal.name] || [];
//             const currentInput = purityInputs[metal.name] || "";

//             return (
//               <div key={metal.id ?? metal.name} style={metalCard}>

//                 {/* ── Header row ── */}
//                 <div style={metalCardHeader}>
//                   <div style={{ minWidth: 0 }}>
//                     <h3 style={metalCardTitle}>{metal.name}</h3>
//                     {metal.slug && <div style={metalCardSlug}>/{metal.slug}</div>}
//                   </div>
//                   <button
//                     type="button"
//                     style={removeMetalButton}
//                     onClick={() => confirmDeleteMetal(metal.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>

//                 {/* ── Description ── */}
//                 {metal.description && (
//                   <div style={metalCardDesc}>{metal.description}</div>
//                 )}

//                 <div style={metalCardCount}>
//                   Total Products: {getMetalProductCount(metal.name)}
//                 </div>

//                 <div style={puritySectionTitle}>Purity Options</div>

//                 {purities.length > 0 ? (
//                   <div style={purityList}>
//                     {purities.map((purity) => {
//                       // purity = { id, name, slug, metal_type } from API, or plain string (legacy)
//                       const purityName = purity?.name ?? purity;
//                       const purityKey  = purity?.id  ?? purityName;
//                       return (
//                         <div key={purityKey} style={purityItem}>
//                           <div style={purityText}>{purityName}</div>
//                           <button
//                             type="button"
//                             style={deletePurityButton}
//                             onClick={() => confirmDeletePurity(metal.name, purity)}
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 ) : (
//                   <div style={{ fontSize: "13px", color: "#777", marginBottom: "14px" }}>
//                     No purity added yet.
//                   </div>
//                 )}

//                 {showPurityInputFor === metal.name ? (
//                   <div style={purityInputWrap}>
//                     <input
//                       type="text"
//                       placeholder="Enter purity like 22 Carat or 925"
//                       value={currentInput}
//                       onChange={(e) =>
//                         setPurityInputs((prev) => ({ ...prev, [metal.name]: e.target.value }))
//                       }
//                       style={purityInput}
//                     />
//                     <div style={purityActionRow}>
//                       <button
//                         type="button"
//                         style={saveButton}
//                         onClick={() => addPurityToMetal(metal.name)}
//                       >
//                         Save Purity
//                       </button>
//                       <button
//                         type="button"
//                         style={cancelButton}
//                         onClick={() => {
//                           setShowPurityInputFor(null);
//                           setPurityInputs((prev) => ({ ...prev, [metal.name]: "" }));
//                         }}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     style={addPurityButton}
//                     onClick={() => setShowPurityInputFor(metal.name)}
//                   >
//                     + Add Purity
//                   </button>
//                 )}

//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div style={noProductsBox}>No metal types available.</div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";

export default function MetalTypes({
  storedMetals = [],      // [{ id, name, slug, description }] from API
  metalPurities = {},     // { "Gold": [{ id, name, slug, metal_type }, ...] }
  setShowAddMetalModal,
  confirmDeleteMetal,     // called with metal.id
  confirmDeletePurity,    // called with (metalName, purityObject)
  getMetalProductCount,
  addPurityToMetal,       // called with (metalName, { name, slug })
}) {
  // ── Local purity modal state ──────────────────────────────────────────────
  const [showPurityModal, setShowPurityModal] = useState(false);
  const [purityForm, setPurityForm] = useState({ name: "", slug: "", metal_type: "" });
  const [puritySaving, setPuritySaving] = useState(false);

  // Normalise — supports API object { id, name, slug, description } or legacy plain string
  const normalise = (m) =>
    typeof m === "string"
      ? { id: null, name: m, slug: "", description: "" }
      : { id: m.id ?? null, name: m.name, slug: m.slug ?? "", description: m.description ?? "" };

  const handleOpenPurityModal = () => {
    setPurityForm({
      name: "",
      slug: "",
      metal_type: storedMetals.length > 0 ? normalise(storedMetals[0]).name : "",
    });
    setShowPurityModal(true);
  };

  const handleSavePurity = async () => {
    const name = purityForm.name.trim();
    if (!name) { alert("Please enter a purity name."); return; }
    if (!purityForm.metal_type) { alert("Please select a metal type."); return; }
    const slug = purityForm.slug.trim() ||
      name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    setPuritySaving(true);
    try {
      await addPurityToMetal(purityForm.metal_type, { name, slug });
      setShowPurityModal(false);
      setPurityForm({ name: "", slug: "", metal_type: "" });
    } finally {
      setPuritySaving(false);
    }
  };

  // ── Styles ────────────────────────────────────────────────────────────────
  const metalPageWrap = { width: "100%", maxWidth: "1300px" };

  const metalHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  };

  const metalTitle    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
  const metalSubTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

  const addMetalButton = {
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

  const addPurityHeaderButton = {
    background: "#f3e9fb",
    color: "#5d3d75",
    border: "1px solid #d8c9e4",
    borderRadius: "8px",
    padding: "11px 18px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const metalGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "22px",
  };

  const metalCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
  };

  const metalCardHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "6px",
  };

  const metalCardTitle = { fontSize: "20px", fontWeight: "700", color: "#222", margin: 0 };
  const metalCardSlug  = { fontSize: "12px", color: "#999", marginBottom: "6px" };
  const metalCardDesc  = { fontSize: "13px", color: "#555", lineHeight: "1.5", marginBottom: "12px" };
  const metalCardCount = { fontSize: "15px", color: "#6f3f8f", fontWeight: "600", marginBottom: "14px" };

  const removeMetalButton = {
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

  const puritySectionTitle = { fontSize: "14px", fontWeight: "700", color: "#333", marginBottom: "10px" };
  const purityListStyle    = { display: "flex", flexDirection: "column", gap: "8px" };

  const purityItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "9px 12px",
    border: "1px solid #e7dff0",
    borderRadius: "10px",
    background: "#faf7fd",
  };

  const purityText = { fontSize: "14px", fontWeight: "600", color: "#4b3460" };

  const deletePurityButton = {
    background: "#fff1f1",
    color: "#b33939",
    border: "1px solid #f0c7c7",
    borderRadius: "7px",
    padding: "5px 10px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
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

  // Modal
  const modalOverlay = {
    position: "fixed", inset: 0, background: "rgba(47,36,56,0.45)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "20px", zIndex: 999,
  };
  const modalCard    = { width: "100%", maxWidth: "480px", background: "#fff", borderRadius: "16px", padding: "26px", boxShadow: "0 20px 50px rgba(0,0,0,0.18)" };
  const modalTitle   = { fontSize: "22px", fontWeight: "700", marginBottom: "20px" };
  const modalActions = { display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" };
  const fieldWrap    = { marginBottom: "16px" };
  const fieldLabel   = { fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" };
  const fieldInput   = { height: "44px", border: "1px solid #ddd", borderRadius: "8px", padding: "0 12px", fontSize: "14px", width: "100%", outline: "none", background: "#fff", boxSizing: "border-box" };
  const cancelBtn    = { border: "1px solid #ddd", background: "#fff", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", cursor: "pointer" };
  const confirmBtn   = { background: "#6f3f8f", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer" };

  return (
    <div style={metalPageWrap}>

      {/* ── Page Header ── */}
      <div style={metalHeader}>
        <div>
          <h1 style={metalTitle}>Metal Types</h1>
          <div style={metalSubTitle}>Add and manage available metal types and their purity options</div>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button type="button" style={addPurityHeaderButton} onClick={handleOpenPurityModal}>
            + Add Purity
          </button>
          <button type="button" style={addMetalButton} onClick={() => setShowAddMetalModal(true)}>
            + Add Metal
          </button>
        </div>
      </div>

      {/* ── Metal Cards ── */}
      {storedMetals.length > 0 ? (
        <div style={metalGrid}>
          {storedMetals.map((raw) => {
            const metal    = normalise(raw);
            const purities = metalPurities[metal.name] || [];

            return (
              <div key={metal.id ?? metal.name} style={metalCard}>

                {/* Card Header */}
                <div style={metalCardHeader}>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={metalCardTitle}>{metal.name}</h3>
                    {metal.slug && <div style={metalCardSlug}>/{metal.slug}</div>}
                  </div>
                  <button
                    type="button"
                    style={removeMetalButton}
                    onClick={() => confirmDeleteMetal(metal.id)}
                  >
                    Remove
                  </button>
                </div>

                {/* Description */}
                {metal.description && (
                  <div style={metalCardDesc}>{metal.description}</div>
                )}

                <div style={metalCardCount}>
                  Total Products: {getMetalProductCount(metal.name)}
                </div>

                {/* Purity list — read only with delete */}
                <div style={puritySectionTitle}>Purity Options</div>

                {purities.length > 0 ? (
                  <div style={purityListStyle}>
                    {purities.map((purity) => {
                      const purityName = purity?.name ?? purity;
                      const purityKey  = purity?.id  ?? purityName;
                      return (
                        <div key={purityKey} style={purityItem}>
                          <div style={purityText}>{purityName}</div>
                          <button
                            type="button"
                            style={deletePurityButton}
                            onClick={() => confirmDeletePurity(metal.name, purity)}
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ fontSize: "13px", color: "#aaa" }}>
                    No purities yet. Use "+ Add Purity" above.
                  </div>
                )}

              </div>
            );
          })}
        </div>
      ) : (
        <div style={noProductsBox}>No metal types available.</div>
      )}

      {/* ── Add Purity Modal ── */}
      {showPurityModal && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Add Purity</div>

            {/* Metal Type — dropdown */}
            <div style={fieldWrap}>
              <label style={fieldLabel}>
                Metal Type <span style={{ color: "#b33939" }}>*</span>
              </label>
              <select
                value={purityForm.metal_type}
                onChange={(e) => setPurityForm((p) => ({ ...p, metal_type: e.target.value }))}
                style={{ ...fieldInput, appearance: "auto", cursor: "pointer" }}
              >
                <option value="">Select metal type</option>
                {storedMetals.map((raw) => {
                  const m = normalise(raw);
                  return (
                    <option key={m.id ?? m.name} value={m.name}>
                      {m.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Purity Name */}
            <div style={fieldWrap}>
              <label style={fieldLabel}>
                Name <span style={{ color: "#b33939" }}>*</span>
              </label>
              <input
                type="text"
                value={purityForm.name}
                onChange={(e) => setPurityForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. 22 Carat"
                style={fieldInput}
                onKeyDown={(e) => e.key === "Enter" && handleSavePurity()}
              />
            </div>

            {/* Slug */}
            <div style={fieldWrap}>
              <label style={fieldLabel}>
                Slug{" "}
                <span style={{ fontSize: "11px", color: "#999", fontWeight: "400" }}>
                  (auto-generated if left blank)
                </span>
              </label>
              <input
                type="text"
                value={purityForm.slug}
                onChange={(e) => setPurityForm((p) => ({ ...p, slug: e.target.value }))}
                placeholder="e.g. 22-carat"
                style={fieldInput}
              />
            </div>

            <div style={modalActions}>
              <button
                style={cancelBtn}
                onClick={() => {
                  setShowPurityModal(false);
                  setPurityForm({ name: "", slug: "", metal_type: "" });
                }}
              >
                Cancel
              </button>
              <button style={confirmBtn} onClick={handleSavePurity} disabled={puritySaving}>
                {puritySaving ? "Saving…" : "Add Purity"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
