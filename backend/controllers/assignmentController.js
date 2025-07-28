import Assignment from '../models/Assignment.js';
export const addAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (err) {
    res.status(400).json(err);
  }
};
export const getAssignments = async (req, res) => {
  const assignments = await Assignment.find({ userId: req.params.userId });
  res.json(assignments);
};
export const markSubmitted = async (req, res) => {
  const assignment = await Assignment.findByIdAndUpdate(req.params.id, { submitted: true }, { new: true });
  res.json(assignment);
};

export const deleteAssignment =  async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Assignment deleted' });
  } 
  catch (error) {
    res.status(500).json({ error: 'Delete failed' });
  }
};
