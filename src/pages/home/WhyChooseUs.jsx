import React, { useState, useRef, useEffect } from 'react';
import { Zap, Shield, Wrench, Clock, Phone, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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

  const features = [
    {
      id: 1,
      number: "01",
      icon: <Shield className="w-8 h-8" />,
      title: "Certified Engineering Excellence",
      description: "Every panel we deliver is backed by a team of certified engineers with deep-rooted technical expertise and years of hands-on manufacturing experience."
    },
    {
      id: 2,
      number: "02",
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom-Built Panel Solutions",
      description: "From PCC to PLC and VFD to AHF, we tailor each panel to meet your specific operational, safety, and scalability requirements — no cookie-cutter systems here"
    },
    {
      id: 3,
      number: "03",
      icon: <Clock className="w-8 h-8" />,
      title: "End-to-End Project Execution",
      description: "Design, build, test, deploy — we handle it all under one roof. That means shorter lead times, tighter quality control, and zero finger-pointing."
    },
    {
      id: 4,
      number: "04",
      icon: <Zap className="w-8 h-8" />,
      title: "Industrial-Grade Reliability",
      description: "Our panels don't flinch under pressure. Built to withstand heavy loads, environmental stress, and 24/7 industrial demand — they're as resilient as your business needs them to be."
    },
    {
      id: 5,
      number: "05",
      icon: <Phone className="w-8 h-8" />,
      title: "After-Sales Support That Doesn't Quit",
      description: "Our relationship doesn't end at delivery. Whether it's on-site troubleshooting, remote diagnostics, or upgrade consultation — we're just a call away."
    },
    {
      id: 6,
      number: "06",
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent Pricing & Scalable Plans",
      description: "From startups to large-scale plants, we offer flexible pricing models that scale with your project size — and zero hidden costs."
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose Us
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              Industry-leading electrical panel solutions engineered for reliability and performance
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative h-80 cursor-pointer perspective-1000"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 preserve-3d`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === feature.id ? 'rotateX(180deg)' : 'rotateX(0deg)'
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl bg-gray-50/90 backdrop-blur-lg shadow-2xl border border-gray-200 p-8 flex flex-col items-center justify-center text-center transition-all duration-300"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-[#20B2AA]/30 text-7xl font-bold absolute top-4 right-6">
                      {feature.number}
                    </div>
                    <div className="text-[#20B2AA] mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: "'Lora', serif" }}>Hover to learn more</p>
                    <div className="w-12 h-1 bg-[#20B2AA] rounded-full"></div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl bg-gray-50/90 backdrop-blur-lg shadow-xl border border-gray-200 p-8 flex flex-col justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateX(180deg)'
                    }}
                  >
                    <div className="text-[#20B2AA] mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;