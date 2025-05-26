import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admissions from "./pages/Admissions"
import About_school from './pages/About_school'
import ContactUs from './pages/ContactUs'
import PrincipalDashboard from './pages/principalDashboard'
import AdminDashboard from './components/principalDashboard/AdminDashboard'
import Student from './components/principalDashboard/Student'
import TeacherStaffDetails from './components/principalDashboard/TeacherStaff'
import FullAttendanceDashboard from './components/principalDashboard/Attendence'
import FeeManagement from './components/principalDashboard/FeeManagement'
import ExamAndResult from './components/principalDashboard/ExamResult'
import ClassTimetable from './components/principalDashboard/ClassTimetable'
import Transport from './components/principalDashboard/Transport'
import Library from './components/principalDashboard/Library'
import Reports from './components/principalDashboard/Reports'
import Settings from './components/principalDashboard/Settings'
import EventCalendar from './components/EventCalendar'
import Hostel from './components/principalDashboard/Hostel'
import React, { Suspense } from 'react'

// Loading Component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center p-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center">
          <h2>Something went wrong.</h2>
          <button 
            className="btn btn-primary mt-3" 
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<About_school />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/princi_dashboard" element={<PrincipalDashboard />} >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<Student />} />
            <Route path="teachers" element={<TeacherStaffDetails />} />
            <Route path="attendance" element={<FullAttendanceDashboard />} />
            <Route path="fee-management" element={
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <FeeManagement />
                </Suspense>
              </ErrorBoundary>
            } />
            <Route path="exams-results" element={<ExamAndResult />} />
            <Route path="timetable" element={<ClassTimetable />} />
            <Route path="events-calendar" element={<EventCalendar />} />
            <Route path="transport" element={<Transport />} />
            <Route path="library" element={<Library />} />
            <Route path="hostel" element={<Hostel />} />
            <Route path="reports" element={
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <Reports />
                </Suspense>
              </ErrorBoundary>
            } />
            <Route path="admin-settings" element={<Settings />} />
          </Route>
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
