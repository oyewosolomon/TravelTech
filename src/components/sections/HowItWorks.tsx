import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Calendar, CheckCircle, Smartphone, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Explore destinations with our AI-powered recommendation engine",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Globe,
      title: "Plan",
      description: "Build your perfect itinerary with smart suggestions",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Seamlessly reserve flights, hotels, and activities",
      color: "text-teal-500",
      bgColor: "bg-teal-100"
    },
    {
      icon: Smartphone,
      title: "Manage",
      description: "Track your trip details in our mobile app",
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      icon: CheckCircle,
      title: "Travel",
      description: "Enjoy your journey with 24/7 support",
      color: "text-green-500",
      bgColor: "bg-green-100"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-4">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How TravelTech Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your seamless journey from dream to destination in just a few steps
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Animated connecting line */}
          <motion.div 
            className="absolute hidden md:block h-1 bg-gradient-to-r from-blue-500 to-green-500 top-1/4 left-16 right-16 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  className={`w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ y: -10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </motion.div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-gray-200 font-semibold text-gray-700 mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience the Difference</h3>
              <p className="text-gray-600 mb-6">
                Our AI technology analyzes millions of data points to create personalized travel experiences just for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time price monitoring",
                  "Instant booking confirmations",
                  "Smart itinerary adjustments",
                  "Personalized local recommendations"
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Start Planning Now
              </motion.button>
            </div>
            <div className="bg-gray-100 flex items-center justify-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="/images/app-screenshot.png" 
                  alt="App screenshot" 
                  className="rounded-xl shadow-2xl max-w-full h-auto"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">AI Ready</div>
                      <div className="text-sm text-gray-500">Smart trip planning</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;