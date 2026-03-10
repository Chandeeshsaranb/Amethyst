
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/famina-gold.png";

export default function OtpPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "your@email.com";
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      alert("Please enter the code");
      return;
    }

    navigate("/");
    window.scrollTo(0, 0);
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

        <div style={subText}>Sent to {email}</div>

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

        <button type="submit" style={button}>
          Submit
        </button>

        <button
          type="button"
          style={backLink}
          onClick={() => navigate("/login")}
        >
          Sign in with a different email
        </button>
      </form>
    </div>
  );
}