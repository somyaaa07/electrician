import { 
  Zap, Shield, Sparkles, TrendingUp, Users, Globe, 
  Award, RefreshCw, BarChart3, Database, Settings 
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Featured • Rated 4.8 by Industry Clients",
      shortText: "4.8 Rated"
    },
    title: "MCC Panel",
    titleAccent: "Solutions",
    subtitle: "Safe & Reliable Motor Control Systems",
    description:
      "Engineered Motor Control Centers designed for secure, centralized control of multiple motors with maximum safety, flexibility, and operational efficiency.",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXcSQ44u5jKMJcQiQN5g47Jm0I35anKt5QA&s",
    stats: [
      { value: 'IEC 61439', label: 'Type Tested' },
      { value: '65kA', label: 'Short Circuit Rating' },
      { value: 'CPRI', label: 'Certified' }
    ],
    cta: {
      primary: "Get a Quote",
      secondary: "Talk to Experts"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Panels' },
      { type: 'current', label: 'MCC Panel', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About MCC' },
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'applications', label: 'Applications' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "MCC Panel Solutions by Intell-DIGIX",
    description: [
      "At <span class='text-[#5dc1d7] font-bold'>Intell-DIGIX</span>, we design and manufacture advanced Motor Control Centre (MCC) Panels that provide centralized control, protection, and monitoring of multiple electric motors from a single location.",
      "Our MCC panels are custom-engineered for industrial plants, utilities, pumping stations, and manufacturing facilities where safe motor startup, overload protection, and future expansion are critical."
    ],
    certifications: [
      { name: 'IEC 61439-1 & 2', icon: Shield },
      { name: 'CPRI Certified', icon: Award },
      { name: 'Type Tested Panels', icon: Shield },
      { name: 'IS / IEC Compliance', icon: Award }
    ]
  },

  // Overview Section
  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "What is an MCC Panel?",
    cards: [
      {
        type: 'gradient',
        icon: Settings,
        title: "Purpose",
        description:
          "An MCC Panel is a centralized assembly that controls and protects multiple electric motors using starters, contactors, overload relays, breakers, and control devices."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Applications",
        description:
          "Used in industries where multiple motors operate continuously and require safe, reliable, and organized control from one enclosure."
      }
    ],
    highlights: [
      {
        icon: '⚡',
        title: 'Centralized Motor Control',
        desc: 'Operate, monitor, and protect multiple motors from a single panel'
      },
      {
        icon: '🛡️',
        title: 'Enhanced Safety',
        desc: 'Protection against overloads, short circuits, and faults'
      },
      {
        icon: '🔧',
        title: 'Easy Maintenance',
        desc: 'Clear front access with indicators and selector switches'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features of Our MCC Panels",
    items: [
      {
        id: 'motor-control',
        category: 'Control',
        icon: Zap,
        title: 'Multiple Motor Starting Options',
        desc:
          'Custom-built panels supporting DOL, star-delta, soft starters, and VFD-based motor control.',
        highlight: 'Flexible motor control',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'components',
        category: 'Protection',
        icon: Shield,
        title: 'Premium Protection Devices',
        desc:
          'Equipped with ACBs, MCCBs, contactors, and thermal overload relays for complete motor protection.',
        highlight: 'High safety standards',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      {
        id: 'modular',
        category: 'Design',
        icon: Database,
        title: 'Modular Construction',
        desc:
          'Available in draw-out or fixed type compartments with future expansion capability.',
        highlight: 'Expandable design',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'busbar',
        category: 'Engineering',
        icon: RefreshCw,
        title: 'Robust Busbar System',
        desc:
          'Copper busbars with proper interlocking and segregated cable chambers.',
        highlight: 'High current handling',
        color: 'from-yellow-500 to-orange-500',
        layout: 'medium'
      },
      {
        id: 'automation',
        category: 'Automation',
        icon: BarChart3,
        title: 'PLC & SCADA Integration',
        desc:
          'Optional integration with PLCs and SCADA systems for automation and remote monitoring.',
        highlight: 'Smart control ready',
        color: 'from-indigo-500 to-blue-500',
        layout: 'medium'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Why Choose Intell-DIGIX MCC Panels",
    subtitle: "Built for performance, safety, and long-term reliability",
    items: [
      {
        icon: Shield,
        title: 'Improved Operational Safety',
        desc:
          'Designed with industry-grade protection to ensure safe motor operation and fault isolation.',
        metric: 'IEC',
        metricLabel: 'Compliant',
        highlights: ['Short-circuit protection', 'Overload safety', 'Secure interlocking'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Zap,
        title: 'Reliable Motor Performance',
        desc:
          'Ensures smooth startup, controlled operation, and reduced motor stress.',
        metric: '24/7',
        metricLabel: 'Operation',
        highlights: ['Stable power', 'Reduced downtime', 'Consistent output'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: TrendingUp,
        title: 'Scalable & Cost-Effective',
        desc:
          'Expandable designs reduce future costs and support plant growth.',
        metric: 'Optimized',
        metricLabel: 'Lifecycle Cost',
        highlights: ['Modular feeders', 'Easy upgrades', 'Lower maintenance'],
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Applications" },
    title: "Industry Applications",
    items: [
      {
        title: 'Manufacturing Plants',
        icon: '🏭',
        desc: 'Centralized control of production line motors.',
        cases: ['Assembly lines', 'Process machinery']
      },
      {
        title: 'Pumping Stations',
        icon: '💧',
        desc: 'Reliable motor control for water and fluid handling.',
        cases: ['Water supply', 'Wastewater treatment']
      },
      {
        title: 'Power & Utilities',
        icon: '⚡',
        desc: 'Motor control for auxiliary and distribution systems.',
        cases: ['Substations', 'Utility infrastructure']
      },
      {
        title: 'Process Industries',
        icon: '🧪',
        desc: 'Safe motor operation in continuous process environments.',
        cases: ['Chemical', 'Cement', 'Steel plants']
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Need MCC Panels?" },
    title: ["Looking for Safe &", "Reliable Motor Control?"],
    description:
      "Contact Intell-DIGIX today for custom-engineered MCC Panel solutions built to international standards.",
    buttons: {
      primary: "Request a Quote",
      secondary: "Speak to Our Team"
    },
    disclaimer: "Type tested • IEC compliant • CPRI certified"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "4.8",
    label: "Customer Rating"
  }
};
