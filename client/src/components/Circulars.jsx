const Circulars = () => {
    // List of circulars in English
    const circulars = [
        "Annual Day - May 5",
        "Parent-Teacher Meeting - April 20",
        "New Admissions Open - From April 10",
        "Summer Camp Registration - May 10",
        "New Semester Begins - June 1",
        "Sports Day - June 15",
    ];

    return (
        <>
            {/* Circulars Section */}
            <section className="container my-5 text-center" data-aos="fade-up">
                <h2 className="mb-4 text-primary">Latest Circulars</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {/* Render each circular as a card */}
                    {circulars.map((circular, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 shadow-sm border-info">
                                <div className="card-body">
                                    <div className="card-title fw-bold">{circular}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Circulars;
