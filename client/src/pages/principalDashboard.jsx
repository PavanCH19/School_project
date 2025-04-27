import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";
import Sidebar from "../components/principalDashboard/Sidebar";
import { useState, useEffect } from "react";

const PrincipalDashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(60);

    useEffect(() => {
        const header = document.getElementById("header");
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (
        <>
            <Header id="header" />

            <div
                className="d-flex flex-row"
                style={{
                    height: `calc(100vh - ${headerHeight}px)`,
                    overflow: "hidden",
                }}
            >
                {/* Sidebar for medium and above screens */}
                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

                {/* Responsive content area */}
                <div
                    className="flex-grow-1 p-2"
                    style={{
                        overflowY: "auto",
                        width: "100%",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PrincipalDashboard;
