import { motion } from 'framer-motion';
import { possibilitiesImages } from '@/lib/images';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { AnimatedSection, AnimatedElement, AnimatedText } from '@/components/ui/animated-elements';

export default function PossibilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
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
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white" id="possibilities" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <AnimatedSection className="text-center mb-20" variant="fadeInUp">
          <AnimatedElement 
            className="inline-block text-amber-400 uppercase tracking-widest text-sm mb-3"
            variant="fadeIn"
            delay={0.3}
          >
            Unleash Your Creativity
          </AnimatedElement>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <AnimatedText 
              text="Imagine The"
              tag="span"
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              splitBy="word"
              staggerDelay={0.03}
              delay={0.1}
            />
            <br/>
            <AnimatedText 
              text="Possibilities"
              tag="span"
              className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500"
              splitBy="word"
              staggerDelay={0.04}
              delay={0.6}
            />
          </h2>
          
          <AnimatedElement 
            className="text-xl tracking-wider text-gray-300 max-w-2xl mx-auto"
            variant="fadeIn"
            delay={0.9}
          >
            Scroll to Uncover the Art of Impact
          </AnimatedElement>
        </AnimatedSection>
        
        {/* Gallery Grid */}
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6" variant="stagger">
          {possibilitiesImages.map((image, index) => (
            <AnimatedElement 
              key={index} 
              className="relative aspect-square overflow-hidden group rounded-sm hover:rounded-none transition-all duration-500 shadow-xl"
              variant="fadeInUp"
              delay={index * 0.08}
            >
              <div className="h-full w-full">
                <motion.div
                  className="h-full w-full"
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
              </div>
            </AnimatedElement>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
