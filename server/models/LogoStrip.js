const mongoose = require('mongoose');

const LogoStripSchema = new mongoose.Schema({
    label: String,          // "Trusted by the world's best brands"
    logos: [
        {
            name: String,
            imageUrl: String,
            url: String,
        }
    ]
});


module.exports = mongoose.model('LogoStrip', LogoStripSchema);