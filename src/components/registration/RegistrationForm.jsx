import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    registerNo: '',
    branch: '',
    yearOfStudy: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    email: '',
    mobile: '',
    aadharNo: '',
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      // You can also reset the form or redirect the user here
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <main className="flex flex-col px-4 py-10 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Registration</h2>
        <p className="text-gray-600 text-center mb-4">Enter your details below</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Register No Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="registerNo">Register No</label>
            <input
              type="text"
              id="registerNo"
              name="registerNo"
              placeholder="Enter your registration number"
              value={formData.registerNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Branch Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="branch">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              placeholder="Enter your branch details"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Year Of Study Select Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="yearOfStudy">Year Of Study</label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Year Of Study</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          {/* DOB Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Blood Group Select Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="bloodGroup">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Mail ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email id"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mobile Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your Mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Aadhar No Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="aadharNo">Aadhar No</label>
            <input
              type="text"
              id="aadharNo"
              name="aadharNo"
              placeholder="Enter your Aadhar number"
              value={formData.aadharNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

export default RegistrationForm;
