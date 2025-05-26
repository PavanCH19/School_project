import React, { useState } from 'react';
import { BiCalendar, BiDownload, BiUpload, BiPlus } from 'react-icons/bi';

const ExamAndResult = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const today = new Date().toISOString().split('T')[0];

    // Enhanced exam data
    const allExams = [
        { 
            id: 1,
            examName: 'Mid Term',
            date: '2025-01-10',
            totalMarks: 100,
            year: 2025,
            subjects: ['Mathematics', 'Science', 'English'],
            classes: ['Class 10', 'Class 11', 'Class 12'],
            duration: '3 hours',
            status: 'upcoming'
        },
        { 
            id: 2,
            examName: 'Unit Test 1',
            date: '2025-02-05',
            totalMarks: 50,
            year: 2025,
            subjects: ['Physics', 'Chemistry'],
            classes: ['Class 11', 'Class 12'],
            duration: '1.5 hours',
            status: 'upcoming'
        },
        { 
            id: 3,
            examName: 'Final Exam',
            date: '2024-03-25',
            totalMarks: 100,
            year: 2024,
            subjects: ['All Subjects'],
            classes: ['All Classes'],
            duration: '3 hours',
            status: 'completed'
        }
    ];

    // Enhanced results data
    const results = [
        {
            id: 1,
            year: 2025,
            studentName: 'Rahul Kumar',
            class: 'Class 10',
            exam: 'Mid Term',
            subjects: [
                { name: 'Mathematics', marks: 85, total: 100 },
                { name: 'Science', marks: 78, total: 100 },
                { name: 'English', marks: 88, total: 100 }
            ],
            totalMarks: 251,
            totalOutOf: 300,
            percentage: 83.67,
            rank: 1
        },
        {
            id: 2,
            year: 2025,
            studentName: 'Anjali Singh',
            class: 'Class 11',
            exam: 'Unit Test 1',
            subjects: [
                { name: 'Physics', marks: 42, total: 50 },
                { name: 'Chemistry', marks: 45, total: 50 }
            ],
            totalMarks: 87,
            totalOutOf: 100,
            percentage: 87,
            rank: 2
        }
    ];

    const filteredExams = allExams.filter(exam => {
        if (activeTab === 'upcoming') {
            return new Date(exam.date) >= new Date(today);
        }
        return new Date(exam.date) < new Date(today);
    });

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Examination & Results</h2>
                    <p className="text-muted mb-0">Manage exams, upload results and view performance analytics</p>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                        <BiDownload /> Download Results
                    </button>
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <BiPlus /> Schedule New Exam
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
                        onClick={() => setActiveTab('upcoming')}
                    >
                        Upcoming Exams
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
                        onClick={() => setActiveTab('completed')}
                    >
                        Completed Exams
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'results' ? 'active' : ''}`}
                        onClick={() => setActiveTab('results')}
                    >
                        Results
                    </button>
                </li>
            </ul>

            {/* Exams Grid */}
            {(activeTab === 'upcoming' || activeTab === 'completed') && (
                <div className="row g-4">
                    {filteredExams.map((exam) => (
                        <div key={exam.id} className="col-xl-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5 className="card-title mb-0">{exam.examName}</h5>
                                        <span className={`badge bg-${new Date(exam.date) >= new Date(today) ? 'primary' : 'success'}`}>
                                            {new Date(exam.date) >= new Date(today) ? 'Upcoming' : 'Completed'}
                                        </span>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <BiCalendar className="text-primary me-2" />
                                            <span>{new Date(exam.date).toLocaleDateString('en-US', { 
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                        <p className="mb-2"><strong>Duration:</strong> {exam.duration}</p>
                                        <p className="mb-2"><strong>Total Marks:</strong> {exam.totalMarks}</p>
                                    </div>

                                    <div className="mb-3">
                                        <h6 className="mb-2">Subjects:</h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {exam.subjects.map((subject, idx) => (
                                                <span key={idx} className="badge bg-light text-dark border">
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <h6 className="mb-2">Classes:</h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {exam.classes.map((cls, idx) => (
                                                <span key={idx} className="badge bg-light text-dark border">
                                                    {cls}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button className="btn btn-primary w-100">
                                            {new Date(exam.date) >= new Date(today) ? 'View Details' : 'Upload Results'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Results Table */}
            {activeTab === 'results' && (
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Class</th>
                                        <th>Exam</th>
                                        <th>Marks</th>
                                        <th>Percentage</th>
                                        <th>Rank</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((result) => (
                                        <tr key={result.id}>
                                            <td>{result.studentName}</td>
                                            <td>{result.class}</td>
                                            <td>{result.exam}</td>
                                            <td>{result.totalMarks}/{result.totalOutOf}</td>
                                            <td>
                                                <span className={`badge bg-${
                                                    result.percentage >= 85 ? 'success' :
                                                    result.percentage >= 70 ? 'primary' :
                                                    result.percentage >= 50 ? 'warning' : 'danger'
                                                }`}>
                                                    {result.percentage.toFixed(1)}%
                                                </span>
                                            </td>
                                            <td>#{result.rank}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary">View Details</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                    .nav-tabs .nav-link {
                        color: #6c757d;
                        border: none;
                        border-bottom: 2px solid transparent;
                        padding: 0.5rem 1rem;
                    }
                    .nav-tabs .nav-link.active {
                        color: var(--bs-primary);
                        border-bottom-color: var(--bs-primary);
                        background: none;
                    }
                    .table > :not(caption) > * > * {
                        padding: 1rem 0.5rem;
                    }
                `}
            </style>
        </div>
    );
};

export default ExamAndResult;
