export const topNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/schedule-call", label: "Schedule Call" },
  { href: "/contact", label: "Contact" },
];

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
    price: "$3,500 +",
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
    id: "cms",
    name: "Content management system",
    price: "$100/month",
    description: "Manage your website content with ease whenever you want.",
  },
  {
    id: "blog",
    name: "Targeted blog posts",
    price: "$100/month (per post)",
    description: "Targeted blog posts to drive traffic to your website.",
  },
  {
    id: "seo",
    name: "Advanced SEO package",
    price: "$300/month",
    description: "Boost your search rankings with advanced SEO techniques.",
  },
];
