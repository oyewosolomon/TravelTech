// components/tripWizard/StepThree.tsx
import React from 'react';

interface StepThreeProps {
  formData: {
    preferences: string[];
    // other formData properties
  };
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ formData, setFormData, nextStep, prevStep }) => {
  // Toggle the preference selection
  const toggleCheckbox = (pref: string) => {
    const updatedPreferences = [...formData.preferences];
    if (updatedPreferences.includes(pref)) {
      // Remove preference if it is already selected
      const index = updatedPreferences.indexOf(pref);
      updatedPreferences.splice(index, 1);
    } else {
      // Add preference if it is not selected
      updatedPreferences.push(pref);
    }
    setFormData({ ...formData, preferences: updatedPreferences });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Select Your Preferences</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Hotels', 'Flights', 'Adventure Tours', 'Museums', 'Nature', 'Food Experiences'].map((pref) => (
          <label key={pref} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.preferences.includes(pref)}
              onChange={() => toggleCheckbox(pref)}
            />
            <span>{pref}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={prevStep} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Back</button>
        <button onClick={nextStep} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

export default StepThree;
