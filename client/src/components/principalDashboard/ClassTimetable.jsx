import React from 'react';

const ClassPeriodTimetable = () => {
    // Timetable grouped by class and day of the week
    const periodTimetablesByClass = {
        'Class 10': {
            Monday: [
                { period: 1, subject: 'Mathematics' },
                { period: 2, subject: 'Science' },
            ],
            Tuesday: [
                { period: 1, subject: 'English' },
                { period: 2, subject: 'Social Studies' },
            ],
            Wednesday: [
                { period: 1, subject: 'Physical Education' },
                { period: 2, subject: 'Mathematics' },
            ],
            Thursday: [
                { period: 1, subject: 'Science' },
                { period: 2, subject: 'English' },
            ],
            Friday: [
                { period: 1, subject: 'Social Studies' },
                { period: 2, subject: 'Physical Education' },
            ],
        },
        'Class 11': {
            Monday: [
                { period: 1, subject: 'Physics' },
                { period: 2, subject: 'Chemistry' },
            ],
            Tuesday: [
                { period: 1, subject: 'Mathematics' },
                { period: 2, subject: 'Biology' },
            ],
            Wednesday: [
                { period: 1, subject: 'English' },
                { period: 2, subject: 'Chemistry' },
            ],
            Thursday: [
                { period: 1, subject: 'Physics' },
                { period: 2, subject: 'Mathematics' },
            ],
            Friday: [
                { period: 1, subject: 'Biology' },
                { period: 2, subject: 'English' },
            ],
        },
        'Class 12': {
            Monday: [
                { period: 1, subject: 'Biology' },
                { period: 2, subject: 'Chemistry' },
            ],
            Tuesday: [
                { period: 1, subject: 'Physics' },
                { period: 2, subject: 'Mathematics' },
            ],
            Wednesday: [
                { period: 1, subject: 'Biology' },
                { period: 2, subject: 'Chemistry' },
            ],
            Thursday: [
                { period: 1, subject: 'Physics' },
                { period: 2, subject: 'Mathematics' },
            ],
            Friday: [
                { period: 1, subject: 'Biology' },
                { period: 2, subject: 'Physical Education' },
            ],
        },
    };

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">📅 Class Period Timetable (Weekly)</h2>

            {/* Timetable grouped by class */}
            {Object.keys(periodTimetablesByClass).map((className) => (
                <div className="card shadow-sm mb-4" key={className}>
                    <div className="card-header fw-bold">🗓️ {className} Weekly Period Timetable</div>
                    <div className="card-body p-0">
                        <table className="table table-bordered mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Day</th>
                                    <th>9:00 AM - 10:00 AM</th>
                                    <th>10:00 AM - 11:00 AM</th>
                                    <th>11:00 AM - 12:00 PM</th>
                                    <th>12:00 PM - 1:00 PM</th>
                                    <th>1:00 PM - 2:00 PM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(periodTimetablesByClass[className]).map((day, idx) => (
                                    <tr key={idx}>
                                        <td>{day}</td>
                                        {periodTimetablesByClass[className][day].map((period, periodIdx) => (
                                            <td key={periodIdx}>
                                                {period.subject}
                                            </td>
                                        ))}
                                        {/* If there are less than 5 periods for a day, fill the remaining columns with 'No Period' */}
                                        {periodTimetablesByClass[className][day].length < 5 &&
                                            Array(5 - periodTimetablesByClass[className][day].length)
                                                .fill(null)
                                                .map((_, emptyIdx) => (
                                                    <td key={emptyIdx}>No Period</td>
                                                ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClassPeriodTimetable;
