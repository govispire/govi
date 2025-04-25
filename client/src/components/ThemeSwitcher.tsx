import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEMES } from './ThemeContext';
import { 
  Palette, 
  Moon, 
  Sun, 
  Check, 
  ChevronDown, 
  ChevronUp,
} from 'lucide-react';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  const themeOptions = Object.keys(THEMES);

  return (
    <div className="fixed z-50 bottom-8 right-8">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-48 mb-2"
            >
              <div className="flex flex-col space-y-2">
                <div className="pb-2 mb-2 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      {isDarkMode ? (
                        <Sun className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-300" />
                      ) : (
                        <Moon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-300" />
                      )}
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                      </span>
                    </div>
                  </button>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Color Theme
                  </p>
                  {themeOptions.map((themeOption) => (
                    <button
                      key={themeOption}
                      onClick={() => setTheme(themeOption)}
                      className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        theme === themeOption ? 'bg-gray-100 dark:bg-gray-700' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <div 
                          className={`w-4 h-4 rounded-full mr-2 bg-gradient-to-r from-${themeOption}-400 to-${THEMES[themeOption as keyof typeof THEMES].secondary}-500`} 
                        />
                        <span className="text-sm capitalize text-gray-700 dark:text-gray-200">
                          {themeOption}
                        </span>
                      </div>
                      {theme === themeOption && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleOpen}
          className={`bg-gradient-to-r from-${theme}-400 to-${THEMES[theme as keyof typeof THEMES].secondary}-500 rounded-full p-3 shadow-lg text-white flex items-center justify-center`}
        >
          <div className="flex items-center space-x-1">
            <Palette className="w-5 h-5" />
            {isOpen ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronUp className="w-5 h-5" />
            )}
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;