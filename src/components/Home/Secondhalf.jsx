

// import { useState, useEffect } from "react";

// import navaratna1 from "../../assets/navaratna/navaratna.png";
// import navaratna2 from "../../assets/navaratna/navaratna.png";
// import navaratna3 from "../../assets/navaratna/navaratna.png";
// import navaratna4 from "../../assets/navaratna/navaratna.png";
// import navaratna5 from "../../assets/navaratna/navaratna.png";
// import navaratna6 from "../../assets/navaratna/navaratna.png";
// import navaratna7 from "../../assets/navaratna/navaratna.png";
// import navaratna8 from "../../assets/navaratna/navaratna.png";

// import finest1 from "../../assets/finest/finest.png";
// import finest2 from "../../assets/finest/finest.png";
// import finest3 from "../../assets/finest/finest.png";
// import finest4 from "../../assets/finest/finest.png";

// import southindian1 from "../../assets/southindian/southindian.png";
// import southindian2 from "../../assets/southindian/southindian.png";
// import southindian3 from "../../assets/southindian/southindian.png";
// import southindian4 from "../../assets/southindian/southindian.png";
// import southindian5 from "../../assets/southindian/southindian.png";
// import southindian6 from "../../assets/southindian/southindian.png";
// import southindian7 from "../../assets/southindian/southindian.png";
// import southindian8 from "../../assets/southindian/southindian.png";
// import southindian9 from "../../assets/southindian/southindian.png";
// import southindian10 from "../../assets/southindian/southindian.png";
// import southindian11 from "../../assets/southindian/southindian.png";
// import southindian12 from "../../assets/southindian/southindian.png";

// import storebg from '../../assets/flagship/storebg.png';

// function SecondHalf() {

//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//     useEffect(() => {
//         const handleResize = () => setIsMobile(window.innerWidth <= 768);
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // --- Navaratna Section ---
//     const navaratnaSection = { width: "100%", padding: isMobile ? "30px 10px" : "60px 40px", boxSizing: "border-box" };
//     const navaratnaTitle = { textAlign: "center", fontSize: "24px", letterSpacing: "2px", marginBottom: isMobile ? "20px" : "40px" };
//     const navaratnaGrid = { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? "10px" : "40px" };
//     const navaratnaCard = { textAlign: "center" };
//     const navaratnaImage = { width: "100%", height: "auto" };
//     const navaratnaName = { fontSize: "14px", marginTop: "10px" };
//     const navaratnaPrice = { fontSize: "14px" };
//     const navaratnaButtonContainer = { display: "flex", justifyContent: "center", marginTop: isMobile ? "20px" : "40px" };
//     const navaratnaButton = { backgroundColor: "#6d3a87", color: "white", padding: "12px 30px", border: "none", letterSpacing: "2px", cursor: "pointer" };

//     // --- Finest Section ---
//     const finestSection = { width: "100%", padding: isMobile ? "30px 10px" : "60px 40px", boxSizing: "border-box" };
//     const finestTitle = { textAlign: "center", fontSize: "24px", letterSpacing: "2px", marginBottom: isMobile ? "20px" : "40px" };
//     const finestGrid = { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? "10px" : "40px" };
//     const finestCard = { textAlign: "center" };
//     const finestImage = { width: "100%", height: "auto" };
//     const finestName = { fontSize: "14px", marginTop: "10px" };
//     const finestButtonContainer = { display: "flex", justifyContent: "center", marginTop: isMobile ? "20px" : "40px" };
//     const finestButton = { backgroundColor: "#6d3a87", color: "white", padding: "12px 30px", border: "none", letterSpacing: "2px", cursor: "pointer" };

//     // --- South Indian Section ---
//     const southIndianSection = { width: "100%", padding: isMobile ? "30px 10px" : "60px 40px", boxSizing: "border-box" };
//     const southIndianTitle = { textAlign: "center", fontSize: "24px", letterSpacing: "2px", marginBottom: isMobile ? "20px" : "40px" };
//     const southIndianGrid = { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? "10px" : "40px" };
//     const southIndianCard = { textAlign: "center" };
//     const southIndianImage = { width: "100%", height: "auto" };
//     const southIndianName = { fontSize: "14px", marginTop: "10px" };
//     const southIndianPrice = { fontSize: "14px" };
//     const southIndianButtonContainer = { display: "flex", justifyContent: "center", marginTop: isMobile ? "20px" : "40px" };
//     const southIndianButton = { backgroundColor: "#6d3a87", color: "white", padding: "12px 30px", border: "none", letterSpacing: "2px", cursor: "pointer" };

//     // --- Flagship Section ---
//     const flagshipSection = {
//         width: "100%",
//         height: isMobile ? "auto" : "420px",
//         backgroundImage: `url(${storebg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: isMobile ? "center" : "flex-start",
//         alignItems: "center",
//         padding: isMobile ? "20px 10px" : "0px 80px",
//         boxSizing: "border-box",
//         flexDirection: isMobile ? "column" : "row"
//     };
//     const flagshipCard = {
//         background: "#fff",
//         padding: isMobile ? "20px" : "40px",
//         width: isMobile ? "90%" : "380px",
//         boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
//         marginBottom: isMobile ? "20px" : "0"
//     };
//     const flagshipTitle = { fontSize: "20px", letterSpacing: "2px", marginBottom: "15px" };
//     const flagshipStoreName = { fontSize: "16px", fontWeight: "600", marginBottom: "10px" };
//     const flagshipAddress = { fontSize: "14px", lineHeight: "1.6", marginBottom: "20px", color: "#444" };
//     const flagshipButton = { backgroundColor: "#6d3a87", color: "#fff", padding: "12px 28px", border: "none", letterSpacing: "2px", cursor: "pointer", display: "inline-block" };

//     return (
//         <>
//             {/* Navaratna */}
//             <div style={navaratnaSection}>
//                 <h2 style={navaratnaTitle}>Navaratna Collection ❤️</h2>
//                 <div style={navaratnaGrid}>
//                     {[navaratna1, navaratna2, navaratna3, navaratna4, navaratna5, navaratna6, navaratna7, navaratna8].map((img, i) => (
//                         <div style={navaratnaCard} key={i}>
//                             <img src={img} alt="" style={navaratnaImage} />
//                             <p style={navaratnaName}>Navaratna Necklace {i + 1}</p>
//                             <p style={navaratnaPrice}>₹ {(i + 1) * 10000}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div style={navaratnaButtonContainer}><div style={navaratnaButton}>VIEW ALL</div></div>
//             </div>

//             <hr />

//             {/* Finest */}
//             <div style={finestSection}>
//                 <h2 style={finestTitle}>Finest Collections ❤️</h2>
//                 <div style={finestGrid}>
//                     {[finest1, finest2, finest3, finest4].map((img, i) => (
//                         <div style={finestCard} key={i}>
//                             <img src={img} alt="" style={finestImage} />
//                             <p style={finestName}>Finest Jewellery {i + 1}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div style={finestButtonContainer}><div style={finestButton}>VIEW ALL</div></div>
//             </div>

//             <hr />

//             {/* South Indian */}
//             <div style={southIndianSection}>
//                 <h2 style={southIndianTitle}>South Indian Collections ❤️</h2>
//                 <div style={southIndianGrid}>
//                     {[southindian1, southindian2, southindian3, southindian4, southindian5, southindian6, southindian7, southindian8, southindian9, southindian10, southindian11, southindian12].map((img, i) => (
//                         <div style={southIndianCard} key={i}>
//                             <img src={img} alt="" style={southIndianImage} />
//                             <p style={southIndianName}>South Indian Jewellery {i + 1}</p>
//                             <p style={southIndianPrice}>₹ {(i + 1) * 15000}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div style={southIndianButtonContainer}><div style={southIndianButton}>VIEW ALL</div></div>
//             </div>

//             {/* Flagship */}
//             <div style={flagshipSection}>
//                 <div style={flagshipCard}>
//                     <h2 style={flagshipTitle}>OUR FLAGSHIP STORE</h2>
//                     <p style={flagshipStoreName}>The Amethyst Store</p>
//                     <p style={flagshipAddress}>
//                         Buva House, Khadher Nawaz Khan Road,<br />
//                         Nungambakkam,<br />
//                         Chennai - 600034
//                     </p>
//                     <div style={flagshipButton}>GET DIRECTIONS</div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SecondHalf;



import { useState, useEffect } from "react";

import navaratna1 from "../../assets/navaratna/navaratna.png";
import navaratna2 from "../../assets/navaratna/navaratna.png";
import navaratna3 from "../../assets/navaratna/navaratna.png";
import navaratna4 from "../../assets/navaratna/navaratna.png";
import navaratna5 from "../../assets/navaratna/navaratna.png";
import navaratna6 from "../../assets/navaratna/navaratna.png";
import navaratna7 from "../../assets/navaratna/navaratna.png";
import navaratna8 from "../../assets/navaratna/navaratna.png";

import finest1 from "../../assets/finest/finest.png";
import finest2 from "../../assets/finest/finest.png";
import finest3 from "../../assets/finest/finest.png";
import finest4 from "../../assets/finest/finest.png";

import southindian1 from "../../assets/southindian/southindian.png";
import southindian2 from "../../assets/southindian/southindian.png";
import southindian3 from "../../assets/southindian/southindian.png";
import southindian4 from "../../assets/southindian/southindian.png";
import southindian5 from "../../assets/southindian/southindian.png";
import southindian6 from "../../assets/southindian/southindian.png";
import southindian7 from "../../assets/southindian/southindian.png";
import southindian8 from "../../assets/southindian/southindian.png";
import southindian9 from "../../assets/southindian/southindian.png";
import southindian10 from "../../assets/southindian/southindian.png";
import southindian11 from "../../assets/southindian/southindian.png";
import southindian12 from "../../assets/southindian/southindian.png";

import storebg from "../../assets/flagship/storebg.png";

import featured1 from "../../assets/featured/featured.png";
import featured2 from "../../assets/featured/featured.png";
import featured3 from "../../assets/featured/featured.png";
import featured4 from "../../assets/featured/featured.png";

function SecondHalf() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeTestimonial, setActiveTestimonial] = useState(1);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const testimonials = [
        {
            name: "Sri .V",
            text: "I always adored magnificent designs by Amethyst store and finally made a purchase online. The customer care was extremely supportive, prompt and patient. I ordered emerald beads necklace and an amethyst beads necklace that look stunningly beautiful and elegant. Looking forward to shop again in future. ❤️"
        },
        {
            name: "Sri Harini Manoj",
            text: "The intricate designs, amazing craftmanship and the most unique jewellery pieces. Every design looks so well and it looks like gold jewellery, that is what i love about your brand! Your feed is so well presented as well. Love to add few jewellery pieces to my collection! Would highly recommend it to my family and friends! Good luck on more designs and on growing this wonderful jewellery!"
        },
        {
            name: "Vaishnavi Rudraraju",
            text: "I love pieces of jewellery which are conversation starters ❤️... Your Jewellery is like perfect spice.. It always compliments what is there 💜 Your Jewellery has the power to be this one little thing that can make you feel unique ✨ Your Jewellery tell a story about the woman who is wearing it! Every unique woman wearing your jewellery will surely shine bright like a diamond!"
        }
    ];

    const featuredProducts = [
        {
            image: featured1,
            name: "Firoza Victorian Necklace Set",
            price: "₹ 149,700"
        },
        {
            image: featured2,
            name: "Brightening Victorian Choker Set",
            price: "₹ 144,700"
        },
        {
            image: featured3,
            name: "Felicitous Victorian Necklace Set",
            price: "₹ 174,100"
        },
        {
            image: featured4,
            name: "Kritin Victorian Short Necklace Set",
            price: "₹ 139,900"
        }
    ];

    const getPrevIndex = () =>
        activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1;

    const getNextIndex = () =>
        activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1;

    const navaratnaSection = {
        width: "100%",
        padding: isMobile ? "30px 10px" : "60px 40px",
        boxSizing: "border-box"
    };

    const navaratnaTitle = {
        textAlign: "center",
        fontSize: "24px",
        letterSpacing: "2px",
        marginBottom: isMobile ? "20px" : "40px"
    };

    const navaratnaGrid = {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? "10px" : "40px"
    };

    const navaratnaCard = {
        textAlign: "center"
    };

    const navaratnaImage = {
        width: "100%",
        height: "auto"
    };

    const navaratnaName = {
        fontSize: "14px",
        marginTop: "10px"
    };

    const navaratnaPrice = {
        fontSize: "14px"
    };

    const navaratnaButtonContainer = {
        display: "flex",
        justifyContent: "center",
        marginTop: isMobile ? "20px" : "40px"
    };

    const navaratnaButton = {
        backgroundColor: "#6d3a87",
        color: "white",
        padding: "12px 30px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer"
    };

    const finestSection = {
        width: "100%",
        padding: isMobile ? "30px 10px" : "60px 40px",
        boxSizing: "border-box"
    };

    const finestTitle = {
        textAlign: "center",
        fontSize: "24px",
        letterSpacing: "2px",
        marginBottom: isMobile ? "20px" : "40px"
    };

    const finestGrid = {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? "10px" : "40px"
    };

    const finestCard = {
        textAlign: "center"
    };

    const finestImage = {
        width: "100%",
        height: "auto"
    };

    const finestName = {
        fontSize: "14px",
        marginTop: "10px"
    };

    const finestButtonContainer = {
        display: "flex",
        justifyContent: "center",
        marginTop: isMobile ? "20px" : "40px"
    };

    const finestButton = {
        backgroundColor: "#6d3a87",
        color: "white",
        padding: "12px 30px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer"
    };

    const southIndianSection = {
        width: "100%",
        padding: isMobile ? "30px 10px" : "60px 40px",
        boxSizing: "border-box"
    };

    const southIndianTitle = {
        textAlign: "center",
        fontSize: "24px",
        letterSpacing: "2px",
        marginBottom: isMobile ? "20px" : "40px"
    };

    const southIndianGrid = {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? "10px" : "40px"
    };

    const southIndianCard = {
        textAlign: "center"
    };

    const southIndianImage = {
        width: "100%",
        height: "auto"
    };

    const southIndianName = {
        fontSize: "14px",
        marginTop: "10px"
    };

    const southIndianPrice = {
        fontSize: "14px"
    };

    const southIndianButtonContainer = {
        display: "flex",
        justifyContent: "center",
        marginTop: isMobile ? "20px" : "40px"
    };

    const southIndianButton = {
        backgroundColor: "#6d3a87",
        color: "white",
        padding: "12px 30px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer"
    };

    const featuredSection = {
        width: "100%",
        padding: isMobile ? "30px 10px" : "70px 40px",
        boxSizing: "border-box"
    };

    const featuredTitle = {
        textAlign: "center",
        fontSize: isMobile ? "22px" : "42px",
        fontFamily: "serif",
        fontWeight: "400",
        letterSpacing: "1px",
        marginBottom: isMobile ? "18px" : "26px",
        textTransform: "uppercase",
        lineHeight: isMobile ? "1.4" : "1.2"
    };

    const featuredButtonWrap = {
        display: "flex",
        justifyContent: "center",
        marginBottom: isMobile ? "22px" : "45px"
    };

    const featuredButton = {
        backgroundColor: "transparent",
        border: "1px solid #c9b2d2",
        color: "#222",
        padding: isMobile ? "10px 20px" : "12px 32px",
        letterSpacing: isMobile ? "3px" : "4px",
        fontSize: isMobile ? "11px" : "14px",
        cursor: "pointer",
        textTransform: "uppercase"
    };

    const featuredGrid = {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? "12px" : "28px"
    };

    const featuredCard = {
        textAlign: "center"
    };

    const featuredImage = {
        width: "100%",
        height: "auto",
        display: "block"
    };

    const featuredName = {
        fontSize: isMobile ? "14px" : "16px",
        marginTop: "10px",
        color: "#333",
        lineHeight: "1.4"
    };

    const featuredPrice = {
        fontSize: isMobile ? "13px" : "14px",
        color: "#8a8a8a",
        marginTop: "4px"
    };

    const testimonialSection = {
        width: "100%",
        backgroundColor: "#efefef",
        padding: isMobile ? "50px 12px" : "90px 24px 70px 24px",
        boxSizing: "border-box"
    };

    const testimonialTitle = {
        textAlign: "center",
        fontSize: isMobile ? "30px" : "44px",
        fontFamily: "serif",
        fontWeight: "400",
        marginBottom: isMobile ? "30px" : "60px",
        letterSpacing: "1px"
    };

    const testimonialDesktopWrap = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0px",
        width: "100%"
    };

    const sideCard = {
        width: "31%",
        backgroundColor: "#f5f5f5",
        padding: "35px 30px",
        boxSizing: "border-box",
        textAlign: "center",
        opacity: 0.85,
        cursor: "pointer",
        minHeight: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "0.3s ease"
    };

    const centerCard = {
        width: "36%",
        backgroundColor: "#f8f8f8",
        padding: "48px 42px",
        boxSizing: "border-box",
        textAlign: "center",
        minHeight: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        zIndex: 2,
        transition: "0.3s ease"
    };

    const mobileCard = {
        width: "100%",
        backgroundColor: "#f8f8f8",
        padding: "30px 20px",
        boxSizing: "border-box",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
    };

    const testimonialStars = {
        fontSize: isMobile ? "20px" : "22px",
        letterSpacing: "4px",
        marginBottom: "22px"
    };

    const testimonialText = {
        fontSize: isMobile ? "16px" : "18px",
        lineHeight: "1.6",
        color: "#222",
        marginBottom: "25px"
    };

    const testimonialName = {
        fontSize: isMobile ? "18px" : "20px",
        fontWeight: "700",
        color: "#111"
    };

    const dotsWrapper = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "28px"
    };

    const dotStyle = (active) => ({
        width: active ? "11px" : "8px",
        height: active ? "11px" : "8px",
        borderRadius: "50%",
        backgroundColor: active ? "#222" : "#999",
        cursor: "pointer",
        transition: "0.3s ease"
    });

    const testimonialArrowWrap = {
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "20px"
    };

    const arrowButton = {
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        cursor: "pointer",
        fontSize: "18px"
    };

    const flagshipSection = {
        width: "100%",
        height: isMobile ? "auto" : "420px",
        backgroundImage: `url(${storebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-start",
        alignItems: "center",
        padding: isMobile ? "20px 10px" : "0px 80px",
        boxSizing: "border-box",
        flexDirection: isMobile ? "column" : "row"
    };

    const flagshipCard = {
        background: "#fff",
        padding: isMobile ? "20px" : "40px",
        width: isMobile ? "90%" : "380px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
        marginBottom: isMobile ? "20px" : "0"
    };

    const flagshipTitle = {
        fontSize: "20px",
        letterSpacing: "2px",
        marginBottom: "15px"
    };

    const flagshipStoreName = {
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "10px"
    };

    const flagshipAddress = {
        fontSize: "14px",
        lineHeight: "1.6",
        marginBottom: "20px",
        color: "#444"
    };

    const flagshipButton = {
        backgroundColor: "#6d3a87",
        color: "#fff",
        padding: "12px 28px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer",
        display: "inline-block"
    };

    const prevIndex = getPrevIndex();
    const nextIndex = getNextIndex();

    return (
        <>
            <div style={navaratnaSection}>
                <h2 style={navaratnaTitle}>Navaratna Collection ❤️</h2>
                <div style={navaratnaGrid}>
                    {[navaratna1, navaratna2, navaratna3, navaratna4, navaratna5, navaratna6, navaratna7, navaratna8].map((img, i) => (
                        <div style={navaratnaCard} key={i}>
                            <img src={img} alt="" style={navaratnaImage} />
                            <p style={navaratnaName}>Navaratna Necklace {i + 1}</p>
                            <p style={navaratnaPrice}>₹ {(i + 1) * 10000}</p>
                        </div>
                    ))}
                </div>
                <div style={navaratnaButtonContainer}>
                    <div style={navaratnaButton}>VIEW ALL</div>
                </div>
            </div>

            <hr />

            <div style={finestSection}>
                <h2 style={finestTitle}>Finest Collections ❤️</h2>
                <div style={finestGrid}>
                    {[finest1, finest2, finest3, finest4].map((img, i) => (
                        <div style={finestCard} key={i}>
                            <img src={img} alt="" style={finestImage} />
                            <p style={finestName}>Finest Jewellery {i + 1}</p>
                        </div>
                    ))}
                </div>
                <div style={finestButtonContainer}>
                    <div style={finestButton}>VIEW ALL</div>
                </div>
            </div>

            <hr />

            <div style={southIndianSection}>
                <h2 style={southIndianTitle}>South Indian Collections ❤️</h2>
                <div style={southIndianGrid}>
                    {[southindian1, southindian2, southindian3, southindian4, southindian5, southindian6, southindian7, southindian8, southindian9, southindian10, southindian11, southindian12].map((img, i) => (
                        <div style={southIndianCard} key={i}>
                            <img src={img} alt="" style={southIndianImage} />
                            <p style={southIndianName}>South Indian Jewellery {i + 1}</p>
                            <p style={southIndianPrice}>₹ {(i + 1) * 15000}</p>
                        </div>
                    ))}
                </div>
                <div style={southIndianButtonContainer}>
                    <div style={southIndianButton}>VIEW ALL</div>
                </div>
            </div>

            <div style={featuredSection}>
                <h2 style={featuredTitle}>FEATURED COLLECTION - VICTORIAN NECKLACE</h2>

                <div style={featuredButtonWrap}>
                    <button style={featuredButton}>VIEW ALL</button>
                </div>

                <div style={featuredGrid}>
                    {featuredProducts.map((item, index) => (
                        <div style={featuredCard} key={index}>
                            <img src={item.image} alt={item.name} style={featuredImage} />
                            <div style={featuredName}>{item.name}</div>
                            <div style={featuredPrice}>{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={testimonialSection}>
                <h2 style={testimonialTitle}>TESTIMONIALS</h2>

                {isMobile ? (
                    <>
                        <div style={mobileCard}>
                            <div style={testimonialStars}>★★★★★</div>
                            <p style={testimonialText}>{testimonials[activeTestimonial].text}</p>
                            <div style={testimonialName}>{testimonials[activeTestimonial].name}</div>
                        </div>

                        <div style={testimonialArrowWrap}>
                            <button
                                style={arrowButton}
                                onClick={() => setActiveTestimonial(prevIndex)}
                            >
                                ‹
                            </button>
                            <button
                                style={arrowButton}
                                onClick={() => setActiveTestimonial(nextIndex)}
                            >
                                ›
                            </button>
                        </div>
                    </>
                ) : (
                    <div style={testimonialDesktopWrap}>
                        <div
                            style={sideCard}
                            onClick={() => setActiveTestimonial(prevIndex)}
                        >
                            <div style={testimonialStars}>★★★★★</div>
                            <p style={testimonialText}>{testimonials[prevIndex].text}</p>
                            <div style={testimonialName}>{testimonials[prevIndex].name}</div>
                        </div>

                        <div style={centerCard}>
                            <div style={testimonialStars}>★★★★★</div>
                            <p style={testimonialText}>{testimonials[activeTestimonial].text}</p>
                            <div style={testimonialName}>{testimonials[activeTestimonial].name}</div>
                        </div>

                        <div
                            style={sideCard}
                            onClick={() => setActiveTestimonial(nextIndex)}
                        >
                            <div style={testimonialStars}>★★★★★</div>
                            <p style={testimonialText}>{testimonials[nextIndex].text}</p>
                            <div style={testimonialName}>{testimonials[nextIndex].name}</div>
                        </div>
                    </div>
                )}

                <div style={dotsWrapper}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            style={dotStyle(index === activeTestimonial)}
                            onClick={() => setActiveTestimonial(index)}
                        ></div>
                    ))}
                </div>
            </div>

            <div style={flagshipSection}>
                <div style={flagshipCard}>
                    <h2 style={flagshipTitle}>OUR FLAGSHIP STORE</h2>
                    <p style={flagshipStoreName}>The Amethyst Store</p>
                    <p style={flagshipAddress}>
                        Buva House, Khadher Nawaz Khan Road,
                        <br />
                        Nungambakkam,
                        <br />
                        Chennai - 600034
                    </p>
                    <div style={flagshipButton}>GET DIRECTIONS</div>
                </div>
            </div>
        </>
    );
}

export default SecondHalf;