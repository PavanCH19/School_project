const CampusGallery = () => {
    return (<>
        <section className="container my-5 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-primary">Campus Gallery</h2>
            <div className="row g-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="col-6 col-md-4">
                        <img
                            src={`/gallery${n}.jpg`}
                            alt={`Gallery ${n}`}
                            className="img-fluid rounded shadow-sm"
                        />
                    </div>
                ))}
            </div>
        </section>
    </>)
}

export default CampusGallery;
