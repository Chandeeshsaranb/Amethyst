import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/famina.jpeg";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid Email or Password");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Login Successful");
        navigate("/");
    };

    const page = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
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
                    <img src={logo} alt="Amethyst Store Logo" style={{ height: "60px" }} />
                </div>

                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

                <input
                    style={input}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    style={input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" style={button}>
                    Login
                </button>

                <p style={{ textAlign: "center", marginTop: "15px" }}>
                    New customer?
                    <Link to="/register"> Create account</Link>
                </p>
            </form>
        </div>
    );
}