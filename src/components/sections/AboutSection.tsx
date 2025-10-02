import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaUsers, FaGlobe, FaMountain, FaGithub, FaCheckCircle, FaInstagram } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { itemVariants, containerVariants } from '../../utils/animations';
import { useTheme } from '../../context/ThemeContext';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();

  const features = [
    {
      icon: FaCode,
      title: "Open Source First",
      description: "We believe in the power of open source software to drive innovation and collaboration across the globe."
    },
    {
      icon: FaUsers,
      title: "Global Community",
      description: "Connect with developers, designers, and tech enthusiasts from every corner of the world."
    },
    {
      icon: FaGlobe,
      title: "Worldwide Impact",
      description: "Our projects and initiatives span across continents, making a real difference in communities everywhere."
    }
  ];

  // Theme-based styles
  const sectionBg = theme === 'light' 
    ? "section-padding bg-gradient-to-br from-[#f8fafc] to-[#e8f4fd]" 
    : "section-padding bg-gradient-to-br from-[#0a0e14] to-[#1a2332]";

  const cardBg = theme === 'light' 
    ? "bg-white shadow-lg hover:shadow-xl border border-[#e2e8f0]" 
    : "bg-[#1a2332] shadow-lg hover:shadow-2xl border border-[#334155]";

  const textPrimary = theme === 'light' ? "text-[#1a2332]" : "text-white";
  const textSecondary = theme === 'light' ? "text-[#64748b]" : "text-[#94a3b8]";
  const textGradient = "bg-gradient-to-r from-[#1f84d6] to-[#3b9df0] bg-clip-text text-transparent";

  return (
    <section id="about" className={sectionBg}>
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${textPrimary}`}>
              About <span className={textGradient}>Open Source World</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
              A global initiative connecting developers, fostering innovation, and building 
              the future of technology through open source collaboration.
            </p>
          </motion.div>

          {/* OSW Features */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${cardBg} p-8 text-center group rounded-2xl transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:shadow-xl transition-all duration-300">
                  <feature.icon />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${textSecondary}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Initiatives Section */}
          <motion.div variants={itemVariants} className="mt-20" id="initiatives">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${textPrimary}`}>
                Our <span className={textGradient}>Initiatives</span>
              </h3>
              <p className={`max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
                Discover our regional branches and specialized programs driving open source 
                innovation across different communities and regions.
              </p>
            </div>

            {/* Initiative Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* OSK Initiative Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${cardBg} rounded-3xl p-8 transition-all duration-300`}
              >
                {/* Logo/Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center mb-6 text-white text-2xl shadow-xl">
                  <FaMountain />
                </div>

                {/* Initiative Name */}
                <h4 className={`text-2xl font-bold mb-3 ${textPrimary}`}>
                  Open Source Kashmir
                </h4>

                {/* Tagline */}
                <p className={`text-sm font-semibold mb-4 ${textGradient}`}>
                  Regional Branch
                </p>

                {/* Description */}
                <p className={`leading-relaxed mb-6 ${textSecondary}`}>
                  Dedicated to promoting open source culture and development opportunities 
                  in the Kashmir region. Building bridges between local talent and global opportunities.
                </p>

                {/* Key Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[#1f84d6] mt-1 flex-shrink-0" />
                    <p className={`text-sm ${textSecondary}`}>Local community building</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[#1f84d6] mt-1 flex-shrink-0" />
                    <p className={`text-sm ${textSecondary}`}>Mentorship programs</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[#1f84d6] mt-1 flex-shrink-0" />
                    <p className={`text-sm ${textSecondary}`}>University partnerships</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className={`flex items-center space-x-3 pt-4 border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
                  <motion.a
                    href="https://github.com/opensourcekashmir"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      theme === 'light' 
                        ? 'bg-[#e8f4fd] text-[#073f70] hover:bg-[#1f84d6] hover:text-white' 
                        : 'bg-[#1a2332] text-[#3b9df0] hover:bg-[#1f84d6] hover:text-white'
                    }`}
                    aria-label="OSK GitHub"
                  >
                    <FaGithub size={18} />
                  </motion.a>
                  <motion.a
                    href="https://discord.gg/osk"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      theme === 'light' 
                        ? 'bg-[#e8f4fd] text-[#073f70] hover:bg-[#5865F2] hover:text-white' 
                        : 'bg-[#1a2332] text-[#3b9df0] hover:bg-[#5865F2] hover:text-white'
                    }`}
                    aria-label="OSK Discord"
                  >
                    <SiDiscord size={18} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/opensourcekashmir"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      theme === 'light' 
                        ? 'bg-[#e8f4fd] text-[#073f70] hover:bg-[#E4405F] hover:text-white' 
                        : 'bg-[#1a2332] text-[#3b9df0] hover:bg-[#E4405F] hover:text-white'
                    }`}
                    aria-label="OSK Instagram"
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                </div>
              </motion.div>

              {/* Placeholder for future initiatives - You can add more cards here */}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#073f70] to-[#1f84d6] rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                To democratize technology education, foster innovation through collaboration, 
                and create sustainable opportunities for developers worldwide while maintaining 
                strong local roots and global perspectives.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;