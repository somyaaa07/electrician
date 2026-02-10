import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "What electrical services do you provide?",
      answer: "We offer comprehensive electrical services including wiring and rewiring, circuit breaker installation, lighting solutions, electrical panel upgrades, fault diagnosis and repair, emergency electrical services, and safety inspections."
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer: "Yes, we provide electrical services for both residential homes and commercial properties including offices, retail spaces, and industrial facilities with licensed and experienced electricians."
    },
    {
      question: "How do you charge for electrical work?",
      answer: "Our pricing is transparent and competitive, based on the scope of work, materials required, and labor hours. We provide detailed quotes upfront with no hidden charges before starting any project."
    },
    {
      question: "Are you available for emergency electrical repairs?",
      answer: "Yes, we offer 24/7 emergency electrical services for urgent issues like power outages, electrical failures, sparking outlets, or any electrical hazards that require immediate attention."
    },
    {
      question: "Are your electricians licensed and insured?",
      answer: "All our electricians are fully licensed, certified, insured, and regularly trained on the latest electrical codes and safety standards to ensure quality and safe electrical work."
    },
    {
      question: "Can I schedule an electrical inspection in advance?",
      answer: "Yes, you can easily schedule electrical inspections, installations, or repairs in advance through our website or by phone. Advance booking ensures timely service and proper planning for your project."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section with Background Image */}
      <div className="relative h-[280px] xs:h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[560px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
        />

        {/* Content */}
        <div className="relative h-full flex items-center justify-start max-w-7xl">
          {/* Compact Glassmorphism Card - Right Side */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl shadow-2xl text-right">
            
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3 xs:mb-4 sm:mb-5 text-slate-800 font-serif sm:mt-10 xl:mt-3 md:mt-5 lg:mt-6 mt-8">
              Professional <span style={{ color: '#009999' }}>Electrical Services</span>
            </h1>

            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-slate-700 mb-3 xs:mb-4 sm:mb-5 leading-relaxed font-light">
              Licensed, safe and reliable electrical services for homes and businesses – 
              installations, repairs and emergency services available 24/7.
            </p>

            <div className="flex justify-end gap-2 sm:gap-2.5 md:gap-3">
              <Link
                to="/services"
                className="bg-[#009999] hover:bg-[#1a9994] text-white px-4 xs:px-5 sm:px-6 md:px-7 py-2 xs:py-2.5 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Our Services
              </Link>

              <Link
                to="/about"
                className="bg-white/30 backdrop-blur-sm border-2 border-white/40 hover:bg-white/40 text-slate-800 px-4 xs:px-5 sm:px-6 md:px-7 py-2 xs:py-2.5 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Left Side - Contact Info */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Decorative dot grid */}
              <div className="grid grid-cols-6 gap-2 w-28 sm:w-32">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#009999] rounded-full"></div>
                ))}
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-none tracking-tight font-serif">
                Reach<br />out to us
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-slate-900 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
                  <div className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p>Office Hours: Mon - Sat (9:00 AM to 6:30 PM)</p>
                    <p className='text-slate-800'><b>Phone:</b> <span className='text-slate-600'><b>+91 99895626578</b></span></p>
                    <p>Shop-no.acd, XYZ Road</p>
                    <p>Sec-ABC, Noida<br/><span className="text-slate-500 mt-3 block">kapil@intelldigix.com</span></p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[#009999] transition-all duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[#009999] transition-all duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[#009999] transition-all duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[#009999] transition-all duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="flex items-center space-x-2 text-slate-900 text-sm mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name here"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-slate-900 text-sm mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-slate-900 text-sm mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <span>Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message goes here"
                    rows="5"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border border-gray-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-[#009999] hover:bg-[#1a9994] text-white rounded-md font-medium transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#009999]/30 text-sm sm:text-base"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Left - Title and Contact */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight font-serif">
                Customer<br />Questions & <span className="text-[#009999]">Answers</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-8 sm:mb-12">
                Find answers to common questions about our electrical services.
              </p>
              
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200">
                <h3 className="text-slate-900 font-semibold text-sm sm:text-base mb-2">
                  Didn't Get Your Answer?
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mb-3 leading-relaxed">
                  Please send us any questions or electrical service inquiries you may have.
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#009999] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <span className="text-slate-900 font-medium text-xs sm:text-sm">
                    kapil@intelldigix.com
                  </span>
                </div>
              </div>
            </div>

            {/* Right - FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-[#009999]/50 transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
                  >
                    <span className="text-slate-900 font-medium text-sm sm:text-base pr-4">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-[#009999] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && faq.answer && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-slate-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-serif">
              Find Us <span className="text-[#009999]">Here</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Visit our office or get in touch with us
            </p>
          </div>
          
          <div className="w-full h-96 sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              className="w-full h-[600px] rounded-lg shadow-md border-0"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=shop-no.-24%2025%20Feet%20RoadBudh%20Vihar,%20sec-63%20noida+(Elite%20Electrical%20Services)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Electrical Services Location"
            />
          </div>
        </div>
      </div>

    </div>
  );
}