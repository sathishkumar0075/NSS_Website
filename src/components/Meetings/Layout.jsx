import React from 'react';
import Sidebar from './Sidebar.jsx';
import MeetingDetails from './MeetingDetails.jsx';
import Header from '../Header.js';

function Layout() {
  return (
    <>
    <div className="flex overflow-hidden flex-col pt-16 bg-white">
      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </div>
    <div className='flex gap-10 ml-32'>
    <Sidebar/>
    <MeetingDetails/>
    </div>
    </>
  );
}

export default Layout;