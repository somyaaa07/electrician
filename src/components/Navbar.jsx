import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: 0, width: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItemsRef = useRef([]);
  const ballRef = useRef(null);
  const dragStartPos = useRef({ x: 0, ballLeft: 0 });
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  // Update active index based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const index = navItems.findIndex(item => item.href === currentPath);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [location.pathname]);

  useEffect(() => {
    updateBallPosition(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      updateBallPosition(activeIndex);
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  const updateBallPosition = (index) => {
    const item = navItemsRef.current[index];
    if (item) {
      const { offsetLeft, offsetWidth } = item;
      setBallPosition({
        left: offsetLeft + offsetWidth / 2 - 6,
        width: offsetWidth
      });
    }
  };

  const handleClick = (index, href) => {
    if (!isDragging) {
      setActiveIndex(index);
      setIsMobileMenuOpen(false);
      navigate(href);
    }
  };

  const handleMouseDown = (e) => {
    if (window.innerWidth >= 1024) {
      setIsDragging(true);
      dragStartPos.current = {
        x: e.clientX,
        ballLeft: ballPosition.left
      };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStartPos.current.x;
      const newLeft = dragStartPos.current.ballLeft + deltaX;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      navItemsRef.current.forEach((item, index) => {
        if (item) {
          const itemCenter = item.offsetLeft + item.offsetWidth / 2;
          const distance = Math.abs(newLeft + 6 - itemCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });
      
      setBallPosition({
        left: newLeft,
        width: ballPosition.width
      });
      
      if (minDistance < 50) {
        setActiveIndex(closestIndex);
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      updateBallPosition(activeIndex);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, ballPosition, activeIndex]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto py-2 px-2 sm:px-4">
        <div className="relative rounded-full shadow-2xl p-2 sm:p-2"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 252, 251, 0.9) 50%, rgba(224, 249, 247, 0.95) 100%)',
            border: '2px solid rgba(32, 178, 170, 0.3)',
            backdropFilter: 'blur(25px) saturate(200%)',
            WebkitBackdropFilter: 'blur(25px) saturate(200%)'
          }}
        >
          <div className="flex items-center justify-between h-18 sm:h-18 lg:h-18">
            {/* Logo - Fully Responsive */}
            <Link to="/" className="flex items-center gap-2 pl-2 sm:pl-3 flex-shrink-0 bg-[#20B2AA] rounded-full p-1.5 sm:p-2 h-12 w-20 xs:h-14 xs:w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-12 lg:w-32 xl:h-14 xl:w-36">
              <img 
                src="/logo1.png" 
                alt="Logo" 
                className="h-[140px] w-full object-contain"
              />
            </Link>

            {/* Desktop Navigation Items - Shifted right with more spacing */}
            <ul className="hidden lg:flex items-center justify-center gap-6 xl:gap-12 flex-1 ml-12 xl:ml-16">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => (navItemsRef.current[index] = el)}
                >
                  <Link
                    to={item.href}
                    onClick={() => handleClick(index, item.href)}
                    className={`text-gray-800 font-medium text-base xl:text-lg tracking-wide transition-all duration-300 hover:text-[#20B2AA] relative inline-block pb-2 whitespace-nowrap
                      ${activeIndex === index ? 'opacity-100 text-[#20B2AA] font-semibold' : 'opacity-70'}
                    `}
                    style={{
                      fontFamily: '"Outfit", sans-serif'
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Balance Div - Reduced to balance the shift */}
            <div className="hidden lg:block w-8 xl:w-12"></div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/50 transition-colors mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-[#20B2AA] transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-[#20B2AA] transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-[#20B2AA] transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Desktop Draggable Ball */}
          <div
            ref={ballRef}
            onMouseDown={handleMouseDown}
            className="hidden lg:block absolute bottom-4 h-3 w-3 rounded-full cursor-grab active:cursor-grabbing"
            style={{
              left: `${ballPosition.left}px`,
              backgroundColor: '#20B2AA',
              transform: isDragging ? 'translateY(2px) scale(1.2)' : 'translateY(2px)',
              boxShadow: '0 0 20px rgba(32, 178, 170, 0.6), 0 0 40px rgba(32, 178, 170, 0.3), 0 2px 8px rgba(32, 178, 170, 0.4)',
              transition: isDragging ? 'none' : 'left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s ease',
              zIndex: 10
            }}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className="rounded-3xl shadow-2xl p-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 252, 251, 0.9) 50%, rgba(224, 249, 247, 0.95) 100%)',
              border: '2px solid rgba(32, 178, 170, 0.3)',
              backdropFilter: 'blur(25px) saturate(200%)',
              WebkitBackdropFilter: 'blur(25px) saturate(200%)'
            }}
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={() => handleClick(index, item.href)}
                    className={`block px-4 py-3 rounded-2xl text-gray-800 font-medium text-base tracking-wide transition-all duration-300 hover:bg-white/60
                      ${activeIndex === index ? 'bg-white/80 text-[#20B2AA] font-semibold shadow-md' : 'opacity-70'}
                    `}
                    style={{
                      fontFamily: '"Outfit", sans-serif'
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </nav>
  );
}

export default Navbar;