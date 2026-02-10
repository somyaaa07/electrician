import { 
  Zap, Shield, Sparkles, TrendingUp, Users, Globe, 
  Award, RefreshCw, BarChart3, Database, Settings 
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Featured • Rated 4.8 by Industrial Clients",
      shortText: "4.8 Rated"
    },
    title: "PLC Panel",
    titleAccent: "Solutions",
    subtitle: "Smart Industrial Automation & Control",
    description:
      "Designed to control, monitor, and optimize complete industrial processes, Intell-DIGIX PLC Panels form the backbone of intelligent, efficient, and safe automation systems across industries.",
    backgroundImage:
      "https://www.kdmsteel.com/wp-content/uploads/2025/03/PLC-Panel-%E2%80%93-Components-Working-Types-Uses-Benefits.jpg",
    stats: [
      { value: '4.8★', label: 'Client Rating' },
      { value: 'EIL', label: 'Approved' },
      { value: 'Pan India', label: 'Service Support' }
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
      { type: 'link', label: 'Automation Panels' },
      { type: 'current', label: 'PLC Panel', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About PLC Panel' },
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Why Choose Us' },
    { id: 'applications', label: 'Industries Served' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "PLC Panel Solutions for Smart Industrial Automation",
    description: [
      "In today’s industrial world, automation isn’t optional—it’s essential. <span class='text-[#009999] font-bold'>Intell-DIGIX PLC Panels</span> are engineered to deliver accurate logic execution, seamless integration, and complete control of industrial processes.",
      "Our PLC panels receive real-time signals from sensors, process them through programmed logic, and precisely control motors, valves, conveyors, and actuators — ensuring consistency, safety, and operational efficiency."
    ],
    certifications: [
      { name: 'EIL Approved', icon: Award },
      { name: 'Industrial Standards', icon: Shield },
      { name: 'Quality Tested', icon: Shield },
      { name: 'Long Life Design', icon: Award }
    ]
  },

  // Overview Section
  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "What is a PLC Panel?",
    cards: [
      {
        type: 'gradient',
        icon: Settings,
        title: "Core Function",
        description:
          "A PLC Panel is an electrical control cabinet housing a PLC along with power supplies, relays, MCBs, terminals, and communication modules for complete automation control."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Use Cases",
        description:
          "Ideal for manufacturing units, utilities, OEM machinery, HVAC systems, material handling, and water treatment plants."
      }
    ],
    highlights: [
      {
        icon: '⚙️',
        title: 'Logic-Based Control',
        desc: 'Executes programmed logic for precise and repeatable automation'
      },
      {
        icon: '📊',
        title: 'Real-Time Monitoring',
        desc: 'Integrated with HMI & SCADA for live process visibility'
      },
      {
        icon: '🔌',
        title: 'System Integration',
        desc: 'Easily integrates with existing field devices and networks'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features of Our PLC Panels",
    items: [
      {
        id: 'custom',
        category: 'Design',
        icon: Settings,
        title: 'Custom-Built Automation Panels',
        desc:
          'Panels are designed and manufactured as per customer process requirements and site conditions.',
        highlight: 'Tailor-made solutions',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'plc-brands',
        category: 'Hardware',
        icon: Database,
        title: 'Multi-Brand PLC Support',
        desc:
          'Supports Siemens, Allen Bradley, Delta, and Schneider PLC platforms.',
        highlight: 'Industry-leading PLCs',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'hmi',
        category: 'Monitoring',
        icon: BarChart3,
        title: 'HMI & SCADA Integration',
        desc:
          'Real-time monitoring, alarms, trends, and data logging for complete operational visibility.',
        highlight: 'Smart visualization',
        color: 'from-green-500 to-emerald-500',
        layout: 'medium'
      },
      {
        id: 'wiring',
        category: 'Safety',
        icon: Shield,
        title: 'Safe & Organized Wiring',
        desc:
          'Proper segregation of power and control wiring with clean routing and labeling.',
        highlight: 'Enhanced safety',
        color: 'from-red-500 to-rose-500',
        layout: 'small'
      },
      {
        id: 'communication',
        category: 'Connectivity',
        icon: RefreshCw,
        title: 'Industrial Communication Protocols',
        desc:
          'Supports Modbus, Profibus, Ethernet, and other industrial networks.',
        highlight: 'Seamless communication',
        color: 'from-indigo-500 to-blue-500',
        layout: 'medium'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Why Choose Us" },
    title: "Trusted PLC Panel Manufacturer in India",
    subtitle: "Engineered for performance, reliability, and long-term value",
    items: [
      {
        icon: Shield,
        title: 'High Operational Reliability',
        desc:
          'Robust panel design and tested PLC logic ensure uninterrupted operation.',
        metric: 'EIL',
        metricLabel: 'Approved',
        highlights: ['Stable control', 'Fault protection', 'Industrial-grade components'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Zap,
        title: 'Optimized System Efficiency',
        desc:
          'Reduces downtime, improves response time, and enhances process efficiency.',
        metric: '24/7',
        metricLabel: 'Operation',
        highlights: ['Fast logic execution', 'Accurate control', 'Lower losses'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: TrendingUp,
        title: 'Easy Maintenance & Expansion',
        desc:
          'Modular design allows easy troubleshooting and future I/O expansion.',
        metric: 'Long',
        metricLabel: 'Service Life',
        highlights: ['Expandable I/O', 'Clear documentation', 'Service-friendly design'],
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Industries" },
    title: "Industries We Serve",
    items: [
      {
        title: 'Process Industries',
        icon: '🧪',
        desc: 'Automation solutions for continuous and batch processes.',
        cases: ['Chemical', 'Pharmaceutical', 'Food & Beverage']
      },
      {
        title: 'Oil & Gas',
        icon: '🛢️',
        desc: 'Reliable control systems for critical operations.',
        cases: ['Refineries', 'Pipeline systems']
      },
      {
        title: 'Power & Energy',
        icon: '⚡',
        desc: 'Automation panels for generation and utility applications.',
        cases: ['Power plants', 'Substations']
      },
      {
        title: 'Water & Wastewater',
        icon: '💧',
        desc: 'Precise control for treatment and distribution systems.',
        cases: ['STP', 'ETP', 'Pumping stations']
      },
      {
        title: 'Manufacturing & OEM',
        icon: '🏭',
        desc: 'Custom PLC panels for machinery and production lines.',
        cases: ['Packaging', 'Material handling']
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "PLC Automation Experts" },
    title: ["Ready to Automate Your", "Industrial Process?"],
    description:
      "Get in touch with Intell-DIGIX for reliable, scalable, and future-ready PLC Panel solutions.",
    buttons: {
      primary: "Request a Quote",
      secondary: "Consult Our Engineers"
    },
    disclaimer: "EIL approved • Custom-built • Pan-India support"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "4.8",
    label: "Customer Rating"
  }
};
