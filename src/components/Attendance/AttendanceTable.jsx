import React, { useEffect, useState } from 'react';

// Table Header Component
const TableHeader = () => (
  <div className="flex flex-col px-4 py-6 w-full bg-black bg-opacity-0">
    <div className="flex justify-between max-w-[900px] w-full mx-auto text-base font-semibold">
      <div className="text-neutral-500 flex-1">Meeting Name</div>
      <div className="text-zinc-600 ml-[160px] flex-1">Date</div>
      <div className="text-neutral-500 ml-[100px] flex-1">Status</div>
    </div>
    <div className="flex mt-4 h-0.5 bg-zinc-200 w-full max-w-[900px] mx-auto" />
  </div>
);

// Table Row Component
const TableRow = ({ title, unit, status, date }) => (
  <div className="flex flex-col px-4 py-4 w-full">
    <div className="flex justify-between max-w-[900px] w-full mx-auto">
      <div className="text-gray-400 flex-1">{title}</div>
   
     
      <div className="text-gray-400 ml-[0px] flex-1">{date}</div> {/* Display formatted date */}
      <div className="flex flex-1 justify-center">
        <div className="px-4 py-2 bg-rose-100 rounded-lg text-neutral-500">
          {status === 'Present' ? 'Present' : 'Absent'}
        </div>
      </div>
    </div>
    <div className="flex mt-3 h-0.5 bg-zinc-200 w-full max-w-[900px] mx-auto" />
  </div>
);

// Attendance Table Component
const AttendanceTable = ({ attendanceData }) => {
  const [meetings, setMeetings] = useState({}); // State to hold meeting name and date by meetingId

  useEffect(() => {
    const fetchMeetingNames = async () => {
      // Gather all unique meeting IDs from the attendance data
      const meetingIds = [...new Set(attendanceData.map(item => item.meetings_id))];

      try {
        // Fetch meeting names for each meetingId
        const meetingData = await Promise.all(
          meetingIds.map((meetingId) =>
            fetch(`http://localhost:5000/api/meetings/${meetingId}`)
              .then((response) => response.json())
              .then((data) => ({
                meetingId,
                name: data.name,
                date: data.date // Store the meeting name and date
              }))
              .catch((error) => {
                console.error('Error fetching meeting data:', error);
                return { meetingId, name: 'Error loading', date: 'N/A' }; // Fallback values
              })
          )
        );

        // Store meeting names and dates in the state
        const meetingsObject = meetingData.reduce((acc, { meetingId, name, date }) => {
          acc[meetingId] = { name, date }; // Store both name and date
          return acc;
        }, {});

        setMeetings(meetingsObject); // Store the fetched data in the state
      } catch (error) {
        console.error('Error fetching meeting names:', error);
      }
    };

    // Call the function to fetch meeting names
    fetchMeetingNames();
  }, [attendanceData]); // Re-fetch if attendanceData changes

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col w-full py-4">
      <TableHeader />
      {attendanceData.map((item, index) => (
        <TableRow
          key={index}
          title={meetings[item.meetings_id]?.name || 'Loading...'}
          date={meetings[item.meetings_id]?.date ? formatDate(meetings[item.meetings_id]?.date) : 'Loading...'} // Format the date
          status={item.status}
       
        />
      ))}
    </div>
  );
};

export default AttendanceTable;
