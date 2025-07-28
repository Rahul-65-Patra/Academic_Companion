import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExamSchedule() {
  const [exams, setExams] = useState([]);
  const [newExam, setNewExam] = useState({ subject: '', examDate: '' });
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchExams = async () => {
    const res = await axios.get(`http://localhost:5000/api/exams/${user._id}`);
    setExams(res.data);
  };

  const handleAddExam = async () => {
    if (!newExam.subject || !newExam.examDate) return;
    await axios.post('http://localhost:5000/api/exams', {
      ...newExam,
      userId: user._id,
    });
    setNewExam({ subject: '', examDate: '' });
    fetchExams();
  };

  const handleDeleteExam = async (examId) => {
    await axios.delete(`http://localhost:5000/api/exams/${examId}`);
    fetchExams();
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">📅 Exam Scheduler</h2>

      {/* Add Exam Inputs */}
      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Subject"
          value={newExam.subject}
          onChange={(e) => setNewExam({ ...newExam, subject: e.target.value })}
          className="w-full border border-indigo-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
        />
        <input
          type="date"
          value={newExam.examDate}
          onChange={(e) => setNewExam({ ...newExam, examDate: e.target.value })}
          className="w-full border border-indigo-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
        />
        <button
          onClick={handleAddExam}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
        >
          ➕ Add Exam
        </button>
      </div>

      {/* Exam List */}
      <ul className="space-y-2">
        {exams.map((exam) => (
          <li
            key={exam._id}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <span className="font-medium">{exam.subject}</span>
              <span className="block text-sm text-gray-500">
                {new Date(exam.examDate).toLocaleDateString()}
              </span>
            </div>
            <button
              onClick={() => handleDeleteExam(exam._id)}
              className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
