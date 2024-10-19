import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MeetingItem from './MeetingItem';

function MeetingList() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter meetings based on search term
  

  useEffect(() => {
    // Fetch meetings from the database (API call)
    const fetchMeetings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/meetings');
        setMeetings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meetings:', error);
        setError('Could not fetch meetings. Please try again later.');
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) {
    return <p>Loading meetings...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredMeetings = meetings.filter(meeting =>
    meeting.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col pt-1 pr-3.5 pb-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
    <input
      type="text"
      placeholder="Search meetings..."
      className="mb-4 p-2 border border-gray-300 rounded"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <ul className="flex flex-col">
      {filteredMeetings.length > 0 ? (
        filteredMeetings.map((meeting, index) => (
          <MeetingItem key={index} {...meeting} />
        ))
      ) : (
        <li className="text-gray-500">No meetings found</li>
      )}
    </ul>
  </div>
  );
}

export default MeetingList;
