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
    const nodeCount = 30;
    
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand Section - Centered on mobile */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3  group -mt-15">
              <div className="relative">
              <img src="/logo.png" alt="logo"className='h-12 w-12 sm:h-10 sm:w-10 lg:h-44 lg:w-44 object-contain'/>
                {/* <div className="absolute inset-0 bg-white rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" /> */}
              </div>
             
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6 font-light max-w-md mx-auto sm:mx-0 -mt-10">
              Your trusted local electrician. Licensed, insured, and ready to solve all your electrical needs with professional service.
            </p>
          

            <div className="flex gap-3 justify-center sm:justify-start">
              {['F', 'I', 'Y', 'G'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/30 flex items-center justify-center text-white hover:text-gray-900 hover:bg-white hover:border-white transition-all duration-300 hover:scale-110"
                >
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services - Centered on mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 sm:mb-6 relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="hidden sm:inline absolute -left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity">⚡</span>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Centered on mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 sm:mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="hidden sm:inline absolute -left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 sm:mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {contact.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-300 group justify-center sm:justify-start"
                  >
                    <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-left">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Call-to-Action */}
        <div className="border-t border-white/20 pt-10 sm:pt-12 mb-10 sm:mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-white/10 via-white/20 to-white/10 border border-white/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
              <div className="relative">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">Need Emergency Electrical Service?</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">We're available 24/7 for urgent electrical repairs and emergencies</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:5551234567"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">📞</span>
                    Call Now: (555) 123-4567
                  </a>
                  <a
                    href="#quote"
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered on mobile */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
              © 2024 Spark Electric. All rights reserved. Licensed & Insured Electrician.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 order-1 md:order-2 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Master Electrician', 'BBB A+ Rated', '10+ Years Experience', 'Same Day Service'].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-400 font-medium"
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