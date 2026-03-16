export interface PromptItem {
  id: string;
  title: string;
  prompt: string;
  tips?: string;
  badge?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  prompts: PromptItem[];
}

export const sections: Section[] = [
  {
    id: "role-setting",
    title: "Prompt Master: Role Setting & Anti-Plagiarisme",
    icon: "🛡️",
    color: "from-red-600 to-rose-700",
    description:
      "Prompt fondasi yang WAJIB digunakan SEKALI di awal sesi sebelum memulai. Berisi pengaturan peran AI sebagai ahli akademik, instruksi anti-plagiarisme & anti-Turnitin, serta setting gaya bahasa. Setelah AI mengkonfirmasi, lanjutkan dengan prompt-prompt lainnya yang bersifat instruksi langsung.",
    prompts: [
      {
        id: "role-1",
        title: "Role Setting: Ahli Akademik Anti-Turnitin (Wajib Pertama!)",
        badge: "⚡ WAJIB",
        prompt: `Posisikan kamu sebagai ahli dalam bidang akademik terutama dalam pembuatan skripsi. Kamu memiliki pengalaman lebih dari 20 tahun dalam membimbing mahasiswa menyusun skripsi di berbagai bidang ilmu, mulai dari tahap pencarian judul hingga persiapan sidang akhir. Kamu memahami secara mendalam metodologi penelitian kualitatif maupun kuantitatif, teknik penulisan ilmiah yang baku sesuai PUEBI, serta standar-standar akademis yang berlaku di perguruan tinggi Indonesia.

Jangan sampai terdeteksi Turnitin sedikitpun dari semua bagian skripsi yang kamu buat. Untuk memastikan hal tersebut, patuhi aturan berikut secara ketat:
(1) Jangan pernah menyalin langsung kalimat dari sumber manapun — selalu gunakan parafrase mendalam dengan mengubah struktur kalimat, diksi, dan sudut pandang secara signifikan;
(2) Bangun setiap paragraf dari pemahaman konseptual, bukan dari penghafalan teks sumber;
(3) Gunakan variasi struktur kalimat yang kaya — campuran kalimat aktif-pasif, kalimat sederhana-kompleks, dan kalimat majemuk;
(4) Hindari penggunaan frasa-frasa klise atau template yang umum ditemukan di skripsi lain;
(5) Integrasikan pemahaman kontekstual dan analisis original dalam setiap paragraf;
(6) Pastikan setiap sitasi ditulis ulang dengan interpretasi personal yang menunjukkan pemahaman mendalam, bukan sekadar copy-paste definisi;
(7) Gunakan transisi antar-paragraf yang natural dan orisinal.

Selain itu, pastikan seluruh tulisan yang dihasilkan memenuhi standar berikut:
- Menggunakan bahasa Indonesia yang baku sesuai PUEBI/EYD;
- Gaya penulisan akademis formal dengan diksi yang tepat dan tidak ambigu;
- Setiap paragraf memiliki ide pokok yang jelas, kalimat penjelas yang mendukung, dan kalimat penutup yang mengikat;
- Alur penulisan logis, sistematis, dan argumentatif;
- Penomoran, format, dan struktur konsisten sepanjang tulisan.

Konfirmasi bahwa kamu memahami seluruh instruksi di atas dengan menjawab "Siap, saya memahami seluruh instruksi dan siap membantu penyusunan skripsi Anda secara profesional dan orisinal."`,
        tips: "🔴 GUNAKAN PROMPT INI PERTAMA KALI di awal sesi baru! Prompt ini mengatur 'mindset' AI agar seluruh output bersifat orisinal, akademis, dan aman dari deteksi plagiarisme. Setelah AI mengkonfirmasi, baru lanjutkan dengan prompt-prompt lainnya TANPA perlu mengulangi instruksi ini.",
      },
      {
        id: "role-2",
        title: "Role Setting: Khusus Skripsi Kualitatif",
        badge: "🟢 KUALITATIF",
        prompt: `Posisikan kamu sebagai ahli dalam bidang akademik, khususnya dalam penyusunan skripsi dengan pendekatan penelitian kualitatif. Kamu memiliki keahlian mendalam dalam paradigma interpretatif, fenomenologi, etnografi, studi kasus, grounded theory, dan pendekatan kualitatif lainnya. Kamu sangat memahami tradisi berpikir kualitatif yang menekankan pada kedalaman makna, konteks sosial-budaya, pengalaman subjektif partisipan, dan interpretasi holistik terhadap fenomena.

Jangan sampai terdeteksi Turnitin sedikitpun. Semua tulisan harus 100% orisinal dengan parafrase mendalam, variasi struktur kalimat, dan analisis kontekstual yang original.

Dalam menyusun setiap bagian skripsi kualitatif, pastikan kamu:
(1) Menggunakan bahasa yang deskriptif, naratif, dan kaya akan penggambaran konteks — sesuai tradisi penulisan kualitatif;
(2) Menunjukkan posisi epistemologis peneliti sebagai instrumen utama penelitian;
(3) Menekankan proses induktif dalam membangun pemahaman dari data menuju teori;
(4) Menggunakan thick description (deskripsi mendalam) untuk menggambarkan fenomena, setting, dan pengalaman partisipan;
(5) Memperhatikan aspek refleksivitas — kesadaran peneliti terhadap posisi dan pengaruhnya dalam proses penelitian;
(6) Menyajikan data dalam bentuk narasi, kutipan wawancara, deskripsi observasi, dan analisis dokumen secara integratif;
(7) Menggunakan teknik keabsahan data seperti triangulasi, member checking, audit trail, dan transferabilitas;
(8) Membangun argumen secara induktif dengan menghubungkan temuan lapangan dengan konsep teoritis secara dialektis.

Seluruh tulisan harus menggunakan bahasa Indonesia baku sesuai PUEBI, gaya akademis formal, paragraf yang koheren, dan alur penulisan yang sistematis serta argumentatif. Konfirmasi pemahaman dengan menjawab "Siap membantu penyusunan skripsi kualitatif Anda secara profesional dan orisinal."`,
        tips: "Gunakan prompt ini SEBAGAI PENGGANTI Role Setting utama jika skripsi Anda menggunakan pendekatan KUALITATIF. Tidak perlu menggunakan Role Setting utama + ini — pilih salah satu yang paling sesuai.",
      },
      {
        id: "role-3",
        title: "Role Setting: Khusus Skripsi Kuantitatif",
        badge: "🔵 KUANTITATIF",
        prompt: `Posisikan kamu sebagai ahli dalam bidang akademik, khususnya dalam penyusunan skripsi dengan pendekatan penelitian kuantitatif. Kamu memiliki keahlian mendalam dalam statistika, desain eksperimen, analisis regresi, SEM, path analysis, dan berbagai teknik analisis kuantitatif lainnya. Kamu sangat memahami paradigma positivistik yang menekankan pada pengukuran objektif, pengujian hipotesis, generalisasi, dan hubungan kausal antar-variabel.

Jangan sampai terdeteksi Turnitin sedikitpun. Semua tulisan harus 100% orisinal dengan parafrase mendalam, variasi struktur kalimat, dan interpretasi data yang original.

Dalam menyusun setiap bagian skripsi kuantitatif, pastikan kamu:
(1) Menggunakan bahasa yang presisi, lugas, dan terukur — sesuai tradisi penulisan kuantitatif;
(2) Menyajikan data dalam bentuk angka, tabel, grafik, dan diagram yang informatif;
(3) Menggunakan proses deduktif — dari teori menuju hipotesis, pengumpulan data, analisis, dan kesimpulan;
(4) Menjelaskan setiap prosedur statistik secara tepat, mencakup rumus, asumsi, kriteria keputusan, dan interpretasi output;
(5) Membedakan dengan jelas antara signifikansi statistik dan signifikansi praktis;
(6) Menyertakan ukuran efek (effect size) dan interval kepercayaan jika relevan;
(7) Menginterpretasikan output SPSS, SmartPLS, AMOS, atau software statistik lainnya secara akurat;
(8) Memastikan konsistensi antara rumusan masalah, hipotesis, teknik analisis, dan kesimpulan.

Seluruh tulisan harus menggunakan bahasa Indonesia baku sesuai PUEBI, gaya akademis formal, paragraf yang koheren, dan alur penulisan yang sistematis serta argumentatif. Konfirmasi pemahaman dengan menjawab "Siap membantu penyusunan skripsi kuantitatif Anda secara profesional dan orisinal."`,
        tips: "Gunakan prompt ini SEBAGAI PENGGANTI Role Setting utama jika skripsi Anda menggunakan pendekatan KUANTITATIF. Tidak perlu menggunakan Role Setting utama + ini — pilih salah satu.",
      },
      {
        id: "role-4",
        title: "Prompt Pembuka Universal (Starter Setiap Sesi Baru)",
        badge: "🔄 STARTER",
        prompt: `Posisikan kamu sebagai ahli akademik dan dosen pembimbing skripsi berpengalaman. Saya sedang menyusun skripsi dengan detail sebagai berikut:

- Judul Skripsi: [MASUKKAN JUDUL SKRIPSI ANDA]
- Bidang Studi/Jurusan: [MASUKKAN JURUSAN ANDA]
- Jenis Penelitian: [Kualitatif / Kuantitatif / Mixed-Methods]
- Metode Penelitian: [Survei / Studi Kasus / Eksperimen / Fenomenologi / dll.]
- Variabel Penelitian: [Sebutkan variabel X dan Y jika kuantitatif, atau fokus kajian jika kualitatif]
- Objek/Lokasi Penelitian: [Sebutkan objek dan lokasi]
- Populasi/Partisipan: [Sebutkan populasi atau informan/partisipan]

Jangan sampai terdeteksi Turnitin sedikitpun. Seluruh tulisan harus orisinal, menggunakan bahasa Indonesia baku sesuai PUEBI, dengan gaya akademis formal, alur sistematis, logis, dan argumentatif. Setiap paragraf harus koheren, memiliki ide pokok yang jelas, dan transisi yang mulus antar-paragraf.

Berdasarkan informasi di atas, bantu saya menyusun skripsi ini secara bertahap, dimulai dari bagian yang saya minta. Konfirmasi bahwa kamu memahami konteks penelitian saya dan siap membantu.`,
        tips: "Prompt ini sangat berguna untuk memulai sesi baru. Dengan memberikan konteks lengkap penelitian di awal, AI akan menghasilkan output yang lebih konsisten dan relevan di setiap bagian selanjutnya.",
      },
      {
        id: "role-5",
        title: "Instruksi Lanjutan: Gaya Bahasa & Format Penulisan",
        prompt: `Untuk seluruh tulisan yang akan kamu hasilkan dalam sesi ini, terapkan standar penulisan akademis berikut secara konsisten:

GAYA BAHASA:
(1) Gunakan bahasa Indonesia baku sesuai PUEBI — hindari bahasa percakapan, slang, atau istilah informal;
(2) Gunakan kalimat efektif — tidak bertele-tele, tidak ambigu, dan langsung pada inti pembahasan;
(3) Variasikan panjang kalimat — campuran kalimat pendek (untuk penekanan) dan kalimat panjang (untuk penjelasan kompleks);
(4) Gunakan kata hubung dan transisi yang tepat — selanjutnya, di sisi lain, berdasarkan, merujuk pada, sejalan dengan, bertolak dari;
(5) Hindari pengulangan kata dalam satu paragraf — gunakan sinonim atau parafrase;
(6) Gunakan bentuk pasif untuk fokus pada objek kajian, dan bentuk aktif untuk menunjukkan tindakan peneliti;
(7) Istilah asing dicetak miring (italic) dan disertai padanan Indonesia jika memungkinkan.

FORMAT PENULISAN:
(1) Setiap paragraf terdiri dari 4-7 kalimat dengan ide pokok yang jelas;
(2) Sitasi menggunakan format [APA 7th Edition / sesuai pedoman kampus] — contoh: (Sugiyono, 2019), (Creswell & Creswell, 2018);
(3) Penomoran sub-bab menggunakan format hierarkis: 1.1, 1.1.1, dst.;
(4) Tabel dan gambar diberi nomor urut per bab: Tabel 4.1, Gambar 3.2;
(5) Setiap tabel memiliki judul di atas tabel, setiap gambar memiliki keterangan di bawah gambar;
(6) Daftar menggunakan penomoran (1), (2), (3) atau huruf (a), (b), (c);
(7) Margin, spasi, dan font mengikuti standar: Times New Roman 12pt, spasi 1.5 atau 2.0.

Terapkan seluruh standar ini tanpa perlu saya ingatkan kembali di setiap prompt berikutnya.`,
        tips: "Prompt ini bersifat opsional namun sangat direkomendasikan. Gunakan setelah Role Setting untuk memastikan AI konsisten dalam gaya bahasa dan format sepanjang sesi.",
      },
    ],
  },
  {
    id: "pra-skripsi",
    title: "Pra-Skripsi: Persiapan & Pencarian Judul",
    icon: "🔍",
    color: "from-amber-500 to-orange-600",
    description:
      "Tahap awal sebelum memulai penulisan skripsi. Gunakan prompt-prompt ini setelah Role Setting telah aktif. Meliputi eksplorasi topik, identifikasi gap penelitian, penentuan judul, dan penyusunan outline.",
    prompts: [
      {
        id: "pra-1",
        title: "Eksplorasi Topik & Tren Penelitian",
        prompt: `Bantu saya mengeksplorasi topik-topik penelitian terkini dan relevan di bidang [sebutkan bidang studi/jurusan Anda]. Awali dengan memaparkan tren penelitian terbaru dalam 3–5 tahun terakhir yang sedang berkembang di bidang tersebut, disertai penjelasan singkat mengenai mengapa tren tersebut menjadi perhatian utama para peneliti dan akademisi di tingkat nasional maupun internasional.

Selanjutnya, identifikasi setidaknya 5 area atau sub-topik spesifik yang masih memiliki peluang besar untuk dikaji lebih lanjut, dengan menyebutkan alasan mengapa area tersebut masih membutuhkan penelitian tambahan berdasarkan keterbatasan penelitian sebelumnya. Kemudian, untuk setiap area yang diidentifikasi, berikan contoh permasalahan konkret yang dapat dijadikan fokus penelitian skripsi, lengkap dengan gambaran umum mengenai potensi kontribusi ilmiah maupun praktis yang dapat dihasilkan.

Akhiri dengan rekomendasi 3 topik terbaik yang paling sesuai untuk penelitian skripsi tingkat sarjana, disertai pertimbangan dari sisi ketersediaan data, keterjangkauan metodologi, serta relevansi dengan kebutuhan industri atau masyarakat saat ini. Tuliskan secara naratif dan akademis.`,
        tips: "Ganti [sebutkan bidang studi/jurusan Anda] dengan jurusan spesifik Anda, misalnya: Teknik Informatika, Manajemen, Pendidikan Bahasa Inggris, Hukum, dll.",
      },
      {
        id: "pra-2",
        title: "Identifikasi Gap Penelitian",
        prompt: `Lakukan analisis gap penelitian secara komprehensif pada topik [sebutkan topik yang diminati] di bidang [sebutkan bidang studi]. Awali dengan merangkum secara sistematis temuan-temuan utama dari penelitian terdahulu yang relevan dalam 5 tahun terakhir, mencakup metode yang digunakan, variabel yang diteliti, konteks lokasi dan populasi, serta hasil dan kesimpulan yang diperoleh.

Selanjutnya, identifikasi secara eksplisit celah atau kesenjangan yang belum terjawab oleh penelitian-penelitian sebelumnya, baik dari sisi teori, metodologi, konteks lokasi/populasi, maupun variabel yang belum dikaji. Kemudian, analisis mengapa kesenjangan tersebut penting untuk diisi dan bagaimana penelitian baru dapat memberikan kontribusi nyata terhadap pengembangan ilmu pengetahuan maupun pemecahan masalah praktis di lapangan.

Akhiri dengan merumuskan posisi penelitian baru yang diusulkan dalam peta penelitian yang ada, sehingga tampak jelas novelty dan urgensi dari penelitian yang akan dilakukan. Sajikan dalam bentuk narasi akademis yang sistematis dan juga tabel ringkasan gap penelitian.`,
        tips: "Semakin spesifik topik yang Anda sebutkan, semakin tajam analisis gap yang dihasilkan. Contoh: bukan 'manajemen' tapi 'pengaruh employee engagement terhadap turnover intention pada perusahaan startup'.",
      },
      {
        id: "pra-3",
        title: "Formulasi & Pemilihan Judul Skripsi",
        prompt: `Bantu saya merumuskan judul skripsi yang tepat, akademis, dan memenuhi kaidah penulisan ilmiah untuk penelitian di bidang [sebutkan bidang studi] dengan fokus pada topik [sebutkan topik/permasalahan]. Awali dengan menjelaskan prinsip-prinsip dasar dalam merumuskan judul skripsi yang baik, mencakup aspek kejelasan, kepadatan makna, ketepatan diksi, serta representasi terhadap isi penelitian secara keseluruhan.

Selanjutnya, buatkan 10 alternatif judul skripsi yang bervariasi dalam pendekatan dan sudut pandang, dengan memastikan setiap judul mencerminkan variabel penelitian, objek kajian, dan konteks penelitian secara eksplisit. Sediakan variasi untuk pendekatan kualitatif maupun kuantitatif. Untuk setiap judul yang diusulkan, berikan analisis singkat mengenai kelebihan dan kekurangan dari formulasi judul tersebut, serta rekomendasi perbaikan jika diperlukan.

Akhiri dengan memilih 3 judul terbaik yang paling direkomendasikan, disertai argumentasi mengapa judul tersebut dipilih berdasarkan kriteria orisinalitas, kelayakan penelitian, ketersediaan data, serta relevansi dengan kebutuhan akademis dan praktis.`,
        tips: "Berikan konteks selengkap mungkin: jurusan, minat topik, metode yang ingin digunakan, dan lokasi penelitian jika ada.",
      },
      {
        id: "pra-4",
        title: "Penyusunan Proposal Awal / Outline Skripsi",
        prompt: `Buatkan outline atau kerangka proposal skripsi secara lengkap dan terstruktur untuk penelitian dengan judul "[sebutkan judul skripsi]" di bidang [sebutkan bidang studi]. Awali dengan menyusun struktur bab dan sub-bab yang sesuai dengan pedoman penulisan skripsi pada umumnya, mencakup BAB I hingga BAB V beserta komponen pendukung seperti abstrak, kata pengantar, daftar pustaka, dan lampiran.

Untuk setiap bab dan sub-bab, berikan deskripsi singkat mengenai isi yang akan dibahas, poin-poin utama yang perlu dicakup, serta estimasi jumlah halaman yang ideal. Selanjutnya, susun timeline atau jadwal penelitian yang realistis mulai dari tahap persiapan, pengumpulan data, analisis, hingga penulisan laporan akhir, dengan mempertimbangkan durasi satu semester.

Akhiri dengan memberikan checklist komponen-komponen penting yang harus dipersiapkan sebelum memulai penulisan skripsi, termasuk dokumen administratif, sumber referensi minimal, dan perangkat penelitian yang dibutuhkan.`,
        tips: "Sesuaikan dengan pedoman penulisan skripsi di universitas Anda. Setiap kampus memiliki format dan ketentuan yang berbeda.",
      },
      {
        id: "pra-5",
        title: "Validasi Kelayakan Judul Skripsi",
        badge: "🆕 BARU",
        prompt: `Lakukan validasi dan evaluasi kelayakan judul skripsi berikut: "[MASUKKAN JUDUL SKRIPSI ANDA]" di bidang [sebutkan bidang studi/jurusan]. Evaluasi judul tersebut secara komprehensif berdasarkan kriteria-kriteria berikut:

(1) Kejelasan & Ketepatan Formulasi — apakah judul sudah cukup jelas, informatif, tidak ambigu, dan merepresentasikan isi penelitian secara utuh; apakah variabel, objek, dan konteks penelitian sudah tersirat atau tersurat dalam judul;
(2) Orisinalitas & Novelty — apakah judul memiliki kebaruan dibandingkan penelitian yang sudah ada; lakukan pengecekan terhadap kemungkinan duplikasi dengan penelitian terdahulu;
(3) Kelayakan Penelitian — apakah penelitian dengan judul ini dapat dilaksanakan dalam batas waktu, biaya, dan sumber daya mahasiswa S1; apakah data yang dibutuhkan tersedia dan dapat diakses;
(4) Relevansi Akademis & Praktis — apakah topik ini relevan dengan perkembangan keilmuan terkini dan memiliki manfaat nyata bagi masyarakat atau dunia profesional;
(5) Kesesuaian Metodologis — apakah judul ini dapat dijawab dengan metode penelitian yang jelas dan terukur;
(6) Potensi Masalah — identifikasi potensi kendala atau kesulitan yang mungkin dihadapi dalam pelaksanaan penelitian.

Berikan skor 1-10 untuk setiap kriteria, disertai komentar dan rekomendasi perbaikan. Akhiri dengan verdik apakah judul ini LAYAK, PERLU REVISI, atau PERLU DIGANTI, beserta alternatif judul yang lebih baik jika diperlukan.`,
        tips: "Gunakan prompt ini sebelum mendaftarkan judul ke kampus. Ini bisa menghemat waktu Anda dari penolakan judul oleh dosen atau prodi.",
      },
    ],
  },
  {
    id: "bab-1",
    title: "BAB I — Pendahuluan",
    icon: "📖",
    color: "from-blue-500 to-indigo-600",
    description:
      "Bab pembuka yang memuat latar belakang masalah, identifikasi masalah, rumusan masalah, tujuan, manfaat, batasan masalah, dan sistematika penulisan. Prompt di bawah ini langsung berisi instruksi — pastikan Role Setting sudah aktif.",
    prompts: [
      {
        id: "bab1-1",
        title: "Latar Belakang Masalah (Kuantitatif)",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Latar Belakang Masalah untuk penelitian skripsi kuantitatif saya dengan judul "[MASUKKAN JUDUL SKRIPSI KAMU]" secara komprehensif, sistematis, dan mengalir logis dari umum ke khusus (deduktif) dengan alur berpikir yang logis serta argumentatif.

Awali dengan menggambarkan konteks global atau nasional yang melatarbelakangi topik penelitian, disertai data statistik terbaru, fakta empiris, atau regulasi yang relevan untuk menunjukkan bahwa topik ini memiliki signifikansi tinggi dalam perkembangan ilmu pengetahuan maupun praktik di lapangan. Sertakan data angka, persentase, atau tren terkini dari lembaga kredibel untuk memperkuat argumentasi urgensi masalah pada tingkat yang lebih umum.

Selanjutnya, persempit pembahasan menuju konteks yang lebih spesifik dengan menjelaskan kondisi aktual di lokasi atau objek penelitian, termasuk permasalahan nyata yang teramati, fenomena yang terjadi, serta tantangan yang dihadapi oleh pihak-pihak terkait. Uraikan fenomena spesifik dengan menyertakan data awal atau hasil observasi pendahuluan yang mendukung.

Kemudian, paparkan kajian singkat terhadap beberapa penelitian terdahulu yang relevan (minimal 5-7 penelitian), tunjukkan kesamaan dan perbedaan dengan penelitian yang akan dilakukan, serta identifikasi celah atau gap penelitian yang menjadi dasar kuat bagi penelitian ini. Jelaskan bagaimana variabel-variabel dalam penelitian ini saling terkait berdasarkan teori dan temuan empiris terdahulu.

Dukung narasi dengan mengutip minimal 5–7 sumber referensi terpercaya. Akhiri dengan menegaskan alasan kuat dan urgensi dilakukannya penelitian ini, sehingga pembaca memahami bahwa penelitian ini layak, penting, dan memberikan kontribusi nyata bagi pengembangan bidang studi terkait.

Pastikan penulisan menggunakan bahasa akademis yang baku sesuai PUEBI, paragraf yang koheren dengan transisi antar-paragraf yang mulus, dan alur argumentasi yang kuat. Tuliskan latar belakang ini secara naratif, runtut, dan sistematis dalam (....) paragraf sesuai kebutuhan penelitian.`,
        tips: "Latar belakang idealnya 3-5 halaman. Ganti (....) dengan jumlah paragraf yang diinginkan (biasanya 10-15 paragraf). Pastikan ada alur logis: konteks umum → kondisi spesifik → gap penelitian → urgensi.",
      },
      {
        id: "bab1-1b",
        title: "Latar Belakang Masalah (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan latar belakang penelitian skripsi kualitatif saya dengan judul "[MASUKKAN JUDUL SKRIPSI KAMU]" dengan pola penulisan dari umum ke khusus dan alur berpikir yang sistematis, logis, serta argumentatif.

Awali dengan menjelaskan isu sosial, konteks global, atau fenomena luas yang relevan dengan tema penelitian. Sertakan data faktual, tren, atau fenomena sosial terkini untuk menggambarkan urgensi masalah pada tingkat yang lebih umum, sehingga pembaca memahami bahwa topik ini memiliki relevansi yang kuat dengan kondisi masyarakat secara luas.

Selanjutnya, turunkan pembahasan ke konteks nasional atau lokal dengan menjelaskan bagaimana fenomena tersebut muncul dalam masyarakat atau lingkungan tertentu yang menjadi fokus penelitian. Uraikan fenomena spesifik atau realitas yang diamati secara langsung di lapangan, yang menunjukkan gejala sosial, budaya, pendidikan, ekonomi, atau keagamaan sesuai dengan tema kajian. Jelaskan dampak fenomena tersebut terhadap individu atau kelompok yang diteliti, baik dari sisi psikologis, sosial, maupun moral, sehingga pembaca merasakan urgensi dan signifikansi permasalahan yang diangkat.

Setelah itu, tinjau penelitian terdahulu yang relevan untuk menunjukkan kontribusi yang telah ada. Ringkas hasil dan fokus penelitian sebelumnya secara kritis, kemudian identifikasi kesenjangan penelitian yang masih belum banyak dieksplorasi, baik dari aspek pendekatan, konteks, maupun fokus analisis. Tegaskan bagaimana penelitian ini akan memberikan wawasan baru dalam memahami fenomena yang dikaji melalui pendekatan kualitatif yang mendalam dan kontekstual.

Akhiri dengan menjelaskan urgensi dilakukannya penelitian ini, disertai pernyataan tujuan utama penelitian serta manfaatnya bagi pengembangan ilmu pengetahuan maupun praktik sosial di masyarakat. Jelaskan mengapa pendekatan kualitatif dipilih sebagai metode yang paling tepat untuk memahami dan mengeksplorasi fenomena yang dikaji secara holistik dan mendalam.

Tuliskan latar belakang ini secara naratif, runtut, dan sistematis dalam (....) paragraf sesuai kebutuhan penelitian. Pastikan setiap paragraf saling terkait dengan transisi yang mulus, menggunakan bahasa akademis baku sesuai PUEBI, dan menunjukkan kedalaman pemahaman terhadap fenomena yang diteliti.`,
        tips: "Untuk kualitatif, tekankan pada FENOMENA dan KONTEKS, bukan pada variabel dan angka. Ganti (....) dengan jumlah paragraf (biasanya 12-18 paragraf). Fokuskan pada pengalaman, makna, dan dinamika sosial.",
      },
      {
        id: "bab1-2",
        title: "Identifikasi Masalah",
        prompt: `Buatkan bagian Identifikasi Masalah untuk penelitian ini secara sistematis dan jelas. Awali dengan menguraikan fenomena atau kondisi nyata yang melatarbelakangi penelitian, disertai data atau fakta relevan yang menunjukkan urgensi dan pentingnya topik ini untuk dikaji secara mendalam.

Selanjutnya, jelaskan permasalahan utama yang menjadi fokus penelitian, termasuk bentuk-bentuk masalah yang muncul serta dampak yang dapat terjadi apabila permasalahan tersebut tidak ditangani dengan baik. Uraikan setiap permasalahan dari perspektif yang berbeda — baik dari sisi teoritis, praktis, maupun metodologis — agar cakupan masalah terlihat komprehensif dan menyeluruh.

Kemudian, paparkan secara singkat penelitian atau literatur terdahulu yang berkaitan dengan topik ini untuk menunjukkan adanya kesenjangan penelitian atau aspek-aspek yang belum terjawab secara memadai. Identifikasi setiap masalah dalam bentuk poin-poin yang terstruktur dan bernomor, sehingga memudahkan pembaca memahami cakupan permasalahan secara menyeluruh.

Akhiri dengan merumuskan inti permasalahan secara jelas dan ringkas, yang mencerminkan fokus penelitian serta pentingnya penelitian ini bagi pengembangan bidang studi terkait maupun pemecahan masalah praktis di lapangan. Pastikan setiap masalah yang diidentifikasi relevan dan konsisten dengan judul serta latar belakang yang telah dipaparkan sebelumnya.`,
        tips: "Identifikasi masalah harus konsisten dengan latar belakang. Setiap masalah yang diidentifikasi harus relevan dengan judul penelitian. Biasanya berisi 4-7 butir masalah.",
      },
      {
        id: "bab1-3",
        title: "Batasan Masalah",
        prompt: `Buatkan bagian Batasan Masalah secara jelas, logis, dan terstruktur. Awali dengan menjelaskan secara singkat bahwa berdasarkan identifikasi masalah yang telah diuraikan sebelumnya, terdapat berbagai aspek permasalahan yang cukup luas dan kompleks, sehingga diperlukan pembatasan agar penelitian lebih terfokus, terarah, dan dapat diselesaikan dengan baik dalam batasan waktu dan sumber daya yang tersedia.

Selanjutnya, tentukan secara eksplisit batasan-batasan penelitian yang meliputi:
(1) Batasan Variabel — variabel apa saja yang akan diteliti dan yang tidak termasuk dalam cakupan penelitian;
(2) Batasan Objek/Subjek — siapa atau apa yang menjadi objek kajian, termasuk populasi dan sampel jika relevan, atau informan dan partisipan jika kualitatif;
(3) Batasan Lokasi — di mana penelitian dilakukan dan justifikasi pemilihan lokasi;
(4) Batasan Waktu — periode atau rentang waktu pengumpulan data;
(5) Batasan Teori atau Konsep — kerangka teori utama yang digunakan sebagai landasan analisis.

Akhiri dengan menegaskan bahwa pembatasan ini dilakukan bukan untuk mengurangi bobot penelitian, melainkan untuk memastikan kedalaman analisis dan keakuratan hasil penelitian yang diperoleh. Gunakan bahasa akademis yang baku dan paragraf yang koheren.`,
        tips: "Batasan masalah harus mempersempit dari identifikasi masalah. Setiap batasan harus memiliki justifikasi yang jelas mengapa penelitian dibatasi demikian.",
      },
      {
        id: "bab1-4",
        title: "Rumusan Masalah",
        prompt: `Buatkan bagian Rumusan Masalah secara sistematis dan terfokus dengan diawali narasi singkat yang merangkum konteks dan urgensi permasalahan berdasarkan latar belakang penelitian secara padat dan jelas, mencerminkan isu utama atau fenomena yang menjadi fokus kajian, kemudian rumuskan secara eksplisit beberapa pertanyaan penelitian yang spesifik, terarah, dan langsung merepresentasikan inti permasalahan yang akan dijawab dalam penelitian ini sebanyak (...) poin, dengan redaksi yang jelas, tidak ambigu, dan selaras dengan tujuan penelitian.

Pastikan setiap rumusan masalah memenuhi kriteria berikut:
(1) Menggunakan kalimat tanya yang jelas dan tidak ambigu;
(2) Dapat diukur atau dijawab melalui metode penelitian yang akan digunakan;
(3) Selaras dengan tujuan penelitian;
(4) Mencerminkan hubungan antar-variabel jika penelitian bersifat kuantitatif, atau mengarah pada pemahaman mendalam jika bersifat kualitatif;
(5) Tersusun secara hierarkis dari yang paling mendasar hingga yang paling kompleks.

Akhiri dengan memastikan bahwa seluruh rumusan masalah saling berkaitan dan membentuk satu kesatuan logis yang utuh, serta dapat dijawab secara tuntas dalam bab hasil dan pembahasan.`,
        tips: "Ganti (...) dengan jumlah poin yang diinginkan (umumnya 2-5). Untuk kualitatif gunakan 'Bagaimana...', untuk kuantitatif gunakan 'Apakah terdapat pengaruh...'.",
      },
      {
        id: "bab1-5",
        title: "Tujuan Penelitian",
        prompt: `Buatkan bagian Tujuan Penelitian secara terstruktur dan selaras dengan rumusan masalah yang telah ditetapkan. Awali dengan narasi pengantar singkat yang menyatakan bahwa tujuan penelitian dirumuskan berdasarkan rumusan masalah yang telah disusun sebelumnya, sehingga terdapat korespondensi langsung antara setiap pertanyaan penelitian dengan tujuan yang ingin dicapai.

Selanjutnya, formulasikan tujuan penelitian yang terdiri dari:
(1) Tujuan Umum — menyatakan secara ringkas dan menyeluruh arah serta capaian utama dari penelitian ini dalam konteks pengembangan ilmu pengetahuan dan/atau pemecahan masalah praktis;
(2) Tujuan Khusus — merumuskan secara spesifik dan terukur tujuan-tujuan detail yang berkorespondensi langsung dengan setiap poin rumusan masalah, menggunakan kata kerja operasional yang tepat seperti menganalisis, mengidentifikasi, mengevaluasi, mengukur, mendeskripsikan, mengeksplorasi, atau menguji.

Pastikan setiap tujuan khusus bersifat SMART (Specific, Measurable, Achievable, Relevant, Time-bound) dan dapat diverifikasi pencapaiannya melalui hasil penelitian. Akhiri dengan menegaskan bahwa pencapaian seluruh tujuan penelitian ini diharapkan dapat memberikan kontribusi signifikan baik secara teoritis maupun praktis bagi bidang studi terkait.`,
        tips: "Setiap tujuan khusus harus berkorespondensi 1:1 dengan rumusan masalah. Jika ada 3 rumusan masalah, harus ada 3 tujuan khusus.",
      },
      {
        id: "bab1-6",
        title: "Manfaat Penelitian",
        prompt: `Buatkan bagian Manfaat Penelitian secara komprehensif dan terstruktur. Awali dengan narasi pengantar yang menjelaskan bahwa penelitian ini diharapkan dapat memberikan manfaat yang signifikan baik dari aspek teoritis maupun praktis bagi berbagai pihak yang berkepentingan.

Selanjutnya, uraikan manfaat penelitian dalam dua kategori utama:
(1) Manfaat Teoritis — jelaskan kontribusi penelitian terhadap pengembangan ilmu pengetahuan, penguatan atau pengembangan teori yang ada, pengayaan literatur akademis, serta sumbangsih terhadap khazanah penelitian di bidang studi terkait, termasuk potensinya sebagai referensi bagi penelitian selanjutnya;
(2) Manfaat Praktis — uraikan manfaat konkret bagi berbagai pihak yang berkepentingan (stakeholders), yaitu:
    (a) Bagi peneliti sendiri sebagai sarana pengembangan kompetensi akademis dan profesional;
    (b) Bagi institusi atau organisasi terkait sebagai bahan evaluasi, pertimbangan kebijakan, atau perbaikan sistem;
    (c) Bagi masyarakat umum atau pengguna langsung hasil penelitian;
    (d) Bagi perguruan tinggi sebagai tambahan referensi dan kontribusi akademis;
    (e) Bagi peneliti selanjutnya sebagai landasan untuk pengembangan penelitian di masa mendatang.

Pastikan setiap poin manfaat ditulis secara spesifik dan realistis, bukan bersifat umum atau klise, sehingga benar-benar mencerminkan kontribusi nyata dari penelitian ini. Gunakan bahasa akademis yang baku.`,
        tips: "Manfaat harus realistis dan terukur. Hindari klaim yang terlalu berlebihan. Manfaat praktis harus benar-benar bisa dirasakan oleh pihak terkait.",
      },
      {
        id: "bab1-7",
        title: "Sistematika Penulisan",
        prompt: `Buatkan bagian Sistematika Penulisan secara terstruktur dan informatif. Awali dengan narasi pengantar yang menjelaskan bahwa sistematika penulisan disusun untuk memberikan gambaran menyeluruh mengenai struktur dan alur pembahasan dalam skripsi ini, sehingga memudahkan pembaca dalam memahami keseluruhan isi penelitian secara sistematis.

Selanjutnya, uraikan setiap bab dengan format yang konsisten, mencakup: judul bab, deskripsi ringkas namun informatif mengenai isi dan cakupan pembahasan di setiap bab, serta keterkaitan antar-bab yang menunjukkan alur logis dari keseluruhan penelitian. Susun sistematika meliputi:
- BAB I Pendahuluan (latar belakang, identifikasi masalah, batasan masalah, rumusan masalah, tujuan, manfaat, sistematika penulisan);
- BAB II Tinjauan Pustaka (landasan teori, penelitian terdahulu, kerangka berpikir, hipotesis jika ada);
- BAB III Metodologi Penelitian (jenis penelitian, populasi dan sampel, teknik pengumpulan data, instrumen, teknik analisis);
- BAB IV Hasil dan Pembahasan (deskripsi data, analisis, pengujian hipotesis, pembahasan);
- BAB V Penutup (kesimpulan dan saran).

Pastikan penulisan menggunakan bahasa yang formal, deskriptif, dan memberikan gambaran yang cukup bagi pembaca untuk memahami ruang lingkup penelitian tanpa harus membaca keseluruhan skripsi terlebih dahulu.`,
        tips: "Sesuaikan dengan pedoman skripsi universitas Anda. Beberapa kampus memiliki format BAB yang berbeda atau memisahkan Hasil dan Pembahasan menjadi 2 bab.",
      },
    ],
  },
  {
    id: "bab-2",
    title: "BAB II — Tinjauan Pustaka / Landasan Teori",
    icon: "📚",
    color: "from-emerald-500 to-teal-600",
    description:
      "Bab yang memuat landasan teori, kajian penelitian terdahulu, kerangka berpikir, dan hipotesis penelitian sebagai fondasi ilmiah skripsi Anda.",
    prompts: [
      {
        id: "bab2-1",
        title: "Landasan Teori (Kuantitatif)",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Landasan Teori secara komprehensif, mendalam, dan terstruktur untuk penelitian yang mengkaji variabel [sebutkan variabel-variabel penelitian]. Untuk setiap variabel atau konsep utama dalam penelitian, susun pembahasan teori dengan struktur sebagai berikut:

(1) Definisi — paparkan definisi dari berbagai ahli atau sumber otoritatif (minimal 3 definisi per konsep dari tokoh/ahli yang berbeda), kemudian sintesiskan menjadi definisi operasional yang akan digunakan dalam penelitian ini berdasarkan pemahaman integratif;
(2) Dimensi dan Indikator — uraikan dimensi-dimensi atau aspek-aspek yang membentuk variabel tersebut, lengkap dengan indikator-indikator yang dapat diukur secara empiris;
(3) Teori Pendukung — jelaskan teori-teori utama yang mendasari variabel tersebut, termasuk nama pencetus teori, tahun, dan inti dari teori tersebut serta relevansinya dengan konteks penelitian;
(4) Faktor-faktor yang Mempengaruhi — identifikasi dan jelaskan faktor-faktor internal maupun eksternal yang berpengaruh terhadap variabel tersebut berdasarkan temuan empiris;
(5) Hubungan Antar-Variabel — jelaskan secara teoritis bagaimana variabel-variabel dalam penelitian ini saling berkaitan dan mempengaruhi satu sama lain berdasarkan teori dan hasil penelitian terdahulu.

Pastikan seluruh pembahasan didukung oleh referensi dari buku teks, jurnal ilmiah, dan sumber akademis lainnya yang kredibel dan terkini (diprioritaskan 10 tahun terakhir). Gunakan gaya penulisan akademis yang baku dengan paragraf yang koheren dan transisi yang halus antar sub-bab.`,
        tips: "Landasan teori biasanya 15-30 halaman. Setiap teori harus dikaitkan dengan konteks penelitian Anda, bukan sekadar copy-paste definisi. Parafrase setiap kutipan dengan pemahaman Anda sendiri.",
      },
      {
        id: "bab2-1b",
        title: "Landasan Teori / Kajian Konseptual (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan bagian Kajian Teori atau Landasan Konseptual secara komprehensif dan mendalam untuk penelitian kualitatif yang mengkaji fenomena/fokus kajian [sebutkan fokus kajian]. Susun kajian teori dengan pendekatan yang sesuai tradisi kualitatif, dengan struktur sebagai berikut:

(1) Konsep Utama Penelitian — uraikan konsep-konsep kunci yang menjadi landasan pemahaman terhadap fenomena yang dikaji. Untuk setiap konsep, paparkan:
    - Pengertian menurut berbagai perspektif teoritis (minimal 3 perspektif);
    - Perkembangan konsep dari masa ke masa (genealogi konsep);
    - Relevansi konsep dengan konteks sosial-budaya di Indonesia;
    - Perdebatan atau dialektika teoritis seputar konsep tersebut;

(2) Grand Theory & Middle-Range Theory — jelaskan teori besar yang menjadi payung pemahaman (misalnya teori konstruksi sosial, interaksionisme simbolik, fenomenologi, teori kritis, dll.), kemudian turunkan ke teori menengah yang lebih spesifik dan langsung relevan dengan fenomena;

(3) Konteks Sosial-Budaya — uraikan konteks sosial, budaya, historis, atau struktural yang membentuk fenomena yang dikaji, sehingga pembaca memahami latar belakang situasional secara mendalam;

(4) Kerangka Analisis — bangun kerangka analisis yang menunjukkan bagaimana konsep-konsep dan teori yang telah dipaparkan akan digunakan sebagai "lensa" untuk membaca dan menginterpretasi data yang diperoleh di lapangan.

Pastikan kajian teori tidak bersifat dogmatis — tunjukkan bahwa teori dalam penelitian kualitatif bersifat sensitizing concepts yang memandu, bukan mendikte, proses analisis. Gunakan bahasa deskriptif-naratif yang kaya konteks.`,
        tips: "Dalam penelitian kualitatif, teori berfungsi sebagai 'lensa' atau sensitizing concepts, bukan untuk diuji. Teori membantu memahami dan menginterpretasi data, bukan menentukan hasil.",
      },
      {
        id: "bab2-2",
        title: "Penelitian Terdahulu / Kajian Pustaka Empiris",
        prompt: `Buatkan bagian Penelitian Terdahulu secara sistematis dan analitis. Awali dengan narasi pengantar yang menjelaskan pentingnya mengkaji penelitian terdahulu sebagai landasan empiris dan peta posisi penelitian yang akan dilakukan dalam konteks keilmuan yang lebih luas.

Selanjutnya, identifikasi dan paparkan minimal 10 penelitian terdahulu yang relevan (diprioritaskan jurnal nasional terakreditasi SINTA dan jurnal internasional bereputasi dalam 5–10 tahun terakhir), dengan menyajikan informasi berikut untuk setiap penelitian secara konsisten:
(1) Nama peneliti dan tahun publikasi;
(2) Judul penelitian;
(3) Tujuan penelitian;
(4) Metode dan pendekatan yang digunakan;
(5) Hasil dan temuan utama;
(6) Persamaan dan perbedaan dengan penelitian yang akan dilakukan.

Sajikan dalam dua format:
- Narasi yang koheren dan analitis — bukan sekadar deskripsi per penelitian, tetapi kelompokkan berdasarkan tema atau variabel dan lakukan sintesis lintas-penelitian;
- Tabel perbandingan yang ringkas dan mudah dipahami, dengan kolom: No, Peneliti/Tahun, Judul, Metode, Hasil, Persamaan, Perbedaan.

Akhiri dengan analisis sintesis yang merangkum: (a) konsistensi temuan antar-penelitian; (b) variasi metodologi yang digunakan; (c) celah atau gap yang belum terjawab; serta (d) posisi dan kontribusi unik dari penelitian yang akan dilakukan dibandingkan penelitian-penelitian sebelumnya.`,
        tips: "Cari penelitian terdahulu dari Google Scholar, Scopus, SINTA, atau repositori kampus. Prioritaskan jurnal bereputasi dan skripsi/tesis dari universitas ternama.",
      },
      {
        id: "bab2-3",
        title: "Kerangka Berpikir / Kerangka Konseptual",
        prompt: `Buatkan bagian Kerangka Berpikir secara logis, sistematis, dan komprehensif dengan variabel/fokus kajian [sebutkan variabel atau fokus penelitian]. Awali dengan narasi yang menjelaskan alur logika penelitian secara deduktif, dimulai dari teori-teori utama yang telah dipaparkan di landasan teori, kemudian dikaitkan dengan temuan-temuan dari penelitian terdahulu, hingga menghasilkan kerangka pemikiran yang menjadi dasar penelitian ini.

Selanjutnya, jelaskan hubungan antar-variabel atau antar-konsep secara teoritis dan logis, dengan menguraikan:
(1) Bagaimana variabel independen secara teoritis berpengaruh terhadap variabel dependen (kuantitatif), atau bagaimana konsep-konsep kunci saling terkait dalam membentuk pemahaman terhadap fenomena (kualitatif);
(2) Mekanisme atau proses yang menjelaskan hubungan tersebut;
(3) Peran variabel mediator atau moderator jika ada;
(4) Arah hubungan (positif atau negatif) beserta justifikasi teoritisnya.

Kemudian, deskripsikan secara verbal kerangka konseptual atau model penelitian yang menggambarkan seluruh hubungan antar-variabel/konsep dalam bentuk diagram alur, termasuk penjelasan mengenai simbol dan arah panah yang digunakan. Akhiri dengan merumuskan proposisi atau premis utama yang menjadi landasan bagi perumusan hipotesis penelitian atau pertanyaan penelitian.`,
        tips: "Kerangka berpikir harus menunjukkan alur logis dari teori → gap → hubungan variabel → hipotesis. Sertakan diagram/bagan untuk visualisasi.",
      },
      {
        id: "bab2-4",
        title: "Hipotesis Penelitian",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Hipotesis Penelitian secara sistematis, jelas, dan terfokus dengan variabel [sebutkan variabel-variabel penelitian]. Awali dengan narasi pengantar yang menjelaskan bahwa hipotesis dirumuskan berdasarkan kajian teori dan kerangka berpikir yang telah disusun sebelumnya, serta didukung oleh temuan-temuan dari penelitian terdahulu. Jelaskan secara singkat definisi hipotesis dan fungsinya dalam penelitian kuantitatif sebagai jawaban sementara terhadap rumusan masalah.

Selanjutnya, rumuskan hipotesis penelitian dengan ketentuan sebagai berikut:
(1) Tuliskan hipotesis dalam dua bentuk — hipotesis alternatif (Ha) yang menyatakan adanya pengaruh atau hubungan, dan hipotesis nol (H0) yang menyatakan tidak adanya pengaruh atau hubungan;
(2) Setiap hipotesis harus dinyatakan secara spesifik dan operasional, menyebutkan variabel-variabel yang terlibat serta arah hubungan yang diharapkan (positif/negatif/signifikan);
(3) Setiap hipotesis harus disertai justifikasi teoritis singkat yang menjelaskan dasar perumusannya, mengacu pada teori atau penelitian terdahulu yang telah dipaparkan di BAB II;
(4) Jumlah hipotesis harus berkorespondensi dengan rumusan masalah dan tujuan penelitian.

Akhiri dengan ringkasan seluruh hipotesis dalam format yang mudah dibaca dan dipahami.`,
        tips: "Hipotesis hanya diperlukan untuk penelitian kuantitatif. Untuk kualitatif, bagian ini diganti dengan 'Pertanyaan Penelitian' atau tidak ada sama sekali.",
      },
    ],
  },
  {
    id: "bab-3",
    title: "BAB III — Metodologi Penelitian",
    icon: "🔬",
    color: "from-purple-500 to-violet-600",
    description:
      "Bab yang menjelaskan desain penelitian, populasi-sampel, teknik pengumpulan data, instrumen, dan teknik analisis data secara detail dan metodologis.",
    prompts: [
      {
        id: "bab3-1",
        title: "Jenis & Desain Penelitian",
        prompt: `Buatkan bagian Jenis dan Desain Penelitian secara rinci dan argumentatif. Awali dengan menentukan dan menjelaskan jenis penelitian yang digunakan (kuantitatif, kualitatif, atau mixed-methods), disertai definisi dari para ahli serta justifikasi mengapa jenis penelitian tersebut paling sesuai untuk menjawab rumusan masalah yang telah ditetapkan.

Selanjutnya, jelaskan pendekatan penelitian yang dipilih (misalnya survei, eksperimen, studi kasus, fenomenologi, korelasional, deskriptif, etnografi, grounded theory, dll.) dengan uraian yang mencakup:
(1) Definisi dan karakteristik pendekatan tersebut menurut para ahli metodologi;
(2) Alasan pemilihan pendekatan tersebut dikaitkan dengan tujuan dan sifat data penelitian;
(3) Desain spesifik yang digunakan (misalnya cross-sectional, longitudinal, pre-experimental, quasi-experimental, single case, multi-site, dll.);
(4) Keunggulan dan keterbatasan desain tersebut dalam konteks penelitian ini.

Kemudian, gambarkan alur atau prosedur penelitian secara kronologis, dari tahap persiapan hingga pelaporan hasil, dalam bentuk deskripsi naratif yang jelas dan dapat divisualisasikan. Akhiri dengan menegaskan bahwa desain penelitian yang dipilih merupakan pendekatan yang paling tepat dan efisien untuk mencapai tujuan penelitian.`,
        tips: "Pastikan desain penelitian konsisten dengan rumusan masalah. Kuantitatif: survei, eksperimen, korelasional. Kualitatif: studi kasus, fenomenologi, etnografi, grounded theory.",
      },
      {
        id: "bab3-1b",
        title: "Lokasi & Waktu Penelitian",
        badge: "🆕 BARU",
        prompt: `Buatkan bagian Lokasi dan Waktu Penelitian secara deskriptif dan argumentatif untuk penelitian yang dilakukan di [sebutkan lokasi penelitian]. Susun pembahasan dengan struktur sebagai berikut:

(1) Lokasi Penelitian — deskripsikan lokasi penelitian secara detail, mencakup:
    - Nama dan alamat lengkap lokasi penelitian;
    - Profil singkat lokasi (jika institusi/lembaga: sejarah, visi-misi, status, akreditasi);
    - Karakteristik lokasi yang relevan dengan topik penelitian;
    - Justifikasi pemilihan lokasi — mengapa lokasi ini dipilih sebagai tempat penelitian, apa alasan ilmiah dan praktis yang mendasari;
    - Aksesibilitas peneliti terhadap lokasi dan data.

(2) Waktu Penelitian — jelaskan periode pelaksanaan penelitian secara rinci, mencakup:
    - Rentang waktu keseluruhan penelitian (dari persiapan hingga pelaporan);
    - Tahapan-tahapan penelitian beserta estimasi durasi masing-masing;
    - Sajikan jadwal dalam bentuk tabel atau diagram Gantt yang menunjukkan: tahap persiapan (perizinan, penyusunan instrumen), tahap pelaksanaan (pengumpulan data), tahap pengolahan (analisis data), dan tahap penyelesaian (penulisan laporan);
    - Justifikasi pemilihan waktu — mengapa penelitian dilakukan pada periode tersebut.

Gunakan bahasa akademis yang baku dan deskriptif.`,
        tips: "Bagian ini sering diminta di beberapa kampus sebagai sub-bab tersendiri di BAB III. Sesuaikan dengan pedoman skripsi universitas Anda.",
      },
      {
        id: "bab3-2",
        title: "Populasi, Sampel & Teknik Sampling (Kuantitatif)",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Populasi, Sampel, dan Teknik Sampling secara terperinci dan metodologis dengan objek/subjek penelitian [sebutkan objek/subjek]. Awali dengan mendefinisikan dan menguraikan populasi penelitian secara jelas, mencakup:
(1) Definisi populasi menurut para ahli (minimal 2 definisi);
(2) Identifikasi populasi target dan populasi terjangkau;
(3) Karakteristik populasi yang relevan;
(4) Jumlah total populasi beserta sumber datanya.

Selanjutnya, jelaskan proses penentuan sampel:
(1) Teknik sampling yang dipilih (probability: random, stratified, cluster, systematic — atau non-probability: purposive, snowball, convenience, quota) beserta jenis spesifiknya;
(2) Justifikasi pemilihan teknik sampling berdasarkan sifat populasi dan tujuan penelitian;
(3) Kriteria inklusi dan eksklusi sampel jika menggunakan purposive sampling;
(4) Perhitungan ukuran sampel menggunakan rumus yang relevan (Slovin, Krejcie-Morgan, G*Power, Cochran, atau rumus lainnya), lengkap dengan langkah-langkah perhitungan dan hasil akhirnya.

Akhiri dengan menyimpulkan jumlah sampel final yang akan digunakan dan distribusinya jika ada stratifikasi atau pengelompokan.`,
        tips: "Rumus Slovin: n = N/(1+Ne²). Untuk SEM minimal 100-200 sampel. Untuk regresi: minimal 10-15 sampel per variabel independen.",
      },
      {
        id: "bab3-2b",
        title: "Subjek/Informan Penelitian (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan bagian Subjek Penelitian atau Informan/Partisipan Penelitian secara terperinci dengan fokus kajian [sebutkan fokus kajian]. Susun pembahasan dengan struktur sebagai berikut:

(1) Penjelasan Terminologi — jelaskan mengapa dalam penelitian kualitatif digunakan istilah subjek/informan/partisipan (bukan populasi dan sampel seperti kuantitatif), serta implikasi filosofisnya terhadap cara memandang individu yang diteliti;

(2) Teknik Pemilihan Informan — jelaskan teknik yang digunakan (purposive sampling, snowball sampling, theoretical sampling, atau maximum variation sampling), beserta justifikasi mengapa teknik tersebut dipilih sesuai dengan tujuan dan pendekatan penelitian;

(3) Kriteria Informan — paparkan kriteria-kriteria spesifik yang harus dipenuhi oleh informan agar data yang diperoleh relevan, kredibel, dan memadai, meliputi:
    - Kriteria utama (pengetahuan, pengalaman, keterlibatan langsung);
    - Kriteria pendukung (kesediaan, kemampuan komunikasi, aksesibilitas);
    - Alasan ilmiah di balik setiap kriteria;

(4) Jumlah Informan — jelaskan bahwa dalam penelitian kualitatif, jumlah informan tidak ditentukan di awal secara kaku, melainkan berdasarkan prinsip saturasi data (data saturation), yaitu ketika data yang diperoleh sudah jenuh dan tidak memunculkan informasi baru. Namun, berikan estimasi awal jumlah informan berdasarkan pendekatan yang digunakan;

(5) Profil Informan — sajikan deskripsi singkat atau tabel profil informan (bisa menggunakan pseudonym/inisial) yang menggambarkan keragaman latar belakang informan.

Gunakan bahasa akademis yang deskriptif dan menunjukkan pemahaman mendalam terhadap tradisi penelitian kualitatif.`,
        tips: "Dalam kualitatif, kualitas informan lebih penting dari kuantitas. Informan yang 'kaya informasi' (information-rich cases) adalah kunci keberhasilan penelitian.",
      },
      {
        id: "bab3-3",
        title: "Variabel dan Definisi Operasional",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Variabel Penelitian dan Definisi Operasional secara sistematis, jelas, dan terukur dengan variabel [sebutkan variabel-variabel]. Awali dengan mengidentifikasi dan mengklasifikasikan seluruh variabel:
- Variabel independen (bebas) — X1, X2, dst.;
- Variabel dependen (terikat) — Y;
- Variabel mediator, moderator, atau kontrol jika ada;
beserta penjelasan peran masing-masing dalam model penelitian.

Untuk setiap variabel, susun definisi operasional komprehensif:
(1) Definisi Konseptual — pengertian berdasarkan teori di BAB II;
(2) Definisi Operasional — penjabaran yang dapat diukur dan diamati empiris;
(3) Dimensi/Sub-variabel — aspek-aspek pembentuk variabel;
(4) Indikator — tolok ukur spesifik untuk setiap dimensi;
(5) Skala Pengukuran — jenis skala (nominal, ordinal, interval, rasio);
(6) Instrumen — alat ukur yang digunakan.

Sajikan dalam tabel operasionalisasi variabel yang terstruktur dengan kolom: Variabel, Definisi Operasional, Dimensi, Indikator, Nomor Item, Skala. Lengkapi dengan kisi-kisi instrumen penelitian.`,
        tips: "Tabel operasionalisasi variabel sangat penting. Pastikan setiap indikator bisa dijabarkan menjadi butir pertanyaan kuesioner.",
      },
      {
        id: "bab3-4",
        title: "Teknik Pengumpulan Data",
        prompt: `Buatkan bagian Teknik Pengumpulan Data secara rinci dan metodologis untuk penelitian yang menggunakan pendekatan [kuantitatif/kualitatif/mixed-methods]. Awali dengan menjelaskan sumber data yang digunakan, baik data primer maupun data sekunder, beserta justifikasi penggunaannya dalam konteks penelitian ini.

Selanjutnya, uraikan setiap teknik pengumpulan data yang akan digunakan:
(1) Kuesioner/Angket (untuk kuantitatif) — jelaskan jenis kuesioner (terbuka/tertutup/semi-terbuka), skala pengukuran (Likert 1-5 dengan deskripsi setiap skor), format dan struktur, serta prosedur penyebaran;
(2) Wawancara (terutama untuk kualitatif) — jelaskan jenis wawancara (terstruktur/semi-terstruktur/mendalam), panduan wawancara, teknik probing, serta teknik pencatatan dan perekaman;
(3) Observasi — jelaskan jenis observasi (partisipan/non-partisipan), aspek yang diamati, instrumen pencatatan (fieldnotes, checklist);
(4) Dokumentasi — jelaskan jenis dokumen yang dikumpulkan dan relevansinya;
(5) Focus Group Discussion (FGD) — jika relevan, jelaskan prosedur, jumlah kelompok, dan moderasi.

Untuk setiap teknik, jelaskan prosedur pelaksanaan di lapangan secara kronologis. Akhiri dengan menjelaskan bagaimana berbagai teknik tersebut saling melengkapi (triangulasi) untuk menghasilkan data yang komprehensif dan valid.`,
        tips: "Sesuaikan teknik dengan jenis penelitian. Kuantitatif biasanya kuesioner, kualitatif menggunakan wawancara mendalam dan observasi partisipan.",
      },
      {
        id: "bab3-5",
        title: "Instrumen Penelitian (Uji Validitas & Reliabilitas)",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Instrumen Penelitian beserta prosedur uji validitas dan reliabilitas secara komprehensif. Awali dengan mendeskripsikan instrumen utama yang digunakan, termasuk struktur, jumlah butir pertanyaan per variabel/dimensi, dan format jawaban.

Selanjutnya, uraikan prosedur pengujian instrumen:
(1) Uji Validitas — jelaskan jenis validitas yang diuji:
    - Validitas isi (content validity) melalui expert judgment;
    - Validitas konstruk (construct validity) melalui analisis faktor;
    - Validitas kriteria (criterion validity) melalui korelasi Product Moment Pearson;
    - Kriteria keputusan: r-hitung > r-tabel pada taraf signifikansi 0,05;
    - Prosedur uji coba instrumen (jumlah responden, lokasi, waktu);

(2) Uji Reliabilitas — jelaskan metode pengujian:
    - Alpha Cronbach (paling umum untuk skala Likert);
    - Split-Half, KR-20/KR-21 (untuk pilihan benar-salah);
    - Kriteria: koefisien Alpha > 0,60 (cukup) atau > 0,70 (baik);
    - Interpretasi kategori reliabilitas.

Jelaskan langkah yang ditempuh jika ada butir yang tidak valid atau reliabel (revisi, hapus, atau ganti). Akhiri dengan menegaskan kelayakan instrumen untuk pengumpulan data sesungguhnya berdasarkan hasil uji coba.`,
        tips: "Uji coba instrumen biasanya dilakukan pada 30 responden di luar sampel. Gunakan SPSS untuk menghitung validitas dan reliabilitas.",
      },
      {
        id: "bab3-5b",
        title: "Teknik Keabsahan Data (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan bagian Teknik Keabsahan Data atau Teknik Pemeriksaan Keabsahan Data secara komprehensif. Awali dengan menjelaskan bahwa dalam penelitian kualitatif, keabsahan data (trustworthiness) merupakan aspek krusial yang menentukan kualitas dan kredibilitas temuan penelitian, serta bahwa konsep keabsahan data dalam kualitatif berbeda dengan validitas dan reliabilitas dalam kuantitatif.

Selanjutnya, uraikan empat kriteria keabsahan data menurut Lincoln & Guba (1985) beserta teknik yang digunakan untuk memenuhi setiap kriteria:

(1) Kredibilitas (Credibility) — sebagai pengganti validitas internal:
    - Triangulasi sumber — membandingkan data dari berbagai informan;
    - Triangulasi teknik — membandingkan data dari wawancara, observasi, dan dokumentasi;
    - Triangulasi waktu — mengumpulkan data di waktu yang berbeda;
    - Member checking — mengkonfirmasi temuan kepada informan;
    - Prolonged engagement — keterlibatan peneliti yang cukup lama di lapangan;
    - Peer debriefing — diskusi dengan rekan sejawat atau dosen pembimbing;

(2) Transferabilitas (Transferability) — sebagai pengganti validitas eksternal:
    - Thick description — deskripsi mendalam yang memungkinkan pembaca menilai kesesuaian konteks;
    - Penyajian detail konteks, karakteristik, dan kondisi lapangan;

(3) Dependabilitas (Dependability) — sebagai pengganti reliabilitas:
    - Audit trail — dokumentasi seluruh proses penelitian;
    - Catatan lapangan yang sistematis dan lengkap;
    - Konsistensi prosedur pengumpulan dan analisis data;

(4) Konfirmabilitas (Confirmability) — sebagai pengganti objektivitas:
    - Audit konfirmabilitas oleh pihak independen;
    - Refleksivitas peneliti — pengakuan terhadap posisi dan bias peneliti;
    - Dokumentasi jejak analisis dari data mentah hingga kesimpulan.

Akhiri dengan menegaskan bahwa penerapan teknik-teknik keabsahan data tersebut memastikan bahwa temuan penelitian ini dapat dipercaya, dikonfirmasi, dan berguna bagi konteks yang serupa.`,
        tips: "Teknik keabsahan data adalah 'pengganti' uji validitas-reliabilitas di kualitatif. Ini menunjukkan rigor (ketelitian) penelitian Anda kepada dosen penguji.",
      },
      {
        id: "bab3-6",
        title: "Teknik Analisis Data (Kuantitatif)",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Teknik Analisis Data secara sistematis dan rinci. Uraikan tahapan analisis berikut:

(1) Analisis Statistik Deskriptif — ukuran yang dihitung (mean, median, modus, standar deviasi, distribusi frekuensi) serta cara penyajiannya (tabel, grafik, diagram);

(2) Uji Prasyarat Analisis:
    - Uji Normalitas (Kolmogorov-Smirnov/Shapiro-Wilk) — kriteria: Sig. > 0,05;
    - Uji Linearitas (Test for Linearity) — kriteria: Sig. Linearity < 0,05 dan Sig. Deviation from Linearity > 0,05;
    - Uji Multikolinearitas — kriteria: Tolerance > 0,10 dan VIF < 10;
    - Uji Heteroskedastisitas (Glejser/Scatterplot) — kriteria: Sig. > 0,05;
    - Uji Autokorelasi (Durbin-Watson) — jika menggunakan data time series;

(3) Analisis Statistik Inferensial — teknik utama yang digunakan (regresi linear berganda, analisis jalur, SEM, uji-t, ANOVA, korelasi, chi-square, dll.), rumus dasar, asumsi, dan kriteria keputusan;

(4) Uji Hipotesis:
    - Uji parsial (uji-t) — kriteria: t-hitung > t-tabel atau Sig. < 0,05;
    - Uji simultan (uji-F) — kriteria: F-hitung > F-tabel atau Sig. < 0,05;
    - Koefisien determinasi (R²) — interpretasi besarnya pengaruh;

Akhiri dengan menyebutkan software yang digunakan (SPSS, SmartPLS, AMOS, Eviews, dll.) dan versinya.`,
        tips: "Teknik analisis harus sesuai dengan jenis data dan tujuan. Regresi untuk pengaruh, korelasi untuk hubungan, uji-t/ANOVA untuk perbedaan.",
      },
      {
        id: "bab3-6b",
        title: "Teknik Analisis Data (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan bagian Teknik Analisis Data secara komprehensif untuk penelitian kualitatif yang menggunakan pendekatan [studi kasus/fenomenologi/etnografi/grounded theory/dll.]. Uraikan teknik analisis data kualitatif yang akan digunakan dengan pilihan salah satu atau kombinasi berikut sesuai pendekatan:

(1) Model Analisis Miles, Huberman & Saldaña (2014) — analisis data interaktif:
    - Kondensasi Data (Data Condensation) — proses menyeleksi, memfokuskan, menyederhanakan, mengabstraksi, dan mentransformasi data mentah dari catatan lapangan, transkrip wawancara, dan dokumen;
    - Penyajian Data (Data Display) — menyajikan data yang telah dikondensasi dalam bentuk naratif, tabel, diagram, matriks, atau jejaring konsep untuk memudahkan penarikan kesimpulan;
    - Penarikan Kesimpulan dan Verifikasi (Conclusion Drawing/Verification) — merumuskan temuan berdasarkan pola, tema, dan hubungan yang teridentifikasi, kemudian memverifikasi keabsahannya melalui triangulasi;

(2) Teknik Coding — proses pemberian kode pada data:
    - Open coding — mengidentifikasi dan memberi label pada konsep-konsep yang muncul dari data;
    - Axial coding — menghubungkan kategori-kategori yang telah diidentifikasi;
    - Selective coding — mengintegrasikan kategori menjadi kerangka teoretis;

(3) Analisis Tematik — proses mengidentifikasi, menganalisis, dan melaporkan tema-tema (patterns) yang muncul dalam data:
    - Familiarisasi data;
    - Pemberian kode awal;
    - Pencarian tema;
    - Review tema;
    - Pendefinisian dan penamaan tema;
    - Penulisan laporan.

Jelaskan tahapan analisis secara kronologis dari data mentah hingga temuan akhir, lengkap dengan contoh proses coding jika memungkinkan. Sebutkan software analisis kualitatif yang digunakan (NVivo, Atlas.ti, MAXQDA) atau analisis manual. Akhiri dengan menjelaskan bagaimana analisis ini menghasilkan temuan yang menjawab pertanyaan penelitian.`,
        tips: "Pilih SATU model analisis utama yang paling sesuai dengan pendekatan. Jangan campur-aduk semua model. Untuk studi kasus: Miles & Huberman. Untuk fenomenologi: Colaizzi atau van Manen.",
      },
    ],
  },
  {
    id: "bab-4",
    title: "BAB IV — Hasil dan Pembahasan",
    icon: "📊",
    color: "from-rose-500 to-pink-600",
    description:
      "Bab inti yang menyajikan temuan penelitian, analisis data, pengujian hipotesis, dan pembahasan mendalam terhadap hasil yang diperoleh.",
    prompts: [
      {
        id: "bab4-1",
        title: "Deskripsi Objek Penelitian & Karakteristik Responden",
        prompt: `Buatkan bagian Deskripsi Objek Penelitian secara informatif dan terstruktur dengan objek penelitian [sebutkan objek: perusahaan/sekolah/instansi/komunitas/dll.]. Awali dengan menyajikan gambaran umum mengenai objek penelitian:
(1) Profil Umum — sejarah singkat, visi dan misi, lokasi, status hukum atau akreditasi;
(2) Struktur Organisasi — hierarki dan pembagian tugas yang relevan dengan topik;
(3) Sumber Daya — jumlah karyawan/siswa/anggota, fasilitas, dan kapasitas;
(4) Aktivitas Utama — kegiatan atau proses yang berkaitan dengan variabel penelitian.

Selanjutnya, deskripsikan karakteristik responden/informan berdasarkan data demografis yang telah dikumpulkan, meliputi distribusi berdasarkan jenis kelamin, usia, pendidikan, masa kerja/pengalaman, dan kategori demografis lainnya yang relevan. Sajikan dalam bentuk tabel distribusi frekuensi dan persentase dilengkapi interpretasi singkat yang menunjukkan kecenderungan atau pola tertentu.

Akhiri dengan menjelaskan relevansi karakteristik tersebut terhadap konteks penelitian dan bagaimana komposisi responden/informan ini dapat memengaruhi hasil penelitian secara keseluruhan.`,
        tips: "Data profil objek penelitian bisa didapat dari website resmi, laporan tahunan, atau wawancara dengan pihak terkait.",
      },
      {
        id: "bab4-2",
        title: "Analisis Statistik Deskriptif",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Analisis Statistik Deskriptif secara terperinci dan interpretatif dengan variabel [sebutkan variabel-variabel] dan data [deskripsikan jenis data yang dimiliki]. Untuk setiap variabel, sajikan analisis deskriptif yang mencakup:

(1) Distribusi Frekuensi — tabel sebaran jawaban responden per butir pertanyaan atau per indikator, lengkap dengan frekuensi dan persentase;
(2) Ukuran Tendensi Sentral — nilai mean, median, dan modus untuk setiap dimensi dan variabel secara keseluruhan;
(3) Ukuran Dispersi — standar deviasi dan range untuk menunjukkan variasi jawaban;
(4) Kategorisasi — pengelompokan skor ke dalam kategori (sangat tinggi, tinggi, sedang, rendah, sangat rendah) berdasarkan interval yang telah ditentukan;
(5) Interpretasi — penjelasan naratif yang menganalisis makna dari hasil statistik deskriptif, mengapa responden cenderung menjawab demikian, serta implikasi awal terhadap variabel penelitian.

Sajikan seluruh data dalam bentuk tabel yang terstruktur dan lengkapi dengan visualisasi grafik yang informatif. Akhiri dengan rangkuman temuan deskriptif yang memberikan gambaran awal mengenai kondisi masing-masing variabel sebelum dilakukan analisis inferensial.`,
        tips: "Kategori skor Likert 1-5: Sangat Tinggi (4,20-5,00), Tinggi (3,40-4,19), Sedang (2,60-3,39), Rendah (1,80-2,59), Sangat Rendah (1,00-1,79).",
      },
      {
        id: "bab4-2b",
        title: "Penyajian Data & Temuan Penelitian (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan bagian Penyajian Data dan Temuan Penelitian secara mendalam dan naratif. Susun penyajian data dengan struktur berikut:

(1) Deskripsi Setting Penelitian — gambarkan secara vivid (hidup) konteks dan suasana tempat penelitian berdasarkan observasi langsung. Gunakan thick description yang menunjukkan kedalaman pemahaman terhadap setting, meliputi aspek fisik, sosial, dan atmosfer yang melingkupi fenomena;

(2) Profil Informan — sajikan profil singkat setiap informan (menggunakan pseudonym/inisial untuk menjaga anonimitas) yang mencakup latar belakang, posisi, dan relevansinya dengan topik penelitian;

(3) Penyajian Data per Tema/Fokus Penelitian — untuk setiap rumusan masalah atau fokus penelitian, sajikan:
    - Deskripsi temuan yang didukung oleh kutipan langsung (verbatim) dari informan, dengan format: "...[kutipan wawancara]..." (Informan A, wawancara, tanggal);
    - Hasil observasi yang relevan, disajikan secara naratif-deskriptif;
    - Data dokumen yang mendukung temuan;
    - Triangulasi — tunjukkan bagaimana data dari berbagai sumber dan teknik saling mengkonfirmasi atau mengkontraskan;

(4) Matriks Temuan — sajikan rangkuman temuan dalam bentuk tabel/matriks yang menghubungkan fokus penelitian, sub-fokus, temuan utama, dan data pendukung;

(5) Pola dan Tema — identifikasi pola-pola yang muncul dari data, kelompokkan menjadi tema-tema utama dan sub-tema, serta tunjukkan hubungan antar-tema.

Gunakan gaya penulisan naratif-deskriptif yang kaya konteks, menunjukkan kedalaman pemahaman terhadap fenomena, dan memungkinkan pembaca "merasakan" pengalaman informan.`,
        tips: "Dalam kualitatif, data disajikan secara NARATIF, bukan tabel angka. Kutipan langsung informan (verbatim) adalah bukti data utama. Gunakan minimal 2-3 kutipan per tema.",
      },
      {
        id: "bab4-3",
        title: "Uji Prasyarat Analisis",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Uji Prasyarat Analisis secara metodologis dan terstruktur untuk penelitian yang menggunakan teknik analisis [sebutkan teknik: regresi linear berganda/analisis jalur/SEM/dll.]. Untuk setiap uji prasyarat, sajikan dengan format konsisten:
- Tujuan pengujian;
- Metode yang digunakan;
- Kriteria keputusan;
- Hasil pengujian (dalam bentuk tabel);
- Interpretasi dan kesimpulan.

Uraikan uji-uji berikut sesuai kebutuhan:
(1) Uji Normalitas — Kolmogorov-Smirnov atau Shapiro-Wilk, kriteria: Sig. > 0,05, dilengkapi grafik P-P Plot atau histogram;
(2) Uji Linearitas — Test for Linearity, kriteria: Sig. Linearity < 0,05 dan Sig. Deviation from Linearity > 0,05;
(3) Uji Multikolinearitas — Tolerance dan VIF, kriteria: Tolerance > 0,10 dan VIF < 10;
(4) Uji Heteroskedastisitas — Glejser atau Scatterplot, kriteria: Sig. > 0,05 atau titik-titik menyebar acak;
(5) Uji Autokorelasi — Durbin-Watson, dengan interpretasi berdasarkan tabel DW.

Akhiri setiap pengujian dengan kesimpulan apakah asumsi terpenuhi dan data layak untuk dianalisis lebih lanjut. Jika asumsi tidak terpenuhi, jelaskan langkah perbaikan yang ditempuh.`,
        tips: "Jika asumsi tidak terpenuhi, jelaskan langkah perbaikan: transformasi data, penggunaan teknik non-parametrik, atau bootstrapping.",
      },
      {
        id: "bab4-4",
        title: "Pengujian Hipotesis & Analisis Inferensial",
        badge: "🔵 KUANTITATIF",
        prompt: `Buatkan bagian Pengujian Hipotesis dan Analisis Inferensial secara komprehensif dengan hipotesis [sebutkan hipotesis-hipotesis penelitian] menggunakan teknik [sebutkan teknik analisis]. Sajikan analisis untuk setiap hipotesis dengan format konsisten:

(1) Pernyataan Hipotesis — tuliskan kembali H0 dan Ha;
(2) Hasil Analisis — sajikan output statistik dalam tabel informatif (koefisien regresi β, nilai t-hitung/F-hitung, Sig./p-value, interval kepercayaan);
(3) Kriteria Keputusan — H0 ditolak jika Sig. < α (0,05) atau t-hitung > t-tabel;
(4) Keputusan — nyatakan eksplisit apakah hipotesis diterima atau ditolak;
(5) Interpretasi — jelaskan makna statistik termasuk arah dan kekuatan hubungan/pengaruh.

Sajikan juga:
- Koefisien determinasi (R²) — seberapa besar variabel independen menjelaskan variabel dependen;
- Uji simultan (uji-F) — jika ada lebih dari satu variabel independen;
- Persamaan regresi — tuliskan model matematisnya.

Akhiri dengan ringkasan hasil seluruh hipotesis dalam tabel rangkuman (hipotesis, koefisien, signifikansi, keputusan) serta interpretasi keseluruhan mengenai model penelitian.`,
        tips: "Interpretasi R²: < 0,20 (sangat lemah), 0,20-0,40 (lemah), 0,40-0,60 (sedang), 0,60-0,80 (kuat), > 0,80 (sangat kuat).",
      },
      {
        id: "bab4-5",
        title: "Pembahasan Hasil Penelitian",
        prompt: `Buatkan bagian Pembahasan Hasil Penelitian secara mendalam, analitis, dan komprehensif berdasarkan seluruh temuan yang telah diperoleh dari analisis data. Untuk setiap temuan/hipotesis yang telah diuji atau setiap tema yang ditemukan, susun pembahasan dengan struktur berikut:

(1) Ringkasan Temuan — nyatakan kembali secara ringkas hasil utama yang telah diperoleh;
(2) Interpretasi Hasil — jelaskan makna temuan dalam konteks yang lebih luas, mengapa hasil tersebut demikian, dan faktor-faktor yang mungkin berperan di balik temuan tersebut;
(3) Konfirmasi Teori — kaitkan temuan dengan teori-teori di BAB II, apakah temuan mendukung, memperkuat, atau bertentangan dengan teori, beserta analisis mendalam mengapa demikian;
(4) Perbandingan dengan Penelitian Terdahulu — bandingkan dengan temuan penelitian-penelitian terdahulu di BAB II, jelaskan kesamaan dan perbedaan serta kemungkinan penyebabnya;
(5) Implikasi — uraikan implikasi teoritis dan praktis dari temuan tersebut bagi pengembangan ilmu dan pemecahan masalah di lapangan;
(6) Analisis Kontekstual — hubungkan temuan dengan kondisi spesifik di lokasi/objek penelitian yang mungkin mempengaruhi hasil.

Akhiri dengan sintesis keseluruhan yang mengintegrasikan seluruh temuan menjadi satu narasi koheren, menunjukkan kontribusi utama penelitian terhadap bidang studi terkait. Jangan sekadar mengulang hasil — ANALISIS secara mendalam dan kritis mengapa temuan tersebut terjadi dan apa maknanya.`,
        tips: "Pembahasan bukan sekadar mengulang hasil, tetapi menganalisis MENGAPA hasil tersebut demikian dan APA maknanya. Ini adalah bagian yang paling menunjukkan kemampuan berpikir kritis Anda.",
      },
    ],
  },
  {
    id: "bab-5",
    title: "BAB V — Penutup",
    icon: "🎯",
    color: "from-cyan-500 to-blue-600",
    description:
      "Bab terakhir yang berisi kesimpulan dari seluruh temuan penelitian, saran untuk berbagai pihak, dan keterbatasan penelitian.",
    prompts: [
      {
        id: "bab5-1",
        title: "Kesimpulan",
        prompt: `Buatkan bagian Kesimpulan secara ringkas, padat, dan substansial berdasarkan seluruh temuan yang telah dipaparkan di BAB IV. Awali dengan narasi pengantar singkat bahwa kesimpulan dirumuskan berdasarkan hasil analisis data dan pembahasan untuk menjawab setiap rumusan masalah yang telah ditetapkan di awal penelitian.

Formulasikan kesimpulan dengan ketentuan:
(1) Setiap poin kesimpulan berkorespondensi langsung dengan setiap rumusan masalah di BAB I — sehingga pembaca dapat melihat bahwa seluruh pertanyaan penelitian telah terjawab;
(2) Setiap kesimpulan menyatakan jawaban yang jelas dan definitif, bukan mengulang proses analisis;
(3) Untuk kuantitatif: sertakan temuan spesifik (nilai koefisien, persentase, tingkat signifikansi) sebagai bukti empiris yang mendukung kesimpulan;
(4) Untuk kualitatif: sertakan esensi temuan dan makna mendalam yang diperoleh dari pengalaman informan;
(5) Setiap kesimpulan ditulis dalam satu paragraf singkat yang padat dan mudah dipahami;
(6) Gunakan bahasa yang tegas dan lugas tanpa kata-kata ragu atau ambigu.

Akhiri dengan kesimpulan umum yang merangkum seluruh temuan menjadi satu pernyataan integratif yang mencerminkan kontribusi utama penelitian ini terhadap bidang studi terkait.`,
        tips: "Kesimpulan BUKAN ringkasan skripsi. Kesimpulan adalah JAWABAN dari rumusan masalah. Singkat, tegas, dan berbasis data.",
      },
      {
        id: "bab5-2",
        title: "Saran",
        prompt: `Buatkan bagian Saran secara terstruktur, aplikatif, dan berorientasi pada tindak lanjut berdasarkan kesimpulan yang telah dirumuskan. Awali dengan narasi pengantar yang menjelaskan bahwa saran dirumuskan berdasarkan temuan dan keterbatasan penelitian ini, sehingga setiap saran memiliki landasan empiris yang kuat.

Susun saran dalam dua kategori utama:
(1) Saran Praktis — rekomendasi konkret bagi pihak-pihak berkepentingan:
    (a) Saran bagi manajemen/pimpinan institusi terkait kebijakan, sistem, atau proses yang perlu diperbaiki berdasarkan temuan;
    (b) Saran bagi pelaksana/praktisi di lapangan terkait implementasi atau peningkatan kinerja;
    (c) Saran bagi pemangku kepentingan lainnya yang relevan dengan konteks penelitian.
    Setiap saran harus spesifik, realistis, dan actionable — bukan normatif atau terlalu umum;

(2) Saran Akademis — rekomendasi bagi peneliti selanjutnya:
    (a) Variabel atau faktor lain yang belum diteliti dan berpotensi signifikan untuk dikaji;
    (b) Metode atau pendekatan alternatif untuk mengkaji topik serupa dari perspektif berbeda;
    (c) Perluasan lokasi, populasi, atau konteks penelitian untuk meningkatkan generalisasi;
    (d) Pendalaman aspek-aspek menarik yang muncul namun belum terbahas mendalam dalam penelitian ini.

Akhiri dengan harapan bahwa saran-saran ini bermanfaat bagi pengembangan ilmu pengetahuan dan perbaikan praktik di lapangan.`,
        tips: "Setiap saran harus DIDASARKAN pada temuan penelitian, bukan saran umum. Tunjukkan kaitan antara temuan → keterbatasan → saran.",
      },
      {
        id: "bab5-3",
        title: "Keterbatasan Penelitian",
        prompt: `Buatkan bagian Keterbatasan Penelitian secara jujur, reflektif, dan konstruktif. Awali dengan narasi pengantar bahwa setiap penelitian memiliki keterbatasan inheren yang perlu diakui secara transparan, sebagai bentuk kejujuran akademis dan kontribusi bagi perbaikan penelitian di masa mendatang.

Identifikasi dan jelaskan keterbatasan pada aspek-aspek berikut:
(1) Keterbatasan Metodologis — batasan terkait desain penelitian, teknik sampling, ukuran sampel, atau metode analisis yang mungkin mempengaruhi generalisasi atau kedalaman hasil;
(2) Keterbatasan Cakupan — batasan terkait jumlah variabel, dimensi yang dikaji, atau aspek-aspek yang tidak termasuk dalam ruang lingkup penelitian ini;
(3) Keterbatasan Kontekstual — batasan terkait lokasi, waktu, atau kondisi spesifik saat penelitian berlangsung yang mungkin mempengaruhi hasil;
(4) Keterbatasan Data — batasan terkait ketersediaan, aksesibilitas, atau kualitas data yang diperoleh di lapangan;
(5) Keterbatasan Praktis — batasan terkait waktu, biaya, atau sumber daya lainnya yang mempengaruhi pelaksanaan penelitian.

Untuk setiap keterbatasan, jelaskan dampak potensialnya terhadap hasil penelitian dan bagaimana penelitian selanjutnya dapat mengatasi keterbatasan tersebut. Akhiri dengan menegaskan bahwa meskipun memiliki keterbatasan, penelitian ini tetap memberikan kontribusi yang valid dan bermakna bagi bidang studi terkait.`,
        tips: "Keterbatasan penelitian menunjukkan kedewasaan akademis. Dosen pembimbing dan penguji akan menghargai kejujuran ini. Biasanya 3-5 poin.",
      },
    ],
  },
  {
    id: "pelengkap",
    title: "Bagian Pelengkap Skripsi",
    icon: "📝",
    color: "from-gray-600 to-slate-700",
    description:
      "Komponen pelengkap yang tidak kalah penting: abstrak, kata pengantar, daftar pustaka, dan revisi/proofreading akhir.",
    prompts: [
      {
        id: "plk-1",
        title: "Abstrak (Bahasa Indonesia & Inggris)",
        prompt: `Buatkan Abstrak dalam Bahasa Indonesia dan Bahasa Inggris (Abstract) secara ringkas, padat, dan informatif sesuai standar penulisan akademis. Susun abstrak dengan struktur berikut dalam SATU paragraf utuh tanpa sub-judul, dengan panjang 150–300 kata:

(1) Latar Belakang Singkat — satu atau dua kalimat yang merangkum permasalahan dan urgensi penelitian;
(2) Tujuan Penelitian — pernyataan singkat mengenai tujuan utama yang ingin dicapai;
(3) Metode Penelitian — uraian ringkas mengenai jenis penelitian, populasi/sampel, teknik pengumpulan data, dan teknik analisis yang digunakan;
(4) Hasil Penelitian — temuan utama yang spesifik (nilai koefisien, signifikansi, tema utama) yang menjawab rumusan masalah;
(5) Kesimpulan — pernyataan ringkas yang merangkum jawaban terhadap pertanyaan penelitian serta implikasi utama;
(6) Kata Kunci — cantumkan 3–5 kata kunci yang merepresentasikan inti penelitian, disusun secara alfabetis.

Pastikan abstrak bersifat informatif (bukan indikatif), mandiri (dapat dipahami tanpa membaca keseluruhan skripsi), dan bebas dari kutipan, singkatan yang tidak umum, atau referensi ke bagian lain. Untuk versi Bahasa Inggris, pastikan terjemahan akurat, grammar benar, dan terminologi akademis tepat.`,
        tips: "Abstrak ditulis TERAKHIR setelah seluruh skripsi selesai. Ini adalah 'wajah' skripsi Anda yang pertama kali dibaca orang.",
      },
      {
        id: "plk-2",
        title: "Kata Pengantar",
        prompt: `Buatkan Kata Pengantar yang ditulis oleh [nama lengkap] pada program studi [program studi] di [universitas] secara formal, tulus, dan sesuai etika akademis. Susun kata pengantar dengan struktur:

(1) Pembukaan — ungkapan rasa syukur kepada Tuhan Yang Maha Esa atas rahmat dan karunia-Nya sehingga skripsi dapat diselesaikan;
(2) Pengantar — pernyataan bahwa skripsi disusun sebagai salah satu syarat memperoleh gelar [sebutkan gelar: S.Kom/S.E/S.Pd/dll.] pada program studi tersebut;
(3) Ucapan Terima Kasih — secara berurutan kepada:
    (a) Rektor universitas;
    (b) Dekan fakultas;
    (c) Ketua program studi;
    (d) Dosen pembimbing I dan II (sebutkan nama dan gelar);
    (e) Dosen penguji;
    (f) Seluruh dosen dan staf akademik;
    (g) Kedua orang tua dan keluarga;
    (h) Teman-teman seperjuangan;
    (i) Pihak-pihak lain yang membantu;
(4) Penutup — pernyataan bahwa skripsi masih jauh dari sempurna dan kritik saran yang membangun sangat diharapkan, serta harapan agar bermanfaat bagi semua pihak.

Akhiri dengan tempat, tanggal, dan nama penulis. Gunakan bahasa yang sopan, tulus, dan formal.`,
        tips: "Sesuaikan urutan ucapan terima kasih dengan budaya akademis di universitas Anda. Beberapa kampus memiliki urutan yang berbeda.",
      },
      {
        id: "plk-3",
        title: "Daftar Pustaka (Format & Penulisan)",
        prompt: `Bantu saya menyusun dan memformat Daftar Pustaka sesuai standar penulisan akademis. Awali dengan menjelaskan gaya penulisan referensi [pilih: APA 7th Edition / IEEE / Chicago / Vancouver / sesuai pedoman kampus] beserta aturan dasarnya. Berikan contoh format yang benar untuk setiap jenis sumber:

(1) Buku — satu penulis, dua penulis, tiga atau lebih, terjemahan, edisi terbaru, buku dengan editor;
(2) Jurnal Ilmiah — jurnal cetak, jurnal online dengan DOI, tanpa DOI;
(3) Skripsi/Tesis/Disertasi — yang dipublikasikan dan tidak dipublikasikan;
(4) Sumber Online — website resmi, artikel berita, laporan organisasi, dokumen pemerintah;
(5) Peraturan Perundang-undangan — undang-undang, peraturan pemerintah;
(6) Prosiding Konferensi — makalah seminar/konferensi.

Untuk setiap format, berikan minimal 2 contoh konkret yang relevan dengan bidang [sebutkan bidang studi]. Akhiri dengan checklist pengecekan: konsistensi format, kelengkapan informasi, kesesuaian sitasi di teks dengan daftar pustaka, urutan alfabetis, penggunaan huruf miring dan tanda baca yang tepat.`,
        tips: "Gunakan reference manager seperti Mendeley, Zotero, atau EndNote untuk memudahkan pengelolaan dan formatting otomatis.",
      },
      {
        id: "plk-4",
        title: "Revisi & Proofreading Skripsi",
        prompt: `Bantu saya melakukan revisi dan proofreading menyeluruh terhadap bagian [sebutkan bagian/bab] dari skripsi saya. Lakukan pengecekan dan perbaikan komprehensif pada aspek-aspek berikut:

(1) Substansi dan Konten — kelengkapan argumen, kelogisan alur berpikir, konsistensi antar-bagian, kesesuaian dengan rumusan masalah, kedalaman analisis, dan akurasi data;
(2) Struktur dan Organisasi — sistematika penyajian, urutan penyajian ide, transisi antar-paragraf, kelengkapan sub-bab, dan koherensi keseluruhan;
(3) Bahasa dan Tata Tulis — ejaan sesuai PUEBI/EYD, tata bahasa, pilihan diksi, keefektifan kalimat, konsistensi istilah, dan gaya penulisan akademis;
(4) Teknis Penulisan — format kutipan dan sitasi, penomoran bab/sub-bab, format tabel dan gambar, penulisan daftar pustaka, dan konsistensi formatting;
(5) Konsistensi Keseluruhan — kesesuaian judul dengan isi, konsistensi singkatan dan istilah, kesesuaian data di berbagai bagian, dan kelengkapan referensi.

Berikan hasil revisi dengan format: bagian yang diperbaiki, jenis kesalahan, saran perbaikan, dan versi yang sudah diperbaiki. Akhiri dengan ringkasan jumlah dan jenis perbaikan serta rekomendasi tambahan untuk meningkatkan kualitas tulisan.`,
        tips: "Lakukan proofreading setelah skripsi selesai ditulis. Bacalah dengan jeda waktu (minimal 1 hari) agar mata lebih segar menangkap kesalahan.",
      },
    ],
  },
  {
    id: "bonus",
    title: "Bonus: Prompt Spesial & Tips Lanjutan",
    icon: "⭐",
    color: "from-yellow-500 to-amber-600",
    description:
      "Prompt tambahan untuk kebutuhan khusus: membuat kuesioner, mengolah data SPSS, menyusun presentasi sidang, parafrase, review kelayakan, dan banyak lagi.",
    prompts: [
      {
        id: "bonus-1",
        title: "Membuat Kuesioner Penelitian",
        prompt: `Buatkan kuesioner penelitian yang valid secara konten dengan variabel [sebutkan variabel beserta dimensi dan indikatornya]. Susun kuesioner dengan struktur:

(1) Halaman Pembuka — judul kuesioner, identitas peneliti, tujuan penelitian, jaminan kerahasiaan, petunjuk pengisian, estimasi waktu pengisian;
(2) Bagian Data Responden — pertanyaan demografis relevan (nama/inisial, jenis kelamin, usia, pendidikan, jabatan, masa kerja);
(3) Bagian Instrumen Utama — untuk setiap variabel, susun butir-butir pernyataan:
    (a) Setiap indikator diukur oleh minimal 2–3 butir pernyataan;
    (b) Kalimat jelas, sederhana, tidak ambigu, dan hanya mengukur satu hal;
    (c) Sertakan pernyataan positif (favorable) dan negatif (unfavorable) secara seimbang;
    (d) Skala Likert 5 poin (SS=5, S=4, N=3, TS=2, STS=1);
    (e) Kelompokkan per variabel/dimensi untuk memudahkan pengisian.

Sajikan juga kisi-kisi instrumen dalam tabel: Variabel, Dimensi, Indikator, Nomor Butir, Jumlah Butir, F/UF. Akhiri dengan total butir dan catatan scoring untuk pernyataan unfavorable.`,
        tips: "Hindari double-barreled questions (dua pertanyaan dalam satu kalimat). Setiap butir harus mengukur SATU hal saja.",
      },
      {
        id: "bonus-1b",
        title: "Membuat Pedoman Wawancara (Kualitatif)",
        badge: "🟢 KUALITATIF",
        prompt: `Buatkan Pedoman Wawancara (Interview Guide) secara terstruktur dan mendalam dengan fokus kajian [sebutkan fokus kajian] dan informan [sebutkan jenis informan]. Susun pedoman wawancara dengan struktur sebagai berikut:

(1) Pembukaan Wawancara — draft salam, perkenalan diri, penjelasan tujuan wawancara, permohonan izin perekaman, jaminan kerahasiaan, dan persetujuan informan (informed consent);

(2) Pertanyaan Pemanasan (Ice-Breaking) — 2-3 pertanyaan ringan untuk membangun rapport dan kenyamanan informan, misalnya tentang latar belakang atau pengalaman umum yang tidak sensitif;

(3) Pertanyaan Inti — susun pertanyaan berdasarkan fokus/rumusan masalah penelitian, dengan ketentuan:
    - Untuk setiap fokus penelitian, buatkan 5-8 pertanyaan utama;
    - Setiap pertanyaan utama dilengkapi 2-3 probing questions (pertanyaan pendalaman) untuk menggali jawaban lebih dalam;
    - Gunakan pertanyaan terbuka (open-ended) yang mengundang narasi, bukan jawaban ya/tidak;
    - Variasikan jenis pertanyaan: deskriptif ("Ceritakan tentang..."), struktural ("Apa saja..."), kontras ("Apa perbedaan..."), dan reflektif ("Bagaimana perasaan Anda tentang...");
    - Susun dari yang umum ke yang spesifik, dari yang mudah ke yang sensitif;

(4) Pertanyaan Penutup — pertanyaan yang memberi kesempatan informan menambahkan informasi yang belum terungkap: "Apakah ada hal lain yang ingin Anda sampaikan terkait topik ini?";

(5) Penutupan Wawancara — draft ucapan terima kasih dan penjelasan tindak lanjut.

Sajikan juga kisi-kisi wawancara dalam tabel: Fokus Penelitian, Sub-Fokus, Pertanyaan Utama, Probing Questions.`,
        tips: "Pedoman wawancara semi-terstruktur bersifat fleksibel — boleh ditambah pertanyaan spontan sesuai jawaban informan. Latihan dulu sebelum wawancara sesungguhnya.",
      },
      {
        id: "bonus-2",
        title: "Interpretasi Hasil Olah Data SPSS",
        badge: "🔵 KUANTITATIF",
        prompt: `Bantu saya menginterpretasikan output SPSS berikut: [tempelkan/deskripsikan output SPSS Anda]. Lakukan interpretasi secara komprehensif:

(1) Identifikasi Tabel/Output — jelaskan jenis analisis yang ditunjukkan oleh output tersebut dan konteks penggunaannya;
(2) Pembacaan Angka — jelaskan setiap kolom dan baris penting, apa makna setiap nilai yang ditampilkan;
(3) Penerapan Kriteria — bandingkan dengan kriteria keputusan statistik (Sig., t-hitung vs t-tabel, F-hitung vs F-tabel, R², dll.);
(4) Keputusan Statistik — nyatakan keputusan secara eksplisit (H0 ditolak/diterima, data normal/tidak normal, dll.);
(5) Interpretasi Substantif — jelaskan makna dalam konteks penelitian dengan bahasa yang mudah dipahami, bukan hanya angka;
(6) Penulisan di Skripsi — berikan contoh paragraf yang siap ditulis di skripsi sesuai format akademis baku.

Akhiri dengan saran atau catatan penting terkait hasil yang perlu diperhatikan.`,
        tips: "Screenshot output SPSS dan deskripsikan angka-angka pentingnya. Semakin detail data yang Anda berikan, semakin akurat interpretasinya.",
      },
      {
        id: "bonus-2b",
        title: "Coding & Kategorisasi Data Kualitatif",
        badge: "🟢 KUALITATIF",
        prompt: `Bantu saya melakukan proses coding dan kategorisasi data dari transkrip wawancara dengan fokus kajian [sebutkan fokus kajian]. Berikut adalah data transkrip wawancara yang perlu di-coding: [tempelkan kutipan transkrip wawancara Anda di sini]

Lakukan proses analisis data dengan tahapan sebagai berikut:

(1) Open Coding (Koding Terbuka):
    - Baca transkrip secara cermat dan identifikasi unit-unit makna (meaning units);
    - Berikan kode/label pada setiap unit makna yang ditemukan;
    - Sajikan dalam tabel: Kutipan Verbatim | Kode | Penjelasan Singkat;

(2) Axial Coding (Koding Aksial):
    - Kelompokkan kode-kode yang berkaitan menjadi kategori-kategori;
    - Identifikasi hubungan antar-kategori;
    - Sajikan dalam bentuk hierarki: Kategori → Sub-kategori → Kode;

(3) Selective Coding (Koding Selektif):
    - Identifikasi tema-tema utama (core categories) yang muncul dari data;
    - Hubungkan tema-tema tersebut dengan fokus/pertanyaan penelitian;
    - Bangun narasi analitis yang menjelaskan hubungan antar-tema;

(4) Visualisasi:
    - Buatkan matriks ringkasan coding dalam format tabel;
    - Deskripsikan peta konseptual yang menunjukkan hubungan antar-tema;

(5) Interpretasi:
    - Berikan interpretasi awal terhadap temuan berdasarkan pola yang muncul;
    - Kaitkan dengan konsep atau teori yang relevan dari BAB II.

Akhiri dengan rekomendasi mengenai data tambahan yang mungkin perlu dikumpulkan untuk memperkuat temuan (theoretical sampling).`,
        tips: "Proses coding bisa dilakukan manual (menggunakan tabel Excel/Word) atau menggunakan software seperti NVivo, Atlas.ti, atau MAXQDA. Konsistensi dalam pemberian kode sangat penting.",
      },
      {
        id: "bonus-3",
        title: "Persiapan Presentasi Sidang Skripsi",
        prompt: `Bantu saya mempersiapkan presentasi untuk sidang skripsi secara terstruktur dan profesional. Buatkan panduan lengkap meliputi:

(1) Struktur Presentasi — outline slide efektif (15-20 slide, 15-20 menit):
    - Slide pembuka (judul, nama, NIM, pembimbing);
    - Slide latar belakang (poin-poin utama, bukan paragraf panjang);
    - Slide rumusan masalah dan tujuan;
    - Slide metodologi (diagram alur);
    - Slide hasil (tabel dan grafik ringkas);
    - Slide pembahasan (poin-poin kritis);
    - Slide kesimpulan dan saran;
    - Slide penutup;

(2) Tips Desain Slide — satu ide per slide, bullet points maksimal 6 poin, font minimal 24pt, kontras warna, visualisasi data yang clean;

(3) Naskah Presentasi — narasi singkat untuk setiap slide, poin-poin kunci yang harus disampaikan, transisi antar-slide, dan penekanan pada temuan utama;

(4) Antisipasi Pertanyaan — identifikasi 15-20 pertanyaan yang kemungkinan ditanyakan dosen penguji, meliputi:
    - Pertanyaan tentang metodologi dan justifikasinya;
    - Pertanyaan tentang landasan teori dan relevansinya;
    - Pertanyaan tentang hasil analisis dan interpretasinya;
    - Pertanyaan tentang keterbatasan dan implikasi;
    - Pertanyaan jebakan yang sering muncul;
    Beserta panduan jawaban untuk setiap pertanyaan;

(5) Tips Presentasi — teknik berbicara, manajemen waktu, cara menjawab pertanyaan yang tidak diketahui, bahasa tubuh, dan etika sidang.`,
        tips: "Latihan presentasi minimal 3x sebelum sidang. Minta teman jadi 'dosen penguji' dan berlatih menjawab pertanyaan.",
      },
      {
        id: "bonus-4",
        title: "Parafrase & Hindari Plagiarisme",
        prompt: `Bantu saya melakukan parafrase terhadap teks berikut agar terhindar dari plagiarisme, dengan tetap mempertahankan makna dan substansi aslinya secara utuh.

Teks asli: "[tempelkan teks yang ingin diparafrase di sini]"

Lakukan parafrase dengan prinsip-prinsip berikut:
(1) Ubah struktur kalimat secara signifikan — dari aktif ke pasif atau sebaliknya, ubah urutan informasi, gabungkan atau pecah kalimat;
(2) Ganti diksi/pilihan kata — gunakan sinonim yang tepat tanpa mengubah makna, sesuaikan dengan register bahasa akademis;
(3) Ubah sudut pandang penyampaian — sajikan dari perspektif berbeda namun tetap akurat secara substansi;
(4) Pertahankan akurasi — tidak ada distorsi makna, penambahan informasi yang tidak ada di sumber asli, atau penghilangan informasi penting;
(5) Sertakan sitasi — tambahkan format sitasi [APA/IEEE/Chicago] untuk menunjukkan sumber asli.

Berikan 3 versi parafrase yang berbeda untuk setiap paragraf, masing-masing dengan pendekatan yang berbeda. Akhiri dengan penjelasan teknik yang digunakan pada setiap versi dan tips umum menghindari plagiarisme.`,
        tips: "Parafrase BUKAN sekadar mengganti kata dengan sinonim. Ubah struktur kalimat secara mendasar dan tambahkan pemahaman Anda sendiri.",
      },
      {
        id: "bonus-5",
        title: "Review & Cek Kelayakan Skripsi",
        prompt: `Lakukan review menyeluruh terhadap kelayakan skripsi saya berdasarkan standar penulisan ilmiah dan kriteria penilaian sidang skripsi. Evaluasi pada aspek-aspek berikut dan berikan skor 1–10 untuk masing-masing:

(1) Kualitas Judul — informatif, spesifik, merepresentasikan isi penelitian;
(2) Kekuatan Latar Belakang — alur logis dari umum ke khusus, data pendukung, urgensi;
(3) Ketajaman Rumusan Masalah — spesifik, terukur, dapat dijawab melalui penelitian;
(4) Kedalaman Tinjauan Pustaka — komprehensif, terkini, relevan, dan sintesis yang kritis;
(5) Ketepatan Metodologi — desain, sampling, analisis sesuai dengan tujuan;
(6) Kualitas Analisis Data — prosedur benar, interpretasi akurat, penyajian jelas;
(7) Kedalaman Pembahasan — kritis, dikaitkan teori, dibandingkan penelitian terdahulu;
(8) Konsistensi Internal — rumusan masalah ↔ tujuan ↔ metode ↔ hasil ↔ kesimpulan;
(9) Kualitas Penulisan — bahasa baku, paragraf koheren, format konsisten;
(10) Orisinalitas & Kontribusi — nilai kebaruan dan kontribusi ilmiah.

Untuk skor di bawah 7, berikan rekomendasi perbaikan spesifik dan actionable. Akhiri dengan penilaian keseluruhan dan verdik: LAYAK SIDANG / PERLU REVISI MINOR / PERLU REVISI MAYOR.`,
        tips: "Gunakan prompt ini setelah seluruh skripsi selesai untuk evaluasi akhir sebelum diajukan ke dosen pembimbing.",
      },
      {
        id: "bonus-6",
        title: "Konversi Skripsi ke Artikel Jurnal",
        badge: "🆕 BARU",
        prompt: `Bantu saya mengonversi skripsi saya menjadi artikel jurnal ilmiah yang siap disubmit ke jurnal [nasional terakreditasi SINTA/internasional bereputasi]. Lakukan konversi dengan panduan berikut:

(1) Reformulasi Judul — buatkan judul artikel yang lebih ringkas, menarik, dan sesuai format jurnal (biasanya maksimal 15 kata);

(2) Abstrak Jurnal — susun abstrak terstruktur (Background, Methods, Results, Conclusion) dalam 150-250 kata, versi Indonesia dan Inggris;

(3) Pendahuluan — padatkan latar belakang, rumusan masalah, dan tujuan menjadi 3-5 paragraf yang tajam dan langsung pada inti masalah. Sertakan state of the art dan novelty statement;

(4) Metode — ringkas metodologi menjadi 2-3 paragraf yang mencakup desain, sampel, instrumen, dan analisis;

(5) Hasil dan Pembahasan — gabungkan menjadi satu bagian yang integratif, fokus pada temuan utama dan diskusi kritis dengan penelitian terdahulu;

(6) Kesimpulan — ringkas menjadi 1 paragraf yang padat dan impactful;

(7) Daftar Pustaka — sesuaikan format dengan template jurnal target, prioritaskan referensi terkini (5 tahun terakhir) dan jurnal internasional;

(8) Penyesuaian — sesuaikan total halaman (biasanya 10-15 halaman), format penulisan, template jurnal, dan gaya bahasa ilmiah yang lebih ringkas dan padat.

Akhiri dengan checklist kesiapan submit ke jurnal dan rekomendasi jurnal target yang sesuai.`,
        tips: "Banyak kampus sekarang mewajibkan publikasi jurnal sebagai syarat wisuda. Artikel jurnal berbeda dengan skripsi — lebih ringkas, padat, dan langsung pada inti.",
      },
      {
        id: "bonus-7",
        title: "Cek Koherensi & Konsistensi Antar-Bab",
        badge: "🆕 BARU",
        prompt: `Bantu saya mengecek koherensi dan konsistensi antar-bab dalam skripsi saya. Lakukan pengecekan pada aspek-aspek berikut:

(1) Benang Merah Judul → Rumusan Masalah → Tujuan:
    - Apakah judul sudah terepresentasi dalam setiap rumusan masalah?
    - Apakah setiap rumusan masalah memiliki tujuan yang berkorespondensi?

(2) Konsistensi Variabel/Fokus Kajian:
    - Apakah variabel/fokus yang disebut di BAB I konsisten di seluruh bab?
    - Apakah istilah yang digunakan konsisten (tidak berganti-ganti)?

(3) Keselarasan Teori → Metode → Hasil:
    - Apakah teori di BAB II relevan dengan variabel/fokus di BAB I?
    - Apakah metode di BAB III mampu menjawab rumusan masalah?
    - Apakah hasil di BAB IV sesuai dengan metode di BAB III?

(4) Koherensi Hasil → Pembahasan → Kesimpulan:
    - Apakah pembahasan merujuk kembali ke teori di BAB II?
    - Apakah kesimpulan menjawab setiap rumusan masalah?
    - Apakah saran didasarkan pada temuan penelitian?

(5) Konsistensi Data & Angka:
    - Apakah data/angka yang disebut di berbagai bagian konsisten?
    - Apakah jumlah sampel/informan konsisten di seluruh bab?

Untuk setiap inkonsistensi yang ditemukan, berikan: lokasi inkonsistensi, deskripsi masalah, dan rekomendasi perbaikan yang spesifik. Akhiri dengan skor konsistensi keseluruhan (1-10) dan prioritas perbaikan.`,
        tips: "Inkonsistensi antar-bab adalah salah satu kesalahan paling umum dan paling sering dikritik oleh dosen penguji. Cek ini bisa menghemat banyak revisi.",
      },
      {
        id: "bonus-8",
        title: "Membuat Tabel, Grafik & Visualisasi Data",
        badge: "🆕 BARU",
        prompt: `Bantu saya merancang dan menyusun tabel, grafik, dan visualisasi data berdasarkan data berikut: [deskripsikan data yang Anda miliki]. Buatkan visualisasi data dengan panduan berikut:

(1) Tabel Data:
    - Tentukan jenis tabel yang tepat (distribusi frekuensi, tabel silang, tabel perbandingan, dll.);
    - Susun format tabel yang baku: judul tabel di atas, nomor urut per bab (Tabel 4.1, Tabel 4.2), sumber di bawah;
    - Pastikan setiap kolom dan baris memiliki header yang jelas;
    - Berikan interpretasi naratif untuk setiap tabel;

(2) Grafik & Diagram:
    - Rekomendasikan jenis grafik yang paling tepat untuk data ini (bar chart, pie chart, line chart, scatter plot, dll.);
    - Deskripsikan spesifikasi grafik: judul, label sumbu, legenda, skala;
    - Keterangan gambar di bawah gambar (Gambar 4.1);
    - Berikan interpretasi naratif;

(3) Diagram Konseptual:
    - Kerangka berpikir (untuk BAB II);
    - Alur penelitian (untuk BAB III);
    - Model/path diagram (untuk BAB IV);
    - Deskripsikan elemen-elemen diagram dan hubungannya.

Untuk setiap visualisasi, berikan contoh paragraf pengantar dan paragraf interpretasi yang siap ditulis di skripsi sesuai format akademis baku.`,
        tips: "Setiap tabel dan gambar dalam skripsi HARUS dirujuk dan diinterpretasi dalam teks. Jangan biarkan tabel/gambar 'yatim' tanpa penjelasan.",
      },
      {
        id: "bonus-9",
        title: "Definisi Istilah / Glosarium",
        badge: "🆕 BARU",
        prompt: `Buatkan bagian Definisi Istilah atau Penegasan Istilah secara sistematis dan jelas. Identifikasi seluruh istilah kunci, konsep, atau terminologi teknis yang digunakan dalam penelitian ini yang mungkin memiliki makna ganda atau perlu penegasan agar tidak menimbulkan perbedaan interpretasi bagi pembaca.

Untuk setiap istilah, susun definisi dengan format:
(1) Istilah — tuliskan istilah yang akan didefinisikan;
(2) Definisi Umum — berikan pengertian istilah secara umum berdasarkan kamus atau ensiklopedia;
(3) Definisi dalam Konteks Penelitian — jelaskan secara spesifik bagaimana istilah tersebut dimaknai dan digunakan dalam konteks penelitian ini, sehingga pembaca memiliki pemahaman yang sama dengan peneliti;
(4) Batasan Pemakaian — jika perlu, jelaskan batasan penggunaan istilah dalam penelitian ini.

Susun istilah-istilah tersebut secara alfabetis agar mudah dirujuk. Pastikan setiap definisi ditulis secara ringkas, jelas, dan tidak bertele-tele. Sertakan referensi sumber definisi jika mengacu pada pendapat ahli tertentu.`,
        tips: "Bagian ini biasanya ada di BAB I setelah Sistematika Penulisan, atau di halaman tersendiri sebagai Glosarium. Sesuaikan dengan pedoman kampus Anda.",
      },
      {
        id: "bonus-10",
        title: "Membuat Catatan Kaki & Penjelasan Tambahan",
        badge: "🆕 BARU",
        prompt: `Bantu saya menyusun catatan kaki (footnote) dan penjelasan tambahan yang diperlukan dalam skripsi saya. Identifikasi bagian-bagian dalam teks berikut yang memerlukan catatan kaki, kemudian buatkan catatan kaki yang tepat: [tempelkan teks skripsi Anda di sini]

Buatkan catatan kaki untuk kebutuhan-kebutuhan berikut:
(1) Penjelasan istilah asing atau teknis — berikan padanan Indonesia atau penjelasan singkat;
(2) Informasi tambahan — detail yang mendukung teks utama namun terlalu panjang untuk dimasukkan dalam paragraf;
(3) Rujukan silang — mengarahkan pembaca ke bagian lain dalam skripsi yang berkaitan;
(4) Klarifikasi — penjelasan yang memperjelas maksud dari pernyataan tertentu;
(5) Sumber data — keterangan mengenai asal data atau informasi spesifik.

Pastikan setiap catatan kaki ditulis secara ringkas, informatif, dan tidak mengulang apa yang sudah ada di teks utama. Gunakan format penomoran yang konsisten dan sesuai dengan pedoman penulisan.`,
        tips: "Beberapa kampus menggunakan footnote untuk sitasi (Chicago style), sementara yang lain menggunakan in-text citation (APA). Sesuaikan dengan pedoman Anda.",
      },
    ],
  },
];
