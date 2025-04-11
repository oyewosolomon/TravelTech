// components/tripWizard/StepFour.tsx
import React, { useEffect, useState } from 'react';

interface StepFourProps {
  formData: any;
  prevStep: () => void;
  onComplete: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ formData, prevStep, onComplete }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const savedTrips = JSON.parse(localStorage.getItem('savedTrips') || '[]');
    savedTrips.push(formData);  // Add current trip data to saved trips
    localStorage.setItem('savedTrips', JSON.stringify(savedTrips));
    setSaved(true);  // Indicate that the trip has been saved
    setTimeout(onComplete, 1000);  // Proceed after a short delay for UX
  };

  useEffect(() => {
    window.scrollTo(0, 0); // UX polish
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Review Your Trip</h2>

      <div className="bg-gray-100 p-4 rounded shadow">
        <p><strong>Destination:</strong> {formData.destination}</p>
        <p><strong>Start Date:</strong> {formData.startDate}</p>
        <p><strong>End Date:</strong> {formData.endDate}</p>
        <p><strong>Travelers:</strong> {formData.travelers}</p>
        <p><strong>Accommodation:</strong> {formData.accommodation}</p>
        <p><strong>Transport:</strong> {formData.transport}</p>
        <p><strong>Extras:</strong> {formData.extras.length > 0 ? formData.extras.join(', ') : 'None'}</p>
        <p><strong>Preferences:</strong> {formData.preferences.length > 0 ? formData.preferences.join(', ') : 'None'}</p>
      </div>

      {saved && <p className="text-green-600">Trip has been saved successfully!</p>}

      <div className="flex justify-between pt-6">
        <button onClick={prevStep} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Back</button>
        <button onClick={handleSave} className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">Save Trip</button>
      </div>
    </div>
  );
};

export default StepFour;
