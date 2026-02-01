import { Brain, Shield, Zap, Target, Database, TrendingUp } from "lucide-react";

export const navlinks = [
    { name: "Home", href: "/" },
    { name: "Perdict", href: "/predict" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" }
];

export const footerData= [
    {
        title: "Product",
        links: [
            { name: "Home", href: "#" },
            { name: "Support", href: "#support" },
            { name: "Pricing", href: "#pricing" },
            { name: "Affiliate", href: "#affiliate" },
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Company", href: "#company" },
            { name: "Blogs", href: "#blogs" },
            { name: "Community", href: "#community" },
            { name: "Careers", href: "#careers" },
            { name: "About", href: "#about" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "#privacy" },
            { name: "Terms", href: "#terms" },
        ]
    }
];

export const  features = [
        {
            icon: Brain,
            title: "AI-Powered Detection",
            description: "Advanced machine learning models analyze patterns and linguistic markers to identify fake news with high accuracy."
        },
        {
            icon: Shield,
            title: "Rule-Based Analysis",
            description: "Combines traditional fact-checking methods with modern AI to provide comprehensive verification."
        },
        {
            icon: Zap,
            title: "Real-Time Processing",
            description: "Get instant results with our optimized preprocessing and analysis pipeline built on Flask backend."
        },
        {
            icon: Target,
            title: "Triple Classification",
            description: "Categorizes content as Real, Fake, or Suspicious, giving you nuanced insights into news authenticity."
        },
        {
            icon: Database,
            title: "Comprehensive Scoring",
            description: "Combines multiple analysis methods to generate confidence scores for reliable decision-making."
        },
        {
            icon: TrendingUp,
            title: "Continuous Learning",
            description: "Our models evolve with new data patterns to stay ahead of emerging misinformation tactics."
        }
    ];