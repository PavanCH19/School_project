import React, { useState } from 'react';
import { BiBook, BiSearch, BiPlus, BiUser, BiTime, BiBookOpen, BiRefresh } from 'react-icons/bi';

const Library = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Sample books data
    const books = [
        {
            id: 1,
            title: 'Physics for Class 12',
            author: 'H.C. Verma',
            category: 'Science',
            isbn: '978-0123456789',
            copies: 15,
            available: 8,
            location: 'Shelf A1',
            borrowers: [
                { name: 'Rahul Kumar', class: '12A', dueDate: '2024-04-15' },
                { name: 'Priya Singh', class: '12B', dueDate: '2024-04-18' }
            ]
        },
        {
            id: 2,
            title: 'Advanced Mathematics',
            author: 'R.D. Sharma',
            category: 'Mathematics',
            isbn: '978-0987654321',
            copies: 20,
            available: 12,
            location: 'Shelf B2',
            borrowers: [
                { name: 'Amit Patel', class: '11A', dueDate: '2024-04-20' }
            ]
        },
        {
            id: 3,
            title: 'English Literature',
            author: 'William Shakespeare',
            category: 'Literature',
            isbn: '978-1234567890',
            copies: 10,
            available: 10,
            location: 'Shelf C3',
            borrowers: []
        }
    ];

    // Quick stats
    const stats = [
        {
            title: 'Total Books',
            value: books.reduce((acc, book) => acc + book.copies, 0),
            icon: <BiBook />,
            color: 'primary'
        },
        {
            title: 'Books Available',
            value: books.reduce((acc, book) => acc + book.available, 0),
            icon: <BiBookOpen />,
            color: 'success'
        },
        {
            title: 'Active Borrowers',
            value: books.reduce((acc, book) => acc + book.borrowers.length, 0),
            icon: <BiUser />,
            color: 'info'
        },
        {
            title: 'Due This Week',
            value: books.reduce((acc, book) => 
                acc + book.borrowers.filter(b => 
                    new Date(b.dueDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                ).length, 0),
            icon: <BiTime />,
            color: 'warning'
        }
    ];

    // Get unique categories
    const categories = ['all', ...new Set(books.map(book => book.category))];

    // Filter books
    const filteredBooks = books.filter(book => {
        const matchesSearch = 
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.isbn.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Library Management</h2>
                    <p className="text-muted mb-0">Manage books, track borrowings, and monitor returns</p>
                </div>
                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <BiPlus /> Add New Book
                </button>
            </div>

            {/* Quick Stats */}
            <div className="row g-4 mb-4">
                {stats.map((stat, index) => (
                    <div key={index} className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className={`bg-${stat.color} bg-opacity-10 p-3 rounded`}>
                                        <span className={`text-${stat.color} fs-4`}>{stat.icon}</span>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-1">{stat.title}</h6>
                                        <h4 className="mb-0">{stat.value}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-8">
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <BiSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by title, author, or ISBN..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Books List */}
            <div className="row g-4">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="col-xl-4 col-md-6">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 className="card-title mb-1">{book.title}</h5>
                                        <p className="text-muted mb-0">by {book.author}</p>
                                    </div>
                                    <span className={`badge bg-${book.available > 0 ? 'success' : 'danger'}`}>
                                        {book.available > 0 ? 'Available' : 'All Borrowed'}
                                    </span>
                                </div>

                                <div className="mb-3">
                                    <p className="mb-1"><strong>Category:</strong> {book.category}</p>
                                    <p className="mb-1"><strong>ISBN:</strong> {book.isbn}</p>
                                    <p className="mb-1"><strong>Location:</strong> {book.location}</p>
                                    <p className="mb-0">
                                        <strong>Status:</strong> {book.available}/{book.copies} copies available
                                    </p>
                                </div>

                                {book.borrowers.length > 0 && (
                                    <div className="mb-3">
                                        <h6 className="mb-2">Current Borrowers:</h6>
                                        <div className="borrowers-list">
                                            {book.borrowers.map((borrower, index) => (
                                                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                                    <div>
                                                        <div>{borrower.name}</div>
                                                        <small className="text-muted">Class {borrower.class}</small>
                                                    </div>
                                                    <small className={`text-${new Date(borrower.dueDate) < new Date() ? 'danger' : 'success'}`}>
                                                        Due: {borrower.dueDate}
                                                    </small>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="d-flex gap-2 mt-3">
                                    <button className="btn btn-outline-primary flex-grow-1">
                                        Issue Book
                                    </button>
                                    <button className="btn btn-outline-success flex-grow-1">
                                        <BiRefresh className="me-1" /> Return
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom CSS */}
            <style>
                {`
                    .card {
                        transition: transform 0.2s ease;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                    }
                    .borrowers-list {
                        max-height: 150px;
                        overflow-y: auto;
                        padding-right: 5px;
                    }
                    .borrowers-list::-webkit-scrollbar {
                        width: 5px;
                    }
                    .borrowers-list::-webkit-scrollbar-track {
                        background: #f1f1f1;
                    }
                    .borrowers-list::-webkit-scrollbar-thumb {
                        background: #888;
                        border-radius: 5px;
                    }
                `}
            </style>
        </div>
    );
};

export default Library; 