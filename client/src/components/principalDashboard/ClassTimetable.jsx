import React, { useState } from 'react';
import { BiCalendarEdit, BiDownload, BiPlus, BiEdit, BiTrash } from 'react-icons/bi';

const ClassTimetable = () => {
    const [selectedClass, setSelectedClass] = useState('10-A');
    const [selectedDay, setSelectedDay] = useState('Monday');

    // Sample timetable data
    const classes = ['10-A', '10-B', '11-A', '11-B', '12-A', '12-B'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const periods = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

    const timetableData = {
        '10-A': {
            Monday: [
                { subject: 'Mathematics', teacher: 'Mr. John Doe', time: '8:00 - 8:45', room: '101' },
                { subject: 'Physics', teacher: 'Mrs. Sarah Wilson', time: '8:45 - 9:30', room: '102' },
                { subject: 'Chemistry', teacher: 'Mr. Robert Brown', time: '9:45 - 10:30', room: '103' },
                { subject: 'English', teacher: 'Ms. Emily Clark', time: '10:30 - 11:15', room: '104' },
                { subject: 'Computer Science', teacher: 'Mr. David Lee', time: '11:30 - 12:15', room: '105' },
                { subject: 'Physical Education', teacher: 'Mr. Mike Johnson', time: '12:15 - 1:00', room: 'Ground' },
                { subject: 'History', teacher: 'Mrs. Patricia White', time: '2:00 - 2:45', room: '106' },
                { subject: 'Geography', teacher: 'Mr. Thomas Anderson', time: '2:45 - 3:30', room: '107' }
            ],
            // Add other days similarly
        }
    };

    const handleEditPeriod = (period) => {
        // Implementation for editing period
        console.log('Editing period:', period);
    };

    const handleDeletePeriod = (period) => {
        // Implementation for deleting period
        console.log('Deleting period:', period);
    };

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Class Timetable</h2>
                    <p className="text-muted mb-0">Manage and view class schedules</p>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                        <BiDownload /> Export Timetable
                    </button>
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <BiPlus /> Create New Schedule
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Select Class</label>
                            <select 
                                className="form-select"
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                            >
                                {classes.map(cls => (
                                    <option key={cls} value={cls}>Class {cls}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Select Day</label>
                            <select
                                className="form-select"
                                value={selectedDay}
                                onChange={(e) => setSelectedDay(e.target.value)}
                            >
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timetable */}
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">
                            <BiCalendarEdit className="me-2" />
                            Class {selectedClass} - {selectedDay} Schedule
                        </h5>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th>Period</th>
                                    <th>Time</th>
                                    <th>Subject</th>
                                    <th>Teacher</th>
                                    <th>Room</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetableData[selectedClass]?.[selectedDay]?.map((period, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className="badge bg-primary">{periods[index]}</span>
                                        </td>
                                        <td>{period.time}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="subject-color me-2" style={{
                                                    width: '10px',
                                                    height: '10px',
                                                    borderRadius: '50%',
                                                    backgroundColor: `hsl(${index * 45}, 70%, 50%)`
                                                }}></div>
                                                {period.subject}
                                            </div>
                                        </td>
                                        <td>{period.teacher}</td>
                                        <td>
                                            <span className="badge bg-light text-dark">
                                                Room {period.room}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <button 
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => handleEditPeriod(period)}
                                                >
                                                    <BiEdit />
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDeletePeriod(period)}
                                                >
                                                    <BiTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="card border-0 shadow-sm mt-4">
                <div className="card-body">
                    <h6 className="mb-3">Subject Color Codes</h6>
                    <div className="row g-3">
                        {timetableData[selectedClass]?.[selectedDay]?.map((period, index) => (
                            <div key={index} className="col-md-3 col-6">
                                <div className="d-flex align-items-center">
                                    <div className="subject-color me-2" style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: `hsl(${index * 45}, 70%, 50%)`
                                    }}></div>
                                    <small>{period.subject}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style>
                {`
                    .card {
                        transition: all 0.3s ease;
                    }
                    .table > :not(caption) > * > * {
                        padding: 1rem 0.75rem;
                    }
                    .badge {
                        font-weight: 500;
                    }
                    .subject-color {
                        box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
                    }
                `}
            </style>
        </div>
    );
};

export default ClassTimetable;
