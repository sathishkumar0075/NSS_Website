// client/src/UserContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // State to hold any login error

  const login = async (email, password) => {
    console.log("Pinged at user context login");
    console.log(email, password);
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      // Assuming the response contains token and role
      setUser({ token: response.data.token,reg_no:response.data.reg_no, role: response.data.role });
      localStorage.setItem('token', response.data.token); // Save token in local storage
      localStorage.setItem('role', response.data.role); // Save role in local storage
      console.log("The User at context : ",user);
      setError(null); // Clear any previous errors
      console.log("Login successful:", response.data); // Log the successful login response
      return { status: true, role: response.data.role }; // Indicate successful login
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password.'); // Set error message for feedback
      return { status: false, role: "" }; // Indicate failed login
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Clear token from local storage
    localStorage.removeItem('role'); // Clear role from local storage
  };

  // Optional: To restore user from local storage when app loads
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token) {
      setUser({ token, role });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, error }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);
