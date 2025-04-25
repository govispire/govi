import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { videoProductionImages } from '@/lib/images';

export default function CreativeVideoSolution() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Creative Video Solution | VIEO Productions";
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const videoServices = [
    {
      title: "Corporate Videos",
      description: "Informative and engaging videos that highlight your company's values, products, or services for both internal and external audiences.",
      icon: "fa-building",
      image: videoProductionImages[0]
    },
    {
      title: "Brand Films",
      description: "Cinematic storytelling that captures the essence of your brand's mission, vision, and values in a compelling narrative.",
      icon: "fa-film",
      image: videoProductionImages[1]
    },
    {
      title: "Product Demonstrations",
      description: "Showcase your products in action with clear, informative, and visually appealing demonstrations that highlight key features and benefits.",
      icon: "fa-box-open",
      image: videoProductionImages[2]
    },
    {
      title: "Event Coverage",
      description: "Professional documentation of your events, from conferences and launches to corporate gatherings, capturing the key moments and atmosphere.",
      icon: "fa-calendar-check",
      image: videoProductionImages[3]
    },
    {
      title: "Testimonial Videos",
      description: "Authentic customer or employee testimonials that build trust and credibility through real stories and experiences.",
      icon: "fa-comment-dots",
      image: videoProductionImages[4]
    },
    {
      title: "Social Media Content",
      description: "Short-form, engaging video content optimized for various social platforms to drive engagement and increase your digital presence.",
      icon: "fa-share-alt",
      image: videoProductionImages[5]
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Concept",
      description: "We start by understanding your brand, objectives, and target audience to develop a strategic concept for your video content."
    },
    {
      title: "Pre-Production",
      description: "Careful planning of every detail including scriptwriting, storyboarding, location scouting, casting, and scheduling."
    },
    {
      title: "Production",
      description: "High-quality filming with professional equipment, experienced crew, and meticulous attention to lighting, sound, and direction."
    },
    {
      title: "Post-Production",
      description: "Expert editing, color grading, sound design, music selection, and visual effects to create a polished final product."
    },
    {
      title: "Distribution Strategy",
      description: "Strategic guidance on how to effectively distribute and promote your video content across various platforms."
    }
  ];

  // Animation hooks
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
        {/* Hero Section with Full-Screen Video Background */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              className="absolute w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={videoProductionImages[1]}
            >
              <source src="https://vieoproductions.com/wp-content/uploads/2025/03/Creative-Video-solutions-Final-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="max-w-3xl text-white">
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
                Creative Video <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Solutions</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We create cinematic video content that captures your brand's essence, engages your audience, and delivers your message with impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <span className="mr-2">Start Your Project</span>
                  <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
                <button
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                    }
                  }}
                >
                  <i className="fas fa-play mr-2"></i>
                  Play Showreel
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce">
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white" ref={ref1}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Storytelling Through Cinematic Video</h2>
                <p className="text-gray-600 mb-6">
                  At VIEO Productions, we believe in the power of video to connect, engage, and inspire. Our creative video solutions combine technical excellence with strategic thinking to create content that doesn't just look beautiful but drives real results.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you're looking to launch a product, share your brand story, or engage your audience on social media, our team brings the perfect blend of creativity, technical skill, and strategic insight to every project.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      <i className="fas fa-trophy text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Award-Winning</h3>
                    <p className="text-gray-600 text-sm">Our team has received recognition for creative excellence in video production.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      <i className="fas fa-video text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Full-Service</h3>
                    <p className="text-gray-600 text-sm">From concept to delivery, we handle every aspect of video production.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <video 
                    className="w-full aspect-video object-cover"
                    controls
                    poster={videoProductionImages[2]}
                  >
                    <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIDEO-Web-1.mp4" type="video/mp4" />
                  </video>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full z-0 opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-100 rounded-full z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gray-50" ref={ref2}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Video Solutions For Every Need</h2>
              <p className="text-gray-600">
                We offer a comprehensive range of video production services designed to meet your specific business objectives and creative needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3">
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <a href="#" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center mt-auto">
                      Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white" ref={ref3}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">How We Create Compelling Video Content</h2>
              <p className="text-gray-300">
                Our comprehensive process ensures every project is executed with precision, creativity, and strategic focus to achieve your objectives.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 rounded-lg p-8 relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center text-xl font-bold mb-6">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                    
                    {/* Connector for desktop (hide on mobile) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <i className="fas fa-long-arrow-alt-right text-amber-400 text-2xl"></i>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Background connector line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-amber-400/30 transform -translate-y-1/2 z-0"></div>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Featured Video Projects</h2>
              <p className="text-gray-600">
                Explore some of our recent video productions across various industries and project types.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative rounded-lg overflow-hidden aspect-video shadow-lg cursor-pointer">
                <img 
                  src={videoProductionImages[0]} 
                  alt="Corporate Brand Film" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                    <h3 className="text-white text-xl font-bold">Corporate Brand Film</h3>
                    <p className="text-gray-300 mt-2">Luxury Hospitality Brand</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden aspect-video shadow-lg cursor-pointer">
                <img 
                  src={videoProductionImages[1]} 
                  alt="Product Launch Video" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                    <h3 className="text-white text-xl font-bold">Product Launch Video</h3>
                    <p className="text-gray-300 mt-2">Tech Startup</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden aspect-video shadow-lg cursor-pointer">
                <img 
                  src={videoProductionImages[2]} 
                  alt="Social Media Campaign" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                    <h3 className="text-white text-xl font-bold">Social Media Campaign</h3>
                    <p className="text-gray-300 mt-2">Fashion Retailer</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden aspect-video shadow-lg cursor-pointer">
                <img 
                  src={videoProductionImages[3]} 
                  alt="Event Highlight Video" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                    <h3 className="text-white text-xl font-bold">Event Highlight Video</h3>
                    <p className="text-gray-300 mt-2">Corporate Conference</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden aspect-video shadow-lg cursor-pointer">
                <img 
                  src={videoProductionImages[4]} 
                  alt="Testimonial Series" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                    <h3 className="text-white text-xl font-bold">Testimonial Series</h3>
                    <p className="text-gray-300 mt-2">Educational Institution</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden aspect-video shadow-lg cursor-pointer">
                <img 
                  src={videoProductionImages[5]} 
                  alt="Documentary" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                    <h3 className="text-white text-xl font-bold">Documentary</h3>
                    <p className="text-gray-300 mt-2">Sustainable Business Initiative</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-600 font-medium rounded-sm hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                <span className="mr-2">View All Projects</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl">
              <div className="md:flex items-stretch">
                <div className="md:w-1/2 p-12 md:p-16">
                  <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Ready To Start?</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-6">Let's Create Your Next Video Project</h2>
                  <p className="text-gray-300 mb-8">
                    Whether you have a specific project in mind or need help developing your video strategy, our team is ready to bring your vision to life.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Schedule a Consultation</span>
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </div>
                <div className="md:w-1/2 relative h-60 md:h-auto">
                  <img 
                    src={videoProductionImages[4]} 
                    alt="Video Production" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-amber-500 bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                      <i className="fas fa-play text-white text-2xl"></i>
                    </div>
                  </div>
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