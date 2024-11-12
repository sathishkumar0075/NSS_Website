import React, { useState, useEffect } from "react";
import axios from "axios";

function AttendanceList() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/meetings");
        setMeetings(response.data);
      } catch (err) {
        setError("Error fetching meetings");
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const handleTakeAttendance = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/meetings/${id}/attendance`);
      setMeetings((prevMeetings) =>
        prevMeetings.map((meeting) =>
          meeting.id === id ? { ...meeting, status: "Taken" } : meeting
        )
      );
    } catch (err) {
      setError("Error updating attendance");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading meetings...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const today = new Date();
  const upcomingMeetings = meetings.filter(
    (meeting) => new Date(meeting.date) >= today
  );
  const pastMeetings = meetings.filter(
    (meeting) => new Date(meeting.date) < today
  );

  return (
    <div className=" mt-8 p-6 rounded-lg ">
      {/* Upcoming Meetings Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Meetings</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex gap-5 justify-between text-gray-700 font-semibold mb-2 px-4">
            <div className="w-1/4">Date</div>
            <div className="w-1/4">Meeting</div>
            <div className="w-1/4">Description</div>
          </div>
          {upcomingMeetings.map((meeting, index) => (
            <div key={meeting.id} className="px-4 py-3 border-b border-gray-200 last:border-none">
              <div className="flex justify-between items-center">
                <div className="text-gray-600 w-1/4">
                  {new Date(meeting.date).toLocaleDateString("en-GB")}
                </div>
                <div className="text-gray-700 font-medium w-1/4">{meeting.title}</div>
                <div className="w-1/4">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">{meeting.description}</div>
                </div>
              </div>
            </div>
          ))}
          {upcomingMeetings.length === 0 && (
            <div className="text-gray-500 text-center py-4">No upcoming meetings</div>
          )}
        </div>
      </div>

      {/* Past Meetings Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Past Meetings</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex gap-5 justify-between text-gray-700 font-semibold mb-2 px-4">
            <div className="w-1/4">Date</div>
            <div className="w-1/4">Meeting</div>
            <div className="w-1/4">Description</div>
          </div>
          {pastMeetings.map((meeting, index) => (
            <div key={meeting.id} className="px-4 py-3 border-b border-gray-200 last:border-none">
              <div className="flex justify-between items-center">
                <div className="text-gray-600 w-1/4">
                  {new Date(meeting.date).toLocaleDateString("en-GB")}
                </div>
                <div className="text-gray-700 font-medium w-1/4">{meeting.title}</div>
                <div className="w-1/4">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">{meeting.description}</div>
                </div>
              </div>
            </div>
          ))}
          {pastMeetings.length === 0 && (
            <div className="text-gray-500 text-center py-4">No past meetings</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AttendanceList;
