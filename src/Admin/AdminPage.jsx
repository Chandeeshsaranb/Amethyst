import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

// ── API base URL — change this to your Laravel server address ───────────────
const API_BASE = "https://initially-loamless-elroy.ngrok-free.dev/api";
// ────────────────────────────────────────────────────────────────────────────


function generateSlug(name) {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${base}-${suffix}`;
}

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
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

function getInitials(name = "") {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

function createDemoUsers() {
  return [
    { id: 1, type: "individual", name: "Keval Parashar", email: "keval@example.com", location: "New York, USA", crmType: "Trader", leadStatus: "Converted", owner: "Super Admin", totalPurchases: 15420.5, status: "active", kyc: "approved", ira: "Active", isLead: true, myLead: true, phone: "+1 555 210 7654", tags: ["App User"] },
    { id: 2, type: "individual", name: "Animi GSWM", email: "animi@example.com", location: "London, UK", crmType: "Trader", leadStatus: "Converted", owner: "John Manager", totalPurchases: 28750, status: "active", kyc: "approved", ira: "None", isLead: true, myLead: false, phone: "+44 7700 900001", tags: ["App User"] },
    { id: 3, type: "individual", name: "Shubh", email: "shubh@example.com", location: "Mumbai, India", crmType: "Lead", leadStatus: "Contacted", owner: "John Manager", totalPurchases: 8965.25, status: "active", kyc: "pending", ira: "None", isLead: true, myLead: true, phone: "+91 9876543210", tags: ["CRM Entry"] },
  ];
}

function createDemoAdminUsers() {
  return [
    { id: 101, name: "Super Admin", email: "admin@thegoldapp.com", role: "super admin", status: "active", permissions: { dashboard: true, users: true, categories: true, products: true, shipping: true, communication: true, feeSettings: true, policies: true }, lastLogin: "2026-03-12T10:30:00", createdAt: "2025-12-15T18:00:00" },
    { id: 102, name: "John Manager", email: "john@thegoldapp.com", role: "manager", status: "active", permissions: { dashboard: true, users: true, categories: false, products: true, shipping: true, communication: true, feeSettings: false, policies: false }, lastLogin: "2026-03-11T20:00:00", createdAt: "2025-12-22T12:20:00" },
  ];
}

export default function AdminPage() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [productFilterType, setProductFilterType] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editingStockId, setEditingStockId] = useState(null);
  const [editingStockValue, setEditingStockValue] = useState("");
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // ── Metal types — [{ id, name, slug, description }] from API ────────────
  const [storedMetals, setStoredMetals] = useState([]);
  // metalPurities keyed by metal NAME: { "Gold": ["22k", "18k"], ... }
  const [metalPurities, setMetalPurities] = useState({});
  const [metalLoading, setMetalLoading] = useState(false);

  const [showAddMetalModal, setShowAddMetalModal] = useState(false);
  const [metalForm, setMetalForm] = useState({ name: "", slug: "", description: "" });
  const [deleteMetalId, setDeleteMetalId] = useState(null);

  const [showPurityInputFor, setShowPurityInputFor] = useState(null); // kept for Mainbar compat
  const [purityInputs, setPurityInputs] = useState({});               // kept for Mainbar compat
  // ─────────────────────────────────────────────────────────────────────────

  // ── Category state — now [{ id, name, slug, image, description, stock }] from API
  const [categories, setCategories] = useState([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [categoryForm, setCategoryForm] = useState({
    name: "", slug: "", image: "", description: "", stock: "",
  });
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState("");
  // ─────────────────────────────────────────────────────────────────────────

  const fileInputRef = useRef(null);
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  const [users, setUsers] = useState([]);
  const [userTab, setUserTab] = useState("all");
  const [userFilters, setUserFilters] = useState({ name: "", email: "", location: "", status: "", kyc: "", crmType: "", leadStatus: "", type: "", leadsOnly: false, myLeads: false });
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [userForm, setUserForm] = useState({ name: "", email: "", location: "", type: "individual", crmType: "Lead", leadStatus: "New", owner: "Super Admin", totalPurchases: "", status: "active", kyc: "pending", ira: "None", isLead: true, myLead: false, phone: "", tags: "App User" });

  const [communicationSettings, setCommunicationSettings] = useState(() => {
    const saved = localStorage.getItem("adminCommunicationSettings");
    return saved ? JSON.parse(saved) : { whatsapp: "", email: "", supportMessage: "" };
  });

  const [adminUsers, setAdminUsers] = useState(() => {
    const saved = localStorage.getItem("adminUsers");
    if (saved) { try { return JSON.parse(saved); } catch { return createDemoAdminUsers(); } }
    return createDemoAdminUsers();
  });

  const [adminSearch, setAdminSearch] = useState("");
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [adminForm, setAdminForm] = useState({ name: "", email: "", role: "manager", status: "active", permissions: { dashboard: true, users: true, categories: false, products: true, shipping: false, communication: false, feeSettings: false, policies: false } });

  const [dashboardStats, setDashboardStats] = useState({ totalCustomers: 0, totalProfit: 0, activeUsers: 0, activeShipment: 0, delivered: 0, goldCount: 0, silverCount: 0 });
  const [storedProducts, setStoredProducts] = useState([]);

  const [formData, setFormData] = useState({
    id: null, productName: "", metalType: "", category: "", purity: "",
    weight: "", pricePerGram: "", makingCharges: "", offerPrice: "",
    totalPrice: "", stock: "", productDescription: "",
  });

  const [previews, setPreviews] = useState([]);
  const [shippingFilters, setShippingFilters] = useState({ status: "", shipmentType: "" });
  const [shipments] = useState([
    { id: 1, user: "Keval Parashar", commodity: "Gold(2gram)", weight: "2g", type: "Physical Delivery", shipmentId: "se-623135802", status: "Shipment Created" },
    { id: 2, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Ship Commodity To Gold App", shipmentId: "se-622247522", status: "Shipment Created" },
    { id: 3, user: "ANIMI GSWM", commodity: "Gold(1gram)", weight: "1g", type: "Physical Delivery", shipmentId: "se-622179834", status: "Shipping Estimated by Admin" },
  ]);

  const page = { display: "flex", minHeight: "100vh", background: "#f6f4f8", fontFamily: "Arial, Helvetica, sans-serif" };

  // ── Auth helper — attaches Bearer token to every API request ─────────────
  const authHeaders = () => ({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  });

  // ── Category API calls ────────────────────────────────────────────────────

  // GET /api/categories — load all categories
  const loadCategories = async () => {
    setCategoryLoading(true);
    setCategoryError("");
    try {
      const res = await fetch(`${API_BASE}/categories`, {
        headers: authHeaders(),
      });
      if (!res.ok) throw new Error(`Failed to load categories (${res.status})`);
      const data = await res.json();
      // Laravel returns the collection directly or wrapped in { data: [...] }
      const list = Array.isArray(data) ? data : (data.data || []);
      setCategories(list);
      // Keep localStorage in sync so Header.jsx & MarchEdit can read it offline
      localStorage.setItem("adminCategories", JSON.stringify(list.map((c) => c.name)));
    } catch (err) {
      setCategoryError(err.message);
    } finally {
      setCategoryLoading(false);
    }
  };

  // POST /api/categories — create a new category
  const handleAddCategory = async () => {
    const name = categoryForm.name.trim();
    if (!name) { alert("Please enter a category name."); return; }
    if (categories.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      alert("This category already exists."); return;
    }
    // Auto-generate slug from name if not provided
    const slug = categoryForm.slug.trim() ||
      name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const payload = {
      name,
      slug,
      image:       categoryForm.image.trim()       || null,
      description: categoryForm.description.trim() || null,
      stock:       categoryForm.stock !== "" ? Number(categoryForm.stock) : null,
    };
    setCategoryLoading(true);
    setCategoryError("");
    try {
      const res = await fetch(`${API_BASE}/categories`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Failed to create category (${res.status})`);
      }
      const created = await res.json();
      const newCat = created.data || created;
      const updated = [...categories, newCat];
      setCategories(updated);
      localStorage.setItem("adminCategories", JSON.stringify(updated.map((c) => c.name)));
      setCategoryForm({ name: "", slug: "", image: "", description: "", stock: "" });
      setShowAddCategoryModal(false);
    } catch (err) {
      setCategoryError(err.message);
    } finally {
      setCategoryLoading(false);
    }
  };

  // Sets which category id is pending deletion — opens confirm modal
  const confirmDeleteCategory = (id) => setDeleteCategoryId(id);

  // DELETE /api/categories/{id} — delete confirmed category
  const handleDeleteCategory = async () => {
    if (!deleteCategoryId) return;
    try {
      const res = await fetch(`${API_BASE}/categories/${deleteCategoryId}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      if (!res.ok) throw new Error(`Failed to delete category (${res.status})`);
      const updated = categories.filter((c) => c.id !== deleteCategoryId);
      setCategories(updated);
      localStorage.setItem("adminCategories", JSON.stringify(updated.map((c) => c.name)));
      setDeleteCategoryId(null);
    } catch (err) {
      alert(err.message);
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  // ════════════════════════════════════════════════════════════════════════════
  //  METAL TYPE API CALLS
  // ════════════════════════════════════════════════════════════════════════════

  // GET /api/metal-types  +  GET /api/purities
  const loadMetals = async () => {
    setMetalLoading(true);
    try {
      // Fetch metals and purities in parallel
      const [metalsRes, puritiesRes] = await Promise.all([
        fetch(`${API_BASE}/metal-types`, { headers: authHeaders() }),
        fetch(`${API_BASE}/purities`,    { headers: authHeaders() }),
      ]);
      if (!metalsRes.ok)   throw new Error(`Failed to load metal types (${metalsRes.status})`);
      if (!puritiesRes.ok) throw new Error(`Failed to load purities (${puritiesRes.status})`);

      const metalsData   = await metalsRes.json();
      const puritiesData = await puritiesRes.json();

      const metalList   = Array.isArray(metalsData)   ? metalsData   : (metalsData.data   || []);
      const purityList  = Array.isArray(puritiesData) ? puritiesData : (puritiesData.data || []);
      // metalList   = [{ id, name, slug, description }]
      // purityList  = [{ id, name, slug, metal_type }]   metal_type = metal name string

      setStoredMetals(metalList);

      // Build metalPurities map keyed by metal NAME → array of purity objects { id, name, slug }
      const pMap = {};
      metalList.forEach((m) => { pMap[m.name] = []; });
      purityList.forEach((p) => {
        const key = p.metal_type; // metal name string from backend
        if (!pMap[key]) pMap[key] = [];
        pMap[key].push(p); // keep full object so we have id for deletion
      });
      setMetalPurities(pMap);

      // Keep localStorage name cache for Products dropdown
      localStorage.setItem("adminMetals", JSON.stringify(metalList.map((m) => m.name)));
    } catch (err) {
      console.error(err);
    } finally {
      setMetalLoading(false);
    }
  };

  // POST /api/metal-types
  const handleAddMetal = async () => {
    const name = formatMetalName(metalForm.name);
    if (!name) { alert("Please enter a metal name."); return; }
    if (storedMetals.some((m) => m.name.toLowerCase() === name.toLowerCase())) {
      alert("This metal already exists."); return;
    }
    const slug = metalForm.slug.trim() ||
      name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    try {
      const res = await fetch(`${API_BASE}/metal-types`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ name, slug, description: metalForm.description.trim() || null }),
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.message || `Error ${res.status}`); }
      const created = await res.json();
      const newMetal = { ...(created.data || created), purities: [] };
      const updated = [...storedMetals, newMetal];
      setStoredMetals(updated);
      setMetalPurities((prev) => ({ ...prev, [newMetal.name]: [] }));
      localStorage.setItem("adminMetals", JSON.stringify(updated.map((m) => m.name)));
      setMetalForm({ name: "", slug: "", description: "" });
      setShowAddMetalModal(false);
    } catch (err) { alert(err.message); }
  };

  // Sets pending delete — opens confirm modal
  const confirmDeleteMetal = (metalId) => {
    const metal = storedMetals.find((m) => m.id === metalId);
    if (!metal) return;
    if (storedProducts.some((p) => p.metalType?.toLowerCase() === metal.name.toLowerCase())) {
      alert("You cannot remove this metal because products are using it."); return;
    }
    setDeleteMetalId(metalId);
  };

  // DELETE /api/metal-types/{id}
  const handleDeleteMetal = async () => {
    const metal = storedMetals.find((m) => m.id === deleteMetalId);
    try {
      const res = await fetch(`${API_BASE}/metal-types/${deleteMetalId}`, {
        method: "DELETE", headers: authHeaders(),
      });
      if (!res.ok) throw new Error(`Failed to delete metal type (${res.status})`);
      const updated = storedMetals.filter((m) => m.id !== deleteMetalId);
      setStoredMetals(updated);
      localStorage.setItem("adminMetals", JSON.stringify(updated.map((m) => m.name)));
      if (metal) setMetalPurities((prev) => { const p = { ...prev }; delete p[metal.name]; return p; });
      setDeleteMetalId(null);
    } catch (err) { alert(err.message); }
  };

  // POST /api/purities — { name, slug, metal_type }
  // Called from MetalTypes modal with (metalName, { name, slug })
  const addPurityToMetal = async (metalName, purityData) => {
    const purityName = (purityData?.name ?? "").trim();
    if (!purityName) { alert("Please enter a purity name."); return; }
    const existing = metalPurities[metalName] || [];
    if (existing.some((p) => (p.name ?? p).toLowerCase() === purityName.toLowerCase())) {
      alert("This purity already exists for " + metalName); return;
    }
    const slug = (purityData?.slug ?? "").trim() ||
      purityName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const res = await fetch(`${API_BASE}/purities`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ name: purityName, slug, metal_type: metalName }),
    });
    if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.message || `Error ${res.status}`); }
    const created = await res.json();
    const newPurity = created.data || created;
    setMetalPurities((prev) => ({
      ...prev,
      [metalName]: [...(prev[metalName] || []), newPurity],
    }));
  };

  // DELETE /api/purities/{id}
  const confirmDeletePurity = async (metalName, purity) => {
    // purity can be an object { id, name } or a plain string (legacy)
    const purityName = purity?.name ?? purity;
    const purityId   = purity?.id   ?? null;
    if (storedProducts.some((p) =>
      p.metalType?.toLowerCase() === metalName.toLowerCase() &&
      p.purity?.toLowerCase()    === purityName.toLowerCase()
    )) {
      alert("You cannot remove this purity because products are using it."); return;
    }
    if (!purityId) {
      // Fallback: remove from local state only if no id available
      setMetalPurities((prev) => ({
        ...prev,
        [metalName]: (prev[metalName] || []).filter((p) => (p.name ?? p).toLowerCase() !== purityName.toLowerCase()),
      }));
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/purities/${purityId}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      if (!res.ok) throw new Error(`Failed to delete purity (${res.status})`);
      setMetalPurities((prev) => ({
        ...prev,
        [metalName]: (prev[metalName] || []).filter((p) => (p.id ?? p) !== purityId),
      }));
    } catch (err) { alert(err.message); }
  };

  const getMetalProductCount = (metalName) =>
    storedProducts.filter((p) => p.metalType?.toLowerCase() === metalName.toLowerCase()).length;

  const getPurityProductCount = (metalName, purityName) =>
    storedProducts.filter((p) =>
      p.metalType?.toLowerCase() === metalName.toLowerCase() &&
      p.purity?.toLowerCase() === purityName.toLowerCase()
    ).length;
  // ════════════════════════════════════════════════════════════════════════════

  // ── General helpers ───────────────────────────────────────────────────────
  const formatMetalName = (value) => {
    const t = value.trim();
    if (!t) return "";
    return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  };

  // ════════════════════════════════════════════════════════════════════════════
  //  PRODUCT API CALLS
  // ════════════════════════════════════════════════════════════════════════════

  // GET /api/products
  const loadProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/products`, { headers: authHeaders() });
      if (!res.ok) throw new Error(`Failed to load products (${res.status})`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.data || []);
      // Normalise API field names to frontend field names
      const normalised = list.map((p) => ({
        id:            p.id,
        slug:          p.slug || String(p.id),
        name:          p.name,
        metalType:     p.metal_type,
        category:      p.category,
        purity:        p.purity,
        weight:        p.weight,
        pricePerGram:  p.price_per_gram,
        makingCharges: p.making_charge,
        offerPrice:    p.offer_price,
        totalPrice:    p.total_price,
        description:   p.description,
        stock:         p.stock,
        images:        p.image ? [p.image] : [],
      }));
      setStoredProducts(normalised);
    } catch (err) {
      console.error(err);
    }
  };

  const saveUsers = (u) => { setUsers(u); localStorage.setItem("users", JSON.stringify(u)); };
  const saveAdminUsers = (a) => {
    setAdminUsers(a);
    localStorage.setItem("adminUsers", JSON.stringify(a));
    if (!a.find((item) => item.id === selectedAdminId)) setSelectedAdminId(a[0]?.id || null);
  };
  const resetUserForm = () => { setUserForm({ name: "", email: "", location: "", type: "individual", crmType: "Lead", leadStatus: "New", owner: "Super Admin", totalPurchases: "", status: "active", kyc: "pending", ira: "None", isLead: true, myLead: false, phone: "", tags: "App User" }); setEditingUserId(null); };
  const resetAdminForm = () => { setAdminForm({ name: "", email: "", role: "manager", status: "active", permissions: { dashboard: true, users: true, categories: false, products: true, shipping: false, communication: false, feeSettings: false, policies: false } }); setEditingAdminId(null); };

  const startStockEdit  = () => {};
  const saveStockEdit   = () => {};

  const resetProductForm = () => {
    setFormData({ id: null, productName: "", metalType: "", category: "", purity: "", weight: "", pricePerGram: "", makingCharges: "", offerPrice: "", totalPrice: "", stock: "", productDescription: "" });
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openAddUserModal = () => { resetUserForm(); setShowUserModal(true); };
  const openEditUserModal = (user) => {
    setEditingUserId(user.id);
    setUserForm({ name: user.name || "", email: user.email || "", location: user.location || "", type: user.type || "individual", crmType: user.crmType || "Lead", leadStatus: user.leadStatus || "New", owner: user.owner || "Super Admin", totalPurchases: user.totalPurchases || "", status: user.status || "active", kyc: user.kyc || "pending", ira: user.ira || "None", isLead: Boolean(user.isLead), myLead: Boolean(user.myLead), phone: user.phone || "", tags: (user.tags || []).join(", ") || "App User" });
    setShowUserModal(true);
  };
  const openAddAdminModal = () => { resetAdminForm(); setShowAdminModal(true); };
  const openEditAdminModal = (admin) => {
    setEditingAdminId(admin.id);
    setAdminForm({ name: admin.name || "", email: admin.email || "", role: admin.role || "manager", status: admin.status || "active", permissions: { dashboard: Boolean(admin.permissions?.dashboard), users: Boolean(admin.permissions?.users), categories: Boolean(admin.permissions?.categories), products: Boolean(admin.permissions?.products), shipping: Boolean(admin.permissions?.shipping), communication: Boolean(admin.permissions?.communication), feeSettings: Boolean(admin.permissions?.feeSettings), policies: Boolean(admin.permissions?.policies) } });
    setShowAdminModal(true);
  };

  const handleUserFormChange = (e) => { const { name, value, type, checked } = e.target; setUserForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value })); };
  const handleAdminFormChange = (e) => { const { name, value } = e.target; setAdminForm((prev) => ({ ...prev, [name]: value })); };
  const handleAdminPermissionChange = (key) => { setAdminForm((prev) => ({ ...prev, permissions: { ...prev.permissions, [key]: !prev.permissions[key] } })); };

  const handleSaveUser = () => {
    if (!userForm.name.trim() || !userForm.email.trim() || !userForm.location.trim()) { alert("Please fill name, email and location."); return; }
    const payload = { id: editingUserId || Date.now(), name: userForm.name.trim(), email: userForm.email.trim(), location: userForm.location.trim(), type: userForm.type, crmType: userForm.crmType, leadStatus: userForm.leadStatus, owner: userForm.owner.trim() || "Super Admin", totalPurchases: Number(userForm.totalPurchases || 0), status: userForm.status, kyc: userForm.kyc, ira: userForm.ira, isLead: Boolean(userForm.isLead), myLead: Boolean(userForm.myLead), phone: userForm.phone.trim(), tags: userForm.tags.split(",").map((i) => i.trim()).filter(Boolean) };
    saveUsers(editingUserId ? users.map((i) => (i.id === editingUserId ? payload : i)) : [payload, ...users]);
    setShowUserModal(false);
    resetUserForm();
  };

  const handleSaveAdmin = () => {
    if (!adminForm.name.trim() || !adminForm.email.trim() || !adminForm.role.trim()) { alert("Please fill name, email and role."); return; }
    const payload = { id: editingAdminId || Date.now(), name: adminForm.name.trim(), email: adminForm.email.trim(), role: adminForm.role, status: adminForm.status, permissions: adminForm.permissions, createdAt: editingAdminId ? adminUsers.find((i) => i.id === editingAdminId)?.createdAt || new Date().toISOString() : new Date().toISOString(), lastLogin: editingAdminId ? adminUsers.find((i) => i.id === editingAdminId)?.lastLogin || new Date().toISOString() : new Date().toISOString() };
    saveAdminUsers(editingAdminId ? adminUsers.map((i) => (i.id === editingAdminId ? payload : i)) : [payload, ...adminUsers]);
    setSelectedAdminId(payload.id);
    setShowAdminModal(false);
    resetAdminForm();
  };

  const handleDeleteUser = (id) => { if (!window.confirm("Are you sure?")) return; saveUsers(users.filter((i) => i.id !== id)); };
  const handleDeleteAdmin = (id) => { if (!window.confirm("Are you sure?")) return; saveAdminUsers(adminUsers.filter((i) => i.id !== id)); };
  const handleToggleUserStatus = (id) => { saveUsers(users.map((i) => i.id === id ? { ...i, status: i.status === "active" ? "inactive" : "active" } : i)); };
  const handleToggleAdminStatus = (id) => { saveAdminUsers(adminUsers.map((i) => i.id === id ? { ...i, status: i.status === "active" ? "inactive" : "active" } : i)); };

  const exportUsersCSV = () => {
    const headers = ["Name", "Email", "Location", "Type", "CRM Type", "Lead Status", "Owner", "Total Purchases", "Status", "KYC", "IRA", "Phone"];
    const rows = filteredUsers.map((u) => [u.name, u.email, u.location, u.type, u.crmType, u.leadStatus, u.owner, u.totalPurchases, u.status, u.kyc, u.ira, u.phone || ""]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCommunicationSave = () => { localStorage.setItem("adminCommunicationSettings", JSON.stringify(communicationSettings)); alert("Communication settings saved"); };

  // ── Effects ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (!token || !loggedInUser) { navigate("/login"); return; }
    const role = (loggedInUser.role || "").toLowerCase();
    if (!role.includes("admin") && role !== "manager" && !loggedInUser.isAdmin) { navigate("/login"); return; }
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(savedUsers.length ? savedUsers : (() => { const d = createDemoUsers(); localStorage.setItem("users", JSON.stringify(d)); return d; })());
    loadProducts();
    setSelectedAdminId(adminUsers[0]?.id || null);
    loadMetals();
    loadCategories();
  }, [navigate]);

  useEffect(() => {
    const gold = storedProducts.filter((p) => p.metalType?.toLowerCase() === "gold").length;
    const silver = storedProducts.filter((p) => p.metalType?.toLowerCase() === "silver").length;
    const profit = storedProducts.reduce((a, c) => a + (Number(c.totalPrice) || 0), 0);
    setDashboardStats({ totalCustomers: users.length, totalProfit: profit, activeUsers: users.filter((u) => u.status === "active").length, activeShipment: 12, delivered: 85, goldCount: gold, silverCount: silver });
  }, [storedProducts, users]);

  useEffect(() => {
    const w = Number(formData.weight) || 0, ppg = Number(formData.pricePerGram) || 0, mc = Number(formData.makingCharges) || 0, op = Number(formData.offerPrice) || 0;
    const total = w * ppg + mc - op;
    setFormData((prev) => {
      const next = prev.metalType && (prev.weight !== "" || prev.pricePerGram !== "" || prev.makingCharges !== "" || prev.offerPrice !== "") ? String(Math.max(total, 0)) : "";
      return prev.totalPrice === next ? prev : { ...prev, totalPrice: next };
    });
  }, [formData.weight, formData.pricePerGram, formData.makingCharges, formData.offerPrice, formData.metalType]);

  // ── Derived data ──────────────────────────────────────────────────────────
  const filteredUsers = users.filter((user) => {
    const tab = userTab === "all" ? true : userTab === "individuals" ? user.type === "individual" : user.type === "business";
    return tab && user.name?.toLowerCase().includes(userFilters.name.toLowerCase()) && user.email?.toLowerCase().includes(userFilters.email.toLowerCase()) && user.location?.toLowerCase().includes(userFilters.location.toLowerCase()) && (userFilters.status ? user.status === userFilters.status : true) && (userFilters.kyc ? user.kyc === userFilters.kyc : true) && (userFilters.crmType ? user.crmType === userFilters.crmType : true) && (userFilters.leadStatus ? user.leadStatus === userFilters.leadStatus : true) && (userFilters.type ? user.type === userFilters.type : true) && (userFilters.leadsOnly ? user.isLead : true) && (userFilters.myLeads ? user.myLead : true);
  });

  const filteredAdmins = adminUsers.filter((a) => { const t = adminSearch.toLowerCase(); return a.name?.toLowerCase().includes(t) || a.email?.toLowerCase().includes(t) || a.role?.toLowerCase().includes(t); });
  const selectedAdmin = adminUsers.find((i) => i.id === selectedAdminId) || null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const u = { ...prev, [name]: value };
      if (name === "metalType") { u.purity = ""; if (!value) { u.weight = ""; u.pricePerGram = ""; u.makingCharges = ""; u.offerPrice = ""; u.totalPrice = ""; u.stock = ""; } }
      return u;
    });
  };

  const confirmDeleteProduct = (productId) => setDeleteProductId(productId);

  // DELETE /api/products/{id}
  const handleDeleteProduct = async () => {
    try {
      const res = await fetch(`${API_BASE}/products/${deleteProductId}`, {
        method: "DELETE", headers: authHeaders(),
      });
      if (!res.ok) throw new Error(`Failed to delete product (${res.status})`);
      setStoredProducts((prev) => prev.filter((p) => p.id !== deleteProductId));
      setDeleteProductId(null);
    } catch (err) { alert(err.message); }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const remaining = 4 - previews.length;
    if (remaining <= 0) { alert("Maximum 4 images allowed."); return; }
    const allowed = files.slice(0, remaining);
    if (files.length > remaining) alert(`Only ${remaining} more image(s) can be added. Max 4 total.`);
    const imgs = await Promise.all(allowed.map((f) => new Promise((res) => {
      const r = new FileReader();
      r.onloadend = () => res({ id: `${Date.now()}-${Math.random()}-${f.name}`, src: r.result, name: f.name, file: f });
      r.readAsDataURL(f);
    })));
    setPreviews((prev) => [...prev, ...imgs]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (i) => setPreviews((prev) => prev.filter((_, idx) => idx !== i));
  const handleDragStart = (i) => { dragItemIndex.current = i; };
  const handleDragEnter = (i) => { dragOverItemIndex.current = i; };
  const handleDrop = () => {
    const from = dragItemIndex.current, to = dragOverItemIndex.current;
    if (from === null || to === null || from === to || from < 0 || to < 0) { dragItemIndex.current = null; dragOverItemIndex.current = null; return; }
    setPreviews((prev) => { const a = [...prev], item = a[from]; a.splice(from, 1); a.splice(to, 0, item); return a; });
    dragItemIndex.current = null; dragOverItemIndex.current = null;
  };
  const handleDragEnd = () => { dragItemIndex.current = null; dragOverItemIndex.current = null; };

  // POST /api/products  or  PUT /api/products/{id}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.productName.trim() || !formData.metalType.trim() || !formData.productDescription.trim() || !formData.purity.trim() || !formData.weight.toString().trim() || !formData.pricePerGram.toString().trim() || !formData.makingCharges.toString().trim() || !formData.stock.toString().trim() || !formData.totalPrice.toString().trim()) {
      alert("Please fill all required product fields."); return;
    }

    const isEditing = Boolean(formData.id);

    // Build FormData so image file can be sent
    const body = new FormData();
    body.append("name",           formData.productName.trim());
    body.append("metal_type",     formData.metalType.trim());
    body.append("category",       formData.category?.trim() || "");
    body.append("purity",         formData.purity.trim());
    body.append("weight",         formData.weight);
    body.append("price_per_gram", formData.pricePerGram);
    body.append("making_charge",  formData.makingCharges);
    body.append("offer_price",    formData.offerPrice || 0);
    body.append("total_price",    formData.totalPrice);
    body.append("description",    formData.productDescription.trim());
    body.append("stock",          Number(formData.stock));

    // Send only the first new image file (backend accepts single image field)
    const newImages = previews.filter((img) => img.file);
    if (newImages.length > 0) body.append("image", newImages[0].file);

    // Laravel PUT workaround via _method spoofing
    if (isEditing) body.append("_method", "PUT");

    const url    = isEditing ? `${API_BASE}/products/${formData.id}` : `${API_BASE}/products`;
    const method = "POST"; // always POST — PUT handled via _method for FormData

    // Auth headers without Content-Type (browser sets multipart boundary automatically)
    const headers = {
      "Accept": "application/json",
      "ngrok-skip-browser-warning": "true",
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    };

    try {
      const res = await fetch(url, { method, headers, body });
      if (!res.ok) {
        const text = await res.text();
        console.error("Laravel error response:", text);
        let errMsg = `Error ${res.status}`;
        try { const json = JSON.parse(text); errMsg = json.message || JSON.stringify(json.errors) || errMsg; } catch {}
        throw new Error(errMsg);
      }
      const saved = await res.json();
      const product = saved.data || saved;
      const normalised = {
        id:            product.id,
        slug:          product.slug || String(product.id),
        name:          product.name,
        metalType:     product.metal_type,
        category:      product.category,
        purity:        product.purity,
        weight:        product.weight,
        pricePerGram:  product.price_per_gram,
        makingCharges: product.making_charge,
        offerPrice:    product.offer_price,
        totalPrice:    product.total_price,
        description:   product.description,
        stock:         product.stock,
        images:        product.image ? [product.image] : [],
      };
      setStoredProducts((prev) =>
        isEditing
          ? prev.map((p) => p.id === formData.id ? normalised : p)
          : [normalised, ...prev]
      );
      alert(isEditing ? "Product updated successfully" : "Product saved successfully");
      resetProductForm();
      setShowAddProductForm(false);
      setIsEditMode(false);
    } catch (err) { alert(err.message); }
  };

  const handleShippingFilterChange = (e) => { const { name, value } = e.target; setShippingFilters((prev) => ({ ...prev, [name]: value })); };
  const clearShippingFilters = () => setShippingFilters({ status: "", shipmentType: "" });
  const filteredShipments = shipments.filter((i) => (shippingFilters.status ? i.status === shippingFilters.status : true) && (shippingFilters.shipmentType ? i.type === shippingFilters.shipmentType : true));

  const filteredProducts = storedProducts.filter((p) => {
    const matchMetal = productFilterType === "all" || p.metalType?.toLowerCase() === productFilterType.toLowerCase();
    const matchCat   = categoryFilter === "all"    || p.category?.toLowerCase()  === categoryFilter.toLowerCase();
    return matchMetal && matchCat;
  });

  const getStatusBadgeStyle = (status) => ({ display: "inline-block", padding: "6px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", border: "1px solid #e7dff0", background: status === "Shipment Created" ? "#f3e9fb" : status === "Shipping Estimated by Admin" ? "#efe7f8" : "#f8f1fc", color: "#5d3d75", whiteSpace: "nowrap" });

  // ── Modal styles ──────────────────────────────────────────────────────────
  const modalOverlay = { position: "fixed", inset: 0, background: "rgba(47,36,56,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 999 };
  const modalCard    = { width: "100%", maxWidth: "460px", background: "#fff", borderRadius: "16px", padding: "26px", boxShadow: "0 20px 50px rgba(0,0,0,0.18)" };
  const modalTitle   = { fontSize: "22px", fontWeight: "700", marginBottom: "10px" };
  const modalSubText = { fontSize: "14px", color: "#555", marginBottom: "20px" };
  const modalActions = { display: "flex", justifyContent: "flex-end", gap: "10px" };
  const modalInput   = { height: "44px", border: "1px solid #ddd", borderRadius: "8px", padding: "0 12px", fontSize: "14px", width: "100%", marginBottom: "20px", boxSizing: "border-box" };
  const cancelBtn    = { border: "1px solid #ddd", background: "#fff", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", cursor: "pointer" };
  const confirmBtn   = { background: "#6f3f8f", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer" };
  const dangerBtn    = { background: "#b33939", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "700", cursor: "pointer" };

  // Derived plain-string arrays for dropdowns
  const categoryNames = categories.map((c) => c.name);
  const metalNames    = storedMetals.map((m) => m.name);

  return (
    <div style={page}>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} setShowAddProductForm={setShowAddProductForm} />

      <Mainbar
        activeSection={activeSection}
        dashboardStats={dashboardStats}
        storedMetals={storedMetals}          // [{ id, name, slug, description }] for MetalTypes page
        metalNames={metalNames}              // ["Gold", "Silver", ...] for Products form selects
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
        categories={categories}              // [{ id, name }] for Category page
        categoryNames={categoryNames}        // ["Rings", ...] for Products form dropdown
        setShowAddCategoryModal={setShowAddCategoryModal}
        confirmDeleteCategory={confirmDeleteCategory}
        productFilterType={productFilterType}
        setProductFilterType={setProductFilterType}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
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
          <div style={{ ...modalCard, maxWidth: "520px" }}>
            <div style={modalTitle}>Add Metal</div>

            {/* Name */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Name <span style={{ color: "#b33939" }}>*</span>
              </label>
              <input
                type="text"
                value={metalForm.name}
                onChange={(e) => setMetalForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. Gold"
                style={modalInput}
              />
            </div>

            {/* Slug */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Slug <span style={{ fontSize: "11px", color: "#999", fontWeight: "400" }}>(auto-generated if left blank)</span>
              </label>
              <input
                type="text"
                value={metalForm.slug}
                onChange={(e) => setMetalForm((p) => ({ ...p, slug: e.target.value }))}
                placeholder="e.g. gold"
                style={modalInput}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Description
              </label>
              <textarea
                value={metalForm.description}
                onChange={(e) => setMetalForm((p) => ({ ...p, description: e.target.value }))}
                placeholder="Short description of this metal type"
                rows={3}
                style={{ width: "100%", border: "1px solid #ddd", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }}
              />
            </div>

            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => { setShowAddMetalModal(false); setMetalForm({ name: "", slug: "", description: "" }); }}>Cancel</button>
              <button style={confirmBtn} onClick={handleAddMetal}>Add Metal</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Metal Modal ── */}
      {deleteMetalId !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Metal Type?</div>
            <div style={modalSubText}>
              This will remove <strong>{storedMetals.find((m) => m.id === deleteMetalId)?.name}</strong>.
            </div>
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => setDeleteMetalId(null)}>Cancel</button>
              <button style={dangerBtn} onClick={handleDeleteMetal}>Yes, Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add Category Modal ── */}
      {showAddCategoryModal && (
        <div style={modalOverlay}>
          <div style={{ ...modalCard, maxWidth: "520px" }}>
            <div style={modalTitle}>Add Category</div>
            {categoryError && (
              <div style={{ color: "#b33939", fontSize: "13px", marginBottom: "10px" }}>{categoryError}</div>
            )}

            {/* Name */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Name <span style={{ color: "#b33939" }}>*</span>
              </label>
              <input
                type="text"
                value={categoryForm.name}
                onChange={(e) => setCategoryForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. Necklaces"
                style={modalInput}
              />
            </div>

            {/* Slug */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Slug <span style={{ fontSize: "11px", color: "#999", fontWeight: "400" }}>(auto-generated if left blank)</span>
              </label>
              <input
                type="text"
                value={categoryForm.slug}
                onChange={(e) => setCategoryForm((p) => ({ ...p, slug: e.target.value }))}
                placeholder="e.g. necklaces"
                style={modalInput}
              />
            </div>

            {/* Image URL */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Image URL
              </label>
              <input
                type="text"
                value={categoryForm.image}
                onChange={(e) => setCategoryForm((p) => ({ ...p, image: e.target.value }))}
                placeholder="https://example.com/image.jpg"
                style={modalInput}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Description
              </label>
              <textarea
                value={categoryForm.description}
                onChange={(e) => setCategoryForm((p) => ({ ...p, description: e.target.value }))}
                placeholder="Short description of this category"
                rows={3}
                style={{ width: "100%", border: "1px solid #ddd", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box", marginBottom: "0" }}
              />
            </div>

            {/* Stock */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#333", display: "block", marginBottom: "6px" }}>
                Stock
              </label>
              <input
                type="number"
                value={categoryForm.stock}
                onChange={(e) => setCategoryForm((p) => ({ ...p, stock: e.target.value }))}
                placeholder="0"
                min="0"
                style={modalInput}
              />
            </div>

            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => {
                setShowAddCategoryModal(false);
                setCategoryForm({ name: "", slug: "", image: "", description: "", stock: "" });
                setCategoryError("");
              }}>Cancel</button>
              <button style={confirmBtn} onClick={handleAddCategory} disabled={categoryLoading}>
                {categoryLoading ? "Saving…" : "Add Category"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Category Modal ── */}
      {deleteCategoryId !== null && (
        <div style={modalOverlay}>
          <div style={modalCard}>
            <div style={modalTitle}>Remove Category?</div>
            <div style={modalSubText}>
              This will remove <strong>{categories.find((c) => c.id === deleteCategoryId)?.name}</strong>.
            </div>
            <div style={modalActions}>
              <button style={cancelBtn} onClick={() => setDeleteCategoryId(null)}>Cancel</button>
              <button style={dangerBtn} onClick={handleDeleteCategory}>Yes, Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}