import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "Instagram",
      icon: "fa-instagram",
      url: "#"
    },
    { 
      name: "YouTube",
      icon: "fa-youtube",
      url: "#"
    },
    { 
      name: "Facebook",
      icon: "fa-facebook-f",
      url: "#"
    },
    { 
      name: "LinkedIn",
      icon: "fa-linkedin-in",
      url: "#"
    },
    { 
      name: "Twitter",
      icon: "fa-twitter",
      url: "#"
    }
  ];
  
  const footerNavLinks = [
    { text: "Home", url: "/" },
    { text: "Brand Visual Identity", url: "/brand-visual-identity" },
    { text: "Strategic Brand Content", url: "/strategic-brand-content" },
    { text: "Customized Services", url: "/customized-services" },
    { text: "Contact", url: "/contact" },
    { text: "Privacy Policy", url: "#" },
    { text: "Terms of Service", url: "#" }
  ];
  
  return (
    <motion.footer 
      className="pt-20 pb-10 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white">VIEO Productions</h3>
            <p className="text-gray-400 max-w-xs">
              We create high-end videos, strategic designs, and compelling brand content that captivate audiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <i className={`fab ${link.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-amber-400"></span>
            </h4>
            <ul className="space-y-4">
              {footerNavLinks.map((link, index) => (
                <li key={index}>
                  {link.url.startsWith('/') ? (
                    <Link 
                      href={link.url}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2 text-amber-400"></i>
                      {link.text}
                    </Link>
                  ) : (
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2 text-amber-400"></i>
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-amber-400"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-amber-400"></i>
                <span>123 Creative Avenue, Design District, Mumbai, India</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-amber-400"></i>
                <a 
                  href="mailto:contact@vieo.in" 
                  className="hover:text-amber-400 transition-colors"
                >
                  contact@vieo.in
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-amber-400"></i>
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-amber-400 transition-colors"
                >
                  +91 987 654 3210
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} VIEO Productions. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed with <span className="text-amber-400">♥</span> for exceptional brands
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
