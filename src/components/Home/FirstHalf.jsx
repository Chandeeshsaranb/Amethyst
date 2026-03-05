import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../../assets/Hero.webp";
import hero2 from "../../assets/Hero.webp";
import hero3 from "../../assets/Hero.webp";
import hero4 from "../../assets/Hero.webp";
import hero5 from "../../assets/Hero.webp";

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


import image from '../../assets/offers.webp';

import wedding1 from "../../assets/wedding/wedding1.png";
import wedding2 from "../../assets/wedding/wedding2.png";
import wedding3 from "../../assets/wedding/wedding3.png";
import wedding4 from "../../assets/wedding/wedding4.png";

import oddiyanam from '../../assets/oddiyanam/oddiyanam.png'


import bohoimg1 from "../../assets/boho/boho.png";
import bohoimg2 from "../../assets/boho/boho.png";
import bohoimg3 from "../../assets/boho/boho.png";
import bohoimg4 from "../../assets/boho/boho.png";
import bohoimg5 from "../../assets/boho/boho.png";
import bohoimg6 from "../../assets/boho/boho.png";
import bohoimg7 from "../../assets/boho/boho.png";
import bohoimg8 from "../../assets/boho/boho.png";

function FirstHalf() {

    const images = [hero1, hero2, hero3, hero4, hero5];

    const carouselImages = [
        img1, img2, img3, img4, img5,
        img6, img7, img8, img9, img10
    ];

    const heroSlider = {
        width: "100%"
    };

    const heroImage = {
        width: "100%",
        height: "600px",
        objectFit: "cover",
        display: "block"
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
        borderRadius: "8px"
    };


    const offerItem = {
        width: "100%",
        height: "auto"
    };


    const weddingSection = {
        padding: "20px 20px 0px 20px",
        background: "#fff",
        width: "100%"
    };

    const weddingTitle = {
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "600",
        marginBottom: "30px"
    };

    const weddingGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",   // 2 images per row
        gap: "20px",
        width: "100%"
    };

    const weddingCollectionImage = {
        width: "100%",
        height: "auto",   // key fix
        display: "block"
    };


    const oddiyanamSection = {
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box"
    };

    const oddiyanamImage = {
        width: "100%"
    };

    const oddiyanamImg = {
        width: "100%",
        height: "auto",
        display: "block"
    };


    const oddiyanamShop = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",     // vertical centering
        gap: "10px",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#efe9f1",
        padding: "20px",
        marginTop: "10px"
    };

    const checkoutText = {
        fontSize: "15px",
        lineHeight: "1.4",
        display: "flex",
        alignItems: "center"
    };

    const shopButton = {
        padding: "5px 10px",
        fontSize: "15px",
        background: "#efe9f1",
        color: "#000000",
        cursor: "pointer",
        borderRadius: "2px",
        border: "1px solid rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap"
    };




    const bohoSection = {
        width: "100%",
        padding: "60px 40px",
        boxSizing: "border-box"
    };

    const bohoTitle = {
        textAlign: "center",
        fontSize: "28px",
        letterSpacing: "2px",
        marginBottom: "40px"
    };

    const bohoGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px"
    };

    const bohoCard = {
        textAlign: "center"
    };

    const bohoImage = {
        width: "100%",
        height: "auto"
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
        marginTop: "40px"
    };

    const bohoButton = {
        backgroundColor: "#6d3a87",
        color: "white",
        padding: "12px 30px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer"
    };

    

    return (
        <>
            <div className="hero-section">
                <section style={heroSlider}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        pagination={{ clickable: true }}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`hero-${index}`} style={heroImage} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>

            <div className="carousel-section">
                <style>
                    {`
                        @keyframes scroll {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
                    `}
                </style>

                <div style={carousel}>
                    <div style={track}>
                        {[...carouselImages, ...carouselImages].map((img, index) => (
                            <div style={item} key={index}>
                                <img src={img} alt="item" style={imageStyle} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="offer-section">
                <img src={image} style={offerItem} alt="offers" />
            </div>

            <div className="weddding-section">
                <div style={weddingSection}>
                    <h2 style={weddingTitle}> EXCLUSIVE WEDDING COLLECTIONS</h2>

                    <div style={weddingGrid}>
                        <img src={wedding1} alt="wedding1" style={weddingCollectionImage} />
                        <img src={wedding2} alt="wedding2" style={weddingCollectionImage} />
                        <img src={wedding3} alt="wedding3" style={weddingCollectionImage} />
                        <img src={wedding4} alt="wedding4" style={weddingCollectionImage} />
                    </div>
                </div>
            </div>

            <div style={oddiyanamSection}>
                <div style={oddiyanamImage}>
                    <img src={oddiyanam} alt="oddiyanam" style={oddiyanamImg} />
                </div>

                <div style={oddiyanamShop}>
                    <div style={checkoutText}>
                        CHECK OUT OUR ODDIYANAM COLLECTION
                    </div>

                    <div style={shopButton}>
                        SHOP NOW
                    </div>
                </div>
            </div>

            <div style={bohoSection}>

                <h2 style={bohoTitle}>BOHO GODDESS ❤️</h2>

                <div style={bohoGrid}>

                    <div style={bohoCard}>
                        <img src={bohoimg1} alt="" style={bohoImage} />
                        <p style={bohoName}>Traditional Boho Pendants</p>
                        <p style={bohoPrice}>₹ 80,960</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg2} alt="" style={bohoImage} />
                        <p style={bohoName}>Mawrina Boho Short Necklace</p>
                        <p style={bohoPrice}>₹ 44,960</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg3} alt="" style={bohoImage} />
                        <p style={bohoName}>Baiza Boho Short Necklace</p>
                        <p style={bohoPrice}>₹ 65,035</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg4} alt="" style={bohoImage} />
                        <p style={bohoName}>Laravikha Boho Short Necklace</p>
                        <p style={bohoPrice}>₹ 66,950</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg5} alt="" style={bohoImage} />
                        <p style={bohoName}>Majestic Boho Short Necklace</p>
                        <p style={bohoPrice}>₹ 46,020</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg6} alt="" style={bohoImage} />
                        <p style={bohoName}>Catching Boho Short Necklace Set</p>
                        <p style={bohoPrice}>₹ 1,27,885</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg7} alt="" style={bohoImage} />
                        <p style={bohoName}>Riza Meadow Short Necklace Set</p>
                        <p style={bohoPrice}>₹ 83,845</p>
                    </div>

                    <div style={bohoCard}>
                        <img src={bohoimg8} alt="" style={bohoImage} />
                        <p style={bohoName}>Aarvi Hassvi Boho Long Necklace Set</p>
                        <p style={bohoPrice}>₹ 1,41,923</p>
                    </div>

                </div>

                <div style={bohoButtonContainer}>
                    <div style={bohoButton}>VIEW ALL</div>
                </div>

            </div>

            <div className="line-break">
                <hr />
            </div>
        </>
    );
}

export default FirstHalf;