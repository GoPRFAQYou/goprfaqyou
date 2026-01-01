'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
  onSignUpClick?: () => void;
  onLoginClick?: () => void;
}

export default function Navbar({ onSignUpClick, onLoginClick }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Method', href: '/method' },
    { name: 'Book', href: '/book' },
    { name: 'Tools', href: '/tools' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#F27700] hover:text-orange-600 transition-colors">
              GOPRFAQYOU
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                scroll={true}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-[#F27700] bg-orange-50'
                    : 'text-gray-700 hover:text-[#F27700] hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Sign Up / Log In Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              className="px-4 py-2 rounded-full font-bold text-white bg-blue-700 hover:bg-blue-900 transition-colors duration-200 drop-shadow-lg text-sm sm:text-base"
              onClick={onLoginClick}
            >
              Log In
            </button>
            <button
              className="px-4 py-2 rounded-full font-bold text-white bg-[#F27700] hover:bg-orange-600 transition-colors duration-200 drop-shadow-lg text-sm sm:text-base"
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-[#F27700] bg-orange-50'
                      : 'text-gray-700 hover:text-[#F27700] hover:bg-orange-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <button
                  className="px-4 py-2 rounded-full font-bold text-white bg-blue-700 hover:bg-blue-900 transition-colors duration-200 text-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLoginClick?.();
                  }}
                >
                  Log In
                </button>
                <button
                  className="px-4 py-2 rounded-full font-bold text-white bg-[#F27700] hover:bg-orange-600 transition-colors duration-200 text-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignUpClick?.();
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

