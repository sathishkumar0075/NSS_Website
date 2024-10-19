import React from "react";
import AttendanceList from "./AttendanceList";
import UpcomingMeetings from "./UpcomingMeetings";

function AttendanceTracker() {
  return (
    <div className="flex overflow-hidden flex-col font-semibold bg-black bg-opacity-0">
    
      <main className="flex z-10 flex-col pt-1 pb-7 -mt-2.5 w-full bg-slate-50 max-md:max-w-full">
        <div className="flex shrink-0 h-0.5 bg-neutral-100 max-md:max-w-full" />
        <div className="flex flex-col self-center mt-10 w-full max-w-[1062px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between ml-3 whitespace-nowrap max-md:mr-0.5 max-md:max-w-full">
            <h1 className="my-auto text-4xl text-zinc-900">Attendance</h1>
            <button className="flex flex-col justify-center px-2 py-2 text-base bg-black bg-opacity-0 text-zinc-700">
              <span className="px-6 py-3.5 bg-rose-100 rounded-xl max-md:px-5">Export</span>
            </button>
          </div>
          <h2 className="self-start mt-12 ml-3 text-xl text-zinc-700 max-md:mt-10 max-md:ml-2.5">
            Upcoming
          </h2>
          <AttendanceList />
          {/* <UpcomingMeetings /> */}
        </div>
      </main>
    </div>
  );
}

export default AttendanceTracker;