// client/src/ProtectedRoute.js
import React from 'react';
import { useUser } from './UserContext.js';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
