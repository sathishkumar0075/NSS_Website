import React, { useState } from 'react';
import { parse } from 'json2csv'; // Import json2csv to convert JSON to CSV

function ExportPage() {
  const [unitNumber, setUnitNumber] = useState('');  // State to hold the entered unit number
  const [error, setError] = useState(null);          // State to store any error message

  const handleUnitChange = (e) => {
    setUnitNumber(e.target.value);  // Update unit number as user types
  };

  const handleExportCSV = async () => {
    if (!unitNumber) {
      setError('Please enter a valid unit number.');
      return;
    }
    
    try {
      // Make an API call to fetch student data for the selected unit
      const response = await fetch(`http://localhost:5000/api/units/${unitNumber}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      
      const data = await response.json();
      
      if (data.length === 0) {
        setError('No students found for this unit.');
        return;
      }

      // Convert the student data to CSV format
      const csv = parse(data);  // `data` should be the student records

      // Create a Blob from the CSV and trigger the file download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `students_unit_${unitNumber}.csv`);  // Set filename
      link.click();  // Trigger file download
    } catch (error) {
      setError(error.message);  // Handle errors
    }
  };

  return (
    <section className="mx-auto p-6 rounded-lg mt-12">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Export Students Data</h1>
        <p className="text-gray-600 mt-2">Enter a unit number to export the student data to a CSV file</p>

        {error && <p className="text-red-600 mt-4">{error}</p>}  {/* Display error message if any */}
        
        <div className="mt-6">
          <input
            type="number"
            value={unitNumber}
            onChange={handleUnitChange}
            placeholder="Enter Unit Number"
            className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF99B6] transition"
          />
        </div>
        
        <button
          onClick={handleExportCSV}
          className="mt-6 w-full py-3 bg-[#FF99B6] text-white font-bold text-lg rounded-md hover:bg-[#FF3B71] transition-all duration-300 shadow-lg"
        >
          Export to CSV
        </button>
      </div>
    </section>
  );
}

export default ExportPage;
