import React from 'react';
import { Bar } from 'react-chartjs-2';

const SummaryCard = ({ title, value, extraClass = '' }) => (
  <div className="flex flex-col grow justify-center  p-1.5 w-full font-semibold bg-black bg-opacity-0 max-md:mt-2.5">
    <div className={`flex flex-col items-start py-9 min-h-[220px] pr-16 pl-7 h-full w-full bg-rose-100 rounded-lg max-md:px-5 ${extraClass}`}>
      <div className="text-lg text-neutral-600">{title}</div>
      <div className="mt-12 text-2xl text-zinc-800">{value}</div>
    </div>
  </div>
);

const Summary = ({ length, average, unitChartData }) => {
  // Log data structure for debugging
  console.log('Length:', length, 'Average:', average, 'Unit Chart Data:', unitChartData);

  // Check if length and average are objects and extract the appropriate values
  const totalMeetings = typeof length === 'object' && length.length ? length.length : length;
  const attendancePercentage = typeof average === 'object' && average.average_attendance_percentage 
    ? average.average_attendance_percentage 
    : average;

  // Set the background color for the bar chart
  const chartData = {
    ...unitChartData,
    datasets: unitChartData.datasets.map(dataset => ({
      ...dataset,
      backgroundColor: '#FFE3EC'  // Set bar color to #FFE3EC
    })),
  };

  return (
    <section className="flex flex-col items-start self-center mt-12 w-full max-w-[1059px] max-md:mt-10 max-md:max-w-full">
      {/* <h2 className="mt-11 text-xl font-semibold text-neutral-600 max-md:mt-10 max-md:ml-2">Summary</h2> */}
      <div className="self-stretch mt-5 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex-1">
            <SummaryCard title="Total Meetings" value={totalMeetings} />
          </div>
          <div className="flex-1">
            <SummaryCard title="Average Attendance" value={`${attendancePercentage}%`} />
          </div>
          <div className="flex flex-col grow justify-center p-1.5 w-full font-semibold bg-black bg-opacity-0 max-md:mt-2.5 flex-1">
            <div className="flex flex-col items-start py-9 pr-16 pl-7 h-full w-full bg-rose-100 rounded-lg max-md:px-5">
              
              <div className="w-full max-h-[150px]">
                <Bar data={chartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
