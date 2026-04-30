import React from 'react';
import Image from 'next/image';
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "August Chess Tournaments - USCF Rated Scholastic Competitions",
  description: "Join our USCF-rated scholastic chess tournaments in August. 4-round Swiss system with sections for all skill levels. Located in Roswell, GA. Tournament preparation and competitive chess.",
  keywords: "uscf tournament, chess tournament, scholastic chess, rated chess tournament, georgia chess tournament, youth chess competition, august tournament",
  ogImage: "/images/rated-banner.jpg"
});

export default function AugustTournaments() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-800">
              August Chess Tournaments
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
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
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Tournament Registration
                </h2>
                <div className="w-full rounded-lg">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScuvlfPlRVYlJgmbI0Et4-mMAjT8YZpH8gMHsOR8p3zTUuj2A/viewform?embedded=true"
                    className="w-full border-0"
                    style={{height: '2200px'}}
                    title="Tournament Registration Form"
                  >
                    Loading…
                  </iframe>
                </div>
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
                      <strong>Date:</strong> August 2026
                    </p>
                    <p>
                      <strong>Time:</strong> 09:30 am to 04:30 pm
                    </p>
                    <div className="mt-3 pt-3 border-t border-teal-200">
                      <p className="font-semibold text-teal-800 mb-2">Registration Fees:</p>
                      <p>Early entry: <strong>$40</strong></p>
                      <p>Regular: <strong>$45</strong></p>
                      <p>Late registration: <strong>$50</strong></p>
                    </div>
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
                      <strong>Sections:</strong> Unrated, U/400, U/800, U/1200.
                    </p>
                    <p className="text-gray-700">
                      <strong>Rounds:</strong> 10:00 am; 11:30 am; 1:00 pm; 2:30 pm or as soon as possible
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center text-teal-800">
                    Contact Information
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-gray-600">
                      <strong>For more information, Contact:</strong>
                    </p>
                    <p className="text-gray-700">
                      Mohua Maity | (770) 815-8221 |
                      <a href="mailto:chess@mohar.org" className="text-teal-700 hover:text-teal-900 underline ml-1">
                        chess@mohar.org
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
                    <p className="font-semibold">Best Western</p>
                    <p>907 Holcomb Bridge Rd</p>
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
