import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/femina.png";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => { 
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 480;
  const isTablet = screenWidth > 480 && screenWidth <= 768;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://initially-loamless-elroy.ngrok-free.dev/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid email or password");
        return;
      }

      if (data.user) {
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      window.dispatchEvent(new Event("authChanged"));

      alert(data.message || "Login successful");

      if (data.user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Login API error:", error);
      alert("Something went wrong while logging in");
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

  const forgotText = {
    textAlign: "right",
    marginTop: "-8px",
    marginBottom: "14px",
    fontSize: isMobile ? "13px" : "14px",
  };

  const registerText = {
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

        <h2 style={title}>Login</h2>

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
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <div style={forgotText}>
          <Link
            to="/forgot-password"
            style={{ color: "#6f3f8f", textDecoration: "none" }}
          >
            Forgot Password?
          </Link>
        </div>

        <button type="submit" style={button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={registerText}>
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#6f3f8f", textDecoration: "none" }}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}