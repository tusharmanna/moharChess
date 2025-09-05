import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhoneVolume, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/mohar.jpg"
                alt="MoharChess"
                width={280}
                height={80}
                className="h-20 w-64 rounded-lg shadow-lg"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              MoharChess provides quality chess education for all ages with individualized training.
              We help students develop critical thinking, problem-solving skills, and confidence through chess.
            </p>
            <div className="flex space-x-4">
              <Link href="https://wa.me/17708158221?text=Hello%20MoharChess!%20I%20would%20like%20to%20know%20more%20about%20your%20chess%20classes." target="_blank" className="text-white hover:text-orange-400 transition-colors">
                <FaWhatsapp size={24} />
              </Link>
              <Link href="https://facebook.com/moharchess" target="_blank" className="text-white hover:text-orange-400 transition-colors">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://www.instagram.com/moharchess_official?igsh=cjVuYTN3NnpjZ3l3" target="_blank" className="text-white hover:text-orange-400 transition-colors">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-300 hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/our-gallery" className="text-gray-300 hover:text-white transition-colors">
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Georgia, USA</p>
                  <p>Serving students nationwide</p>
                  <p>through online classes</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-400 flex-shrink-0" />
                <Link
                  href="mailto:mohar.chess@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  mohar.chess@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneVolume className="text-orange-400 flex-shrink-0" />
                <Link
                  href="tel:7708158221"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  7708158221
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <p>&copy; 2025 MoharChess. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
