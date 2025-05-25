import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiLockClosed, HiMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
     e.preventDefault();
    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard"); // Redirect to dashboard
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-indigo-500 to-blue-500">
      {/* Animated card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ rotate: -12 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mb-4 border-4 border-indigo-100"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/046/006/102/non_2x/education-logo-design-template-for-school-and-organization-vector.jpg"
            alt="Quanta Computer Logo"
            className="w-12 h-12 object-contain"
          />
        </motion.div>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-indigo-800 mb-2 text-center"
        >
          Welcome Back!
        </motion.h2>
        <p className="text-gray-500 mb-6 text-center">
          Login to your Quanta Computer Dashboard
        </p>
        {/* Form */}
        <form className="w-full space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 text-lg" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 text-lg" />
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:from-indigo-700 hover:to-blue-600"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
        {/* Footer */}
        <div className="mt-6 text-gray-400 text-xs text-center">
          © {new Date().getFullYear()} Quanta Computer. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}
