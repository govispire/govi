import { motion } from 'framer-motion';
import { luxuryBrandImages } from '@/lib/images';
import { useEffect, useRef } from 'react';
import { Link } from 'wouter';

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
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Hero video and content container */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Foreground video */}
          <motion.div 
            className="w-full lg:w-4/5 mx-auto overflow-hidden rounded-lg shadow-2xl border border-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <video 
              ref={videoRef}
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={luxuryBrandImages[0]}
              controls
            >
              <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_productions_trailer.mp4" type="video/mp4" />
              {/* Fallback image */}
              <img 
                src={luxuryBrandImages[0]} 
                alt="VIEO Productions Trailer"
                className="w-full h-full object-cover"
              />
            </video>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="w-full lg:w-2/5 text-white"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h1 
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">Iconic Brands</span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              We create high-end videos, strategic designs, and compelling brand content that captivate audiences, enhance engagement, and establish a premium, unforgettable presence.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span>Schedule a Call</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link
                href="/contact"  
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <span>Let's Connect</span>
                <i className="fas fa-chevron-right ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Services preview */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link href="/creative-video-solution">
            <div className="bg-white/5 backdrop-blur-sm hover:bg-amber-500/10 px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2 group border border-white/10 hover:border-amber-500/30">
              <i className="fas fa-video text-amber-400 group-hover:text-amber-300"></i>
              <span>Creative Video Solutions</span>
            </div>
          </Link>
          <Link href="/brand-visual-identity">
            <div className="bg-white/5 backdrop-blur-sm hover:bg-amber-500/10 px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2 group border border-white/10 hover:border-amber-500/30">
              <i className="fas fa-palette text-amber-400 group-hover:text-amber-300"></i>
              <span>Brand Visual Identity</span>
            </div>
          </Link>
          <Link href="/commercial-photography">
            <div className="bg-white/5 backdrop-blur-sm hover:bg-amber-500/10 px-6 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2 group border border-white/10 hover:border-amber-500/30">
              <i className="fas fa-camera text-amber-400 group-hover:text-amber-300"></i>
              <span>Commercial Photography</span>
            </div>
          </Link>
        </motion.div>
      </div>
      
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
