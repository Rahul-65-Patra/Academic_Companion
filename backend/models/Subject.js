import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
  userId: String,
  subjectName: String,
  notesLink: String
});
export default mongoose.model('Subject', subjectSchema);   