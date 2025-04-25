import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { luxuryBrandImages, videoProductionImages, commercialPhotographyImages, designPortfolioImages } from '@/lib/images';

const services = [
  {
    title: "Brand Visual Identity",
    description: "Crafting cohesive logos, typography, and color systems for impact",
    image: luxuryBrandImages[1],
    link: "#",
    buttonText: "Explore Now"
  },
  {
    title: "Creative Video Solution",
    description: "Engaging commercials, brand films, and promotional content that tell your story with cinematic excellence.",
    image: videoProductionImages[0],
    link: "#",
    buttonText: "Explore Now"
  },
  {
    title: "Commercial Photography",
    description: "Engaging commercials, brand films, and promotional content that tell your story with cinematic excellence",
    image: commercialPhotographyImages[0],
    link: "#",
    buttonText: "Explore Now"
  },
  {
    title: "Strategic Brand Content",
    description: "Developing engaging digital content for marketing and social media",
    image: commercialPhotographyImages[3],
    link: "#",
    buttonText: "Explore Now"
  },
  {
    title: "Graphic Design",
    description: "Designing powerful print and digital assets for brand presence",
    image: designPortfolioImages[1],
    link: "#contact",
    buttonText: "Enquire Now"
  },
  {
    title: "Customized Services",
    description: "Delivering tailored creative solutions to meet unique brand needs",
    image: commercialPhotographyImages[2],
    link: "#",
    buttonText: "Explore Now"
  }
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white" id="services" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Services We Offer
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden h-96 rounded-sm shadow-lg"
              variants={itemVariants}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale grayscale-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                <h3 className="font-display text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4 text-sm md:text-base">{service.description}</p>
                <a 
                  href={service.link} 
                  className="inline-block px-6 py-2 border border-white hover:bg-white hover:text-dark transition-colors text-sm md:text-base"
                >
                  {service.buttonText}<br/>Let's Go
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
