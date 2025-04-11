// src/components/SavedTrips.tsx
import React from 'react';

const SavedTrips: React.FC = () => {
  // Placeholder: saved trips would be fetched from local storage or backend
  const trips = [
    { destination: 'Paris', dates: '2025-06-01 to 2025-06-10' },
    { destination: 'Tokyo', dates: '2025-07-15 to 2025-07-25' },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Saved Trips</h3>
      <div className="space-y-2">
        {trips.map((trip, i) => (
          <div key={i} className="p-3 border rounded bg-white shadow-sm">
            <p className="text-sm"><strong>{trip.destination}</strong></p>
            <p className="text-xs text-gray-500">{trip.dates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedTrips;
