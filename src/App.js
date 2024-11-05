// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext.js';
import ProtectedRoute from './ProtectedRoute.js';
import AdminRoute from './AdminRoute.js';
import MainPage from './components/MainPAge.js';
import RegistrationForm from './components/registration/RegistrationForm.jsx';
import Layout from './components/Meetings/Layout.jsx';
import AttendancePage from './components/Attendance/AttendancePage.jsx';
import AttendanceTracker from './components/AttendanceTracker/AttendanceTracker.jsx';
import NewMeeting from './components/NewMeetings/NewMeeting.jsx';
import ScheduledMeetings from './components/SheduledMeetings/SheduledMeeting.jsx';
import Login from './components/Login/Login.js';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/save-attendance" element={<ProtectedRoute><Layout /></ProtectedRoute>} />
          <Route path="/attendance" element={<ProtectedRoute><AttendancePage /></ProtectedRoute>} />
          <Route path="/attendance-tracker" element={<ProtectedRoute><AttendanceTracker /></ProtectedRoute>} />
          <Route path="/new-meeting" element={<AdminRoute><NewMeeting /></AdminRoute>} />
          <Route path="/scheduled-meetings" element={<AdminRoute><ScheduledMeetings /></AdminRoute>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
