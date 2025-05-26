import React, { useState } from 'react';
import { BiBuilding, BiUser, BiBed, BiMoney } from 'react-icons/bi';

const Hostel = () => {
  const [rooms] = useState([
    {
      id: 1,
      roomNumber: 'A101',
      block: 'A',
      floor: '1st Floor',
      capacity: 4,
      occupied: 3,
      type: 'Boys',
      status: 'Available'
    },
    {
      id: 2,
      roomNumber: 'B202',
      block: 'B',
      floor: '2nd Floor',
      capacity: 4,
      occupied: 4,
      type: 'Girls',
      status: 'Full'
    },
    {
      id: 3,
      roomNumber: 'A103',
      block: 'A',
      floor: '1st Floor',
      capacity: 4,
      occupied: 2,
      type: 'Boys',
      status: 'Available'
    },
    {
      id: 4,
      roomNumber: 'B204',
      block: 'B',
      floor: '2nd Floor',
      capacity: 4,
      occupied: 3,
      type: 'Girls',
      status: 'Available'
    }
  ]);

  const [facilities] = useState([
    'Wi-Fi Coverage',
    '24/7 Hot Water',
    'Study Room',
    'Recreation Room',
    'Laundry Service',
    'CCTV Surveillance',
    'Medical Facility',
    'Dining Hall'
  ]);

  const quickStats = [
    {
      title: 'Total Rooms',
      value: '50',
      icon: <BiBuilding className="fs-1" />,
      bgColor: 'bg-primary'
    },
    {
      title: 'Total Students',
      value: '180',
      icon: <BiUser className="fs-1" />,
      bgColor: 'bg-success'
    },
    {
      title: 'Available Beds',
      value: '20',
      icon: <BiBed className="fs-1" />,
      bgColor: 'bg-warning'
    },
    {
      title: 'Monthly Fee',
      value: '₹8,000',
      icon: <BiMoney className="fs-1" />,
      bgColor: 'bg-info'
    }
  ];

  return (
    <div className="container-fluid p-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Hostel Management</h2>
          <p className="text-muted mb-0">Manage hostel rooms and student accommodations</p>
        </div>
        <button className="btn btn-primary">
          + Add New Student
        </button>
      </div>

      {/* Quick Stats */}
      <div className="row g-4 mb-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className={`${stat.bgColor} bg-opacity-10 p-3 rounded-3`}>
                    {stat.icon}
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

      {/* Room Status */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">Room Status</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Room No.</th>
                  <th>Block</th>
                  <th>Floor</th>
                  <th>Type</th>
                  <th>Capacity</th>
                  <th>Occupied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map(room => (
                  <tr key={room.id}>
                    <td>{room.roomNumber}</td>
                    <td>{room.block}</td>
                    <td>{room.floor}</td>
                    <td>{room.type}</td>
                    <td>{room.capacity}</td>
                    <td>{room.occupied}</td>
                    <td>
                      <span className={`badge ${room.status === 'Available' ? 'bg-success' : 'bg-danger'}`}>
                        {room.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">View</button>
                      <button className="btn btn-sm btn-outline-secondary">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Facilities and Rules */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Hostel Facilities</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-center p-3 border rounded-3">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {facility}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Hostel Rules</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Entry time: Before 8:00 PM</li>
                <li className="list-group-item">Maintain silence during study hours (7:00 PM - 10:00 PM)</li>
                <li className="list-group-item">Keep rooms and common areas clean</li>
                <li className="list-group-item">No outside food allowed in rooms</li>
                <li className="list-group-item">Visitors allowed only in designated areas</li>
                <li className="list-group-item">Report maintenance issues immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel; 