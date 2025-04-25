import { motion, useAnimation } from 'framer-motion';
import { possibilitiesImages } from '@/lib/images';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function PossibilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const controls = useAnimation();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  // Start animation when section comes into view
  if (inView) {
    controls.start('visible');
  }
  
  const titles = [
    "Luxury Brand Photography",
    "Video Production Excellence",
    "Creative Design Solutions",
    "Premium Photography",
    "Fashion & Lifestyle",
    "Commercial Production",
    "Product Showcase",
    "Brand Storytelling"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white" id="possibilities">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <motion.span 
            className="inline-block text-amber-400 uppercase tracking-widest text-sm mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Unleash Your Creativity
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Imagine The</span><br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">Possibilities</span>
          </h2>
          <motion.p 
            className="text-xl tracking-wider text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Scroll to Uncover the Art of Impact
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {possibilitiesImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="relative aspect-square overflow-hidden group rounded-sm hover:rounded-none transition-all duration-500 shadow-xl"
              variants={itemVariants}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={image} 
                alt={`${titles[index]}`}
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
              />
              
              {/* Hover overlay with title */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-display text-lg md:text-xl font-medium">
                  {titles[index]}
                </h3>
                <div className="h-1 w-10 bg-amber-400 mt-2 transform origin-left transition-all duration-300 group-hover:w-20"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
