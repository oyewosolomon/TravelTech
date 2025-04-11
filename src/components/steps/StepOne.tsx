import React, { useEffect } from 'react';
import { geocodeAddress } from '../../utils/geocode';

interface StepOneProps {
  formData: any;
  setFormData: (data: any) => void;
}

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData }) => {
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (formData.destination) {
        const coords = await geocodeAddress(formData.destination);
        if (coords) {
          setFormData({ ...formData, coordinates: coords });
        }
      }
    };
    fetchCoordinates();
  }, [formData.destination]);

  
  return (
    <div>
      {/* Existing form fields */}
    </div>
  );
};

export default StepOne;
