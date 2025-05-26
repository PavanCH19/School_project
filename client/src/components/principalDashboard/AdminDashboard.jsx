import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AdminDashboard = () => {
    const [greeting, setGreeting] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 17) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        { label: "Total Students", value: 458, icon: "bi-people-fill", bg: "primary", trend: "+5%" },
        { label: "Today's Attendance", value: "92%", icon: "bi-person-check-fill", bg: "success", trend: "+2%" },
        { label: "Pending Fees", value: "₹1,25,000", icon: "bi-cash-coin", bg: "danger", trend: "-10%" },
        { label: "Total Teachers", value: 45, icon: "bi-person-workspace", bg: "info", trend: "+0%" }
    ];

    const events = [
        { name: "Annual Day", date: "April 28, 2025", type: "Cultural" },
        { name: "Math Olympiad", date: "May 2, 2025", type: "Academic" },
        { name: "PTA Meeting", date: "May 5, 2025", type: "Meeting" },
        { name: "Sports Day", date: "May 10, 2025", type: "Sports" }
    ];

    const notifications = [
        { message: "New student admissions started", time: "2 hours ago", type: "info" },
        { message: "Fee reminder sent to 12 parents", time: "3 hours ago", type: "warning" },
        { message: "Science exam marks uploaded", time: "5 hours ago", type: "success" },
        { message: "Emergency staff meeting at 4 PM", time: "Just now", type: "danger" }
    ];

    const quickLinks = [
        { label: "Add Student", path: "/princi_dashboard/students/add", icon: "bi-person-plus-fill" },
        { label: "Send Notice", path: "/princi_dashboard/communication", icon: "bi-megaphone-fill" },
        { label: "Schedule Exam", path: "/princi_dashboard/exams-results", icon: "bi-calendar2-check-fill" },
        { label: "Collect Fees", path: "/princi_dashboard/fee-management", icon: "bi-currency-rupee" }
    ];

    // Attendance trend data
    const attendanceData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Weekly Attendance %',
            data: [92, 88, 95, 89, 93, 91],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
        }]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly Attendance Trend'
            }
        },
        scales: {
            y: {
                min: 80,
                max: 100
            }
        }
    };

    return (
        <div className="container-fluid p-4">
            {/* Welcome Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="mb-0">{greeting}, Principal!</h2>
                                    <p className="mb-0 opacity-75">Welcome to your dashboard</p>
                                </div>
                                <div className="text-end">
                                    <h3 className="mb-0">{currentTime}</h3>
                                    <p className="mb-0 opacity-75">{new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="row mb-4">
                {stats.map((stat, index) => (
                    <div className="col-md-3 col-sm-6 mb-3" key={index}>
                        <div className={`card bg-${stat.bg} text-white h-100 hover-shadow`}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h6 className="card-title mb-2">{stat.label}</h6>
                                        <h3 className="mb-0">{stat.value}</h3>
                                        <small className={`${stat.trend.includes('+') ? 'text-success' : 'text-danger'}`}>
                                            {stat.trend} from last month
                                        </small>
                                    </div>
                                    <i className={`bi ${stat.icon} fs-1 opacity-75`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart and Events */}
            <div className="row mb-4">
                <div className="col-lg-8 mb-3">
                    <div className="card shadow h-100">
                        <div className="card-header bg-white">
                            <h5 className="mb-0">Attendance Analytics</h5>
                        </div>
                        <div className="card-body">
                            <Line options={chartOptions} data={attendanceData} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="card shadow h-100">
                        <div className="card-header bg-white d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">
                                <i className="bi bi-calendar-event me-2"></i>Upcoming Events
                            </h5>
                            <Link to="/princi_dashboard/events-calendar" className="btn btn-sm btn-outline-primary">View All</Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="list-group list-group-flush">
                                {events.map((event, index) => (
                                    <div key={index} className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-1">{event.name}</h6>
                                                <small className="text-muted">{event.date}</small>
                                            </div>
                                            <span className="badge bg-info rounded-pill">{event.type}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications and Quick Links */}
            <div className="row">
                <div className="col-lg-8 mb-3">
                    <div className="card shadow">
                        <div className="card-header bg-white">
                            <h5 className="mb-0">
                                <i className="bi bi-bell-fill me-2"></i>Recent Notifications
                            </h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="list-group list-group-flush">
                                {notifications.map((note, index) => (
                                    <div key={index} className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-1">{note.message}</p>
                                                <small className="text-muted">{note.time}</small>
                                            </div>
                                            <span className={`badge bg-${note.type}`}>
                                                <i className={`bi bi-${note.type === 'info' ? 'info-circle' : 
                                                    note.type === 'warning' ? 'exclamation-triangle' : 
                                                    note.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="card shadow">
                        <div className="card-header bg-white">
                            <h5 className="mb-0">
                                <i className="bi bi-lightning-fill me-2"></i>Quick Actions
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                {quickLinks.map((link, index) => (
                                    <div className="col-6" key={index}>
                                        <Link
                                            to={link.path}
                                            className="btn btn-light border w-100 h-100 d-flex flex-column align-items-center justify-content-center p-3 hover-primary"
                                        >
                                            <i className={`bi ${link.icon} fs-4 mb-2`}></i>
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style>
                {`
                    .hover-shadow:hover {
                        transform: translateY(-5px);
                        transition: transform 0.3s ease;
                    }
                    .hover-primary:hover {
                        background-color: var(--bs-primary);
                        color: white;
                        transition: all 0.3s ease;
                    }
                `}
            </style>
        </div>
    );
};

export default AdminDashboard;
