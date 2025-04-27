import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingEvents = () => {
    // List of upcoming events
    const events = [
        { date: "April 20", event: "Parent-Teacher Meeting" },
        { date: "May 5", event: "Annual Day" },
        { date: "May 15", event: "Summer Vacation Begins" },
    ];

    return (
        <>
            {/* Upcoming Events Section */}
            <section className="bg-light py-5 text-center">
                <div className="container" data-aos="fade-up">
                    <h2 className="mb-4 text-primary">Upcoming Events</h2>
                    <div className="row g-4">
                        {/* Mapping through the events list and rendering them */}
                        {events.map((e, i) => (
                            <div key={i} className="col-12 col-md-4" data-aos="fade-up" data-aos-delay={i * 150}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        {/* Event Date */}
                                        <h5 className="card-title fw-bold">{e.date}</h5>
                                        {/* Event Title */}
                                        <p className="card-text">{e.event}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default UpcomingEvents;
