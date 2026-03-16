// // // // import React from "react";

// // // // export default function Category({
// // // //   categories = [],
// // // //   setShowAddCategoryModal,
// // // //   confirmDeleteCategory,
// // // // }) {
// // // //   const pageWrap = {
// // // //     width: "100%",
// // // //     maxWidth: "1300px",
// // // //   };

// // // //   const header = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "flex-start",
// // // //     marginBottom: "24px",
// // // //     flexWrap: "wrap",
// // // //     gap: "12px",
// // // //   };

// // // //   const title = {
// // // //     fontSize: "28px",
// // // //     fontWeight: "700",
// // // //     color: "#222",
// // // //     margin: 0,
// // // //   };

// // // //   const subTitle = {
// // // //     fontSize: "14px",
// // // //     color: "#666",
// // // //     marginTop: "6px",
// // // //   };

// // // //   const addButton = {
// // // //     background: "#6f3f8f",
// // // //     color: "#fff",
// // // //     border: "none",
// // // //     borderRadius: "8px",
// // // //     padding: "11px 18px",
// // // //     fontSize: "14px",
// // // //     fontWeight: "700",
// // // //     cursor: "pointer",
// // // //     whiteSpace: "nowrap",
// // // //   };

// // // //   const grid = {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// // // //     gap: "20px",
// // // //   };

// // // //   const card = {
// // // //     background: "#fff",
// // // //     border: "1px solid #e7dff0",
// // // //     borderRadius: "14px",
// // // //     padding: "20px 22px",
// // // //     boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     gap: "12px",
// // // //   };

// // // //   const cardLeft = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "14px",
// // // //     minWidth: 0,
// // // //   };

// // // //   const iconBox = {
// // // //     width: "44px",
// // // //     height: "44px",
// // // //     borderRadius: "10px",
// // // //     background: "#f3e9fb",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     flexShrink: 0,
// // // //   };

// // // //   const cardName = {
// // // //     fontSize: "15px",
// // // //     fontWeight: "700",
// // // //     color: "#2b2b2b",
// // // //     margin: 0,
// // // //     wordBreak: "break-word",
// // // //   };

// // // //   const deleteBtn = {
// // // //     background: "#fff1f1",
// // // //     color: "#b33939",
// // // //     border: "1px solid #f0c7c7",
// // // //     borderRadius: "8px",
// // // //     width: "34px",
// // // //     height: "34px",
// // // //     display: "inline-flex",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     cursor: "pointer",
// // // //     flexShrink: 0,
// // // //     padding: 0,
// // // //   };

// // // //   const emptyBox = {
// // // //     background: "#fff",
// // // //     border: "1px dashed #d9c8e7",
// // // //     borderRadius: "16px",
// // // //     padding: "40px 24px",
// // // //     textAlign: "center",
// // // //     color: "#666",
// // // //     fontSize: "15px",
// // // //   };

// // // //   return (
// // // //     <div style={pageWrap}>
// // // //       {/* Header */}
// // // //       <div style={header}>
// // // //         <div>
// // // //           <h1 style={title}>Categories</h1>
// // // //           <div style={subTitle}>Manage product categories</div>
// // // //         </div>
// // // //         <button type="button" style={addButton} onClick={() => setShowAddCategoryModal(true)}>
// // // //           + Add Category
// // // //         </button>
// // // //       </div>

// // // //       {/* Cards */}
// // // //       {categories.length > 0 ? (
// // // //         <div style={grid}>
// // // //           {categories.map((cat) => (
// // // //             <div key={cat} style={card}>
// // // //               <div style={cardLeft}>
// // // //                 <div style={iconBox}>
// // // //                   {/* Tag icon */}
// // // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f3f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                     <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
// // // //                     <line x1="7" y1="7" x2="7.01" y2="7"/>
// // // //                   </svg>
// // // //                 </div>
// // // //                 <p style={cardName}>{cat}</p>
// // // //               </div>

// // // //               <button
// // // //                 type="button"
// // // //                 style={deleteBtn}
// // // //                 title="Remove category"
// // // //                 onClick={() => confirmDeleteCategory(cat)}
// // // //               >
// // // //                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// // // //                   <polyline points="3 6 5 6 21 6"/>
// // // //                   <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
// // // //                   <path d="M10 11v6"/><path d="M14 11v6"/>
// // // //                   <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
// // // //                 </svg>
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       ) : (
// // // //         <div style={emptyBox}>
// // // //           No categories added yet. Click <strong>+ Add Category</strong> to create your first one.
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }



// // // import React from "react";

// // // export default function Category({
// // //   categories = [],          // [{ id: 1, name: "Rings" }, ...]
// // //   setShowAddCategoryModal,
// // //   confirmDeleteCategory,    // called with category.id
// // // }) {
// // //   const pageWrap = { width: "100%", maxWidth: "1300px" };

// // //   const header = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "flex-start",
// // //     marginBottom: "24px",
// // //     flexWrap: "wrap",
// // //     gap: "12px",
// // //   };

// // //   const title    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
// // //   const subTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

// // //   const addButton = {
// // //     background: "#6f3f8f",
// // //     color: "#fff",
// // //     border: "none",
// // //     borderRadius: "8px",
// // //     padding: "11px 18px",
// // //     fontSize: "14px",
// // //     fontWeight: "700",
// // //     cursor: "pointer",
// // //     whiteSpace: "nowrap",
// // //   };

// // //   const grid = {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// // //     gap: "20px",
// // //   };

// // //   const card = {
// // //     background: "#fff",
// // //     border: "1px solid #e7dff0",
// // //     borderRadius: "14px",
// // //     padding: "20px 22px",
// // //     boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //     gap: "12px",
// // //   };

// // //   const cardLeft = { display: "flex", alignItems: "center", gap: "14px", minWidth: 0 };

// // //   const iconBox = {
// // //     width: "44px",
// // //     height: "44px",
// // //     borderRadius: "10px",
// // //     background: "#f3e9fb",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     flexShrink: 0,
// // //   };

// // //   const cardName = {
// // //     fontSize: "15px",
// // //     fontWeight: "700",
// // //     color: "#2b2b2b",
// // //     margin: 0,
// // //     wordBreak: "break-word",
// // //   };

// // //   const deleteBtn = {
// // //     background: "#fff1f1",
// // //     color: "#b33939",
// // //     border: "1px solid #f0c7c7",
// // //     borderRadius: "8px",
// // //     width: "34px",
// // //     height: "34px",
// // //     display: "inline-flex",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     cursor: "pointer",
// // //     flexShrink: 0,
// // //     padding: 0,
// // //   };

// // //   const emptyBox = {
// // //     background: "#fff",
// // //     border: "1px dashed #d9c8e7",
// // //     borderRadius: "16px",
// // //     padding: "40px 24px",
// // //     textAlign: "center",
// // //     color: "#666",
// // //     fontSize: "15px",
// // //   };

// // //   return (
// // //     <div style={pageWrap}>
// // //       <div style={header}>
// // //         <div>
// // //           <h1 style={title}>Categories</h1>
// // //           <div style={subTitle}>Manage product categories</div>
// // //         </div>
// // //         <button type="button" style={addButton} onClick={() => setShowAddCategoryModal(true)}>
// // //           + Add Category
// // //         </button>
// // //       </div>

// // //       {categories.length > 0 ? (
// // //         <div style={grid}>
// // //           {categories.map((cat) => (
// // //             <div key={cat.id} style={card}>
// // //               <div style={cardLeft}>
// // //                 <div style={iconBox}>
// // //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f3f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //                     <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
// // //                     <line x1="7" y1="7" x2="7.01" y2="7"/>
// // //                   </svg>
// // //                 </div>
// // //                 <p style={cardName}>{cat.name}</p>
// // //               </div>

// // //               <button
// // //                 type="button"
// // //                 style={deleteBtn}
// // //                 title="Remove category"
// // //                 onClick={() => confirmDeleteCategory(cat.id)}
// // //               >
// // //                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// // //                   <polyline points="3 6 5 6 21 6"/>
// // //                   <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
// // //                   <path d="M10 11v6"/><path d="M14 11v6"/>
// // //                   <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
// // //                 </svg>
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       ) : (
// // //         <div style={emptyBox}>
// // //           No categories added yet. Click <strong>+ Add Category</strong> to create your first one.
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }




// // import React from "react";

// // export default function Category({
// //   categories = [],          // [{ id: 1, name: "Rings" }, ...]
// //   setShowAddCategoryModal,
// //   confirmDeleteCategory,    // called with category.id
// // }) {
// //   const pageWrap = { width: "100%", maxWidth: "1300px" };

// //   const header = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     marginBottom: "24px",
// //     flexWrap: "wrap",
// //     gap: "12px",
// //   };

// //   const title    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
// //   const subTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

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

// //   const grid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// //     gap: "20px",
// //   };

// //   const card = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "14px",
// //     padding: "20px 22px",
// //     boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     gap: "12px",
// //   };

// //   const cardLeft = { display: "flex", alignItems: "center", gap: "14px", minWidth: 0 };

// //   const iconBox = {
// //     width: "44px",
// //     height: "44px",
// //     borderRadius: "10px",
// //     background: "#f3e9fb",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     flexShrink: 0,
// //   };

// //   const cardName = {
// //     fontSize: "15px",
// //     fontWeight: "700",
// //     color: "#2b2b2b",
// //     margin: 0,
// //     wordBreak: "break-word",
// //   };

// //   const deleteBtn = {
// //     background: "#fff1f1",
// //     color: "#b33939",
// //     border: "1px solid #f0c7c7",
// //     borderRadius: "8px",
// //     width: "34px",
// //     height: "34px",
// //     display: "inline-flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     cursor: "pointer",
// //     flexShrink: 0,
// //     padding: 0,
// //   };

// //   const emptyBox = {
// //     background: "#fff",
// //     border: "1px dashed #d9c8e7",
// //     borderRadius: "16px",
// //     padding: "40px 24px",
// //     textAlign: "center",
// //     color: "#666",
// //     fontSize: "15px",
// //   };

// //   return (
// //     <div style={pageWrap}>
// //       <div style={header}>
// //         <div>
// //           <h1 style={title}>Categories</h1>
// //           <div style={subTitle}>Manage product categories</div>
// //         </div>
// //         <button type="button" style={addButton} onClick={() => setShowAddCategoryModal(true)}>
// //           + Add Category
// //         </button>
// //       </div>

// //       {categories.length > 0 ? (
// //         <div style={grid}>
// //           {categories.map((cat) => (
// //             <div key={cat.id} style={card}>
// //               <div style={cardLeft}>
// //                 <div style={iconBox}>
// //                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f3f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
// //                     <line x1="7" y1="7" x2="7.01" y2="7"/>
// //                   </svg>
// //                 </div>
// //                 <p style={cardName}>{cat.name}</p>
// //               </div>

// //               <button
// //                 type="button"
// //                 style={deleteBtn}
// //                 title="Remove category"
// //                 onClick={() => confirmDeleteCategory(cat.id)}
// //               >
// //                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// //                   <polyline points="3 6 5 6 21 6"/>
// //                   <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
// //                   <path d="M10 11v6"/><path d="M14 11v6"/>
// //                   <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
// //                 </svg>
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div style={emptyBox}>
// //           No categories added yet. Click <strong>+ Add Category</strong> to create your first one.
// //         </div>
// //       )}
// //     </div>
// //   );
// // }




// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Mainbar from "./Mainbar";

// // ── API base URL — change this to your Laravel server address ───────────────
// const API_BASE = "https://initially-loamless-elroy.ngrok-free.dev/api";
// // ────────────────────────────────────────────────────────────────────────────

// const DEFAULT_METALS = [];
// const DEFAULT_METAL_PURITIES = {};

// function generateSlug(name) {
//   const base = name
//     .trim()
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
//   const suffix = Math.random().toString(36).slice(2, 8);
//   return `${base}-${suffix}`;
// }

// function formatCurrency(value) {
//   return `$${Number(value || 0).toLocaleString("en-US", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 2,
//   })}`;
// }

// function formatDateTime(dateString) {
//   if (!dateString) return "-";
//   const date = new Date(dateString);
//   return date.toLocaleString("en-US", {
//     day: "2-digit", month: "2-digit", year: "numeric",
//     hour: "numeric", minute: "2-digit",
//   });
// }

// function getInitials(name = "") {
//   return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
// }

// function createDemoUsers() {
//   return [
//     { id: 1, type: "individual", name: "Keval Parashar", email: "keval@example.com", location: "New York, USA", crmType: "Trader", leadStatus: "Converted", owner: "Super Admin", totalPurchases: 15420.5, status: "active", kyc: "approved", ira: "Active", isLead: true, myLead: true, phone: "+1 555 210 7654", tags: ["App User"] },
//     { id: 2, type: "individual", name: "Animi GSWM", email: "animi@example.com", location: "London, UK", crmType: "Trader", leadStatus: "Converted", owner: "John Manager", totalPurchases: 28750, status: "active", kyc: "approved", ira: "None", isLead: true, myLead: false, phone: "+44 7700 900001", tags: ["App User"] },
//     { id: 3, type: "individual", name: "Shubh", email: "shubh@example.com", location: "Mumbai, India", crmType: "Lead", leadStatus: "Contacted", owner: "John Manager", totalPurchases: 8965.25, status: "active", kyc: "pending", ira: "None", isLead: true, myLead: true, phone: "+91 9876543210", tags: ["CRM Entry"] },
//   ];
// }

// function createDemoAdminUsers() {
//   return [
//     { id: 101, name: "Super Admin", email: "admin@thegoldapp.com", role: "super admin", status: "active", permissions: { dashboard: true, users: true, categories: true, products: true, shipping: true, communication: true, feeSettings: true, policies: true }, lastLogin: "2026-03-12T10:30:00", createdAt: "2025-12-15T18:00:00" },
//     { id: 102, name: "John Manager", email: "john@thegoldapp.com", role: "manager", status: "active", permissions: { dashboard: true, users: true, categories: false, products: true, shipping: true, communication: true, feeSettings: false, policies: false }, lastLogin: "2026-03-11T20:00:00", createdAt: "2025-12-22T12:20:00" },
//   ];
// }

// export default function AdminPage() {
//   const navigate = useNavigate();

//   const [activeSection, setActiveSection] = useState("dashboard");

//   const [showAddProductForm, setShowAddProductForm] = useState(false);
//   const [productFilterType, setProductFilterType] = useState("all");
//   const [categoryFilter, setCategoryFilter] = useState("all");
//   const [editingStockId, setEditingStockId] = useState(null);
//   const [editingStockValue, setEditingStockValue] = useState("");
//   const [deleteProductSlug, setDeleteProductSlug] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const [storedMetals, setStoredMetals] = useState(DEFAULT_METALS);
//   const [metalPurities, setMetalPurities] = useState(() => {
//     const saved = localStorage.getItem("adminMetalPurities");
//     if (saved) { try { return JSON.parse(saved); } catch { return DEFAULT_METAL_PURITIES; } }
//     return DEFAULT_METAL_PURITIES;
//   });

//   const [showAddMetalModal, setShowAddMetalModal] = useState(false);
//   const [newMetalName, setNewMetalName] = useState("");
//   const [deleteMetalName, setDeleteMetalName] = useState(null);

//   const [showPurityInputFor, setShowPurityInputFor] = useState(null);
//   const [purityInputs, setPurityInputs] = useState({});

//   // ── Category state — now [{ id, name, slug, image, description, stock }] from API
//   const [categories, setCategories] = useState([]);
//   const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
//   const [categoryForm, setCategoryForm] = useState({
//     name: "", slug: "", image: "", description: "", stock: "",
//   });
//   const [deleteCategoryId, setDeleteCategoryId] = useState(null);
//   const [categoryLoading, setCategoryLoading] = useState(false);
//   const [categoryError, setCategoryError] = useState("");
//   // ─────────────────────────────────────────────────────────────────────────

//   const fileInputRef = useRef(null);
//   const dragItemIndex = useRef(null);
//   const dragOverItemIndex = useRef(null);

//   const [users, setUsers] = useState([]);
//   const [userTab, setUserTab] = useState("all");
//   const [userFilters, setUserFilters] = useState({ name: "", email: "", location: "", status: "", kyc: "", crmType: "", leadStatus: "", type: "", leadsOnly: false, myLeads: false });
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [userForm, setUserForm] = useState({ name: "", email: "", location: "", type: "individual", crmType: "Lead", leadStatus: "New", owner: "Super Admin", totalPurchases: "", status: "active", kyc: "pending", ira: "None", isLead: true, myLead: false, phone: "", tags: "App User" });

//   const [communicationSettings, setCommunicationSettings] = useState(() => {
//     const saved = localStorage.getItem("adminCommunicationSettings");
//     return saved ? JSON.parse(saved) : { whatsapp: "", email: "", supportMessage: "" };
//   });

//   const [adminUsers, setAdminUsers] = useState(() => {
//     const saved = localStorage.getItem("adminUsers");
//     if (saved) { try { return JSON.parse(saved); } catch { return createDemoAdminUsers(); } }
//     return createDemoAdminUsers();
//   });

//   const [adminSearch, setAdminSearch] = useState("");
//   const [selectedAdminId, setSelectedAdminId] = useState(null);
//   const [showAdminModal, setShowAdminModal] = useState(false);
//   const [editingAdminId, setEditingAdminId] = useState(null);
//   const [adminForm, setAdminForm] = useState({ name: "", email: "", role: "manager", status: "active", permissions: { dashboard: true, users: true, categories: false, products: true, shipping: false, communication: false, feeSettings: false, policies: false } });

//   const [dashboardStats, setDashboardStats] = useState({ totalCustomers: 0, totalProfit: 0, activeUsers: 0, activeShipment: 0, delivered: 0, goldCount: 0, silverCount: 0 });
//   const [storedProducts, setStoredProducts] = useState([]);

//   const [formData, setFormData] = useState({
//     productName: "", metalType: "", category: "", purity: "",
//     weight: "", pricePerGram: "", makingCharges: "", offerPrice: "",
//     totalPrice: "", stock: "", productDescription: "",
//   });

//   const [previews, setPreviews] = useState([]);
//   const [shippingFilters, setShippingFilters] = useState({ status: "", shipmentType: "" });
//   const [shipments] = useState([
//     { id: 1, user: "Keval Parashar", commodity: "Gold(2gram)", weight: "2g", type: "Physical Delivery", shipmentId: "se-623135802", status: "Shipment Created" },
//     { id: 2, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Ship Commodity To Gold App", shipmentId: "se-622247522", status: "Shipment Created" },
//     { id: 3, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Physical Delivery", shipmentId: "se-622179834", status: "Shipping Estimated by Admin" },
//   ]);

//   const page = { display: "flex", minHeight: "100vh", background: "#f6f4f8", fontFamily: "Arial, Helvetica, sans-serif" };

//   // ── Auth helper — attaches Bearer token to every API request ─────────────
//   const authHeaders = () => ({
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//     "ngrok-skip-browser-warning": "true",
//     Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
//   });

//   // ── Category API calls ────────────────────────────────────────────────────

//   // GET /api/categories — load all categories
//   const loadCategories = async () => {
//     setCategoryLoading(true);
//     setCategoryError("");
//     try {
//       const res = await fetch(`${API_BASE}/categories`, {
//         headers: authHeaders(),
//       });
//       if (!res.ok) throw new Error(`Failed to load categories (${res.status})`);
//       const data = await res.json();
//       // Laravel returns the collection directly or wrapped in { data: [...] }
//       const list = Array.isArray(data) ? data : (data.data || []);
//       setCategories(list);
//       // Keep localStorage in sync so Header.jsx & MarchEdit can read it offline
//       localStorage.setItem("adminCategories", JSON.stringify(list.map((c) => c.name)));
//     } catch (err) {
//       setCategoryError(err.message);
//     } finally {
//       setCategoryLoading(false);
//     }
//   };

//   // POST /api/categories — create a new category
//   const handleAddCategory = async () => {
//     const name = categoryForm.name.trim();
//     if (!name) { alert("Please enter a category name."); return; }
//     if (categories.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
//       alert("This category already exists."); return;
//     }
//     // Auto-generate slug from name if not provided
//     const slug = categoryForm.slug.trim() ||
//       name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
//     const payload = {
//       name,
//       slug,
//       image:       categoryForm.image.trim()       || null,
//       description: categoryForm.description.trim() || null,
//       stock:       categoryForm.stock !== "" ? Number(categoryForm.stock) : null,
//     };
//     setCategoryLoading(true);
//     setCategoryError("");
//     try {
//       const res = await fetch(`${API_BASE}/categories`, {
//         method: "POST",
//         headers: authHeaders(),
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) {
//         const err = await res.json().catch(() => ({}));
//         throw new Error(err.message || `Failed to create category (${res.status})`);
//       }
//       const created = await res.json();
//       const newCat = created.data || created;
//       const updated = [...categories, newCat];
//       setCategories(updated);
//       localStorage.setItem("adminCategories", JSON.stringify(updated.map((c) => c.name)));
//       setCategoryForm({ name: "", slug: "", image: "", description: "", stock: "" });
//       setShowAddCategoryModal(false);
//     } catch (err) {
//       setCategoryError(err.message);
//     } finally {
//       setCategoryLoading(false);
//     }
//   };

//   // Sets which category id is pending deletion — opens confirm modal
//   const confirmDeleteCategory = (id) => setDeleteCategoryId(id);

//   // DELETE /api/categories/{id} — delete confirmed category
//   const handleDeleteCategory = async () => {
//     if (!deleteCategoryId) return;
//     try {
//       const res = await fetch(`${API_BASE}/categories/${deleteCategoryId}`, {
//         method: "DELETE",
//         headers: authHeaders(),
//       });
//       if (!res.ok) throw new Error(`Failed to delete category (${res.status})`);
//       const updated = categories.filter((c) => c.id !== deleteCategoryId);
//       setCategories(updated);
//       localStorage.setItem("adminCategories", JSON.stringify(updated.map((c) => c.name)));
//       setDeleteCategoryId(null);
//     } catch (err) {
//       alert(err.message);
//     }
//   };
//   // ─────────────────────────────────────────────────────────────────────────

//   // ── Storage helpers ───────────────────────────────────────────────────────
//   const formatMetalName = (value) => {
//     const t = value.trim();
//     if (!t) return "";
//     return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
//   };

//   const loadProductsFromStorage = () => {
//     const products = JSON.parse(localStorage.getItem("adminProducts") || "[]");
//     const migrated = products.map((p) => {
//       if (!p.slug) return { ...p, slug: generateSlug(p.name || String(p.id || Date.now())) };
//       return p;
//     });
//     if (migrated.some((p, i) => p.slug !== products[i]?.slug)) {
//       localStorage.setItem("adminProducts", JSON.stringify(migrated));
//     }
//     setStoredProducts(migrated);
//     return migrated;
//   };

//   const loadMetalsFromStorage = () => {
//     const metals = JSON.parse(localStorage.getItem("adminMetals") || "null");
//     if (Array.isArray(metals) && metals.length > 0) {
//       const cleaned = [...new Set(metals.map(formatMetalName).filter(Boolean))];
//       setStoredMetals(cleaned);
//       localStorage.setItem("adminMetals", JSON.stringify(cleaned));
//       return cleaned;
//     }
//     setStoredMetals([]);
//     return [];
//   };

//   const saveUsers = (u) => { setUsers(u); localStorage.setItem("users", JSON.stringify(u)); };
//   const saveAdminUsers = (a) => {
//     setAdminUsers(a);
//     localStorage.setItem("adminUsers", JSON.stringify(a));
//     if (!a.find((item) => item.id === selectedAdminId)) setSelectedAdminId(a[0]?.id || null);
//   };
//   const saveMetalPurities = (p) => { setMetalPurities(p); localStorage.setItem("adminMetalPurities", JSON.stringify(p)); };

//   // ── User/admin helpers ────────────────────────────────────────────────────
//   const resetUserForm = () => { setUserForm({ name: "", email: "", location: "", type: "individual", crmType: "Lead", leadStatus: "New", owner: "Super Admin", totalPurchases: "", status: "active", kyc: "pending", ira: "None", isLead: true, myLead: false, phone: "", tags: "App User" }); setEditingUserId(null); };
//   const resetAdminForm = () => { setAdminForm({ name: "", email: "", role: "manager", status: "active", permissions: { dashboard: true, users: true, categories: false, products: true, shipping: false, communication: false, feeSettings: false, policies: false } }); setEditingAdminId(null); };

//   const resetProductForm = () => {
//     setFormData({ productName: "", metalType: "", category: "", purity: "", weight: "", pricePerGram: "", makingCharges: "", offerPrice: "", totalPrice: "", stock: "", productDescription: "" });
//     setPreviews([]);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const openAddUserModal = () => { resetUserForm(); setShowUserModal(true); };
//   const openEditUserModal = (user) => {
//     setEditingUserId(user.id);
//     setUserForm({ name: user.name || "", email: user.email || "", location: user.location || "", type: user.type || "individual", crmType: user.crmType || "Lead", leadStatus: user.leadStatus || "New", owner: user.owner || "Super Admin", totalPurchases: user.totalPurchases || "", status: user.status || "active", kyc: user.kyc || "pending", ira: user.ira || "None", isLead: Boolean(user.isLead), myLead: Boolean(user.myLead), phone: user.phone || "", tags: (user.tags || []).join(", ") || "App User" });
//     setShowUserModal(true);
//   };
//   const openAddAdminModal = () => { resetAdminForm(); setShowAdminModal(true); };
//   const openEditAdminModal = (admin) => {
//     setEditingAdminId(admin.id);
//     setAdminForm({ name: admin.name || "", email: admin.email || "", role: admin.role || "manager", status: admin.status || "active", permissions: { dashboard: Boolean(admin.permissions?.dashboard), users: Boolean(admin.permissions?.users), categories: Boolean(admin.permissions?.categories), products: Boolean(admin.permissions?.products), shipping: Boolean(admin.permissions?.shipping), communication: Boolean(admin.permissions?.communication), feeSettings: Boolean(admin.permissions?.feeSettings), policies: Boolean(admin.permissions?.policies) } });
//     setShowAdminModal(true);
//   };

//   const handleUserFormChange = (e) => { const { name, value, type, checked } = e.target; setUserForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value })); };
//   const handleAdminFormChange = (e) => { const { name, value } = e.target; setAdminForm((prev) => ({ ...prev, [name]: value })); };
//   const handleAdminPermissionChange = (key) => { setAdminForm((prev) => ({ ...prev, permissions: { ...prev.permissions, [key]: !prev.permissions[key] } })); };

//   const handleSaveUser = () => {
//     if (!userForm.name.trim() || !userForm.email.trim() || !userForm.location.trim()) { alert("Please fill name, email and location."); return; }
//     const payload = { id: editingUserId || Date.now(), name: userForm.name.trim(), email: userForm.email.trim(), location: userForm.location.trim(), type: userForm.type, crmType: userForm.crmType, leadStatus: userForm.leadStatus, owner: userForm.owner.trim() || "Super Admin", totalPurchases: Number(userForm.totalPurchases || 0), status: userForm.status, kyc: userForm.kyc, ira: userForm.ira, isLead: Boolean(userForm.isLead), myLead: Boolean(userForm.myLead), phone: userForm.phone.trim(), tags: userForm.tags.split(",").map((i) => i.trim()).filter(Boolean) };
//     saveUsers(editingUserId ? users.map((i) => (i.id === editingUserId ? payload : i)) : [payload, ...users]);
//     setShowUserModal(false);
//     resetUserForm();
//   };

//   const handleSaveAdmin = () => {
//     if (!adminForm.name.trim() || !adminForm.email.trim() || !adminForm.role.trim()) { alert("Please fill name, email and role."); return; }
//     const payload = { id: editingAdminId || Date.now(), name: adminForm.name.trim(), email: adminForm.email.trim(), role: adminForm.role, status: adminForm.status, permissions: adminForm.permissions, createdAt: editingAdminId ? adminUsers.find((i) => i.id === editingAdminId)?.createdAt || new Date().toISOString() : new Date().toISOString(), lastLogin: editingAdminId ? adminUsers.find((i) => i.id === editingAdminId)?.lastLogin || new Date().toISOString() : new Date().toISOString() };
//     saveAdminUsers(editingAdminId ? adminUsers.map((i) => (i.id === editingAdminId ? payload : i)) : [payload, ...adminUsers]);
//     setSelectedAdminId(payload.id);
//     setShowAdminModal(false);
//     resetAdminForm();
//   };

//   const handleDeleteUser = (id) => { if (!window.confirm("Are you sure?")) return; saveUsers(users.filter((i) => i.id !== id)); };
//   const handleDeleteAdmin = (id) => { if (!window.confirm("Are you sure?")) return; saveAdminUsers(adminUsers.filter((i) => i.id !== id)); };
//   const handleToggleUserStatus = (id) => { saveUsers(users.map((i) => i.id === id ? { ...i, status: i.status === "active" ? "inactive" : "active" } : i)); };
//   const handleToggleAdminStatus = (id) => { saveAdminUsers(adminUsers.map((i) => i.id === id ? { ...i, status: i.status === "active" ? "inactive" : "active" } : i)); };

//   const exportUsersCSV = () => {
//     const headers = ["Name", "Email", "Location", "Type", "CRM Type", "Lead Status", "Owner", "Total Purchases", "Status", "KYC", "IRA", "Phone"];
//     const rows = filteredUsers.map((u) => [u.name, u.email, u.location, u.type, u.crmType, u.leadStatus, u.owner, u.totalPurchases, u.status, u.kyc, u.ira, u.phone || ""]);
//     const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
//     link.setAttribute("download", "users.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCommunicationSave = () => { localStorage.setItem("adminCommunicationSettings", JSON.stringify(communicationSettings)); alert("Communication settings saved"); };

//   // ── Effects ───────────────────────────────────────────────────────────────
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
//     if (!token || !loggedInUser) { navigate("/login"); return; }
//     const role = (loggedInUser.role || "").toLowerCase();
//     if (!role.includes("admin") && role !== "manager" && !loggedInUser.isAdmin) { navigate("/login"); return; }
//     const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
//     setUsers(savedUsers.length ? savedUsers : (() => { const d = createDemoUsers(); localStorage.setItem("users", JSON.stringify(d)); return d; })());
//     loadProductsFromStorage();
//     loadMetalsFromStorage();
//     if (!localStorage.getItem("adminMetalPurities")) { localStorage.setItem("adminMetalPurities", JSON.stringify({})); setMetalPurities({}); }
//     setSelectedAdminId(adminUsers[0]?.id || null);
//     // Load categories from API on mount
//     loadCategories();
//   }, [navigate]);

//   useEffect(() => {
//     const gold = storedProducts.filter((p) => p.metalType?.toLowerCase() === "gold").length;
//     const silver = storedProducts.filter((p) => p.metalType?.toLowerCase() === "silver").length;
//     const profit = storedProducts.reduce((a, c) => a + (Number(c.totalPrice) || 0), 0);
//     setDashboardStats({ totalCustomers: users.length, totalProfit: profit, activeUsers: users.filter((u) => u.status === "active").length, activeShipment: 12, delivered: 85, goldCount: gold, silverCount: silver });
//   }, [storedProducts, users]);

//   useEffect(() => {
//     const w = Number(formData.weight) || 0, ppg = Number(formData.pricePerGram) || 0, mc = Number(formData.makingCharges) || 0, op = Number(formData.offerPrice) || 0;
//     const total = w * ppg + mc - op;
//     setFormData((prev) => {
//       const next = prev.metalType && (prev.weight !== "" || prev.pricePerGram !== "" || prev.makingCharges !== "" || prev.offerPrice !== "") ? String(Math.max(total, 0)) : "";
//       return prev.totalPrice === next ? prev : { ...prev, totalPrice: next };
//     });
//   }, [formData.weight, formData.pricePerGram, formData.makingCharges, formData.offerPrice, formData.metalType]);

//   // ── Derived data ──────────────────────────────────────────────────────────
//   const filteredUsers = users.filter((user) => {
//     const tab = userTab === "all" ? true : userTab === "individuals" ? user.type === "individual" : user.type === "business";
//     return tab && user.name?.toLowerCase().includes(userFilters.name.toLowerCase()) && user.email?.toLowerCase().includes(userFilters.email.toLowerCase()) && user.location?.toLowerCase().includes(userFilters.location.toLowerCase()) && (userFilters.status ? user.status === userFilters.status : true) && (userFilters.kyc ? user.kyc === userFilters.kyc : true) && (userFilters.crmType ? user.crmType === userFilters.crmType : true) && (userFilters.leadStatus ? user.leadStatus === userFilters.leadStatus : true) && (userFilters.type ? user.type === userFilters.type : true) && (userFilters.leadsOnly ? user.isLead : true) && (userFilters.myLeads ? user.myLead : true);
//   });

//   const filteredAdmins = adminUsers.filter((a) => { const t = adminSearch.toLowerCase(); return a.name?.toLowerCase().includes(t) || a.email?.toLowerCase().includes(t) || a.role?.toLowerCase().includes(t); });
//   const selectedAdmin = adminUsers.find((i) => i.id === selectedAdminId) || null;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const u = { ...prev, [name]: value };
//       if (name === "metalType") { u.purity = ""; if (!value) { u.weight = ""; u.pricePerGram = ""; u.makingCharges = ""; u.offerPrice = ""; u.totalPrice = ""; u.stock = ""; } }
//       return u;
//     });
//   };

//   const handleStockChange = (productSlug, value) => {
//     const updated = storedProducts.map((p) => p.slug === productSlug ? { ...p, stock: value === "" ? "" : Number(value) } : p);
//     setStoredProducts(updated);
//     localStorage.setItem("adminProducts", JSON.stringify(updated));
//   };

//   const startStockEdit = (product) => { setEditingStockId(product.slug); setEditingStockValue(product.stock ?? ""); };
//   const saveStockEdit = (productSlug) => { handleStockChange(productSlug, editingStockValue); setEditingStockId(null); setEditingStockValue(""); };
//   const confirmDeleteProduct = (productSlug) => setDeleteProductSlug(productSlug);

//   const handleDeleteProduct = () => {
//     const updated = storedProducts.filter((p) => p.slug !== deleteProductSlug);
//     setStoredProducts(updated);
//     localStorage.setItem("adminProducts", JSON.stringify(updated));
//     setDeleteProductSlug(null);
//   };

//   const handleAddMetal = () => {
//     const m = formatMetalName(newMetalName);
//     if (!m) { alert("Please enter a metal name."); return; }
//     if (storedMetals.some((x) => x.toLowerCase() === m.toLowerCase())) { alert("This metal already exists."); return; }
//     const updated = [...storedMetals, m];
//     setStoredMetals(updated);
//     localStorage.setItem("adminMetals", JSON.stringify(updated));
//     saveMetalPurities({ ...metalPurities, [m]: metalPurities[m] || [] });
//     setNewMetalName(""); setShowAddMetalModal(false);
//   };

//   const addPurityToMetal = (metal) => {
//     const p = (purityInputs[metal] || "").trim();
//     if (!p) { alert("Please enter a purity value."); return; }
//     if ((metalPurities[metal] || []).some((x) => x.toLowerCase() === p.toLowerCase())) { alert("This purity already exists for " + metal); return; }
//     saveMetalPurities({ ...metalPurities, [metal]: [...(metalPurities[metal] || []), p] });
//     setPurityInputs((prev) => ({ ...prev, [metal]: "" }));
//     setShowPurityInputFor(null);
//   };

//   const confirmDeletePurity = (metal, purity) => {
//     if (storedProducts.some((p) => p.metalType?.toLowerCase() === metal.toLowerCase() && p.purity?.toLowerCase() === purity.toLowerCase())) { alert("You cannot remove this purity because products are using it."); return; }
//     saveMetalPurities({ ...metalPurities, [metal]: (metalPurities[metal] || []).filter((x) => x.toLowerCase() !== purity.toLowerCase()) });
//   };

//   const confirmDeleteMetal = (metalName) => {
//     if (storedProducts.some((p) => p.metalType?.toLowerCase() === metalName.toLowerCase())) { alert("You cannot remove this metal because products are using it."); return; }
//     setDeleteMetalName(metalName);
//   };

//   const handleDeleteMetal = () => {
//     const updated = storedMetals.filter((m) => m.toLowerCase() !== deleteMetalName.toLowerCase());
//     setStoredMetals(updated);
//     localStorage.setItem("adminMetals", JSON.stringify(updated));
//     const p = { ...metalPurities }; delete p[deleteMetalName];
//     saveMetalPurities(p);
//     setDeleteMetalName(null);
//   };

//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files || []);
//     if (!files.length) return;
//     const imgs = await Promise.all(files.map((f) => new Promise((res) => { const r = new FileReader(); r.onloadend = () => res({ id: `${Date.now()}-${Math.random()}-${f.name}`, src: r.result, name: f.name }); r.readAsDataURL(f); })));
//     setPreviews((prev) => [...prev, ...imgs]);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const removeImage = (i) => setPreviews((prev) => prev.filter((_, idx) => idx !== i));
//   const handleDragStart = (i) => { dragItemIndex.current = i; };
//   const handleDragEnter = (i) => { dragOverItemIndex.current = i; };
//   const handleDrop = () => {
//     const from = dragItemIndex.current, to = dragOverItemIndex.current;
//     if (from === null || to === null || from === to || from < 0 || to < 0) { dragItemIndex.current = null; dragOverItemIndex.current = null; return; }
//     setPreviews((prev) => { const a = [...prev], item = a[from]; a.splice(from, 1); a.splice(to, 0, item); return a; });
//     dragItemIndex.current = null; dragOverItemIndex.current = null;
//   };
//   const handleDragEnd = () => { dragItemIndex.current = null; dragOverItemIndex.current = null; };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.productName.trim() || !formData.metalType.trim() || !formData.productDescription.trim() || !formData.purity.trim() || !formData.weight.toString().trim() || !formData.pricePerGram.toString().trim() || !formData.makingCharges.toString().trim() || !formData.stock.toString().trim() || !formData.totalPrice.toString().trim() || previews.length === 0) {
//       alert("Please fill all required product fields and upload at least one photo."); return;
//     }
//     const isEditing = Boolean(formData.slug);
//     const productData = {
//       slug: isEditing ? formData.slug : generateSlug(formData.productName),
//       name: formData.productName.trim(),
//       metalType: formData.metalType.trim(),
//       category: formData.category?.trim() || "",
//       purity: formData.purity.trim(),
//       weight: formData.weight,
//       pricePerGram: formData.pricePerGram,
//       makingCharges: formData.makingCharges,
//       offerPrice: formData.offerPrice,
//       totalPrice: formData.totalPrice,
//       stock: Number(formData.stock),
//       description: formData.productDescription.trim(),
//       images: previews.map((item) => item.src),
//       createdAt: isEditing ? storedProducts.find((p) => p.slug === formData.slug)?.createdAt || new Date().toISOString() : new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };
//     const updatedProducts = isEditing
//       ? storedProducts.map((p) => p.slug === formData.slug ? productData : p)
//       : [...storedProducts, productData];
//     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
//     setStoredProducts(updatedProducts);
//     alert(isEditing ? "Product updated successfully" : "Product saved successfully");
//     resetProductForm();
//     setShowAddProductForm(false);
//     setIsEditMode(false);
//   };

//   const handleShippingFilterChange = (e) => { const { name, value } = e.target; setShippingFilters((prev) => ({ ...prev, [name]: value })); };
//   const clearShippingFilters = () => setShippingFilters({ status: "", shipmentType: "" });
//   const filteredShipments = shipments.filter((i) => (shippingFilters.status ? i.status === shippingFilters.status : true) && (shippingFilters.shipmentType ? i.type === shippingFilters.shipmentType : true));

//   const filteredProducts = storedProducts.filter((p) => {
//     const matchMetal = productFilterType === "all" || p.metalType?.toLowerCase() === productFilterType.toLowerCase();
//     const matchCat   = categoryFilter === "all"    || p.category?.toLowerCase()  === categoryFilter.toLowerCase();
//     return matchMetal && matchCat;
//   });

//   const getMetalProductCount = (metal) => storedProducts.filter((p) => p.metalType?.toLowerCase() === metal.toLowerCase()).length;
//   const getPurityProductCount = (metal, purity) => storedProducts.filter((p) => p.metalType?.toLowerCase() === metal.toLowerCase() && p.purity?.toLowerCase() === purity.toLowerCase()).length;
//   const getStatusBadgeStyle = (status) => ({ display: "inline-block", padding: "6px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", border: "1px solid #e7dff0", background: status === "Shipment Created" ? "#f3e9fb" : status === "Shipping Estimated by Admin" ? "#efe7f8" : "#f8f1fc", color: "#5d3d75", whiteSpace: "nowrap" });

//   // ── Modal styles ──────────────────────────────────────────────────────────
//   const modalOverlay = { position: "fixed", inset: 0, background: "rgba(47,36,56,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 999 };
//   const modalCard    = { width: "100%", maxWidth: "460px", background: "#fff", borderRadius: "16px", padding: "26px", boxShadow: "0 20px 50px rgba(0,0,0,0.18)" };
//   const modalTitle   = { fontSize: "22px", fontWeight: "700", marginBottom: "10px" };
//   const modalSubText = { fontSize: "14px", color: "#555", marginBottom: "20px" };
//   const modalActions = { display: "flex", justifyContent: "flex-end", gap: "10px" };
//   const modalInput   = { height: "44px", border: "1px solid #ddd", borderRadius: "8px", padding: "0 12px", fontSize: "14px", width: "100%", marginBottom: "20px", boxSizing: "border-box" };
//   const cancelBtn    = { border: "1px solid #ddd", background: "#fff", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", cursor: "pointer" };
//   const confirmBtn   = { background: "#6f3f8f", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer" };
//   const dangerBtn    = { background: "#b33939", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer" };

//   // Category names as plain strings for dropdowns in the Products form
//   const categoryNames = categories.map((c) => c.name);

//   return (
//     <div style={page}>
//       <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} setShowAddProductForm={setShowAddProductForm} />

//       <Mainbar
//         activeSection={activeSection}
//         dashboardStats={dashboardStats}
//         storedMetals={storedMetals}
//         metalPurities={metalPurities}
//         setShowAddMetalModal={setShowAddMetalModal}
//         getMetalProductCount={getMetalProductCount}
//         getPurityProductCount={getPurityProductCount}
//         confirmDeleteMetal={confirmDeleteMetal}
//         confirmDeletePurity={confirmDeletePurity}
//         purityInputs={purityInputs}
//         setPurityInputs={setPurityInputs}
//         showPurityInputFor={showPurityInputFor}
//         setShowPurityInputFor={setShowPurityInputFor}
//         addPurityToMetal={addPurityToMetal}
//         categories={categories}              // [{ id, name }] for Category page
//         categoryNames={categoryNames}        // ["Rings", ...] for Products form dropdown
//         setShowAddCategoryModal={setShowAddCategoryModal}
//         confirmDeleteCategory={confirmDeleteCategory}
//         productFilterType={productFilterType}
//         setProductFilterType={setProductFilterType}
//         categoryFilter={categoryFilter}
//         setCategoryFilter={setCategoryFilter}
//         showAddProductForm={showAddProductForm}
//         setShowAddProductForm={setShowAddProductForm}
//         formData={formData}
//         setFormData={setFormData}
//         handleInputChange={handleInputChange}
//         handleSubmit={handleSubmit}
//         fileInputRef={fileInputRef}
//         handleImageChange={handleImageChange}
//         previews={previews}
//         setPreviews={setPreviews}
//         handleDragStart={handleDragStart}
//         handleDragEnter={handleDragEnter}
//         handleDrop={handleDrop}
//         handleDragEnd={handleDragEnd}
//         removeImage={removeImage}
//         filteredProducts={filteredProducts}
//         confirmDeleteProduct={confirmDeleteProduct}
//         editingStockId={editingStockId}
//         editingStockValue={editingStockValue}
//         setEditingStockValue={setEditingStockValue}
//         saveStockEdit={saveStockEdit}
//         setEditingStockId={setEditingStockId}
//         startStockEdit={startStockEdit}
//         setIsEditMode={setIsEditMode}
//         users={users}
//         userTab={userTab}
//         setUserTab={setUserTab}
//         userFilters={userFilters}
//         setUserFilters={setUserFilters}
//         filteredUsers={filteredUsers}
//         openAddUserModal={openAddUserModal}
//         openEditUserModal={openEditUserModal}
//         handleDeleteUser={handleDeleteUser}
//         handleToggleUserStatus={handleToggleUserStatus}
//         exportUsersCSV={exportUsersCSV}
//         showUserModal={showUserModal}
//         setShowUserModal={setShowUserModal}
//         editingUserId={editingUserId}
//         userForm={userForm}
//         handleUserFormChange={handleUserFormChange}
//         handleSaveUser={handleSaveUser}
//         resetUserForm={resetUserForm}
//         shippingFilters={shippingFilters}
//         handleShippingFilterChange={handleShippingFilterChange}
//         clearShippingFilters={clearShippingFilters}
//         filteredShipments={filteredShipments}
//         getStatusBadgeStyle={getStatusBadgeStyle}
//         communicationSettings={communicationSettings}
//         setCommunicationSettings={setCommunicationSettings}
//         handleCommunicationSave={handleCommunicationSave}
//         adminSearch={adminSearch}
//         setAdminSearch={setAdminSearch}
//         filteredAdmins={filteredAdmins}
//         selectedAdminId={selectedAdminId}
//         setSelectedAdminId={setSelectedAdminId}
//         selectedAdmin={selectedAdmin}
//         openAddAdminModal={openAddAdminModal}
//         openEditAdminModal={openEditAdminModal}
//         handleToggleAdminStatus={handleToggleAdminStatus}
//         handleDeleteAdmin={handleDeleteAdmin}
//         showAdminModal={showAdminModal}
//         setShowAdminModal={setShowAdminModal}
//         editingAdminId={editingAdminId}
//         adminForm={adminForm}
//         handleAdminFormChange={handleAdminFormChange}
//         handleAdminPermissionChange={handleAdminPermissionChange}
//         handleSaveAdmin={handleSaveAdmin}
//         resetAdminForm={resetAdminForm}
//         formatCurrency={formatCurrency}
//         formatDateTime={formatDateTime}
//         getInitials={getInitials}
//       />

//       {/* ── Delete Product Modal ── */}
//       {deleteProductSlug !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Product?</div>
//             <div style={modalSubText}>This action will permanently delete the selected product.</div>
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => setDeleteProductSlug(null)}>Cancel</button>
//               <button style={dangerBtn} onClick={handleDeleteProduct}>Yes, Remove</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Add Metal Modal ── */}
//       {showAddMetalModal && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Add Metal</div>
//             <input type="text" value={newMetalName} onChange={(e) => setNewMetalName(e.target.value)} placeholder="Enter metal name" style={modalInput} />
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => setShowAddMetalModal(false)}>Cancel</button>
//               <button style={confirmBtn} onClick={handleAddMetal}>Add Metal</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Delete Metal Modal ── */}
//       {deleteMetalName !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Metal Type?</div>
//             <div style={modalSubText}>This will remove <strong>{deleteMetalName}</strong>.</div>
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => setDeleteMetalName(null)}>Cancel</button>
//               <button style={dangerBtn} onClick={handleDeleteMetal}>Yes, Remove</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Add Category Modal ── */}
//       {showAddCategoryModal && (
//         <div style={modalOverlay}>
//           <div style={{ ...modalCard, maxWidth: "520px" }}>
//             <div style={modalTitle}>Add Category</div>
//             {categoryError && (
//               <div style={{ color: "#b33939", fontSize: "13px", marginBottom: "10px" }}>{categoryError}</div>
//             )}

//             {/* Name */}
//             <div style={{ marginBottom: "14px" }}>
//               <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
//                 Name <span style={{ color: "#b33939" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 value={categoryForm.name}
//                 onChange={(e) => setCategoryForm((p) => ({ ...p, name: e.target.value }))}
//                 placeholder="e.g. Necklaces"
//                 style={modalInput}
//               />
//             </div>

//             {/* Slug */}
//             <div style={{ marginBottom: "14px" }}>
//               <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
//                 Slug <span style={{ fontSize: "11px", color: "#999", fontWeight: "400" }}>(auto-generated if left blank)</span>
//               </label>
//               <input
//                 type="text"
//                 value={categoryForm.slug}
//                 onChange={(e) => setCategoryForm((p) => ({ ...p, slug: e.target.value }))}
//                 placeholder="e.g. necklaces"
//                 style={modalInput}
//               />
//             </div>

//             {/* Image URL */}
//             <div style={{ marginBottom: "14px" }}>
//               <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
//                 Image URL
//               </label>
//               <input
//                 type="text"
//                 value={categoryForm.image}
//                 onChange={(e) => setCategoryForm((p) => ({ ...p, image: e.target.value }))}
//                 placeholder="https://example.com/image.jpg"
//                 style={modalInput}
//               />
//             </div>

//             {/* Description */}
//             <div style={{ marginBottom: "14px" }}>
//               <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
//                 Description
//               </label>
//               <textarea
//                 value={categoryForm.description}
//                 onChange={(e) => setCategoryForm((p) => ({ ...p, description: e.target.value }))}
//                 placeholder="Short description of this category"
//                 rows={3}
//                 style={{ width: "100%", border: "1px solid #ddd", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box", marginBottom: "0" }}
//               />
//             </div>

//             {/* Stock */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
//                 Stock
//               </label>
//               <input
//                 type="number"
//                 value={categoryForm.stock}
//                 onChange={(e) => setCategoryForm((p) => ({ ...p, stock: e.target.value }))}
//                 placeholder="0"
//                 min="0"
//                 style={modalInput}
//               />
//             </div>

//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => {
//                 setShowAddCategoryModal(false);
//                 setCategoryForm({ name: "", slug: "", image: "", description: "", stock: "" });
//                 setCategoryError("");
//               }}>Cancel</button>
//               <button style={confirmBtn} onClick={handleAddCategory} disabled={categoryLoading}>
//                 {categoryLoading ? "Saving…" : "Add Category"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Delete Category Modal ── */}
//       {deleteCategoryId !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Category?</div>
//             <div style={modalSubText}>
//               This will remove <strong>{categories.find((c) => c.id === deleteCategoryId)?.name}</strong>.
//             </div>
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => setDeleteCategoryId(null)}>Cancel</button>
//               <button style={dangerBtn} onClick={handleDeleteCategory}>Yes, Remove</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React from "react";

export default function Category({
  categories = [],          // [{ id, name, slug, image, description, stock }]
  setShowAddCategoryModal,
  confirmDeleteCategory,    // called with category.id
}) {
  const pageWrap = { width: "100%", maxWidth: "1300px" };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "12px",
  };

  const title    = { fontSize: "28px", fontWeight: "700", color: "#222", margin: 0 };
  const subTitle = { fontSize: "14px", color: "#666", marginTop: "6px" };

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

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  };

  const card = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "14px",
    padding: "20px 22px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const cardTop = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  };

  const cardLeft = { display: "flex", alignItems: "center", gap: "14px", minWidth: 0 };

  const catImage = {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    objectFit: "cover",
    border: "1px solid #e5dced",
    flexShrink: 0,
  };

  const iconBox = {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "#f3e9fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const cardName = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#2b2b2b",
    margin: 0,
    wordBreak: "break-word",
  };

  const cardSlug = {
    fontSize: "12px",
    color: "#999",
    marginTop: "2px",
  };

  const cardDesc = {
    fontSize: "13px",
    color: "#555",
    lineHeight: "1.5",
    margin: 0,
  };

  const cardMeta = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    paddingTop: "8px",
    borderTop: "1px solid #f0e8f6",
  };

  const metaItem = {
    fontSize: "12px",
    color: "#777",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const stockBadge = (stock) => ({
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 8px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    background: stock > 0 ? "#eaf8ee" : "#fff0f0",
    color: stock > 0 ? "#1f8b4c" : "#c0392b",
  });

  const deleteBtn = {
    background: "#fff1f1",
    color: "#b33939",
    border: "1px solid #f0c7c7",
    borderRadius: "8px",
    width: "34px",
    height: "34px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    padding: 0,
  };

  const emptyBox = {
    background: "#fff",
    border: "1px dashed #d9c8e7",
    borderRadius: "16px",
    padding: "40px 24px",
    textAlign: "center",
    color: "#666",
    fontSize: "15px",
  };

  return (
    <div style={pageWrap}>
      <div style={header}>
        <div>
          <h1 style={title}>Categories</h1>
          <div style={subTitle}>Manage product categories</div>
        </div>
        <button type="button" style={addButton} onClick={() => setShowAddCategoryModal(true)}>
          + Add Category
        </button>
      </div>

      {categories.length > 0 ? (
        <div style={grid}>
          {categories.map((cat) => (
            <div key={cat.id} style={card}>
              {/* ── Top row: image/icon + name + delete ── */}
              <div style={cardTop}>
                <div style={cardLeft}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} style={catImage} />
                  ) : (
                    <div style={iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f3f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                      </svg>
                    </div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p style={cardName}>{cat.name}</p>
                    {cat.slug && <div style={cardSlug}>/{cat.slug}</div>}
                  </div>
                </div>

                <button
                  type="button"
                  style={deleteBtn}
                  title="Remove category"
                  onClick={() => confirmDeleteCategory(cat.id)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6"/><path d="M14 11v6"/>
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                  </svg>
                </button>
              </div>

              {/* ── Description ── */}
              {cat.description && (
                <p style={cardDesc}>{cat.description}</p>
              )}

              {/* ── Meta row: stock ── */}
              <div style={cardMeta}>
                <div style={metaItem}>
                  <span>Stock:</span>
                  <span style={stockBadge(cat.stock ?? 0)}>
                    {cat.stock != null ? cat.stock : "—"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={emptyBox}>
          No categories added yet. Click <strong>+ Add Category</strong> to create your first one.
        </div>
      )}
    </div>
  );
}
