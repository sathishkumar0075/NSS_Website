import React from 'react';

// Utility function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad with zero
  const year = date.getFullYear(); // Get full year
  return `${day}-${month}-${year}`; // Format to dd-mm-yyyy
};

function MeetingItem({ title, date, time, venue }) {
  return (
    <li className="flex z-10 flex-wrap gap-5 justify-between p-10 text-lg bg-black bg-opacity-0 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="self-start font-semibold text-zinc-600">{title}</h3>
        <p className="mt-7 text-neutral-400">{formatDate(date)} | {time}</p>
        <p className="mt-7 text-neutral-400">{venue}</p>
      </div>
      {/* <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 my-auto aspect-[0.67] w-[18px]" /> */}
    </li>
  );
}

export default MeetingItem;
