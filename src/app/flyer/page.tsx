import Image from "next/image";
import PrintButton from "./PrintButton";

export default function Flyer() {
  return (
    <>
      <style>{`
        @media print {
          header, footer, nav { display: none !important; }
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .flyer-page { box-shadow: none !important; }
        }
        @page {
          size: A4;
          margin: 0;
        }
      `}</style>

      {/* Print Button */}
      <div className="no-print flex justify-center py-4 bg-gray-100">
        <PrintButton />
      </div>

      {/* Flyer */}
      <div
        className="flyer-page mx-auto bg-white shadow-2xl flex flex-col"
        style={{ width: "210mm", height: "297mm", fontFamily: "sans-serif", overflow: "hidden" }}
      >
        {/* Top Banner */}
        <div className="bg-white text-teal-800 text-center py-3 px-8 border-b-2 border-teal-800">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/mohar.jpg"
              alt="MoharChess Logo"
              width={48}
              height={48}
              className="rounded-full border-2 border-orange-400"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-wide">MOHAR CHESS</h1>
            </div>
          </div>
        </div>

        {/* Hero Tagline */}
        <div className="bg-orange-500 text-white text-center py-2 px-8">
          <h2 className="text-base font-bold italic">
            &ldquo;Unlocking Potential Through Chess Education&rdquo;
          </h2>
        </div>

        {/* Main Content */}
        <div className="px-8 flex-1 flex flex-col justify-between py-4">

          {/* Founder Section */}
          <div className="flex gap-6 items-center flex-1">
            <div className="flex-shrink-0 text-center">
              <Image
                src="/images/Mohua.jpg"
                alt="Mohua Maity"
                width={120}
                height={120}
                className="rounded-full border-4 border-teal-800 shadow-lg mx-auto"
              />
              <p className="text-teal-800 font-bold text-sm mt-2">MOHUA MAITY</p>
              <p className="text-orange-500 text-xs font-semibold">Founder &amp; CEO</p>
              <p className="text-gray-500 text-xs">Vice President, GCA</p>
            </div>
            <div className="flex-1">
              <h3 className="text-teal-800 text-base font-bold mb-2 border-b-2 border-orange-400 pb-1">
                About Our Founder
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Mohua has been teaching chess for over <strong>12 years</strong> and is dedicated to promoting
                the game across all ages. She has organized scholastic state-level team tournaments
                and currently serves as <strong>Vice President</strong> of her state chess association.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                A <strong>certified Tournament Director</strong> and <strong>SafeSport-trained</strong> professional,
                she has represented her state chess association as a delegate at US Chess conferences.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Through Mohar Chess, Mohua runs tournaments, leads after-school clubs and summer camps,
                conducts workshops for senior living communities, and organizes fundraising tournaments —
                making chess <strong>accessible, impactful, and community-driven</strong>.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-teal-100 my-3" />

          {/* Who Should Join */}
          <div className="flex-1">
            <h3 className="text-teal-800 text-base font-bold mb-3 border-b-2 border-orange-400 pb-1">
              Who Should Join?
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                "Students seeking strategic thinking & analytical skills",
                "Parents looking for quality chess education for their children",
                "Adults wanting to learn chess or improve their game",
                "Senior citizens interested in cognitive stimulation",
                "Special needs children seeking therapeutic chess programs",
                "Competitive players targeting USCF-rated tournaments",
                "Schools & organizations wanting chess programs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold text-sm mt-0.5">♟</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-teal-100 my-3" />

          {/* Programs */}
          <div className="flex-1">
            <h3 className="text-teal-800 text-base font-bold mb-3 border-b-2 border-orange-400 pb-1">
              Our Programs
            </h3>
            <div className="grid grid-cols-6 gap-3 text-center">
              {[
                { icon: "🏫", label: "After-School Clubs" },
                { icon: "☀️", label: "Summer Camps" },
                { icon: "🏆", label: "USCF Tournaments" },
                { icon: "🎓", label: "Private Classes" },
                { icon: "🧩", label: "Workshops" },
                { icon: "🤝", label: "Community Events" },
              ].map((p, i) => (
                <div key={i} className="bg-teal-50 rounded-lg py-3 px-1 flex flex-col items-center justify-center">
                  <div className="text-2xl mb-1">{p.icon}</div>
                  <p className="text-teal-800 font-semibold text-xs">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-white px-8 py-3 border-t-2 border-teal-100">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-orange-500 text-lg mb-0.5">📞</div>
              <p className="text-xs font-bold uppercase tracking-wide text-teal-800">Phone</p>
              <p className="text-xs text-gray-700">(770) 815-8221</p>
            </div>
            <div>
              <div className="text-orange-500 text-lg mb-0.5">📧</div>
              <p className="text-xs font-bold uppercase tracking-wide text-teal-800">Email</p>
              <p className="text-xs text-gray-700">chess@mohar.org</p>
            </div>
            <div>
              <div className="text-orange-500 text-lg mb-0.5">📍</div>
              <p className="text-xs font-bold uppercase tracking-wide text-teal-800">Location</p>
              <p className="text-xs text-gray-700">Johns Creek, Georgia</p>
            </div>
          </div>
          <div className="text-center mt-2 pt-2 border-t border-gray-200">
            <p className="text-orange-500 text-xs tracking-widest uppercase font-semibold">
              facebook.com/moharchess &nbsp;|&nbsp; instagram.com/moharchess_official
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
