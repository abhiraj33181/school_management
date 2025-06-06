import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import ManageStudents from "./ManageStudents";
import ManageCourses from "./ManageCourses";
import FeesDetails from "./FeesDetails";
import ManageExams from "./ManageExams";
import Certificates from "./Certificates";
import UserManagement from "./UserManagement";
import { FaImage, FaQuoteLeft, FaCog, FaNewspaper } from 'react-icons/fa';

const dashboardCards = [
  {
    title: "Students Enquiries",
    value: (
      <>
        <div>Total Enquiry: <b>3</b></div>
        <div>Total Admission: <b>17</b></div>
        <div>Franchise Admission: <b>2</b></div>
        <div>Admission Count: <b>19</b></div>
      </>
    ),
    bg: "bg-white",
    text: "text-gray-800",
  },
  {
    title: "Fees Overview",
    value: (
      <>
        <div>Total Fees: <b>₹126000.00</b></div>
        <div>Paid Fees: <b>₹45700.00</b></div>
        <div>Balance: <b>₹80300.00</b></div>
      </>
    ),
    bg: "bg-green-100",
    text: "text-green-900",
  },
  {
    title: "Fees Section",
    value: (
      <>
        <div>Paid Fees: <b>45700.00</b></div>
        <div>Balance Fees: <b>80300.00</b></div>
        <div>Total Fees: <b>126000.00</b></div>
      </>
    ),
    bg: "bg-red-100",
    text: "text-red-900",
  },
  {
    title: "Course Section",
    value: (
      <>
        <div>Total Courses: <b>8</b></div>
        <div>Total Courses Multi Subject: <b>1</b></div>
      </>
    ),
    bg: "bg-green-200",
    text: "text-green-900",
  },
];

const quickActions = [
  { label: "Direct Admission", color: "bg-green-500" },
  { label: "Fees Details", color: "bg-blue-500" },
  { label: "Take Attendance", color: "bg-orange-500" },
  { label: "Batch Details", color: "bg-yellow-500" },
  { label: "Support", color: "bg-cyan-500" },
];

const websiteManagement = [
  {
    title: "Carousel Images",
    icon: <FaImage className="w-6 h-6" />,
    description: "Manage homepage slider images",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Testimonials",
    icon: <FaQuoteLeft className="w-6 h-6" />,
    description: "Manage student testimonials",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "News & Updates",
    icon: <FaNewspaper className="w-6 h-6" />,
    description: "Manage news and announcements",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Website Settings",
    icon: <FaCog className="w-6 h-6" />,
    description: "Configure website settings",
    color: "from-red-500 to-red-600"
  }
];

const sidebarMenu = [
  "Dashboard",
  "Manage Students",
  "Courses",
  "Student Exams",
  "Certificates",
  "Fees Details",
  "Website Management",
  "User Management",
];

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`
          fixed z-30 top-0 left-0 h-screen w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 shadow-lg flex flex-col
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center pt-6 pb-2">
          <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-indigo-200 flex items-center justify-center mb-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/006/102/non_2x/education-logo-design-template-for-school-and-organization-vector.jpg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-lg font-bold text-white">Quanta Computer</span>
        </div>
        {/* Menu */}
        <nav className="flex-1 mt-2 overflow-y-auto px-4">
          <ul className="space-y-2">
            {sidebarMenu.map((item, i) => (
              <li
                key={item}
                onClick={() => {
                  setActiveMenu(item);
                  setSidebarOpen(false);
                }}
                className={`rounded-lg px-3 py-2.5 font-semibold flex items-center cursor-pointer transition-all duration-200
                  ${activeMenu === item
                    ? "bg-white text-indigo-900 shadow-lg"
                    : "text-indigo-100 hover:bg-indigo-700/50 hover:text-white"
                  }
                `}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Sidebar Footer */}
        <div className="p-4 border-t border-indigo-700/50">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-indigo-200"
            />
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-indigo-200">Administrator</p>
            </div>
          </div>
        </div>
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
          <button
            className="text-white mr-4 md:hidden"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Open sidebar"
          >
            <HiMenu className="w-8 h-8" />
          </button>

          <div className="flex-grow"></div>

          <div className="flex items-center space-x-3">
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

        {/* Main Dashboard Content */}
        <div className="flex-1 p-4 md:p-8">
          {activeMenu === "Manage Students" ? (
            <ManageStudents />
          ) : activeMenu === "Courses" ? (
            <ManageCourses />
          ) : activeMenu === "Fees Details" ? (
            <FeesDetails />
          ) : activeMenu === "Student Exams" ? (
            <ManageExams />
          ) : activeMenu === "Certificates" ? (
            <Certificates />
          ) : activeMenu === "User Management" ? (
            <UserManagement />
          ) : activeMenu === "Website Management" ? (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Website Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {websiteManagement.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${item.color} rounded-xl shadow-lg p-6 text-white hover:shadow-2xl transition duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      {item.icon}
                    </div>
                    <p className="text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Welcome message */}
              <div className="flex-1 flex justify-center mb-5">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="bg-white px-8 py-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-2"
                  style={{ minWidth: 220 }}
                >
                  <span className="text-indigo-800 text-base md:text-xl font-bold tracking-wide drop-shadow">
                    Welcome To Institute Management Portal
                  </span> 
                  {/* <span className="ml-2 animate-wave text-2xl">👋</span> */}
                </motion.div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
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
                {/* Balance Fees Report */}
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

                {/* Certificates Card */}
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
          )}
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
