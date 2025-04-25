import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { commercialPhotographyImages, productPhotographyImages } from '@/lib/images';
import { AnimatedSection, AnimatedElement, AnimatedText } from '@/components/ui/animated-elements';

export default function CommercialPhotography() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Commercial Photography | VIEO Productions";
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const photographyServices = [
    {
      title: "Product Photography",
      description: "High-quality, detailed product images that showcase features, textures, and benefits to maximize conversion rates.",
      icon: "fa-box-open",
      image: productPhotographyImages[0]
    },
    {
      title: "Fashion & Portrait",
      description: "Compelling fashion and portrait photography that captures personality, style, and emotion with artistic precision.",
      icon: "fa-tshirt",
      image: commercialPhotographyImages[3]
    },
    {
      title: "Food Photography",
      description: "Appetizing, styled food imagery that highlights culinary creations with perfect lighting and composition.",
      icon: "fa-utensils",
      image: commercialPhotographyImages[1]
    },
    {
      title: "Interior & Architecture",
      description: "Architectural and interior photography that showcases spaces with proper perspective and lighting techniques.",
      icon: "fa-building",
      image: commercialPhotographyImages[2]
    },
    {
      title: "Jewelry & Accessories",
      description: "Precision macro photography for jewelry and accessories that captures fine details and craftsmanship.",
      icon: "fa-gem",
      image: productPhotographyImages[1]
    },
    {
      title: "Corporate Portraiture",
      description: "Professional headshots and team portraits that convey confidence and approachability for your business.",
      icon: "fa-user-tie",
      image: commercialPhotographyImages[0]
    }
  ];

  const processSteps = [
    {
      title: "Concept & Planning",
      description: "We start by understanding your needs, objectives, and preferred visual style to create a tailored photography plan."
    },
    {
      title: "Studio Setup",
      description: "Our professional team sets up lighting, backgrounds, and props to create the perfect environment for your shoot."
    },
    {
      title: "Production Day",
      description: "Expert photographers capture multiple shots and variations to ensure we get the perfect images for your needs."
    },
    {
      title: "Post-Production",
      description: "Skilled editors enhance each image with color correction, retouching, and composition adjustments."
    },
    {
      title: "Delivery",
      description: "Final images delivered in various formats optimized for your specific needs, from web to print applications."
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
              className="absolute w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
              poster={commercialPhotographyImages[0]}
            >
              <source src="https://vieoproductions.com/wp-content/uploads/2025/03/Showreel-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <AnimatedSection className="max-w-3xl text-white" variant="fadeInUp">
              <AnimatedElement
                className="inline-block text-amber-400 uppercase tracking-widest text-sm mb-3 font-medium"
                variant="fadeIn"
                delay={0.3}
              >
                Our Services
              </AnimatedElement>
              
              <AnimatedElement variant="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Commercial <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Photography</span>
                </h1>
              </AnimatedElement>
              
              <AnimatedElement
                className="text-xl text-gray-300 mb-8"
                variant="fadeIn"
                delay={0.5}
              >
                We create stunning visual assets that showcase your products, people, and spaces with professional excellence and artistic vision.
              </AnimatedElement>
              
              <AnimatedElement
                variant="fadeInUp"
                delay={0.7}
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
                  View Showcase
                </button>
              </AnimatedElement>
            </AnimatedSection>
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
              <AnimatedSection
                variant="fadeInLeft"
                threshold={0.1}
              >
                <AnimatedElement className="text-amber-600 uppercase tracking-widest text-sm font-medium" variant="fadeIn" delay={0.1}>
                  Our Approach
                </AnimatedElement>
                
                <AnimatedElement variant="fadeInUp" delay={0.2}>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                    Capturing Perfection Through the Lens
                  </h2>
                </AnimatedElement>
                
                <AnimatedElement variant="fadeIn" delay={0.3} className="text-gray-600 mb-6">
                  <p>
                    At VIEO Productions, we believe that exceptional photography is about more than just technical skill—it's about understanding your brand, your products, and your vision to create images that truly connect with your audience.
                  </p>
                </AnimatedElement>
                
                <AnimatedElement variant="fadeIn" delay={0.4} className="text-gray-600 mb-8">
                  <p>
                    Whether you need product photography that drives conversions, corporate portraits that build trust, or interior photography that showcases your spaces, our team combines technical expertise with creative vision to deliver outstanding results.
                  </p>
                </AnimatedElement>
                
                <AnimatedSection variant="stagger" className="grid grid-cols-2 gap-6" threshold={0.2}>
                  <AnimatedElement variant="fadeInUp" delay={0.1} className="bg-gray-50 p-5 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      <i className="fas fa-camera-retro text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Premium Equipment</h3>
                    <p className="text-gray-600 text-sm">State-of-the-art cameras, lighting, and studio facilities for exceptional image quality.</p>
                  </AnimatedElement>
                  
                  <AnimatedElement variant="fadeInUp" delay={0.2} className="bg-gray-50 p-5 rounded-lg">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      <i className="fas fa-eye text-xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Artistic Direction</h3>
                    <p className="text-gray-600 text-sm">Creative expertise that brings your brand vision to life through compelling imagery.</p>
                  </AnimatedElement>
                </AnimatedSection>
              </AnimatedSection>
              
              <AnimatedSection
                variant="fadeInRight"
                delay={0.3}
                threshold={0.1}
              >
                <div className="relative">
                  <img 
                    src="https://vieoproductions.com/wp-content/uploads/2025/03/commercial-photography-fields-2-scaled.webp" 
                    alt="Commercial Photography" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full z-0 opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-100 rounded-full z-0"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gray-50" ref={ref2}>
          <div className="container mx-auto px-4">
            <AnimatedSection 
              className="text-center max-w-3xl mx-auto mb-16"
              variant="fadeInUp"
              threshold={0.1}
            >
              <AnimatedElement className="text-amber-600 uppercase tracking-widest text-sm font-medium" variant="fadeIn" delay={0.1}>
                Our Expertise
              </AnimatedElement>
              
              <AnimatedElement variant="fadeInUp" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Photography Services
                </h2>
              </AnimatedElement>
              
              <AnimatedElement variant="fadeIn" delay={0.3} className="text-gray-600">
                <p>
                  We offer a comprehensive range of commercial photography services tailored to meet your specific business needs and creative vision.
                </p>
              </AnimatedElement>
            </AnimatedSection>
            
            <AnimatedSection 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variant="stagger"
              threshold={0.1}
            >
              {photographyServices.map((service, index) => (
                <AnimatedElement 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                  variant="fadeInUp"
                  delay={index * 0.1}
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
                    <motion.a 
                      href="#" 
                      className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center mt-auto"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </motion.a>
                  </div>
                </AnimatedElement>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Product Photography Feature Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white" ref={ref3}>
          <div className="container mx-auto px-4">
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" variant="fadeIn" threshold={0.1}>
              <AnimatedElement variant="fadeInLeft" delay={0.2} className="order-2 lg:order-1">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src={productPhotographyImages[0]} 
                      alt="Product Photography" 
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <img 
                      src={productPhotographyImages[1]} 
                      alt="Product Photography Detail" 
                      className="w-full h-auto rounded-lg shadow-xl mt-8"
                    />
                    <img 
                      src={productPhotographyImages[2]} 
                      alt="Product Composition" 
                      className="w-full h-auto rounded-lg shadow-xl col-span-2"
                    />
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement variant="fadeInRight" delay={0.2} className="order-1 lg:order-2">
                <AnimatedText text="Product Photography" tag="h2" className="text-3xl md:text-4xl font-display font-bold mb-6" splitBy="word" />
                
                <p className="text-gray-300 mb-6">
                  Our product photography service captures your products in their best light, showcasing details, textures, and features that drive consumer desire and purchase decisions.
                </p>
                
                <p className="text-gray-300 mb-8">
                  From e-commerce listings that convert to catalog images that inspire, we create product visuals that elevate your brand and increase sales.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "White background e-commerce photography",
                    "Lifestyle and contextual product shots",
                    "360° product photography",
                    "Detail and macro photography",
                    "Product grouping and arrangement",
                    "Custom background and styling options"
                  ].map((item, index) => (
                    <AnimatedElement key={index} variant="fadeInUp" delay={index * 0.1 + 0.3} className="flex items-start">
                      <i className="fas fa-check text-amber-400 mt-1 mr-3"></i>
                      <span>{item}</span>
                    </AnimatedElement>
                  ))}
                </ul>
                
                <AnimatedElement variant="fadeInUp" delay={0.7} className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Discuss Your Project</span>
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </AnimatedElement>
              </AnimatedElement>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection 
              className="text-center max-w-3xl mx-auto mb-16"
              variant="fadeInUp"
              threshold={0.1}
            >
              <AnimatedElement className="text-amber-600 uppercase tracking-widest text-sm font-medium" variant="fadeIn" delay={0.1}>
                Our Process
              </AnimatedElement>
              
              <AnimatedElement variant="fadeInUp" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  How We Create Perfect Shots
                </h2>
              </AnimatedElement>
              
              <AnimatedElement variant="fadeIn" delay={0.3} className="text-gray-600">
                <p>
                  Our streamlined photography process ensures exceptional results with every project, from initial concept to final image delivery.
                </p>
              </AnimatedElement>
            </AnimatedSection>
            
            <AnimatedSection className="relative" variant="stagger" threshold={0.1}>
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <AnimatedElement 
                    key={index}
                    className="bg-gray-50 rounded-lg p-8 shadow-lg relative"
                    variant="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center text-xl font-bold mb-6">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    {/* Connector for desktop (hide on mobile) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <i className="fas fa-long-arrow-alt-right text-amber-400 text-2xl"></i>
                      </div>
                    )}
                  </AnimatedElement>
                ))}
              </div>
              
              {/* Background connector line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-amber-400/30 transform -translate-y-1/2 z-0"></div>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection 
              className="text-center max-w-3xl mx-auto mb-16"
              variant="fadeInUp"
              threshold={0.1}
            >
              <AnimatedElement className="text-amber-600 uppercase tracking-widest text-sm font-medium" variant="fadeIn" delay={0.1}>
                Our Portfolio
              </AnimatedElement>
              
              <AnimatedElement variant="fadeInUp" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Recent Photography Projects
                </h2>
              </AnimatedElement>
              
              <AnimatedElement variant="fadeIn" delay={0.3} className="text-gray-600">
                <p>
                  Explore a selection of our recent commercial photography work across various industries and project types.
                </p>
              </AnimatedElement>
            </AnimatedSection>
            
            <AnimatedSection className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" variant="stagger" threshold={0.05}>
              {[...commercialPhotographyImages, ...productPhotographyImages].slice(0, 8).map((image, index) => (
                <AnimatedElement 
                  key={index}
                  className="relative overflow-hidden aspect-square group"
                  variant="fadeIn"
                  delay={index * 0.05}
                >
                  <img 
                    src={image} 
                    alt={`Photography Portfolio ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }} 
                      className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center"
                    >
                      <i className="fas fa-search-plus text-black"></i>
                    </motion.div>
                  </div>
                </AnimatedElement>
              ))}
            </AnimatedSection>
            
            <AnimatedElement variant="fadeInUp" delay={0.4} className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-600 font-medium rounded-sm hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                <span className="mr-2">View All Projects</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </AnimatedElement>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl overflow-hidden shadow-2xl">
              <div className="lg:flex items-stretch">
                <div className="lg:w-3/5 p-10 lg:p-16">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6">Ready to Elevate<br />Your Visual Assets?</h2>
                  <p className="text-black/80 text-lg mb-8 max-w-xl">
                    Contact our team today to discuss your commercial photography needs and discover how we can help showcase your products, people, and brand with professional excellence.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span className="mr-2">Start Your Photography Project</span>
                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </div>
                <div className="lg:w-2/5 flex items-stretch">
                  <img 
                    src={commercialPhotographyImages[4]} 
                    alt="Commercial Photography" 
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