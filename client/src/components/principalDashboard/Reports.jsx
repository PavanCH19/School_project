import React, { useState } from 'react';
import { BiBarChart, BiDownload, BiCalendar, BiTrendingUp, BiUser, BiBook, BiMoney } from 'react-icons/bi';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Reports = () => {
    const [selectedYear, setSelectedYear] = useState('2024-25');
    const [selectedReport, setSelectedReport] = useState('academic');

    // Sample data for academic performance
    const academicData = {
        labels: ['Class 10', 'Class 11', 'Class 12'],
        datasets: [
            {
                label: 'Average Score (%)',
                data: [85, 78, 82],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }
        ]
    };

    // Sample data for attendance trends
    const attendanceData = {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: 'Students',
                data: [95, 92, 88, 90, 87, 93, 91, 89, 92, 94, 90, 93],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            },
            {
                label: 'Teachers',
                data: [98, 97, 96, 98, 95, 97, 98, 96, 97, 98, 97, 98],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.4
            }
        ]
    };

    // Sample data for fee collection
    const feeCollectionData = {
        labels: ['Collected', 'Pending', 'Defaulters'],
        datasets: [{
            data: [75, 15, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ]
        }]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    };

    // Quick stats data
    const quickStats = [
        {
            title: 'Total Students',
            value: '850+',
            icon: <BiUser />,
            color: 'primary'
        },
        {
            title: 'Average Attendance',
            value: '92%',
            icon: <BiCalendar />,
            color: 'success'
        },
        {
            title: 'Fee Collection',
            value: '₹28.5L',
            icon: <BiMoney />,
            color: 'info'
        },
        {
            title: 'Pass Rate',
            value: '95%',
            icon: <BiTrendingUp />,
            color: 'warning'
        }
    ];

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Reports & Analytics</h2>
                    <p className="text-muted mb-0">View comprehensive reports and performance analytics</p>
                </div>
                <div className="d-flex gap-2">
                    <select 
                        className="form-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="2024-25">2024-25</option>
                        <option value="2023-24">2023-24</option>
                    </select>
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <BiDownload /> Export Report
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="row g-4 mb-4">
                {quickStats.map((stat, index) => (
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

            {/* Report Type Selector */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="btn-group w-100">
                        <button 
                            className={`btn ${selectedReport === 'academic' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setSelectedReport('academic')}
                        >
                            Academic Performance
                        </button>
                        <button 
                            className={`btn ${selectedReport === 'attendance' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setSelectedReport('attendance')}
                        >
                            Attendance Report
                        </button>
                        <button 
                            className={`btn ${selectedReport === 'financial' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setSelectedReport('financial')}
                        >
                            Financial Report
                        </button>
                    </div>
                </div>
            </div>

            {/* Report Content */}
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0">
                                {selectedReport === 'academic' && 'Class-wise Academic Performance'}
                                {selectedReport === 'attendance' && 'Monthly Attendance Trends'}
                                {selectedReport === 'financial' && 'Monthly Fee Collection'}
                            </h5>
                        </div>
                        <div className="card-body">
                            {selectedReport === 'academic' && (
                                <Bar options={chartOptions} data={academicData} />
                            )}
                            {selectedReport === 'attendance' && (
                                <Line options={chartOptions} data={attendanceData} />
                            )}
                            {selectedReport === 'financial' && (
                                <Line options={chartOptions} data={attendanceData} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0">
                                {selectedReport === 'academic' && 'Subject-wise Performance'}
                                {selectedReport === 'attendance' && 'Attendance Distribution'}
                                {selectedReport === 'financial' && 'Fee Collection Status'}
                            </h5>
                        </div>
                        <div className="card-body">
                            <Doughnut options={doughnutOptions} data={feeCollectionData} />
                        </div>
                    </div>
                </div>
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
                    .btn-group .btn {
                        flex: 1;
                    }
                `}
            </style>
        </div>
    );
};

export default Reports; 