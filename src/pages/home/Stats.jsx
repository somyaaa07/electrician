import React, { useEffect, useRef } from 'react';

export default function ElectricianStats() {
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

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "2500+", label: "Projects Completed" },
    { number: "100%", label: "Licensed & Insured" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <div className="relative bg-[#080325] py-20 px-6 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Trusted Excellence
          </h2>
          <p className="text-xl text-white/80" style={{ fontFamily: 'Lora, serif' }}>
            Delivering reliable electrical solutions with unmatched expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.number}
              </div>
              <div className="text-lg text-white/90" style={{ fontFamily: 'Lora, serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&display=swap" rel="stylesheet" />
    </div>
  );
}