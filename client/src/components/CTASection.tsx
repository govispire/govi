import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioShowcase } from '@/lib/images';

export default function CTASection() {
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
    <section className="py-20 bg-white" id="contact" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Looking to craft your brand with us?
          </h2>
          <p className="text-lg mb-8">
            Experience creative solutions that enhance your brand and drive meaningful growth for your business!
          </p>
          <a 
            href="#" 
            className="inline-block px-8 py-4 bg-dark text-white font-medium text-lg transition-colors hover:bg-opacity-90"
          >
            Schedule a Call<br/>Let's Connect
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolioShowcase.map((image, index) => (
            <motion.div 
              key={index} 
              className="aspect-square overflow-hidden"
              variants={itemVariants}
            >
              <img 
                src={image}
                alt={`Portfolio sample ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
