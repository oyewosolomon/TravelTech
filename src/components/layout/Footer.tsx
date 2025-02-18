import React from 'react';

import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CreditCard,
  DollarSign,
  Globe
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold">TravelTech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making travel smarter through technology. Experience seamless booking with AI-powered recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Travel Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Special Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Site Map</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trust & Safety</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Flight Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hotel Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Vacation Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Car Rentals</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                1-800-TRAVEL
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                support@traveltech.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                123 Travel Street, NY
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400">We Accept:</span>
              <div className="flex space-x-2">
                <CreditCard className="w-8 h-8 text-gray-400" />
                <DollarSign className="w-8 h-8 text-gray-400" />
                {/* Add more payment icons as needed */}
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TravelTech Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;