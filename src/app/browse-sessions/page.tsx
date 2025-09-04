import Image from "next/image";
import Link from "next/link";

export default function BrowseSessions() {
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
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
              Browse Sessions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our available chess sessions and find the perfect fit for you
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 font-playfair mb-2">
                POPULAR SESSIONS
              </h2>
              <p className="text-orange-500 italic text-lg">hurry, they fill up quickly.</p>
            </div>
            
            <div className="space-y-6">
              {/* Chess for Juniors */}
              <div className="bg-white border border-gray-200 p-6 flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">CHESS FOR JUNIORS</div>
                  <h3 className="text-lg text-gray-700 mb-3">Getting familiar with Board and the Pieces: Basics of Chess</h3>
                  <div className="text-sm text-gray-600 mb-2">30 min Per Session</div>
                  <div className="text-sm text-gray-600 mb-4">4 Sessions per Month</div>
                  <a
                    href="https://checkout.square.site/buy/4NI4L6ANPSSEENLXJDR6W6J5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    BOOK NOW!
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-800">$60</div>
                </div>
              </div>

              {/* Chess for Beginners */}
              <div className="bg-white border border-gray-200 p-6 flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">CHESS FOR BEGINNERS</div>
                  <h3 className="text-lg text-gray-700 mb-3">Castling, Notations, Draw Game Positions, Basic End Game Positions</h3>
                  <div className="text-sm text-gray-600 mb-2">1 hr Per Session</div>
                  <div className="text-sm text-gray-600 mb-4">4 Sessions per Month</div>
                  <a
                    href="https://checkout.square.site/buy/JUCH77CBXQUM5GUWS6FNFKRT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    BOOK NOW!
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-800">$85</div>
                </div>
              </div>

              {/* Intermediate Chess */}
              <div className="bg-white border border-gray-200 p-6 flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">INTERMEDIATE CHESS</div>
                  <h3 className="text-lg text-gray-700 mb-3">Analysis of Games, Building Repertoire as per Students&apos; style of playing, Different Openings, Puzzles Rating Expectation of 1000 to 1200</h3>
                  <div className="text-sm text-gray-600 mb-2">1 hr Per Session</div>
                  <div className="text-sm text-gray-600 mb-4">4 Sessions per Month</div>
                  <a
                    href="https://checkout.square.site/buy/ZWXT3XPZMQG4FJ76GNEE3YUR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    BOOK NOW!
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-800">$110</div>
                </div>
              </div>

              {/* Advanced Chess */}
              <div className="bg-white border border-gray-200 p-6 flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">ADVANCED CHESS</div>
                  <h3 className="text-lg text-gray-700 mb-3">Complex Problem Solving Situations, In-depth Discussion on some Grandmaster Games, More Critical Thinking Examples and One-on-One Attention Rating Expectation 1200-1500</h3>
                  <div className="text-sm text-gray-600 mb-2">1 hr Per Session</div>
                  <div className="text-sm text-gray-600 mb-4">4 Sessions per Month</div>
                  <a
                    href="https://checkout.square.site/buy/X2WUHTFUQ3S3TG4HGHG3H3V7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    BOOK NOW!
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-800">$200</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Ready to Start Your Chess Journey?</h3>
              <p className="text-gray-600 mb-6">
                Contact us to discuss which session would be the best fit for your skill level and goals.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
