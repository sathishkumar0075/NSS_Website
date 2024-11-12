import React from "react";
import AttendanceList from "./AttendanceList";
import UpcomingMeetings from "./UpcomingMeetings";

function AttendanceTracker() {
  return (
    <div className="flex overflow-hidden flex-col font-semibold bg-black bg-opacity-0">
    
      <main className="flex z-10 flex-col pt-1 pb-7 -mt-2.5 w-full  max-md:max-w-full">
        <div className="flex shrink-0 h-0.5  max-md:max-w-full" />
        <div className="flex flex-col self-center mt-10 w-full max-w-[1062px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between  whitespace-nowrap max-md:mr-0.5 max-md:max-w-full">
            <h1 className="my-auto text-4xl text-zinc-900">Meetings</h1>
           
          </div>
         
          <AttendanceList />
          {/* <UpcomingMeetings /> */}
        </div>
      </main>
    </div>
  );
}

export default AttendanceTracker;