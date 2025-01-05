import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            Experience fine dining and effortless table booking with our user-friendly platform. We bring culinary delights closer to you.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/availablitypage"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Check Availability
              </a>
            </li>
            <li>
              <a
                href="/bookingform"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Book a Table
              </a>
            </li>
            <li>
              <a
                href="/bookingsummary"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Booking Summary
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">
            Email: support@restaurantapp.com
          </p>
          <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Restaurant App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
