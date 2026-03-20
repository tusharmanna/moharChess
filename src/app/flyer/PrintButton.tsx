'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-teal-800 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
