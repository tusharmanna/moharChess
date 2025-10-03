import React from 'react';
import Image from 'next/image';
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Chess Tournaments - USCF Rated Scholastic Competitions",
  description: "Join our USCF-rated scholastic chess tournaments. 4-round Swiss system with sections for all skill levels. Located in Roswell, GA. Tournament preparation and competitive chess.",
  keywords: "uscf tournament, chess tournament, scholastic chess, rated chess tournament, georgia chess tournament, youth chess competition",
  ogImage: "/images/rated-banner.jpg"
});

export default function Tournaments() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chess Tournaments
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Compete in USCF-rated tournaments and test your skills
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
                  Tournament Registration
                </h2>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdkmIA44aq9HQY5dMe39AMBEooRHzKK1oGbWKAH6yLmOn3YjA/viewform?embedded=true" 
                  width="100%" 
                  height="1800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  title="Tournament Registration Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Tournament Details */}
              <div className="space-y-6">
                {/* Tournament Banner */}
                <div className="text-center">
                  <Image 
                    src="/images/rated-banner.jpg" 
                    alt="Tournament Banner" 
                    width={400} 
                    height={300} 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                {/* Tournament Information */}
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
                    Tournament Details
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Date:</strong> Oct 12, 2025 (Sunday)
                    </p>
                    <p>
                      <strong>Time:</strong> 09:30 am to 04:30 pm
                    </p>
                  </div>
                </div>

                {/* Tournament Format */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Tournament Format
                  </h3>
                  <p className="text-gray-700 mb-4">
                    This is a 4-round USCF-rated Scholastic tournament, with Time Control G/25; d5.
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Sections:</strong> Unrated, U/400, U/800, U/1200, Open.
                    </p>
                    <p className="text-gray-700">
                      <strong>Rounds:</strong> 10:00 am; 11:30 am; 1:00 pm; 2:30 pm or as soon as possible
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
                      <strong>For more information, Contact:</strong>
                    </p>
                    <p className="text-white">
                      Mohua Maity | (770) 815-8221 | 
                      <a href="mailto:mohar.chess@gmail.com" className="text-teal-200 hover:text-white underline ml-1">
                        mohar.chess@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Tournament Location
                  </h3>
                  <div className="text-gray-700">
                    <p className="font-semibold">Holiday Inn</p>
                    <p>909 Holcomb Bridge Rd</p>
                    <p>Roswell, GA 30076</p>
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
                      <span><em>Bring clocks, as the club has a limited number of clocks.</em></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span><em>USCF membership is required for all rated sections.</em></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
