import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);

  // Use state to control the fade out animation separately
  const [showContent, setShowContent] = useState(true);
  
  useEffect(() => {
    if (!isLoading) return;
    
    // Initial delay before starting the progress
    setTimeout(() => {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 10;
          if (next >= 100) {
            clearInterval(interval);
            
            // When loading reaches 100%, wait a moment
            setTimeout(() => {
              // First start fading out the content
              setShowContent(false);
              
              // Then complete the loading after the fade out animation
              setTimeout(() => {
                onLoadingComplete();
              }, 800); // This timing should match the exit animation duration
            }, 1000); // Pause at 100% to let user see completion
            
            return 100;
          }
          return next;
        });
      }, 250);

      // Show the tagline after 1 second
      setTimeout(() => {
        setShowText(true);
      }, 800);

      return () => clearInterval(interval);
    }, 500); // Initial delay
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Background video with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <video
              className="absolute inset-0 w-full h-full object-cover scale-105 blur-sm"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_productions_trailer.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Logo animation container */}
          <div className="relative w-64 h-64 mb-8">
            {/* Multiple circular progress indicators for a more dynamic effect */}
            <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100">
              {/* Inner progress circle */}
              <motion.circle
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ 
                  pathLength: progress / 100,
                  opacity: [0.3, 0.8, 0.3],
                  rotate: 360
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut",
                  opacity: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                cx="50"
                cy="50"
                r="35"
                fill="none"
                strokeWidth="1"
                stroke="url(#gradient1)"
                strokeLinecap="round"
                strokeDasharray="220"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              
              {/* Main progress circle */}
              <motion.circle
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="2"
                stroke="url(#gradient2)"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              
              {/* Outer decorative circle */}
              <motion.circle
                initial={{ pathLength: 0.2, opacity: 0.2 }}
                animate={{ 
                  pathLength: [0.2, 0.4, 0.2],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: -360
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                cx="50"
                cy="50"
                r="48"
                fill="none"
                strokeWidth="0.5"
                stroke="url(#gradient3)"
                strokeLinecap="round"
                strokeDasharray="302"
                strokeDashoffset="0"
                transform="rotate(90 50 50)"
              />
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
                
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
                
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Animated logo with glowing effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                opacity: { duration: 1.2 }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center relative">
                {/* Glowing effect behind logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.5, 0.2], 
                    scale: [0.8, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="absolute -inset-4 bg-amber-500/20 blur-xl rounded-full z-0"
                />
                
                {/* Main VIEO text */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative z-10 font-display text-5xl font-bold text-white mb-2"
                  style={{
                    textShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
                  }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">V</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-200">I</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-300">E</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">O</span>
                </motion.div>
                
                {/* PRODUCTIONS text */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative z-10 font-display text-2xl text-amber-400 tracking-widest"
                >
                  PRODUCTIONS
                </motion.div>
                
                {/* Subtle shine effect */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    x: 100
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 skew-x-12"
                  style={{ filter: 'blur(3px)' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Loading text and percentage */}
          <div className="text-center relative z-10">
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white/90 mb-3 italic font-light tracking-wide relative"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0.7],
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -left-5 -top-2 text-amber-400 text-xl"
                  >
                    ✧
                  </motion.span>
                  <span>Transforming Ideas into Iconic Brands</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0.7],
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -right-5 -top-2 text-amber-400 text-xl"
                  >
                    ✧
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Percentage counter with animated border */}
            <div className="relative inline-block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10"
              >
                <div className="px-6 py-1 bg-black/30 backdrop-blur-sm rounded-full border border-amber-500/20">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-amber-400 font-medium tracking-widest"
                  >
                    {Math.round(progress)}%
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Animated glow behind percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.85, 1.05, 0.85]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
                className="absolute inset-0 rounded-full bg-amber-500/10 blur-md -z-10"
              />
            </div>
          </div>

          {/* Animated particles in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-400/20"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.2, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}