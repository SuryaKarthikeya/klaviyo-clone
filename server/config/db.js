const mongoose = require('mongoose');

let mongoServer;

const connectDB = async () => {
    try {
        let uri = process.env.MONGO_URI;
        if (!uri) {
            console.log('MONGO_URI is not set. Starting in-memory MongoDB server...');
            const { MongoMemoryServer } = require('mongodb-memory-server');
            mongoServer = await MongoMemoryServer.create();
            uri = mongoServer.getUri();
            console.log(`In-memory MongoDB started at: ${uri}`);
        }
        await mongoose.connect(uri);
        console.log('MongoDB connected');

        // Check if database needs seeding
        const Hero = require('../models/Hero');
        const heroCount = await Hero.countDocuments();
        if (heroCount === 0) {
            console.log('Hero collection is empty. Performing initial database seeding...');
            const seedDataFn = require('../seed/seedDataFn');
            await seedDataFn();
        }
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;