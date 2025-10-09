const bcrypt = require('bcryptjs');
const User = require('models/user'); 

const registerUser = async (username, password) => {
  
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10); 
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword, 
    role: 'staff', 
  });

  await newUser.save();

  return newUser;
};

module.exports = { registerUser };