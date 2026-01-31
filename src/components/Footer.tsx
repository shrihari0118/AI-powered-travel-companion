export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#credits" className="hover:text-blue-600 transition-colors">
            Credits
          </a>
        </div>
        <div className="text-center mt-4 text-xs text-gray-500">
          &copy; 2024 Intelligent Travel Assistant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
