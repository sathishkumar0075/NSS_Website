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
      console.log("At Dashbaord : ",totalMeetings);

    // Fetch average attendance
    axios.get("http://localhost:5000/api/analytics/average")
      .then(response => setAverage(response.data))
      .catch(error => console.error("Error Fetching the average:", error));

    // Fetch attendance data
   
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

  // Chart Data for Students by Unit
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
    <div className="container mx-auto px-4 py-6">
     

      {analytics && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <Summary
            length={totalMeetings}
            average={average}
           // Pass attendance data
            unitChartData={unitChartData}
          />

          {/* Students by Unit Chart */}
          {/* <div className="my-4">
            <h3 className="text-xl font-medium">Students by Unit</h3>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <Bar data={unitChartData} />
            </div>
          </div> */}
        </div>
      )}

      {/* Students List */}
      <div className="bg-white shadow-md p-6 rounded-lg">
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
            {students.map(student => (
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
                    className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
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
