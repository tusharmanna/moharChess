"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const API = "https://blyatvehjkzsiyknizhl.supabase.co/rest/v1/rpc/get_club_calendar_items";
const PUBLIC_KEY = "sb_publishable_uE-RRouXcn4j33hSE1tEdg_GDQj_rp4";
const CLUB_ID = "e64a82c2-5404-462f-8517-ec5bef6a1f83";

type Session = { starts_at: string; ends_at: string | null };
type CalendarItem = {
  item_id: string;
  item_type: "event" | "tournament";
  title: string;
  start_at: string;
  end_at: string | null;
  location: string | null;
  source_club_slug: string;
  source_slug: string;
  description: string | null;
  image_url: string | null;
  sessions: Session[];
};
type UpcomingItem = CalendarItem & { nextStart: string; nextEnd: string | null };

function upcoming(items: CalendarItem[]): UpcomingItem[] {
  const now = Date.now();
  return items
    .map((item) => {
      const session = [...(item.sessions ?? [])]
        .filter((value) => new Date(value.starts_at).getTime() >= now)
        .sort((a, b) => +new Date(a.starts_at) - +new Date(b.starts_at))[0];
      if (session) return { ...item, nextStart: session.starts_at, nextEnd: session.ends_at };
      if (+new Date(item.start_at) >= now) {
        return { ...item, nextStart: item.start_at, nextEnd: item.end_at };
      }
      return null;
    })
    .filter((item): item is UpcomingItem => item !== null)
    .sort((a, b) => +new Date(a.nextStart) - +new Date(b.nextStart));
}

function eventDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

function eventTime(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function plainText(value: string | null) {
  return (value ?? "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[#*_+\[\]()]/g, "")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<UpcomingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(API, {
      method: "POST",
      headers: {
        apikey: PUBLIC_KEY,
        Authorization: `Bearer ${PUBLIC_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ target_club_id: CLUB_ID }),
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load events");
        return response.json() as Promise<CalendarItem[]>;
      })
      .then((items) => setEvents(upcoming(items)))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) setFailed(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  function scroll(direction: -1 | 1) {
    scroller.current?.scrollBy({
      left: direction * scroller.current.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <section aria-labelledby="upcoming-events-heading" className="bg-white py-5 lg:py-6">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Mohar Chess Academy</p>
            <h2 id="upcoming-events-heading" className="font-playfair text-3xl font-bold text-teal-800 lg:text-4xl">
              Upcoming Mohar Chess Events
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => scroll(-1)} aria-label="Show previous events" className="flex size-10 items-center justify-center rounded-full border border-blue-200 bg-white text-teal-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600">
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Show next events" className="flex size-10 items-center justify-center rounded-full border border-blue-200 bg-white text-teal-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600">
              <FaChevronRight aria-hidden="true" />
            </button>
            <Link href="/event-calendar" className="ml-1 hidden font-semibold text-teal-800 transition-colors hover:text-orange-500 sm:block">
              Full calendar <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {loading && <div className="rounded-2xl border border-blue-100 bg-white p-12 text-center text-gray-600 shadow-sm">Loading upcoming events from Chess67…</div>}
        {!loading && failed && (
          <div className="rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">The live events could not be loaded.</p>
            <a href="https://chess67.com/club/mohar-chess/calendar" className="mt-2 inline-block font-semibold text-teal-800 underline">View the calendar on Chess67</a>
          </div>
        )}
        {!loading && !failed && events.length === 0 && <div className="rounded-2xl border border-blue-100 bg-white p-12 text-center text-gray-600 shadow-sm">No upcoming events are currently scheduled.</div>}

        {!loading && events.length > 0 && (
          <div ref={scroller} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-color:#93c5fd_transparent] [scrollbar-width:thin]">
            {events.map((event) => {
              const detailsUrl = `https://chess67.com/club/${event.source_club_slug}/${event.item_type === "event" ? "events" : "tournaments"}/${event.source_slug}`;
              const location = event.location?.split(" — ")[0].split(" - ")[0];
              return (
                <article key={`${event.item_id}-${event.nextStart}`} className="w-[88%] shrink-0 snap-start rounded-xl border border-blue-100 bg-white shadow-sm transition-shadow hover:shadow-md sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]">
                  <div className="p-3.5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-sm font-bold text-blue-600">{eventDate(event.nextStart)} · {eventTime(event.nextStart)}</p>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">{event.item_type}</span>
                    </div>
                    <h3 className="font-playfair mb-2 text-lg font-bold leading-snug text-teal-800">{event.title}</h3>
                    {location && <p className="mb-2 flex items-start gap-2 text-sm text-gray-500"><FaMapMarkerAlt className="mt-1 shrink-0 text-orange-400" aria-hidden="true" /><span>{location}</span></p>}
                    <p className="mb-2 line-clamp-2 text-sm leading-relaxed text-gray-600">{plainText(event.description)}</p>
                    <a href={detailsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 transition-colors hover:text-orange-500">
                      View details &amp; registration <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
