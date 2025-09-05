import React from 'react';
import Image from 'next/image';

export default function SummerCamp() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Summer Chess Camp
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Join us for an exciting week of chess learning and fun
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
                  Summer Camp Registration
                </h2>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfP-UhMkoM6Hp60FzqyE2MK5-zeQxC9Kh6NghzSB8Th2hlE2A/viewform?embedded=true" 
                  width="100%" 
                  height="1797" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="Summer Camp Registration Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Summer Camp Details */}
              <div className="space-y-6">
                {/* Summer Camp Image */}
                <div className="text-center">
                  <Image 
                    src="/images/SummerCampJuly2025.jpg" 
                    alt="Mohar Summer Camp 2025" 
                    width={400} 
                    height={300} 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                {/* Camp Information */}
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
                    Camp Details
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Age Group:</strong> 7 to 13
                    </p>
                    <p>
                      <strong>Dates:</strong> July 21 - 25
                    </p>
                    <p>
                      <strong>Time:</strong> 9:30 AM - 4:30 PM
                    </p>
                    <p>
                      <strong>Entry Fee:</strong> $350
                    </p>
                    <p>
                      <strong>Location:</strong> Johns Creek
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-teal-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Contact Information
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-teal-100">
                      <strong>For more Information Contact:</strong>
                    </p>
                    <p className="text-white">
                      Mohua Maity | (770) 815-8221 | 
                      <a href="mailto:mohar@chess.org" className="text-teal-200 hover:text-white underline ml-1">
                        mohar@chess.org
                      </a>
                    </p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                    Important Notes
                  </h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span><em>All the materials needed will be provided by Mohar Chess.</em></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span><em>Reach out for group discounts, sibling discounts and multiple week sign discounts too.</em></span>
                    </li>
                  </ul>
                </div>

                {/* What to Expect */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Our summer chess camp provides a comprehensive learning experience where students will:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Learn chess fundamentals and advanced strategies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Participate in friendly competitions and games</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Develop critical thinking and problem-solving skills</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Make new friends who share their passion for chess</span>
                      </li>
                    </ul>
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
