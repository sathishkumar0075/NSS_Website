import React, { useEffect, useState } from 'react';
import AttendanceSummary from './AttendanceSummary';
import AttendanceTable from './AttendanceTable';

const AttendancePage = ({ userId }) => {
  const [attendanceData, setAttendanceData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch(`http://localhost:5000/api/attendance/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        // Ensure that data is an array before setting it in state
        if (Array.isArray(data)) {
          setAttendanceData(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setAttendanceData([]); // Set to an empty array if the response is not an array
        }
      })
      .catch((error) => {
        console.error('Error fetching attendance data:', error);
        setAttendanceData([]); // Set to an empty array on fetch error
      });
  }, [userId]);

  return (
    <div className="flex overflow-hidden flex-col pb-2 bg-black bg-opacity-0">
      <div className="flex flex-col bg-black bg-opacity-0 max-md:max-w-full">
        <main className="flex z-10 flex-col pt-1 pb-6 -mt-2.5 bg-gray-50 max-md:max-w-full">
          <AttendanceSummary />
          <AttendanceTable attendanceData={attendanceData} />
        </main>
      </div>
    </div>
  );
};

export default AttendancePage;
