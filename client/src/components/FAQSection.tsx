import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqItems = [
  {
    question: "What services does Vieo offer?",
    answer: "We provide Commercial Photography, Video Production, Brand Visual Identity, Content Creation, and Graphic Design – helping brands establish a strong, cohesive presence."
  },
  {
    question: "How can VIEO help my business?",
    answer: "We offer end-to-end branding solutions to enhance visibility, improve brand positioning, and drive sales through high-quality visuals and strategic content."
  },
  {
    question: "Do you work with startups and established brands?",
    answer: "Yes! Whether you're launching a new brand or refreshing an existing one, we tailor our services to fit your needs."
  },
  {
    question: "Can I hire VIEO for a single project?",
    answer: "Absolutely! We handle both one-time projects and ongoing brand collaborations."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us, and we'll discuss your needs, goals, and the best approach to elevate your brand."
  }
];

export default function FAQSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="faq" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Have questions? We're here to help! Explore answers about our services, process, and branding solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
