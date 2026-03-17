
import { useState, useEffect, useRef } from "react";
import logo from "../assets/femina.png";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

// ── Same base URL as AdminPage — change once here if your server moves ───────
const API_BASE = "https://initially-loamless-elroy.ngrok-free.dev/api";
// ────────────────────────────────────────────────────────────────────────────

function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [categories, setCategories] = useState([]);   // plain string names

  const currencyRef = useRef(null);
  const productsHoverTimer = useRef(null);

  const currencies = [
    { code: "USD", label: "US Dollar",      flag: "https://flagcdn.com/w20/us.png" },
    { code: "EUR", label: "Euro",            flag: "https://flagcdn.com/w20/eu.png" },
    { code: "GBP", label: "British Pound",   flag: "https://flagcdn.com/w20/gb.png" },
    { code: "CAD", label: "Canadian Dollar", flag: "https://flagcdn.com/w20/ca.png" },
    { code: "INR", label: "Indian Rupee",    flag: "https://flagcdn.com/w20/in.png" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    const saved = localStorage.getItem("selectedCurrency");
    if (saved) return JSON.parse(saved);
    return currencies.find((c) => c.code === "INR");
  });

  // ── Fetch categories from API; fall back to localStorage cache ─────────────
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch(`${API_BASE}/categories`, {
          headers: {
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "true",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (!res.ok) throw new Error("API unavailable");
        const data = await res.json();
        const list = Array.isArray(data) ? data : (data.data || []);
        const names = list.map((c) => c.name);
        setCategories(names);
        // Keep cache in sync for MarchEdit / offline use
        localStorage.setItem("adminCategories", JSON.stringify(names));
      } catch {
        // Fallback to whatever AdminPage cached in localStorage
        try {
          const stored = JSON.parse(localStorage.getItem("adminCategories") || "[]");
          setCategories(stored);
        } catch {
          setCategories([]);
        }
      }
    };

    fetchCategories();

    // Re-fetch if AdminPage updates the cache
    const onStorage = (e) => {
      if (e.key === "adminCategories") {
        try { setCategories(JSON.parse(e.newValue || "[]")); } catch {}
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  // ─────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("loggedInUser");
      const token = localStorage.getItem("token");
      let parsedUser = null;
      try { parsedUser = user ? JSON.parse(user) : null; } catch { parsedUser = null; }
      setLoggedInUser(parsedUser);
      setIsLoggedIn(!!parsedUser && !!token);
    };
    checkLogin();
    window.addEventListener("storage", checkLogin);
    window.addEventListener("authChanged", checkLogin);
    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("authChanged", checkLogin);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
      setCartCount(total);
    };
    loadCart();
    window.addEventListener("storage", loadCart);
    window.addEventListener("cartUpdated", loadCart);
    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  useEffect(() => {
    const outside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem("selectedCurrency", JSON.stringify(currency));
    setCurrencyOpen(false);
  };

  const handleProductsEnter = () => {
    clearTimeout(productsHoverTimer.current);
    setHoveredNav("Products");
  };

  const handleProductsLeave = () => {
    productsHoverTimer.current = setTimeout(() => setHoveredNav(null), 150);
  };

  const handleCategoryClick = (category) => {
    setHoveredNav(null);
    navigate(`/march-edit?category=${encodeURIComponent(category)}`);
  };

  const profileRedirectPath = !isLoggedIn
    ? "/login"
    : loggedInUser?.role === "admin"
    ? "/admin"
    : "/profile";

  // ── Styles ────────────────────────────────────────────────────────────────
  const header = {
    width: "100%",
    background: "#fff",
    borderBottom: "1px solid #eee",
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
    zIndex: 100,
  };

  const headerContainer = {
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "18px 28px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
  };

  const logoSection   = { display: "flex", alignItems: "center" };
  const centerSection = { display: "flex", justifyContent: "center" };
  const rightSection  = { display: "flex", justifyContent: "flex-end", alignItems: "center" };
  const logoStyle     = { height: isMobile ? "42px" : "86px", objectFit: "contain" };
  const navWrap       = { display: "flex", gap: "40px", alignItems: "center" };
  const rightIcons    = { display: "flex", alignItems: "center", gap: "22px" };
  const iconStyle     = { fontSize: "16px", color: "#000", cursor: "pointer", textDecoration: "none" };

  const navLinkStyle = (label) => ({
    fontSize: "17px",
    fontWeight: "400",
    color: "#000",
    textDecoration: "none",
    borderBottom: hoveredNav === label ? "2px solid black" : "2px solid transparent",
    paddingBottom: "4px",
    transition: "border-bottom 0.2s ease",
    cursor: "pointer",
  });

  const productsWrap = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
  };

  const productsLabel = {
    ...navLinkStyle("Products"),
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const dropdown = {
    position: "absolute",
    top: "calc(100% + 14px)",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    border: "1px solid #ede6f4",
    boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
    minWidth: "180px",
    zIndex: 200,
    overflow: "hidden",
  };

  const dropdownAllItem = (hovered) => ({
    display: "block",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    color: hovered ? "#8a4aa2" : "#111",
    background: hovered ? "#faf5ff" : "#fff",
    cursor: "pointer",
    borderBottom: "1px solid #ede6f4",
    letterSpacing: "0.3px",
    whiteSpace: "nowrap",
  });

  const dropdownItem = (hovered) => ({
    display: "block",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "500",
    color: hovered ? "#8a4aa2" : "#333",
    background: hovered ? "#faf5ff" : "#fff",
    cursor: "pointer",
    borderBottom: "1px solid #f5f0fa",
    letterSpacing: "0.3px",
    whiteSpace: "nowrap",
  });

  const currencyWrap = { position: "relative" };
  const currencyButton = {
    display: "flex", alignItems: "center", gap: "8px",
    background: "#3f3f3f", color: "#fff", padding: "10px 14px",
    borderRadius: "8px", border: "none", cursor: "pointer",
  };
  const currencyDropdown = {
    position: "absolute", top: "110%", right: 0,
    width: "260px", background: "#3f3f3f", borderRadius: "10px", zIndex: 50,
  };
  const currencyItem = {
    display: "flex", alignItems: "center", gap: "12px",
    padding: "14px", color: "#fff", cursor: "pointer",
  };

  const otherNavItems = [
    { label: "About Us",   path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header style={header}>
      <div style={headerContainer}>

        {/* ── Logo ── */}
        <div style={logoSection}>
          <Link to="/"><img src={logo} alt="logo" style={logoStyle} /></Link>
        </div>

        {/* ── Nav ── */}
        <div style={centerSection}>
          {!isMobile && (
            <nav style={navWrap}>
              {/* Home */}
              <Link to="/" onMouseEnter={() => setHoveredNav("Home")} onMouseLeave={() => setHoveredNav(null)} style={navLinkStyle("Home")}>
                Home
              </Link>

              {/* Products + dropdown */}
              <div style={productsWrap} onMouseEnter={handleProductsEnter} onMouseLeave={handleProductsLeave}>
                <Link to="/march-edit" style={productsLabel}>
                  Products
                  <IoChevronDown size={13} style={{ marginTop: "1px", color: "#666" }} />
                </Link>

                {hoveredNav === "Products" && (
                  <div style={dropdown}>
                    <div
                      style={dropdownAllItem(hoveredDropdownItem === "__all__")}
                      onMouseEnter={() => setHoveredDropdownItem("__all__")}
                      onMouseLeave={() => setHoveredDropdownItem(null)}
                      onClick={() => { setHoveredNav(null); navigate("/march-edit"); }}
                    >
                      All Products
                    </div>

                    {categories.length > 0 ? (
                      categories.map((cat) => (
                        <div
                          key={cat}
                          style={dropdownItem(hoveredDropdownItem === cat)}
                          onMouseEnter={() => setHoveredDropdownItem(cat)}
                          onMouseLeave={() => setHoveredDropdownItem(null)}
                          onClick={() => handleCategoryClick(cat)}
                        >
                          {cat}
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: "12px 20px", fontSize: "13px", color: "#aaa" }}>
                        No categories yet
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* About Us & Contact Us */}
              {otherNavItems.map((nav) => (
                <Link
                  key={nav.label}
                  to={nav.path}
                  onMouseEnter={() => setHoveredNav(nav.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={navLinkStyle(nav.label)}
                >
                  {nav.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* ── Right icons ── */}
        <div style={rightSection}>
          <div style={rightIcons}>
            {isMobile && (
              <div onClick={() => setMenuOpen(!menuOpen)} style={iconStyle}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </div>
            )}

            <Link to={profileRedirectPath} style={iconStyle}><FaUser /></Link>
            <FaSearch style={iconStyle} />

            <Link to="/cart" style={{ ...iconStyle, position: "relative" }}>
              <FaShoppingBag />
              {cartCount > 0 && (
                <span style={{
                  position: "absolute", top: "-8px", right: "-10px",
                  background: "#8a4aa2", color: "#fff", fontSize: "10px",
                  minWidth: "16px", height: "16px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: "700",
                }}>
                  {cartCount}
                </span>
              )}
            </Link>

            <div style={currencyWrap} ref={currencyRef}>
              <button style={currencyButton} onClick={() => setCurrencyOpen(!currencyOpen)}>
                <img src={selectedCurrency.flag} width="18" alt="" />
                {selectedCurrency.code}
                <IoChevronDown />
              </button>

              {currencyOpen && (
                <div style={currencyDropdown}>
                  {currencies.map((curr) => (
                    <div key={curr.code} style={currencyItem} onClick={() => handleCurrencyChange(curr)}>
                      <img src={curr.flag} width="22" alt="" />
                      {curr.label} ({curr.code})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
