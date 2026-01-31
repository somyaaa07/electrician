import React from 'react';
import { Zap, Award, Users, TrendingUp } from 'lucide-react';

export default function FounderSection() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8" style={{ color: '#5dc1d7' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#5dc1d7' }}>
              Meet Our Founder
            </h2>
            <Zap className="w-8 h-8" style={{ color: '#5dc1d7' }} />
          </div>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#5dc1d7' }}></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Leading innovation in electrical engineering and industrial automation
          </p>
        </div>

        {/* Founder Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Mr. Sandeep Bishnoi - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10"
              style={{ backgroundColor: '#5dc1d7', opacity: 0.2 }}
            ></div>
            
            {/* Floating Badge */}
            <div 
              className="absolute top-6 -left-6 rounded-xl shadow-lg p-4 text-white"
              style={{ backgroundColor: '#5dc1d7' }}
            >
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Mr. Sandeep Bishnoi
              </h3>
              <p className="text-xl font-medium" style={{ color: '#5dc1d7' }}>
                Founder & Chief Engineer
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              With over 20 years of engineering experience, Mr. Sandeep Bishnoi envisioned a company that would not only support industrial growth through reliable products but also redefine safety, performance, and automation.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              His leadership continues to fuel the company's innovation and customer-centric approach, ensuring every project meets the highest standards of quality and reliability.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#5dc1d710' }}>
                <Award className="w-8 h-8 mx-auto mb-2" style={{ color: '#5dc1d7' }} />
                <div className="text-sm font-semibold text-gray-700">Safety First</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#5dc1d710' }}>
                <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: '#5dc1d7' }} />
                <div className="text-sm font-semibold text-gray-700">Performance</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#5dc1d710' }}>
                <Zap className="w-8 h-8 mx-auto mb-2" style={{ color: '#5dc1d7' }} />
                <div className="text-sm font-semibold text-gray-700">Automation</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#5dc1d7' }}>
                  500+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#5dc1d7' }}>
                  100+
                </div>
                <div className="text-sm text-gray-600 mt-1">Industrial Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#5dc1d7' }}>
                  98%
                </div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-4 pl-6 py-4 mt-8 rounded-r-lg" style={{ borderColor: '#5dc1d7', backgroundColor: '#5dc1d705' }}>
              <p className="text-gray-700 italic text-lg">
                "Excellence in electrical engineering comes from combining technical expertise with an unwavering commitment to safety and innovation."
              </p>
            </div>

            {/* Certifications Badge */}
            <div className="flex items-center gap-3 pt-4">
              <div 
                className="px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: '#5dc1d7' }}
              >
                ⚡ Certified Electrical Engineer
              </div>
              <div 
                className="px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: '#5dc1d7' }}
              >
                🏆 Industry Leader
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: '#5dc1d710' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#5dc1d7' }}>
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted partner in electrical solutions, powering industries with cutting-edge technology, 
              uncompromising safety standards, and innovative automation systems that drive efficiency and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}