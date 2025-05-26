import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
    BiSolidDashboard, BiUser, BiUserCircle, BiCalendarCheck, BiDollarCircle,
    BiFile, BiTable, BiChat, BiCalendar, BiBus, BiBook, BiHome, BiBarChart, BiCog,
    BiChevronLeft, BiChevronRight, BiLogOut
} from "react-icons/bi";

const MIN_SIDEBAR_WIDTH = 60;
const MAX_SIDEBAR_WIDTH = 400;
const DEFAULT_WIDTH = 280;

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const location = useLocation();
    const [hoveredGroup, setHoveredGroup] = useState(null);
    const [isResizing, setIsResizing] = useState(false);
    const [width, setWidth] = useState(isCollapsed ? MIN_SIDEBAR_WIDTH : DEFAULT_WIDTH);
    const sidebarRef = useRef(null);
    const resizeRef = useRef({
        startX: 0,
        startWidth: 0,
        isResizing: false
    });

    // Update width when collapse state changes
    useEffect(() => {
        setWidth(isCollapsed ? MIN_SIDEBAR_WIDTH : DEFAULT_WIDTH);
    }, [isCollapsed]);

    const startResizing = (e) => {
        e.preventDefault();
        resizeRef.current = {
            startX: e.pageX,
            startWidth: width,
            isResizing: true
        };
        setIsResizing(true);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', stopResizing);
        document.body.style.cursor = 'ew-resize';
        document.body.style.userSelect = 'none';
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        if (!resizeRef.current.isResizing) return;

        const delta = e.pageX - resizeRef.current.startX;
        const newWidth = Math.max(
            MIN_SIDEBAR_WIDTH,
            Math.min(MAX_SIDEBAR_WIDTH, resizeRef.current.startWidth + delta)
        );

        setWidth(newWidth);
        if (newWidth <= MIN_SIDEBAR_WIDTH + 20) {
            setIsCollapsed(true);
        } else if (isCollapsed) {
            setIsCollapsed(false);
        }
    };

    const stopResizing = () => {
        resizeRef.current.isResizing = false;
        setIsResizing(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', stopResizing);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    };

    const handleToggle = () => {
        const newCollapsed = !isCollapsed;
        setIsCollapsed(newCollapsed);
        setWidth(newCollapsed ? MIN_SIDEBAR_WIDTH : DEFAULT_WIDTH);
    };

    const menuGroups = [
        {
            title: "Main",
            items: [
                { label: "Dashboard", icon: <BiSolidDashboard />, path: "dashboard" },
                { label: "Students", icon: <BiUser />, path: "students" },
                { label: "Teachers & Staff", icon: <BiUserCircle />, path: "teachers" },
            ]
        },
        {
            title: "Academic",
            items: [
                { label: "Attendance", icon: <BiCalendarCheck />, path: "attendance" },
                { label: "Exams & Results", icon: <BiFile />, path: "exams-results" },
                { label: "Timetable", icon: <BiTable />, path: "timetable" },
            ]
        },
        {
            title: "Administration",
            items: [
                { label: "Fee Management", icon: <BiDollarCircle />, path: "fee-management" },
                { label: "Events & Calendar", icon: <BiCalendar />, path: "events-calendar" },
                { label: "Transport", icon: <BiBus />, path: "transport" },
            ]
        },
        {
            title: "Facilities",
            items: [
                { label: "Library", icon: <BiBook />, path: "library" },
                { label: "Hostel", icon: <BiHome />, path: "hostel" },
            ]
        },
        {
            title: "System",
            items: [
                { label: "Reports", icon: <BiBarChart />, path: "reports" },
                { label: "Settings", icon: <BiCog />, path: "admin-settings" },
            ]
        }
    ];

    const isActive = (path) => {
        return location.pathname.includes(`/princi_dashboard/${path}`);
    };

    return (
        <div
            ref={sidebarRef}
            className="sidebar bg-white shadow-lg d-flex flex-column h-100"
            style={{ 
                width: `${width}px`,
                transition: isResizing ? 'none' : 'width 0.3s ease'
            }}
        >
            {/* Resize Handle */}
            <div
                className="resize-handle"
                onMouseDown={startResizing}
            />

            {/* School Logo and Name */}
            <div className="sidebar-header p-3 border-bottom">
                <div className="d-flex align-items-center">
                    <img
                        src="/images/rbg_logo.png"
                        alt="School Logo"
                        className="sidebar-logo me-2"
                    />
                    <div 
                        className="school-info"
                        style={{ 
                            opacity: width <= MIN_SIDEBAR_WIDTH ? 0 : 1,
                            transition: isResizing ? 'none' : 'opacity 0.3s ease'
                        }}
                    >
                        <h6 className="mb-0 fw-bold text-primary">J.P. School</h6>
                        <small className="text-muted">Admin Panel</small>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                type="button"
                className="sidebar-toggle"
                onClick={handleToggle}
            >
                {isCollapsed ? <BiChevronRight /> : <BiChevronLeft />}
            </button>

            {/* Menu Groups */}
            <div className="sidebar-menu flex-grow-1 overflow-auto">
                {menuGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="menu-group mb-2"
                        onMouseEnter={() => setHoveredGroup(group.title)}
                        onMouseLeave={() => setHoveredGroup(null)}
                    >
                        {width > MIN_SIDEBAR_WIDTH && (
                            <div 
                                className="menu-title px-3 py-2"
                                style={{
                                    opacity: width <= MIN_SIDEBAR_WIDTH ? 0 : 1,
                                    transition: isResizing ? 'none' : 'opacity 0.3s ease'
                                }}
                            >
                                <small className="text-uppercase fw-bold text-muted">
                                    {group.title}
                                </small>
                            </div>
                        )}
                        {group.items.map((item, itemIndex) => (
                            <Link
                                key={itemIndex}
                                to={item.path}
                                className={`menu-item px-3 py-2 d-flex align-items-center text-decoration-none ${
                                    isActive(item.path) ? 'active' : ''
                                }`}
                            >
                                <span className="menu-icon">{item.icon}</span>
                                <span 
                                    className="menu-label ms-2"
                                    style={{ 
                                        opacity: width <= MIN_SIDEBAR_WIDTH ? 0 : 1,
                                        transition: isResizing ? 'none' : 'opacity 0.3s ease'
                                    }}
                                >
                                    {item.label}
                                </span>
                                {width <= MIN_SIDEBAR_WIDTH && hoveredGroup === group.title && (
                                    <div className="menu-tooltip">{item.label}</div>
                                )}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            {/* Logout Button */}
            <div className="sidebar-footer border-top p-3">
                <Link
                    to="/login"
                    className="menu-item d-flex align-items-center text-decoration-none text-danger"
                >
                    <span className="menu-icon"><BiLogOut /></span>
                    <span 
                        className="menu-label ms-2"
                        style={{ 
                            opacity: width <= MIN_SIDEBAR_WIDTH ? 0 : 1,
                            transition: isResizing ? 'none' : 'opacity 0.3s ease'
                        }}
                    >
                        Logout
                    </span>
                </Link>
            </div>

            {/* Custom CSS */}
            <style>
                {`
                    .sidebar {
                        min-height: 100%;
                        position: relative;
                        z-index: 1000;
                    }

                    .resize-handle {
                        position: absolute;
                        right: -4px;
                        top: 0;
                        bottom: 0;
                        width: 8px;
                        cursor: ew-resize;
                        background: transparent;
                        transition: background 0.2s, opacity 0.2s;
                        z-index: 1001;
                    }

                    .resize-handle:hover {
                        background: rgba(var(--bs-primary-rgb), 0.2);
                    }

                    .resize-handle:active {
                        background: rgba(var(--bs-primary-rgb), 0.4);
                    }

                    .sidebar-logo {
                        width: 35px;
                        height: 35px;
                        object-fit: cover;
                        border-radius: 8px;
                    }

                    .sidebar-toggle {
                        position: absolute;
                        top: 70px;
                        right: -12px;
                        width: 24px;
                        height: 24px;
                        background: var(--bs-primary);
                        border: none;
                        border-radius: 50%;
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: transform 0.2s ease;
                        z-index: 1002;
                        padding: 0;
                        outline: none;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }

                    .sidebar-toggle:hover {
                        transform: scale(1.1);
                    }

                    .sidebar-toggle:active {
                        transform: scale(0.95);
                    }

                    .menu-group {
                        position: relative;
                    }

                    .menu-title {
                        font-size: 0.75rem;
                        letter-spacing: 0.5px;
                    }

                    .menu-item {
                        color: #6c757d;
                        position: relative;
                        white-space: nowrap;
                        transition: all 0.3s ease;
                        border-radius: 4px;
                        margin: 2px 8px;
                    }

                    .menu-item:hover {
                        color: var(--bs-primary);
                        background: rgba(var(--bs-primary-rgb), 0.1);
                    }

                    .menu-item.active {
                        color: var(--bs-primary);
                        background: rgba(var(--bs-primary-rgb), 0.1);
                        border-right: 3px solid var(--bs-primary);
                    }

                    .menu-icon {
                        font-size: 1.2rem;
                        min-width: 25px;
                        display: flex;
                        align-items: center;
                    }

                    .menu-tooltip {
                        position: absolute;
                        left: 100%;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(0, 0, 0, 0.8);
                        color: white;
                        padding: 5px 10px;
                        border-radius: 4px;
                        font-size: 0.8rem;
                        white-space: nowrap;
                        margin-left: 10px;
                        pointer-events: none;
                        z-index: 1000;
                    }

                    .menu-tooltip::before {
                        content: '';
                        position: absolute;
                        left: -5px;
                        top: 50%;
                        transform: translateY(-50%);
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent rgba(0, 0, 0, 0.8) transparent transparent;
                    }

                    .sidebar-menu {
                        scrollbar-width: thin;
                        scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
                    }

                    .sidebar-menu::-webkit-scrollbar {
                        width: 5px;
                    }

                    .sidebar-menu::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    .sidebar-menu::-webkit-scrollbar-thumb {
                        background-color: rgba(0, 0, 0, 0.2);
                        border-radius: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default Sidebar;
