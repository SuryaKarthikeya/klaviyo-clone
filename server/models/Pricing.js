const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
    sectionTitle: String,
    subtitle: String,
    plans: [
        {
            name: String,
            price: String,
            description: String,
            features: [String],
            ctaLabel: String,
            ctaUrl: String,
            highlighted: Boolean
        }
    ]
});

module.exports = mongoose.model('Pricing', PricingSchema);