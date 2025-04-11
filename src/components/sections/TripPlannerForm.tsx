import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { PlaneTakeoff, CalendarDays, MapPin, Settings, Sparkles, Save, List, Plus, Trash } from 'lucide-react';

// Define TypeScript interfaces
interface TripData {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: string;
  accommodation: 'hotel' | 'hostel' | 'apartment' | 'resort' | 'camping' | 'other';
  activities: string[];
  notes: string;
  createdAt: string;
}

interface FormDataType {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: string;
  accommodation: 'hotel' | 'hostel' | 'apartment' | 'resort' | 'camping' | 'other';
  activities: string[];
  notes: string;
}

type TabType = 'create' | 'view';

const TripPlannerForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('create');
  const [trips, setTrips] = useState<TripData[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: '',
    accommodation: 'hotel',
    activities: [],
    notes: ''
  });
  const [activity, setActivity] = useState<string>('');

  // Load trips from localStorage on component mount
  useEffect(() => {
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    }
  }, []);

  // Save trips to localStorage when trips change
  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle special case for number inputs
    if (name === 'travelers') {
      setFormData(prev => ({ ...prev, [name]: parseInt(value, 10) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddActivity = (): void => {
    if (activity.trim()) {
      setFormData(prev => ({
        ...prev,
        activities: [...prev.activities, activity.trim()]
      }));
      setActivity('');
    }
  };

  const handleRemoveActivity = (index: number): void => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      alert('Please fill in the required fields: destination, start date, and end date.');
      return;
    }
    
    const newTrip: TripData = {
      id: Date.now(), // Simple way to generate unique IDs
      ...formData,
      createdAt: new Date().toISOString()
    };
    
    setTrips(prev => [...prev, newTrip]);
    
    // Reset form after submission
    setFormData({
      destination: '',
      startDate: '',
      endDate: '',
      travelers: 1,
      budget: '',
      accommodation: 'hotel',
      activities: [],
      notes: ''
    });
    
    setActiveTab('view'); // Switch to view tab
  };

  const handleDeleteTrip = (id: number): void => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      setTrips(prev => prev.filter(trip => trip.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-center mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'create' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <Plus size={16} />
              Create Trip
            </span>
          </button>
          <button
            onClick={() => setActiveTab('view')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <List size={16} />
              View Trips
              {trips.length > 0 && (
                <span className="ml-1 bg-blue-700 text-white text-xs px-2 py-1 rounded-full">
                  {trips.length}
                </span>
              )}
            </span>
          </button>
        </div>
      </div>

      {activeTab === 'create' ? (
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Destination <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                  <span className="px-3 py-2 bg-gray-100">
                    <MapPin size={20} className="text-blue-600" />
                  </span>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Where do you want to go?"
                    className="w-full py-2 px-3 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Travel Dates <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                    <span className="px-3 py-2 bg-gray-100">
                      <CalendarDays size={20} className="text-blue-600" />
                    </span>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full py-2 px-3 outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                    <span className="px-3 py-2 bg-gray-100">
                      <CalendarDays size={20} className="text-blue-600" />
                    </span>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full py-2 px-3 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Number of Travelers</label>
                <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                  <span className="px-3 py-2 bg-gray-100">
                    <i className="text-blue-600">👥</i>
                  </span>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    className="w-full py-2 px-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Budget</label>
                <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                  <span className="px-3 py-2 bg-gray-100">
                    <i className="text-blue-600">
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838 c-12.106,12.108-31.734,12.108-43.84,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"></path> <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="22,49 22,18 23,18 39,48 40,48 40,17 "></polyline> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="17" y1="30" x2="45" y2="30"></line> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="17" y1="36" x2="45" y2="36"></line> </g></svg>
                    </i>
                  </span>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Your budget (e.g. ₦2000)"
                    className="w-full py-2 px-3 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Accommodation Type</label>
                <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                  <span className="px-3 py-2 bg-gray-100">
                    <i className="text-blue-600">🏨</i>
                  </span>
                  <select
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    className="w-full py-2 px-3 outline-none"
                  >
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                    <option value="apartment">Apartment</option>
                    <option value="resort">Resort</option>
                    <option value="camping">Camping</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Activities</label>
                <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                  <span className="px-3 py-2 bg-gray-100">
                    <i className="text-blue-600">🎯</i>
                  </span>
                  <input
                    type="text"
                    value={activity}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setActivity(e.target.value)}
                    placeholder="Add activities you want to do"
                    className="w-full py-2 px-3 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddActivity}
                    className="bg-blue-600 text-white px-3 py-2"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="mt-2">
                  {formData.activities.map((item, index) => (
                    <div key={index} className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                      {item}
                      <button
                        type="button"
                        onClick={() => handleRemoveActivity(index)}
                        className="ml-1 text-blue-700 hover:text-red-500"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Notes</label>
                <div className="flex items-center border rounded-lg overflow-hidden bg-white">
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special requirements or notes for your trip"
                    className="w-full py-2 px-3 outline-none min-h-32"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              <Save size={20} />
              Save Trip Plan
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Your Saved Trips</h3>
          
          {trips.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <PlaneTakeoff size={48} className="text-gray-400" />
              </div>
              <p className="text-gray-500 mb-4">You haven't planned any trips yet.</p>
              <button
                onClick={() => setActiveTab('create')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition inline-flex items-center gap-2"
              >
                <Plus size={16} />
                Create Your First Trip
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {trips.map((trip) => (
                <div key={trip.id} className="border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition">
                  <div className="bg-blue-600 text-white p-4">
                    <h4 className="text-xl font-semibold">{trip.destination}</h4>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start gap-4 mb-4">
                      <CalendarDays size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Travel Dates</p>
                        <p className="text-gray-600">
                          {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <i className="text-blue-600 mt-1">👥</i>
                      <div>
                        <p className="font-medium">Travelers</p>
                        <p className="text-gray-600">{trip.travelers} {trip.travelers === 1 ? 'person' : 'people'}</p>
                      </div>
                    </div>
                    
                    {trip.budget && (
                      <div className="flex items-start gap-4 mb-4">
                        <i className="text-blue-600 mt-1">💰</i>
                        <div>
                          <p className="font-medium">Budget</p>
                          <p className="text-gray-600">{trip.budget}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4 mb-4">
                      <i className="text-blue-600 mt-1">🏨</i>
                      <div>
                        <p className="font-medium">Accommodation</p>
                        <p className="text-gray-600">{trip.accommodation.charAt(0).toUpperCase() + trip.accommodation.slice(1)}</p>
                      </div>
                    </div>
                    
                    {trip.activities.length > 0 && (
                      <div className="flex items-start gap-4 mb-4">
                        <i className="text-blue-600 mt-1">🎯</i>
                        <div>
                          <p className="font-medium">Activities</p>
                          <div className="flex flex-wrap mt-1">
                            {trip.activities.map((activity, index) => (
                              <span key={index} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {trip.notes && (
                      <div className="flex items-start gap-4 mb-4">
                        <i className="text-blue-600 mt-1">📝</i>
                        <div>
                          <p className="font-medium">Notes</p>
                          <p className="text-gray-600">{trip.notes}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t flex justify-end">
                      <button
                        onClick={() => handleDeleteTrip(trip.id)}
                        className="text-red-600 hover:text-red-800 transition flex items-center gap-1"
                      >
                        <Trash size={16} />
                        Delete Trip
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripPlannerForm;