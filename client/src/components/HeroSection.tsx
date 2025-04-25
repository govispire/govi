import { motion } from 'framer-motion';
import { luxuryBrandImages } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={luxuryBrandImages[0]} 
          alt="Modern luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Transforming Ideas into Iconic Brands
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          We create high-end videos, strategic designs, and compelling brand content that captivate audiences, enhance engagement, and establish a premium, unforgettable presence.
        </p>
        <a 
          href="#contact" 
          className="inline-block px-8 py-4 bg-white text-dark font-medium text-lg transition-colors hover:bg-gray-100"
        >
          Schedule a Call<br/>Let's Connect
        </a>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#possibilities" className="inline-flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to Explore</span>
          <i className="fas fa-chevron-down animate-bounce"></i>
        </a>
      </motion.div>
    </section>
  );
}
