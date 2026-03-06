// import { useState, useEffect } from "react";
// import logo from "../assets/logo.avif";

// import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const header = {
//     width: "100%",
//     borderBottom: "1px solid #eee",
//     background: "white",
//     position: "relative",
//     zIndex: 1000
//   };

//   const headerContainer = {
//     maxWidth: "1400px",
//     margin: "auto",
//     padding: "18px 20px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between"
//   };

//   const logoStyle = { height: "48px", objectFit: "contain" };

//   const navMenu = {
//     display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
//     flexDirection: isMobile ? "column" : "row",
//     gap: isMobile ? "12px" : "26px",
//     fontSize: "14px",
//     position: isMobile ? "absolute" : "static",
//     top: isMobile ? "100%" : "auto",
//     left: 0,
//     width: isMobile ? "100%" : "auto",
//     background: isMobile ? "#fff" : "transparent",
//     padding: isMobile ? "20px" : 0,
//     boxShadow: isMobile ? "0px 4px 8px rgba(0,0,0,0.1)" : "none",
//   };

//   const navLink = {
//     textDecoration: "none",
//     color: "#222",
//     display: "flex",
//     alignItems: "center",
//     gap: "4px",
//     fontWeight: "500",
//     cursor: "pointer"
//   };

//   const headerIcons = {
//     display: "flex",
//     alignItems: "center",
//     gap: "18px"
//   };

//   const iconStyle = {
//     fontSize: "16px",
//     cursor: "pointer",
//     color: "#222"
//   };

//   const currency = {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     background: "#333",
//     color: "white",
//     padding: "6px 10px",
//     borderRadius: "6px",
//     fontSize: "13px"
//   };

//   const flag = { width: "16px" };

//   return (
//     <header style={header}>
//       <div style={headerContainer}>
//         {/* LOGO */}
//         <div>
//           <img src={logo} alt="Amethyst Store Logo" style={logoStyle} />
//         </div>

//         {/* DESKTOP / MOBILE NAV */}
//         {!isMobile && (
//           <nav style={navMenu}>
//             <a href="#" style={navLink}>Instagram Live</a>
//             <a href="#" style={navLink}>March Edit</a>
//             <a href="#" style={navLink}>Necklaces <IoChevronDown /></a>
//             <a href="#" style={navLink}>Earrings <IoChevronDown /></a>
//             <a href="#" style={navLink}>Bangles <IoChevronDown /></a>
//             <a href="#" style={navLink}>Pendants <IoChevronDown /></a>
//             <a href="#" style={navLink}>More Categories <IoChevronDown /></a>
//             <a href="#" style={navLink}>Collections <IoChevronDown /></a>
//           </nav>
//         )}

//         {/* RIGHT ICONS */}
//         <div style={headerIcons}>
//           {/* MOBILE HAMBURGER */}
//           {isMobile && (
//             <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer", fontSize: "20px" }}>
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>
//           )}

//           <Link to="/signup">
//             <FaUser style={iconStyle} />
//           </Link>

//           <FaSearch style={iconStyle} />
//           <FaShoppingBag style={iconStyle} />

//           <div style={currency}>
//             <img src="https://flagcdn.com/w20/in.png" alt="India Flag" style={flag} />
//             <span>INR</span>
//             <IoChevronDown />
//           </div>
//         </div>

//         {/* MOBILE NAV LINKS */}
//         {isMobile && menuOpen && (
//           <nav style={navMenu}>
//             <a href="#" style={navLink}>Instagram Live</a>
//             <a href="#" style={navLink}>March Edit</a>
//             <a href="#" style={navLink}>Necklaces <IoChevronDown /></a>
//             <a href="#" style={navLink}>Earrings <IoChevronDown /></a>
//             <a href="#" style={navLink}>Bangles <IoChevronDown /></a>
//             <a href="#" style={navLink}>Pendants <IoChevronDown /></a>
//             <a href="#" style={navLink}>More Categories <IoChevronDown /></a>
//             <a href="#" style={navLink}>Collections <IoChevronDown /></a>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState, useEffect } from "react";
import logo from "../assets/logo.avif";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Instagram Live" },
    { label: "March Edit" },
    { label: "Necklaces", mega: true },
    { label: "Earrings" },
    { label: "Bangles" },
    { label: "Pendants" },
    { label: "More Categories" },
    { label: "Collections" },
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
    justifyContent: "space-between",
  };

  const logoStyle = {
    height: isMobile ? "42px" : "86px",
  };

  const navWrap = {
    flex: 1,
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
  });

  const rightIcons = {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  };

  const currency = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#3f3f3f",
    color: "white",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "14px",
  };

  const megaMenuWrapper = {
    position: "absolute",
    left: 0,
    top: "100%",
    width: "100%",
    background: "#f7f7f7",
    borderTop: "1px solid #eee",
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
    letterSpacing: "4px",
    marginBottom: "22px",
  };

  const item = {
    fontSize: "14px",
    marginBottom: "12px",
    cursor: "pointer",
  };

  return (
    <header
      style={header}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div style={headerContainer}>
        <img src={logo} alt="logo" style={logoStyle} />

        {!isMobile && (
          <nav style={navWrap}>
            {navItems.map((nav) => (
              <div
                key={nav.label}
                style={navItem(activeMegaMenu === nav.label)}
                onMouseEnter={() => nav.mega && setActiveMegaMenu(nav.label)}
              >
                {nav.label}
                {nav.mega && <IoChevronDown />}
              </div>
            ))}
          </nav>
        )}

        <div style={rightIcons}>
          {isMobile && (
            <div onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          )}

          <Link to="/signup">
            <FaUser />
          </Link>

          <FaSearch />
          <FaShoppingBag />

          <div style={currency}>
            <img src="https://flagcdn.com/w20/in.png" width="18" alt="flag" />
            INR
            <IoChevronDown />
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
                    <div key={index} style={item}>
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