import { Link } from "react-router-dom";
import {
    BiSolidDashboard, BiUser, BiUserCircle, BiCalendarCheck, BiDollarCircle,
    BiFile, BiTable, BiChat, BiCalendar, BiBus, BiBook, BiHome, BiBarChart, BiCog,
} from "react-icons/bi";

const StudentSidebar = ({ isCollapsed, setIsCollapsed }) => {
    const menuItems = [
        { label: "Dashboard", icon: <BiSolidDashboard />, path: "dashboard" },
        { label: "Students", icon: <BiUser />, path: "students" },
        { label: "Teachers & Staff", icon: <BiUserCircle />, path: "teachers" },
        { label: "Attendance", icon: <BiCalendarCheck />, path: "attendance" },
        { label: "Fee Management", icon: <BiDollarCircle />, path: "fee-management" },
        { label: "Exams & Results", icon: <BiFile />, path: "exams-results" },
        { label: "Timetable", icon: <BiTable />, path: "timetable" },
        { label: "Events & Calendar", icon: <BiCalendar />, path: "events-calendar" },
        { label: "Transport", icon: <BiBus />, path: "transport" },
        { label: "Library", icon: <BiBook />, path: "library" },
        { label: "Hostel", icon: <BiHome />, path: "hostel" },
        { label: "Reports", icon: <BiBarChart />, path: "reports" },
        { label: "Admin Settings", icon: <BiCog />, path: "admin-settings" },
    ];

    return (
        <>
            <div
                className="bg-primary text-white d-none d-md-block"
                style={{
                    width: isCollapsed ? "70px" : "250px",
                    transition: "width 0.3s ease",
                    overflowY: "auto",
                    height: "100%",
                    position: "relative",
                }}
                onMouseEnter={() => setIsCollapsed(false)}
                onMouseLeave={() => setIsCollapsed(true)}
            >
                <ul className="nav flex-column p-2">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <Link
                                to={`/princi_dashboard/${item.path}`}
                                className="nav-link text-white d-flex align-items-center"
                                style={{ padding: "10px 5px" }}
                            >
                                <span
                                    className="me-2"
                                    style={{
                                        fontSize: "1.6rem", // Set the icon size here
                                        transition: "font-size 0.3s ease",
                                    }}
                                >
                                    {item.icon}
                                </span>
                                {!isCollapsed && <span>{item.label}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style>
                {`
                    @media (max-width: 768px) {
                        .main-content {
                            padding: 1rem 0.5rem;
                        }

                        .nav-link {
                            font-size: 0.9rem !important;
                        }

                        .nav-item {
                            padding: 5px 0 !important;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default StudentSidebar;
