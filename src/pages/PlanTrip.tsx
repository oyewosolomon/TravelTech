import React from 'react';
import { PlaneTakeoff, CalendarDays, MapPin, Settings, Sparkles } from 'lucide-react';
import TripPlannerForm from '@/components/sections/TripPlannerForm';
import Footer from '@/components/layout/Footer';
 // Import the new TypeScript component

const PlanYourTrip: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Plan Your Perfect Trip
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're chasing adventure or relaxation, our tools help you build the trip of your dreams in just a few steps.
          </p>
        </div>
      </section>



      {/* Step-by-Step Planner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Choose Destination</h4>
              <p className="text-gray-600">Pick your city or country of interest from our wide selection of global destinations.</p>
            </div>
            <div className="flex flex-col items-center">
              <CalendarDays className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Set Travel Dates</h4>
              <p className="text-gray-600">Select the perfect dates for departure and return that suit your schedule.</p>
            </div>
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Customize Your Trip</h4>
              <p className="text-gray-600">Add flights, hotels, and experiences. We tailor options to your preferences.</p>
            </div>
            <div className="flex flex-col items-center">
              <PlaneTakeoff className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-medium text-gray-800 mb-2">Book & Go</h4>
              <p className="text-gray-600">Confirm your trip and pack your bags! You're ready to explore stress-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trip Planner Tool */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <Sparkles className="w-14 h-14 mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Let AI Help You Plan</h2>
            <p className="max-w-2xl mb-6 text-blue-100">
              Our AI-powered trip planner takes your preferences and builds a full itinerary including destinations, budgets, and more.
            </p>
            <a
              href="/ai-trip-planner"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Try AI Trip Planner
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-700 mb-6">Sign up now and get exclusive deals, expert planning support, and more.</p>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started Below
          </a>
        </div>
      </section>


      {/* Trip Planner Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">Start Planning Your Trip</h2>
          <TripPlannerForm />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default PlanYourTrip;