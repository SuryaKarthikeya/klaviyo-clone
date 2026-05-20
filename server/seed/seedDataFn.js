const Hero = require('../models/Hero');
const Stats = require('../models/Stats');
const LogoStrip = require('../models/LogoStrip');
const Features = require('../models/Features');
const Testimonials = require('../models/Testimonials');
const Integrations = require('../models/Integrations');
const Pricing = require('../models/Pricing');
const Navbar = require('../models/Navbar');
const Footer = require('../models/Footer');

const seedDataFn = async () => {
    await Hero.deleteMany({});
    await Hero.create({
        badge: "New: K:AI Agents are here",
        headline: "The Realify.ai that powers smarter marketing",
        subHeadline: "Unify email, SMS, and AI to drive growth and retention.",
        primaryCTA: { label: "Get started free", url: "/signup" },
        secondaryCTA: { label: "Watch Demo", url: "/demo" },
        backgroundImage: "/images/hero-bg.jpg"
    });

    await Navbar.deleteMany({});
    await Navbar.create({
        logo: '/images/realify-logo.svg',
        ctaPrimary: { label: 'Get started free', url: '/signup' },
        ctaSecondary: { label: 'Login', url: '/login' },
        navLinks: [
            { label: 'Platform', url: '/platform', hasDropdown: true },
            { label: 'Pricing', url: '/pricing', hasDropdown: false },
            { label: 'Resources', url: '/resources', hasDropdown: true },
        ]
    });

    await LogoStrip.deleteMany({});
    await LogoStrip.create({
        label: 'Trusted by 167,000+ brands',
        logos: [
            { name: 'Shopify', imageUrl: '/logos/shopify.svg', url: 'https://shopify.com' },
            { name: 'WooCommerce', imageUrl: '/logos/woo.svg', url: 'https://woocommerce.com' },
        ]
    });

    await Stats.deleteMany({});
    await Stats.create({
        stats: [
            { value: '167,000+', label: 'brands trust Realify.AI' },
            { value: '$3.7B+', label: 'revenue driven' },
            { value: '350+', label: 'integrations' },
        ]
    });

    await Features.deleteMany({});
    await Features.create({
        sectionTitle: 'Everything you need to grow',
        sectionSubtitle: 'One platform for email, SMS, and more',
        features: [
            {
                icon: 'email',
                title: 'Email Marketing',
                description: 'Build and send beautiful emails that convert.',
                ctaLabel: 'Learn more',
                ctaUrl: '/email',
                imageUrl: '/images/feature-email.jpg'
            },
            {
                icon: 'sms',
                title: 'SMS Marketing',
                description: 'Reach customers directly on their phones.',
                ctaLabel: 'Learn more',
                ctaUrl: '/sms',
                imageUrl: '/images/feature-sms.jpg'
            },
        ]
    });

    await Testimonials.deleteMany({});
    await Testimonials.create({
        sectionTitle: 'Loved by thousands of brands',
        testimonials: [
            {
                quote: 'Realify.AI has completely transformed how we reach our customers.',
                authorName: 'Jane Doe',
                authorRole: 'CEO',
                company: 'BrandX',
                companyLogo: '/logos/brandx.svg',
                avatarUrl: '/avatars/jane.jpg',
                metrics: [
                    { value: '2x', label: 'revenue growth' },
                    { value: '40%', label: 'open rate' },
                ]
            }
        ]
    });

    await Integrations.deleteMany({});
    await Integrations.create({
        sectionTitle: 'Connects with your entire stack',
        subtitle: 'Over 350 integrations available',
        totalCount: '350+',
        integrations: [
            { name: 'Shopify', logoUrl: '/logos/shopify.svg', category: 'ecommerce', url: 'https://shopify.com' },
            { name: 'WooCommerce', logoUrl: '/logos/woo.svg', category: 'ecommerce', url: 'https://woocommerce.com' },
            { name: 'Smile.io', logoUrl: '/logos/smile.svg', category: 'loyalty', url: 'https://smile.io' },
        ]
    });

    await Pricing.deleteMany({});
    await Pricing.create({
        sectionTitle: 'Plans that scale with you',
        subtitle: 'Start free, grow as you go',
        plans: [
            {
                name: 'Free',
                price: '$0',
                description: 'For getting started',
                features: ['500 contacts', 'Email support', 'Basic templates'],
                ctaLabel: 'Get started free',
                ctaUrl: '/signup',
                highlighted: false
            },
            {
                name: 'Email',
                price: '$45/mo',
                description: 'For growing brands',
                features: ['Unlimited emails', 'A/B testing', 'Advanced segmentation'],
                ctaLabel: 'Start free trial',
                ctaUrl: '/signup',
                highlighted: true
            },
        ]
    });

    await Footer.deleteMany({});
    await Footer.create({
        logo: '/images/realify-logo.svg',
        tagline: 'The B2C CRM',
        columns: [
            {
                heading: 'Product',
                links: [
                    { label: 'Email', url: '/email' },
                    { label: 'SMS', url: '/sms' },
                ]
            },
            {
                heading: 'Company',
                links: [
                    { label: 'About', url: '/about' },
                    { label: 'Careers', url: '/careers' },
                ]
            }
        ],
        socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com/realify', icon: 'twitter' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/company/realify', icon: 'linkedin' },
        ],
        legalLinks: [
            { label: 'Privacy Policy', url: '/privacy' },
            { label: 'Terms of Service', url: '/terms' },
        ],
        copyright: '© 2024 Realify.AI, Inc.'
    });

    console.log('✅ Database seeded successfully');
};

module.exports = seedDataFn;
