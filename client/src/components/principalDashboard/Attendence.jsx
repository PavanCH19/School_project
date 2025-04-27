import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FullAttendanceDashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 🔹 Mock Data
    const classData = [
        { className: 'Class 10', boys: 30, girls: 25 },
        { className: 'Class 11', boys: 28, girls: 23 },
        { className: 'Class 12', boys: 32, girls: 29 },
    ];

    const teacherData = [
        { name: 'John Doe', subject: 'Math', present: true },
        { name: 'Jane Smith', subject: 'Science', present: false },
        { name: 'David Johnson', subject: 'Principal', present: true },
    ];

    const totalBoys = classData.reduce((acc, cls) => acc + cls.boys, 0);
    const totalGirls = classData.reduce((acc, cls) => acc + cls.girls, 0);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-3">Attendance Dashboard</h2>

            {/* 🔸 Date Picker */}
            <div className="text-center mb-4">
                <strong>Select Date:</strong>{' '}
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="form-control d-inline-block w-auto"
                    dateFormat="yyyy-MM-dd"
                />
            </div>

            {/* 🔸 Summary */}
            <div className="row text-center mb-4">
                <div className="col-md-6">
                    <div className="alert alert-info">
                        <strong>Boys Present:</strong> {totalBoys}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="alert alert-warning">
                        <strong>Girls Present:</strong> {totalGirls}
                    </div>
                </div>
            </div>

            {/* 🔸 Class-wise Student Attendance */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Student Attendance – {selectedDate.toDateString()}</strong>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Boys Present</th>
                                <th>Girls Present</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classData.map((cls, idx) => (
                                <tr key={idx}>
                                    <td>{cls.className}</td>
                                    <td>{cls.boys}</td>
                                    <td>{cls.girls}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 🔸 Teacher Attendance */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Teacher Attendance – {selectedDate.toDateString()}</strong>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacherData.map((teacher, idx) => (
                                <tr key={idx}>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.subject}</td>
                                    <td className={teacher.present ? 'text-success' : 'text-danger'}>
                                        {teacher.present ? 'Present' : 'Absent'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FullAttendanceDashboard;
