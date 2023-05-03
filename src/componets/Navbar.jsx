import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center">
              <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Login
              </Link>
              <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500">
                Register
              </Link>
            </div>
          </div>
          
          <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col sm:flex-row sm:ml-6">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link to="/blog" className="mt-1 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 sm:mt-0 sm:ml-2">
                Blog
              </Link>
              <Link to="/courses" className="mt-1 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 sm:mt-0 sm:ml-2">
                Courses
              </Link>
              <Link to="/about" className="mt-1 px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 sm:mt-0 sm:ml-2">
                About
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/" className="text-gray-900 font-medium text-lg">
              My Website
            </Link>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Menu" onClick={toggleMenu}>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export
 default Header;
