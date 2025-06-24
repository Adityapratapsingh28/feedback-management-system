const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check for token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ error: 'Access denied: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Attach admin info to request
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Access denied: Invalid token' });
  }
};

module.exports = { protect };
