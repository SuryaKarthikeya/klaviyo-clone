const mongoose = require('mongoose');

const IntegrationsSchema = new mongoose.Schema({
    sectionTitle: String,
    subtitle: String,
    totalCount: String,
    integrations: [
        {
            name: String,
            logoUrl: String,
            category: String,   // "ecommerce", "loyalty", etc.
            url: String
        }
    ]
});

module.exports = mongoose.model('Integrations', IntegrationsSchema);
