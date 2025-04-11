// components/tripWizard/StepTwo.tsx
import React from 'react';

interface StepTwoProps {
  formData: {
    dates: {
      start: string;
      end: string;
    };
    // add other formData properties as needed
  };
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">When are you planning to travel?</h2>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <label className="block text-sm font-medium">Start Date</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={formData.dates.start || ''}
            onChange={(e) => setFormData({ ...formData, dates: { ...formData.dates, start: e.target.value } })}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">End Date</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={formData.dates.end || ''}
            onChange={(e) => setFormData({ ...formData, dates: { ...formData.dates, end: e.target.value } })}
          />
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={prevStep} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Back</button>
        <button onClick={nextStep} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
