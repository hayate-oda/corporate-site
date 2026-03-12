import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001E36] border-b border-[#FFCD35]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#FFCD35]">
              STUDIO SEALINK
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#FFCD35]' : 'text-white hover:text-[#FFCD35]'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/philosophy"
              className={`transition-colors ${
                isActive('/philosophy') ? 'text-[#FFCD35]' : 'text-white hover:text-[#FFCD35]'
              }`}
            >
              Philosophy
            </Link>
            
            <Link
              to="/services"
              className={`transition-colors ${
                isServiceActive ? 'text-[#FFCD35]' : 'text-white hover:text-[#FFCD35]'
              }`}
            >
              Service
            </Link>

            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-[#FFCD35]' : 'text-white hover:text-[#FFCD35]'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-[#FFCD35] text-[#001E36] font-semibold rounded-lg hover:bg-[#FFCD35]/90 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-[#FFCD35] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/philosophy"
              className="block text-white hover:text-[#FFCD35] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Philosophy
            </Link>
            
            <Link
              to="/services"
              className="block text-white hover:text-[#FFCD35] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>

            <Link
              to="/about"
              className="block text-white hover:text-[#FFCD35] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-6 py-2 bg-[#FFCD35] text-[#001E36] font-semibold rounded-lg hover:bg-[#FFCD35]/90 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}