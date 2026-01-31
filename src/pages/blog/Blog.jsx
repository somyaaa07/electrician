import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { blogData } from "./data";
import { IoBookOutline } from "react-icons/io5";

export default function BlogList() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header without parallax effect */}
      <div className="relative h-[300px] xs:h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[560px] w-full overflow-hidden">
        {/* Static Background Image */}
        <div 
          className="absolute inset-0  bg-center bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/29288263/pexels-photo-29288263.jpeg')"
          }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Content */}
        <div
          className={`relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Compact Glassmorphism Card - Left Side */}
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl shadow-2xl sm:mt-10 xl:mt-5 md:mt-7 lg:mt-6 mt-8">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/50 backdrop-blur-sm rounded-full mb-3 sm:mb-4 md:mb-5 border border-white/30">
              <IoBookOutline className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: '#5dc1d7' }} />
            </div>

            {/* Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 xs:mb-3 sm:mb-4 font-serif leading-tight text-slate-200">
              Our <span style={{ color: '#5dc1d7' }}>Blog</span>
            </h1>

            {/* Description */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-light">
              Discover expert electrical insights covering safety tips, installation guides, maintenance advice, and energy-saving solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid with Glassmorphism */}
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <article
              key={blog.id}
              className={`bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white border border-white/30">
                  {blog.category || "Electrical"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-white/80 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{blog.date || "March 15, 2025"}</span>
                  <User className="w-4 h-4 mr-1" />
                  <span>{blog.author || "Admin"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 text-slate-900 group-hover:text-[#5dc1d7] transition-all duration-300"
                    style={{ fontFamily: "serif" }}>
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="inline-flex items-center text-[#5dc1d7] font-semibold hover:text-[#1a9994] transition bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}