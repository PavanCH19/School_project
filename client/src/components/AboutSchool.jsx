const AboutSchool = () => {
    return (
        <>
            <section className="container my-5 text-center" data-aos="fade-up">
                <h2 className="display-6 mb-4 text-primary"><b>About Our School</b></h2>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <p className="lead text-muted">
                            J.P. Kannada Medium Convent School is a renowned educational institution dedicated to academic excellence and holistic development of students. The school aims to nurture students' personal and moral growth with the support of highly qualified teachers. It provides modern classrooms, practical training, cultural activities, and sports opportunities to encourage overall development.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img
                            src="/images/school_img.jpeg"
                            alt="School"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "320px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSchool;
