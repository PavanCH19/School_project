const FAQs = () => {
    return (
        <>
            <section className="container my-5" data-aos="fade-up">
                <h2 className="mb-4 text-primary text-center">Frequently Asked Questions (FAQs)</h2>
                <div className="accordion" id="faqAccordion">
                    {[
                        {
                            q: "What is the age limit for admission?",
                            a: "The minimum age for LKG admission is 4 years.",
                        },
                        {
                            q: "Is transport (bus) facility available?",
                            a: "Yes, we provide a safe and reliable school bus service.",
                        },
                        {
                            q: "Is hostel facility available?",
                            a: "Currently, we do not provide hostel facilities.",
                        },
                        {
                            q: "How can parents track their child's progress?",
                            a: "Regular parent-teacher meetings and the parent portal provide updates.",
                        },
                    ].map((faq, i) => (
                        <div className="accordion-item" key={i}>
                            <h2 className="accordion-header" id={`heading${i}`}>
                                <button
                                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${i}`}
                                    aria-expanded={i === 0}
                                    aria-controls={`collapse${i}`}
                                >
                                    <strong>{faq.q}</strong>
                                </button>
                            </h2>
                            <div
                                id={`collapse${i}`}
                                className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${i}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">{faq.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQs;
