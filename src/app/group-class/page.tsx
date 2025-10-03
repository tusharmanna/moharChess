import Link from "next/link";
import { FaUsers, FaHandsHelping, FaTrophy, FaChessBoard, FaClock, FaHeart } from "react-icons/fa";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Group Chess Classes - Learn Together",
  description: "Join our group chess classes for a fun, collaborative learning experience. Online ($35) and in-person ($45) options. Small groups, all skill levels. Package deals available with up to 20% savings.",
  keywords: "group chess classes, chess class near me, kids chess class, beginner chess class, intermediate chess class"
});

export default function GroupClass() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              Group Chess <span className="text-orange-400">Classes</span>
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Learn chess together in a fun, collaborative environment with fellow chess enthusiasts
            </p>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Group Classes</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Why Group Classes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Why Choose Group Classes?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combine structured learning with social interaction and friendly competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Social Learning</h3>
              <p className="text-gray-600">Make new friends while learning chess in a supportive group environment</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Peer Learning</h3>
              <p className="text-gray-600">Learn from classmates' questions and different perspectives on chess</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Friendly Competition</h3>
              <p className="text-gray-600">Practice games with peers to apply what you've learned</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChessBoard className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Interactive Sessions</h3>
              <p className="text-gray-600">Engaging activities, group discussions, and live game analysis</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">Quality instruction at a more affordable price than private lessons</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Motivation & Support</h3>
              <p className="text-gray-600">Stay motivated with a community of learners working toward similar goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Classes by Skill Level
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We organize groups by skill level to ensure everyone gets the most out of their learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
                Beginner
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">New to Chess</h3>
              <p className="text-gray-600 mb-4">Perfect for those just starting their chess journey</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Learn basic rules and piece movements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Simple checkmate patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Introduction to tactics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Fun games and activities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-orange-500">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
                Intermediate
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Building Skills</h3>
              <p className="text-gray-600 mb-4">For players ready to advance their game</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Opening principles and repertoire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Tactical combinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Positional understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Tournament preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
                Advanced
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Competitive Players</h3>
              <p className="text-gray-600 mb-4">For serious players aiming for high performance</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Advanced strategic concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Deep opening preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Complex endgame theory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Master game analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Class Format */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Class Format & Schedule
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-teal-800 mb-4">Online Classes</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Duration:</strong> 60 minutes per session</p>
                  <p><strong>Group Size:</strong> 4-8 students</p>
                  <p><strong>Schedule:</strong> Weekdays & Weekends available</p>
                  <p><strong>Platform:</strong> Zoom with interactive chess board</p>
                  <p className="text-2xl font-bold text-orange-500 mt-4">$35/session</p>
                </div>
                <Link
                  href="/contact-us"
                  className="block mt-6 text-center bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Join Online Class
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-teal-800 mb-4">In-Person Classes</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Duration:</strong> 90 minutes per session</p>
                  <p><strong>Group Size:</strong> 6-10 students</p>
                  <p><strong>Location:</strong> Johns Creek, GA</p>
                  <p><strong>Schedule:</strong> Saturday & Sunday sessions</p>
                  <p className="text-2xl font-bold text-orange-500 mt-4">$45/session</p>
                </div>
                <Link
                  href="/contact-us"
                  className="block mt-6 text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Join In-Person Class
                </Link>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
              <h4 className="text-xl font-semibold text-teal-800 mb-4 text-center">Package Deals Available</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-semibold text-gray-700">4-Week Package</p>
                  <p className="text-orange-500 font-bold">Save 10%</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">8-Week Package</p>
                  <p className="text-orange-500 font-bold">Save 15%</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">12-Week Package</p>
                  <p className="text-orange-500 font-bold">Save 20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Learn */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              What Students Learn
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Chess fundamentals and advanced tactics</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Opening theory and middlegame strategies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Endgame techniques and conversion</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Pattern recognition and calculation</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Time management in games</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Sportsmanship and chess etiquette</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Critical thinking and problem-solving</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span className="text-gray-700">Tournament preparation and psychology</span>
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
            Ready to Join a Group Class?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the fun of learning chess with others. Join our group classes today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Enroll Now
            </Link>
            <Link
              href="/browse-sessions"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
