
import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaPinterestP, FaChevronDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize to switch mobile/desktop mode
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    backgroundColor: "#5e4b6e",
    color: "white",
    padding: "50px 20px",
    fontFamily: "Arial",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
  };

  const heading = {
    letterSpacing: "3px",
    fontSize: "14px",
    marginBottom: "20px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
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

  const sections = [
    {
      title: "SHOP BY CATEGORY",
      items: ["Instagram Live", "March Edit", "Necklaces", "Earrings", "Bangles", "Pendants", "More Categories", "Collections"],
    },
    {
      title: "CUSTOMER SERVICES",
      items: ["Create Account", "Login", "Jewellery Care", "Orders, Delivery and Shipping", "Return and Refund", "Customisation order", "Terms & conditions", "FAQ", "Privacy Policy", "Contact us"],
    },
    {
      title: "OUR COMPANY",
      items: ["World of The Amethyst Store", "Customer Reviews <3", "Our Stores"],
    },
    {
      title: "SIGN UP AND SAVE",
      items: [],
      isSignup: true,
    },
  ];

  const toggleSection = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer style={container}>
      <div style={grid}>
        {sections.map((section, index) => (
          <div key={index}>
            <div style={heading} onClick={() => toggleSection(index)}>
              {section.title}
              {/* Show arrow only on mobile */}
              {isMobile && (
                <FaChevronDown
                  style={{
                    transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              )}
            </div>

            {/* Render content always on desktop, collapsible on mobile */}
            {(activeIndex === index || !isMobile) && (
              <>
                {section.items.map((item, idx) => (
                  <div key={idx} style={link}>{item}</div>
                ))}

                {section.isSignup && (
                  <>
                    <p style={{ fontSize: "14px", color: "#ddd" }}>
                      Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                    </p>
                    <div style={inputContainer}>
                      <input style={input} type="email" placeholder="Enter your email" />
                      <MdEmail />
                    </div>
                    <div style={social}>
                      <FaInstagram />
                      <FaFacebookF />
                      <FaPinterestP />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div style={bottom}>
        © 2026 The Femina & Sri Vasavi Thangamaaligai, Dindigul.
      </div>
    </footer>
  );
};

export default Footer;