import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const container = {
        backgroundColor: "#5e4b6e",
        color: "white",
        padding: "50px 80px",
        fontFamily: "Arial",
    };

    const grid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "40px",
    };

    const heading = {
        letterSpacing: "3px",
        fontSize: "14px",
        marginBottom: "20px",
        fontWeight: "600",
    };

    const link = {
        marginBottom: "10px",
        fontSize: "14px",
        color: "#ddd",
        cursor: "pointer",
    };

    const inputContainer = {
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        marginTop: "10px",
        paddingBottom: "5px",
    };

    const input = {
        border: "none",
        outline: "none",
        background: "transparent",
        color: "white",
        flex: 1,
    };

    const social = {
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        fontSize: "20px",
        cursor: "pointer",
    };

    const bottom = {
        textAlign: "center",
        marginTop: "40px",
        fontSize: "13px",
        color: "#ddd",
    };

    return (
        <footer style={container}>
            <div style={grid}>
                {/* Shop By Category */}
                <div>
                    <h4 style={heading}>SHOP BY CATEGORY</h4>
                    <div style={link}>Instagram Live</div>
                    <div style={link}>March Edit</div>
                    <div style={link}>Necklaces</div>
                    <div style={link}>Earrings</div>
                    <div style={link}>Bangles</div>
                    <div style={link}>Pendants</div>
                    <div style={link}>More Categories</div>
                    <div style={link}>Collections</div>
                </div>

                {/* Customer Services */}
                <div>
                    <h4 style={heading}>CUSTOMER SERVICES</h4>
                    <div style={link}>Create Account</div>
                    <div style={link}>Login</div>
                    <div style={link}>Jewellery Care</div>
                    <div style={link}>Orders, Delivery and Shipping</div>
                    <div style={link}>Return and Refund</div>
                    <div style={link}>Customisation order</div>
                    <div style={link}>Terms & conditions</div>
                    <div style={link}>FAQ</div>
                    <div style={link}>Privacy Policy</div>
                    <div style={link}>Contact us</div>
                </div>

                {/* Our Company */}
                <div>
                    <h4 style={heading}>OUR COMPANY</h4>
                    <div style={link}>World of The Amethyst Store</div>
                    <div style={link}>Customer Reviews {"<3"}</div>
                    <div style={link}>Our Stores</div>
                </div>

                {/* Signup */}
                <div>
                    <h4 style={heading}>SIGN UP AND SAVE</h4>
                    <p style={{ fontSize: "14px", color: "#ddd" }}>
                        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                    </p>

                    <div style={inputContainer}>
                        <input
                            style={input}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <MdEmail />
                    </div>

                    <div style={social}>
                        <FaInstagram />
                        <FaFacebookF />
                        <FaPinterestP />
                    </div>
                </div>
            </div>

            <div style={bottom}>
                © 2026 The Amethyst Store & Sri Vasavi Thangamaaligai, Dindigul.
            </div>
        </footer>
    );
};

export default Footer;