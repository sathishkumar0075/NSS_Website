import React from 'react';

function MeetingItem({ title, schedule, iconSrc }) {
  return (
    <li className="flex z-10 flex-wrap gap-5 justify-between p-10 text-lg bg-black bg-opacity-0 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="self-start font-semibold text-zinc-600">{title}</h3>
        <p className="mt-7 text-neutral-400">{schedule}</p>
      </div>
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 my-auto aspect-[0.67] w-[18px]" />
    </li>
  );
}

export default MeetingItem;