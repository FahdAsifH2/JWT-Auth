const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,  // 'String' should be capitalized
        required: true
    },
    email: {
        type: String,  // 'String' should be capitalized
        unique: true,
        required: true
    },
    password: {
        type: String,  // 'String' should be capitalized
        required: true  // 'true' should be spelled correctly
    }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
