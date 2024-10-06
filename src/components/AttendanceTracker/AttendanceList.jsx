import React from "react";

function AttendanceList() {
  const meetings = [
    { date: "Jan 1", name: "Meeting 1" },
    { date: "Jan 8", name: "Meeting 2" },
  ];

  return (
    <div className="flex flex-col mt-6 bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex relative flex-col pt-0.5 pb-7 w-full min-h-[265px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb0d0d23646c780af311d030c5144d408dc1eed4948ca2e7393b3fc69a1f02cf?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col pt-7 pb-px bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-col px-1.5 w-full text-base whitespace-nowrap max-md:max-w-full">
            <div className="flex gap-5 justify-between ml-5 max-w-full w-[894px]">
              <div className="text-neutral-500">Date</div>
              <div className="text-neutral-600">Meeting</div>
              <div className="text-neutral-600">Status</div>
              <div className="text-gray-400">Actions</div>
            </div>
            <div className="flex shrink-0 mt-5 bg-gray-100 h-[3px] max-md:max-w-full" />
          </div>
          {meetings.map((meeting, index) => (
            <div key={index} className="flex flex-col px-1.5 pt-4 pb-1 w-full bg-black bg-opacity-0 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-center ml-5 max-w-full w-[875px]">
                <div className="self-stretch my-auto text-base text-gray-400">
                  {meeting.date}
                </div>
                <div className="self-stretch my-auto text-base text-neutral-500">
                  {meeting.name}
                </div>
                <div className="flex gap-28 self-stretch">
                  <div className="flex flex-col justify-center px-2 py-1.5 text-base text-gray-800 bg-black bg-opacity-0">
                    <div className="px-14 py-4 bg-rose-100 rounded-xl max-md:px-5">Not taken</div>
                  </div>
                  <button className="my-auto text-base text-slate-400">Take</button>
                </div>
              </div>
              {index < meetings.length - 1 && (
                <div className="flex shrink-0 mt-5 h-0.5 bg-zinc-200 max-md:max-w-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttendanceList;