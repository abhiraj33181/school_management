import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import ManageStudents from "./ManageStudents";

const dashboardCards = [
  // ... your cards (same as before)
];

const quickActions = [
  // ... your quick actions (same as before)
];

// Use keys for menu items for easy comparison
const sidebarMenu = [
  { key: "dashboard", label: "Dashboard" },
  { key: "manageStudents", label: "Manage Students" },
  { key: "examinations", label: "Examinations" },
  { key: "studentExams", label: "Student Exams" },
  { key: "certificates", label: "Certificates" },
  { key: "oldCertificates", label: "Old Certificates" },
  { key: "studentWallet", label: "Student Wallet" },
  { key: "userManagement", label: "User Management" },
];

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Main content render logic
  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <>
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
              {quickActions.map((action, i) => (
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0px 4px 24px rgba(0,0,0,0.12)" }}
                  whileTap={{ scale: 0.97 }}
                  key={action.label}
                  className={`text-white px-4 py-2 rounded-lg font-semibold shadow-md focus:outline-none transition ${action.color}`}
                  style={{ minWidth: 140 }}
                >
                  {action.label}
                </motion.button>
              ))}
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
                  className={`rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300 cursor-pointer ${card.bg} ${card.text} flex flex-col justify-between`}
                >
                  <div className="font-semibold text-lg mb-2">{card.title}</div>
                  <div className="text-base">{card.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Example: Balance Fees Report */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
              >
                <div className="font-semibold text-lg mb-2">Balance Fees Report</div>
                <div className="flex items-center">
                  <svg className="w-16 h-16 mr-4" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <motion.circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#facc15"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                      strokeDashoffset="0"
                      initial={{ strokeDasharray: "0,100" }}
                      animate={{ strokeDasharray: "57,100" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </svg>
                  <div>
                    <div className="text-2xl font-bold">57%</div>
                    <div className="text-gray-500">Balance Fees: 55100</div>
                  </div>
                </div>
              </motion.div>

              {/* Example: Certificates Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-green-200 rounded-xl shadow p-6"
              >
                <div className="font-semibold text-lg mb-2">Certificates</div>
                <div>Approval Pending: <b>0</b></div>
                <div>Certificate Approved: <b>11</b></div>
              </motion.div>
            </div>
          </>
        );
      case "manageStudents":
        return <ManageStudents />;
      // Add other menu cases and components here
      default:
        return <div className="p-8">Select a menu item</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`
          fixed z-30 top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center pt-6 pb-2">
          <div className="w-16 h-16 rounded-full bg-white shadow border-4 border-[#e0e7ff] flex items-center justify-center mb-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/006/102/non_2x/education-logo-design-template-for-school-and-organization-vector.jpg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-lg font-bold text-[#1a2340]">Quanta Computer</span>
        </div>
        {/* Menu */}
        <nav className="flex-1 mt-2 overflow-y-auto">
          <ul className="space-y-1 px-4">
            {sidebarMenu.map((item) => (
              <li
                key={item.key}
                onClick={() => {
                  setActiveMenu(item.key);
                  setSidebarOpen(false); // auto-close on mobile
                }}
                className={`rounded-lg px-3 py-2 font-semibold flex items-center cursor-pointer transition
                  ${activeMenu === item.key
                    ? "bg-[#4f46e5] text-white"
                    : "hover:bg-[#f3f4f6] text-[#1a2340]"
                  }
                `}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="w-full h-20 bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 flex items-center px-4 md:px-8 shadow sticky top-0 z-20"
        >
          {/* Hamburger menu icon (mobile) */}
          <button
            className="text-white mr-4 md:hidden"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Open sidebar"
          >
            <HiMenu className="w-8 h-8" />
          </button>
          {/* Centered Welcome text in a card */}
          <div className="flex-1 flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="bg-white px-8 py-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-2"
              style={{ minWidth: 220 }}
            >
              <span className="text-indigo-800 text-base md:text-xl font-bold tracking-wide drop-shadow">
                Welcome To COMPUTER ACADAMY
              </span>
              <span className="ml-2 animate-wave text-2xl">👋</span>
            </motion.div>
          </div>
          {/* Right: Date/time and avatar */}
          <div className="flex items-center space-x-3 ml-4">
            <span className="text-white font-medium text-xs md:text-sm drop-shadow">
              29-10-2023 01:36:32 PM
            </span>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-blue-200 shadow"
            />
          </div>
        </motion.div>

        {/* Main Dashboard Content or Manage Students */}
        <div className="flex-1 p-4 md:p-8">
          {renderContent()}
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
