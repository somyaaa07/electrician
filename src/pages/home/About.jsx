import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const canvasRef = useRef(null);

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
        
        // Draw connections
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
        
        // Draw node
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

  return (
    <section className="relative bg-[#080325] min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Animated Technical Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden ">
              {/* Placeholder Image - Replace with your actual image */}
              <img 
                src="/welcome.png" 
                alt="About Us" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Image Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#080325] via-transparent to-transparent opacity-60"></div> */}
            </div>
            
            {/* Decorative Border */}
            {/* <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white/20 rounded-2xl -z-10"></div> */}
          </div>
          
          {/* Right Side - Text Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h2 
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Us
            </h2>
            
            {/* Subheading */}
            <p 
              className="text-white/90 text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Crafting innovative solutions with passion and precision
            </p>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
            
            {/* Description */}
            <div className="space-y-6">
              <p 
                className="text-white/80 text-lg leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We are a team of dedicated professionals committed to pushing the boundaries 
                of technology and design. Our mission is to create exceptional digital experiences 
                that inspire and transform businesses.
              </p>
              
              <p 
                className="text-white/80 text-lg leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                With years of expertise in web development, design, and innovation, we bring 
                your vision to life through cutting-edge solutions tailored to your unique needs.
              </p>
            </div>
            
            {/* Optional CTA Button */}
            <div className="pt-4">
              <button 
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Learn More
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Corner Accents */}
      {/* <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-white/10"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-white/10"></div> */}
    </section>
  );
};

export default AboutSection;