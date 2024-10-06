import React from 'react';

const TableHeader = () => (
  <div className="flex flex-col px-4 py-6 w-full bg-black bg-opacity-0">
    <div className="flex justify-between max-w-[900px] w-full mx-auto text-base font-semibold">
      <div className="text-neutral-500 flex-1">Meeting date</div>
      <div className="text-zinc-600 ml-[160px] flex-1">Meeting type</div>
      <div className="text-neutral-500 ml-[100px] flex-1">Meeting topic</div>
      <div className="text-zinc-600 ml-[100px] flex-1">Attended</div>
    </div>
    <div className="flex mt-4 h-0.5 bg-zinc-200 w-full max-w-[900px] mx-auto" />
  </div>
);

const TableRow = ({ date, type, topic, attended }) => (
  <div className="flex flex-col px-4 py-4 w-full">
    <div className="flex justify-between max-w-[900px] w-full mx-auto">
      <div className="text-gray-400 flex-1">{date}</div>
      <div className="flex flex-1 justify-center">
        <div className="px-4 py-2 bg-rose-100 rounded-lg text-neutral-500">
          {type}
        </div>
      </div>
      <div className="text-gray-400 flex-1 text-center">{topic}</div>
      <div className="flex flex-1 justify-center">
        <div className="px-4 py-2 bg-rose-100 rounded-lg text-zinc-500">
          {attended ? 'Yes' : 'No'}
        </div>
      </div>
    </div>
    <div className="flex mt-3 h-0.5 bg-zinc-200 w-full max-w-[900px] mx-auto" />
  </div>
);

const AttendanceTable = ({ attendanceData }) => {
  return (
    <div className="flex flex-col w-full py-4">
      <TableHeader />
      {attendanceData.map((item, index) => (
        <TableRow key={index} {...item} />
      ))}
    </div>
  );
};

export default AttendanceTable;
