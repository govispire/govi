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

  useEffect(() => {
    if (!isLoading) return;

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowText(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 1500);
          }, 500);
          return 100;
        }
        return next;
      });
    }, 300);

    // Show the tagline after 1 second
    setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
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
            {/* Circular progress indicator */}
            <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100">
              <motion.circle
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="2"
                stroke="url(#gradient)"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>
            </svg>

            {/* Animated logo */}
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
              <div className="text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-display text-4xl font-bold text-white mb-2"
                >
                  VIEO
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-display text-2xl text-amber-400"
                >
                  PRODUCTIONS
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Loading text and percentage */}
          <div className="text-center">
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white/80 mb-2 italic"
                >
                  Transforming Ideas into Iconic Brands
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-amber-400 font-medium"
            >
              {Math.round(progress)}%
            </motion.div>
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