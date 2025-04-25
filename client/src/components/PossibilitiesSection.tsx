import { motion } from 'framer-motion';
import { possibilitiesImages } from '@/lib/images';
import { useInView } from 'react-intersection-observer';

export default function PossibilitiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 bg-gray-50" id="possibilities">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Imagine The<br/>Possibilities
          </h2>
          <p className="text-lg tracking-wider">
            Scroll to Uncover the Art of Impact
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {possibilitiesImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="aspect-square overflow-hidden group"
              variants={itemVariants}
            >
              <img 
                src={image} 
                alt={`Creative showcase image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 grayscale grayscale-transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
