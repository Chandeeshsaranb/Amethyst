
// import React from "react";

// const SIDEBAR_ITEMS = [
//     { key: "dashboard", label: "Dashboard" },
//     { key: "products", label: "Products" },
//     { key: "metal-types", label: "Metal Types" },
//     { key: "users", label: "Users" },
//     { key: "shipping", label: "Shipping" },
//     { key: "communication", label: "Communication" },
//     { key: "admin-users", label: "Admin Users" },
//     { key: "fee-setting", label: "Fee Setting" },
//     { key: "privacy-policy", label: "Privacy Policy" },
//     { key: "terms-conditions", label: "Terms & Conditions" },
// ];

// export default function Sidebar({
//     activeSection,
//     setActiveSection,
//     setShowAddProductForm,
// }) {
//     const sidebar = {
//         width: "300px",
//         minWidth: "300px",
//         background: "#2f2438",
//         color: "#fff",
//         height: "100vh",
//         overflowY: "auto",
//         overflowX: "hidden",
//         padding: "24px 0",
//         boxSizing: "border-box",
//         position: "sticky",
//         top: 0,
//     };

//     const sidebarTitle = {
//         fontSize: "22px",
//         fontWeight: "700",
//         textAlign: "center",
//         marginBottom: "28px",
//     };

//     const menuItem = (active) => ({
//         padding: "14px 22px",
//         cursor: "pointer",
//         background: active ? "#4b355d" : "transparent",
//         borderLeft: active ? "4px solid #c79ae0" : "4px solid transparent",
//         fontSize: "15px",
//         fontWeight: active ? "600" : "500",
//         transition: "0.2s ease",
//     });

//     const handleSectionChange = (sectionKey) => {
//         setActiveSection(sectionKey);

//         if (setShowAddProductForm && sectionKey !== "products") {
//             setShowAddProductForm(false);
//         }
//     };

//     return (
//         <aside style={sidebar}>
//             <div style={sidebarTitle}>Admin Panel</div>

//             {SIDEBAR_ITEMS.map((item) => (
//                 <div
//                     key={item.key}
//                     style={menuItem(activeSection === item.key)}
//                     onClick={() => handleSectionChange(item.key)}
//                 >
//                     {item.label}
//                 </div>
//             ))}
//         </aside>
//     );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";

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

// export default function Sidebar({
//   activeSection,
//   setActiveSection,
//   setShowAddProductForm,
// }) {
//   const navigate = useNavigate();

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
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   };

//   const menuContainer = {
//     flex: 1,
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
//     transition: "0.2s ease",
//   });

//   const logoutContainer = {
//     borderTop: "1px solid rgba(255,255,255,0.2)",
//     marginTop: "10px",
//   };

//   const logoutItem = {
//     padding: "14px 22px",
//     cursor: "pointer",
//     fontSize: "15px",
//     fontWeight: "500",
//     transition: "0.2s ease",
//   };

//   const handleSectionChange = (sectionKey) => {
//     setActiveSection(sectionKey);

//     if (setShowAddProductForm && sectionKey !== "products") {
//       setShowAddProductForm(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <aside style={sidebar}>
//       <div style={menuContainer}>
//         <div style={sidebarTitle}>Admin Panel</div>

//         {SIDEBAR_ITEMS.map((item) => (
//           <div
//             key={item.key}
//             style={menuItem(activeSection === item.key)}
//             onClick={() => handleSectionChange(item.key)}
//           >
//             {item.label}
//           </div>
//         ))}
//       </div>

//       <div style={logoutContainer}>
//         <div style={logoutItem} onClick={handleLogout}>
//           {"<-- Logout"}
//         </div>
//       </div>
//     </aside>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

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

export default function Sidebar({
  activeSection,
  setActiveSection,
  setShowAddProductForm,
}) {
  const navigate = useNavigate();

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const menuContainer = {
    flex: 1,
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
    transition: "0.2s ease",
  });

  const logoutContainer = {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    marginTop: "10px",
  };

  const logoutItem = {
    padding: "16px 22px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    color: "rgba(255,255,255,0.85)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "0.2s ease",
  };

  const handleSectionChange = (sectionKey) => {
    setActiveSection(sectionKey);

    if (setShowAddProductForm && sectionKey !== "products") {
      setShowAddProductForm(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside style={sidebar}>
      <div style={menuContainer}>
        <div style={sidebarTitle}>Admin Panel</div>

        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.key}
            style={menuItem(activeSection === item.key)}
            onClick={() => handleSectionChange(item.key)}
            onMouseEnter={(e) => {
              if (activeSection !== item.key) {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.key) {
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div style={logoutContainer}>
        <div
          style={logoutItem}
          onClick={handleLogout}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.85)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <FiLogOut size={16} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}