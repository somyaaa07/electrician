import React, { useEffect, useState } from 'react';
import { CheckCircle, Zap, Shield, Users, Award, Clock } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Fully certified electricians with comprehensive insurance coverage"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for urgent electrical issues"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Team",
      description: "Highly trained professionals with years of experience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quality Workmanship",
      description: "Premium materials and attention to detail in every project"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    "Safety-first approach in all electrical work",
    "Transparent pricing with no hidden costs",
    "Timely completion of projects",
    "Ongoing support and maintenance",
    "Latest tools and technology",
    "Eco-friendly electrical solutions"
  ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[280px] xs:h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[600px] overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/38/79/4a/38794ae5bca2089fee63952ccd524dec.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        <div
          className={`relative h-full flex items-center justify-start transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl shadow-2xl sm:mt-10 xl:mt-3 md:mt-5 lg:mt-6 mt-8">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 xs:mb-3 sm:mb-4 font-serif leading-tight text-white">
                About <span className="text-[#20B2AA]">Us</span>
              </h1>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-light">
                Your trusted partner for professional electrical services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/7c/8d/a6/7c8da60fa613a06b396d515607f29abe.jpg"
                alt="Our Team"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
          
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-[#20B2AA]/10 rounded-full mb-4">
                <span className="text-[#20B2AA] font-semibold text-sm">WHO WE ARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight font-serif">
             Smart Panels. Smarter Partnership.

              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
At Intelldigix, we're not just manufacturers — we're system thinkers, precision builders, and engineering partners. With a strong foundation in automation, electrical distribution, and process control, we create panel solutions that fuel the industries of tomorrow.              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                From simple repairs to complex installations, we handle every project with the utmost 
                professionalism and attention to detail. Our commitment to quality workmanship and customer 
                satisfaction has made us the preferred choice for electrical services in the area.
              </p>
            </div>

            {/* Why Choose Us Points */}
            <div className="space-y-3">
              {values.slice(0, 4).map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#20B2AA] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
            Why Choose <span className="text-[#20B2AA]">Our Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We combine expertise, quality, and customer service to deliver outstanding electrical solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-[#20B2AA] group shadow-gray-500 shadow-lg"
            >
              <div className="w-14 h-14 bg-[#20B2AA]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#20B2AA] transition-colors duration-300">
                <div className="text-[#20B2AA] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                Our Core <span className="text-[#20B2AA]">Values</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              our services are designed to empower your infrastructure with precision engineering and future-ready technology.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-[#20B2AA] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://i.pinimg.com/1200x/e6/4e/0e/e64e0e617dc97e10a13fc292f56f66cf.jpg"
                alt="Our Work"
                className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20B2AA]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}