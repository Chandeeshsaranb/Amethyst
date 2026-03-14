// // import { useState, useEffect, useRef } from "react";
// // import logo from "../assets/femina.png";
// // import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// // import { IoChevronDown } from "react-icons/io5";
// // import { Link } from "react-router-dom";

// // function Header() {
// //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [cartCount, setCartCount] = useState(0);
// //   const [currencyOpen, setCurrencyOpen] = useState(false);
// //   const [hoveredNav, setHoveredNav] = useState(null);

// //   const currencyRef = useRef(null);

// //   const currencies = [
// //     { code: "USD", label: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
// //     { code: "EUR", label: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
// //     { code: "GBP", label: "British Pound", flag: "https://flagcdn.com/w20/gb.png" },
// //     { code: "CAD", label: "Canadian Dollar", flag: "https://flagcdn.com/w20/ca.png" },
// //     { code: "INR", label: "Indian Rupee", flag: "https://flagcdn.com/w20/in.png" },
// //   ];

// //   const [selectedCurrency, setSelectedCurrency] = useState(() => {
// //     const saved = localStorage.getItem("selectedCurrency");
// //     if (saved) return JSON.parse(saved);
// //     return currencies.find((c) => c.code === "INR");
// //   });

// //   useEffect(() => {
// //     const link = document.createElement("link");
// //     link.rel = "stylesheet";
// //     link.href =
// //       "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
// //     document.head.appendChild(link);
// //   }, []);

// //   useEffect(() => {
// //     const resize = () => setIsMobile(window.innerWidth <= 768);
// //     window.addEventListener("resize", resize);
// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   useEffect(() => {
// //     const loadCart = () => {
// //       const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
// //       const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
// //       setCartCount(total);
// //     };

// //     loadCart();
// //     window.addEventListener("storage", loadCart);
// //     window.addEventListener("cartUpdated", loadCart);

// //     return () => {
// //       window.removeEventListener("storage", loadCart);
// //       window.removeEventListener("cartUpdated", loadCart);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const outside = (e) => {
// //       if (currencyRef.current && !currencyRef.current.contains(e.target)) {
// //         setCurrencyOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", outside);
// //     return () => document.removeEventListener("mousedown", outside);
// //   }, []);

// //   const handleCurrencyChange = (currency) => {
// //     setSelectedCurrency(currency);
// //     localStorage.setItem("selectedCurrency", JSON.stringify(currency));
// //     setCurrencyOpen(false);
// //   };

// //   const navItems = [
// //     { label: "Necklace", path: "/necklace" },
// //     { label: "Everyday Chain", path: "/everyday-chain" },
// //     { label: "Bangles", path: "/bangles" },
// //   ];

// //   const header = {
// //     width: "100%",
// //     background: "#fff",
// //     borderBottom: "1px solid #eee",
// //     fontFamily: "Montserrat, sans-serif",
// //   };

// //   const headerContainer = {
// //     maxWidth: "1800px",
// //     margin: "0 auto",
// //     padding: "18px 28px",
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr 1fr",
// //     alignItems: "center",
// //   };

// //   const logoSection = {
// //     display: "flex",
// //     alignItems: "center",
// //   };

// //   const centerSection = {
// //     display: "flex",
// //     justifyContent: "center",
// //   };

// //   const rightSection = {
// //     display: "flex",
// //     justifyContent: "flex-end",
// //     alignItems: "center",
// //   };

// //   const logoStyle = {
// //     height: isMobile ? "42px" : "86px",
// //     objectFit: "contain",
// //   };

// //   const navWrap = {
// //     display: "flex",
// //     gap: "40px",
// //   };

// //   const rightIcons = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "22px",
// //   };

// //   const iconStyle = {
// //     fontSize: "16px",
// //     color: "#000",
// //     cursor: "pointer",
// //   };

// //   const currencyWrap = {
// //     position: "relative",
// //   };

// //   const currencyButton = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "8px",
// //     background: "#3f3f3f",
// //     color: "#fff",
// //     padding: "10px 14px",
// //     borderRadius: "8px",
// //     border: "none",
// //     cursor: "pointer",
// //   };

// //   const currencyDropdown = {
// //     position: "absolute",
// //     top: "110%",
// //     right: 0,
// //     width: "260px",
// //     background: "#3f3f3f",
// //     borderRadius: "10px",
// //   };

// //   const currencyItem = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     padding: "14px",
// //     color: "#fff",
// //     cursor: "pointer",
// //   };

// //   return (
// //     <header style={header}>
// //       <div style={headerContainer}>
        
// //         <div style={logoSection}>
// //           <Link to="/">
// //             <img src={logo} alt="logo" style={logoStyle} />
// //           </Link>
// //         </div>

// //         <div style={centerSection}>
// //           {!isMobile && (
// //             <nav style={navWrap}>
// //               {navItems.map((nav) => (
// //                 <Link
// //                   key={nav.label}
// //                   to={nav.path}
// //                   onMouseEnter={() => setHoveredNav(nav.label)}
// //                   onMouseLeave={() => setHoveredNav(null)}
// //                   style={{
// //                     fontSize: "17px",
// //                     fontWeight: "400",
// //                     color: "#000",
// //                     textDecoration: "none",
// //                     borderBottom:
// //                       hoveredNav === nav.label
// //                         ? "2px solid black"
// //                         : "2px solid transparent",
// //                     paddingBottom: "4px",
// //                     transition: "border-bottom 0.2s ease",
// //                   }}
// //                 >
// //                   {nav.label}
// //                 </Link>
// //               ))}
// //             </nav>
// //           )}
// //         </div>

// //         <div style={rightSection}>
// //           <div style={rightIcons}>
// //             {isMobile && (
// //               <div onClick={() => setMenuOpen(!menuOpen)} style={iconStyle}>
// //                 {menuOpen ? <FaTimes /> : <FaBars />}
// //               </div>
// //             )}

// //             <Link to="/register" style={iconStyle}>
// //               <FaUser />
// //             </Link>

// //             <FaSearch style={iconStyle} />

// //             <Link to="/cart" style={{ ...iconStyle, position: "relative" }}>
// //               <FaShoppingBag />
// //               {cartCount > 0 && (
// //                 <span
// //                   style={{
// //                     position: "absolute",
// //                     top: "-8px",
// //                     right: "-10px",
// //                     background: "#8a4aa2",
// //                     color: "#fff",
// //                     fontSize: "10px",
// //                     minWidth: "16px",
// //                     height: "16px",
// //                     borderRadius: "50%",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     fontWeight: "700",
// //                   }}
// //                 >
// //                   {cartCount}
// //                 </span>
// //               )}
// //             </Link>

// //             <div style={currencyWrap} ref={currencyRef}>
// //               <button
// //                 style={currencyButton}
// //                 onClick={() => setCurrencyOpen(!currencyOpen)}
// //               >
// //                 <img src={selectedCurrency.flag} width="18" alt="" />
// //                 {selectedCurrency.code}
// //                 <IoChevronDown />
// //               </button>

// //               {currencyOpen && (
// //                 <div style={currencyDropdown}>
// //                   {currencies.map((curr) => (
// //                     <div
// //                       key={curr.code}
// //                       style={currencyItem}
// //                       onClick={() => handleCurrencyChange(curr)}
// //                     >
// //                       <img src={curr.flag} width="22" alt="" />
// //                       {curr.label} ({curr.code})
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //           </div>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;




// // import { useState, useEffect, useRef } from "react";
// // import logo from "../assets/femina.png";
// // import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// // import { IoChevronDown } from "react-icons/io5";
// // import { Link } from "react-router-dom";

// // function Header() {
// //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [cartCount, setCartCount] = useState(0);
// //   const [currencyOpen, setCurrencyOpen] = useState(false);
// //   const [hoveredNav, setHoveredNav] = useState(null);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   const currencyRef = useRef(null);

// //   const currencies = [
// //     { code: "USD", label: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
// //     { code: "EUR", label: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
// //     { code: "GBP", label: "British Pound", flag: "https://flagcdn.com/w20/gb.png" },
// //     { code: "CAD", label: "Canadian Dollar", flag: "https://flagcdn.com/w20/ca.png" },
// //     { code: "INR", label: "Indian Rupee", flag: "https://flagcdn.com/w20/in.png" },
// //   ];

// //   const [selectedCurrency, setSelectedCurrency] = useState(() => {
// //     const saved = localStorage.getItem("selectedCurrency");
// //     if (saved) return JSON.parse(saved);
// //     return currencies.find((c) => c.code === "INR");
// //   });

// //   useEffect(() => {
// //     const checkLogin = () => {
// //       const user = localStorage.getItem("loggedInUser");
// //       const token = localStorage.getItem("token");
// //       setIsLoggedIn(!!user && !!token);
// //     };

// //     checkLogin();

// //     window.addEventListener("storage", checkLogin);
// //     window.addEventListener("authChanged", checkLogin);

// //     return () => {
// //       window.removeEventListener("storage", checkLogin);
// //       window.removeEventListener("authChanged", checkLogin);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const link = document.createElement("link");
// //     link.rel = "stylesheet";
// //     link.href =
// //       "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
// //     document.head.appendChild(link);
// //   }, []);

// //   useEffect(() => {
// //     const resize = () => setIsMobile(window.innerWidth <= 768);
// //     window.addEventListener("resize", resize);
// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   useEffect(() => {
// //     const loadCart = () => {
// //       const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
// //       const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
// //       setCartCount(total);
// //     };

// //     loadCart();
// //     window.addEventListener("storage", loadCart);
// //     window.addEventListener("cartUpdated", loadCart);

// //     return () => {
// //       window.removeEventListener("storage", loadCart);
// //       window.removeEventListener("cartUpdated", loadCart);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const outside = (e) => {
// //       if (currencyRef.current && !currencyRef.current.contains(e.target)) {
// //         setCurrencyOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", outside);
// //     return () => document.removeEventListener("mousedown", outside);
// //   }, []);

// //   const handleCurrencyChange = (currency) => {
// //     setSelectedCurrency(currency);
// //     localStorage.setItem("selectedCurrency", JSON.stringify(currency));
// //     setCurrencyOpen(false);
// //   };

// //   const navItems = [
// //     { label: "Necklace", path: "/necklace" },
// //     { label: "Everyday Chain", path: "/everyday-chain" },
// //     { label: "Bangles", path: "/bangles" },
// //   ];

// //   const header = {
// //     width: "100%",
// //     background: "#fff",
// //     borderBottom: "1px solid #eee",
// //     fontFamily: "Montserrat, sans-serif",
// //   };

// //   const headerContainer = {
// //     maxWidth: "1800px",
// //     margin: "0 auto",
// //     padding: "18px 28px",
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr 1fr",
// //     alignItems: "center",
// //   };

// //   const logoSection = {
// //     display: "flex",
// //     alignItems: "center",
// //   };

// //   const centerSection = {
// //     display: "flex",
// //     justifyContent: "center",
// //   };

// //   const rightSection = {
// //     display: "flex",
// //     justifyContent: "flex-end",
// //     alignItems: "center",
// //   };

// //   const logoStyle = {
// //     height: isMobile ? "42px" : "86px",
// //     objectFit: "contain",
// //   };

// //   const navWrap = {
// //     display: "flex",
// //     gap: "40px",
// //   };

// //   const rightIcons = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "22px",
// //   };

// //   const iconStyle = {
// //     fontSize: "16px",
// //     color: "#000",
// //     cursor: "pointer",
// //     textDecoration: "none",
// //   };

// //   const currencyWrap = {
// //     position: "relative",
// //   };

// //   const currencyButton = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "8px",
// //     background: "#3f3f3f",
// //     color: "#fff",
// //     padding: "10px 14px",
// //     borderRadius: "8px",
// //     border: "none",
// //     cursor: "pointer",
// //   };

// //   const currencyDropdown = {
// //     position: "absolute",
// //     top: "110%",
// //     right: 0,
// //     width: "260px",
// //     background: "#3f3f3f",
// //     borderRadius: "10px",
// //     zIndex: 50,
// //   };

// //   const currencyItem = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     padding: "14px",
// //     color: "#fff",
// //     cursor: "pointer",
// //   };

// //   return (
// //     <header style={header}>
// //       <div style={headerContainer}>
// //         <div style={logoSection}>
// //           <Link to="/">
// //             <img src={logo} alt="logo" style={logoStyle} />
// //           </Link>
// //         </div>

// //         <div style={centerSection}>
// //           {!isMobile && (
// //             <nav style={navWrap}>
// //               {navItems.map((nav) => (
// //                 <Link
// //                   key={nav.label}
// //                   to={nav.path}
// //                   onMouseEnter={() => setHoveredNav(nav.label)}
// //                   onMouseLeave={() => setHoveredNav(null)}
// //                   style={{
// //                     fontSize: "17px",
// //                     fontWeight: "400",
// //                     color: "#000",
// //                     textDecoration: "none",
// //                     borderBottom:
// //                       hoveredNav === nav.label
// //                         ? "2px solid black"
// //                         : "2px solid transparent",
// //                     paddingBottom: "4px",
// //                     transition: "border-bottom 0.2s ease",
// //                   }}
// //                 >
// //                   {nav.label}
// //                 </Link>
// //               ))}
// //             </nav>
// //           )}
// //         </div>

// //         <div style={rightSection}>
// //           <div style={rightIcons}>
// //             {isMobile && (
// //               <div onClick={() => setMenuOpen(!menuOpen)} style={iconStyle}>
// //                 {menuOpen ? <FaTimes /> : <FaBars />}
// //               </div>
// //             )}

// //             <Link to={isLoggedIn ? "/profile" : "/register"} style={iconStyle}>
// //               <FaUser />
// //             </Link>

// //             <FaSearch style={iconStyle} />

// //             <Link to="/cart" style={{ ...iconStyle, position: "relative" }}>
// //               <FaShoppingBag />
// //               {cartCount > 0 && (
// //                 <span
// //                   style={{
// //                     position: "absolute",
// //                     top: "-8px",
// //                     right: "-10px",
// //                     background: "#8a4aa2",
// //                     color: "#fff",
// //                     fontSize: "10px",
// //                     minWidth: "16px",
// //                     height: "16px",
// //                     borderRadius: "50%",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     fontWeight: "700",
// //                   }}
// //                 >
// //                   {cartCount}
// //                 </span>
// //               )}
// //             </Link>

// //             <div style={currencyWrap} ref={currencyRef}>
// //               <button
// //                 style={currencyButton}
// //                 onClick={() => setCurrencyOpen(!currencyOpen)}
// //               >
// //                 <img src={selectedCurrency.flag} width="18" alt="" />
// //                 {selectedCurrency.code}
// //                 <IoChevronDown />
// //               </button>

// //               {currencyOpen && (
// //                 <div style={currencyDropdown}>
// //                   {currencies.map((curr) => (
// //                     <div
// //                       key={curr.code}
// //                       style={currencyItem}
// //                       onClick={() => handleCurrencyChange(curr)}
// //                     >
// //                       <img src={curr.flag} width="22" alt="" />
// //                       {curr.label} ({curr.code})
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;




// import { useState, useEffect, useRef } from "react";
// import logo from "../assets/femina.png";
// import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
//   const [currencyOpen, setCurrencyOpen] = useState(false);
//   const [hoveredNav, setHoveredNav] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const currencyRef = useRef(null);

//   const currencies = [
//     { code: "USD", label: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
//     { code: "EUR", label: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
//     { code: "GBP", label: "British Pound", flag: "https://flagcdn.com/w20/gb.png" },
//     { code: "CAD", label: "Canadian Dollar", flag: "https://flagcdn.com/w20/ca.png" },
//     { code: "INR", label: "Indian Rupee", flag: "https://flagcdn.com/w20/in.png" },
//   ];

//   const [selectedCurrency, setSelectedCurrency] = useState(() => {
//     const saved = localStorage.getItem("selectedCurrency");
//     if (saved) return JSON.parse(saved);
//     return currencies.find((c) => c.code === "INR");
//   });

//   useEffect(() => {
//     const checkLogin = () => {
//       const user = localStorage.getItem("loggedInUser");
//       const token = localStorage.getItem("token");
//       setIsLoggedIn(!!user && !!token);
//     };

//     checkLogin();

//     window.addEventListener("storage", checkLogin);
//     window.addEventListener("authChanged", checkLogin);

//     return () => {
//       window.removeEventListener("storage", checkLogin);
//       window.removeEventListener("authChanged", checkLogin);
//     };
//   }, []);

//   useEffect(() => {
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
//     document.head.appendChild(link);
//   }, []);

//   useEffect(() => {
//     const resize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   useEffect(() => {
//     const loadCart = () => {
//       const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
//       const total = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
//       setCartCount(total);
//     };

//     loadCart();
//     window.addEventListener("storage", loadCart);
//     window.addEventListener("cartUpdated", loadCart);

//     return () => {
//       window.removeEventListener("storage", loadCart);
//       window.removeEventListener("cartUpdated", loadCart);
//     };
//   }, []);

//   useEffect(() => {
//     const outside = (e) => {
//       if (currencyRef.current && !currencyRef.current.contains(e.target)) {
//         setCurrencyOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", outside);
//     return () => document.removeEventListener("mousedown", outside);
//   }, []);

//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//     localStorage.setItem("selectedCurrency", JSON.stringify(currency));
//     setCurrencyOpen(false);
//   };

//   const navItems = [
//     { label: "Necklace", path: "/necklace" },
//     { label: "Everyday Chain", path: "/everyday-chain" },
//     { label: "Bangles", path: "/bangles" },
//   ];

//   const header = {
//     width: "100%",
//     background: "#fff",
//     borderBottom: "1px solid #eee",
//     fontFamily: "Montserrat, sans-serif",
//   };

//   const headerContainer = {
//     maxWidth: "1800px",
//     margin: "0 auto",
//     padding: "18px 28px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr",
//     alignItems: "center",
//   };

//   const logoSection = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const centerSection = {
//     display: "flex",
//     justifyContent: "center",
//   };

//   const rightSection = {
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   };

//   const logoStyle = {
//     height: isMobile ? "42px" : "86px",
//     objectFit: "contain",
//   };

//   const navWrap = {
//     display: "flex",
//     gap: "40px",
//   };

//   const rightIcons = {
//     display: "flex",
//     alignItems: "center",
//     gap: "22px",
//   };

//   const iconStyle = {
//     fontSize: "16px",
//     color: "#000",
//     cursor: "pointer",
//     textDecoration: "none",
//   };

//   const currencyWrap = {
//     position: "relative",
//   };

//   const currencyButton = {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     background: "#3f3f3f",
//     color: "#fff",
//     padding: "10px 14px",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//   };

//   const currencyDropdown = {
//     position: "absolute",
//     top: "110%",
//     right: 0,
//     width: "260px",
//     background: "#3f3f3f",
//     borderRadius: "10px",
//     zIndex: 50,
//   };

//   const currencyItem = {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "14px",
//     color: "#fff",
//     cursor: "pointer",
//   };

//   return (
//     <header style={header}>
//       <div style={headerContainer}>
//         <div style={logoSection}>
//           <Link to="/">
//             <img src={logo} alt="logo" style={logoStyle} />
//           </Link>
//         </div>

//         <div style={centerSection}>
//           {!isMobile && (
//             <nav style={navWrap}>
//               {navItems.map((nav) => (
//                 <Link
//                   key={nav.label}
//                   to={nav.path}
//                   onMouseEnter={() => setHoveredNav(nav.label)}
//                   onMouseLeave={() => setHoveredNav(null)}
//                   style={{
//                     fontSize: "17px",
//                     fontWeight: "400",
//                     color: "#000",
//                     textDecoration: "none",
//                     borderBottom:
//                       hoveredNav === nav.label
//                         ? "2px solid black"
//                         : "2px solid transparent",
//                     paddingBottom: "4px",
//                     transition: "border-bottom 0.2s ease",
//                   }}
//                 >
//                   {nav.label}
//                 </Link>
//               ))}
//             </nav>
//           )}
//         </div>

//         <div style={rightSection}>
//           <div style={rightIcons}>
//             {isMobile && (
//               <div onClick={() => setMenuOpen(!menuOpen)} style={iconStyle}>
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//               </div>
//             )}

//             <Link to={isLoggedIn ? "/profile" : "/login"} style={iconStyle}>
//               <FaUser />
//             </Link>

//             <FaSearch style={iconStyle} />

//             <Link to="/cart" style={{ ...iconStyle, position: "relative" }}>
//               <FaShoppingBag />
//               {cartCount > 0 && (
//                 <span
//                   style={{
//                     position: "absolute",
//                     top: "-8px",
//                     right: "-10px",
//                     background: "#8a4aa2",
//                     color: "#fff",
//                     fontSize: "10px",
//                     minWidth: "16px",
//                     height: "16px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontWeight: "700",
//                   }}
//                 >
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             <div style={currencyWrap} ref={currencyRef}>
//               <button
//                 style={currencyButton}
//                 onClick={() => setCurrencyOpen(!currencyOpen)}
//               >
//                 <img src={selectedCurrency.flag} width="18" alt="" />
//                 {selectedCurrency.code}
//                 <IoChevronDown />
//               </button>

//               {currencyOpen && (
//                 <div style={currencyDropdown}>
//                   {currencies.map((curr) => (
//                     <div
//                       key={curr.code}
//                       style={currencyItem}
//                       onClick={() => handleCurrencyChange(curr)}
//                     >
//                       <img src={curr.flag} width="22" alt="" />
//                       {curr.label} ({curr.code})
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { useState, useEffect, useRef } from "react";
import logo from "../assets/femina.png";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const currencyRef = useRef(null);

  const currencies = [
    { code: "USD", label: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
    { code: "EUR", label: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
    { code: "GBP", label: "British Pound", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "CAD", label: "Canadian Dollar", flag: "https://flagcdn.com/w20/ca.png" },
    { code: "INR", label: "Indian Rupee", flag: "https://flagcdn.com/w20/in.png" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    const saved = localStorage.getItem("selectedCurrency");
    if (saved) return JSON.parse(saved);
    return currencies.find((c) => c.code === "INR");
  });

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("loggedInUser");
      const token = localStorage.getItem("token");

      let parsedUser = null;
      try {
        parsedUser = user ? JSON.parse(user) : null;
      } catch (error) {
        parsedUser = null;
      }

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
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
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

  const navItems = [
    { label: "Necklace", path: "/necklace" },
    { label: "Everyday Chain", path: "/everyday-chain" },
    { label: "Bangles", path: "/bangles" },
  ];

  const profileRedirectPath = !isLoggedIn
    ? "/login"
    : loggedInUser?.role === "admin"
    ? "/admin"
    : "/profile";

  const header = {
    width: "100%",
    background: "#fff",
    borderBottom: "1px solid #eee",
    fontFamily: "Montserrat, sans-serif",
  };

  const headerContainer = {
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "18px 28px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
  };

  const logoSection = {
    display: "flex",
    alignItems: "center",
  };

  const centerSection = {
    display: "flex",
    justifyContent: "center",
  };

  const rightSection = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const logoStyle = {
    height: isMobile ? "42px" : "86px",
    objectFit: "contain",
  };

  const navWrap = {
    display: "flex",
    gap: "40px",
  };

  const rightIcons = {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  };

  const iconStyle = {
    fontSize: "16px",
    color: "#000",
    cursor: "pointer",
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
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  };

  const currencyDropdown = {
    position: "absolute",
    top: "110%",
    right: 0,
    width: "260px",
    background: "#3f3f3f",
    borderRadius: "10px",
    zIndex: 50,
  };

  const currencyItem = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <header style={header}>
      <div style={headerContainer}>
        <div style={logoSection}>
          <Link to="/">
            <img src={logo} alt="logo" style={logoStyle} />
          </Link>
        </div>

        <div style={centerSection}>
          {!isMobile && (
            <nav style={navWrap}>
              {navItems.map((nav) => (
                <Link
                  key={nav.label}
                  to={nav.path}
                  onMouseEnter={() => setHoveredNav(nav.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "#000",
                    textDecoration: "none",
                    borderBottom:
                      hoveredNav === nav.label
                        ? "2px solid black"
                        : "2px solid transparent",
                    paddingBottom: "4px",
                    transition: "border-bottom 0.2s ease",
                  }}
                >
                  {nav.label}
                </Link>
              ))}
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

            <Link to={profileRedirectPath} style={iconStyle}>
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
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            <div style={currencyWrap} ref={currencyRef}>
              <button
                style={currencyButton}
                onClick={() => setCurrencyOpen(!currencyOpen)}
              >
                <img src={selectedCurrency.flag} width="18" alt="" />
                {selectedCurrency.code}
                <IoChevronDown />
              </button>

              {currencyOpen && (
                <div style={currencyDropdown}>
                  {currencies.map((curr) => (
                    <div
                      key={curr.code}
                      style={currencyItem}
                      onClick={() => handleCurrencyChange(curr)}
                    >
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