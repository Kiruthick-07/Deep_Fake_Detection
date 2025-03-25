const express = require('express');
 // Import the database connection
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB


// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('MongoDB is connected to Express.js!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = 'mongodb+srv://tamilelectroniv:C2uUGrHZciKBYjBy@cluster0.a2gf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Connect to MongoDB
const connectDB = async () => {
    try {
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

module.exports = connectDB;