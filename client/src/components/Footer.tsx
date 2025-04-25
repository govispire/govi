import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="py-10 bg-dark text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <a 
              href="mailto:contact@vieo.in" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              contact@vieo.in
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors" 
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors" 
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors" 
              aria-label="Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors" 
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} VIEO Productions. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
