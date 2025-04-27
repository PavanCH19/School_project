const Location = () => {
    return (<>
        <section className="container my-5 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-primary">Our Location</h2>
            <div className="ratio ratio-16x9">
                <iframe
                    title="School Location"
                    src="https://www.google.com/maps/embed?...YOUR-LOCATION..."
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    </>)
}

export default Location;