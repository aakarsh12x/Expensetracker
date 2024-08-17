const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected');
    } catch (error) {
        console.log('DB connection Error:', error);
        throw error; // re-throw the error to handle it in server.js
    }
};

module.exports = { db };
