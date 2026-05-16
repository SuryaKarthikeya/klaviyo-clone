const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
    stats: [
        {
            value: String, // "167,000+"
            label: String, // "brands trust Klaviyo"
        }
    ]
});

module.exports = mongoose.model('Stats', StatsSchema);