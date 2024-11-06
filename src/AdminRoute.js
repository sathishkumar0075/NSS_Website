// client/src/AdminRoute.js
import React from 'react';
import { useUser } from './UserContext.js';
import { Navigate } from 'react-router-dom';




const AdminRoute = ({ children }) => {
    console.log("AdminRoute Pinngged !!!");
  const { user } = useUser();
  console.log("User : ",user);
  return children;
};

export default AdminRoute;
