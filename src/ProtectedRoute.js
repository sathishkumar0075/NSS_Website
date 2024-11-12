// client/src/ProtectedRoute.js
import React from 'react';
import { useUser } from './UserContext.js';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  console.log("At Protected User : ",user);
  
  // Redirect to login if no user is authenticated
  if (!user || !user.role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
