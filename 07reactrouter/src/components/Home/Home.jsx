import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      {/* Hero Section */}
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing content, explore our services, and learn more about
          what we offer.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature 1</h2>
          <p className="text-gray-600">
            Description of an amazing feature that we offer to our users.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature 2</h2>
          <p className="text-gray-600">
            Another great feature that enhances user experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature 3</h2>
          <p className="text-gray-600">
            A fantastic feature that makes our service stand out.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
