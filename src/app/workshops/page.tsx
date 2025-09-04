import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Workshops() {
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
              Chess Workshops
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Specialized chess instruction for different age groups and skill levels
            </p>
          </div>
        </div>
      </div>

      {/* Workshop Selection Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Please select a Workshop of your choice
              </h3>
              <p className="text-gray-600">
                Choose from our specialized workshop offerings
              </p>
            </div>

            {/* Workshop Options */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Senior Workshop */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link href="/senior-workshop" className="block">
                  <div className="relative">
                    <Image 
                      src="/images/20250518-chess-workshop-senior.jpg" 
                      alt="Senior Chess Workshop" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                      style={{ width: '100%' }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Senior Chess Workshop
                    </h3>
                    <p className="text-gray-600">
                      Specialized chess instruction designed for senior citizens, focusing on cognitive stimulation and social interaction.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Mindfulness Chess Workshop */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link href="/mindfulness-workshop" className="block">
                  <div className="relative">
                    <Image 
                      src="/images/mindfulness-chess-workshop.jpg" 
                      alt="Mindfulness Chess Workshop" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                      style={{ width: '100%' }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Mindfulness Chess Workshop
                    </h3>
                    <p className="text-gray-600">
                      Combine chess strategy with mindfulness techniques to improve focus, concentration, and mental well-being.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 bg-teal-50 p-8 rounded-lg border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">
                About Our Workshops
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Instructors</h4>
                  <p className="text-gray-600">Learn from experienced chess professionals</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Specialized Content</h4>
                  <p className="text-gray-600">Tailored programs for different audiences</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Interactive Learning</h4>
                  <p className="text-gray-600">Hands-on experience and practice</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Interested in a Custom Workshop?
              </h3>
              <p className="text-gray-600 mb-6">
                We can design specialized workshops for schools, organizations, or special events
              </p>
              <Link 
                href="/contact-us" 
                className="bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
