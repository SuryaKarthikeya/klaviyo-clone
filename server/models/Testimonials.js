const mongoose = require('mongoose');

const TestimonialsSchema = new mongoose.Schema({
    sectionTitle: String,
    testimonials: [
        {
            quote: String,
            authorName: String,
            authorRole: String,
            company: String,
            companyLogo: String,
            avatarUrl: String,
            metrics: [
                { value: String, label: String }
            ]
        }
    ]
});

module.exports = mongoose.model('Testimonials', TestimonialsSchema);
