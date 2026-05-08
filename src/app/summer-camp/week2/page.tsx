import Image from 'next/image';
import RegistrationForm from '@/components/RegistrationForm';

const FORM_SRC = "https://docs.google.com/forms/d/e/1FAIpQLScuvlfPlRVYlJgmbI0Et4-mMAjT8YZpH8gMHsOR8p3zTUuj2A/viewform?embedded=true";

export default function SummerCampWeek2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-800">Summer Camp – Week 2</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">Join us for an exciting week of chess learning and fun</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <RegistrationForm title="Summer Camp Registration" formSrc={FORM_SRC} />

              <div className="space-y-6">
                <div className="text-center">
                  <Image src="/images/summer-camp-flyer.jpg" alt="Summer Camp Banner" width={400} height={300} className="w-full rounded-lg shadow-md" />
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center text-teal-800">Contact Information</h3>
                  <div className="text-center space-y-2">
                    <p className="text-gray-600"><strong>For more information, Contact:</strong></p>
                    <p className="text-gray-700">Mohua Maity | (770) 815-8221 |
                      <a href="mailto:chess@mohar.org" className="text-teal-700 hover:text-teal-900 underline ml-1">chess@mohar.org</a>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Location</h3>
                  <div className="text-gray-700">
                    <p className="font-semibold">MoharChess</p>
                    <p>3170 Peachtree Parkway STE 113</p>
                    <p>Suwanee, GA 30024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
