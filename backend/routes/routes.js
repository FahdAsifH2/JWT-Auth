// Import necessary modules
const { Router } = require('express'); // Import the Router class from Express
const bcrypt = require('bcrypt'); // Import bcrypt for hashing passwords
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for creating and verifying JWTs
const User = require('../models/user'); // Import the User model

// Create a new instance of Router
const router = Router();


// Route to handle user registration
router.post('/register', async (req, res) => 
{
    // Currently, this route simply sends back a response
    // In a complete implementation, this would handle user registration logic
    res.send("created user");
});

// Route to handle user login
router.post('/login', async (req, res) => 
{
    // Currently, this route simply sends back a response
    // In a complete implementation, this would handle user authentication logic
    res.send("login user");
});

// Route to get user information
router.get('/user', (req, res) => {
    // Currently, this route simply sends back a response
    // In a complete implementation, this would return user details
    res.send("user");
});

// Export the router to be used in other parts of the application
module.exports = router;
