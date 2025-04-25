import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { luxuryBrandImages } from '@/lib/images';
import { useEffect } from 'react';
import { Link } from 'wouter';

export default function BrandVisualIdentity() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Brand Visual Identity | VIEO Productions";
  }, []);

  const processSteps = [
    {
      title: "Discovery & Research",
      description: "We start by understanding your business, target audience, and industry to ensure your brand's visual identity connects with the right people.",
      icon: "fa-search"
    },
    {
      title: "Strategy Development",
      description: "We craft a comprehensive brand strategy that outlines positioning, messaging, and the visual direction to guide all creative decisions.",
      icon: "fa-sitemap"
    },
    {
      title: "Design Exploration",
      description: "Our creative team develops multiple design concepts for your brand, exploring different visual languages that align with your brand strategy.",
      icon: "fa-paint-brush"
    },
    {
      title: "Refinement & Finalization",
      description: "We refine the chosen direction based on your feedback, perfecting every detail until your brand's visual identity is exactly right.",
      icon: "fa-sliders-h"
    },
    {
      title: "Implementation & Guidelines",
      description: "We create comprehensive brand guidelines and help implement your new visual identity across all touchpoints for consistency.",
      icon: "fa-book"
    }
  ];

  const portfolioItems = [
    {
      title: "Brand Identity System",
      category: "Corporate Rebrand",
      image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Luxury_17.webp",
    },
    {
      title: "Visual Language Development",
      category: "Startup Brand",
      image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Eco_19.webp",
    },
    {
      title: "Logo & Identity Package",
      category: "Fashion Brand",
      image: "https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-5.1.webp",
    },
    {
      title: "Brand Guidelines",
      category: "Technology Company",
      image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Eco_1.webp",
    },
    {
      title: "Brand Identity Design",
      category: "Luxury Hospitality",
      image: "https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Luxury_16.webp",
    }
  ];

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Background image for fallback */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            {/* Video positioned properly with improved visibility */}
            <div className="absolute inset-0 flex items-center justify-center">
              <video 
                className="absolute w-full h-full object-cover opacity-50"
                autoPlay
                muted
                loop
                playsInline
                poster="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Luxury_16.webp"
              >
                <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Luxury_16.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/60 z-10"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <motion.span 
                  className="inline-block text-amber-400 uppercase tracking-widest text-sm mb-3 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Our Services
                </motion.span>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Brand Visual <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Identity</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  We create distinctive visual identities that build recognition, communicate your brand's values, and establish a powerful presence in the market.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Schedule a Call</span>
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </motion.div>
              </div>
              
              {/* Feature video prominently in the hero section */}
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative rounded-lg overflow-hidden shadow-2xl border border-amber-500/20"
                >
                  <video 
                    className="w-full aspect-video object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    poster="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Luxury_16.webp"
                  >
                    <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Luxury_16.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Subtle overlay to enhance video appearance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white" ref={ref1}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Crafting Visual Systems That Build Recognition</h2>
                <p className="text-gray-600 mb-6">
                  Your brand's visual identity is its most immediate and powerful communication tool. It's the visual language that distinguishes you in a crowded marketplace and creates an emotional connection with your audience.
                </p>
                <p className="text-gray-600 mb-10">
                  At VIEO Productions, we create thoughtful, purposeful visual identities that encapsulate your brand's essence and vision, ensuring every visual element works together to tell your unique story.
                </p>
                <div className="space-y-4">
                  {["Logo Design & Development", "Color System & Typography", "Visual Language Creation", "Brand Guidelines", "Identity Application"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-amber-600 text-sm"></i>
                      </div>
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Luxury_19.webp" 
                    alt="Brand Visual Identity" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-10 -right-5 w-24 h-24 bg-amber-100 rounded-full z-0"></div>
                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-black/30 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="text-amber-400 uppercase tracking-widest text-sm font-medium mb-3 block">Showcase</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                    Brand Visual Identity <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Storytelling</span>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Our visual identity work combines meticulous attention to detail with strategic thinking to create brands that make an impact in today's competitive marketplace.
                  </p>
                  <p className="text-gray-300 mb-8">
                    Watch our showcase to see how we transform concepts into compelling visual identities that resonate with audiences and drive business growth.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                        <i className="fas fa-drafting-compass text-amber-400"></i>
                      </div>
                      <span className="text-white">Strategic Design</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                        <i className="fas fa-palette text-amber-400"></i>
                      </div>
                      <span className="text-white">Visual Storytelling</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center mr-3">
                        <i className="fas fa-bullseye text-amber-400"></i>
                      </div>
                      <span className="text-white">Brand Consistency</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-3/5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-lg overflow-hidden"
                >
                  {/* Video player with shadow and border effect */}
                  <div className="relative rounded-lg overflow-hidden border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                    <video 
                      className="w-full aspect-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      poster="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Luxury_16.webp"
                    >
                      <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_visual_Identity_Luxury_16.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Video controller overlay with play button */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs">
                      <i className="fas fa-play-circle mr-2"></i>
                      <span>Brand Identity Showcase</span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-amber-400/30 rounded-tr-xl"></div>
                  <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-amber-400/30 rounded-bl-xl"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50" ref={ref2}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Our Brand Identity Process</h2>
              <p className="text-gray-600">
                We follow a strategic, collaborative process to develop visual identities that are not only beautiful but strategically sound and built to last.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-5">
                    <i className={`fas ${step.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {/* Connector line (not for the last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-300">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white" ref={ref3}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Recent Brand Identity Projects</h2>
              <p className="text-gray-300">
                Explore some of our latest brand identity work and see how we help businesses establish distinctive visual presences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg h-80 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block text-amber-400 uppercase tracking-wider text-sm mb-2">{item.category}</span>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <div className="h-0.5 w-16 bg-amber-400 mt-4 transition-all duration-300 group-hover:w-24"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-amber-400 text-amber-400 font-medium rounded-sm hover:bg-amber-400 hover:text-black transition-all duration-300"
              >
                <span className="mr-2">View All Projects</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl">
              <div className="md:flex items-center">
                <div className="md:w-1/2 p-12 md:p-16">
                  <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Ready To Start?</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-6">Let's Create Your Brand's Visual Identity</h2>
                  <p className="text-gray-300 mb-8">
                    Schedule a consultation with our team and discover how we can help transform your brand with a compelling visual identity.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Schedule a Call</span>
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <img 
                    src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Brand_Visual_Identity_Eco_1.webp" 
                    alt="Brand Identity Design" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}