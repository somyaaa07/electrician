import {
  Zap, Shield, Sparkles, TrendingUp, Users, Globe,
  Award, Cloud, RefreshCw, BarChart3, GitBranch,
  Database, Settings
} from 'lucide-react';

export const productData = {
  hero: {
    badge: {
      icon: Sparkles,
      text: "Advanced Power Quality Solutions",
      shortText: "APHC / APF Panels"
    },
    title: "APHC",
    titleAccent: "APF Panel",
    subtitle: "Active Harmonic Filter & Power Quality Enhancement System",
    description:
      "Innovative engineering solution from Intell DIGIX to improve energy efficiency, eliminate harmonics, and optimize electrical infrastructure performance",
    backgroundImage:
      "https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg",
    stats: [
      { value: '<100µs', label: 'Reaction Time' },
      { value: '98%', label: 'Harmonic Filtering' },
      { value: '≤3%', label: 'Thermal Loss' }
    ],
    cta: {
      primary: "Request Consultation",
      secondary: "Download Datasheet"
    }
  },

  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Products' },
      { type: 'current', label: 'APHC APF Panel', icon: Sparkles }
    ]
  },

  sections: [
    { id: 'about', label: 'About' },
    { id: 'overview', label: 'Product Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'applications', label: 'Industry Applications' }
  ],

  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "About APHC APF Panel",
    description: [
      "Intell DIGIX delivers innovative power quality and energy efficiency solutions through advanced Active Harmonic Filters including <span class='text-[#009999] font-bold'>3-Level and Multi-Level Active Harmonic Filter systems</span>.",
      "Our intelligent current conditioning solutions reduce harmonic distortion, eliminate power losses, prevent electrical failures, and ensure industries draw only useful power from the grid."
    ],
    certifications: [
      { name: 'IEEE 519 Compliance', icon: Shield },
      { name: 'Industrial Grade', icon: Award },
      { name: 'Power Quality Certified', icon: Shield },
      { name: 'Energy Efficient Design', icon: Award }
    ]
  },

  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "Product Overview",
    cards: [
      {
        type: 'gradient',
        icon: Zap,
        title: "What It Does",
        description:
          "APHC APF Panels actively monitor electrical systems and eliminate harmonics, reactive power issues, and phase imbalance in real time to improve power quality and efficiency."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description:
          "Ideal for industries facing high harmonic distortions, neutral current problems, inefficient power usage, and frequent electrical failures or nuisance tripping."
      }
    ],
    highlights: [
      {
        icon: '⚡',
        title: 'Ultra Fast Response',
        desc: 'Instant reaction time under 100 microseconds with full response below 5ms'
      },
      {
        icon: '🔌',
        title: 'IEEE 519 Compliance',
        desc: 'Maintains voltage and current harmonics within permissible limits at PCC'
      },
      {
        icon: '📊',
        title: 'Smart Compensation',
        desc: 'Simultaneous harmonic filtering, reactive power correction, and imbalance mitigation'
      }
    ]
  },

  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features & Advantages",
    items: [
      {
        id: 'reaction',
        category: 'Performance',
        icon: Zap,
        title: 'Ultra Fast Reaction',
        desc:
          'Instant harmonic compensation with <200 microseconds reaction and real-time monitoring.',
        highlight: '<100µs response',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'compensation',
        category: 'Power Quality',
        icon: TrendingUp,
        title: 'Step-less Compensation',
        desc:
          'Continuous harmonic and reactive power compensation without switching steps.',
        highlight: 'Smooth operation',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      {
        id: 'custom',
        category: 'Control',
        icon: Settings,
        title: 'Programmable & Customizable',
        desc:
          'Flexible configuration for different industrial loads and electrical infrastructure.',
        highlight: 'Custom settings',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'compatibility',
        category: 'Integration',
        icon: Cloud,
        title: 'DG Compatible Operation',
        desc:
          'Fully compatible with DG sets and future load expansion without resonance risk.',
        highlight: 'Future-ready',
        color: 'from-yellow-500 to-orange-500',
        layout: 'medium'
      },
      {
        id: 'safety',
        category: 'Safety',
        icon: Shield,
        title: 'No Resonance or Voltage Transients',
        desc:
          'Ensures safe operation without voltage spikes or resonance-related failures.',
        highlight: 'Safe operation',
        color: 'from-red-500 to-rose-500',
        layout: 'small'
      },
      {
        id: 'design',
        category: 'Design',
        icon: Database,
        title: 'Modular Independent Filtering',
        desc:
          'Each module works independently ensuring redundancy and reliable filtering.',
        highlight: 'Independent modules',
        color: 'from-indigo-500 to-blue-500',
        layout: 'small'
      }
    ]
  },

  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Business Benefits",
    subtitle: "Improve power quality, reduce costs, and enhance operational reliability",
    items: [
      {
        icon: TrendingUp,
        title: 'Reduced Energy Bills',
        desc:
          'Eliminates energy losses and improves power factor leading to reduced electricity costs.',
        metric: 'Lower',
        metricLabel: 'Energy Cost',
        highlights: ['Eliminate losses', 'Optimized power usage', 'Lower penalties'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Shield,
        title: 'Reduced Failures & Downtime',
        desc:
          'Removes harmonic distortions preventing equipment failure and nuisance trips.',
        metric: 'Less',
        metricLabel: 'Downtime',
        highlights: ['Stable systems', 'Reduced breakdowns', 'Longer equipment life'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Sparkles,
        title: 'Improved Electrical Infrastructure',
        desc:
          'Enhances system efficiency and reduces neutral currents and DG heating issues.',
        metric: 'High',
        metricLabel: 'Reliability',
        highlights: ['Stable grid', 'Efficient infrastructure', 'Optimized loads'],
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },

  applications: {
    badge: { icon: Globe, text: "Applications" },
    title: "Industry Applications",
    items: [
      {
        title: 'Manufacturing',
        icon: '🏭',
        desc: 'Power quality improvement for heavy industrial machinery.',
        cases: ['Welding loads', 'Motors', 'Variable drives']
      },
      {
        title: 'Process Industries',
        icon: '⚙️',
        desc: 'Stable electrical performance for continuous process operations.',
        cases: ['Chemical plants', 'Processing units']
      },
      {
        title: 'Commercial Buildings',
        icon: '🏢',
        desc: 'Improved power quality for HVAC, lighting, and building automation systems.',
        cases: ['Data centers', 'Large commercial facilities']
      },
      {
        title: 'Utilities & DG Systems',
        icon: '⚡',
        desc: 'Maintains power stability in DG and hybrid power systems.',
        cases: ['DG compatibility', 'Grid stability']
      }
    ]
  },

  finalCta: {
    badge: { text: "Power Quality Experts" },
    title: ["Upgrade Your", "Power Infrastructure Today"],
    description:
      "Partner with Intell DIGIX to eliminate harmonics, reduce costs, and enhance electrical reliability.",
    buttons: {
      primary: "Talk to Our Experts",
      secondary: "Request Proposal"
    },
    disclaimer: "Custom solutions • IEEE 519 compliant • Industry-ready systems"
  },

  sidebarStat: {
    icon: Sparkles,
    value: "98%",
    label: "Harmonic Filtering Efficiency"
  }
};
