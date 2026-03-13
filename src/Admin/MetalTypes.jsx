// // // // // // import React from "react";

// // // // // // export default function MetalTypes({
// // // // // //     storedMetals,
// // // // // //     setShowAddMetalModal,
// // // // // //     getMetalProductCount,
// // // // // //     confirmDeleteMetal,
// // // // // // }) {
// // // // // //     const metalPageWrap = {
// // // // // //         width: "100%",
// // // // // //         maxWidth: "1300px",
// // // // // //     };

// // // // // //     const metalHeader = {
// // // // // //         display: "flex",
// // // // // //         justifyContent: "space-between",
// // // // // //         alignItems: "flex-start",
// // // // // //         gap: "12px",
// // // // // //         marginBottom: "24px",
// // // // // //         flexWrap: "wrap",
// // // // // //     };

// // // // // //     const metalTitle = {
// // // // // //         fontSize: "28px",
// // // // // //         fontWeight: "700",
// // // // // //         color: "#222",
// // // // // //         margin: 0,
// // // // // //     };

// // // // // //     const metalSubTitle = {
// // // // // //         fontSize: "14px",
// // // // // //         color: "#666",
// // // // // //         marginTop: "6px",
// // // // // //     };

// // // // // //     const addButton = {
// // // // // //         background: "#6f3f8f",
// // // // // //         color: "#fff",
// // // // // //         border: "none",
// // // // // //         borderRadius: "8px",
// // // // // //         padding: "11px 18px",
// // // // // //         fontSize: "14px",
// // // // // //         fontWeight: "700",
// // // // // //         cursor: "pointer",
// // // // // //         whiteSpace: "nowrap",
// // // // // //     };

// // // // // //     const metalGrid = {
// // // // // //         display: "grid",
// // // // // //         gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
// // // // // //         gap: "22px",
// // // // // //     };

// // // // // //     const metalCard = {
// // // // // //         background: "#fff",
// // // // // //         border: "1px solid #e7dff0",
// // // // // //         borderRadius: "18px",
// // // // // //         padding: "22px",
// // // // // //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // // //     };

// // // // // //     const metalCardHeader = {
// // // // // //         display: "flex",
// // // // // //         justifyContent: "space-between",
// // // // // //         alignItems: "flex-start",
// // // // // //         gap: "12px",
// // // // // //         marginBottom: "12px",
// // // // // //     };

// // // // // //     const metalCardTitle = {
// // // // // //         fontSize: "20px",
// // // // // //         fontWeight: "700",
// // // // // //         color: "#222",
// // // // // //         margin: 0,
// // // // // //     };

// // // // // //     const metalCardCount = {
// // // // // //         fontSize: "15px",
// // // // // //         color: "#6f3f8f",
// // // // // //         fontWeight: "600",
// // // // // //     };

// // // // // //     const metalRemoveButton = {
// // // // // //         background: "#fff1f1",
// // // // // //         color: "#b33939",
// // // // // //         border: "1px solid #f0c7c7",
// // // // // //         borderRadius: "8px",
// // // // // //         padding: "8px 12px",
// // // // // //         fontSize: "12px",
// // // // // //         fontWeight: "700",
// // // // // //         cursor: "pointer",
// // // // // //         whiteSpace: "nowrap",
// // // // // //     };

// // // // // //     const noProductsBox = {
// // // // // //         background: "#fff",
// // // // // //         border: "1px dashed #d9c8e7",
// // // // // //         borderRadius: "16px",
// // // // // //         padding: "40px 24px",
// // // // // //         textAlign: "center",
// // // // // //         color: "#666",
// // // // // //         fontSize: "15px",
// // // // // //     };

// // // // // //     return (
// // // // // //         <div style={metalPageWrap}>
// // // // // //             <div style={metalHeader}>
// // // // // //                 <div>
// // // // // //                     <h1 style={metalTitle}>Metal Types</h1>
// // // // // //                     <div style={metalSubTitle}>
// // // // // //                         Add and manage available metal types for products
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 <button
// // // // // //                     type="button"
// // // // // //                     style={addButton}
// // // // // //                     onClick={() => setShowAddMetalModal(true)}
// // // // // //                 >
// // // // // //                     + Add Metal
// // // // // //                 </button>
// // // // // //             </div>

// // // // // //             {storedMetals.length > 0 ? (
// // // // // //                 <div style={metalGrid}>
// // // // // //                     {storedMetals.map((metal) => (
// // // // // //                         <div key={metal} style={metalCard}>
// // // // // //                             <div style={metalCardHeader}>
// // // // // //                                 <h3 style={metalCardTitle}>{metal}</h3>

// // // // // //                                 <button
// // // // // //                                     type="button"
// // // // // //                                     style={metalRemoveButton}
// // // // // //                                     onClick={() => confirmDeleteMetal(metal)}
// // // // // //                                 >
// // // // // //                                     Remove
// // // // // //                                 </button>
// // // // // //                             </div>

// // // // // //                             <div style={metalCardCount}>
// // // // // //                                 Total Products: {getMetalProductCount(metal)}
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     ))}
// // // // // //                 </div>
// // // // // //             ) : (
// // // // // //                 <div style={noProductsBox}>No metal types available.</div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // }



// // // // // import React from "react";

// // // // // export default function MetalTypes({
// // // // //     storedMetals,
// // // // //     storedPurities,
// // // // //     setShowAddMetalModal,
// // // // //     setShowAddPurityModal,
// // // // //     getMetalProductCount,
// // // // //     getPurityProductCount,
// // // // //     confirmDeleteMetal,
// // // // //     confirmDeletePurity,
// // // // // }) {
// // // // //     const metalPageWrap = {
// // // // //         width: "100%",
// // // // //         maxWidth: "1300px",
// // // // //     };

// // // // //     const metalHeader = {
// // // // //         display: "flex",
// // // // //         justifyContent: "space-between",
// // // // //         alignItems: "flex-start",
// // // // //         gap: "12px",
// // // // //         marginBottom: "24px",
// // // // //         flexWrap: "wrap",
// // // // //     };

// // // // //     const metalTitle = {
// // // // //         fontSize: "28px",
// // // // //         fontWeight: "700",
// // // // //         color: "#222",
// // // // //         margin: 0,
// // // // //     };

// // // // //     const metalSubTitle = {
// // // // //         fontSize: "14px",
// // // // //         color: "#666",
// // // // //         marginTop: "6px",
// // // // //     };

// // // // //     const actionButtonsWrap = {
// // // // //         display: "flex",
// // // // //         gap: "12px",
// // // // //         flexWrap: "wrap",
// // // // //     };

// // // // //     const addButton = {
// // // // //         background: "#6f3f8f",
// // // // //         color: "#fff",
// // // // //         border: "none",
// // // // //         borderRadius: "8px",
// // // // //         padding: "11px 18px",
// // // // //         fontSize: "14px",
// // // // //         fontWeight: "700",
// // // // //         cursor: "pointer",
// // // // //         whiteSpace: "nowrap",
// // // // //     };

// // // // //     const secondaryButton = {
// // // // //         background: "#f3e9fb",
// // // // //         color: "#5d3d75",
// // // // //         border: "1px solid #d8c9e4",
// // // // //         borderRadius: "8px",
// // // // //         padding: "11px 18px",
// // // // //         fontSize: "14px",
// // // // //         fontWeight: "700",
// // // // //         cursor: "pointer",
// // // // //         whiteSpace: "nowrap",
// // // // //     };

// // // // //     const sectionWrap = {
// // // // //         marginBottom: "34px",
// // // // //     };

// // // // //     const sectionHeading = {
// // // // //         fontSize: "20px",
// // // // //         fontWeight: "700",
// // // // //         color: "#2b2b2b",
// // // // //         margin: "0 0 16px",
// // // // //     };

// // // // //     const metalGrid = {
// // // // //         display: "grid",
// // // // //         gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
// // // // //         gap: "22px",
// // // // //     };

// // // // //     const metalCard = {
// // // // //         background: "#fff",
// // // // //         border: "1px solid #e7dff0",
// // // // //         borderRadius: "18px",
// // // // //         padding: "22px",
// // // // //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // // //     };

// // // // //     const metalCardHeader = {
// // // // //         display: "flex",
// // // // //         justifyContent: "space-between",
// // // // //         alignItems: "flex-start",
// // // // //         gap: "12px",
// // // // //         marginBottom: "12px",
// // // // //     };

// // // // //     const metalCardTitle = {
// // // // //         fontSize: "20px",
// // // // //         fontWeight: "700",
// // // // //         color: "#222",
// // // // //         margin: 0,
// // // // //     };

// // // // //     const metalCardCount = {
// // // // //         fontSize: "15px",
// // // // //         color: "#6f3f8f",
// // // // //         fontWeight: "600",
// // // // //     };

// // // // //     const metalRemoveButton = {
// // // // //         background: "#fff1f1",
// // // // //         color: "#b33939",
// // // // //         border: "1px solid #f0c7c7",
// // // // //         borderRadius: "8px",
// // // // //         padding: "8px 12px",
// // // // //         fontSize: "12px",
// // // // //         fontWeight: "700",
// // // // //         cursor: "pointer",
// // // // //         whiteSpace: "nowrap",
// // // // //     };

// // // // //     const noProductsBox = {
// // // // //         background: "#fff",
// // // // //         border: "1px dashed #d9c8e7",
// // // // //         borderRadius: "16px",
// // // // //         padding: "40px 24px",
// // // // //         textAlign: "center",
// // // // //         color: "#666",
// // // // //         fontSize: "15px",
// // // // //     };

// // // // //     return (
// // // // //         <div style={metalPageWrap}>
// // // // //             <div style={metalHeader}>
// // // // //                 <div>
// // // // //                     <h1 style={metalTitle}>Metal Types</h1>
// // // // //                     <div style={metalSubTitle}>
// // // // //                         Add and manage available metal types and purity options for products
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div style={actionButtonsWrap}>
// // // // //                     <button
// // // // //                         type="button"
// // // // //                         style={secondaryButton}
// // // // //                         onClick={() => setShowAddPurityModal(true)}
// // // // //                     >
// // // // //                         + Add Purity
// // // // //                     </button>

// // // // //                     <button
// // // // //                         type="button"
// // // // //                         style={addButton}
// // // // //                         onClick={() => setShowAddMetalModal(true)}
// // // // //                     >
// // // // //                         + Add Metal
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>

// // // // //             <div style={sectionWrap}>
// // // // //                 <h2 style={sectionHeading}>Available Metals</h2>

// // // // //                 {storedMetals.length > 0 ? (
// // // // //                     <div style={metalGrid}>
// // // // //                         {storedMetals.map((metal) => (
// // // // //                             <div key={metal} style={metalCard}>
// // // // //                                 <div style={metalCardHeader}>
// // // // //                                     <h3 style={metalCardTitle}>{metal}</h3>

// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         style={metalRemoveButton}
// // // // //                                         onClick={() => confirmDeleteMetal(metal)}
// // // // //                                     >
// // // // //                                         Remove
// // // // //                                     </button>
// // // // //                                 </div>

// // // // //                                 <div style={metalCardCount}>
// // // // //                                     Total Products: {getMetalProductCount(metal)}
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                 ) : (
// // // // //                     <div style={noProductsBox}>No metal types available.</div>
// // // // //                 )}
// // // // //             </div>

// // // // //             <div style={sectionWrap}>
// // // // //                 <h2 style={sectionHeading}>Available Purity Options</h2>

// // // // //                 {storedPurities.length > 0 ? (
// // // // //                     <div style={metalGrid}>
// // // // //                         {storedPurities.map((purity) => (
// // // // //                             <div key={purity} style={metalCard}>
// // // // //                                 <div style={metalCardHeader}>
// // // // //                                     <h3 style={metalCardTitle}>{purity}</h3>

// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         style={metalRemoveButton}
// // // // //                                         onClick={() => confirmDeletePurity(purity)}
// // // // //                                     >
// // // // //                                         Remove
// // // // //                                     </button>
// // // // //                                 </div>

// // // // //                                 <div style={metalCardCount}>
// // // // //                                     Total Products: {getPurityProductCount(purity)}
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                 ) : (
// // // // //                     <div style={noProductsBox}>No purity options available.</div>
// // // // //                 )}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }



// // // // import React from "react";

// // // // export default function MetalTypes({
// // // //     storedMetals = [],
// // // //     storedPurities = [],
// // // //     setShowAddMetalModal,
// // // //     setShowAddPurityModal,
// // // //     getMetalProductCount,
// // // //     getPurityProductCount,
// // // //     confirmDeleteMetal,
// // // //     confirmDeletePurity,
// // // // }) {
// // // //     const metalPageWrap = {
// // // //         width: "100%",
// // // //         maxWidth: "1300px",
// // // //     };

// // // //     const metalHeader = {
// // // //         display: "flex",
// // // //         justifyContent: "space-between",
// // // //         alignItems: "flex-start",
// // // //         gap: "12px",
// // // //         marginBottom: "24px",
// // // //         flexWrap: "wrap",
// // // //     };

// // // //     const metalTitle = {
// // // //         fontSize: "28px",
// // // //         fontWeight: "700",
// // // //         color: "#222",
// // // //         margin: 0,
// // // //     };

// // // //     const metalSubTitle = {
// // // //         fontSize: "14px",
// // // //         color: "#666",
// // // //         marginTop: "6px",
// // // //     };

// // // //     const actionButtonsWrap = {
// // // //         display: "flex",
// // // //         gap: "12px",
// // // //         flexWrap: "wrap",
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

// // // //     const secondaryButton = {
// // // //         background: "#f3e9fb",
// // // //         color: "#5d3d75",
// // // //         border: "1px solid #d8c9e4",
// // // //         borderRadius: "8px",
// // // //         padding: "11px 18px",
// // // //         fontSize: "14px",
// // // //         fontWeight: "700",
// // // //         cursor: "pointer",
// // // //         whiteSpace: "nowrap",
// // // //     };

// // // //     const sectionWrap = {
// // // //         marginBottom: "34px",
// // // //     };

// // // //     const sectionHeading = {
// // // //         fontSize: "20px",
// // // //         fontWeight: "700",
// // // //         color: "#2b2b2b",
// // // //         margin: "0 0 16px",
// // // //     };

// // // //     const metalGrid = {
// // // //         display: "grid",
// // // //         gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
// // // //         gap: "22px",
// // // //     };

// // // //     const metalCard = {
// // // //         background: "#fff",
// // // //         border: "1px solid #e7dff0",
// // // //         borderRadius: "18px",
// // // //         padding: "22px",
// // // //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // // //     };

// // // //     const metalCardHeader = {
// // // //         display: "flex",
// // // //         justifyContent: "space-between",
// // // //         alignItems: "flex-start",
// // // //         gap: "12px",
// // // //         marginBottom: "12px",
// // // //     };

// // // //     const metalCardTitle = {
// // // //         fontSize: "20px",
// // // //         fontWeight: "700",
// // // //         color: "#222",
// // // //         margin: 0,
// // // //     };

// // // //     const metalCardCount = {
// // // //         fontSize: "15px",
// // // //         color: "#6f3f8f",
// // // //         fontWeight: "600",
// // // //     };

// // // //     const metalRemoveButton = {
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
// // // //         <div style={metalPageWrap}>
// // // //             <div style={metalHeader}>
// // // //                 <div>
// // // //                     <h1 style={metalTitle}>Metal Types</h1>
// // // //                     <div style={metalSubTitle}>
// // // //                         Add and manage available metal types and purity options for products
// // // //                     </div>
// // // //                 </div>

// // // //                 <div style={actionButtonsWrap}>
// // // //                     <button
// // // //                         type="button"
// // // //                         style={secondaryButton}
// // // //                         onClick={() => setShowAddPurityModal(true)}
// // // //                     >
// // // //                         + Add Purity
// // // //                     </button>

// // // //                     <button
// // // //                         type="button"
// // // //                         style={addButton}
// // // //                         onClick={() => setShowAddMetalModal(true)}
// // // //                     >
// // // //                         + Add Metal
// // // //                     </button>
// // // //                 </div>
// // // //             </div>

// // // //             <div style={sectionWrap}>
// // // //                 <h2 style={sectionHeading}>Available Metals</h2>

// // // //                 {storedMetals.length > 0 ? (
// // // //                     <div style={metalGrid}>
// // // //                         {storedMetals.map((metal) => (
// // // //                             <div key={metal} style={metalCard}>
// // // //                                 <div style={metalCardHeader}>
// // // //                                     <h3 style={metalCardTitle}>{metal}</h3>

// // // //                                     <button
// // // //                                         type="button"
// // // //                                         style={metalRemoveButton}
// // // //                                         onClick={() => confirmDeleteMetal(metal)}
// // // //                                     >
// // // //                                         Remove
// // // //                                     </button>
// // // //                                 </div>

// // // //                                 <div style={metalCardCount}>
// // // //                                     Total Products: {getMetalProductCount(metal)}
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 ) : (
// // // //                     <div style={noProductsBox}>No metal types available.</div>
// // // //                 )}
// // // //             </div>

// // // //             <div style={sectionWrap}>
// // // //                 <h2 style={sectionHeading}>Available Purity Options</h2>

// // // //                 {storedPurities.length > 0 ? (
// // // //                     <div style={metalGrid}>
// // // //                         {storedPurities.map((purity) => (
// // // //                             <div key={purity} style={metalCard}>
// // // //                                 <div style={metalCardHeader}>
// // // //                                     <h3 style={metalCardTitle}>{purity}</h3>

// // // //                                     <button
// // // //                                         type="button"
// // // //                                         style={metalRemoveButton}
// // // //                                         onClick={() => confirmDeletePurity(purity)}
// // // //                                     >
// // // //                                         Remove
// // // //                                     </button>
// // // //                                 </div>

// // // //                                 <div style={metalCardCount}>
// // // //                                     Total Products: {getPurityProductCount(purity)}
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 ) : (
// // // //                     <div style={noProductsBox}>No purity options available.</div>
// // // //                 )}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }


// // // import React from "react";

// // // export default function MetalTypes({
// // //     storedMetals = [],
// // //     metalPurities = {},
// // //     setShowAddMetalModal,
// // //     openAddPurityModal,
// // //     confirmDeleteMetal,
// // //     confirmDeletePurity,
// // //     getMetalProductCount,
// // // }) {

// // //     const metalPageWrap = {
// // //         width: "100%",
// // //         maxWidth: "1300px",
// // //     };

// // //     const metalHeader = {
// // //         display: "flex",
// // //         justifyContent: "space-between",
// // //         alignItems: "flex-start",
// // //         marginBottom: "24px",
// // //         flexWrap: "wrap",
// // //     };

// // //     const metalTitle = {
// // //         fontSize: "28px",
// // //         fontWeight: "700",
// // //         color: "#222",
// // //         margin: 0,
// // //     };

// // //     const metalSubTitle = {
// // //         fontSize: "14px",
// // //         color: "#666",
// // //         marginTop: "6px",
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
// // //     };

// // //     const metalGrid = {
// // //         display: "grid",
// // //         gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
// // //         gap: "22px",
// // //     };

// // //     const metalCard = {
// // //         background: "#fff",
// // //         border: "1px solid #e7dff0",
// // //         borderRadius: "18px",
// // //         padding: "22px",
// // //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// // //     };

// // //     const metalCardHeader = {
// // //         display: "flex",
// // //         justifyContent: "space-between",
// // //         alignItems: "center",
// // //         marginBottom: "10px",
// // //     };

// // //     const metalCardTitle = {
// // //         fontSize: "20px",
// // //         fontWeight: "700",
// // //         color: "#222",
// // //     };

// // //     const metalCardCount = {
// // //         fontSize: "14px",
// // //         color: "#6f3f8f",
// // //         fontWeight: "600",
// // //         marginBottom: "10px",
// // //     };

// // //     const removeButton = {
// // //         background: "#fff1f1",
// // //         color: "#b33939",
// // //         border: "1px solid #f0c7c7",
// // //         borderRadius: "8px",
// // //         padding: "6px 10px",
// // //         fontSize: "12px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //     };

// // //     const purityRow = {
// // //         display: "flex",
// // //         flexWrap: "wrap",
// // //         gap: "8px",
// // //         marginTop: "10px",
// // //     };

// // //     const purityTag = {
// // //         background: "#f3e9fb",
// // //         border: "1px solid #d8c9e4",
// // //         padding: "6px 10px",
// // //         borderRadius: "8px",
// // //         fontSize: "13px",
// // //         fontWeight: "600",
// // //         color: "#5d3d75",
// // //     };

// // //     const addPurityButton = {
// // //         marginTop: "12px",
// // //         background: "#f3e9fb",
// // //         border: "1px solid #d8c9e4",
// // //         color: "#5d3d75",
// // //         borderRadius: "8px",
// // //         padding: "8px 12px",
// // //         fontSize: "13px",
// // //         fontWeight: "700",
// // //         cursor: "pointer",
// // //     };

// // //     return (
// // //         <div style={metalPageWrap}>
// // //             <div style={metalHeader}>
// // //                 <div>
// // //                     <h1 style={metalTitle}>Metal Types</h1>
// // //                     <div style={metalSubTitle}>
// // //                         Manage metals and purity options
// // //                     </div>
// // //                 </div>

// // //                 <button
// // //                     type="button"
// // //                     style={addButton}
// // //                     onClick={() => setShowAddMetalModal(true)}
// // //                 >
// // //                     + Add Metal
// // //                 </button>
// // //             </div>

// // //             {storedMetals.length > 0 ? (
// // //                 <div style={metalGrid}>
// // //                     {storedMetals.map((metal) => {

// // //                         const purities = metalPurities[metal] || [];

// // //                         return (
// // //                             <div key={metal} style={metalCard}>
// // //                                 <div style={metalCardHeader}>
// // //                                     <div style={metalCardTitle}>{metal}</div>

// // //                                     <button
// // //                                         style={removeButton}
// // //                                         onClick={() => confirmDeleteMetal(metal)}
// // //                                     >
// // //                                         Remove
// // //                                     </button>
// // //                                 </div>

// // //                                 <div style={metalCardCount}>
// // //                                     Products: {getMetalProductCount(metal)}
// // //                                 </div>

// // //                                 <div style={purityRow}>
// // //                                     {purities.map((purity) => (
// // //                                         <div key={purity} style={purityTag}>
// // //                                             {purity}

// // //                                             <button
// // //                                                 style={{
// // //                                                     marginLeft: "6px",
// // //                                                     border: "none",
// // //                                                     background: "transparent",
// // //                                                     color: "#b33939",
// // //                                                     cursor: "pointer",
// // //                                                     fontWeight: "700",
// // //                                                 }}
// // //                                                 onClick={() =>
// // //                                                     confirmDeletePurity(metal, purity)
// // //                                                 }
// // //                                             >
// // //                                                 ×
// // //                                             </button>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>

// // //                                 <button
// // //                                     style={addPurityButton}
// // //                                     onClick={() => openAddPurityModal(metal)}
// // //                                 >
// // //                                     + Add Purity
// // //                                 </button>
// // //                             </div>
// // //                         );
// // //                     })}
// // //                 </div>
// // //             ) : (
// // //                 <div>No metal types available.</div>
// // //             )}
// // //         </div>
// // //     );
// // // }



// // import React from "react";

// // export default function MetalTypes({
// //     storedMetals = [],
// //     metalPurities = {},
// //     setShowAddMetalModal,
// //     openAddPurityModal,
// //     confirmDeleteMetal,
// //     confirmDeletePurity,
// //     getMetalProductCount,
// //     purityInputs = {},
// //     setPurityInputs,
// //     showPurityInputFor,
// //     setShowPurityInputFor,
// //     addPurityToMetal,
// // }) {
// //     const metalPageWrap = {
// //         width: "100%",
// //         maxWidth: "1300px",
// //     };

// //     const metalHeader = {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "flex-start",
// //         gap: "12px",
// //         marginBottom: "24px",
// //         flexWrap: "wrap",
// //     };

// //     const metalTitle = {
// //         fontSize: "28px",
// //         fontWeight: "700",
// //         color: "#222",
// //         margin: 0,
// //     };

// //     const metalSubTitle = {
// //         fontSize: "14px",
// //         color: "#666",
// //         marginTop: "6px",
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

// //     const metalGrid = {
// //         display: "grid",
// //         gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
// //         gap: "22px",
// //     };

// //     const metalCard = {
// //         background: "#fff",
// //         border: "1px solid #e7dff0",
// //         borderRadius: "18px",
// //         padding: "22px",
// //         boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// //     };

// //     const metalCardHeader = {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "flex-start",
// //         gap: "12px",
// //         marginBottom: "12px",
// //     };

// //     const metalCardTitle = {
// //         fontSize: "20px",
// //         fontWeight: "700",
// //         color: "#222",
// //         margin: 0,
// //     };

// //     const metalCardCount = {
// //         fontSize: "15px",
// //         color: "#6f3f8f",
// //         fontWeight: "600",
// //         marginBottom: "14px",
// //     };

// //     const removeMetalButton = {
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

// //     const puritySectionTitle = {
// //         fontSize: "14px",
// //         fontWeight: "700",
// //         color: "#333",
// //         marginBottom: "10px",
// //     };

// //     const purityList = {
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "10px",
// //         marginBottom: "14px",
// //     };

// //     const purityItem = {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         gap: "10px",
// //         padding: "10px 12px",
// //         border: "1px solid #e7dff0",
// //         borderRadius: "10px",
// //         background: "#faf7fd",
// //     };

// //     const purityText = {
// //         fontSize: "14px",
// //         fontWeight: "600",
// //         color: "#4b3460",
// //     };

// //     const deletePurityButton = {
// //         background: "#fff1f1",
// //         color: "#b33939",
// //         border: "1px solid #f0c7c7",
// //         borderRadius: "7px",
// //         padding: "7px 10px",
// //         fontSize: "12px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //         whiteSpace: "nowrap",
// //     };

// //     const addPurityButton = {
// //         background: "#f3e9fb",
// //         color: "#5d3d75",
// //         border: "1px solid #d8c9e4",
// //         borderRadius: "8px",
// //         padding: "10px 14px",
// //         fontSize: "13px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //         whiteSpace: "nowrap",
// //     };

// //     const purityInputWrap = {
// //         marginTop: "14px",
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "10px",
// //     };

// //     const purityInput = {
// //         height: "42px",
// //         border: "1px solid #ddd",
// //         borderRadius: "8px",
// //         padding: "0 12px",
// //         fontSize: "14px",
// //         outline: "none",
// //         width: "100%",
// //         boxSizing: "border-box",
// //         background: "#fff",
// //     };

// //     const purityActionRow = {
// //         display: "flex",
// //         gap: "10px",
// //         flexWrap: "wrap",
// //     };

// //     const saveButton = {
// //         background: "#6f3f8f",
// //         color: "#fff",
// //         border: "none",
// //         borderRadius: "8px",
// //         padding: "10px 14px",
// //         fontSize: "13px",
// //         fontWeight: "700",
// //         cursor: "pointer",
// //     };

// //     const cancelButton = {
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
// //         <div style={metalPageWrap}>
// //             <div style={metalHeader}>
// //                 <div>
// //                     <h1 style={metalTitle}>Metal Types</h1>
// //                     <div style={metalSubTitle}>
// //                         Add and manage available metal types and their purity options
// //                     </div>
// //                 </div>

// //                 <button
// //                     type="button"
// //                     style={addButton}
// //                     onClick={() => setShowAddMetalModal(true)}
// //                 >
// //                     + Add Metal
// //                 </button>
// //             </div>

// //             {storedMetals.length > 0 ? (
// //                 <div style={metalGrid}>
// //                     {storedMetals.map((metal) => {
// //                         const purities = metalPurities[metal] || [];
// //                         const currentInput = purityInputs[metal] || "";

// //                         return (
// //                             <div key={metal} style={metalCard}>
// //                                 <div style={metalCardHeader}>
// //                                     <h3 style={metalCardTitle}>{metal}</h3>

// //                                     <button
// //                                         type="button"
// //                                         style={removeMetalButton}
// //                                         onClick={() => confirmDeleteMetal(metal)}
// //                                     >
// //                                         Remove
// //                                     </button>
// //                                 </div>

// //                                 <div style={metalCardCount}>
// //                                     Total Products: {getMetalProductCount(metal)}
// //                                 </div>

// //                                 <div style={puritySectionTitle}>Purity Options</div>

// //                                 {purities.length > 0 ? (
// //                                     <div style={purityList}>
// //                                         {purities.map((purity) => (
// //                                             <div key={purity} style={purityItem}>
// //                                                 <div style={purityText}>{purity}</div>

// //                                                 <button
// //                                                     type="button"
// //                                                     style={deletePurityButton}
// //                                                     onClick={() =>
// //                                                         confirmDeletePurity(metal, purity)
// //                                                     }
// //                                                 >
// //                                                     Delete
// //                                                 </button>
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 ) : (
// //                                     <div
// //                                         style={{
// //                                             fontSize: "13px",
// //                                             color: "#777",
// //                                             marginBottom: "14px",
// //                                         }}
// //                                     >
// //                                         No purity added yet.
// //                                     </div>
// //                                 )}

// //                                 {showPurityInputFor === metal ? (
// //                                     <div style={purityInputWrap}>
// //                                         <input
// //                                             type="text"
// //                                             placeholder="Enter purity like 22 Carat or 925"
// //                                             value={currentInput}
// //                                             onChange={(e) =>
// //                                                 setPurityInputs((prev) => ({
// //                                                     ...prev,
// //                                                     [metal]: e.target.value,
// //                                                 }))
// //                                             }
// //                                             style={purityInput}
// //                                         />

// //                                         <div style={purityActionRow}>
// //                                             <button
// //                                                 type="button"
// //                                                 style={saveButton}
// //                                                 onClick={() => addPurityToMetal(metal)}
// //                                             >
// //                                                 Save Purity
// //                                             </button>

// //                                             <button
// //                                                 type="button"
// //                                                 style={cancelButton}
// //                                                 onClick={() => {
// //                                                     setShowPurityInputFor(null);
// //                                                     setPurityInputs((prev) => ({
// //                                                         ...prev,
// //                                                         [metal]: "",
// //                                                     }));
// //                                                 }}
// //                                             >
// //                                                 Cancel
// //                                             </button>
// //                                         </div>
// //                                     </div>
// //                                 ) : (
// //                                     <button
// //                                         type="button"
// //                                         style={addPurityButton}
// //                                         onClick={() => {
// //                                             setShowPurityInputFor(metal);
// //                                         }}
// //                                     >
// //                                         + Add Purity
// //                                     </button>
// //                                 )}
// //                             </div>
// //                         );
// //                     })}
// //                 </div>
// //             ) : (
// //                 <div style={noProductsBox}>No metal types available.</div>
// //             )}
// //         </div>
// //     );
// // }



// import React from "react";

// export default function MetalTypes({
//   storedMetals = [],
//   metalPurities = {},
//   setShowAddMetalModal,
//   confirmDeleteMetal,
//   confirmDeletePurity,
//   getMetalProductCount,
//   purityInputs = {},
//   setPurityInputs,
//   showPurityInputFor,
//   setShowPurityInputFor,
//   addPurityToMetal,
// }) {
//   const metalPageWrap = {
//     width: "100%",
//     maxWidth: "1300px",
//   };

//   const metalHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//     marginBottom: "24px",
//     flexWrap: "wrap",
//   };

//   const metalTitle = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//   };

//   const metalSubTitle = {
//     fontSize: "14px",
//     color: "#666",
//     marginTop: "6px",
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
//     marginBottom: "12px",
//   };

//   const metalCardTitle = {
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//   };

//   const metalCardCount = {
//     fontSize: "15px",
//     color: "#6f3f8f",
//     fontWeight: "600",
//     marginBottom: "14px",
//   };

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

//   const puritySectionTitle = {
//     fontSize: "14px",
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: "10px",
//   };

//   const purityList = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     marginBottom: "14px",
//   };

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

//   const purityText = {
//     fontSize: "14px",
//     fontWeight: "600",
//     color: "#4b3460",
//   };

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

//   const purityInputWrap = {
//     marginTop: "14px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   };

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

//   const purityActionRow = {
//     display: "flex",
//     gap: "10px",
//     flexWrap: "wrap",
//   };

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
//           <div style={metalSubTitle}>
//             Add and manage available metal types and their purity options
//           </div>
//         </div>

//         <button
//           type="button"
//           style={addButton}
//           onClick={() => setShowAddMetalModal(true)}
//         >
//           + Add Metal
//         </button>
//       </div>

//       {storedMetals.length > 0 ? (
//         <div style={metalGrid}>
//           {storedMetals.map((metal) => {
//             const purities = metalPurities[metal] || [];
//             const currentInput = purityInputs[metal] || "";

//             return (
//               <div key={metal} style={metalCard}>
//                 <div style={metalCardHeader}>
//                   <h3 style={metalCardTitle}>{metal}</h3>

//                   <button
//                     type="button"
//                     style={removeMetalButton}
//                     onClick={() => confirmDeleteMetal(metal)}
//                   >
//                     Remove
//                   </button>
//                 </div>

//                 <div style={metalCardCount}>
//                   Total Products: {getMetalProductCount(metal)}
//                 </div>

//                 <div style={puritySectionTitle}>Purity Options</div>

//                 {purities.length > 0 ? (
//                   <div style={purityList}>
//                     {purities.map((purity) => (
//                       <div key={purity} style={purityItem}>
//                         <div style={purityText}>{purity}</div>

//                         <button
//                           type="button"
//                           style={deletePurityButton}
//                           onClick={() => confirmDeletePurity(metal, purity)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div
//                     style={{
//                       fontSize: "13px",
//                       color: "#777",
//                       marginBottom: "14px",
//                     }}
//                   >
//                     No purity added yet.
//                   </div>
//                 )}

//                 {showPurityInputFor === metal ? (
//                   <div style={purityInputWrap}>
//                     <input
//                       type="text"
//                       placeholder="Enter purity like 22 Carat or 925"
//                       value={currentInput}
//                       onChange={(e) =>
//                         setPurityInputs((prev) => ({
//                           ...prev,
//                           [metal]: e.target.value,
//                         }))
//                       }
//                       style={purityInput}
//                     />

//                     <div style={purityActionRow}>
//                       <button
//                         type="button"
//                         style={saveButton}
//                         onClick={() => addPurityToMetal(metal)}
//                       >
//                         Save Purity
//                       </button>

//                       <button
//                         type="button"
//                         style={cancelButton}
//                         onClick={() => {
//                           setShowPurityInputFor(null);
//                           setPurityInputs((prev) => ({
//                             ...prev,
//                             [metal]: "",
//                           }));
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
//                     onClick={() => {
//                       setShowPurityInputFor(metal);
//                     }}
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




import React from "react";

export default function MetalTypes({
  storedMetals = [],
  metalPurities = {},
  setShowAddMetalModal,
  confirmDeleteMetal,
  confirmDeletePurity,
  getMetalProductCount,
  purityInputs = {},
  setPurityInputs,
  showPurityInputFor,
  setShowPurityInputFor,
  addPurityToMetal,
}) {
  const metalPageWrap = {
    width: "100%",
    maxWidth: "1300px",
  };

  const metalHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  };

  const metalTitle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const metalSubTitle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "6px",
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
    marginBottom: "12px",
  };

  const metalCardTitle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const metalCardCount = {
    fontSize: "15px",
    color: "#6f3f8f",
    fontWeight: "600",
    marginBottom: "14px",
  };

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

  const puritySectionTitle = {
    fontSize: "14px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "10px",
  };

  const purityList = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "14px",
  };

  const purityItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    border: "1px solid #e7dff0",
    borderRadius: "10px",
    background: "#faf7fd",
  };

  const purityText = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#4b3460",
  };

  const deletePurityButton = {
    background: "#fff1f1",
    color: "#b33939",
    border: "1px solid #f0c7c7",
    borderRadius: "7px",
    padding: "7px 10px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const addPurityButton = {
    background: "#f3e9fb",
    color: "#5d3d75",
    border: "1px solid #d8c9e4",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const purityInputWrap = {
    marginTop: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const purityInput = {
    height: "42px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0 12px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    background: "#fff",
  };

  const purityActionRow = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  const saveButton = {
    background: "#6f3f8f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  };

  const cancelButton = {
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
    <div style={metalPageWrap}>
      <div style={metalHeader}>
        <div>
          <h1 style={metalTitle}>Metal Types</h1>
          <div style={metalSubTitle}>
            Add and manage available metal types and their purity options
          </div>
        </div>

        <button
          type="button"
          style={addButton}
          onClick={() => setShowAddMetalModal(true)}
        >
          + Add Metal
        </button>
      </div>

      {storedMetals.length > 0 ? (
        <div style={metalGrid}>
          {storedMetals.map((metal) => {
            const purities = metalPurities[metal] || [];
            const currentInput = purityInputs[metal] || "";

            return (
              <div key={metal} style={metalCard}>
                <div style={metalCardHeader}>
                  <h3 style={metalCardTitle}>{metal}</h3>

                  <button
                    type="button"
                    style={removeMetalButton}
                    onClick={() => confirmDeleteMetal(metal)}
                  >
                    Remove
                  </button>
                </div>

                <div style={metalCardCount}>
                  Total Products: {getMetalProductCount(metal)}
                </div>

                <div style={puritySectionTitle}>Purity Options</div>

                {purities.length > 0 ? (
                  <div style={purityList}>
                    {purities.map((purity) => (
                      <div key={purity} style={purityItem}>
                        <div style={purityText}>{purity}</div>

                        <button
                          type="button"
                          style={deletePurityButton}
                          onClick={() => confirmDeletePurity(metal, purity)}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#777",
                      marginBottom: "14px",
                    }}
                  >
                    No purity added yet.
                  </div>
                )}

                {showPurityInputFor === metal ? (
                  <div style={purityInputWrap}>
                    <input
                      type="text"
                      placeholder="Enter purity like 22 Carat or 925"
                      value={currentInput}
                      onChange={(e) =>
                        setPurityInputs((prev) => ({
                          ...prev,
                          [metal]: e.target.value,
                        }))
                      }
                      style={purityInput}
                    />

                    <div style={purityActionRow}>
                      <button
                        type="button"
                        style={saveButton}
                        onClick={() => addPurityToMetal(metal)}
                      >
                        Save Purity
                      </button>

                      <button
                        type="button"
                        style={cancelButton}
                        onClick={() => {
                          setShowPurityInputFor(null);
                          setPurityInputs((prev) => ({
                            ...prev,
                            [metal]: "",
                          }));
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    style={addPurityButton}
                    onClick={() => {
                      setShowPurityInputFor(metal);
                    }}
                  >
                    + Add Purity
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div style={noProductsBox}>No metal types available.</div>
      )}
    </div>
  );
}