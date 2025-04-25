import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    isSubmitting: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success toast
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you shortly.",
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        isSubmitting: false
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const services = [
    { value: "", label: "Select a Service" },
    { value: "brand-visual-identity", label: "Brand Visual Identity" },
    { value: "creative-video-solution", label: "Creative Video Solution" },
    { value: "commercial-photography", label: "Commercial Photography" },
    { value: "strategic-brand-content", label: "Strategic Brand Content" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "customized-services", label: "Customized Services" }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span 
                className="inline-block text-amber-400 uppercase tracking-widest text-sm mb-3 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Get In Touch
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Conversation</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Ready to elevate your brand? We're here to transform your ideas into compelling visual stories.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-display font-bold mb-6">How to Reach Us</h2>
                  <p className="text-gray-600 mb-10">
                    We'd love to hear from you. Get in touch with our team and let's create something amazing together.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mr-4">
                        <i className="fas fa-map-marker-alt text-amber-600"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                        <p className="text-gray-500">123 Creative Avenue, Design District, Mumbai, India</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mr-4">
                        <i className="fas fa-envelope text-amber-600"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-gray-500">
                          <a href="mailto:contact@vieo.in" className="hover:text-amber-600 transition-colors">
                            contact@vieo.in
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mr-4">
                        <i className="fas fa-phone-alt text-amber-600"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-500">
                          <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">
                            +91 987 654 3210
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-200 hover:bg-amber-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-200 hover:bg-amber-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-200 hover:bg-amber-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-200 hover:bg-amber-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
                  <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="johndoe@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        placeholder="Tell us about your project..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formState.isSubmitting}
                        className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-70"
                      >
                        {formState.isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Map Section (Placeholder) */}
        <section className="h-96 relative">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map-marker-alt text-4xl text-amber-500 mb-3"></i>
              <h3 className="text-xl font-medium">Google Maps Integration</h3>
              <p className="text-gray-500">Map would be embedded here in a production environment</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}