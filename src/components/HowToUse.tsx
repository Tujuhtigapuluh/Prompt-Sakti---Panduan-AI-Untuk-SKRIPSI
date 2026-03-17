export default function HowToUse() {
  const steps = [
    {
      num: "1",
      title: "Aktifkan Role Setting",
      desc: "Salin Role Setting ke AI di awal sesi. Ini mengatur AI sebagai ahli akademik & anti-Turnitin. Cukup sekali saja.",
    },
    {
      num: "2",
      title: "Pilih Bagian Skripsi",
      desc: "Navigasi ke bab yang sedang dikerjakan. Prompt sudah berisi instruksi langsung tanpa perlu mengulang role setting.",
    },
    {
      num: "3",
      title: "Kustomisasi Data",
      desc: "Ganti bagian dalam tanda [...] dengan informasi penelitian Anda: judul, variabel, metode, jumlah paragraf, dll.",
    },
    {
      num: "4",
      title: "Salin & Tempel ke AI",
      desc: "Klik tombol 'Salin Prompt', tempel ke ChatGPT / Claude / Gemini. Hasil akan orisinal karena Role Setting sudah aktif.",
    },
    {
      num: "5",
      title: "Review & Konsultasi",
      desc: "Periksa output AI, sesuaikan dengan pedoman kampus, dan selalu konsultasikan dengan dosen pembimbing Anda.",
    },
  ];

  return (
    <div
      id="cara-pakai"
      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 mb-12 scroll-mt-24"
    >
      <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
          Cara Penggunaan
        </h2>
      </div>

      {/* Steps */}
      <div className="space-y-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative flex gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50/60 hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            {/* Connector line */}
            {i !== steps.length - 1 && (
              <div className="absolute left-6 top-12 w-px h-[calc(100%-3rem)] bg-gray-200" />
            )}

            {/* Number */}
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-semibold shadow-sm">
                {step.num}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Notices */}
      <div className="mt-8 space-y-3">
        
        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Catatan:</strong> Role Setting cukup digunakan <strong>sekali di awal sesi</strong>. 
            Setelah itu, semua prompt langsung fokus ke instruksi spesifik.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Anti-Turnitin:</strong> Output AI akan lebih orisinal selama Role Setting aktif, 
            namun tetap perlu pengecekan ulang.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Penting:</strong> Gunakan hasil sebagai referensi. Tetap sesuaikan dengan pedoman kampus 
            dan konsultasikan dengan dosen pembimbing.
          </p>
        </div>

      </div>
    </div>
  );
}