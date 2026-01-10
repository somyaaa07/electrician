import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const canvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
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
      text: "Exceptional work from start to finish. They upgraded our entire electrical panel and installed new outlets throughout the house. Professional, clean, and incredibly knowledgeable. I felt completely safe having them work in my home.",
      rating: 5,
      image: "SM"
    },
    {
      name: "David Chen",
      role: "Restaurant Owner",
      text: "When our kitchen lost power during dinner service, they arrived within 30 minutes and had us back online in under two hours. Their emergency response saved us thousands in lost revenue. Can't thank them enough.",
      rating: 5,
      image: "DC"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Property Manager",
      text: "I manage 15 commercial properties and this team handles all our electrical needs. Reliable, honest pricing, and they always show up when they say they will. That's rare to find these days.",
      rating: 5,
      image: "JR"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#080325' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
            Trusted by homeowners and businesses across the region for reliable, expert electrical services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-12 md:p-16  shadow-2xl ">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-white/20" />
            
            <div className="relative">
              <div className="flex gap-2 mb-8 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-white text-white" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl text-white leading-relaxed text-center mb-12" style={{ fontFamily: 'Lora, serif', fontStyle: 'italic' }}>
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20">
                  <span className="text-white font-semibold text-xl">{testimonials[currentIndex].image}</span>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Lora, serif' }}>
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-12' : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="bg-white text-gray-900 px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105 text-lg" style={{ fontFamily: 'Lora, serif' }}>
            Schedule Your Consultation
          </button>
        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
    </section>
  );
}