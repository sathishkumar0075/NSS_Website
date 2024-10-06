import React from 'react';

function ScheduledMeeting({ image, title, date, attendance }) {
  return (
    <div className="flex z-10 gap-5 justify-between px-5 py-4 mt-3.5 w-full font-semibold bg-black bg-opacity-0">
      <div className="flex gap-4">
        <img loading="lazy" src={image} alt="" className="object-contain shrink-0 w-12 rounded-lg aspect-[1.02]" />
        <div className="flex flex-col my-auto">
          <div className="text-base text-neutral-600">{title}</div>
          <div className="self-start mt-2 text-xs text-gray-400">{date}</div>
        </div>
      </div>
      <div className="my-auto text-sm text-zinc-600">{attendance}</div>
    </div>
  );
}

export default ScheduledMeeting;