const { authenticateUser } = require('../services/loginService.js');


const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { token, user } = await authenticateUser(username, password);
    res.status(200).json(successResponse('Login successful', {
      token,
      user: { username: user.username, role: user.role }
    }));
  } catch (err) {
   
    res.status(400).json(errorResponse(err.message, null));
  }
};

module.exports = { loginController };