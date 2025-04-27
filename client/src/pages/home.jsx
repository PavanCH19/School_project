import { useEffect, useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import AboutSchool from "../components/AboutSchool";
import AOS from "aos";
import "aos/dist/aos.css";
import Circulars from "../components/Circulars";
import UpcomingEvents from "../components/UpcomingEvents";
import CampusGallery from "../components/CampusGallery";
import FAQs from "../components/FAQ";
import Location from "../components/Location";
import "../App.css";
import Header from "../components/Header";

const images = ["/images/4.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/5.jpeg"];
//hekkolsdkajflkasdjflk
const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Initialize AOS animation
        AOS.init({ duration: 1000 });

        // Auto-change carousel image every 3 seconds
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Feature list to display in "Why Choose Us" section
    const features = [
        { icon: "🎓", title: "Qualified Teachers", desc: "Experienced and dedicated staff for all subjects." },
        { icon: "🏫", title: "Smart Classrooms", desc: "Interactive digital learning environment." },
        { icon: "📚", title: "Library Access", desc: "Thousands of books, journals, and digital resources." },
        { icon: "📈", title: "Progress Tracking", desc: "Regular performance analysis and feedback." },
    ];

    return (
        <div className="main-container">

            {/* Top header */}
            <Header />

            {/* Marquee announcements */}
            <div className="bg-warning py-2 px-4 overflow-hidden text-dark fw-bold">
                <marquee>Admissions open for 2025 | Final exams from April 25 | Last date for fee payment: April 30</marquee>
            </div>

            {/* Navigation bar */}
            <NavBar />

            {/* Image carousel */}
            <div
                style={{
                    height: "500px",
                    width: "60%",
                    margin: "0 auto", // ✅ centers the div horizontally
                    overflow: "hidden", // optional: hides any image overflow
                    borderRadius: "10px" // optional: adds some smooth corners
                }}
            >
                <img
                    src={images[index]}
                    alt="carousel"
                    className="w-100 img-fluid"
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "opacity 0.5s ease-in-out"
                    }}
                />
            </div>




            {/* About School section */}
            <AboutSchool />

            {/* Why Choose Us section */}
            <section className="bg-light py-5">
                <div className="container text-center" data-aos="fade-up">
                    <h2 className="mb-4 text-primary">Why Choose Us</h2>
                    <div className="row g-4">
                        {features.map((f, i) => (
                            <div key={i} className="col-12 col-sm-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-light">
                                    <div className="card-body">
                                        <div className="display-4">{f.icon}</div>
                                        <h5 className="card-title mt-3"><b>{f.title}</b></h5>
                                        <p className="card-text">{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Circulars section */}
            <Circulars />

            {/* Upcoming Events section */}
            <UpcomingEvents />

            {/* Admission Process section */}
            <section className="bg-light py-5 text-center" data-aos="fade-up">
                <div className="container">
                    <h2 className="mb-4 text-primary">Admission Process</h2>
                    <ol className="text-start mx-auto" style={{ maxWidth: "600px" }}>
                        <li>Fill out the admission form online or offline.</li>
                        <li>Submit necessary documents.</li>
                        <li>Participate in the interview/assessment session.</li>
                        <li>Admission confirmation and fee payment.</li>
                    </ol>
                </div>
            </section>

            {/* Campus Gallery section */}
            <CampusGallery />

            {/* FAQs section */}
            <FAQs />

            {/* Location/Map section */}
            <Location />

            {/* Newsletter subscription section */}
            <section
                className="bg-primary text-white py-5 text-center"
                data-aos="fade-up"
            >
                <div className="container">
                    <h2 className="mb-3">Stay Updated!</h2>
                    <p className="mb-4">
                        Subscribe to our newsletter for the latest updates, circulars, and event details.
                    </p>
                    <form className="d-flex justify-content-center">
                        <input
                            type="email"
                            className="form-control w-50 me-2"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="btn btn-light">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default Home;
