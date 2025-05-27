import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaUserEdit, FaUserLock, FaUserShield, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2024-03-15 10:30 AM"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Teacher",
      status: "Active",
      lastLogin: "2024-03-14 02:15 PM"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "2024-03-10 09:45 AM"
    }
  ];

  const roles = [
    {
      id: 1,
      name: "Administrator",
      permissions: ["All Access"],
      usersCount: 2
    },
    {
      id: 2,
      name: "Teacher",
      permissions: ["View Students", "Manage Courses", "Take Attendance"],
      usersCount: 5
    },
    {
      id: 3,
      name: "Staff",
      permissions: ["View Students", "Basic Access"],
      usersCount: 3
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaUserPlus /> Add New User
        </motion.button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('users')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'users'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'roles'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Roles & Permissions
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.role}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-3">
                          <button className="text-blue-600 hover:text-blue-900">
                            <FaUserEdit className="w-5 h-5" />
                          </button>
                          <button className="text-purple-600 hover:text-purple-900">
                            <FaUserLock className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FaTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="space-y-4">
            {roles.map((role) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-500">Users with this role: {role.usersCount}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {role.permissions.map((permission, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                          >
                            {permission}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaUserShield className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement; 