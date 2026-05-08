import Link from "next/link";
import { FaCheckCircle, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "Complete Your Payment - MoharChess",
  description: "Complete your MoharChess registration payment via Zelle. Your spot is confirmed only after payment is received.",
});

export default function Payment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-playfair mb-4 text-teal-800">
            Registration <span className="text-orange-400">Received!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for registering with Mohar Chess Academy. Your spot is confirmed only after payment is received.
          </p>
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                2
              </div>
              <h2 className="text-2xl font-bold text-teal-800">Complete Your Payment</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Please make your payment to secure your spot.
            </p>

            {/* Complete Payment Button */}
            <div className="text-center mb-8">
              <a
                href="https://sites.google.com/view/moharchesspayment/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-colors duration-300 shadow-lg"
              >
                👉 Click Here to Complete Payment
              </a>
            </div>

            {/* Zelle Box */}
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 text-center mb-6">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Pay via Zelle</p>
              <p className="text-3xl font-bold text-teal-800 mb-1">mohar.chess@gmail.com</p>
              <p className="text-gray-500 text-sm">Send payment to this Zelle email address</p>
            </div>

            {/* Instructions */}
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-0.5">1.</span>
                <p>Open your banking app and go to <strong>Zelle</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-0.5">2.</span>
                <p>Send payment to <strong>mohar.chess@gmail.com</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-0.5">3.</span>
                <p>In the memo/note, include your <strong>child&apos;s name and program</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-0.5">4.</span>
                <p>You will receive a confirmation email once payment is verified</p>
              </div>
            </div>
          </div>

          {/* Questions box */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">Have Questions?</h3>
            <div className="space-y-4">
              <a href="tel:7708158221" className="flex items-center gap-3 text-gray-700 hover:text-teal-800 transition-colors">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-orange-500" />
                </div>
                <span>770-815-8221</span>
              </a>
              <a href="mailto:chess@mohar.org" className="flex items-center gap-3 text-gray-700 hover:text-teal-800 transition-colors">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-orange-500" />
                </div>
                <span>chess@mohar.org</span>
              </a>
              <a href="https://wa.me/17708158221" target="_blank" className="flex items-center gap-3 text-gray-700 hover:text-teal-800 transition-colors">
                <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-orange-500" />
                </div>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/" className="text-teal-800 hover:text-orange-500 transition-colors font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
