import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaPlay, FaImages, FaVideo, FaTrophy, FaUsers } from "react-icons/fa";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Photo & Video Gallery - Chess Classes and Events",
  description: "Browse our gallery of chess classes, tournaments, workshops, and special events at MoharChess. See students learning, competing, and enjoying chess in action.",
  keywords: "chess gallery, chess photos, chess tournament photos, chess class images, student chess activities"
});

export default function OurGallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
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
                tournaments, and special events at MoharChess.
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

          {/* Gallery Highlights with Real Images */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair text-center mb-12">
              Gallery Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Summer Camp 2025 */}
              <Link
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/SummerCampJuly2025.jpg"
                    alt="Summer Chess Camp July 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Summer Camp 2025</p>
                    <p className="text-gray-200 text-sm">Chess learning and fun</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white font-semibold">
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>

              {/* Tournament Banner */}
              <Link
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/rated-banner.jpg"
                    alt="USCF Rated Chess Tournament"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Tournament Events</p>
                    <p className="text-gray-200 text-sm">USCF-rated competitions</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white font-semibold">
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>

              {/* Workshop */}
              <Link
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/20250518-chess-workshop-senior.jpg"
                    alt="Chess Workshop for Seniors"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Workshops & Classes</p>
                    <p className="text-gray-200 text-sm">Special chess workshops</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white font-semibold">
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>

              {/* Chess Board */}
              <Link
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/section-bg-2.jpg"
                    alt="Chess pieces on board"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Game Sessions</p>
                    <p className="text-gray-200 text-sm">Practice and strategy</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white font-semibold">
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>

              {/* Mindfulness Workshop */}
              <Link
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/mindfulness-chess-workshop.jpg"
                    alt="Mindfulness Chess Workshop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Special Events</p>
                    <p className="text-gray-200 text-sm">Mindfulness & Chess</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white font-semibold">
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>

              {/* Chess Hero */}
              <Link
                href="https://photos.app.goo.gl/rrNUjhm4JmuAS1ZH8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src="/images/chess-hero.jpg"
                    alt="Chess education and training"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Training Sessions</p>
                    <p className="text-gray-200 text-sm">Expert instruction</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 text-white font-semibold">
                    <FaExternalLinkAlt />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>
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
          <div className="flex justify-center">
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
