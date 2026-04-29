'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="border-2 border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
