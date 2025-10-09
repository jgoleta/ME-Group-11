const { registerUser } = require('../services/registerService.js'); 
const registerController = async (req, res) => {
  const { username, password } = req.body;

  try {

    const newUser = await registerUser(username, password);
    res.status(201).json(successResponse('User registered successfully', {
      username: newUser.username,
      role: newUser.role
    }));
  } catch (err) {
  
    res.status(400).json(errorResponse(err.message, null));
  }
};

module.exports = { registerController };