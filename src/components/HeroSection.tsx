import { sections } from "../data/prompts";

export default function HeroSection() {
  const totalPrompts = sections.reduce((acc, s) => acc + s.prompts.length, 0);

  return (
    <div className="relative border border-gray-200 p-6 md:p-8 mb-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
      
      {/* Accent subtle */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded-t-xl" />

      <div className="mb-6">
        <span className="inline-flex items-center gap-1 bg-gray-900 text-white text-[11px] px-2.5 py-1 rounded-md mb-4 tracking-wide">
          v2024 — {totalPrompts} Prompt
        </span>
        
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-snug tracking-tight">
          Kitab Prompt Skripsi
        </h1>

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
          Kumpulan prompt untuk membantu proses penulisan skripsi dengan bantuan AI.
          Disusun dari tahap eksplorasi judul hingga persiapan sidang, dengan pendekatan
          akademis yang lebih terstruktur dan minim plagiarisme.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-gray-100 pt-6">
        
        <div className="group text-center p-4 rounded-lg bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200">
          <p className="text-xl font-semibold text-gray-900">
            {sections.length}
          </p>
          <p className="text-gray-500 text-xs mt-1">Bagian</p>
        </div>

        <div className="group text-center p-4 rounded-lg bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200">
          <p className="text-xl font-semibold text-gray-900">
            {totalPrompts}
          </p>
          <p className="text-gray-500 text-xs mt-1">Total Prompt</p>
        </div>

        <div className="group text-center p-4 rounded-lg bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200">
          <p className="text-xl font-semibold text-gray-900">
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

        <div className="group text-center p-4 rounded-lg bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200">
          <p className="text-xl font-semibold text-gray-900">
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

      <div className="mt-6 text-xs text-gray-500 border-t border-gray-100 pt-4">
        <p className="leading-relaxed">
          Metode: Kualitatif & Kuantitatif · Step-by-step · Tinggal copy & pakai di AI
        </p>
      </div>
    </div>
  );
}