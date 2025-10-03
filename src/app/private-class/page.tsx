import Link from "next/link";
import { FaUserGraduate, FaClock, FaChartLine, FaCalendarCheck, FaVideo, FaStar } from "react-icons/fa";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Private Chess Lessons - One-on-One Instruction",
  description: "Personalized chess lessons tailored to your goals. $60/hour or $550 for 10 lessons. Expert USCF-certified coaches, flexible scheduling, online or in-person. Accelerate your chess improvement.",
  keywords: "private chess lessons, one on one chess, chess tutoring, personalized chess training, chess coach"
});

export default function PrivateClass() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              Private Chess <span className="text-orange-400">Lessons</span>
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              One-on-one instruction tailored to your individual learning style and goals
            </p>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Private Classes</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Why Choose Private Lessons?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience personalized chess instruction designed specifically for your skill level and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserGraduate className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Personalized Attention</h3>
              <p className="text-gray-600">100% focus on your individual needs, strengths, and areas for improvement</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Choose lesson times that work best for your busy schedule</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Faster Progress</h3>
              <p className="text-gray-600">Accelerate your learning with customized curriculum and immediate feedback</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarCheck className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Goal-Oriented</h3>
              <p className="text-gray-600">Focus on specific objectives like tournament preparation or rating improvement</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaVideo className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Online or In-Person</h3>
              <p className="text-gray-600">Choose between virtual lessons or face-to-face instruction</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Expert Coaches</h3>
              <p className="text-gray-600">Learn from USCF-certified instructors with proven track records</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
                What's Included in Private Lessons
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Personalized Curriculum</h4>
                      <p className="text-gray-600 text-sm">Lessons designed around your specific goals and skill level</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Game Analysis</h4>
                      <p className="text-gray-600 text-sm">Detailed review of your games with improvement strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Opening Repertoire</h4>
                      <p className="text-gray-600 text-sm">Build a solid opening foundation tailored to your style</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Tactical Training</h4>
                      <p className="text-gray-600 text-sm">Practice puzzles and combinations to sharpen your skills</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Endgame Mastery</h4>
                      <p className="text-gray-600 text-sm">Learn essential endgame techniques and winning methods</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Study Materials</h4>
                      <p className="text-gray-600 text-sm">Receive custom homework and practice assignments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Progress Tracking</h4>
                      <p className="text-gray-600 text-sm">Regular assessments to monitor your improvement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-teal-800">Tournament Prep</h4>
                      <p className="text-gray-600 text-sm">Special preparation for upcoming competitions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Formats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Lesson Formats & Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Single Lesson</h3>
              <div className="text-3xl font-bold text-orange-500 mb-4">$60<span className="text-xl text-gray-600">/hour</span></div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Perfect for trying out private lessons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Ideal for specific topic focus</span>
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="block text-center bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Book Single Lesson
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 shadow-lg text-white relative">
              <div className="absolute top-4 right-4 bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold mb-4">Package (10 Lessons)</h3>
              <div className="text-3xl font-bold mb-4">$550<span className="text-xl opacity-90">/package</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Save $50 compared to single lessons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Structured learning path</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Guaranteed rating improvement</span>
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="block text-center bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            * All lessons are 60 minutes. Custom packages available upon request.
          </p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              How to Get Started
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Contact Us</h3>
                <p className="text-gray-600">Reach out to discuss your chess goals and schedule a free consultation</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Schedule Lessons</h3>
                <p className="text-gray-600">Choose convenient times that fit your schedule for regular sessions</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Start Learning</h3>
                <p className="text-gray-600">Begin your personalized chess journey with expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair mb-4">
            Ready for Private Lessons?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take your chess to the next level with personalized one-on-one instruction from our expert coaches.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/private-class-registration"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Register Now
            </Link>
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
