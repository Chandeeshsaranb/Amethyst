
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.png";
import hero3 from "../../assets/hero/hero3.png";
import hero4 from "../../assets/hero/hero4.png";
import hero5 from "../../assets/hero/hero5.webp";

import img1 from "../../assets/carousel/img.avif";
import img2 from "../../assets/carousel/img.avif";
import img3 from "../../assets/carousel/img.avif";
import img4 from "../../assets/carousel/img.avif";
import img5 from "../../assets/carousel/img.avif";
import img6 from "../../assets/carousel/img.avif";
import img7 from "../../assets/carousel/img.avif";
import img8 from "../../assets/carousel/img.avif";
import img9 from "../../assets/carousel/img.avif";
import img10 from "../../assets/carousel/img.avif";

import image from "../../assets/offers.webp";

import wedding1 from "../../assets/wedding/wedding1.png";
import wedding2 from "../../assets/wedding/wedding2.png";
import wedding3 from "../../assets/wedding/wedding3.png";
import wedding4 from "../../assets/wedding/wedding4.png";

import oddiyanam from "../../assets/oddiyanam/oddiyanam.png";

import bohoimg1 from "../../assets/boho/boho.png";
import bohoimg2 from "../../assets/boho/boho.png";
import bohoimg3 from "../../assets/boho/boho.png";
import bohoimg4 from "../../assets/boho/boho.png";
import bohoimg5 from "../../assets/boho/boho.png";
import bohoimg6 from "../../assets/boho/boho.png";
import bohoimg7 from "../../assets/boho/boho.png";
import bohoimg8 from "../../assets/boho/boho.png";

function FirstHalf() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const images = [hero1, hero2, hero3, hero4, hero5];

    const carouselImages = [
        img1, img2, img3, img4, img5,
        img6, img7, img8, img9, img10
    ];

    const bohoImages = [
        bohoimg1,
        bohoimg2,
        bohoimg3,
        bohoimg4,
        bohoimg5,
        bohoimg6,
        bohoimg7,
        bohoimg8
    ];

    const heroSlider = {
        width: "100%",
        height: "80vh"
    };

    const heroImage = {
        width: "100%",
        height: "80vh",
        objectFit: "cover",
        display: "block",
        cursor: "pointer"
    };

    const carousel = {
        width: "100%",
        overflow: "hidden",
        padding: "20px 0",
        background: "#fff"
    };

    const track = {
        display: "flex",
        width: "max-content",
        animation: "scroll 45s linear infinite"
    };

    const item = {
        flex: "0 0 auto",
        marginRight: "40px"
    };

    const imageStyle = {
        width: "100%",
        height: "auto",
        objectFit: "cover",
        borderRadius: "8px",
        cursor: "pointer",
        display: "block"
    };

    const offerItem = {
        width: "100%",
        height: "auto",
        display: "block",
        cursor: "pointer"
    };

    const weddingSection = {
        padding: isMobile ? "10px 10px 0 10px" : "20px 20px 0 20px",
        background: "#fff",
        width: "100%"
    };

    const weddingTitle = {
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "600",
        marginBottom: "20px"
    };

    const weddingGrid = {
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: isMobile ? "10px" : "20px",
        width: "100%",
        padding: isMobile ? "0 10px" : "0"
    };

    const weddingCollectionImage = {
        width: "100%",
        height: "auto",
        display: "block",
        cursor: "pointer"
    };

    const oddiyanamSection = {
        width: "100%",
        padding: isMobile ? "20px 10px" : "40px 20px",
        boxSizing: "border-box"
    };

    const oddiyanamImage = {
        width: "100%"
    };

    const oddiyanamImg = {
        width: "100%",
        height: "auto",
        display: "block",
        cursor: "pointer"
    };

    const oddiyanamShop = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        backgroundColor: "#efe9f1",
        padding: isMobile ? "15px" : "20px",
        marginTop: "10px"
    };

    const checkoutText = {
        fontSize: "15px",
        lineHeight: "1.4"
    };

    const shopButton = {
        padding: "5px 10px",
        fontSize: "15px",
        background: "#efe9f1",
        color: "#000",
        cursor: "pointer",
        borderRadius: "2px",
        border: "1px solid rgba(0,0,0,0.25)"
    };

    const bohoSection = {
        width: "100%",
        padding: isMobile ? "30px 10px" : "60px 20px"
    };

    const bohoTitle = {
        textAlign: "center",
        fontSize: "28px",
        letterSpacing: "2px",
        marginBottom: "30px"
    };

    const bohoGrid = {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? "15px" : "40px"
    };

    const bohoCard = {
        textAlign: "center"
    };

    const bohoImage = {
        width: "100%",
        height: "auto",
        display: "block",
        cursor: "pointer"
    };

    const bohoName = {
        fontSize: "14px",
        marginTop: "10px"
    };

    const bohoPrice = {
        fontSize: "14px"
    };

    const bohoButtonContainer = {
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
    };

    const bohoButton = {
        backgroundColor: "#6d3a87",
        color: "white",
        padding: "12px 30px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
        display: "block"
    };

    return (
        <>
            <div className="hero-section">
                <section style={heroSlider}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        style={{ height: "100%" }}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/hero-collection-${index + 1}`} style={linkStyle}>
                                    <img src={img} alt={`hero-${index}`} style={heroImage} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>

            <div className="carousel-section">
                <style>{`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                `}</style>

                <div style={carousel}>
                    <div style={track}>
                        {[...carouselImages, ...carouselImages].map((img, index) => (
                            <div style={item} key={index}>
                                <Link to={`/product-${(index % carouselImages.length) + 1}`} style={linkStyle}>
                                    <img src={img} alt={`carousel-${index}`} style={imageStyle} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="offer-section">
                <Link to="/offers" style={linkStyle}>
                    <img src={image} style={offerItem} alt="offers" />
                </Link>
            </div>

            <div className="wedding-section">
                <div style={weddingSection}>
                    <h2 style={weddingTitle}>EXCLUSIVE WEDDING COLLECTIONS</h2>

                    <div style={weddingGrid}>
                        <Link to="/wedding-necklace" style={linkStyle}>
                            <img src={wedding1} alt="wedding1" style={weddingCollectionImage} />
                        </Link>

                        <Link to="/wedding-earrings" style={linkStyle}>
                            <img src={wedding2} alt="wedding2" style={weddingCollectionImage} />
                        </Link>

                        <Link to="/wedding-bangles" style={linkStyle}>
                            <img src={wedding3} alt="wedding3" style={weddingCollectionImage} />
                        </Link>

                        <Link to="/wedding-bridal-set" style={linkStyle}>
                            <img src={wedding4} alt="wedding4" style={weddingCollectionImage} />
                        </Link>
                    </div>
                </div>
            </div>

            <div style={oddiyanamSection}>
                <div style={oddiyanamImage}>
                    <Link to="/oddiyanam" style={linkStyle}>
                        <img src={oddiyanam} alt="oddiyanam" style={oddiyanamImg} />
                    </Link>
                </div>

                <div style={oddiyanamShop}>
                    <div style={checkoutText}>CHECK OUT OUR ODDIYANAM COLLECTION</div>
                    <Link to="/oddiyanam" style={linkStyle}>
                        <div style={shopButton}>SHOP NOW</div>
                    </Link>
                </div>
            </div>

            <div style={bohoSection}>
                <h2 style={bohoTitle}>BOHO GODDESS ❤️</h2>

                <div style={bohoGrid}>
                    {bohoImages.map((img, i) => (
                        <Link
                            to={`/boho-product-${i + 1}`}
                            style={linkStyle}
                            key={i}
                        >
                            <div style={bohoCard}>
                                <img src={img} alt={`boho-${i + 1}`} style={bohoImage} />
                                <p style={bohoName}>Boho Necklace</p>
                                <p style={bohoPrice}>₹ 80,960</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div style={bohoButtonContainer}>
                    <Link to="/boho-goddess" style={linkStyle}>
                        <div style={bohoButton}>VIEW ALL</div>
                    </Link>
                </div>
            </div>

            <div className="line-break">
                <hr />
            </div>
        </>
    );
}

export default FirstHalf;