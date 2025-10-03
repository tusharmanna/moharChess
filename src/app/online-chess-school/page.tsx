import Link from "next/link";
import { FaLaptop, FaChalkboardTeacher, FaClock, FaUsers, FaTrophy, FaCheckCircle } from "react-icons/fa";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Online Chess School - Learn Chess From Home",
  description: "Join our online chess school and learn from USCF-certified instructors. Flexible scheduling, small group sizes, expert instruction. Classes for beginners to advanced players.",
  keywords: "online chess lessons, virtual chess classes, online chess school, learn chess online, chess zoom classes"
});

export default function OnlineChessSchool() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              Online Chess <span className="text-orange-400">School</span>
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Learn chess from the comfort of your home with expert instruction and personalized attention
            </p>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Online Chess School</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Why Choose Online Chess */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Why Choose Our Online Chess School?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the same quality instruction as in-person classes with the convenience of learning from anywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptop className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Learn From Anywhere</h3>
              <p className="text-gray-600">Join classes from the comfort of your home with just an internet connection</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChalkboardTeacher className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from USCF-certified instructors with years of teaching experience</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose class times that fit your schedule, with weekday and weekend options</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Small Group Sizes</h3>
              <p className="text-gray-600">Benefit from personalized attention with limited students per class</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Tournament Preparation</h3>
              <p className="text-gray-600">Get ready for USCF-rated tournaments with specialized training</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Regular assessments and feedback to monitor your improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Classes for All Skill Levels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Beginner</h3>
              <div className="text-orange-500 font-semibold mb-4">Ages 6-12</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Learn piece movements and basic rules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Introduction to chess tactics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Basic opening principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Simple checkmate patterns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-orange-500">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Intermediate</h3>
              <div className="text-orange-500 font-semibold mb-4">Ages 8-16</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Advanced tactical combinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Opening repertoire development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Endgame techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Tournament preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Advanced</h3>
              <div className="text-orange-500 font-semibold mb-4">Ages 12+</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Deep positional understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Complex strategic planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Master-level game analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Competitive play preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              How Online Classes Work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">Schedule Your Class</h3>
                  <p className="text-gray-600">Contact us to find the perfect class time that fits your schedule</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">Get Your Login Details</h3>
                  <p className="text-gray-600">Receive Zoom link and access to our online chess platform</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">Join Live Interactive Classes</h3>
                  <p className="text-gray-600">Participate in engaging lessons with real-time instruction and practice games</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-2">Track Your Progress</h3>
                  <p className="text-gray-600">Receive regular feedback and homework assignments to accelerate your learning</p>
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
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our online chess school today and start your journey to becoming a stronger player!
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
              Browse Sessions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
