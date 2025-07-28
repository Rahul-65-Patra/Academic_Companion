import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  branch: String,
  semester: String,
  contact: String
});
export default mongoose.model('User', userSchema);