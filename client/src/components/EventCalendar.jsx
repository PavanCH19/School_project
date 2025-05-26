import React, { useState } from 'react';
import { BiCalendar, BiMap, BiTime } from 'react-icons/bi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events] = useState([
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2024-07-15',
      description: 'Annual sports competition for all grades',
      venue: 'School Ground',
      time: '9:00 AM - 4:00 PM'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      date: '2024-07-20',
      description: 'Discussion about student progress',
      venue: 'School Auditorium',
      time: '10:00 AM - 2:00 PM'
    },
    {
      id: 3,
      title: 'Science Exhibition',
      date: '2024-08-05',
      description: 'Students showcase their science projects',
      venue: 'School Laboratory',
      time: '11:00 AM - 3:00 PM'
    },
    {
      id: 4,
      title: 'Cultural Festival',
      date: '2024-08-15',
      description: 'Annual cultural celebration',
      venue: 'School Auditorium',
      time: '4:00 PM - 8:00 PM'
    },
  ]);

  const getEventsForSelectedDate = () => {
    return events.filter(
      (event) => event.date === format(selectedDate, 'yyyy-MM-dd')
    );
  };

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div className="container-fluid p-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">School Event Calendar</h2>
          <p className="text-muted mb-0">View and manage school events</p>
        </div>
        <button className="btn btn-primary">
          + Add New Event
        </button>
      </div>

      <div className="row g-4">
        {/* Calendar Section */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="w-100 border-0"
              />
            </div>
          </div>
        </div>

        {/* Events for Selected Date */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0">Events for {format(selectedDate, 'MMMM d, yyyy')}</h5>
            </div>
            <div className="card-body">
              {getEventsForSelectedDate().length > 0 ? (
                getEventsForSelectedDate().map((event) => (
                  <div key={event.id} className="card mb-3 border">
                    <div className="card-body">
                      <h5 className="card-title text-primary">{event.title}</h5>
                      <div className="d-flex align-items-center text-muted mb-2">
                        <BiTime className="me-2" />
                        <small>{event.time}</small>
                      </div>
                      <div className="d-flex align-items-center text-muted mb-3">
                        <BiMap className="me-2" />
                        <small>{event.venue}</small>
                      </div>
                      <p className="card-text">{event.description}</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">View Details</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-muted">
                  <BiCalendar className="fs-1 mb-2" />
                  <p>No events scheduled for this date</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mt-4">
        <h5 className="mb-3">Upcoming Events</h5>
        <div className="row g-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                      <BiCalendar className="text-primary fs-4" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">{event.title}</h6>
                      <small className="text-muted">
                        {format(new Date(event.date), 'MMMM d, yyyy')}
                      </small>
                    </div>
                  </div>
                  <p className="card-text text-muted mb-2">{event.description}</p>
                  <div className="d-flex align-items-center text-muted mb-2">
                    <BiTime className="me-2" />
                    <small>{event.time}</small>
                  </div>
                  <div className="d-flex align-items-center text-muted mb-3">
                    <BiMap className="me-2" />
                    <small>{event.venue}</small>
                  </div>
                  <button className="btn btn-sm btn-outline-primary w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar; 