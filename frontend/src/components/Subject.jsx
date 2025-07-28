import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Subject() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({ subjectName: '', notesLink: '' });
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchSubjects = async () => {
    const res = await axios.get(`http://localhost:5000/api/subjects/${user._id}`);
    setSubjects(res.data);
  };

  const handleAdd = async () => {
     if (!newSubject.subjectName || !newSubject.notesLink) return;
    await axios.post('http://localhost:5000/api/subjects', { ...newSubject, userId: user._id });
    setNewSubject({ subjectName: '', notesLink: '' });
    fetchSubjects();
  };

  const handleDelete = async (subjectId) => {
    await axios.delete(`http://localhost:5000/api/subjects/${subjectId}`);
    fetchSubjects();
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">📘 Subjects</h2>

      <div className="space-y-3">
        <input
          value={newSubject.subjectName}
          placeholder="Subject Name"
          className="w-full border border-blue-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          onChange={(e) => setNewSubject({ ...newSubject, subjectName: e.target.value })}
        />
        <input
          value={newSubject.notesLink}
          placeholder="Notes Link"
          className="w-full border border-blue-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          onChange={(e) => setNewSubject({ ...newSubject, notesLink: e.target.value })}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
          onClick={handleAdd}
        >
          ➕ Add Subject
        </button>
      </div>

      <ul className="mt-6 space-y-2">
        {subjects.map((s) => (
          <li
            key={s._id}
            className="bg-blue-50 border border-blue-100 p-3 rounded-md flex justify-between items-center"
          >
            <div>
              <span className="font-medium">{s.subjectName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href={s.notesLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline text-sm hover:text-blue-800"
              >
                View Notes
              </a>
              <button
                className="px-3 py-1 rounded text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition cursor-pointer"
                onClick={() => handleDelete(s._id)}
                title="Delete Subject"
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
