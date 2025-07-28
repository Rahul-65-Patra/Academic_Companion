import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Assignment from './components/Assignment';
import Subject from './components/Subject';
import ExamSchedule from './components/ExamSchedule';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/assignments" element={<Assignment />} />
        <Route path="/dashboard/subjects" element={<Subject />} />
        <Route path="/dashboard/examschedule" element={<ExamSchedule />} />
      </Routes>
    </Router>
  );
}
