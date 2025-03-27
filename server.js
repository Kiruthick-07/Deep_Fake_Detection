const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection string (use environment variable for security)
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://tamilelectroniv:C2uUGrHZciKBYjBy@cluster0.a2gf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit the process with failure
    }
};

// Call the connectDB function to establish the connection
connectDB();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Deep Fake Detection API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});