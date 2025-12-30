import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ConvertWiseLogo } from './ConvertWiseLogo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center">
              <ConvertWiseLogo />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/#product" className="text-gray-700 hover:text-gray-900 transition-colors">
                Product
              </a>
              <a href="/#solutions" className="text-gray-700 hover:text-gray-900 transition-colors">
                Solutions
              </a>
              <Link to="/about" className={`${location.pathname === '/about' ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}>
                About
              </Link>
              <a href="/#resources" className="text-gray-700 hover:text-gray-900 transition-colors">
                Resources
              </a>
              <a href="/#company" className="text-gray-700 hover:text-gray-900 transition-colors">
                Company
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              Log In
            </button>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <a href="/#product" className="block text-gray-700">Product</a>
            <a href="/#solutions" className="block text-gray-700">Solutions</a>
            <Link to="/about" className={`block ${location.pathname === '/about' ? 'text-gray-900' : 'text-gray-700'}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <a href="/#resources" className="block text-gray-700">Resources</a>
            <a href="/#company" className="block text-gray-700">Company</a>
            <button className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-full">
              Log In
            </button>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
