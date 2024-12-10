// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/iot-patient-system', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Example schema for contact messages
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Message = mongoose.model('Message', MessageSchema);

// Routes
app.post('/api/contact', async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(200).send('Message Sent!');
    } catch (error) {
        res.status(500).send('Error saving message');
    }
});

app.get('/api/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
