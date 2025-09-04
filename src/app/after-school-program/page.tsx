import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AfterSchoolProgram() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/images/mohar.jpg" 
                alt="Mohar Chess Logo" 
                width={120} 
                height={120} 
                className="rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              After School Chess Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Develop strategic thinking, concentration, and sportsmanship through chess
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Registration Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Register for After School Program
                </h2>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdth4-LMaUGJaBkH6ZfzDnZ5GPk4uYOqXoMU-nfP65IRty4vA/viewform?embedded=true" 
                  width="100%" 
                  height="1750" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  title="After School Program Registration Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Program Details */}
              <div className="space-y-6">
                <div className="text-center">
                  <Image 
                    src="/images/Montessori-thumbnail.jpg" 
                    alt="Montessori at Sharon Springs" 
                    width={400} 
                    height={300} 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
                    Program Registration Details
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-lg font-semibold text-gray-800">
                      Register for Fall and Spring Semesters
                    </p>
                    <p className="text-gray-700">
                      <strong>Fall:</strong> September to December, 2024
                    </p>
                    <p className="text-gray-700">
                      <strong>Spring:</strong> January to May, 2025
                    </p>
                    <p className="text-gray-700">
                      <strong>Time:</strong> Every Friday 03:00 to 04:00 PM
                    </p>
                    <p className="text-gray-700">
                      <strong>Entry Fee:</strong> $360
                    </p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Program Highlights
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>Professional chess instruction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>Small group learning environment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>Progressive skill development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>Tournament opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>Academic benefits and life skills</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="bg-teal-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Questions About the Program?
                  </h3>
                  <p className="text-center mb-4 text-teal-100">
                    Contact us for more information about our after school chess program
                  </p>
                  <div className="text-center">
                    <Link 
                      href="/contact-us" 
                      className="bg-white text-teal-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
