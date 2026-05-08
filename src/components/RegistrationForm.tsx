'use client';

import { useState, useRef } from 'react';

interface RegistrationFormProps {
  title: string;
  formSrc: string;
}

export default function RegistrationForm({ title, formSrc }: RegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const loadCount = useRef(0);

  const handleIframeLoad = () => {
    loadCount.current += 1;
    // Form has 2 pages: load1=initial, load2=Next, load3=Submit confirmation
    if (loadCount.current >= 3) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h2>

      <div className="w-full rounded-lg">
        <iframe
          src={formSrc}
          className="w-full border-0"
          style={{ height: submitted ? '320px' : '2200px' }}
          title={title}
          onLoad={handleIframeLoad}
        >
          Loading…
        </iframe>
      </div>

      {submitted && (
        <div className="mt-4 p-6 bg-orange-50 border-2 border-orange-200 rounded-xl text-center">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-1">Step 2</p>
          <p className="text-gray-700 font-medium mb-4">
            ✅ Form submitted! Click below to complete your payment and confirm your spot:
          </p>
          <a
            href="https://sites.google.com/view/moharchesspayment/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg"
          >
            👉 Complete Payment
          </a>
        </div>
      )}
    </div>
  );
}
