const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    username: { 
        type: String,
        required: true, 
        unique: true 
    },
    password: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        required: true,
<<<<<<< HEAD
        enum:['admin', 'staff'],
    }, 
})
=======
        enum:['admin', 'staff']
    }, 
})
>>>>>>> 9b81eb0 (setup frontend)
