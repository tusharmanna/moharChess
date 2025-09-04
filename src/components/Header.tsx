'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhoneVolume, FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Orange Bar */}
      <div style={{ backgroundColor: '#DA8F27' }} className="text-white hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <Link href="mailto:mohar.chess@gmail.com" className="flex items-center space-x-2 hover:text-gray-200 transition-colors text-sm">
                <FaEnvelope size={14} />
                <span>mohar.chess@gmail.com</span>
              </Link>
              <Link href="tel:7708158221" className="flex items-center space-x-2 hover:text-gray-200 transition-colors text-sm">
                <FaPhoneVolume size={14} />
                <span>7708158221</span>
              </Link>
            </div>

            {/* Right Side - Enroll Button and Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Enroll Button */}
              <Link
                href="/forms-and-links"
                className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-2 rounded font-semibold transition-colors text-sm"
              >
                ENROLL
              </Link>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-2">
                <Link href="https://wa.me/17708158221?text=Hello%20MoharChess!%20I%20would%20like%20to%20know%20more%20about%20your%20chess%20classes." target="_blank" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded transition-colors">
                  <FaWhatsapp size={16} className="text-white" />
                </Link>
                <Link href="https://facebook.com/moharchess" target="_blank" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded transition-colors">
                  <FaFacebookF size={16} className="text-white" />
                </Link>
                <Link href="https://www.instagram.com/moharchess_official?igsh=cjVuYTN3NnpjZ3l3" target="_blank" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded transition-colors">
                  <FaInstagram size={16} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo and Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/chesskids130h.png"
                  alt="MoharChess"
                  width={150}
                  height={100}
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="bg-teal-800 text-white px-4 py-2 font-medium hover:bg-teal-900 transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-800 transition-colors font-medium">
                  <span>About Us</span>
                  <FaChevronDown size={12} />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                  <Link href="/about-us" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg">
                    About Us
                  </Link>
                  <Link href="/instructors" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg">
                    Instructors
                  </Link>
                </div>
              </div>
              <Link href="/events" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Upcoming Events
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-800 transition-colors font-medium">
                  <span>Our Programs</span>
                  <FaChevronDown size={12} />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                  <Link href="/tournaments" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium border-b border-gray-100">
                    TOURNAMENTS
                  </Link>
                  <Link href="/summer-camp" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium border-b border-gray-100">
                    SUMMER CAMP
                  </Link>
                  <Link href="/workshops" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium border-b border-gray-100">
                    WORKSHOPS
                  </Link>
                  <Link href="/after-school-program" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium border-b border-gray-100">
                    AFTER SCHOOL PROGRAM
                  </Link>
                  <Link href="/browse-sessions" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium rounded-b-lg">
                    BROWSE SESSIONS
                  </Link>
                </div>
              </div>
              <Link href="/our-gallery" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Our Gallery
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Careers
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                About Us
              </Link>
              <Link href="/instructors" className="text-gray-600 hover:text-teal-800 transition-colors font-medium pl-4 text-sm">
                Instructors
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Upcoming Events
              </Link>
              <div className="text-gray-700 font-medium">
                Our Programs
              </div>
              <div className="pl-4 space-y-2">
                <Link href="/tournaments" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                  TOURNAMENTS
                </Link>
                <Link href="/summer-camp" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                  SUMMER CAMP
                </Link>
                <Link href="/workshops" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                  WORKSHOPS
                </Link>
                <Link href="/after-school-program" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                  AFTER SCHOOL PROGRAM
                </Link>
                <Link href="/browse-sessions" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                  BROWSE SESSIONS
                </Link>
              </div>
              <Link href="/online-chess-school" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Online Chess School
              </Link>
              <Link href="/forms-and-links" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Enroll
              </Link>
              <Link href="/our-gallery" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Our Gallery
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Careers
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
