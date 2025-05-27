import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaLock, FaShieldAlt } from 'react-icons/fa';

const PayOnline = () => {
  const [selectedFee, setSelectedFee] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const feeTypes = [
    { id: 'tuition', name: 'Tuition Fee', amount: 50000 },
    { id: 'exam', name: 'Examination Fee', amount: 5000 },
    { id: 'library', name: 'Library Fee', amount: 2000 },
    { id: 'sports', name: 'Sports Fee', amount: 3000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pay Online</h1>
          <p className="text-lg text-gray-600">Secure and convenient payment options for all your fees</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fee Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Fee Type</h2>
            <div className="space-y-4">
              {feeTypes.map((fee) => (
                <div
                  key={fee.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-colors duration-300 ${
                    selectedFee === fee.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-400'
                  }`}
                  onClick={() => setSelectedFee(fee.id)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{fee.name}</span>
                    <span className="text-indigo-600 font-semibold">₹{fee.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Payment Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 rounded-lg border-2 flex items-center justify-center space-x-2 ${
                      paymentMethod === 'card'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-400'
                    }`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <FaCreditCard className="text-indigo-600" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    className={`p-4 rounded-lg border-2 flex items-center justify-center space-x-2 ${
                      paymentMethod === 'netbanking'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-400'
                    }`}
                    onClick={() => setPaymentMethod('netbanking')}
                  >
                    <FaShieldAlt className="text-indigo-600" />
                    <span>Net Banking</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FaLock className="text-indigo-600" />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <button
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                disabled={!selectedFee}
              >
                <FaShieldAlt />
                <span>Pay Securely</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PayOnline; 