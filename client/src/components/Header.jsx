const Header = () => {
    return (
        <div className="bg-primary text-white py-2" style={{ zIndex: 1 }}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center">
                        <img
                            src="images/rbg_logo.png"
                            alt="School Logo"
                            style={{
                                height: "50px",
                                marginRight: "15px",
                                backgroundColor: "white",
                                padding: "4px",
                                borderRadius: "6px"
                            }}
                        />
                        {/* Titles stacked vertically */}
                        <div className="d-flex flex-column">
                            <h4 className="mb-0 fw-bold">J.P. Kannada Medium Convent School</h4>
                            <h6 className="mb-0 text-light">
                                Sri Chikkabasavara Samaja Seva Samsthe, Chikkabasur
                            </h6>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <p className="mb-0 fw-light">
                            <em className="fs-6">"Education that empowers everyone"</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
