import React from 'react';
import Image from 'next/image';
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Summer Chess Camp - Week 2",
  description: "Join MoharChess Summer Camp Week 2. An exciting week of chess learning, strategy, and fun for kids. Located in Suwanee, GA.",
  keywords: "summer chess camp week 2, kids chess camp, chess summer program, suwanee chess camp, youth chess camp atlanta",
  ogImage: "/images/SummerCampJuly2025.jpg"
});

export default function SummerCampWeek2() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-800">
              Summer Camp – Week 2
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
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
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Summer Camp Registration
                </h2>
                <div className="w-full rounded-lg">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScuvlfPlRVYlJgmbI0Et4-mMAjT8YZpH8gMHsOR8p3zTUuj2A/viewform?embedded=true"
                    className="w-full border-0"
                    style={{height: '2200px'}}
                    title="Summer Camp Registration Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>

              {/* Camp Details */}
              <div className="space-y-6">
                {/* Camp Banner */}
                <div className="text-center">
                  <Image
                    src="/images/SummerCampJuly2025.jpg"
                    alt="Summer Camp Banner"
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
                      <strong>Week:</strong> Week 2
                    </p>
                    <p>
                      <strong>Time:</strong> 9:30 AM – 4:30 PM
                    </p>
                    <p>
                      <strong>Ages:</strong> 7–13
                    </p>
                    <div className="mt-3 pt-3 border-t border-teal-200">
                      <p className="font-semibold text-teal-800 mb-2">Entry Fee:</p>
                      <p><strong>$350</strong> (includes all materials)</p>
                    </div>
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
                    Location
                  </h3>
                  <div className="text-gray-700">
                    <p className="font-semibold">MoharChess</p>
                    <p>3170 Peachtree Parkway STE 113</p>
                    <p>Suwanee, GA 30024</p>
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
