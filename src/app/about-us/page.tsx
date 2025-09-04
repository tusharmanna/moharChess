import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
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
              About <span className="text-orange-400">Mohar Chess</span>
            </h1>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 font-playfair mb-2">
                  A Vision without a Strategy remains an Illusion
                </h2>
                <p className="text-lg text-gray-600 italic">
                  Mohar plans individual training for all age group to increase their discipline and analytical skills.
                </p>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair">
                About Mohar Chess
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mohar Chess is a chess training institute led by <strong>Ms. Mohua Maity</strong>, who has been teaching chess for over 12 years and is dedicated to promoting the game across all ages. Mohua has organized scholastic state-level team tournaments under the Georgia Chess Association, where she currently serves as <strong>Vice President</strong>.
                </p>
                <p>
                  As a <strong>certified Tournament Director and SafeSport-trained professional</strong>, Mohua has also represented the Georgia Chess Association as a delegate at US Chess conferences. Through Mohar Chess, she runs tournaments, leads after-school clubs and summer camps, conducts workshops for senior living communities, and has organized fundraising tournaments in collaboration with Indian associations, making chess accessible, impactful, and community-driven.
                </p>
                <p>
                  Mohua has been associated with schools like Montessori School of Cumming and Cornerstone School, and is currently working with Montessori Academy at Sharon Springs and The Goddard School in Georgia, USA. She also uses Chess as a powerful therapeutic tool to unlock the possibilities for young minds of special needs children.
                </p>
                <p>
                  At Mohar Chess, we recognize and celebrate the uniqueness of each individual. Our commitment to individualized training ensures that every student&apos;s specific needs are not just met, but fully understood and catered to. This approach not only enhances discipline and analytical skills but also fosters patience, vision, leadership, and confidence in our students&apos; actions and decision making.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/chess-bg.jpg"
                alt="Chess education"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Team */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-teal-800 font-playfair">
                Our Expert Team
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Led by <strong>Mohua Maity</strong>, Vice President of the Georgia Chess Association and certified Tournament Director with over 12 years of teaching experience, we also have <strong>Joseph Couvillion</strong>, and two more highly skilled assistant coaches. Their expertise and dedication ensure that every student receives the best possible training.
                </p>
                <p>
                  Mohua&apos;s extensive background includes organizing state-level tournaments, representing Georgia Chess Association at US Chess conferences, and conducting community outreach programs that make chess accessible to diverse populations including senior living communities and special needs children.
                </p>
              </div>
            </div>

            {/* Programs & Tournaments */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-teal-800 font-playfair">
                Programs & Tournaments
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mohar Chess organizes monthly USCF rated tournaments for all age groups and all sections. We also organize workshops for senior citizens and kids with special needs.
                </p>
              </div>
            </div>
          </div>

          {/* Affiliations */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-teal-800 font-playfair mb-6">
              Our Affiliations
            </h3>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Mohar Chess <strong>(USCF ID: A8555044)</strong> is proud to be affiliated with the <strong>United States Chess Federation (USCF)</strong> and <strong>Georgia Chess Association (GCA)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide our individualized training approach at Mohar Chess
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Discipline</h3>
              <p className="text-gray-600">
                Building strong discipline through structured chess training and consistent practice.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Analytical Skills</h3>
              <p className="text-gray-600">
                Developing critical thinking and analytical abilities through strategic chess play.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Patience</h3>
              <p className="text-gray-600">
                Teaching the value of patience and careful consideration in decision-making.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Vision</h3>
              <p className="text-gray-600">
                Helping students develop long-term strategic vision both in chess and life.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Leadership</h3>
              <p className="text-gray-600">
                Fostering leadership qualities through competitive play and mentorship.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Confidence</h3>
              <p className="text-gray-600">
                Building confidence in actions and decision-making through chess mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 font-playfair mb-4">
              Why Choose Mohar Chess?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">12+ Years of Experience</h3>
                  <p className="text-gray-600">Led by Ms. Mohua Maity, Vice President of Georgia Chess Association with over 12 years of dedicated chess instruction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Certified Tournament Director</h3>
                  <p className="text-gray-600">Organized several local and state scholastic tournaments with professional expertise.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Individualized Training</h3>
                  <p className="text-gray-600">Personalized approach that recognizes and celebrates the uniqueness of each individual.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Special Needs Support</h3>
                  <p className="text-gray-600">Chess as therapeutic tool for special needs children, unlocking their potential.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Monthly USCF Tournaments</h3>
                  <p className="text-gray-600">Regular rated tournaments for all age groups and skill levels.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Senior Citizen Workshops</h3>
                  <p className="text-gray-600">Specialized programs designed for senior citizens to enjoy and learn chess.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">USCF & GCA Affiliated</h3>
                  <p className="text-gray-600">Officially affiliated with United States Chess Federation and Georgia Chess Association.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Expert Coaching Team</h3>
                  <p className="text-gray-600">Led by certified Tournament Director Mohua Maity with Joseph Couvillion and skilled assistant coaches.</p>
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
            Ready to Join Mohar Chess?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience individualized chess training that develops discipline, analytical skills, and confidence. Join our community today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/forms-and-links"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              ENROLL NOW
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
