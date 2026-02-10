import { 
  Zap, Shield, Sparkles, TrendingUp, Users, Globe, 
  Award, BarChart3, Settings, RefreshCw, Database 
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Trusted by Industries Nationwide",
      shortText: "Industry Trusted"
    },
    title: "ABB",
    titleAccent: "VFD Panel",
    subtitle: "Smart Motor Control & Energy Optimization",
    description: "High-performance Variable Frequency Drive panels engineered for reliability, efficiency, and long service life",
    backgroundImage:"https://5.imimg.com/data5/WI/MX/GO/SELLER-5724470/vfd-electrical-panel.jpeg",
    stats: [
      { value: '30%', label: 'Energy Savings' },
      { value: '24x7', label: 'Reliable Operation' },
      { value: '100%', label: 'Custom Built' }
    ],
    cta: {
      primary: "Request Quote",
      secondary: "Talk to Expert"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Products' },
      { type: 'current', label: 'ABB VFD Panel', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About' },
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Why Choose Us' },
    { id: 'applications', label: 'Applications' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "About ABB VFD Panels",
    description: [
      "ABB VFD Panels by <span class='text-[#009999] font-bold'>Intell-DIGIX India Pvt. Ltd.</span> are designed to deliver precise speed control, energy efficiency, and extended motor life for industrial and commercial applications.",
      "Manufactured using premium-grade components and engineered by experienced professionals, our VFD panels ensure smooth motor operation, reduced power consumption, and dependable performance even in demanding environments."
    ],
    certifications: [
      { name: 'IEC Standards', icon: Shield },
      { name: 'ISO Certified', icon: Award },
      { name: 'Quality Tested', icon: Shield },
      { name: 'Industry Proven', icon: Award }
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
        description: "VFD panels control motor speed by varying voltage and frequency, improving efficiency, reducing wear, and optimizing system performance."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description: "Ideal for industries, commercial facilities, HVAC systems, pumping stations, and automation-driven operations."
      }
    ],
    highlights: [
      { 
        icon: '⚡', 
        title: 'Energy Efficient', 
        desc: 'Significant reduction in power consumption and operating costs' 
      },
      { 
        icon: '🛠️', 
        title: 'Easy Maintenance', 
        desc: 'User-friendly design with minimal servicing requirements' 
      },
      { 
        icon: '🔄', 
        title: 'Smooth Motor Control', 
        desc: 'Soft start and stop for extended motor life' 
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features",
    items: [
      { 
        id: 'durability',
        category: 'Performance',
        icon: Shield,
        title: 'High Durability', 
        desc: 'Robust construction ensures long service life even in harsh industrial environments.',
        highlight: 'Industrial Grade',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      { 
        id: 'efficiency',
        category: 'Energy',
        icon: Zap,
        title: 'Energy Optimization', 
        desc: 'Designed to reduce energy consumption and improve overall system efficiency.',
        highlight: 'Lower Power Bills',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      { 
        id: 'custom',
        category: 'Design',
        icon: Settings,
        title: 'Custom Built Panels', 
        desc: 'Tailor-made VFD panels to suit specific operational and application requirements.',
        highlight: '100% Customizable',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      { 
        id: 'monitoring',
        category: 'Control',
        icon: BarChart3,
        title: 'Precise Motor Control', 
        desc: 'Accurate speed and torque control for smooth and stable motor performance.',
        highlight: 'Stable Output',
        color: 'from-indigo-500 to-blue-500',
        layout: 'medium'
      },
      { 
        id: 'reliability',
        category: 'Reliability',
        icon: Database,
        title: 'Reliable Operation', 
        desc: 'Ensures uninterrupted performance in continuous and critical operations.',
        highlight: '24x7 Duty',
        color: 'from-teal-500 to-cyan-500',
        layout: 'small'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Why Choose Intell Power & Automation",
    subtitle: "Engineered for performance, reliability, and value",
    items: [
      { 
        icon: Award, 
        title: 'Expert Manufacturing', 
        desc: 'Manufactured under expert supervision using proven engineering practices.',
        metric: '100%',
        metricLabel: 'Quality Focus',
        highlights: ['Skilled workforce', 'Premium components', 'Strict testing'],
        color: 'from-green-500 to-emerald-500'
      },
      { 
        icon: Zap, 
        title: 'Energy Savings', 
        desc: 'Optimized motor control leads to significant reduction in power consumption.',
        metric: '30%',
        metricLabel: 'Energy Saving',
        highlights: ['Efficient operation', 'Reduced losses', 'Lower costs'],
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        icon: Shield, 
        title: 'Reliable Performance', 
        desc: 'Designed for continuous operation in industrial and commercial environments.',
        metric: '24x7',
        metricLabel: 'Operational Reliability',
        highlights: ['Stable output', 'Minimal downtime', 'Long life'],
        color: 'from-red-500 to-rose-500'
      },
      { 
        icon: RefreshCw, 
        title: 'On-Time Delivery', 
        desc: 'Strong logistics and planning ensure timely delivery without delays.',
        metric: '✔',
        metricLabel: 'Timely Supply',
        highlights: ['Strong transport', 'Reliable schedules', 'Customer trust'],
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
        title: 'HVAC Systems',
        icon: '❄️',
        desc: 'Efficient control for ventilation, air extraction, and smoke management systems.',
        cases: [
          'Ventilation & air extraction systems',
          'Smoke extraction fans',
          'Wall air heating systems'
        ]
      },
      {
        title: 'Pumping Systems',
        icon: '💧',
        desc: 'Reliable speed control for pumps used in heating, cooling, and industrial processes.',
        cases: [
          'Heat pumps & chiller pumps',
          'Recirculating air heating systems',
          'Water management applications'
        ]
      },
      {
        title: 'Industrial Motors',
        icon: '🏭',
        desc: 'General motor control for manufacturing and processing industries.',
        cases: [
          'Induced & forced draft fans',
          'Heating and drying cabinets',
          'Industrial automation systems'
        ]
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Power Your Operations" },
    title: ["Looking for Reliable", "ABB VFD Panels?"],
    description: "ContactIntell-DIGIX India Pvt. Ltd. for high-performance, cost-effective VFD solutions.",
    buttons: {
      primary: "Get Quote",
      secondary: "Contact Us"
    },
    disclaimer: "Quality assured • Custom solutions • Industry proven"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "30%",
    label: "Energy Savings"
  }
};
