const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes')
const app = express();

app.use("/api",routes)

app.use(cors({
    credentials: true,
    origin: ['https://localhost:4200']
}));

app.use(cookieParser());
app.use(express.json());

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
