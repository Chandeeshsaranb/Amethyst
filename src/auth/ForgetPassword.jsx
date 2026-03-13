// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import logo from "../assets/femina.png";

// export default function ForgetPassword() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email.trim()) {
//       alert("Please enter your email");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     const userExists = users.find((user) => user.email === email);

//     if (!userExists) {
//       alert("No account found with this email");
//       return;
//     }

//     navigate("/otp", { state: { email, from: "forgot-password" } });
//     window.scrollTo(0, 0);
//   };

//   const page = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "60vh",
//     paddingTop: "40px",
//     paddingBottom: "40px",
//     background: "#fafafa",
//     fontFamily: "Arial, Helvetica, sans-serif",
//   };

//   const box = {
//     width: "360px",
//     background: "#fff",
//     padding: "28px 30px",
//     borderRadius: "8px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
//   };

//   const button = {
//     width: "100%",
//     height: "44px",
//     border: "none",
//     background: "#6f3f8f",
//     color: "#fff",
//     fontWeight: "600",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "6px",
//   };

//   const title = {
//     textAlign: "center",
//     marginBottom: "10px",
//   };

//   const subText = {
//     textAlign: "center",
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "18px",
//     lineHeight: "20px",
//   };

//   const backText = {
//     textAlign: "center",
//     marginTop: "16px",
//     fontSize: "14px",
//   };

//   return (
//     <div style={page}>
//       <form style={box} onSubmit={handleSubmit}>
//         <div style={{ textAlign: "center", marginBottom: "16px" }}>
//           <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
//         </div>

//         <h2 style={title}>Forgot Password</h2>

//         <div style={subText}>
//           Enter your email address to continue
//         </div>

//         <input
//           style={input}
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button type="submit" style={button}>
//           Continue
//         </button>

//         <div style={backText}>
//           <Link to="/login" style={{ color: "#6f3f8f", textDecoration: "none" }}>
//             Back to Login
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/femina.png";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((user) => user.email === email);

    if (!userExists) {
      alert("This email is not registered. Please register first.");
      navigate("/register");
      return;
    }

    navigate("/otp", {
      state: {
        email,
        from: "forgot-password",
      },
    });
  };

  const page = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    paddingTop: "40px",
    paddingBottom: "40px",
    background: "#fafafa",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const box = {
    width: "360px",
    background: "#fff",
    padding: "28px 30px",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
  };

  const button = {
    width: "100%",
    height: "44px",
    border: "none",
    background: "#6f3f8f",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "6px",
  };

  const title = {
    textAlign: "center",
    marginBottom: "10px",
  };

  const subText = {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginBottom: "18px",
    lineHeight: "20px",
  };

  const backText = {
    textAlign: "center",
    marginTop: "16px",
    fontSize: "14px",
  };

  return (
    <div style={page}>
      <form style={box} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
        </div>

        <h2 style={title}>Forgot Password</h2>

        <div style={subText}>Enter your registered email to continue</div>

        <input
          style={input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" style={button}>
          Continue
        </button>

        <div style={backText}>
          <Link to="/login" style={{ color: "#6f3f8f", textDecoration: "none" }}>
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
}