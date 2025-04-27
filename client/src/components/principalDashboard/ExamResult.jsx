import React, { useState } from 'react';

const ExamAndResult = () => {
    const today = new Date().toISOString().split('T')[0]; // current date in YYYY-MM-DD format

    // All exams
    const allExams = [
        { examName: 'Mid Term', date: '2025-01-10', totalMarks: 100, year: 2025 },
        { examName: 'Unit Test 1', date: '2025-02-05', totalMarks: 50, year: 2025 },
        { examName: 'Final Exam', date: '2025-03-25', totalMarks: 100, year: 2025 },
        { examName: 'Mid Term', date: '2024-01-12', totalMarks: 100, year: 2024 },
        { examName: 'Final Exam', date: '2024-03-30', totalMarks: 100, year: 2024 },
    ];

    // Only future exams
    const upcomingExams = allExams.filter(exam => exam.date >= today);

    // All results
    const results = [
        { year: 2025, studentName: 'Rahul Kumar', class: 'Class 10', exam: 'Mid Term', marksObtained: 78, totalMarks: 100 },
        { year: 2025, studentName: 'Anjali Singh', class: 'Class 11', exam: 'Final Exam', marksObtained: 85, totalMarks: 100 },
        { year: 2025, studentName: 'Sameer Khan', class: 'Class 12', exam: 'Unit Test 1', marksObtained: 40, totalMarks: 50 },
        { year: 2024, studentName: 'Neha Verma', class: 'Class 10', exam: 'Final Exam', marksObtained: 88, totalMarks: 100 },
        { year: 2024, studentName: 'Arjun Rao', class: 'Class 12', exam: 'Mid Term', marksObtained: 74, totalMarks: 100 },
    ];

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedExam, setSelectedExam] = useState('');

    const uniqueYears = Array.from(new Set(results.map(r => r.year)));
    const filteredExamsForYear = allExams
        .filter(e => e.year.toString() === selectedYear)
        .map(e => e.examName);
    const uniqueExamsForYear = Array.from(new Set(filteredExamsForYear));

    const filteredResults = results.filter(
        r => r.year.toString() === selectedYear && r.exam === selectedExam
    );

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">📘 Upcoming Exams & 🎓 Search Results</h2>

            {/* Upcoming Exams Table */}
            <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">📝 Upcoming Exams</div>
                <div className="card-body p-0">
                    {upcomingExams.length > 0 ? (
                        <table className="table table-striped mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Exam Name</th>
                                    <th>Date</th>
                                    <th>Total Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {upcomingExams.map((exam, idx) => (
                                    <tr key={idx}>
                                        <td>{exam.examName}</td>
                                        <td>{exam.date}</td>
                                        <td>{exam.totalMarks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="p-3">No upcoming exams.</p>
                    )}
                </div>
            </div>

            {/* Result Filter Form */}
            <div className="card shadow-sm mb-4">
                <div className="card-header fw-bold">🔍 View Results</div>
                <div className="card-body">
                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Select Year</label>
                            <select
                                className="form-select"
                                value={selectedYear}
                                onChange={(e) => {
                                    setSelectedYear(e.target.value);
                                    setSelectedExam('');
                                }}
                            >
                                <option value="">-- Select Year --</option>
                                {uniqueYears.map((year, idx) => (
                                    <option key={idx} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Select Exam</label>
                            <select
                                className="form-select"
                                value={selectedExam}
                                onChange={(e) => setSelectedExam(e.target.value)}
                                disabled={!selectedYear}
                            >
                                <option value="">-- Select Exam --</option>
                                {uniqueExamsForYear.map((exam, idx) => (
                                    <option key={idx} value={exam}>
                                        {exam}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Table */}
                    {filteredResults.length > 0 ? (
                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>Student Name</th>
                                    <th>Class</th>
                                    <th>Marks Obtained</th>
                                    <th>Total Marks</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredResults.map((r, idx) => (
                                    <tr key={idx}>
                                        <td>{r.studentName}</td>
                                        <td>{r.class}</td>
                                        <td>{r.marksObtained}</td>
                                        <td>{r.totalMarks}</td>
                                        <td>{((r.marksObtained / r.totalMarks) * 100).toFixed(2)}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : selectedYear && selectedExam ? (
                        <p>No results found for selected year and exam.</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ExamAndResult;
