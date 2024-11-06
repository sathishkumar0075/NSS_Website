import React from 'react';
import { Link } from 'react-router-dom';
function NavItem({ icon, text, active,to }) {
  const baseClasses = "flex z-10 gap-4 px-7 py-5 text-xs font-semibold whitespace-nowrap bg-black bg-opacity-0 max-md:px-5 max-md:mr-1.5 max-md:ml-1.5";
  const activeClasses = active ? "bg-rose-100 rounded-md" : "";
  const textColorClass = active ? "text-gray-600" : "text-zinc-600";

  return (
    <Link to={to} className={`flex items-center p-2 ${active ? 'bg-blue-500' : ''}`}>
    <div className={`${baseClasses} ${activeClasses}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-[0.95] w-[18px]" />
      <div className={`grow shrink w-[223px] ${textColorClass}`}>{text}</div>
    </div>
    </Link>
  );
}

export default NavItem;