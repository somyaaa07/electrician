import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VisualDiaryGallery() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const canvasRef = useRef(null);

  const images = [
    { url: 'https://i.pinimg.com/1200x/08/7f/75/087f752f806ae65320df8a129604abc7.jpg', alt: 'Wedding photoshoot outdoors' },
    { url: 'https://i.pinimg.com/1200x/dc/43/02/dc430212195c0bfc0402d422eeb2e28a.jpg', alt: 'Pre-Wedding shoot' },
    { url: 'https://i.pinimg.com/1200x/62/95/18/629518e8dbfeb6b7d9ddffa5607614eb.jpg', alt: 'Portrait photography lighting' },
    { url: 'https://i.pinimg.com/1200x/73/9e/fb/739efb5e5ffc8196757efbc5bda19a3b.jpg', alt: 'Wedding couple moment' },
    { url: 'https://i.pinimg.com/1200x/c7/b2/a3/c7b2a32de500d57c2ff74cb83c2a2b1b.jpg', alt: 'Product photography setup' },
    { url: 'https://i.pinimg.com/1200x/b3/9a/6f/b39a6fcc716beacbf415ae0333d04dab.jpg', alt: 'Outdoor photoshoot' },
    { url: 'https://i.pinimg.com/1200x/a7/b8/69/a7b869b30ce664a5a8b4271f8b8719a0.jpg', alt: 'Studio portrait with soft light' },
    { url: 'https://i.pinimg.com/1200x/6d/a1/92/6da19214c9ad0822ec2294d1ddce745b.jpg', alt: 'Outdoor photoshoot' },
    { url: 'https://i.pinimg.com/1200x/73/5c/28/735c28eeeb88fc23eed712fd776b3b47.jpg', alt: 'Studio portrait with soft light' },
  ];

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes for the technical grid
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
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw connections with sea green color
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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getVisibleImages = () => {
    const positions = [
      { offset: -3, scale: 0.5, opacity: 1, y: 60, blur: 1 },
      { offset: -2, scale: 0.65, opacity: 1, y: 45, blur: 0 },
      { offset: -1, scale: 0.8, opacity: 1, y: 25, blur: 0 },
      { offset: 0, scale: 1, opacity: 1, y: 0, blur: 0 },
      { offset: 1, scale: 0.8, opacity: 1, y: 25, blur: 0 },
      { offset: 2, scale: 0.65, opacity: 1, y: 45, blur: 0 },
      { offset: 3, scale: 0.5, opacity: 1, y: 60, blur: 1 },
    ];

    return positions.map((pos) => {
      const index = (currentIndex + pos.offset + images.length) % images.length;
      return { ...pos, index };
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
   

      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500&display=swap');
      `}</style>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-5 px-4 relative z-10">
        <p
          className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase mb-2 sm:mb-3 md:mb-4"
          style={{ fontFamily: 'Lora, serif' }}
        >
          GALLERY
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
         Our Electrical Work Gallery
        </h1>

        {/* Fully responsive tagline */}
        <p
          className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2"
          style={{ fontFamily: 'Lora, serif' }}
        >
         Electrician That Enhance your Home Decor —
        </p>
      </div>

      {/* Gallery */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-center max-w-7xl mx-auto">
        {getVisibleImages().map(({ index, offset, scale, opacity, y, blur }) => {
          const zIndex = 20 - Math.abs(offset);
          const translateX =
            window.innerWidth < 640
              ? offset * 55
              : window.innerWidth < 1024
              ? offset * 100
              : offset * 140;

          return (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${translateX}px) translateY(${y}px) scale(${scale})`,
                zIndex,
                opacity,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
              }}
            >
              <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[450px] xl:w-[450px] h-[280px] sm:h-[330px] md:h-[380px] lg:h-[430px] xl:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={images[index].url}
                  alt={images[index].alt}
                  className="w-full h-full object-cover"
                />
                {offset === 0 && (
                  <div className="absolute inset-0 pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-5 sm:mt-10 md:mt-10 lg:mt-10 relative z-10">
        <button
          onClick={handlePrev}
          className="group bg-[#009999] hover:bg-[#1a9b94] text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-[#009999]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
        </button>

        <div className="flex gap-2 sm:gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-[#009999]'
                  : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="group bg-[#009999] hover:bg-[#1a9b94] text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-[#009999]"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}