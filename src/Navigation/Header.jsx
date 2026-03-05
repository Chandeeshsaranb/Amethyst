import logo from "../assets/logo.avif";

import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

function Header() {

    const header = {
        width: "100%",
        borderBottom: "1px solid #eee",
        background: "white"
    };

    const headerContainer = {
        maxWidth: "1400px",
        margin: "auto",
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    };

    const logoStyle = {
        height: "48px",
        objectFit: "contain"
    };

    const navMenu = {
        display: "flex",
        gap: "26px",
        fontSize: "14px"
    };

    const navLink = {
        textDecoration: "none",
        color: "#222",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontWeight: "500"
    };

    const headerIcons = {
        display: "flex",
        alignItems: "center",
        gap: "18px"
    };

    const iconStyle = {
        fontSize: "16px",
        cursor: "pointer"
    };

    const currency = {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "#333",
        color: "white",
        padding: "6px 10px",
        borderRadius: "6px",
        fontSize: "13px"
    };

    const flag = {
        width: "16px"
    };

    return (
        <header style={header}>
            <div style={headerContainer}>

                {/* LOGO */}
                <div>
                    <img src={logo} alt="Amethyst Store Logo" style={logoStyle} />
                </div>

                {/* NAVIGATION */}
                <nav style={navMenu}>
                    <a href="#" style={navLink}>Instagram Live</a>
                    <a href="#" style={navLink}>March Edit</a>

                    <a href="#" style={navLink}>
                        Necklaces <IoChevronDown />
                    </a>

                    <a href="#" style={navLink}>
                        Earrings <IoChevronDown />
                    </a>

                    <a href="#" style={navLink}>
                        Bangles <IoChevronDown />
                    </a>

                    <a href="#" style={navLink}>
                        Pendants <IoChevronDown />
                    </a>

                    <a href="#" style={navLink}>
                        More Categories <IoChevronDown />
                    </a>

                    <a href="#" style={navLink}>
                        Collections <IoChevronDown />
                    </a>
                </nav>

                {/* RIGHT ICONS */}
                <div style={headerIcons}>
                    <FaUser style={iconStyle} />
                    <FaSearch style={iconStyle} />
                    <FaShoppingBag style={iconStyle} />

                    <div style={currency}>
                        <img
                            src="https://flagcdn.com/w20/in.png"
                            alt="India Flag"
                            style={flag}
                        />
                        <span>INR</span>
                        <IoChevronDown />
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;