
// // import React, { useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import logo from "../assets/femina.png";

// // export default function OtpPage() {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const email = location.state?.email || "your@email.com";
// //   const [otp, setOtp] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!otp.trim()) {
// //       alert("Please enter the code");
// //       return;
// //     }

// //     navigate("/");
// //     window.scrollTo(0, 0);
// //   };

// //   const page = {
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     minHeight: "60vh",
// //     paddingTop: "40px",
// //     paddingBottom: "40px",
// //     background: "#fafafa",
// //     fontFamily: "Arial, Helvetica, sans-serif",
// //   };

// //   const box = {
// //     width: "360px",
// //     background: "#fff",
// //     padding: "28px 30px",
// //     borderRadius: "8px",
// //     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
// //   };

// //   const button = {
// //     width: "100%",
// //     height: "44px",
// //     border: "none",
// //     background: "#6f3f8f",
// //     color: "#fff",
// //     fontWeight: "600",
// //     borderRadius: "4px",
// //     cursor: "pointer",
// //     marginTop: "6px",
// //   };

// //   const title = {
// //     textAlign: "center",
// //     marginBottom: "6px",
// //   };

// //   const subText = {
// //     textAlign: "center",
// //     fontSize: "14px",
// //     color: "#666",
// //     marginBottom: "18px",
// //   };

// //   const backLink = {
// //     background: "transparent",
// //     border: "none",
// //     padding: 0,
// //     color: "#6f3f8f",
// //     fontSize: "14px",
// //     cursor: "pointer",
// //     marginTop: "10px",
// //   };

// //   return (
// //     <div style={page}>
// //       <form style={box} onSubmit={handleSubmit}>
// //         <div style={{ textAlign: "center", marginBottom: "16px" }}>
// //           <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
// //         </div>

// //         <h2 style={title}>Enter Code</h2>

// //         <div style={subText}>Sent to {email}</div>

// //         <input
// //           style={input}
// //           type="text"
// //           inputMode="numeric"
// //           maxLength={6}
// //           placeholder="Enter OTP"
// //           value={otp}
// //           onChange={(e) =>
// //             setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
// //           }
// //         />

// //         <button type="submit" style={button}>
// //           Submit
// //         </button>

// //         <button
// //           type="button"
// //           style={backLink}
// //           onClick={() => navigate("/login")}
// //         >
// //           Sign in with a different email
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/femina.png";

// export default function OtpPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const email = location.state?.email || "your@email.com";
//   const [otp, setOtp] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!otp.trim()) {
//       alert("Please enter the code");
//       return;
//     }

//     // redirect to login page
//     navigate("/login");
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
//     marginBottom: "6px",
//   };

//   const subText = {
//     textAlign: "center",
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "18px",
//   };

//   const backLink = {
//     background: "transparent",
//     border: "none",
//     padding: 0,
//     color: "#6f3f8f",
//     fontSize: "14px",
//     cursor: "pointer",
//     marginTop: "10px",
//   };

//   return (
//     <div style={page}>
//       <form style={box} onSubmit={handleSubmit}>
//         <div style={{ textAlign: "center", marginBottom: "16px" }}>
//           <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
//         </div>

//         <h2 style={title}>Enter Code</h2>

//         <div style={subText}>Sent to {email}</div>

//         <input
//           style={input}
//           type="text"
//           inputMode="numeric"
//           maxLength={6}
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) =>
//             setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
//           }
//         />

//         <button type="submit" style={button}>
//           Submit
//         </button>

//         <button
//           type="button"
//           style={backLink}
//           onClick={() => navigate("/login")}
//         >
//           Sign in with a different email
//         </button>
//       </form>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/femina.png";

// export default function OtpPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const email = location.state?.email || "your@email.com";
//   const from = location.state?.from || "";

//   const [otp, setOtp] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!otp.trim()) {
//       alert("Please enter the code");
//       return;
//     }

//     if (from === "register") {
//       const pendingUser = JSON.parse(localStorage.getItem("pendingUser") || "null");

//       if (pendingUser) {
//         const users = JSON.parse(localStorage.getItem("users") || "[]");
//         users.push(pendingUser);
//         localStorage.setItem("users", JSON.stringify(users));
//         localStorage.removeItem("pendingUser");
//       }

//       navigate("/login");
//       window.scrollTo(0, 0);
//       return;
//     }

//     if (from === "forgot-password") {
//       navigate("/reset-password", {
//         state: { email },
//       });
//       window.scrollTo(0, 0);
//       return;
//     }

//     navigate("/login");
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
//     marginBottom: "6px",
//   };

//   const subText = {
//     textAlign: "center",
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "18px",
//   };

//   const backLink = {
//     background: "transparent",
//     border: "none",
//     padding: 0,
//     color: "#6f3f8f",
//     fontSize: "14px",
//     cursor: "pointer",
//     marginTop: "10px",
//   };

//   return (
//     <div style={page}>
//       <form style={box} onSubmit={handleSubmit}>
//         <div style={{ textAlign: "center", marginBottom: "16px" }}>
//           <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
//         </div>

//         <h2 style={title}>Enter Code</h2>

//         <div style={subText}>Sent to {email}</div>

//         <input
//           style={input}
//           type="text"
//           inputMode="numeric"
//           maxLength={6}
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) =>
//             setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
//           }
//         />

//         <button type="submit" style={button}>
//           Submit
//         </button>

//         <button
//           type="button"
//           style={backLink}
//           onClick={() => navigate("/login")}
//         >
//           Back to Login
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/femina.png";

// export default function OtpPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const email = location.state?.email || "";
//   const from = location.state?.from || "";

//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!otp.trim()) {
//       alert("Please enter the code");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://initially-loamless-elroy.ngrok-free.dev/api/verify-otp",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email,
//             otp,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message || "OTP verification failed");
//         setLoading(false);
//         return;
//       }

//       alert(data.message || "OTP verified successfully");

//       if (from === "register") {
//         localStorage.removeItem("pendingUser");
//         navigate("/login");
//         window.scrollTo(0, 0);
//         return;
//       }

//       if (from === "forgot-password") {
//         navigate("/reset-password", {
//           state: { email },
//         });
//         window.scrollTo(0, 0);
//         return;
//       }

//       navigate("/login");
//       window.scrollTo(0, 0);
//     } catch (error) {
//       console.error("OTP verify error:", error);
//       alert("Something went wrong while verifying OTP");
//     } finally {
//       setLoading(false);
//     }
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
//     background: loading ? "#9b7bb1" : "#6f3f8f",
//     color: "#fff",
//     fontWeight: "600",
//     borderRadius: "4px",
//     cursor: loading ? "not-allowed" : "pointer",
//     marginTop: "6px",
//   };

//   const title = {
//     textAlign: "center",
//     marginBottom: "6px",
//   };

//   const subText = {
//     textAlign: "center",
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "18px",
//   };

//   const backLink = {
//     background: "transparent",
//     border: "none",
//     padding: 0,
//     color: "#6f3f8f",
//     fontSize: "14px",
//     cursor: "pointer",
//     marginTop: "10px",
//   };

//   return (
//     <div style={page}>
//       <form style={box} onSubmit={handleSubmit}>
//         <div style={{ textAlign: "center", marginBottom: "16px" }}>
//           <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
//         </div>

//         <h2 style={title}>Enter Code</h2>

//         <div style={subText}>
//           {email ? `Sent to ${email}` : "Enter the OTP sent to your email"}
//         </div>

//         <input
//           style={input}
//           type="text"
//           inputMode="numeric"
//           maxLength={6}
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) =>
//             setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
//           }
//         />

//         <button type="submit" style={button} disabled={loading}>
//           {loading ? "Verifying..." : "Submit"}
//         </button>

//         <button
//           type="button"
//           style={backLink}
//           onClick={() => navigate("/login")}
//         >
//           Back to Login
//         </button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/femina.png";

export default function OtpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";
  const from = location.state?.from || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      alert("Please enter the code");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://initially-loamless-elroy.ngrok-free.dev/api/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "OTP verification failed");
        setLoading(false);
        return;
      }

      alert(data.message || "OTP verified successfully");

      if (from === "register") {
        localStorage.removeItem("pendingUser");
        navigate("/login");
        window.scrollTo(0, 0);
        return;
      }

      if (from === "forgot-password") {
        navigate("/reset-password", {
          state: { email },
        });
        window.scrollTo(0, 0);
        return;
      }

      navigate("/login");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("OTP verify error:", error);
      alert("Something went wrong while verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      alert("Email not found");
      return;
    }

    setResending(true);

    try {
      const response = await fetch(
        "https://initially-loamless-elroy.ngrok-free.dev/api/resend-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to resend OTP");
        return;
      }

      alert(data.message || "OTP resent successfully");
    } catch (error) {
      console.error("Resend OTP error:", error);
      alert("Something went wrong while resending OTP");
    } finally {
      setResending(false);
    }
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
    background: loading ? "#9b7bb1" : "#6f3f8f",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: loading ? "not-allowed" : "pointer",
    marginTop: "6px",
  };

  const resendButton = {
    width: "100%",
    height: "42px",
    border: "1px solid #6f3f8f",
    background: "#fff",
    color: "#6f3f8f",
    fontWeight: "600",
    borderRadius: "4px",
    cursor: resending ? "not-allowed" : "pointer",
    marginTop: "10px",
  };

  const title = {
    textAlign: "center",
    marginBottom: "6px",
  };

  const subText = {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginBottom: "18px",
  };

  const backLink = {
    background: "transparent",
    border: "none",
    padding: 0,
    color: "#6f3f8f",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={page}>
      <form style={box} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
        </div>

        <h2 style={title}>Enter Code</h2>

        <div style={subText}>
          {email ? `Sent to ${email}` : "Enter the OTP sent to your email"}
        </div>

        <input
          style={input}
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
          }
        />

        <button type="submit" style={button} disabled={loading}>
          {loading ? "Verifying..." : "Submit"}
        </button>

        <button
          type="button"
          style={resendButton}
          onClick={handleResendOtp}
          disabled={resending}
        >
          {resending ? "Resending..." : "Resend OTP"}
        </button>

        <button
          type="button"
          style={backLink}
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}