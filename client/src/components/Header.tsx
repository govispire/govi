import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target as Node) && 
      buttonRef.current && 
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-95 shadow-sm text-gray-900' : 'bg-black bg-opacity-80 text-white'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className={`bg-white rounded-md px-2 py-1 ${scrolled ? '' : 'bg-opacity-90'}`}>
              <img 
                src="https://vieo.in/wp-content/uploads/2024/08/vieo-blue-logo.svg" 
                alt="VIEO Productions" 
                className="h-10"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <motion.div 
                className="font-medium text-current relative overflow-hidden px-1"
                whileHover={{ color: '#d97706' }} // amber-600
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Home</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <motion.div 
                className="font-medium cursor-pointer flex items-center relative overflow-hidden px-1"
                whileHover={{ color: '#d97706' }} // amber-600
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Services</span>
                <motion.span 
                  className="ml-1 mt-1 inline-flex"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-down text-xs"></i>
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link href="/brand-visual-identity">
                    <motion.div
                      className="block px-4 py-3 text-gray-800 hover:bg-amber-50 border-l-0 border-transparent"
                      whileHover={{ 
                        backgroundColor: '#FEF3C7', 
                        color: '#D97706',
                        paddingLeft: '24px',
                        borderLeftWidth: '4px',
                        borderColor: '#F59E0B'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-paint-brush mr-2 text-amber-500 opacity-0 group-hover:opacity-100"></i>
                        Brand Visual Identity
                      </span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/creative-video-solution">
                    <motion.div
                      className="block px-4 py-3 text-gray-800 hover:bg-amber-50 border-l-0 border-transparent"
                      whileHover={{ 
                        backgroundColor: '#FEF3C7', 
                        color: '#D97706',
                        paddingLeft: '24px',
                        borderLeftWidth: '4px',
                        borderColor: '#F59E0B'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-video mr-2 text-amber-500 opacity-0 group-hover:opacity-100"></i>
                        Creative Video Solution
                      </span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/strategic-brand-content">
                    <motion.div
                      className="block px-4 py-3 text-gray-800 hover:bg-amber-50 border-l-0 border-transparent"
                      whileHover={{ 
                        backgroundColor: '#FEF3C7', 
                        color: '#D97706',
                        paddingLeft: '24px',
                        borderLeftWidth: '4px',
                        borderColor: '#F59E0B'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-bullseye mr-2 text-amber-500 opacity-0 group-hover:opacity-100"></i>
                        Strategic Brand Content
                      </span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/customized-services">
                    <motion.div
                      className="block px-4 py-3 text-gray-800 hover:bg-amber-50 border-l-0 border-transparent"
                      whileHover={{ 
                        backgroundColor: '#FEF3C7', 
                        color: '#D97706',
                        paddingLeft: '24px',
                        borderLeftWidth: '4px',
                        borderColor: '#F59E0B'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-cogs mr-2 text-amber-500 opacity-0 group-hover:opacity-100"></i>
                        Customized Services
                      </span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/commercial-photography">
                    <motion.div
                      className="block px-4 py-3 text-gray-800 hover:bg-amber-50 border-l-0 border-transparent"
                      whileHover={{ 
                        backgroundColor: '#FEF3C7', 
                        color: '#D97706',
                        paddingLeft: '24px',
                        borderLeftWidth: '4px',
                        borderColor: '#F59E0B'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex items-center">
                        <i className="fas fa-camera mr-2 text-amber-500 opacity-0 group-hover:opacity-100"></i>
                        Commercial Photography
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
            
            <Link href="/contact">
              <motion.div 
                className="font-medium text-current relative overflow-hidden px-1"
                whileHover={{ color: '#d97706' }} // amber-600
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Contact</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-amber-500 w-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            ref={buttonRef}
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Overlay */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <>
            {/* Background overlay */}
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div 
              ref={menuRef}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl z-50 md:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <div className="bg-white rounded-md px-2 py-1">
                    <img 
                      src="https://vieo.in/wp-content/uploads/2024/08/vieo-blue-logo.svg" 
                      alt="VIEO Productions" 
                      className="h-8"
                    />
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="py-3 px-2 font-medium text-lg hover:text-amber-600 hover:pl-4 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className="fas fa-home mr-3 text-amber-500"></i>
                      Home
                    </motion.span>
                  </Link>
                  
                  {/* Services Submenu */}
                  <div className="py-2">
                    <div className="py-2 font-medium mb-2 text-lg flex items-center border-b border-gray-100 pb-2">
                      <i className="fas fa-th-large mr-3 text-amber-500"></i>
                      Services
                    </div>
                    <div className="pl-6 space-y-4 mt-3">
                      <Link 
                        href="/brand-visual-identity" 
                        className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <i className="fas fa-paint-brush mr-2 opacity-70"></i>
                          Brand Visual Identity
                        </motion.span>
                      </Link>
                      <Link 
                        href="/creative-video-solution" 
                        className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <i className="fas fa-video mr-2 opacity-70"></i>
                          Creative Video Solution
                        </motion.span>
                      </Link>
                      <Link 
                        href="/strategic-brand-content" 
                        className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <i className="fas fa-bullseye mr-2 opacity-70"></i>
                          Strategic Brand Content
                        </motion.span>
                      </Link>
                      <Link 
                        href="/customized-services" 
                        className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <i className="fas fa-cogs mr-2 opacity-70"></i>
                          Customized Services
                        </motion.span>
                      </Link>
                      <Link 
                        href="/commercial-photography" 
                        className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <i className="fas fa-camera mr-2 opacity-70"></i>
                          Commercial Photography
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="py-3 px-2 font-medium text-lg hover:text-amber-600 hover:pl-4 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className="fas fa-envelope mr-3 text-amber-500"></i>
                      Contact
                    </motion.span>
                  </Link>
                </nav>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
