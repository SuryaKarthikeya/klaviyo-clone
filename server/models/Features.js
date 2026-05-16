const mongoose = require('mongoose');

const FeaturesSchema = new mongoose.Schema({
    sectionTitle: String,
    sectionSubtitle: String,
    features: [
        {
            icon: String,
            title: String,
            description: String,
            ctaLabel: String,
            ctaUrl: String,
            imageUrl: String
        }
    ]
});

module.exports = mongoose.model('Features', FeaturesSchema);
