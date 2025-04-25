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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-95 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-display font-bold">
            VIEO Productions
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-amber-600 transition-colors">Home</Link>
            <div className="relative group">
              <span className="font-medium cursor-pointer hover:text-amber-600 transition-colors flex items-center">
                Services <i className="fas fa-chevron-down text-xs ml-1 mt-1"></i>
              </span>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/brand-visual-identity" className="block px-4 py-3 hover:bg-gray-50 text-gray-800">
                  Brand Visual Identity
                </Link>
                <Link href="/creative-video-solution" className="block px-4 py-3 hover:bg-gray-50 text-gray-800">
                  Creative Video Solution
                </Link>
                <Link href="/strategic-brand-content" className="block px-4 py-3 hover:bg-gray-50 text-gray-800">
                  Strategic Brand Content
                </Link>
                <Link href="/customized-services" className="block px-4 py-3 hover:bg-gray-50 text-gray-800">
                  Customized Services
                </Link>
              </div>
            </div>
            <Link href="/contact" className="font-medium hover:text-amber-600 transition-colors">Contact</Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            ref={buttonRef}
            className="md:hidden text-dark focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div 
            ref={menuRef}
            className="md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="py-2 font-medium hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Services Submenu */}
                <div className="py-1">
                  <div className="py-2 font-medium mb-1">Services</div>
                  <div className="pl-4 border-l-2 border-gray-200 ml-2 space-y-3">
                    <Link 
                      href="/brand-visual-identity" 
                      className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Brand Visual Identity
                    </Link>
                    <Link 
                      href="/creative-video-solution" 
                      className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Creative Video Solution
                    </Link>
                    <Link 
                      href="/strategic-brand-content" 
                      className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Strategic Brand Content
                    </Link>
                    <Link 
                      href="/customized-services" 
                      className="py-2 block text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Customized Services
                    </Link>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="py-2 font-medium hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
