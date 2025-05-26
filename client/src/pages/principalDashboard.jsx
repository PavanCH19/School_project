import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/principalDashboard/SideBar";
import { useState, useEffect } from "react";

const PrincipalDashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1200);
    const [headerHeight, setHeaderHeight] = useState(60);

    useEffect(() => {
        const header = document.getElementById("header");
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }

        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            <div className="d-flex flex-grow-1 position-relative">
                {/* Sidebar */}
                <aside className={`sidebar-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
                    <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                </aside>

                {/* Main Content Area */}
                <main 
                    className="main-content flex-grow-1 bg-light"
                    style={{ 
                        height: `calc(100vh - ${headerHeight}px)`,
                        overflowY: "auto"
                    }}
                >
                    <Outlet />
                </main>
            </div>

            <Footer />

            {/* Custom CSS */}
            <style>
                {`
                    .sidebar-wrapper {
                        height: calc(100vh - ${headerHeight}px);
                        position: relative;
                    }

                    .main-content {
                        width: 100%;
                        transition: margin-left 0.3s ease;
                    }

                    @media (max-width: 768px) {
                        .sidebar-wrapper {
                            position: fixed;
                            left: 0;
                            z-index: 1030;
                            transform: translateX(0);
                            transition: transform 0.3s ease;
                        }

                        .sidebar-wrapper.collapsed {
                            transform: translateX(-100%);
                        }

                        .main-content {
                            margin-left: 0 !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default PrincipalDashboard;
