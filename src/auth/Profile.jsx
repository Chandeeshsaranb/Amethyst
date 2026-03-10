


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/famina-gold.png";
import { FiUser, FiChevronUp, FiChevronDown, FiEdit2, FiInfo } from "react-icons/fi";

export default function ProfilePage() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("orders");

    const userEmail = "chandeeshsaraninpand@gmail.com";
    const userName = "";

    const handleSignOut = () => {
        navigate("/login");
    };

    const handleMenuItemClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    const page = {
        minHeight: "100vh",
        background: "#f7f7f7",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#111",
    };

    const shell = {
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 28px",
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    };

    const header = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: "18px",
        marginBottom: "54px",
    };

    const leftHeader = {
        display: "flex",
        alignItems: "flex-start",
        gap: "36px",
    };

    const logoWrap = {
        display: "flex",
        alignItems: "center",
    };

    const logoStyle = {
        height: "64px",
        objectFit: "contain",
        display: "block",
    };

    const tabs = {
        display: "flex",
        alignItems: "center",
        gap: "28px",
        paddingTop: "14px",
    };

    const tab = (active) => ({
        fontSize: "16px",
        color: "#111",
        textDecoration: active ? "underline" : "none",
        textUnderlineOffset: "5px",
        cursor: "pointer",
    });

    const accountArea = {
        position: "relative",
    };

    const accountTrigger = {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
    };

    const accountMenu = {
        position: "absolute",
        top: "48px",
        right: 0,
        width: "348px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        border: "1px solid #e7e1ea",
        padding: "14px 14px 10px",
        boxSizing: "border-box",
        zIndex: 20,
    };

    const menuTop = {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        paddingBottom: "14px",
        borderBottom: "1px solid #e8e1ea",
        marginBottom: "10px",
    };

    const menuEmail = {
        fontSize: "15px",
        color: "#667085",
        wordBreak: "break-word",
    };

    const menuButton = (active) => ({
        width: "100%",
        height: "54px",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        background: active ? "#fff" : "transparent",
        border: active ? "2px solid #7a4a91" : "none",
        borderRadius: "10px",
        color: "#111",
        fontSize: "16px",
        cursor: "pointer",
        marginBottom: "8px",
        boxSizing: "border-box",
        textAlign: "left",
    });

    const content = {
        flex: 1,
    };

    const title = {
        fontSize: "20px",
        fontWeight: "700",
        marginBottom: "28px",
        textTransform: "capitalize",
    };

    const card = {
        width: "100%",
        minHeight: "210px",
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #ece7ed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "30px",
        boxSizing: "border-box",
    };

    const emptyTitle = {
        fontSize: "18px",
        fontWeight: "700",
        marginBottom: "20px",
    };

    const emptySub = {
        fontSize: "16px",
        color: "#111",
    };

    const profileWrapper = {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
    };

    const profileCard = {
        width: "100%",
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #ece7ed",
        padding: "26px",
        boxSizing: "border-box",
    };

    const fieldLabel = {
        fontSize: "15px",
        color: "#6b7280",
        marginBottom: "8px",
    };

    const fieldValue = {
        fontSize: "16px",
        color: "#111",
    };

    const nameRow = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "24px",
    };

    const editIcon = {
        color: "#7a4a91",
        cursor: "pointer",
    };

    const addressHeader = {
        display: "flex",
        alignItems: "center",
        gap: "28px",
        marginBottom: "26px",
    };

    const addressTitle = {
        fontSize: "16px",
        fontWeight: "700",
        color: "#111",
    };

    const addAddress = {
        fontSize: "16px",
        fontWeight: "600",
        color: "#7a4a91",
        cursor: "pointer",
    };

    const noAddressBox = {
        background: "#f7f7f7",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "22px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        color: "#111",
        fontSize: "16px",
    };

    const footer = {
        marginTop: "160px",
        padding: "24px 0 18px",
        borderTop: "1px solid #ddd6df",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        color: "#7a4a91",
        fontSize: "14px",
    };

    const footerLink = {
        color: "#7a4a91",
        textDecoration: "underline",
        textUnderlineOffset: "2px",
    };

    return (
        <div style={page}>
            <div style={shell}>
                <div style={header}>
                    <div style={leftHeader}>
                        <Link to="/" style={logoWrap}>
                            <img src={logo} alt="Femina Store Logo" style={logoStyle} />
                        </Link>

                        <div style={tabs}>
                            <span
                                style={tab(activeSection === "orders")}
                                onClick={() => setActiveSection("orders")}
                            >
                                Orders
                            </span>

                            <span
                                style={tab(activeSection === "profile")}
                                onClick={() => setActiveSection("profile")}
                            >
                                Profile
                            </span>
                        </div>
                    </div>

                    <div style={accountArea}>
                        <button
                            type="button"
                            style={accountTrigger}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <FiUser size={34} color="#777" />
                            {menuOpen ? (
                                <FiChevronUp size={18} color="#111" />
                            ) : (
                                <FiChevronDown size={18} color="#111" />
                            )}
                        </button>

                        {menuOpen && (
                            <div style={accountMenu}>
                                <div style={menuTop}>
                                    <FiUser size={34} color="#777" />
                                    <div style={menuEmail}>{userEmail}</div>
                                </div>

                                <button
                                    type="button"
                                    style={menuButton(activeSection === "profile")}
                                    onClick={() => handleMenuItemClick("profile")}
                                >
                                    Profile
                                </button>

                                <button
                                    type="button"
                                    style={menuButton(activeSection === "orders")}
                                    onClick={() => handleMenuItemClick("orders")}
                                >
                                    Orders
                                </button>

                                <button
                                    type="button"
                                    style={menuButton(false)}
                                    onClick={handleSignOut}
                                >
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div style={content}>
                    <div style={title}>
                        {activeSection === "orders" ? "Orders" : "Profile"}
                    </div>

                    {activeSection === "orders" ? (
                        <div style={card}>
                            <div>
                                <div style={emptyTitle}>No orders yet</div>
                                <div style={emptySub}>
                                    When you place an order, it will appear here.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={profileWrapper}>
                            <div style={profileCard}>
                                <div style={fieldLabel}>Name</div>

                                <div style={nameRow}>
                                    <div style={fieldValue}>{userName}</div>
                                    <FiEdit2 size={16} style={editIcon} />
                                </div>

                                <div style={fieldLabel}>Email</div>
                                <div style={fieldValue}>{userEmail}</div>
                            </div>

                            <div style={profileCard}>
                                <div style={addressHeader}>
                                    <div style={addressTitle}>Addresses</div>
                                    <div style={addAddress}>+ Add</div>
                                </div>

                                <div style={noAddressBox}>
                                    <FiInfo size={20} color="#7a7a7a" />
                                    <span>No addresses added</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div style={footer}>
                    <Link to="/refund-policy" style={footerLink}>
                        Refund policy
                    </Link>

                    <Link to="/shipping-policy" style={footerLink}>
                        Shipping
                    </Link>

                    <Link to="/privacy-policy" style={footerLink}>
                        Privacy policy
                    </Link>

                    <Link to="/terms-of-service" style={footerLink}>
                        Terms of service
                    </Link>

                    <Link to="/contact" style={footerLink}>
                        Contact information
                    </Link>
                </div>
            </div>
        </div>
    );
}