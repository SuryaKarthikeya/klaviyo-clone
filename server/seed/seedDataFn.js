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
        backgroundImage: "",
        videoUrl: "/assets/klaviyo/hero.webm"
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
            { name: 'Shopify', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', url: 'https://shopify.com' },
            { name: 'Amazon', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', url: 'https://amazon.com' },
            { name: 'Google', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', url: 'https://google.com' },
            { name: 'Stripe', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', url: 'https://stripe.com' },
            { name: 'Slack', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png', url: 'https://slack.com' },
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
                description: 'Build and send beautiful emails that convert. Personalise at scale with AI-powered segmentation.',
                ctaLabel: 'Learn more',
                ctaUrl: '/email',
                imageUrl: '/assets/klaviyo/marketing_agent.webp'
            },
            {
                icon: 'sms',
                title: 'SMS Marketing',
                description: 'Reach customers directly on their phones with targeted, timely text messages.',
                ctaLabel: 'Learn more',
                ctaUrl: '/sms',
                imageUrl: '/assets/agent_ui.png'
            },
            {
                icon: 'analytics',
                title: 'Analytics & Insights',
                description: 'Understand your customers better with deep analytics and real-time reporting.',
                ctaLabel: 'Learn more',
                ctaUrl: '/analytics',
                imageUrl: '/assets/hero_ui.png'
            },
            {
                icon: 'integrations',
                title: 'Integrations',
                description: 'Connect your entire stack with 350+ integrations including Shopify, WooCommerce, and more.',
                ctaLabel: 'View integrations',
                ctaUrl: '/integrations',
                imageUrl: '/assets/klaviyo/marketing_agent.webp'
            },
        ]
    });

    await Testimonials.deleteMany({});
    await Testimonials.create({
        sectionTitle: 'Loved by thousands of brands',
        testimonials: [
            {
                quote: 'Realify.AI has completely transformed how we reach our customers. Our revenue doubled in just 6 months.',
                authorName: 'Sarah Johnson',
                authorRole: 'Head of Marketing',
                company: 'Huel',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Huel_logo.png',
                avatarUrl: '/assets/klaviyo/case_study_1.jpg',
                metrics: [
                    { value: '2x', label: 'revenue growth' },
                    { value: '40%', label: 'open rate' },
                ]
            },
            {
                quote: 'The AI-driven segmentation is unlike anything we have used before. It just works.',
                authorName: 'Mark Rivera',
                authorRole: 'CEO',
                company: 'Graza',
                companyLogo: '',
                avatarUrl: '/assets/klaviyo/case_study_2.jpg',
                metrics: [
                    { value: '3.5x', label: 'ROI' },
                    { value: '60%', label: 'click rate' },
                ]
            },
            {
                quote: 'Switching to Realify.AI was the best decision we made this year for our DTC growth.',
                authorName: 'Aisha Patel',
                authorRole: 'CMO',
                company: 'Feastables',
                companyLogo: '',
                avatarUrl: '/assets/klaviyo/case_study_3.jpg',
                metrics: [
                    { value: '150%', label: 'email revenue' },
                    { value: '25%', label: 'churn reduction' },
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
            { name: 'Shopify', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', category: 'ecommerce', url: 'https://shopify.com' },
            { name: 'Amazon', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', category: 'ecommerce', url: 'https://amazon.com' },
            { name: 'Stripe', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', category: 'payments', url: 'https://stripe.com' },
            { name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', category: 'ads', url: 'https://google.com' },
            { name: 'Meta', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', category: 'ads', url: 'https://meta.com' },
            { name: 'Slack', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png', category: 'communication', url: 'https://slack.com' },
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
                    { label: 'Analytics', url: '/analytics' },
                ]
            },
            {
                heading: 'Company',
                links: [
                    { label: 'About', url: '/about' },
                    { label: 'Careers', url: '/careers' },
                    { label: 'Blog', url: '/blog' },
                ]
            },
            {
                heading: 'Resources',
                links: [
                    { label: 'Documentation', url: '/docs' },
                    { label: 'Integrations', url: '/integrations' },
                    { label: 'Case Studies', url: '/case-studies' },
                ]
            }
        ],
        socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com/realify', icon: 'tw' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/company/realify', icon: 'in' },
            { platform: 'GitHub', url: 'https://github.com/realify', icon: 'gh' },
        ],
        legalLinks: [
            { label: 'Privacy Policy', url: '/privacy' },
            { label: 'Terms of Service', url: '/terms' },
            { label: 'Cookie Policy', url: '/cookies' },
        ],
        copyright: '© 2024 Realify.AI, Inc.'
    });

    console.log('✅ Database seeded successfully');
};

module.exports = seedDataFn;
