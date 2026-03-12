


import { useState, useEffect, useRef } from "react";
import logo from "../assets/femina.png";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const currencyRef = useRef(null);

  const currencies = [
    {
      code: "USD",
      label: "US Dollar",
      symbol: "$",
      rate: 0.012,
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      code: "EUR",
      label: "Euro",
      symbol: "€",
      rate: 0.011,
      flag: "https://flagcdn.com/w20/eu.png",
    },
    {
      code: "GBP",
      label: "British Pound",
      symbol: "£",
      rate: 0.0095,
      flag: "https://flagcdn.com/w20/gb.png",
    },
    {
      code: "CAD",
      label: "Canadian Dollar",
      symbol: "C$",
      rate: 0.016,
      flag: "https://flagcdn.com/w20/ca.png",
    },
    {
      code: "INR",
      label: "Indian Rupee",
      symbol: "₹",
      rate: 1,
      flag: "https://flagcdn.com/w20/in.png",
    },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    const saved = localStorage.getItem("selectedCurrency");
    if (saved) {
      return JSON.parse(saved);
    }
    return currencies.find((item) => item.code === "INR");
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
      setCartCount(total);
    };

    loadCartCount();
    window.addEventListener("storage", loadCartCount);
    window.addEventListener("cartUpdated", loadCartCount);

    return () => {
      window.removeEventListener("storage", loadCartCount);
      window.removeEventListener("cartUpdated", loadCartCount);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setCurrencyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem("selectedCurrency", JSON.stringify(currency));
    setCurrencyOpen(false);

    window.dispatchEvent(new Event("currencyChanged"));
  };

  const navItems = [
    { label: "Instagram Live", path: "/instagram-live" },
    { label: "March Edit", path: "/march-edit" },
    { label: "Necklaces", mega: true },
    { label: "Earrings", path: "/earrings", mega: true },
    { label: "Bangles", path: "/bangles", mega: true },
    { label: "Pendants", path: "/pendants", mega: true },
    { label: "More Categories", path: "/more-categories", mega: true },
    { label: "Collections", path: "/collections", mega: true },
  ];

  const megaData = [
    { title: "ALL NECKLACES", items: ["TOP 50 NECKLACES"] },
    {
      title: "FINISH AND DESIGN",
      items: [
        "Boho Goddess 2.0",
        "Pakshi Collection",
        "Deep Nagas And Moissanite",
        "Avikam-Diamond Design",
        "Deep Nagas And Kundan",
        "Gold Plated Kundan",
        "Gold Plated Stone",
        "Moissanite Collection",
        "Mother of Pearls",
        "Nagas/ Nakshi",
        "Swarovski",
        "Victorian",
        "Oxidised",
        "Beads",
      ],
    },
    {
      title: "JEWEL TYPE",
      items: [
        "Necklace And Earrings",
        "Reversible Necklace",
        "Short Necklace",
        "Long Necklace",
        "Beads/ Chain",
        "Mini Chokers",
        "Choker",
        "Gutta Pusalu",
        "Close Setting",
        "Mango Mala",
        "Kaasu Maalai",
        "Attigai",
      ],
    },
    {
      title: "PRICE RANGE",
      items: [
        "Less Than Rs.25000",
        "Rs.25000 to Rs.50000",
        "Rs.50000 to Rs.75000",
        "Rs.75000 to Rs.100000",
        "Rs.100000 to Rs.150000",
      ],
    },
    {
      title: "STYLE",
      items: ["South Indian", "North Indian"],
    },
  ];

  const header = {
    width: "100%",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "relative",
    zIndex: 1000,
  };

  const headerContainer = {
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "18px 28px",
    display: "flex",
    alignItems: "center",
  };

  const leftSection = {
    flex: 1,
    display: "flex",
    alignItems: "center",
  };

  const centerSection = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const rightSection = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const logoStyle = {
    height: isMobile ? "42px" : "86px",
    objectFit: "contain",
    cursor: "pointer",
  };

  const navWrap = {
    display: "flex",
    justifyContent: "center",
    gap: "34px",
  };

  const navItem = (active) => ({
    fontSize: "15px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    paddingBottom: "14px",
    borderBottom: active ? "2px solid #222" : "2px solid transparent",
    textDecoration: "none",
    color: "#000",
    transition: "all 0.2s ease",
    fontWeight: 400,
    whiteSpace: "nowrap",
  });

  const navItemWrapper = {
    display: "flex",
    alignItems: "center",
  };

  const rightIcons = {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  };

  const iconStyle = {
    color: "#000",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
  };

  const currencyWrap = {
    position: "relative",
  };

  const currencyButton = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#3f3f3f",
    color: "white",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
  };

  const currencyDropdown = {
    position: "absolute",
    top: "calc(100% + 12px)",
    right: 0,
    width: "280px",
    background: "#3f3f3f",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    zIndex: 2000,
  };

  const currencyItem = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px 18px",
    color: "#fff",
    cursor: "pointer",
    background: active ? "#4a4a4a" : "#3f3f3f",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: "15px",
  });

  const megaMenuWrapper = {
    position: "absolute",
    left: 0,
    top: "100%",
    width: "100%",
    background: "#f7f7f7",
    borderTop: "1px solid #eee",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  };

  const megaMenu = {
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "36px 60px",
  };

  const megaGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "60px",
  };

  const columnTitle = {
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "2px",
    marginBottom: "22px",
  };

  const item = {
    fontSize: "14px",
    marginBottom: "12px",
    cursor: "pointer",
    color: "#222",
    transition: "color 0.2s ease",
  };

  const handleNavEnter = (nav) => {
    setHoveredNav(nav.label);

    if (nav.mega) {
      setActiveMegaMenu(nav.label);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleHeaderLeave = () => {
    setHoveredNav(null);
    setActiveMegaMenu(null);
  };

  return (
    <header style={header} onMouseLeave={handleHeaderLeave}>
      <div style={headerContainer}>
        <div style={leftSection}>
          <Link to="/">
            <img src={logo} alt="logo" style={logoStyle} />
          </Link>
        </div>

        <div style={centerSection}>
          {!isMobile && (
            <nav style={navWrap}>
              {navItems.map((nav) => {
                const isActive =
                  hoveredNav === nav.label || activeMegaMenu === nav.label;

                return (
                  <div
                    key={nav.label}
                    style={navItemWrapper}
                    onMouseEnter={() => handleNavEnter(nav)}
                  >
                    {nav.path ? (
                      <Link to={nav.path} style={navItem(isActive)}>
                        {nav.label}
                        {nav.mega && <IoChevronDown style={{ fontSize: "14px" }} />}
                      </Link>
                    ) : (
                      <div style={navItem(isActive)}>
                        {nav.label}
                        {nav.mega && <IoChevronDown style={{ fontSize: "14px" }} />}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          )}
        </div>

        <div style={rightSection}>
          <div style={rightIcons}>
            {isMobile && (
              <div onClick={() => setMenuOpen(!menuOpen)} style={iconStyle}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </div>
            )}

            <Link to="/login" style={iconStyle}>
              <FaUser />
            </Link>

            <FaSearch style={iconStyle} />

            <Link to="/cart" style={{ ...iconStyle, position: "relative" }}>
              <FaShoppingBag />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    background: "#8a4aa2",
                    color: "#fff",
                    fontSize: "10px",
                    minWidth: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    lineHeight: 1,
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            <div style={currencyWrap} ref={currencyRef}>
              <button
                type="button"
                style={currencyButton}
                onClick={() => setCurrencyOpen((prev) => !prev)}
              >
                <img
                  src={selectedCurrency.flag}
                  width="18"
                  alt={selectedCurrency.code}
                  style={{ display: "block", borderRadius: "2px" }}
                />
                {selectedCurrency.code}
                <IoChevronDown
                  style={{
                    transform: currencyOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                />
              </button>

              {currencyOpen && (
                <div style={currencyDropdown}>
                  {currencies.map((curr) => (
                    <div
                      key={curr.code}
                      style={currencyItem(selectedCurrency.code === curr.code)}
                      onClick={() => handleCurrencyChange(curr)}
                    >
                      <img
                        src={curr.flag}
                        width="28"
                        alt={curr.code}
                        style={{ display: "block", borderRadius: "2px" }}
                      />
                      <span>
                        {curr.label} ({curr.code})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isMobile && activeMegaMenu === "Necklaces" && (
        <div style={megaMenuWrapper}>
          <div style={megaMenu}>
            <div style={megaGrid}>
              {megaData.map((col, i) => (
                <div key={i}>
                  <div style={columnTitle}>{col.title}</div>
                  {col.items.map((it, index) => (
                    <div
                      key={index}
                      style={item}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#222";
                      }}
                    >
                      {it}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;