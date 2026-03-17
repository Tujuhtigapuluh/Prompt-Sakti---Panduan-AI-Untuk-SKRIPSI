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
      className="bg-white border border-gray-200 p-6 mb-12 scroll-mt-24"
    >
      <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Cara Penggunaan
        </h2>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 p-4 bg-gray-50 border border-gray-100">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-800 text-white text-sm font-medium">
                {step.num}
              </span>
            </div>
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

      {/* Notices - lebih sederhana */}
      <div className="mt-6 space-y-3">
        <div className="p-4 bg-gray-100 border-l-4 border-gray-600">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Catatan:</strong> Role Setting cukup digunakan <strong>sekali di awal sesi</strong>. 
            Setelah itu, semua prompt lainnya langsung berisi instruksi spesifik — lebih efisien dan fokus.
          </p>
        </div>
        
        <div className="p-4 bg-gray-100 border-l-4 border-gray-600">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Anti-Turnitin:</strong> Selama Role Setting aktif, output AI akan mengikuti aturan 
            anti-plagiarisme otomatis. Namun, Anda tetap harus me-review hasilnya.
          </p>
        </div>
        
        <div className="p-4 bg-gray-100 border-l-4 border-gray-600">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Penting:</strong> Prompt ini adalah template panduan. Hasil dari AI tetap harus Anda review,
            sesuaikan dengan pedoman skripsi kampus, dan validasi kebenarannya. AI adalah asisten, bukan pengganti
            proses berpikir Anda. Selalu konsultasikan dengan dosen pembimbing.
          </p>
        </div>
      </div>
    </div>
  );
}