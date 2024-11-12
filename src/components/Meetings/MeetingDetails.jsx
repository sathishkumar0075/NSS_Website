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
                        status: 'Present',
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
        <section className=" mx-auto p-6  rounded-lg mt-12">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800">General Body Meeting</h1>
                <p className="text-gray-600 mt-2">9/13/22, 6:00PM</p>

                {state.error && <p className="text-red-600 mt-4">{state.error}</p>}

                <div className="flex mt-6 space-x-4">
                    <select
                        value={state.selectedOption}
                        onChange={handleSelectMeeting}
                        className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF99B6] transition"
                    >
                        <option value="" disabled>Select Meeting</option>
                        {state.options.map((option) => (
                            <option key={option.id} value={option.id}>{option.title}</option>
                        ))}
                    </select>
                    <select
                        value={state.selectedUnit}
                        onChange={handleSelectUnit}
                        className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF99B6] transition"
                    >
                        <option value="" disabled>Select Unit</option>
                        {[...Array(10).keys()].map((number) => (
                            <option key={number + 1} value={number + 1}>Unit {number + 1}</option>
                        ))}
                    </select>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">Mark Attendance</h2>
            <div className="space-y-4">
                {state.attendanceData.map((student) => (
                    <div key={student.id} className="flex items-center justify-between py-3 px-4 bg-white rounded-lg shadow-sm">
                        <span className="text-gray-800">{student.name}</span>
                        <div className="flex space-x-3">
                            <button
                                className={`px-6 py-2 rounded-full font-medium transition ${
                                    student.status === 'Present'
                                        ? 'bg-[#FF99B6] text-white'
                                        : 'bg-[#FFE3EC] text-[#FF3B71]'
                                }`}
                                onClick={() => handleStatusChange(student.id, 'Present')}
                            >
                                Present
                            </button>
                            <button
                                className={`px-6 py-2 rounded-full font-medium transition ${
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
            </div>

            <button 
                onClick={handleSaveAttendance} 
                className="mt-8 w-full py-3 bg-[#FF99B6] text-white font-bold text-lg rounded-md hover:bg-[#FF3B71] transition-all duration-300 shadow-lg"
            >
                Save Attendance
            </button>
        </section>
    );
}

export default MeetingDetails;
