import {
  Zap, Shield, Sparkles, TrendingUp, Users, Globe,
  Award, Cloud, RefreshCw, BarChart3, GitBranch,
  Database, Settings
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Trusted Industrial Drive Solutions",
      shortText: "ABB MV Drives"
    },
    title: "ABB",
    titleAccent: "Medium Voltage AC Drives",
    subtitle: "High-performance MV VSDs from 200 kW up to 12,500 kW",
    description:
      "Delivered and integrated by Intell-DIGIX India Pvt. Ltd. for energy-efficient, reliable, and future-ready industrial operations",
    backgroundImage:
      "https://intelldigix.com/wp-content/uploads/2025/08/HT-VCB.jpg",
    stats: [
      { value: '3.3–11 kV', label: 'Voltage Range' },
      { value: '12,500 kW', label: 'Max Power' },
      { value: 'ACS8080', label: 'ABB Platform' }
    ],
    cta: {
      primary: "Request Technical Consultation",
      secondary: "Download Brochure"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Products' },
      { type: 'current', label: 'ABB MV AC Drives', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About' },
    { id: 'overview', label: 'Product Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'applications', label: 'Industry Applications' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "ABB Medium Voltage AC Drives",
    description: [
      "ABB Medium Voltage AC Drives (3.3 kV / 6.6 kV / 11 kV) are designed for high-power industrial applications requiring <span class='text-[#009999] font-bold'>maximum efficiency, reliability, and precise motor control</span>.",
      "Intell-DIGIX India Pvt. Ltd., a leading supplier and system integrator, delivers end-to-end MV VSD solutions backed by ABB’s ACS8080 platform and Intell Ability™ digital services."
    ],
    certifications: [
      { name: 'IEC Standards', icon: Shield },
      { name: 'ISO Certified', icon: Award },
      { name: 'High Safety Compliance', icon: Shield },
      { name: 'ABB Global Quality', icon: Award }
    ]
  },

  // Overview Section
  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "Product Overview",
    cards: [
      {
        type: 'gradient',
        icon: Zap,
        title: "What It Does",
        description:
          "ABB ACS8080 MV Drives provide precise speed and torque control for large motors, improving process efficiency, reducing energy consumption, and extending equipment life."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description:
          "Ideal for cement plants, mining operations, power utilities, water treatment facilities, oil & gas industries, marine systems, and heavy manufacturing sectors."
      }
    ],
    highlights: [
      {
        icon: '⚡',
        title: 'High Power Performance',
        desc: 'Supports motors from 200 kW up to 12,500 kW with stable and efficient operation'
      },
      {
        icon: '🌱',
        title: 'Energy Efficient',
        desc: 'Optimized energy usage with constant power factor and reduced operational costs'
      },
      {
        icon: '🧠',
        title: 'Digital Ready',
        desc: 'Integrated with ABB Intell Ability™ for monitoring, diagnostics, and optimization'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features & Capabilities",
    items: [
      {
        id: 'technology',
        category: 'Technology',
        icon: Settings,
        title: 'Advanced MP3C Motor Control',
        desc:
          'Delivers superior dynamic motor performance, smooth torque control, and high reliability for demanding industrial processes.',
        highlight: 'High precision control',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'efficiency',
        category: 'Efficiency',
        icon: TrendingUp,
        title: 'Energy Efficiency & Sustainability',
        desc:
          'Reduces energy losses, improves system efficiency, and supports sustainability goals across heavy industries.',
        highlight: 'Lower energy costs',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      {
        id: 'modular',
        category: 'Design',
        icon: GitBranch,
        title: 'Modular & Scalable Design',
        desc:
          'Flexible system architecture allows easy customization, upgrades, and scalability for future expansion.',
        highlight: 'Future-ready',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'interface',
        category: 'Usability',
        icon: RefreshCw,
        title: 'User-Friendly Interface',
        desc:
          'All-compatible user experience with intuitive operation, diagnostics, and maintenance support.',
        highlight: 'Easy operation',
        color: 'from-yellow-500 to-orange-500',
        layout: 'medium'
      },
      {
        id: 'cloud',
        category: 'Digital',
        icon: Cloud,
        title: 'Cloud-Connected Capability',
        desc:
          'Enables remote monitoring, predictive maintenance, and performance analytics using ABB digital services.',
        highlight: 'Smart monitoring',
        color: 'from-indigo-500 to-blue-500',
        layout: 'small'
      },
      {
        id: 'safety',
        category: 'Safety',
        icon: Shield,
        title: 'High Safety Standards',
        desc:
          'Designed with advanced protection features to ensure safe operation in critical and hazardous environments.',
        highlight: 'Reliable & secure',
        color: 'from-red-500 to-rose-500',
        layout: 'small'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Business Benefits",
    subtitle:
      "How ABB MV Drives powered by Intell-DIGIX transform industrial operations",
    items: [
      {
        icon: TrendingUp,
        title: 'Optimized Energy Usage',
        desc:
          'Significant reduction in power consumption and operational costs through efficient motor control.',
        metric: 'Up to 30%',
        metricLabel: 'Energy Savings',
        highlights: ['Lower OPEX', 'Sustainable operations', 'Reduced losses'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Shield,
        title: 'Enhanced Reliability',
        desc:
          'Stable and continuous operation even in harsh industrial environments.',
        metric: '24×7',
        metricLabel: 'Operational Stability',
        highlights: ['Reduced downtime', 'Long equipment life', 'High availability'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Sparkles,
        title: 'Future-Ready Digitalization',
        desc:
          'Digital intelligence enables predictive maintenance and performance optimization.',
        metric: 'Smart',
        metricLabel: 'Industry 4.0',
        highlights: ['Remote monitoring', 'Predictive insights', 'Data-driven decisions'],
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Industries" },
    title: "Industry-Specific Applications",
    items: [
      {
        title: 'Cement Plants',
        icon: '🏭',
        desc: 'Reliable drive solutions for heavy-duty cement operations.',
        cases: ['Kilns', 'Crushers', 'Conveyors']
      },
      {
        title: 'Mining & Minerals',
        icon: '⛏️',
        desc: 'High-power drives designed for extreme mining conditions.',
        cases: ['Hoists', 'Mills', 'Crushers']
      },
      {
        title: 'Water Utilities',
        icon: '💧',
        desc: 'Efficient control of large pumping systems.',
        cases: ['High-capacity feed pumps', 'Water distribution']
      },
      {
        title: 'Power Plants',
        icon: '⚡',
        desc: 'Critical applications ensuring stable power generation.',
        cases: ['ID/FD fans', 'Feed water pumps']
      },
      {
        title: 'Oil, Gas, Marine & Metals',
        icon: '🚢',
        desc: 'Mission-critical operations with high safety and reliability needs.',
        cases: ['Compressors', 'Propulsion systems', 'Rolling mills']
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Industrial-Grade Solutions" },
    title: ["Ready to Power Your", "Industrial Operations?"],
    description:
      "Partner with Intell-DIGIX India Pvt. Ltd. for customized ABB MV drive solutions built for performance and reliability.",
    buttons: {
      primary: "Talk to Our Experts",
      secondary: "Request Proposal"
    },
    disclaimer: "Customized solutions • Industry expertise • End-to-end support"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "12,500 kW",
    label: "Maximum Drive Capacity"
  }
};
