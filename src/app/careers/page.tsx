import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaLaptop, FaClock, FaCheckCircle, FaEnvelope } from "react-icons/fa";

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              Join Our <span className="text-orange-400">Team</span>
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Become a MoharChess Coach and inspire the next generation of chess players!
            </p>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Careers</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Job Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
                Chess Coach Positions Available
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our team of passionate chess educators and help students develop critical thinking skills while having fun!
              </p>
            </div>

            {/* Job Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* After School Programs */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <FaGraduationCap className="text-orange-500 text-2xl" />
                  <h3 className="text-xl font-semibold text-teal-800">After School Programs</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>Coach chess classes at schools for approximately 15-20 students.</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Ensure student safety and engagement</li>
                    <li>• 20-30 minutes of teaching</li>
                    <li>• 30-40 minutes of supervised playing</li>
                    <li>• Build positive relationships with students</li>
                  </ul>
                </div>
              </div>

              {/* Online Chess Programs */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <FaLaptop className="text-orange-500 text-2xl" />
                  <h3 className="text-xl font-semibold text-teal-800">Online Chess Programs</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>Coach online chess classes for 1-10 students.</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Create fun and engaging online lessons</li>
                    <li>• 20-30 minutes of teaching</li>
                    <li>• 30-40 minutes of online playing</li>
                    <li>• Build rapport with students virtually</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What We Provide */}
            <div className="bg-teal-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-teal-800 mb-6 text-center">What We Provide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-orange-500" />
                    <span className="text-gray-700">Comprehensive coach training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-orange-500" />
                    <span className="text-gray-700">Special Chess Curriculum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-orange-500" />
                    <span className="text-gray-700">Laptop and projector</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-orange-500" />
                    <span className="text-gray-700">Full chess management team support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-orange-500" />
                    <span className="text-gray-700">Ongoing resources and support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-orange-500" />
                    <span className="text-gray-700">Year-end bonus for top performers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Duties */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-teal-800 mb-6">Primary Duties</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>Teach the game of chess in an entertaining, fun and organized manner</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>Handle light administrative duties</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>Use basic computer chess programs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-teal-800 mb-6">Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Love for Chess</p>
                      <p className="text-sm text-gray-600">Being good at chess is not required, but you must love chess and be willing to improve</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Love Working with Children</p>
                      <p className="text-sm text-gray-600">Must enjoy working with groups of children</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Background Check</p>
                      <p className="text-sm text-gray-600">Must pass a full background check</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">English Skills</p>
                      <p className="text-sm text-gray-600">Good English communication skills required</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Reliable Transportation</p>
                      <p className="text-sm text-gray-600">For After School Programs (school visits)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaClock className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Weekday Availability</p>
                      <p className="text-sm text-gray-600">Available 2-4 PM for After School Programs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Punctuality</p>
                      <p className="text-sm text-gray-600">Must be on time for all scheduled classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compensation & Benefits */}
            <div className="bg-orange-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-teal-800 mb-6 text-center">Compensation & Benefits</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Competitive hourly pay</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Typically 1-2 hours per day (flexible schedule)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Additional hours available during school day for top performers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Year-end bonus for exceptional instructors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span>Valuable teaching experience</span>
                </div>
              </div>
            </div>

            {/* Why This Job */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Why You&apos;ll Love This Job</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                This job is ideal for people looking for teaching experience. Teach kids a game that they love! 
                It is an extremely fun job, and happy, energetic people tend to perform very well. 
                You&apos;ll be making a positive impact on children&apos;s lives while developing your own skills.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-teal-800 mb-4">Ready to Join Our Team?</h3>
                <p className="text-gray-600">
                  To discuss the possibility of becoming a MoharChess Coach, contact us today!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-teal-800">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="text-orange-500" />
                      <Link 
                        href="mailto:mohar.chess@gmail.com?subject=Chess Coach Position Inquiry" 
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        mohar.chess@gmail.com
                      </Link>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Please include your name, experience with children, and availability in your email.
                    </p>
                  </div>
                </div>

                {/* Quick Apply */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-teal-800">Quick Apply</h4>
                  <Link 
                    href="mailto:mohar.chess@gmail.com?subject=Chess Coach Application&body=Hello MoharChess Team,%0D%0A%0D%0AI am interested in the Chess Coach position. Here are my details:%0D%0A%0D%0AName: %0D%0AExperience with children: %0D%0AAvailability: %0D%0AChess experience: %0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards," 
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                  >
                    Send Application Email
                  </Link>
                  <p className="text-gray-600 text-sm">
                    This will open your email client with a pre-filled application template.
                  </p>
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
            Start Your Teaching Journey Today!
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join MoharChess and help shape the next generation of chess players while building your own teaching career.
          </p>
          <Link 
            href="mailto:mohar.chess@gmail.com?subject=Chess Coach Position Inquiry" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
