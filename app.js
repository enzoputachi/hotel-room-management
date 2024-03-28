require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const roomTypeRoutes = require('./routes/roomTypeRoutes');
const roomRoutes = require('./routes/roomRoutes');

// Require the validation middleware
const { validateRequest } = require('./middlewares/validation');

const app = express();
const PORT = process.env.PORT || 4050;
const MONGODB_URI = process.env.MONGODB_URI;   

// Middleware
app.use(express.json());

// Routes
// app.get('/', (req, res) => {
//     res.send('Hello, world! This is the root route.');
// });

app.use('/api/v1/room-types', validateRequest, roomTypeRoutes);
app.use('/api/v1/rooms', validateRequest, roomRoutes);

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error.message));

module.exports = app;
