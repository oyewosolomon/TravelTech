import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

// Previous sections remain the same until Features section...

const TravelTechWebsite = () => {
  // Previous state and effects remain...
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');

  const popularDestinations = [
    { name: 'Paris', price: '499', rating: '4.8', image:'/images/paris.jpg' },
    { name: 'Bali', price: '799', rating: '4.9', image:'/images/bali.jpg'  },
    { name: 'New York', price: '399', rating: '4.7', image:'/images/newyork.jpg'  },
    { name: 'Tokyo', price: '899', rating: '4.9', image:'/images/tokyo.jpg'  }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Previous sections remain the same... */}
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/tokyo.jpg" 
            alt="Travel Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Your Journey Begins with Smart Technology
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Experience seamless travel booking powered by AI. Access 500+ airlines, 100,000+ hotels, and personalized trip planning.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex space-x-4"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Plan Your Trip
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Annual Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Airline Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Hotel Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose TravelTech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Coverage</h3>
              <p className="text-gray-600">Access to 500+ airlines and 100,000+ hotels worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Planning</h3>
              <p className="text-gray-600">Smart recommendations based on your preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for all your travel needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Start Your Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="From"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
                <Plane className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="To"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
                <Plane className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Search className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">Happy Traveler</div>
                    <div className="text-gray-500 text-sm">Verified Customer</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The AI recommendations were spot-on! Found the perfect hotel and flight combination within minutes."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* New Booking Process Section */}
     
     <HowItWorks/>

      {/* Popular Destinations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {popularDestinations.map((dest, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setSelectedDestination(index)}
              >
                <img 
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-white">From ${dest.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-white">{dest.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Travel Planning Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">AI-Powered Travel Planning</h2>
              <p className="text-xl mb-8">Let our advanced AI create the perfect itinerary based on your preferences, budget, and travel style.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <span>Saves 5+ hours of planning time</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 mr-4" />
                  <span>Personalized recommendations</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-4" />
                  <span>Price match guarantee</span>
                </div>
              </div>
              <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Try AI Planner
              </button>
            </div>
            <div className="relative">
              <img 
                src="/images/aiplanning.webp" 
                alt="AI Planning Interface" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <Bot className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">AI Assistant</div>
                    <div className="text-sm text-gray-500">Online & Ready to Help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="/images/app.webp" 
                alt="Mobile App" 
                className="rounded-3xl shadow-2xl mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">4.9</div>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                </div>
                <div className="text-sm">App Store Rating</div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Travel Smarter with Our App</h2>
              <p className="text-xl text-gray-600 mb-8">Get real-time updates, manage bookings, and access exclusive mobile-only deals.</p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Map className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Offline Access</h3>
                    <p className="text-gray-600">Access your bookings and travel documents even without internet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Chat Support</h3>
                    <p className="text-gray-600">Get instant help from our support team through the app</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Bell className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Price Alerts</h3>
                    <p className="text-gray-600">Get notified when prices drop for your saved destinations</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <img src="/images/appstore.png" alt="App Store" className="h-12" />
                <img src="/images/googleplay.png" alt="Google Play" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Travel Deals</h2>
            <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter and never miss out on exclusive deals and travel tips.</p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 p-4 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold">Secure Booking</div>
                <div className="text-sm text-gray-500">256-bit SSL Security</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold">Payment Options</div>
                <div className="text-sm text-gray-500">100+ Payment Methods</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold">Best Price</div>
                <div className="text-sm text-gray-500">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold">1M+ Users</div>
                <div className="text-sm text-gray-500">Trust Our Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous footer remains the same... */}
    </div>
  );
};

export default TravelTechWebsite;