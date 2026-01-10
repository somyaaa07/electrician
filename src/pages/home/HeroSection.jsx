import React, { useState } from 'react';

export default function ElectricianBanner() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    request: ''
  });

  const [selectedServices, setSelectedServices] = useState(['Security']);

  const services = [
    { name: 'TV Repair', icon: '📺' },
    { name: 'House', icon: '🏠' },
    { name: 'Building', icon: '🏢' },
    { name: 'Security', icon: '🔒' },
    { name: 'EV Charger', icon: '⚡' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, services: selectedServices });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleService = (serviceName) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .input-glow:focus {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
        }
      `}</style>
      
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80" 
          alt="Electrician background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/60"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center py-12 sm:py-20 md:py-18 lg:py-20">
          {/* Left Section */}
          <div className="text-white space-y-6 sm:space-y-6 md:space-y-6 lg:space-y-4 text-center lg:text-left">
            
            {/* Main Heading - Larger sizes for mobile/tablet */}
            <h1 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-black tracking-tight">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Power You Can
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
                Rely On.
              </span>
            </h1>

            {/* Subtitle - Larger for mobile/tablet */}
            <p style={{ fontFamily: 'Lora, serif' }} className="text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">
              Professional electrical services for residential and commercial properties. Fast, safe, and stress-free solutions you can trust.
            </p>

            {/* Features List - Larger text for mobile/tablet */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {['Licensed & Insured', 'Same-Day Service', '5-Year Warranty', 'Free Estimates'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-2.5 justify-center lg:justify-start">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Lora, serif' }} className="text-sm sm:text-base md:text-base opacity-90 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - Larger text for mobile/tablet */}
            <div className="flex justify-center lg:justify-start">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#090040] rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#090040]">
                <div className="absolute inset-0 shimmer"></div>
                <span style={{ fontFamily: 'Lora, serif' }} className="relative z-10 flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-lg">
                  Get A Free Quote
                  <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators - Larger for mobile/tablet */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start">
              <div>
                <div className="flex items-center gap-1 mb-1 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontFamily: 'Lora, serif' }} className="text-sm sm:text-base md:text-base opacity-75 text-center lg:text-left">
                  4.9/5 from 2,500+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form (Hidden on mobile and tablet, visible on large screens) */}
          <div className="hidden lg:block relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4"></div>

            <div className="relative glass-morphism rounded-2xl p-3 sm:p-4 md:p-5 lg:p-5 border border-white/30 shadow-2xl">
              <div className="absolute top-0 right-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur-xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-full bg-[#090040] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-white">
                      Send A Request
                    </h2>
                    <p style={{ fontFamily: 'Lora, serif' }} className="text-xs sm:text-xs md:text-sm text-white/60">
                      We'll respond within 1 hour
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                  <div>
                    <label style={{ fontFamily: 'Lora, serif' }} className="block text-white/90 text-xs sm:text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-2.5 sm:px-3 py-2 xs:py-2.5 text-xs sm:text-sm glass-morphism border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all input-glow"
                      style={{ fontFamily: 'Lora, serif' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'Lora, serif' }} className="block text-white/90 text-xs sm:text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                      className="w-full px-2.5 sm:px-3 py-2 xs:py-2.5 text-xs sm:text-sm glass-morphism border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all input-glow"
                      style={{ fontFamily: 'Lora, serif' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'Lora, serif' }} className="block text-white/90 text-xs sm:text-sm font-medium mb-1">
                      Describe Your Request
                    </label>
                    <textarea
                      name="request"
                      value={formData.request}
                      onChange={handleChange}
                      placeholder="Tell us about your electrical needs..."
                      rows="3"
                      required
                      className="w-full px-2.5 sm:px-3 py-2 xs:py-2.5 text-xs sm:text-sm glass-morphism border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all resize-none input-glow"
                      style={{ fontFamily: 'Lora, serif' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm bg-[#090040] rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-[#090040] overflow-hidden"
                    style={{ fontFamily: 'Lora, serif' }}
                  >
                    <div className="absolute inset-0 shimmer"></div>
                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                      Submit Request
                      <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </form>

                <div className="mt-2 sm:mt-3 flex items-center justify-center gap-1.5 text-white/70 text-xs sm:text-sm">
                  <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontFamily: 'Lora, serif' }}>Your information is secure and protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}