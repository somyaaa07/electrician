import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const canvasRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner, Los Angeles",
      text: "Exceptional work from start to finish. They upgraded our entire electrical panel and installed new outlets throughout the house. Professional, clean, and incredibly knowledgeable.",
      rating: 5,
      image: "SM"
    },
    {
      name: "David Chen",
      role: "Restaurant Owner",
      text: "When our kitchen lost power during dinner service, they arrived within 30 minutes and had us back online in under two hours. Their emergency response saved us thousands in lost revenue.",
      rating: 5,
      image: "DC"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Property Manager",
      text: "I manage 15 commercial properties and this team handles all our electrical needs. Reliable, honest pricing, and they always show up when they say they will. That's rare to find these days.",
      rating: 5,
      image: "JR"
    },
    {
      name: "Michael Thompson",
      role: "Retail Store Owner",
      text: "They completely rewired our vintage building while preserving its character. The attention to detail and respect for our business operations was outstanding. Highly recommend!",
      rating: 5,
      image: "MT"
    },
    {
      name: "Emily Watson",
      role: "Homeowner, San Diego",
      text: "From the initial consultation to the final inspection, everything was seamless. They installed smart home lighting throughout and explained everything clearly. Worth every penny!",
      rating: 5,
      image: "EW"
    },
    {
      name: "Robert Johnson",
      role: "Gym Owner",
      text: "Needed urgent electrical work for our new equipment installation. They accommodated our tight schedule and completed the job ahead of time. True professionals who care about their clients.",
      rating: 5,
      image: "RJ"
    },
    {
      name: "Lisa Anderson",
      role: "Office Manager",
      text: "Our office building had outdated wiring that was becoming a safety concern. They handled the entire upgrade efficiently with minimal disruption to our daily operations. Fantastic service!",
      rating: 5,
      image: "LA"
    },
    {
      name: "James Parker",
      role: "Homeowner, Orange County",
      text: "Best electricians we've ever worked with! They installed EV charging stations and solar panel wiring. Professional, punctual, and transparent pricing. Can't ask for more!",
      rating: 5,
      image: "JP"
    },
    {
      name: "Maria Garcia",
      role: "Cafe Owner",
      text: "They redesigned our entire cafe's electrical layout to support our new equipment. Creative solutions, excellent communication, and they stayed within budget. Absolutely recommend!",
      rating: 5,
      image: "MG"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
            Trusted by homeowners and businesses across the region for reliable, expert electrical services
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-700 ease-in-out">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={currentSlide * 3 + index}
                className="relative bg-gray-50/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200 hover:bg-gray-100/90 hover:border-[#20B2AA] transition-all duration-300 hover:scale-105 flex flex-col animate-fadeIn"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-[#20B2AA]/20" />
                
                <div className="relative flex-1 flex flex-col">
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#20B2AA] text-[#20B2AA]" />
                    ))}
                  </div>

                  <p className="text-lg text-gray-800 leading-relaxed text-center mb-8 flex-1" style={{ fontFamily: 'Lora, serif', fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#20B2AA]/20 flex items-center justify-center border-2 border-[#20B2AA]">
                      <span className="text-[#20B2AA] font-semibold text-lg">{testimonial.image}</span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-gray-900 text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Lora, serif' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-[#20B2AA] flex items-center justify-center text-[#20B2AA] hover:bg-[#20B2AA]/10 transition-all duration-300"
            aria-label="Previous slide"
          >
            ←
          </button>
          
          <div className="flex gap-3">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#20B2AA] w-12' : 'bg-gray-400 w-2 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-[#20B2AA] flex items-center justify-center text-[#20B2AA] hover:bg-[#20B2AA]/10 transition-all duration-300"
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        <div className="text-center mt-20">
          <button className="bg-[#20B2AA] text-white px-10 py-5 rounded-lg font-semibold hover:bg-[#1a9b94] transition-all duration-300 shadow-xl transform hover:scale-105 text-lg" style={{ fontFamily: 'Lora, serif' }}>
            Schedule Your Consultation
          </button>
        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
      `}</style>
    </section>
  );
}