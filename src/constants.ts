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
    name: "Cub",
    id: "tier-cub",
    href: "/schedule-call?tier=cub",
    price: "$1,000",
    description: "The essentials to get your business online.",
    features: [
      "Pre-designed template",
      "Custom domain setup",
      "Up to 3 pages",
      "Basic SEO",
      "Basic analytics",
      "1 revision/month",
    ],
    mostPopular: false,
  },
  {
    name: "Grizzly",
    id: "tier-grizzly",
    href: "/schedule-call?tier=grizzly",
    price: "$2,000",
    description: "Perfect for small businesses that are growing quickly.",
    features: [
      "Pre-designed template",
      "Up to 5 pages",
      "Social media integrations",
      "Advanced SEO",
      "Advanced analytics",
      "48-hour response time",
    ],
    mostPopular: true,
  },
  {
    name: "Bigfoot",
    id: "tier-bigfoot",
    href: "/schedule-call?tier=bigfoot",
    price: "$4,500 +",
    description: "A custom website that scales with your business.",
    features: [
      "Custom design",
      "Up to 7 pages and blog",
      "Marketing automations",
      "Custom analytics tools",
      "Content management system",
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
    description: "Secure hosting with SSL certificate and domain management",
  },
  {
    id: "blog",
    name: "Targeted blog posts",
    price: "$100/month",
    description: "Monthly posts to drive traffic to your website.",
  },
  {
    id: "cms",
    name: "Content management system",
    price: "$150/month",
    description: "Manage your website content with ease whenever you want.",
  },
  {
    id: "seo",
    name: "Advanced SEO package",
    price: "$300/month",
    description: "Boost your search rankings with advanced SEO techniques.",
  },
];
