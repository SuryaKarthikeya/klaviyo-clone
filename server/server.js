require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const homepageRoutes = require('./routes/homepage');

connectDB();

const app = express();
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'https://klaviyo-client-m9nj.onrender.com'] }));   // React frontend and admin ports
app.use(express.json());

app.use('/api', homepageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));