import React, { useEffect, useRef } from 'react';

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Electric spark nodes
    const nodes = [];
    const nodeCount = window.innerWidth < 640 ? 15 : window.innerWidth < 1024 ? 20 : 30;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const services = [
    { name: 'Residential Electrical', href: '#' },
    { name: 'Commercial Wiring', href: '#' },
    { name: 'Emergency Repairs', href: '#' },
    { name: 'Panel Upgrades', href: '#' },
    { name: 'Lighting Installation', href: '#' },
    { name: 'EV Charger Install', href: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Service Areas', href: '#' },
    { name: 'Free Quote', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Safety Tips', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const contact = [
    { icon: '📞', label: '(555) 123-4567', href: 'tel:5551234567' },
    { icon: '✉️', label: 'info@sparkelectric.com', href: 'mailto:info@sparkelectric.com' },
    { icon: '📍', label: '123 Main St, Your City, ST 12345', href: '#' },
    { icon: '🕐', label: 'Mon-Fri: 7AM-7PM, Sat: 8AM-5PM', href: '#' },
  ];

  return (
    <footer className="relative bg-[#080325] overflow-hidden">
      {/* Animated Electric Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      {/* Top Border with Electric Effect */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center sm:text-left -mt-10">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 group">
              <div className="relative">
                <img 
                  src="/logo1.png" 
                  alt="Spark Electric Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs -mt-10 sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light max-w-xs mx-auto sm:mx-0">
              Your trusted local electrician. Licensed, insured, and ready to solve all your electrical needs with professional service.
            </p>

            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {['F', 'I', 'Y', 'G'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white/10 border border-white/30 flex items-center justify-center text-white hover:text-gray-900 hover:bg-white hover:border-white transition-all duration-300 hover:scale-110"
                  aria-label={`Social media ${social}`}
                >
                  <span className="text-xs sm:text-sm font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5 lg:mb-6 relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="hidden sm:inline absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs">⚡</span>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5 lg:mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="hidden sm:inline absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5 lg:mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 lg:space-y-4">
              {contact.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-start gap-2 sm:gap-3 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300 group justify-center sm:justify-start"
                  >
                    <span className="text-base sm:text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-left break-words max-w-[200px] sm:max-w-none">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Call-to-Action */}
        <div className="border-t border-white/20 pt-8 sm:pt-10 lg:pt-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 via-white/20 to-white/10 border border-white/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
              <div className="relative text-center">
                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">Need Emergency Electrical Service?</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 px-2">We're available 24/7 for urgent electrical repairs and emergencies</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                  <a
                    href="tel:5551234567"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span className="text-lg sm:text-xl">📞</span>
                    <span className="whitespace-nowrap">Call Now: (555) 123-4567</span>
                  </a>
                  <a
                    href="#quote"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border-2 border-white/50 text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
              © 2024 Spark Electric. All rights reserved. Licensed & Insured Electrician.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 order-1 md:order-2 text-[10px] xs:text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">Terms of Service</a>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">Sitemap</a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {['Master Electrician', 'BBB A+ Rated', '10+ Years Experience', 'Same Day Service'].map((badge) => (
              <span
                key={badge}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800/50 border border-gray-700 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap"
              >
                ⭐ {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}