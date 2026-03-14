// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import logo from "../assets/femina.png";
// // // // import { FiUser, FiChevronUp, FiChevronDown, FiInfo, FiEdit2 } from "react-icons/fi";

// // // // export default function ProfilePage() {
// // // //   const navigate = useNavigate();

// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [activeSection, setActiveSection] = useState("orders");
// // // //   const [loadingProfile, setLoadingProfile] = useState(true);
// // // //   const [savingProfile, setSavingProfile] = useState(false);
// // // //   const [editingProfile, setEditingProfile] = useState(false);

// // // //   const [loggedInUser, setLoggedInUser] = useState(() => {
// // // //     return JSON.parse(localStorage.getItem("loggedInUser") || "null");
// // // //   });

// // // //   const [orders] = useState(() => {
// // // //     return JSON.parse(localStorage.getItem("orders") || "[]");
// // // //   });

// // // //   const [profileForm, setProfileForm] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     contactNumber: "",
// // // //   });

// // // //   const token = localStorage.getItem("token");
// // // //   const userId = loggedInUser?.id;

// // // //   const userEmail = profileForm.email || "No email found";
// // // //   const userName = profileForm.name || "";
// // // //   const userContactNumber = profileForm.contactNumber || "No contact number found";

// // // //   const userOrders = orders.filter((order) => order.email === userEmail);

// // // //   useEffect(() => {
// // // //     const fetchUserProfile = async () => {
// // // //       if (!userId || !token) {
// // // //         console.log("Profile fetch skipped: missing userId or token");
// // // //         setLoadingProfile(false);
// // // //         return;
// // // //       }

// // // //       const requestUrl = `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`;

// // // //       try {
// // // //         const response = await fetch(requestUrl, {
// // // //           method: "GET",
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //             Accept: "application/json",
// // // //             "Content-Type": "application/json",
// // // //             "ngrok-skip-browser-warning": "true",
// // // //           },
// // // //         });

// // // //         const rawText = await response.text();

// // // //         console.log("Profile fetch status:", response.status);
// // // //         console.log("Profile fetch raw text:", rawText);

// // // //         if (
// // // //           rawText.includes("ERR_NGROK_6024") ||
// // // //           rawText.includes("This website is served for free through ngrok.com") ||
// // // //           rawText.includes("<!DOCTYPE html>")
// // // //         ) {
// // // //           alert(
// // // //             "Your API request is being blocked by ngrok and returning an HTML page instead of JSON. Check your ngrok tunnel or backend URL."
// // // //           );
// // // //           return;
// // // //         }

// // // //         let data = {};
// // // //         try {
// // // //           data = rawText ? JSON.parse(rawText) : {};
// // // //         } catch (error) {
// // // //           console.log("Profile fetch response is not valid JSON");
// // // //         }

// // // //         if (!response.ok) {
// // // //           alert(data.message || rawText || "Failed to fetch profile");
// // // //           return;
// // // //         }

// // // //         const userData = data.user || data.data || data;

// // // //         const normalizedUser = {
// // // //           ...userData,
// // // //           contact_number:
// // // //             userData?.contact_number ||
// // // //             userData?.contactNumber ||
// // // //             userData?.phone ||
// // // //             "",
// // // //         };

// // // //         setLoggedInUser(normalizedUser);
// // // //         setProfileForm({
// // // //           name: normalizedUser?.name || "",
// // // //           email: normalizedUser?.email || "",
// // // //           contactNumber: normalizedUser?.contact_number || "",
// // // //         });

// // // //         localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
// // // //       } catch (error) {
// // // //         console.error("Fetch profile error:", error);
// // // //         alert("Something went wrong while loading profile");
// // // //       } finally {
// // // //         setLoadingProfile(false);
// // // //       }
// // // //     };

// // // //     fetchUserProfile();
// // // //   }, [userId, token]);

// // // //   const handleProfileChange = (e) => {
// // // //     setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSaveProfile = async () => {
// // // //     if (!userId || !token) {
// // // //       alert("User not authenticated");
// // // //       return;
// // // //     }

// // // //     setSavingProfile(true);

// // // //     const payload = {
// // // //       name: profileForm.name,
// // // //       email: profileForm.email,
// // // //       contact_number: profileForm.contactNumber,
// // // //     };

// // // //     console.log("Update profile payload:", payload);

// // // //     try {
// // // //       const response = await fetch(
// // // //         `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`,
// // // //         {
// // // //           method: "PUT",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //             Authorization: `Bearer ${token}`,
// // // //             Accept: "application/json",
// // // //             "ngrok-skip-browser-warning": "true",
// // // //           },
// // // //           body: JSON.stringify(payload),
// // // //         }
// // // //       );

// // // //       const rawText = await response.text();

// // // //       console.log("Profile update status:", response.status);
// // // //       console.log("Profile update raw text:", rawText);

// // // //       if (
// // // //         rawText.includes("ERR_NGROK_6024") ||
// // // //         rawText.includes("This website is served for free through ngrok.com") ||
// // // //         rawText.includes("<!DOCTYPE html>")
// // // //       ) {
// // // //         alert(
// // // //           "Your profile update request is being blocked by ngrok and returning HTML instead of JSON."
// // // //         );
// // // //         return;
// // // //       }

// // // //       let data = {};
// // // //       try {
// // // //         data = rawText ? JSON.parse(rawText) : {};
// // // //       } catch (error) {
// // // //         console.log("Profile update response is not valid JSON");
// // // //       }

// // // //       if (!response.ok) {
// // // //         alert(data.message || rawText || "Failed to update profile");
// // // //         return;
// // // //       }

// // // //       const updatedUserRaw = data.user || data.data || { ...loggedInUser, ...payload };

// // // //       const updatedUser = {
// // // //         ...updatedUserRaw,
// // // //         contact_number:
// // // //           updatedUserRaw?.contact_number ||
// // // //           updatedUserRaw?.contactNumber ||
// // // //           updatedUserRaw?.phone ||
// // // //           profileForm.contactNumber ||
// // // //           "",
// // // //       };

// // // //       setLoggedInUser(updatedUser);
// // // //       setProfileForm({
// // // //         name: updatedUser?.name || "",
// // // //         email: updatedUser?.email || "",
// // // //         contactNumber: updatedUser?.contact_number || "",
// // // //       });

// // // //       localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
// // // //       window.dispatchEvent(new Event("authChanged"));

// // // //       alert(data.message || "Profile updated successfully");
// // // //       setEditingProfile(false);
// // // //     } catch (error) {
// // // //       console.error("Update profile error:", error);
// // // //       alert("Something went wrong while updating profile");
// // // //     } finally {
// // // //       setSavingProfile(false);
// // // //     }
// // // //   };

// // // //   const handleSignOut = async () => {
// // // //     try {
// // // //       await fetch("https://initially-loamless-elroy.ngrok-free.dev/api/logout", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           Accept: "application/json",
// // // //           "Content-Type": "application/json",
// // // //           "ngrok-skip-browser-warning": "true",
// // // //         },
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Logout API error:", error);
// // // //     } finally {
// // // //       localStorage.removeItem("loggedInUser");
// // // //       localStorage.removeItem("token");
// // // //       window.dispatchEvent(new Event("authChanged"));
// // // //       navigate("/login");
// // // //     }
// // // //   };

// // // //   const handleMenuItemClick = (section) => {
// // // //     setActiveSection(section);
// // // //     setMenuOpen(false);
// // // //   };

// // // //   const page = {
// // // //     minHeight: "100vh",
// // // //     background: "#f7f7f7",
// // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // //     color: "#111",
// // // //   };

// // // //   const shell = {
// // // //     maxWidth: "1320px",
// // // //     margin: "0 auto",
// // // //     padding: "0 28px",
// // // //     boxSizing: "border-box",
// // // //     minHeight: "100vh",
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //   };

// // // //   const header = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "flex-start",
// // // //     paddingTop: "18px",
// // // //     marginBottom: "54px",
// // // //   };

// // // //   const leftHeader = {
// // // //     display: "flex",
// // // //     alignItems: "flex-start",
// // // //     gap: "36px",
// // // //   };

// // // //   const logoWrap = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //   };

// // // //   const logoStyle = {
// // // //     height: "64px",
// // // //     objectFit: "contain",
// // // //     display: "block",
// // // //   };

// // // //   const tabs = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "28px",
// // // //     paddingTop: "14px",
// // // //   };

// // // //   const tab = (active) => ({
// // // //     fontSize: "16px",
// // // //     color: "#111",
// // // //     textDecoration: active ? "underline" : "none",
// // // //     textUnderlineOffset: "5px",
// // // //     cursor: "pointer",
// // // //   });

// // // //   const accountArea = {
// // // //     position: "relative",
// // // //   };

// // // //   const accountTrigger = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "8px",
// // // //     background: "transparent",
// // // //     border: "none",
// // // //     cursor: "pointer",
// // // //     padding: 0,
// // // //   };

// // // //   const accountMenu = {
// // // //     position: "absolute",
// // // //     top: "48px",
// // // //     right: 0,
// // // //     width: "348px",
// // // //     background: "#fff",
// // // //     borderRadius: "12px",
// // // //     boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
// // // //     border: "1px solid #e7e1ea",
// // // //     padding: "14px 14px 10px",
// // // //     boxSizing: "border-box",
// // // //     zIndex: 20,
// // // //   };

// // // //   const menuTop = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "14px",
// // // //     paddingBottom: "14px",
// // // //     borderBottom: "1px solid #e8e1ea",
// // // //     marginBottom: "10px",
// // // //   };

// // // //   const menuEmail = {
// // // //     fontSize: "15px",
// // // //     color: "#667085",
// // // //     wordBreak: "break-word",
// // // //   };

// // // //   const menuButton = (active) => ({
// // // //     width: "100%",
// // // //     height: "54px",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     padding: "0 18px",
// // // //     background: active ? "#fff" : "transparent",
// // // //     border: active ? "2px solid #7a4a91" : "none",
// // // //     borderRadius: "10px",
// // // //     color: "#111",
// // // //     fontSize: "16px",
// // // //     cursor: "pointer",
// // // //     marginBottom: "8px",
// // // //     boxSizing: "border-box",
// // // //     textAlign: "left",
// // // //   });

// // // //   const content = {
// // // //     flex: 1,
// // // //   };

// // // //   const title = {
// // // //     fontSize: "20px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "28px",
// // // //     textTransform: "capitalize",
// // // //   };

// // // //   const card = {
// // // //     width: "100%",
// // // //     minHeight: "210px",
// // // //     background: "#fff",
// // // //     borderRadius: "16px",
// // // //     border: "1px solid #ece7ed",
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     textAlign: "center",
// // // //     padding: "30px",
// // // //     boxSizing: "border-box",
// // // //   };

// // // //   const emptyTitle = {
// // // //     fontSize: "18px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "20px",
// // // //   };

// // // //   const emptySub = {
// // // //     fontSize: "16px",
// // // //     color: "#111",
// // // //   };

// // // //   const profileWrapper = {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     gap: "30px",
// // // //   };

// // // //   const profileCard = {
// // // //     width: "100%",
// // // //     background: "#fff",
// // // //     borderRadius: "16px",
// // // //     border: "1px solid #ece7ed",
// // // //     padding: "26px",
// // // //     boxSizing: "border-box",
// // // //   };

// // // //   const profileCardHeader = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     marginBottom: "20px",
// // // //   };

// // // //   const profileCardTitle = {
// // // //     fontSize: "18px",
// // // //     fontWeight: "700",
// // // //     color: "#111",
// // // //   };

// // // //   const editButton = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "8px",
// // // //     border: "1px solid #d6c8df",
// // // //     background: "#fff",
// // // //     color: "#7a4a91",
// // // //     fontWeight: "600",
// // // //     borderRadius: "8px",
// // // //     cursor: "pointer",
// // // //     padding: "8px 14px",
// // // //   };

// // // //   const fieldLabel = {
// // // //     fontSize: "15px",
// // // //     color: "#6b7280",
// // // //     marginBottom: "8px",
// // // //   };

// // // //   const fieldValue = {
// // // //     fontSize: "16px",
// // // //     color: "#111",
// // // //   };

// // // //   const valueBlock = {
// // // //     marginBottom: "24px",
// // // //   };

// // // //   const addressHeader = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "28px",
// // // //     marginBottom: "26px",
// // // //   };

// // // //   const addressTitle = {
// // // //     fontSize: "16px",
// // // //     fontWeight: "700",
// // // //     color: "#111",
// // // //   };

// // // //   const addAddress = {
// // // //     fontSize: "16px",
// // // //     fontWeight: "600",
// // // //     color: "#7a4a91",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const noAddressBox = {
// // // //     background: "#f7f7f7",
// // // //     border: "1px solid #e5e7eb",
// // // //     borderRadius: "10px",
// // // //     padding: "22px",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "14px",
// // // //     color: "#111",
// // // //     fontSize: "16px",
// // // //   };

// // // //   const orderList = {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     gap: "14px",
// // // //   };

// // // //   const orderCard = {
// // // //     background: "#f7f7f7",
// // // //     border: "1px solid #e5e7eb",
// // // //     borderRadius: "12px",
// // // //     padding: "18px",
// // // //   };

// // // //   const orderTitle = {
// // // //     fontSize: "16px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "6px",
// // // //   };

// // // //   const orderMeta = {
// // // //     fontSize: "14px",
// // // //     color: "#666",
// // // //     marginBottom: "4px",
// // // //   };

// // // //   const input = {
// // // //     width: "100%",
// // // //     height: "42px",
// // // //     marginBottom: "16px",
// // // //     border: "1px solid #ddd",
// // // //     padding: "0 12px",
// // // //     borderRadius: "4px",
// // // //     boxSizing: "border-box",
// // // //     outline: "none",
// // // //     fontSize: "15px",
// // // //   };

// // // //   const saveButton = {
// // // //     border: "none",
// // // //     background: savingProfile ? "#9b7bb1" : "#6f3f8f",
// // // //     color: "#fff",
// // // //     fontWeight: "600",
// // // //     borderRadius: "4px",
// // // //     cursor: savingProfile ? "not-allowed" : "pointer",
// // // //     padding: "10px 18px",
// // // //     marginTop: "10px",
// // // //   };

// // // //   const cancelButton = {
// // // //     border: "1px solid #ddd",
// // // //     background: "#fff",
// // // //     color: "#111",
// // // //     fontWeight: "600",
// // // //     borderRadius: "4px",
// // // //     cursor: "pointer",
// // // //     padding: "10px 18px",
// // // //     marginTop: "10px",
// // // //     marginLeft: "10px",
// // // //   };

// // // //   const footer = {
// // // //     marginTop: "160px",
// // // //     padding: "24px 0 18px",
// // // //     borderTop: "1px solid #ddd6df",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "20px",
// // // //     flexWrap: "wrap",
// // // //     color: "#7a4a91",
// // // //     fontSize: "14px",
// // // //   };

// // // //   const footerLink = {
// // // //     color: "#7a4a91",
// // // //     textDecoration: "underline",
// // // //     textUnderlineOffset: "2px",
// // // //   };

// // // //   return (
// // // //     <div style={page}>
// // // //       <div style={shell}>
// // // //         <div style={header}>
// // // //           <div style={leftHeader}>
// // // //             <Link to="/" style={logoWrap}>
// // // //               <img src={logo} alt="Femina Store Logo" style={logoStyle} />
// // // //             </Link>

// // // //             <div style={tabs}>
// // // //               <span
// // // //                 style={tab(activeSection === "orders")}
// // // //                 onClick={() => setActiveSection("orders")}
// // // //               >
// // // //                 Orders
// // // //               </span>

// // // //               <span
// // // //                 style={tab(activeSection === "profile")}
// // // //                 onClick={() => setActiveSection("profile")}
// // // //               >
// // // //                 Profile
// // // //               </span>
// // // //             </div>
// // // //           </div>

// // // //           <div style={accountArea}>
// // // //             <button
// // // //               type="button"
// // // //               style={accountTrigger}
// // // //               onClick={() => setMenuOpen((prev) => !prev)}
// // // //             >
// // // //               <FiUser size={34} color="#777" />
// // // //               {menuOpen ? (
// // // //                 <FiChevronUp size={18} color="#111" />
// // // //               ) : (
// // // //                 <FiChevronDown size={18} color="#111" />
// // // //               )}
// // // //             </button>

// // // //             {menuOpen && (
// // // //               <div style={accountMenu}>
// // // //                 <div style={menuTop}>
// // // //                   <FiUser size={34} color="#777" />
// // // //                   <div style={menuEmail}>{userEmail}</div>
// // // //                 </div>

// // // //                 <button
// // // //                   type="button"
// // // //                   style={menuButton(activeSection === "profile")}
// // // //                   onClick={() => handleMenuItemClick("profile")}
// // // //                 >
// // // //                   Profile
// // // //                 </button>

// // // //                 <button
// // // //                   type="button"
// // // //                   style={menuButton(activeSection === "orders")}
// // // //                   onClick={() => handleMenuItemClick("orders")}
// // // //                 >
// // // //                   Orders
// // // //                 </button>

// // // //                 <button
// // // //                   type="button"
// // // //                   style={menuButton(false)}
// // // //                   onClick={handleSignOut}
// // // //                 >
// // // //                   Sign out
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <div style={content}>
// // // //           <div style={title}>
// // // //             {activeSection === "orders" ? "Orders" : "Profile"}
// // // //           </div>

// // // //           {activeSection === "orders" ? (
// // // //             userOrders.length === 0 ? (
// // // //               <div style={card}>
// // // //                 <div>
// // // //                   <div style={emptyTitle}>No orders yet</div>
// // // //                   <div style={emptySub}>
// // // //                     When you place an order, it will appear here.
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ) : (
// // // //               <div style={orderList}>
// // // //                 {userOrders.map((order, index) => (
// // // //                   <div key={order.id || index} style={orderCard}>
// // // //                     <div style={orderTitle}>Order #{order.id || index + 1}</div>
// // // //                     <div style={orderMeta}>
// // // //                       Total: ₹{" "}
// // // //                       {Number(order.total || order.totalPrice || 0).toLocaleString("en-IN")}
// // // //                     </div>
// // // //                     <div style={orderMeta}>
// // // //                       Status: {order.status || "Placed"}
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )
// // // //           ) : (
// // // //             <div style={profileWrapper}>
// // // //               <div style={profileCard}>
// // // //                 <div style={profileCardHeader}>
// // // //                   <div style={profileCardTitle}>Personal Information</div>

// // // //                   {!loadingProfile && !editingProfile && (
// // // //                     <button
// // // //                       type="button"
// // // //                       style={editButton}
// // // //                       onClick={() => setEditingProfile(true)}
// // // //                     >
// // // //                       <FiEdit2 size={16} />
// // // //                       Edit
// // // //                     </button>
// // // //                   )}
// // // //                 </div>

// // // //                 {loadingProfile ? (
// // // //                   <div style={fieldValue}>Loading profile...</div>
// // // //                 ) : (
// // // //                   <>
// // // //                     <div style={fieldLabel}>Name</div>
// // // //                     {editingProfile ? (
// // // //                       <input
// // // //                         style={input}
// // // //                         type="text"
// // // //                         name="name"
// // // //                         placeholder="Name"
// // // //                         value={profileForm.name}
// // // //                         onChange={handleProfileChange}
// // // //                       />
// // // //                     ) : (
// // // //                       <div style={valueBlock}>
// // // //                         <div style={fieldValue}>{userName}</div>
// // // //                       </div>
// // // //                     )}

// // // //                     <div style={fieldLabel}>Email</div>
// // // //                     {editingProfile ? (
// // // //                       <input
// // // //                         style={input}
// // // //                         type="email"
// // // //                         name="email"
// // // //                         placeholder="Email"
// // // //                         value={profileForm.email}
// // // //                         onChange={handleProfileChange}
// // // //                       />
// // // //                     ) : (
// // // //                       <div style={valueBlock}>
// // // //                         <div style={fieldValue}>{userEmail}</div>
// // // //                       </div>
// // // //                     )}

// // // //                     <div style={fieldLabel}>Contact Number</div>
// // // //                     {editingProfile ? (
// // // //                       <input
// // // //                         style={input}
// // // //                         type="text"
// // // //                         name="contactNumber"
// // // //                         placeholder="Contact Number"
// // // //                         value={profileForm.contactNumber}
// // // //                         onChange={handleProfileChange}
// // // //                       />
// // // //                     ) : (
// // // //                       <div style={valueBlock}>
// // // //                         <div style={fieldValue}>{userContactNumber}</div>
// // // //                       </div>
// // // //                     )}

// // // //                     {editingProfile && (
// // // //                       <div>
// // // //                         <button
// // // //                           type="button"
// // // //                           style={saveButton}
// // // //                           onClick={handleSaveProfile}
// // // //                           disabled={savingProfile}
// // // //                         >
// // // //                           {savingProfile ? "Saving..." : "Save"}
// // // //                         </button>

// // // //                         <button
// // // //                           type="button"
// // // //                           style={cancelButton}
// // // //                           onClick={() => {
// // // //                             setProfileForm({
// // // //                               name: loggedInUser?.name || "",
// // // //                               email: loggedInUser?.email || "",
// // // //                               contactNumber:
// // // //                                 loggedInUser?.contact_number ||
// // // //                                 loggedInUser?.contactNumber ||
// // // //                                 loggedInUser?.phone ||
// // // //                                 "",
// // // //                             });
// // // //                             setEditingProfile(false);
// // // //                           }}
// // // //                         >
// // // //                           Cancel
// // // //                         </button>
// // // //                       </div>
// // // //                     )}
// // // //                   </>
// // // //                 )}
// // // //               </div>

// // // //               <div style={profileCard}>
// // // //                 <div style={addressHeader}>
// // // //                   <div style={addressTitle}>Addresses</div>
// // // //                   <div style={addAddress}>+ Add</div>
// // // //                 </div>

// // // //                 <div style={noAddressBox}>
// // // //                   <FiInfo size={20} color="#7a7a7a" />
// // // //                   <span>No addresses added</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div style={footer}>
// // // //           <Link to="/refund-policy" style={footerLink}>
// // // //             Refund policy
// // // //           </Link>

// // // //           <Link to="/shipping-policy" style={footerLink}>
// // // //             Shipping
// // // //           </Link>

// // // //           <Link to="/privacy-policy" style={footerLink}>
// // // //             Privacy policy
// // // //           </Link>

// // // //           <Link to="/terms-of-service" style={footerLink}>
// // // //             Terms of service
// // // //           </Link>

// // // //           <Link to="/contact" style={footerLink}>
// // // //             Contact information
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // // import React, { useEffect, useState } from "react";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import logo from "../assets/femina.png";
// // // // import { FiUser, FiChevronUp, FiChevronDown, FiInfo, FiEdit2 } from "react-icons/fi";

// // // // export default function ProfilePage() {
// // // //   const navigate = useNavigate();

// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [activeSection, setActiveSection] = useState("orders");
// // // //   const [loadingProfile, setLoadingProfile] = useState(true);
// // // //   const [savingProfile, setSavingProfile] = useState(false);
// // // //   const [editingProfile, setEditingProfile] = useState(false);

// // // //   const [loggedInUser, setLoggedInUser] = useState(() => {
// // // //     return JSON.parse(localStorage.getItem("loggedInUser") || "null");
// // // //   });

// // // //   const [orders] = useState(() => {
// // // //     return JSON.parse(localStorage.getItem("orders") || "[]");
// // // //   });

// // // //   const [profileForm, setProfileForm] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     contactNumber: "",
// // // //   });

// // // //   const token = localStorage.getItem("token");
// // // //   const userId = loggedInUser?.id;

// // // //   const userEmail = profileForm.email || "No email found";
// // // //   const userName = profileForm.name || "";
// // // //   const userContactNumber = profileForm.contactNumber || "No contact number found";

// // // //   const userOrders = orders.filter((order) => order.email === userEmail);

// // // //   const normalizeUser = (userData = {}) => {
// // // //     return {
// // // //       ...userData,
// // // //       contact_number:
// // // //         userData?.contact_number ||
// // // //         userData?.contactNumber ||
// // // //         userData?.phone ||
// // // //         "",
// // // //     };
// // // //   };

// // // //   const fetchUserProfile = async (showLoader = true) => {
// // // //     if (!userId || !token) {
// // // //       console.log("Profile fetch skipped: missing userId or token");
// // // //       setLoadingProfile(false);
// // // //       return;
// // // //     }

// // // //     if (showLoader) {
// // // //       setLoadingProfile(true);
// // // //     }

// // // //     const requestUrl = `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`;

// // // //     try {
// // // //       const response = await fetch(requestUrl, {
// // // //         method: "GET",
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           Accept: "application/json",
// // // //           "Content-Type": "application/json",
// // // //           "ngrok-skip-browser-warning": "true",
// // // //         },
// // // //       });

// // // //       const rawText = await response.text();

// // // //       console.log("Profile fetch status:", response.status);
// // // //       console.log("Profile fetch raw text:", rawText);

// // // //       if (
// // // //         rawText.includes("ERR_NGROK_6024") ||
// // // //         rawText.includes("This website is served for free through ngrok.com") ||
// // // //         rawText.includes("<!DOCTYPE html>")
// // // //       ) {
// // // //         alert(
// // // //           "Your API request is being blocked by ngrok and returning an HTML page instead of JSON. Check your ngrok tunnel or backend URL."
// // // //         );
// // // //         return;
// // // //       }

// // // //       let data = {};
// // // //       try {
// // // //         data = rawText ? JSON.parse(rawText) : {};
// // // //       } catch (error) {
// // // //         console.log("Profile fetch response is not valid JSON");
// // // //       }

// // // //       if (!response.ok) {
// // // //         alert(data.message || rawText || "Failed to fetch profile");
// // // //         return;
// // // //       }

// // // //       const userData = data.user || data.data || data;
// // // //       const normalizedUser = normalizeUser(userData);

// // // //       setLoggedInUser(normalizedUser);
// // // //       setProfileForm({
// // // //         name: normalizedUser?.name || "",
// // // //         email: normalizedUser?.email || "",
// // // //         contactNumber: normalizedUser?.contact_number || "",
// // // //       });

// // // //       localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
// // // //       window.dispatchEvent(new Event("authChanged"));
// // // //     } catch (error) {
// // // //       console.error("Fetch profile error:", error);
// // // //       alert("Something went wrong while loading profile");
// // // //     } finally {
// // // //       setLoadingProfile(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchUserProfile();
// // // //   }, [userId, token]);

// // // //   const handleProfileChange = (e) => {
// // // //     setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSaveProfile = async () => {
// // // //     if (!userId || !token) {
// // // //       alert("User not authenticated");
// // // //       return;
// // // //     }

// // // //     setSavingProfile(true);

// // // //     const payload = {
// // // //       name: profileForm.name,
// // // //       email: profileForm.email,
// // // //       contact_number: profileForm.contactNumber,
// // // //     };

// // // //     console.log("Update profile payload:", payload);

// // // //     try {
// // // //       const response = await fetch(
// // // //         `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`,
// // // //         {
// // // //           method: "PUT",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //             Authorization: `Bearer ${token}`,
// // // //             Accept: "application/json",
// // // //             "ngrok-skip-browser-warning": "true",
// // // //           },
// // // //           body: JSON.stringify(payload),
// // // //         }
// // // //       );

// // // //       const rawText = await response.text();

// // // //       console.log("Profile update status:", response.status);
// // // //       console.log("Profile update raw text:", rawText);

// // // //       if (
// // // //         rawText.includes("ERR_NGROK_6024") ||
// // // //         rawText.includes("This website is served for free through ngrok.com") ||
// // // //         rawText.includes("<!DOCTYPE html>")
// // // //       ) {
// // // //         alert(
// // // //           "Your profile update request is being blocked by ngrok and returning HTML instead of JSON."
// // // //         );
// // // //         return;
// // // //       }

// // // //       let data = {};
// // // //       try {
// // // //         data = rawText ? JSON.parse(rawText) : {};
// // // //       } catch (error) {
// // // //         console.log("Profile update response is not valid JSON");
// // // //       }

// // // //       if (!response.ok) {
// // // //         alert(data.message || rawText || "Failed to update profile");
// // // //         return;
// // // //       }

// // // //       const localUpdatedUser = normalizeUser({
// // // //         ...loggedInUser,
// // // //         ...payload,
// // // //       });

// // // //       setLoggedInUser(localUpdatedUser);
// // // //       setProfileForm({
// // // //         name: localUpdatedUser?.name || "",
// // // //         email: localUpdatedUser?.email || "",
// // // //         contactNumber: localUpdatedUser?.contact_number || "",
// // // //       });

// // // //       localStorage.setItem("loggedInUser", JSON.stringify(localUpdatedUser));
// // // //       window.dispatchEvent(new Event("authChanged"));

// // // //       await fetchUserProfile(false);

// // // //       alert(data.message || "Profile updated successfully");
// // // //       setEditingProfile(false);
// // // //     } catch (error) {
// // // //       console.error("Update profile error:", error);
// // // //       alert("Something went wrong while updating profile");
// // // //     } finally {
// // // //       setSavingProfile(false);
// // // //     }
// // // //   };

// // // //   const handleSignOut = async () => {
// // // //     try {
// // // //       await fetch("https://initially-loamless-elroy.ngrok-free.dev/api/logout", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           Accept: "application/json",
// // // //           "Content-Type": "application/json",
// // // //           "ngrok-skip-browser-warning": "true",
// // // //         },
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Logout API error:", error);
// // // //     } finally {
// // // //       localStorage.removeItem("loggedInUser");
// // // //       localStorage.removeItem("token");
// // // //       window.dispatchEvent(new Event("authChanged"));
// // // //       navigate("/login");
// // // //     }
// // // //   };

// // // //   const handleMenuItemClick = (section) => {
// // // //     setActiveSection(section);
// // // //     setMenuOpen(false);
// // // //   };

// // // //   const page = {
// // // //     minHeight: "100vh",
// // // //     background: "#f7f7f7",
// // // //     fontFamily: "Arial, Helvetica, sans-serif",
// // // //     color: "#111",
// // // //   };

// // // //   const shell = {
// // // //     maxWidth: "1320px",
// // // //     margin: "0 auto",
// // // //     padding: "0 28px",
// // // //     boxSizing: "border-box",
// // // //     minHeight: "100vh",
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //   };

// // // //   const header = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "flex-start",
// // // //     paddingTop: "18px",
// // // //     marginBottom: "54px",
// // // //   };

// // // //   const leftHeader = {
// // // //     display: "flex",
// // // //     alignItems: "flex-start",
// // // //     gap: "36px",
// // // //   };

// // // //   const logoWrap = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //   };

// // // //   const logoStyle = {
// // // //     height: "64px",
// // // //     objectFit: "contain",
// // // //     display: "block",
// // // //   };

// // // //   const tabs = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "28px",
// // // //     paddingTop: "14px",
// // // //   };

// // // //   const tab = (active) => ({
// // // //     fontSize: "16px",
// // // //     color: "#111",
// // // //     textDecoration: active ? "underline" : "none",
// // // //     textUnderlineOffset: "5px",
// // // //     cursor: "pointer",
// // // //   });

// // // //   const accountArea = {
// // // //     position: "relative",
// // // //   };

// // // //   const accountTrigger = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "8px",
// // // //     background: "transparent",
// // // //     border: "none",
// // // //     cursor: "pointer",
// // // //     padding: 0,
// // // //   };

// // // //   const accountMenu = {
// // // //     position: "absolute",
// // // //     top: "48px",
// // // //     right: 0,
// // // //     width: "348px",
// // // //     background: "#fff",
// // // //     borderRadius: "12px",
// // // //     boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
// // // //     border: "1px solid #e7e1ea",
// // // //     padding: "14px 14px 10px",
// // // //     boxSizing: "border-box",
// // // //     zIndex: 20,
// // // //   };

// // // //   const menuTop = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "14px",
// // // //     paddingBottom: "14px",
// // // //     borderBottom: "1px solid #e8e1ea",
// // // //     marginBottom: "10px",
// // // //   };

// // // //   const menuEmail = {
// // // //     fontSize: "15px",
// // // //     color: "#667085",
// // // //     wordBreak: "break-word",
// // // //   };

// // // //   const menuButton = (active) => ({
// // // //     width: "100%",
// // // //     height: "54px",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     padding: "0 18px",
// // // //     background: active ? "#fff" : "transparent",
// // // //     border: active ? "2px solid #7a4a91" : "none",
// // // //     borderRadius: "10px",
// // // //     color: "#111",
// // // //     fontSize: "16px",
// // // //     cursor: "pointer",
// // // //     marginBottom: "8px",
// // // //     boxSizing: "border-box",
// // // //     textAlign: "left",
// // // //   });

// // // //   const content = {
// // // //     flex: 1,
// // // //   };

// // // //   const title = {
// // // //     fontSize: "20px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "28px",
// // // //     textTransform: "capitalize",
// // // //   };

// // // //   const card = {
// // // //     width: "100%",
// // // //     minHeight: "210px",
// // // //     background: "#fff",
// // // //     borderRadius: "16px",
// // // //     border: "1px solid #ece7ed",
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     textAlign: "center",
// // // //     padding: "30px",
// // // //     boxSizing: "border-box",
// // // //   };

// // // //   const emptyTitle = {
// // // //     fontSize: "18px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "20px",
// // // //   };

// // // //   const emptySub = {
// // // //     fontSize: "16px",
// // // //     color: "#111",
// // // //   };

// // // //   const profileWrapper = {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     gap: "30px",
// // // //   };

// // // //   const profileCard = {
// // // //     width: "100%",
// // // //     background: "#fff",
// // // //     borderRadius: "16px",
// // // //     border: "1px solid #ece7ed",
// // // //     padding: "26px",
// // // //     boxSizing: "border-box",
// // // //   };

// // // //   const profileCardHeader = {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     marginBottom: "20px",
// // // //   };

// // // //   const profileCardTitle = {
// // // //     fontSize: "18px",
// // // //     fontWeight: "700",
// // // //     color: "#111",
// // // //   };

// // // //   const editButton = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "8px",
// // // //     border: "1px solid #d6c8df",
// // // //     background: "#fff",
// // // //     color: "#7a4a91",
// // // //     fontWeight: "600",
// // // //     borderRadius: "8px",
// // // //     cursor: "pointer",
// // // //     padding: "8px 14px",
// // // //   };

// // // //   const fieldLabel = {
// // // //     fontSize: "15px",
// // // //     color: "#6b7280",
// // // //     marginBottom: "8px",
// // // //   };

// // // //   const fieldValue = {
// // // //     fontSize: "16px",
// // // //     color: "#111",
// // // //   };

// // // //   const valueBlock = {
// // // //     marginBottom: "24px",
// // // //   };

// // // //   const addressHeader = {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "28px",
// // // //     marginBottom: "26px",
// // // //   };

// // // //   const addressTitle = {
// // // //     fontSize: "16px",
// // // //     fontWeight: "700",
// // // //     color: "#111",
// // // //   };

// // // //   const addAddress = {
// // // //     fontSize: "16px",
// // // //     fontWeight: "600",
// // // //     color: "#7a4a91",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const noAddressBox = {
// // // //     background: "#f7f7f7",
// // // //     border: "1px solid #e5e7eb",
// // // //     borderRadius: "10px",
// // // //     padding: "22px",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "14px",
// // // //     color: "#111",
// // // //     fontSize: "16px",
// // // //   };

// // // //   const orderList = {
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     gap: "14px",
// // // //   };

// // // //   const orderCard = {
// // // //     background: "#f7f7f7",
// // // //     border: "1px solid #e5e7eb",
// // // //     borderRadius: "12px",
// // // //     padding: "18px",
// // // //   };

// // // //   const orderTitle = {
// // // //     fontSize: "16px",
// // // //     fontWeight: "700",
// // // //     marginBottom: "6px",
// // // //   };

// // // //   const orderMeta = {
// // // //     fontSize: "14px",
// // // //     color: "#666",
// // // //     marginBottom: "4px",
// // // //   };

// // // //   const input = {
// // // //     width: "100%",
// // // //     height: "42px",
// // // //     marginBottom: "16px",
// // // //     border: "1px solid #ddd",
// // // //     padding: "0 12px",
// // // //     borderRadius: "4px",
// // // //     boxSizing: "border-box",
// // // //     outline: "none",
// // // //     fontSize: "15px",
// // // //   };

// // // //   const saveButton = {
// // // //     border: "none",
// // // //     background: savingProfile ? "#9b7bb1" : "#6f3f8f",
// // // //     color: "#fff",
// // // //     fontWeight: "600",
// // // //     borderRadius: "4px",
// // // //     cursor: savingProfile ? "not-allowed" : "pointer",
// // // //     padding: "10px 18px",
// // // //     marginTop: "10px",
// // // //   };

// // // //   const cancelButton = {
// // // //     border: "1px solid #ddd",
// // // //     background: "#fff",
// // // //     color: "#111",
// // // //     fontWeight: "600",
// // // //     borderRadius: "4px",
// // // //     cursor: "pointer",
// // // //     padding: "10px 18px",
// // // //     marginTop: "10px",
// // // //     marginLeft: "10px",
// // // //   };

// // // //   const footer = {
// // // //     marginTop: "160px",
// // // //     padding: "24px 0 18px",
// // // //     borderTop: "1px solid #ddd6df",
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "20px",
// // // //     flexWrap: "wrap",
// // // //     color: "#7a4a91",
// // // //     fontSize: "14px",
// // // //   };

// // // //   const footerLink = {
// // // //     color: "#7a4a91",
// // // //     textDecoration: "underline",
// // // //     textUnderlineOffset: "2px",
// // // //   };

// // // //   return (
// // // //     <div style={page}>
// // // //       <div style={shell}>
// // // //         <div style={header}>
// // // //           <div style={leftHeader}>
// // // //             <Link to="/" style={logoWrap}>
// // // //               <img src={logo} alt="Femina Store Logo" style={logoStyle} />
// // // //             </Link>

// // // //             <div style={tabs}>
// // // //               <span
// // // //                 style={tab(activeSection === "orders")}
// // // //                 onClick={() => setActiveSection("orders")}
// // // //               >
// // // //                 Orders
// // // //               </span>

// // // //               <span
// // // //                 style={tab(activeSection === "profile")}
// // // //                 onClick={() => setActiveSection("profile")}
// // // //               >
// // // //                 Profile
// // // //               </span>
// // // //             </div>
// // // //           </div>

// // // //           <div style={accountArea}>
// // // //             <button
// // // //               type="button"
// // // //               style={accountTrigger}
// // // //               onClick={() => setMenuOpen((prev) => !prev)}
// // // //             >
// // // //               <FiUser size={34} color="#777" />
// // // //               {menuOpen ? (
// // // //                 <FiChevronUp size={18} color="#111" />
// // // //               ) : (
// // // //                 <FiChevronDown size={18} color="#111" />
// // // //               )}
// // // //             </button>

// // // //             {menuOpen && (
// // // //               <div style={accountMenu}>
// // // //                 <div style={menuTop}>
// // // //                   <FiUser size={34} color="#777" />
// // // //                   <div style={menuEmail}>{userEmail}</div>
// // // //                 </div>

// // // //                 <button
// // // //                   type="button"
// // // //                   style={menuButton(activeSection === "profile")}
// // // //                   onClick={() => handleMenuItemClick("profile")}
// // // //                 >
// // // //                   Profile
// // // //                 </button>

// // // //                 <button
// // // //                   type="button"
// // // //                   style={menuButton(activeSection === "orders")}
// // // //                   onClick={() => handleMenuItemClick("orders")}
// // // //                 >
// // // //                   Orders
// // // //                 </button>

// // // //                 <button
// // // //                   type="button"
// // // //                   style={menuButton(false)}
// // // //                   onClick={handleSignOut}
// // // //                 >
// // // //                   Sign out
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <div style={content}>
// // // //           <div style={title}>
// // // //             {activeSection === "orders" ? "Orders" : "Profile"}
// // // //           </div>

// // // //           {activeSection === "orders" ? (
// // // //             userOrders.length === 0 ? (
// // // //               <div style={card}>
// // // //                 <div>
// // // //                   <div style={emptyTitle}>No orders yet</div>
// // // //                   <div style={emptySub}>
// // // //                     When you place an order, it will appear here.
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ) : (
// // // //               <div style={orderList}>
// // // //                 {userOrders.map((order, index) => (
// // // //                   <div key={order.id || index} style={orderCard}>
// // // //                     <div style={orderTitle}>Order #{order.id || index + 1}</div>
// // // //                     <div style={orderMeta}>
// // // //                       Total: ₹{" "}
// // // //                       {Number(order.total || order.totalPrice || 0).toLocaleString("en-IN")}
// // // //                     </div>
// // // //                     <div style={orderMeta}>
// // // //                       Status: {order.status || "Placed"}
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )
// // // //           ) : (
// // // //             <div style={profileWrapper}>
// // // //               <div style={profileCard}>
// // // //                 <div style={profileCardHeader}>
// // // //                   <div style={profileCardTitle}>Personal Information</div>

// // // //                   {!loadingProfile && !editingProfile && (
// // // //                     <button
// // // //                       type="button"
// // // //                       style={editButton}
// // // //                       onClick={() => setEditingProfile(true)}
// // // //                     >
// // // //                       <FiEdit2 size={16} />
// // // //                       Edit
// // // //                     </button>
// // // //                   )}
// // // //                 </div>

// // // //                 {loadingProfile ? (
// // // //                   <div style={fieldValue}>Loading profile...</div>
// // // //                 ) : (
// // // //                   <>
// // // //                     <div style={fieldLabel}>Name</div>
// // // //                     {editingProfile ? (
// // // //                       <input
// // // //                         style={input}
// // // //                         type="text"
// // // //                         name="name"
// // // //                         placeholder="Name"
// // // //                         value={profileForm.name}
// // // //                         onChange={handleProfileChange}
// // // //                       />
// // // //                     ) : (
// // // //                       <div style={valueBlock}>
// // // //                         <div style={fieldValue}>{userName}</div>
// // // //                       </div>
// // // //                     )}

// // // //                     <div style={fieldLabel}>Email</div>
// // // //                     {editingProfile ? (
// // // //                       <input
// // // //                         style={input}
// // // //                         type="email"
// // // //                         name="email"
// // // //                         placeholder="Email"
// // // //                         value={profileForm.email}
// // // //                         onChange={handleProfileChange}
// // // //                       />
// // // //                     ) : (
// // // //                       <div style={valueBlock}>
// // // //                         <div style={fieldValue}>{userEmail}</div>
// // // //                       </div>
// // // //                     )}

// // // //                     <div style={fieldLabel}>Contact Number</div>
// // // //                     {editingProfile ? (
// // // //                       <input
// // // //                         style={input}
// // // //                         type="text"
// // // //                         name="contactNumber"
// // // //                         placeholder="Contact Number"
// // // //                         value={profileForm.contactNumber}
// // // //                         onChange={handleProfileChange}
// // // //                       />
// // // //                     ) : (
// // // //                       <div style={valueBlock}>
// // // //                         <div style={fieldValue}>{userContactNumber}</div>
// // // //                       </div>
// // // //                     )}

// // // //                     {editingProfile && (
// // // //                       <div>
// // // //                         <button
// // // //                           type="button"
// // // //                           style={saveButton}
// // // //                           onClick={handleSaveProfile}
// // // //                           disabled={savingProfile}
// // // //                         >
// // // //                           {savingProfile ? "Saving..." : "Save"}
// // // //                         </button>

// // // //                         <button
// // // //                           type="button"
// // // //                           style={cancelButton}
// // // //                           onClick={() => {
// // // //                             setProfileForm({
// // // //                               name: loggedInUser?.name || "",
// // // //                               email: loggedInUser?.email || "",
// // // //                               contactNumber:
// // // //                                 loggedInUser?.contact_number ||
// // // //                                 loggedInUser?.contactNumber ||
// // // //                                 loggedInUser?.phone ||
// // // //                                 "",
// // // //                             });
// // // //                             setEditingProfile(false);
// // // //                           }}
// // // //                         >
// // // //                           Cancel
// // // //                         </button>
// // // //                       </div>
// // // //                     )}
// // // //                   </>
// // // //                 )}
// // // //               </div>

// // // //               <div style={profileCard}>
// // // //                 <div style={addressHeader}>
// // // //                   <div style={addressTitle}>Addresses</div>
// // // //                   <div style={addAddress}>+ Add</div>
// // // //                 </div>

// // // //                 <div style={noAddressBox}>
// // // //                   <FiInfo size={20} color="#7a7a7a" />
// // // //                   <span>No addresses added</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div style={footer}>
// // // //           <Link to="/refund-policy" style={footerLink}>
// // // //             Refund policy
// // // //           </Link>

// // // //           <Link to="/shipping-policy" style={footerLink}>
// // // //             Shipping
// // // //           </Link>

// // // //           <Link to="/privacy-policy" style={footerLink}>
// // // //             Privacy policy
// // // //           </Link>

// // // //           <Link to="/terms-of-service" style={footerLink}>
// // // //             Terms of service
// // // //           </Link>

// // // //           <Link to="/contact" style={footerLink}>
// // // //             Contact information
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import React, { useEffect, useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import logo from "../assets/femina.png";
// // // import { FiUser, FiChevronUp, FiChevronDown, FiInfo, FiEdit2 } from "react-icons/fi";

// // // export default function ProfilePage() {
// // //   const navigate = useNavigate();

// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [activeSection, setActiveSection] = useState("orders");
// // //   const [loadingProfile, setLoadingProfile] = useState(true);
// // //   const [savingProfile, setSavingProfile] = useState(false);
// // //   const [editingProfile, setEditingProfile] = useState(false);

// // //   const [loggedInUser, setLoggedInUser] = useState(() => {
// // //     return JSON.parse(localStorage.getItem("loggedInUser") || "null");
// // //   });

// // //   const [orders] = useState(() => {
// // //     return JSON.parse(localStorage.getItem("orders") || "[]");
// // //   });

// // //   const [profileForm, setProfileForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     contactNumber: "",
// // //   });

// // //   const token = localStorage.getItem("token");
// // //   const userId = loggedInUser?.id;

// // //   const userEmail = profileForm.email || "No email found";
// // //   const userName = profileForm.name || "";
// // //   const userContactNumber = profileForm.contactNumber || "No contact number found";

// // //   const userOrders = orders.filter((order) => order.email === userEmail);

// // //   const normalizeUser = (userData = {}) => {
// // //     return {
// // //       ...userData,
// // //       contact_number:
// // //         userData?.phone ||
// // //         userData?.contact_number ||
// // //         userData?.contactNumber ||
// // //         "",
// // //     };
// // //   };

// // //   const fetchUserProfile = async (showLoader = true) => {
// // //     if (!userId || !token) {
// // //       setLoadingProfile(false);
// // //       return;
// // //     }

// // //     if (showLoader) {
// // //       setLoadingProfile(true);
// // //     }

// // //     const requestUrl = `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`;

// // //     try {
// // //       const response = await fetch(requestUrl, {
// // //         method: "GET",
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //           Accept: "application/json",
// // //           "Content-Type": "application/json",
// // //           "ngrok-skip-browser-warning": "true",
// // //         },
// // //       });

// // //       const rawText = await response.text();

// // //       if (
// // //         rawText.includes("ERR_NGROK_6024") ||
// // //         rawText.includes("This website is served for free through ngrok.com") ||
// // //         rawText.includes("<!DOCTYPE html>")
// // //       ) {
// // //         alert(
// // //           "Your API request is being blocked by ngrok and returning an HTML page instead of JSON. Check your ngrok tunnel or backend URL."
// // //         );
// // //         return;
// // //       }

// // //       let data = {};
// // //       try {
// // //         data = rawText ? JSON.parse(rawText) : {};
// // //       } catch (error) {
// // //         console.log("Profile fetch response is not valid JSON");
// // //       }

// // //       if (!response.ok) {
// // //         alert(data.message || rawText || "Failed to fetch profile");
// // //         return;
// // //       }

// // //       const userData = data.user || data.data || data;
// // //       const normalizedUser = normalizeUser(userData);

// // //       setLoggedInUser(normalizedUser);
// // //       setProfileForm({
// // //         name: normalizedUser?.name || "",
// // //         email: normalizedUser?.email || "",
// // //         contactNumber: normalizedUser?.contact_number || "",
// // //       });

// // //       localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
// // //       window.dispatchEvent(new Event("authChanged"));
// // //     } catch (error) {
// // //       console.error("Fetch profile error:", error);
// // //       alert("Something went wrong while loading profile");
// // //     } finally {
// // //       setLoadingProfile(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchUserProfile();
// // //   }, [userId, token]);

// // //   const handleProfileChange = (e) => {
// // //     setProfileForm((prev) => ({
// // //       ...prev,
// // //       [e.target.name]: e.target.value,
// // //     }));
// // //   };

// // //   const handleSaveProfile = async () => {
// // //     if (!userId || !token) {
// // //       alert("User not authenticated");
// // //       return;
// // //     }

// // //     setSavingProfile(true);

// // //     const payload = {
// // //       name: profileForm.name,
// // //       email: profileForm.email,
// // //       phone: profileForm.contactNumber,
// // //     };

// // //     console.log("PROFILE UPDATE DEBUG");
// // //     console.log("User ID:", userId);
// // //     console.log("Payload:", payload);

// // //     try {
// // //       const response = await fetch(
// // //         `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`,
// // //         {
// // //           method: "PUT",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //             Accept: "application/json",
// // //             "ngrok-skip-browser-warning": "true",
// // //           },
// // //           body: JSON.stringify(payload),
// // //         }
// // //       );

// // //       const rawText = await response.text();

// // //       if (
// // //         rawText.includes("ERR_NGROK_6024") ||
// // //         rawText.includes("This website is served for free through ngrok.com") ||
// // //         rawText.includes("<!DOCTYPE html>")
// // //       ) {
// // //         alert(
// // //           "Your profile update request is being blocked by ngrok and returning HTML instead of JSON."
// // //         );
// // //         return;
// // //       }

// // //       let data = {};
// // //       try {
// // //         data = rawText ? JSON.parse(rawText) : {};
// // //       } catch (error) {
// // //         console.error("PROFILE UPDATE ERROR:", error);
// // //         alert("Invalid response from server");
// // //         return;
// // //       }

// // //       console.log("API RESPONSE:", data);

// // //       if (!response.ok) {
// // //         alert(data.message || "Failed to update profile");
// // //         return;
// // //       }

// // //       const updatedUser = normalizeUser({
// // //         ...loggedInUser,
// // //         ...payload,
// // //       });

// // //       setLoggedInUser(updatedUser);
// // //       setProfileForm({
// // //         name: updatedUser?.name || "",
// // //         email: updatedUser?.email || "",
// // //         contactNumber:
// // //           updatedUser?.phone ||
// // //           updatedUser?.contact_number ||
// // //           "",
// // //       });

// // //       localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
// // //       window.dispatchEvent(new Event("authChanged"));

// // //       await fetchUserProfile(false);

// // //       alert(data.message || "Profile updated successfully");
// // //       setEditingProfile(false);
// // //     } catch (error) {
// // //       console.error("PROFILE UPDATE ERROR:", error);
// // //       alert("Something went wrong while updating profile");
// // //     } finally {
// // //       setSavingProfile(false);
// // //     }
// // //   };

// // //   const handleSignOut = async () => {
// // //     try {
// // //       await fetch("https://initially-loamless-elroy.ngrok-free.dev/api/logout", {
// // //         method: "POST",
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //           Accept: "application/json",
// // //           "Content-Type": "application/json",
// // //           "ngrok-skip-browser-warning": "true",
// // //         },
// // //       });
// // //     } catch (error) {
// // //       console.error("Logout API error:", error);
// // //     } finally {
// // //       localStorage.removeItem("loggedInUser");
// // //       localStorage.removeItem("token");
// // //       window.dispatchEvent(new Event("authChanged"));
// // //       navigate("/login");
// // //     }
// // //   };

// // //   const handleMenuItemClick = (section) => {
// // //     setActiveSection(section);
// // //     setMenuOpen(false);
// // //   };

// // //   const page = {
// // //     minHeight: "100vh",
// // //     background: "#f7f7f7",
// // //     fontFamily: "Arial, Helvetica, sans-serif",
// // //     color: "#111",
// // //   };

// // //   const shell = {
// // //     maxWidth: "1320px",
// // //     margin: "0 auto",
// // //     padding: "0 28px",
// // //     boxSizing: "border-box",
// // //     minHeight: "100vh",
// // //     display: "flex",
// // //     flexDirection: "column",
// // //   };

// // //   const header = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "flex-start",
// // //     paddingTop: "18px",
// // //     marginBottom: "54px",
// // //   };

// // //   const leftHeader = {
// // //     display: "flex",
// // //     alignItems: "flex-start",
// // //     gap: "36px",
// // //   };

// // //   const logoWrap = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //   };

// // //   const logoStyle = {
// // //     height: "64px",
// // //     objectFit: "contain",
// // //     display: "block",
// // //   };

// // //   const tabs = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "28px",
// // //     paddingTop: "14px",
// // //   };

// // //   const tab = (active) => ({
// // //     fontSize: "16px",
// // //     color: "#111",
// // //     textDecoration: active ? "underline" : "none",
// // //     textUnderlineOffset: "5px",
// // //     cursor: "pointer",
// // //   });

// // //   const accountArea = {
// // //     position: "relative",
// // //   };

// // //   const accountTrigger = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "8px",
// // //     background: "transparent",
// // //     border: "none",
// // //     cursor: "pointer",
// // //     padding: 0,
// // //   };

// // //   const accountMenu = {
// // //     position: "absolute",
// // //     top: "48px",
// // //     right: 0,
// // //     width: "348px",
// // //     background: "#fff",
// // //     borderRadius: "12px",
// // //     boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
// // //     border: "1px solid #e7e1ea",
// // //     padding: "14px 14px 10px",
// // //     boxSizing: "border-box",
// // //     zIndex: 20,
// // //   };

// // //   const menuTop = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "14px",
// // //     paddingBottom: "14px",
// // //     borderBottom: "1px solid #e8e1ea",
// // //     marginBottom: "10px",
// // //   };

// // //   const menuEmail = {
// // //     fontSize: "15px",
// // //     color: "#667085",
// // //     wordBreak: "break-word",
// // //   };

// // //   const menuButton = (active) => ({
// // //     width: "100%",
// // //     height: "54px",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     padding: "0 18px",
// // //     background: active ? "#fff" : "transparent",
// // //     border: active ? "2px solid #7a4a91" : "none",
// // //     borderRadius: "10px",
// // //     color: "#111",
// // //     fontSize: "16px",
// // //     cursor: "pointer",
// // //     marginBottom: "8px",
// // //     boxSizing: "border-box",
// // //     textAlign: "left",
// // //   });

// // //   const content = {
// // //     flex: 1,
// // //   };

// // //   const title = {
// // //     fontSize: "20px",
// // //     fontWeight: "700",
// // //     marginBottom: "28px",
// // //     textTransform: "capitalize",
// // //   };

// // //   const card = {
// // //     width: "100%",
// // //     minHeight: "210px",
// // //     background: "#fff",
// // //     borderRadius: "16px",
// // //     border: "1px solid #ece7ed",
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     textAlign: "center",
// // //     padding: "30px",
// // //     boxSizing: "border-box",
// // //   };

// // //   const emptyTitle = {
// // //     fontSize: "18px",
// // //     fontWeight: "700",
// // //     marginBottom: "20px",
// // //   };

// // //   const emptySub = {
// // //     fontSize: "16px",
// // //     color: "#111",
// // //   };

// // //   const profileWrapper = {
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     gap: "30px",
// // //   };

// // //   const profileCard = {
// // //     width: "100%",
// // //     background: "#fff",
// // //     borderRadius: "16px",
// // //     border: "1px solid #ece7ed",
// // //     padding: "26px",
// // //     boxSizing: "border-box",
// // //   };

// // //   const profileCardHeader = {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     marginBottom: "20px",
// // //   };

// // //   const profileCardTitle = {
// // //     fontSize: "18px",
// // //     fontWeight: "700",
// // //     color: "#111",
// // //   };

// // //   const editButton = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "8px",
// // //     border: "1px solid #d6c8df",
// // //     background: "#fff",
// // //     color: "#7a4a91",
// // //     fontWeight: "600",
// // //     borderRadius: "8px",
// // //     cursor: "pointer",
// // //     padding: "8px 14px",
// // //   };

// // //   const fieldLabel = {
// // //     fontSize: "15px",
// // //     color: "#6b7280",
// // //     marginBottom: "8px",
// // //   };

// // //   const fieldValue = {
// // //     fontSize: "16px",
// // //     color: "#111",
// // //   };

// // //   const valueBlock = {
// // //     marginBottom: "24px",
// // //   };

// // //   const addressHeader = {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "28px",
// // //     marginBottom: "26px",
// // //   };

// // //   const addressTitle = {
// // //     fontSize: "16px",
// // //     fontWeight: "700",
// // //     color: "#111",
// // //   };

// // //   const addAddress = {
// // //     fontSize: "16px",
// // //     fontWeight: "600",
// // //     color: "#7a4a91",
// // //     cursor: "pointer",
// // //   };

// // //   const noAddressBox = {
// // //     background: "#f7f7f7",
// // //     border: "1px solid #e5e7eb",
// // //     borderRadius: "10px",
// // //     padding: "22px",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "14px",
// // //     color: "#111",
// // //     fontSize: "16px",
// // //   };

// // //   const orderList = {
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     gap: "14px",
// // //   };

// // //   const orderCard = {
// // //     background: "#f7f7f7",
// // //     border: "1px solid #e5e7eb",
// // //     borderRadius: "12px",
// // //     padding: "18px",
// // //   };

// // //   const orderTitle = {
// // //     fontSize: "16px",
// // //     fontWeight: "700",
// // //     marginBottom: "6px",
// // //   };

// // //   const orderMeta = {
// // //     fontSize: "14px",
// // //     color: "#666",
// // //     marginBottom: "4px",
// // //   };

// // //   const input = {
// // //     width: "100%",
// // //     height: "42px",
// // //     marginBottom: "16px",
// // //     border: "1px solid #ddd",
// // //     padding: "0 12px",
// // //     borderRadius: "4px",
// // //     boxSizing: "border-box",
// // //     outline: "none",
// // //     fontSize: "15px",
// // //   };

// // //   const saveButton = {
// // //     border: "none",
// // //     background: savingProfile ? "#9b7bb1" : "#6f3f8f",
// // //     color: "#fff",
// // //     fontWeight: "600",
// // //     borderRadius: "4px",
// // //     cursor: savingProfile ? "not-allowed" : "pointer",
// // //     padding: "10px 18px",
// // //     marginTop: "10px",
// // //   };

// // //   const cancelButton = {
// // //     border: "1px solid #ddd",
// // //     background: "#fff",
// // //     color: "#111",
// // //     fontWeight: "600",
// // //     borderRadius: "4px",
// // //     cursor: "pointer",
// // //     padding: "10px 18px",
// // //     marginTop: "10px",
// // //     marginLeft: "10px",
// // //   };

// // //   const footer = {
// // //     marginTop: "160px",
// // //     padding: "24px 0 18px",
// // //     borderTop: "1px solid #ddd6df",
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "20px",
// // //     flexWrap: "wrap",
// // //     color: "#7a4a91",
// // //     fontSize: "14px",
// // //   };

// // //   const footerLink = {
// // //     color: "#7a4a91",
// // //     textDecoration: "underline",
// // //     textUnderlineOffset: "2px",
// // //   };

// // //   return (
// // //     <div style={page}>
// // //       <div style={shell}>
// // //         <div style={header}>
// // //           <div style={leftHeader}>
// // //             <Link to="/" style={logoWrap}>
// // //               <img src={logo} alt="Femina Store Logo" style={logoStyle} />
// // //             </Link>

// // //             <div style={tabs}>
// // //               <span
// // //                 style={tab(activeSection === "orders")}
// // //                 onClick={() => setActiveSection("orders")}
// // //               >
// // //                 Orders
// // //               </span>

// // //               <span
// // //                 style={tab(activeSection === "profile")}
// // //                 onClick={() => setActiveSection("profile")}
// // //               >
// // //                 Profile
// // //               </span>
// // //             </div>
// // //           </div>

// // //           <div style={accountArea}>
// // //             <button
// // //               type="button"
// // //               style={accountTrigger}
// // //               onClick={() => setMenuOpen((prev) => !prev)}
// // //             >
// // //               <FiUser size={34} color="#777" />
// // //               {menuOpen ? (
// // //                 <FiChevronUp size={18} color="#111" />
// // //               ) : (
// // //                 <FiChevronDown size={18} color="#111" />
// // //               )}
// // //             </button>

// // //             {menuOpen && (
// // //               <div style={accountMenu}>
// // //                 <div style={menuTop}>
// // //                   <FiUser size={34} color="#777" />
// // //                   <div style={menuEmail}>{userEmail}</div>
// // //                 </div>

// // //                 <button
// // //                   type="button"
// // //                   style={menuButton(activeSection === "profile")}
// // //                   onClick={() => handleMenuItemClick("profile")}
// // //                 >
// // //                   Profile
// // //                 </button>

// // //                 <button
// // //                   type="button"
// // //                   style={menuButton(activeSection === "orders")}
// // //                   onClick={() => handleMenuItemClick("orders")}
// // //                 >
// // //                   Orders
// // //                 </button>

// // //                 <button
// // //                   type="button"
// // //                   style={menuButton(false)}
// // //                   onClick={handleSignOut}
// // //                 >
// // //                   Sign out
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         <div style={content}>
// // //           <div style={title}>
// // //             {activeSection === "orders" ? "Orders" : "Profile"}
// // //           </div>

// // //           {activeSection === "orders" ? (
// // //             userOrders.length === 0 ? (
// // //               <div style={card}>
// // //                 <div>
// // //                   <div style={emptyTitle}>No orders yet</div>
// // //                   <div style={emptySub}>
// // //                     When you place an order, it will appear here.
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               <div style={orderList}>
// // //                 {userOrders.map((order, index) => (
// // //                   <div key={order.id || index} style={orderCard}>
// // //                     <div style={orderTitle}>Order #{order.id || index + 1}</div>
// // //                     <div style={orderMeta}>
// // //                       Total: ₹{" "}
// // //                       {Number(order.total || order.totalPrice || 0).toLocaleString("en-IN")}
// // //                     </div>
// // //                     <div style={orderMeta}>
// // //                       Status: {order.status || "Placed"}
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )
// // //           ) : (
// // //             <div style={profileWrapper}>
// // //               <div style={profileCard}>
// // //                 <div style={profileCardHeader}>
// // //                   <div style={profileCardTitle}>Personal Information</div>

// // //                   {!loadingProfile && !editingProfile && (
// // //                     <button
// // //                       type="button"
// // //                       style={editButton}
// // //                       onClick={() => setEditingProfile(true)}
// // //                     >
// // //                       <FiEdit2 size={16} />
// // //                       Edit
// // //                     </button>
// // //                   )}
// // //                 </div>

// // //                 {loadingProfile ? (
// // //                   <div style={fieldValue}>Loading profile...</div>
// // //                 ) : (
// // //                   <>
// // //                     <div style={fieldLabel}>Name</div>
// // //                     {editingProfile ? (
// // //                       <input
// // //                         style={input}
// // //                         type="text"
// // //                         name="name"
// // //                         placeholder="Name"
// // //                         value={profileForm.name}
// // //                         onChange={handleProfileChange}
// // //                       />
// // //                     ) : (
// // //                       <div style={valueBlock}>
// // //                         <div style={fieldValue}>{userName}</div>
// // //                       </div>
// // //                     )}

// // //                     <div style={fieldLabel}>Email</div>
// // //                     {editingProfile ? (
// // //                       <input
// // //                         style={input}
// // //                         type="email"
// // //                         name="email"
// // //                         placeholder="Email"
// // //                         value={profileForm.email}
// // //                         onChange={handleProfileChange}
// // //                       />
// // //                     ) : (
// // //                       <div style={valueBlock}>
// // //                         <div style={fieldValue}>{userEmail}</div>
// // //                       </div>
// // //                     )}

// // //                     <div style={fieldLabel}>Contact Number</div>
// // //                     {editingProfile ? (
// // //                       <input
// // //                         style={input}
// // //                         type="text"
// // //                         name="contactNumber"
// // //                         placeholder="Contact Number"
// // //                         value={profileForm.contactNumber}
// // //                         onChange={handleProfileChange}
// // //                       />
// // //                     ) : (
// // //                       <div style={valueBlock}>
// // //                         <div style={fieldValue}>{userContactNumber}</div>
// // //                       </div>
// // //                     )}

// // //                     {editingProfile && (
// // //                       <div>
// // //                         <button
// // //                           type="button"
// // //                           style={saveButton}
// // //                           onClick={handleSaveProfile}
// // //                           disabled={savingProfile}
// // //                         >
// // //                           {savingProfile ? "Saving..." : "Save"}
// // //                         </button>

// // //                         <button
// // //                           type="button"
// // //                           style={cancelButton}
// // //                           onClick={() => {
// // //                             setProfileForm({
// // //                               name: loggedInUser?.name || "",
// // //                               email: loggedInUser?.email || "",
// // //                               contactNumber:
// // //                                 loggedInUser?.phone ||
// // //                                 loggedInUser?.contact_number ||
// // //                                 loggedInUser?.contactNumber ||
// // //                                 "",
// // //                             });
// // //                             setEditingProfile(false);
// // //                           }}
// // //                         >
// // //                           Cancel
// // //                         </button>
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 )}
// // //               </div>

// // //               <div style={profileCard}>
// // //                 <div style={addressHeader}>
// // //                   <div style={addressTitle}>Addresses</div>
// // //                   <div style={addAddress}>+ Add</div>
// // //                 </div>

// // //                 <div style={noAddressBox}>
// // //                   <FiInfo size={20} color="#7a7a7a" />
// // //                   <span>No addresses added</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div style={footer}>
// // //           <Link to="/refund-policy" style={footerLink}>
// // //             Refund policy
// // //           </Link>

// // //           <Link to="/shipping-policy" style={footerLink}>
// // //             Shipping
// // //           </Link>

// // //           <Link to="/privacy-policy" style={footerLink}>
// // //             Privacy policy
// // //           </Link>

// // //           <Link to="/terms-of-service" style={footerLink}>
// // //             Terms of service
// // //           </Link>

// // //           <Link to="/contact" style={footerLink}>
// // //             Contact information
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import logo from "../assets/femina.png";
// // import { FiUser, FiChevronUp, FiChevronDown, FiInfo, FiEdit2 } from "react-icons/fi";

// // export default function ProfilePage() {
// //   const navigate = useNavigate();

// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState("orders");
// //   const [loadingProfile, setLoadingProfile] = useState(true);
// //   const [savingProfile, setSavingProfile] = useState(false);
// //   const [editingProfile, setEditingProfile] = useState(false);

// //   const [loggedInUser, setLoggedInUser] = useState(() => {
// //     return JSON.parse(localStorage.getItem("loggedInUser") || "null");
// //   });

// //   const [orders] = useState(() => {
// //     return JSON.parse(localStorage.getItem("orders") || "[]");
// //   });

// //   const [profileForm, setProfileForm] = useState({
// //     name: "",
// //     email: "",
// //     contactNumber: "",
// //   });

// //   const token = localStorage.getItem("token");
// //   const userId = loggedInUser?.id;

// //   const userEmail = profileForm.email || "No email found";
// //   const userName = profileForm.name || "";
// //   const userContactNumber = profileForm.contactNumber || "No contact number found";

// //   const userOrders = orders.filter((order) => order.email === userEmail);

// //   const normalizeUser = (userData = {}) => {
// //     return {
// //       ...userData,
// //       contact_number:
// //         userData?.phone ||
// //         userData?.contact_number ||
// //         userData?.contactNumber ||
// //         "",
// //     };
// //   };

// //   const fetchUserProfile = async (showLoader = true) => {
// //     if (!userId || !token) {
// //       setLoadingProfile(false);
// //       return;
// //     }

// //     if (showLoader) {
// //       setLoadingProfile(true);
// //     }

// //     const requestUrl = `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`;

// //     try {
// //       const response = await fetch(requestUrl, {
// //         method: "GET",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //           "ngrok-skip-browser-warning": "true",
// //         },
// //       });

// //       const rawText = await response.text();

// //       if (
// //         rawText.includes("ERR_NGROK_6024") ||
// //         rawText.includes("This website is served for free through ngrok.com") ||
// //         rawText.includes("<!DOCTYPE html>")
// //       ) {
// //         alert(
// //           "Your API request is being blocked by ngrok and returning an HTML page instead of JSON. Check your ngrok tunnel or backend URL."
// //         );
// //         return;
// //       }

// //       let data = {};
// //       try {
// //         data = rawText ? JSON.parse(rawText) : {};
// //       } catch (error) {
// //         console.log("Profile fetch response is not valid JSON");
// //       }

// //       if (!response.ok) {
// //         alert(data.message || rawText || "Failed to fetch profile");
// //         return;
// //       }

// //       const userData = data.user || data.data || data;
// //       const normalizedUser = normalizeUser(userData);

// //       setLoggedInUser(normalizedUser);
// //       setProfileForm({
// //         name: normalizedUser?.name || "",
// //         email: normalizedUser?.email || "",
// //         contactNumber: normalizedUser?.contact_number || "",
// //       });

// //       localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
// //       window.dispatchEvent(new Event("authChanged"));
// //     } catch (error) {
// //       console.error("Fetch profile error:", error);
// //       alert("Something went wrong while loading profile");
// //     } finally {
// //       setLoadingProfile(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUserProfile();
// //   }, [userId, token]);

// //   const handleProfileChange = (e) => {
// //     setProfileForm((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSaveProfile = async () => {
// //     if (!userId || !token) {
// //       alert("User not authenticated");
// //       return;
// //     }

// //     setSavingProfile(true);

// //     const payload = {
// //       name: profileForm.name,
// //       email: profileForm.email,
// //       phone: profileForm.contactNumber,
// //     };

// //     console.log("PROFILE UPDATE DEBUG");
// //     console.log("User ID:", userId);
// //     console.log("Payload:", payload);

// //     try {
// //       const response = await fetch(
// //         `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //             Accept: "application/json",
// //             "ngrok-skip-browser-warning": "true",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       );

// //       const rawText = await response.text();

// //       if (
// //         rawText.includes("ERR_NGROK_6024") ||
// //         rawText.includes("This website is served for free through ngrok.com") ||
// //         rawText.includes("<!DOCTYPE html>")
// //       ) {
// //         alert(
// //           "Your profile update request is being blocked by ngrok and returning HTML instead of JSON."
// //         );
// //         return;
// //       }

// //       let data = {};
// //       try {
// //         data = rawText ? JSON.parse(rawText) : {};
// //       } catch (error) {
// //         console.error("PROFILE UPDATE ERROR:", error);
// //         alert("Invalid response from server");
// //         return;
// //       }

// //       console.log("API RESPONSE:", data);
// //       console.log("UPDATED USER FROM API:", data.user);

// //       if (!response.ok) {
// //         alert(data.message || "Failed to update profile");
// //         return;
// //       }

// //       const updatedUser = normalizeUser(
// //         data.user ||
// //           data.data || {
// //             ...loggedInUser,
// //             ...payload,
// //           }
// //       );

// //       setLoggedInUser(updatedUser);
// //       setProfileForm({
// //         name: updatedUser?.name || "",
// //         email: updatedUser?.email || "",
// //         contactNumber:
// //           updatedUser?.phone ||
// //           updatedUser?.contact_number ||
// //           "",
// //       });

// //       localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
// //       window.dispatchEvent(new Event("authChanged"));

// //       alert(data.message || "Profile updated successfully");
// //       setEditingProfile(false);
// //     } catch (error) {
// //       console.error("PROFILE UPDATE ERROR:", error);
// //       alert("Something went wrong while updating profile");
// //     } finally {
// //       setSavingProfile(false);
// //     }
// //   };

// //   const handleSignOut = async () => {
// //     try {
// //       await fetch("https://initially-loamless-elroy.ngrok-free.dev/api/logout", {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //           "ngrok-skip-browser-warning": "true",
// //         },
// //       });
// //     } catch (error) {
// //       console.error("Logout API error:", error);
// //     } finally {
// //       localStorage.removeItem("loggedInUser");
// //       localStorage.removeItem("token");
// //       window.dispatchEvent(new Event("authChanged"));
// //       navigate("/login");
// //     }
// //   };

// //   const handleMenuItemClick = (section) => {
// //     setActiveSection(section);
// //     setMenuOpen(false);
// //   };

// //   const page = {
// //     minHeight: "100vh",
// //     background: "#f7f7f7",
// //     fontFamily: "Arial, Helvetica, sans-serif",
// //     color: "#111",
// //   };

// //   const shell = {
// //     maxWidth: "1320px",
// //     margin: "0 auto",
// //     padding: "0 28px",
// //     boxSizing: "border-box",
// //     minHeight: "100vh",
// //     display: "flex",
// //     flexDirection: "column",
// //   };

// //   const header = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     paddingTop: "18px",
// //     marginBottom: "54px",
// //   };

// //   const leftHeader = {
// //     display: "flex",
// //     alignItems: "flex-start",
// //     gap: "36px",
// //   };

// //   const logoWrap = {
// //     display: "flex",
// //     alignItems: "center",
// //   };

// //   const logoStyle = {
// //     height: "64px",
// //     objectFit: "contain",
// //     display: "block",
// //   };

// //   const tabs = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "28px",
// //     paddingTop: "14px",
// //   };

// //   const tab = (active) => ({
// //     fontSize: "16px",
// //     color: "#111",
// //     textDecoration: active ? "underline" : "none",
// //     textUnderlineOffset: "5px",
// //     cursor: "pointer",
// //   });

// //   const accountArea = {
// //     position: "relative",
// //   };

// //   const accountTrigger = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "8px",
// //     background: "transparent",
// //     border: "none",
// //     cursor: "pointer",
// //     padding: 0,
// //   };

// //   const accountMenu = {
// //     position: "absolute",
// //     top: "48px",
// //     right: 0,
// //     width: "348px",
// //     background: "#fff",
// //     borderRadius: "12px",
// //     boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
// //     border: "1px solid #e7e1ea",
// //     padding: "14px 14px 10px",
// //     boxSizing: "border-box",
// //     zIndex: 20,
// //   };

// //   const menuTop = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "14px",
// //     paddingBottom: "14px",
// //     borderBottom: "1px solid #e8e1ea",
// //     marginBottom: "10px",
// //   };

// //   const menuEmail = {
// //     fontSize: "15px",
// //     color: "#667085",
// //     wordBreak: "break-word",
// //   };

// //   const menuButton = (active) => ({
// //     width: "100%",
// //     height: "54px",
// //     display: "flex",
// //     alignItems: "center",
// //     padding: "0 18px",
// //     background: active ? "#fff" : "transparent",
// //     border: active ? "2px solid #7a4a91" : "none",
// //     borderRadius: "10px",
// //     color: "#111",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     marginBottom: "8px",
// //     boxSizing: "border-box",
// //     textAlign: "left",
// //   });

// //   const content = {
// //     flex: 1,
// //   };

// //   const title = {
// //     fontSize: "20px",
// //     fontWeight: "700",
// //     marginBottom: "28px",
// //     textTransform: "capitalize",
// //   };

// //   const card = {
// //     width: "100%",
// //     minHeight: "210px",
// //     background: "#fff",
// //     borderRadius: "16px",
// //     border: "1px solid #ece7ed",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     textAlign: "center",
// //     padding: "30px",
// //     boxSizing: "border-box",
// //   };

// //   const emptyTitle = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     marginBottom: "20px",
// //   };

// //   const emptySub = {
// //     fontSize: "16px",
// //     color: "#111",
// //   };

// //   const profileWrapper = {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "30px",
// //   };

// //   const profileCard = {
// //     width: "100%",
// //     background: "#fff",
// //     borderRadius: "16px",
// //     border: "1px solid #ece7ed",
// //     padding: "26px",
// //     boxSizing: "border-box",
// //   };

// //   const profileCardHeader = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: "20px",
// //   };

// //   const profileCardTitle = {
// //     fontSize: "18px",
// //     fontWeight: "700",
// //     color: "#111",
// //   };

// //   const editButton = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "8px",
// //     border: "1px solid #d6c8df",
// //     background: "#fff",
// //     color: "#7a4a91",
// //     fontWeight: "600",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     padding: "8px 14px",
// //   };

// //   const fieldLabel = {
// //     fontSize: "15px",
// //     color: "#6b7280",
// //     marginBottom: "8px",
// //   };

// //   const fieldValue = {
// //     fontSize: "16px",
// //     color: "#111",
// //   };

// //   const valueBlock = {
// //     marginBottom: "24px",
// //   };

// //   const addressHeader = {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "28px",
// //     marginBottom: "26px",
// //   };

// //   const addressTitle = {
// //     fontSize: "16px",
// //     fontWeight: "700",
// //     color: "#111",
// //   };

// //   const addAddress = {
// //     fontSize: "16px",
// //     fontWeight: "600",
// //     color: "#7a4a91",
// //     cursor: "pointer",
// //   };

// //   const noAddressBox = {
// //     background: "#f7f7f7",
// //     border: "1px solid #e5e7eb",
// //     borderRadius: "10px",
// //     padding: "22px",
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "14px",
// //     color: "#111",
// //     fontSize: "16px",
// //   };

// //   const orderList = {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "14px",
// //   };

// //   const orderCard = {
// //     background: "#f7f7f7",
// //     border: "1px solid #e5e7eb",
// //     borderRadius: "12px",
// //     padding: "18px",
// //   };

// //   const orderTitle = {
// //     fontSize: "16px",
// //     fontWeight: "700",
// //     marginBottom: "6px",
// //   };

// //   const orderMeta = {
// //     fontSize: "14px",
// //     color: "#666",
// //     marginBottom: "4px",
// //   };

// //   const input = {
// //     width: "100%",
// //     height: "42px",
// //     marginBottom: "16px",
// //     border: "1px solid #ddd",
// //     padding: "0 12px",
// //     borderRadius: "4px",
// //     boxSizing: "border-box",
// //     outline: "none",
// //     fontSize: "15px",
// //   };

// //   const saveButton = {
// //     border: "none",
// //     background: savingProfile ? "#9b7bb1" : "#6f3f8f",
// //     color: "#fff",
// //     fontWeight: "600",
// //     borderRadius: "4px",
// //     cursor: savingProfile ? "not-allowed" : "pointer",
// //     padding: "10px 18px",
// //     marginTop: "10px",
// //   };

// //   const cancelButton = {
// //     border: "1px solid #ddd",
// //     background: "#fff",
// //     color: "#111",
// //     fontWeight: "600",
// //     borderRadius: "4px",
// //     cursor: "pointer",
// //     padding: "10px 18px",
// //     marginTop: "10px",
// //     marginLeft: "10px",
// //   };

// //   const footer = {
// //     marginTop: "160px",
// //     padding: "24px 0 18px",
// //     borderTop: "1px solid #ddd6df",
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "20px",
// //     flexWrap: "wrap",
// //     color: "#7a4a91",
// //     fontSize: "14px",
// //   };

// //   const footerLink = {
// //     color: "#7a4a91",
// //     textDecoration: "underline",
// //     textUnderlineOffset: "2px",
// //   };

// //   return (
// //     <div style={page}>
// //       <div style={shell}>
// //         <div style={header}>
// //           <div style={leftHeader}>
// //             <Link to="/" style={logoWrap}>
// //               <img src={logo} alt="Femina Store Logo" style={logoStyle} />
// //             </Link>

// //             <div style={tabs}>
// //               <span
// //                 style={tab(activeSection === "orders")}
// //                 onClick={() => setActiveSection("orders")}
// //               >
// //                 Orders
// //               </span>

// //               <span
// //                 style={tab(activeSection === "profile")}
// //                 onClick={() => setActiveSection("profile")}
// //               >
// //                 Profile
// //               </span>
// //             </div>
// //           </div>

// //           <div style={accountArea}>
// //             <button
// //               type="button"
// //               style={accountTrigger}
// //               onClick={() => setMenuOpen((prev) => !prev)}
// //             >
// //               <FiUser size={34} color="#777" />
// //               {menuOpen ? (
// //                 <FiChevronUp size={18} color="#111" />
// //               ) : (
// //                 <FiChevronDown size={18} color="#111" />
// //               )}
// //             </button>

// //             {menuOpen && (
// //               <div style={accountMenu}>
// //                 <div style={menuTop}>
// //                   <FiUser size={34} color="#777" />
// //                   <div style={menuEmail}>{userEmail}</div>
// //                 </div>

// //                 <button
// //                   type="button"
// //                   style={menuButton(activeSection === "profile")}
// //                   onClick={() => handleMenuItemClick("profile")}
// //                 >
// //                   Profile
// //                 </button>

// //                 <button
// //                   type="button"
// //                   style={menuButton(activeSection === "orders")}
// //                   onClick={() => handleMenuItemClick("orders")}
// //                 >
// //                   Orders
// //                 </button>

// //                 <button
// //                   type="button"
// //                   style={menuButton(false)}
// //                   onClick={handleSignOut}
// //                 >
// //                   Sign out
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         <div style={content}>
// //           <div style={title}>
// //             {activeSection === "orders" ? "Orders" : "Profile"}
// //           </div>

// //           {activeSection === "orders" ? (
// //             userOrders.length === 0 ? (
// //               <div style={card}>
// //                 <div>
// //                   <div style={emptyTitle}>No orders yet</div>
// //                   <div style={emptySub}>
// //                     When you place an order, it will appear here.
// //                   </div>
// //                 </div>
// //               </div>
// //             ) : (
// //               <div style={orderList}>
// //                 {userOrders.map((order, index) => (
// //                   <div key={order.id || index} style={orderCard}>
// //                     <div style={orderTitle}>Order #{order.id || index + 1}</div>
// //                     <div style={orderMeta}>
// //                       Total: ₹{" "}
// //                       {Number(order.total || order.totalPrice || 0).toLocaleString("en-IN")}
// //                     </div>
// //                     <div style={orderMeta}>
// //                       Status: {order.status || "Placed"}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )
// //           ) : (
// //             <div style={profileWrapper}>
// //               <div style={profileCard}>
// //                 <div style={profileCardHeader}>
// //                   <div style={profileCardTitle}>Personal Information</div>

// //                   {!loadingProfile && !editingProfile && (
// //                     <button
// //                       type="button"
// //                       style={editButton}
// //                       onClick={() => setEditingProfile(true)}
// //                     >
// //                       <FiEdit2 size={16} />
// //                       Edit
// //                     </button>
// //                   )}
// //                 </div>

// //                 {loadingProfile ? (
// //                   <div style={fieldValue}>Loading profile...</div>
// //                 ) : (
// //                   <>
// //                     <div style={fieldLabel}>Name</div>
// //                     {editingProfile ? (
// //                       <input
// //                         style={input}
// //                         type="text"
// //                         name="name"
// //                         placeholder="Name"
// //                         value={profileForm.name}
// //                         onChange={handleProfileChange}
// //                       />
// //                     ) : (
// //                       <div style={valueBlock}>
// //                         <div style={fieldValue}>{userName}</div>
// //                       </div>
// //                     )}

// //                     <div style={fieldLabel}>Email</div>
// //                     {editingProfile ? (
// //                       <input
// //                         style={input}
// //                         type="email"
// //                         name="email"
// //                         placeholder="Email"
// //                         value={profileForm.email}
// //                         onChange={handleProfileChange}
// //                       />
// //                     ) : (
// //                       <div style={valueBlock}>
// //                         <div style={fieldValue}>{userEmail}</div>
// //                       </div>
// //                     )}

// //                     <div style={fieldLabel}>Contact Number</div>
// //                     {editingProfile ? (
// //                       <input
// //                         style={input}
// //                         type="text"
// //                         name="contactNumber"
// //                         placeholder="Contact Number"
// //                         value={profileForm.contactNumber}
// //                         onChange={handleProfileChange}
// //                       />
// //                     ) : (
// //                       <div style={valueBlock}>
// //                         <div style={fieldValue}>{userContactNumber}</div>
// //                       </div>
// //                     )}

// //                     {editingProfile && (
// //                       <div>
// //                         <button
// //                           type="button"
// //                           style={saveButton}
// //                           onClick={handleSaveProfile}
// //                           disabled={savingProfile}
// //                         >
// //                           {savingProfile ? "Saving..." : "Save"}
// //                         </button>

// //                         <button
// //                           type="button"
// //                           style={cancelButton}
// //                           onClick={() => {
// //                             setProfileForm({
// //                               name: loggedInUser?.name || "",
// //                               email: loggedInUser?.email || "",
// //                               contactNumber:
// //                                 loggedInUser?.phone ||
// //                                 loggedInUser?.contact_number ||
// //                                 loggedInUser?.contactNumber ||
// //                                 "",
// //                             });
// //                             setEditingProfile(false);
// //                           }}
// //                         >
// //                           Cancel
// //                         </button>
// //                       </div>
// //                     )}
// //                   </>
// //                 )}
// //               </div>

// //               <div style={profileCard}>
// //                 <div style={addressHeader}>
// //                   <div style={addressTitle}>Addresses</div>
// //                   <div style={addAddress}>+ Add</div>
// //                 </div>

// //                 <div style={noAddressBox}>
// //                   <FiInfo size={20} color="#7a7a7a" />
// //                   <span>No addresses added</span>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         <div style={footer}>
// //           <Link to="/refund-policy" style={footerLink}>
// //             Refund policy
// //           </Link>

// //           <Link to="/shipping-policy" style={footerLink}>
// //             Shipping
// //           </Link>

// //           <Link to="/privacy-policy" style={footerLink}>
// //             Privacy policy
// //           </Link>

// //           <Link to="/terms-of-service" style={footerLink}>
// //             Terms of service
// //           </Link>

// //           <Link to="/contact" style={footerLink}>
// //             Contact information
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/femina.png";
// import {
//   FiUser,
//   FiChevronUp,
//   FiChevronDown,
//   FiInfo,
//   FiEdit2,
//   FiTrash2,
// } from "react-icons/fi";

// export default function ProfilePage() {
//   const navigate = useNavigate();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("orders");
//   const [loadingProfile, setLoadingProfile] = useState(true);
//   const [savingProfile, setSavingProfile] = useState(false);
//   const [editingProfile, setEditingProfile] = useState(false);

//   const [addresses, setAddresses] = useState([]);
//   const [loadingAddresses, setLoadingAddresses] = useState(false);
//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const [savingAddress, setSavingAddress] = useState(false);
//   const [editingAddressId, setEditingAddressId] = useState(null);

//   const [loggedInUser, setLoggedInUser] = useState(() => {
//     return JSON.parse(localStorage.getItem("loggedInUser") || "null");
//   });

//   const [orders] = useState(() => {
//     return JSON.parse(localStorage.getItem("orders") || "[]");
//   });

//   const [profileForm, setProfileForm] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//   });

//   const [addressForm, setAddressForm] = useState({
//     country_region: "",
//     first_name: "",
//     last_name: "",
//     address: "",
//     apartment: "",
//     city: "",
//     state: "",
//     pincode: "",
//     phone: "",
//     is_default: false,
//   });

//   const token = localStorage.getItem("token");
//   const userId = loggedInUser?.id;

//   const userEmail = profileForm.email || "No email found";
//   const userName = profileForm.name || "";
//   const userContactNumber = profileForm.contactNumber || "No contact number found";

//   const userOrders = orders.filter((order) => order.email === userEmail);

//   const normalizeUser = (userData = {}) => {
//     return {
//       ...userData,
//       contact_number:
//         userData?.phone ||
//         userData?.contact_number ||
//         userData?.contactNumber ||
//         "",
//     };
//   };

//   const resetAddressForm = () => {
//     setAddressForm({
//       country_region: "",
//       first_name: "",
//       last_name: "",
//       address: "",
//       apartment: "",
//       city: "",
//       state: "",
//       pincode: "",
//       phone: "",
//       is_default: false,
//     });
//     setEditingAddressId(null);
//   };

//   const fetchUserProfile = async (showLoader = true) => {
//     if (!userId || !token) {
//       setLoadingProfile(false);
//       return;
//     }

//     if (showLoader) {
//       setLoadingProfile(true);
//     }

//     const requestUrl = `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`;

//     try {
//       const response = await fetch(requestUrl, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "ngrok-skip-browser-warning": "true",
//         },
//       });

//       const rawText = await response.text();

//       if (
//         rawText.includes("ERR_NGROK_6024") ||
//         rawText.includes("This website is served for free through ngrok.com") ||
//         rawText.includes("<!DOCTYPE html>")
//       ) {
//         alert(
//           "Your API request is being blocked by ngrok and returning an HTML page instead of JSON. Check your ngrok tunnel or backend URL."
//         );
//         return;
//       }

//       let data = {};
//       try {
//         data = rawText ? JSON.parse(rawText) : {};
//       } catch (error) {
//         console.log("Profile fetch response is not valid JSON");
//       }

//       if (!response.ok) {
//         alert(data.message || rawText || "Failed to fetch profile");
//         return;
//       }

//       const userData = data.user || data.data || data;
//       const normalizedUser = normalizeUser(userData);

//       setLoggedInUser(normalizedUser);
//       setProfileForm({
//         name: normalizedUser?.name || "",
//         email: normalizedUser?.email || "",
//         contactNumber: normalizedUser?.contact_number || "",
//       });

//       localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
//       window.dispatchEvent(new Event("authChanged"));
//     } catch (error) {
//       console.error("Fetch profile error:", error);
//       alert("Something went wrong while loading profile");
//     } finally {
//       setLoadingProfile(false);
//     }
//   };

//   const fetchAddresses = async () => {
//     if (!token) return;

//     setLoadingAddresses(true);

//     try {
//       const response = await fetch(
//         "https://initially-loamless-elroy.ngrok-free.dev/api/addresses",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "ngrok-skip-browser-warning": "true",
//           },
//         }
//       );

//       const rawText = await response.text();

//       if (
//         rawText.includes("ERR_NGROK_6024") ||
//         rawText.includes("This website is served for free through ngrok.com") ||
//         rawText.includes("<!DOCTYPE html>")
//       ) {
//         alert("Address fetch request is blocked by ngrok.");
//         return;
//       }

//       let data = {};
//       try {
//         data = rawText ? JSON.parse(rawText) : {};
//       } catch (error) {
//         console.log("Address fetch response is not valid JSON");
//       }

//       if (!response.ok) {
//         alert(data.message || "Failed to load addresses");
//         return;
//       }

//       const addressList = Array.isArray(data)
//         ? data
//         : Array.isArray(data.addresses)
//         ? data.addresses
//         : Array.isArray(data.data)
//         ? data.data
//         : [];

//       const filteredAddresses = addressList.filter(
//         (item) => String(item.user_id) === String(userId)
//       );

//       setAddresses(filteredAddresses);
//     } catch (error) {
//       console.error("Fetch addresses error:", error);
//       alert("Something went wrong while loading addresses");
//     } finally {
//       setLoadingAddresses(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, [userId, token]);

//   useEffect(() => {
//     if (token && userId) {
//       fetchAddresses();
//     }
//   }, [token, userId]);

//   const handleProfileChange = (e) => {
//     setProfileForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleAddressChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setAddressForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSaveProfile = async () => {
//     if (!userId || !token) {
//       alert("User not authenticated");
//       return;
//     }

//     setSavingProfile(true);

//     const payload = {
//       name: profileForm.name,
//       email: profileForm.email,
//       phone: profileForm.contactNumber,
//     };

//     console.log("PROFILE UPDATE DEBUG");
//     console.log("User ID:", userId);
//     console.log("Payload:", payload);

//     try {
//       const response = await fetch(
//         `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//             "ngrok-skip-browser-warning": "true",
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       const rawText = await response.text();

//       if (
//         rawText.includes("ERR_NGROK_6024") ||
//         rawText.includes("This website is served for free through ngrok.com") ||
//         rawText.includes("<!DOCTYPE html>")
//       ) {
//         alert(
//           "Your profile update request is being blocked by ngrok and returning HTML instead of JSON."
//         );
//         return;
//       }

//       let data = {};
//       try {
//         data = rawText ? JSON.parse(rawText) : {};
//       } catch (error) {
//         console.error("PROFILE UPDATE ERROR:", error);
//         alert("Invalid response from server");
//         return;
//       }

//       console.log("API RESPONSE:", data);
//       console.log("UPDATED USER FROM API:", data.user);

//       if (!response.ok) {
//         alert(data.message || "Failed to update profile");
//         return;
//       }

//       const updatedUser = normalizeUser(
//         data.user ||
//           data.data || {
//             ...loggedInUser,
//             ...payload,
//           }
//       );

//       setLoggedInUser(updatedUser);
//       setProfileForm({
//         name: updatedUser?.name || "",
//         email: updatedUser?.email || "",
//         contactNumber:
//           updatedUser?.phone ||
//           updatedUser?.contact_number ||
//           "",
//       });

//       localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
//       window.dispatchEvent(new Event("authChanged"));

//       alert(data.message || "Profile updated successfully");
//       setEditingProfile(false);
//     } catch (error) {
//       console.error("PROFILE UPDATE ERROR:", error);
//       alert("Something went wrong while updating profile");
//     } finally {
//       setSavingProfile(false);
//     }
//   };

//   const handleSaveAddress = async () => {
//     if (!token || !userId) {
//       alert("User not authenticated");
//       return;
//     }

//     setSavingAddress(true);

//     const payload = {
//       user_id: userId,
//       country_region: addressForm.country_region,
//       first_name: addressForm.first_name,
//       last_name: addressForm.last_name,
//       address: addressForm.address,
//       apartment: addressForm.apartment,
//       city: addressForm.city,
//       state: addressForm.state,
//       pincode: addressForm.pincode,
//       phone: addressForm.phone,
//       is_default: addressForm.is_default ? 1 : 0,
//     };

//     try {
//       const url = editingAddressId
//         ? `https://initially-loamless-elroy.ngrok-free.dev/api/addresses/${editingAddressId}`
//         : "https://initially-loamless-elroy.ngrok-free.dev/api/addresses";

//       const method = editingAddressId ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "ngrok-skip-browser-warning": "true",
//         },
//         body: JSON.stringify(payload),
//       });

//       const rawText = await response.text();

//       if (
//         rawText.includes("ERR_NGROK_6024") ||
//         rawText.includes("This website is served for free through ngrok.com") ||
//         rawText.includes("<!DOCTYPE html>")
//       ) {
//         alert("Address request is being blocked by ngrok.");
//         return;
//       }

//       let data = {};
//       try {
//         data = rawText ? JSON.parse(rawText) : {};
//       } catch (error) {
//         console.log("Address save response is not valid JSON");
//       }

//       if (!response.ok) {
//         alert(data.message || "Failed to save address");
//         return;
//       }

//       await fetchAddresses();
//       resetAddressForm();
//       setShowAddressForm(false);
//       alert(data.message || (editingAddressId ? "Address updated successfully" : "Address added successfully"));
//     } catch (error) {
//       console.error("Save address error:", error);
//       alert("Something went wrong while saving address");
//     } finally {
//       setSavingAddress(false);
//     }
//   };

//   const handleEditAddress = (address) => {
//     setEditingAddressId(address.id);
//     setAddressForm({
//       country_region: address.country_region || "",
//       first_name: address.first_name || "",
//       last_name: address.last_name || "",
//       address: address.address || "",
//       apartment: address.apartment || "",
//       city: address.city || "",
//       state: address.state || "",
//       pincode: address.pincode || "",
//       phone: address.phone || "",
//       is_default: Boolean(address.is_default),
//     });
//     setShowAddressForm(true);
//   };

//   const handleDeleteAddress = async (id) => {
//     if (!token) return;

//     const confirmed = window.confirm("Are you sure you want to delete this address?");
//     if (!confirmed) return;

//     try {
//       const response = await fetch(
//         `https://initially-loamless-elroy.ngrok-free.dev/api/addresses/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "ngrok-skip-browser-warning": "true",
//           },
//         }
//       );

//       const rawText = await response.text();

//       let data = {};
//       try {
//         data = rawText ? JSON.parse(rawText) : {};
//       } catch (error) {
//         data = {};
//       }

//       if (!response.ok) {
//         alert(data.message || "Failed to delete address");
//         return;
//       }

//       await fetchAddresses();
//       alert(data.message || "Address deleted successfully");
//     } catch (error) {
//       console.error("Delete address error:", error);
//       alert("Something went wrong while deleting address");
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await fetch("https://initially-loamless-elroy.ngrok-free.dev/api/logout", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "ngrok-skip-browser-warning": "true",
//         },
//       });
//     } catch (error) {
//       console.error("Logout API error:", error);
//     } finally {
//       localStorage.removeItem("loggedInUser");
//       localStorage.removeItem("token");
//       window.dispatchEvent(new Event("authChanged"));
//       navigate("/login");
//     }
//   };

//   const handleMenuItemClick = (section) => {
//     setActiveSection(section);
//     setMenuOpen(false);
//   };

//   const page = {
//     minHeight: "100vh",
//     background: "#f7f7f7",
//     fontFamily: "Arial, Helvetica, sans-serif",
//     color: "#111",
//   };

//   const shell = {
//     maxWidth: "1320px",
//     margin: "0 auto",
//     padding: "0 28px",
//     boxSizing: "border-box",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//   };

//   const header = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     paddingTop: "18px",
//     marginBottom: "54px",
//   };

//   const leftHeader = {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "36px",
//   };

//   const logoWrap = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const logoStyle = {
//     height: "64px",
//     objectFit: "contain",
//     display: "block",
//   };

//   const tabs = {
//     display: "flex",
//     alignItems: "center",
//     gap: "28px",
//     paddingTop: "14px",
//   };

//   const tab = (active) => ({
//     fontSize: "16px",
//     color: "#111",
//     textDecoration: active ? "underline" : "none",
//     textUnderlineOffset: "5px",
//     cursor: "pointer",
//   });

//   const accountArea = {
//     position: "relative",
//   };

//   const accountTrigger = {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     background: "transparent",
//     border: "none",
//     cursor: "pointer",
//     padding: 0,
//   };

//   const accountMenu = {
//     position: "absolute",
//     top: "48px",
//     right: 0,
//     width: "348px",
//     background: "#fff",
//     borderRadius: "12px",
//     boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
//     border: "1px solid #e7e1ea",
//     padding: "14px 14px 10px",
//     boxSizing: "border-box",
//     zIndex: 20,
//   };

//   const menuTop = {
//     display: "flex",
//     alignItems: "center",
//     gap: "14px",
//     paddingBottom: "14px",
//     borderBottom: "1px solid #e8e1ea",
//     marginBottom: "10px",
//   };

//   const menuEmail = {
//     fontSize: "15px",
//     color: "#667085",
//     wordBreak: "break-word",
//   };

//   const menuButton = (active) => ({
//     width: "100%",
//     height: "54px",
//     display: "flex",
//     alignItems: "center",
//     padding: "0 18px",
//     background: active ? "#fff" : "transparent",
//     border: active ? "2px solid #7a4a91" : "none",
//     borderRadius: "10px",
//     color: "#111",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginBottom: "8px",
//     boxSizing: "border-box",
//     textAlign: "left",
//   });

//   const content = {
//     flex: 1,
//   };

//   const title = {
//     fontSize: "20px",
//     fontWeight: "700",
//     marginBottom: "28px",
//     textTransform: "capitalize",
//   };

//   const card = {
//     width: "100%",
//     minHeight: "210px",
//     background: "#fff",
//     borderRadius: "16px",
//     border: "1px solid #ece7ed",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     padding: "30px",
//     boxSizing: "border-box",
//   };

//   const emptyTitle = {
//     fontSize: "18px",
//     fontWeight: "700",
//     marginBottom: "20px",
//   };

//   const emptySub = {
//     fontSize: "16px",
//     color: "#111",
//   };

//   const profileWrapper = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "30px",
//   };

//   const profileCard = {
//     width: "100%",
//     background: "#fff",
//     borderRadius: "16px",
//     border: "1px solid #ece7ed",
//     padding: "26px",
//     boxSizing: "border-box",
//   };

//   const profileCardHeader = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//     flexWrap: "wrap",
//     gap: "12px",
//   };

//   const profileCardTitle = {
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#111",
//   };

//   const editButton = {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     border: "1px solid #d6c8df",
//     background: "#fff",
//     color: "#7a4a91",
//     fontWeight: "600",
//     borderRadius: "8px",
//     cursor: "pointer",
//     padding: "8px 14px",
//   };

//   const fieldLabel = {
//     fontSize: "15px",
//     color: "#6b7280",
//     marginBottom: "8px",
//   };

//   const fieldValue = {
//     fontSize: "16px",
//     color: "#111",
//   };

//   const valueBlock = {
//     marginBottom: "24px",
//   };

//   const addressHeader = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "20px",
//     marginBottom: "26px",
//     flexWrap: "wrap",
//   };

//   const addressTitle = {
//     fontSize: "16px",
//     fontWeight: "700",
//     color: "#111",
//   };

//   const addAddress = {
//     fontSize: "16px",
//     fontWeight: "600",
//     color: "#7a4a91",
//     cursor: "pointer",
//   };

//   const noAddressBox = {
//     background: "#f7f7f7",
//     border: "1px solid #e5e7eb",
//     borderRadius: "10px",
//     padding: "22px",
//     display: "flex",
//     alignItems: "center",
//     gap: "14px",
//     color: "#111",
//     fontSize: "16px",
//   };

//   const orderList = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   };

//   const orderCard = {
//     background: "#f7f7f7",
//     border: "1px solid #e5e7eb",
//     borderRadius: "12px",
//     padding: "18px",
//   };

//   const orderTitle = {
//     fontSize: "16px",
//     fontWeight: "700",
//     marginBottom: "6px",
//   };

//   const orderMeta = {
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "4px",
//   };

//   const input = {
//     width: "100%",
//     height: "42px",
//     marginBottom: "16px",
//     border: "1px solid #ddd",
//     padding: "0 12px",
//     borderRadius: "4px",
//     boxSizing: "border-box",
//     outline: "none",
//     fontSize: "15px",
//   };

//   const textarea = {
//     width: "100%",
//     minHeight: "90px",
//     marginBottom: "16px",
//     border: "1px solid #ddd",
//     padding: "12px",
//     borderRadius: "4px",
//     boxSizing: "border-box",
//     outline: "none",
//     fontSize: "15px",
//     resize: "vertical",
//   };

//   const saveButton = {
//     border: "none",
//     background: savingProfile ? "#9b7bb1" : "#6f3f8f",
//     color: "#fff",
//     fontWeight: "600",
//     borderRadius: "4px",
//     cursor: savingProfile ? "not-allowed" : "pointer",
//     padding: "10px 18px",
//     marginTop: "10px",
//   };

//   const addressSaveButton = {
//     border: "none",
//     background: savingAddress ? "#9b7bb1" : "#6f3f8f",
//     color: "#fff",
//     fontWeight: "600",
//     borderRadius: "4px",
//     cursor: savingAddress ? "not-allowed" : "pointer",
//     padding: "10px 18px",
//     marginTop: "10px",
//   };

//   const cancelButton = {
//     border: "1px solid #ddd",
//     background: "#fff",
//     color: "#111",
//     fontWeight: "600",
//     borderRadius: "4px",
//     cursor: "pointer",
//     padding: "10px 18px",
//     marginTop: "10px",
//     marginLeft: "10px",
//   };

//   const addressCard = {
//     background: "#f7f7f7",
//     border: "1px solid #e5e7eb",
//     borderRadius: "12px",
//     padding: "18px",
//     marginBottom: "14px",
//   };

//   const addressName = {
//     fontSize: "16px",
//     fontWeight: "700",
//     marginBottom: "8px",
//   };

//   const addressText = {
//     fontSize: "14px",
//     color: "#444",
//     lineHeight: "1.6",
//     marginBottom: "6px",
//   };

//   const addressActions = {
//     display: "flex",
//     gap: "10px",
//     marginTop: "12px",
//     flexWrap: "wrap",
//   };

//   const smallButton = {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     border: "1px solid #d6c8df",
//     background: "#fff",
//     color: "#7a4a91",
//     fontWeight: "600",
//     borderRadius: "8px",
//     cursor: "pointer",
//     padding: "8px 12px",
//   };

//   const checkboxWrap = {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//     fontSize: "14px",
//     color: "#111",
//   };

//   const footer = {
//     marginTop: "160px",
//     padding: "24px 0 18px",
//     borderTop: "1px solid #ddd6df",
//     display: "flex",
//     alignItems: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//     color: "#7a4a91",
//     fontSize: "14px",
//   };

//   const footerLink = {
//     color: "#7a4a91",
//     textDecoration: "underline",
//     textUnderlineOffset: "2px",
//   };

//   return (
//     <div style={page}>
//       <div style={shell}>
//         <div style={header}>
//           <div style={leftHeader}>
//             <Link to="/" style={logoWrap}>
//               <img src={logo} alt="Femina Store Logo" style={logoStyle} />
//             </Link>

//             <div style={tabs}>
//               <span
//                 style={tab(activeSection === "orders")}
//                 onClick={() => setActiveSection("orders")}
//               >
//                 Orders
//               </span>

//               <span
//                 style={tab(activeSection === "profile")}
//                 onClick={() => setActiveSection("profile")}
//               >
//                 Profile
//               </span>
//             </div>
//           </div>

//           <div style={accountArea}>
//             <button
//               type="button"
//               style={accountTrigger}
//               onClick={() => setMenuOpen((prev) => !prev)}
//             >
//               <FiUser size={34} color="#777" />
//               {menuOpen ? (
//                 <FiChevronUp size={18} color="#111" />
//               ) : (
//                 <FiChevronDown size={18} color="#111" />
//               )}
//             </button>

//             {menuOpen && (
//               <div style={accountMenu}>
//                 <div style={menuTop}>
//                   <FiUser size={34} color="#777" />
//                   <div style={menuEmail}>{userEmail}</div>
//                 </div>

//                 <button
//                   type="button"
//                   style={menuButton(activeSection === "profile")}
//                   onClick={() => handleMenuItemClick("profile")}
//                 >
//                   Profile
//                 </button>

//                 <button
//                   type="button"
//                   style={menuButton(activeSection === "orders")}
//                   onClick={() => handleMenuItemClick("orders")}
//                 >
//                   Orders
//                 </button>

//                 <button
//                   type="button"
//                   style={menuButton(false)}
//                   onClick={handleSignOut}
//                 >
//                   Sign out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         <div style={content}>
//           <div style={title}>
//             {activeSection === "orders" ? "Orders" : "Profile"}
//           </div>

//           {activeSection === "orders" ? (
//             userOrders.length === 0 ? (
//               <div style={card}>
//                 <div>
//                   <div style={emptyTitle}>No orders yet</div>
//                   <div style={emptySub}>
//                     When you place an order, it will appear here.
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div style={orderList}>
//                 {userOrders.map((order, index) => (
//                   <div key={order.id || index} style={orderCard}>
//                     <div style={orderTitle}>Order #{order.id || index + 1}</div>
//                     <div style={orderMeta}>
//                       Total: ₹{" "}
//                       {Number(order.total || order.totalPrice || 0).toLocaleString("en-IN")}
//                     </div>
//                     <div style={orderMeta}>
//                       Status: {order.status || "Placed"}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )
//           ) : (
//             <div style={profileWrapper}>
//               <div style={profileCard}>
//                 <div style={profileCardHeader}>
//                   <div style={profileCardTitle}>Personal Information</div>

//                   {!loadingProfile && !editingProfile && (
//                     <button
//                       type="button"
//                       style={editButton}
//                       onClick={() => setEditingProfile(true)}
//                     >
//                       <FiEdit2 size={16} />
//                       Edit
//                     </button>
//                   )}
//                 </div>

//                 {loadingProfile ? (
//                   <div style={fieldValue}>Loading profile...</div>
//                 ) : (
//                   <>
//                     <div style={fieldLabel}>Name</div>
//                     {editingProfile ? (
//                       <input
//                         style={input}
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={profileForm.name}
//                         onChange={handleProfileChange}
//                       />
//                     ) : (
//                       <div style={valueBlock}>
//                         <div style={fieldValue}>{userName}</div>
//                       </div>
//                     )}

//                     <div style={fieldLabel}>Email</div>
//                     {editingProfile ? (
//                       <input
//                         style={input}
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={profileForm.email}
//                         onChange={handleProfileChange}
//                       />
//                     ) : (
//                       <div style={valueBlock}>
//                         <div style={fieldValue}>{userEmail}</div>
//                       </div>
//                     )}

//                     <div style={fieldLabel}>Contact Number</div>
//                     {editingProfile ? (
//                       <input
//                         style={input}
//                         type="text"
//                         name="contactNumber"
//                         placeholder="Contact Number"
//                         value={profileForm.contactNumber}
//                         onChange={handleProfileChange}
//                       />
//                     ) : (
//                       <div style={valueBlock}>
//                         <div style={fieldValue}>{userContactNumber}</div>
//                       </div>
//                     )}

//                     {editingProfile && (
//                       <div>
//                         <button
//                           type="button"
//                           style={saveButton}
//                           onClick={handleSaveProfile}
//                           disabled={savingProfile}
//                         >
//                           {savingProfile ? "Saving..." : "Save"}
//                         </button>

//                         <button
//                           type="button"
//                           style={cancelButton}
//                           onClick={() => {
//                             setProfileForm({
//                               name: loggedInUser?.name || "",
//                               email: loggedInUser?.email || "",
//                               contactNumber:
//                                 loggedInUser?.phone ||
//                                 loggedInUser?.contact_number ||
//                                 loggedInUser?.contactNumber ||
//                                 "",
//                             });
//                             setEditingProfile(false);
//                           }}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>

//               <div style={profileCard}>
//                 <div style={addressHeader}>
//                   <div style={addressTitle}>Addresses</div>

//                   <div
//                     style={addAddress}
//                     onClick={() => {
//                       resetAddressForm();
//                       setShowAddressForm(true);
//                     }}
//                   >
//                     + Add
//                   </div>
//                 </div>

//                 {showAddressForm && (
//                   <div style={{ marginBottom: "24px" }}>
//                     <input
//                       style={input}
//                       type="text"
//                       name="country_region"
//                       placeholder="Country / Region"
//                       value={addressForm.country_region}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="first_name"
//                       placeholder="First Name"
//                       value={addressForm.first_name}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="last_name"
//                       placeholder="Last Name"
//                       value={addressForm.last_name}
//                       onChange={handleAddressChange}
//                     />

//                     <textarea
//                       style={textarea}
//                       name="address"
//                       placeholder="Address"
//                       value={addressForm.address}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="apartment"
//                       placeholder="Apartment, suite, etc. (optional)"
//                       value={addressForm.apartment}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="city"
//                       placeholder="City"
//                       value={addressForm.city}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="state"
//                       placeholder="State"
//                       value={addressForm.state}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="pincode"
//                       placeholder="Pincode"
//                       value={addressForm.pincode}
//                       onChange={handleAddressChange}
//                     />

//                     <input
//                       style={input}
//                       type="text"
//                       name="phone"
//                       placeholder="Phone"
//                       value={addressForm.phone}
//                       onChange={handleAddressChange}
//                     />

//                     <label style={checkboxWrap}>
//                       <input
//                         type="checkbox"
//                         name="is_default"
//                         checked={addressForm.is_default}
//                         onChange={handleAddressChange}
//                       />
//                       Set as default address
//                     </label>

//                     <div>
//                       <button
//                         type="button"
//                         style={addressSaveButton}
//                         onClick={handleSaveAddress}
//                         disabled={savingAddress}
//                       >
//                         {savingAddress
//                           ? "Saving..."
//                           : editingAddressId
//                           ? "Update Address"
//                           : "Save Address"}
//                       </button>

//                       <button
//                         type="button"
//                         style={cancelButton}
//                         onClick={() => {
//                           resetAddressForm();
//                           setShowAddressForm(false);
//                         }}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {loadingAddresses ? (
//                   <div style={fieldValue}>Loading addresses...</div>
//                 ) : addresses.length === 0 ? (
//                   <div style={noAddressBox}>
//                     <FiInfo size={20} color="#7a7a7a" />
//                     <span>No addresses added</span>
//                   </div>
//                 ) : (
//                   addresses.map((item) => (
//                     <div key={item.id} style={addressCard}>
//                       <div style={addressName}>
//                         {item.first_name} {item.last_name}
//                         {Number(item.is_default) === 1 ? " (Default)" : ""}
//                       </div>

//                       <div style={addressText}>
//                         {item.address}
//                         {item.apartment ? `, ${item.apartment}` : ""}
//                       </div>

//                       <div style={addressText}>
//                         {item.city}, {item.state} - {item.pincode}
//                       </div>

//                       <div style={addressText}>{item.country_region}</div>
//                       <div style={addressText}>Phone: {item.phone}</div>

//                       <div style={addressActions}>
//                         <button
//                           type="button"
//                           style={smallButton}
//                           onClick={() => handleEditAddress(item)}
//                         >
//                           <FiEdit2 size={14} />
//                           Edit
//                         </button>

//                         <button
//                           type="button"
//                           style={smallButton}
//                           onClick={() => handleDeleteAddress(item.id)}
//                         >
//                           <FiTrash2 size={14} />
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         <div style={footer}>
//           <Link to="/refund-policy" style={footerLink}>
//             Refund policy
//           </Link>

//           <Link to="/shipping-policy" style={footerLink}>
//             Shipping
//           </Link>

//           <Link to="/privacy-policy" style={footerLink}>
//             Privacy policy
//           </Link>

//           <Link to="/terms-of-service" style={footerLink}>
//             Terms of service
//           </Link>

//           <Link to="/contact" style={footerLink}>
//             Contact information
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/femina.png";
import {
  FiUser,
  FiChevronUp,
  FiChevronDown,
  FiInfo,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("orders");
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);

  const [addresses, setAddresses] = useState([]);
  const [loadingAddresses, setLoadingAddresses] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [savingAddress, setSavingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser") || "null");
  });

  const [orders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  });

  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });

  const [addressForm, setAddressForm] = useState({
    country_region: "",
    first_name: "",
    last_name: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    is_default: false,
  });

  const token = localStorage.getItem("token");
  const userId = loggedInUser?.id;

  const userEmail = profileForm.email || "No email found";
  const userName = profileForm.name || "";
  const userContactNumber = profileForm.contactNumber || "No contact number found";

  const userOrders = orders.filter((order) => order.email === userEmail);

  const normalizeUser = (userData = {}) => {
    return {
      ...userData,
      contact_number:
        userData?.phone ||
        userData?.contact_number ||
        userData?.contactNumber ||
        "",
    };
  };

  const resetAddressForm = () => {
    setAddressForm({
      country_region: "",
      first_name: "",
      last_name: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      is_default: false,
    });
    setEditingAddressId(null);
  };

  const fetchUserProfile = async (showLoader = true) => {
    if (!userId || !token) {
      setLoadingProfile(false);
      return;
    }

    if (showLoader) {
      setLoadingProfile(true);
    }

    const requestUrl = `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`;

    try {
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      const rawText = await response.text();

      if (
        rawText.includes("ERR_NGROK_6024") ||
        rawText.includes("This website is served for free through ngrok.com") ||
        rawText.includes("<!DOCTYPE html>")
      ) {
        alert(
          "Your API request is being blocked by ngrok and returning an HTML page instead of JSON. Check your ngrok tunnel or backend URL."
        );
        return;
      }

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (error) {
        console.log("Profile fetch response is not valid JSON");
      }

      if (!response.ok) {
        alert(data.message || rawText || "Failed to fetch profile");
        return;
      }

      const userData = data.user || data.data || data;
      const normalizedUser = normalizeUser(userData);

      setLoggedInUser(normalizedUser);
      setProfileForm({
        name: normalizedUser?.name || "",
        email: normalizedUser?.email || "",
        contactNumber: normalizedUser?.contact_number || "",
      });

      localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
      window.dispatchEvent(new Event("authChanged"));
    } catch (error) {
      console.error("Fetch profile error:", error);
      alert("Something went wrong while loading profile");
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchAddresses = async () => {
    if (!token) return;

    setLoadingAddresses(true);

    try {
      const response = await fetch(
        "https://initially-loamless-elroy.ngrok-free.dev/api/addresses",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const rawText = await response.text();

      if (
        rawText.includes("ERR_NGROK_6024") ||
        rawText.includes("This website is served for free through ngrok.com") ||
        rawText.includes("<!DOCTYPE html>")
      ) {
        alert("Address fetch request is blocked by ngrok.");
        return;
      }

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (error) {
        console.log("Address fetch response is not valid JSON");
      }

      if (!response.ok) {
        alert(data.message || "Failed to load addresses");
        return;
      }

      const addressList = Array.isArray(data)
        ? data
        : Array.isArray(data.addresses)
        ? data.addresses
        : Array.isArray(data.data)
        ? data.data
        : [];

      const filteredAddresses = addressList.filter(
        (item) => String(item.user_id) === String(userId)
      );

      setAddresses(filteredAddresses);
    } catch (error) {
      console.error("Fetch addresses error:", error);
      alert("Something went wrong while loading addresses");
    } finally {
      setLoadingAddresses(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [userId, token]);

  useEffect(() => {
    if (token && userId) {
      fetchAddresses();
    }
  }, [token, userId]);

  const handleProfileChange = (e) => {
    setProfileForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;

    setAddressForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveProfile = async () => {
    if (!userId || !token) {
      alert("User not authenticated");
      return;
    }

    setSavingProfile(true);

    const payload = {
      name: profileForm.name,
      email: profileForm.email,
      phone: profileForm.contactNumber,
    };

    console.log("PROFILE UPDATE DEBUG");
    console.log("User ID:", userId);
    console.log("Payload:", payload);

    try {
      const response = await fetch(
        `https://initially-loamless-elroy.ngrok-free.dev/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify(payload),
        }
      );

      const rawText = await response.text();

      if (
        rawText.includes("ERR_NGROK_6024") ||
        rawText.includes("This website is served for free through ngrok.com") ||
        rawText.includes("<!DOCTYPE html>")
      ) {
        alert(
          "Your profile update request is being blocked by ngrok and returning HTML instead of JSON."
        );
        return;
      }

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (error) {
        console.error("PROFILE UPDATE ERROR:", error);
        alert("Invalid response from server");
        return;
      }

      console.log("API RESPONSE:", data);
      console.log("UPDATED USER FROM API:", data.user);

      if (!response.ok) {
        alert(data.message || "Failed to update profile");
        return;
      }

      const updatedUser = normalizeUser(
        data.user ||
          data.data || {
            ...loggedInUser,
            ...payload,
          }
      );

      setLoggedInUser(updatedUser);
      setProfileForm({
        name: updatedUser?.name || "",
        email: updatedUser?.email || "",
        contactNumber:
          updatedUser?.phone ||
          updatedUser?.contact_number ||
          "",
      });

      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      window.dispatchEvent(new Event("authChanged"));

      alert(data.message || "Profile updated successfully");
      setEditingProfile(false);
    } catch (error) {
      console.error("PROFILE UPDATE ERROR:", error);
      alert("Something went wrong while updating profile");
    } finally {
      setSavingProfile(false);
    }
  };

  const handleSaveAddress = async () => {
    if (!token || !userId) {
      alert("User not authenticated");
      return;
    }

    setSavingAddress(true);

    const payload = {
      user_id: userId,
      country_region: addressForm.country_region,
      first_name: addressForm.first_name,
      last_name: addressForm.last_name,
      address: addressForm.address,
      apartment: addressForm.apartment,
      city: addressForm.city,
      state: addressForm.state,
      pincode: addressForm.pincode,
      phone: addressForm.phone,
      is_default: addressForm.is_default ? 1 : 0,
    };

    try {
      const url = editingAddressId
        ? `https://initially-loamless-elroy.ngrok-free.dev/api/addresses/${editingAddressId}`
        : "https://initially-loamless-elroy.ngrok-free.dev/api/addresses";

      const method = editingAddressId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(payload),
      });

      const rawText = await response.text();

      if (
        rawText.includes("ERR_NGROK_6024") ||
        rawText.includes("This website is served for free through ngrok.com") ||
        rawText.includes("<!DOCTYPE html>")
      ) {
        alert("Address request is being blocked by ngrok.");
        return;
      }

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (error) {
        console.log("Address save response is not valid JSON");
      }

      if (!response.ok) {
        alert(data.message || "Failed to save address");
        return;
      }

      await fetchAddresses();
      resetAddressForm();
      setShowAddressForm(false);
      alert(data.message || (editingAddressId ? "Address updated successfully" : "Address added successfully"));
    } catch (error) {
      console.error("Save address error:", error);
      alert("Something went wrong while saving address");
    } finally {
      setSavingAddress(false);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddressId(address.id);
    setAddressForm({
      country_region: address.country_region || "",
      first_name: address.first_name || "",
      last_name: address.last_name || "",
      address: address.address || "",
      apartment: address.apartment || "",
      city: address.city || "",
      state: address.state || "",
      pincode: address.pincode || "",
      phone: address.phone || "",
      is_default: Boolean(address.is_default),
    });
    setShowAddressForm(true);
  };

  const handleDeleteAddress = async (id) => {
    if (!token) return;

    const confirmed = window.confirm("Are you sure you want to delete this address?");
    if (!confirmed) return;

    try {
      const response = await fetch(
        `https://initially-loamless-elroy.ngrok-free.dev/api/addresses/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const rawText = await response.text();

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (error) {
        data = {};
      }

      if (!response.ok) {
        alert(data.message || "Failed to delete address");
        return;
      }

      await fetchAddresses();
      alert(data.message || "Address deleted successfully");
    } catch (error) {
      console.error("Delete address error:", error);
      alert("Something went wrong while deleting address");
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("https://initially-loamless-elroy.ngrok-free.dev/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("token");
      window.dispatchEvent(new Event("authChanged"));
      navigate("/login");
    }
  };

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const page = {
    minHeight: "100vh",
    background: "#f7f7f7",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#111",
  };

  const shell = {
    maxWidth: "1320px",
    margin: "0 auto",
    padding: "0 28px",
    boxSizing: "border-box",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: "18px",
    marginBottom: "54px",
  };

  const leftHeader = {
    display: "flex",
    alignItems: "flex-start",
    gap: "36px",
  };

  const logoWrap = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    height: "64px",
    objectFit: "contain",
    display: "block",
  };

  const tabs = {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    paddingTop: "14px",
  };

  const tab = (active) => ({
    fontSize: "16px",
    color: "#111",
    textDecoration: active ? "underline" : "none",
    textUnderlineOffset: "5px",
    cursor: "pointer",
  });

  const accountArea = {
    position: "relative",
  };

  const accountTrigger = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
  };

  const accountMenu = {
    position: "absolute",
    top: "48px",
    right: 0,
    width: "348px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    border: "1px solid #e7e1ea",
    padding: "14px 14px 10px",
    boxSizing: "border-box",
    zIndex: 20,
  };

  const menuTop = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    paddingBottom: "14px",
    borderBottom: "1px solid #e8e1ea",
    marginBottom: "10px",
  };

  const menuEmail = {
    fontSize: "15px",
    color: "#667085",
    wordBreak: "break-word",
  };

  const menuButton = (active) => ({
    width: "100%",
    height: "54px",
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    background: active ? "#fff" : "transparent",
    border: active ? "2px solid #7a4a91" : "none",
    borderRadius: "10px",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "8px",
    boxSizing: "border-box",
    textAlign: "left",
  });

  const content = {
    flex: 1,
  };

  const title = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "28px",
    textTransform: "capitalize",
  };

  const card = {
    width: "100%",
    minHeight: "210px",
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #ece7ed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "30px",
    boxSizing: "border-box",
  };

  const emptyTitle = {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const emptySub = {
    fontSize: "16px",
    color: "#111",
  };

  const profileWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const profileCard = {
    width: "100%",
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #ece7ed",
    padding: "26px",
    boxSizing: "border-box",
  };

  const profileCardHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "12px",
  };

  const profileCardTitle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111",
  };

  const editButton = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #d6c8df",
    background: "#fff",
    color: "#7a4a91",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "8px 14px",
  };

  const fieldLabel = {
    fontSize: "15px",
    color: "#6b7280",
    marginBottom: "8px",
  };

  const fieldValue = {
    fontSize: "16px",
    color: "#111",
  };

  const valueBlock = {
    marginBottom: "24px",
  };

  const addressHeader = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "26px",
    flexWrap: "wrap",
  };

  const addressTitle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111",
  };

  const addAddress = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#7a4a91",
    cursor: "pointer",
  };

  const noAddressBox = {
    background: "#f7f7f7",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#111",
    fontSize: "16px",
  };

  const orderList = {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  };

  const orderCard = {
    background: "#f7f7f7",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "18px",
  };

  const orderTitle = {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "6px",
  };

  const orderMeta = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "4px",
  };

  const input = {
    width: "100%",
    height: "42px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    padding: "0 12px",
    borderRadius: "4px",
    boxSizing: "border-box",
    outline: "none",
    fontSize: "15px",
  };

  const textarea = {
    width: "100%",
    minHeight: "90px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "4px",
    boxSizing: "border-box",
    outline: "none",
    fontSize: "15px",
    resize: "vertical",
  };

  const saveButton = {
    border: "none",
    background: savingProfile ? "#9b7bb1" : "#6f3f8f",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: savingProfile ? "not-allowed" : "pointer",
    padding: "10px 18px",
    marginTop: "10px",
  };

  const addressSaveButton = {
    border: "none",
    background: savingAddress ? "#9b7bb1" : "#6f3f8f",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: savingAddress ? "not-allowed" : "pointer",
    padding: "10px 18px",
    marginTop: "10px",
  };

  const cancelButton = {
    border: "1px solid #ddd",
    background: "#fff",
    color: "#111",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "10px 18px",
    marginTop: "10px",
    marginLeft: "10px",
  };

  const addressCard = {
    background: "#f7f7f7",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "18px",
    marginBottom: "14px",
  };

  const addressName = {
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "8px",
  };

  const addressText = {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.6",
    marginBottom: "6px",
  };

  const addressActions = {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    flexWrap: "wrap",
  };

  const smallButton = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    border: "1px solid #d6c8df",
    background: "#fff",
    color: "#7a4a91",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "8px 12px",
  };

  const checkboxWrap = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    color: "#111",
  };

  const footer = {
    marginTop: "160px",
    padding: "24px 0 18px",
    borderTop: "1px solid #ddd6df",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "#7a4a91",
    fontSize: "14px",
  };

  const footerLink = {
    color: "#7a4a91",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  };

  return (
    <div style={page}>
      <div style={shell}>
        <div style={header}>
          <div style={leftHeader}>
            <Link to="/" style={logoWrap}>
              <img src={logo} alt="Femina Store Logo" style={logoStyle} />
            </Link>

            <div style={tabs}>
              <span
                style={tab(activeSection === "orders")}
                onClick={() => setActiveSection("orders")}
              >
                Orders
              </span>

              <span
                style={tab(activeSection === "profile")}
                onClick={() => setActiveSection("profile")}
              >
                Profile
              </span>
            </div>
          </div>

          <div style={accountArea}>
            <button
              type="button"
              style={accountTrigger}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <FiUser size={34} color="#777" />
              {menuOpen ? (
                <FiChevronUp size={18} color="#111" />
              ) : (
                <FiChevronDown size={18} color="#111" />
              )}
            </button>

            {menuOpen && (
              <div style={accountMenu}>
                <div style={menuTop}>
                  <FiUser size={34} color="#777" />
                  <div style={menuEmail}>{userEmail}</div>
                </div>

                <button
                  type="button"
                  style={menuButton(activeSection === "profile")}
                  onClick={() => handleMenuItemClick("profile")}
                >
                  Profile
                </button>

                <button
                  type="button"
                  style={menuButton(activeSection === "orders")}
                  onClick={() => handleMenuItemClick("orders")}
                >
                  Orders
                </button>

                <button
                  type="button"
                  style={menuButton(false)}
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>

        <div style={content}>
          <div style={title}>
            {activeSection === "orders" ? "Orders" : "Profile"}
          </div>

          {activeSection === "orders" ? (
            userOrders.length === 0 ? (
              <div style={card}>
                <div>
                  <div style={emptyTitle}>No orders yet</div>
                  <div style={emptySub}>
                    When you place an order, it will appear here.
                  </div>
                </div>
              </div>
            ) : (
              <div style={orderList}>
                {userOrders.map((order, index) => (
                  <div key={order.id || index} style={orderCard}>
                    <div style={orderTitle}>Order #{order.id || index + 1}</div>
                    <div style={orderMeta}>
                      Total: ₹{" "}
                      {Number(order.total || order.totalPrice || 0).toLocaleString("en-IN")}
                    </div>
                    <div style={orderMeta}>
                      Status: {order.status || "Placed"}
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div style={profileWrapper}>
              <div style={profileCard}>
                <div style={profileCardHeader}>
                  <div style={profileCardTitle}>Personal Information</div>

                  {!loadingProfile && !editingProfile && (
                    <button
                      type="button"
                      style={editButton}
                      onClick={() => setEditingProfile(true)}
                    >
                      <FiEdit2 size={16} />
                      Edit
                    </button>
                  )}
                </div>

                {loadingProfile ? (
                  <div style={fieldValue}>Loading profile...</div>
                ) : (
                  <>
                    <div style={fieldLabel}>Name</div>
                    {editingProfile ? (
                      <input
                        style={input}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={profileForm.name}
                        onChange={handleProfileChange}
                      />
                    ) : (
                      <div style={valueBlock}>
                        <div style={fieldValue}>{userName}</div>
                      </div>
                    )}

                    <div style={fieldLabel}>Email</div>
                    {editingProfile ? (
                      <input
                        style={input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                      />
                    ) : (
                      <div style={valueBlock}>
                        <div style={fieldValue}>{userEmail}</div>
                      </div>
                    )}

                    <div style={fieldLabel}>Contact Number</div>
                    {editingProfile ? (
                      <input
                        style={input}
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={profileForm.contactNumber}
                        onChange={handleProfileChange}
                      />
                    ) : (
                      <div style={valueBlock}>
                        <div style={fieldValue}>{userContactNumber}</div>
                      </div>
                    )}

                    {editingProfile && (
                      <div>
                        <button
                          type="button"
                          style={saveButton}
                          onClick={handleSaveProfile}
                          disabled={savingProfile}
                        >
                          {savingProfile ? "Saving..." : "Save"}
                        </button>

                        <button
                          type="button"
                          style={cancelButton}
                          onClick={() => {
                            setProfileForm({
                              name: loggedInUser?.name || "",
                              email: loggedInUser?.email || "",
                              contactNumber:
                                loggedInUser?.phone ||
                                loggedInUser?.contact_number ||
                                loggedInUser?.contactNumber ||
                                "",
                            });
                            setEditingProfile(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div style={profileCard}>
                <div style={addressHeader}>
                  <div style={addressTitle}>Addresses</div>

                  <div
                    style={addAddress}
                    onClick={() => {
                      resetAddressForm();
                      setShowAddressForm(true);
                    }}
                  >
                    + Add
                  </div>
                </div>

                {showAddressForm && (
                  <div style={{ marginBottom: "24px" }}>
                    <input
                      style={input}
                      type="text"
                      name="country_region"
                      placeholder="Country / Region"
                      value={addressForm.country_region}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={addressForm.first_name}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={addressForm.last_name}
                      onChange={handleAddressChange}
                    />

                    <textarea
                      style={textarea}
                      name="address"
                      placeholder="Address"
                      value={addressForm.address}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="apartment"
                      placeholder="Apartment, suite, etc. (optional)"
                      value={addressForm.apartment}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="city"
                      placeholder="City"
                      value={addressForm.city}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="state"
                      placeholder="State"
                      value={addressForm.state}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      value={addressForm.pincode}
                      onChange={handleAddressChange}
                    />

                    <input
                      style={input}
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={addressForm.phone}
                      onChange={handleAddressChange}
                    />

                    <label style={checkboxWrap}>
                      <input
                        type="checkbox"
                        name="is_default"
                        checked={addressForm.is_default}
                        onChange={handleAddressChange}
                      />
                      Set as default address
                    </label>

                    <div>
                      <button
                        type="button"
                        style={addressSaveButton}
                        onClick={handleSaveAddress}
                        disabled={savingAddress}
                      >
                        {savingAddress
                          ? "Saving..."
                          : editingAddressId
                          ? "Update Address"
                          : "Save Address"}
                      </button>

                      <button
                        type="button"
                        style={cancelButton}
                        onClick={() => {
                          resetAddressForm();
                          setShowAddressForm(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {loadingAddresses ? (
                  <div style={fieldValue}>Loading addresses...</div>
                ) : addresses.length === 0 ? (
                  <div style={noAddressBox}>
                    <FiInfo size={20} color="#7a7a7a" />
                    <span>No addresses added</span>
                  </div>
                ) : (
                  addresses.map((item) => (
                    <div key={item.id} style={addressCard}>
                      <div style={addressName}>
                        {item.first_name} {item.last_name}
                        {Number(item.is_default) === 1 ? " (Default)" : ""}
                      </div>

                      <div style={addressText}>
                        {item.address}
                        {item.apartment ? `, ${item.apartment}` : ""}
                      </div>

                      <div style={addressText}>
                        {item.city}, {item.state} - {item.pincode}
                      </div>

                      <div style={addressText}>{item.country_region}</div>
                      <div style={addressText}>Phone: {item.phone}</div>

                      <div style={addressActions}>
                        <button
                          type="button"
                          style={smallButton}
                          onClick={() => handleEditAddress(item)}
                        >
                          <FiEdit2 size={14} />
                          Edit
                        </button>

                        <button
                          type="button"
                          style={smallButton}
                          onClick={() => handleDeleteAddress(item.id)}
                        >
                          <FiTrash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <div style={footer}>
          <Link to="/refund-policy" style={footerLink}>
            Refund policy
          </Link>

          <Link to="/shipping-policy" style={footerLink}>
            Shipping
          </Link>

          <Link to="/privacy-policy" style={footerLink}>
            Privacy policy
          </Link>

          <Link to="/terms-of-service" style={footerLink}>
            Terms of service
          </Link>

          <Link to="/contact" style={footerLink}>
            Contact information
          </Link>
        </div>
      </div>
    </div>
  );
}