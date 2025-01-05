"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full z-50 shadow-lg ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <Link href="/">RestaurantApp</Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Toggle Icon */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="border-b md:border-none border-gray-700">
            <Link
              href="/"
              className="block text-white px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent transition"
            >
              Home Page
            </Link>
          </li>
          <li className="border-b md:border-none border-gray-700">
            <Link
              href="/availablitypage"
              className="block text-white px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent transition"
            >
              Table Availability
            </Link>
          </li>
          <li className="border-b md:border-none border-gray-700">
            <Link
              href="/bookingform"
              className="block text-white px-4 py-2 md:py-0 hover:bg-gray-700 md:hover:bg-transparent transition"
            >
              Booking Form
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
