'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const images = [
  "WhatsApp Image 2026-05-01 at 12.20.25 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.21.03 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.21.56 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.22.40 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.24.08 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.25.10 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.25.45 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.26.09 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.26.59 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.29.49 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.30.16 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.30.51 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.33.52 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.34.16 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.34.54 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.35.25 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.35.54 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.36.15 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.36.46 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.37.10 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.37.42 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.38.15 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.38.52 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.39.28 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.39.56 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.40.11 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.40.35 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.41.01 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.41.28 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.41.56 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.42.19 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.43.11 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.43.47 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.44.11 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.44.30 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.44.56 PM.jpeg",
  "WhatsApp Image 2026-05-01 at 12.46.22 PM.jpeg",
];

const row1 = images.slice(0, 19);
const row2 = images.slice(19);

export default function OurGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % images.length);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-playfair mb-4 text-teal-800">
            Our <span className="text-orange-400">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Moments from our chess classes, tournaments, and events
          </p>
          <nav className="text-gray-500">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span className="mx-2">»</span>
            <span>Our Gallery</span>
          </nav>
        </div>
      </section>

      {/* Auto-scrolling marquee strips */}
      <section className="py-8 bg-gray-50 overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left {
            display: flex;
            animation: scroll-left 40s linear infinite;
            width: max-content;
          }
          .marquee-right {
            display: flex;
            animation: scroll-right 40s linear infinite;
            width: max-content;
          }
          .marquee-left:hover, .marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div className="marquee-left">
            {[...row1, ...row1].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-48 mx-2 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/images/gallery/${encodeURIComponent(img)}`}
                  alt={`Gallery image ${i + 1}`}
                  width={256}
                  height={192}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="marquee-right">
            {[...row2, ...row2].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-48 mx-2 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/images/gallery/${encodeURIComponent(img)}`}
                  alt={`Gallery image ${i + 20}`}
                  width={256}
                  height={192}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-teal-800 text-center mb-10">
            All Photos
          </h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={`/images/gallery/${encodeURIComponent(img)}`}
                  alt={`Gallery photo ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="relative max-w-5xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/images/gallery/${encodeURIComponent(images[lightboxIndex])}`}
              alt={`Gallery photo ${lightboxIndex + 1}`}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto object-contain rounded-lg"
              unoptimized
            />
            <p className="text-gray-400 text-center mt-2 text-sm">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-colors"
          >
            <FaChevronRight size={20} />
          </button>

          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-3 rounded-full transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
