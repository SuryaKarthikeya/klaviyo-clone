const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/homepageController');

const Hero = require('../models/Hero');
const LogoStrip = require('../models/LogoStrip');
const Stats = require('../models/Stats');
const Features = require('../models/Features');
const Testimonials = require('../models/Testimonials');
const Integrations = require('../models/Integrations');
const Pricing = require('../models/Pricing');
const Navbar = require('../models/Navbar');
const Footer = require('../models/Footer');

// Single endpoint — fetches ALL sections at once
router.get('/homepage', ctrl.getHomepageData);

// Individual section endpoints
const sections = [
    { path: 'navbar', Model: Navbar },
    { path: 'hero', Model: Hero },
    { path: 'logostrip', Model: LogoStrip },
    { path: 'stats', Model: Stats },
    { path: 'features', Model: Features },
    { path: 'testimonials', Model: Testimonials },
    { path: 'integrations', Model: Integrations },
    { path: 'pricing', Model: Pricing },
    { path: 'footer', Model: Footer },
];

// Get all endpoints using router.get
sections.forEach(({ path, Model }) => {
    router.get(`/${path}`, ctrl.getSection(Model));
    router.put(`/${path}`, ctrl.updateSection(Model));
});

module.exports = router;