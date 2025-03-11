import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Company Name</h3>
            <p className="text-gray-400">1234 Elm St. New York, NY 10001</p>
            <p className="text-gray-400"/>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2 list-none">
            <li className="text-gray-400">Email: support@example.abc</li>
            <li className="text-gray-400">Phone: 123-456-7890</li>
            <li className="text-gray-400">Address: 123 Street name, city state zip code</li>
          </ul>
        </div>

        {/* Quick links section (optional) */}
        <div className='md:col-span-2 md:flex md:justify-between'>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 list-none">
              <li><Link to="/home" className="text-blue-500 hover:text-blue-700 hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-blue-500 hover:text-blue-700 hover:underline">About</Link></li>
              <li><Link to="/contact" className="text-blue-500 hover:text-blue-700 hover:underline">Contact</Link></li>
            </ul>
          </div>
          

          {/* Social media icons (optional) */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>

            </div>
          </div>
        </div>
      </div>
{/* Footer copyright and additional information */}
        <div className="mt-8 border-t border-gray-600 text-center pt-4">
          <p>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer