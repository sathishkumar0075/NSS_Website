// client/src/AdminRoute.js
import React from 'react';
import { useUser } from './UserContext.js';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user } = useUser();
  console.log("At Admin Route : ",user);

  // Redirect if user is not an admin
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
