import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, ChevronRight, ArrowRight, Check, Star, Home } from 'lucide-react';

export default function ProductPage({ data }) {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const sections = useMemo(() => data.sections, [data.sections]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          const scrollPosition = window.scrollY + 150;
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const HeroIcon = data.hero.badge.icon;
  const SidebarIcon = data.sidebarStat.icon;
    useEffect(() => {
      setIsVisible(true);
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&family=Lora:wght@500;600;700&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.02em;
        }
        
        .font-subheading {
          font-family: 'Lora', serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .glass-dark {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(93, 193, 215, 0.2);
        }
        
        .card-gradient {
          background: linear-gradient(135deg, #009999 0%, #009999 50%, #009999 100%);
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url("${data.hero.backgroundImage}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center text-center py-20">
          <div className="mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          </div>
          
          <h1 className="text-3xl xs:text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-display font-black text-white mb-6 sm:mb-8 leading-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {data.hero.title}
            <span className="block mt-2 text-gradient bg-white bg-clip-text">{data.hero.titleAccent}</span>
          </h1>
          
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mb-3 sm:mb-4 animate-fade-in leading-relaxed font-subheading font-semibold px-4" style={{ animationDelay: '0.3s' }}>
            {data.hero.subtitle}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 sm:mb-12 animate-fade-in font-medium px-4" style={{ animationDelay: '0.35s' }}>
            {data.hero.description}
          </p>
          
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-5 animate-fade-in mb-12 sm:mb-16 w-full max-w-md sm:max-w-none px-4" style={{ animationDelay: '0.4s' }}>
            <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#009999] font-bold text-base sm:text-lg rounded-2xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center gap-2">
              {data.hero.cta.primary}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 sm:px-10 py-4 sm:py-5 glass-dark border-2 border-white text-white font-bold text-base sm:text-lg rounded-2xl hover:bg-white/20 transition-all">
              {data.hero.cta.secondary}
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-12 sm:mb-16 animate-fade-in w-full max-w-3xl px-4" style={{ animationDelay: '0.5s' }}>
            {data.hero.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/70 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-fade-in hidden sm:flex" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center gap-3 scroll-indicator">
              <span className="text-white/80 text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1.5">
                <div className="w-1.5 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="top-0 z-50 glass border-b border-gray-200/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
            <button className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 hover:from-[#009999]/10 hover:to-[#45b3c9]/10 border border-gray-200 hover:border-[#009999]/30 transition-all hover:scale-105 shadow-sm hover:shadow-md flex-shrink-0">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-[#009999] transition-colors" />
            </button>
            
            {data.breadcrumb.items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 flex-shrink-0" />}
                
                {item.type === 'current' ? (
                  <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl card-gradient shadow-md border border-[#009999]/30 flex-shrink-0">
                    {item.icon && <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                    <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">{item.label}</span>
                  </div>
                ) : item.type !== 'home' && (
                  <button className="group px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 hover:from-[#009999]/10 hover:to-[#45b3c9]/10 border border-gray-200 hover:border-[#009999]/30 transition-all hover:scale-105 shadow-sm hover:shadow-md flex-shrink-0">
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#009999] transition-colors">{item.label}</span>
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-full flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 card-gradient text-white rounded-2xl mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="font-bold text-base sm:text-lg">Navigation</span>
                {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>

              <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block bg-white rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6 hover-lift`}>
                <h2 className="text-xs font-black text-[#009999] uppercase tracking-wider mb-4 sm:mb-5 flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#009999] rounded-full"></span>
                  Quick Navigation
                </h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all font-semibold text-sm flex items-center gap-3 ${
                          activeSection === section.id
                            ? 'card-gradient text-white shadow-lg scale-105'
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#009999]/10 hover:to-[#45b3c9]/10 hover:text-[#009999]'
                        }`}
                      >
                        {activeSection === section.id && <Check className="w-4 h-4" />}
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#009999]/10 via-[#45b3c9]/10 to-[#2a9db5]/10 rounded-2xl border-2 border-[#009999]/30">
                  <div className="text-center">
                    <SidebarIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#009999] mx-auto mb-2" />
                    <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">{data.sidebarStat.value}</div>
                    <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{data.sidebarStat.label}</div>
                  </div>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content Sections */}
          <main className="flex-1 min-w-0">
            {/* About Section */}
            <AboutSection data={data.about} isVisible={isVisible.about} />
            
            {/* Overview Section */}
            <OverviewSection data={data.overview} isVisible={isVisible.overview} />
            
            {/* Features Section */}
            <FeaturesSection data={data.features} isVisible={isVisible.features} />
            
            {/* Benefits Section */}
            <BenefitsSection data={data.benefits} isVisible={isVisible.benefits} />
            
            {/* Applications Section */}
            <ApplicationsSection data={data.applications} isVisible={isVisible.applications} />

            {/* Final CTA */}
            <FinalCTA data={data.finalCta} />
          </main>
        </div>
      </div>
    </div>
  );
}

// About Section Component
function AboutSection({ data, isVisible }) {
  const BadgeIcon = data.badge.icon;
  
  return (
    <section id="about" className={`mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#009999]/20 to-[#009999]/20 text-[#009999] rounded-full text-xs font-black uppercase tracking-wider mb-4 sm:mb-6 border border-[#009999]/30">
          <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          {data.badge.text}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          {data.title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-[#009999] to-[#009999] rounded-full"></div>
          <div className="w-3 h-3 bg-[#009999] rounded-full"></div>
        </div>
      </div>
      
      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
        {data.description.map((para, i) => (
          <p 
            key={i} 
            className={`${i === 0 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} text-gray-${i === 0 ? '700' : '600'} leading-relaxed font-subheading`}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {data.certifications.map((badge) => {
          // const Icon = badge.icon;
          return (
            <div key={badge.name} className="p-4 sm:p-5 bg-white border-2 border-gray-200 rounded-2xl text-center hover:border-[#009999] transition-all hover:shadow-xl hover:-translate-y-1 group">
              {/* <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#009999] group-hover:scale-110 transition-transform" /> */}
              <span className="font-bold text-xs sm:text-sm text-gray-900 block">{badge.name}</span>
              <div className="mt-1 sm:mt-2 text-xs text-gray-500 font-medium">Certified</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Overview Section Component  
function OverviewSection({ data, isVisible }) {
  const BadgeIcon = data.badge.icon;
  
  return (
    <section id="overview" className={`mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#009999]/20 to-[#45b3c9]/20 text-[#009999] rounded-full text-xs font-black uppercase tracking-wider mb-4 sm:mb-6 border border-[#009999]/30">
          <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          {data.badge.text}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          {data.title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-[#009999] to-[#45b3c9] rounded-full"></div>
          <div className="w-3 h-3 bg-[#009999] rounded-full"></div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {data.cards.map((card, i) => {
          // const CardIcon = card.icon;
          return (
            <div 
              key={i}
              className={`relative p-6 sm:p-8 lg:p-10 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all ${
                card.type === 'gradient' 
                  ? 'card-gradient' 
                  : 'bg-white border-3 border-gray-900'
              } hover-lift`}
            >
              {card.type === 'gradient' && <div className="absolute inset-0 shimmer"></div>}
              {/* <CardIcon className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-4 sm:mb-5 ${
                card.type === 'gradient' ? 'text-white relative z-10' : 'text-[#009999]'
              }`} /> */}
              <h3 className={`text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 ${
                card.type === 'gradient' ? 'text-white relative z-10' : 'text-gray-900'
              }`}>
                {card.title}
              </h3>
              <p className={`leading-relaxed font-subheading text-base sm:text-lg ${
                card.type === 'gradient' ? 'text-white/95 relative z-10' : 'text-gray-700'
              }`}>
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {data.highlights.map((item) => (
          <div key={item.title} className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#009999] transition-all hover:shadow-2xl hover-lift group">

            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#009999] transition-colors">{item.title}</h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Features Section Component (Simplified - see next file for complete version)
function FeaturesSection({ data, isVisible }) {
  const BadgeIcon = data.badge.icon;
  
  return (
    <section id="features" className={`mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#009999]/20 to-[#45b3c9]/20 text-[#009999] rounded-full text-xs font-black uppercase tracking-wider mb-4 sm:mb-6 border border-[#009999]/30">
          <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          {data.badge.text}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          {data.title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-[#009999] to-[#45b3c9] rounded-full"></div>
          <div className="w-3 h-3 bg-[#009999] rounded-full"></div>
        </div>
      </div>

      {/* Feature cards grid - simplified version, full layout in separate component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {data.items.map((feature) => {
          const FeatureIcon = feature.icon;
          return (
            <div key={feature.id} className={`group bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[${feature.color.split(' ')[0].replace('from-', '')}] hover:shadow-xl transition-all`}>
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-[#009999] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <FeatureIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{feature.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-full">
                <div className={`w-2 h-2 bg-[#009999] rounded-full animate-pulse`}></div>
                <span className="text-xs sm:text-sm font-bold text-gray-700">{feature.highlight}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Benefits Section Component
function BenefitsSection({ data, isVisible }) {
  const BadgeIcon = data.badge.icon;
  
  return (
    <section id="benefits" className={`mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#009999]/20 to-[#45b3c9]/20 text-[#009999] rounded-full text-xs font-black uppercase tracking-wider mb-4 sm:mb-6 border border-[#009999]/30">
          <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          {data.badge.text}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          {data.title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-[#009999] to-[#45b3c9] rounded-full"></div>
          <div className="w-3 h-3 bg-[#009999] rounded-full"></div>
        </div>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl font-subheading">
          {data.subtitle}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {data.items.map((benefit, index) => {
          const BenefitIcon = benefit.icon;
          return (
            <div 
              key={benefit.title} 
              className="group bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 hover:border-[#009999] transition-all hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-0">
                <div className={`p-6 sm:p-8 bg-[#009999] text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-18 h-18 sm:w-24 sm:h-24 bg-white/10 rounded-full -ml-9 sm:-ml-12 -mb-9 sm:-mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <BenefitIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{benefit.title}</h3>
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                      <div className="text-4xl sm:text-5xl font-black mb-1">{benefit.metric}</div>
                      <div className="text-xs sm:text-sm text-white/80 font-semibold uppercase tracking-wide">{benefit.metricLabel}</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">{benefit.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      {benefit.highlights.map((highlight, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200"
                        >
                          <Check className="w-4 h-4 text-[#009999] flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <button className="text-[#009999] hover:text-[#009999] font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                      View case studies
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Applications Section Component
function ApplicationsSection({ data, isVisible }) {
  const BadgeIcon = data.badge.icon;
  
  return (
    <section id="applications" className={`mb-16 sm:mb-20 lg:mb-24 scroll-mt-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#009999] to-[#009999] text-white rounded-full text-xs font-black uppercase tracking-wider mb-4 sm:mb-6 border border-[#009999]/30">
          <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          {data.badge.text}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          {data.title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-[#009999] to-[#009999] rounded-full"></div>
          <div className="w-3 h-3 bg-[#009999] rounded-full"></div>
        </div>
      </div>
      
      <div className="space-y-6 sm:space-y-8">
        {data.items.map((industry, index) => (
          <div key={industry.title} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#009999] transition-all hover:shadow-2xl hover-lift group">
            <div className="p-6 sm:p-8 card-gradient relative overflow-hidden">
              <div className="absolute inset-0 shimmer"></div>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                  {industry.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white">{industry.title}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed font-subheading">
                {industry.desc}
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <div className="w-1.5 h-5 sm:h-6 bg-[#009999] rounded-full"></div>
                  Use Cases:
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {industry.cases.map((useCase, j) => (
                    <li key={j} className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 card-gradient rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold mt-0.5 shadow-md">
                        {j + 1}
                      </span>
                      <span className="pt-0.5">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Final CTA Component
function FinalCTA({ data }) {
  return (
    <div className="relative card-gradient rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/30 rounded-full blur-3xl top-0 -right-32 sm:-right-48 animate-float"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/30 rounded-full blur-3xl bottom-0 -left-32 sm:-left-48 animate-float-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 rounded-full text-white font-bold text-xs sm:text-sm border border-white/30">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            {data.badge.text}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 sm:mb-6 leading-tight px-4">
          {data.title[0]}<br className="hidden sm:block" />
          <span className="sm:inline"> </span>{data.title[1]}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 sm:mb-10 max-w-2xl mx-auto font-subheading leading-relaxed px-4">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-6 sm:mb-8 px-4">
          <button className="group px-10 sm:px-12 py-4 sm:py-5 bg-white text-[#009999] font-bold text-base sm:text-lg rounded-2xl hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
            {data.buttons.primary}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 sm:px-12 py-4 sm:py-5 glass-dark border-2 border-white text-white font-bold text-base sm:text-lg rounded-2xl hover:bg-white/20 transition-all">
            {data.buttons.secondary}
          </button>
        </div>
        <p className="text-white/80 text-xs sm:text-sm font-medium px-4">
          {data.disclaimer}
        </p>
      </div>
    </div>
  );
}