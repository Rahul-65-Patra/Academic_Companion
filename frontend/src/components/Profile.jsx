import React, { useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [form, setForm] = useState(user);

  const handleUpdate = async () => {
    const res = await axios.put(`http://localhost:5000/api/auth/update/${user._id}`, form);
    localStorage.setItem('user', JSON.stringify(res.data));
    setUser(res.data);
  };

  return (
    <div className="bg-white p-6 max-w-md mx-auto rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">👤 Profile</h2>

      <div className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-purple-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Name"
        />
        <input
          name="branch"
          value={form.branch}
          onChange={(e) => setForm({ ...form, branch: e.target.value })}
          className="w-full border border-purple-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Branch"
        />
        <input
          name="semester"
          value={form.semester}
          onChange={(e) => setForm({ ...form, semester: e.target.value })}
          className="w-full border border-purple-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Semester"
        />
        <input
          name="contact"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="w-full border border-purple-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Contact"
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          💾 Update Profile
        </button>
      </div>
    </div>
  );
}
