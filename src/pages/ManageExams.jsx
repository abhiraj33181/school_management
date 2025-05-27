import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaFileAlt } from 'react-icons/fa';

const ManageExams = () => {
  const [activeTab, setActiveTab] = useState('exams');

  const exams = [
    {
      id: 1,
      title: "Python Programming",
      date: "2024-03-15",
      duration: "60 mins",
      totalQuestions: 50,
      passingMarks: 35,
      status: "Scheduled"
    },
    {
      id: 2,
      title: "Web Development",
      date: "2024-03-20",
      duration: "90 mins",
      totalQuestions: 75,
      passingMarks: 50,
      status: "Draft"
    }
  ];

  const questions = [
    {
      id: 1,
      question: "What is Python?",
      options: [
        "A programming language",
        "A snake",
        "A game",
        "A database"
      ],
      correctAnswer: 0,
      marks: 2
    },
    {
      id: 2,
      question: "Which of the following is a Python framework?",
      options: [
        "React",
        "Django",
        "Angular",
        "Vue"
      ],
      correctAnswer: 1,
      marks: 2
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Manage Exams</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaPlus /> Create New Exam
        </motion.button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('exams')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'exams'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Exams
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'questions'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Questions
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'results'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Results
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'exams' && (
          <div className="space-y-4">
            {exams.map((exam) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{exam.title}</h3>
                    <div className="mt-2 space-y-1 text-sm text-gray-500">
                      <p>Date: {exam.date}</p>
                      <p>Duration: {exam.duration}</p>
                      <p>Total Questions: {exam.totalQuestions}</p>
                      <p>Passing Marks: {exam.passingMarks}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      exam.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {exam.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit className="w-5 h-5" />
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

        {activeTab === 'questions' && (
          <div className="space-y-4">
            {questions.map((q) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">{q.question}</h3>
                    <div className="space-y-2">
                      {q.options.map((option, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg ${
                            index === q.correctAnswer
                              ? 'bg-green-50 border border-green-200'
                              : 'bg-gray-50'
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      Marks: {q.marks}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit className="w-5 h-5" />
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

        {activeTab === 'results' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Exam Results</h3>
              <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                <FaFileAlt className="w-5 h-5" />
                Export Results
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exam
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          John Doe
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Python Programming</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">45/50</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Passed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageExams; 