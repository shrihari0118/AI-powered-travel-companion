import { Plane, Hotel, Utensils, ShoppingBag, MapPin, Calendar } from 'lucide-react';

export default function BudgetPlanner() {
  const budgetItems = [
    { category: 'Flights', amount: 450, icon: Plane, color: 'bg-blue-500' },
    { category: 'Accommodation', amount: 600, icon: Hotel, color: 'bg-green-500' },
    { category: 'Food & Dining', amount: 350, icon: Utensils, color: 'bg-orange-500' },
    { category: 'Activities', amount: 250, icon: MapPin, color: 'bg-purple-500' },
    { category: 'Shopping', amount: 200, icon: ShoppingBag, color: 'bg-pink-500' },
  ];

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Budget Planner
        </h1>
        <p className="text-gray-600">
          Plan your travel expenses and get a detailed budget breakdown
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Trip Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g., Paris, France"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (days)
                </label>
                <input
                  type="number"
                  placeholder="7"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                  Budget
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  Moderate
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  Luxury
                </button>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
              Calculate Budget
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
          <h2 className="text-xl font-semibold mb-6">
            Total Budget
          </h2>
          <div className="text-5xl font-bold mb-2">
            ${totalBudget}
          </div>
          <p className="text-blue-100 text-sm mb-6">
            Estimated for 7 days
          </p>
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-sm text-blue-100 mb-1">Daily Average</div>
            <div className="text-2xl font-bold">
              ${Math.round(totalBudget / 7)}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Budget Breakdown
        </h2>

        <div className="space-y-4">
          {budgetItems.map((item) => {
            const Icon = item.icon;
            const percentage = ((item.amount / totalBudget) * 100).toFixed(0);
            return (
              <div key={item.category} className="flex items-center space-x-4">
                <div className={`${item.color} p-3 rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      ${item.amount}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 w-12 text-right">
                  {percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
