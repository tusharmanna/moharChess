import Link from "next/link";
import { FaChess, FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Chess Icon */}
        <div className="mb-8">
          <FaChess className="text-orange-400 text-8xl mx-auto animate-bounce" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-playfair">
          Checkmate! Page Not Found
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto">
          Looks like this page has made an illegal move. Let&apos;s get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            <FaHome />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-teal-700">
          <p className="text-gray-300 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about-us" className="text-orange-400 hover:text-orange-300 transition-colors">
              About Us
            </Link>
            <Link href="/tournaments" className="text-orange-400 hover:text-orange-300 transition-colors">
              Tournaments
            </Link>
            <Link href="/summer-camp" className="text-orange-400 hover:text-orange-300 transition-colors">
              Summer Camp
            </Link>
            <Link href="/contact-us" className="text-orange-400 hover:text-orange-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
