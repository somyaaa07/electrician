import { 
  Zap, Shield, Sparkles, TrendingUp, Users, Globe, 
  Award, BarChart3, Settings, RefreshCw, Database 
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Certified for Hazardous Areas",
      shortText: "Hazardous Area Certified"
    },
    title: "Draw-Out",
    titleAccent: "MCC Panel",
    subtitle: "Reliable Power Solutions for Hazardous Industrial Environments",
    description:
      "Engineered for Oil & Gas and Chemical industries, our Draw-Out MCC Panels ensure maximum safety, reliability, and uninterrupted operations in Zone 1 & Zone 2 areas.",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iRNCJS9hgZ8eLynYUHmDp3Lrku95awOLsA&s",
    stats: [
      { value: 'Zone 1 & 2', label: 'Certified Use' },
      { value: 'IEC 60079', label: 'Compliance' },
      { value: 'Modular', label: 'Scalable Design' }
    ],
    cta: {
      primary: "Request Technical Quote",
      secondary: "Consult Our Experts"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Products' },
      { type: 'current', label: 'Draw-Out MCC Panel', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About' },
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Advantages' },
    { id: 'applications', label: 'Industry Applications' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "About Draw-Out MCC Panels",
    description: [
      "Intell DIGIX designs and manufactures <span class='text-[#009999] font-bold'>Draw-Out Motor Control Center (MCC) Panels</span> specifically for hazardous industrial environments, with a strong focus on Oil & Gas and Chemical Processing sectors.",
      "Our MCC panels are built in strict compliance with <strong>IS/IEC 60079-1:2007</strong>, ensuring safe and reliable operation in potentially explosive atmospheres while maintaining high operational efficiency."
    ],
    certifications: [
      { name: 'IS/IEC 60079-1', icon: Shield },
      { name: 'Hazardous Area Certified', icon: Award },
      { name: 'Oil & Gas Ready', icon: Shield },
      { name: 'Chemical Industry Approved', icon: Award }
    ]
  },

  // Overview Section
  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "Product Overview",
    cards: [
      {
        type: 'gradient',
        icon: Settings,
        title: "What It Does",
        description:
          "Draw-Out MCC panels provide centralized motor control with removable modules, allowing safe maintenance and replacement without shutting down the entire power system."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description:
          "Designed for Oil & Gas plants, chemical processing units, refineries, and other hazardous industrial locations."
      }
    ],
    highlights: [
      {
        icon: '🛡️',
        title: 'Hazardous Area Safe',
        desc: 'Certified for Zone 1 and Zone 2 explosive environments'
      },
      {
        icon: '🔄',
        title: 'Draw-Out Design',
        desc: 'Modules can be removed safely without isolating main power'
      },
      {
        icon: '🧩',
        title: 'Modular & Scalable',
        desc: 'Easy expansion using standardized modules'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features",
    items: [
      {
        id: 'drawout',
        category: 'Safety',
        icon: Shield,
        title: 'Draw-Out Modules (Buckets)',
        desc:
          'Each motor control module can be safely slid in and out for maintenance or replacement without shutting down the entire MCC.',
        highlight: 'Live Maintenance Safe',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'modular',
        category: 'Design',
        icon: Settings,
        title: 'Patented Modular Construction',
        desc:
          'Built using Elsteel’s Techno Module system, allowing easy customization and future expansion.',
        highlight: 'Elsteel Techno Module',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'compartment',
        category: 'Protection',
        icon: Database,
        title: 'Fully Compartmentalized Design',
        desc:
          'Each functional unit is isolated, preventing fault propagation and improving overall system safety.',
        highlight: 'Fault Isolation',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      {
        id: 'safety',
        category: 'Safety',
        icon: Shield,
        title: 'Integrated Safety Mechanisms',
        desc:
          'Automatic safety shutters, self-aligning contacts, and spring-loaded earth contacts ensure maximum operator safety.',
        highlight: 'Enhanced Protection',
        color: 'from-red-500 to-rose-500',
        layout: 'medium'
      },
      {
        id: 'interchange',
        category: 'Maintenance',
        icon: RefreshCw,
        title: 'Interchangeable Modules',
        desc:
          'Standardized modules allow quick replacement, reducing downtime during critical failures.',
        highlight: 'Quick Swap',
        color: 'from-teal-500 to-cyan-500',
        layout: 'small'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Advantages" },
    title: "Why Choose Intell DIGIX",
    subtitle: "Designed for safety, reliability, and operational continuity",
    items: [
      {
        icon: RefreshCw,
        title: 'Reduced Downtime',
        desc:
          'Quick module replacement without shutting down the system keeps production running.',
        metric: '✔',
        metricLabel: 'Continuous Operation',
        highlights: ['Fast maintenance', 'No full shutdown', 'Higher uptime'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Shield,
        title: 'Enhanced Safety',
        desc:
          'Comprehensive safety features significantly reduce electrical and operational risks.',
        metric: 'Zone 1/2',
        metricLabel: 'Safe Operation',
        highlights: ['Safety shutters', 'Grounding assurance', 'Fault isolation'],
        color: 'from-red-500 to-rose-500'
      },
      {
        icon: Database,
        title: 'High Reliability',
        desc:
          'Rugged construction ensures long-term performance in harsh industrial conditions.',
        metric: '24x7',
        metricLabel: 'Industrial Duty',
        highlights: ['Robust build', 'Extreme conditions', 'Long service life'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Award,
        title: 'Global Technology Partner',
        desc:
          'Authorized channel partner of Elsteel, Denmark, using globally proven Techno Module systems.',
        metric: 'Global',
        metricLabel: 'Technology',
        highlights: ['Elsteel Denmark', 'Proven design', 'Scalable systems'],
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Industries" },
    title: "Industry Applications",
    items: [
      {
        title: 'Oil & Gas',
        icon: '🛢️',
        desc:
          'Safe and reliable motor control solutions for upstream, midstream, and downstream operations.',
        cases: [
          'Refineries and petrochemical plants',
          'Offshore and onshore facilities',
          'Hazardous area motor control'
        ]
      },
      {
        title: 'Chemical Processing',
        icon: '⚗️',
        desc:
          'Designed to withstand aggressive and explosive environments in chemical plants.',
        cases: [
          'Process control systems',
          'Explosion-prone zones',
          'Continuous operation plants'
        ]
      },
      {
        title: 'Heavy Industries',
        icon: '🏭',
        desc:
          'Reliable MCC solutions for extreme industrial operating conditions.',
        cases: [
          'Power plants',
          'Fertilizer units',
          'Steel & metal processing'
        ]
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Hazardous Area Experts" },
    title: ["Need Safe & Reliable", "Draw-Out MCC Panels?"],
    description:
      "Partner with Intell DIGIX for certified, modular, and future-ready MCC solutions built for hazardous environments.",
    buttons: {
      primary: "Get Technical Consultation",
      secondary: "Request Quote"
    },
    disclaimer: "IS/IEC compliant • Hazardous area certified • Elsteel partner"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "IEC 60079",
    label: "Safety Certified"
  }
};
