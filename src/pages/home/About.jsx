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
        
        // Draw connections with sea green color
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            // Sea green color: rgb(32, 178, 170) or #5dc1d7
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

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
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
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden ">
              {/* Placeholder Image - Replace with your actual image */}
              <img 
                src="https://i.pinimg.com/1200x/90/9a/78/909a786b0e5491d20a423f93ac00c6f7.jpg" 
                alt="About Us" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Image Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div> */}
            </div>
            
            {/* Decorative Border */}
            {/* <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-200 rounded-2xl -z-10"></div> */}
          </div>
          
          {/* Right Side - Text Content */}
          <div className="space-y-8 order-1 lg:order-2" >
            {/* Heading */}
            <h2 
              className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Us
            </h2>
            
            {/* Subheading */}
            <p 
              className="text-gray-800 text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
             
Intell Power and Automation Pvt. Ltd. is not just a manufacturer—
            </p>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-[#5dc1d7] rounded-full"></div>
            
            {/* Description */}
            <div className="space-y-6">
              <p 
                className="text-gray-700 text-lg leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
              At Intell Power and Automation Pvt. Ltd., we offer comprehensive electro-mechanical solutions that go far beyond power distribution. Our integrated systems are engineered to enhance equipment safety, operational efficiency, and process automation for a wide range of industries
              </p>
              
              <p 
                className="text-gray-700 text-lg leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                As a next-generation panel manufacture brand, we specialize in crafting high-efficiency electrical panels that power industrial operations across sectors. Every control system we design is built for performance, precision, and purpose.
              </p>
            </div>
            
            {/* Optional CTA Button */}
            <div className="pt-4">
              <button 
                className="px-8 py-3 bg-[#5dc1d7] hover:bg-[#1a9b94] text-white border border-[#5dc1d7] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Learn More
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Corner Accents */}
      {/* <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-gray-200"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-gray-200"></div> */}
    </section>
  );
};

export default AboutSection;