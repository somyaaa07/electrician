import React, { useState, useEffect } from 'react';

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lora:wght@400;500;600&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

// Add animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleUp {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .service-card-hover {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .service-card-hover:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(93, 193, 215, 0.25);
  }

  .icon-bounce:hover {
    animation: float 1s ease-in-out infinite;
  }

  .hero-image {
    animation: pulse 3s ease-in-out infinite;
  }

  /* Responsive Design */
  @media (max-width: 968px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .stats-grid {
      grid-template-columns: repeat(3, 1fr) !important;
      padding: 30px !important;
    }
    .services-grid {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 640px) {
    .hero-title {
      font-size: 2.5rem !important;
    }
    .stats-grid {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    .tabs-container {
      flex-direction: column !important;
    }
    .tab {
      width: 100% !important;
      text-align: center !important;
    }
    .features-grid {
      grid-template-columns: 1fr !important;
    }
    .hero-buttons {
      flex-direction: column !important;
    }
    .hero-buttons button {
      width: 100% !important;
    }
  }
`;
if (!document.querySelector('style[data-animations]')) {
  styleSheet.setAttribute('data-animations', 'true');
  document.head.appendChild(styleSheet);
}

export default function EngineeringServices() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      icon: '🔌',
      title: 'Cable Laying & Conduiting',
      category: 'infrastructure',
      description: 'Professional cable installation and conduit systems for electrical and data infrastructure with precision and safety.',
      features: ['Underground Cabling', 'Conduit Installation', 'Cable Routing', 'Quality Testing'],
      price: 'Custom Quote',
      color: '#5dc1d7'
    },
    {
      id: 2,
      icon: '🏗️',
      title: 'Engineering, Procurement & Construction',
      category: 'epc',
      description: 'Complete EPC solutions from design to execution with integrated project management and delivery excellence.',
      features: ['Full Turnkey Solutions', 'Project Management', 'Quality Assurance', 'Timely Delivery'],
      price: 'Project Based',
      color: '#4a9fb5'
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Installation, Programming & Commissioning',
      category: 'installation',
      description: 'Expert installation and commissioning services ensuring optimal system performance and integration.',
      features: ['System Integration', 'Programming Setup', 'Performance Testing', 'Documentation'],
      price: 'From $2,500',
      color: '#5dc1d7'
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Warranty & Post-Warranty Services',
      category: 'support',
      description: 'Comprehensive warranty coverage and ongoing post-warranty support for long-term system reliability.',
      features: ['Extended Coverage', 'Preventive Maintenance', 'Quick Response', 'Genuine Parts'],
      price: 'Custom Plans',
      color: '#4a9fb5'
    },
    {
      id: 5,
      icon: '🔍',
      title: 'Safety & Energy Audit',
      category: 'consulting',
      description: 'Thorough safety assessments and energy audits to optimize efficiency and ensure compliance with standards.',
      features: ['Safety Compliance', 'Energy Analysis', 'Risk Assessment', 'Efficiency Reports'],
      price: 'From $1,500',
      color: '#5dc1d7'
    },
    {
      id: 6,
      icon: '💡',
      title: 'Consulting Services',
      category: 'consulting',
      description: 'Expert consulting for engineering projects, design optimization, and strategic technical planning.',
      features: ['Design Consultation', 'Technical Advisory', 'Project Planning', 'Standards Compliance'],
      price: 'From $200/hr',
      color: '#4a9fb5'
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <div className="hero-grid" style={styles.heroGrid}>
            <div style={styles.heroText}>
              <span style={styles.badge}>⚡ Engineering Excellence</span>
              <h1 className="hero-title" style={styles.heroTitle}>
                Engineering, Design &
                <br />
                <span style={styles.heroHighlight}>Development Solutions</span>
              </h1>
              <p style={styles.heroSubtitle}>
                Delivering comprehensive engineering services from concept to commissioning with precision and expertise
              </p>
              <div className="hero-buttons" style={styles.heroButtons}>
                <button style={styles.primaryBtn}>Get Free Consultation</button>
                <button style={styles.secondaryBtn}>📞 (555) 123-4567</button>
              </div>
            </div>
            <div style={styles.heroImageSection}>
              {/* Hero Image */}
              <div style={styles.heroImageWrapper}>
                <img 
                  className="hero-image"
                  src="/service5.jpg" 
                  alt="Engineering and development"
                  style={styles.heroImage}
                />
                {/* Floating badge */}
                <div style={styles.floatingBadge}>
                  <div style={styles.badgeIcon}>✓</div>
                  <div>
                    <div style={styles.badgeTitle}>Certified Engineers</div>
                    <div style={styles.badgeSubtitle}>ISO 9001 Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="stats-grid" style={styles.statsBar}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>20+</div>
              <div style={styles.statLabel}>Years Experience</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>500+</div>
              <div style={styles.statLabel}>Projects Completed</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={styles.servicesSection}>
        <div className="tabs-container" style={styles.tabsContainer}>
          <button 
            className="tab"
            style={{...styles.tab, ...(activeTab === 'all' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('all')}
          >
            All Services
          </button>
          <button 
            className="tab"
            style={{...styles.tab, ...(activeTab === 'infrastructure' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('infrastructure')}
          >
            Infrastructure
          </button>
          <button 
            className="tab"
            style={{...styles.tab, ...(activeTab === 'epc' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('epc')}
          >
            EPC
          </button>
          <button 
            className="tab"
            style={{...styles.tab, ...(activeTab === 'installation' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('installation')}
          >
            Installation
          </button>
          <button 
            className="tab"
            style={{...styles.tab, ...(activeTab === 'consulting' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('consulting')}
          >
            Consulting
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid" style={styles.servicesGrid}>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card-hover"
              style={{
                ...styles.serviceCard,
                animation: index % 2 === 0 
                  ? `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
                  : `slideInFromRight 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div style={styles.cardHeader}>
                <div 
                  className="icon-bounce"
                  style={{
                    ...styles.cardIcon,
                    background: `linear-gradient(135deg, ${service.color}, ${adjustColor(service.color, -30)})`,
                  }}
                >
                  {service.icon}
                </div>
                <div style={styles.priceTag}>{service.price}</div>
              </div>

              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDescription}>{service.description}</p>

              <div className="featuresGrid" style={styles.featuresGrid}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span style={{color: service.color, marginRight: '6px', fontWeight: 'bold'}}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button 
                style={{
                  ...styles.cardButton,
                  background: `linear-gradient(135deg, ${service.color}, ${adjustColor(service.color, -30)})`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = `0 10px 30px ${service.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Request Service →
              </button>

              {/* Decorative corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                borderRadius: '0 20px 0 100%',
              }}></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function adjustColor(color, amount) {
  const clamp = (num) => Math.min(Math.max(num, 0), 255);
  const num = parseInt(color.replace('#', ''), 16);
  const r = clamp((num >> 16) + amount);
  const g = clamp(((num >> 8) & 0x00ff) + amount);
  const b = clamp((num & 0x0000ff) + amount);
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    minHeight: '100vh',
    background: '#ffffff',
  },
  hero: {
    background: 'linear-gradient(135deg, #0a4d5c 0%, #5dc1d7 100%)',
    padding: '100px 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  heroText: {
    color: 'white',
    animation: 'slideInFromLeft 0.8s ease-out',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 20px',
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '30px',
    fontSize: '0.9rem',
    marginBottom: '20px',
    backdropFilter: 'blur(10px)',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.1',
    fontFamily: "'Playfair Display', serif",
  },
  '@media (max-width: 968px)': {
    heroTitle: {
      fontSize: '3rem',
    },
  },
  '@media (max-width: 640px)': {
    heroTitle: {
      fontSize: '2.5rem',
    },
  },
  heroHighlight: {
    color: '#ffffff',
    textShadow: '0 0 30px rgba(255,255,255,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    opacity: 0.9,
    fontFamily: "'Lora', serif",
  },
  heroButtons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '15px 35px',
    background: 'white',
    color: '#0a4d5c',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Playfair Display', serif",
  },
  secondaryBtn: {
    padding: '15px 35px',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '30px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Playfair Display', serif",
  },
  heroImageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'slideInFromRight 0.8s ease-out',
  },
  heroImageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '30px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
    border: '5px solid rgba(255,255,255,0.2)',
  },
  floatingBadge: {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'white',
    padding: '15px 25px',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    animation: 'scaleUp 0.8s ease-out 0.5s both',
  },
  badgeIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #5dc1d7, #4a9fb5)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  badgeTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#1a1a1a',
    fontFamily: "'Playfair Display', serif",
  },
  badgeSubtitle: {
    fontSize: '0.8rem',
    color: '#666',
    fontFamily: "'Lora', serif",
  },
  statsBar: {
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(20px)',
    padding: '40px',
    borderRadius: '30px',
    border: '1px solid rgba(255,255,255,0.2)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    marginTop: '60px',
    animation: 'scaleUp 0.8s ease-out 0.3s both',
  },
  statItem: {
    textAlign: 'center',
    color: 'white',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '800',
    fontFamily: "'Playfair Display', serif",
  },
  statLabel: {
    fontSize: '0.9rem',
    opacity: 0.9,
    marginTop: '5px',
    fontFamily: "'Lora', serif",
  },
  servicesSection: {
    maxWidth: '1200px',
    margin: '80px auto',
    padding: '0 20px',
  },
  tabsContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '50px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tab: {
    padding: '12px 30px',
    background: 'transparent',
    border: '2px solid #e0e0e0',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#666',
    fontFamily: "'Playfair Display', serif",
  },
  activeTab: {
    background: 'linear-gradient(135deg, #5dc1d7, #4a9fb5)',
    color: 'white',
    border: '2px solid #5dc1d7',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    background: 'white',
    padding: '35px',
    borderRadius: '20px',
    border: '1px solid #f0f0f0',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  cardIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.2rem',
    color: 'white',
    boxShadow: '0 10px 25px rgba(93, 193, 215, 0.3)',
  },
  priceTag: {
    padding: '8px 20px',
    background: '#f8f9fa',
    borderRadius: '20px',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#333',
    fontFamily: "'Playfair Display', serif",
  },
  cardTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '15px',
    fontFamily: "'Playfair Display', serif",
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontFamily: "'Lora', serif",
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '25px',
  },
  featureItem: {
    fontSize: '0.9rem',
    color: '#555',
    fontFamily: "'Lora', serif",
  },
  cardButton: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Playfair Display', serif",
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #0a4d5c 0%, #5dc1d7 100%)',
    padding: '80px 20px',
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto',
    color: 'white',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '15px',
    fontFamily: "'Playfair Display', serif",
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    opacity: '0.9',
    fontFamily: "'Lora', serif",
  },
  ctaButton: {
    padding: '18px 45px',
    background: 'white',
    color: '#0a4d5c',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Playfair Display', serif",
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
};