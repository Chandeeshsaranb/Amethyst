
// // // import React, { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import logo from "../assets/femina.png";

// // // export default function Register() {
// // //     const navigate = useNavigate();

// // //     const [form, setForm] = useState({
// // //         name: "",
// // //         email: "",
// // //         phone: "",
// // //         password: "",
// // //         confirm: "",
// // //     });

// // //     const handleChange = (e) => {
// // //         setForm({ ...form, [e.target.name]: e.target.value });
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();

// // //         if (form.password !== form.confirm) {
// // //             alert("Passwords do not match");
// // //             return;
// // //         }

// // //         const users = JSON.parse(localStorage.getItem("users") || "[]");

// // //         const exists = users.find((u) => u.email === form.email);

// // //         if (exists) {
// // //             alert("User already exists");
// // //             return;
// // //         }

// // //         users.push({
// // //             name: form.name,
// // //             email: form.email,
// // //             phone: form.phone,
// // //             password: form.password,
// // //         });

// // //         localStorage.setItem("users", JSON.stringify(users));

// // //         alert("Registration Successful");

// // //         navigate("/login");
// // //     };

// // //     const page = {
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         padding: "40px 0",
// // //         background: "#fafafa",
// // //         fontFamily: "Arial, Helvetica, sans-serif",
// // //     };

// // //     const box = {
// // //         width: "380px",
// // //         background: "#fff",
// // //         padding: "40px",
// // //         borderRadius: "8px",
// // //         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// // //     };

// // //     const input = {
// // //         width: "100%",
// // //         height: "42px",
// // //         marginBottom: "12px",
// // //         border: "1px solid #ddd",
// // //         padding: "0 12px",
// // //         borderRadius: "4px",
// // //         boxSizing: "border-box",
// // //         outline: "none",
// // //     };

// // //     const button = {
// // //         width: "100%",
// // //         height: "44px",
// // //         border: "none",
// // //         background: "#6f3f8f",
// // //         color: "#fff",
// // //         fontWeight: "600",
// // //         borderRadius: "4px",
// // //         cursor: "pointer",
// // //         marginTop: "10px",
// // //     };

// // //     return (
// // //         <div style={page}>
// // //             <form style={box} onSubmit={handleSubmit}>
// // //                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
// // //                     <img src={logo} alt="Amethyst Store Logo" style={{ height: "60px" }} />
// // //                 </div>

// // //                 <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
// // //                     Create Account
// // //                 </h2>

// // //                 <input
// // //                     style={input}
// // //                     name="name"
// // //                     placeholder="Full Name"
// // //                     value={form.name}
// // //                     onChange={handleChange}
// // //                     required
// // //                 />

// // //                 <input
// // //                     style={input}
// // //                     type="email"
// // //                     name="email"
// // //                     placeholder="Email"
// // //                     value={form.email}
// // //                     onChange={handleChange}
// // //                     required
// // //                 />

// // //                 <input
// // //                     style={input}
// // //                     type="tel"
// // //                     name="phone"
// // //                     placeholder="Phone Number"
// // //                     value={form.phone}
// // //                     onChange={handleChange}
// // //                     required
// // //                 />

// // //                 <input
// // //                     style={input}
// // //                     type="password"
// // //                     name="password"
// // //                     placeholder="Password"
// // //                     value={form.password}
// // //                     onChange={handleChange}
// // //                     required
// // //                 />

// // //                 <input
// // //                     style={input}
// // //                     type="password"
// // //                     name="confirm"
// // //                     placeholder="Confirm Password"
// // //                     value={form.confirm}
// // //                     onChange={handleChange}
// // //                     required
// // //                 />

// // //                 <button type="submit" style={button}>
// // //                     Register
// // //                 </button>

// // //                 <p style={{ textAlign: "center", marginTop: "15px" }}>
// // //                     Already have an account?
// // //                     <Link to="/login"> Login</Link>
// // //                 </p>
// // //             </form>
// // //         </div>
// // //     );
// // // }



// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import logo from "../assets/femina.png";

// // export default function Register() {
// //     const navigate = useNavigate();

// //     const [form, setForm] = useState({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         password: "",
// //         confirm: "",
// //     });

// //     const handleChange = (e) => {
// //         setForm({ ...form, [e.target.name]: e.target.value });
// //     };

// //     const generateOTP = () => {
// //         return Math.floor(100000 + Math.random() * 900000).toString();
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         if (form.password !== form.confirm) {
// //             alert("Passwords do not match");
// //             return;
// //         }

// //         const users = JSON.parse(localStorage.getItem("users") || "[]");

// //         const exists = users.find((u) => u.email === form.email);

// //         if (exists) {
// //             alert("User already exists");
// //             return;
// //         }

// //         const otp = generateOTP();

// //         localStorage.setItem("pendingUser", JSON.stringify(form));
// //         localStorage.setItem("otp", otp);

// //         alert("Your OTP is: " + otp); // demo purpose

// //         navigate("/otp");
// //     };

// //     const page = {
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         padding: "40px 0",
// //         background: "#fafafa",
// //         fontFamily: "Arial, Helvetica, sans-serif",
// //     };

// //     const box = {
// //         width: "380px",
// //         background: "#fff",
// //         padding: "40px",
// //         borderRadius: "8px",
// //         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// //     };

// //     const input = {
// //         width: "100%",
// //         height: "42px",
// //         marginBottom: "12px",
// //         border: "1px solid #ddd",
// //         padding: "0 12px",
// //         borderRadius: "4px",
// //         boxSizing: "border-box",
// //         outline: "none",
// //     };

// //     const button = {
// //         width: "100%",
// //         height: "44px",
// //         border: "none",
// //         background: "#6f3f8f",
// //         color: "#fff",
// //         fontWeight: "600",
// //         borderRadius: "4px",
// //         cursor: "pointer",
// //         marginTop: "10px",
// //     };

// //     return (
// //         <div style={page}>
// //             <form style={box} onSubmit={handleSubmit}>
// //                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
// //                     <img src={logo} alt="Logo" style={{ height: "60px" }} />
// //                 </div>

// //                 <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
// //                     Create Account
// //                 </h2>

// //                 <input style={input} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />

// //                 <input style={input} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />

// //                 <input style={input} type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />

// //                 <input style={input} type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />

// //                 <input style={input} type="password" name="confirm" placeholder="Confirm Password" value={form.confirm} onChange={handleChange} required />

// //                 <button type="submit" style={button}>Register</button>

// //                 <p style={{ textAlign: "center", marginTop: "15px" }}>
// //                     Already have an account? <Link to="/login">Login</Link>
// //                 </p>
// //             </form>
// //         </div>
// //     );
// // }



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/femina.png";

// export default function Register() {
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirm: "",
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (form.password !== form.confirm) {
//             alert("Passwords do not match");
//             return;
//         }

//         const users = JSON.parse(localStorage.getItem("users") || "[]");

//         const exists = users.find((u) => u.email === form.email);

//         if (exists) {
//             alert("User already exists");
//             return;
//         }

//         users.push({
//             name: form.name,
//             email: form.email,
//             phone: form.phone,
//             password: form.password,
//         });

//         localStorage.setItem("users", JSON.stringify(users));

//         navigate("/otp", {
//             state: { email: form.email },
//         });
//     };

//     const page = {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "40px 0",
//         background: "#fafafa",
//         fontFamily: "Arial, Helvetica, sans-serif",
//     };

//     const box = {
//         width: "380px",
//         background: "#fff",
//         padding: "40px",
//         borderRadius: "8px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//     };

//     const input = {
//         width: "100%",
//         height: "42px",
//         marginBottom: "12px",
//         border: "1px solid #ddd",
//         padding: "0 12px",
//         borderRadius: "4px",
//         boxSizing: "border-box",
//         outline: "none",
//     };

//     const button = {
//         width: "100%",
//         height: "44px",
//         border: "none",
//         background: "#6f3f8f",
//         color: "#fff",
//         fontWeight: "600",
//         borderRadius: "4px",
//         cursor: "pointer",
//         marginTop: "10px",
//     };

//     return (
//         <div style={page}>
//             <form style={box} onSubmit={handleSubmit}>
//                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                     <img src={logo} alt="Logo" style={{ height: "60px" }} />
//                 </div>

//                 <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//                     Create Account
//                 </h2>

//                 <input
//                     style={input}
//                     name="name"
//                     placeholder="Full Name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     style={input}
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     style={input}
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={form.phone}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     style={input}
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={form.password}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     style={input}
//                     type="password"
//                     name="confirm"
//                     placeholder="Confirm Password"
//                     value={form.confirm}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit" style={button}>
//                     Register
//                 </button>

//                 <p style={{ textAlign: "center", marginTop: "15px" }}>
//                     Already have an account? <Link to="/login">Login</Link>
//                 </p>
//             </form>
//         </div>
//     );
// }




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/femina.png";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u) => u.email === form.email);

    if (exists) {
      alert("User already exists");
      return;
    }

    localStorage.setItem(
      "pendingUser",
      JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      })
    );

    navigate("/otp", {
      state: {
        email: form.email,
        from: "register",
      },
    });
  };

  const page = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0",
    background: "#fafafa",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const box = {
    width: "380px",
    background: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  };

  const input = {
    width: "100%",
    height: "42px",
    marginBottom: "12px",
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
    marginTop: "10px",
  };

  return (
    <div style={page}>
      <form style={box} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="Femina Logo" style={{ height: "60px" }} />
        </div>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Account
        </h2>

        <input
          style={input}
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          style={input}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          style={input}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          style={input}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          style={input}
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          required
        />

        <button type="submit" style={button}>
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}