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
                headers: { 'Content-Type': 'application/json' },
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
        <section className="flex ml-6 flex-col mx-auto w-full max-w-full mt-12 p-3 bg-white  rounded-lg">
            <div className="flex flex-col mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">General Body Meeting</h1>
                <p className="text-sm text-gray-500 mt-2">9/13/22, 6:00PM</p>

                {state.error && <p className="text-red-600 mt-4">{state.error}</p>}

                <div className="flex mt-6 space-x-4 w-3/4">
                    <select
                        value={state.selectedOption}
                        onChange={handleSelectMeeting}
                        className="w-full py-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                    >
                        <option value="" disabled>Select Meeting</option>
                        {state.options.map((option) => (
                            <option key={option.id} value={option.id}>{option.title}</option>
                        ))}
                    </select>
                    <select
                        value={state.selectedUnit}
                        onChange={handleSelectUnit}
                        className="w-full py-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                    >
                        <option value="" disabled>Select Unit</option>
                        {[...Array(10).keys()].map((number) => (
                            <option key={number + 1} value={number + 1}>Unit {number + 1}</option>
                        ))}
                    </select>
                </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-700 mb-4 mt-12 ">Mark Attendance</h2>
            {state.attendanceData.map((student) => (
                <div key={student.id} className="flex items-center justify-between py-2 w-1/2 border-b border-gray-200">
                    <span className="text-gray-800">{student.name}</span>
                    <div className="flex space-x-2 mr-24">
                        <button
                            className={`px-4 py-1 rounded-full  font-medium transition ${
                                student.status === 'Present'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-green-100 text-green-700'
                            }`}
                            onClick={() => handleStatusChange(student.id, 'Present')}
                        >
                            Present
                        </button>
                        <button
                            className={`px-4 py-1 rounded-full font-medium transition ${
                                student.status === 'Absent'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-red-100 text-red-700'
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
                className="mt-16 w-1/2 py-3 bg-pink-500 items-center justify-center ml-44  text-white rounded-lg font-semibold transition hover:bg-pink-600"
            >
                Save Attendance
            </button>
        </section>
    );
}

export default MeetingDetails;
