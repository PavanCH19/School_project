// import { useEffect, useState } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

// const images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg",];

function Curosel() {
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     // Initialize AOS animation
    //     AOS.init({ duration: 1000 });

    //     // Auto-change carousel image every 3 seconds
    //     const interval = setInterval(() => {
    //         setIndex((prev) => (prev + 1) % images.length);
    //     }, 3000);

    //     // Clear interval on component unmount
    //     return () => clearInterval(interval);
    // }, []);
    return (<>
        <div className="w-100 position-relative" style={{ maxHeight: "500px", overflow: "hidden" }}>
            {/* <img
                src={images[index]}
                alt="carousel"
                className="w-100 img-fluid"
                style={{
                    height: "50%",
                    objectFit: "cover",
                    margin: "50px",
                    transition: "opacity 0.5s ease-in-out"
                }}
            /> */}
            <img src="images/1.jpeg" alt="img1" />
        </div>
    </>)
}

export default Curosel


