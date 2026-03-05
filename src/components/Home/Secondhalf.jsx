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

import storebg from '../../assets/flagship/storebg.png'



function SecondHalf() {


    const navaratnaSection = {
        width: "100%",
        padding: "60px 40px",
        boxSizing: "border-box"
    };

    const navaratnaTitle = {
        textAlign: "center",
        fontSize: "28px",
        letterSpacing: "2px",
        marginBottom: "40px"
    };

    const navaratnaGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px"
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
        marginTop: "40px"
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
        padding: "60px 40px",
        boxSizing: "border-box"
    };

    const finestTitle = {
        textAlign: "center",
        fontSize: "28px",
        letterSpacing: "2px",
        marginBottom: "40px"
    };

    const finestGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px"
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
        marginTop: "40px"
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
        padding: "60px 40px",
        boxSizing: "border-box"
    };

    const southIndianTitle = {
        textAlign: "center",
        fontSize: "28px",
        letterSpacing: "2px",
        marginBottom: "40px"
    };

    const southIndianGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px"
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
        marginTop: "40px"
    };

    const southIndianButton = {
        backgroundColor: "#6d3a87",
        color: "white",
        padding: "12px 30px",
        border: "none",
        letterSpacing: "2px",
        cursor: "pointer"
    };



    //flagship section
    const flagshipSection = {
        width: "100%",
        height: "420px",
        backgroundImage: `url(${storebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "0px 80px",
        boxSizing: "border-box"
    };

    const flagshipCard = {
        background: "#fff",
        padding: "40px",
        width: "380px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)"
    };

    const flagshipTitle = {
        fontSize: "24px",
        letterSpacing: "2px",
        marginBottom: "20px"
    };

    const flagshipStoreName = {
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "10px"
    };

    const flagshipAddress = {
        fontSize: "14px",
        lineHeight: "1.6",
        marginBottom: "25px",
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



    return (
        <>

            <div style={navaratnaSection}>

                <h2 style={navaratnaTitle}>Navaratna Collection ❤️</h2>

                <div style={navaratnaGrid}>

                    <div style={navaratnaCard}>
                        <img src={navaratna1} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Navaratna Stone Short Necklace</p>
                        <p style={navaratnaPrice}>₹ 31,000</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna2} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Ovya Navaratna Drops</p>
                        <p style={navaratnaPrice}>₹ 5,900</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna3} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Navaratna Stone Pendant</p>
                        <p style={navaratnaPrice}>₹ 8,150</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna4} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Natasha Short Necklace</p>
                        <p style={navaratnaPrice}>₹ 41,050</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna5} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Anya Stone Necklace</p>
                        <p style={navaratnaPrice}>₹ 22,900</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna6} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Navaratna Earrings</p>
                        <p style={navaratnaPrice}>₹ 19,480</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna7} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Stunning Stone Short Necklace Set</p>
                        <p style={navaratnaPrice}>₹ 45,440</p>
                    </div>

                    <div style={navaratnaCard}>
                        <img src={navaratna8} alt="" style={navaratnaImage} />
                        <p style={navaratnaName}>Nishatika Stone Pendant</p>
                        <p style={navaratnaPrice}>₹ 9,000</p>
                    </div>

                </div>

                <div style={navaratnaButtonContainer}>
                    <div style={navaratnaButton}>VIEW ALL</div>
                </div>

            </div>



            <div className="line-break">
                <hr />
            </div>




            <div style={finestSection}>

                <h2 style={finestTitle}>Finest Collections ❤️</h2>

                <div style={finestGrid}>

                    <div style={finestCard}>
                        <img src={finest1} alt="" style={finestImage} />
                        <p style={finestName}>Avikram-Diamond Design</p>
                    </div>

                    <div style={finestCard}>
                        <img src={finest2} alt="" style={finestImage} />
                        <p style={finestName}>Victorian Collection</p>
                    </div>

                    <div style={finestCard}>
                        <img src={finest3} alt="" style={finestImage} />
                        <p style={finestName}>Swaroski - High Quality Zircon Jewellery</p>
                    </div>

                    <div style={finestCard}>
                        <img src={finest4} alt="" style={finestImage} />
                        <p style={finestName}>South Indian Kundan</p>
                    </div>



                </div>

                <div style={finestButtonContainer}>
                    <div style={finestButton}>VIEW ALL</div>
                </div>

            </div>


            <div className="line-break">
                <hr />
            </div>





            <div style={southIndianSection}>

                <h2 style={southIndianTitle}>South Indian Collections ❤️</h2>

                <div style={southIndianGrid}>

                    <div style={southIndianCard}>
                        <img src={southindian1} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Traditional Boho Pendants</p>
                        <p style={southIndianPrice}>₹ 80,960</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian2} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Mawrina Boho Short Necklace</p>
                        <p style={southIndianPrice}>₹ 44,960</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian3} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Baiza Boho Short Necklace</p>
                        <p style={southIndianPrice}>₹ 65,035</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian4} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Laravikha Boho Short Necklace</p>
                        <p style={southIndianPrice}>₹ 66,950</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian5} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Majestic Boho Short Necklace</p>
                        <p style={southIndianPrice}>₹ 46,020</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian6} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Catching Boho Short Necklace Set</p>
                        <p style={southIndianPrice}>₹ 1,27,885</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian7} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Riza Meadow Short Necklace Set</p>
                        <p style={southIndianPrice}>₹ 83,845</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian8} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Aarvi Hassvi Boho Long Necklace Set</p>
                        <p style={southIndianPrice}>₹ 1,41,923</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian9} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Riza Meadow Short Necklace Set</p>
                        <p style={southIndianPrice}>₹ 83,845</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian10} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Aarvi Hassvi Boho Long Necklace Set</p>
                        <p style={southIndianPrice}>₹ 1,41,923</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian11} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Riza Meadow Short Necklace Set</p>
                        <p style={southIndianPrice}>₹ 83,845</p>
                    </div>

                    <div style={southIndianCard}>
                        <img src={southindian12} alt="" style={southIndianImage} />
                        <p style={southIndianName}>Aarvi Hassvi Boho Long Necklace Set</p>
                        <p style={southIndianPrice}>₹ 1,41,923</p>
                    </div>

                </div>

                <div style={southIndianButtonContainer}>
                    <div style={southIndianButton}>VIEW ALL</div>
                </div>

            </div>



            {/* flagship section */}


            <div style={flagshipSection}>

                <div style={flagshipCard}>

                    <h2 style={flagshipTitle}>OUR FLAGSHIP STORE</h2>

                    <p style={flagshipStoreName}>The Amethyst Store</p>

                    <p style={flagshipAddress}>
                        Buva House, Khadher Nawaz Khan Road,<br />
                        Nungambakkam,<br />
                        Chennai - 600034
                    </p>

                    <div style={flagshipButton}>
                        GET DIRECTIONS
                    </div>

                </div>

            </div>

        </>
    )

}
export default SecondHalf;