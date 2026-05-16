const Hero = require('../models/Hero');
const Stats = require('../models/Stats');
const LogoStrip = require('../models/LogoStrip');
const Features = require('../models/Features');
const Testimonials = require('../models/Testimonials');
const Integrations = require('../models/Integrations');
const Pricing = require('../models/Pricing');
const Navbar = require('../models/Navbar');
const Footer = require('../models/Footer');


// GET all homepage data in ONE API call
exports.getHomepageData = async (req, res) => {
    try {
        const [navbar, hero, stats, logoStrip, features, testimonials, integrations, pricing, footer] =
            await Promise.all([
                Navbar.findOne(),
                Hero.findOne(),
                Stats.findOne(),
                LogoStrip.findOne(),
                Features.findOne(),
                Testimonials.findOne(),
                Integrations.findOne(),
                Pricing.findOne(),
                Footer.findOne()
            ]);

        res.json({ navbar, hero, stats, logoStrip, features, testimonials, integrations, pricing, footer });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Individual section endpoints (for granular updates)
exports.getSection = (Model) => async (req, res) => {
    try {
        const data = await Model.findOne();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE section endpoint
exports.updateSection = (Model) => async (req, res) => {
    try {
        const data = await Model.findOneAndUpdate({}, req.body, {
            new: true,
            upsert: true,
            runValidators: true
        });
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};