'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'lg:rounded-none lg:mx-0 lg:shadow-lg' 
        : 'lg:rounded-full lg:mx-10 lg:mt-8 lg:mb-12 lg:shadow-lg'
    }`}>
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-800 font-inter">
            Jane Nenna
          </div>
          
          {/* Desktop Navigation Items */}
          <div className="hidden lg:!flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Services
            </Link>
            <Link href="#rate-card" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Rate Card
            </Link>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Book a Call
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-2xl font-bold text-gray-800 font-inter">
              Jane Nenna
            </div>
            <button 
              onClick={closeMobileMenu}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="space-y-6">
            <Link 
              href="#home" 
              onClick={closeMobileMenu}
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-3 border-b border-gray-100"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={closeMobileMenu}
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-3 border-b border-gray-100"
            >
              About
            </Link>
            <Link 
              href="#services" 
              onClick={closeMobileMenu}
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-3 border-b border-gray-100"
            >
              Services
            </Link>
            <Link 
              href="#rate-card" 
              onClick={closeMobileMenu}
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-3 border-b border-gray-100"
            >
              Rate Card
            </Link>
            <button className="w-full bg-black text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-lg mt-8">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-sm text-gray-500">
              ©2024 | Developed by{' '}
              <a 
                href="https://www.ajosedamilare.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Ajose
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
