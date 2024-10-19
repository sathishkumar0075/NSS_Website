import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Meetings/Layout.jsx';
import AttendancePage from './components/Attendance/AttendancePage.jsx';
import AttendanceTracker from './components/AttendanceTracker/AttendanceTracker.jsx';
import NewMeeting from './components/NewMeetings/NewMeeting.jsx';
import ScheduledMeetings from './components/SheduledMeetings/SheduledMeeting.jsx';
import MainPage from './components/MainPAge.js';
import RegistrationForm from './components/registration/RegistrationForm.jsx';
export default function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/save-attendance" element={<Layout />} />
        <Route path="/attendance" element={<AttendancePage />} /> // Page for Students to view attendance
        <Route path="/attendance-tracker" element={<AttendanceTracker />} />
        <Route path="/new-meeting" element={<NewMeeting />} />
        <Route path="/scheduled-meetings" element={<ScheduledMeetings />} />
      </Routes>
    </Router>
  );
}
