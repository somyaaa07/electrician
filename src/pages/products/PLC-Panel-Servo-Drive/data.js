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
      text: "Trusted by 10,000+ Enterprises",
      shortText: "10,000+ Enterprises"
    },
    title: "CloudSync",
    titleAccent: "Pro",
    subtitle: "The most powerful cloud synchronization platform",
    description: "Built for teams who demand excellence, security, and scale",
    backgroundImage: "https://i.pinimg.com/1200x/1b/7e/0f/1b7e0f5b3e75a7a4b4f970705a9995cb.jpg",
    stats: [
      { value: '99.99%', label: 'Uptime' },
      { value: '10M+', label: 'Files Synced' },
      { value: '<1ms', label: 'Latency' }
    ],
    cta: {
      primary: "Start Free Trial",
      secondary: "Watch Demo"
    }
  },

  // Breadcrumb
  breadcrumb: {
    items: [
      { type: 'home', label: 'Home' },
      { type: 'link', label: 'Products' },
      { type: 'current', label: 'CloudSync Pro', icon: Sparkles }
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
    title: "About CloudSync Pro",
    description: [
      "CloudSync Pro is a <span class='text-[#5dc1d7] font-bold'>cutting-edge cloud synchronization platform</span> designed to streamline data management across distributed teams and multi-cloud environments. Built with enterprise security and scalability at its core, our solution ensures seamless data flow while maintaining the highest standards of compliance and governance.",
      "Whether you're managing petabytes of data across global offices or coordinating real-time collaboration between remote teams, CloudSync Pro provides the reliability and performance your business demands."
    ],
    certifications: [
      { name: 'SOC 2', icon: Shield },
      { name: 'ISO 27001', icon: Award },
      { name: 'GDPR', icon: Shield },
      { name: 'HIPAA', icon: Award }
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
        description: "CloudSync Pro automatically synchronizes files, databases, and applications across multiple cloud platforms including AWS, Azure, Google Cloud, and private data centers."
      },
      {
        type: 'bordered',
        icon: Users,
        title: "Who It's For",
        description: "Designed for enterprises, technology companies, financial institutions, and healthcare organizations that require robust, compliant data synchronization."
      }
    ],
    highlights: [
      { 
        icon: '⚡', 
        title: 'Real-Time Sync', 
        desc: 'Millisecond-level synchronization across global nodes with zero data loss' 
      },
      { 
        icon: '🔒', 
        title: 'Enterprise Security', 
        desc: 'End-to-end encryption with zero-knowledge architecture and SOC 2 compliance' 
      },
      { 
        icon: '🚀', 
        title: 'Smart Optimization', 
        desc: 'AI-powered bandwidth and route optimization reduces costs by 40%' 
      }
    ]
  },

  // Features Section
  features: {
    badge: { icon: Sparkles, text: "Features" },
    title: "Everything You Need",
    items: [
      { 
        id: 'integration',
        category: 'Integration',
        icon: Cloud,
        title: 'Multi-Cloud Integration', 
        desc: 'Seamlessly connect AWS, Azure, GCP, and private clouds in a unified synchronization network with intelligent routing.',
        highlight: 'Connect 10+ platforms',
        color: 'from-blue-500 to-cyan-500',
        platforms: ['AWS', 'Azure', 'Google Cloud', 'Private Cloud'],
        layout: 'large' // Special layout identifier
      },
      { 
        id: 'conflict',
        category: 'Intelligence',
        icon: GitBranch,
        title: 'Smart Conflict Resolution', 
        desc: 'AI-powered algorithms automatically detect and resolve data conflicts with configurable policies and manual override options.',
        highlight: '99.9% auto-resolved',
        color: 'from-purple-500 to-pink-500',
        layout: 'small'
      },
      { 
        id: 'version',
        category: 'Control',
        icon: RefreshCw,
        title: 'Advanced Version Control', 
        desc: 'Complete audit trail with rollback capabilities to any previous state. Track every change with millisecond precision.',
        highlight: 'Unlimited history',
        color: 'from-green-500 to-emerald-500',
        layout: 'small'
      },
      { 
        id: 'bandwidth',
        category: 'Performance',
        icon: Zap,
        title: 'Bandwidth Optimization', 
        desc: 'Delta synchronization and compression reduce data transfer by up to 95%, saving bandwidth costs and improving speed.',
        highlight: '95% reduction',
        color: 'from-yellow-500 to-orange-500',
        layout: 'medium',
        stats: [
          { value: '95%', label: 'Reduction' },
          { value: '<1s', label: 'Transfer Time' }
        ]
      },
      { 
        id: 'compliance',
        category: 'Security',
        icon: Shield,
        title: 'Compliance Ready', 
        desc: 'Built-in support for GDPR, HIPAA, SOC 2, ISO 27001, and other regulatory frameworks with automated reporting.',
        highlight: '8+ certifications',
        color: 'from-red-500 to-rose-500',
        layout: 'small',
        badges: ['SOC 2', 'HIPAA', 'GDPR', 'ISO 27001']
      },
      { 
        id: 'monitoring',
        category: 'Analytics',
        icon: BarChart3,
        title: 'Advanced Monitoring', 
        desc: 'Real-time dashboards, custom alerts, and detailed analytics for complete visibility into sync operations.',
        highlight: 'Real-time insights',
        color: 'from-indigo-500 to-blue-500',
        layout: 'medium',
        stats: [
          { label: 'Uptime', value: '99.99%' },
          { label: 'Response', value: '<100ms' },
          { label: 'Events/sec', value: '1M+' }
        ]
      },
      { 
        id: 'recovery',
        category: 'Reliability',
        icon: Database,
        title: 'Disaster Recovery', 
        desc: 'Automated failover and geo-replication ensure business continuity with RTO < 5 minutes and RPO < 1 minute.',
        highlight: '<5min RTO',
        color: 'from-teal-500 to-cyan-500',
        layout: 'small',
        metric: { value: '<5min', label: 'Recovery Time' }
      }
    ]
  },

  // Benefits Section
  benefits: {
    badge: { icon: TrendingUp, text: "Benefits" },
    title: "Transform Your Business",
    subtitle: "Real-world results from organizations that switched to CloudSync Pro",
    items: [
      { 
        icon: TrendingUp, 
        title: 'Increased Productivity', 
        desc: 'Teams spend less time managing data and more time on value-creating activities. Automatic synchronization eliminates manual file transfers and reduces sync-related errors.',
        metric: '40%',
        metricLabel: 'Efficiency Gain',
        highlights: ['Automated workflows', 'Zero manual transfers', '99% fewer errors'],
        color: 'from-green-500 to-emerald-500'
      },
      { 
        icon: Sparkles, 
        title: 'Cost Reduction', 
        desc: 'Reduce infrastructure costs through intelligent data placement, deduplication, and bandwidth optimization. Pay only for what you use.',
        metric: '40%',
        metricLabel: 'Cost Savings',
        highlights: ['Smart deduplication', 'Bandwidth optimization', 'Pay-per-use pricing'],
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        icon: Shield, 
        title: 'Enhanced Security', 
        desc: 'Military-grade encryption, role-based access control, and comprehensive audit logs ensure your data remains secure and compliant with industry standards.',
        metric: 'Zero',
        metricLabel: 'Security Breaches',
        highlights: ['End-to-end encryption', 'Role-based access', 'Complete audit trail'],
        color: 'from-red-500 to-rose-500'
      },
      { 
        icon: Zap, 
        title: 'Business Continuity', 
        desc: 'Automated disaster recovery and geo-replication ensure your business keeps running even during outages. Our SLA guarantees peace of mind.',
        metric: '99.99%',
        metricLabel: 'Uptime SLA',
        highlights: ['Auto failover', 'Geo-replication', '<5min recovery'],
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        icon: Globe, 
        title: 'Unlimited Scalability', 
        desc: 'Start small and scale to petabytes without infrastructure changes. CloudSync Pro grows with your business, handling increased load automatically.',
        metric: '∞',
        metricLabel: 'Scale Capacity',
        highlights: ['Auto-scaling', 'No limits', 'Global edge network'],
        color: 'from-purple-500 to-pink-500'
      }
    ],
    roiCta: {
      badge: { text: "ROI Calculator" },
      title: "Calculate Your Potential Savings",
      description: "See how much time and money your organization could save with CloudSync Pro",
      buttonText: "Launch Calculator",
      buttonShortText: "Calculate"
    }
  },

  // Industry Applications
  applications: {
    badge: { icon: Globe, text: "Industries" },
    title: "Industry Applications",
    items: [
      {
        title: 'Financial Services',
        icon: '💰',
        desc: 'Synchronize trading data, customer records, and transaction histories across global branches while maintaining regulatory compliance.',
        cases: [
          'Real-time market data distribution to trading desks worldwide',
          'Cross-border customer data synchronization with data residency compliance',
          'Disaster recovery for critical financial systems'
        ]
      },
      {
        title: 'Healthcare',
        icon: '🏥',
        desc: 'Enable secure sharing of patient records, medical imaging, and research data across hospital networks while ensuring HIPAA compliance.',
        cases: [
          'Electronic Health Record (EHR) synchronization across care facilities',
          'Medical imaging distribution for radiology departments',
          'Clinical trial data management and regulatory reporting'
        ]
      },
      {
        title: 'Manufacturing',
        icon: '🏭',
        desc: 'Coordinate production data, supply chain information, and IoT sensor data across manufacturing facilities worldwide.',
        cases: [
          'Real-time production line data synchronization for quality control',
          'Global inventory management and supply chain coordination',
          'CAD/CAM file distribution for distributed engineering teams'
        ]
      },
      {
        title: 'Technology & SaaS',
        icon: '💻',
        desc: 'Support multi-tenant SaaS applications with automatic data replication, backup, and geo-distribution.',
        cases: [
          'Multi-region database synchronization for global SaaS platforms',
          'Development environment synchronization for distributed teams',
          'Customer data backup and disaster recovery automation'
        ]
      },
      {
        title: 'Retail & E-commerce',
        icon: '🛒',
        desc: 'Keep product catalogs, inventory levels, and customer data synchronized across all channels in real-time.',
        cases: [
          'Omnichannel inventory synchronization across stores and warehouses',
          'Product catalog updates propagated to all sales channels instantly',
          'Customer data unification for personalized shopping experiences'
        ]
      }
    ]
  },

  // Final CTA
  finalCta: {
    badge: { text: "Join 10,000+ Companies" },
    title: ["Ready to Transform Your", "Data Infrastructure?"],
    description: "Join thousands of enterprises worldwide who trust CloudSync Pro for mission-critical synchronization.",
    buttons: {
      primary: "Start Free Trial",
      secondary: "Schedule Demo"
    },
    disclaimer: "No credit card required • 14-day free trial • Cancel anytime"
  },

  // Sidebar Stats
  sidebarStat: {
    icon: Sparkles,
    value: "99.99%",
    label: "Uptime Guarantee"
  }
};