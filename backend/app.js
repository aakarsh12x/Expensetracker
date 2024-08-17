const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { db } = require('./db/db'); // Correct path to db.js
const{readdirSync} = require('fs')
const app = express();
const PORT = process.env.PORT 

// Middleware
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

// Start the server
const server = () => {
    db().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }).on('error', (err) => {
            console.error('Error starting server:', err);
        });
    }).catch((err) => {
        console.error('Failed to connect to DB. Server not started.', err);
    });
};

server();
