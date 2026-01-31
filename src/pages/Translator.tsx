import { Mic, Volume2, RefreshCw } from 'lucide-react';

export default function Translator() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Speech Translator
        </h1>
        <p className="text-gray-600">
          Translate your speech in real-time to communicate effortlessly
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 mb-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Source Language
              </label>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Japanese</option>
              </select>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 min-h-[200px] mb-4 border-2 border-dashed border-gray-300">
              <p className="text-gray-400 italic">
                Your speech will appear here...
              </p>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Mic className="w-8 h-8" />
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Target Language
              </label>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Spanish</option>
                <option>English</option>
                <option>French</option>
                <option>German</option>
                <option>Japanese</option>
              </select>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 min-h-[200px] mb-4 border-2 border-blue-200">
              <p className="text-gray-400 italic">
                Translation will appear here...
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Volume2 className="w-5 h-5" />
                <span className="text-sm font-medium">Play Audio</span>
              </button>
              <div className="text-sm text-gray-500">
                Response time: <span className="font-semibold text-blue-600">0.0s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Mic className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">High Accuracy</div>
              <div className="text-xs text-gray-500">99% accuracy rate</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <RefreshCw className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Real-Time</div>
              <div className="text-xs text-gray-500">Instant translation</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Volume2 className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Natural Voice</div>
              <div className="text-xs text-gray-500">Human-like audio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
