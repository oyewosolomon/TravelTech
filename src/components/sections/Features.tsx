import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon
} from 'lucide-react';


const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart,
      title: "Intelligent Transit Management",
      description: "Optimize routes and schedules for minimal wait times and maximum efficiency."
    },
    {
      icon: Clock,
      title: "Real-Time Passenger Information",
      description: "Deliver live updates to passengers for accurate arrival and departure times."
    },
    {
      icon: Fuel,
      title: "Fuel Efficiency Optimization",
      description: "Reduce fuel consumption by 30% with smart route planning and traffic management."
    },
    {
      icon: Database,
      title: "Data Analytics Dashboard",
      description: "Actionable insights for city planners to enhance urban mobility strategies."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;