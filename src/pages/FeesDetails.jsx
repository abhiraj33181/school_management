import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaCreditCard, FaHistory, FaDownload, FaPrint } from 'react-icons/fa';

const FeesDetails = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedTerm, setSelectedTerm] = useState('Current');

  const feeDetails = {
    totalFees: 50000,
    paidAmount: 35000,
    pendingAmount: 15000,
    dueDate: '2024-04-15',
    lastPayment: '2024-02-15',
    paymentHistory: [
      {
        date: '2024-02-15',
        amount: 15000,
        mode: 'Online Transfer',
        status: 'Paid'
      },
      {
        date: '2024-01-15',
        amount: 20000,
        mode: 'Credit Card',
        status: 'Paid'
      }
    ]
  };

  const feeBreakdown = [
    {
      category: 'Tuition Fee',
      amount: 30000,
      status: 'Paid'
    },
    {
      category: 'Library Fee',
      amount: 5000,
      status: 'Paid'
    },
    {
      category: 'Laboratory Fee',
      amount: 10000,
      status: 'Pending'
    },
    {
      category: 'Sports Fee',
      amount: 5000,
      status: 'Pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Fees Details</h1>
          <p className="mt-2 text-gray-600">View and manage your fee payments</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Current">Current Term</option>
              <option value="Previous">Previous Term</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Fees</p>
                <h3 className="text-2xl font-bold text-gray-900">₹{feeDetails.totalFees}</h3>
              </div>
              <FaMoneyBillWave className="w-8 h-8 text-blue-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Paid Amount</p>
                <h3 className="text-2xl font-bold text-green-600">₹{feeDetails.paidAmount}</h3>
              </div>
              <FaCreditCard className="w-8 h-8 text-green-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending Amount</p>
                <h3 className="text-2xl font-bold text-red-600">₹{feeDetails.pendingAmount}</h3>
              </div>
              <FaHistory className="w-8 h-8 text-red-500" />
            </div>
          </motion.div>
        </div>

        {/* Fee Breakdown */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Fee Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {feeBreakdown.map((fee, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{fee.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {fee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <FaDownload className="w-5 h-5" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <FaPrint className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment History</h2>
          <div className="space-y-4">
            {feeDetails.paymentHistory.map((payment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                  <p className="text-lg font-medium text-gray-900">₹{payment.amount}</p>
                  <p className="text-sm text-gray-500">{payment.mode}</p>
                </div>
                <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                  {payment.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesDetails; 