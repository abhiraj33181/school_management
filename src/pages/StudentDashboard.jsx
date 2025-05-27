import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt, FaFileAlt, FaMoneyBillWave, FaUserGraduate } from 'react-icons/fa';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentInfo = {
    name: "John Doe",
    rollNumber: "STU2024001",
    course: "Web Development",
    batch: "WD-2024",
    attendance: "85%",
    upcomingExams: [
      { subject: "HTML & CSS", date: "2024-03-25", time: "10:00 AM" },
      { subject: "JavaScript", date: "2024-03-28", time: "02:00 PM" }
    ],
    recentResults: [
      { subject: "Python Basics", marks: 85, total: 100, grade: "A" },
      { subject: "Database", marks: 78, total: 100, grade: "B+" }
    ],
    feeStatus: {
      total: 50000,
      paid: 30000,
      pending: 20000,
      nextDue: "2024-04-15"
    }
  };

  const quickActions = [
    { label: "View Schedule", icon: <FaCalendarAlt />, color: "bg-blue-500" },
    { label: "Download Certificate", icon: <FaFileAlt />, color: "bg-green-500" },
    { label: "Pay Fees", icon: <FaMoneyBillWave />, color: "bg-purple-500" },
    { label: "View Results", icon: <FaUserGraduate />, color: "bg-orange-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Student Profile Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src={`https://ui-avatars.com/api/?name=${studentInfo.name}&background=random`}
            alt={studentInfo.name}
            className="w-20 h-20 rounded-full border-4 border-indigo-100"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{studentInfo.name}</h2>
            <p className="text-gray-600">Roll Number: {studentInfo.rollNumber}</p>
            <p className="text-gray-600">Course: {studentInfo.course}</p>
            <p className="text-gray-600">Batch: {studentInfo.batch}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${action.color} text-white p-4 rounded-lg shadow-md flex flex-col items-center space-y-2`}
          >
            {action.icon}
            <span className="text-sm font-medium">{action.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Exams</h3>
          <div className="space-y-4">
            {studentInfo.upcomingExams.map((exam, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{exam.subject}</p>
                  <p className="text-sm text-gray-600">{exam.date} at {exam.time}</p>
                </div>
                <FaBook className="text-indigo-600" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Results</h3>
          <div className="space-y-4">
            {studentInfo.recentResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{result.subject}</p>
                  <p className="text-sm text-gray-600">
                    Marks: {result.marks}/{result.total}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  result.grade === 'A' ? 'bg-green-100 text-green-800' :
                  result.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {result.grade}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fee Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Status</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Fees</span>
              <span className="font-medium">₹{studentInfo.feeStatus.total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Paid Amount</span>
              <span className="font-medium text-green-600">₹{studentInfo.feeStatus.paid}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pending Amount</span>
              <span className="font-medium text-red-600">₹{studentInfo.feeStatus.pending}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Due Date</span>
              <span className="font-medium">{studentInfo.feeStatus.nextDue}</span>
            </div>
          </div>
        </motion.div>

        {/* Attendance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
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
                  stroke="#4f46e5"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                  initial={{ strokeDasharray: "0,100" }}
                  animate={{ strokeDasharray: `${parseInt(studentInfo.attendance)},100` }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">{studentInfo.attendance}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard; 