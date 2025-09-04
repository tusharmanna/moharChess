import Image from "next/image";
import Link from "next/link";
import { FaChess, FaTrophy, FaUsers, FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image 
                  src="/images/mohar.jpg" 
                  alt="Mohar Chess Logo" 
                  width={100} 
                  height={100} 
                  className="rounded-full shadow-lg"
                />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-playfair">
                Become a Chess Pro with{" "}
                <span className="text-orange-400">MoharChess!</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Experience individualized chess training that develops discipline, analytical skills, and confidence for all ages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/forms-and-links"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  ENROLL NOW
                </Link>
                <Link
                  href="/about-us"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative slide-in-right">
              <Image
                src="/images/chess-hero.jpg"
                alt="Chess pieces on wooden board"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At MoharChess, we believe chess is more than just a game. It&apos;s a powerful tool for developing critical thinking, problem-solving skills, and building confidence in students of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChess className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Strategic Thinking</h3>
              <p className="text-gray-600">Develop advanced problem-solving and strategic planning skills through chess.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Competitive Excellence</h3>
              <p className="text-gray-600">Participate in tournaments and competitions to showcase your skills.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Community Building</h3>
              <p className="text-gray-600">Join a supportive community of chess enthusiasts and lifelong learners.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Expert Instruction</h3>
              <p className="text-gray-600">Learn from experienced instructors with proven teaching methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a variety of chess programs designed to meet the needs of students at every level, from beginners to advanced players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Online Chess School</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive online chess education with interactive lessons and personalized feedback.
              </p>
              <Link href="/online-chess-school" className="text-orange-500 hover:text-orange-600 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Private Classes</h3>
              <p className="text-gray-600 mb-4">
                One-on-one instruction tailored to your individual learning style and pace.
              </p>
              <Link href="/private-class" className="text-orange-500 hover:text-orange-600 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Group Classes</h3>
              <p className="text-gray-600 mb-4">
                Interactive group sessions that combine learning with social interaction and friendly competition.
              </p>
              <Link href="/group-class" className="text-orange-500 hover:text-orange-600 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair mb-4">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join students who have improved their chess skills and critical thinking abilities with MoharChess&apos;s individualized training approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/forms-and-links"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              ENROLL TODAY
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
