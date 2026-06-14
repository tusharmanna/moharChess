"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const flyers = [
  { src: "/images/flyers/flyer-1.jpeg", alt: "MoharChess event flyer 1" },
  { src: "/images/flyers/flyer-2.jpeg", alt: "MoharChess event flyer 2" },
  { src: "/images/flyers/flyer-3.jpeg", alt: "MoharChess event flyer 3" },
  { src: "/images/flyers/flyer-4.jpeg", alt: "MoharChess event flyer 4" },
];

const AUTO_ADVANCE_MS = 4000;

export default function FlyersCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + flyers.length) % flyers.length);
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % flyers.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + flyers.length) % flyers.length),
    []
  );

  // Auto-advance. Only depends on `paused` so the timer keeps running
  // continuously instead of resetting on every slide change.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % flyers.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="bg-gray-50 py-8"
      aria-roledescription="carousel"
      aria-label="MoharChess event flyers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="relative mx-auto flex max-w-md items-center justify-center">
          {/* Viewport */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            {/* Sliding track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {flyers.map((flyer, index) => (
                <div
                  key={flyer.src}
                  className="flex h-[360px] w-full flex-shrink-0 items-center justify-center sm:h-[460px] lg:h-[520px]"
                >
                  <Image
                    src={flyer.src}
                    alt={flyer.alt}
                    width={600}
                    height={840}
                    className="h-full w-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous flyer"
            className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-teal-800 shadow-md transition-colors hover:bg-white"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next flyer"
            className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-teal-800 shadow-md transition-colors hover:bg-white"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {flyers.map((flyer, index) => (
            <button
              key={flyer.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to flyer ${index + 1}`}
              aria-current={index === current}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current ? "bg-teal-800" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
