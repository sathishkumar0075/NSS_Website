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
    return <div>Loading meetings...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Get today's date for comparison
  const today = new Date();
  const upcomingMeetings = meetings.filter(
    (meeting) => new Date(meeting.date) >= today
  );
  const pastMeetings = meetings.filter(
    (meeting) => new Date(meeting.date) < today
  );

  return (
    <div className="flex flex-col mt-6 bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex relative flex-col pt-0.5 pb-7 w-full min-h-[265px] max-md:max-w-full">
        <div className="flex relative flex-col pt-7 pb-px bg-black bg-opacity-0 max-md:max-w-full">
          {/* Upcoming Meetings Section */}
          <div className="flex flex-col px-1.5 w-full text-base whitespace-nowrap max-md:max-w-full">
            <h2 className="text-xl font-semibold text-neutral-600 ml-5">Upcoming Meetings</h2>
            <div className="flex gap-5 justify-between ml-5 w-full">
              <div className="text-neutral-500 w-1/4">Date</div>
              <div className="text-neutral-600 w-1/4">Meeting</div>
              <div className="text-neutral-600 w-1/4">Description</div>
            </div>
            <div className="flex shrink-0 mt-5 bg-gray-100 h-[3px] max-md:max-w-full" />
          </div>

          {upcomingMeetings.map((meeting, index) => (
            <div
              key={meeting.id}
              className="flex flex-col px-1.5 pt-4 pb-1 w-full bg-black bg-opacity-0 max-md:max-w-full"
            >
              <div className="flex justify-between items-center ml-5 w-full">
                <div className="self-stretch my-auto text-base text-gray-400 w-1/4">
                  {new Date(meeting.date).toLocaleDateString("en-GB")}
                </div>
                <div className="self-stretch my-auto text-base text-neutral-500 w-1/4">
                  {meeting.title}
                </div>
                <div className="self-stretch w-1/4">
                  <div className="px-4 py-2 rounded-xl bg-gray-100">
                    {meeting.description}
                  </div>
                </div>
              </div>
              {index < upcomingMeetings.length - 1 && (
                <div className="flex shrink-0 mt-5 h-0.5 bg-zinc-200 max-md:max-w-full" />
              )}
            </div>
          ))}

          {/* Past Meetings Section */}
          <div className="flex flex-col px-1.5 w-full text-base whitespace-nowrap max-md:max-w-full mt-10">
            <h2 className="text-xl font-semibold text-neutral-600 ml-5">Past Meetings</h2>
            <div className="flex gap-5 justify-between ml-5 w-full">
              <div className="text-neutral-500 w-1/4">Date</div>
              <div className="text-neutral-600 w-1/4">Meeting</div>
              <div className="text-neutral-600 w-1/4">Description</div>
            </div>
            <div className="flex shrink-0 mt-5 bg-gray-100 h-[3px] max-md:max-w-full" />
          </div>

          {pastMeetings.map((meeting, index) => (
            <div
              key={meeting.id}
              className="flex flex-col px-1.5 pt-4 pb-1 w-full bg-black bg-opacity-0 max-md:max-w-full"
            >
              <div className="flex justify-between items-center ml-5 w-full">
                <div className="self-stretch my-auto text-base text-gray-400 w-1/4">
                  {new Date(meeting.date).toLocaleDateString("en-GB")}
                </div>
                <div className="self-stretch my-auto text-base text-neutral-500 w-1/4">
                  {meeting.title}
                </div>
                <div className="self-stretch w-1/4">
                  <div className="px-4 py-2 rounded-xl bg-gray-100">
                    {meeting.description}
                  </div>
                </div>
              </div>
              {index < pastMeetings.length - 1 && (
                <div className="flex shrink-0 mt-5 h-0.5 bg-zinc-200 max-md:max-w-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttendanceList;
