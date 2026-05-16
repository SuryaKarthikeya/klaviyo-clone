const mongoose = require('mongoose');

const NavbarSchema = new mongoose.Schema({
    logo: String,
    ctaPrimary: { label: String, url: String },
    ctaSecondary: { label: String, url: String },
    navLinks: [
        {
            label: String,
            url: String,
            hasDropdown: Boolean
        }
    ]
});

module.exports = mongoose.model('Navbar', NavbarSchema);
