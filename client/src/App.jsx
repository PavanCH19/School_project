
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
            <Route path="fee-management" element={<FeeManagement />} />
            <Route path="exams-results" element={<ExamAndResult />} />
            <Route path="timetable" element={<ClassTimetable />} />
            <Route path="events-calendar" element={<h1>Events & Calendar</h1>} />
            <Route path="transport" element={<h1>Transport</h1>} />
            <Route path="library" element={<h1>Library</h1>} />
            <Route path="hostel" element={<h1>Hostel</h1>} />
            <Route path="reports" element={<h1>Reports</h1>} />
            <Route path="admin-settings" element={<h1>Admin Settings</h1>} />
          </Route>
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
