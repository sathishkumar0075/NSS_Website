import React, { useEffect, useState } from 'react';

function MeetingDetails() {
    const [state, setState] = useState({
        options: [],
        selectedOption: '',
        selectedUnit: '',
        attendanceData: [],
        error: null,
    });

    const handleSelectUnit = (event) => {
        setState((prevState) => ({
            ...prevState,
            selectedUnit: event.target.value,
        }));
    };

    const handleSelectMeeting = (event) => {
        setState((prevState) => ({
            ...prevState,
            selectedOption: event.target.value,
        }));
    };

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/meetings');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setState((prevState) => ({ ...prevState, options: data }));
            } catch (error) {
                setState((prevState) => ({ ...prevState, error: error.message }));
            }
        };
        fetchOptions();
    }, []);

    const handleStatusChange = (id, newStatus) => {
        setState((prevState) => ({
            ...prevState,
            attendanceData: prevState.attendanceData.map((student) =>
                student.id === id ? { ...student, status: newStatus } : student
            ),
        }));
    };
    useEffect(() => {
      if (state.selectedOption) {
        const fetchAttendance = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/attendance/${state.selectedUnit}`);
            if (!response.ok) throw new Error('Network response was not ok');
  
            const data = await response.json();
            const attendanceWithStatus = data.map((item) => ({
              ...item,
              status: 'Present', // Default status for each student
            }));
            setState((prevState) => ({ ...prevState, attendanceData: attendanceWithStatus }));
          } catch (error) {
            setState((prevState) => ({ ...prevState, error: error.message }));
          }
        };
        fetchAttendance();
      }
    }, [state.selectedUnit]);


    const handleSaveAttendance = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/attendance/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    attendanceData: state.attendanceData,
                    meetings_id: state.selectedOption,
                    unit: state.selectedUnit || 99,
                }),
            });

            if (!response.ok) throw new Error('Failed to save attendance');
            alert('Attendance saved successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save attendance');
        }
    };

    return (
        <section className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-1 pt-11 pb-44 mx-auto w-full bg-black bg-opacity-0 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-col items-start w-96 max-w-full">
                    <h1 className="self-stretch mr-7 ml-5 text-3xl font-semibold text-zinc-900 max-md:mx-2.5">
                        General Body Meeting
                    </h1>
                    <p className="mt-4 ml-5 text-sm font-semibold text-gray-400 max-md:ml-2.5">
                        9/13/22, 6:00PM
                    </p>

                    {state.error && <p className="text-red-500">{state.error}</p>}

                    <div className="flex mt-4">
                        <select
                            value={state.selectedOption}
                            onChange={handleSelectMeeting}
                            className="block appearance-none w-full py-2 px-4 pr-8 rounded shadow leading-tight"
                        >
                            <option value="" disabled>Select Meetings</option>
                            {state.options.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.title}
                                </option>
                            ))}
                        </select>
                        <select
                            value={state.selectedUnit}
                            onChange={handleSelectUnit}
                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight ml-3"
                        >
                            <option value="" disabled>Select a unit</option>
                            {[...Array(10).keys()].map((number) => (
                                <option key={number + 1} value={number + 1}>
                                    Unit {number + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h2 className="mt-10 ml-5 text-base font-semibold text-zinc-700 max-md:ml-2.5">
                        Mark Attendance
                    </h2>
                    {state.attendanceData.map((student) => (
                        <div key={student.id} className="flex items-center justify-between mt-2">
                            <span className="font-medium">{student.name}</span>
                            <div className="flex space-x-2">
                                <button
                                    className={`px-4 py-2 rounded ${
                                        student.status === 'Present' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'
                                    }`}
                                    onClick={() => handleStatusChange(student.id, 'Present')}
                                >
                                    Present
                                </button>
                                <button
                                    className={`px-4 py-2 rounded ${
                                        student.status === 'Absent' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700'
                                    }`}
                                    onClick={() => handleStatusChange(student.id, 'Absent')}
                                >
                                    Absent
                                </button>
                            </div>
                        </div>
                    ))}

                    <button 
                        onClick={handleSaveAttendance} 
                        className="flex justify-center p-2 mt-4 text-sm font-semibold bg-pink-500 rounded-xl text-slate-100 w-full max-w-xs">
                        Save Attendance
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MeetingDetails;
