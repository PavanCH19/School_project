import Header from "../components/Header";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const ContactUs = () => {
    return (
        <>
            <Header />
            <NavBar />
            <section className="container my-5" data-aos="fade-up">
                <h2 className="mb-4 text-primary text-center" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                    Contact Us
                </h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-primary" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Introduction</h3>
                        <p style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                            For more information about our school or to ask any questions,
                            please feel free to contact us. We are here to help!
                        </p>
                        <h3 className="text-primary mt-4" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                            Contact Details
                        </h3>
                        <ul style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                            <li><strong>Address:</strong> [Your School Address]</li>
                            <li><strong>Phone:</strong> +91 123 456 7890</li>
                            <li><strong>Email:</strong> info@schoolname.com</li>
                            <li><strong>Website:</strong> www.schoolname.com</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-primary" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                            Contact Form
                        </h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
