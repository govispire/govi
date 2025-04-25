import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { luxuryBrandImages, videoProductionImages, commercialPhotographyImages, designPortfolioImages } from '@/lib/images';
import { useState } from 'react';
import { AnimatedSection, AnimatedElement, AnimatedText } from '@/components/ui/animated-elements';

const services = [
  {
    title: "Brand Visual Identity",
    description: "Crafting cohesive logos, typography, and color systems for lasting impact and recognition.",
    image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Men_13.webp",
    link: "/brand-visual-identity",
    buttonText: "Explore Now",
    icon: "fa-palette"
  },
  {
    title: "Creative Video Solution",
    description: "Engaging commercials, brand films, and promotional content that tell your story with cinematic excellence.",
    image: videoProductionImages[0],
    link: "/creative-video-solution",
    buttonText: "Explore Now",
    icon: "fa-video"
  },
  {
    title: "Commercial Photography",
    description: "High-quality visual assets that showcase your products and services in the best possible light.",
    image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Luxury_11-768x768.webp",
    link: "#",
    buttonText: "Explore Now",
    icon: "fa-camera"
  },
  {
    title: "Strategic Brand Content",
    description: "Developing engaging digital content for marketing and social media to build your audience and engagement.",
    image: commercialPhotographyImages[3],
    link: "/strategic-brand-content",
    buttonText: "Explore Now",
    icon: "fa-bullhorn"
  },
  {
    title: "Graphic Design",
    description: "Designing powerful print and digital assets for consistent and impactful brand presence.",
    image: designPortfolioImages[1],
    link: "/contact",
    buttonText: "Enquire Now",
    icon: "fa-pen-ruler"
  },
  {
    title: "Customized Services",
    description: "Tailored creative solutions to meet your unique brand needs and business objectives.",
    image: commercialPhotographyImages[2],
    link: "/customized-services",
    buttonText: "Explore Now",
    icon: "fa-star"
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="services" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <AnimatedSection className="text-center mb-20" variant="fadeInUp">
          <AnimatedElement 
            variant="fadeIn" 
            delay={0.3} 
            className="inline-block text-amber-600 uppercase tracking-widest text-sm mb-3 font-medium"
          >
            What We Do Best
          </AnimatedElement>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="relative">
              <AnimatedText 
                text="Services We Offer" 
                tag="span" 
                splitBy="word" 
                className="inline-block" 
                staggerDelay={0.05}
              />
              <motion.span 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-amber-400"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              ></motion.span>
            </span>
          </h2>
          
          <AnimatedElement 
            variant="fadeIn" 
            delay={0.5} 
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
          >
            Comprehensive creative solutions tailored to elevate your brand presence
          </AnimatedElement>
        </AnimatedSection>
        
        {/* Services Grid */}
        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variant="stagger"
          threshold={0.1}
        >
          {services.map((service, index) => (
            <AnimatedElement 
              key={index}
              variant="fadeInUp"
              delay={index * 0.1}
              className="group relative overflow-hidden h-[450px] rounded-md shadow-2xl"
            >
              <motion.div
                className="h-full w-full"
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
            </AnimatedElement>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
