import React, { useState, useEffect, useRef } from 'react';

const ServiceCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4 cursor-pointer service-card">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:wght@300;400;500&display=swap');

        .service-card .card-container {
          transform-style: preserve-3d;
          perspective: 1000px;
          width: 100%;
          height: 100%;
        }

        .service-card .card-face {
          background-size: cover;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
          backface-visibility: hidden;
          text-align: center;
          color: #FFFFFF;
          border-radius: 12px;
          width: 100%;
          position: relative;
          height: 400px;
        }

        .service-card .card-front {
          transform: rotateY(0deg);
          transform-style: preserve-3d;
        }

        .service-card .card-back {
          background: linear-gradient(135deg, #20B2AA 0%, #1a9b94 100%);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: rotateY(180deg);
          transform-style: preserve-3d;
        }

        .service-card .card-front::after {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          content: '';
          display: block;
          opacity: 0.5;
          background: linear-gradient(to bottom, rgba(32, 178, 170, 0.3), rgba(32, 178, 170, 0.8));
          backface-visibility: hidden;
          border-radius: 12px;
        }

        .service-card .card-container:hover .card-front {
          transform: rotateY(-180deg);
          transform-style: preserve-3d;
        }

        .service-card .card-container:hover .card-back {
          transform: rotateY(0deg);
          transform-style: preserve-3d;
        }

        .service-card .card-inner {
          transform: translateY(-50%) translateZ(60px) scale(0.94);
          top: 50%;
          position: absolute;
          left: 0;
          width: 100%;
          box-sizing: border-box;
          outline: 1px solid transparent;
          perspective: inherit;
          z-index: 2;
          padding: 2rem 1.5rem;
        }

        .service-card .card-title {
          position: relative;
          font-weight: 700;
          line-height: 1.3;
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
          font-family: 'Playfair Display', serif;
        }

        .service-card .card-title::after {
          content: '';
          position: absolute;
          background: #FFFFFF;
          display: block;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 3.5rem;
          height: 3px;
          bottom: -0.75rem;
        }

        .service-card .card-subtitle {
          color: rgba(255,255,255,0.95);
          font-weight: 400;
          line-height: 1.5;
          font-size: 1.125rem;
          font-family: 'Lora', serif;
        }

        .service-card .card-back .card-inner p {
          line-height: 1.7;
          font-size: 1.0625rem;
          color: #FFFFFF;
          font-family: 'Lora', serif;
        }
      `}</style>

      <div className="card-container">
        <div 
          className="card-face card-front"
          style={{ backgroundImage: `url(${image})` }}
        >
              <div className="absolute inset-0 bg-black/60"></div>
          <div className="card-inner">
            <p className="card-title">{title}</p>
            {subtitle && <span className="card-subtitle">{subtitle}</span>}
          </div>
        </div>
        
        <div className="card-face card-back">
          <div className="card-inner">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ElectricianServices = () => {
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef(null);

  const services = [
    {
      title: "Electrical Installation",
      subtitle: "Complete Wiring Solutions",
      description: "Professional electrical installation services for residential and commercial properties with certified electricians and quality materials.",
      image: "https://i.pinimg.com/1200x/3b/4e/8f/3b4e8f727be3f1640a7b9443d1483dbe.jpg"
    },
    {
      title: "Panel Upgrades",
      subtitle: "Modern Electrical Panels",
      description: "Upgrade your electrical panel to handle modern power demands safely and efficiently with the latest circuit breaker technology.",
      image: "https://i.pinimg.com/736x/8d/82/d0/8d82d04c897a84c422cfb2c4dcf5fc5f.jpg"
    },
    {
      title: "Lighting Solutions",
      subtitle: "Indoor & Outdoor Lighting",
      description: "Expert lighting installation and design services including LED upgrades, landscape lighting, and smart lighting systems.",
      image: "https://i.pinimg.com/1200x/b5/ba/2e/b5ba2e98ec4db3157975b751e1adecd5.jpg"
    },
    {
      title: "Emergency Repairs",
      subtitle: "24/7 Service Available",
      description: "Round-the-clock emergency electrical repair services to address power outages, short circuits, and electrical hazards immediately.",
      image: "https://i.pinimg.com/1200x/d3/d2/2a/d3d22a0bbf45ae94ae53229087c6d36d.jpg"
    },
    {
      title: "Circuit Breaker Service",
      subtitle: "Safety & Protection",
      description: "Installation, repair, and replacement of circuit breakers to ensure your electrical system is protected from overloads and faults.",
      image: "https://i.pinimg.com/1200x/de/4a/4d/de4a4d0b49fe8aa0fc92f8448dae93e2.jpg"
    },
    {
      title: "Smart Home Integration",
      subtitle: "Automated Solutions",
      description: "Transform your home with smart electrical systems including automated lighting, thermostats, and security integration.",
      image: "https://i.pinimg.com/1200x/f9/b6/c8/f9b6c82b9499013f2bbc9a5af0a666ff.jpg"
    },
    {
      title: "Generator Installation",
      subtitle: "Backup Power Systems",
      description: "Professional generator installation and maintenance to keep your home or business powered during outages.",
      image: "https://i.pinimg.com/1200x/10/e0/eb/10e0eb034e82aef1b734f3fbf3957375.jpg"
    },
    {
      title: "Electrical Inspection",
      subtitle: "Safety Assessment",
      description: "Comprehensive electrical safety inspections to identify potential hazards and ensure compliance with electrical codes.",
      image: "https://i.pinimg.com/1200x/c4/70/a3/c470a350877ee958ef1415983920ff68.jpg"
    },
    {
      title: "EV Charger Setup",
      subtitle: "Electric Vehicle Charging",
      description: "Installation of electric vehicle charging stations at home or business locations with proper wiring and safety measures.",
      image: "https://i.pinimg.com/1200x/46/91/88/4691887257ba2df1d908ef3ca1624eaa.jpg"
    }
  ];

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  // Canvas animation for background
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

    const nodes = [];
    const nodeCount = 50;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
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
          
          if (distance < 150) {
            ctx.beginPath();
            // Sea green color with increased opacity
            ctx.strokeStyle = `rgba(32, 178, 170, ${0.6 * (1 - distance / 150)})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
        
        // Draw node with sea green color
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(32, 178, 170, 0.8)';
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

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused) {
        scrollPositionRef.current += 0.5;
        
        // Reset scroll position for seamless loop
        const maxScroll = container.scrollWidth / 2;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      }
      
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:wght@300;400;500&display=swap');
      `}</style>

      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, opacity: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-16 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Electrical Services
          </h1>
          <p className="text-xl md:text-xl text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
            Professional electrical solutions for homes and businesses with certified expertise and quality workmanship
          </p>
        </div>

        {/* Auto-scrolling Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-hidden py-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex" style={{ width: 'fit-content' }}>
            {duplicatedServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center py-12 px-4">
          <p className="text-[#20B2AA] text-lg font-medium" style={{ fontFamily: "'Lora', serif" }}>
            Hover over any card to pause and explore our services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectricianServices;