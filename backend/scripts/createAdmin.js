const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

dotenv.config();
mongoose.connect(process.env.DB_URI).then(async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = new Admin({ email: 'admin@iitd.ac.in', password: hashedPassword });
  await admin.save();
  console.log('✅ Admin created!');
  mongoose.disconnect();
});
