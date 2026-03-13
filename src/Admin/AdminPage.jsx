// import React, { useEffect, useRef, useState } from "react";

// const SIDEBAR_ITEMS = [
//   { key: "dashboard", label: "Dashboard" },
//   { key: "products", label: "Products" },
//   { key: "metal-types", label: "Metal Types" },
//   { key: "users", label: "Users" },
//   { key: "shipping", label: "Shipping" },
//   { key: "communication", label: "Communication" },
//   { key: "admin-users", label: "Admin Users" },
//   { key: "fee-setting", label: "Fee Setting" },
//   { key: "privacy-policy", label: "Privacy Policy" },
//   { key: "terms-conditions", label: "Terms & Conditions" },
// ];

// const DEFAULT_METALS = ["Gold", "Silver"];

// export default function AdminPage() {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [showAddProductForm, setShowAddProductForm] = useState(false);
//   const [productFilterType, setProductFilterType] = useState("all");
//   const [editingStockId, setEditingStockId] = useState(null);
//   const [editingStockValue, setEditingStockValue] = useState("");
//   const [deleteProductId, setDeleteProductId] = useState(null);

//   const [storedMetals, setStoredMetals] = useState(DEFAULT_METALS);
//   const [showAddMetalModal, setShowAddMetalModal] = useState(false);
//   const [newMetalName, setNewMetalName] = useState("");
//   const [deleteMetalName, setDeleteMetalName] = useState(null);

//   const fileInputRef = useRef(null);
//   const dragItemIndex = useRef(null);
//   const dragOverItemIndex = useRef(null);

//   const [dashboardStats, setDashboardStats] = useState({
//     totalCustomers: 0,
//     totalProfit: 0,
//     activeUsers: 0,
//     activeShipment: 0,
//     delivered: 0,
//     goldCount: 0,
//     silverCount: 0,
//   });

//   const [storedProducts, setStoredProducts] = useState([]);

//   const [formData, setFormData] = useState({
//     productName: "",
//     metalType: "",
//     purity: "",
//     weight: "",
//     pricePerGram: "",
//     makingCharges: "",
//     offerPrice: "",
//     totalPrice: "",
//     stock: "",
//     productDescription: "",
//   });

//   const [previews, setPreviews] = useState([]);

//   const [shippingFilters, setShippingFilters] = useState({
//     status: "",
//     shipmentType: "",
//   });

//   const [shipments] = useState([
//     {
//       id: 1,
//       user: "Keval Parashar",
//       commodity: "Gold(2gram)",
//       weight: "2g",
//       type: "Physical Delivery",
//       shipmentId: "se-623135802",
//       status: "Shipment Created",
//     },
//     {
//       id: 2,
//       user: "ANIMI GSWM",
//       commodity: "Gold(1gram)",
//       weight: "1g",
//       type: "Ship Commodity To Gold App",
//       shipmentId: "se-622247522",
//       status: "Shipment Created",
//     },
//     {
//       id: 3,
//       user: "ANIMI GSWM",
//       commodity: "Gold(1gram)",
//       weight: "1g",
//       type: "Physical Delivery",
//       shipmentId: "se-622179834",
//       status: "Shipping Estimated by Admin",
//     },
//     {
//       id: 4,
//       user: "Shubh",
//       commodity: "Rhodium(1gram)",
//       weight: "1g",
//       type: "Physical Delivery",
//       shipmentId: "se-622180001",
//       status: "Pending Shipping Estimation",
//     },
//     {
//       id: 5,
//       user: "Shubh",
//       commodity: "Gold(1.684gram)",
//       weight: "1.684g",
//       type: "Physical Delivery",
//       shipmentId: "se-622180002",
//       status: "Pending Shipping Estimation",
//     },
//   ]);

//   const formatMetalName = (value) => {
//     const trimmed = value.trim();
//     if (!trimmed) return "";
//     return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
//   };

//   const loadProductsFromStorage = () => {
//     const products = JSON.parse(localStorage.getItem("adminProducts") || "[]");
//     setStoredProducts(products);
//     return products;
//   };

//   const loadMetalsFromStorage = () => {
//     const metals = JSON.parse(localStorage.getItem("adminMetals") || "null");

//     if (Array.isArray(metals) && metals.length > 0) {
//       const cleanedMetals = [
//         ...new Set(metals.map((item) => formatMetalName(item)).filter(Boolean)),
//       ];
//       setStoredMetals(cleanedMetals);
//       localStorage.setItem("adminMetals", JSON.stringify(cleanedMetals));
//       return cleanedMetals;
//     }

//     localStorage.setItem("adminMetals", JSON.stringify(DEFAULT_METALS));
//     setStoredMetals(DEFAULT_METALS);
//     return DEFAULT_METALS;
//   };

//   useEffect(() => {
//     loadProductsFromStorage();
//     loadMetalsFromStorage();
//   }, []);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

//     const gold = storedProducts.filter(
//       (p) => p.metalType?.toLowerCase() === "gold"
//     ).length;

//     const silver = storedProducts.filter(
//       (p) => p.metalType?.toLowerCase() === "silver"
//     ).length;

//     const profit = storedProducts.reduce(
//       (acc, curr) => acc + (Number(curr.totalPrice) || 0),
//       0
//     );

//     setDashboardStats({
//       totalCustomers: storedUsers.length,
//       totalProfit: profit,
//       activeUsers:
//         storedUsers.filter((u) => u.status === "active").length ||
//         Math.floor(storedUsers.length * 0.4),
//       activeShipment: 12,
//       delivered: 85,
//       goldCount: gold,
//       silverCount: silver,
//     });
//   }, [activeSection, storedProducts]);

//   useEffect(() => {
//     const weight = Number(formData.weight) || 0;
//     const pricePerGram = Number(formData.pricePerGram) || 0;
//     const makingCharges = Number(formData.makingCharges) || 0;
//     const offerPrice = Number(formData.offerPrice) || 0;

//     const calculatedTotal =
//       weight * pricePerGram + makingCharges - offerPrice;

//     setFormData((prev) => {
//       const nextTotal =
//         prev.metalType &&
//           (prev.weight !== "" ||
//             prev.pricePerGram !== "" ||
//             prev.makingCharges !== "" ||
//             prev.offerPrice !== "")
//           ? String(Math.max(calculatedTotal, 0))
//           : "";

//       if (prev.totalPrice === nextTotal) return prev;

//       return {
//         ...prev,
//         totalPrice: nextTotal,
//       };
//     });
//   }, [
//     formData.weight,
//     formData.pricePerGram,
//     formData.makingCharges,
//     formData.offerPrice,
//     formData.metalType,
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => {
//       const updated = {
//         ...prev,
//         [name]: value,
//       };

//       if (name === "metalType" && !value) {
//         updated.purity = "";
//         updated.weight = "";
//         updated.pricePerGram = "";
//         updated.makingCharges = "";
//         updated.offerPrice = "";
//         updated.totalPrice = "";
//         updated.stock = "";
//       }

//       return updated;
//     });
//   };

//   const handleStockChange = (productId, value) => {
//     const updatedProducts = storedProducts.map((product) =>
//       product.id === productId
//         ? { ...product, stock: value === "" ? "" : Number(value) }
//         : product
//     );

//     setStoredProducts(updatedProducts);
//     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
//   };

//   const startStockEdit = (product) => {
//     setEditingStockId(product.id);
//     setEditingStockValue(product.stock ?? "");
//   };

//   const saveStockEdit = (productId) => {
//     handleStockChange(productId, editingStockValue);
//     setEditingStockId(null);
//     setEditingStockValue("");
//   };

//   const confirmDeleteProduct = (productId) => {
//     setDeleteProductId(productId);
//   };

//   const handleDeleteProduct = () => {
//     const updatedProducts = storedProducts.filter(
//       (product) => product.id !== deleteProductId
//     );
//     setStoredProducts(updatedProducts);
//     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));

//     if (editingStockId === deleteProductId) {
//       setEditingStockId(null);
//       setEditingStockValue("");
//     }

//     setDeleteProductId(null);
//   };

//   const handleAddMetal = () => {
//     const formattedMetal = formatMetalName(newMetalName);

//     if (!formattedMetal) {
//       alert("Please enter a metal name.");
//       return;
//     }

//     const alreadyExists = storedMetals.some(
//       (metal) => metal.toLowerCase() === formattedMetal.toLowerCase()
//     );

//     if (alreadyExists) {
//       alert("This metal already exists.");
//       return;
//     }

//     const updatedMetals = [...storedMetals, formattedMetal];
//     setStoredMetals(updatedMetals);
//     localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));

//     setNewMetalName("");
//     setShowAddMetalModal(false);
//   };

//   const confirmDeleteMetal = (metalName) => {
//     const productCount = storedProducts.filter(
//       (product) => product.metalType?.toLowerCase() === metalName.toLowerCase()
//     ).length;

//     if (productCount > 0) {
//       alert("You cannot remove this metal because products are using it.");
//       return;
//     }

//     setDeleteMetalName(metalName);
//   };

//   const handleDeleteMetal = () => {
//     const updatedMetals = storedMetals.filter(
//       (metal) => metal.toLowerCase() !== deleteMetalName.toLowerCase()
//     );

//     setStoredMetals(updatedMetals);
//     localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));

//     if (
//       formData.metalType &&
//       formData.metalType.toLowerCase() === deleteMetalName.toLowerCase()
//     ) {
//       setFormData((prev) => ({
//         ...prev,
//         metalType: "",
//         purity: "",
//         weight: "",
//         pricePerGram: "",
//         makingCharges: "",
//         offerPrice: "",
//         totalPrice: "",
//         stock: "",
//       }));
//     }

//     if (
//       productFilterType !== "all" &&
//       productFilterType.toLowerCase() === deleteMetalName.toLowerCase()
//     ) {
//       setProductFilterType("all");
//     }

//     setDeleteMetalName(null);
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

//   const resetProductForm = () => {
//     setFormData({
//       productName: "",
//       metalType: "",
//       purity: "",
//       weight: "",
//       pricePerGram: "",
//       makingCharges: "",
//       offerPrice: "",
//       totalPrice: "",
//       stock: "",
//       productDescription: "",
//     });
//     setPreviews([]);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.productName.trim() ||
//       !formData.metalType.trim() ||
//       !formData.productDescription.trim() ||
//       !formData.purity.trim() ||
//       !formData.weight.toString().trim() ||
//       !formData.pricePerGram.toString().trim() ||
//       !formData.makingCharges.toString().trim() ||
//       !formData.stock.toString().trim() ||
//       !formData.totalPrice.toString().trim() ||
//       previews.length === 0
//     ) {
//       alert(
//         "Please fill all required product fields and upload at least one photo."
//       );
//       return;
//     }

//     const newProduct = {
//       id: Date.now(),
//       name: formData.productName.trim(),
//       metalType: formData.metalType.trim(),
//       purity: formData.purity.trim(),
//       weight: formData.weight,
//       pricePerGram: formData.pricePerGram,
//       makingCharges: formData.makingCharges,
//       offerPrice: formData.offerPrice,
//       totalPrice: formData.totalPrice,
//       stock: Number(formData.stock),
//       description: formData.productDescription.trim(),
//       images: previews.map((item) => item.src),
//       createdAt: new Date().toISOString(),
//     };

//     const existingProducts = JSON.parse(
//       localStorage.getItem("adminProducts") || "[]"
//     );

//     existingProducts.push(newProduct);
//     localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

//     setStoredProducts(existingProducts);
//     alert("Product saved successfully in localStorage");

//     resetProductForm();
//     setShowAddProductForm(false);
//   };

//   const handleShippingFilterChange = (e) => {
//     const { name, value } = e.target;
//     setShippingFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const clearShippingFilters = () => {
//     setShippingFilters({
//       status: "",
//       shipmentType: "",
//     });
//   };

//   const filteredShipments = shipments.filter((item) => {
//     const matchStatus = shippingFilters.status
//       ? item.status === shippingFilters.status
//       : true;

//     const matchType = shippingFilters.shipmentType
//       ? item.type === shippingFilters.shipmentType
//       : true;

//     return matchStatus && matchType;
//   });

//   const filteredProducts = storedProducts.filter((product) => {
//     if (productFilterType === "all") return true;
//     return product.metalType?.toLowerCase() === productFilterType.toLowerCase();
//   });

//   const getMetalProductCount = (metalName) => {
//     return storedProducts.filter(
//       (product) => product.metalType?.toLowerCase() === metalName.toLowerCase()
//     ).length;
//   };

//   const getStatusBadgeStyle = (status) => ({
//     display: "inline-block",
//     padding: "6px 12px",
//     borderRadius: "999px",
//     fontSize: "12px",
//     fontWeight: "600",
//     border: "1px solid #e7dff0",
//     background:
//       status === "Shipment Created"
//         ? "#f3e9fb"
//         : status === "Shipping Estimated by Admin"
//           ? "#efe7f8"
//           : "#f8f1fc",
//     color: "#5d3d75",
//     whiteSpace: "nowrap",
//   });

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
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//   };

//   const formCard = {
//     background: "#fff",
//     borderRadius: "12px",
//     padding: "28px",
//     boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
//     maxWidth: "1100px",
//     width: "100%",
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

//   const detailGrid = {
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
//     background: "#fff",
//   };

//   const readonlyInput = {
//     ...input,
//     background: "#f4f0f8",
//     color: "#5d3d75",
//     fontWeight: "700",
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

//   const placeholderCard = {
//     ...formCard,
//     textAlign: "center",
//     color: "#555",
//     fontSize: "18px",
//     padding: "60px 20px",
//   };

//   const dashboardHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "28px",
//     paddingBottom: "18px",
//     borderBottom: "1px solid #e9e1ef",
//     flexWrap: "wrap",
//     gap: "12px",
//   };

//   const dashboardTitle = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//   };

//   const dashboardSubTitle = {
//     fontSize: "14px",
//     color: "#666",
//     marginTop: "6px",
//   };

//   const welcomeText = {
//     color: "#6f3f8f",
//     fontWeight: "600",
//     fontSize: "14px",
//   };

//   const dashboardStatsGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "20px",
//   };

//   const statCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "16px",
//     padding: "22px",
//     boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
//   };

//   const statIconCircle = {
//     width: "46px",
//     height: "46px",
//     borderRadius: "50%",
//     background: "#f3e9fb",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "14px",
//     fontSize: "20px",
//   };

//   const statTitle = {
//     fontSize: "13px",
//     color: "#666",
//     textTransform: "uppercase",
//     letterSpacing: "0.8px",
//     marginBottom: "8px",
//   };

//   const statValue = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#222",
//   };

//   const shippingPageWrap = {
//     width: "100%",
//     maxWidth: "1300px",
//   };

//   const shippingHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//     marginBottom: "24px",
//     flexWrap: "wrap",
//   };

//   const shippingTitle = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//   };

//   const shippingSubTitle = {
//     fontSize: "14px",
//     color: "#666",
//     marginTop: "6px",
//   };

//   const shippingCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "12px",
//     padding: "20px",
//     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
//     marginBottom: "20px",
//   };

//   const shippingFilterHeader = {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#2b2b2b",
//     marginBottom: "18px",
//   };

//   const shippingFilterGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//     gap: "14px",
//     alignItems: "end",
//   };

//   const tableWrap = {
//     width: "100%",
//     overflowX: "auto",
//   };

//   const table = {
//     width: "100%",
//     borderCollapse: "collapse",
//     minWidth: "1000px",
//   };

//   const th = {
//     textAlign: "left",
//     padding: "14px 14px",
//     fontSize: "14px",
//     color: "#333",
//     borderBottom: "1px solid #e7dff0",
//     fontWeight: "700",
//   };

//   const td = {
//     padding: "16px 14px",
//     fontSize: "14px",
//     color: "#333",
//     borderBottom: "1px solid #f0eaf5",
//     verticalAlign: "middle",
//   };

//   const linkText = {
//     color: "#6f3f8f",
//     fontWeight: "600",
//     textDecoration: "none",
//     cursor: "pointer",
//   };

//   const iconBtnRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "14px",
//   };

//   const iconBtn = {
//     background: "transparent",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     color: "#5d3d75",
//     padding: 0,
//   };

//   const clearBtn = {
//     ...addButton,
//     background: "#fff",
//     color: "#5d3d75",
//     border: "1px solid #d8c9e4",
//   };

//   const productsPageWrap = {
//     width: "100%",
//     maxWidth: "1300px",
//   };

//   const productsHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//     marginBottom: "24px",
//     flexWrap: "wrap",
//   };

//   const productsTitle = {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//   };

//   const productsSubTitle = {
//     fontSize: "14px",
//     color: "#666",
//     marginTop: "6px",
//   };

//   const productsActionRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     flexWrap: "wrap",
//   };

//   const filterSelect = {
//     height: "44px",
//     minWidth: "180px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0 12px",
//     fontSize: "14px",
//     outline: "none",
//     background: "#fff",
//     color: "#333",
//     boxSizing: "border-box",
//   };

//   const addProductFormCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "16px",
//     padding: "28px",
//     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
//     marginBottom: "24px",
//   };

//   const productsGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//     gap: "22px",
//     alignItems: "stretch",
//   };

//   const productCard = {
//     background: "#fff",
//     border: "1px solid #e7dff0",
//     borderRadius: "18px",
//     overflow: "hidden",
//     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
//     display: "flex",
//     flexDirection: "column",
//     height: "100%",
//   };

//   const productImage = {
//     width: "100%",
//     height: "220px",
//     objectFit: "cover",
//     background: "#f3e9fb",
//     display: "block",
//     flexShrink: 0,
//   };

//   const productInfo = {
//     padding: "16px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//     flex: 1,
//   };

//   const productHeaderRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "12px",
//   };

//   const productName = {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#222",
//     margin: 0,
//     lineHeight: "1.4",
//     flex: 1,
//   };

//   const deleteProductButton = {
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

//   const productPrice = {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#6f3f8f",
//     margin: 0,
//   };

//   const stockRow = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//   };

//   const stockLabel = {
//     fontSize: "13px",
//     color: "#555",
//     fontWeight: "600",
//   };

//   const stockActionRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     flexWrap: "wrap",
//   };

//   const stockValueText = {
//     fontSize: "15px",
//     fontWeight: "700",
//     color: "#222",
//     minWidth: "50px",
//   };

//   const stockInput = {
//     height: "42px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0 12px",
//     fontSize: "14px",
//     outline: "none",
//     width: "120px",
//     boxSizing: "border-box",
//   };

//   const updateStockButton = {
//     background: "#6f3f8f",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     fontSize: "13px",
//     fontWeight: "700",
//     cursor: "pointer",
//   };

//   const cancelStockButton = {
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

//   const formHeaderRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "8px",
//   };

//   const closeButton = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     border: "none",
//     background: "#f3e9fb",
//     color: "#5d3d75",
//     fontSize: "18px",
//     fontWeight: "700",
//     cursor: "pointer",
//     flexShrink: 0,
//   };

//   const modalOverlay = {
//     position: "fixed",
//     inset: 0,
//     background: "rgba(47, 36, 56, 0.45)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     zIndex: 999,
//   };

//   const modalCard = {
//     width: "100%",
//     maxWidth: "460px",
//     background: "#fff",
//     borderRadius: "16px",
//     padding: "26px",
//     boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
//   };

//   const modalTitle = {
//     fontSize: "22px",
//     fontWeight: "700",
//     color: "#222",
//     marginBottom: "10px",
//   };

//   const modalText = {
//     fontSize: "14px",
//     color: "#555",
//     lineHeight: "1.6",
//     marginBottom: "20px",
//   };

//   const modalActionRow = {
//     display: "flex",
//     justifyContent: "flex-end",
//     gap: "10px",
//     flexWrap: "wrap",
//   };

//   const modalCancelButton = {
//     background: "#fff",
//     color: "#5d3d75",
//     border: "1px solid #d8c9e4",
//     borderRadius: "8px",
//     padding: "10px 16px",
//     fontSize: "14px",
//     fontWeight: "700",
//     cursor: "pointer",
//   };

//   const modalDeleteButton = {
//     background: "#b33939",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "10px 16px",
//     fontSize: "14px",
//     fontWeight: "700",
//     cursor: "pointer",
//   };

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

//   const metalGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
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
//   };

//   const metalRemoveButton = {
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

//   const StatCard = ({ title, val, icon }) => (
//     <div style={statCard}>
//       <div style={statIconCircle}>{icon}</div>
//       <div style={statTitle}>{title}</div>
//       <div style={statValue}>{val}</div>
//     </div>
//   );

//   return (
//     <div style={page}>
//       <aside style={sidebar}>
//         <div style={sidebarTitle}>Admin Panel</div>

//         {SIDEBAR_ITEMS.map((item) => (
//           <div
//             key={item.key}
//             style={menuItem(activeSection === item.key)}
//             onClick={() => {
//               setActiveSection(item.key);
//               if (item.key !== "products") {
//                 setShowAddProductForm(false);
//               }
//             }}
//           >
//             {item.label}
//           </div>
//         ))}
//       </aside>

//       <main style={main}>
//         {activeSection === "dashboard" && (
//           <div style={formCard}>
//             <div style={dashboardHeader}>
//               <div>
//                 <h1 style={dashboardTitle}>Dashboard Overview</h1>
//                 <div style={dashboardSubTitle}>
//                   Clean and premium admin dashboard for jewellery management
//                 </div>
//               </div>
//               <div style={welcomeText}>Welcome back, Administrator</div>
//             </div>

//             <div style={dashboardStatsGrid}>
//               <StatCard
//                 title="Total Customers"
//                 val={dashboardStats.totalCustomers}
//                 icon="👥"
//               />
//               <StatCard
//                 title="Total Profit"
//                 val={`₹${dashboardStats.totalProfit.toLocaleString()}`}
//                 icon="💰"
//               />
//               <StatCard
//                 title="Active Users"
//                 val={dashboardStats.activeUsers}
//                 icon="📈"
//               />
//               <StatCard
//                 title="Active Shipment"
//                 val={dashboardStats.activeShipment}
//                 icon="📦"
//               />
//               <StatCard
//                 title="Delivered"
//                 val={dashboardStats.delivered}
//                 icon="✅"
//               />
//               <StatCard
//                 title="Gold Available"
//                 val={dashboardStats.goldCount}
//                 icon="✨"
//               />
//               <StatCard
//                 title="Silver Available"
//                 val={dashboardStats.silverCount}
//                 icon="🔘"
//               />
//             </div>
//           </div>
//         )}

//         {activeSection === "products" && (
//           <div style={productsPageWrap}>
//             <div style={productsHeader}>
//               <div>
//                 <h1 style={productsTitle}>Products</h1>
//                 <div style={productsSubTitle}>
//                   Manage and view all uploaded products
//                 </div>
//               </div>

//               <div style={productsActionRow}>
//                 <select
//                   value={productFilterType}
//                   onChange={(e) => setProductFilterType(e.target.value)}
//                   style={filterSelect}
//                 >
//                   <option value="all">All Products</option>
//                   {storedMetals.map((metal) => (
//                     <option key={metal} value={metal}>
//                       {metal}
//                     </option>
//                   ))}
//                 </select>

//                 <button
//                   type="button"
//                   style={addButton}
//                   onClick={() => setShowAddProductForm((prev) => !prev)}
//                 >
//                   {showAddProductForm ? "Close Form" : "+ Add Product"}
//                 </button>
//               </div>
//             </div>

//             {showAddProductForm ? (
//               <div style={addProductFormCard}>
//                 <div style={formHeaderRow}>
//                   <div style={heading}>Add Product</div>

//                   <button
//                     type="button"
//                     style={closeButton}
//                     onClick={() => setShowAddProductForm(false)}
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                   <div style={grid}>
//                     <div style={fieldWrap}>
//                       <label style={label}>Product Name</label>
//                       <input
//                         type="text"
//                         name="productName"
//                         value={formData.productName}
//                         onChange={handleInputChange}
//                         placeholder="Enter product name"
//                         style={input}
//                       />
//                     </div>

//                     <div style={fieldWrap}>
//                       <label style={label}>Metal Type</label>
//                       <select
//                         name="metalType"
//                         value={formData.metalType}
//                         onChange={handleInputChange}
//                         style={input}
//                       >
//                         <option value="">Select metal type</option>
//                         {storedMetals.map((metal) => (
//                           <option key={metal} value={metal}>
//                             {metal}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div style={descriptionWrap}>
//                     <label style={label}>Product Description</label>
//                     <textarea
//                       name="productDescription"
//                       value={formData.productDescription}
//                       onChange={handleInputChange}
//                       placeholder="Enter product description"
//                       style={textarea}
//                     />
//                   </div>

//                   {formData.metalType && (
//                     <div style={detailGrid}>
//                       <div style={fieldWrap}>
//                         <label style={label}>Purity</label>
//                         <input
//                           type="number"
//                           name="purity"
//                           value={formData.purity}
//                           onChange={handleInputChange}
//                           placeholder="Enter purity"
//                           style={input}
//                         />
//                       </div>

//                       <div style={fieldWrap}>
//                         <label style={label}>Weight</label>
//                         <input
//                           type="number"
//                           name="weight"
//                           value={formData.weight}
//                           onChange={handleInputChange}
//                           placeholder="Enter weight"
//                           style={input}
//                         />
//                       </div>

//                       <div style={fieldWrap}>
//                         <label style={label}>Price Per Gram</label>
//                         <input
//                           type="number"
//                           name="pricePerGram"
//                           value={formData.pricePerGram}
//                           onChange={handleInputChange}
//                           placeholder="Enter price per gram"
//                           style={input}
//                         />
//                       </div>

//                       <div style={fieldWrap}>
//                         <label style={label}>Making Charges</label>
//                         <input
//                           type="number"
//                           name="makingCharges"
//                           value={formData.makingCharges}
//                           onChange={handleInputChange}
//                           placeholder="Enter making charges"
//                           style={input}
//                         />
//                       </div>

//                       <div style={fieldWrap}>
//                         <label style={label}>Offer Price</label>
//                         <input
//                           type="number"
//                           name="offerPrice"
//                           value={formData.offerPrice}
//                           onChange={handleInputChange}
//                           placeholder="Enter offer price"
//                           style={input}
//                         />
//                       </div>

//                       <div style={fieldWrap}>
//                         <label style={label}>Total Price</label>
//                         <input
//                           type="number"
//                           name="totalPrice"
//                           value={formData.totalPrice}
//                           readOnly
//                           placeholder="Auto calculated"
//                           style={readonlyInput}
//                         />
//                       </div>

//                       <div style={fieldWrap}>
//                         <label style={label}>Stock</label>
//                         <input
//                           type="number"
//                           name="stock"
//                           value={formData.stock}
//                           onChange={handleInputChange}
//                           placeholder="Enter stock"
//                           style={input}
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <div style={sectionTitle}>Final Photo Upload</div>

//                   <div style={fieldWrap}>
//                     <label style={label}>Upload Product Images</label>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       accept="image/*"
//                       multiple
//                       onChange={handleImageChange}
//                       style={fileInput}
//                     />
//                     <div style={hintText}>
//                       Drag the uploaded images to arrange order. The first image
//                       will be the main image.
//                     </div>
//                   </div>

//                   {previews.length > 0 && (
//                     <div style={previewWrap}>
//                       <div style={previewGrid}>
//                         {previews.map((img, index) => (
//                           <div
//                             key={img.id}
//                             style={previewCard}
//                             draggable
//                             onDragStart={() => handleDragStart(index)}
//                             onDragEnter={() => handleDragEnter(index)}
//                             onDragOver={(e) => e.preventDefault()}
//                             onDrop={handleDrop}
//                             onDragEnd={handleDragEnd}
//                           >
//                             <img
//                               src={img.src}
//                               alt={`Preview ${index + 1}`}
//                               style={previewImage}
//                             />

//                             <div style={previewOrder}>
//                               Image {index + 1}
//                               {index === 0 ? " (Main image)" : ""}
//                             </div>

//                             <div style={actionRow}>
//                               <button
//                                 type="button"
//                                 style={removeButton}
//                                 onClick={() => removeImage(index)}
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <button type="submit" style={submitButton}>
//                     Save Product
//                   </button>
//                 </form>
//               </div>
//             ) : filteredProducts.length > 0 ? (
//               <div style={productsGrid}>
//                 {filteredProducts.map((product) => {
//                   const mainImage = product.images?.[0] || "";

//                   return (
//                     <div key={product.id} style={productCard}>
//                       {mainImage ? (
//                         <img
//                           src={mainImage}
//                           alt={product.name}
//                           style={productImage}
//                         />
//                       ) : (
//                         <div
//                           style={{
//                             ...productImage,
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             color: "#8b6aa3",
//                             fontWeight: "700",
//                           }}
//                         >
//                           No Image
//                         </div>
//                       )}

//                       <div style={productInfo}>
//                         <div style={productHeaderRow}>
//                           <div style={productName}>{product.name}</div>

//                           <button
//                             type="button"
//                             style={deleteProductButton}
//                             onClick={() => confirmDeleteProduct(product.id)}
//                           >
//                             Remove Product
//                           </button>
//                         </div>

//                         <div style={productPrice}>
//                           ₹{Number(product.totalPrice || 0).toLocaleString()}
//                         </div>

//                         <div style={stockRow}>
//                           <label style={stockLabel}>Stock</label>

//                           {editingStockId === product.id ? (
//                             <div style={stockActionRow}>
//                               <input
//                                 type="number"
//                                 value={editingStockValue}
//                                 onChange={(e) =>
//                                   setEditingStockValue(e.target.value)
//                                 }
//                                 placeholder="Enter stock"
//                                 style={stockInput}
//                               />

//                               <button
//                                 type="button"
//                                 style={updateStockButton}
//                                 onClick={() => saveStockEdit(product.id)}
//                               >
//                                 Save
//                               </button>

//                               <button
//                                 type="button"
//                                 style={cancelStockButton}
//                                 onClick={() => {
//                                   setEditingStockId(null);
//                                   setEditingStockValue("");
//                                 }}
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           ) : (
//                             <div style={stockActionRow}>
//                               <div style={stockValueText}>
//                                 {product.stock ?? 0}
//                               </div>

//                               <button
//                                 type="button"
//                                 style={updateStockButton}
//                                 onClick={() => startStockEdit(product)}
//                               >
//                                 Update
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div style={noProductsBox}>
//                 {productFilterType === "all" ? (
//                   <>
//                     No products uploaded yet. Click <strong>Add Product</strong>{" "}
//                     to create your first product.
//                   </>
//                 ) : (
//                   <>No {productFilterType} products found.</>
//                 )}
//               </div>
//             )}
//           </div>
//         )}

//         {activeSection === "metal-types" && (
//           <div style={metalPageWrap}>
//             <div style={metalHeader}>
//               <div>
//                 <h1 style={metalTitle}>Metal Types</h1>
//                 <div style={metalSubTitle}>
//                   Add and manage available metal types for products
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 style={addButton}
//                 onClick={() => setShowAddMetalModal(true)}
//               >
//                 + Add Metal
//               </button>
//             </div>

//             {storedMetals.length > 0 ? (
//               <div style={metalGrid}>
//                 {storedMetals.map((metal) => (
//                   <div key={metal} style={metalCard}>
//                     <div style={metalCardHeader}>
//                       <h3 style={metalCardTitle}>{metal}</h3>

//                       <button
//                         type="button"
//                         style={metalRemoveButton}
//                         onClick={() => confirmDeleteMetal(metal)}
//                       >
//                         Remove
//                       </button>
//                     </div>

//                     <div style={metalCardCount}>
//                       Total Products: {getMetalProductCount(metal)}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div style={noProductsBox}>No metal types available.</div>
//             )}
//           </div>
//         )}

//         {activeSection === "shipping" && (
//           <div style={shippingPageWrap}>
//             <div style={shippingHeader}>
//               <div>
//                 <h1 style={shippingTitle}>Shipping Management</h1>
//                 <div style={shippingSubTitle}>
//                   Track and manage all shipments
//                 </div>
//               </div>

//               <button type="button" style={addButton}>
//                 + Create Shipment
//               </button>
//             </div>

//             <div style={shippingCard}>
//               <div style={shippingFilterHeader}>Filters</div>

//               <div style={shippingFilterGrid}>
//                 <div style={fieldWrap}>
//                   <label style={label}>Status</label>
//                   <select
//                     name="status"
//                     value={shippingFilters.status}
//                     onChange={handleShippingFilterChange}
//                     style={input}
//                   >
//                     <option value="">Select status</option>
//                     <option value="Shipment Created">Shipment Created</option>
//                     <option value="Shipping Estimated by Admin">
//                       Shipping Estimated by Admin
//                     </option>
//                     <option value="Pending Shipping Estimation">
//                       Pending Shipping Estimation
//                     </option>
//                   </select>
//                 </div>

//                 <div style={fieldWrap}>
//                   <label style={label}>Shipment Type</label>
//                   <select
//                     name="shipmentType"
//                     value={shippingFilters.shipmentType}
//                     onChange={handleShippingFilterChange}
//                     style={input}
//                   >
//                     <option value="">Select shipment type</option>
//                     <option value="Physical Delivery">
//                       Physical Delivery
//                     </option>
//                     <option value="Ship Commodity To Gold App">
//                       Ship Commodity To Gold App
//                     </option>
//                   </select>
//                 </div>

//                 <button
//                   type="button"
//                   style={clearBtn}
//                   onClick={clearShippingFilters}
//                 >
//                   Clear
//                 </button>
//               </div>
//             </div>

//             <div style={shippingCard}>
//               <div style={{ ...shippingFilterHeader, marginBottom: "16px" }}>
//                 Shipments ({filteredShipments.length})
//               </div>

//               <div style={tableWrap}>
//                 <table style={table}>
//                   <thead>
//                     <tr>
//                       <th style={th}>S.NO.</th>
//                       <th style={th}>User</th>
//                       <th style={th}>Commodity</th>
//                       <th style={th}>Weight</th>
//                       <th style={th}>Type</th>
//                       <th style={th}>Shipment Id</th>
//                       <th style={th}>Status</th>
//                       <th style={th}>Actions</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {filteredShipments.length > 0 ? (
//                       filteredShipments.map((item, index) => (
//                         <tr key={item.id}>
//                           <td style={td}>{index + 1}</td>
//                           <td style={td}>{item.user}</td>
//                           <td style={td}>
//                             <span style={linkText}>{item.commodity}</span>
//                           </td>
//                           <td style={td}>{item.weight}</td>
//                           <td style={td}>
//                             <span style={linkText}>{item.type}</span>
//                           </td>
//                           <td style={td}>{item.shipmentId}</td>
//                           <td style={td}>
//                             <span style={getStatusBadgeStyle(item.status)}>
//                               {item.status}
//                             </span>
//                           </td>
//                           <td style={td}>
//                             <div style={iconBtnRow}>
//                               <button type="button" style={iconBtn} title="View">
//                                 👁️
//                               </button>
//                               <button type="button" style={iconBtn} title="Edit">
//                                 ✏️
//                               </button>
//                               <button
//                                 type="button"
//                                 style={iconBtn}
//                                 title="Delete"
//                               >
//                                 🗑️
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td style={td} colSpan={8}>
//                           No shipments found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {!["dashboard", "products", "shipping", "metal-types"].includes(activeSection) && (
//           <div style={placeholderCard}>
//             {SIDEBAR_ITEMS.find((item) => item.key === activeSection)?.label ||
//               "Section"}{" "}
//             page
//           </div>
//         )}
//       </main>

//       {deleteProductId !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Product?</div>
//             <div style={modalText}>
//               This action will permanently delete the selected product from your
//               product list.
//             </div>

//             <div style={modalActionRow}>
//               <button
//                 type="button"
//                 style={modalCancelButton}
//                 onClick={() => setDeleteProductId(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 style={modalDeleteButton}
//                 onClick={handleDeleteProduct}
//               >
//                 Yes, Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showAddMetalModal && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Add Metal</div>
//             <div style={modalText}>
//               Enter a new metal type. It will appear in the Metal Types page and
//               in the Add Product metal type dropdown.
//             </div>

//             <div style={{ marginBottom: "20px" }}>
//               <input
//                 type="text"
//                 value={newMetalName}
//                 onChange={(e) => setNewMetalName(e.target.value)}
//                 placeholder="Enter metal name"
//                 style={input}
//               />
//             </div>

//             <div style={modalActionRow}>
//               <button
//                 type="button"
//                 style={modalCancelButton}
//                 onClick={() => {
//                   setShowAddMetalModal(false);
//                   setNewMetalName("");
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 style={updateStockButton}
//                 onClick={handleAddMetal}
//               >
//                 Add Metal
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {deleteMetalName !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Metal Type?</div>
//             <div style={modalText}>
//               This will remove <strong>{deleteMetalName}</strong> from metal
//               types.
//             </div>

//             <div style={modalActionRow}>
//               <button
//                 type="button"
//                 style={modalCancelButton}
//                 onClick={() => setDeleteMetalName(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 style={modalDeleteButton}
//                 onClick={handleDeleteMetal}
//               >
//                 Yes, Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useRef, useState } from "react";

const SIDEBAR_ITEMS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "products", label: "Products" },
  { key: "metal-types", label: "Metal Types" },
  { key: "users", label: "Users" },
  { key: "shipping", label: "Shipping" },
  { key: "communication", label: "Communication" },
  { key: "admin-users", label: "Admin Users" },
  { key: "fee-setting", label: "Fee Setting" },
  { key: "privacy-policy", label: "Privacy Policy" },
  { key: "terms-conditions", label: "Terms & Conditions" },
];

const DEFAULT_METALS = ["Gold", "Silver"];

function formatCurrency(value) {
  return `$${Number(value || 0).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

function formatDateTime(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

function createDemoUsers() {
  return [
    {
      id: 1,
      type: "individual",
      name: "Keval Parashar",
      email: "keval@example.com",
      location: "New York, USA",
      crmType: "Trader",
      leadStatus: "Converted",
      owner: "Super Admin",
      totalPurchases: 15420.5,
      status: "active",
      kyc: "approved",
      ira: "Active",
      isLead: true,
      myLead: true,
      phone: "+1 555 210 7654",
      tags: ["App User"],
    },
    {
      id: 2,
      type: "individual",
      name: "Animi GSWM",
      email: "animi@example.com",
      location: "London, UK",
      crmType: "Trader",
      leadStatus: "Converted",
      owner: "John Manager",
      totalPurchases: 28750,
      status: "active",
      kyc: "approved",
      ira: "None",
      isLead: true,
      myLead: false,
      phone: "+44 7700 900001",
      tags: ["App User"],
    },
    {
      id: 3,
      type: "individual",
      name: "Shubh",
      email: "shubh@example.com",
      location: "Mumbai, India",
      crmType: "Lead",
      leadStatus: "Contacted",
      owner: "John Manager",
      totalPurchases: 8965.25,
      status: "active",
      kyc: "pending",
      ira: "None",
      isLead: true,
      myLead: true,
      phone: "+91 9876543210",
      tags: ["CRM Entry"],
    },
    {
      id: 4,
      type: "business",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      location: "Toronto, Canada",
      crmType: "Collector",
      leadStatus: "Converted",
      owner: "Super Admin",
      totalPurchases: 45230.75,
      status: "inactive",
      kyc: "approved",
      ira: "Active",
      isLead: false,
      myLead: false,
      phone: "+1 555 009 8877",
      tags: ["App User"],
    },
    {
      id: 5,
      type: "business",
      name: "Michael Chen",
      email: "michael@example.com",
      location: "Singapore",
      crmType: "Lead",
      leadStatus: "Qualified",
      owner: "Super Admin",
      totalPurchases: 67890,
      status: "active",
      kyc: "approved",
      ira: "None",
      isLead: true,
      myLead: false,
      phone: "+65 8123 4567",
      tags: ["CRM Entry"],
    },
  ];
}

function createDemoAdminUsers() {
  return [
    {
      id: 101,
      name: "Super Admin",
      email: "admin@thegoldapp.com",
      role: "super admin",
      status: "active",
      permissions: {
        dashboard: true,
        users: true,
        categories: true,
        products: true,
        shipping: true,
        communication: true,
        feeSettings: true,
        policies: true,
      },
      lastLogin: "2026-03-12T10:30:00",
      createdAt: "2025-12-15T18:00:00",
    },
    {
      id: 102,
      name: "John Manager",
      email: "john@thegoldapp.com",
      role: "manager",
      status: "active",
      permissions: {
        dashboard: true,
        users: true,
        categories: false,
        products: true,
        shipping: true,
        communication: true,
        feeSettings: false,
        policies: false,
      },
      lastLogin: "2026-03-11T20:00:00",
      createdAt: "2025-12-22T12:20:00",
    },
  ];
}

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [productFilterType, setProductFilterType] = useState("all");
  const [editingStockId, setEditingStockId] = useState(null);
  const [editingStockValue, setEditingStockValue] = useState("");
  const [deleteProductId, setDeleteProductId] = useState(null);

  const [storedMetals, setStoredMetals] = useState(DEFAULT_METALS);
  const [showAddMetalModal, setShowAddMetalModal] = useState(false);
  const [newMetalName, setNewMetalName] = useState("");
  const [deleteMetalName, setDeleteMetalName] = useState(null);

  const fileInputRef = useRef(null);
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  // Users state
  const [users, setUsers] = useState([]);
  const [userTab, setUserTab] = useState("all");
  const [userFilters, setUserFilters] = useState({
    name: "",
    email: "",
    location: "",
    status: "",
    kyc: "",
    crmType: "",
    leadStatus: "",
    type: "",
    leadsOnly: false,
    myLeads: false,
  });
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    location: "",
    type: "individual",
    crmType: "Lead",
    leadStatus: "New",
    owner: "Super Admin",
    totalPurchases: "",
    status: "active",
    kyc: "pending",
    ira: "None",
    isLead: true,
    myLead: false,
    phone: "",
    tags: "App User",
  });

  // Communication state
  const [communicationSettings, setCommunicationSettings] = useState(() => {
    const saved = localStorage.getItem("adminCommunicationSettings");
    return saved
      ? JSON.parse(saved)
      : {
          whatsapp: "",
          email: "",
          supportMessage: "",
        };
  });

  // Admin Users state
  const [adminUsers, setAdminUsers] = useState(() => {
    const saved = localStorage.getItem("adminUsers");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        return createDemoAdminUsers();
      }
    }
    return createDemoAdminUsers();
  });
  const [adminSearch, setAdminSearch] = useState("");
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [adminForm, setAdminForm] = useState({
    name: "",
    email: "",
    role: "manager",
    status: "active",
    permissions: {
      dashboard: true,
      users: true,
      categories: false,
      products: true,
      shipping: false,
      communication: false,
      feeSettings: false,
      policies: false,
    },
  });

  const [dashboardStats, setDashboardStats] = useState({
    totalCustomers: 0,
    totalProfit: 0,
    activeUsers: 0,
    activeShipment: 0,
    delivered: 0,
    goldCount: 0,
    silverCount: 0,
  });

  const [storedProducts, setStoredProducts] = useState([]);

  const [formData, setFormData] = useState({
    productName: "",
    metalType: "",
    purity: "",
    weight: "",
    pricePerGram: "",
    makingCharges: "",
    offerPrice: "",
    totalPrice: "",
    stock: "",
    productDescription: "",
  });

  const [previews, setPreviews] = useState([]);

  const [shippingFilters, setShippingFilters] = useState({
    status: "",
    shipmentType: "",
  });

  const [shipments] = useState([
    {
      id: 1,
      user: "Keval Parashar",
      commodity: "Gold(2gram)",
      weight: "2g",
      type: "Physical Delivery",
      shipmentId: "se-623135802",
      status: "Shipment Created",
    },
    {
      id: 2,
      user: "ANIMI GSWM",
      commodity: "Gold(1gram)",
      weight: "1g",
      type: "Ship Commodity To Gold App",
      shipmentId: "se-622247522",
      status: "Shipment Created",
    },
    {
      id: 3,
      user: "ANIMI GSWM",
      commodity: "Gold(1gram)",
      weight: "1g",
      type: "Physical Delivery",
      shipmentId: "se-622179834",
      status: "Shipping Estimated by Admin",
    },
    {
      id: 4,
      user: "Shubh",
      commodity: "Rhodium(1gram)",
      weight: "1g",
      type: "Physical Delivery",
      shipmentId: "se-622180001",
      status: "Pending Shipping Estimation",
    },
    {
      id: 5,
      user: "Shubh",
      commodity: "Gold(1.684gram)",
      weight: "1.684g",
      type: "Physical Delivery",
      shipmentId: "se-622180002",
      status: "Pending Shipping Estimation",
    },
  ]);

  const formatMetalName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "";
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  };

  const loadProductsFromStorage = () => {
    const products = JSON.parse(localStorage.getItem("adminProducts") || "[]");
    setStoredProducts(products);
    return products;
  };

  const loadMetalsFromStorage = () => {
    const metals = JSON.parse(localStorage.getItem("adminMetals") || "null");

    if (Array.isArray(metals) && metals.length > 0) {
      const cleanedMetals = [
        ...new Set(metals.map((item) => formatMetalName(item)).filter(Boolean)),
      ];
      setStoredMetals(cleanedMetals);
      localStorage.setItem("adminMetals", JSON.stringify(cleanedMetals));
      return cleanedMetals;
    }

    localStorage.setItem("adminMetals", JSON.stringify(DEFAULT_METALS));
    setStoredMetals(DEFAULT_METALS);
    return DEFAULT_METALS;
  };

  const saveUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const saveAdminUsers = (updatedAdmins) => {
    setAdminUsers(updatedAdmins);
    localStorage.setItem("adminUsers", JSON.stringify(updatedAdmins));
    if (!updatedAdmins.find((item) => item.id === selectedAdminId)) {
      setSelectedAdminId(updatedAdmins[0]?.id || null);
    }
  };

  const resetUserForm = () => {
    setUserForm({
      name: "",
      email: "",
      location: "",
      type: "individual",
      crmType: "Lead",
      leadStatus: "New",
      owner: "Super Admin",
      totalPurchases: "",
      status: "active",
      kyc: "pending",
      ira: "None",
      isLead: true,
      myLead: false,
      phone: "",
      tags: "App User",
    });
    setEditingUserId(null);
  };

  const resetAdminForm = () => {
    setAdminForm({
      name: "",
      email: "",
      role: "manager",
      status: "active",
      permissions: {
        dashboard: true,
        users: true,
        categories: false,
        products: true,
        shipping: false,
        communication: false,
        feeSettings: false,
        policies: false,
      },
    });
    setEditingAdminId(null);
  };

  const openAddUserModal = () => {
    resetUserForm();
    setShowUserModal(true);
  };

  const openEditUserModal = (user) => {
    setEditingUserId(user.id);
    setUserForm({
      name: user.name || "",
      email: user.email || "",
      location: user.location || "",
      type: user.type || "individual",
      crmType: user.crmType || "Lead",
      leadStatus: user.leadStatus || "New",
      owner: user.owner || "Super Admin",
      totalPurchases: user.totalPurchases || "",
      status: user.status || "active",
      kyc: user.kyc || "pending",
      ira: user.ira || "None",
      isLead: Boolean(user.isLead),
      myLead: Boolean(user.myLead),
      phone: user.phone || "",
      tags: (user.tags || []).join(", ") || "App User",
    });
    setShowUserModal(true);
  };

  const openAddAdminModal = () => {
    resetAdminForm();
    setShowAdminModal(true);
  };

  const openEditAdminModal = (admin) => {
    setEditingAdminId(admin.id);
    setAdminForm({
      name: admin.name || "",
      email: admin.email || "",
      role: admin.role || "manager",
      status: admin.status || "active",
      permissions: {
        dashboard: Boolean(admin.permissions?.dashboard),
        users: Boolean(admin.permissions?.users),
        categories: Boolean(admin.permissions?.categories),
        products: Boolean(admin.permissions?.products),
        shipping: Boolean(admin.permissions?.shipping),
        communication: Boolean(admin.permissions?.communication),
        feeSettings: Boolean(admin.permissions?.feeSettings),
        policies: Boolean(admin.permissions?.policies),
      },
    });
    setShowAdminModal(true);
  };

  const handleUserFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAdminFormChange = (e) => {
    const { name, value } = e.target;
    setAdminForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdminPermissionChange = (key) => {
    setAdminForm((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [key]: !prev.permissions[key],
      },
    }));
  };

  const handleSaveUser = () => {
    if (!userForm.name.trim() || !userForm.email.trim() || !userForm.location.trim()) {
      alert("Please fill name, email and location.");
      return;
    }

    const payload = {
      id: editingUserId || Date.now(),
      name: userForm.name.trim(),
      email: userForm.email.trim(),
      location: userForm.location.trim(),
      type: userForm.type,
      crmType: userForm.crmType,
      leadStatus: userForm.leadStatus,
      owner: userForm.owner.trim() || "Super Admin",
      totalPurchases: Number(userForm.totalPurchases || 0),
      status: userForm.status,
      kyc: userForm.kyc,
      ira: userForm.ira,
      isLead: Boolean(userForm.isLead),
      myLead: Boolean(userForm.myLead),
      phone: userForm.phone.trim(),
      tags: userForm.tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    let updatedUsers = [];

    if (editingUserId) {
      updatedUsers = users.map((item) =>
        item.id === editingUserId ? payload : item
      );
    } else {
      updatedUsers = [payload, ...users];
    }

    saveUsers(updatedUsers);
    setShowUserModal(false);
    resetUserForm();
  };

  const handleSaveAdmin = () => {
    if (!adminForm.name.trim() || !adminForm.email.trim() || !adminForm.role.trim()) {
      alert("Please fill name, email and role.");
      return;
    }

    const payload = {
      id: editingAdminId || Date.now(),
      name: adminForm.name.trim(),
      email: adminForm.email.trim(),
      role: adminForm.role,
      status: adminForm.status,
      permissions: adminForm.permissions,
      createdAt:
        editingAdminId
          ? adminUsers.find((item) => item.id === editingAdminId)?.createdAt ||
            new Date().toISOString()
          : new Date().toISOString(),
      lastLogin:
        editingAdminId
          ? adminUsers.find((item) => item.id === editingAdminId)?.lastLogin ||
            new Date().toISOString()
          : new Date().toISOString(),
    };

    let updatedAdmins = [];

    if (editingAdminId) {
      updatedAdmins = adminUsers.map((item) =>
        item.id === editingAdminId ? payload : item
      );
    } else {
      updatedAdmins = [payload, ...adminUsers];
    }

    saveAdminUsers(updatedAdmins);
    setSelectedAdminId(payload.id);
    setShowAdminModal(false);
    resetAdminForm();
  };

  const handleDeleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const updatedUsers = users.filter((item) => item.id !== id);
    saveUsers(updatedUsers);
  };

  const handleDeleteAdmin = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this admin user?");
    if (!confirmDelete) return;

    const updatedAdmins = adminUsers.filter((item) => item.id !== id);
    saveAdminUsers(updatedAdmins);
  };

  const handleToggleUserStatus = (id) => {
    const updatedUsers = users.map((item) =>
      item.id === id
        ? {
            ...item,
            status: item.status === "active" ? "inactive" : "active",
          }
        : item
    );
    saveUsers(updatedUsers);
  };

  const handleToggleAdminStatus = (id) => {
    const updatedAdmins = adminUsers.map((item) =>
      item.id === id
        ? {
            ...item,
            status: item.status === "active" ? "inactive" : "active",
          }
        : item
    );
    saveAdminUsers(updatedAdmins);
  };

  const exportUsersCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Location",
      "Type",
      "CRM Type",
      "Lead Status",
      "Owner",
      "Total Purchases",
      "Status",
      "KYC",
      "IRA",
      "Phone",
    ];

    const rows = filteredUsers.map((user) => [
      user.name,
      user.email,
      user.location,
      user.type,
      user.crmType,
      user.leadStatus,
      user.owner,
      user.totalPurchases,
      user.status,
      user.kyc,
      user.ira,
      user.phone || "",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) =>
        row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCommunicationSave = () => {
    localStorage.setItem(
      "adminCommunicationSettings",
      JSON.stringify(communicationSettings)
    );
    alert("Communication settings saved");
  };

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (!savedUsers.length) {
      localStorage.setItem("users", JSON.stringify(createDemoUsers()));
      setUsers(createDemoUsers());
    } else {
      setUsers(savedUsers);
    }

    loadProductsFromStorage();
    loadMetalsFromStorage();
  }, []);

  useEffect(() => {
    const gold = storedProducts.filter(
      (p) => p.metalType?.toLowerCase() === "gold"
    ).length;

    const silver = storedProducts.filter(
      (p) => p.metalType?.toLowerCase() === "silver"
    ).length;

    const profit = storedProducts.reduce(
      (acc, curr) => acc + (Number(curr.totalPrice) || 0),
      0
    );

    setDashboardStats({
      totalCustomers: users.length,
      totalProfit: profit,
      activeUsers:
        users.filter((u) => u.status === "active").length ||
        Math.floor(users.length * 0.4),
      activeShipment: 12,
      delivered: 85,
      goldCount: gold,
      silverCount: silver,
    });
  }, [activeSection, storedProducts, users]);

  useEffect(() => {
    const weight = Number(formData.weight) || 0;
    const pricePerGram = Number(formData.pricePerGram) || 0;
    const makingCharges = Number(formData.makingCharges) || 0;
    const offerPrice = Number(formData.offerPrice) || 0;

    const calculatedTotal =
      weight * pricePerGram + makingCharges - offerPrice;

    setFormData((prev) => {
      const nextTotal =
        prev.metalType &&
          (prev.weight !== "" ||
            prev.pricePerGram !== "" ||
            prev.makingCharges !== "" ||
            prev.offerPrice !== "")
          ? String(Math.max(calculatedTotal, 0))
          : "";

      if (prev.totalPrice === nextTotal) return prev;

      return {
        ...prev,
        totalPrice: nextTotal,
      };
    });
  }, [
    formData.weight,
    formData.pricePerGram,
    formData.makingCharges,
    formData.offerPrice,
    formData.metalType,
  ]);

  const filteredUsers = React.useMemo(() => {
    return users.filter((user) => {
      const matchesTab =
        userTab === "all"
          ? true
          : userTab === "individuals"
          ? user.type === "individual"
          : user.type === "business";

      const matchesName = user.name
        ?.toLowerCase()
        .includes(userFilters.name.toLowerCase());

      const matchesEmail = user.email
        ?.toLowerCase()
        .includes(userFilters.email.toLowerCase());

      const matchesLocation = user.location
        ?.toLowerCase()
        .includes(userFilters.location.toLowerCase());

      const matchesStatus = userFilters.status
        ? user.status === userFilters.status
        : true;

      const matchesKyc = userFilters.kyc ? user.kyc === userFilters.kyc : true;
      const matchesCrm = userFilters.crmType
        ? user.crmType === userFilters.crmType
        : true;
      const matchesLeadStatus = userFilters.leadStatus
        ? user.leadStatus === userFilters.leadStatus
        : true;
      const matchesType = userFilters.type ? user.type === userFilters.type : true;
      const matchesLeadsOnly = userFilters.leadsOnly ? user.isLead : true;
      const matchesMyLeads = userFilters.myLeads ? user.myLead : true;

      return (
        matchesTab &&
        matchesName &&
        matchesEmail &&
        matchesLocation &&
        matchesStatus &&
        matchesKyc &&
        matchesCrm &&
        matchesLeadStatus &&
        matchesType &&
        matchesLeadsOnly &&
        matchesMyLeads
      );
    });
  }, [users, userFilters, userTab]);

  const filteredAdmins = React.useMemo(() => {
    return adminUsers.filter((admin) => {
      const term = adminSearch.toLowerCase();
      return (
        admin.name?.toLowerCase().includes(term) ||
        admin.email?.toLowerCase().includes(term) ||
        admin.role?.toLowerCase().includes(term)
      );
    });
  }, [adminUsers, adminSearch]);

  const selectedAdmin =
    adminUsers.find((item) => item.id === selectedAdminId) || null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "metalType" && !value) {
        updated.purity = "";
        updated.weight = "";
        updated.pricePerGram = "";
        updated.makingCharges = "";
        updated.offerPrice = "";
        updated.totalPrice = "";
        updated.stock = "";
      }

      return updated;
    });
  };

  const handleStockChange = (productId, value) => {
    const updatedProducts = storedProducts.map((product) =>
      product.id === productId
        ? { ...product, stock: value === "" ? "" : Number(value) }
        : product
    );

    setStoredProducts(updatedProducts);
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
  };

  const startStockEdit = (product) => {
    setEditingStockId(product.id);
    setEditingStockValue(product.stock ?? "");
  };

  const saveStockEdit = (productId) => {
    handleStockChange(productId, editingStockValue);
    setEditingStockId(null);
    setEditingStockValue("");
  };

  const confirmDeleteProduct = (productId) => {
    setDeleteProductId(productId);
  };

  const handleDeleteProduct = () => {
    const updatedProducts = storedProducts.filter(
      (product) => product.id !== deleteProductId
    );
    setStoredProducts(updatedProducts);
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));

    if (editingStockId === deleteProductId) {
      setEditingStockId(null);
      setEditingStockValue("");
    }

    setDeleteProductId(null);
  };

  const handleAddMetal = () => {
    const formattedMetal = formatMetalName(newMetalName);

    if (!formattedMetal) {
      alert("Please enter a metal name.");
      return;
    }

    const alreadyExists = storedMetals.some(
      (metal) => metal.toLowerCase() === formattedMetal.toLowerCase()
    );

    if (alreadyExists) {
      alert("This metal already exists.");
      return;
    }

    const updatedMetals = [...storedMetals, formattedMetal];
    setStoredMetals(updatedMetals);
    localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));

    setNewMetalName("");
    setShowAddMetalModal(false);
  };

  const confirmDeleteMetal = (metalName) => {
    const productCount = storedProducts.filter(
      (product) => product.metalType?.toLowerCase() === metalName.toLowerCase()
    ).length;

    if (productCount > 0) {
      alert("You cannot remove this metal because products are using it.");
      return;
    }

    setDeleteMetalName(metalName);
  };

  const handleDeleteMetal = () => {
    const updatedMetals = storedMetals.filter(
      (metal) => metal.toLowerCase() !== deleteMetalName.toLowerCase()
    );

    setStoredMetals(updatedMetals);
    localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));

    if (
      formData.metalType &&
      formData.metalType.toLowerCase() === deleteMetalName.toLowerCase()
    ) {
      setFormData((prev) => ({
        ...prev,
        metalType: "",
        purity: "",
        weight: "",
        pricePerGram: "",
        makingCharges: "",
        offerPrice: "",
        totalPrice: "",
        stock: "",
      }));
    }

    if (
      productFilterType !== "all" &&
      productFilterType.toLowerCase() === deleteMetalName.toLowerCase()
    ) {
      setProductFilterType("all");
    }

    setDeleteMetalName(null);
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

  const resetProductForm = () => {
    setFormData({
      productName: "",
      metalType: "",
      purity: "",
      weight: "",
      pricePerGram: "",
      makingCharges: "",
      offerPrice: "",
      totalPrice: "",
      stock: "",
      productDescription: "",
    });
    setPreviews([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.productName.trim() ||
      !formData.metalType.trim() ||
      !formData.productDescription.trim() ||
      !formData.purity.trim() ||
      !formData.weight.toString().trim() ||
      !formData.pricePerGram.toString().trim() ||
      !formData.makingCharges.toString().trim() ||
      !formData.stock.toString().trim() ||
      !formData.totalPrice.toString().trim() ||
      previews.length === 0
    ) {
      alert(
        "Please fill all required product fields and upload at least one photo."
      );
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.productName.trim(),
      metalType: formData.metalType.trim(),
      purity: formData.purity.trim(),
      weight: formData.weight,
      pricePerGram: formData.pricePerGram,
      makingCharges: formData.makingCharges,
      offerPrice: formData.offerPrice,
      totalPrice: formData.totalPrice,
      stock: Number(formData.stock),
      description: formData.productDescription.trim(),
      images: previews.map((item) => item.src),
      createdAt: new Date().toISOString(),
    };

    const existingProducts = JSON.parse(
      localStorage.getItem("adminProducts") || "[]"
    );

    existingProducts.push(newProduct);
    localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

    setStoredProducts(existingProducts);
    alert("Product saved successfully in localStorage");

    resetProductForm();
    setShowAddProductForm(false);
  };

  const handleShippingFilterChange = (e) => {
    const { name, value } = e.target;
    setShippingFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearShippingFilters = () => {
    setShippingFilters({
      status: "",
      shipmentType: "",
    });
  };

  const filteredShipments = shipments.filter((item) => {
    const matchStatus = shippingFilters.status
      ? item.status === shippingFilters.status
      : true;

    const matchType = shippingFilters.shipmentType
      ? item.type === shippingFilters.shipmentType
      : true;

    return matchStatus && matchType;
  });

  const filteredProducts = storedProducts.filter((product) => {
    if (productFilterType === "all") return true;
    return product.metalType?.toLowerCase() === productFilterType.toLowerCase();
  });

  const getMetalProductCount = (metalName) => {
    return storedProducts.filter(
      (product) => product.metalType?.toLowerCase() === metalName.toLowerCase()
    ).length;
  };

  const getStatusBadgeStyle = (status) => ({
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    border: "1px solid #e7dff0",
    background:
      status === "Shipment Created"
        ? "#f3e9fb"
        : status === "Shipping Estimated by Admin"
          ? "#efe7f8"
          : "#f8f1fc",
    color: "#5d3d75",
    whiteSpace: "nowrap",
  });

  const chipLight = {
    background: "#f3e9fb",
    color: "#5d3d75",
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "11px",
    fontWeight: 700,
    display: "inline-block",
    border: "1px solid #d8c9e4",
    textTransform: "capitalize",
  };

  const chipDark = {
    background: "#5d3d75",
    color: "#fff",
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "11px",
    fontWeight: 700,
    display: "inline-block",
    textTransform: "capitalize",
  };

  const roleBadge = (role) => ({
    background: role === "super admin" ? "#6f3f8f" : "#f3e9fb",
    color: role === "super admin" ? "#fff" : "#5d3d75",
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "11px",
    fontWeight: 700,
    display: "inline-block",
    textTransform: "lowercase",
    border:
      role === "super admin"
        ? "1px solid #6f3f8f"
        : "1px solid #d8c9e4",
  });

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
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const formCard = {
    background: "#fff",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
    maxWidth: "1100px",
    width: "100%",
  };

  const heading = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#222",
  };

  const subHeading = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "18px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "26px",
  };

  const detailGrid = {
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
    background: "#fff",
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

  const smallButton = {
    background: "#5d3d75",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const dashboardHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
    paddingBottom: "18px",
    borderBottom: "1px solid #e9e1ef",
    flexWrap: "wrap",
    gap: "12px",
  };

  const dashboardTitle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const dashboardSubTitle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "6px",
  };

  const welcomeText = {
    color: "#6f3f8f",
    fontWeight: "600",
    fontSize: "14px",
  };

  const dashboardStatsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };

  const statCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "16px",
    padding: "22px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
  };

  const statIconCircle = {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    background: "#f3e9fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
    fontSize: "20px",
  };

  const statTitle = {
    fontSize: "13px",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    marginBottom: "8px",
  };

  const statValue = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
  };

  const shippingPageWrap = {
    width: "100%",
    maxWidth: "1300px",
  };

  const shippingHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  };

  const shippingTitle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const shippingSubTitle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "6px",
  };

  const shippingCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
    marginBottom: "20px",
  };

  const shippingFilterHeader = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#2b2b2b",
    marginBottom: "18px",
  };

  const shippingFilterGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "14px",
    alignItems: "end",
  };

  const tableWrap = {
    width: "100%",
    overflowX: "auto",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px",
  };

  const th = {
    textAlign: "left",
    padding: "14px 14px",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #e7dff0",
    fontWeight: "700",
  };

  const td = {
    padding: "16px 14px",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #f0eaf5",
    verticalAlign: "middle",
  };

  const linkText = {
    color: "#6f3f8f",
    fontWeight: "600",
    textDecoration: "none",
    cursor: "pointer",
  };

  const iconBtnRow = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  };

  const iconBtn = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#5d3d75",
    padding: 0,
  };

  const clearBtn = {
    ...addButton,
    background: "#fff",
    color: "#5d3d75",
    border: "1px solid #d8c9e4",
  };

  const productsPageWrap = {
    width: "100%",
    maxWidth: "1300px",
  };

  const productsHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  };

  const productsTitle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
  };

  const productsSubTitle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "6px",
  };

  const productsActionRow = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  };

  const filterSelect = {
    height: "44px",
    minWidth: "180px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0 12px",
    fontSize: "14px",
    outline: "none",
    background: "#fff",
    color: "#333",
    boxSizing: "border-box",
  };

  const addProductFormCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
    marginBottom: "24px",
  };

  const productsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "22px",
    alignItems: "stretch",
  };

  const productCard = {
    background: "#fff",
    border: "1px solid #e7dff0",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const productImage = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    background: "#f3e9fb",
    display: "block",
    flexShrink: 0,
  };

  const productInfo = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1,
  };

  const productHeaderRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
  };

  const productName = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#222",
    margin: 0,
    lineHeight: "1.4",
    flex: 1,
  };

  const deleteProductButton = {
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

  const productPrice = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#6f3f8f",
    margin: 0,
  };

  const stockRow = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const stockLabel = {
    fontSize: "13px",
    color: "#555",
    fontWeight: "600",
  };

  const stockActionRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  };

  const stockValueText = {
    fontSize: "15px",
    fontWeight: "700",
    color: "#222",
    minWidth: "50px",
  };

  const stockInput = {
    height: "42px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0 12px",
    fontSize: "14px",
    outline: "none",
    width: "120px",
    boxSizing: "border-box",
  };

  const updateStockButton = {
    background: "#6f3f8f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
  };

  const cancelStockButton = {
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

  const formHeaderRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  };

  const closeButton = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    background: "#f3e9fb",
    color: "#5d3d75",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    flexShrink: 0,
  };

  const modalOverlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(47, 36, 56, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 999,
  };

  const modalCard = {
    width: "100%",
    maxWidth: "460px",
    background: "#fff",
    borderRadius: "16px",
    padding: "26px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
  };

  const modalTitle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "10px",
  };

  const modalText = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const modalActionRow = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    flexWrap: "wrap",
  };

  const modalCancelButton = {
    background: "#fff",
    color: "#5d3d75",
    border: "1px solid #d8c9e4",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
  };

  const modalDeleteButton = {
    background: "#b33939",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
  };

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

  const metalGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
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
  };

  const metalRemoveButton = {
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

  // User filters grid
  const usersFiltersGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gap: "12px",
    marginBottom: "12px",
  };

  const usersTabs = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    background: "#f3f3f3",
    borderRadius: "10px",
    padding: "4px",
    marginBottom: "14px",
  };

  const tabButton = (active) => ({
    border: "none",
    background: active ? "#fff" : "transparent",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    color: active ? "#6f3f8f" : "#6b7280",
  });

  const filterRowBottom = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  };

  const checkRow = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  };

  const checkboxLabel = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#333",
    cursor: "pointer",
  };

  const userNameWrap = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const userActions = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  // Admin layout
  const adminLayout = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "16px",
    alignItems: "start",
  };

  const adminListCard = {
    ...formCard,
    padding: "16px",
  };

  const adminDetailCard = {
    ...formCard,
    padding: "18px",
    position: "sticky",
    top: "92px",
  };

  const adminRow = (selected) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "14px 12px",
    border: `1px solid ${selected ? "#6f3f8f" : "#e7dff0"}`,
    borderRadius: "10px",
    background: selected ? "#f3e9fb" : "#fff",
    marginBottom: "12px",
    cursor: "pointer",
  });

  const adminLeft = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const adminAvatar = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#6f3f8f",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "14px",
    flexShrink: 0,
  };

  const detailLabel = {
    fontSize: "12px",
    color: "#687588",
    marginBottom: "4px",
  };

  const detailValue = {
    fontSize: "14px",
    color: "#111827",
    fontWeight: 600,
    marginBottom: "12px",
    wordBreak: "break-word",
  };

  // Modal grid for user form
  const modalGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "14px",
  };

  // Communication grid
  const commGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "26px",
  };

  const StatCard = ({ title, val, icon }) => (
    <div style={statCard}>
      <div style={statIconCircle}>{icon}</div>
      <div style={statTitle}>{title}</div>
      <div style={statValue}>{val}</div>
    </div>
  );

  const renderUsers = () => (
    <div style={formCard}>
      <div style={heading}>Users</div>
      <div style={subHeading}>Manage your registered users</div>

      <div style={usersTabs}>
        <button
          type="button"
          style={tabButton(userTab === "all")}
          onClick={() => setUserTab("all")}
        >
          All
        </button>
        <button
          type="button"
          style={tabButton(userTab === "individuals")}
          onClick={() => setUserTab("individuals")}
        >
          Individuals
        </button>
        <button
          type="button"
          style={tabButton(userTab === "business")}
          onClick={() => setUserTab("business")}
        >
          Business
        </button>
      </div>

      <div style={{ fontWeight: 700, marginBottom: "12px", fontSize: "14px" }}>
        Filters
      </div>

      <div style={usersFiltersGrid}>
        <input
          style={input}
          placeholder="Filter by name"
          value={userFilters.name}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          style={input}
          placeholder="Filter by email"
          value={userFilters.email}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          style={input}
          placeholder="Filter by location"
          value={userFilters.location}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, location: e.target.value }))
          }
        />

        <select
          style={input}
          value={userFilters.status}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select
          style={input}
          value={userFilters.kyc}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, kyc: e.target.value }))
          }
        >
          <option value="">KYC</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>

        <select
          style={input}
          value={userFilters.crmType}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, crmType: e.target.value }))
          }
        >
          <option value="">CRM Type</option>
          <option value="Trader">Trader</option>
          <option value="Lead">Lead</option>
          <option value="Collector">Collector</option>
        </select>

        <select
          style={input}
          value={userFilters.leadStatus}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, leadStatus: e.target.value }))
          }
        >
          <option value="">Lead Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Converted">Converted</option>
        </select>

        <select
          style={input}
          value={userFilters.type}
          onChange={(e) =>
            setUserFilters((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          <option value="">All Types</option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div style={filterRowBottom}>
        <div style={checkRow}>
          <label style={checkboxLabel}>
            <input
              type="checkbox"
              checked={userFilters.leadsOnly}
              onChange={(e) =>
                setUserFilters((prev) => ({
                  ...prev,
                  leadsOnly: e.target.checked,
                }))
              }
            />
            Leads only
          </label>

          <label style={checkboxLabel}>
            <input
              type="checkbox"
              checked={userFilters.myLeads}
              onChange={(e) =>
                setUserFilters((prev) => ({
                  ...prev,
                  myLeads: e.target.checked,
                }))
              }
            />
            My Leads
          </label>
        </div>

        <button type="button" style={addButton} onClick={openAddUserModal}>
          + Add User
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          marginTop: "24px",
          marginBottom: "12px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: 800 }}>
          User List ({filteredUsers.length} total)
        </div>

        <button type="button" style={smallButton} onClick={exportUsersCSV}>
          Export CSV
        </button>
      </div>

      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}></th>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Location</th>
              <th style={th}>CRM Type</th>
              <th style={th}>Lead Status</th>
              <th style={th}>Owner</th>
              <th style={th}>Total Purchases</th>
              <th style={th}>Status</th>
              <th style={th}>KYC</th>
              <th style={th}>IRA</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td style={td}>
                    <input type="checkbox" />
                  </td>

                  <td style={td}>
                    <div style={userNameWrap}>
                      <span style={{ fontWeight: 700 }}>{user.name}</span>
                      {user.tags?.[0] ? (
                        <span style={chipLight}>{user.tags[0]}</span>
                      ) : null}
                    </div>
                  </td>

                  <td style={td}>{user.email}</td>
                  <td style={td}>{user.location}</td>
                  <td style={td}>
                    <span style={chipLight}>{user.crmType}</span>
                  </td>
                  <td style={td}>
                    <span style={chipDark}>{user.leadStatus}</span>
                  </td>
                  <td style={td}>{user.owner}</td>
                  <td style={td}>{formatCurrency(user.totalPurchases)}</td>
                  <td style={td}>
                    <span style={chipDark}>{user.status}</span>
                  </td>
                  <td style={td}>
                    <span style={chipDark}>{user.kyc}</span>
                  </td>
                  <td style={td}>
                    <span style={user.ira === "Active" ? chipDark : chipLight}>
                      {user.ira}
                    </span>
                  </td>
                  <td style={td}>
                    <div style={userActions}>
                      <button
                        type="button"
                        style={iconBtn}
                        title="Email"
                        onClick={() => window.open(`mailto:${user.email}`, "_blank")}
                      >
                        ✉️
                      </button>
                      <button
                        type="button"
                        style={iconBtn}
                        title="Call"
                        onClick={() =>
                          alert(
                            user.phone
                              ? `Call: ${user.phone}`
                              : "Phone number not available"
                          )
                        }
                      >
                        📞
                      </button>
                      <button
                        type="button"
                        style={iconBtn}
                        title="View"
                        onClick={() => alert(JSON.stringify(user, null, 2))}
                      >
                        👁️
                      </button>
                      <button
                        type="button"
                        style={iconBtn}
                        title="Edit"
                        onClick={() => openEditUserModal(user)}
                      >
                        ✏️
                      </button>
                      <button
                        type="button"
                        style={iconBtn}
                        title="Toggle Status"
                        onClick={() => handleToggleUserStatus(user.id)}
                      >
                        🔄
                      </button>
                      <button
                        type="button"
                        style={{ ...iconBtn, color: "#b33939" }}
                        title="Delete"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={td} colSpan={12}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showUserModal && (
        <div style={modalOverlay}>
          <div style={{ ...modalCard, maxWidth: "900px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div style={{ fontSize: "22px", fontWeight: 800 }}>
                {editingUserId ? "Edit User" : "Add User"}
              </div>
              <button
                type="button"
                style={removeButton}
                onClick={() => {
                  setShowUserModal(false);
                  resetUserForm();
                }}
              >
                Close
              </button>
            </div>

            <div style={modalGrid}>
              <div style={fieldWrap}>
                <label style={label}>Name</label>
                <input style={input} name="name" value={userForm.name} onChange={handleUserFormChange} />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Email</label>
                <input style={input} name="email" value={userForm.email} onChange={handleUserFormChange} />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Phone</label>
                <input style={input} name="phone" value={userForm.phone} onChange={handleUserFormChange} />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Location</label>
                <input style={input} name="location" value={userForm.location} onChange={handleUserFormChange} />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Type</label>
                <select style={input} name="type" value={userForm.type} onChange={handleUserFormChange}>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>CRM Type</label>
                <select style={input} name="crmType" value={userForm.crmType} onChange={handleUserFormChange}>
                  <option value="Trader">Trader</option>
                  <option value="Lead">Lead</option>
                  <option value="Collector">Collector</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>Lead Status</label>
                <select style={input} name="leadStatus" value={userForm.leadStatus} onChange={handleUserFormChange}>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Converted">Converted</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>Owner</label>
                <input style={input} name="owner" value={userForm.owner} onChange={handleUserFormChange} />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Total Purchases</label>
                <input
                  style={input}
                  name="totalPurchases"
                  type="number"
                  value={userForm.totalPurchases}
                  onChange={handleUserFormChange}
                />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Status</label>
                <select style={input} name="status" value={userForm.status} onChange={handleUserFormChange}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>KYC</label>
                <select style={input} name="kyc" value={userForm.kyc} onChange={handleUserFormChange}>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>IRA</label>
                <select style={input} name="ira" value={userForm.ira} onChange={handleUserFormChange}>
                  <option value="Active">Active</option>
                  <option value="None">None</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>Tags</label>
                <input
                  style={input}
                  name="tags"
                  value={userForm.tags}
                  onChange={handleUserFormChange}
                  placeholder="App User, CRM Entry"
                />
              </div>
            </div>

            <div style={{ ...checkRow, marginTop: "18px" }}>
              <label style={checkboxLabel}>
                <input
                  type="checkbox"
                  name="isLead"
                  checked={userForm.isLead}
                  onChange={handleUserFormChange}
                />
                Is Lead
              </label>

              <label style={checkboxLabel}>
                <input
                  type="checkbox"
                  name="myLead"
                  checked={userForm.myLead}
                  onChange={handleUserFormChange}
                />
                My Lead
              </label>
            </div>

            <div style={{ marginTop: "18px" }}>
              <button type="button" style={submitButton} onClick={handleSaveUser}>
                {editingUserId ? "Update User" : "Save User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCommunication = () => (
    <div style={formCard}>
      <div style={heading}>Communication Settings</div>
      <div style={subHeading}>Manage WhatsApp, email and support messages</div>

      <div style={commGrid}>
        <div style={fieldWrap}>
          <label style={label}>WhatsApp Number</label>
          <input
            type="text"
            value={communicationSettings.whatsapp}
            onChange={(e) =>
              setCommunicationSettings((prev) => ({
                ...prev,
                whatsapp: e.target.value,
              }))
            }
            style={input}
            placeholder="Enter WhatsApp number"
          />
        </div>

        <div style={fieldWrap}>
          <label style={label}>Support Email</label>
          <input
            type="email"
            value={communicationSettings.email}
            onChange={(e) =>
              setCommunicationSettings((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            style={input}
            placeholder="Enter support email"
          />
        </div>
      </div>

      <div style={descriptionWrap}>
        <label style={label}>Default Support Message</label>
        <textarea
          value={communicationSettings.supportMessage}
          onChange={(e) =>
            setCommunicationSettings((prev) => ({
              ...prev,
              supportMessage: e.target.value,
            }))
          }
          style={textarea}
          placeholder="Enter support message"
        />
      </div>

      <button
        type="button"
        style={submitButton}
        onClick={handleCommunicationSave}
      >
        Save Communication Settings
      </button>
    </div>
  );

  const renderAdminUsers = () => (
    <div style={formCard}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={heading}>Admin Users</div>
          <div style={subHeading}>Manage admin access and permissions</div>
        </div>

        <button type="button" style={addButton} onClick={openAddAdminModal}>
          + Add Admin User
        </button>
      </div>

      <div style={adminLayout}>
        <div>
          <div style={{ ...adminListCard, marginBottom: "16px" }}>
            <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              Search Admin Users
            </div>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={adminSearch}
              onChange={(e) => setAdminSearch(e.target.value)}
              style={input}
            />
          </div>

          <div style={adminListCard}>
            <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              Admin Users ({filteredAdmins.length})
            </div>

            {filteredAdmins.length > 0 ? (
              filteredAdmins.map((admin) => (
                <div
                  key={admin.id}
                  style={adminRow(selectedAdminId === admin.id)}
                  onClick={() => setSelectedAdminId(admin.id)}
                >
                  <div style={adminLeft}>
                    <div style={adminAvatar}>{getInitials(admin.name)}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "15px" }}>
                        {admin.name}
                      </div>
                      <div style={{ fontSize: "13px", color: "#687588" }}>
                        {admin.email}
                      </div>
                      <div style={{ fontSize: "12px", color: "#687588", marginTop: "4px" }}>
                        Last login: {formatDateTime(admin.lastLogin)}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={roleBadge(admin.role)}>{admin.role}</span>
                    <span style={chipDark}>{admin.status}</span>
                    <button
                      type="button"
                      style={iconBtn}
                      title="Edit Admin"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditAdminModal(admin);
                      }}
                    >
                      ✏️
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ color: "#687588", fontSize: "14px" }}>
                No admin users found.
              </div>
            )}
          </div>
        </div>

        <div style={adminDetailCard}>
          {selectedAdmin ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <div style={{ ...adminAvatar, width: "50px", height: "50px" }}>
                  {getInitials(selectedAdmin.name)}
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800 }}>
                    {selectedAdmin.name}
                  </div>
                  <div style={{ color: "#687588", fontSize: "13px" }}>
                    {selectedAdmin.email}
                  </div>
                </div>
              </div>

              <div style={detailLabel}>Role</div>
              <div style={detailValue}>
                <span style={roleBadge(selectedAdmin.role)}>{selectedAdmin.role}</span>
              </div>

              <div style={detailLabel}>Status</div>
              <div style={detailValue}>
                <span style={chipDark}>{selectedAdmin.status}</span>
              </div>

              <div style={detailLabel}>Created At</div>
              <div style={detailValue}>{formatDateTime(selectedAdmin.createdAt)}</div>

              <div style={detailLabel}>Last Login</div>
              <div style={detailValue}>{formatDateTime(selectedAdmin.lastLogin)}</div>

              <div style={detailLabel}>Permissions</div>
              <div style={{ ...detailValue, marginBottom: "18px" }}>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {Object.entries(selectedAdmin.permissions || {}).map(([key, value]) =>
                    value ? (
                      <span key={key} style={chipLight}>
                        {key}
                      </span>
                    ) : null
                  )}
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  style={smallButton}
                  onClick={() => openEditAdminModal(selectedAdmin)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  style={smallButton}
                  onClick={() => handleToggleAdminStatus(selectedAdmin.id)}
                >
                  Toggle Status
                </button>

                <button
                  type="button"
                  style={removeButton}
                  onClick={() => handleDeleteAdmin(selectedAdmin.id)}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 10px" }}>
              <div style={{ fontSize: "48px", marginBottom: "8px", color: "#9ca3af" }}>
                👤
              </div>
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>⚙️</div>
              <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                Select a User
              </div>
              <div style={{ color: "#687588", fontSize: "14px" }}>
                Choose an admin user to view or edit their details and permissions.
              </div>
            </div>
          )}
        </div>
      </div>

      {showAdminModal && (
        <div style={modalOverlay}>
          <div style={{ ...modalCard, maxWidth: "900px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div style={{ fontSize: "22px", fontWeight: 800 }}>
                {editingAdminId ? "Edit Admin User" : "Add Admin User"}
              </div>
              <button
                type="button"
                style={removeButton}
                onClick={() => {
                  setShowAdminModal(false);
                  resetAdminForm();
                }}
              >
                Close
              </button>
            </div>

            <div style={modalGrid}>
              <div style={fieldWrap}>
                <label style={label}>Name</label>
                <input
                  style={input}
                  name="name"
                  value={adminForm.name}
                  onChange={handleAdminFormChange}
                />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Email</label>
                <input
                  style={input}
                  name="email"
                  value={adminForm.email}
                  onChange={handleAdminFormChange}
                />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Role</label>
                <select
                  style={input}
                  name="role"
                  value={adminForm.role}
                  onChange={handleAdminFormChange}
                >
                  <option value="manager">manager</option>
                  <option value="super admin">super admin</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={label}>Status</label>
                <select
                  style={input}
                  name="status"
                  value={adminForm.status}
                  onChange={handleAdminFormChange}
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
            </div>

            <div style={{ ...sectionTitle, marginTop: "18px" }}>Permissions</div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "10px 16px",
            }}>
              {[
                ["dashboard", "Dashboard"],
                ["users", "Users"],
                ["categories", "Categories"],
                ["products", "Products"],
                ["shipping", "Shipping"],
                ["communication", "Communication"],
                ["feeSettings", "Fee Settings"],
                ["policies", "Policies"],
              ].map(([key, labelText]) => (
                <label key={key} style={checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={adminForm.permissions[key]}
                    onChange={() => handleAdminPermissionChange(key)}
                  />
                  {labelText}
                </label>
              ))}
            </div>

            <div style={{ marginTop: "18px" }}>
              <button type="button" style={submitButton} onClick={handleSaveAdmin}>
                {editingAdminId ? "Update Admin User" : "Save Admin User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div style={page}>
      <aside style={sidebar}>
        <div style={sidebarTitle}>Admin Panel</div>

        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.key}
            style={menuItem(activeSection === item.key)}
            onClick={() => {
              setActiveSection(item.key);
              if (item.key !== "products") {
                setShowAddProductForm(false);
              }
            }}
          >
            {item.label}
          </div>
        ))}
      </aside>

      <main style={main}>
        {activeSection === "dashboard" && (
          <div style={formCard}>
            <div style={dashboardHeader}>
              <div>
                <h1 style={dashboardTitle}>Dashboard Overview</h1>
                <div style={dashboardSubTitle}>
                  Clean and premium admin dashboard for jewellery management
                </div>
              </div>
              <div style={welcomeText}>Welcome back, Administrator</div>
            </div>

            <div style={dashboardStatsGrid}>
              <StatCard
                title="Total Customers"
                val={dashboardStats.totalCustomers}
                icon="👥"
              />
              <StatCard
                title="Total Profit"
                val={`₹${dashboardStats.totalProfit.toLocaleString()}`}
                icon="💰"
              />
              <StatCard
                title="Active Users"
                val={dashboardStats.activeUsers}
                icon="📈"
              />
              <StatCard
                title="Active Shipment"
                val={dashboardStats.activeShipment}
                icon="📦"
              />
              <StatCard
                title="Delivered"
                val={dashboardStats.delivered}
                icon="✅"
              />
              <StatCard
                title="Gold Available"
                val={dashboardStats.goldCount}
                icon="✨"
              />
              <StatCard
                title="Silver Available"
                val={dashboardStats.silverCount}
                icon="🔘"
              />
            </div>
          </div>
        )}

        {activeSection === "products" && (
          <div style={productsPageWrap}>
            <div style={productsHeader}>
              <div>
                <h1 style={productsTitle}>Products</h1>
                <div style={productsSubTitle}>
                  Manage and view all uploaded products
                </div>
              </div>

              <div style={productsActionRow}>
                <select
                  value={productFilterType}
                  onChange={(e) => setProductFilterType(e.target.value)}
                  style={filterSelect}
                >
                  <option value="all">All Products</option>
                  {storedMetals.map((metal) => (
                    <option key={metal} value={metal}>
                      {metal}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  style={addButton}
                  onClick={() => setShowAddProductForm((prev) => !prev)}
                >
                  {showAddProductForm ? "Close Form" : "+ Add Product"}
                </button>
              </div>
            </div>

            {showAddProductForm ? (
              <div style={addProductFormCard}>
                <div style={formHeaderRow}>
                  <div style={heading}>Add Product</div>

                  <button
                    type="button"
                    style={closeButton}
                    onClick={() => setShowAddProductForm(false)}
                  >
                    ✕
                  </button>
                </div>

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
                      <label style={label}>Metal Type</label>
                      <select
                        name="metalType"
                        value={formData.metalType}
                        onChange={handleInputChange}
                        style={input}
                      >
                        <option value="">Select metal type</option>
                        {storedMetals.map((metal) => (
                          <option key={metal} value={metal}>
                            {metal}
                          </option>
                        ))}
                      </select>
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

                  {formData.metalType && (
                    <div style={detailGrid}>
                      <div style={fieldWrap}>
                        <label style={label}>Purity</label>
                        <input
                          type="number"
                          name="purity"
                          value={formData.purity}
                          onChange={handleInputChange}
                          placeholder="Enter purity"
                          style={input}
                        />
                      </div>

                      <div style={fieldWrap}>
                        <label style={label}>Weight</label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          placeholder="Enter weight"
                          style={input}
                        />
                      </div>

                      <div style={fieldWrap}>
                        <label style={label}>Price Per Gram</label>
                        <input
                          type="number"
                          name="pricePerGram"
                          value={formData.pricePerGram}
                          onChange={handleInputChange}
                          placeholder="Enter price per gram"
                          style={input}
                        />
                      </div>

                      <div style={fieldWrap}>
                        <label style={label}>Making Charges</label>
                        <input
                          type="number"
                          name="makingCharges"
                          value={formData.makingCharges}
                          onChange={handleInputChange}
                          placeholder="Enter making charges"
                          style={input}
                        />
                      </div>

                      <div style={fieldWrap}>
                        <label style={label}>Offer Price</label>
                        <input
                          type="number"
                          name="offerPrice"
                          value={formData.offerPrice}
                          onChange={handleInputChange}
                          placeholder="Enter offer price"
                          style={input}
                        />
                      </div>

                      <div style={fieldWrap}>
                        <label style={label}>Total Price</label>
                        <input
                          type="number"
                          name="totalPrice"
                          value={formData.totalPrice}
                          readOnly
                          placeholder="Auto calculated"
                          style={{ ...input, background: "#f4f0f8", color: "#5d3d75", fontWeight: "700" }}
                        />
                      </div>

                      <div style={fieldWrap}>
                        <label style={label}>Stock</label>
                        <input
                          type="number"
                          name="stock"
                          value={formData.stock}
                          onChange={handleInputChange}
                          placeholder="Enter stock"
                          style={input}
                        />
                      </div>
                    </div>
                  )}

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
                      Drag the uploaded images to arrange order. The first image
                      will be the main image.
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
            ) : filteredProducts.length > 0 ? (
              <div style={productsGrid}>
                {filteredProducts.map((product) => {
                  const mainImage = product.images?.[0] || "";

                  return (
                    <div key={product.id} style={productCard}>
                      {mainImage ? (
                        <img
                          src={mainImage}
                          alt={product.name}
                          style={productImage}
                        />
                      ) : (
                        <div
                          style={{
                            ...productImage,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#8b6aa3",
                            fontWeight: "700",
                          }}
                        >
                          No Image
                        </div>
                      )}

                      <div style={productInfo}>
                        <div style={productHeaderRow}>
                          <div style={productName}>{product.name}</div>

                          <button
                            type="button"
                            style={deleteProductButton}
                            onClick={() => confirmDeleteProduct(product.id)}
                          >
                            Remove Product
                          </button>
                        </div>

                        <div style={productPrice}>
                          ₹{Number(product.totalPrice || 0).toLocaleString()}
                        </div>

                        <div style={stockRow}>
                          <label style={stockLabel}>Stock</label>

                          {editingStockId === product.id ? (
                            <div style={stockActionRow}>
                              <input
                                type="number"
                                value={editingStockValue}
                                onChange={(e) =>
                                  setEditingStockValue(e.target.value)
                                }
                                placeholder="Enter stock"
                                style={stockInput}
                              />

                              <button
                                type="button"
                                style={updateStockButton}
                                onClick={() => saveStockEdit(product.id)}
                              >
                                Save
                              </button>

                              <button
                                type="button"
                                style={cancelStockButton}
                                onClick={() => {
                                  setEditingStockId(null);
                                  setEditingStockValue("");
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div style={stockActionRow}>
                              <div style={stockValueText}>
                                {product.stock ?? 0}
                              </div>

                              <button
                                type="button"
                                style={updateStockButton}
                                onClick={() => startStockEdit(product)}
                              >
                                Update
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={noProductsBox}>
                {productFilterType === "all" ? (
                  <>
                    No products uploaded yet. Click <strong>Add Product</strong>{" "}
                    to create your first product.
                  </>
                ) : (
                  <>No {productFilterType} products found.</>
                )}
              </div>
            )}
          </div>
        )}

        {activeSection === "metal-types" && (
          <div style={metalPageWrap}>
            <div style={metalHeader}>
              <div>
                <h1 style={metalTitle}>Metal Types</h1>
                <div style={metalSubTitle}>
                  Add and manage available metal types for products
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
                {storedMetals.map((metal) => (
                  <div key={metal} style={metalCard}>
                    <div style={metalCardHeader}>
                      <h3 style={metalCardTitle}>{metal}</h3>

                      <button
                        type="button"
                        style={metalRemoveButton}
                        onClick={() => confirmDeleteMetal(metal)}
                      >
                        Remove
                      </button>
                    </div>

                    <div style={metalCardCount}>
                      Total Products: {getMetalProductCount(metal)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={noProductsBox}>No metal types available.</div>
            )}
          </div>
        )}

        {activeSection === "users" && renderUsers()}

        {activeSection === "shipping" && (
          <div style={shippingPageWrap}>
            <div style={shippingHeader}>
              <div>
                <h1 style={shippingTitle}>Shipping Management</h1>
                <div style={shippingSubTitle}>
                  Track and manage all shipments
                </div>
              </div>

              <button type="button" style={addButton}>
                + Create Shipment
              </button>
            </div>

            <div style={shippingCard}>
              <div style={shippingFilterHeader}>Filters</div>

              <div style={shippingFilterGrid}>
                <div style={fieldWrap}>
                  <label style={label}>Status</label>
                  <select
                    name="status"
                    value={shippingFilters.status}
                    onChange={handleShippingFilterChange}
                    style={input}
                  >
                    <option value="">Select status</option>
                    <option value="Shipment Created">Shipment Created</option>
                    <option value="Shipping Estimated by Admin">
                      Shipping Estimated by Admin
                    </option>
                    <option value="Pending Shipping Estimation">
                      Pending Shipping Estimation
                    </option>
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label style={label}>Shipment Type</label>
                  <select
                    name="shipmentType"
                    value={shippingFilters.shipmentType}
                    onChange={handleShippingFilterChange}
                    style={input}
                  >
                    <option value="">Select shipment type</option>
                    <option value="Physical Delivery">
                      Physical Delivery
                    </option>
                    <option value="Ship Commodity To Gold App">
                      Ship Commodity To Gold App
                    </option>
                  </select>
                </div>

                <button
                  type="button"
                  style={clearBtn}
                  onClick={clearShippingFilters}
                >
                  Clear
                </button>
              </div>
            </div>

            <div style={shippingCard}>
              <div style={{ ...shippingFilterHeader, marginBottom: "16px" }}>
                Shipments ({filteredShipments.length})
              </div>

              <div style={tableWrap}>
                <table style={table}>
                  <thead>
                    <tr>
                      <th style={th}>S.NO.</th>
                      <th style={th}>User</th>
                      <th style={th}>Commodity</th>
                      <th style={th}>Weight</th>
                      <th style={th}>Type</th>
                      <th style={th}>Shipment Id</th>
                      <th style={th}>Status</th>
                      <th style={th}>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredShipments.length > 0 ? (
                      filteredShipments.map((item, index) => (
                        <tr key={item.id}>
                          <td style={td}>{index + 1}</td>
                          <td style={td}>{item.user}</td>
                          <td style={td}>
                            <span style={linkText}>{item.commodity}</span>
                          </td>
                          <td style={td}>{item.weight}</td>
                          <td style={td}>
                            <span style={linkText}>{item.type}</span>
                          </td>
                          <td style={td}>{item.shipmentId}</td>
                          <td style={td}>
                            <span style={getStatusBadgeStyle(item.status)}>
                              {item.status}
                            </span>
                          </td>
                          <td style={td}>
                            <div style={iconBtnRow}>
                              <button type="button" style={iconBtn} title="View">
                                👁️
                              </button>
                              <button type="button" style={iconBtn} title="Edit">
                                ✏️
                              </button>
                              <button
                                type="button"
                                style={iconBtn}
                                title="Delete"
                              >
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td style={td} colSpan={8}>
                          No shipments found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeSection === "communication" && renderCommunication()}

        {activeSection === "admin-users" && renderAdminUsers()}

        {["fee-setting", "privacy-policy", "terms-conditions"].includes(activeSection) && (
          <div style={placeholderCard}>
            {SIDEBAR_ITEMS.find((item) => item.key === activeSection)?.label ||
              "Section"}{" "}
            page
          </div>
        )}
      </main>

      {deleteProductId !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Product?</div>
            <div style={modalText}>
              This action will permanently delete the selected product from your
              product list.
            </div>

            <div style={modalActionRow}>
              <button
                type="button"
                style={modalCancelButton}
                onClick={() => setDeleteProductId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                style={modalDeleteButton}
                onClick={handleDeleteProduct}
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddMetalModal && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Add Metal</div>
            <div style={modalText}>
              Enter a new metal type. It will appear in the Metal Types page and
              in the Add Product metal type dropdown.
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                value={newMetalName}
                onChange={(e) => setNewMetalName(e.target.value)}
                placeholder="Enter metal name"
                style={input}
              />
            </div>

            <div style={modalActionRow}>
              <button
                type="button"
                style={modalCancelButton}
                onClick={() => {
                  setShowAddMetalModal(false);
                  setNewMetalName("");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                style={updateStockButton}
                onClick={handleAddMetal}
              >
                Add Metal
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteMetalName !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Metal Type?</div>
            <div style={modalText}>
              This will remove <strong>{deleteMetalName}</strong> from metal
              types.
            </div>

            <div style={modalActionRow}>
              <button
                type="button"
                style={modalCancelButton}
                onClick={() => setDeleteMetalName(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                style={modalDeleteButton}
                onClick={handleDeleteMetal}
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}