import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Use spring animation for smoother progress
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  // Transform for the dot's X position
  const xRange = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const [isVisible, setIsVisible] = useState(false);

  // Only show the progress bar after scrolling down a bit
  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    // Initial check
    checkScroll();
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
      {/* Container for positioning context */}
      <div className="relative w-full">
        {/* Main progress bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left shadow-md"
          style={{ scaleX }}
        />
        
        {/* Subtle glow effect */}
        <motion.div
          className="h-1 bg-amber-300 origin-left blur-sm absolute top-0 left-0 right-0"
          style={{ 
            scaleX,
            opacity: 0.6,
          }}
        />
        
        {/* Progress indicator dot */}
        <motion.div 
          className="absolute top-0 h-3 w-3 rounded-full bg-amber-500 shadow-lg transform -translate-y-1"
          style={{
            left: xRange
          }}
        />
      </div>
    </div>
  );
}