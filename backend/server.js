const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware (before routes!)
app.use((req, res, next) => {
  console.log(`📩 [${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api/feedback', feedbackRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);


app.get('/', (req, res) => {
  res.send('Feedback API Running 🚀');
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
