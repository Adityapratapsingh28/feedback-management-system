const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
  try {
    console.log("🔥 Feedback route hit");
    console.log("➡️ Request Body:", req.body);

    const { name, email, message, rating } = req.body;

    if (!name || !email || !message || !rating) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newFeedback = new Feedback({ name, email, message, rating });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully!' });

  } catch (error) {
    console.error("❌ Error saving feedback:", error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { submitFeedback };
