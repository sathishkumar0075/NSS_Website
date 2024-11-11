// RoleBasedDropdown.js
import React, { useState } from 'react';
import { useUser } from '../../UserContext.js'; // Adjust the import based on your file structure
import { Link } from 'react-router-dom'; // Use Link for routing

const RoleBasedDropdown = () => {
  const { user } = useUser();
  console.log("User at dropdown", user);
  
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when an option is selected
  const handleOptionClick = (option) => {
    console.log('Selected option:', option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-md px-4 py-2 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
          onClick={toggleDropdown}
        >
          Options
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {user ? (
              <>
                {user.role === 'volunteer' && (
                  <>
                    {/* Pass the userId as a parameter to the URL */}
                    <Link
                      to={`/attendance/${user.reg_no}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                      onClick={() => handleOptionClick('Attendance')}
                    >
                      Attendance
                    </Link>
                    <Link
                      to={`/list`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                      onClick={() => handleOptionClick('Meetings')}
                    >
                      Meetings
                    </Link>
                  </>
                )}
                
              </>
            ) : (
              <Link
                to={"/login"}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
                onClick={() => handleOptionClick('Login')}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleBasedDropdown;
