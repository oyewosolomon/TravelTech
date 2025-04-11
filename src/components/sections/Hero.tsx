import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Plane, 
  Hotel, 
  Bot, 
  Search, 
  ChevronDown, 
  Phone,
  Users,
  Globe,
  Calendar,
  CreditCard,
  Shield,
  Star,
  MessageCircle,
  Map,
  Clock,
  Award,
  Bell
} from 'lucide-react';
import HowItWorks from './HowItWorks';
import Footer from '../layout/Footer';

const TravelTechWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const popularDestinations = [
    { name: 'Paris', price: '800,000', rating: '4.8', image: '/images/paris.jpg' },
    { name: 'Bali', price: '700,000', rating: '4.9', image: '/images/bali.jpg' },
    { name: 'New York', price: '1,500,00', rating: '4.7', image: '/images/newyork.jpg' },
    { name: 'Tokyo', price: '2,000,00', rating: '4.9', image: '/images/tokyo.jpg' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative z-0">
      {/* Full-page background image with parallax effect */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full z-0"
        initial={{ y: 0 }}
        animate={{ y: -50 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      >
        <img
          src="/images/tokyo.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Page content overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="container mx-auto px-6 z-20">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Your Journey Begins with Smart Technology
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl text-white/90 mb-8"
              >
                Experience seamless travel booking powered by AI. Access 500+ airlines, 100,000+ hotels, and personalized trip planning.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex space-x-4"
              >
                <motion.a 
                href='/plan-trip'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Plan Your Trip
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.section 
          className="py-20 bg-white/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "1M+", label: "Annual Bookings" },
                { value: "500+", label: "Airline Partners" },
                { value: "100K+", label: "Hotel Partners" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <motion.div 
                    className="text-4xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 100 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose TravelTech
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Plane, title: "Global Coverage", text: "Access to 500+ airlines and 100,000+ hotels worldwide" },
                { icon: Bot, title: "AI-Powered Planning", text: "Smart recommendations based on your preferences" },
                { icon: Phone, title: "24/7 Support", text: "Round-the-clock assistance for all your travel needs" }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={item}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  className="text-center bg-white rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <motion.div 
                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <motion.section 
          className="py-20 bg-white/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Start Your Journey
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['From', 'To'].map((label, idx) => (
                  <motion.div 
                    className="relative" 
                    key={idx}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      placeholder={label}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                    <Plane className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </motion.div>
                ))}
                <motion.input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                />
                <motion.button 
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5" />
                  <span className="ml-2 hidden md:inline">Search</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <section className="py-20 bg-white/90 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our Travelers Say
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="w-6 h-6 text-gray-500" />
                    </motion.div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-800">Happy Traveler</div>
                      <div className="text-gray-500 text-sm">Verified Customer</div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The AI recommendations were spot-on! Found the perfect hotel and flight combination within minutes."
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Process */}
        <HowItWorks />

        {/* Popular Destinations */}
        <section className="py-20 bg-white/90 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Popular Destinations
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {popularDestinations.map((dest, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onMouseEnter={() => setSelectedDestination(index)}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-[400px] object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <motion.div 
                    className="absolute bottom-4 left-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-xl font-bold">{dest.name}</div>
                    <div className="text-sm">₦{dest.price} • ⭐ {dest.rating}</div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Travel Planning Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">AI-Powered Travel Planning</h2>
                <p className="text-xl mb-8">Let our advanced AI create the perfect itinerary based on your preferences, budget, and travel style.</p>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "Saves 5+ hours of planning time" },
                    { icon: Award, text: "Personalized recommendations" },
                    { icon: Shield, text: "Price match guarantee" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    >
                      <item.icon className="w-6 h-6 mr-4" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Try AI Planner
                </motion.button>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.img 
                  src="/images/aiplanning.webp" 
                  alt="AI Planning Interface" 
                  className="rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-lg shadow-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                >
                  <div className="flex items-center">
                    <Bot className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold">AI Assistant</div>
                      <div className="text-sm text-gray-500">Online & Ready to Help</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mobile App Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1 relative"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.img 
                  src="/images/app.webp" 
                  alt="Mobile App" 
                  className="rounded-3xl shadow-2xl mx-auto"
                  whileHover={{ rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                >
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4" fill="currentColor" />
                    <Star className="w-4 h-4" fill="currentColor" />
                    <Star className="w-4 h-4" fill="currentColor" />
                    <Star className="w-4 h-4" fill="currentColor" />
                    <Star className="w-4 h-4" fill="currentColor" />
                  </div>
                  <div className="text-sm">App Store Rating</div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="order-1 md:order-2 bg-white p-8 rounded-lg shadow-md"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6">Travel Smarter with Our App</h2>
                <p className="text-xl text-gray-600 mb-8">Get real-time updates, manage bookings, and access exclusive mobile-only deals.</p>
                <div className="space-y-6">
                  {[
                    { icon: Map, title: "Offline Access", text: "Access your bookings and travel documents even without internet" },
                    { icon: MessageCircle, title: "24/7 Chat Support", text: "Get instant help from our support team through the app" },
                    { icon: Bell, title: "Price Alerts", text: "Get notified when prices drop for your saved destinations" }
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <motion.div 
                        className="bg-blue-100 p-3 rounded-lg mr-4"
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="flex space-x-4 mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.img 
                    src="/images/appstore.png" 
                    alt="App Store" 
                    className="h-12"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  />
                  <motion.img 
                    src="/images/googleplay.png" 
                    alt="Google Play" 
                    className="h-12"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <motion.section 
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6"
                variants={item}
              >
                Stay Updated with Travel Deals
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                variants={item}
              >
                Subscribe to our newsletter and never miss out on exclusive deals and travel tips.
              </motion.p>
              <motion.div 
                className="flex gap-4"
                variants={item}
              >
                <motion.input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 p-4 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Badges Section */}
        <motion.section 
          className="py-12 bg-white border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Shield, title: "Secure Booking", subtitle: "256-bit SSL Security" },
                { icon: CreditCard, title: "Payment Options", subtitle: "100+ Payment Methods" },
                { icon: Award, title: "Best Price", subtitle: "Guaranteed" },
                { icon: Users, title: "1M+ Users", subtitle: "Trust Our Service" }
              ].map((badge, idx) => (
                <motion.div 
                  key={idx}
                  variants={item}
                  className="flex items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <badge.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">{badge.title}</div>
                    <div className="text-sm text-gray-500">{badge.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        <Footer/>
      </div>
    </div>
  );
};

export default TravelTechWebsite;