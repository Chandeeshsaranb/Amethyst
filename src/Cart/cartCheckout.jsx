// import React, { useState } from "react";

// function formatINR(n) {
//   return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
// }

// export default function CartCheckout({ cartItems }) {
//   const [note, setNote] = useState("");
//   const [agreed, setAgreed] = useState(false);

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const discount = 37410;
//   const finalTotal = subtotal - discount;

//   const wrapper = {
//     width: "100%",
//     maxWidth: "360px",
//     background: "#f7f7f7",
//     padding: "22px 18px",
//     boxSizing: "border-box",
//   };

//   const label = {
//     fontSize: "11px",
//     letterSpacing: "4px",
//     color: "#4d4d4d",
//     marginBottom: "10px",
//   };

//   const textarea = {
//     width: "100%",
//     minHeight: "80px",
//     resize: "vertical",
//     border: "1px solid #c8a9d8",
//     padding: "10px",
//     fontSize: "14px",
//     outline: "none",
//     boxSizing: "border-box",
//     background: "#fff",
//     marginBottom: "12px",
//   };

//   const row = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontSize: "14px",
//     marginBottom: "10px",
//     color: "#1f1a17",
//   };

//   const discountText = {
//     color: "#ff4d4f",
//   };

//   const checkboxWrap = {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "10px",
//     marginTop: "10px",
//     marginBottom: "18px",
//   };

//   const checkboxText = {
//     fontSize: "11px",
//     lineHeight: "1.5",
//     color: "#444",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//   };

//   const button = {
//     width: "100%",
//     background: "#7d4796",
//     color: "white",
//     border: "none",
//     padding: "14px 16px",
//     fontSize: "13px",
//     letterSpacing: "2px",
//     cursor: "pointer",
//     fontWeight: "600",
//     marginBottom: "12px",
//   };

//   const footerText = {
//     textAlign: "center",
//     fontSize: "12px",
//     color: "#666",
//   };

//   return (
//     <div style={wrapper}>
//       <div style={label}>ORDER NOTE</div>

//       <textarea
//         style={textarea}
//         value={note}
//         onChange={(e) => setNote(e.target.value)}
//       />

//       <div style={row}>
//         <span>Discounts</span>
//         <span style={discountText}>Flat 20% (-₹ 37,410)</span>
//       </div>

//       <div style={row}>
//         <span>Subtotal</span>
//         <span>{formatINR(finalTotal)}</span>
//       </div>

//       <div style={checkboxWrap}>
//         <input
//           type="checkbox"
//           checked={agreed}
//           onChange={(e) => setAgreed(e.target.checked)}
//           style={{ marginTop: "3px" }}
//         />
//         <div style={checkboxText}>
//           I agree with the shipping policy and terms & conditions. International
//           customs & duties: all international duties and taxes are prepaid at
//           checkout. No additional charges / surprise at delivery – enjoy a
//           seamless, hassle-free shopping experience while we handle customs
//           clearance.
//         </div>
//       </div>

//       <button style={button}>CHECKOUT</button>

//       <div style={footerText}>
//         Shipping, taxes, and discount codes calculated at checkout.
//       </div>
//     </div>
//   );
// }



import React from "react";

function formatINR(n) {
  return `₹ ${Number(n || 0).toLocaleString("en-IN")}`;
}

export default function CartCheckout({ cartItems, onCheckout }) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        position: "sticky",
        top: "20px",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "20px" }}>Order Summary</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        <span>Subtotal</span>
        <span>{formatINR(subtotal)}</span>
      </div>

      <button
        onClick={onCheckout}
        style={{
          width: "100%",
          background: "#8a4aa2",
          color: "#fff",
          border: "none",
          padding: "14px",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: "700",
          cursor: "pointer",
          marginTop: "16px",
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
}