import { useEffect, useRef, useState } from 'react';

export default function GetInTouch() {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600&display=swap');
      `}</style>
      
      <div className="relative min-h-screen bg-white overflow-hidden">
      
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 
                  className="text-5xl md:text-6xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Let's Create Something Amazing Together
                </h1>
                <p 
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  We're always excited to hear about new projects and opportunities. Whether you have a question, want to collaborate, or just want to say hello, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#009999] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-gray-900 text-xl font-semibold mb-1"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Email Us
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>
                      hello@example.com
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>
                      support@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#009999] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-gray-900 text-xl font-semibold mb-1"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Call Us
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>
                      +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#009999] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-gray-900 text-xl font-semibold mb-1"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Visit Us
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>
                      123 Innovation Street
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: "'Lora', serif" }}>
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>

            
            </div>

            {/* Right Side - Form */}
            <div className="backdrop-blur-md bg-gray-50/80 rounded-2xl border border-gray-200 p-8 md:p-10 shadow-2xl">
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send us a Message
              </h2>
              <p 
                className="text-gray-700 mb-8"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Fill out the form below and we'll get back to you shortly.
              </p>

              <div className="space-y-6">
                <div className="relative">
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                    placeholder="John Doe"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#009999] to-[#1a9b94] rounded-full" />
                  )}
                </div>

                <div className="relative">
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                    placeholder="john@example.com"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#009999] to-[#1a9b94] rounded-full" />
                  )}
                </div>

                <div className="relative">
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                    placeholder="How can we help you?"
                  />
                  {focusedField === 'subject' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#009999] to-[#1a9b94] rounded-full" />
                  )}
                </div>

                <div className="relative">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="5"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all duration-300 resize-none"
                    style={{ fontFamily: "'Lora', serif" }}
                    placeholder="Tell us more about your project..."
                  />
                  {focusedField === 'message' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#009999] to-[#1a9b94] rounded-full" />
                  )}
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#009999] hover:bg-[#1a9b94] text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}