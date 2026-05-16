const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    badge: String,         // "New: K:AI Agents"
    headline: String,      // "The B2C CRM that ......"
    subHeadline: String,
    primaryCTA: {
        label: String,
        url: String
    },
    secondaryCTA: {
        label: String,
        url: String
    },
    backgroundImage: String,
    videoUrl: String
});

module.exports = mongoose.model('Hero', HeroSchema);