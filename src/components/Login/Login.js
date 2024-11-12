import React, { useState } from 'react';
import { useUser } from '../../UserContext.js';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login, error } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    if (res.status) {
      navigate(res.role === "admin" ? "/admin/dashboard" : "/");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "#FFE0E9" }}>
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md mx-auto transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">Welcome Back</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg text-pink-700 font-medium mb-1">Email</label>
            <div className="flex items-center border border-pink-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-pink-500">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address"
                className="w-full text-pink-800 bg-transparent placeholder-pink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-lg text-pink-700 font-medium mb-1">Password</label>
            <div className="flex items-center border border-pink-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-pink-500">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your password"
                className="w-full text-pink-800 bg-transparent placeholder-pink-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold bg-pink-500 hover:bg-pink-600 transition-colors duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        {/* Registration Link */}
        <p className="mt-8 text-center text-pink-700">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-pink-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;