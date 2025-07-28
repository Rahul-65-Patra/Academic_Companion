import React from 'react';
import Subject from './Subject';
import Assignment from './Assignment';
import { useNavigate } from 'react-router-dom';
import ExamSchedule from './ExamSchedule';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');  // Clear saved user data
    navigate('/');                    // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 relative">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition cursor-pointer"
      >
        🔒 Logout
      </button>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          🎓 Academic Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">📚 Subjects</h2>
            <Subject />
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">📝 Assignments</h2>
            <Assignment />
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">🗓️ ExamSchedule</h2>
            <ExamSchedule />
          </div>

        </div>
      </div>
    </div>
  );
}
