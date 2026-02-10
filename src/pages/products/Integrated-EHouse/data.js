import { 
  Zap, Shield, Sparkles, TrendingUp, Users, Globe, 
  Award, Cloud, RefreshCw, BarChart3, Database, Settings 
} from 'lucide-react';

export const productData = {
  // Hero Section
  hero: {
    badge: {
      icon: Sparkles,
      text: "Trusted Power Infrastructure Partner",
      shortText: "Proven Reliability"
    },
    title: "Integrated",
    titleAccent: "eHouse Solutions",
    subtitle: "Modular • Reliable • Rapidly Deployable Power Substations",
    description:
      "Pre-fabricated E-House substations engineered for performance, safety, and speed across demanding industrial environments.",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnDtY3mZYf5FNJnmTAPi_VA8EQ3iEw-bc6Q&s",
    stats: [
      { value: '100%', label: 'Customized Design' },
      { value: '50%+', label: 'Faster Installation' },
      { value: '24/7', label: 'Operational Reliability' }
    ],
    cta: {
      primary: "Request Consultation",
      secondary: "View Applications"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Solutions' },
      { type: 'current', label: 'Integrated eHouse', icon: Sparkles }
    ]
  },

  // Navigation Sections
  sections: [
    { id: 'about', label: 'About' },
    { id: 'overview', label: 'Solution Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Why Choose Us' },
    { id: 'applications', label: 'Applications' }
  ],

  // About Section
  about: {
    badge: { icon: Sparkles, text: "Introduction" },
    title: "About Integrated eHouse Solutions",
    description: [
      "Intell-DIGIX delivers <span class='text-[#009999] font-bold'>integrated E-House (Electrical House) solutions</span> designed to house and protect critical electrical infrastructure in a compact, factory-built environment.",
      "Our modular substations are engineered, manufactured, tested, and commissioned to meet project-specific requirements—ensuring reduced site work, faster deployment, and long-term operational reliability."
    ],
    certifications: [
      { name: 'IEC Standards', icon: Shield },
      { name: 'ISO Certified', icon: Award },
      { name: 'Factory Tested', icon: Shield },
      { name: 'Global Compliance', icon: Award }
    ]
  },

  // Overview Section
  overview: {
    badge: { icon: Zap, text: "Overview" },
    title: "Solution Overview",
    cards: [
      {
        type: 'gradient',
        icon: Settings,
        title: "What It Is",
        description:
          "A pre-fabricated, modular electrical substation building that integrates LV/MV panels, transformers, protection systems, automation, and auxiliaries."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description:
          "Ideal for infrastructure, energy, industrial, and utility projects where speed, reliability, and minimized on-site work are critical."
      }
    ],
    highlights: [
      {
        icon: '⚡',
        title: 'Rapid Deployment',
        desc: 'Factory-built and tested to significantly reduce installation and commissioning time'
      },
      {
        icon: '🛡️',
        title: 'High Reliability',
        desc: 'Designed for harsh and remote environments with robust construction'
      },
      {
        icon: '🏗️',
        title: 'Project Flexibility',
        desc: 'Custom layouts based on equipment, footprint, and transport constraints'
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Key Features",
    items: [
      {
        id: 'modular',
        category: 'Design',
        icon: Cloud,
        title: 'Modular & Scalable Design',
        desc:
          'Prefabricated modules designed for easy transportation, installation, and future expansion.',
        highlight: 'Project-specific customization',
        color: 'from-blue-500 to-cyan-500',
        layout: 'large'
      },
      {
        id: 'integration',
        category: 'Engineering',
        icon: Database,
        title: 'Fully Integrated Systems',
        desc:
          'Housing switchgear, protection, control, automation, HVAC, and fire systems under one roof.',
        highlight: 'Single integrated solution',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      {
        id: 'testing',
        category: 'Quality',
        icon: Shield,
        title: 'Factory Tested & Pre-Commissioned',
        desc:
          'Comprehensive testing ensures minimal site risk and faster commissioning.',
        highlight: 'Reduced site errors',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      {
        id: 'logistics',
        category: 'Execution',
        icon: RefreshCw,
        title: 'Optimized Logistics & Transport',
        desc:
          'Designed with transport limitations in mind for seamless global delivery.',
        highlight: 'On-time delivery',
        color: 'from-yellow-500 to-orange-500',
        layout: 'medium'
      },
      {
        id: 'environment',
        category: 'Durability',
        icon: Globe,
        title: 'Harsh Environment Ready',
        desc:
          'Built to perform in extreme weather and challenging site conditions.',
        highlight: 'All-weather reliability',
        color: 'from-red-500 to-rose-500',
        layout: 'small'
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Why Choose Us" },
    title: "Your Advantage with Intell-DIGIX",
    subtitle: "Engineered for performance, delivered with precision",
    items: [
      {
        icon: Zap,
        title: 'Reduced Project Timelines',
        desc:
          'Minimized on-site work and parallel construction significantly accelerate project completion.',
        metric: '50%+',
        metricLabel: 'Time Saved',
        highlights: ['Pre-fabrication', 'Parallel execution', 'Rapid commissioning'],
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: Shield,
        title: 'Reliable & Safe Operations',
        desc:
          'High-quality manufacturing and testing ensure long-term operational safety.',
        metric: '100%',
        metricLabel: 'Reliability Focus',
        highlights: ['Robust design', 'Compliance-driven', 'Proven performance'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: TrendingUp,
        title: 'Cost Efficiency',
        desc:
          'Optimized engineering and logistics reduce overall project costs without compromising quality.',
        metric: 'Optimized',
        metricLabel: 'Project Cost',
        highlights: ['Lower site labor', 'Reduced rework', 'Efficient logistics'],
        color: 'from-purple-500 to-pink-500'
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
        desc: 'Reliable and scalable power infrastructure for mission-critical operations.',
        cases: ['Power distribution', 'Backup systems', 'Fast deployment']
      },
      {
        title: 'Renewable Energy',
        icon: '🌱',
        desc: 'Integrated substations for solar, wind, and hybrid energy projects.',
        cases: ['Grid connection', 'Energy storage integration']
      },
      {
        title: 'Oil & Gas',
        icon: '⛽',
        desc: 'Rugged power solutions for hazardous and remote locations.',
        cases: ['Upstream', 'Midstream', 'Downstream facilities']
      },
      {
        title: 'Mining & Processing',
        icon: '⛏️',
        desc: 'Durable power infrastructure for heavy-duty industrial operations.',
        cases: ['Remote sites', 'High load handling']
      },
      {
        title: 'Rail & Infrastructure',
        icon: '🚆',
        desc: 'Compact and reliable substations for transportation networks.',
        cases: ['Traction power', 'Station electrification']
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Power Your Project" },
    title: ["Looking for a Faster,", "Smarter Power Solution?"],
    description:
      "Partner with Intell-DIGIX for integrated E-House solutions engineered for performance and reliability.",
    buttons: {
      primary: "Contact Our Experts",
      secondary: "Request a Quote"
    },
    disclaimer: "Custom engineered • Factory tested • Globally delivered"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "Proven",
    label: "Industrial Expertise"
  }
};
