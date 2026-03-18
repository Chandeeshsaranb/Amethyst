import React, { useState, useEffect } from "react";
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

  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 480;
  const isTablet = screenWidth > 480 && screenWidth <= 768;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // allow only numbers for phone
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setForm({ ...form, phone: numericValue });
      return;
    }

    // password validation while typing
    if (name === "password") {
      if (value.length < 6) {
        setPasswordError("Password must be at least 6 characters");
      } else {
        setPasswordError("");
      }
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://initially-loamless-elroy.ngrok-free.dev/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            password: form.password,
          }),
        }
      );

      const data = await response.json();
      console.log("responce", data);

      if (!response.ok) {
        alert(data.message || "Registration failed");
        setLoading(false);
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

      alert(data.message || "Registration successful. OTP sent.");

      navigate("/otp", {
        state: {
          email: form.email,
          phone: form.phone,
          from: "register",
        },
      });
    } catch (error) {
      console.error("Register API error:", error);
      alert("Something went wrong while registering");
    } finally {
      setLoading(false);
    }
  };

  const page = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    paddingTop: isMobile ? "20px" : "40px",
    paddingBottom: isMobile ? "20px" : "40px",
    paddingLeft: isMobile ? "14px" : isTablet ? "20px" : "24px",
    paddingRight: isMobile ? "14px" : isTablet ? "20px" : "24px",
    background: "#fafafa",
    fontFamily: "Arial, Helvetica, sans-serif",
    boxSizing: "border-box",
  };

  const box = {
    width: "100%",
    maxWidth: isMobile ? "100%" : isTablet ? "420px" : "360px",
    background: "#fff",
    padding: isMobile ? "22px 18px" : isTablet ? "26px 24px" : "28px 30px",
    borderRadius: isMobile ? "6px" : "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  };

  const input = {
    width: "100%",
    height: isMobile ? "40px" : "42px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    padding: "0 12px",
    borderRadius: "4px",
    boxSizing: "border-box",
    outline: "none",
    fontSize: isMobile ? "14px" : "15px",
  };

  const errorText = {
    color: "red",
    fontSize: "13px",
    marginTop: "-10px",
    marginBottom: "14px",
  };

  const button = {
    width: "100%",
    height: isMobile ? "42px" : "44px",
    border: "none",
    background: loading ? "#9b7bb1" : "#6f3f8f",
    color: "#fff",
    fontWeight: "600",
    fontSize: isMobile ? "14px" : "15px",
    borderRadius: "4px",
    cursor: loading ? "not-allowed" : "pointer",
    marginTop: "6px",
  };

  const title = {
    textAlign: "center",
    marginBottom: "18px",
    fontSize: isMobile ? "24px" : isTablet ? "27px" : "30px",
  };

  const loginText = {
    textAlign: "center",
    marginTop: "16px",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: "1.5",
  };

  const logoStyle = {
    height: isMobile ? "45px" : isTablet ? "50px" : "55px",
    maxWidth: "100%",
    objectFit: "contain",
  };

  return (
    <div style={page}>
      <form style={box} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img src={logo} alt="Femina Logo" style={logoStyle} />
        </div>

        <h2 style={title}>Create Account</h2>

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
          maxLength={10}
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

        {passwordError && <div style={errorText}>{passwordError}</div>}

        <input
          style={input}
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          required
        />

        <button type="submit" style={button} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <p style={loginText}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#6f3f8f", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}