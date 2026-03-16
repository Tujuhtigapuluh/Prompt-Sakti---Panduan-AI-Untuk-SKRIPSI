export default function HowToUse() {
  const steps = [
    {
      num: "01",
      title: "Aktifkan Role Setting (Sekali Saja)",
      desc: "Buka '🛡️ Prompt Master' dan salin Role Setting ke AI. Ini mengatur AI sebagai ahli akademik & anti-Turnitin. Cukup SEKALI di awal sesi!",
      icon: "🛡️",
    },
    {
      num: "02",
      title: "Pilih Bagian Skripsi",
      desc: "Navigasi ke bab yang sedang dikerjakan. Prompt sudah berisi instruksi langsung tanpa perlu mengulang role setting.",
      icon: "📂",
    },
    {
      num: "03",
      title: "Kustomisasi & Isi Data",
      desc: 'Ganti bagian dalam tanda [...] dengan informasi penelitian Anda: judul, variabel, metode, jumlah paragraf, dll.',
      icon: "✏️",
    },
    {
      num: "04",
      title: "Salin & Tempel ke AI",
      desc: "Klik tombol 'Salin Prompt', tempel ke ChatGPT / Claude / Gemini. Hasil akan orisinal karena Role Setting sudah aktif.",
      icon: "🤖",
    },
    {
      num: "05",
      title: "Review & Konsultasi",
      desc: "Periksa output AI, sesuaikan dengan pedoman kampus, dan SELALU konsultasikan dengan dosen pembimbing Anda.",
      icon: "✅",
    },
  ];

  return (
    <div
      id="cara-pakai"
      className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-10 mb-10 border border-indigo-100 scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📖</span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Cara Menggunakan Kitab Ini
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className={`bg-white rounded-2xl p-5 h-full shadow-sm border hover:shadow-md transition-shadow ${
              i === 0 ? "border-red-200 ring-1 ring-red-100" : "border-gray-100"
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{step.icon}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  i === 0
                    ? "text-red-600 bg-red-50"
                    : "text-indigo-500 bg-indigo-50"
                }`}>
                  STEP {step.num}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-indigo-300">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Important notice */}
      <div className="mt-6 space-y-3">
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <p className="text-emerald-800 text-sm leading-relaxed">
            💡 <strong>Konsep Baru:</strong> Role Setting cukup digunakan <strong>SEKALI di awal sesi</strong> untuk mengatur AI sebagai ahli akademik anti-Turnitin.
            Setelah itu, semua prompt lainnya langsung berisi <strong>instruksi spesifik</strong> tanpa perlu mengulang role setting — lebih efisien dan fokus!
          </p>
        </div>
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-800 text-sm leading-relaxed">
            🛡️ <strong>Anti-Turnitin:</strong> Selama Role Setting aktif, seluruh output AI akan mengikuti aturan
            anti-plagiarisme otomatis. Namun, Anda tetap harus me-review hasilnya — 
            sentuhan personal dan pemahaman Anda tetap diperlukan.
          </p>
        </div>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-amber-800 text-sm leading-relaxed">
            ⚠️ <strong>Penting:</strong> Prompt ini adalah <em>template panduan</em>. Hasil dari AI tetap harus Anda review,
            sesuaikan dengan pedoman skripsi kampus, dan validasi kebenarannya. AI adalah <em>asisten</em>, bukan pengganti
            proses berpikir dan penelitian Anda. Selalu konsultasikan dengan dosen pembimbing.
          </p>
        </div>
      </div>
    </div>
  );
}
