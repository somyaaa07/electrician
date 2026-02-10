import React, { useState, useEffect } from 'react';
import { Factory, Layers, Leaf, Cpu, Shield, TrendingUp } from 'lucide-react';

const WhatWeDo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const industries = [
    {
      id: 1,
      number: "01",
      icon: <Factory className="w-8 h-8" />,
      title: "Steel & Metals",
      description: "From iron ore refinement to flat and long product processing, we provide complete process automation and electrical distribution systems, engineered to meet global standards.",
      highlights: ["Iron Ore Refinement", "Flat & Long Product Processing", "Global Standards Compliance"]
    },
    {
      id: 2,
      number: "02",
      icon: <Layers className="w-8 h-8" />,
      title: "Pulp & Paper",
      description: "We deliver plant-wide automation and lifecycle optimization, giving customers a competitive edge through integrated and intelligent systems.",
      highlights: ["Plant-Wide Automation", "Lifecycle Optimization", "Integrated Intelligence"]
    },
    {
      id: 3,
      number: "03",
      icon: <Leaf className="w-8 h-8" />,
      title: "Sugar Industry",
      description: "Our automation solutions enhance the control and efficiency of sugar production processes, supporting modernization and sustainability.",
      highlights: ["Process Control", "Production Efficiency", "Sustainable Solutions"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Content */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Do
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-6xl mx-auto leading-relaxed mb-8" style={{ fontFamily: "'Lora', serif" }}>
              At <span className="font-semibold text-[#009999]">Intell Power and Automation Pvt. Ltd.</span>, we offer comprehensive electro-mechanical solutions that go far beyond power distribution. Our integrated systems are engineered to enhance equipment safety, operational efficiency, and process automation for a wide range of industries.
            </p>
            
            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-[#009999]/10 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 text-[#009999]" />
                <span className="text-gray-700 font-medium">Equipment Safety</span>
              </div>
              <div className="flex items-center gap-2 bg-[#009999]/10 px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5 text-[#009999]" />
                <span className="text-gray-700 font-medium">Operational Efficiency</span>
              </div>
              <div className="flex items-center gap-2 bg-[#009999]/10 px-6 py-3 rounded-full">
                <Cpu className="w-5 h-5 text-[#009999]" />
                <span className="text-gray-700 font-medium">Process Automation</span>
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
              Industries We Serve
            </h3>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="relative h-96 cursor-pointer perspective-1000"
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 preserve-3d`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === industry.id ? 'rotateX(180deg)' : 'rotateX(0deg)'
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl bg-gray-50/90 backdrop-blur-lg shadow-2xl border border-gray-200 p-8 flex flex-col items-center justify-center text-center transition-all duration-300"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-[#009999]/30 text-7xl font-bold absolute top-4 right-6">
                      {industry.number}
                    </div>
                    <div className="text-[#009999] mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: "'Lora', serif" }}>Hover to learn more</p>
                    <div className="w-12 h-1 bg-[#009999] rounded-full"></div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl bg-gray-50/90 backdrop-blur-lg shadow-xl border border-gray-200 p-8 flex flex-col justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateX(180deg)'
                    }}
                  >
                    <div className="text-[#009999] mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {industry.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Lora', serif" }}>
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      {industry.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#009999] mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600" style={{ fontFamily: "'Lora', serif" }}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
        
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
      `}</style>
    </div>
  );
};

export default WhatWeDo;