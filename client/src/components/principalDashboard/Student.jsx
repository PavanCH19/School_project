import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiDownload, FiPlus, FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import { BiSort, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

// Add more mock data for testing
const generateMockStudents = () => {
    const students = [];
    for (let i = 1; i <= 480; i++) { // 40 students × 12 classes
        const classNum = Math.ceil(i / 40); // 1 to 12
        const section = ['A', 'B', 'C', 'D'][Math.floor((i - 1) % 40 / 10)]; // 10 students per section
        students.push({
            id: i,
            name: `Student ${i}`,
            class: classNum.toString(),
            section: section,
            rollNo: `${classNum}${section}${String(i % 40 + 1).padStart(2, '0')}`,
            gender: i % 2 === 0 ? 'Male' : 'Female',
            dateOfBirth: '2006-05-15',
            admissionDate: '2022-06-01',
            fatherName: `Father ${i}`,
            motherName: `Mother ${i}`,
            contactNumber: '+1234567890',
            email: `student${i}@example.com`,
            address: '123 School Street, City',
            bloodGroup: ['A+', 'B+', 'O+', 'AB+'][i % 4],
            image: 'https://via.placeholder.com/150',
            attendance: 75 + (i % 25), // 75-99%
            fees: {
                total: 50000,
                paid: 45000,
                pending: 5000,
                lastPaid: '2023-12-15'
            },
            academicRecord: {
                previousYear: 70 + (i % 30),
                currentYear: 75 + (i % 25)
            },
            status: i % 10 === 0 ? 'Inactive' : 'Active'
        });
    }
    return students;
};

const studentsMock = generateMockStudents();

const Student = () => {
    const [students, setStudents] = useState(studentsMock);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        class: '',
        section: '',
        status: '',
        gender: ''
    });
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
    const [isAddingStudent, setIsAddingStudent] = useState(false);
    const [newStudent, setNewStudent] = useState({
        name: '',
        class: '',
        section: '',
        rollNo: '',
        gender: '',
        dateOfBirth: '',
        fatherName: '', 
        motherName: '',
        contactNumber: '',
        email: '',
        address: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        itemsPerPage: 15,
        totalPages: 1
    });
    const [advancedFilters, setAdvancedFilters] = useState({
        status: '',
        gender: '',
        bloodGroup: '',
        attendanceAbove: '',
        performanceAbove: ''
    });
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    // Filter students with advanced filters
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.rollNo?.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesBasicFilters = (
            (!filters.class || student.class === filters.class) &&
            (!filters.section || student.section === filters.section)
        );

        const matchesAdvancedFilters = (
            (!advancedFilters.status || student.status === advancedFilters.status) &&
            (!advancedFilters.gender || student.gender === advancedFilters.gender) &&
            (!advancedFilters.bloodGroup || student.bloodGroup === advancedFilters.bloodGroup) &&
            (!advancedFilters.attendanceAbove || student.attendance >= parseInt(advancedFilters.attendanceAbove)) &&
            (!advancedFilters.performanceAbove || student.academicRecord.currentYear >= parseInt(advancedFilters.performanceAbove))
        );

        return matchesSearch && matchesBasicFilters && matchesAdvancedFilters;
    });

    // Sort students
    const sortedStudents = [...filteredStudents].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    // Paginate students
    const paginatedStudents = sortedStudents.slice(
        (pagination.currentPage - 1) * pagination.itemsPerPage,
        pagination.currentPage * pagination.itemsPerPage
    );

    // Update total pages when filtered students change
    useEffect(() => {
        setPagination(prev => ({
            ...prev,
            totalPages: Math.ceil(filteredStudents.length / prev.itemsPerPage),
            currentPage: 1 // Reset to first page when filters change
        }));
    }, [filteredStudents.length, pagination.itemsPerPage]);

    const handlePageChange = (newPage) => {
        setPagination(prev => ({
            ...prev,
            currentPage: newPage
        }));
    };

    // Statistics calculations
    const statistics = {
        totalStudents: students.length,
        activeStudents: students.filter(s => s.status === 'Active').length,
        averageAttendance: Math.round(students.reduce((acc, curr) => acc + (curr.attendance || 0), 0) / students.length),
        averagePerformance: Math.round(students.reduce((acc, curr) => acc + (curr.academicRecord?.currentYear || 0), 0) / students.length)
    };

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleAddStudent = () => {
        const newId = Math.max(...students.map(s => s.id)) + 1;
        const studentData = {
            ...newStudent,
            id: newId,
            image: 'https://via.placeholder.com/150',
            status: 'Active',
            admissionDate: new Date().toISOString().split('T')[0]
        };
        setStudents(prev => [...prev, studentData]);
        setIsAddingStudent(false);
        setNewStudent({
            name: '',
            class: '',
            section: '',
            rollNo: '',
            gender: '',
            dateOfBirth: '',
            fatherName: '',
            motherName: '',
            contactNumber: '',
            email: '',
            address: ''
        });
    };

    const handleUpdateStudent = () => {
        setStudents(prev => prev.map(s => 
            s.id === selectedStudent.id ? { ...s, ...selectedStudent } : s
        ));
        setEditMode(false);
    };

    const handleDeleteStudent = (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            setStudents(prev => prev.filter(s => s.id !== id));
            setSelectedStudent(null);
        }
    };

    const exportToCSV = () => {
        const headers = ['Name', 'Class', 'Section', 'Roll No', 'Status', 'Attendance'];
        const csvData = [
            headers.join(','),
            ...sortedStudents.map(student => 
                [
                    student.name,
                    student.class,
                    student.section,
                    student.rollNo,
                    student.status,
                    student.attendance
                ].join(',')
            )
        ].join('\n');

        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'students.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="container-fluid p-4">
            {/* Statistics Cards */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h6 className="card-title">Total Students</h6>
                            <h2>{statistics.totalStudents}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h6 className="card-title">Active Students</h6>
                            <h2>{statistics.activeStudents}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-info text-white">
                        <div className="card-body">
                            <h6 className="card-title">Average Attendance</h6>
                            <h2>{statistics.averageAttendance}%</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-white">
                        <div className="card-body">
                            <h6 className="card-title">Average Performance</h6>
                            <h2>{statistics.averagePerformance}%</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body py-2">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FiSearch />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by name or roll number..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <select
                                        className="form-select"
                                        value={filters.class}
                                        onChange={(e) => setFilters(prev => ({ ...prev, class: e.target.value }))}
                                    >
                                        <option value="">All Classes</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map(num => (
                                            <option key={num} value={num.toString()}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select
                                        className="form-select"
                                        value={filters.section}
                                        onChange={(e) => setFilters(prev => ({ ...prev, section: e.target.value }))}
                                    >
                                        <option value="">All Sections</option>
                                        {['A', 'B', 'C', 'D'].map(section => (
                                            <option key={section} value={section}>{section}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select
                                        className="form-select"
                                        value={advancedFilters.status}
                                        onChange={(e) => setAdvancedFilters(prev => ({
                                            ...prev,
                                            status: e.target.value
                                        }))}
                                    >
                                        <option value="">All Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select
                                        className="form-select"
                                        value={advancedFilters.gender}
                                        onChange={(e) => setAdvancedFilters(prev => ({
                                            ...prev,
                                            gender: e.target.value
                                        }))}
                                    >
                                        <option value="">All Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-1">
                                    <button 
                                        className={`btn ${showAdvancedFilters ? 'btn-primary' : 'btn-outline-secondary'} w-100`}
                                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                                        title="More Filters"
                                    >
                                        <FiFilter />
                                    </button>
                                </div>
                            </div>

                            {/* Additional Advanced Filters */}
                            {showAdvancedFilters && (
                                <div className="row g-2 mt-2">
                                    <div className="col-md-3">
                                        <select
                                            className="form-select"
                                            value={advancedFilters.bloodGroup}
                                            onChange={(e) => setAdvancedFilters(prev => ({
                                                ...prev,
                                                bloodGroup: e.target.value
                                            }))}
                                        >
                                            <option value="">All Blood Groups</option>
                                            {['A+', 'B+', 'O+', 'AB+'].map(group => (
                                                <option key={group} value={group}>{group}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-text">Attendance ≥</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="%"
                                                min="0"
                                                max="100"
                                                value={advancedFilters.attendanceAbove}
                                                onChange={(e) => setAdvancedFilters(prev => ({
                                                    ...prev,
                                                    attendanceAbove: e.target.value
                                                }))}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-text">Performance ≥</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="%"
                                                min="0"
                                                max="100"
                                                value={advancedFilters.performanceAbove}
                                                onChange={(e) => setAdvancedFilters(prev => ({
                                                    ...prev,
                                                    performanceAbove: e.target.value
                                                }))}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-outline-primary flex-grow-1" onClick={exportToCSV}>
                                                <FiDownload /> Export
                                            </button>
                                            <button className="btn btn-primary flex-grow-1" onClick={() => setIsAddingStudent(true)}>
                                                <FiPlus /> Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="row">
                {/* Student List */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-light">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0">
                                    Student List 
                                    <small className="text-muted ms-2">
                                        ({filteredStudents.length} students)
                                    </small>
                                </h6>
                                <div className="d-flex gap-2 align-items-center">
                                    <select
                                        className="form-select form-select-sm"
                                        value={pagination.itemsPerPage}
                                        onChange={(e) => setPagination(prev => ({
                                            ...prev,
                                            itemsPerPage: parseInt(e.target.value),
                                            currentPage: 1
                                        }))}
                                    >
                                        <option value="15">15 per page</option>
                                        <option value="30">30 per page</option>
                                        <option value="50">50 per page</option>
                                    </select>
                                    <button 
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() => handleSort('name')}
                                    >
                                        <BiSort /> Sort
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0" style={{ height: '600px', overflowY: 'auto' }}>
                            <div className="list-group list-group-flush">
                                {paginatedStudents.map(student => (
                                    <div
                                        key={student.id}
                                        className={`list-group-item list-group-item-action ${selectedStudent?.id === student.id ? 'active' : ''}`}
                                        onClick={() => setSelectedStudent(student)}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={student.image}
                                                alt={student.name}
                                                className="rounded-circle me-3"
                                                width="40"
                                                height="40"
                                            />
                                            <div>
                                                <h6 className="mb-0">{student.name}</h6>
                                                <small>
                                                    Class {student.class}-{student.section} | Roll: {student.rollNo}
                                                    <span className={`badge ms-2 bg-${student.status === 'Active' ? 'success' : 'warning'}`}>
                                                        {student.status}
                                                    </span>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">
                                    Page {pagination.currentPage} of {pagination.totalPages}
                                </small>
                                <div className="btn-group">
                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                                        disabled={pagination.currentPage === 1}
                                    >
                                        <BiChevronLeft />
                                    </button>
                                    {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                                        let pageNum;
                                        if (pagination.totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (pagination.currentPage <= 3) {
                                            pageNum = i + 1;
                                        } else if (pagination.currentPage >= pagination.totalPages - 2) {
                                            pageNum = pagination.totalPages - 4 + i;
                                        } else {
                                            pageNum = pagination.currentPage - 2 + i;
                                        }
                                        return (
                                            <button
                                                key={pageNum}
                                                className={`btn btn-sm ${pageNum === pagination.currentPage ? 'btn-primary' : 'btn-outline-secondary'}`}
                                                onClick={() => handlePageChange(pageNum)}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                                        disabled={pagination.currentPage === pagination.totalPages}
                                    >
                                        <BiChevronRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Details */}
                <div className="col-md-8">
                    {selectedStudent ? (
                        <div className="card">
                            <div className="card-header bg-light">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0">Student Details</h6>
                                    <div className="btn-group">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => setEditMode(!editMode)}
                                        >
                                            <FiEdit2 /> Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDeleteStudent(selectedStudent.id)}
                                        >
                                            <FiTrash2 /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                {editMode ? (
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label className="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={selectedStudent.name}
                                                        onChange={(e) => setSelectedStudent(prev => ({
                                                            ...prev,
                                                            name: e.target.value
                                                        }))}
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label">Class</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={selectedStudent.class}
                                                        onChange={(e) => setSelectedStudent(prev => ({
                                                            ...prev,
                                                            class: e.target.value
                                                        }))}
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label">Section</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={selectedStudent.section}
                                                        onChange={(e) => setSelectedStudent(prev => ({
                                                            ...prev,
                                                            section: e.target.value
                                                        }))}
                                                    />
                                                </div>
                                                {/* Add more edit fields as needed */}
                                            </div>
                                            <div className="mt-3">
                                                <button
                                                    className="btn btn-primary me-2"
                                                    onClick={handleUpdateStudent}
                                                >
                                                    <FiCheck /> Save Changes
                                                </button>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={() => setEditMode(false)}
                                                >
                                                    <FiX /> Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img
                                                src={selectedStudent.image}
                                                alt={selectedStudent.name}
                                                className="rounded-circle mb-3"
                                                width="150"
                                                height="150"
                                            />
                                            <h5>{selectedStudent.name}</h5>
                                            <p className="text-muted">
                                                Class {selectedStudent.class}-{selectedStudent.section}
                                            </p>
                                            <span className={`badge bg-${selectedStudent.status === 'Active' ? 'success' : 'warning'}`}>
                                                {selectedStudent.status}
                                            </span>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h6 className="text-muted">Personal Information</h6>
                                                    <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
                                                    <p><strong>Date of Birth:</strong> {selectedStudent.dateOfBirth}</p>
                                                    <p><strong>Gender:</strong> {selectedStudent.gender}</p>
                                                    <p><strong>Blood Group:</strong> {selectedStudent.bloodGroup}</p>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <h6 className="text-muted">Contact Information</h6>
                                                    <p><strong>Father's Name:</strong> {selectedStudent.fatherName}</p>
                                                    <p><strong>Mother's Name:</strong> {selectedStudent.motherName}</p>
                                                    <p><strong>Phone:</strong> {selectedStudent.contactNumber}</p>
                                                    <p><strong>Email:</strong> {selectedStudent.email}</p>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <div className="card bg-light">
                                                        <div className="card-body">
                                                            <h6 className="card-title">Academic Performance</h6>
                                                            <p className="mb-1">Current Year: {selectedStudent.academicRecord?.currentYear}%</p>
                                                            <p>Previous Year: {selectedStudent.academicRecord?.previousYear}%</p>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: `${selectedStudent.academicRecord?.currentYear}%` }}
                                                                    aria-valuenow={selectedStudent.academicRecord?.currentYear}
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card bg-light">
                                                        <div className="card-body">
                                                            <h6 className="card-title">Attendance</h6>
                                                            <h3 className="mb-0">{selectedStudent.attendance}%</h3>
                                                            <div className="progress mt-2">
                                                                <div
                                                                    className="progress-bar bg-success"
                                                                    role="progressbar"
                                                                    style={{ width: `${selectedStudent.attendance}%` }}
                                                                    aria-valuenow={selectedStudent.attendance}
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="card">
                            <div className="card-body text-center p-5">
                                <h4 className="text-muted">Select a student to view details</h4>
                                <p>Click on any student from the list to view their complete information</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Student Modal */}
            {isAddingStudent && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Student</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setIsAddingStudent(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newStudent.name}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                name: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Class</label>
                                        <select
                                            className="form-select"
                                            value={newStudent.class}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                class: e.target.value
                                            }))}
                                        >
                                            <option value="">Select Class</option>
                                            {Array.from({ length: 12 }, (_, i) => i + 1).map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Section</label>
                                        <select
                                            className="form-select"
                                            value={newStudent.section}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                section: e.target.value
                                            }))}
                                        >
                                            <option value="">Select Section</option>
                                            {['A', 'B', 'C', 'D'].map(section => (
                                                <option key={section} value={section}>{section}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Roll Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newStudent.rollNo}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                rollNo: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Gender</label>
                                        <select
                                            className="form-select"
                                            value={newStudent.gender}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                gender: e.target.value
                                            }))}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={newStudent.dateOfBirth}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                dateOfBirth: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Contact Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            value={newStudent.contactNumber}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                contactNumber: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Father's Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newStudent.fatherName}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                fatherName: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Mother's Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={newStudent.motherName}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                motherName: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={newStudent.email}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Address</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={newStudent.address}
                                            onChange={(e) => setNewStudent(prev => ({
                                                ...prev,
                                                address: e.target.value
                                            }))}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setIsAddingStudent(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleAddStudent}
                                >
                                    Add Student
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Student; 
