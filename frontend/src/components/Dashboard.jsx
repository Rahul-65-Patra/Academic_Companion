import React from 'react';
import Subject from './Subject';
import Assignment from './Assignment';
import Profile from './Profile';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          🎓 Academic Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">📚 Subjects</h2>
            <Subject />
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">📝 Assignments</h2>
            <Assignment />
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
            <h2 className="text-xl font-semibold text-green-600 mb-4">🙋‍♂️ Profile</h2>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
