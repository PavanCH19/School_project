import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const stats = [
        { label: "Total Students", value: 458, icon: "bi-people-fill", bg: "primary" },
        { label: "Today's Attendance", value: 392, icon: "bi-person-check-fill", bg: "success" },
        { label: "Pending Fees", value: "₹1,25,000", icon: "bi-cash-coin", bg: "danger" },
    ];

    const events = [
        { name: "Annual Day", date: "April 28, 2025" },
        { name: "Math Exam", date: "May 2, 2025" },
        { name: "PTA Meeting", date: "May 5, 2025" },
    ];

    const notifications = [
        "New student admissions started.",
        "Fee reminder sent to 12 parents.",
        "Science exam marks uploaded.",
    ];

    const quickLinks = [
        { label: "Add Student", path: "/principal-dashboard/students/add", icon: "bi-person-plus-fill" },
        { label: "Send Notice", path: "/principal-dashboard/communication", icon: "bi-megaphone-fill" },
        { label: "Schedule Exam", path: "/principal-dashboard/exams-results", icon: "bi-calendar2-check-fill" },
        { label: "Collect Fees", path: "/principal-dashboard/fee-management", icon: "bi-currency-rupee" },
    ];

    return (
        <div className="container-fluid p-1">
            <h2 className="mb-4 fw-bold">Dashboard Overview</h2>

            {/* Quick Stats */}
            <div className="row mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className={`card text-white bg-${stat.bg} shadow`}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title">{stat.label}</h5>
                                    <h3 className="fw-bold">{stat.value}</h3>
                                </div>
                                <i className={`bi ${stat.icon} fs-1`}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Events and Notifications */}
            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <div className="card shadow">
                        <div className="card-header fw-semibold">
                            <i className="bi bi-calendar-event me-2"></i>Upcoming Events & Exams
                        </div>
                        <ul className="list-group list-group-flush">
                            {events.map((event, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between">
                                    <span>{event.name}</span>
                                    <span className="text-muted">{event.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="card shadow">
                        <div className="card-header fw-semibold">
                            <i className="bi bi-bell-fill me-2"></i>Notifications
                        </div>
                        <ul className="list-group list-group-flush">
                            {notifications.map((note, index) => (
                                <li key={index} className="list-group-item">{note}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="card shadow">
                <div className="card-header fw-semibold">
                    <i className="bi bi-lightning-fill me-2"></i>Quick Links
                </div>
                <div className="card-body">
                    <div className="row">
                        {quickLinks.map((link, index) => (
                            <div className="col-md-3 col-6 mb-3" key={index}>
                                <Link
                                    to={link.path}
                                    className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
                                >
                                    <i className={`bi ${link.icon}`}></i> {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
