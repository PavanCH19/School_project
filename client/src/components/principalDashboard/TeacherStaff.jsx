import React, { useState } from "react";
import { BiSearch, BiFilterAlt, BiExport } from "react-icons/bi";

// Enhanced sample data with more details
const staffData = [
    {
        id: 1,
        name: "John Doe",
        role: "Math Teacher",
        email: "john.doe@school.com",
        image: "https://via.placeholder.com/300",
        salary: "₹50,000",
        classes: ["Class 10-A", "Class 12-B"],
        subjects: ["Mathematics", "Physics"],
        experience: "10 years",
        qualification: "M.Sc, B.Ed",
        joinDate: "2020-03-15",
        mobile: "+91 98765 43210",
        status: "active"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Science Teacher",
        email: "jane.smith@school.com",
        image: "https://via.placeholder.com/300",
        salary: "₹45,000",
        classes: ["Class 9-A", "Class 11-B"],
        subjects: ["Biology", "Chemistry"],
        experience: "8 years",
        qualification: "M.Sc, B.Ed",
        joinDate: "2021-06-20",
        mobile: "+91 98765 43211",
        status: "active"
    },
    {
        id: 3,
        name: "David Johnson",
        role: "English Teacher",
        email: "david.j@school.com",
        image: "https://via.placeholder.com/300",
        salary: "₹48,000",
        classes: ["Class 10-B", "Class 11-A"],
        subjects: ["English Literature", "Grammar"],
        experience: "12 years",
        qualification: "M.A, B.Ed",
        joinDate: "2019-07-10",
        mobile: "+91 98765 43212",
        status: "on-leave"
    },
    {
        id: 4,
        name: "Sarah Wilson",
        role: "Computer Science",
        email: "sarah.w@school.com",
        image: "https://via.placeholder.com/300",
        salary: "₹52,000",
        classes: ["Class 11-A", "Class 12-A"],
        subjects: ["Computer Science", "Programming"],
        experience: "6 years",
        qualification: "M.Tech, B.Ed",
        joinDate: "2022-01-15",
        mobile: "+91 98765 43213",
        status: "active"
    }
];

const TeacherStaffDetails = () => {
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");

    // Get unique roles for filter
    const roles = ["all", ...new Set(staffData.map(staff => staff.role))];
    const statuses = ["all", "active", "on-leave"];

    // Filter and search staff
    const filteredStaff = staffData.filter(staff => {
        const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.role.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === "all" || staff.role === filterRole;
        const matchesStatus = filterStatus === "all" || staff.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const handleExportData = () => {
        // Implementation for exporting data
        console.log("Exporting data...");
    };

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Teacher & Staff Management</h2>
                    <p className="text-muted mb-0">Manage and view all teaching and non-teaching staff details</p>
                </div>
                <button 
                    className="btn btn-primary d-flex align-items-center gap-2"
                    onClick={handleExportData}
                >
                    <BiExport /> Export Data
                </button>
            </div>

            {/* Filters and Search */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <BiSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name, email, or role..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                            >
                                {roles.map(role => (
                                    <option key={role} value={role}>
                                        {role === "all" ? "All Roles" : role}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                {statuses.map(status => (
                                    <option key={status} value={status}>
                                        {status === "all" ? "All Statuses" : status.charAt(0).toUpperCase() + status.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Staff Cards */}
            <div className="row g-4">
                {filteredStaff.map((staff) => (
                    <div key={staff.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm hover-shadow">
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <img
                                        src={staff.image}
                                        alt={staff.name}
                                        className="rounded-circle mb-2"
                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                    />
                                    <h5 className="mb-0">{staff.name}</h5>
                                    <p className="text-muted small mb-2">{staff.role}</p>
                                    <span className={`badge bg-${staff.status === 'active' ? 'success' : 'warning'}`}>
                                        {staff.status === 'active' ? 'Active' : 'On Leave'}
                                    </span>
                                </div>
                                
                                <div className="border-top pt-3">
                                    <div className="mb-2">
                                        <small className="text-muted">Email:</small>
                                        <div className="text-truncate">{staff.email}</div>
                                    </div>
                                    <div className="mb-2">
                                        <small className="text-muted">Mobile:</small>
                                        <div>{staff.mobile}</div>
                                    </div>
                                    <div className="mb-2">
                                        <small className="text-muted">Classes:</small>
                                        <div>{staff.classes.join(", ")}</div>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-outline-primary w-100 mt-3"
                                    onClick={() => setSelectedStaff(staff)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Staff Details Modal */}
            {selectedStaff && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header">
                                <h5 className="modal-title">Staff Details</h5>
                                <button className="btn-close" onClick={() => setSelectedStaff(null)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img
                                            src={selectedStaff.image}
                                            alt={selectedStaff.name}
                                            className="rounded-circle mb-3"
                                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                        />
                                        <h4>{selectedStaff.name}</h4>
                                        <p className="text-muted mb-0">{selectedStaff.role}</p>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="text-muted small">Email</label>
                                                <p className="mb-2">{selectedStaff.email}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-muted small">Mobile</label>
                                                <p className="mb-2">{selectedStaff.mobile}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-muted small">Qualification</label>
                                                <p className="mb-2">{selectedStaff.qualification}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-muted small">Experience</label>
                                                <p className="mb-2">{selectedStaff.experience}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-muted small">Joining Date</label>
                                                <p className="mb-2">{selectedStaff.joinDate}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-muted small">Salary</label>
                                                <p className="mb-2">{selectedStaff.salary}</p>
                                            </div>
                                            <div className="col-12">
                                                <label className="text-muted small">Subjects</label>
                                                <p className="mb-2">{selectedStaff.subjects.join(", ")}</p>
                                            </div>
                                            <div className="col-12">
                                                <label className="text-muted small">Classes</label>
                                                <p className="mb-2">{selectedStaff.classes.join(", ")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setSelectedStaff(null)}>Close</button>
                                <button className="btn btn-primary">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom CSS */}
            <style>
                {`
                    .hover-shadow {
                        transition: all 0.3s ease;
                    }
                    .hover-shadow:hover {
                        transform: translateY(-5px);
                    }
                    .modal {
                        backdrop-filter: blur(5px);
                    }
                `}
            </style>
        </div>
    );
};

export default TeacherStaffDetails;
