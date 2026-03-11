
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/famina-gold.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    navigate("/otp", { state: { email } });
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
    marginBottom: "18px",
  };

  return (
    <div style={page}>
      <form style={box} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img
            src={logo}
            alt="Femian Logo"
            style={{ height: "55px" }}
          />
        </div>

        <h2 style={title}>Login</h2>

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
      </form>
    </div>
  );
}