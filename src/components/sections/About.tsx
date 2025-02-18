import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Trophy, Users, Globe, 
  Target, ArrowRight, CheckCircle, 
  LineChart, ShieldCheck 
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '50,000+', label: 'Monthly Deliveries', icon: <LineChart className="w-6 h-6" /> },
    { number: '99.7%', label: 'Success Rate', icon: <Trophy className="w-6 h-6" /> },
    { number: '20+', label: 'Cities Served', icon: <Globe className="w-6 h-6" /> },
    { number: '100+', label: 'Team Members', icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in autonomous delivery technology',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on',
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly delivery solutions',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" id='about'>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Redefining Last-Mile Delivery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At LastMile Technologies, we're pioneering the future of urban logistics through 
            innovative autonomous delivery solutions that make cities smarter and more sustainable.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To transform urban delivery through sustainable, autonomous solutions that 
              reduce traffic congestion, minimize carbon emissions, and create more 
              livable cities for everyone.
            </p>
          </div>
        </motion.div>

        {/* Company Values */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading force in autonomous delivery, 
              we're proud of our growth and excited about the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {[
                  'Proprietary AI navigation technology',
                  'Industry-leading safety standards',
                  'Sustainable delivery solutions',
                  'Customer-centric approach'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Looking Ahead
              </h3>
              <p className="text-gray-600 mb-6">
                We're continuously innovating and expanding our services to meet 
                the evolving needs of urban delivery. Our commitment to excellence 
                drives us forward as we shape the future of logistics.
              </p>
              <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                Join Our Team <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;