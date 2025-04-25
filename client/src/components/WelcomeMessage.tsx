import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WelcomeMessage() {
  const [greeting, setGreeting] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  
  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      
      // Set time of day based on current hour
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
        setTimeOfDay('morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good Afternoon');
        setTimeOfDay('afternoon');
      } else if (currentHour >= 17 && currentHour < 21) {
        setGreeting('Good Evening');
        setTimeOfDay('evening');
      } else {
        setGreeting('Hello Night Owl');
        setTimeOfDay('night');
      }
    };
    
    updateGreeting();
    
    // Update greeting every minute to handle edge cases when time changes
    const intervalId = setInterval(updateGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <motion.div 
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-medium mb-2">
        <span className="text-amber-500">{greeting}</span> 
        <span className="hidden sm:inline">, Welcome to VIEO Productions</span>
      </h2>
      <p className="text-gray-600">
        {timeOfDay === 'morning' && "Start your day with creative inspiration"}
        {timeOfDay === 'afternoon' && "Perfect time to explore our premium video solutions"}
        {timeOfDay === 'evening' && "Unwind while discovering what we can create together"}
        {timeOfDay === 'night' && "Creativity never sleeps, neither do we"}
      </p>
    </motion.div>
  );
}