import React, { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [success, setSuccess] = useState(false); // Success state variable
  const [errorMessage, setErrorMessage] = useState(''); // Error state variable

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send form data including files
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('event_image', eventImage);
    if (profileImage) {
      formData.append('profile_image', profileImage);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/events/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Event added successfully:', response.data);

      // Reset the form fields after success
      setTitle('');
      setDescription('');
      setEventImage(null);
      setProfileImage(null);
      document.getElementById('eventImageInput').value = ''; // Clear the event image input
      document.getElementById('profileImageInput').value = '';
      setSuccess(true);

      // Hide the success alert after 5 seconds (optional)
      setTimeout(() => {
        setSuccess(false);
      }, 5000); // Clear the profile image input
    } catch (error) {
      console.error('Error adding event:', error);
      setErrorMessage('Failed to add event. Please try again.');
    }
  };

  return (
    <section className="max-w-2xl mt-12 p-8 ml-12 rounded-lg ">
      <h2 className="text-5xl font-bold text-gray-800 mb-6 ">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            required
          />
        </div>

        {/* Event Image */}
        <div>
          <label htmlFor="eventImage" className="block text-lg font-medium text-gray-700">
            Event Image
          </label>
          <input
            type="file"
            id="eventImageInput"
            accept="image/*"
            onChange={(e) => setEventImage(e.target.files[0])}
            className="w-full mt-2 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            required
          />
        </div>

        {/* Profile Image */}
        <div>
          <label htmlFor="profileImage" className="block text-lg font-medium text-gray-700">
            Profile Image (Optional)
          </label>
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="w-full mt-2 p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">If not provided, a default profile image will be used.</p>
        </div>
        {/* Success Alert */}
      {success && (
        <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> The event has been added successfully.</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setSuccess(false)}
          >
            <svg
              className="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 5.652a1 1 0 010 1.414L11.414 10l2.934 2.934a1 1 0 01-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 0z"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {errorMessage}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setErrorMessage('')}
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 5.652a1 1 0 010 1.414L11.414 10l2.934 2.934a1 1 0 01-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 0z"
              />
            </svg>
          </span>
        </div>
      )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors shadow-md"
        >
          Add Event
        </button>
      </form>

      

    </section>
  );
};

export default AddEvent;
