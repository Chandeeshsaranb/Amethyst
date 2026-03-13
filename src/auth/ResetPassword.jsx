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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
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

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const updatedUsers = users.map((user) =>
            user.email === email
                ? { ...user, password: form.password }
                : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        alert("Password reset successful");
        navigate("/login");
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

                <button type="submit" style={button}>
                    Update Password
                </button>
            </form>
        </div>
    );
}