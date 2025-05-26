import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg sticky-top py-3">
                <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src="images/rbg_logo.png"
                            alt="School Logo"
                            className="school-logo"
                        />
                        <span className="school-name text-primary">J.P. Kannada Medium Convent School</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-dark px-3 py-2 rounded hover-custom" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark px-3 py-2 rounded hover-custom" to="/admissions">Admissions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark px-3 py-2 rounded hover-custom" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark px-3 py-2 rounded hover-custom" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark px-3 py-2 rounded hover-custom" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark px-3 py-2 rounded hover-custom" to="/princi_dashboard/dashboard">P_Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Custom CSS */}
            <style>
                {`
                    .school-logo {
                        height: 50px;
                        margin-right: 10px;
                        margin-left: 20px;
                        border-radius: 50%; /* Makes it ellipse/circular */
                        object-fit: cover;
                        transition: all 0.3s ease;
                    }

                    @media (max-width: 992px) {
                        .school-logo {
                            height: 45px;
                        }
                    }

                    @media (max-width: 768px) {
                        .school-logo {
                            height: 40px;
                            margin-left: 10px;
                        }
                    }

                    @media (max-width: 576px) {
                        .school-logo {
                            height: 35px;
                            margin-left: 5px;
                        }
                    }

                    .school-name {
                        font-size: 1.5rem;
                        font-weight: bold;
                        white-space: nowrap;
                    }

                    @media (max-width: 992px) {
                        .school-name {
                            font-size: 1.2rem;
                        }
                    }

                    @media (max-width: 768px) {
                        .school-name {
                            font-size: 1rem;
                            white-space: normal;
                        }
                    }

                    @media (max-width: 576px) {
                        .school-name {
                            font-size: 0.9rem;
                            display: block;
                        }
                    }

                    .navbar-brand {
                        text-transform: uppercase;
                        display: flex;
                        align-items: center;
                    }

                    .navbar-nav .nav-item .nav-link {
                        font-size: 1.1rem;
                        font-weight: 500;
                    }

                    .nav-link {
                        transition: all 0.3s ease;
                    }

                    .nav-link:hover,
                    .nav-link:focus {
                        background-color: #007bff;
                        color: white;
                        border-radius: 25px;
                    }

                    .navbar-toggler-icon {
                        background-color: #007bff;
                    }

                    .navbar-nav .nav-item .nav-link:hover {
                        background-color: #f1f1f1;
                    }
                        /* Default styles (for larger screens) */
.navbar-toggler {
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
    border: none;
    outline: none;
}

.navbar-toggler-icon {
    width: 25px;
    height: 25px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280, 123, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

/* Responsive adjustment for small screens */
@media (max-width: 576px) {
    .navbar-toggler {
        padding: 0.3rem 0.5rem;
        font-size: 1rem;
    }

    .navbar-toggler-icon {
        width: 20px;
        height: 20px;
    }
}
.navbar-toggler:hover .navbar-toggler-icon {
    filter: brightness(0.8);
}

                `}
            </style>
        </>
    );
};

export default NavBar;
