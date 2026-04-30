'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        question: 'What age do you start teaching chess?',
        answer: 'We welcome students as young as 5 years old. Our beginner programs are designed to be fun and engaging for young learners, using visual aids and age-appropriate teaching methods to introduce the game.',
      },
      {
        question: 'Does my child need to know how to play chess before joining?',
        answer: 'Not at all! We have beginner classes specifically designed for students with zero chess experience. We start from the very basics — how the pieces move — and progress at a comfortable pace.',
      },
      {
        question: 'Do I need to bring a chess set?',
        answer: 'No. All equipment is provided during in-person sessions. For online classes, we recommend having a physical board at home to follow along, but it is not required — students can use free online tools like Chess.com or Lichess.',
      },
    ],
  },
  {
    category: 'Classes & Programs',
    items: [
      {
        question: 'What is the class size?',
        answer: 'Group classes are kept small — typically 6 to 10 students — so every child gets personal attention. Private lessons are one-on-one with the instructor.',
      },
      {
        question: 'How long is each session?',
        answer: 'Group classes run for 60 minutes. Private lessons can be 45 or 60 minutes depending on the package you choose. Summer camp sessions run for 3 hours per day.',
      },
      {
        question: 'Do you offer online classes?',
        answer: 'Yes! We offer fully online group and private lessons via video call. Online students receive the same quality of instruction as in-person students and can participate in online tournaments.',
      },
      {
        question: 'What skill levels do you teach?',
        answer: 'We teach all levels — absolute beginners through advanced tournament players. Students are placed in groups that match their current skill level so they are always appropriately challenged.',
      },
    ],
  },
  {
    category: 'Pricing & Registration',
    items: [
      {
        question: 'How much do classes cost?',
        answer: 'Group classes start at $35 per session. Private lessons start at $60 per session. We also offer monthly packages at a discounted rate. Contact us at chess@mohar.org for the latest pricing and package options.',
      },
      {
        question: 'How do I register my child?',
        answer: 'You can register through our website using the Browse Sessions page to find a class that fits your schedule, or reach out to us directly via the Contact Us page, WhatsApp, or email at chess@mohar.org and we will help you get enrolled.',
      },
      {
        question: 'Is there a registration fee?',
        answer: 'There is no separate registration fee. You only pay for the class or package you select.',
      },
    ],
  },
  {
    category: 'Attendance & Tournaments',
    items: [
      {
        question: 'What happens if my child misses a class?',
        answer: 'We understand that schedules change. Please notify us in advance and we will do our best to arrange a make-up session or provide a recording when available.',
      },
      {
        question: 'Do you host tournaments?',
        answer: 'Yes! We regularly host rated and unrated tournaments for students of all levels throughout the year. Tournaments are a great way for students to apply what they have learned and gain competitive experience.',
      },
      {
        question: 'Does my child need to be a student to participate in your tournaments?',
        answer: 'No. Our tournaments are open to all chess players in the community, not just MoharChess students. Check our Tournaments page for upcoming event details and registration.',
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-teal-800 pr-4">{question}</span>
        <FaChevronDown
          className={`flex-shrink-0 text-orange-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={14}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4 text-teal-800">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Everything parents want to know before getting started with MoharChess.
          </p>
          <nav className="text-gray-500">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span className="mx-2">»</span>
            <span>FAQ</span>
          </nav>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqs.map((section) => (
            <div key={section.category} className="mb-10">
              <h2 className="text-xl font-bold text-teal-800 font-playfair mb-4 pb-2 border-b-2 border-orange-400 inline-block">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <AccordionItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions CTA */}
          <div className="mt-12 bg-teal-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold font-playfair mb-2">Still have questions?</h3>
            <p className="text-teal-200 mb-6">We are happy to help. Reach out to us directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="https://wa.me/17708158221"
                target="_blank"
                className="bg-white text-teal-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
