import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const faqItems = [
  {
    question: "What services does Vieo offer?",
    answer: "We provide Commercial Photography, Video Production, Brand Visual Identity, Content Creation, and Graphic Design – helping brands establish a strong, cohesive presence.",
    icon: "fa-camera-retro"
  },
  {
    question: "How can VIEO help my business?",
    answer: "We offer end-to-end branding solutions to enhance visibility, improve brand positioning, and drive sales through high-quality visuals and strategic content.",
    icon: "fa-chart-line"
  },
  {
    question: "Do you work with startups and established brands?",
    answer: "Yes! Whether you're launching a new brand or refreshing an existing one, we tailor our services to fit your needs.",
    icon: "fa-rocket"
  },
  {
    question: "Can I hire VIEO for a single project?",
    answer: "Absolutely! We handle both one-time projects and ongoing brand collaborations.",
    icon: "fa-clipboard-check"
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us, and we'll discuss your needs, goals, and the best approach to elevate your brand.",
    icon: "fa-handshake"
  }
];

export default function FAQSection() {
  const controls = useAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100" id="faq" ref={ref}>
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
            Got Questions?
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="relative inline-block">
              Frequently Asked
              <motion.span 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-amber-400"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              ></motion.span>
            </span>
            <br />Questions
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Have questions? We're here to help! Explore answers about our services, process, and branding solutions
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-5 bg-white rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <motion.button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleExpand(index)}
                whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.05)" }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mr-4">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-display font-medium pr-8">{item.question}</h3>
                </div>
                <i className={`fas ${expandedIndex === index ? 'fa-minus' : 'fa-plus'} text-amber-500 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}></i>
              </motion.button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pl-22 ml-14 text-gray-600 border-t border-gray-100 pt-3">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
