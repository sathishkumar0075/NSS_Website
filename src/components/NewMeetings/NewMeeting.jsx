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

    // Validate form data (simple validation example)
    if (!formData.title || !formData.date || !formData.time) {
      alert('Title, date, and time are required fields.');
      return;
    }

    // Convert empty values for optional fields to null
    const dataToSend = {
      ...formData,
      description: formData.description || null,
      purpose: formData.purpose || null,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/meetings', dataToSend);
      console.log('Meeting created:', response.data);

      // Reset the form on successful submission
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
    // Reset the form to clear all fields
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
    <main className="flex overflow-hidden flex-col bg-black bg-opacity-0">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex relative flex-col pb-14 w-full min-h-[1440px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/697dc7c204974aec0eb99183d8eadd5a10960fc9568e16e5962fa059672197d2?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <section className="flex relative flex-col items-start pr-px pl-20 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <h1 className="ml-28 text-4xl font-semibold text-zinc-900 max-md:ml-2.5">New Meeting</h1>
            <p className="mt-6 ml-28 text-base font-semibold text-neutral-400 max-md:ml-2.5">Schedule a new meeting</p>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8 ml-20 max-w-full w-[569px] max-md:px-5">
              <label>
                Title
                <input
                  type="text"
                  placeholder="Example: 1:1 with Jane"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full p-2 mt-2 mb-4 border rounded"
                />
              </label>
              <label>
                Date
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="block w-full p-2 mt-2 mb-4 border rounded"
                />
              </label>
              <label>
                Time
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="block w-full p-2 mt-2 mb-4 border rounded"
                />
              </label>
              <label>
                Venue
                <input
                  type="text"
                  placeholder="Example: Zoom link, Room 123"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="block w-full p-2 mt-2 mb-4 border rounded"
                />
              </label>
              <label>
                Description
                <textarea
                  placeholder="Optional: Add a description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full p-2 mt-2 mb-4 border rounded"
                />
              </label>
              <label>
                Purpose
                <textarea
                  placeholder="Optional: Add a purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="block w-full p-2 mt-2 mb-4 border rounded"
                />
              </label>
              <div className="flex justify-end gap-8 mt-4">
                <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                  Create Meeting
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default NewMeeting;
