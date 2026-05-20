require('dotenv').config();
const connectDB = require('../config/db');
const seedDataFn = require('./seedDataFn');

const seed = async () => {
    await connectDB();
    await seedDataFn();
    console.log('✅ Standalone seed complete');
    process.exit();
};

seed();