const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes'); // Use 'router' to match the import
const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200'] // Use 'http' if you're running Angular locally
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api", router); // Use 'router' consistently
// app.use(router); // Commented out as it's redundant if you're using "/api" prefix

// Function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/jwtproject", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

// Connect to MongoDB
connectToDatabase();

// Start the Express server
app.listen(5000, () => {
    console.log("App is listening on port 5000");
});
