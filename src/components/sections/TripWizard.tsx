// src/pages/TripWizard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import StepThree from '../steps/StepThree';
import StepFour from '../steps/StepFour';
import MapSection from './MapSection';
import SavedTrips from './SavedTrips';
import useLocalStorage from '@/hooks/useLocalStorage';


const steps = [StepOne, StepTwo, StepThree, StepFour];

const TripWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tripData, setTripData] = useLocalStorage('tripData', {
    destination: '',
    dates: { start: '', end: '' },
    travelers: 1,
    preferences: [],
    accommodation: '',
    transport: '',
    extras: [],
    coordinates: { lat: 0, lng: 0 },
  });

  const StepComponent = steps[currentStep];

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const onComplete = () => {
    console.log('Trip setup is complete!');
    // You can add logic here, like redirecting the user or showing a confirmation message
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Panel: Form */}
      <div className="md:w-1/2 p-6 bg-gray-50">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <StepComponent
            formData={tripData}
            setFormData={setTripData}
            nextStep={nextStep}
            prevStep={prevStep}
            onComplete={onComplete}  
          />
        </motion.div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Panel: Map & Preview */}
      <div className="md:w-1/2 p-6 bg-white">
        {/* <MapSection destination={tripData.destination} /> */}
        <SavedTrips />
      </div>
    </div>
  );
};

export default TripWizard;
