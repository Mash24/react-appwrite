import React from 'react'

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">About Us</h1>

      <p className="text-lg text-gray-600 mb-6">
        We are a team of passionate individuals who are dedicated to creating high-quality products that make a positive impact on the world. Our mission is to help people live healthier, happier lives by providing them with the tools they need to succeed. We believe that everyone deserves to have access to the resources they need to reach their full potential, and we are committed to making that a reality for all. Thank you for supporting us on this journey!
      </p>

      <p className="text-lg text-gray-600">
        We are always looking for new ways to improve our products and services, so if you have any feedback or suggestions, please don't hesitate to get in touch with us! We would love to hear from you and learn how we can better serve your needs. Together, we can make a difference in the world and create a brighter future for all. Thank you for being a part of our community! ❤️🌟
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-600 mb-6">
        Our vision is to be the leading provider of innovative solutions that improve the lives of people around the world. We are committed to creating products that are accessible, affordable, and easy to use, so that everyone can benefit from our technology. We believe that by working together, we can create a better future for all. Thank you for being a part of our journey! 🚀 🌎
      </p>

{/* Add more sections as needed  */}
      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Meet Our Team</h2>

      {/* How the cards will appear and be arranged within the div below or the container*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Add more team members here */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8MXwwfHx8Mg%3D%3D"/>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
          <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>

          {/* Add more team members here */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8MXwwfHx8Mg%3D%3D"/>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
          <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>

          {/* Add more team members here */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8MXwwfHx8Mg%3D%3D"/>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
          <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>

          {/* Add more team members here */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8MXwwfHx8Mg%3D%3D"/>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
          <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>

          {/* Add more team members here */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8MXwwfHx8Mg%3D%3D"/>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
          <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>
      </div>

      <p className="text-lg text-gray-700 mt-8">
        Thank you for being a part of our community! We appreciate your support and look forward to serving you in the future. If you have any questions or concerns, please don't hesitate to reach out to us. We are here to help and are committed to providing you with the best possible experience. Together, we can make a difference in the world and create a brighter future for all. Thank you for being a part of our journey! ❤️🌟
      </p>

    </div>
  );
}

export default About