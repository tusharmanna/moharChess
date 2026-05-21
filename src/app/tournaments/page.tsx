import Link from "next/link";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Tournaments & Calendar - MoharChess",
  description: "View upcoming chess tournaments, events, and calendar at MoharChess. USCF-rated tournaments, competitions, and special events.",
  keywords: "chess tournaments, USCF tournaments, chess events, chess calendar, competitions",
});

export default function Tournaments() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header with Navigation */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-gray-600">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Tournaments & Calendar</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-teal-800 mb-6 leading-tight">
              <span className="text-orange-400">Tournaments & Events Calendar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              View all upcoming chess tournaments, competitions, and special events at MoharChess.
            </p>
          </div>

          {/* Calendar Section */}
          <div className="bg-gray-50 rounded-lg p-12 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">MoharChess Event Calendar</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              View the complete calendar of all upcoming tournaments, competitions, and special events hosted by MoharChess on Chess67.
            </p>
            <Link
              href="https://chess67.com/club/mohar-chess/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              View Calendar on Chess67 →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 mb-4">
            Ready to Compete?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up for any of our tournaments or events. Whether you&apos;re a beginner or an experienced player, we have something for everyone.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact-us"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
