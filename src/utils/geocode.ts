// src/utils/geocode.ts
export const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.status === 'OK') {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      console.error('Geocoding error:', data.status);
      return null;
    }
  };
  