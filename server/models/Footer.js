const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({
    logo: String,
    tagline: String,
    columns: [
        {
            heading: String,
            links: [{ label: String, url: String }]
        }
    ],
    socialLinks: [{ platform: String, url: String, icon: String }],
    legalLinks: [{ label: String, url: String }],
    copyright: String
});

module.exports = mongoose.model('Footer', FooterSchema);
