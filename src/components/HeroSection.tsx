import { sections } from "../data/prompts";

export default function HeroSection() {
  const totalPrompts = sections.reduce((acc, s) => acc + s.prompts.length, 0);

  return (
    <div className="border border-gray-300 p-6 md:p-8 mb-10 bg-white">
      <div className="mb-6">
        <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 mb-3">
          v2024 — {totalPrompts} Prompt Tersedia
        </span>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
          Kitab Prompt Skripsi
        </h1>

        <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
          Kumpulan prompt untuk membantu penulisan skripsi menggunakan AI. 
          Mencakup tahapan dari pencarian judul hingga persiapan sidang, 
          dengan pendekatan anti-plagiarisme dan gaya bahasa akademis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-gray-200 pt-6">
        <div className="text-center p-3 bg-gray-50 border border-gray-200">
          <p className="text-xl font-semibold text-gray-800">{sections.length}</p>
          <p className="text-gray-500 text-xs mt-1">Bagian/Bab</p>
        </div>
        <div className="text-center p-3 bg-gray-50 border border-gray-200">
          <p className="text-xl font-semibold text-gray-800">{totalPrompts}</p>
          <p className="text-gray-500 text-xs mt-1">Total Prompt</p>
        </div>
        <div className="text-center p-3 bg-gray-50 border border-gray-200">
          <p className="text-xl font-semibold text-gray-800">
            {sections.reduce(
              (acc, s) =>
                acc +
                s.prompts.filter(
                  (p) => p.badge && p.badge.includes("KUALITATIF")
                ).length,
              0
            )}
          </p>
          <p className="text-gray-500 text-xs mt-1">Kualitatif</p>
        </div>
        <div className="text-center p-3 bg-gray-50 border border-gray-200">
          <p className="text-xl font-semibold text-gray-800">
            {sections.reduce(
              (acc, s) =>
                acc +
                s.prompts.filter(
                  (p) => p.badge && p.badge.includes("KUANTITATIF")
                ).length,
              0
            )}
          </p>
          <p className="text-gray-500 text-xs mt-1">Kuantitatif</p>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500 border-t border-gray-200 pt-4">
        <p>
          Metode: Kualitatif & Kuantitatif | Fitur: Step-by-step | 
          Cara pakai: Copy & paste ke AI assistant
        </p>
      </div>
    </div>
  );
}