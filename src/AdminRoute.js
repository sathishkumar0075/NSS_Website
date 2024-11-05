// client/src/AdminRoute.js
import React from 'react';
import { useUser } from './UserContext.js';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user } = useUser();
  return user && user.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminRoute;
