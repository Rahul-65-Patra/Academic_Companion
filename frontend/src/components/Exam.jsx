import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [subject, setSubject] = useState("");
  const [examDate, setExamDate] = useState("");

  const fetchExams = async () => {
    const res = await fetch("http://localhost:5000/api/exams");
    const data = await res.json();
    setExams(data);
  };

  const addExam = async () => {
    await fetch("http://localhost:5000/api/exams/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, examDate }),
    });
    setSubject("");
    setExamDate("");
    fetchExams();
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">Exam Scheduler</h2>
      <div className="flex gap-4 mb-6">
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="border p-2 rounded w-full"
        />
        <input
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          type="date"
          className="border p-2 rounded"
        />
        <button
          onClick={addExam}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Exam
        </button>
      </div>
      <ul className="space-y-2">
        {exams.map((exam) => (
          <li key={exam._id} className="bg-white p-4 shadow rounded">
            {exam.subject} — {new Date(exam.examDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </Layout>
  );
}