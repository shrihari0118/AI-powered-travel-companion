import { MapPin, DollarSign, AlertCircle, Coffee, Camera, Utensils, Star } from 'lucide-react';

export default function TravelGuide() {
  const nearbyPlaces = [
    {
      name: 'Eiffel Tower',
      distance: '2.3 km',
      rating: 4.8,
      category: 'Landmark',
      cost: '$$',
      icon: Camera,
    },
    {
      name: 'Louvre Museum',
      distance: '1.8 km',
      rating: 4.9,
      category: 'Museum',
      cost: '$$$',
      icon: Camera,
    },
    {
      name: 'Café de Flore',
      distance: '0.5 km',
      rating: 4.6,
      category: 'Café',
      cost: '$$',
      icon: Coffee,
    },
    {
      name: 'Le Comptoir du Relais',
      distance: '0.8 km',
      rating: 4.7,
      category: 'Restaurant',
      cost: '$$$',
      icon: Utensils,
    },
  ];

  const travelTips = [
    {
      title: 'Best Time to Visit',
      description: 'April to June and September to October offer pleasant weather and fewer crowds',
      icon: AlertCircle,
      type: 'info',
    },
    {
      title: 'Local Currency',
      description: 'Euro (EUR). Credit cards widely accepted. ATMs readily available',
      icon: DollarSign,
      type: 'success',
    },
    {
      title: 'Transportation',
      description: 'Metro is the fastest way to get around. Buy a Navigo pass for unlimited travel',
      icon: MapPin,
      type: 'warning',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Smart Travel Guide
        </h1>
        <p className="text-gray-600">
          Get contextual information about places, costs, and travel tips
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <MapPin className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            Current Location
          </h2>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            Paris, France
          </div>
          <p className="text-gray-600">
            The City of Light, known for its art, fashion, gastronomy, and culture
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            Nearby Places
          </h2>

          <div className="space-y-3">
            {nearbyPlaces.map((place, index) => {
              const Icon = place.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{place.name}</h3>
                      <span className="text-sm font-medium text-blue-600">{place.cost}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span>{place.distance}</span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                        {place.rating}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span>{place.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-600" />
            Average Costs
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Meal at Restaurant</span>
              <span className="font-semibold text-gray-900">$15 - $35</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Coffee at Café</span>
              <span className="font-semibold text-gray-900">$3 - $5</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Metro Ticket</span>
              <span className="font-semibold text-gray-900">$2.10</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Hotel per Night</span>
              <span className="font-semibold text-gray-900">$80 - $200</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Museum Entry</span>
              <span className="font-semibold text-gray-900">$12 - $25</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
          Travel Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {travelTips.map((tip, index) => {
            const Icon = tip.icon;
            const colorMap = {
              info: 'bg-blue-100 text-blue-600',
              success: 'bg-green-100 text-green-600',
              warning: 'bg-orange-100 text-orange-600',
            };
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className={`${colorMap[tip.type as keyof typeof colorMap]} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
