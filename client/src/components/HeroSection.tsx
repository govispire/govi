import { motion } from 'framer-motion';
import { luxuryBrandImages } from '@/lib/images';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Ensure the video plays automatically and loops
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // Fallback to image if video autoplay fails
      });
    }
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        {/* Video background */}
        <video 
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          muted
          loop
          playsInline
          poster={luxuryBrandImages[0]}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-marble-texture-in-close-up-view-in-the-afternoon-42622-large.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src={luxuryBrandImages[0]} 
            alt="Modern luxury interior"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Overlay with gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">Iconic Brands</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We create high-end videos, strategic designs, and compelling brand content that captivate audiences, enhance engagement, and establish a premium, unforgettable presence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-10 py-5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium text-lg rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule a Call<br/>Let's Connect
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="#possibilities" className="inline-flex flex-col items-center group">
          <span className="text-sm mb-2 group-hover:text-amber-300 transition-colors duration-300">Scroll to Explore</span>
          <i className="fas fa-chevron-down animate-bounce text-amber-300"></i>
        </a>
      </motion.div>
    </section>
  );
}
