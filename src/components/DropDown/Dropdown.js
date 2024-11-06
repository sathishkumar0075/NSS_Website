import React, { useEffect, useState } from 'react';

const Dropdown = () => {
  

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/meetings'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOptions(data); // Assume the data is an array of options
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
      } finally {
        setIsLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchOptions();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Handle the selection of an option
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if there's an error
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedOption}
        onChange={handleSelect}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="" disabled>Select an option</option> {/* Placeholder option */}
        {options.map((option) => (
          <option key={option.id} value={option.title}>{option.label}</option> // Adjust the keys based on your data structure
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
