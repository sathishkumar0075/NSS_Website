import React, { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventImage, setEventImage] = useState('');
    const [profileImage, setProfileImage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const eventData = { 
        title, 
        description, 
        event_image: eventImage, 
        profile_image: profileImage || "https://cdn.builder.io/api/v1/image/assets/TEMP/1852c618a50dabebf29b34d94c81d63c224d466c4bf239d9499a10d0e97fbe85?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" 
      };
    try {
      const response = await axios.post('http://localhost:5000/api/events/add', eventData);
      console.log('Event added successfully:', response.data);
      setTitle('');
      setDescription('');
      setEventImage('');
      setProfileImage('');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <section className="max-w-2xl mt-12 p-8 ml-12 rounded-lg ">
      <h2 className="text-5xl font-bold text-gray-800 mb-6 ">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Event Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="eventImage" className="block text-lg font-medium text-gray-700">Event Image URL</label>
          <input
            type="text"
            id="eventImage"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="profileImage" className="block text-lg font-medium text-gray-700">Profile Image URL</label>
          <input
            type="text"
            id="profileImage"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 bg-pink-500 text-white font-semibold rounded-lg hover:bg-[#FF3B71] transition-colors shadow-md"
        >
          Add Event
        </button>
      </form>
    </section>
  );
};

export default AddEvent;
