import React from 'react';

const SummaryCard = ({ title, value, extraClass = '' }) => (
  <div className="flex flex-col grow justify-center p-1.5 w-full font-semibold bg-black bg-opacity-0 max-md:mt-2.5">
    <div className={`flex flex-col items-start py-9 pr-16 pl-7 bg-rose-100 rounded-lg max-md:px-5 ${extraClass}`}>
      <div className="text-lg text-neutral-600">{title}</div>
      <div className="mt-4 text-2xl text-zinc-800">{value}</div>
    </div>
  </div>
);

const AttendanceSummary = ({ attendanceData }) => {
  // Calculate the number of meetings attended
  const totalMeetings = attendanceData.length;
  const meetingsAttended = attendanceData.filter((attendance) => attendance.status === 'Present').length;

  // Calculate the attendance percentage
  const attendancePercentage = totalMeetings > 0 ? (meetingsAttended / totalMeetings) * 100 : 0;

  return (
    <section className="flex flex-col items-start self-center mt-12 w-full max-w-[1059px] max-md:mt-10 max-md:max-w-full">
      <h1 className="text-4xl font-semibold text-zinc-900 max-md:ml-2">Your attendance</h1>
      <p className="mt-8 text-base font-semibold text-gray-400 max-md:max-w-full">
        The Volunteer's meets every other week. Here's your attendance summary.
      </p>
      <h2 className="mt-11 text-xl font-semibold text-neutral-600 max-md:mt-10 max-md:ml-2">Summary</h2>
      <div className="self-stretch mt-5 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <SummaryCard title="Meetings attended" value={meetingsAttended} />
          <SummaryCard title="Meetings scheduled" value={totalMeetings} />
          <SummaryCard
            title={
              <div className="flex gap-6 text-base text-zinc-600">
                <div>Attendance</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36b44ae6e12f3b2bb358e43135039a7bf5a26afcd4953e41e04d57ab48b270df?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 aspect-[1.07] w-[15px]" />
              </div>
            }
            value={`${attendancePercentage.toFixed(2)}%`}
            extraClass="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AttendanceSummary;
