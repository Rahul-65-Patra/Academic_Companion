import Subject from '../models/Subject.js';
export const addSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (err) {
    res.status(400).json(err);
  }
};
export const getSubjects = async (req, res) => {
  const subjects = await Subject.find({ userId: req.params.userId });
  res.json(subjects);
};

export const getSubjectsDelet =  async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Subject deleted' });
  } 
  catch (error) {
    res.status(500).json({ error: 'Delete failed' });
  }
};
