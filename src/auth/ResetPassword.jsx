import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/femina.png";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Invalid reset request");
      navigate("/forgot-password");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const payload = {
      email,
      new_password: form.password,
      confirm_password: form.confirmPassword,
    };

    console.log("Reset password payload:", payload);

    try {
      const response = await fetch(
        "https://initially-loamless-elroy.ngrok-free.dev/api/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Response status:", response.status);

      const rawText = await response.text();
      console.log("Raw response text:", rawText);

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (err) {
        console.log("Response is not valid JSON");
      }

      console.log("Parsed response data:", data);

      if (!response.ok) {
        const errorMessage =
          data?.message ||
          data?.errors?.new_password?.[0] ||
          data?.errors?.confirm_password?.[0] ||
          rawText ||
          "Failed to reset password";

        alert(errorMessage);
        return;
      }

      alert(data.message || "Password reset successful");
      navigate("/login");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Reset password error:", error);
      alert("Something went wrong while resetting password");
    } finally {
      setLoading(false);
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

  const title = {
    textAlign: "center",
    marginBottom: "10px",
  };

  const subText = {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginBottom: "18px",
  };

  return (
    <div style={page}>
      <form style={box} onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <img src={logo} alt="Femina Logo" style={{ height: "55px" }} />
        </div>

        <h2 style={title}>Reset Password</h2>

        <div style={subText}>{email}</div>

        <input
          style={input}
          type="password"
          name="password"
          placeholder="New Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          style={input}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" style={button} disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}