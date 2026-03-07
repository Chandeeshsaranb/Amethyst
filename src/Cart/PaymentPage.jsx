

// import React, { useMemo, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/Logo.avif";

// function formatINR(n) {
//   return `₹${Number(n || 0).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   })}`;
// }

// export default function PaymentPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const stateData = location.state || {};

//   const singleProduct = stateData.product || null;
//   const singleQty = stateData.qty || 1;

//   const cartItems = useMemo(() => {
//     if (stateData.cartItems && stateData.cartItems.length > 0) {
//       return stateData.cartItems;
//     }

//     if (singleProduct) {
//       return [
//         {
//           id: singleProduct.id,
//           title: singleProduct.title || singleProduct.name,
//           name: singleProduct.name || singleProduct.title,
//           price: Number(singleProduct.price || 0),
//           quantity: singleQty,
//           image:
//             singleProduct.image ||
//             (singleProduct.images && singleProduct.images[0]) ||
//             "",
//           images: singleProduct.images || [],
//         },
//       ];
//     }

//     return [];
//   }, [stateData.cartItems, singleProduct, singleQty]);

//   const [email, setEmail] = useState("");
//   const [offers, setOffers] = useState(true);

//   const [country, setCountry] = useState("India");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [apartment, setApartment] = useState("");
//   const [city, setCity] = useState("");
//   const [stateName, setStateName] = useState("Tamil Nadu");
//   const [pinCode, setPinCode] = useState("");
//   const [phone, setPhone] = useState("");
//   const [saveInfo, setSaveInfo] = useState(false);

//   const [discountCode, setDiscountCode] = useState("");
//   const [discountPercent, setDiscountPercent] = useState(0);

//   const [billingAddress, setBillingAddress] = useState("same");

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
//     0
//   );

//   const discountAmount = subtotal * (discountPercent / 100);
//   const total = subtotal - discountAmount;

//   const applyDiscount = () => {
//     const code = discountCode.trim().toUpperCase();

//     if (code === "FLAT15") {
//       setDiscountPercent(15);
//       alert("Discount code applied: FLAT15");
//     } else if (code === "SAVE10") {
//       setDiscountPercent(10);
//       alert("Discount code applied: SAVE10");
//     } else if (!code) {
//       setDiscountPercent(0);
//       alert("Enter a discount code");
//     } else {
//       setDiscountPercent(0);
//       alert("Invalid discount code");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (cartItems.length === 0) {
//       alert("No product selected.");
//       return;
//     }

//     if (!email || !address || !city || !pinCode || !phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     alert("Order placed successfully");
//     localStorage.removeItem("cartItems");
//     navigate("/");
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#f7f7f7",
//           fontFamily: "Arial, Helvetica, sans-serif",
//           padding: 20,
//         }}
//       >
//         <div
//           style={{
//             background: "#fff",
//             padding: 30,
//             borderRadius: 8,
//             boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//             maxWidth: 420,
//             width: "100%",
//           }}
//         >
//           <h2 style={{ marginTop: 0 }}>No product selected</h2>
//           <p style={{ color: "#555" }}>
//             Go back to the product page and click Buy Now.
//           </p>
//           <Link to="/" style={{ color: "#6f3f8f", textDecoration: "none" }}>
//             ← Back to shop
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const page = {
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     fontFamily: "Arial, Helvetica, sans-serif",
//   };

//   const topBar = {
//     height: "72px",
//     background: "#fff",
//     borderBottom: "1px solid #ddd",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 28px",
//     boxSizing: "border-box",
//   };

//   const shell = {
//     display: "grid",
//     gridTemplateColumns: "1.1fr 0.9fr",
//     minHeight: "calc(100vh - 72px)",
//   };

//   const leftWrap = {
//     background: "#fff",
//     borderRight: "1px solid #ddd",
//     height: "calc(100vh - 72px)",
//     overflowY: "auto",
//   };

//   const leftInner = {
//     maxWidth: 560,
//     margin: "0 auto",
//     padding: "32px 28px 40px",
//     boxSizing: "border-box",
//   };

//   const rightWrap = {
//     background: "#f3f3f3",
//     height: "calc(100vh - 72px)",
//     overflowY: "auto",
//   };

//   const rightInner = {
//     maxWidth: 500,
//     margin: "0 auto",
//     padding: "40px 28px",
//     boxSizing: "border-box",
//   };

//   const heading = {
//     fontSize: "18px",
//     fontWeight: 700,
//     color: "#111",
//     marginBottom: 12,
//   };

//   const signInLink = {
//     color: "#6f3f8f",
//     fontSize: "14px",
//     textDecoration: "underline",
//   };

//   const input = {
//     width: "100%",
//     height: "54px",
//     border: "1px solid #d7d7d7",
//     borderRadius: 8,
//     padding: "0 14px",
//     fontSize: "16px",
//     boxSizing: "border-box",
//     outline: "none",
//     background: "#fff",
//   };

//   const emailInput = {
//     ...input,
//     border: "2px solid #7c4d99",
//   };

//   const select = {
//     ...input,
//     appearance: "none",
//     WebkitAppearance: "none",
//     MozAppearance: "none",
//     backgroundImage:
//       "linear-gradient(45deg, transparent 50%, #666 50%), linear-gradient(135deg, #666 50%, transparent 50%)",
//     backgroundPosition:
//       "calc(100% - 20px) calc(50% - 3px), calc(100% - 14px) calc(50% - 3px)",
//     backgroundSize: "6px 6px, 6px 6px",
//     backgroundRepeat: "no-repeat",
//   };

//   const row2 = {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: 14,
//   };

//   const row3 = {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr 1fr",
//     gap: 14,
//   };

//   const section = {
//     marginTop: 28,
//   };

//   const checkboxRow = {
//     display: "flex",
//     alignItems: "center",
//     gap: 10,
//     marginTop: 14,
//     fontSize: 14,
//     color: "#333",
//   };

//   const mutedBox = {
//     width: "100%",
//     height: "54px",
//     background: "#f3f3f3",
//     border: "1px solid #e0e0e0",
//     borderRadius: 8,
//     display: "flex",
//     alignItems: "center",
//     padding: "0 14px",
//     boxSizing: "border-box",
//     color: "#888",
//     fontSize: 14,
//   };

//   const paymentBox = {
//     border: "1px solid #d8d8d8",
//     borderRadius: 8,
//     overflow: "hidden",
//     background: "#fff",
//   };

//   const paymentHead = {
//     padding: "14px 16px",
//     border: "2px solid #7c4d99",
//     borderRadius: 8,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontSize: 14,
//     fontWeight: 600,
//     color: "#222",
//     background: "#fff",
//   };

//   const paymentBody = {
//     marginTop: -1,
//     border: "1px solid #d8d8d8",
//     borderBottomLeftRadius: 8,
//     borderBottomRightRadius: 8,
//     padding: "16px 18px",
//     textAlign: "center",
//     color: "#555",
//     fontSize: 13,
//     lineHeight: 1.6,
//     background: "#fff",
//   };

//   const billingWrap = {
//     border: "1px solid #d8d8d8",
//     borderRadius: 8,
//     overflow: "hidden",
//     background: "#fff",
//   };

//   const billingItem = (active) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: 10,
//     padding: "14px 16px",
//     fontSize: 14,
//     border: active ? "2px solid #7c4d99" : "none",
//     boxSizing: "border-box",
//   });

//   const payBtn = {
//     width: "100%",
//     height: "52px",
//     border: "none",
//     borderRadius: 8,
//     background: "#7c4d99",
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: 600,
//     cursor: "pointer",
//     marginTop: 22,
//   };

//   const summaryRow = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//     fontSize: 16,
//     color: "#222",
//   };

//   const summaryMuted = {
//     color: "#777",
//     fontSize: 14,
//   };

//   const discountRow = {
//     display: "grid",
//     gridTemplateColumns: "1fr auto",
//     gap: 12,
//     marginTop: 22,
//     marginBottom: 24,
//   };

//   const discountInput = {
//     ...input,
//     height: "52px",
//   };

//   const applyBtn = {
//     height: "52px",
//     padding: "0 22px",
//     border: "1px solid #d7d7d7",
//     borderRadius: 8,
//     background: "#efefef",
//     color: "#666",
//     fontSize: 16,
//     cursor: "pointer",
//   };

//   return (
//     <div style={page}>
//       <div style={topBar}>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <img src={logo} alt="Amethyst Store Logo" style={{ height: 42 }} />
//         </Link>

//         <div style={{ fontSize: 28, color: "#7c4d99" }}>👜</div>
//       </div>

//       <div style={shell}>
//         <div style={leftWrap}>
//           <form style={leftInner} onSubmit={handleSubmit}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <div style={heading}>Contact</div>
//               <Link to="/login" style={signInLink}>
//                 Sign in
//               </Link>
//             </div>

//             <input
//               style={emailInput}
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label style={checkboxRow}>
//               <input
//                 type="checkbox"
//                 checked={offers}
//                 onChange={() => setOffers(!offers)}
//               />
//               Email me with news and offers
//             </label>

//             <div style={section}>
//               <div style={heading}>Delivery</div>

//               <select
//                 style={select}
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//               >
//                 <option>India</option>
//                 <option>United States</option>
//                 <option>United Kingdom</option>
//                 <option>Canada</option>
//               </select>

//               <div style={{ height: 14 }} />

//               <div style={row2}>
//                 <input
//                   style={input}
//                   type="text"
//                   placeholder="First name (optional)"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                   style={input}
//                   type="text"
//                   placeholder="Last name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>

//               <div style={{ height: 14 }} />

//               <input
//                 style={input}
//                 type="text"
//                 placeholder="Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />

//               <div style={{ height: 14 }} />

//               <input
//                 style={input}
//                 type="text"
//                 placeholder="Apartment, suite, etc. (optional)"
//                 value={apartment}
//                 onChange={(e) => setApartment(e.target.value)}
//               />

//               <div style={{ height: 14 }} />

//               <div style={row3}>
//                 <input
//                   style={input}
//                   type="text"
//                   placeholder="City"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                 />

//                 <select
//                   style={select}
//                   value={stateName}
//                   onChange={(e) => setStateName(e.target.value)}
//                 >
//                   <option>Tamil Nadu</option>
//                   <option>Karnataka</option>
//                   <option>Kerala</option>
//                   <option>Andhra Pradesh</option>
//                 </select>

//                 <input
//                   style={input}
//                   type="text"
//                   placeholder="PIN code"
//                   value={pinCode}
//                   onChange={(e) => setPinCode(e.target.value)}
//                 />
//               </div>

//               <div style={{ height: 14 }} />

//               <input
//                 style={input}
//                 type="text"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />

//               <label style={checkboxRow}>
//                 <input
//                   type="checkbox"
//                   checked={saveInfo}
//                   onChange={() => setSaveInfo(!saveInfo)}
//                 />
//                 Save this information for next time
//               </label>
//             </div>

//             <div style={section}>
//               <div style={heading}>Shipping method</div>
//               <div style={mutedBox}>
//                 Enter your shipping address to view available shipping methods.
//               </div>
//             </div>

//             <div style={section}>
//               <div style={heading}>Payment</div>
//               <div style={{ fontSize: 13, color: "#777", marginBottom: 12 }}>
//                 All transactions are secure and encrypted.
//               </div>

//               <div style={paymentBox}>
//                 <div style={paymentHead}>
//                   <span>Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</span>
//                   <span style={{ fontSize: 11, color: "#666" }}>
//                     UPI &nbsp; VISA &nbsp; MC
//                   </span>
//                 </div>

//                 <div style={paymentBody}>
//                   You’ll be redirected to Razorpay Secure (UPI, Cards, Int'l
//                   Cards, Wallets) to complete your purchase.
//                 </div>
//               </div>
//             </div>

//             <div style={section}>
//               <div style={heading}>Billing address</div>

//               <div style={billingWrap}>
//                 <label style={billingItem(billingAddress === "same")}>
//                   <input
//                     type="radio"
//                     name="billing"
//                     checked={billingAddress === "same"}
//                     onChange={() => setBillingAddress("same")}
//                   />
//                   Same as shipping address
//                 </label>

//                 <div style={{ borderTop: "1px solid #d8d8d8" }} />

//                 <label style={billingItem(billingAddress === "different")}>
//                   <input
//                     type="radio"
//                     name="billing"
//                     checked={billingAddress === "different"}
//                     onChange={() => setBillingAddress("different")}
//                   />
//                   Use a different billing address
//                 </label>
//               </div>
//             </div>

//             <button type="submit" style={payBtn}>
//               Pay now
//             </button>
//           </form>
//         </div>

//         <div style={rightWrap}>
//           <div style={rightInner}>
//             {cartItems.map((item) => {
//               const itemImage =
//                 item.image || (item.images && item.images[0]) || "";

//               return (
//                 <div
//                   key={item.id}
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "72px 1fr auto",
//                     gap: 14,
//                     alignItems: "center",
//                     marginBottom: 26,
//                   }}
//                 >
//                   <div style={{ position: "relative" }}>
//                     <img
//                       src={itemImage}
//                       alt={item.title || item.name}
//                       style={{
//                         width: 72,
//                         height: 72,
//                         objectFit: "cover",
//                         borderRadius: 12,
//                         border: "1px solid #ddd",
//                         background: "#fff",
//                       }}
//                     />

//                     <div
//                       style={{
//                         position: "absolute",
//                         top: -8,
//                         right: -8,
//                         width: 24,
//                         height: 24,
//                         borderRadius: "50%",
//                         background: "#111",
//                         color: "#fff",
//                         fontSize: 12,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontWeight: 700,
//                       }}
//                     >
//                       {item.quantity}
//                     </div>
//                   </div>

//                   <div style={{ fontSize: 16, color: "#222" }}>
//                     {item.title || item.name}
//                   </div>

//                   <div style={{ fontSize: 16, color: "#222" }}>
//                     {formatINR(Number(item.price || 0) * Number(item.quantity || 1))}
//                   </div>
//                 </div>
//               );
//             })}

//             <div style={discountRow}>
//               <input
//                 style={discountInput}
//                 type="text"
//                 placeholder="Discount code"
//                 value={discountCode}
//                 onChange={(e) => setDiscountCode(e.target.value)}
//               />
//               <button type="button" style={applyBtn} onClick={applyDiscount}>
//                 Apply
//               </button>
//             </div>

//             <div style={summaryRow}>
//               <span>Subtotal</span>
//               <span>{formatINR(subtotal)}</span>
//             </div>

//             <div style={summaryRow}>
//               <span>Order discount</span>
//               <span>
//                 {discountPercent > 0
//                   ? `- ${formatINR(discountAmount)}`
//                   : formatINR(0)}
//               </span>
//             </div>

//             <div style={summaryRow}>
//               <span>
//                 Shipping <span style={summaryMuted}>ⓘ</span>
//               </span>
//               <span style={summaryMuted}>Enter shipping address</span>
//             </div>

//             <div
//               style={{
//                 borderTop: "1px solid #ddd",
//                 paddingTop: 20,
//                 marginTop: 8,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "end",
//               }}
//             >
//               <div style={{ fontSize: 18, fontWeight: 700 }}>Total</div>

//               <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
//                 <span style={{ fontSize: 14, color: "#777" }}>INR</span>
//                 <span style={{ fontSize: 36, fontWeight: 700 }}>
//                   {formatINR(total).replace("₹", "")}
//                 </span>
//               </div>
//             </div>

//             {discountPercent > 0 && (
//               <div style={{ marginTop: 16, fontSize: 14, fontWeight: 700 }}>
//                 TOTAL SAVINGS {formatINR(discountAmount)}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function formatINR(n) {
  return `₹${Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const stateData = location.state || {};

  const singleProduct = stateData.product || null;
  const singleQty = stateData.qty || 1;

  const cartItems = useMemo(() => {
    if (stateData.cartItems && stateData.cartItems.length > 0) {
      return stateData.cartItems;
    }

    if (singleProduct) {
      return [
        {
          id: singleProduct.id,
          title: singleProduct.title || singleProduct.name,
          name: singleProduct.name || singleProduct.title,
          price: Number(singleProduct.price || 0),
          quantity: singleQty,
          image:
            singleProduct.image ||
            (singleProduct.images && singleProduct.images[0]) ||
            "",
          images: singleProduct.images || [],
        },
      ];
    }

    return [];
  }, [stateData.cartItems, singleProduct, singleQty]);

  const [email, setEmail] = useState("");
  const [offers, setOffers] = useState(true);

  const [country, setCountry] = useState("India");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("Tamil Nadu");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const [billingAddress, setBillingAddress] = useState("same");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal - discountAmount;

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (code === "FLAT15") {
      setDiscountPercent(15);
      alert("Discount code applied: FLAT15");
    } else if (code === "SAVE10") {
      setDiscountPercent(10);
      alert("Discount code applied: SAVE10");
    } else if (!code) {
      setDiscountPercent(0);
      alert("Enter a discount code");
    } else {
      setDiscountPercent(0);
      alert("Invalid discount code");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("No product selected.");
      return;
    }

    if (!email || !address || !city || !pinCode || !phone) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Order placed successfully");
    localStorage.removeItem("cartItems");
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f7f7f7",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: 20,
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 30,
            borderRadius: 8,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            maxWidth: 420,
            width: "100%",
          }}
        >
          <h2 style={{ marginTop: 0 }}>No product selected</h2>
          <p style={{ color: "#555" }}>
            Go back to the product page and click Buy Now.
          </p>
          <Link to="/" style={{ color: "#6f3f8f", textDecoration: "none" }}>
            ← Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const page = {
    minHeight: "100vh",
    background: "#f5f5f5",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const shell = {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    minHeight: "100vh",
  };

  const leftWrap = {
    background: "#fff",
    borderRight: "1px solid #ddd",
    minHeight: "100vh",
    overflowY: "auto",
  };

  const leftInner = {
    maxWidth: 560,
    margin: "0 auto",
    padding: "32px 28px 40px",
    boxSizing: "border-box",
  };

  const rightWrap = {
    background: "#f3f3f3",
    minHeight: "100vh",
    overflowY: "auto",
  };

  const rightInner = {
    maxWidth: 500,
    margin: "0 auto",
    padding: "40px 28px",
    boxSizing: "border-box",
  };

  const heading = {
    fontSize: "18px",
    fontWeight: 700,
    color: "#111",
    marginBottom: 12,
  };

  const signInLink = {
    color: "#6f3f8f",
    fontSize: "14px",
    textDecoration: "underline",
  };

  const input = {
    width: "100%",
    height: "54px",
    border: "1px solid #d7d7d7",
    borderRadius: 8,
    padding: "0 14px",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
    background: "#fff",
  };

  const emailInput = {
    ...input,
    border: "2px solid #7c4d99",
  };

  const select = {
    ...input,
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage:
      "linear-gradient(45deg, transparent 50%, #666 50%), linear-gradient(135deg, #666 50%, transparent 50%)",
    backgroundPosition:
      "calc(100% - 20px) calc(50% - 3px), calc(100% - 14px) calc(50% - 3px)",
    backgroundSize: "6px 6px, 6px 6px",
    backgroundRepeat: "no-repeat",
  };

  const row2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  };

  const row3 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 14,
  };

  const section = {
    marginTop: 28,
  };

  const checkboxRow = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 14,
    fontSize: 14,
    color: "#333",
  };

  const mutedBox = {
    width: "100%",
    height: "54px",
    background: "#f3f3f3",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    padding: "0 14px",
    boxSizing: "border-box",
    color: "#888",
    fontSize: 14,
  };

  const paymentBox = {
    border: "1px solid #d8d8d8",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff",
  };

  const paymentHead = {
    padding: "14px 16px",
    border: "2px solid #7c4d99",
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 600,
    color: "#222",
    background: "#fff",
  };

  const paymentBody = {
    marginTop: -1,
    border: "1px solid #d8d8d8",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: "16px 18px",
    textAlign: "center",
    color: "#555",
    fontSize: 13,
    lineHeight: 1.6,
    background: "#fff",
  };

  const billingWrap = {
    border: "1px solid #d8d8d8",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff",
  };

  const billingItem = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 16px",
    fontSize: 14,
    border: active ? "2px solid #7c4d99" : "none",
    boxSizing: "border-box",
  });

  const payBtn = {
    width: "100%",
    height: "52px",
    border: "none",
    borderRadius: 8,
    background: "#7c4d99",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 22,
  };

  const summaryRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    fontSize: "16px",
    color: "#222",
  };

  const summaryMuted = {
    color: "#777",
    fontSize: 14,
  };

  const discountRow = {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 12,
    marginTop: 22,
    marginBottom: 24,
  };

  const discountInput = {
    ...input,
    height: "52px",
  };

  const applyBtn = {
    height: "52px",
    padding: "0 22px",
    border: "1px solid #d7d7d7",
    borderRadius: 8,
    background: "#efefef",
    color: "#666",
    fontSize: 16,
    cursor: "pointer",
  };

  return (
    <div style={page}>
      <div style={shell}>
        <div style={leftWrap}>
          <form style={leftInner} onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={heading}>Contact</div>
              <Link to="/login" style={signInLink}>
                Sign in
              </Link>
            </div>

            <input
              style={emailInput}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label style={checkboxRow}>
              <input
                type="checkbox"
                checked={offers}
                onChange={() => setOffers(!offers)}
              />
              Email me with news and offers
            </label>

            <div style={section}>
              <div style={heading}>Delivery</div>

              <select
                style={select}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
              </select>

              <div style={{ height: 14 }} />

              <div style={row2}>
                <input
                  style={input}
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  style={input}
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div style={{ height: 14 }} />

              <input
                style={input}
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <div style={{ height: 14 }} />

              <input
                style={input}
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
              />

              <div style={{ height: 14 }} />

              <div style={row3}>
                <input
                  style={input}
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <select
                  style={select}
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                >
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Andhra Pradesh</option>
                </select>

                <input
                  style={input}
                  type="text"
                  placeholder="PIN code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>

              <div style={{ height: 14 }} />

              <input
                style={input}
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label style={checkboxRow}>
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={() => setSaveInfo(!saveInfo)}
                />
                Save this information for next time
              </label>
            </div>

            <div style={section}>
              <div style={heading}>Shipping method</div>
              <div style={mutedBox}>
                Enter your shipping address to view available shipping methods.
              </div>
            </div>

            <div style={section}>
              <div style={heading}>Payment</div>
              <div style={{ fontSize: 13, color: "#777", marginBottom: 12 }}>
                All transactions are secure and encrypted.
              </div>

              <div style={paymentBox}>
                <div style={paymentHead}>
                  <span>Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</span>
                  <span style={{ fontSize: 11, color: "#666" }}>
                    UPI &nbsp; VISA &nbsp; MC
                  </span>
                </div>

                <div style={paymentBody}>
                  You’ll be redirected to Razorpay Secure (UPI, Cards, Int'l
                  Cards, Wallets) to complete your purchase.
                </div>
              </div>
            </div>

            <div style={section}>
              <div style={heading}>Billing address</div>

              <div style={billingWrap}>
                <label style={billingItem(billingAddress === "same")}>
                  <input
                    type="radio"
                    name="billing"
                    checked={billingAddress === "same"}
                    onChange={() => setBillingAddress("same")}
                  />
                  Same as shipping address
                </label>

                <div style={{ borderTop: "1px solid #d8d8d8" }} />

                <label style={billingItem(billingAddress === "different")}>
                  <input
                    type="radio"
                    name="billing"
                    checked={billingAddress === "different"}
                    onChange={() => setBillingAddress("different")}
                  />
                  Use a different billing address
                </label>
              </div>
            </div>

            <button type="submit" style={payBtn}>
              Pay now
            </button>
          </form>
        </div>

        <div style={rightWrap}>
          <div style={rightInner}>
            {cartItems.map((item) => {
              const itemImage =
                item.image || (item.images && item.images[0]) || "";

              return (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "72px 1fr auto",
                    gap: 14,
                    alignItems: "center",
                    marginBottom: 26,
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={itemImage}
                      alt={item.title || item.name}
                      style={{
                        width: 72,
                        height: 72,
                        objectFit: "cover",
                        borderRadius: 12,
                        border: "1px solid #ddd",
                        background: "#fff",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "#111",
                        color: "#fff",
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      {item.quantity}
                    </div>
                  </div>

                  <div style={{ fontSize: 16, color: "#222" }}>
                    {item.title || item.name}
                  </div>

                  <div style={{ fontSize: 16, color: "#222" }}>
                    {formatINR(
                      Number(item.price || 0) * Number(item.quantity || 1)
                    )}
                  </div>
                </div>
              );
            })}

            <div style={discountRow}>
              <input
                style={discountInput}
                type="text"
                placeholder="Discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button type="button" style={applyBtn} onClick={applyDiscount}>
                Apply
              </button>
            </div>

            <div style={summaryRow}>
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>

            <div style={summaryRow}>
              <span>Order discount</span>
              <span>
                {discountPercent > 0
                  ? `- ${formatINR(discountAmount)}`
                  : formatINR(0)}
              </span>
            </div>

            <div style={summaryRow}>
              <span>
                Shipping <span style={summaryMuted}>ⓘ</span>
              </span>
              <span style={summaryMuted}>Enter shipping address</span>
            </div>

            <div
              style={{
                borderTop: "1px solid #ddd",
                paddingTop: 20,
                marginTop: 8,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700 }}>Total</div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 14, color: "#777" }}>INR</span>
                <span style={{ fontSize: 36, fontWeight: 700 }}>
                  {formatINR(total).replace("₹", "")}
                </span>
              </div>
            </div>

            {discountPercent > 0 && (
              <div style={{ marginTop: 16, fontSize: 14, fontWeight: 700 }}>
                TOTAL SAVINGS {formatINR(discountAmount)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}