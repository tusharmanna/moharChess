import Link from "next/link";
import { FaCalendarAlt, FaClock, FaTrophy, FaMapMarkerAlt, FaEnvelope, FaPhoneVolume, FaExclamationTriangle } from "react-icons/fa";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Upcoming Events - Chess Tournaments & Workshops",
  description: "Join our upcoming USCF-rated scholastic chess tournaments and events. October 12, 2025 at Holiday Inn, Roswell GA. 4-round Swiss system, all skill levels welcome.",
  keywords: "chess events, upcoming tournaments, chess workshops, georgia chess events, scholastic chess events"
});

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              Upcoming <span className="text-orange-400">Events</span>
            </h1>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Upcoming Events</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Event Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Event Card */}
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              {/* Event Header */}
              <div className="bg-gradient-to-r from-teal-800 to-teal-900 text-white p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FaTrophy className="text-orange-400 text-2xl" />
                  <h2 className="text-2xl lg:text-3xl font-bold font-playfair">
                    USCF-Rated Scholastic Tournament
                  </h2>
                </div>
                <p className="text-gray-200 text-lg">
                  4-Round Swiss System Tournament - All Skill Levels Welcome
                </p>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Date & Time */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCalendarAlt className="text-orange-500 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-teal-800 mb-2">Date</h3>
                        <p className="text-gray-600 font-medium">October 12, 2025 (Sunday)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-orange-500 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-teal-800 mb-2">Time</h3>
                        <p className="text-gray-600 font-medium">9:30 AM - 4:30 PM</p>
                        <p className="text-sm text-gray-500 mt-1">Registration and setup from 9:30 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-orange-500 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-teal-800 mb-2">Location</h3>
                        <div className="text-gray-600">
                          <p className="font-medium">Holiday Inn</p>
                          <p>909 Holcomb Bridge Rd</p>
                          <p>Roswell, GA 30076</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tournament Details */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-teal-800 mb-6">Tournament Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Format & Time Control */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-teal-800 mb-3">Format & Time Control</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 4-Round USCF-Rated Tournament</li>
                        <li>• Time Control: G/25; d5</li>
                        <li>• Swiss System Pairing</li>
                      </ul>
                    </div>

                    {/* Sections */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-teal-800 mb-3">Sections</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Unrated</li>
                        <li>• Under 400</li>
                        <li>• Under 800</li>
                        <li>• Under 1200</li>
                        <li>• Open</li>
                      </ul>
                    </div>
                  </div>

                  {/* Round Schedule */}
                  <div className="mt-6 bg-teal-50 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-800 mb-3">Round Schedule</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-white rounded p-3">
                        <p className="font-medium text-teal-800">Round 1</p>
                        <p className="text-gray-600">10:00 AM</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="font-medium text-teal-800">Round 2</p>
                        <p className="text-gray-600">11:30 AM</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="font-medium text-teal-800">Round 3</p>
                        <p className="text-gray-600">1:00 PM</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="font-medium text-teal-800">Round 4</p>
                        <p className="text-gray-600">2:30 PM</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      *Rounds will start as soon as possible after scheduled times
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-teal-800 mb-6">Contact Information</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-4">For more information, please contact:</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-teal-800">Tournament Director:</span>
                        <span className="text-gray-600">Mohua Maity</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaPhoneVolume className="text-orange-500" />
                        <Link href="tel:7708158221" className="text-gray-600 hover:text-orange-500 transition-colors">
                          (770) 815-8221
                        </Link>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-orange-500" />
                        <Link href="mailto:mohar.chess@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                          mohar.chess@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                    <div className="flex items-start space-x-3">
                      <FaExclamationTriangle className="text-yellow-500 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Notes</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li>• <strong>Bring chess clocks</strong> - The club has a limited number of clocks available</li>
                          <li>• <strong>USCF membership required</strong> for all rated sections</li>
                          <li>• Registration opens at 9:30 AM</li>
                          <li>• Please arrive early for check-in and setup</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair mb-4">
            Ready to Compete?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us for an exciting day of competitive chess! Perfect for players of all skill levels.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact-us" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
