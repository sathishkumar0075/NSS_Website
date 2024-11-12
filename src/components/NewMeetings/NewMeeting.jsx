import React, { useState } from "react";
import axios from "axios";

function NewMeeting() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: '',
    purpose: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.time) {
      alert('Title, date, and time are required fields.');
      return;
    }

    const dataToSend = {
      ...formData,
      description: formData.description || null,
      purpose: formData.purpose || null,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/meetings', dataToSend);
      console.log('Meeting created:', response.data);

      setFormData({
        title: '',
        date: '',
        time: '',
        venue: '',
        description: '',
        purpose: ''
      });
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      venue: '',
      description: '',
      purpose: ''
    });
  };

  return (
    <main className="flex items-center ml-12 mb-12 mt-12">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg ">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">New Meeting</h1>
        <p className="text-gray-500 mb-6">Schedule a new meeting</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="text-gray-700 font-medium">Title</span>
            <input
              type="text"
              placeholder="Example: 1:1 with Jane"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Date</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Time</span>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Venue</span>
            <input
              type="text"
              placeholder="Example: Zoom link, Room 123"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Description</span>
            <textarea
              placeholder="Optional: Add a description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            ></textarea>
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Purpose</span>
            <textarea
              placeholder="Optional: Add a purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-[#FF99B6] focus:border-transparent"
            ></textarea>
          </label>

          <div className="flex justify-end gap-4 mt-6">
            <button 
              type="button" 
              onClick={handleCancel} 
              className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-sm hover:bg-[#FF3B71] transition-colors"
            >
              Create Meeting
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default NewMeeting;
