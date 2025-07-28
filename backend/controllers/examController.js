import Exam from '../models/Exam.js';


// Add exam
export const addExam =async (req, res) => {
  try {
    const exam = await Exam.create(req.body);
    res.status(201).json(exam);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add exam' });
  }
};

// Get exams for user
export const getExam = async (req, res) => {
  try {
    const exams = await Exam.find({ userId: req.params.userId });
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
};

// Get exams for user
export const deleteExam = async (req, res) => {
    try {
      await Exam.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Subject deleted' });
    } 
    catch (error) {
      res.status(500).json({ error: 'Delete failed' });
    }
};