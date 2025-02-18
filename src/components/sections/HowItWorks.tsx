import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, CreditCard, Globe, ChevronRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  // Animation variants for the steps
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
        when: 'beforeChildren', // Animate children after the container
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={stepVariants}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1: Search */}
          <motion.div
            className="relative"
            variants={stepVariants}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Search className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">Enter your travel details and preferences</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>

          {/* Step 2: AI Matching */}
          <motion.div
            className="relative"
            variants={stepVariants}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Bot className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Matching</h3>
              <p className="text-gray-600">Our AI finds the perfect options for you</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>

          {/* Step 3: Book Securely */}
          <motion.div
            className="relative"
            variants={stepVariants}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Book Securely</h3>
              <p className="text-gray-600">Complete your booking with secure payment</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>

          {/* Step 4: Travel */}
          <motion.div
            variants={stepVariants}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel</h3>
              <p className="text-gray-600">Enjoy your perfectly planned trip</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;