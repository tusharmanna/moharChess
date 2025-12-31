'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhoneVolume, FaWhatsapp, FaFacebookF, FaInstagram, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTournamentsOpen, setIsTournamentsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMenuOpen]);

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

            {/* Right Side - Social Icons */}
            <div className="flex items-center space-x-4">

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
                  src="/images/mohar.jpg"
                  alt="MoharChess"
                  width={280}
                  height={80}
                  className="h-20 w-64 rounded-lg shadow-lg"
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
              <Link href="/about-us" className="text-gray-700 hover:text-teal-800 transition-colors font-medium">
                About Us
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-800 transition-colors font-medium">
                  <span>Tournaments</span>
                  <FaChevronDown size={12} />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                  <Link href="/tournaments/february" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg">
                    February
                  </Link>
                  <Link href="/tournaments/march" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg">
                    March
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-800 transition-colors font-medium">
                  <span>Our Programs</span>
                  <FaChevronDown size={12} />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                  <Link href="/summer-camp" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium border-b border-gray-100 rounded-t-lg">
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
              ref={toggleButtonRef}
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-200"
          role="navigation"
          aria-label="Mobile navigation"
        >
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
              <div>
                <button
                  onClick={() => setIsTournamentsOpen(!isTournamentsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-800 transition-colors font-medium"
                >
                  <span>Tournaments</span>
                  <FaChevronDown size={10} className={`transition-transform ${isTournamentsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTournamentsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/tournaments/february" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                      February
                    </Link>
                    <Link href="/tournaments/march" className="block text-gray-600 hover:text-teal-800 transition-colors font-medium text-sm">
                      March
                    </Link>
                  </div>
                )}
              </div>
              <div className="text-gray-700 font-medium">
                Our Programs
              </div>
              <div className="pl-4 space-y-2">
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
