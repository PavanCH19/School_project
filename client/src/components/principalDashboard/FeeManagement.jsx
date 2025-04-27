import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FeeManagementDashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Class-wise fee details
    const classFees = [
        { className: 'Class 10', totalStudents: 50, feePerStudent: 1000, paid: 45000 },
        { className: 'Class 11', totalStudents: 45, feePerStudent: 1200, paid: 40000 },
        { className: 'Class 12', totalStudents: 48, feePerStudent: 1500, paid: 60000 },
    ];

    // Teacher salary details
    const teacherSalaries = [
        { name: 'John Doe', subject: 'Math', salary: 35000 },
        { name: 'Jane Smith', subject: 'Science', salary: 30000 },
        { name: 'David Johnson', subject: 'English', salary: 32000 },
    ];

    const totalCollected = classFees.reduce((acc, c) => acc + c.paid, 0);
    const totalExpected = classFees.reduce((acc, c) => acc + (c.totalStudents * c.feePerStudent), 0);
    const totalSalary = teacherSalaries.reduce((acc, t) => acc + t.salary, 0);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">💰 Fee & Salary Dashboard</h2>

            <div className="text-center mb-4">
                <strong>Select Date:</strong>{' '}
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="form-control d-inline-block w-auto"
                    dateFormat="yyyy-MM-dd"
                />
            </div>

            {/* Fee Summary */}
            <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">📊 Fee Summary</div>
                <div className="card-body">
                    <p><strong>Total Collected:</strong> ₹{totalCollected.toLocaleString()}</p>
                    <p><strong>Total Expected:</strong> ₹{totalExpected.toLocaleString()}</p>
                    <div className="progress" style={{ height: '20px' }}>
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${(totalCollected / totalExpected) * 100}%` }}
                            aria-valuenow={(totalCollected / totalExpected) * 100}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {(totalCollected / totalExpected * 100).toFixed(1)}%
                        </div>
                    </div>
                </div>
            </div>

            {/* Class Fee Table */}
            <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">📚 Class-wise Fee Details</div>
                <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Class</th>
                                <th>Total Students</th>
                                <th>Fee Per Student (₹)</th>
                                <th>Expected (₹)</th>
                                <th>Paid (₹)</th>
                                <th>Pending (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classFees.map((c, idx) => (
                                <tr key={idx}>
                                    <td>{c.className}</td>
                                    <td>{c.totalStudents}</td>
                                    <td>{c.feePerStudent}</td>
                                    <td>{c.totalStudents * c.feePerStudent}</td>
                                    <td>{c.paid}</td>
                                    <td>{(c.totalStudents * c.feePerStudent) - c.paid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Teacher Salary Table */}
            <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">👨‍🏫 Teacher Salary Details</div>
                <div className="card-body p-0">
                    <table className="table table-bordered mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Salary (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacherSalaries.map((t, idx) => (
                                <tr key={idx}>
                                    <td>{t.name}</td>
                                    <td>{t.subject}</td>
                                    <td>{t.salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-end p-3">
                        <strong>Total Salary to be Paid: ₹{totalSalary.toLocaleString()}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeManagementDashboard;
