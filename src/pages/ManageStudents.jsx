import React, { useState } from "react";
import { FiSearch, FiMail, FiUserPlus, FiDownload, FiEdit2, FiEye, FiUserX } from "react-icons/fi";
import { motion } from "framer-motion";

// Dummy student data
const students = [
  {
    id: "#1001",
    name: "Alice",
    email: "alice@mail.com",
    course: "Flutter Bootcamp",
    progress: 70,
    status: "Active",
  },
  {
    id: "#1002",
    name: "Bob",
    email: "bob@mail.com",
    course: "React Mastery",
    progress: 40,
    status: "Inactive",
  },
  {
    id: "#1003",
    name: "Charlie",
    email: "charlie@mail.com",
    course: "Python Basics",
    progress: 95,
    status: "Active",
  },
  {
    id: "#1004",
    name: "Daisy",
    email: "daisy@mail.com",
    course: "Java Essentials",
    progress: 20,
    status: "Active",
  },
];

export default function ManageStudents() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");

  // Filtered students
  const filtered = students.filter(s =>
    (s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter ? s.status === statusFilter : true) &&
    (courseFilter ? s.course === courseFilter : true)
  );

  // Overview stats (dummy)
  const total = students.length;
  const active = students.filter(s => s.status === "Active").length;
  const inactive = students.filter(s => s.status === "Inactive").length;
  const newToday = 1;
  const newWeek = 2;

  return (
    <div>
      {/* Overview Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div whileHover={{ scale: 1.04 }} className="bg-indigo-100 text-indigo-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-2xl">{total}</div>
          <div className="text-sm">Total Students</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="bg-green-100 text-green-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-2xl">{active}</div>
          <div className="text-sm">Active Students</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="bg-red-100 text-red-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-2xl">{inactive}</div>
          <div className="text-sm">Inactive Students</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-100 text-blue-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-lg">{newToday} Today / {newWeek} This Week</div>
          <div className="text-sm">New Registrations</div>
        </motion.div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div className="flex gap-2">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or ID"
              className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none transition w-48 md:w-64"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select
            className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
            value={courseFilter}
            onChange={e => setCourseFilter(e.target.value)}
          >
            <option value="">All Courses</option>
            {[...new Set(students.map(s => s.course))].map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 font-semibold shadow">
            <FiUserPlus /> Add Student
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 font-semibold shadow">
            <FiDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold flex items-center gap-1">
          <FiMail /> Email Selected
        </button>
        <button className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded font-semibold flex items-center gap-1">
          <FiUserX /> Deactivate Selected
        </button>
        <button className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded font-semibold flex items-center gap-1">
          <FiUserPlus /> Assign to Course
        </button>
      </div>

      {/* Table/List */}
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-indigo-50 text-indigo-900">
              <th className="py-3 px-4 text-left">Student ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Course Enrolled</th>
              <th className="py-3 px-4 text-left">Progress</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student, i) => (
              <tr key={student.id} className="border-b hover:bg-indigo-50 transition">
                <td className="py-2 px-4 font-mono">{student.id}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.email}</td>
                <td className="py-2 px-4">{student.course}</td>
                <td className="py-2 px-4">
                  <div className="w-24 bg-gray-100 rounded-full h-3 relative">
                    <div
                      className={`h-3 rounded-full ${student.progress > 80 ? "bg-green-500" : student.progress > 50 ? "bg-yellow-400" : "bg-red-400"}`}
                      style={{ width: `${student.progress}%` }}
                    />
                    <span className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-700 font-bold top-0">{student.progress}%</span>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${student.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {student.status}
                  </span>
                </td>
                <td className="py-2 px-4 flex gap-2">
                  <button title="View" className="text-blue-600 hover:text-blue-800"><FiEye /></button>
                  <button title="Edit" className="text-indigo-600 hover:text-indigo-800"><FiEdit2 /></button>
                  <button title="Suspend" className="text-red-500 hover:text-red-700"><FiUserX /></button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-400">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
