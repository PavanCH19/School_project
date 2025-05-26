import React, { useState } from 'react';
import { BiMoney, BiDownload, BiUpload, BiPieChart, BiTrendingUp, BiWallet } from 'react-icons/bi';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const FeeManagement = () => {
    const [selectedYear, setSelectedYear] = useState('2024-25');
    const [selectedMonth, setSelectedMonth] = useState('March');

    // Enhanced fee data
    const feeData = {
        totalCollected: 2850000,
        totalPending: 450000,
        totalDue: 3300000,
        collectionRate: 86.4,
        monthlyTarget: 300000,
        defaulters: 45
    };

    // Class-wise fee details
    const classFees = [
        { className: 'Class 10', totalStudents: 120, feePerStudent: 25000, paid: 2250000, pending: 750000 },
        { className: 'Class 11', totalStudents: 100, feePerStudent: 30000, paid: 2400000, pending: 600000 },
        { className: 'Class 12', totalStudents: 90, feePerStudent: 35000, paid: 2625000, pending: 525000 },
    ];

    // Monthly collection data for chart
    const monthlyCollectionData = {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: 'Fee Collection',
                data: [280000, 290000, 310000, 285000, 295000, 305000, 315000, 290000, 300000, 320000, 310000, 295000],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Target',
                data: Array(12).fill(300000),
                borderColor: 'rgba(255, 99, 132, 0.5)',
                borderDash: [5, 5],
                tension: 0.4,
                fill: false
            }
        ]
    };

    // Fee distribution data for pie chart
    const feeDistributionData = {
        labels: ['Tuition Fee', 'Lab Fee', 'Transport Fee', 'Library Fee', 'Other Fees'],
        datasets: [{
            data: [60, 15, 10, 5, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ]
        }]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => '₹' + (value/1000) + 'K'
                }
            }
        }
    };

    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    };

    return (
        <div className="container-fluid p-4">
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="mb-1">Fee Management</h2>
                    <p className="text-muted mb-0">Track and manage student fee collections</p>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                        <BiDownload /> Export Report
                    </button>
                    <button className="btn btn-primary d-flex align-items-center gap-2">
                        <BiUpload /> Record Payment
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="row g-4 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-primary bg-opacity-10 p-3 rounded">
                                    <BiMoney className="text-primary fs-4" />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-1">Total Collected</h6>
                                    <h4 className="mb-0">₹{(feeData.totalCollected/100000).toFixed(1)}L</h4>
                                </div>
                            </div>
                            <div className="progress" style={{ height: "4px" }}>
                                <div
                                    className="progress-bar bg-primary"
                                    style={{ width: `${(feeData.totalCollected/feeData.totalDue)*100}%` }}
                                ></div>
                            </div>
                            <small className="text-muted">{feeData.collectionRate}% of total</small>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-danger bg-opacity-10 p-3 rounded">
                                    <BiWallet className="text-danger fs-4" />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-1">Pending Amount</h6>
                                    <h4 className="mb-0">₹{(feeData.totalPending/100000).toFixed(1)}L</h4>
                                </div>
                            </div>
                            <p className="mb-0 text-danger">
                                <small>{feeData.defaulters} students with pending fees</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-success bg-opacity-10 p-3 rounded">
                                    <BiTrendingUp className="text-success fs-4" />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-1">Monthly Target</h6>
                                    <h4 className="mb-0">₹{(feeData.monthlyTarget/100000).toFixed(1)}L</h4>
                                </div>
                            </div>
                            <p className="mb-0 text-success">
                                <small>On track for this month</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-info bg-opacity-10 p-3 rounded">
                                    <BiPieChart className="text-info fs-4" />
                                </div>
                                <div className="ms-3">
                                    <h6 className="mb-1">Total Due</h6>
                                    <h4 className="mb-0">₹{(feeData.totalDue/100000).toFixed(1)}L</h4>
                                </div>
                            </div>
                            <p className="mb-0 text-info">
                                <small>For academic year {selectedYear}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="row g-4 mb-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0">Monthly Collection Trend</h5>
                        </div>
                        <div className="card-body">
                            <Line options={chartOptions} data={monthlyCollectionData} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white py-3">
                            <h5 className="mb-0">Fee Distribution</h5>
                        </div>
                        <div className="card-body">
                            <Pie options={pieChartOptions} data={feeDistributionData} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Class-wise Fee Details */}
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0">Class-wise Fee Collection</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Total Students</th>
                                    <th>Fee per Student</th>
                                    <th>Total Expected</th>
                                    <th>Collected</th>
                                    <th>Pending</th>
                                    <th>Collection Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classFees.map((cls, index) => {
                                    const totalExpected = cls.totalStudents * cls.feePerStudent;
                                    const collectionRate = (cls.paid / (cls.paid + cls.pending)) * 100;
                                    
                                    return (
                                        <tr key={index}>
                                            <td>{cls.className}</td>
                                            <td>{cls.totalStudents}</td>
                                            <td>₹{cls.feePerStudent.toLocaleString()}</td>
                                            <td>₹{totalExpected.toLocaleString()}</td>
                                            <td>₹{cls.paid.toLocaleString()}</td>
                                            <td>₹{cls.pending.toLocaleString()}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress flex-grow-1 me-2" style={{ height: "6px" }}>
                                                        <div
                                                            className={`progress-bar ${collectionRate >= 85 ? 'bg-success' : 
                                                                collectionRate >= 70 ? 'bg-primary' : 
                                                                collectionRate >= 50 ? 'bg-warning' : 'bg-danger'}`}
                                                            style={{ width: `${collectionRate}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-muted small">{collectionRate.toFixed(1)}%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
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
                    .progress {
                        background-color: #e9ecef;
                        border-radius: 10px;
                    }
                    .progress-bar {
                        border-radius: 10px;
                    }
                    .table > :not(caption) > * > * {
                        padding: 1rem;
                    }
                `}
            </style>
        </div>
    );
};

export default FeeManagement;
