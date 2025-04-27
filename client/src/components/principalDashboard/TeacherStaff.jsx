import React, { useState } from "react";

// Sample data with more details
const staffData = [
    {
        name: "John Doe",
        role: "Math Teacher",
        email: "john.doe@school.com",
        image: "https://via.placeholder.com/300",
        salary: "$50,000",
        classes: "Class 10, Class 12",
        bio: "John is an experienced math teacher with over 10 years of experience. He is passionate about algebra and geometry.",
        mobile: "+123 456 7890",
    },
    {
        name: "Jane Smith",
        role: "Science Teacher",
        email: "jane.smith@school.com",
        image: "https://via.placeholder.com/300",
        salary: "$45,000",
        classes: "Class 9, Class 11",
        bio: "Jane specializes in Physics and Chemistry and has been teaching for 8 years. Her classes are known for interactive experiments.",
        mobile: "+123 456 7891",
    },
    {
        name: "David Johnson",
        role: "Principal",
        email: "david.johnson@school.com",
        image: "https://via.placeholder.com/300",
        salary: "$80,000",
        classes: "Administration",
        bio: "David has over 15 years of experience in school management and is committed to improving student and teacher satisfaction.",
        mobile: "+123 456 7892",
    },
];

const TeacherStaffDetails = () => {
    const [selectedStaff, setSelectedStaff] = useState(null);

    const handleRowClick = (staffMember) => {
        setSelectedStaff(staffMember);
    };

    const handleCloseDialog = () => {
        setSelectedStaff(null);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Teacher & Staff Details</h2>

            {/* Table with basic details */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Mobile No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffData.map((member, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick(member)}
                                style={{ cursor: "pointer" }}
                                className="table-row"
                            >
                                <td>{member.name}</td>
                                <td>{member.role}</td>
                                <td>{member.email}</td>
                                <td>{member.mobile}</td>
                                <td>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => handleRowClick(member)}
                                    >
                                        View Full Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Dialog Box for Full Details */}
            {selectedStaff && (
                <div
                    className="modal show"
                    style={{
                        display: "block",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: "1050",
                    }}
                >
                    <div
                        className="modal-dialog modal-lg"
                        style={{
                            position: "relative",
                            marginTop: "50px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            padding: "20px",
                        }}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedStaff.name}'s Full Details</h5>
                                <button className="btn-close" onClick={handleCloseDialog}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src={selectedStaff.image}
                                            alt={selectedStaff.name}
                                            className="img-fluid mb-3"
                                            style={{
                                                height: "250px",
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <h5>{selectedStaff.name}</h5>
                                        <p><strong>Role:</strong> {selectedStaff.role}</p>
                                        <p><strong>Email:</strong> {selectedStaff.email}</p>
                                        <p><strong>Salary:</strong> {selectedStaff.salary}</p>
                                        <p><strong>Classes:</strong> {selectedStaff.classes}</p>
                                        <p><strong>Bio:</strong> {selectedStaff.bio}</p>
                                        <p><strong>Mobile:</strong> {selectedStaff.mobile}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={handleCloseDialog}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeacherStaffDetails;
