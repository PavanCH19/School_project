const Header = () => {
    return (
        <div className="bg-primary text-white py-4 px-5 d-flex align-items-center justify-content-between flex-wrap shadow-lg" style={{ zIndex: 1 }}>
            <div className="d-flex align-items-center">
                <img
                    src="images/rbg_logo.png"
                    alt="School Logo"
                    style={{
                        height: "60px",
                        marginRight: "20px",
                        backgroundColor: "white",
                        padding: "5px",
                        borderRadius: "8px"
                    }}
                />
                {/* Titles stacked vertically */}
                <div className="d-flex flex-column">
                    <h3 className="mb-0 fw-bold">J.P. Kannada Medium Convent School</h3>
                    <h5 className="mb-0 fw-bold" style={{ marginLeft: '0px' }}>
                        Sri Chikkabasavara Samaja Seva Samsthe, Chikkabasur
                    </h5>
                </div>
            </div>
            <div className="mt-2 mt-lg-0 text-lg-end">
                <p className="mb-0 fw-light fs-5">
                    <strong>"Education that empowers everyone"</strong>
                </p>
            </div>
        </div>
    );
}

export default Header;
