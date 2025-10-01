import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaUsers, FaCode, FaArrowRight } from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';
import { useTheme } from '../../context/ThemeContext';

const CTABanner: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaOptions = [
    {
      icon: FaCode,
      title: "Contribute",
      description: "Start contributing to open source projects",
      action: () => window.open('https://github.com/oathar/open-source-world', '_blank')
    },
    {
      icon: FaUsers,
      title: "Join Community",
      description: "Connect with like-minded developers",
      action: () => scrollToSection('#contact')
    },
    {
      icon: FaRocket,
      title: "Get Updates",
      description: "Stay informed about new opportunities",
      action: () => scrollToSection('#contact')
    }
  ];

  return (
    <section className={theme === 'light' ? "py-12 sm:py-16 bg-gray-50" : "py-12 sm:py-16 dark: darkbg"}>
      <div className="container-max px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden"
        >
          {/* Main CTA Banner */}
          <div className="relative bg-gradient-to-r from-[#073f70] via-[#073f70] to-[#1f84d6] rounded-3xl p-6 sm:p-10 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm10 0c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                variants={itemVariants}
                className="mb-6 sm:mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                >
                  <FaRocket size={32} className="text-white sm:w-10 sm:h-10" />
                </motion.div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4"
              >
                Ready to Change the World?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              >
                Join thousands of developers, designers, and innovators who are building 
                the future through open source collaboration. Your journey starts here.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 shadow-xl text-base sm:text-lg flex items-center justify-center space-x-2 min-h-[48px]"
                >
                  <span>Get Started Now</span>
                  <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://github.com/oathar/open-source-world', '_blank')}
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 text-base sm:text-lg min-h-[48px]"
                >
                  View Projects
                </motion.button>
              </motion.div>

              {/* Quick Action Cards */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
              >
                {ctaOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={option.action}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 cursor-pointer group transition-all duration-300 hover:bg-white/20 min-h-[120px]"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                      <div className="text-white text-lg sm:text-xl">
                        <option.icon />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{option.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{option.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Stats Banner */}
          <motion.div
            variants={itemVariants}
            className={theme === 'light' ? "mt-8 sm:mt-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100" : "mt-8 sm:mt-12 bg-[#444b4a] rounded-3xl p-6 sm:p-8 shadow-xl"}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className={theme === 'light' ? "text-2xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2" : "text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"}
                >
                  500
                </motion.div>
                <p className={theme === 'light'? "text-secondary-600 font-medium text-xs sm:text-base": "text-white font-medium text-xs sm:text-base"}>Contributors</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className={theme === 'light' ? "text-2xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2" : "text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"}
                >
                  100+
                </motion.div>
                <p className={theme === 'light'? "text-secondary-600 font-medium text-xs sm:text-base": "text-white font-medium text-xs sm:text-base"}>Projects</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className={theme === 'light' ? "text-2xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2" : "text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"}
                >
                  50+
                </motion.div>
                <p className={theme === 'light'? "text-secondary-600 font-medium text-xs sm:text-base": "text-white font-medium text-xs sm:text-base"}>Countries</p>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className={theme === 'light' ? "text-2xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2" : "text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"}
                >
                  24/7
                </motion.div>
                <p className={theme === 'light'? "text-secondary-600 font-medium text-xs sm:text-base": "text-white font-medium text-xs sm:text-base"}>Community</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;