import React, { useState } from 'react';
import { BiBus, BiMap, BiUser, BiTime, BiPlus, BiEdit, BiTrash } from 'react-icons/bi';

const Transport = () => {
    const [selectedRoute, setSelectedRoute] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample transport data
    const routes = [
        {
            id: 1,
            routeNumber: 'R001',
            area: 'North City',
            driver: 'Mr. Rajesh Kumar',
            vehicleNumber: 'KA01AB1234',
            capacity: 45,
            occupancy: 38,
            stops: [
                { name: 'City Center', time: '7:30 AM' },
                { name: 'Market Square', time: '7:45 AM' },
                { name: 'Garden Road', time: '8:00 AM' },
                { name: 'School', time: '8:15 AM' }
            ],
            status: 'active'
        },
        {
            id: 2,
            routeNumber: 'R002',
            area: 'South City',
            driver: 'Mr. Suresh Singh',
            vehicleNumber: 'KA01CD5678',
            capacity: 40,
            occupancy: 35,
            stops: [
                { name: 'South Mall', time: '7:15 AM' },
                { name: 'Park Avenue', time: '7:35 AM' },
                { name: 'Lake View', time: '7:50 AM' },
                { name: 'School', time: '8:15 AM' }
            ],
            status: 'active'
        },
        {
            id: 3,
            routeNumber: 'R003',
            area: 'East City',
            driver: 'Mr. Mahesh Patil',
            vehicleNumber: 'KA01EF9012',
            capacity: 42,
            occupancy: 30,
            stops: [
                { name: 'East Point', time: '7:20 AM' },
                { name: 'Railway Colony', time: '7:40 AM' },
                { name: 'Temple Road', time: '8:00 AM' },
                { name: 'School', time: '8:15 AM' }
            ],
            status: 'maintenance'
        }
    ];

    // Quick stats
    const stats = [
        {
            title: 'Total Routes',
            value: routes.length,
            icon: <BiMap />,
            color: 'primary'
        },
        {
            title: 'Total Vehicles',
            value: routes.length,
            icon: <BiBus />,
            color: 'success'
        },
        {
            title: 'Total Students',
            value: routes.reduce((acc, route) => acc + route.occupancy, 0),
            icon: <BiUser />,
            color: 'info'
        },
        {
            title: 'Active Routes',
            value: routes.filter(r => r.status === 'active').length,
            icon: <BiTime />,
            color: 'warning'
        }
    ];

    // Filter routes based on search and selected route
    const filteredRoutes = routes.filter(route => {
        const matchesSearch = 
            route.routeNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            route.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
            route.driver.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRoute = selectedRoute === 'all' || route.status === selectedRoute;
        return matchesSearch && matchesRoute;
    });

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Transport Management</h2>
                    <p className="text-muted mb-0">Manage school transport routes and vehicles</p>
                </div>
                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <BiPlus /> Add New Route
                </button>
            </div>

            {/* Quick Stats */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div key={index} className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className={`bg-${stat.color} bg-opacity-10 p-3 rounded`}>
                                        <span className={`text-${stat.color} fs-4`}>{stat.icon}</span>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-1">{stat.title}</h6>
                                        <h4 className="mb-0">{stat.value}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by route number, area, or driver..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <select
                                className="form-select"
                                value={selectedRoute}
                                onChange={(e) => setSelectedRoute(e.target.value)}
                            >
                                <option value="all">All Routes</option>
                                <option value="active">Active Routes</option>
                                <option value="maintenance">Under Maintenance</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Routes List */}
            <div className="row g-4">
                {filteredRoutes.map((route) => (
                    <div key={route.id} className="col-xl-4 col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title mb-0">Route {route.routeNumber}</h5>
                                    <span className={`badge bg-${route.status === 'active' ? 'success' : 'warning'}`}>
                                        {route.status === 'active' ? 'Active' : 'Maintenance'}
                                    </span>
                                </div>

                                <div className="mb-3">
                                    <p className="mb-1"><strong>Area:</strong> {route.area}</p>
                                    <p className="mb-1"><strong>Driver:</strong> {route.driver}</p>
                                    <p className="mb-1"><strong>Vehicle:</strong> {route.vehicleNumber}</p>
                                    <p className="mb-0">
                                        <strong>Capacity:</strong> {route.occupancy}/{route.capacity} students
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <h6 className="mb-2">Stops & Timings:</h6>
                                    <div className="route-stops">
                                        {route.stops.map((stop, index) => (
                                            <div key={index} className="d-flex align-items-center mb-2">
                                                <div className="route-stop-dot"></div>
                                                <div className="ms-2">
                                                    <small className="text-muted">{stop.time}</small>
                                                    <div>{stop.name}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="d-flex gap-2 mt-3">
                                    <button className="btn btn-outline-primary flex-grow-1">
                                        <BiEdit className="me-1" /> Edit
                                    </button>
                                    <button className="btn btn-outline-danger flex-grow-1">
                                        <BiTrash className="me-1" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom CSS */}
            <style>
                {`
                    .card {
                        transition: transform 0.2s ease;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                    }
                    .route-stops {
                        position: relative;
                        padding-left: 12px;
                    }
                    .route-stops::before {
                        content: '';
                        position: absolute;
                        left: 5px;
                        top: 10px;
                        bottom: 10px;
                        width: 2px;
                        background: #e9ecef;
                    }
                    .route-stop-dot {
                        width: 12px;
                        height: 12px;
                        background: var(--bs-primary);
                        border-radius: 50%;
                        position: relative;
                        z-index: 1;
                    }
                    .route-stop-dot:last-child {
                        background: var(--bs-success);
                    }
                `}
            </style>
        </div>
    );
};

export default Transport; 