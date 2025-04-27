import Header from "../components/Header";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <Header />
            <NavBar />
            <section className="container my-5" data-aos="fade-up">
                <h2 className="mb-4 text-primary text-center">About Our School</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="/images/school_img.jpeg"
                            alt="School"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "320px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <p>
                            <strong>Welcome to <strong className="mb-0 fw-bold">J.P. Kannada Medium Convent School</strong>,</strong> where young minds are
                            nurtured with love, care, and the right education to build a
                            strong foundation for a bright future. We are a primary school
                            offering classes from grade 1 to grade 5. Our school is designed
                            to cater to the developmental needs of children, providing them
                            with a solid academic and extracurricular experience.
                        </p>
                        <p>
                            Our dedicated team of teachers ensures that each child receives
                            personalized attention, fostering creativity, curiosity, and a
                            love for learning. We believe that early education plays a crucial
                            role in shaping a child’s future, and we strive to make learning
                            both fun and engaging for our students.
                        </p>
                    </div>
                </div>

                <h3 className="mt-5 text-primary">Our Vision</h3>
                <p>
                    Our vision is to create a stimulating learning environment that
                    encourages young minds to explore, discover, and grow. We aim to
                    build confident, curious, and responsible students who are equipped
                    with the skills they need to succeed in the world ahead.
                </p>

                <h3 className="mt-4 text-primary">Why Choose Us?</h3>
                <ul>
                    <li>
                        <strong>Qualified and Caring Teachers:</strong> Our team of highly
                        qualified teachers ensures that every child is given individual
                        attention and a tailored approach to learning.
                    </li>
                    <li>
                        <strong>Child-Centered Learning:</strong> We focus on nurturing each
                        child's natural curiosity, promoting a love for learning through
                        creative activities, hands-on experiences, and interactive lessons.
                    </li>
                    <li>
                        <strong>Safe and Supportive Environment:</strong> We believe in
                        creating a safe, nurturing, and inclusive environment where all
                        students feel valued and respected.
                    </li>
                    <li>
                        <strong>Holistic Development:</strong> Apart from academics, we offer
                        a wide range of extracurricular activities to help children develop
                        their talents in sports, arts, and social skills.
                    </li>
                </ul>

                <h3 className="mt-4 text-primary">Our Facilities</h3>
                <p>
                    Our school is equipped with modern classrooms, a well-stocked library,
                    a computer lab, and ample playground space. We ensure that our
                    students have access to all the resources they need to thrive in their
                    learning journey.
                </p>

                <h3 className="mt-4 text-primary">Our Approach</h3>
                <p>
                    At <strong className="mb-0 fw-bold">J.P. Kannada Medium Convent School</strong>, we prioritize a balanced approach to education,
                    combining academic excellence with emotional, social, and physical
                    development. Our curriculum is designed to make learning enjoyable,
                    while also preparing students for future challenges.
                </p>

                <p>
                    Whether it's exploring new subjects, participating in creative
                    activities, or simply enjoying a day of play, our school offers a
                    supportive environment that encourages each student to develop their
                    full potential.
                </p>
            </section>
            <Footer />
        </>
    );
};

export default About;
