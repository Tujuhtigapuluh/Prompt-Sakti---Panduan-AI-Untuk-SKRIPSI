import { sections } from "../data/prompts";

export default function HeroSection() {
  const totalPrompts = sections.reduce((acc, s) => acc + s.prompts.length, 0);

  const features = [
    "Anti-Turnitin",
    "Kualitatif & Kuantitatif",
    "Step by Step",
    "Copy & Paste",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 mb-10 shadow-2xl">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="bg-red-500/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-red-300/30">
            🛡️ Anti-Turnitin
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            📜 Versi Lengkap 2024
          </span>
          <span className="bg-yellow-400/30 backdrop-blur-sm text-yellow-100 text-xs font-semibold px-3 py-1 rounded-full">
            ⭐ {totalPrompts} Prompt
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Kitab Prompt Skripsi
          <br />
          <span className="text-yellow-300">untuk AI</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
          Panduan prompt lengkap & sistematis untuk menulis skripsi menggunakan
          AI — dari pencarian judul hingga persiapan sidang. Dilengkapi{" "}
          <strong>role setting anti-Turnitin</strong>, prompt khusus{" "}
          <strong>kualitatif & kuantitatif</strong>, dan gaya bahasa akademis baku.
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {features.map((f) => (
            <span
              key={f}
              className="bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10"
            >
              ✓ {f}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Bagian/Bab", value: sections.length, icon: "📂" },
            { label: "Total Prompt", value: totalPrompts, icon: "📋" },
            {
              label: "Kualitatif",
              value: sections.reduce(
                (acc, s) =>
                  acc +
                  s.prompts.filter(
                    (p) => p.badge && p.badge.includes("KUALITATIF")
                  ).length,
                0
              ),
              icon: "🟢",
            },
            {
              label: "Kuantitatif",
              value: sections.reduce(
                (acc, s) =>
                  acc +
                  s.prompts.filter(
                    (p) => p.badge && p.badge.includes("KUANTITATIF")
                  ).length,
                0
              ),
              icon: "🔵",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10"
            >
              <span className="text-2xl">{stat.icon}</span>
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              <p className="text-white/70 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
