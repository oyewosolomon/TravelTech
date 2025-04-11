// src/components/MapSection.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapSectionProps {
  coordinates: { lat: number; lng: number };
  destination: string;
}

const MapSection: React.FC<MapSectionProps> = ({ coordinates, destination }) => {
  return (
    <div className="h-64 mb-4">
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} className="h-full w-full rounded">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>{destination || 'Selected Destination'}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
