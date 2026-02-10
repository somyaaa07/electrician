import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: 0, width: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navItemsRef = useRef([]);
  const ballRef = useRef(null);
  const dragStartPos = useRef({ x: 0, ballLeft: 0 });
  const dropdownTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize navItems to prevent re-creation on every render
  const navItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
     
    },
    { 
      name: 'Product', 
      href: '/products',
      dropdown: [
        { name: 'ABB MV Drive Panel', href: '/products/abb-mv-drive-panel' },
        { name: 'ABB VCB Panel', href: '/products/abb-vcb-panel' },
        { name: 'ABB VFD Panel', href: '/products/abb-vfd-panel' },
        { name: 'APFC - AHF Panel', href: '/products/apfc-ahf-panel' },
        { name: 'Draw-Out MCC Panel', href: '/products/draw-out-mcc-panel' },
        { name: 'Integrated EHouse Solutions', href: '/products/integrated-ehouse-solutions' },
        { name: 'MCC - PCC Panel', href: '/products/mcc-pcc-panel' },
        { name: 'PLC Panel - Servo Drive Solution', href: '/products/plc-servo-drive-panel' },
        { name: 'UPS Panel', href: '/products/ups-panel' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ], []);

  // Optimize ball position update with useCallback
  const updateBallPosition = useCallback((index) => {
    const item = navItemsRef.current[index];
    if (item) {
      const { offsetLeft, offsetWidth } = item;
      setBallPosition({
        left: offsetLeft + offsetWidth / 2 - 6,
        width: offsetWidth
      });
    }
  }, []);

  // Update active index based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const index = navItems.findIndex(item => {
      if (item.href === currentPath) return true;
      if (item.dropdown) {
        return item.dropdown.some(sub => sub.href === currentPath);
      }
      return false;
    });
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [location.pathname, navItems]);

  // Update ball position when active index changes
  useEffect(() => {
    updateBallPosition(activeIndex);
  }, [activeIndex, updateBallPosition]);

  // Debounced resize handler for better performance
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateBallPosition(activeIndex);
        if (window.innerWidth >= 1024) {
          setIsMobileMenuOpen(false);
          setOpenDropdown(null);
        }
      }, 150); // Debounce resize events
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [activeIndex, updateBallPosition]);

  const handleClick = useCallback((index, href) => {
    if (!isDragging) {
      setActiveIndex(index);
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
      navigate(href);
    }
  }, [isDragging, navigate]);

  const handleMouseEnter = useCallback((index) => {
    if (window.innerWidth >= 1024) {
      clearTimeout(dropdownTimerRef.current);
      if (navItems[index].dropdown) {
        setOpenDropdown(index);
      } else {
        setOpenDropdown(null);
      }
    }
  }, [navItems]);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth >= 1024) {
      dropdownTimerRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 300);
    }
  }, []);

  const handleDropdownEnter = useCallback(() => {
    clearTimeout(dropdownTimerRef.current);
  }, []);

  const handleMouseDown = useCallback((e) => {
    if (window.innerWidth >= 1024) {
      setIsDragging(true);
      dragStartPos.current = {
        x: e.clientX,
        ballLeft: ballPosition.left
      };
    }
  }, [ballPosition.left]);

  const handleMouseMove = useCallback((e) => {
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
      
      setBallPosition(prev => ({
        ...prev,
        left: newLeft
      }));
      
      if (minDistance < 50) {
        setActiveIndex(closestIndex);
      }
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      updateBallPosition(activeIndex);
    }
  }, [isDragging, activeIndex, updateBallPosition]);

  const toggleMobileDropdown = useCallback((index) => {
    setOpenDropdown(prev => prev === index ? null : index);
  }, []);

  const handleDropdownClick = useCallback((index, href, e) => {
    e.stopPropagation();
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    navigate(href);
  }, [navigate]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-7xl mx-auto py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="relative rounded-full shadow-2xl p-1.5 sm:p-2 md:p-2.5"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 252, 251, 0.9) 50%, rgba(224, 249, 247, 0.95) 100%)',
            border: '2px solid rgba(32, 178, 170, 0.3)',
            backdropFilter: 'blur(25px) saturate(200%)',
            WebkitBackdropFilter: 'blur(25px) saturate(200%)'
          }}
        >
          <div className="flex items-center justify-between h-12 sm:h-12 md:h-12 lg:h-12 xl:h-14 2xl:h-16">
            {/* Logo - Fully Responsive with better scaling */}
            <Link 
              to="/" 
              className="flex items-center justify-center flex-shrink-0  transition-all duration-300 hover:shadow-lg
                ml-1 sm:ml-2 md:ml-3 lg:ml-4
                h-10 w-16
                xs:h-11 xs:w-20
                sm:h-12 sm:w-24
                md:h-14 md:w-28
                lg:h-15 lg:w-28
                xl:h-18 xl:w-32
                2xl:h-15 2xl:w-36
                p-1 sm:p-1.5 md:p-2"
            >
              <img 
                src="/logo14.png" 
                alt="Logo" 
                className="h-full w-full object-contain"
              />
            </Link>

            {/* Desktop Navigation Items - Increased gap between items */}
            <ul className="hidden lg:flex items-center justify-center flex-1 
              gap-6 lg:gap-8 xl:gap-10 2xl:gap-14
              mx-4 lg:mx-6 xl:mx-8 2xl:mx-12">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                      } else {
                        handleClick(index, item.href);
                      }
                    }}
                    className={`font-medium tracking-wide transition-all duration-200 hover:text-[#009999] relative inline-block pb-2 whitespace-nowrap
                      text-sm lg:text-base xl:text-lg 2xl:text-xl
                      ${activeIndex === index ? 'opacity-100 text-[#009999] font-semibold' : 'opacity-70 text-gray-800'}
                    `}
                    style={{
                      fontFamily: '"Outfit", sans-serif'
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg 
                        className="inline-block ml-1 transition-transform duration-200
                          w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-4 xl:h-4"
                        style={{
                          transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Desktop Dropdown Menu - Responsive width */}
                  {item.dropdown && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-out ${
                        openDropdown === index 
                          ? 'top-full opacity-100 visible translate-y-2' 
                          : 'top-[calc(100%-10px)] opacity-0 invisible translate-y-0'
                      }`}
                      style={{
                        zIndex: 100,
                        willChange: openDropdown === index ? 'transform, opacity' : 'auto'
                      }}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="rounded-2xl shadow-2xl overflow-hidden mt-2
                          w-64 lg:w-72 xl:w-80 2xl:w-96"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 252, 251, 0.95) 50%, rgba(224, 249, 247, 0.98) 100%)',
                          border: '2px solid rgba(32, 178, 170, 0.3)',
                          backdropFilter: 'blur(25px) saturate(200%)',
                          WebkitBackdropFilter: 'blur(25px) saturate(200%)'
                        }}
                      >
                        <ul className="py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subItem.href}>
                              <Link
                                to={subItem.href}
                                onClick={(e) => handleDropdownClick(index, subItem.href, e)}
                                className="block font-medium tracking-wide transition-all duration-150 hover:bg-white/60 hover:text-[#009999] hover:pl-7 relative overflow-hidden group
                                  px-4 lg:px-5 xl:px-6
                                  py-2.5 lg:py-3
                                  text-xs lg:text-sm xl:text-base
                                  text-gray-800"
                                style={{
                                  fontFamily: '"Outfit", sans-serif'
                                }}
                              >
                                <span className="relative z-10">{subItem.name}</span>
                                <span className="absolute left-0 top-0 h-full w-1 bg-[#009999] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-150"></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Balance Div - Responsive */}
            <div className="hidden lg:block 
              w-4 lg:w-6 xl:w-8 2xl:w-10
              mr-1 sm:mr-2"></div>

            {/* Mobile Menu Button - Responsive sizing */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center rounded-lg hover:bg-white/50 transition-colors
                w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                mr-1 sm:mr-2"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col justify-between
                w-5 h-4 sm:w-6 sm:h-5">
                <span
                  className={`block bg-[#009999] transition-all duration-300
                    h-0.5
                    ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block bg-[#009999] transition-all duration-300
                    h-0.5
                    ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block bg-[#009999] transition-all duration-300
                    h-0.5
                    ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Desktop Draggable Ball - Responsive sizing */}
          <div
            ref={ballRef}
            onMouseDown={handleMouseDown}
            className="hidden lg:block absolute rounded-full cursor-grab active:cursor-grabbing
              bottom-2.5 lg:bottom-3 xl:bottom-4
              h-2.5 w-2.5 lg:h-3 lg:w-3 xl:h-3 xl:w-3"
            style={{
              left: `${ballPosition.left}px`,
              backgroundColor: '#009999',
              transform: isDragging ? 'translateY(2px) scale(1.2)' : 'translateY(2px)',
              boxShadow: '0 0 20px rgba(32, 178, 170, 0.6), 0 0 40px rgba(32, 178, 170, 0.3), 0 2px 8px rgba(32, 178, 170, 0.4)',
              transition: isDragging ? 'none' : 'left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.2s ease',
              zIndex: 10,
              willChange: 'left, transform'
            }}
          />
        </div>

        {/* Mobile Menu Dropdown - Fully Responsive with Proper Scrolling */}
        <div
          className={`lg:hidden transition-all duration-400 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
          style={{
            overflow: isMobileMenuOpen ? 'visible' : 'hidden'
          }}
        >
          <div
            className="rounded-2xl sm:rounded-3xl shadow-2xl mobile-menu-scroll
              p-2 sm:p-3 md:p-4
              max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 252, 251, 0.9) 50%, rgba(224, 249, 247, 0.95) 100%)',
              border: '2px solid rgba(32, 178, 170, 0.3)',
              backdropFilter: 'blur(25px) saturate(200%)',
              WebkitBackdropFilter: 'blur(25px) saturate(200%)',
              scrollbarWidth: 'thin',
              scrollbarColor: '#009999 rgba(255, 255, 255, 0.3)'
            }}
          >
            <ul className="flex flex-col gap-0.5 sm:gap-1">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <div>
                    {/* Main Nav Item - Responsive text and padding */}
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          if (item.dropdown) {
                            e.preventDefault();
                            toggleMobileDropdown(index);
                          } else {
                            handleClick(index, item.href);
                          }
                        }}
                        className={`flex-1 block rounded-xl sm:rounded-2xl font-medium tracking-wide transition-all duration-200 hover:bg-white/60
                          px-3 sm:px-4 md:px-5
                          py-2 sm:py-2.5 md:py-3
                          text-sm sm:text-base md:text-lg
                          ${activeIndex === index ? 'bg-white/80 text-[#009999] font-semibold shadow-md' : 'opacity-70 text-gray-800'}
                        `}
                        style={{
                          fontFamily: '"Outfit", sans-serif'
                        }}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <button
                          onClick={() => toggleMobileDropdown(index)}
                          className="text-gray-800 hover:text-[#009999] transition-colors
                            px-2 sm:px-3
                            py-2 sm:py-2.5 md:py-3"
                          aria-label={`Toggle ${item.name} dropdown`}
                        >
                          <svg 
                            className="transition-transform duration-200
                              w-4 h-4 sm:w-5 sm:h-5"
                            style={{
                              transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown Submenu - Responsive with Smooth Scroll */}
                    {item.dropdown && (
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          openDropdown === index ? 'max-h-96 opacity-100 mt-1 sm:mt-2' : 'max-h-0 opacity-0 mt-0'
                        }`}
                        style={{
                          overflow: openDropdown === index ? 'visible' : 'hidden'
                        }}
                      >
                        <ul className="space-y-0.5 sm:space-y-1
                          ml-2 sm:ml-3 md:ml-4
                          max-h-80 overflow-y-auto pr-1"
                          style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#009999 rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                to={subItem.href}
                                onClick={(e) => handleDropdownClick(index, subItem.href, e)}
                                className="block rounded-lg sm:rounded-xl font-medium tracking-wide transition-all duration-150 hover:bg-white/60 hover:text-[#009999] relative overflow-hidden group
                                  px-3 sm:px-4
                                  py-2 sm:py-2.5
                                  text-xs sm:text-sm md:text-base
                                  text-gray-700
                                  hover:pl-4 sm:hover:pl-5 md:hover:pl-6"
                                style={{
                                  fontFamily: '"Outfit", sans-serif'
                                }}
                              >
                                <span className="relative z-10">{subItem.name}</span>
                                <span className="absolute left-0 top-0 h-full w-0.5 sm:w-1 bg-[#009999] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-150 rounded-l-lg sm:rounded-l-xl"></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
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
      
      <style>{`
        /* Custom scrollbar for mobile menu */
        .mobile-menu-scroll::-webkit-scrollbar {
          width: 6px;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar-thumb {
          background: #009999;
          border-radius: 10px;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar-thumb:hover {
          background: #4ab3c9;
        }
        
        /* Smooth scrolling */
        .mobile-menu-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;