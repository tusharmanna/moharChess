import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaPlay, FaImages, FaVideo, FaTrophy, FaUsers } from "react-icons/fa";

export default function OurGallery() {
  return (
    <div className="min-h-screen">
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
              Our <span className="text-orange-400">Gallery</span>
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Explore moments from our chess classes, tournaments, and special events
            </p>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Our Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured Gallery Link */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-lg p-8 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center">
                  <FaImages className="text-white text-3xl" />
                </div>
              </div>
              <h2 className="text-3xl font-bold font-playfair mb-4">
                View Our Complete Photo & Video Collection
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                Check out our comprehensive gallery featuring photos and videos from chess classes, 
                tournaments, student achievements, and special events at MoharChess.
              </p>
              <Link 
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                <FaExternalLinkAlt />
                <span>View Full Gallery</span>
              </Link>
              <p className="text-gray-300 text-sm mt-4">
                Opens in Google Photos - No account required to view
              </p>
            </div>
          </div>

          {/* Gallery Categories */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair text-center mb-12">
              What You&apos;ll Find in Our Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Chess Classes */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Chess Classes</h3>
                <p className="text-gray-600">
                  Students learning and enjoying chess in our after-school and online programs
                </p>
              </div>

              {/* Tournaments */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTrophy className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Tournaments</h3>
                <p className="text-gray-600">
                  Exciting moments from our USCF-rated tournaments and competitions
                </p>
              </div>

              {/* Student Achievements */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaImages className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Achievements</h3>
                <p className="text-gray-600">
                  Celebrating our students&apos; progress and tournament victories
                </p>
              </div>

              {/* Special Events */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaVideo className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Special Events</h3>
                <p className="text-gray-600">
                  Videos and photos from workshops, demonstrations, and special chess events
                </p>
              </div>
            </div>
          </div>

          {/* Sample Gallery Preview */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair text-center mb-12">
              Gallery Highlights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder Images */}
              <div className="relative group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaImages className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">Chess Class Session</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Link 
                    href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                    target="_blank"
                    className="text-white text-lg font-semibold flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </Link>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaTrophy className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">Tournament Winners</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Link 
                    href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                    target="_blank"
                    className="text-white text-lg font-semibold flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </Link>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaPlay className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">Chess Tutorial Videos</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Link 
                    href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                    target="_blank"
                    className="text-white text-lg font-semibold flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </Link>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaUsers className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">Group Activities</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Link 
                    href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                    target="_blank"
                    className="text-white text-lg font-semibold flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </Link>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaImages className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">Special Events</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Link 
                    href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                    target="_blank"
                    className="text-white text-lg font-semibold flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </Link>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FaVideo className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">Behind the Scenes</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Link 
                    href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
                    target="_blank"
                    className="text-white text-lg font-semibold flex items-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">How to View Our Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
              <div>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">1</span>
                </div>
                <p>Click the &ldquo;View Full Gallery&rdquo; button above</p>
              </div>
              <div>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">2</span>
                </div>
                <p>Browse through photos and videos</p>
              </div>
              <div>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">3</span>
                </div>
                <p>No Google account required to view</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair mb-4">
            Want to Be Featured in Our Gallery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our chess classes and tournaments to become part of the MoharChess community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/forms-and-links" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              ENROLL NOW
            </Link>
            <Link 
              href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8" 
              target="_blank"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaExternalLinkAlt />
              <span>View Gallery</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
