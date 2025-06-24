const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getAllFeedback,
  getFeedbackById,
  deleteFeedbackById
} = require('../controllers/adminController');

const { protect } = require('../middleware/authMiddleware');

// Login route (no token needed)
router.post('/login', loginAdmin);

// Protected Routes
router.get('/feedback', protect, getAllFeedback);
router.get('/feedback/:id', protect, getFeedbackById);
router.delete('/feedback/:id', protect, deleteFeedbackById);

module.exports = router;

