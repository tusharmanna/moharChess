import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 to-teal-900">
      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header with Navigation */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-white">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>About Us</span>
            </div>
            <div className="text-white text-sm">1/2</div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Mohar Chess:<br />
              <span className="text-orange-400">&apos;Unlocking Potential Through Chess Education&apos;</span>
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Photo and Info */}
            <div className="space-y-6">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src="/images/Mohua.jpg"
                    alt="Mohua Maity"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Name and Title */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">
                  MOHUA MAITY
                </h2>
                <p className="text-lg text-orange-400 font-semibold">
                  FOUNDER & CEO, MOHAR CHESS
                </p>
                <p className="text-white mt-2">
                  Vice President, Georgia Chess Association
                </p>
              </div>

              {/* About Mohua */}
              <div className="text-white text-sm leading-relaxed">
                <p className="mb-4">
                  Mohua has been teaching chess for over 12 years and is dedicated to promoting the game across all ages. She has organized scholastic state-level team tournaments for under the Georgia Chess Association, where she currently serves as Vice President.
                </p>
                <p className="mb-4">
                  A certified Tournament Director and SafeSport-trained professional, she has also represented the Georgia Chess Association as a delegate at US Chess conferences.
                </p>
                <p>
                  Through Mohar Chess, Mohua runs tournaments, leads after-school clubs and summer camps, conducts workshops for senior living communities, and has organized fundraising tournaments in collaboration with Indian associations, making chess accessible, impactful, and community-driven.
                </p>
              </div>
            </div>

            {/* Right Side - Who Should Join */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Who Should Join:</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Students seeking to develop strategic thinking and analytical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Parents looking for quality chess education for their children</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Adults wanting to learn chess or improve their game</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Senior citizens interested in cognitive stimulation through chess</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Special needs children and their families seeking therapeutic chess programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Competitive players targeting USCF-rated tournaments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Schools and organizations wanting chess programs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="mt-12">
            <div className="bg-orange-500 text-white text-center py-4 px-8 rounded-lg">
              <h3 className="text-xl font-bold">Join Our Chess Community</h3>
            </div>
            <div className="text-center mt-4">
              <p className="text-white text-lg">Hosted By: Mohar Chess - Georgia Chess Association</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-bold mb-2">PHONE</h4>
              <p>(770) 815-8221</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2">📧</div>
              <h4 className="font-bold mb-2">EMAIL</h4>
              <p>mohar.chess@gmail.com</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2">📍</div>
              <h4 className="font-bold mb-2">LOCATION</h4>
              <p>JOHNS CREEK, GEORGIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 mb-4">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience individualized chess training that develops discipline, analytical skills, and confidence. Join our community today!
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact-us"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
