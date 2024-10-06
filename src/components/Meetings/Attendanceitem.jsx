import React from 'react';

function AttendanceItem({ name, status, image }) {
  return (
    <div className="flex z-10 gap-4 self-stretch py-3 pr-10 pl-5 mt-4 font-semibold bg-black bg-opacity-0 max-md:pr-5 max-md:mr-1">
      <img loading="lazy" src={image} alt={`${name}'s profile`} className="object-contain shrink-0 w-14 rounded-3xl aspect-square" />
      <div className="flex flex-col my-auto">
        <div className="self-start text-base text-zinc-600">{status}</div>
        <div className="mt-3 text-xs text-gray-400">{name}</div>
      </div>
    </div>
  );
}

export default AttendanceItem;