import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { Link } from 'wouter';
import { commercialPhotographyImages, videoProductionImages } from '@/lib/images';

export default function StrategicBrandContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Strategic Brand Content | VIEO Productions";
  }, []);

  const contentTypes = [
    {
      title: "Social Media Content",
      description: "Engaging, platform-optimized content designed to build community and drive engagement across all social platforms.",
      icon: "fa-hashtag",
      image: commercialPhotographyImages[3]
    },
    {
      title: "Video Content",
      description: "Compelling video narratives that tell your brand story and engage audiences on a deeper emotional level.",
      icon: "fa-film",
      image: videoProductionImages[1]
    },
    {
      title: "Photography",
      description: "High-quality visual assets that showcase products, people, and your brand story with professional polish.",
      icon: "fa-camera",
      image: commercialPhotographyImages[0]
    },
    {
      title: "Content Strategy",
      description: "Comprehensive content planning that aligns with your business goals and resonates with your target audience.",
      icon: "fa-compass",
      image: commercialPhotographyImages[2]
    }
  ];

  const statsItems = [
    { value: "78%", label: "of consumers prefer getting to know a company through articles rather than ads" },
    { value: "70%", label: "increase in conversion rates with consistent brand presentation across platforms" },
    { value: "6x", label: "higher engagement rates for brands using visual content marketing" },
    { value: "49%", label: "of marketers rate visual marketing as very important to their strategy" }
  ];

  const testimonials = [
    {
      quote: "VIEO's strategic content transformed our social media presence. The engagement metrics have soared, and we're seeing real business results from their approach.",
      author: "Sarah Johnson",
      company: "Fashion Brand Director"
    },
    {
      quote: "Their team took the time to understand our business goals and created a content strategy that perfectly aligned with our vision while resonating with our audience.",
      author: "Mark Reynolds",
      company: "Tech Startup Founder"
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
              className="absolute w-full h-full object-cover opacity-20"
              autoPlay
              muted
              loop
              playsInline
              poster="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Strategic_Brand_Content_hero.webp"
            >
              <source src="https://vieoproductions.com//wp-content//uploads//2025//03//Content-creation-promo.mp4" type="video/mp4" />
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
                Strategic Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Content</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We create purposeful content strategies and compelling brand narratives that connect with your audience, drive engagement, and achieve your business objectives.
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
                  <span className="mr-2">Discuss Your Content Needs</span>
                  <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Types Grid */}
        <section className="py-24 bg-white" ref={ref1}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Content That Connects & Converts</h2>
              <p className="text-gray-600">
                We develop strategic content that not only looks beautiful but drives meaningful business results by connecting with your audience at every touchpoint.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="md:w-2/5 h-60 md:h-auto relative">
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                      <i className={`fas ${type.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <a href="#" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center mt-auto">
                      Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 text-white relative" ref={ref2}>
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={videoProductionImages[0]} 
              alt="Content Strategy Background" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-black/95"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Strategic Content By The Numbers</h2>
              <p className="text-gray-300">
                The right content strategy doesn't just look good—it delivers measurable business results that impact your bottom line.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsItems.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <div className="text-amber-400 text-4xl md:text-5xl font-bold mb-3">{stat.value}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white" ref={ref3}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">A Strategic Approach to Content Creation</h2>
                <p className="text-gray-600 mb-10">
                  We don't just create random content. We develop comprehensive content strategies that align with your business goals and resonate with your target audience.
                </p>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Research & Analysis</h3>
                      <p className="text-gray-600">We start by understanding your audience, industry, competitors, and business objectives to inform our content approach.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Content Strategy Development</h3>
                      <p className="text-gray-600">We craft a comprehensive content plan that outlines topics, formats, platforms, and goals for each piece of content.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Creative Production</h3>
                      <p className="text-gray-600">Our team of content specialists creates high-quality, engaging content that meets your strategic objectives.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold">4</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Distribution & Optimization</h3>
                      <p className="text-gray-600">We help implement your content across channels and continuously optimize based on performance data.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Video Feature */}
                <div className="rounded-lg overflow-hidden shadow-2xl relative aspect-video">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Strategic_Brand_Content_showcase.webp"
                  >
                    <source src="https://vieoproductions.com/wp-content/uploads/2025/03/VIEO_Productions_Strategic_Brand_Content_showcase.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-amber-500 bg-opacity-90 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                      <i className="fas fa-play text-white text-2xl pl-1"></i>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    >
                      <i className="fas fa-quote-left text-amber-400 text-3xl mb-4"></i>
                      <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-500 to-yellow-500 text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Elevate Your Brand's Content?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create a content strategy that builds your brand, engages your audience, and drives real business results.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span className="mr-2">Schedule a Consultation</span>
                <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}