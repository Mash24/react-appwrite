import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="border-gray-200 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
              alt="My Logo" 
              width="40" 
              height="40" 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden px-3 py-2 text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-4">
              <li>
                <NavLink 
                  to="/home" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-gray-600'}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-gray-600'}`}
                >
                  About
                </NavLink>
              </li>
            </ul>

            {/* Authentication Buttons */}
            <div className="flex space-x-3">
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Log In
              </Link>
              <Link 
                to="/get-started" 
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
