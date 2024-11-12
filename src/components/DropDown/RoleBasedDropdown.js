import React, { useState } from 'react';
import { useUser } from '../../UserContext.js';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Menu } from 'antd';
import { useContext } from 'react';
//import { UserContext } from '../../UserContext.js';

const RoleBasedDropdown = () => {
  const { user, logout } = useUser();
  console.log("User Role in Dropdown: ", user?.role);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Define dropdown menu items based on user role
  const menuItems = (
    <Menu onClick={() => setIsOpen(false)} className="rounded-lg shadow-lg border border-gray-200">
      {!user || user.role === null ? (
        // If no user or user.role is null, show login option
        <Menu.Item key="login">
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-150 ease-in-out"
          >
            Login
          </Link>
        </Menu.Item>
      ) : (
        <>
          {/* Show options based on role */}
          {user.role === 'volunteer' && (
            <>
              <Menu.Item key="attendance">
                <Link
                  to={`/attendance/${user.reg_no}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-150 ease-in-out"
                >
                  Attendance
                </Link>
              </Menu.Item>
              <Menu.Item key="meetings">
                <Link
                  to="/list"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-150 ease-in-out"
                >
                  Meetings
                </Link>
              </Menu.Item>
            </>
          )}
          
          {user.role === 'admin' && (
            <Menu.Item key="adminDashboard">
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-150 ease-in-out"
              >
                Admin Dashboard
              </Link>
            </Menu.Item>
          )}

          {/* Logout option for all logged-in users */}
          <Menu.Item key="logout" onClick={logout}>
            <div className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-700 transition duration-150 ease-in-out">
              Logout
            </div>
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menuItems}
      trigger={['click']}
      visible={isOpen}
      onVisibleChange={setIsOpen}
      className="relative"
    >
      <Avatar
        size="large"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a95f273ee9ed9d6ab92224ad31a585c48bcb5dce4ba97b2dff79f23adbfa09?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
        alt="User Avatar"
        onClick={toggleDropdown}
        className="cursor-pointer border border-gray-300 shadow-md transition-all duration-200 transform hover:scale-105"
      />
    </Dropdown>
  );
};

export default RoleBasedDropdown;
