import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      {/* Optional Header */}
     

      {/* Main Layout Structure */}
      <div className="flex overflow-hidden flex-col pt-16 bg-white">
        <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
          {/* Additional content or header elements can be added here if needed */}
        </div>
      </div>

      <div className="flex gap-10 ml-32">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-grow p-4">
          {/* Outlet renders nested routes defined in App.js */}
          <Outlet />
        </div>
      </div>

      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </>
  );
}

export default Layout;
