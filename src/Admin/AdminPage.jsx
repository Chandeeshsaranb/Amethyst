
// // import React, { useEffect, useRef, useState } from "react";

// // const SIDEBAR_ITEMS = [
// //   { key: "dashboard", label: "Dashboard" },
// //   { key: "products", label: "Products" },
// //   { key: "users", label: "Users" },
// //   { key: "shipping", label: "Shipping" },
// //   { key: "communication", label: "Communication" },
// //   { key: "admin-users", label: "Admin Users" },
// //   { key: "fee-setting", label: "Fee Setting" },
// //   { key: "privacy-policy", label: "Privacy Policy" },
// //   { key: "terms-conditions", label: "Terms & Conditions" },
// // ];

// // export default function AdminPage() {
// //   const [activeSection, setActiveSection] = useState("dashboard");
// //   const [showAddProductForm, setShowAddProductForm] = useState(false);
// //   const [productFilterType, setProductFilterType] = useState("all");
// //   const [editingStockId, setEditingStockId] = useState(null);
// //   const [editingStockValue, setEditingStockValue] = useState("");
// //   const [deleteProductId, setDeleteProductId] = useState(null);

// //   const fileInputRef = useRef(null);
// //   const dragItemIndex = useRef(null);
// //   const dragOverItemIndex = useRef(null);

// //   const [dashboardStats, setDashboardStats] = useState({
// //     totalCustomers: 0,
// //     totalProfit: 0,
// //     activeUsers: 0,
// //     activeShipment: 0,
// //     delivered: 0,
// //     goldCount: 0,
// //     silverCount: 0,
// //   });

// //   const [storedProducts, setStoredProducts] = useState([]);

// //   const [formData, setFormData] = useState({
// //     productName: "",
// //     metalType: "",
// //     purity: "",
// //     weight: "",
// //     pricePerGram: "",
// //     makingCharges: "",
// //     offerPrice: "",
// //     totalPrice: "",
// //     stock: "",
// //     productDescription: "",
// //   });

// //   const [previews, setPreviews] = useState([]);

// //   const [shippingFilters, setShippingFilters] = useState({
// //     status: "",
// //     shipmentType: "",
// //   });

// //   const [shipments] = useState([
// //     {
// //       id: 1,
// //       user: "Keval Parashar",
// //       commodity: "Gold(2gram)",
// //       weight: "2g",
// //       type: "Physical Delivery",
// //       shipmentId: "se-623135802",
// //       status: "Shipment Created",
// //     },
// //     {
// //       id: 2,
// //       user: "ANIMI GSWM",
// //       commodity: "Gold(1gram)",
// //       weight: "1g",
// //       type: "Ship Commodity To Gold App",
// //       shipmentId: "se-622247522",
// //       status: "Shipment Created",
// //     },
// //     {
// //       id: 3,
// //       user: "ANIMI GSWM",
// //       commodity: "Gold(1gram)",
// //       weight: "1g",
// //       type: "Physical Delivery",
// //       shipmentId: "se-622179834",
// //       status: "Shipping Estimated by Admin",
// //     },
// //     {
// //       id: 4,
// //       user: "Shubh",
// //       commodity: "Rhodium(1gram)",
// //       weight: "1g",
// //       type: "Physical Delivery",
// //       shipmentId: "se-622180001",
// //       status: "Pending Shipping Estimation",
// //     },
// //     {
// //       id: 5,
// //       user: "Shubh",
// //       commodity: "Gold(1.684gram)",
// //       weight: "1.684g",
// //       type: "Physical Delivery",
// //       shipmentId: "se-622180002",
// //       status: "Pending Shipping Estimation",
// //     },
// //   ]);

// //   const loadProductsFromStorage = () => {
// //     const products = JSON.parse(localStorage.getItem("adminProducts") || "[]");
// //     setStoredProducts(products);
// //     return products;
// //   };

// //   useEffect(() => {
// //     loadProductsFromStorage();
// //   }, []);

// //   useEffect(() => {
// //     const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

// //     const gold = storedProducts.filter(
// //       (p) => p.metalType?.toLowerCase() === "gold"
// //     ).length;

// //     const silver = storedProducts.filter(
// //       (p) => p.metalType?.toLowerCase() === "silver"
// //     ).length;

// //     const profit = storedProducts.reduce(
// //       (acc, curr) => acc + (Number(curr.totalPrice) || 0),
// //       0
// //     );

// //     setDashboardStats({
// //       totalCustomers: storedUsers.length,
// //       totalProfit: profit,
// //       activeUsers:
// //         storedUsers.filter((u) => u.status === "active").length ||
// //         Math.floor(storedUsers.length * 0.4),
// //       activeShipment: 12,
// //       delivered: 85,
// //       goldCount: gold,
// //       silverCount: silver,
// //     });
// //   }, [activeSection, storedProducts]);

// //   useEffect(() => {
// //     const weight = Number(formData.weight) || 0;
// //     const pricePerGram = Number(formData.pricePerGram) || 0;
// //     const makingCharges = Number(formData.makingCharges) || 0;
// //     const offerPrice = Number(formData.offerPrice) || 0;

// //     const calculatedTotal =
// //       weight * pricePerGram + makingCharges - offerPrice;

// //     setFormData((prev) => {
// //       const nextTotal =
// //         prev.metalType &&
// //         (prev.weight !== "" ||
// //           prev.pricePerGram !== "" ||
// //           prev.makingCharges !== "" ||
// //           prev.offerPrice !== "")
// //           ? String(Math.max(calculatedTotal, 0))
// //           : "";

// //       if (prev.totalPrice === nextTotal) return prev;

// //       return {
// //         ...prev,
// //         totalPrice: nextTotal,
// //       };
// //     });
// //   }, [
// //     formData.weight,
// //     formData.pricePerGram,
// //     formData.makingCharges,
// //     formData.offerPrice,
// //     formData.metalType,
// //   ]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => {
// //       const updated = {
// //         ...prev,
// //         [name]: value,
// //       };

// //       if (name === "metalType" && !value) {
// //         updated.purity = "";
// //         updated.weight = "";
// //         updated.pricePerGram = "";
// //         updated.makingCharges = "";
// //         updated.offerPrice = "";
// //         updated.totalPrice = "";
// //         updated.stock = "";
// //       }

// //       return updated;
// //     });
// //   };

// //   const handleStockChange = (productId, value) => {
// //     const updatedProducts = storedProducts.map((product) =>
// //       product.id === productId
// //         ? { ...product, stock: value === "" ? "" : Number(value) }
// //         : product
// //     );

// //     setStoredProducts(updatedProducts);
// //     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
// //   };

// //   const startStockEdit = (product) => {
// //     setEditingStockId(product.id);
// //     setEditingStockValue(product.stock ?? "");
// //   };

// //   const saveStockEdit = (productId) => {
// //     handleStockChange(productId, editingStockValue);
// //     setEditingStockId(null);
// //     setEditingStockValue("");
// //   };

// //   const confirmDeleteProduct = (productId) => {
// //     setDeleteProductId(productId);
// //   };

// //   const handleDeleteProduct = () => {
// //     const updatedProducts = storedProducts.filter(
// //       (product) => product.id !== deleteProductId
// //     );
// //     setStoredProducts(updatedProducts);
// //     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));

// //     if (editingStockId === deleteProductId) {
// //       setEditingStockId(null);
// //       setEditingStockValue("");
// //     }

// //     setDeleteProductId(null);
// //   };

// //   const handleImageChange = async (e) => {
// //     const files = Array.from(e.target.files || []);
// //     if (!files.length) return;

// //     const base64Images = await Promise.all(
// //       files.map(
// //         (file) =>
// //           new Promise((resolve) => {
// //             const reader = new FileReader();
// //             reader.onloadend = () =>
// //               resolve({
// //                 id: `${Date.now()}-${Math.random()}-${file.name}`,
// //                 src: reader.result,
// //                 name: file.name,
// //               });
// //             reader.readAsDataURL(file);
// //           })
// //       )
// //     );

// //     setPreviews((prev) => [...prev, ...base64Images]);

// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = "";
// //     }
// //   };

// //   const removeImage = (indexToRemove) => {
// //     setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
// //   };

// //   const handleDragStart = (index) => {
// //     dragItemIndex.current = index;
// //   };

// //   const handleDragEnter = (index) => {
// //     dragOverItemIndex.current = index;
// //   };

// //   const handleDrop = () => {
// //     const fromIndex = dragItemIndex.current;
// //     const toIndex = dragOverItemIndex.current;

// //     if (
// //       fromIndex === null ||
// //       toIndex === null ||
// //       fromIndex === toIndex ||
// //       fromIndex < 0 ||
// //       toIndex < 0
// //     ) {
// //       dragItemIndex.current = null;
// //       dragOverItemIndex.current = null;
// //       return;
// //     }

// //     setPreviews((prev) => {
// //       const updated = [...prev];
// //       const draggedItem = updated[fromIndex];
// //       updated.splice(fromIndex, 1);
// //       updated.splice(toIndex, 0, draggedItem);
// //       return updated;
// //     });

// //     dragItemIndex.current = null;
// //     dragOverItemIndex.current = null;
// //   };

// //   const handleDragEnd = () => {
// //     dragItemIndex.current = null;
// //     dragOverItemIndex.current = null;
// //   };

// //   const resetProductForm = () => {
// //     setFormData({
// //       productName: "",
// //       metalType: "",
// //       purity: "",
// //       weight: "",
// //       pricePerGram: "",
// //       makingCharges: "",
// //       offerPrice: "",
// //       totalPrice: "",
// //       stock: "",
// //       productDescription: "",
// //     });
// //     setPreviews([]);

// //     if (fileInputRef.current) {
// //       fileInputRef.current.value = "";
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (
// //       !formData.productName.trim() ||
// //       !formData.metalType.trim() ||
// //       !formData.productDescription.trim() ||
// //       !formData.purity.trim() ||
// //       !formData.weight.toString().trim() ||
// //       !formData.pricePerGram.toString().trim() ||
// //       !formData.makingCharges.toString().trim() ||
// //       !formData.stock.toString().trim() ||
// //       !formData.totalPrice.toString().trim() ||
// //       previews.length === 0
// //     ) {
// //       alert(
// //         "Please fill all required product fields and upload at least one photo."
// //       );
// //       return;
// //     }

// //     const newProduct = {
// //       id: Date.now(),
// //       name: formData.productName.trim(),
// //       metalType: formData.metalType.trim(),
// //       purity: formData.purity.trim(),
// //       weight: formData.weight,
// //       pricePerGram: formData.pricePerGram,
// //       makingCharges: formData.makingCharges,
// //       offerPrice: formData.offerPrice,
// //       totalPrice: formData.totalPrice,
// //       stock: Number(formData.stock),
// //       description: formData.productDescription.trim(),
// //       images: previews.map((item) => item.src),
// //       createdAt: new Date().toISOString(),
// //     };

// //     const existingProducts = JSON.parse(
// //       localStorage.getItem("adminProducts") || "[]"
// //     );

// //     existingProducts.push(newProduct);
// //     localStorage.setItem("adminProducts", JSON.stringify(existingProducts));

// //     setStoredProducts(existingProducts);
// //     alert("Product saved successfully in localStorage");

// //     resetProductForm();
// //     setShowAddProductForm(false);
// //   };

// //   const handleShippingFilterChange = (e) => {
// //     const { name, value } = e.target;
// //     setShippingFilters((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const clearShippingFilters = () => {
// //     setShippingFilters({
// //       status: "",
// //       shipmentType: "",
// //     });
// //   };

// //   const filteredShipments = shipments.filter((item) => {
// //     const matchStatus = shippingFilters.status
// //       ? item.status === shippingFilters.status
// //       : true;

// //     const matchType = shippingFilters.shipmentType
// //       ? item.type === shippingFilters.shipmentType
// //       : true;

// //     return matchStatus && matchType;
// //   });

// //   const filteredProducts = storedProducts.filter((product) => {
// //     if (productFilterType === "all") return true;
// //     return product.metalType?.toLowerCase() === productFilterType;
// //   });

// //   const getStatusBadgeStyle = (status) => ({
// //     display: "inline-block",
// //     padding: "6px 12px",
// //     borderRadius: "999px",
// //     fontSize: "12px",
// //     fontWeight: "600",
// //     border: "1px solid #e7dff0",
// //     background:
// //       status === "Shipment Created"
// //         ? "#f3e9fb"
// //         : status === "Shipping Estimated by Admin"
// //         ? "#efe7f8"
// //         : "#f8f1fc",
// //     color: "#5d3d75",
// //     whiteSpace: "nowrap",
// //   });

// //   const page = {
// //     display: "flex",
// //     minHeight: "100vh",
// //     background: "#f6f4f8",
// //     fontFamily: "Arial, Helvetica, sans-serif",
// //   };

// //   const sidebar = {
// //     width: "300px",
// //     minWidth: "300px",
// //     background: "#2f2438",
// //     color: "#fff",
// //     height: "100vh",
// //     overflowY: "auto",
// //     overflowX: "hidden",
// //     padding: "24px 0",
// //     boxSizing: "border-box",
// //     position: "sticky",
// //     top: 0,
// //   };

// //   const sidebarTitle = {
// //     fontSize: "22px",
// //     fontWeight: "700",
// //     textAlign: "center",
// //     marginBottom: "28px",
// //   };

// //   const menuItem = (active) => ({
// //     padding: "14px 22px",
// //     cursor: "pointer",
// //     background: active ? "#4b355d" : "transparent",
// //     borderLeft: active ? "4px solid #c79ae0" : "4px solid transparent",
// //     fontSize: "15px",
// //     fontWeight: active ? "600" : "500",
// //   });

// //   const main = {
// //     flex: 1,
// //     padding: "30px",
// //     boxSizing: "border-box",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "flex-start",
// //   };

// //   const formCard = {
// //     background: "#fff",
// //     borderRadius: "12px",
// //     padding: "28px",
// //     boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
// //     maxWidth: "1100px",
// //     width: "100%",
// //   };

// //   const heading = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     marginBottom: "24px",
// //     color: "#222",
// //   };

// //   const grid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //     gap: "18px",
// //     marginBottom: "26px",
// //   };

// //   const detailGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //     gap: "18px",
// //     marginBottom: "26px",
// //   };

// //   const descriptionWrap = {
// //     display: "flex",
// //     flexDirection: "column",
// //     marginBottom: "26px",
// //   };

// //   const fieldWrap = {
// //     display: "flex",
// //     flexDirection: "column",
// //   };

// //   const label = {
// //     fontSize: "14px",
// //     fontWeight: "600",
// //     marginBottom: "8px",
// //     color: "#333",
// //   };

// //   const input = {
// //     height: "44px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "0 12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     boxSizing: "border-box",
// //     width: "100%",
// //     background: "#fff",
// //   };

// //   const readonlyInput = {
// //     ...input,
// //     background: "#f4f0f8",
// //     color: "#5d3d75",
// //     fontWeight: "700",
// //   };

// //   const textarea = {
// //     minHeight: "110px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     resize: "vertical",
// //     fontFamily: "Arial, Helvetica, sans-serif",
// //     boxSizing: "border-box",
// //     width: "100%",
// //   };

// //   const sectionTitle = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     margin: "24px 0 14px",
// //     color: "#2b2b2b",
// //   };

// //   const fileInput = {
// //     marginTop: "8px",
// //     marginBottom: "16px",
// //   };

// //   const hintText = {
// //     fontSize: "13px",
// //     color: "#666",
// //     marginTop: "-6px",
// //     marginBottom: "10px",
// //   };

// //   const previewWrap = {
// //     marginTop: "10px",
// //     marginBottom: "20px",
// //   };

// //   const previewGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
// //     gap: "16px",
// //   };

// //   const previewCard = {
// //     border: "1px solid #ddd",
// //     borderRadius: "10px",
// //     padding: "10px",
// //     background: "#fff",
// //     cursor: "grab",
// //   };

// //   const previewImage = {
// //     width: "100%",
// //     height: "160px",
// //     objectFit: "cover",
// //     borderRadius: "8px",
// //     border: "1px solid #ddd",
// //     display: "block",
// //     marginBottom: "10px",
// //   };

// //   const previewOrder = {
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     marginBottom: "8px",
// //     color: "#444",
// //   };

// //   const actionRow = {
// //     display: "flex",
// //     gap: "8px",
// //     flexWrap: "wrap",
// //   };

// //   const removeButton = {
// //     border: "none",
// //     background: "#b33939",
// //     color: "#fff",
// //     borderRadius: "6px",
// //     padding: "8px 10px",
// //     cursor: "pointer",
// //     fontSize: "12px",
// //     fontWeight: "700",
// //   };

// //   const submitButton = {
// //     marginTop: "10px",
// //     background: "#6f3f8f",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     padding: "13px 24px",
// //     fontSize: "15px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //   };

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

// //   const placeholderCard = {
// //     ...formCard,
// //     textAlign: "center",
// //     color: "#555",
// //     fontSize: "18px",
// //     padding: "60px 20px",
// //   };

// //   const dashboardHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: "28px",
// //     paddingBottom: "18px",
// //     borderBottom: "1px solid #e9e1ef",
// //     flexWrap: "wrap",
// //     gap: "12px",
// //   };

// //   const dashboardTitle = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     color: "#222",
// //     margin: 0,
// //   };

// //   const dashboardSubTitle = {
// //     fontSize: "14px",
// //     color: "#666",
// //     marginTop: "6px",
// //   };

// //   const welcomeText = {
// //     color: "#6f3f8f",
// //     fontWeight: "600",
// //     fontSize: "14px",
// //   };

// //   const dashboardStatsGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
// //     gap: "20px",
// //   };

// //   const statCard = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "16px",
// //     padding: "22px",
// //     boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
// //   };

// //   const statIconCircle = {
// //     width: "46px",
// //     height: "46px",
// //     borderRadius: "50%",
// //     background: "#f3e9fb",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: "14px",
// //     fontSize: "20px",
// //   };

// //   const statTitle = {
// //     fontSize: "13px",
// //     color: "#666",
// //     textTransform: "uppercase",
// //     letterSpacing: "0.8px",
// //     marginBottom: "8px",
// //   };

// //   const statValue = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     color: "#222",
// //   };

// //   const shippingPageWrap = {
// //     width: "100%",
// //     maxWidth: "1300px",
// //   };

// //   const shippingHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "12px",
// //     marginBottom: "24px",
// //     flexWrap: "wrap",
// //   };

// //   const shippingTitle = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     color: "#222",
// //     margin: 0,
// //   };

// //   const shippingSubTitle = {
// //     fontSize: "14px",
// //     color: "#666",
// //     marginTop: "6px",
// //   };

// //   const shippingCard = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "12px",
// //     padding: "20px",
// //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// //     marginBottom: "20px",
// //   };

// //   const shippingFilterHeader = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     color: "#2b2b2b",
// //     marginBottom: "18px",
// //   };

// //   const shippingFilterGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
// //     gap: "14px",
// //     alignItems: "end",
// //   };

// //   const tableWrap = {
// //     width: "100%",
// //     overflowX: "auto",
// //   };

// //   const table = {
// //     width: "100%",
// //     borderCollapse: "collapse",
// //     minWidth: "1000px",
// //   };

// //   const th = {
// //     textAlign: "left",
// //     padding: "14px 14px",
// //     fontSize: "14px",
// //     color: "#333",
// //     borderBottom: "1px solid #e7dff0",
// //     fontWeight: "700",
// //   };

// //   const td = {
// //     padding: "16px 14px",
// //     fontSize: "14px",
// //     color: "#333",
// //     borderBottom: "1px solid #f0eaf5",
// //     verticalAlign: "middle",
// //   };

// //   const linkText = {
// //     color: "#6f3f8f",
// //     fontWeight: "600",
// //     textDecoration: "none",
// //     cursor: "pointer",
// //   };

// //   const iconBtnRow = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "14px",
// //   };

// //   const iconBtn = {
// //     background: "transparent",
// //     border: "none",
// //     cursor: "pointer",
// //     fontSize: "16px",
// //     color: "#5d3d75",
// //     padding: 0,
// //   };

// //   const clearBtn = {
// //     ...addButton,
// //     background: "#fff",
// //     color: "#5d3d75",
// //     border: "1px solid #d8c9e4",
// //   };

// //   const productsPageWrap = {
// //     width: "100%",
// //     maxWidth: "1300px",
// //   };

// //   const productsHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "12px",
// //     marginBottom: "24px",
// //     flexWrap: "wrap",
// //   };

// //   const productsTitle = {
// //     fontSize: "28px",
// //     fontWeight: "700",
// //     color: "#222",
// //     margin: 0,
// //   };

// //   const productsSubTitle = {
// //     fontSize: "14px",
// //     color: "#666",
// //     marginTop: "6px",
// //   };

// //   const productsActionRow = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     flexWrap: "wrap",
// //   };

// //   const filterSelect = {
// //     height: "44px",
// //     minWidth: "180px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "0 12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     background: "#fff",
// //     color: "#333",
// //     boxSizing: "border-box",
// //   };

// //   const addProductFormCard = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "16px",
// //     padding: "28px",
// //     boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
// //     marginBottom: "24px",
// //   };

// //   const productsGrid = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
// //     gap: "22px",
// //     alignItems: "stretch",
// //   };

// //   const productCard = {
// //     background: "#fff",
// //     border: "1px solid #e7dff0",
// //     borderRadius: "18px",
// //     overflow: "hidden",
// //     boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
// //     display: "flex",
// //     flexDirection: "column",
// //     height: "100%",
// //   };

// //   const productImage = {
// //     width: "100%",
// //     height: "220px",
// //     objectFit: "cover",
// //     background: "#f3e9fb",
// //     display: "block",
// //     flexShrink: 0,
// //   };

// //   const productInfo = {
// //     padding: "16px",
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "12px",
// //     flex: 1,
// //   };

// //   const productHeaderRow = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "12px",
// //   };

// //   const productName = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     color: "#222",
// //     margin: 0,
// //     lineHeight: "1.4",
// //     flex: 1,
// //   };

// //   const deleteProductButton = {
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

// //   const productPrice = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     color: "#6f3f8f",
// //     margin: 0,
// //   };

// //   const stockRow = {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "8px",
// //   };

// //   const stockLabel = {
// //     fontSize: "13px",
// //     color: "#555",
// //     fontWeight: "600",
// //   };

// //   const stockActionRow = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "10px",
// //     flexWrap: "wrap",
// //   };

// //   const stockValueText = {
// //     fontSize: "15px",
// //     fontWeight: "700",
// //     color: "#222",
// //     minWidth: "50px",
// //   };

// //   const stockInput = {
// //     height: "42px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     padding: "0 12px",
// //     fontSize: "14px",
// //     outline: "none",
// //     width: "120px",
// //     boxSizing: "border-box",
// //   };

// //   const updateStockButton = {
// //     background: "#6f3f8f",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     padding: "10px 14px",
// //     fontSize: "13px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //   };

// //   const cancelStockButton = {
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

// //   const formHeaderRow = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     gap: "12px",
// //     marginBottom: "8px",
// //   };

// //   const closeButton = {
// //     width: "38px",
// //     height: "38px",
// //     borderRadius: "50%",
// //     border: "none",
// //     background: "#f3e9fb",
// //     color: "#5d3d75",
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //     flexShrink: 0,
// //   };

// //   const modalOverlay = {
// //     position: "fixed",
// //     inset: 0,
// //     background: "rgba(47, 36, 56, 0.45)",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: "20px",
// //     zIndex: 999,
// //   };

// //   const modalCard = {
// //     width: "100%",
// //     maxWidth: "460px",
// //     background: "#fff",
// //     borderRadius: "16px",
// //     padding: "26px",
// //     boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
// //   };

// //   const modalTitle = {
// //     fontSize: "22px",
// //     fontWeight: "700",
// //     color: "#222",
// //     marginBottom: "10px",
// //   };

// //   const modalText = {
// //     fontSize: "14px",
// //     color: "#555",
// //     lineHeight: "1.6",
// //     marginBottom: "20px",
// //   };

// //   const modalActionRow = {
// //     display: "flex",
// //     justifyContent: "flex-end",
// //     gap: "10px",
// //     flexWrap: "wrap",
// //   };

// //   const modalCancelButton = {
// //     background: "#fff",
// //     color: "#5d3d75",
// //     border: "1px solid #d8c9e4",
// //     borderRadius: "8px",
// //     padding: "10px 16px",
// //     fontSize: "14px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //   };

// //   const modalDeleteButton = {
// //     background: "#b33939",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     padding: "10px 16px",
// //     fontSize: "14px",
// //     fontWeight: "700",
// //     cursor: "pointer",
// //   };

// //   const StatCard = ({ title, val, icon }) => (
// //     <div style={statCard}>
// //       <div style={statIconCircle}>{icon}</div>
// //       <div style={statTitle}>{title}</div>
// //       <div style={statValue}>{val}</div>
// //     </div>
// //   );

// //   return (
// //     <div style={page}>
// //       <aside style={sidebar}>
// //         <div style={sidebarTitle}>Admin Panel</div>

// //         {SIDEBAR_ITEMS.map((item) => (
// //           <div
// //             key={item.key}
// //             style={menuItem(activeSection === item.key)}
// //             onClick={() => {
// //               setActiveSection(item.key);
// //               if (item.key !== "products") {
// //                 setShowAddProductForm(false);
// //               }
// //             }}
// //           >
// //             {item.label}
// //           </div>
// //         ))}
// //       </aside>

// //       <main style={main}>
// //         {activeSection === "dashboard" && (
// //           <div style={formCard}>
// //             <div style={dashboardHeader}>
// //               <div>
// //                 <h1 style={dashboardTitle}>Dashboard Overview</h1>
// //                 <div style={dashboardSubTitle}>
// //                   Clean and premium admin dashboard for jewellery management
// //                 </div>
// //               </div>
// //               <div style={welcomeText}>Welcome back, Administrator</div>
// //             </div>

// //             <div style={dashboardStatsGrid}>
// //               <StatCard
// //                 title="Total Customers"
// //                 val={dashboardStats.totalCustomers}
// //                 icon="👥"
// //               />
// //               <StatCard
// //                 title="Total Profit"
// //                 val={`₹${dashboardStats.totalProfit.toLocaleString()}`}
// //                 icon="💰"
// //               />
// //               <StatCard
// //                 title="Active Users"
// //                 val={dashboardStats.activeUsers}
// //                 icon="📈"
// //               />
// //               <StatCard
// //                 title="Active Shipment"
// //                 val={dashboardStats.activeShipment}
// //                 icon="📦"
// //               />
// //               <StatCard
// //                 title="Delivered"
// //                 val={dashboardStats.delivered}
// //                 icon="✅"
// //               />
// //               <StatCard
// //                 title="Gold Available"
// //                 val={dashboardStats.goldCount}
// //                 icon="✨"
// //               />
// //               <StatCard
// //                 title="Silver Available"
// //                 val={dashboardStats.silverCount}
// //                 icon="🔘"
// //               />
// //             </div>
// //           </div>
// //         )}

// //         {activeSection === "products" && (
// //           <div style={productsPageWrap}>
// //             <div style={productsHeader}>
// //               <div>
// //                 <h1 style={productsTitle}>Products</h1>
// //                 <div style={productsSubTitle}>
// //                   Manage and view all uploaded products
// //                 </div>
// //               </div>

// //               <div style={productsActionRow}>
// //                 <select
// //                   value={productFilterType}
// //                   onChange={(e) => setProductFilterType(e.target.value)}
// //                   style={filterSelect}
// //                 >
// //                   <option value="all">All Products</option>
// //                   <option value="gold">Gold</option>
// //                   <option value="silver">Silver</option>
// //                 </select>

// //                 <button
// //                   type="button"
// //                   style={addButton}
// //                   onClick={() => setShowAddProductForm((prev) => !prev)}
// //                 >
// //                   {showAddProductForm ? "Close Form" : "+ Add Product"}
// //                 </button>
// //               </div>
// //             </div>

// //             {showAddProductForm ? (
// //               <div style={addProductFormCard}>
// //                 <div style={formHeaderRow}>
// //                   <div style={heading}>Add Product</div>

// //                   <button
// //                     type="button"
// //                     style={closeButton}
// //                     onClick={() => setShowAddProductForm(false)}
// //                   >
// //                     ✕
// //                   </button>
// //                 </div>

// //                 <form onSubmit={handleSubmit}>
// //                   <div style={grid}>
// //                     <div style={fieldWrap}>
// //                       <label style={label}>Product Name</label>
// //                       <input
// //                         type="text"
// //                         name="productName"
// //                         value={formData.productName}
// //                         onChange={handleInputChange}
// //                         placeholder="Enter product name"
// //                         style={input}
// //                       />
// //                     </div>

// //                     <div style={fieldWrap}>
// //                       <label style={label}>Metal Type</label>
// //                       <select
// //                         name="metalType"
// //                         value={formData.metalType}
// //                         onChange={handleInputChange}
// //                         style={input}
// //                       >
// //                         <option value="">Select metal type</option>
// //                         <option value="Gold">Gold</option>
// //                         <option value="Silver">Silver</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div style={descriptionWrap}>
// //                     <label style={label}>Product Description</label>
// //                     <textarea
// //                       name="productDescription"
// //                       value={formData.productDescription}
// //                       onChange={handleInputChange}
// //                       placeholder="Enter product description"
// //                       style={textarea}
// //                     />
// //                   </div>

// //                   {formData.metalType && (
// //                     <div style={detailGrid}>
// //                       <div style={fieldWrap}>
// //                         <label style={label}>Purity</label>
// //                         <input
// //                           type="text"
// //                           name="purity"
// //                           value={formData.purity}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter purity"
// //                           style={input}
// //                         />
// //                       </div>

// //                       <div style={fieldWrap}>
// //                         <label style={label}>Weight</label>
// //                         <input
// //                           type="number"
// //                           name="weight"
// //                           value={formData.weight}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter weight"
// //                           style={input}
// //                         />
// //                       </div>

// //                       <div style={fieldWrap}>
// //                         <label style={label}>Price Per Gram</label>
// //                         <input
// //                           type="number"
// //                           name="pricePerGram"
// //                           value={formData.pricePerGram}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter price per gram"
// //                           style={input}
// //                         />
// //                       </div>

// //                       <div style={fieldWrap}>
// //                         <label style={label}>Making Charges</label>
// //                         <input
// //                           type="number"
// //                           name="makingCharges"
// //                           value={formData.makingCharges}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter making charges"
// //                           style={input}
// //                         />
// //                       </div>

// //                       <div style={fieldWrap}>
// //                         <label style={label}>Offer Price</label>
// //                         <input
// //                           type="number"
// //                           name="offerPrice"
// //                           value={formData.offerPrice}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter offer price"
// //                           style={input}
// //                         />
// //                       </div>

// //                       <div style={fieldWrap}>
// //                         <label style={label}>Total Price</label>
// //                         <input
// //                           type="number"
// //                           name="totalPrice"
// //                           value={formData.totalPrice}
// //                           readOnly
// //                           placeholder="Auto calculated"
// //                           style={readonlyInput}
// //                         />
// //                       </div>

// //                       <div style={fieldWrap}>
// //                         <label style={label}>Stock</label>
// //                         <input
// //                           type="number"
// //                           name="stock"
// //                           value={formData.stock}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter stock"
// //                           style={input}
// //                         />
// //                       </div>
// //                     </div>
// //                   )}

// //                   <div style={sectionTitle}>Final Photo Upload</div>

// //                   <div style={fieldWrap}>
// //                     <label style={label}>Upload Product Images</label>
// //                     <input
// //                       ref={fileInputRef}
// //                       type="file"
// //                       accept="image/*"
// //                       multiple
// //                       onChange={handleImageChange}
// //                       style={fileInput}
// //                     />
// //                     <div style={hintText}>
// //                       Drag the uploaded images to arrange order. The first image
// //                       will be the main image.
// //                     </div>
// //                   </div>

// //                   {previews.length > 0 && (
// //                     <div style={previewWrap}>
// //                       <div style={previewGrid}>
// //                         {previews.map((img, index) => (
// //                           <div
// //                             key={img.id}
// //                             style={previewCard}
// //                             draggable
// //                             onDragStart={() => handleDragStart(index)}
// //                             onDragEnter={() => handleDragEnter(index)}
// //                             onDragOver={(e) => e.preventDefault()}
// //                             onDrop={handleDrop}
// //                             onDragEnd={handleDragEnd}
// //                           >
// //                             <img
// //                               src={img.src}
// //                               alt={`Preview ${index + 1}`}
// //                               style={previewImage}
// //                             />

// //                             <div style={previewOrder}>
// //                               Image {index + 1}
// //                               {index === 0 ? " (Main image)" : ""}
// //                             </div>

// //                             <div style={actionRow}>
// //                               <button
// //                                 type="button"
// //                                 style={removeButton}
// //                                 onClick={() => removeImage(index)}
// //                               >
// //                                 Remove
// //                               </button>
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}

// //                   <button type="submit" style={submitButton}>
// //                     Save Product
// //                   </button>
// //                 </form>
// //               </div>
// //             ) : filteredProducts.length > 0 ? (
// //               <div style={productsGrid}>
// //                 {filteredProducts.map((product) => {
// //                   const mainImage = product.images?.[0] || "";

// //                   return (
// //                     <div key={product.id} style={productCard}>
// //                       {mainImage ? (
// //                         <img
// //                           src={mainImage}
// //                           alt={product.name}
// //                           style={productImage}
// //                         />
// //                       ) : (
// //                         <div
// //                           style={{
// //                             ...productImage,
// //                             display: "flex",
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                             color: "#8b6aa3",
// //                             fontWeight: "700",
// //                           }}
// //                         >
// //                           No Image
// //                         </div>
// //                       )}

// //                       <div style={productInfo}>
// //                         <div style={productHeaderRow}>
// //                           <div style={productName}>{product.name}</div>

// //                           <button
// //                             type="button"
// //                             style={deleteProductButton}
// //                             onClick={() => confirmDeleteProduct(product.id)}
// //                           >
// //                             Remove Product
// //                           </button>
// //                         </div>

// //                         <div style={productPrice}>
// //                           ₹{Number(product.totalPrice || 0).toLocaleString()}
// //                         </div>

// //                         <div style={stockRow}>
// //                           <label style={stockLabel}>Stock</label>

// //                           {editingStockId === product.id ? (
// //                             <div style={stockActionRow}>
// //                               <input
// //                                 type="number"
// //                                 value={editingStockValue}
// //                                 onChange={(e) =>
// //                                   setEditingStockValue(e.target.value)
// //                                 }
// //                                 placeholder="Enter stock"
// //                                 style={stockInput}
// //                               />

// //                               <button
// //                                 type="button"
// //                                 style={updateStockButton}
// //                                 onClick={() => saveStockEdit(product.id)}
// //                               >
// //                                 Save
// //                               </button>

// //                               <button
// //                                 type="button"
// //                                 style={cancelStockButton}
// //                                 onClick={() => {
// //                                   setEditingStockId(null);
// //                                   setEditingStockValue("");
// //                                 }}
// //                               >
// //                                 Cancel
// //                               </button>
// //                             </div>
// //                           ) : (
// //                             <div style={stockActionRow}>
// //                               <div style={stockValueText}>
// //                                 {product.stock ?? 0}
// //                               </div>

// //                               <button
// //                                 type="button"
// //                                 style={updateStockButton}
// //                                 onClick={() => startStockEdit(product)}
// //                               >
// //                                 Update
// //                               </button>
// //                             </div>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             ) : (
// //               <div style={noProductsBox}>
// //                 {productFilterType === "all" ? (
// //                   <>
// //                     No products uploaded yet. Click <strong>Add Product</strong>{" "}
// //                     to create your first product.
// //                   </>
// //                 ) : (
// //                   <>No {productFilterType} products found.</>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {activeSection === "shipping" && (
// //           <div style={shippingPageWrap}>
// //             <div style={shippingHeader}>
// //               <div>
// //                 <h1 style={shippingTitle}>Shipping Management</h1>
// //                 <div style={shippingSubTitle}>
// //                   Track and manage all shipments
// //                 </div>
// //               </div>

// //               <button type="button" style={addButton}>
// //                 + Create Shipment
// //               </button>
// //             </div>

// //             <div style={shippingCard}>
// //               <div style={shippingFilterHeader}>Filters</div>

// //               <div style={shippingFilterGrid}>
// //                 <div style={fieldWrap}>
// //                   <label style={label}>Status</label>
// //                   <select
// //                     name="status"
// //                     value={shippingFilters.status}
// //                     onChange={handleShippingFilterChange}
// //                     style={input}
// //                   >
// //                     <option value="">Select status</option>
// //                     <option value="Shipment Created">Shipment Created</option>
// //                     <option value="Shipping Estimated by Admin">
// //                       Shipping Estimated by Admin
// //                     </option>
// //                     <option value="Pending Shipping Estimation">
// //                       Pending Shipping Estimation
// //                     </option>
// //                   </select>
// //                 </div>

// //                 <div style={fieldWrap}>
// //                   <label style={label}>Shipment Type</label>
// //                   <select
// //                     name="shipmentType"
// //                     value={shippingFilters.shipmentType}
// //                     onChange={handleShippingFilterChange}
// //                     style={input}
// //                   >
// //                     <option value="">Select shipment type</option>
// //                     <option value="Physical Delivery">
// //                       Physical Delivery
// //                     </option>
// //                     <option value="Ship Commodity To Gold App">
// //                       Ship Commodity To Gold App
// //                     </option>
// //                   </select>
// //                 </div>

// //                 <button
// //                   type="button"
// //                   style={clearBtn}
// //                   onClick={clearShippingFilters}
// //                 >
// //                   Clear
// //                 </button>
// //               </div>
// //             </div>

// //             <div style={shippingCard}>
// //               <div style={{ ...shippingFilterHeader, marginBottom: "16px" }}>
// //                 Shipments ({filteredShipments.length})
// //               </div>

// //               <div style={tableWrap}>
// //                 <table style={table}>
// //                   <thead>
// //                     <tr>
// //                       <th style={th}>S.NO.</th>
// //                       <th style={th}>User</th>
// //                       <th style={th}>Commodity</th>
// //                       <th style={th}>Weight</th>
// //                       <th style={th}>Type</th>
// //                       <th style={th}>Shipment Id</th>
// //                       <th style={th}>Status</th>
// //                       <th style={th}>Actions</th>
// //                     </tr>
// //                   </thead>

// //                   <tbody>
// //                     {filteredShipments.length > 0 ? (
// //                       filteredShipments.map((item, index) => (
// //                         <tr key={item.id}>
// //                           <td style={td}>{index + 1}</td>
// //                           <td style={td}>{item.user}</td>
// //                           <td style={td}>
// //                             <span style={linkText}>{item.commodity}</span>
// //                           </td>
// //                           <td style={td}>{item.weight}</td>
// //                           <td style={td}>
// //                             <span style={linkText}>{item.type}</span>
// //                           </td>
// //                           <td style={td}>{item.shipmentId}</td>
// //                           <td style={td}>
// //                             <span style={getStatusBadgeStyle(item.status)}>
// //                               {item.status}
// //                             </span>
// //                           </td>
// //                           <td style={td}>
// //                             <div style={iconBtnRow}>
// //                               <button type="button" style={iconBtn} title="View">
// //                                 👁️
// //                               </button>
// //                               <button type="button" style={iconBtn} title="Edit">
// //                                 ✏️
// //                               </button>
// //                               <button
// //                                 type="button"
// //                                 style={iconBtn}
// //                                 title="Delete"
// //                               >
// //                                 🗑️
// //                               </button>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       ))
// //                     ) : (
// //                       <tr>
// //                         <td style={td} colSpan={8}>
// //                           No shipments found.
// //                         </td>
// //                       </tr>
// //                     )}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {!["dashboard", "products", "shipping"].includes(activeSection) && (
// //           <div style={placeholderCard}>
// //             {SIDEBAR_ITEMS.find((item) => item.key === activeSection)?.label ||
// //               "Section"}{" "}
// //             page
// //           </div>
// //         )}
// //       </main>

// //       {deleteProductId !== null && (
// //         <div style={modalOverlay}>
// //           <div style={modalCard}>
// //             <div style={modalTitle}>Remove Product?</div>
// //             <div style={modalText}>
// //               This action will permanently delete the selected product from your
// //               product list.
// //             </div>

// //             <div style={modalActionRow}>
// //               <button
// //                 type="button"
// //                 style={modalCancelButton}
// //                 onClick={() => setDeleteProductId(null)}
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="button"
// //                 style={modalDeleteButton}
// //                 onClick={handleDeleteProduct}
// //               >
// //                 Yes, Remove
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






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
//       const cleanedMetals = [...new Set(metals.map((item) => formatMetalName(item)).filter(Boolean))];
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
//         (prev.weight !== "" ||
//           prev.pricePerGram !== "" ||
//           prev.makingCharges !== "" ||
//           prev.offerPrice !== "")
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
//         ? "#efe7f8"
//         : "#f8f1fc",
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

//   const metalCardTitle = {
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#222",
//     marginBottom: "12px",
//   };

//   const metalCardCount = {
//     fontSize: "15px",
//     color: "#6f3f8f",
//     fontWeight: "600",
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
//                           type="text"
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
//                     <div style={metalCardTitle}>{metal}</div>
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

  useEffect(() => {
    loadProductsFromStorage();
    loadMetalsFromStorage();
  }, []);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

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
      totalCustomers: storedUsers.length,
      totalProfit: profit,
      activeUsers:
        storedUsers.filter((u) => u.status === "active").length ||
        Math.floor(storedUsers.length * 0.4),
      activeShipment: 12,
      delivered: 85,
      goldCount: gold,
      silverCount: silver,
    });
  }, [activeSection, storedProducts]);

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

  const readonlyInput = {
    ...input,
    background: "#f4f0f8",
    color: "#5d3d75",
    fontWeight: "700",
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

  const placeholderCard = {
    ...formCard,
    textAlign: "center",
    color: "#555",
    fontSize: "18px",
    padding: "60px 20px",
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

  const StatCard = ({ title, val, icon }) => (
    <div style={statCard}>
      <div style={statIconCircle}>{icon}</div>
      <div style={statTitle}>{title}</div>
      <div style={statValue}>{val}</div>
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
                          style={readonlyInput}
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

        {!["dashboard", "products", "shipping", "metal-types"].includes(activeSection) && (
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