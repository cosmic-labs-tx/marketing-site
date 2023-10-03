export const topNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/schedule-call", label: "Schedule Call" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Custom Web Design",
    description: "Crafting captivating websites that reinforce your brand identity.",
    icon: "tabler:rocket",
  },
  {
    title: "Responsive Development",
    description: "Create seamless experiences across all devices.",
    icon: "tabler:device-mobile-check",
  },
  {
    title: "E-Commerce Solutions",
    description: "Build powerful online stores with secure payment gateways.",
    icon: "tabler:brand-shopee",
  },
  {
    title: "Content Management",
    description: "Easy content updates with an intuitive CMS.",
    icon: "tabler:database-cog",
  },
  {
    title: "SEO & Digital Marketing",
    description: "Boost your online presence with expert strategies and tools.",
    icon: "tabler:chart-histogram",
  },
  {
    title: "Application Development",
    description: "Tailor-made apps for enhanced user experiences.",
    icon: "tabler:apps",
  },
] as const;

export const pricingTiers = [
  {
    name: "Astronaut",
    id: "tier-astronaut",
    href: "/schedule-call?tier=astronaut",
    price: "$199",
    description: "The essentials to launch your Cosmic presence.",
    features: [
      "Pre-designed template",
      "Custom domain setup",
      "Up to 3 pages",
      "Basic SEO",
      "Basic analytics",
      "Unlimited revisions",
    ],
    mostPopular: false,
  },
  {
    name: "Galaxy",
    id: "tier-galaxy",
    href: "/schedule-call?tier=galaxy",
    price: "$499",
    description: "Perfect for businesses ready for blast-off.",
    features: [
      "Pre-designed template",
      "Up to 5 pages",
      "Social media integrations",
      "Advanced SEO",
      "Advanced analytics",
      "24-hour response time",
    ],
    mostPopular: true,
  },
  {
    name: "Supernova",
    id: "tier-supernova",
    href: "/schedule-call?tier=supernova",
    price: "$1,499 ",
    description: "Limitless possibilities in the digital cosmos.",
    features: [
      "Custom design",
      "Up to 10 pages and blog",
      "Marketing automations",
      "Custom analytics dashboard",
      "Content management",
      "24-hour response time",
    ],
    mostPopular: false,
  },
] as const;

export const addons = [
  {
    id: "hosting",
    name: "Secure hosting",
    price: "$50/month",
    description: "Secure hosting with SSL certificate and domain management.",
  },
  {
    id: "blog",
    name: "Targeted blog posts",
    price: "$100/month",
    description: "A monthly post to drive traffic to your website.",
  },
  {
    id: "cms",
    name: "Content management system",
    price: "$200/month",
    description: "Manage your website content with ease whenever you want.",
  },
  {
    id: "seo",
    name: "Advanced SEO package",
    price: "$300/month",
    description: "Boost your search rankings with advanced SEO techniques.",
  },
];
