import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioShowcase } from '@/lib/images';
import { useState } from 'react';

export default function CTASection() {
  const controls = useAnimation();
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Start animation when section comes into view
  if (inView) {
    controls.start('visible');
  }

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-gray-900 via-black to-black text-white" id="contact" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block text-amber-400 uppercase tracking-widest text-sm mb-3 font-medium"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Ready to Transform Your Brand?
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Looking to craft your brand{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">with us?</span>
            </h2>
            <motion.p 
              className="text-xl mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experience creative solutions that enhance your brand presence and drive meaningful growth for your business!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a 
                href="#" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium text-lg rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span className="mr-3">Schedule a Call</span>
                <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative min-h-[300px] md:min-h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
              >
                {portfolioShowcase.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="relative aspect-square overflow-hidden rounded-md shadow-xl"
                    variants={itemVariants}
                    onHoverStart={() => setActiveImage(index)}
                    onHoverEnd={() => setActiveImage(null)}
                    whileHover={{ 
                      zIndex: 10,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.img 
                      src={image}
                      alt={`Portfolio sample ${index + 1}`}
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: activeImage === index ? 1.1 : 1,
                        filter: activeImage === index ? 'grayscale(0)' : 'grayscale(100%)'
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeImage === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        <div className="h-1 w-10 bg-amber-400 mb-2"></div>
                        <p className="font-medium">Project {index + 1}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-4 border-b-4 border-amber-400 z-0"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 border-l-4 border-t-4 border-amber-400 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
