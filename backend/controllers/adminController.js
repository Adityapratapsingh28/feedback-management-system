const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Feedback = require('../models/Feedback');

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllFeedback = async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
};

const getFeedbackById = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
  res.json(feedback);
};

const deleteFeedbackById = async (req, res) => {
  const feedback = await Feedback.findByIdAndDelete(req.params.id);
  if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
  res.json({ message: 'Feedback deleted successfully' });
};

module.exports = {
  loginAdmin,
  getAllFeedback,
  getFeedbackById,
  deleteFeedbackById,
};

