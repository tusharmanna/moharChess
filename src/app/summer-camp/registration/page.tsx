import Link from "next/link";
import Script from "next/script";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Summer Camp Registration - MoharChess",
  description: "Register for MoharChess summer camp. Interactive chess program for all skill levels.",
  keywords: "summer camp, chess camp, registration, chess classes",
});

export default function SummerCampRegistration() {
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
              <span>Summer Camp Registration</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-teal-800 mb-6 leading-tight">
              <span className="text-orange-400">Summer Camp Registration</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register for our exciting summer chess camp program.
            </p>
          </div>

          {/* Event Embed */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div data-chess67-event="summer-camp-registration-20260601" data-width="100%" data-height="700"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 mb-4">
            Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for more information about our summer camp program.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact-us"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Script 
        src="https://chess67.com/assets/chess67-calendar-embed.js"
        async
      />
    </div>
  );
}
