import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Summary from './Summary.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [roles, setRoles] = useState({});
  const [totalMeetings, setTotalMeetings] = useState(0);
  const [average, setAverage] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  useEffect(() => {
    // Fetch all students
    axios.get('http://localhost:5000/api/analytics/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));

    // Fetch analytics data
    axios.get('http://localhost:5000/api/analytics')
      .then(response => setAnalytics(response.data))
      .catch(error => console.error('Error fetching analytics:', error));

    // Fetch total meetings
    axios.get('http://localhost:5000/api/analytics/another')
      .then(response => setTotalMeetings(response.data))
      .catch(error => console.error("Error Fetching Meetings Length:", error));

    // Fetch average attendance
    axios.get("http://localhost:5000/api/analytics/average")
      .then(response => setAverage(response.data))
      .catch(error => console.error("Error Fetching the average:", error));
   
  }, []);

  const handleRoleChange = (studentId) => {
    const selectedRole = roles[studentId];
    // Update the role of the student
    axios.put(`http://localhost:5000/api/analytics/students/${studentId}/role`, { role: selectedRole })
      .then(response => {
        alert('Role updated successfully');
      })
      .catch(error => console.error('Error updating role:', error));
  };

  // Filter students based on the search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.unit.toString().includes(searchTerm)
  );

  const unitChartData = {
    labels: analytics ? analytics.unitCounts.map(unit => `Unit ${unit.unit}`) : [],
    datasets: [
      {
        label: 'Students per Unit',
        data: analytics ? analytics.unitCounts.map(unit => unit.student_count) : [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-6 mt-12">
      {analytics && (
        <div className="mb-8">
          <h2 className="text-5xl font-bold">Summary</h2>
          <Summary
            length={totalMeetings}
            average={average}
            unitChartData={unitChartData}
          />
        </div>
      )}

      <hr className="mx-auto mt-2 w-full my-4 border-t-2 border-black" />

      {/* Search Bar */}
      <div className="flex items-center mb-4 relative">
  <input
    type="text"
    placeholder="Search by name or unit"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-1/4 px-12 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300 ease-in-out"
  />
  <svg
    className="absolute left-4 text-gray-500 w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M10 2a8 8 0 0 1 6.32 12.9l5.387 5.387a1 1 0 0 1-1.414 1.415l-5.387-5.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 4.472 10.066 1 1 0 0 1 .098-.131l.084-.084a1 1 0 0 1 .089-.098A6 6 0 0 0 10 4z" />
  </svg>
</div>

      {/* Students List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Students</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Unit</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Change Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.unit}</td>
                <td className="px-4 py-2">{student.role}</td>
                <td className="px-4 py-2">
                  <select
                    onChange={(e) => setRoles(prevRoles => ({ ...prevRoles, [student.id]: e.target.value }))}
                    value={roles[student.id] || student.role} // Default to student's current role
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                    <option value="volunteer">Volunteer</option>
                  </select>
                  <button
                    onClick={() => handleRoleChange(student.id)}
                    className="ml-2 bg-pink-500 text-white px-3 py-1 rounded"
                  >
                    Change Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
