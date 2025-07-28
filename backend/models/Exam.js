// models/Exam.js
import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: String,
  examDate: Date,
});

export default mongoose.model('Exam', examSchema);
