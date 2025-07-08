// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/feedbackController');

router.post('/', submitFeedback);

module.exports = router;
