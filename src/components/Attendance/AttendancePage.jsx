import React from 'react';

import AttendanceSummary from './AttendanceSummary';
import AttendanceTable from './AttendanceTable';

const attendanceData = [
  { date: 'May 1,2022', type: 'Mandatory', topic: 'Camp', attended: true },
  { date: 'May 15,2022', type: 'Mandatory', topic: 'Beach Cleaning', attended: true },
  { date: 'May 29,2022', type: 'Mandatory', topic: 'Camp', attended: false },
  { date: 'June 12,2022', type: 'Mandatory', topic: 'workshop', attended: true },
  { date: 'June 26,2022', type: 'Mandatory', topic: 'Training', attended: false },
  { date: 'July 10, 2022', type: 'Mandatory', topic: 'Trip', attended: true },
  { date: 'July 24,2022', type: 'Mandatory', topic: 'xxxxxxxxx', attended: true },
  { date: 'August 7, 2022', type: 'Optional', topic: 'xxxxxxxxxxxxx', attended: false },
  { date: 'August 21, 2022', type: 'Optional', topic: 'xxxxxxxxxxxx', attended: false },
  { date: 'September 4, 2022', type: 'Optional', topic: 'xxxxxxxxxxxxx', attended: true },
  { date: 'September 18, 2022', type: 'Optional', topic: 'xxxxxxxxxx', attended: true },
  { date: 'October 2, 2022', type: 'Optional', topic: 'xxxxxxxx', attended: false },
];

const AttendancePage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-2 bg-black bg-opacity-0">
      <div className="flex flex-col bg-black bg-opacity-0 max-md:max-w-full">
    
        <main className="flex z-10 flex-col pt-1 pb-6 -mt-2.5 bg-gray-50 max-md:max-w-full">
       
          <AttendanceSummary />
          <AttendanceTable attendanceData={attendanceData} />
        </main>
      </div>
    </div>
  );
};

export default AttendancePage;