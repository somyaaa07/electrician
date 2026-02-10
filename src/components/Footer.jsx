import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.5 * (1 - distance / 120)})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
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
    { name: 'ABB MV Drive Panel', href: '/products/abb-mv-drive-panel' },
    { name: 'ABB VCB Panel', href: '/products/abb-vcb-panel' },
    { name: 'ABB VFD Panel', href: '/products/abb-vfd-panel' },
    { name: 'APFC - AHF Panel', href: '/products/apfc-ahf-panel' },
    { name: 'Draw-Out MCC Panel', href: '/products/draw-out-mcc-panel' },
    { name: 'Integrated EHouse Solutions', href: '/products/integrated-ehouse-solutions' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const contact = [
    { icon: '📞', label: '(555) 123-4567', href: 'tel:5551234567' },
    { icon: '✉️', label: 'Info@intelldigix.com', href: 'mailto:Info@intelldigix.com' },
    { icon: '📍', label: '123 Main St, Your City, ST 12345', href: '#' },
    { icon: '🕐', label: 'Mon-Fri: 7AM-7PM, Sat: 8AM-5PM', href: '#' },
  ];

  return (
    <footer className="relative bg-[#009999] overflow-hidden">
      {/* Animated Electric Background */}
     

      {/* Top Border with Electric Effect */}
      {/* <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" /> */}
      {/* <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm" /> */}

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center sm:text-left -mt-10">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 group">
              <div className="relative">
                <img 
                  src="/logo12.png" 
                  alt="Spark Electric Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 object-contain"
                />
              </div>
            </div>
            <p className="text-gray-100 text-xs -mt-10 sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light max-w-xs mx-auto sm:mx-0">
              Your trusted local electrician. Licensed, insured, and ready to solve all your electrical needs with professional service.
            </p>

            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {['F', 'I', 'Y', 'G'].map((social, idx) => (
                <Link
                  key={idx}
                  to="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white/20 border border-white/40 flex items-center justify-center text-white hover:text-[#009999] hover:bg-white hover:border-white transition-all duration-300 hover:scale-110"
                  aria-label={`Social media ${social}`}
                >
                  <span className="text-xs sm:text-sm font-bold">{social}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5 lg:mb-6 relative inline-block">
              Our products
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-white to-transparent" />
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-100 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="hidden sm:inline absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs">⚡</span>
                      {link.name}
                    </span>
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-gray-100 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      <span className="hidden sm:inline absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                      {link.name}
                    </span>
                  </Link>
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
                  {item.href.startsWith('tel:') || item.href.startsWith('mailto:') ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-2 sm:gap-3 text-gray-100 hover:text-white text-xs sm:text-sm transition-colors duration-300 group justify-center sm:justify-start"
                    >
                      <span className="text-base sm:text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-left break-words max-w-[200px] sm:max-w-none">{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-start gap-2 sm:gap-3 text-gray-100 hover:text-white text-xs sm:text-sm transition-colors duration-300 group justify-center sm:justify-start"
                    >
                      <span className="text-base sm:text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-left break-words max-w-[200px] sm:max-w-none">{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Call-to-Action */}
     

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-100 text-[10px] xs:text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
              © 2024 Spark Electric. All rights reserved. Licensed & Insured Electrician.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 order-1 md:order-2 text-[10px] xs:text-xs sm:text-sm">
              <Link to="#" className="text-gray-100 hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
              <span className="text-gray-700 hidden xs:inline">•</span>
              <Link to="#" className="text-gray-100 hover:text-white transition-colors whitespace-nowrap">Terms of Service</Link>
              <span className="text-gray-700 hidden xs:inline">•</span>
              <Link to="#" className="text-gray-100 hover:text-white transition-colors whitespace-nowrap">Sitemap</Link>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {['Master Electrician', 'BBB A+ Rated', '10+ Years Experience', 'Same Day Service'].map((badge) => (
              <span
                key={badge}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 border border-white/40 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-white font-medium whitespace-nowrap"
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