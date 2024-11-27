import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, CalendarIcon, PlusCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <HomeIcon className="h-6 w-6" /> },            // HomeIcon is suitable for Dashboard
  { name: 'Take Attendance', path: '/admin/take', icon: <UserGroupIcon className="h-6 w-6" /> },       // UserGroupIcon fits well for attendance
  { name: 'Meetings', path: '/admin/meetings', icon: <CalendarIcon className="h-6 w-6" /> },           // CalendarIcon represents Meetings well
  { name: 'Create Meetings', path: '/admin/new', icon: <PlusCircleIcon className="h-6 w-6" /> },       // PlusCircleIcon suits creating new items
  { name: 'Create Events', path: '/admin/events', icon: <SparklesIcon className="h-6 w-6" /> }, 
  { name: 'Export', path: '/admin/export', icon: <PlusCircleIcon className="h-6 w-6" /> },       // SparklesIcon suggests events or celebrations
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen style={{ backgroundColor: '#FFE3EC' }">
      {/* Sidebar */}
      <nav className="w-1/4 style={{ backgroundColor: '#FFE3EC' }   p-6">
        <h2 className="text-2xl font-semibold text-pink-800 mb-8">Admin Dashboard</h2>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg w-[185px] transition-colors ${
                  location.pathname === item.path
                    ? 'bg-pink-500 text-pink-200'
                    : 'text-pink-900 hover:bg-pink-200'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* <button className="mt-10 w-[185px] p-3 bg-blue-500 text-white rounded-lg font-semibold transition-colors hover:bg-blue-600">
          Create Meeting
        </button> */}
      </nav>
      {/* <div className="flex-grow p-6">
        <Outlet />
      </div> */}
    </div>
  );
}
