import React, { useState, useEffect } from 'react';
import { Target, Eye, Award } from 'lucide-react';

const StrengthsMissionVision = () => {
  const [activeTab, setActiveTab] = useState('strengths');

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

  const sections = {
    strengths: {
      title: "Our Strengths",
      icon: <Award className="w-8 h-8" />,
      content: "We pride ourselves on our in-house design, development, and delivery of advanced control systems, backed by a team of highly skilled and driven engineers. Our approach is built on providing flexible and scalable solutions that are fully customized to meet each client's unique requirements. At the core of everything we do lies a deep commitment to safety, innovation, and adherence to international quality standards, ensuring that our clients receive world-class solutions that drive their success."
    },
    mission: {
      title: "Our Mission",
      icon: <Target className="w-8 h-8" />,
      content: "Our mission is to be a leading provider of electro-mechanical solutions across industries, delivering systems that not only meet but exceed client expectations. We are dedicated to offering cost-effective solutions without compromising on quality, safety, or reliability. Every project we undertake is driven by our commitment to excellence and our determination to help our clients achieve operational success through cutting-edge technology and innovative engineering."
    },
    vision: {
      title: "Our Vision",
      icon: <Eye className="w-8 h-8" />,
      content: "We envision a future where we foster a culture rooted in the timeless principles of Arthashastra, investing continuously in training and talent development to build a world-class team. Our vision extends to delivering globally compliant products that ensure the safety of both plants and personnel while automating manufacturing processes to reduce human dependency and enhance efficiency. We are committed to empowering our employees, promoting seamless project delivery, and championing best practices through strong, collaborative client partnerships that create lasting value for all stakeholders."
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Core Mission , Vission & Strengths
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
            Building excellence through innovation, integrity, and commitment
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{
                backgroundColor: activeTab === key ? '#5dc1d7' : undefined,
                fontFamily: "'Lora', serif"
              }}
            >
              {sections[key].icon}
              {sections[key].title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {Object.keys(sections).map((key) => (
            <div
              key={key}
              className={`transition-all duration-500 ${
                activeTab === key ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b-2" style={{ borderColor: '#5dc1d7' }}>
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: '#5dc1d720' }}>
                    <div style={{ color: '#5dc1d7' }}>
                      {sections[key].icon}
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {sections[key].title}
                  </h3>
                </div>

                {/* Content Paragraph */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-xl leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                    {sections[key].content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#5dc1d7' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5dc1d7' }}></div>
            <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#5dc1d7' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthsMissionVision;