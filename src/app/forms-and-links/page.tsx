'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaEnvelope } from "react-icons/fa";

export default function Enroll() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const tournaments = [
    {
      id: "alabama-championship",
      title: "8/29/25 - 8/31/25 Alabama State Chess Championship",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Join us for the Alabama State Chess Championship - a premier tournament for chess players of all levels.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Tournament Details:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dates: August 29-31, 2025</li>
                <li>• Multiple sections available</li>
                <li>• USCF rated tournament</li>
                <li>• Prizes for top finishers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Registration:</h4>
              <Link 
                href="mailto:mohar.chess@gmail.com?subject=Alabama State Chess Championship Registration"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                <FaEnvelope />
                <span>Register Now</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ];

  const classes = [
    {
      id: "private-classes",
      title: "Private Classes",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">MoharChess has something for everyone! From collaborative group chess classes to private one-on-one classes, our chess courses are suitable for kids all ages and skill levels. Learn more about our chess classes by contacting us today!</p>
          <div className="text-center">
            <Link
              href="/private-class-registration"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-lg font-semibold transition-colors"
            >
              <FaEnvelope />
              <span>ENROLL</span>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "group-classes",
      title: "Group Classes",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Learn chess in a fun, social environment with other students of similar skill levels.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Class Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Small group sizes (4-8 students)</li>
                <li>• Age and skill-based grouping</li>
                <li>• Interactive learning</li>
                <li>• Competitive practice games</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Join a Group:</h4>
              <Link
                href="mailto:mohar.chess@gmail.com?subject=Group Chess Classes Inquiry"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                <FaEnvelope />
                <span>Join Now</span>
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "chess-camps",
      title: "Chess Camps",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Intensive chess training camps during school breaks and summer holidays.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Camp Highlights:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Full-day or half-day options</li>
                <li>• Tournament play</li>
                <li>• Chess puzzles and tactics</li>
                <li>• Fun chess variants</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Register:</h4>
              <Link
                href="mailto:mohar.chess@gmail.com?subject=Chess Camp Registration"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                <FaEnvelope />
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "senior-classes",
      title: "Senior Classes",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Chess classes designed specifically for senior citizens to enjoy and learn the game.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Program Benefits:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cognitive stimulation</li>
                <li>• Social interaction</li>
                <li>• Beginner-friendly pace</li>
                <li>• Flexible scheduling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-800 mb-2">Learn More:</h4>
              <Link
                href="mailto:mohar.chess@gmail.com?subject=Senior Chess Classes Inquiry"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                <FaEnvelope />
                <span>Inquire</span>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/images/mohar.jpg" 
                alt="Mohar Chess Logo" 
                width={120} 
                height={120} 
                className="rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              <span className="text-orange-400">ENROLL</span>
            </h1>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Enroll</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image and Quote */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/chess-bg.jpg"
                  alt="Young chess player"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-800 to-transparent p-8">
                  <blockquote className="text-white">
                    <p className="text-xl lg:text-2xl font-bold font-playfair mb-4">
                      &ldquo;When you see a good move, look for a better one.&rdquo;
                    </p>
                    <cite className="text-gray-200 text-lg">Emanuel Lasker</cite>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Right Side - Enrollment Options */}
            <div className="space-y-8">
              {/* Tournaments Section */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-1 bg-orange-500"></div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Tournaments</h2>
                </div>
                
                <div className="space-y-4">
                  {tournaments.map((tournament) => (
                    <div key={tournament.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(tournament.id)}
                        className="w-full bg-black text-white p-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium">{tournament.title}</span>
                        {openSections[tournament.id] ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {openSections[tournament.id] && (
                        <div className="p-6 bg-white">
                          {tournament.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Classes Section */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Classes</h2>
                
                <div className="space-y-4">
                  {classes.map((classItem) => (
                    <div key={classItem.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(classItem.id)}
                        className="w-full bg-black text-white p-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium">{classItem.title}</span>
                        {openSections[classItem.id] ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {openSections[classItem.id] && (
                        <div className="p-6 bg-white">
                          {classItem.content}
                        </div>
                      )}
                    </div>
                  ))}
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
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our programs and find the perfect chess class for you or your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="mailto:mohar.chess@gmail.com?subject=Chess Program Inquiry" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us Today
            </Link>
            <Link 
              href="/contact-us" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
