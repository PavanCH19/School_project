import { useState } from 'react';

const studentsMock = [
    { id: 1, name: 'John Doe', class: '10', section: 'A', image: 'https://via.placeholder.com/100', status: 'Pending' },
    { id: 2, name: 'Jane Smith', class: '9', section: 'B', image: 'https://via.placeholder.com/100', status: 'Approved' },
    // Add more mock students
];

const Student = () => {
    const [students, setStudents] = useState(studentsMock);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const principal = true; // Change to false for other roles

    const handleAccept = (id) => {
        const updated = students.map(s =>
            s.id === id ? { ...s, status: 'Approved' } : s
        );
        setStudents(updated);
        setSelectedStudent({ ...selectedStudent, status: 'Approved' });
    };

    return (
        <div className="d-flex flex-column" style={{ height: '100vh' }}>
            {/* Header */}
            <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0">📚 Students Management</h5>
                <span>Total Students: {students.length}</span>
            </div>

            {/* Main Content */}
            <div className="d-flex flex-grow-1" style={{ overflow: 'hidden' }}>
                {/* Student List */}
                <div className="border-end p-3" style={{ width: '30%', overflowY: 'auto' }}>
                    <h6>👥 Students</h6>
                    <ul className="list-group">
                        {students.map(student => (
                            <li
                                key={student.id}
                                className={`list-group-item d-flex justify-content-between align-items-center ${selectedStudent?.id === student.id ? 'active text-white' : ''}`}
                                onClick={() => setSelectedStudent(student)}
                                style={{ cursor: 'pointer' }}
                            >
                                {student.name}
                                <span className={`badge ${student.status === 'Approved' ? 'bg-success' : 'bg-warning'}`}>
                                    {student.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Student Preview Panel */}
                <div className="p-4 flex-grow-1 overflow-auto">
                    {selectedStudent ? (
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={selectedStudent.image} alt="student" className="rounded" width="100" height="100" />
                                <div className="ms-4">
                                    <h5>{selectedStudent.name}</h5>
                                    <p className="mb-1">Class: {selectedStudent.class}</p>
                                    <p className="mb-1">Section: {selectedStudent.section}</p>
                                    <p className="mb-1">Status:
                                        <span className={`ms-2 badge ${selectedStudent.status === 'Approved' ? 'bg-success' : 'bg-warning'}`}>
                                            {selectedStudent.status}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {principal && selectedStudent.status !== 'Approved' && (
                                <button className="btn btn-success" onClick={() => handleAccept(selectedStudent.id)}>
                                    ✅ Accept Student
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="text-muted text-center mt-5">
                            <h4>📝 Clear to Add Student Here</h4>
                            <p>Select a student from the list to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Student; 
