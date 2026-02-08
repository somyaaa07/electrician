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
      text: "Smart Power Control Solutions",
      shortText: "VCB Panels"
    },
    title: "Intelldigix",
    titleAccent: "VCB Panels",
    subtitle: "Safe, Efficient & Reliable Medium Voltage Power Distribution",
    description:
      "Engineered Vacuum Circuit Breaker Panels delivering superior fault protection, smooth switching, and long operational life for critical power systems.",
    backgroundImage:
      "https://www.simartech.com/wp-content/uploads/2025/05/Untitled-design-30.png",
    stats: [
      { value: '11kV–33kV', label: 'Voltage Range' },
      { value: '65kA', label: 'Short Circuit Rating' },
      { value: 'IEC 61439', label: 'Compliance' }
    ],
    cta: {
      primary: "Request Consultation",
      secondary: "Download Brochure"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Products' },
      { type: 'current', label: 'VCB Panels', icon: Sparkles }
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
    title: "About Intelldigix VCB Panels",
    description: [
      "At Intelldigix, we specialize in <span class='text-[#5dc1d7] font-bold'>Vacuum Circuit Breaker (VCB) Panels</span> designed for safe, efficient, and reliable medium-voltage power distribution across modern electrical infrastructures.",
      "From design and customization to installation and commissioning, our expert team ensures precision-engineered panels that reduce failures, improve safety, and support long-term operational stability."
    ],
    certifications: [
      { name: 'IEC 61439-1 & 2', icon: Shield },
      { name: 'CPRI Certified', icon: Award },
      { name: 'IS Standards', icon: Shield },
      { name: 'Utility Grade Safety', icon: Award }
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
          "VCB Panels protect medium-voltage power circuits by interrupting fault currents using vacuum interrupters, ensuring fast arc extinction and system safety."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description:
          "Ideal for industrial plants, commercial complexes, substations, utilities, and energy facilities requiring reliable power control."
      }
    ],
    highlights: [
      {
        icon: '⚡',
        title: 'Superior Fault Protection',
        desc: 'Fast and reliable arc interruption for enhanced system safety'
      },
      {
        icon: '🧠',
        title: 'Smart Integration',
        desc: 'SCADA & PLC compatible for remote monitoring and control'
      },
      {
        icon: '🛡️',
        title: 'International Compliance',
        desc: 'Designed to meet IS, IEC, and global safety standards'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Service Feature Highlights",
    items: [
      {
        id: 'custom',
        category: 'Design',
        icon: Settings,
        title: 'Custom-Built VCB Panels',
        desc:
          'Engineered for 11kV to 33kV applications with indoor and outdoor enclosure options.',
        highlight: '11kV–33kV',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'protection',
        category: 'Safety',
        icon: Shield,
        title: 'Advanced Protection System',
        desc:
          'Equipped with CT/PT meters, protection relays, and reliable trip mechanisms.',
        highlight: 'High Safety',
        color: 'from-red-500 to-rose-500',
        layout: 'small'
      },
      {
        id: 'testing',
        category: 'Reliability',
        icon: Zap,
        title: 'High Fault Withstand Capability',
        desc:
          'Tested for high-voltage arc interruption and fault clearance performance.',
        highlight: '65kA / 1 sec',
        color: 'from-yellow-500 to-orange-500',
        layout: 'small'
      },
      {
        id: 'automation',
        category: 'Automation',
        icon: BarChart3,
        title: 'SCADA / PLC Ready',
        desc:
          'Supports smart monitoring, diagnostics, and automation integration.',
        highlight: 'Remote Control',
        color: 'from-indigo-500 to-blue-500',
        layout: 'medium'
      },
      {
        id: 'durability',
        category: 'Longevity',
        icon: Database,
        title: 'Long Operational Life',
        desc:
          'High-grade vacuum interrupters ensure minimal maintenance and extended lifespan.',
        highlight: 'Low Maintenance',
        color: 'from-teal-500 to-cyan-500',
        layout: 'small'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Why Choose Intelldigix Panels",
    subtitle:
      "Built for performance, safety, and scalability in modern power systems",
    items: [
      {
        icon: Shield,
        title: 'Enhanced Electrical Safety',
        desc:
          'Protects equipment and personnel with reliable fault isolation and arc containment.',
        metric: 'High',
        metricLabel: 'Safety Level',
        highlights: ['Fast fault clearance', 'Arc suppression', 'Stable operation'],
        color: 'from-red-500 to-rose-500'
      },
      {
        icon: TrendingUp,
        title: 'Operational Reliability',
        desc:
          'Reduces downtime and improves continuity of power supply.',
        metric: '24×7',
        metricLabel: 'Reliability',
        highlights: ['Reduced failures', 'Stable distribution', 'Proven design'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Sparkles,
        title: 'Scalable & Future Ready',
        desc:
          'Designed to adapt with future expansion and automation needs.',
        metric: 'Flexible',
        metricLabel: 'Design',
        highlights: ['Expandable', 'Automation ready', 'Custom solutions'],
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Industries" },
    title: "Industry Applications",
    items: [
      {
        title: 'Industrial Plants',
        icon: '🏭',
        desc: 'Reliable power control for heavy machinery and production lines.',
        cases: ['Manufacturing Units', 'Process Industries', 'Heavy Motors']
      },
      {
        title: 'Commercial Buildings',
        icon: '🏢',
        desc: 'Safe and efficient power distribution for large complexes.',
        cases: ['IT Parks', 'Hospitals', 'Shopping Malls']
      },
      {
        title: 'Utilities & Substations',
        icon: '⚡',
        desc: 'Medium voltage switching and protection for power networks.',
        cases: ['Substations', 'Distribution Panels', 'Grid Interface']
      },
      {
        title: 'Power & Energy Sector',
        icon: '🔌',
        desc: 'Critical electrical infrastructure for energy facilities.',
        cases: ['Power Plants', 'Renewable Energy', 'Utility Systems']
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Trusted Power Partner" },
    title: ["Ready to Upgrade Your", "Power Control System?"],
    description:
      "Choose Intelldigix VCB, PCC & MCC Panels for safe, compliant, and future-ready electrical infrastructure.",
    buttons: {
      primary: "Talk to Experts",
      secondary: "Request Quote"
    },
    disclaimer:
      "Type-tested panels • IEC compliant • CPRI certified"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "65kA",
    label: "Short Circuit Rating"
  }
};
