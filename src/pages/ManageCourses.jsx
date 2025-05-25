import React, { useState } from "react";
import { FiSearch, FiEdit2, FiEye, FiUserX, FiPlus, FiDownload, FiUserCheck } from "react-icons/fi";
import { motion } from "framer-motion";

// Dummy course data
const courses = [
  {
    id: "C102",
    title: "React Native Pro",
    instructor: "John Smith",
    enrolled: 120,
    duration: "4 Weeks",
    status: "Active",
    completion: 85,
    popular: true,
  },
  {
    id: "C103",
    title: "Flutter Bootcamp",
    instructor: "Alice Johnson",
    enrolled: 95,
    duration: "6 Weeks",
    status: "Inactive",
    completion: 60,
    popular: false,
  },
  {
    id: "C104",
    title: "Python Essentials",
    instructor: "Bob Lee",
    enrolled: 180,
    duration: "8 Weeks",
    status: "Active",
    completion: 90,
    popular: true,
  },
  {
    id: "C105",
    title: "Java Mastery",
    instructor: "Daisy Ray",
    enrolled: 70,
    duration: "5 Weeks",
    status: "Active",
    completion: 75,
    popular: false,
  },
];

export default function ManageCourses() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);

  // Filtered courses
  const filtered = courses.filter(c =>
    (c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter ? c.status === statusFilter : true) &&
    (!showOnlyPopular || c.popular)
  );

  // Overview stats (dummy)
  const total = courses.length;
  const active = courses.filter(c => c.status === "Active").length;
  const inactive = courses.filter(c => c.status === "Inactive").length;
  const avgCompletion = Math.round(
    courses.reduce((sum, c) => sum + c.completion, 0) / courses.length
  );
  const mostPopular = courses.reduce(
    (prev, curr) => (curr.enrolled > prev.enrolled ? curr : prev),
    courses[0]
  );

  return (
    <div>
      {/* Overview Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div whileHover={{ scale: 1.04 }} className="bg-indigo-100 text-indigo-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-2xl">{total}</div>
          <div className="text-sm">Total Courses</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="bg-green-100 text-green-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-2xl">{active}</div>
          <div className="text-sm">Active Courses</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="bg-red-100 text-red-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-2xl">{inactive}</div>
          <div className="text-sm">Inactive Courses</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} className="bg-blue-100 text-blue-800 rounded-xl p-4 shadow flex flex-col items-center">
          <div className="font-bold text-lg">{avgCompletion}%</div>
          <div className="text-sm">Avg. Completion Rate</div>
        </motion.div>
      </div>

      {/* Popular Course Widget */}
      <div className="mb-6">
        <div className="bg-yellow-100 text-yellow-800 rounded-xl p-4 shadow flex items-center gap-4">
          <span className="font-bold">Most Popular:</span>
          <span className="font-semibold">{mostPopular.title}</span>
          <span className="text-xs">({mostPopular.enrolled} students)</span>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div className="flex gap-2 flex-wrap">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, instructor, or ID"
              className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none transition w-full md:w-64"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none w-full md:w-auto"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyPopular}
              onChange={e => setShowOnlyPopular(e.target.checked)}
              className="accent-indigo-500"
            />
            Most Popular Only
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 font-semibold shadow w-full md:w-auto">
            <FiPlus /> Create Course
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 font-semibold shadow w-full md:w-auto">
            <FiDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Table for Desktop */}
      <div className="hidden md:block">
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-indigo-50 text-indigo-900">
                <th className="py-3 px-4 text-left">Course ID</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Instructor</th>
                <th className="py-3 px-4 text-left">Enrolled Students</th>
                <th className="py-3 px-4 text-left">Duration</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Completion</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((course, i) => (
                <tr key={course.id} className="border-b hover:bg-indigo-50 transition">
                  <td className="py-2 px-4 font-mono">{course.id}</td>
                  <td className="py-2 px-4">{course.title}</td>
                  <td className="py-2 px-4">{course.instructor}</td>
                  <td className="py-2 px-4">{course.enrolled}</td>
                  <td className="py-2 px-4">{course.duration}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${course.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <div className="w-24 bg-gray-100 rounded-full h-3 relative">
                      <div
                        className={`h-3 rounded-full ${course.completion > 80 ? "bg-green-500" : course.completion > 50 ? "bg-yellow-400" : "bg-red-400"}`}
                        style={{ width: `${course.completion}%` }}
                      />
                      <span className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-700 font-bold top-0">{course.completion}%</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 flex gap-2">
                    <button title="View" className="text-blue-600 hover:text-blue-800"><FiEye /></button>
                    <button title="Edit" className="text-indigo-600 hover:text-indigo-800"><FiEdit2 /></button>
                    <button title="Deactivate" className="text-red-500 hover:text-red-700"><FiUserX /></button>
                    <button title="Assign Instructor" className="text-green-600 hover:text-green-800"><FiUserCheck /></button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-gray-400">
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* List View for Mobile */}
      <div className="block md:hidden space-y-4">
        {filtered.map(course => (
          <div key={course.id} className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs text-gray-500">{course.id}</span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${course.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {course.status}
              </span>
            </div>
            <div className="font-bold text-lg mb-1">{course.title}</div>
            <div className="text-sm text-gray-600 mb-2">Instructor: {course.instructor}</div>
            <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mb-2 gap-2">
              <span>Enrolled: {course.enrolled}</span>
              <span>Duration: {course.duration}</span>
              <span>Completion: {course.completion}%</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button title="View" className="text-blue-600 hover:text-blue-800"><FiEye /></button>
              <button title="Edit" className="text-indigo-600 hover:text-indigo-800"><FiEdit2 /></button>
              <button title="Deactivate" className="text-red-500 hover:text-red-700"><FiUserX /></button>
              <button title="Assign Instructor" className="text-green-600 hover:text-green-800"><FiUserCheck /></button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-400">No courses found.</div>
        )}
      </div>
    </div>
  );
}
