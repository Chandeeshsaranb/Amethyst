// // import React, { useEffect, useRef, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import Mainbar from "./Mainbar";

// // const DEFAULT_METALS = [];
// // const DEFAULT_METAL_PURITIES = {};

// // function formatCurrency(value) {
// //   return `$${Number(value || 0).toLocaleString("en-US", {
// //     minimumFractionDigits: 0,
// //     maximumFractionDigits: 2,
// //   })}`;
// // }

// // function formatDateTime(dateString) {
// //   if (!dateString) return "-";
// //   const date = new Date(dateString);
// //   return date.toLocaleString("en-US", {
// //     day: "2-digit",
// //     month: "2-digit",
// //     year: "numeric",
// //     hour: "numeric",
// //     minute: "2-digit",
// //   });
// // }

// // function getInitials(name = "") {
// //   return name
// //     .split(" ")
// //     .filter(Boolean)
// //     .slice(0, 2)
// //     .map((word) => word[0]?.toUpperCase())
// //     .join("");
// // }

// // function createDemoUsers() {
// //   return [
// //     {
// //       id: 1,
// //       type: "individual",
// //       name: "Keval Parashar",
// //       email: "keval@example.com",
// //       location: "New York, USA",
// //       crmType: "Trader",
// //       leadStatus: "Converted",
// //       owner: "Super Admin",
// //       totalPurchases: 15420.5,
// //       status: "active",
// //       kyc: "approved",
// //       ira: "Active",
// //       isLead: true,
// //       myLead: true,
// //       phone: "+1 555 210 7654",
// //       tags: ["App User"],
// //     },
// //     {
// //       id: 2,
// //       type: "individual",
// //       name: "Animi GSWM",
// //       email: "animi@example.com",
// //       location: "London, UK",
// //       crmType: "Trader",
// //       leadStatus: "Converted",
// //       owner: "John Manager",
// //       totalPurchases: 28750,
// //       status: "active",
// //       kyc: "approved",
// //       ira: "None",
// //       isLead: true,
// //       myLead: false,
// //       phone: "+44 7700 900001",
// //       tags: ["App User"],
// //     },
// //     {
// //       id: 3,
// //       type: "individual",
// //       name: "Shubh",
// //       email: "shubh@example.com",
// //       location: "Mumbai, India",
// //       crmType: "Lead",
// //       leadStatus: "Contacted",
// //       owner: "John Manager",
// //       totalPurchases: 8965.25,
// //       status: "active",
// //       kyc: "pending",
// //       ira: "None",
// //       isLead: true,
// //       myLead: true,
// //       phone: "+91 9876543210",
// //       tags: ["CRM Entry"],
// //     },
// //   ];
// // }

// // function createDemoAdminUsers() {
// //   return [
// //     {
// //       id: 101,
// //       name: "Super Admin",
// //       email: "admin@thegoldapp.com",
// //       role: "super admin",
// //       status: "active",
// //       permissions: {
// //         dashboard: true,
// //         users: true,
// //         categories: true,
// //         products: true,
// //         shipping: true,
// //         communication: true,
// //         feeSettings: true,
// //         policies: true,
// //       },
// //       lastLogin: "2026-03-12T10:30:00",
// //       createdAt: "2025-12-15T18:00:00",
// //     },
// //     {
// //       id: 102,
// //       name: "John Manager",
// //       email: "john@thegoldapp.com",
// //       role: "manager",
// //       status: "active",
// //       permissions: {
// //         dashboard: true,
// //         users: true,
// //         categories: false,
// //         products: true,
// //         shipping: true,
// //         communication: true,
// //         feeSettings: false,
// //         policies: false,
// //       },
// //       lastLogin: "2026-03-11T20:00:00",
// //       createdAt: "2025-12-22T12:20:00",
// //     },
// //   ];
// // }

// // export default function AdminPage() {
// //   const navigate = useNavigate();

// //   const [activeSection, setActiveSection] = useState("dashboard");

// //   const [showAddProductForm, setShowAddProductForm] = useState(false);
// //   const [productFilterType, setProductFilterType] = useState("all");
// //   const [editingStockId, setEditingStockId] = useState(null);
// //   const [editingStockValue, setEditingStockValue] = useState("");
// //   const [deleteProductId, setDeleteProductId] = useState(null);
// //   const [isEditMode, setIsEditMode] = useState(false);

// //   const [storedMetals, setStoredMetals] = useState(DEFAULT_METALS);
// //   const [metalPurities, setMetalPurities] = useState(() => {
// //     const saved = localStorage.getItem("adminMetalPurities");
// //     if (saved) {
// //       try {
// //         return JSON.parse(saved);
// //       } catch {
// //         return DEFAULT_METAL_PURITIES;
// //       }
// //     }
// //     return DEFAULT_METAL_PURITIES;
// //   });

// //   const [showAddMetalModal, setShowAddMetalModal] = useState(false);
// //   const [newMetalName, setNewMetalName] = useState("");
// //   const [deleteMetalName, setDeleteMetalName] = useState(null);

// //   const [showPurityInputFor, setShowPurityInputFor] = useState(null);
// //   const [purityInputs, setPurityInputs] = useState({});

// //   const fileInputRef = useRef(null);
// //   const dragItemIndex = useRef(null);
// //   const dragOverItemIndex = useRef(null);

// //   const [users, setUsers] = useState([]);
// //   const [userTab, setUserTab] = useState("all");
// //   const [userFilters, setUserFilters] = useState({
// //     name: "",
// //     email: "",
// //     location: "",
// //     status: "",
// //     kyc: "",
// //     crmType: "",
// //     leadStatus: "",
// //     type: "",
// //     leadsOnly: false,
// //     myLeads: false,
// //   });
// //   const [showUserModal, setShowUserModal] = useState(false);
// //   const [editingUserId, setEditingUserId] = useState(null);
// //   const [userForm, setUserForm] = useState({
// //     name: "",
// //     email: "",
// //     location: "",
// //     type: "individual",
// //     crmType: "Lead",
// //     leadStatus: "New",
// //     owner: "Super Admin",
// //     totalPurchases: "",
// //     status: "active",
// //     kyc: "pending",
// //     ira: "None",
// //     isLead: true,
// //     myLead: false,
// //     phone: "",
// //     tags: "App User",
// //   });

// //   const [communicationSettings, setCommunicationSettings] = useState(() => {
// //     const saved = localStorage.getItem("adminCommunicationSettings");
// //     return saved
// //       ? JSON.parse(saved)
// //       : {
// //           whatsapp: "",
// //           email: "",
// //           supportMessage: "",
// //         };
// //   });

// //   const [adminUsers, setAdminUsers] = useState(() => {
// //     const saved = localStorage.getItem("adminUsers");
// //     if (saved) {
// //       try {
// //         return JSON.parse(saved);
// //       } catch {
// //         return createDemoAdminUsers();
// //       }
// //     }
// //     return createDemoAdminUsers();
// //   });

// //   const [adminSearch, setAdminSearch] = useState("");
// //   const [selectedAdminId, setSelectedAdminId] = useState(null);
// //   const [showAdminModal, setShowAdminModal] = useState(false);
// //   const [editingAdminId, setEditingAdminId] = useState(null);
// //   const [adminForm, setAdminForm] = useState({
// //     name: "",
// //     email: "",
// //     role: "manager",
// //     status: "active",
// //     permissions: {
// //       dashboard: true,
// //       users: true,
// //       categories: false,
// //       products: true,
// //       shipping: false,
// //       communication: false,
// //       feeSettings: false,
// //       policies: false,
// //     },
// //   });

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
// //   ]);

// //   const page = {
// //     display: "flex",
// //     minHeight: "100vh",
// //     background: "#f6f4f8",
// //     fontFamily: "Arial, Helvetica, sans-serif",
// //   };

// //   const formatMetalName = (value) => {
// //     const trimmed = value.trim();
// //     if (!trimmed) return "";
// //     return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
// //   };

// //   const loadProductsFromStorage = () => {
// //     const products = JSON.parse(localStorage.getItem("adminProducts") || "[]");
// //     setStoredProducts(products);
// //     return products;
// //   };

// //   const loadMetalsFromStorage = () => {
// //     const metals = JSON.parse(localStorage.getItem("adminMetals") || "null");

// //     if (Array.isArray(metals) && metals.length > 0) {
// //       const cleanedMetals = [
// //         ...new Set(metals.map((item) => formatMetalName(item)).filter(Boolean)),
// //       ];
// //       setStoredMetals(cleanedMetals);
// //       localStorage.setItem("adminMetals", JSON.stringify(cleanedMetals));
// //       return cleanedMetals;
// //     }

// //     setStoredMetals([]);
// //     return [];
// //   };

// //   const saveUsers = (updatedUsers) => {
// //     setUsers(updatedUsers);
// //     localStorage.setItem("users", JSON.stringify(updatedUsers));
// //   };

// //   const saveAdminUsers = (updatedAdmins) => {
// //     setAdminUsers(updatedAdmins);
// //     localStorage.setItem("adminUsers", JSON.stringify(updatedAdmins));
// //     if (!updatedAdmins.find((item) => item.id === selectedAdminId)) {
// //       setSelectedAdminId(updatedAdmins[0]?.id || null);
// //     }
// //   };

// //   const saveMetalPurities = (updatedPurities) => {
// //     setMetalPurities(updatedPurities);
// //     localStorage.setItem("adminMetalPurities", JSON.stringify(updatedPurities));
// //   };

// //   const resetUserForm = () => {
// //     setUserForm({
// //       name: "",
// //       email: "",
// //       location: "",
// //       type: "individual",
// //       crmType: "Lead",
// //       leadStatus: "New",
// //       owner: "Super Admin",
// //       totalPurchases: "",
// //       status: "active",
// //       kyc: "pending",
// //       ira: "None",
// //       isLead: true,
// //       myLead: false,
// //       phone: "",
// //       tags: "App User",
// //     });
// //     setEditingUserId(null);
// //   };

// //   const resetAdminForm = () => {
// //     setAdminForm({
// //       name: "",
// //       email: "",
// //       role: "manager",
// //       status: "active",
// //       permissions: {
// //         dashboard: true,
// //         users: true,
// //         categories: false,
// //         products: true,
// //         shipping: false,
// //         communication: false,
// //         feeSettings: false,
// //         policies: false,
// //       },
// //     });
// //     setEditingAdminId(null);
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
// //     if (fileInputRef.current) fileInputRef.current.value = "";
// //   };

// //   const openAddUserModal = () => {
// //     resetUserForm();
// //     setShowUserModal(true);
// //   };

// //   const openEditUserModal = (user) => {
// //     setEditingUserId(user.id);
// //     setUserForm({
// //       name: user.name || "",
// //       email: user.email || "",
// //       location: user.location || "",
// //       type: user.type || "individual",
// //       crmType: user.crmType || "Lead",
// //       leadStatus: user.leadStatus || "New",
// //       owner: user.owner || "Super Admin",
// //       totalPurchases: user.totalPurchases || "",
// //       status: user.status || "active",
// //       kyc: user.kyc || "pending",
// //       ira: user.ira || "None",
// //       isLead: Boolean(user.isLead),
// //       myLead: Boolean(user.myLead),
// //       phone: user.phone || "",
// //       tags: (user.tags || []).join(", ") || "App User",
// //     });
// //     setShowUserModal(true);
// //   };

// //   const openAddAdminModal = () => {
// //     resetAdminForm();
// //     setShowAdminModal(true);
// //   };

// //   const openEditAdminModal = (admin) => {
// //     setEditingAdminId(admin.id);
// //     setAdminForm({
// //       name: admin.name || "",
// //       email: admin.email || "",
// //       role: admin.role || "manager",
// //       status: admin.status || "active",
// //       permissions: {
// //         dashboard: Boolean(admin.permissions?.dashboard),
// //         users: Boolean(admin.permissions?.users),
// //         categories: Boolean(admin.permissions?.categories),
// //         products: Boolean(admin.permissions?.products),
// //         shipping: Boolean(admin.permissions?.shipping),
// //         communication: Boolean(admin.permissions?.communication),
// //         feeSettings: Boolean(admin.permissions?.feeSettings),
// //         policies: Boolean(admin.permissions?.policies),
// //       },
// //     });
// //     setShowAdminModal(true);
// //   };

// //   const handleUserFormChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setUserForm((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   const handleAdminFormChange = (e) => {
// //     const { name, value } = e.target;
// //     setAdminForm((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleAdminPermissionChange = (key) => {
// //     setAdminForm((prev) => ({
// //       ...prev,
// //       permissions: {
// //         ...prev.permissions,
// //         [key]: !prev.permissions[key],
// //       },
// //     }));
// //   };

// //   const handleSaveUser = () => {
// //     if (!userForm.name.trim() || !userForm.email.trim() || !userForm.location.trim()) {
// //       alert("Please fill name, email and location.");
// //       return;
// //     }

// //     const payload = {
// //       id: editingUserId || Date.now(),
// //       name: userForm.name.trim(),
// //       email: userForm.email.trim(),
// //       location: userForm.location.trim(),
// //       type: userForm.type,
// //       crmType: userForm.crmType,
// //       leadStatus: userForm.leadStatus,
// //       owner: userForm.owner.trim() || "Super Admin",
// //       totalPurchases: Number(userForm.totalPurchases || 0),
// //       status: userForm.status,
// //       kyc: userForm.kyc,
// //       ira: userForm.ira,
// //       isLead: Boolean(userForm.isLead),
// //       myLead: Boolean(userForm.myLead),
// //       phone: userForm.phone.trim(),
// //       tags: userForm.tags
// //         .split(",")
// //         .map((item) => item.trim())
// //         .filter(Boolean),
// //     };

// //     const updatedUsers = editingUserId
// //       ? users.map((item) => (item.id === editingUserId ? payload : item))
// //       : [payload, ...users];

// //     saveUsers(updatedUsers);
// //     setShowUserModal(false);
// //     resetUserForm();
// //   };

// //   const handleSaveAdmin = () => {
// //     if (!adminForm.name.trim() || !adminForm.email.trim() || !adminForm.role.trim()) {
// //       alert("Please fill name, email and role.");
// //       return;
// //     }

// //     const payload = {
// //       id: editingAdminId || Date.now(),
// //       name: adminForm.name.trim(),
// //       email: adminForm.email.trim(),
// //       role: adminForm.role,
// //       status: adminForm.status,
// //       permissions: adminForm.permissions,
// //       createdAt: editingAdminId
// //         ? adminUsers.find((item) => item.id === editingAdminId)?.createdAt ||
// //           new Date().toISOString()
// //         : new Date().toISOString(),
// //       lastLogin: editingAdminId
// //         ? adminUsers.find((item) => item.id === editingAdminId)?.lastLogin ||
// //           new Date().toISOString()
// //         : new Date().toISOString(),
// //     };

// //     const updatedAdmins = editingAdminId
// //       ? adminUsers.map((item) => (item.id === editingAdminId ? payload : item))
// //       : [payload, ...adminUsers];

// //     saveAdminUsers(updatedAdmins);
// //     setSelectedAdminId(payload.id);
// //     setShowAdminModal(false);
// //     resetAdminForm();
// //   };

// //   const handleDeleteUser = (id) => {
// //     if (!window.confirm("Are you sure you want to delete this user?")) return;
// //     saveUsers(users.filter((item) => item.id !== id));
// //   };

// //   const handleDeleteAdmin = (id) => {
// //     if (!window.confirm("Are you sure you want to delete this admin user?")) return;
// //     saveAdminUsers(adminUsers.filter((item) => item.id !== id));
// //   };

// //   const handleToggleUserStatus = (id) => {
// //     saveUsers(
// //       users.map((item) =>
// //         item.id === id
// //           ? { ...item, status: item.status === "active" ? "inactive" : "active" }
// //           : item
// //       )
// //     );
// //   };

// //   const handleToggleAdminStatus = (id) => {
// //     saveAdminUsers(
// //       adminUsers.map((item) =>
// //         item.id === id
// //           ? { ...item, status: item.status === "active" ? "inactive" : "active" }
// //           : item
// //       )
// //     );
// //   };

// //   const exportUsersCSV = () => {
// //     const headers = [
// //       "Name",
// //       "Email",
// //       "Location",
// //       "Type",
// //       "CRM Type",
// //       "Lead Status",
// //       "Owner",
// //       "Total Purchases",
// //       "Status",
// //       "KYC",
// //       "IRA",
// //       "Phone",
// //     ];

// //     const rows = filteredUsers.map((user) => [
// //       user.name,
// //       user.email,
// //       user.location,
// //       user.type,
// //       user.crmType,
// //       user.leadStatus,
// //       user.owner,
// //       user.totalPurchases,
// //       user.status,
// //       user.kyc,
// //       user.ira,
// //       user.phone || "",
// //     ]);

// //     const csvContent = [headers, ...rows]
// //       .map((row) =>
// //         row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")
// //       )
// //       .join("\n");

// //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement("a");
// //     link.href = url;
// //     link.setAttribute("download", "users.csv");
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   const handleCommunicationSave = () => {
// //     localStorage.setItem(
// //       "adminCommunicationSettings",
// //       JSON.stringify(communicationSettings)
// //     );
// //     alert("Communication settings saved");
// //   };

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");

// //     if (!token || !loggedInUser) {
// //       navigate("/login");
// //       return;
// //     }

// //     const role = (loggedInUser.role || "").toLowerCase();
// //     const isAdmin =
// //       role.includes("admin") || role === "manager" || loggedInUser.isAdmin === true;

// //     if (!isAdmin) {
// //       navigate("/login");
// //       return;
// //     }

// //     const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
// //     if (!savedUsers.length) {
// //       localStorage.setItem("users", JSON.stringify(createDemoUsers()));
// //       setUsers(createDemoUsers());
// //     } else {
// //       setUsers(savedUsers);
// //     }

// //     loadProductsFromStorage();
// //     loadMetalsFromStorage();

// //     const savedPurities = localStorage.getItem("adminMetalPurities");
// //     if (!savedPurities) {
// //       localStorage.setItem("adminMetalPurities", JSON.stringify({}));
// //       setMetalPurities({});
// //     }

// //     setSelectedAdminId(adminUsers[0]?.id || null);
// //   }, [navigate]);

// //   useEffect(() => {
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
// //       totalCustomers: users.length,
// //       totalProfit: profit,
// //       activeUsers: users.filter((u) => u.status === "active").length,
// //       activeShipment: 12,
// //       delivered: 85,
// //       goldCount: gold,
// //       silverCount: silver,
// //     });
// //   }, [storedProducts, users]);

// //   useEffect(() => {
// //     const weight = Number(formData.weight) || 0;
// //     const pricePerGram = Number(formData.pricePerGram) || 0;
// //     const makingCharges = Number(formData.makingCharges) || 0;
// //     const offerPrice = Number(formData.offerPrice) || 0;

// //     const calculatedTotal = weight * pricePerGram + makingCharges - offerPrice;

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
// //       return { ...prev, totalPrice: nextTotal };
// //     });
// //   }, [
// //     formData.weight,
// //     formData.pricePerGram,
// //     formData.makingCharges,
// //     formData.offerPrice,
// //     formData.metalType,
// //   ]);

// //   const filteredUsers = users.filter((user) => {
// //     const matchesTab =
// //       userTab === "all"
// //         ? true
// //         : userTab === "individuals"
// //         ? user.type === "individual"
// //         : user.type === "business";

// //     return (
// //       matchesTab &&
// //       user.name?.toLowerCase().includes(userFilters.name.toLowerCase()) &&
// //       user.email?.toLowerCase().includes(userFilters.email.toLowerCase()) &&
// //       user.location?.toLowerCase().includes(userFilters.location.toLowerCase()) &&
// //       (userFilters.status ? user.status === userFilters.status : true) &&
// //       (userFilters.kyc ? user.kyc === userFilters.kyc : true) &&
// //       (userFilters.crmType ? user.crmType === userFilters.crmType : true) &&
// //       (userFilters.leadStatus ? user.leadStatus === userFilters.leadStatus : true) &&
// //       (userFilters.type ? user.type === userFilters.type : true) &&
// //       (userFilters.leadsOnly ? user.isLead : true) &&
// //       (userFilters.myLeads ? user.myLead : true)
// //     );
// //   });

// //   const filteredAdmins = adminUsers.filter((admin) => {
// //     const term = adminSearch.toLowerCase();
// //     return (
// //       admin.name?.toLowerCase().includes(term) ||
// //       admin.email?.toLowerCase().includes(term) ||
// //       admin.role?.toLowerCase().includes(term)
// //     );
// //   });

// //   const selectedAdmin =
// //     adminUsers.find((item) => item.id === selectedAdminId) || null;

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => {
// //       const updated = { ...prev, [name]: value };

// //       if (name === "metalType") {
// //         updated.purity = "";

// //         if (!value) {
// //           updated.weight = "";
// //           updated.pricePerGram = "";
// //           updated.makingCharges = "";
// //           updated.offerPrice = "";
// //           updated.totalPrice = "";
// //           updated.stock = "";
// //         }
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
// //     setDeleteProductId(null);
// //   };

// //   const handleAddMetal = () => {
// //     const formattedMetal = formatMetalName(newMetalName);

// //     if (!formattedMetal) {
// //       alert("Please enter a metal name.");
// //       return;
// //     }

// //     const alreadyExists = storedMetals.some(
// //       (metal) => metal.toLowerCase() === formattedMetal.toLowerCase()
// //     );

// //     if (alreadyExists) {
// //       alert("This metal already exists.");
// //       return;
// //     }

// //     const updatedMetals = [...storedMetals, formattedMetal];
// //     setStoredMetals(updatedMetals);
// //     localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));

// //     const updatedPurities = {
// //       ...metalPurities,
// //       [formattedMetal]: metalPurities[formattedMetal] || [],
// //     };
// //     saveMetalPurities(updatedPurities);

// //     setNewMetalName("");
// //     setShowAddMetalModal(false);
// //   };

// //   const addPurityToMetal = (metal) => {
// //     const newPurity = (purityInputs[metal] || "").trim();

// //     if (!newPurity) {
// //       alert("Please enter a purity value.");
// //       return;
// //     }

// //     const alreadyExists = (metalPurities[metal] || []).some(
// //       (item) => item.toLowerCase() === newPurity.toLowerCase()
// //     );

// //     if (alreadyExists) {
// //       alert("This purity already exists for " + metal);
// //       return;
// //     }

// //     const updatedPurities = {
// //       ...metalPurities,
// //       [metal]: [...(metalPurities[metal] || []), newPurity],
// //     };

// //     saveMetalPurities(updatedPurities);

// //     setPurityInputs((prev) => ({
// //       ...prev,
// //       [metal]: "",
// //     }));

// //     setShowPurityInputFor(null);
// //   };

// //   const confirmDeletePurity = (metal, purity) => {
// //     const purityUsedInProducts = storedProducts.some(
// //       (product) =>
// //         product.metalType?.toLowerCase() === metal.toLowerCase() &&
// //         product.purity?.toLowerCase() === purity.toLowerCase()
// //     );

// //     if (purityUsedInProducts) {
// //       alert("You cannot remove this purity because products are using it.");
// //       return;
// //     }

// //     const updatedPurities = {
// //       ...metalPurities,
// //       [metal]: (metalPurities[metal] || []).filter(
// //         (item) => item.toLowerCase() !== purity.toLowerCase()
// //       ),
// //     };

// //     saveMetalPurities(updatedPurities);
// //   };

// //   const confirmDeleteMetal = (metalName) => {
// //     const productCount = storedProducts.filter(
// //       (product) => product.metalType?.toLowerCase() === metalName.toLowerCase()
// //     ).length;

// //     if (productCount > 0) {
// //       alert("You cannot remove this metal because products are using it.");
// //       return;
// //     }

// //     setDeleteMetalName(metalName);
// //   };

// //   const handleDeleteMetal = () => {
// //     const updatedMetals = storedMetals.filter(
// //       (metal) => metal.toLowerCase() !== deleteMetalName.toLowerCase()
// //     );

// //     setStoredMetals(updatedMetals);
// //     localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));

// //     const updatedPurities = { ...metalPurities };
// //     delete updatedPurities[deleteMetalName];
// //     saveMetalPurities(updatedPurities);

// //     setDeleteMetalName(null);
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
// //       alert("Please fill all required product fields and upload at least one photo.");
// //       return;
// //     }

// //     const productData = {
// //       id: formData.id || Date.now(),
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
// //       createdAt: formData.id 
// //         ? storedProducts.find(p => p.id === formData.id)?.createdAt 
// //         : new Date().toISOString(),
// //       updatedAt: new Date().toISOString(),
// //     };

// //     let updatedProducts;
    
// //     if (formData.id) {
// //       // Edit existing product
// //       updatedProducts = storedProducts.map((product) =>
// //         product.id === formData.id ? productData : product
// //       );
// //       alert("Product updated successfully");
// //     } else {
// //       // Add new product
// //       updatedProducts = [...storedProducts, productData];
// //       alert("Product saved successfully");
// //     }

// //     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
// //     setStoredProducts(updatedProducts);
    
// //     // Reset form
// //     resetProductForm();
// //     setShowAddProductForm(false);
// //     setIsEditMode(false);
// //   };

// //   const handleShippingFilterChange = (e) => {
// //     const { name, value } = e.target;
// //     setShippingFilters((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const clearShippingFilters = () => {
// //     setShippingFilters({ status: "", shipmentType: "" });
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
// //     return product.metalType?.toLowerCase() === productFilterType.toLowerCase();
// //   });

// //   const getMetalProductCount = (metalName) => {
// //     return storedProducts.filter(
// //       (product) => product.metalType?.toLowerCase() === metalName.toLowerCase()
// //     ).length;
// //   };

// //   const getPurityProductCount = (metal, purity) => {
// //     return storedProducts.filter(
// //       (product) =>
// //         product.metalType?.toLowerCase() === metal.toLowerCase() &&
// //         product.purity?.toLowerCase() === purity.toLowerCase()
// //     ).length;
// //   };

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

// //   return (
// //     <div style={page}>
// //       <Sidebar
// //         activeSection={activeSection}
// //         setActiveSection={setActiveSection}
// //         setShowAddProductForm={setShowAddProductForm}
// //       />

// //       <Mainbar
// //         activeSection={activeSection}
// //         dashboardStats={dashboardStats}
// //         storedMetals={storedMetals}
// //         metalPurities={metalPurities}
// //         setShowAddMetalModal={setShowAddMetalModal}
// //         getMetalProductCount={getMetalProductCount}
// //         getPurityProductCount={getPurityProductCount}
// //         confirmDeleteMetal={confirmDeleteMetal}
// //         confirmDeletePurity={confirmDeletePurity}
// //         purityInputs={purityInputs}
// //         setPurityInputs={setPurityInputs}
// //         showPurityInputFor={showPurityInputFor}
// //         setShowPurityInputFor={setShowPurityInputFor}
// //         addPurityToMetal={addPurityToMetal}
// //         productFilterType={productFilterType}
// //         setProductFilterType={setProductFilterType}
// //         showAddProductForm={showAddProductForm}
// //         setShowAddProductForm={setShowAddProductForm}
// //         formData={formData}
// //         setFormData={setFormData}
// //         handleInputChange={handleInputChange}
// //         handleSubmit={handleSubmit}
// //         fileInputRef={fileInputRef}
// //         handleImageChange={handleImageChange}
// //         previews={previews}
// //         setPreviews={setPreviews}
// //         handleDragStart={handleDragStart}
// //         handleDragEnter={handleDragEnter}
// //         handleDrop={handleDrop}
// //         handleDragEnd={handleDragEnd}
// //         removeImage={removeImage}
// //         filteredProducts={filteredProducts}
// //         confirmDeleteProduct={confirmDeleteProduct}
// //         editingStockId={editingStockId}
// //         editingStockValue={editingStockValue}
// //         setEditingStockValue={setEditingStockValue}
// //         saveStockEdit={saveStockEdit}
// //         setEditingStockId={setEditingStockId}
// //         startStockEdit={startStockEdit}
// //         setIsEditMode={setIsEditMode}
// //         users={users}
// //         userTab={userTab}
// //         setUserTab={setUserTab}
// //         userFilters={userFilters}
// //         setUserFilters={setUserFilters}
// //         filteredUsers={filteredUsers}
// //         openAddUserModal={openAddUserModal}
// //         openEditUserModal={openEditUserModal}
// //         handleDeleteUser={handleDeleteUser}
// //         handleToggleUserStatus={handleToggleUserStatus}
// //         exportUsersCSV={exportUsersCSV}
// //         showUserModal={showUserModal}
// //         setShowUserModal={setShowUserModal}
// //         editingUserId={editingUserId}
// //         userForm={userForm}
// //         handleUserFormChange={handleUserFormChange}
// //         handleSaveUser={handleSaveUser}
// //         resetUserForm={resetUserForm}
// //         shippingFilters={shippingFilters}
// //         handleShippingFilterChange={handleShippingFilterChange}
// //         clearShippingFilters={clearShippingFilters}
// //         filteredShipments={filteredShipments}
// //         getStatusBadgeStyle={getStatusBadgeStyle}
// //         communicationSettings={communicationSettings}
// //         setCommunicationSettings={setCommunicationSettings}
// //         handleCommunicationSave={handleCommunicationSave}
// //         adminSearch={adminSearch}
// //         setAdminSearch={setAdminSearch}
// //         filteredAdmins={filteredAdmins}
// //         selectedAdminId={selectedAdminId}
// //         setSelectedAdminId={setSelectedAdminId}
// //         selectedAdmin={selectedAdmin}
// //         openAddAdminModal={openAddAdminModal}
// //         openEditAdminModal={openEditAdminModal}
// //         handleToggleAdminStatus={handleToggleAdminStatus}
// //         handleDeleteAdmin={handleDeleteAdmin}
// //         showAdminModal={showAdminModal}
// //         setShowAdminModal={setShowAdminModal}
// //         editingAdminId={editingAdminId}
// //         adminForm={adminForm}
// //         handleAdminFormChange={handleAdminFormChange}
// //         handleAdminPermissionChange={handleAdminPermissionChange}
// //         handleSaveAdmin={handleSaveAdmin}
// //         resetAdminForm={resetAdminForm}
// //         formatCurrency={formatCurrency}
// //         formatDateTime={formatDateTime}
// //         getInitials={getInitials}
// //       />

// //       {deleteProductId !== null && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             inset: 0,
// //             background: "rgba(47, 36, 56, 0.45)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             padding: "20px",
// //             zIndex: 999,
// //           }}
// //         >
// //           <div
// //             style={{
// //               width: "100%",
// //               maxWidth: "460px",
// //               background: "#fff",
// //               borderRadius: "16px",
// //               padding: "26px",
// //               boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
// //             }}
// //           >
// //             <div style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>
// //               Remove Product?
// //             </div>
// //             <div style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
// //               This action will permanently delete the selected product.
// //             </div>
// //             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
// //               <button onClick={() => setDeleteProductId(null)}>Cancel</button>
// //               <button onClick={handleDeleteProduct}>Yes, Remove</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {showAddMetalModal && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             inset: 0,
// //             background: "rgba(47, 36, 56, 0.45)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             padding: "20px",
// //             zIndex: 999,
// //           }}
// //         >
// //           <div
// //             style={{
// //               width: "100%",
// //               maxWidth: "460px",
// //               background: "#fff",
// //               borderRadius: "16px",
// //               padding: "26px",
// //               boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
// //             }}
// //           >
// //             <div style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>
// //               Add Metal
// //             </div>
// //             <input
// //               type="text"
// //               value={newMetalName}
// //               onChange={(e) => setNewMetalName(e.target.value)}
// //               placeholder="Enter metal name"
// //               style={{
// //                 height: "44px",
// //                 border: "1px solid #ddd",
// //                 borderRadius: "8px",
// //                 padding: "0 12px",
// //                 fontSize: "14px",
// //                 width: "100%",
// //                 marginBottom: "20px",
// //               }}
// //             />
// //             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
// //               <button onClick={() => setShowAddMetalModal(false)}>Cancel</button>
// //               <button onClick={handleAddMetal}>Add Metal</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {deleteMetalName !== null && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             inset: 0,
// //             background: "rgba(47, 36, 56, 0.45)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             padding: "20px",
// //             zIndex: 999,
// //           }}
// //         >
// //           <div
// //             style={{
// //               width: "100%",
// //               maxWidth: "460px",
// //               background: "#fff",
// //               borderRadius: "16px",
// //               padding: "26px",
// //               boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
// //             }}
// //           >
// //             <div style={{ fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>
// //               Remove Metal Type?
// //             </div>
// //             <div style={{ marginBottom: "20px" }}>
// //               This will remove <strong>{deleteMetalName}</strong>.
// //             </div>
// //             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
// //               <button onClick={() => setDeleteMetalName(null)}>Cancel</button>
// //               <button onClick={handleDeleteMetal}>Yes, Remove</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Mainbar from "./Mainbar";

// const DEFAULT_METALS = [];
// const DEFAULT_METAL_PURITIES = {};

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
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//     hour: "numeric",
//     minute: "2-digit",
//   });
// }

// function getInitials(name = "") {
//   return name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((word) => word[0]?.toUpperCase())
//     .join("");
// }

// function createDemoUsers() {
//   return [
//     {
//       id: 1,
//       type: "individual",
//       name: "Keval Parashar",
//       email: "keval@example.com",
//       location: "New York, USA",
//       crmType: "Trader",
//       leadStatus: "Converted",
//       owner: "Super Admin",
//       totalPurchases: 15420.5,
//       status: "active",
//       kyc: "approved",
//       ira: "Active",
//       isLead: true,
//       myLead: true,
//       phone: "+1 555 210 7654",
//       tags: ["App User"],
//     },
//     {
//       id: 2,
//       type: "individual",
//       name: "Animi GSWM",
//       email: "animi@example.com",
//       location: "London, UK",
//       crmType: "Trader",
//       leadStatus: "Converted",
//       owner: "John Manager",
//       totalPurchases: 28750,
//       status: "active",
//       kyc: "approved",
//       ira: "None",
//       isLead: true,
//       myLead: false,
//       phone: "+44 7700 900001",
//       tags: ["App User"],
//     },
//     {
//       id: 3,
//       type: "individual",
//       name: "Shubh",
//       email: "shubh@example.com",
//       location: "Mumbai, India",
//       crmType: "Lead",
//       leadStatus: "Contacted",
//       owner: "John Manager",
//       totalPurchases: 8965.25,
//       status: "active",
//       kyc: "pending",
//       ira: "None",
//       isLead: true,
//       myLead: true,
//       phone: "+91 9876543210",
//       tags: ["CRM Entry"],
//     },
//   ];
// }

// function createDemoAdminUsers() {
//   return [
//     {
//       id: 101,
//       name: "Super Admin",
//       email: "admin@thegoldapp.com",
//       role: "super admin",
//       status: "active",
//       permissions: {
//         dashboard: true,
//         users: true,
//         categories: true,
//         products: true,
//         shipping: true,
//         communication: true,
//         feeSettings: true,
//         policies: true,
//       },
//       lastLogin: "2026-03-12T10:30:00",
//       createdAt: "2025-12-15T18:00:00",
//     },
//     {
//       id: 102,
//       name: "John Manager",
//       email: "john@thegoldapp.com",
//       role: "manager",
//       status: "active",
//       permissions: {
//         dashboard: true,
//         users: true,
//         categories: false,
//         products: true,
//         shipping: true,
//         communication: true,
//         feeSettings: false,
//         policies: false,
//       },
//       lastLogin: "2026-03-11T20:00:00",
//       createdAt: "2025-12-22T12:20:00",
//     },
//   ];
// }

// export default function AdminPage() {
//   const navigate = useNavigate();

//   const [activeSection, setActiveSection] = useState("dashboard");

//   const [showAddProductForm, setShowAddProductForm] = useState(false);
//   const [productFilterType, setProductFilterType] = useState("all");
//   const [editingStockId, setEditingStockId] = useState(null);
//   const [editingStockValue, setEditingStockValue] = useState("");
//   const [deleteProductId, setDeleteProductId] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const [storedMetals, setStoredMetals] = useState(DEFAULT_METALS);
//   const [metalPurities, setMetalPurities] = useState(() => {
//     const saved = localStorage.getItem("adminMetalPurities");
//     if (saved) {
//       try { return JSON.parse(saved); } catch { return DEFAULT_METAL_PURITIES; }
//     }
//     return DEFAULT_METAL_PURITIES;
//   });

//   const [showAddMetalModal, setShowAddMetalModal] = useState(false);
//   const [newMetalName, setNewMetalName] = useState("");
//   const [deleteMetalName, setDeleteMetalName] = useState(null);

//   const [showPurityInputFor, setShowPurityInputFor] = useState(null);
//   const [purityInputs, setPurityInputs] = useState({});

//   // ── Category state ──────────────────────────────────────────────────
//   const [categories, setCategories] = useState(() => {
//     const saved = localStorage.getItem("adminCategories");
//     if (saved) {
//       try { return JSON.parse(saved); } catch { return []; }
//     }
//     return [];
//   });
//   const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [deleteCategoryName, setDeleteCategoryName] = useState(null);
//   // ───────────────────────────────────────────────────────────────────

//   const fileInputRef = useRef(null);
//   const dragItemIndex = useRef(null);
//   const dragOverItemIndex = useRef(null);

//   const [users, setUsers] = useState([]);
//   const [userTab, setUserTab] = useState("all");
//   const [userFilters, setUserFilters] = useState({
//     name: "",
//     email: "",
//     location: "",
//     status: "",
//     kyc: "",
//     crmType: "",
//     leadStatus: "",
//     type: "",
//     leadsOnly: false,
//     myLeads: false,
//   });
//   const [showUserModal, setShowUserModal] = useState(false);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [userForm, setUserForm] = useState({
//     name: "",
//     email: "",
//     location: "",
//     type: "individual",
//     crmType: "Lead",
//     leadStatus: "New",
//     owner: "Super Admin",
//     totalPurchases: "",
//     status: "active",
//     kyc: "pending",
//     ira: "None",
//     isLead: true,
//     myLead: false,
//     phone: "",
//     tags: "App User",
//   });

//   const [communicationSettings, setCommunicationSettings] = useState(() => {
//     const saved = localStorage.getItem("adminCommunicationSettings");
//     return saved ? JSON.parse(saved) : { whatsapp: "", email: "", supportMessage: "" };
//   });

//   const [adminUsers, setAdminUsers] = useState(() => {
//     const saved = localStorage.getItem("adminUsers");
//     if (saved) {
//       try { return JSON.parse(saved); } catch { return createDemoAdminUsers(); }
//     }
//     return createDemoAdminUsers();
//   });

//   const [adminSearch, setAdminSearch] = useState("");
//   const [selectedAdminId, setSelectedAdminId] = useState(null);
//   const [showAdminModal, setShowAdminModal] = useState(false);
//   const [editingAdminId, setEditingAdminId] = useState(null);
//   const [adminForm, setAdminForm] = useState({
//     name: "",
//     email: "",
//     role: "manager",
//     status: "active",
//     permissions: {
//       dashboard: true,
//       users: true,
//       categories: false,
//       products: true,
//       shipping: false,
//       communication: false,
//       feeSettings: false,
//       policies: false,
//     },
//   });

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
//     { id: 1, user: "Keval Parashar", commodity: "Gold(2gram)", weight: "2g", type: "Physical Delivery", shipmentId: "se-623135802", status: "Shipment Created" },
//     { id: 2, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Ship Commodity To Gold App", shipmentId: "se-622247522", status: "Shipment Created" },
//     { id: 3, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Physical Delivery", shipmentId: "se-622179834", status: "Shipping Estimated by Admin" },
//   ]);

//   const page = {
//     display: "flex",
//     minHeight: "100vh",
//     background: "#f6f4f8",
//     fontFamily: "Arial, Helvetica, sans-serif",
//   };

//   // ── Helpers ──────────────────────────────────────────────────────────
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
//     setStoredMetals([]);
//     return [];
//   };

//   const saveUsers = (updatedUsers) => {
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//   };

//   const saveAdminUsers = (updatedAdmins) => {
//     setAdminUsers(updatedAdmins);
//     localStorage.setItem("adminUsers", JSON.stringify(updatedAdmins));
//     if (!updatedAdmins.find((item) => item.id === selectedAdminId)) {
//       setSelectedAdminId(updatedAdmins[0]?.id || null);
//     }
//   };

//   const saveMetalPurities = (updatedPurities) => {
//     setMetalPurities(updatedPurities);
//     localStorage.setItem("adminMetalPurities", JSON.stringify(updatedPurities));
//   };

//   const saveCategories = (updated) => {
//     setCategories(updated);
//     localStorage.setItem("adminCategories", JSON.stringify(updated));
//   };

//   // ── Category handlers ────────────────────────────────────────────────
//   const handleAddCategory = () => {
//     const name = newCategoryName.trim();
//     if (!name) { alert("Please enter a category name."); return; }
//     const alreadyExists = categories.some((c) => c.toLowerCase() === name.toLowerCase());
//     if (alreadyExists) { alert("This category already exists."); return; }
//     saveCategories([...categories, name]);
//     setNewCategoryName("");
//     setShowAddCategoryModal(false);
//   };

//   const confirmDeleteCategory = (categoryName) => {
//     setDeleteCategoryName(categoryName);
//   };

//   const handleDeleteCategory = () => {
//     saveCategories(categories.filter((c) => c !== deleteCategoryName));
//     setDeleteCategoryName(null);
//   };
//   // ────────────────────────────────────────────────────────────────────

//   const resetUserForm = () => {
//     setUserForm({
//       name: "", email: "", location: "", type: "individual", crmType: "Lead",
//       leadStatus: "New", owner: "Super Admin", totalPurchases: "", status: "active",
//       kyc: "pending", ira: "None", isLead: true, myLead: false, phone: "", tags: "App User",
//     });
//     setEditingUserId(null);
//   };

//   const resetAdminForm = () => {
//     setAdminForm({
//       name: "", email: "", role: "manager", status: "active",
//       permissions: { dashboard: true, users: true, categories: false, products: true, shipping: false, communication: false, feeSettings: false, policies: false },
//     });
//     setEditingAdminId(null);
//   };

//   const resetProductForm = () => {
//     setFormData({ productName: "", metalType: "", purity: "", weight: "", pricePerGram: "", makingCharges: "", offerPrice: "", totalPrice: "", stock: "", productDescription: "" });
//     setPreviews([]);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const openAddUserModal = () => { resetUserForm(); setShowUserModal(true); };

//   const openEditUserModal = (user) => {
//     setEditingUserId(user.id);
//     setUserForm({
//       name: user.name || "", email: user.email || "", location: user.location || "",
//       type: user.type || "individual", crmType: user.crmType || "Lead",
//       leadStatus: user.leadStatus || "New", owner: user.owner || "Super Admin",
//       totalPurchases: user.totalPurchases || "", status: user.status || "active",
//       kyc: user.kyc || "pending", ira: user.ira || "None",
//       isLead: Boolean(user.isLead), myLead: Boolean(user.myLead),
//       phone: user.phone || "", tags: (user.tags || []).join(", ") || "App User",
//     });
//     setShowUserModal(true);
//   };

//   const openAddAdminModal = () => { resetAdminForm(); setShowAdminModal(true); };

//   const openEditAdminModal = (admin) => {
//     setEditingAdminId(admin.id);
//     setAdminForm({
//       name: admin.name || "", email: admin.email || "", role: admin.role || "manager",
//       status: admin.status || "active",
//       permissions: {
//         dashboard: Boolean(admin.permissions?.dashboard), users: Boolean(admin.permissions?.users),
//         categories: Boolean(admin.permissions?.categories), products: Boolean(admin.permissions?.products),
//         shipping: Boolean(admin.permissions?.shipping), communication: Boolean(admin.permissions?.communication),
//         feeSettings: Boolean(admin.permissions?.feeSettings), policies: Boolean(admin.permissions?.policies),
//       },
//     });
//     setShowAdminModal(true);
//   };

//   const handleUserFormChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setUserForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleAdminFormChange = (e) => {
//     const { name, value } = e.target;
//     setAdminForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAdminPermissionChange = (key) => {
//     setAdminForm((prev) => ({ ...prev, permissions: { ...prev.permissions, [key]: !prev.permissions[key] } }));
//   };

//   const handleSaveUser = () => {
//     if (!userForm.name.trim() || !userForm.email.trim() || !userForm.location.trim()) {
//       alert("Please fill name, email and location."); return;
//     }
//     const payload = {
//       id: editingUserId || Date.now(),
//       name: userForm.name.trim(), email: userForm.email.trim(), location: userForm.location.trim(),
//       type: userForm.type, crmType: userForm.crmType, leadStatus: userForm.leadStatus,
//       owner: userForm.owner.trim() || "Super Admin", totalPurchases: Number(userForm.totalPurchases || 0),
//       status: userForm.status, kyc: userForm.kyc, ira: userForm.ira,
//       isLead: Boolean(userForm.isLead), myLead: Boolean(userForm.myLead),
//       phone: userForm.phone.trim(), tags: userForm.tags.split(",").map((item) => item.trim()).filter(Boolean),
//     };
//     const updatedUsers = editingUserId
//       ? users.map((item) => (item.id === editingUserId ? payload : item))
//       : [payload, ...users];
//     saveUsers(updatedUsers);
//     setShowUserModal(false);
//     resetUserForm();
//   };

//   const handleSaveAdmin = () => {
//     if (!adminForm.name.trim() || !adminForm.email.trim() || !adminForm.role.trim()) {
//       alert("Please fill name, email and role."); return;
//     }
//     const payload = {
//       id: editingAdminId || Date.now(),
//       name: adminForm.name.trim(), email: adminForm.email.trim(),
//       role: adminForm.role, status: adminForm.status, permissions: adminForm.permissions,
//       createdAt: editingAdminId
//         ? adminUsers.find((item) => item.id === editingAdminId)?.createdAt || new Date().toISOString()
//         : new Date().toISOString(),
//       lastLogin: editingAdminId
//         ? adminUsers.find((item) => item.id === editingAdminId)?.lastLogin || new Date().toISOString()
//         : new Date().toISOString(),
//     };
//     const updatedAdmins = editingAdminId
//       ? adminUsers.map((item) => (item.id === editingAdminId ? payload : item))
//       : [payload, ...adminUsers];
//     saveAdminUsers(updatedAdmins);
//     setSelectedAdminId(payload.id);
//     setShowAdminModal(false);
//     resetAdminForm();
//   };

//   const handleDeleteUser = (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;
//     saveUsers(users.filter((item) => item.id !== id));
//   };

//   const handleDeleteAdmin = (id) => {
//     if (!window.confirm("Are you sure you want to delete this admin user?")) return;
//     saveAdminUsers(adminUsers.filter((item) => item.id !== id));
//   };

//   const handleToggleUserStatus = (id) => {
//     saveUsers(users.map((item) =>
//       item.id === id ? { ...item, status: item.status === "active" ? "inactive" : "active" } : item
//     ));
//   };

//   const handleToggleAdminStatus = (id) => {
//     saveAdminUsers(adminUsers.map((item) =>
//       item.id === id ? { ...item, status: item.status === "active" ? "inactive" : "active" } : item
//     ));
//   };

//   const exportUsersCSV = () => {
//     const headers = ["Name", "Email", "Location", "Type", "CRM Type", "Lead Status", "Owner", "Total Purchases", "Status", "KYC", "IRA", "Phone"];
//     const rows = filteredUsers.map((user) => [
//       user.name, user.email, user.location, user.type, user.crmType, user.leadStatus,
//       user.owner, user.totalPurchases, user.status, user.kyc, user.ira, user.phone || "",
//     ]);
//     const csvContent = [headers, ...rows]
//       .map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","))
//       .join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "users.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleCommunicationSave = () => {
//     localStorage.setItem("adminCommunicationSettings", JSON.stringify(communicationSettings));
//     alert("Communication settings saved");
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
//     if (!token || !loggedInUser) { navigate("/login"); return; }
//     const role = (loggedInUser.role || "").toLowerCase();
//     const isAdmin = role.includes("admin") || role === "manager" || loggedInUser.isAdmin === true;
//     if (!isAdmin) { navigate("/login"); return; }
//     const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
//     if (!savedUsers.length) {
//       localStorage.setItem("users", JSON.stringify(createDemoUsers()));
//       setUsers(createDemoUsers());
//     } else {
//       setUsers(savedUsers);
//     }
//     loadProductsFromStorage();
//     loadMetalsFromStorage();
//     const savedPurities = localStorage.getItem("adminMetalPurities");
//     if (!savedPurities) {
//       localStorage.setItem("adminMetalPurities", JSON.stringify({}));
//       setMetalPurities({});
//     }
//     setSelectedAdminId(adminUsers[0]?.id || null);
//   }, [navigate]);

//   useEffect(() => {
//     const gold = storedProducts.filter((p) => p.metalType?.toLowerCase() === "gold").length;
//     const silver = storedProducts.filter((p) => p.metalType?.toLowerCase() === "silver").length;
//     const profit = storedProducts.reduce((acc, curr) => acc + (Number(curr.totalPrice) || 0), 0);
//     setDashboardStats({
//       totalCustomers: users.length,
//       totalProfit: profit,
//       activeUsers: users.filter((u) => u.status === "active").length,
//       activeShipment: 12,
//       delivered: 85,
//       goldCount: gold,
//       silverCount: silver,
//     });
//   }, [storedProducts, users]);

//   useEffect(() => {
//     const weight = Number(formData.weight) || 0;
//     const pricePerGram = Number(formData.pricePerGram) || 0;
//     const makingCharges = Number(formData.makingCharges) || 0;
//     const offerPrice = Number(formData.offerPrice) || 0;
//     const calculatedTotal = weight * pricePerGram + makingCharges - offerPrice;
//     setFormData((prev) => {
//       const nextTotal = prev.metalType && (prev.weight !== "" || prev.pricePerGram !== "" || prev.makingCharges !== "" || prev.offerPrice !== "")
//         ? String(Math.max(calculatedTotal, 0)) : "";
//       if (prev.totalPrice === nextTotal) return prev;
//       return { ...prev, totalPrice: nextTotal };
//     });
//   }, [formData.weight, formData.pricePerGram, formData.makingCharges, formData.offerPrice, formData.metalType]);

//   const filteredUsers = users.filter((user) => {
//     const matchesTab = userTab === "all" ? true : userTab === "individuals" ? user.type === "individual" : user.type === "business";
//     return (
//       matchesTab &&
//       user.name?.toLowerCase().includes(userFilters.name.toLowerCase()) &&
//       user.email?.toLowerCase().includes(userFilters.email.toLowerCase()) &&
//       user.location?.toLowerCase().includes(userFilters.location.toLowerCase()) &&
//       (userFilters.status ? user.status === userFilters.status : true) &&
//       (userFilters.kyc ? user.kyc === userFilters.kyc : true) &&
//       (userFilters.crmType ? user.crmType === userFilters.crmType : true) &&
//       (userFilters.leadStatus ? user.leadStatus === userFilters.leadStatus : true) &&
//       (userFilters.type ? user.type === userFilters.type : true) &&
//       (userFilters.leadsOnly ? user.isLead : true) &&
//       (userFilters.myLeads ? user.myLead : true)
//     );
//   });

//   const filteredAdmins = adminUsers.filter((admin) => {
//     const term = adminSearch.toLowerCase();
//     return admin.name?.toLowerCase().includes(term) || admin.email?.toLowerCase().includes(term) || admin.role?.toLowerCase().includes(term);
//   });

//   const selectedAdmin = adminUsers.find((item) => item.id === selectedAdminId) || null;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const updated = { ...prev, [name]: value };
//       if (name === "metalType") {
//         updated.purity = "";
//         if (!value) { updated.weight = ""; updated.pricePerGram = ""; updated.makingCharges = ""; updated.offerPrice = ""; updated.totalPrice = ""; updated.stock = ""; }
//       }
//       return updated;
//     });
//   };

//   const handleStockChange = (productId, value) => {
//     const updatedProducts = storedProducts.map((product) =>
//       product.id === productId ? { ...product, stock: value === "" ? "" : Number(value) } : product
//     );
//     setStoredProducts(updatedProducts);
//     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
//   };

//   const startStockEdit = (product) => { setEditingStockId(product.id); setEditingStockValue(product.stock ?? ""); };
//   const saveStockEdit = (productId) => { handleStockChange(productId, editingStockValue); setEditingStockId(null); setEditingStockValue(""); };
//   const confirmDeleteProduct = (productId) => { setDeleteProductId(productId); };

//   const handleDeleteProduct = () => {
//     const updatedProducts = storedProducts.filter((product) => product.id !== deleteProductId);
//     setStoredProducts(updatedProducts);
//     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
//     setDeleteProductId(null);
//   };

//   const handleAddMetal = () => {
//     const formattedMetal = formatMetalName(newMetalName);
//     if (!formattedMetal) { alert("Please enter a metal name."); return; }
//     const alreadyExists = storedMetals.some((metal) => metal.toLowerCase() === formattedMetal.toLowerCase());
//     if (alreadyExists) { alert("This metal already exists."); return; }
//     const updatedMetals = [...storedMetals, formattedMetal];
//     setStoredMetals(updatedMetals);
//     localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));
//     const updatedPurities = { ...metalPurities, [formattedMetal]: metalPurities[formattedMetal] || [] };
//     saveMetalPurities(updatedPurities);
//     setNewMetalName("");
//     setShowAddMetalModal(false);
//   };

//   const addPurityToMetal = (metal) => {
//     const newPurity = (purityInputs[metal] || "").trim();
//     if (!newPurity) { alert("Please enter a purity value."); return; }
//     const alreadyExists = (metalPurities[metal] || []).some((item) => item.toLowerCase() === newPurity.toLowerCase());
//     if (alreadyExists) { alert("This purity already exists for " + metal); return; }
//     const updatedPurities = { ...metalPurities, [metal]: [...(metalPurities[metal] || []), newPurity] };
//     saveMetalPurities(updatedPurities);
//     setPurityInputs((prev) => ({ ...prev, [metal]: "" }));
//     setShowPurityInputFor(null);
//   };

//   const confirmDeletePurity = (metal, purity) => {
//     const purityUsedInProducts = storedProducts.some(
//       (product) => product.metalType?.toLowerCase() === metal.toLowerCase() && product.purity?.toLowerCase() === purity.toLowerCase()
//     );
//     if (purityUsedInProducts) { alert("You cannot remove this purity because products are using it."); return; }
//     const updatedPurities = { ...metalPurities, [metal]: (metalPurities[metal] || []).filter((item) => item.toLowerCase() !== purity.toLowerCase()) };
//     saveMetalPurities(updatedPurities);
//   };

//   const confirmDeleteMetal = (metalName) => {
//     const productCount = storedProducts.filter((product) => product.metalType?.toLowerCase() === metalName.toLowerCase()).length;
//     if (productCount > 0) { alert("You cannot remove this metal because products are using it."); return; }
//     setDeleteMetalName(metalName);
//   };

//   const handleDeleteMetal = () => {
//     const updatedMetals = storedMetals.filter((metal) => metal.toLowerCase() !== deleteMetalName.toLowerCase());
//     setStoredMetals(updatedMetals);
//     localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));
//     const updatedPurities = { ...metalPurities };
//     delete updatedPurities[deleteMetalName];
//     saveMetalPurities(updatedPurities);
//     setDeleteMetalName(null);
//   };

//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files || []);
//     if (!files.length) return;
//     const base64Images = await Promise.all(
//       files.map((file) => new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve({ id: `${Date.now()}-${Math.random()}-${file.name}`, src: reader.result, name: file.name });
//         reader.readAsDataURL(file);
//       }))
//     );
//     setPreviews((prev) => [...prev, ...base64Images]);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const removeImage = (indexToRemove) => { setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove)); };
//   const handleDragStart = (index) => { dragItemIndex.current = index; };
//   const handleDragEnter = (index) => { dragOverItemIndex.current = index; };
//   const handleDrop = () => {
//     const fromIndex = dragItemIndex.current;
//     const toIndex = dragOverItemIndex.current;
//     if (fromIndex === null || toIndex === null || fromIndex === toIndex || fromIndex < 0 || toIndex < 0) {
//       dragItemIndex.current = null; dragOverItemIndex.current = null; return;
//     }
//     setPreviews((prev) => {
//       const updated = [...prev];
//       const draggedItem = updated[fromIndex];
//       updated.splice(fromIndex, 1);
//       updated.splice(toIndex, 0, draggedItem);
//       return updated;
//     });
//     dragItemIndex.current = null; dragOverItemIndex.current = null;
//   };
//   const handleDragEnd = () => { dragItemIndex.current = null; dragOverItemIndex.current = null; };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.productName.trim() || !formData.metalType.trim() || !formData.productDescription.trim() ||
//       !formData.purity.trim() || !formData.weight.toString().trim() || !formData.pricePerGram.toString().trim() ||
//       !formData.makingCharges.toString().trim() || !formData.stock.toString().trim() || !formData.totalPrice.toString().trim() ||
//       previews.length === 0) {
//       alert("Please fill all required product fields and upload at least one photo."); return;
//     }
//     const productData = {
//       id: formData.id || Date.now(),
//       name: formData.productName.trim(), metalType: formData.metalType.trim(), purity: formData.purity.trim(),
//       weight: formData.weight, pricePerGram: formData.pricePerGram, makingCharges: formData.makingCharges,
//       offerPrice: formData.offerPrice, totalPrice: formData.totalPrice, stock: Number(formData.stock),
//       description: formData.productDescription.trim(), images: previews.map((item) => item.src),
//       createdAt: formData.id ? storedProducts.find((p) => p.id === formData.id)?.createdAt : new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };
//     let updatedProducts;
//     if (formData.id) {
//       updatedProducts = storedProducts.map((product) => product.id === formData.id ? productData : product);
//       alert("Product updated successfully");
//     } else {
//       updatedProducts = [...storedProducts, productData];
//       alert("Product saved successfully");
//     }
//     localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
//     setStoredProducts(updatedProducts);
//     resetProductForm();
//     setShowAddProductForm(false);
//     setIsEditMode(false);
//   };

//   const handleShippingFilterChange = (e) => {
//     const { name, value } = e.target;
//     setShippingFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const clearShippingFilters = () => { setShippingFilters({ status: "", shipmentType: "" }); };

//   const filteredShipments = shipments.filter((item) => {
//     const matchStatus = shippingFilters.status ? item.status === shippingFilters.status : true;
//     const matchType = shippingFilters.shipmentType ? item.type === shippingFilters.shipmentType : true;
//     return matchStatus && matchType;
//   });

//   const filteredProducts = storedProducts.filter((product) => {
//     if (productFilterType === "all") return true;
//     return product.metalType?.toLowerCase() === productFilterType.toLowerCase();
//   });

//   const getMetalProductCount = (metalName) => storedProducts.filter((product) => product.metalType?.toLowerCase() === metalName.toLowerCase()).length;
//   const getPurityProductCount = (metal, purity) => storedProducts.filter((product) => product.metalType?.toLowerCase() === metal.toLowerCase() && product.purity?.toLowerCase() === purity.toLowerCase()).length;

//   const getStatusBadgeStyle = (status) => ({
//     display: "inline-block", padding: "6px 12px", borderRadius: "999px", fontSize: "12px",
//     fontWeight: "600", border: "1px solid #e7dff0",
//     background: status === "Shipment Created" ? "#f3e9fb" : status === "Shipping Estimated by Admin" ? "#efe7f8" : "#f8f1fc",
//     color: "#5d3d75", whiteSpace: "nowrap",
//   });

//   // ── Shared modal styles ──────────────────────────────────────────────
//   const modalOverlay = {
//     position: "fixed", inset: 0, background: "rgba(47, 36, 56, 0.45)",
//     display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 999,
//   };

//   const modalCard = {
//     width: "100%", maxWidth: "460px", background: "#fff",
//     borderRadius: "16px", padding: "26px", boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
//   };

//   const modalTitle = { fontSize: "22px", fontWeight: "700", marginBottom: "10px" };
//   const modalSubText = { fontSize: "14px", color: "#555", marginBottom: "20px" };
//   const modalActions = { display: "flex", justifyContent: "flex-end", gap: "10px" };

//   const modalInput = {
//     height: "44px", border: "1px solid #ddd", borderRadius: "8px",
//     padding: "0 12px", fontSize: "14px", width: "100%", marginBottom: "20px", boxSizing: "border-box",
//   };

//   const cancelBtn = {
//     border: "1px solid #ddd", background: "#fff", borderRadius: "8px",
//     padding: "10px 18px", fontSize: "14px", cursor: "pointer",
//   };

//   const confirmBtn = {
//     background: "#6f3f8f", color: "#fff", border: "none",
//     borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer",
//   };

//   const dangerBtn = {
//     background: "#b33939", color: "#fff", border: "none",
//     borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer",
//   };

//   return (
//     <div style={page}>
//       <Sidebar
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//         setShowAddProductForm={setShowAddProductForm}
//       />

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
//         categories={categories}
//         setShowAddCategoryModal={setShowAddCategoryModal}
//         confirmDeleteCategory={confirmDeleteCategory}
//         productFilterType={productFilterType}
//         setProductFilterType={setProductFilterType}
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
//       {deleteProductId !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Product?</div>
//             <div style={modalSubText}>This action will permanently delete the selected product.</div>
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => setDeleteProductId(null)}>Cancel</button>
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
//           <div style={modalCard}>
//             <div style={modalTitle}>Add Category</div>
//             <input
//               type="text"
//               value={newCategoryName}
//               onChange={(e) => setNewCategoryName(e.target.value)}
//               placeholder="Enter category name"
//               style={modalInput}
//               onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
//             />
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => { setShowAddCategoryModal(false); setNewCategoryName(""); }}>Cancel</button>
//               <button style={confirmBtn} onClick={handleAddCategory}>Add Category</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Delete Category Modal ── */}
//       {deleteCategoryName !== null && (
//         <div style={modalOverlay}>
//           <div style={modalCard}>
//             <div style={modalTitle}>Remove Category?</div>
//             <div style={modalSubText}>This will remove <strong>{deleteCategoryName}</strong>.</div>
//             <div style={modalActions}>
//               <button style={cancelBtn} onClick={() => setDeleteCategoryName(null)}>Cancel</button>
//               <button style={dangerBtn} onClick={handleDeleteCategory}>Yes, Remove</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

const DEFAULT_METALS = [];
const DEFAULT_METAL_PURITIES = {};

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
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [productFilterType, setProductFilterType] = useState("all");
  const [editingStockId, setEditingStockId] = useState(null);
  const [editingStockValue, setEditingStockValue] = useState("");
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const [storedMetals, setStoredMetals] = useState(DEFAULT_METALS);
  const [metalPurities, setMetalPurities] = useState(() => {
    const saved = localStorage.getItem("adminMetalPurities");
    if (saved) {
      try { return JSON.parse(saved); } catch { return DEFAULT_METAL_PURITIES; }
    }
    return DEFAULT_METAL_PURITIES;
  });

  const [showAddMetalModal, setShowAddMetalModal] = useState(false);
  const [newMetalName, setNewMetalName] = useState("");
  const [deleteMetalName, setDeleteMetalName] = useState(null);

  const [showPurityInputFor, setShowPurityInputFor] = useState(null);
  const [purityInputs, setPurityInputs] = useState({});

  // ── Category state ──────────────────────────────────────────────────
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("adminCategories");
    if (saved) {
      try { return JSON.parse(saved); } catch { return []; }
    }
    return [];
  });
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [deleteCategoryName, setDeleteCategoryName] = useState(null);
  // ───────────────────────────────────────────────────────────────────

  const fileInputRef = useRef(null);
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

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

  const [communicationSettings, setCommunicationSettings] = useState(() => {
    const saved = localStorage.getItem("adminCommunicationSettings");
    return saved ? JSON.parse(saved) : { whatsapp: "", email: "", supportMessage: "" };
  });

  const [adminUsers, setAdminUsers] = useState(() => {
    const saved = localStorage.getItem("adminUsers");
    if (saved) {
      try { return JSON.parse(saved); } catch { return createDemoAdminUsers(); }
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
    category: "",
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
    { id: 1, user: "Keval Parashar", commodity: "Gold(2gram)", weight: "2g", type: "Physical Delivery", shipmentId: "se-623135802", status: "Shipment Created" },
    { id: 2, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Ship Commodity To Gold App", shipmentId: "se-622247522", status: "Shipment Created" },
    { id: 3, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Physical Delivery", shipmentId: "se-622179834", status: "Shipping Estimated by Admin" },
  ]);

  const page = {
    display: "flex",
    minHeight: "100vh",
    background: "#f6f4f8",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  // ── Helpers ──────────────────────────────────────────────────────────
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
      const cleanedMetals = [...new Set(metals.map((item) => formatMetalName(item)).filter(Boolean))];
      setStoredMetals(cleanedMetals);
      localStorage.setItem("adminMetals", JSON.stringify(cleanedMetals));
      return cleanedMetals;
    }
    setStoredMetals([]);
    return [];
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

  const saveMetalPurities = (updatedPurities) => {
    setMetalPurities(updatedPurities);
    localStorage.setItem("adminMetalPurities", JSON.stringify(updatedPurities));
  };

  const saveCategories = (updated) => {
    setCategories(updated);
    localStorage.setItem("adminCategories", JSON.stringify(updated));
  };

  // ── Category handlers ────────────────────────────────────────────────
  const handleAddCategory = () => {
    const name = newCategoryName.trim();
    if (!name) { alert("Please enter a category name."); return; }
    const alreadyExists = categories.some((c) => c.toLowerCase() === name.toLowerCase());
    if (alreadyExists) { alert("This category already exists."); return; }
    saveCategories([...categories, name]);
    setNewCategoryName("");
    setShowAddCategoryModal(false);
  };

  const confirmDeleteCategory = (categoryName) => {
    setDeleteCategoryName(categoryName);
  };

  const handleDeleteCategory = () => {
    saveCategories(categories.filter((c) => c !== deleteCategoryName));
    setDeleteCategoryName(null);
  };
  // ────────────────────────────────────────────────────────────────────

  const resetUserForm = () => {
    setUserForm({
      name: "", email: "", location: "", type: "individual", crmType: "Lead",
      leadStatus: "New", owner: "Super Admin", totalPurchases: "", status: "active",
      kyc: "pending", ira: "None", isLead: true, myLead: false, phone: "", tags: "App User",
    });
    setEditingUserId(null);
  };

  const resetAdminForm = () => {
    setAdminForm({
      name: "", email: "", role: "manager", status: "active",
      permissions: { dashboard: true, users: true, categories: false, products: true, shipping: false, communication: false, feeSettings: false, policies: false },
    });
    setEditingAdminId(null);
  };

  const resetProductForm = () => {
    setFormData({ productName: "", metalType: "", category: "", purity: "", weight: "", pricePerGram: "", makingCharges: "", offerPrice: "", totalPrice: "", stock: "", productDescription: "" });
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openAddUserModal = () => { resetUserForm(); setShowUserModal(true); };

  const openEditUserModal = (user) => {
    setEditingUserId(user.id);
    setUserForm({
      name: user.name || "", email: user.email || "", location: user.location || "",
      type: user.type || "individual", crmType: user.crmType || "Lead",
      leadStatus: user.leadStatus || "New", owner: user.owner || "Super Admin",
      totalPurchases: user.totalPurchases || "", status: user.status || "active",
      kyc: user.kyc || "pending", ira: user.ira || "None",
      isLead: Boolean(user.isLead), myLead: Boolean(user.myLead),
      phone: user.phone || "", tags: (user.tags || []).join(", ") || "App User",
    });
    setShowUserModal(true);
  };

  const openAddAdminModal = () => { resetAdminForm(); setShowAdminModal(true); };

  const openEditAdminModal = (admin) => {
    setEditingAdminId(admin.id);
    setAdminForm({
      name: admin.name || "", email: admin.email || "", role: admin.role || "manager",
      status: admin.status || "active",
      permissions: {
        dashboard: Boolean(admin.permissions?.dashboard), users: Boolean(admin.permissions?.users),
        categories: Boolean(admin.permissions?.categories), products: Boolean(admin.permissions?.products),
        shipping: Boolean(admin.permissions?.shipping), communication: Boolean(admin.permissions?.communication),
        feeSettings: Boolean(admin.permissions?.feeSettings), policies: Boolean(admin.permissions?.policies),
      },
    });
    setShowAdminModal(true);
  };

  const handleUserFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleAdminFormChange = (e) => {
    const { name, value } = e.target;
    setAdminForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdminPermissionChange = (key) => {
    setAdminForm((prev) => ({ ...prev, permissions: { ...prev.permissions, [key]: !prev.permissions[key] } }));
  };

  const handleSaveUser = () => {
    if (!userForm.name.trim() || !userForm.email.trim() || !userForm.location.trim()) {
      alert("Please fill name, email and location."); return;
    }
    const payload = {
      id: editingUserId || Date.now(),
      name: userForm.name.trim(), email: userForm.email.trim(), location: userForm.location.trim(),
      type: userForm.type, crmType: userForm.crmType, leadStatus: userForm.leadStatus,
      owner: userForm.owner.trim() || "Super Admin", totalPurchases: Number(userForm.totalPurchases || 0),
      status: userForm.status, kyc: userForm.kyc, ira: userForm.ira,
      isLead: Boolean(userForm.isLead), myLead: Boolean(userForm.myLead),
      phone: userForm.phone.trim(), tags: userForm.tags.split(",").map((item) => item.trim()).filter(Boolean),
    };
    const updatedUsers = editingUserId
      ? users.map((item) => (item.id === editingUserId ? payload : item))
      : [payload, ...users];
    saveUsers(updatedUsers);
    setShowUserModal(false);
    resetUserForm();
  };

  const handleSaveAdmin = () => {
    if (!adminForm.name.trim() || !adminForm.email.trim() || !adminForm.role.trim()) {
      alert("Please fill name, email and role."); return;
    }
    const payload = {
      id: editingAdminId || Date.now(),
      name: adminForm.name.trim(), email: adminForm.email.trim(),
      role: adminForm.role, status: adminForm.status, permissions: adminForm.permissions,
      createdAt: editingAdminId
        ? adminUsers.find((item) => item.id === editingAdminId)?.createdAt || new Date().toISOString()
        : new Date().toISOString(),
      lastLogin: editingAdminId
        ? adminUsers.find((item) => item.id === editingAdminId)?.lastLogin || new Date().toISOString()
        : new Date().toISOString(),
    };
    const updatedAdmins = editingAdminId
      ? adminUsers.map((item) => (item.id === editingAdminId ? payload : item))
      : [payload, ...adminUsers];
    saveAdminUsers(updatedAdmins);
    setSelectedAdminId(payload.id);
    setShowAdminModal(false);
    resetAdminForm();
  };

  const handleDeleteUser = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    saveUsers(users.filter((item) => item.id !== id));
  };

  const handleDeleteAdmin = (id) => {
    if (!window.confirm("Are you sure you want to delete this admin user?")) return;
    saveAdminUsers(adminUsers.filter((item) => item.id !== id));
  };

  const handleToggleUserStatus = (id) => {
    saveUsers(users.map((item) =>
      item.id === id ? { ...item, status: item.status === "active" ? "inactive" : "active" } : item
    ));
  };

  const handleToggleAdminStatus = (id) => {
    saveAdminUsers(adminUsers.map((item) =>
      item.id === id ? { ...item, status: item.status === "active" ? "inactive" : "active" } : item
    ));
  };

  const exportUsersCSV = () => {
    const headers = ["Name", "Email", "Location", "Type", "CRM Type", "Lead Status", "Owner", "Total Purchases", "Status", "KYC", "IRA", "Phone"];
    const rows = filteredUsers.map((user) => [
      user.name, user.email, user.location, user.type, user.crmType, user.leadStatus,
      user.owner, user.totalPurchases, user.status, user.kyc, user.ira, user.phone || "",
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","))
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
    localStorage.setItem("adminCommunicationSettings", JSON.stringify(communicationSettings));
    alert("Communication settings saved");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (!token || !loggedInUser) { navigate("/login"); return; }
    const role = (loggedInUser.role || "").toLowerCase();
    const isAdmin = role.includes("admin") || role === "manager" || loggedInUser.isAdmin === true;
    if (!isAdmin) { navigate("/login"); return; }
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (!savedUsers.length) {
      localStorage.setItem("users", JSON.stringify(createDemoUsers()));
      setUsers(createDemoUsers());
    } else {
      setUsers(savedUsers);
    }
    loadProductsFromStorage();
    loadMetalsFromStorage();
    const savedPurities = localStorage.getItem("adminMetalPurities");
    if (!savedPurities) {
      localStorage.setItem("adminMetalPurities", JSON.stringify({}));
      setMetalPurities({});
    }
    setSelectedAdminId(adminUsers[0]?.id || null);
  }, [navigate]);

  useEffect(() => {
    const gold = storedProducts.filter((p) => p.metalType?.toLowerCase() === "gold").length;
    const silver = storedProducts.filter((p) => p.metalType?.toLowerCase() === "silver").length;
    const profit = storedProducts.reduce((acc, curr) => acc + (Number(curr.totalPrice) || 0), 0);
    setDashboardStats({
      totalCustomers: users.length,
      totalProfit: profit,
      activeUsers: users.filter((u) => u.status === "active").length,
      activeShipment: 12,
      delivered: 85,
      goldCount: gold,
      silverCount: silver,
    });
  }, [storedProducts, users]);

  useEffect(() => {
    const weight = Number(formData.weight) || 0;
    const pricePerGram = Number(formData.pricePerGram) || 0;
    const makingCharges = Number(formData.makingCharges) || 0;
    const offerPrice = Number(formData.offerPrice) || 0;
    const calculatedTotal = weight * pricePerGram + makingCharges - offerPrice;
    setFormData((prev) => {
      const nextTotal = prev.metalType && (prev.weight !== "" || prev.pricePerGram !== "" || prev.makingCharges !== "" || prev.offerPrice !== "")
        ? String(Math.max(calculatedTotal, 0)) : "";
      if (prev.totalPrice === nextTotal) return prev;
      return { ...prev, totalPrice: nextTotal };
    });
  }, [formData.weight, formData.pricePerGram, formData.makingCharges, formData.offerPrice, formData.metalType]);

  const filteredUsers = users.filter((user) => {
    const matchesTab = userTab === "all" ? true : userTab === "individuals" ? user.type === "individual" : user.type === "business";
    return (
      matchesTab &&
      user.name?.toLowerCase().includes(userFilters.name.toLowerCase()) &&
      user.email?.toLowerCase().includes(userFilters.email.toLowerCase()) &&
      user.location?.toLowerCase().includes(userFilters.location.toLowerCase()) &&
      (userFilters.status ? user.status === userFilters.status : true) &&
      (userFilters.kyc ? user.kyc === userFilters.kyc : true) &&
      (userFilters.crmType ? user.crmType === userFilters.crmType : true) &&
      (userFilters.leadStatus ? user.leadStatus === userFilters.leadStatus : true) &&
      (userFilters.type ? user.type === userFilters.type : true) &&
      (userFilters.leadsOnly ? user.isLead : true) &&
      (userFilters.myLeads ? user.myLead : true)
    );
  });

  const filteredAdmins = adminUsers.filter((admin) => {
    const term = adminSearch.toLowerCase();
    return admin.name?.toLowerCase().includes(term) || admin.email?.toLowerCase().includes(term) || admin.role?.toLowerCase().includes(term);
  });

  const selectedAdmin = adminUsers.find((item) => item.id === selectedAdminId) || null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "metalType") {
        updated.purity = "";
        if (!value) { updated.weight = ""; updated.pricePerGram = ""; updated.makingCharges = ""; updated.offerPrice = ""; updated.totalPrice = ""; updated.stock = ""; }
      }
      return updated;
    });
  };

  const handleStockChange = (productId, value) => {
    const updatedProducts = storedProducts.map((product) =>
      product.id === productId ? { ...product, stock: value === "" ? "" : Number(value) } : product
    );
    setStoredProducts(updatedProducts);
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
  };

  const startStockEdit = (product) => { setEditingStockId(product.id); setEditingStockValue(product.stock ?? ""); };
  const saveStockEdit = (productId) => { handleStockChange(productId, editingStockValue); setEditingStockId(null); setEditingStockValue(""); };
  const confirmDeleteProduct = (productId) => { setDeleteProductId(productId); };

  const handleDeleteProduct = () => {
    const updatedProducts = storedProducts.filter((product) => product.id !== deleteProductId);
    setStoredProducts(updatedProducts);
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
    setDeleteProductId(null);
  };

  const handleAddMetal = () => {
    const formattedMetal = formatMetalName(newMetalName);
    if (!formattedMetal) { alert("Please enter a metal name."); return; }
    const alreadyExists = storedMetals.some((metal) => metal.toLowerCase() === formattedMetal.toLowerCase());
    if (alreadyExists) { alert("This metal already exists."); return; }
    const updatedMetals = [...storedMetals, formattedMetal];
    setStoredMetals(updatedMetals);
    localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));
    const updatedPurities = { ...metalPurities, [formattedMetal]: metalPurities[formattedMetal] || [] };
    saveMetalPurities(updatedPurities);
    setNewMetalName("");
    setShowAddMetalModal(false);
  };

  const addPurityToMetal = (metal) => {
    const newPurity = (purityInputs[metal] || "").trim();
    if (!newPurity) { alert("Please enter a purity value."); return; }
    const alreadyExists = (metalPurities[metal] || []).some((item) => item.toLowerCase() === newPurity.toLowerCase());
    if (alreadyExists) { alert("This purity already exists for " + metal); return; }
    const updatedPurities = { ...metalPurities, [metal]: [...(metalPurities[metal] || []), newPurity] };
    saveMetalPurities(updatedPurities);
    setPurityInputs((prev) => ({ ...prev, [metal]: "" }));
    setShowPurityInputFor(null);
  };

  const confirmDeletePurity = (metal, purity) => {
    const purityUsedInProducts = storedProducts.some(
      (product) => product.metalType?.toLowerCase() === metal.toLowerCase() && product.purity?.toLowerCase() === purity.toLowerCase()
    );
    if (purityUsedInProducts) { alert("You cannot remove this purity because products are using it."); return; }
    const updatedPurities = { ...metalPurities, [metal]: (metalPurities[metal] || []).filter((item) => item.toLowerCase() !== purity.toLowerCase()) };
    saveMetalPurities(updatedPurities);
  };

  const confirmDeleteMetal = (metalName) => {
    const productCount = storedProducts.filter((product) => product.metalType?.toLowerCase() === metalName.toLowerCase()).length;
    if (productCount > 0) { alert("You cannot remove this metal because products are using it."); return; }
    setDeleteMetalName(metalName);
  };

  const handleDeleteMetal = () => {
    const updatedMetals = storedMetals.filter((metal) => metal.toLowerCase() !== deleteMetalName.toLowerCase());
    setStoredMetals(updatedMetals);
    localStorage.setItem("adminMetals", JSON.stringify(updatedMetals));
    const updatedPurities = { ...metalPurities };
    delete updatedPurities[deleteMetalName];
    saveMetalPurities(updatedPurities);
    setDeleteMetalName(null);
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const base64Images = await Promise.all(
      files.map((file) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve({ id: `${Date.now()}-${Math.random()}-${file.name}`, src: reader.result, name: file.name });
        reader.readAsDataURL(file);
      }))
    );
    setPreviews((prev) => [...prev, ...base64Images]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (indexToRemove) => { setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove)); };
  const handleDragStart = (index) => { dragItemIndex.current = index; };
  const handleDragEnter = (index) => { dragOverItemIndex.current = index; };
  const handleDrop = () => {
    const fromIndex = dragItemIndex.current;
    const toIndex = dragOverItemIndex.current;
    if (fromIndex === null || toIndex === null || fromIndex === toIndex || fromIndex < 0 || toIndex < 0) {
      dragItemIndex.current = null; dragOverItemIndex.current = null; return;
    }
    setPreviews((prev) => {
      const updated = [...prev];
      const draggedItem = updated[fromIndex];
      updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, draggedItem);
      return updated;
    });
    dragItemIndex.current = null; dragOverItemIndex.current = null;
  };
  const handleDragEnd = () => { dragItemIndex.current = null; dragOverItemIndex.current = null; };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.productName.trim() || !formData.metalType.trim() || !formData.productDescription.trim() ||
      !formData.purity.trim() || !formData.weight.toString().trim() || !formData.pricePerGram.toString().trim() ||
      !formData.makingCharges.toString().trim() || !formData.stock.toString().trim() || !formData.totalPrice.toString().trim() ||
      previews.length === 0) {
      alert("Please fill all required product fields and upload at least one photo."); return;
    }
    const productData = {
      id: formData.id || Date.now(),
      name: formData.productName.trim(), metalType: formData.metalType.trim(), category: formData.category?.trim() || "", purity: formData.purity.trim(),
      weight: formData.weight, pricePerGram: formData.pricePerGram, makingCharges: formData.makingCharges,
      offerPrice: formData.offerPrice, totalPrice: formData.totalPrice, stock: Number(formData.stock),
      description: formData.productDescription.trim(), images: previews.map((item) => item.src),
      createdAt: formData.id ? storedProducts.find((p) => p.id === formData.id)?.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    let updatedProducts;
    if (formData.id) {
      updatedProducts = storedProducts.map((product) => product.id === formData.id ? productData : product);
      alert("Product updated successfully");
    } else {
      updatedProducts = [...storedProducts, productData];
      alert("Product saved successfully");
    }
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
    setStoredProducts(updatedProducts);
    resetProductForm();
    setShowAddProductForm(false);
    setIsEditMode(false);
  };

  const handleShippingFilterChange = (e) => {
    const { name, value } = e.target;
    setShippingFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearShippingFilters = () => { setShippingFilters({ status: "", shipmentType: "" }); };

  const filteredShipments = shipments.filter((item) => {
    const matchStatus = shippingFilters.status ? item.status === shippingFilters.status : true;
    const matchType = shippingFilters.shipmentType ? item.type === shippingFilters.shipmentType : true;
    return matchStatus && matchType;
  });

  const filteredProducts = storedProducts.filter((product) => {
    if (productFilterType === "all") return true;
    return product.metalType?.toLowerCase() === productFilterType.toLowerCase();
  });

  const getMetalProductCount = (metalName) => storedProducts.filter((product) => product.metalType?.toLowerCase() === metalName.toLowerCase()).length;
  const getPurityProductCount = (metal, purity) => storedProducts.filter((product) => product.metalType?.toLowerCase() === metal.toLowerCase() && product.purity?.toLowerCase() === purity.toLowerCase()).length;

  const getStatusBadgeStyle = (status) => ({
    display: "inline-block", padding: "6px 12px", borderRadius: "999px", fontSize: "12px",
    fontWeight: "600", border: "1px solid #e7dff0",
    background: status === "Shipment Created" ? "#f3e9fb" : status === "Shipping Estimated by Admin" ? "#efe7f8" : "#f8f1fc",
    color: "#5d3d75", whiteSpace: "nowrap",
  });

  // ── Shared modal styles ──────────────────────────────────────────────
  const modalOverlay = {
    position: "fixed", inset: 0, background: "rgba(47, 36, 56, 0.45)",
    display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 999,
  };

  const modalCard = {
    width: "100%", maxWidth: "460px", background: "#fff",
    borderRadius: "16px", padding: "26px", boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
  };

  const modalTitle = { fontSize: "22px", fontWeight: "700", marginBottom: "10px" };
  const modalSubText = { fontSize: "14px", color: "#555", marginBottom: "20px" };
  const modalActions = { display: "flex", justifyContent: "flex-end", gap: "10px" };

  const modalInput = {
    height: "44px", border: "1px solid #ddd", borderRadius: "8px",
    padding: "0 12px", fontSize: "14px", width: "100%", marginBottom: "20px", boxSizing: "border-box",
  };

  const cancelBtn = {
    border: "1px solid #ddd", background: "#fff", borderRadius: "8px",
    padding: "10px 18px", fontSize: "14px", cursor: "pointer",
  };

  const confirmBtn = {
    background: "#6f3f8f", color: "#fff", border: "none",
    borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer",
  };

  const dangerBtn = {
    background: "#b33939", color: "#fff", border: "none",
    borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer",
  };

  return (
    <div style={page}>
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setShowAddProductForm={setShowAddProductForm}
      />

      <Mainbar
        activeSection={activeSection}
        dashboardStats={dashboardStats}
        storedMetals={storedMetals}
        metalPurities={metalPurities}
        setShowAddMetalModal={setShowAddMetalModal}
        getMetalProductCount={getMetalProductCount}
        getPurityProductCount={getPurityProductCount}
        confirmDeleteMetal={confirmDeleteMetal}
        confirmDeletePurity={confirmDeletePurity}
        purityInputs={purityInputs}
        setPurityInputs={setPurityInputs}
        showPurityInputFor={showPurityInputFor}
        setShowPurityInputFor={setShowPurityInputFor}
        addPurityToMetal={addPurityToMetal}
        categories={categories}
        setShowAddCategoryModal={setShowAddCategoryModal}
        confirmDeleteCategory={confirmDeleteCategory}
        productFilterType={productFilterType}
        setProductFilterType={setProductFilterType}
        showAddProductForm={showAddProductForm}
        setShowAddProductForm={setShowAddProductForm}
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        fileInputRef={fileInputRef}
        handleImageChange={handleImageChange}
        previews={previews}
        setPreviews={setPreviews}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDrop={handleDrop}
        handleDragEnd={handleDragEnd}
        removeImage={removeImage}
        filteredProducts={filteredProducts}
        confirmDeleteProduct={confirmDeleteProduct}
        editingStockId={editingStockId}
        editingStockValue={editingStockValue}
        setEditingStockValue={setEditingStockValue}
        saveStockEdit={saveStockEdit}
        setEditingStockId={setEditingStockId}
        startStockEdit={startStockEdit}
        setIsEditMode={setIsEditMode}
        users={users}
        userTab={userTab}
        setUserTab={setUserTab}
        userFilters={userFilters}
        setUserFilters={setUserFilters}
        filteredUsers={filteredUsers}
        openAddUserModal={openAddUserModal}
        openEditUserModal={openEditUserModal}
        handleDeleteUser={handleDeleteUser}
        handleToggleUserStatus={handleToggleUserStatus}
        exportUsersCSV={exportUsersCSV}
        showUserModal={showUserModal}
        setShowUserModal={setShowUserModal}
        editingUserId={editingUserId}
        userForm={userForm}
        handleUserFormChange={handleUserFormChange}
        handleSaveUser={handleSaveUser}
        resetUserForm={resetUserForm}
        shippingFilters={shippingFilters}
        handleShippingFilterChange={handleShippingFilterChange}
        clearShippingFilters={clearShippingFilters}
        filteredShipments={filteredShipments}
        getStatusBadgeStyle={getStatusBadgeStyle}
        communicationSettings={communicationSettings}
        setCommunicationSettings={setCommunicationSettings}
        handleCommunicationSave={handleCommunicationSave}
        adminSearch={adminSearch}
        setAdminSearch={setAdminSearch}
        filteredAdmins={filteredAdmins}
        selectedAdminId={selectedAdminId}
        setSelectedAdminId={setSelectedAdminId}
        selectedAdmin={selectedAdmin}
        openAddAdminModal={openAddAdminModal}
        openEditAdminModal={openEditAdminModal}
        handleToggleAdminStatus={handleToggleAdminStatus}
        handleDeleteAdmin={handleDeleteAdmin}
        showAdminModal={showAdminModal}
        setShowAdminModal={setShowAdminModal}
        editingAdminId={editingAdminId}
        adminForm={adminForm}
        handleAdminFormChange={handleAdminFormChange}
        handleAdminPermissionChange={handleAdminPermissionChange}
        handleSaveAdmin={handleSaveAdmin}
        resetAdminForm={resetAdminForm}
        formatCurrency={formatCurrency}
        formatDateTime={formatDateTime}
        getInitials={getInitials}
      />

      {/* ── Delete Product Modal ── */}
      {deleteProductId !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Product?</div>
            <div style={modalSubText}>This action will permanently delete the selected product.</div>
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => setDeleteProductId(null)}>Cancel</button>
              <button style={dangerBtn} onClick={handleDeleteProduct}>Yes, Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add Metal Modal ── */}
      {showAddMetalModal && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Add Metal</div>
            <input type="text" value={newMetalName} onChange={(e) => setNewMetalName(e.target.value)} placeholder="Enter metal name" style={modalInput} />
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => setShowAddMetalModal(false)}>Cancel</button>
              <button style={confirmBtn} onClick={handleAddMetal}>Add Metal</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Metal Modal ── */}
      {deleteMetalName !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Metal Type?</div>
            <div style={modalSubText}>This will remove <strong>{deleteMetalName}</strong>.</div>
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => setDeleteMetalName(null)}>Cancel</button>
              <button style={dangerBtn} onClick={handleDeleteMetal}>Yes, Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add Category Modal ── */}
      {showAddCategoryModal && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Add Category</div>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Enter category name"
              style={modalInput}
              onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
            />
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => { setShowAddCategoryModal(false); setNewCategoryName(""); }}>Cancel</button>
              <button style={confirmBtn} onClick={handleAddCategory}>Add Category</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Category Modal ── */}
      {deleteCategoryName !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Category?</div>
            <div style={modalSubText}>This will remove <strong>{deleteCategoryName}</strong>.</div>
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => setDeleteCategoryName(null)}>Cancel</button>
              <button style={dangerBtn} onClick={handleDeleteCategory}>Yes, Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
