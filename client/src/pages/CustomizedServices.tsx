import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Link } from 'wouter';
import { luxuryBrandImages, commercialPhotographyImages, videoProductionImages, designPortfolioImages } from '@/lib/images';

export default function CustomizedServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Customized Services | VIEO Productions";
  }, []);

  const serviceCategories = [
    {
      title: "Advanced Campaign Development",
      description: "Comprehensive multi-channel campaigns designed to launch products, build awareness, or drive specific business objectives.",
      image: commercialPhotographyImages[2],
      icon: "fa-bullhorn"
    },
    {
      title: "Creative Consulting",
      description: "Strategic guidance and creative direction from our team of industry experts to enhance your internal capabilities.",
      image: commercialPhotographyImages[5],
      icon: "fa-lightbulb"
    },
    {
      title: "Custom Media Production",
      description: "Specialized media creation including aerial photography, VR/360° content, and interactive experiences.",
      image: videoProductionImages[1],
      icon: "fa-camera-retro"
    },
    {
      title: "Experiential Design",
      description: "Physical brand experiences including events, exhibitions, retail spaces and environmental branding.",
      image: designPortfolioImages[0],
      icon: "fa-store"
    }
  ];

  const caseStudies = [
    {
      title: "Luxury Restaurant Launch",
      category: "Integrated Campaign",
      description: "A comprehensive brand launch including visual identity, interior photography, menu design, and social media content strategy.",
      image: luxuryBrandImages[4]
    },
    {
      title: "Fashion Line Seasonal Campaign",
      category: "Campaign Development",
      description: "Seasonal campaign including photography, video content, and AR experiences for both digital and physical brand touchpoints.",
      image: luxuryBrandImages[2]
    },
    {
      title: "Tech Startup Brand Experience",
      category: "Experiential Design",
      description: "Complete brand world creation featuring product photography, launch event design, and interactive digital experiences.",
      image: videoProductionImages[3]
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Consultation",
      description: "We begin with an in-depth consultation to understand your unique challenges, objectives, and brand vision."
    },
    {
      title: "Solution Design",
      description: "Our team creates a tailored proposal with customized solutions designed specifically for your business needs."
    },
    {
      title: "Collaborative Development",
      description: "We work closely with you through an iterative process to refine and perfect your custom creative solution."
    },
    {
      title: "Implementation & Support",
      description: "Our team handles delivery and implementation, providing ongoing support to ensure success."
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
            <video 
              className="absolute w-full h-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
              poster={commercialPhotographyImages[2]}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-visual-artists-working-together-in-a-studio-meeting-42759-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/70"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
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
                Customized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Services</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Tailored creative solutions designed to address your unique business challenges and opportunities with innovative approaches.
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
                  <span className="mr-2">Start a Custom Project</span>
                  <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
              </motion.div>
            </div>
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
                <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Beyond The Standard</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Creative Solutions for Unique Challenges</h2>
                <p className="text-gray-600 mb-6">
                  At VIEO Productions, we understand that some projects require solutions that go beyond standard service offerings. Our customized services are designed to address the unique challenges and opportunities your brand faces.
                </p>
                <p className="text-gray-600 mb-8">
                  We bring together specialized expertise from across our team to create tailored approaches that leverage the right mix of creative disciplines for your specific needs.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      <i className="fas fa-puzzle-piece text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-600 text-sm">Solutions customized to your unique business needs and objectives.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      <i className="fas fa-users text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Expert Teams</h3>
                    <p className="text-gray-600 text-sm">Specialized talent assembled based on your project's specific requirements.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                      <img src={luxuryBrandImages[0]} alt="Custom Service 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                      <img src={commercialPhotographyImages[1]} alt="Custom Service 2" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                      <img src={videoProductionImages[2]} alt="Custom Service 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                      <img src={designPortfolioImages[1]} alt="Custom Service 4" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 border-l-4 border-t-4 border-amber-400 z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 border-r-4 border-b-4 border-amber-400 z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-24 bg-gray-50" ref={ref2}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Our Offerings</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Customized Service Categories</h2>
              <p className="text-gray-600">
                Our customized services span a wide range of creative disciplines, allowing us to create solutions that precisely meet your needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center mr-3">
                          <i className={`fas ${category.icon} text-black`}></i>
                        </div>
                        <h3 className="text-white text-xl font-bold">{category.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <a href="#" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center mt-2">
                      Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">How We Create Custom Solutions</h2>
              <p className="text-gray-300">
                Our collaborative approach ensures we develop solutions that precisely address your needs while aligning with your brand vision.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 rounded-lg p-8 relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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

        {/* Case Studies */}
        <section className="py-24 bg-white" ref={ref3}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Custom Solution Case Studies</h2>
              <p className="text-gray-600">
                Explore how our tailored approaches have helped clients overcome unique challenges and achieve remarkable results.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{study.description}</p>
                    <a href="#" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center mt-auto">
                      View Case Study <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl overflow-hidden shadow-2xl">
              <div className="lg:flex items-stretch">
                <div className="lg:w-3/5 p-10 lg:p-16">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">Let's Create a Solution<br />Tailored to Your Brand</h2>
                  <p className="text-black/80 text-lg mb-8 max-w-xl">
                    Have a unique challenge that requires a custom approach? Our team is ready to collaborate on a solution that perfectly fits your needs.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Schedule a Consultation</span>
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </div>
                <div className="lg:w-2/5 flex items-stretch">
                  <img 
                    src={videoProductionImages[3]} 
                    alt="Custom solutions" 
                    className="w-full h-full object-cover"
                  />
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