import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';
import { useTheme } from '../../context/ThemeContext';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/theopensourceworld',
      color: 'hover:bg-gray-800',
      description: 'Contribute to our projects'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/company/open-source-world',
      color: 'hover:bg-blue-600',
      description: 'Professional network'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/opensourceworld',
      color: 'hover:bg-blue-400',
      description: 'Latest updates'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/@opensourceworld',
      color: 'hover:bg-red-600',
      description: 'Tutorials & talks'
    }
  ];

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className={theme ==='light'? "section-padding bg-gradient-to-br from-gray-50 to-white": "dark: darkbg"}>
      <div className="container-max px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-base sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to join our mission? Have questions about our initiatives? 
              We'd love to hear from you and explore how we can collaborate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={theme === 'light' ? "card p-4 sm:p-6 lg:p-8" : "card p-4 sm:p-6 lg:p-8 bg-[#444b4a]"}>
                <h3 className={theme === 'light'? "text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6": "text-xl sm:text-2xl font-bold text-white bg-[#444b4a] mb-4 sm:mb-6"}>Send Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    >
                      <FaCheckCircle size={32} className="text-primary-600 sm:w-10 sm:h-10" />
                    </motion.div>
                    <h4 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">Message Sent!</h4>
                    <p className="text-sm sm:text-base text-secondary-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={theme === 'light' ? "space-y-4 sm:space-y-6" : "space-y-4 sm:space-y-6 bg-[#444b4a]"}>
                    <div>
                      <label htmlFor="name" className={theme === 'light' ? "block text-sm font-medium text-secondary-700 mb-2" : "block text-sm font-medium text-white mb-2"}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={theme === 'light' ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base min-h-[48px] ${
                          errors.name ? 'border-red-300' : 'border-gray-200'
                        }` : `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base min-h-[48px] ${errors.name ? 'border-red-300' : 'border-gray-200'} bg-[#928f96] text-white placeholder:text-white` }
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={theme === 'light' ? "block text-sm font-medium text-secondary-700 mb-2" : "block text-sm font-medium text-white mb-2"}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={theme === 'light' ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base min-h-[48px] ${
                          errors.email ? 'border-red-300' : 'border-gray-200'
                        }` : `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base min-h-[48px] ${errors.email ? 'border-red-300' : 'border-gray-200'} bg-[#928f96] text-white placeholder:text-white`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className={theme === 'light' ? "block text-sm font-medium text-secondary-700 mb-2" : "block text-sm font-medium text-white mb-2" }>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={theme === 'light'? `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none text-sm sm:text-base ${
                          errors.message ? 'border-red-300' : 'border-gray-200'
                        }`: `w-full px-4 bg-[#928f96] py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-200 transition-colors resize-none text-sm sm:text-base ${
                          errors.message ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Tell us about your project, questions, or how you'd like to contribute..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full btn-primary flex items-center justify-center space-x-2 min-h-[48px] text-sm sm:text-base ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:gap-6">
              {/* Contact Info */}
              <div className={theme === 'light' ? "card p-4 sm:p-6 lg:p-8" : "card p-4 sm:p-6 lg:p-8 bg-[#444b4a]"}>
                <h3 className={theme === 'light'? "text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6": "text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"}>Contact Info</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-primary-600 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className={theme === 'light'? "font-semibold text-secondary-900 text-sm sm:text-base": "font-semibold text-white text-sm sm:text-base"}>Email</p>
                      <p className={theme === 'light'? "text-secondary-600 text-xs sm:text-sm": "text-gray-200 text-xs sm:text-sm"}>opensourceworld.fyi@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary-600 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className={theme === 'light'? "font-semibold text-secondary-900 text-sm sm:text-base": "font-semibold text-white text-sm sm:text-base"}>Global Presence</p>
                      <p className={theme === 'light'? "text-secondary-600 text-xs sm:text-sm": "text-gray-200 text-xs sm:text-sm"}>Worldwide Community</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-primary-600 text-sm sm:text-base" />
                    </div>
                    <div>
                      <p className={theme === 'light'? "font-semibold text-secondary-900 text-sm sm:text-base": "font-semibold text-white text-sm sm:text-base"}>Response Time</p>
                      <p className={theme === 'light'? "text-secondary-600 text-xs sm:text-sm": "text-gray-200 text-xs sm:text-sm"}>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={theme === 'light' ? "card p-4 sm:p-6 lg:p-8" : "card p-4 sm:p-6 lg:p-8 bg-[#444b4a]"}>
                <h3 className={theme === 'light'? "text-xl sm:text-2xl font-bold text-secondary-900 mb-4 sm:mb-6": "text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"}>Connect With Us</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 sm:p-4 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 text-center group ${social.color} min-h-[100px]`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className={theme === 'light'? "w-10 h-10 sm:w-12 sm:h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-2 text-primary-600 group-hover:bg-white transition-colors": "w-10 h-10 sm:w-12 sm:h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-2 text-primary-600 group-hover:bg-gray-200 transition-colors"}>
                          <social.icon size={20} />
                        </div>
                        <div>
                          <p className={theme === 'light'? "font-semibold text-secondary-900 group-hover:text-white transition-colors text-sm sm:text-base": "font-semibold text-white text-sm sm:text-base" }>
                            {social.name}
                          </p>
                          <p className={theme === 'light'? "text-xs sm:text-sm text-secondary-600 group-hover:text-white transition-colors": "text-xs sm:text-sm text-gray-200" }>
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="card p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Stay Updated</h3>
                <p className="mb-4 sm:mb-6 text-white text-sm sm:text-base">
                  Subscribe to our newsletter for the latest updates, opportunities, and open source insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] text-sm sm:text-base"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#073f70] font-semibold px-6 py-3 rounded-xl hover:bg-[#073f70] hover:text-white transition-colors min-h-[48px] text-sm sm:text-base"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;