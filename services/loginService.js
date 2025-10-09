const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js'); 


const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'; 


const authenticateUser = async (username, password) => {
 
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Invalid username or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username, role: user.role },
    JWT_SECRET_KEY,
    { expiresIn: '1h' } 
  );

  return { token, user };
};

module.exports = { authenticateUser };