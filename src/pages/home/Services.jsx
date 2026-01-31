import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Rocket, CheckSquare, Zap } from 'lucide-react';

const ProcessSteps = () => {
  const canvasRef = useRef(null);
  const svgRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  // Animated background
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

  // SVG path animation
  useEffect(() => {
    const path = svgRef.current?.querySelector('#squiggle');
    if (path) {
      const length = path.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      {/* Main Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Card Container */}
          <div className="bg-gray-50/90 backdrop-blur-3xl rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-200">
            {/* Section Title */}
            <div className="text-center mb-16 relative">
              <div className="inline-block relative">
                {/* Animated Border Effect */}
                <div className="absolute w-12 h-12 -left-2 -top-2 animate-spin-slow">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#5dc1d7] origin-left scale-x-0 animate-bar-top"></div>
                  <div className="absolute top-0 right-0 w-2 h-full bg-[#5dc1d7] origin-top scale-y-0 animate-bar-right"></div>
                  <div className="absolute bottom-0 right-0 w-full h-2 bg-[#5dc1d7] origin-right scale-x-0 animate-bar-bottom"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-full bg-[#5dc1d7] origin-bottom scale-y-0 animate-bar-left"></div>
                </div>
                
                <h6 className="text-[#5dc1d7] uppercase tracking-wider text-sm font-semibold mb-4 pt-8" style={{ fontFamily: 'Lora, serif' }}>
                  How It Work
                </h6>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
               Built with Precision. Delivered
               <br/> with Confidence.
              </h2>
            </div>

            {/* Process Steps Container */}
            <div className="relative">
              {/* SVG Connection Path */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 hidden lg:block pointer-events-none" style={{ zIndex: 0 }}>
                <svg 
                  ref={svgRef}
                  width="100%" 
                  height="120" 
                  viewBox="0 0 620 120" 
                  preserveAspectRatio="xMidYMid meet"
                  className="animate-draw-path"
                >
                  <path 
                    id="squiggle"
                    d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1" 
                    fill="none" 
                    stroke="rgba(32, 178, 170, 0.3)" 
                    strokeWidth="1"
                    strokeDasharray="5 10"
                    strokeDashoffset="15"
                  />
                  <polyline 
                    points="0,30 15,0 30,30" 
                    fill="rgba(32, 178, 170, 0.2)"
                    className="animate-plane"
                    transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)"
                  />
                </svg>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
              
                    {/* Icon Circle */}
                    <div className="relative w-32 h-32 rounded-full border-4 border-[#5dc1d7]/30 bg-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:border-[#5dc1d7] transition-all duration-300">
                      <div className="relative">
                        <Lightbulb className="w-10 h-10 text-[#5dc1d7]" />
                        {/* Decorative circles */}
                       
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#5dc1d7] shadow-lg flex items-center justify-center text-white font-bold text-base">
                      01
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Consultation
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Lora, serif' }}>
                    We begin by understanding your project goals, power requirements, and site-specific challenges through a technical consultation with our seasoned panel engineers.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                 
                    
                    {/* Icon Circle */}
                    <div className="relative w-32 h-32 rounded-full border-4 border-[#5dc1d7]/30 bg-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:border-[#5dc1d7] transition-all duration-300">
                      <div className="relative">
                        <Rocket className="w-10 h-10 text-[#5dc1d7]" />
                        {/* Decorative circles */}
                       
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#5dc1d7] shadow-lg flex items-center justify-center text-white font-bold text-base">
                      02
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Custom Quote
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Lora, serif' }}>
                    Based on your specifications, we prepare a transparent, detailed estimation covering design, materials, production timelines, and delivery — no hidden costs.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    {/* Icon Circle */}
                    <div className="relative w-32 h-32 rounded-full border-4 border-[#5dc1d7]/30 bg-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:border-[#5dc1d7] transition-all duration-300">
                      <div className="relative">
                        <Zap className="w-10 h-10 text-[#5dc1d7]" />
                        {/* Decorative circles */}
                       
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#5dc1d7] shadow-lg flex items-center justify-center text-white font-bold text-base">
                      03
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Manufacturing
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Lora, serif' }}>
                    Once approved, our team starts the production process. Every panel is engineered in-house, tested for compliance, and tailored for your application — from PLC to APFC, and beyond.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    {/* Icon Circle */}
                    <div className="relative w-32 h-32 rounded-full border-4 border-[#5dc1d7]/30 bg-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:border-[#5dc1d7] transition-all duration-300">
                      <div className="relative">
                        <CheckSquare className="w-10 h-10 text-[#5dc1d7]" />
                        {/* Decorative circles */}
                       
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#5dc1d7] shadow-lg flex items-center justify-center text-white font-bold text-base">
                      04
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Delivery & Handover
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Lora, serif' }}>
                    We deliver and, if needed, install the panels at your site — on time, every time. We also offer post-delivery support to ensure seamless operation from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(90deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(270deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 12.8s steps(1) infinite;
        }

        @keyframes bar-top {
          0% { transform: scale(0, 1); }
          12.5% { transform: scale(1, 1); }
          87.5% { transform: scale(1, 1); }
          100% { transform: scale(0, 1); }
        }

        @keyframes bar-right {
          0% { transform: scale(1, 0); }
          12.5% { transform: scale(1, 0); }
          25% { transform: scale(1, 1); }
          75% { transform: scale(1, 1); }
          87.5% { transform: scale(1, 0); }
          100% { transform: scale(1, 0); }
        }

        @keyframes bar-bottom {
          0% { transform: scale(0, 1); }
          25% { transform: scale(0, 1); }
          37.5% { transform: scale(1, 1); }
          62.5% { transform: scale(1, 1); }
          75% { transform: scale(0, 1); }
          100% { transform: scale(0, 1); }
        }

        @keyframes bar-left {
          0% { transform: scale(1, 0); }
          37.5% { transform: scale(1, 0); }
          50% { transform: scale(1, 1); }
          62.5% { transform: scale(1, 0); }
          100% { transform: scale(1, 0); }
        }

        .animate-bar-top { animation: bar-top 3.2s linear infinite; }
        .animate-bar-right { animation: bar-right 3.2s linear infinite; }
        .animate-bar-bottom { animation: bar-bottom 3.2s linear infinite; }
        .animate-bar-left { animation: bar-left 3.2s linear infinite; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 0; }
          60% { opacity: 1; }
        }

        .animate-pulse-dot {
          animation: pulse-dot 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProcessSteps;