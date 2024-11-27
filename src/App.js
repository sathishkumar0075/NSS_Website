import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';
import AdminRoute from './AdminRoute.js';
import MainPage from './components/MainPAge.js'; // Make sure to use the correct file name
import RegistrationForm from './components/registration/RegistrationForm.jsx';
import Layout from './components/Meetings/Layout.jsx';
import AttendancePage from './components/Attendance/AttendancePage.jsx';
import AttendanceTracker from './components/AttendanceTracker/AttendanceTracker.jsx';
import NewMeeting from './components/NewMeetings/NewMeeting.jsx';
import ScheduledMeetings from './components/SheduledMeetings/SheduledMeeting.jsx';
import Login from './components/Login/Login.js';
import MeetingDetails from "./components/Meetings/MeetingDetails.jsx";
import AttendanceList from './components/AttendanceTracker/AttendanceList.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.js';
import AddEvent from './components/Events/AddEvents.js';
import ExportPage from './components/Export/ExportPage.js';
import { UserProvider } from './UserContext.js'; 


export default function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/attendance/:userId" element={<AttendancePage  />} />
        <Route path="/list" element={<AttendanceList />} />
        
        {/* Protected routes that require authentication */}
        <Route path="/admin/*" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>}/>
          <Route path="events" element={<AdminRoute><AddEvent/></AdminRoute>}/>
          
          <Route path="meetings" element={<AttendanceTracker />} />
          <Route path="take" element={<MeetingDetails />} />
          <Route path="new" element={<AdminRoute><NewMeeting /></AdminRoute>} />
          <Route path="scheduled-meetings" element={<AdminRoute><ScheduledMeetings /></AdminRoute>} />
          <Route path="export" element={<AdminRoute><ExportPage /></AdminRoute>} />
        </Route>
        
      </Routes>
    </Router>
    </UserProvider>
  );
}
