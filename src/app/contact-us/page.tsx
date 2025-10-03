'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Toast, { ToastType } from '@/components/Toast';

// Note: Metadata export moved to layout or use next/head for client components

// Contact Form Component
function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{show: boolean, message: string, type: ToastType} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      // Replace with your EmailJS credentials
      // For now, fallback to mailto if EmailJS is not configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        setToast({
          show: true,
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
          type: 'success'
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        // Fallback to mailto
        const emailSubject = `Contact Form: ${formData.subject || 'General Inquiry'}`;
        const emailBody = `
Hello MoharChess Team,

I am contacting you through your website contact form.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}

Best regards,
${formData.firstName} ${formData.lastName}
        `.trim();

        const mailtoLink = `mailto:mohar.chess@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        setToast({
          show: true,
          message: 'Your email client will open with the pre-filled message. Please send the email to complete your inquiry.',
          type: 'info'
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setToast({
        show: true,
        message: 'Failed to send message. Please try again or contact us directly at mohar.chess@gmail.com',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast?.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
            placeholder="Your first name"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
        >
          <option value="">Select a subject</option>
          <option value="Enrollment Information">Enrollment Information</option>
          <option value="Class Schedules">Class Schedules</option>
          <option value="Pricing Questions">Pricing Questions</option>
          <option value="Tournament Information">Tournament Information</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-vertical"
          placeholder="Tell us how we can help you..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-4 px-8 rounded-lg transition-colors duration-300 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-orange-500 hover:bg-orange-600'
        } text-white`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        We&apos;ll respond to your inquiry within 24 hours
      </p>
      </form>
    </>
  );
}

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4">
              Contact <span className="text-orange-400">Us</span>
            </h1>
            <nav className="text-gray-200">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <span className="mx-2">»</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-teal-800 font-playfair mb-4">
                  Any questions?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contact MoharChess Today!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Address</h3>
                    <p className="text-gray-600">
                      Georgia, USA<br />
                      (Serving students nationwide through online classes)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Email</h3>
                    <Link
                      href="mailto:mohar.chess@gmail.com"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      mohar.chess@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneVolume className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Phone</h3>
                    <Link
                      href="tel:7708158221"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      7708158221
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-800 mb-2">WhatsApp</h3>
                    <Link
                      href="https://wa.me/17708158221?text=Hello%20MoharChess!%20I%20would%20like%20to%20know%20more%20about%20your%20chess%20classes."
                      target="_blank"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> Closed</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-teal-800 font-playfair mb-6">
                Send us a Message
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-800 font-playfair mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Visit our location in Johns Creek, Georgia
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52973.92796623283!2d-84.25891772167969!3d34.02920700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a4b8b1f5b1b5%3A0x8b5b8b8b8b8b8b8b!2sJohns%20Creek%2C%20GA!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mohar Chess Location - Johns Creek, Georgia"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <strong>Mohar Chess</strong><br />
                Johns Creek, Georgia<br />
                Serving students nationwide through online classes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait! Join MoharChess today and start your chess journey with individualized training.
          </p>
        </div>
      </section>
    </div>
  );
}
