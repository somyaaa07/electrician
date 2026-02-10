import { 
  Zap, Shield, Sparkles, TrendingUp, Users, Globe, 
  Award, RefreshCw, BarChart3, Database, Settings 
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Trusted Power Management Partner",
      shortText: "Eaton Authorized"
    },
    title: "Eaton UPS",
    titleAccent: "Lithium-Ion",
    subtitle: "High-Performance Backup Power for Mission-Critical Applications",
    description:
      "Intell DIGIX delivers Eaton UPS solutions with advanced lithium-ion battery systems, ensuring maximum uptime, higher efficiency, and long-term cost savings for critical power environments.",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PhOacLvL6F2MPyQWubRIWRXMhHaCBeW9yA&s",
    stats: [
      { value: '100–1200 kVA', label: 'UPS Range' },
      { value: '24/7', label: 'Uptime' },
      { value: 'High Density', label: 'Compact Design' }
    ],
    cta: {
      primary: "Request a Quote",
      secondary: "Talk to Power Expert"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Power Solutions' },
      { type: 'current', label: 'Eaton UPS Lithium-Ion', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About UPS' },
    { id: 'overview', label: 'Solution Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'applications', label: 'Applications' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "Eaton UPS with Lithium-Ion Battery Systems",
    description: [
      "Intell DIGIX power management solutions are designed to protect against the most common and harmful power problems present in any environment. Our Eaton UPS systems safeguard both <span class='text-[#009999] font-bold'>critical data and hardware</span> from outages, surges, lightning strikes, and power instability.",
      "With Eaton’s advanced technology and Intell DIGIX integration expertise, clients benefit from reliable backup power, intelligent monitoring, and future-ready infrastructure compatibility."
    ],
    certifications: [
      { name: 'Eaton Certified', icon: Award },
      { name: 'High Reliability', icon: Shield },
      { name: 'Energy Efficient', icon: Zap },
      { name: 'Enterprise Ready', icon: Award }
    ]
  },

  // Overview Section
  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "Power Xpert 9395P UPS Overview",
    cards: [
      {
        type: 'gradient',
        icon: Settings,
        title: "What It Delivers",
        description:
          "The Eaton Power Xpert 9395P UPS provides high double-conversion efficiency, superior power density, and unmatched reliability for mission-critical applications."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It’s For",
        description:
          "Ideal for data centers, industrial facilities, healthcare, utilities, and IT infrastructure requiring continuous power protection."
      }
    ],
    highlights: [
      {
        icon: '⚡',
        title: 'Double Conversion Efficiency',
        desc: 'High efficiency operation with reduced energy losses'
      },
      {
        icon: '🔋',
        title: 'Lithium-Ion Ready',
        desc: 'Supports advanced lithium-ion battery systems'
      },
      {
        icon: '🧠',
        title: 'Smart Power Management',
        desc: 'Integrated monitoring and control services'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features of Eaton UPS Systems",
    items: [
      {
        id: 'power-protection',
        category: 'Protection',
        icon: Shield,
        title: 'Comprehensive Power Protection',
        desc:
          'Protects against outages, surges, lightning strikes, and electrical disturbances.',
        highlight: 'Total power security',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'lithium',
        category: 'Battery',
        icon: Database,
        title: 'Lithium-Ion Battery Systems',
        desc:
          'Compact, lightweight battery strings delivering high power density and long service life.',
        highlight: 'Lower TCO',
        color: 'from-green-500 to-emerald-500',
        layout: 'medium'
      },
      {
        id: 'compatibility',
        category: 'Integration',
        icon: RefreshCw,
        title: 'Application Compatibility',
        desc:
          'Certified compatibility with VMware, Red Hat, Microsoft, and other leading IT platforms.',
        highlight: 'Future-ready',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'monitoring',
        category: 'Management',
        icon: BarChart3,
        title: 'Power Monitoring & Control',
        desc:
          'Advanced power management tools for monitoring, diagnostics, and optimization.',
        highlight: 'Full visibility',
        color: 'from-indigo-500 to-blue-500',
        layout: 'medium'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Why Choose Eaton UPS from Intell DIGIX",
    subtitle: "Reliable power, reduced downtime, and long-term efficiency",
    items: [
      {
        icon: Shield,
        title: 'Maximum Business Continuity',
        desc:
          'Ensures uninterrupted operation for mission-critical systems.',
        metric: '24/7',
        metricLabel: 'Uptime',
        highlights: ['No downtime', 'Stable power', 'Critical load protection'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: TrendingUp,
        title: 'Lower Total Cost of Ownership',
        desc:
          'Lithium-ion batteries reduce replacement cycles and maintenance costs.',
        metric: 'High',
        metricLabel: 'TCO Savings',
        highlights: ['Longer battery life', 'Lower cooling needs', 'Compact footprint'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Zap,
        title: 'High Power Density',
        desc:
          'Megawatts of power delivered in a smaller footprint.',
        metric: 'MW',
        metricLabel: 'Scalability',
        highlights: ['Space saving', 'Lightweight design', 'Flexible deployment'],
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Applications" },
    title: "Application Areas",
    items: [
      {
        title: 'Data Centers',
        icon: '🖥️',
        desc: 'Reliable backup power for servers and IT infrastructure.',
        cases: ['Enterprise DCs', 'Colocation facilities']
      },
      {
        title: 'Healthcare',
        icon: '🏥',
        desc: 'Uninterrupted power for critical medical equipment.',
        cases: ['Hospitals', 'Diagnostic centers']
      },
      {
        title: 'Industrial Facilities',
        icon: '🏭',
        desc: 'Power protection for automation and process systems.',
        cases: ['Manufacturing', 'Process plants']
      },
      {
        title: 'Utilities & Infrastructure',
        icon: '⚡',
        desc: 'Stable power for control rooms and substations.',
        cases: ['Power utilities', 'Rail infrastructure']
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Power Without Compromise" },
    title: ["Secure Your Power.", "Protect Your Operations."],
    description:
      "Partner with Intell DIGIX for Eaton UPS and lithium-ion battery solutions designed for reliability, efficiency, and future growth.",
    buttons: {
      primary: "Get Consultation",
      secondary: "Download Brochure"
    },
    disclaimer: "Eaton technology • Lithium-ion ready • Enterprise grade"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "100–1200 kVA",
    label: "UPS Capacity Range"
  }
};
