const Joi = ('joi');

const schema = Joi.object({
  username: Joi.string().min(1).required().messages({
    'string.empty': 'Username is required.',
    'any.required': 'Username is required.',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required.',
    'string.min': 'Password must be at least 6 characters long.',
    'any.required': 'Password is required.',
  }),
});

const validateInput = (req, res, next) => {
  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next(); 
};

module.exports = validateInput;