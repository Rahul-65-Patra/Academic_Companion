import mongoose from 'mongoose'
const assignmentSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  dueDate: Date,
  submitted: { type: Boolean, default: false }
});
export default mongoose.model('Assignment', assignmentSchema);