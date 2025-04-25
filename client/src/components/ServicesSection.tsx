import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { luxuryBrandImages, videoProductionImages, commercialPhotographyImages, designPortfolioImages } from '@/lib/images';
import { useState } from 'react';

const services = [
  {
    title: "Brand Visual Identity",
    description: "Crafting cohesive logos, typography, and color systems for lasting impact and recognition.",
    image: luxuryBrandImages[1],
    link: "#",
    buttonText: "Explore Now",
    icon: "fa-palette"
  },
  {
    title: "Creative Video Solution",
    description: "Engaging commercials, brand films, and promotional content that tell your story with cinematic excellence.",
    image: videoProductionImages[0],
    link: "#",
    buttonText: "Explore Now",
    icon: "fa-video"
  },
  {
    title: "Commercial Photography",
    description: "High-quality visual assets that showcase your products and services in the best possible light.",
    image: commercialPhotographyImages[0],
    link: "#",
    buttonText: "Explore Now",
    icon: "fa-camera"
  },
  {
    title: "Strategic Brand Content",
    description: "Developing engaging digital content for marketing and social media to build your audience and engagement.",
    image: commercialPhotographyImages[3],
    link: "#",
    buttonText: "Explore Now",
    icon: "fa-bullhorn"
  },
  {
    title: "Graphic Design",
    description: "Designing powerful print and digital assets for consistent and impactful brand presence.",
    image: designPortfolioImages[1],
    link: "#contact",
    buttonText: "Enquire Now",
    icon: "fa-pen-ruler"
  },
  {
    title: "Customized Services",
    description: "Tailored creative solutions to meet your unique brand needs and business objectives.",
    image: commercialPhotographyImages[2],
    link: "#",
    buttonText: "Explore Now",
    icon: "fa-star"
  }
];

export default function ServicesSection() {
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="services" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-amber-600 uppercase tracking-widest text-sm mb-3 font-medium"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            What We Do Best
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="relative">
              Services We Offer
              <motion.span 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-amber-400"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              ></motion.span>
            </span>
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Comprehensive creative solutions tailored to elevate your brand presence
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden h-[450px] rounded-md shadow-2xl"
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img 
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out filter ${hoveredIndex === index ? '' : 'grayscale'}`}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.9 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 text-white">
                {/* Top icon */}
                <div className="text-center mb-4">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400 text-black mb-3"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <i className={`fas ${service.icon} text-2xl`}></i>
                  </motion.div>
                </div>
                
                {/* Bottom content */}
                <div>
                  <motion.div
                    animate={{ 
                      y: hoveredIndex === index ? -20 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="mb-6 text-sm md:text-base text-gray-200">{service.description}</p>
                    <motion.a 
                      href={service.link} 
                      className="inline-block px-8 py-3 bg-amber-400 text-black font-medium text-sm md:text-base rounded-sm shadow-lg hover:shadow-xl transform transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05
                      }}
                    >
                      {service.buttonText}
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
