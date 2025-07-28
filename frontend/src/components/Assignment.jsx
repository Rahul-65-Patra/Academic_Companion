import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Assignment() {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchAssignments = async () => {
    const res = await axios.get(`http://localhost:5000/api/assignments/${user._id}`);
    setAssignments(res.data);
  };

  const handleAdd = async () => {
    if (!newAssignment.title || !newAssignment.dueDate) return;
    await axios.post('http://localhost:5000/api/assignments', { ...newAssignment, userId: user._id });
    setNewAssignment({ title: '', description: '', dueDate: '' });
    fetchAssignments();
  };

  const markSubmitted = async (id) => {
    await axios.put(`http://localhost:5000/api/assignments/${id}/submit`);
    fetchAssignments();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/assignments/${id}`);
    fetchAssignments();
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">📝 Assignments</h2>

      <div className="grid gap-3 mb-6">
        <input
          value={newAssignment.title}
          placeholder="Title"
          className="w-full border border-indigo-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
          onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
        />
        <input
          value={newAssignment.description}
          placeholder="Description"
          className="w-full border border-indigo-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
          onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
        />
        <input
          type="date"
          value={newAssignment.dueDate}
          className="w-full border border-indigo-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-100"
          onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-md transition"
          onClick={handleAdd}
        >
          ➕ Add Assignment
        </button>
      </div>

      <ul className="space-y-3">
        {assignments.map((a) => (
          <li
            key={a._id}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-700">{a.title}</h3>
              <p className="text-sm text-gray-500">Due: {new Date(a.dueDate).toLocaleDateString()}</p>
              {a.description && <p className="text-sm text-gray-600 mt-1">{a.description}</p>}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => markSubmitted(a._id)}
                disabled={a.submitted}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  a.submitted
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                }`}
              >
                {a.submitted ? '✅ Submitted' : '📤 Submit'}
              </button>
              <button
                onClick={() => handleDelete(a._id)}
                className="px-3 py-1 rounded text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
