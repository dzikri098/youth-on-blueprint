export interface ContentBlock {
  type: 'statement' | 'paragraph' | 'bullet-list' | 'metrics-list' | 'quote';
  title?: string;
  lead?: string;
  text?: string;
  items?: string[];
  metrics?: { label: string; value: string; note?: string }[];
}

export interface EditorialSection {
  id: string;
  number: string;
  category: string;
  title: string;
  headline: string;
  lead: string;
  content: ContentBlock[];
  statusLabel?: string;
  presentationSlideIds?: string[];
}

export interface PresentationSlide {
  id: string;
  slideNumber: number;
  totalSlides: number;
  category: string;
  title: string;
  headline: string;
  lead: string;
  layout: 'split-hero' | 'statement' | 'pillars' | 'cards-grid' | 'timeline' | 'comparison' | 'checklist' | 'next-steps';
  keyPoints?: { title: string; desc: string; badge?: string }[];
  accentBadge?: string;
  sourceSectionId: string;
}

export const YOUTHON_METADATA = {
  brand: 'YOUTHON',
  tagline: 'Switch Your Energy On.',
  subtitle: 'Youth Fun Run & Lifestyle Movement',
  chapter: 'Chapter 01: West Java',
  edition: 'Event Preparation & Execution Blueprint',
  version: 'Draft v1.0',
  status: 'Draf Perencanaan untuk Diskusi Mitra',
  targetInitial: '2.000 - 3.000 Peserta (Asumsi Perencanaan Awal)',
  format: '3K & 5K Fun Run',
  duration: '1 Hari',
  origin: 'Jawa Barat (Bandung Raya Kandidat Evaluasi Awal)',
  targetReach: 'Multi-Kota di Seluruh Indonesia',
  lastUpdated: 'Oktober 2026'
};

export const EDITORIAL_SECTIONS: EditorialSection[] = [
  {
    id: 'hero',
    number: '00',
    category: 'Gerakan Anak Muda',
    title: 'Pengantar Gerakan',
    headline: 'Lebih dari lari. Tentang bergerak bersama.',
    lead: 'YOUTHON menghadirkan gerakan fun run yang memadukan olahraga, kurasi musik, hiburan, dan komunitas dalam satu pengalaman berenergi tinggi yang ramah bagi semua generasi muda.',
    statusLabel: 'Draf Perencanaan',
    content: [
      {
        type: 'statement',
        text: 'Bukan sekadar mengejar garis finis atau catatan waktu tercepat. YOUTHON dirancang untuk merayakan kebersamaan, kesehatan positif, dan kebebasan berekspresi di ruang terbuka.'
      }
    ]
  },
  {
    id: 'big-idea',
    number: '01',
    category: 'Konsep Inti',
    title: 'Ide Besar YOUTHON',
    headline: 'Mengubah lari menjadi festival energi komunitas.',
    lead: 'Banyak generasi muda ingin memulai kebiasaan hidup sehat, namun sering merasa terintimidasi oleh format lomba lari yang terlalu kompetitif, kaku, atau berorientasi murni pada kecepatan.',
    content: [
      {
        type: 'paragraph',
        text: 'YOUTHON menggeser paradigma dari "lomba lari individual" menjadi "gerakan festival bersama". Kami menggabungkan rute lari santai yang aman dengan titik musik beraudio jernih, tim penyemangat kreatif di lintasan, serta perayaan festival di garis finis.'
      },
      {
        type: 'quote',
        lead: 'Inti Filosofi',
        text: 'Ketika olahraga bertemu dengan musik dan kehangatan komunitas, bergerak aktif menjadi hal yang membahagiakan, bukan beban.'
      }
    ]
  },
  {
    id: 'pillars',
    number: '02',
    category: 'Fondasi Brand',
    title: 'Empat Pilar Gerakan',
    headline: 'Empat fondasi yang membentuk karakter YOUTHON.',
    lead: 'Setiap elemen acara, komunikasi visual, dan tata kelola rute berakar pada empat pilar kokoh yang konsisten.',
    content: [
      {
        type: 'bullet-list',
        items: [
          'Movement: Gerakan dinamis yang dapat berkembang lintas kota dan menyatukan komunitas anak muda di seluruh Indonesia.',
          'Fun: Suasana yang membahagiakan, inklusif, dan tidak semata-mata berfokus pada persaingan waktu atau podium.',
          'Youth: Wadah ekspresi yang aman, positif, dan relevan dengan aspirasi serta gaya hidup generasi muda masa kini.',
          'Run: Olahraga lari atau jalan santai terstruktur dengan standar kenyamanan rute dan keselamatan medis terbaik.'
        ]
      }
    ]
  },
  {
    id: 'vision-mission',
    number: '03',
    category: 'Arah Strategis',
    title: 'Visi dan Misi',
    headline: 'Membangun ekosistem gaya hidup aktif yang menjangkau Indonesia.',
    lead: 'Visi YOUTHON adalah menjadi gerakan fun run terdepan yang menghubungkan anak muda di berbagai kota melalui olahraga, kreativitas, dan pengalaman komunitas yang positif.',
    content: [
      {
        type: 'bullet-list',
        title: 'Enam Komitmen Misi',
        items: [
          'Menghadirkan pengalaman lari yang menyenangkan, inklusif, dan mudah diakses oleh pelari pemula sekalipun.',
          'Mendorong kebiasaan bergerak sehat dan gaya hidup aktif berkelanjutan di kalangan pelajar dan profesional muda.',
          'Menciptakan ruang pertemanan nyata, interaksi sosial hangat, dan wadah kolaborasi antarkomunitas lokal.',
          'Mengintegrasikan olahraga jalan-lari dengan panggung musik, tantangan interaktif, dan seni kreatif.',
          'Membangun jaringan chapter event dan komunitas YOUTHON yang solid di berbagai kota di Indonesia.',
          'Membuka ruang kolaborasi bermakna bagi brand sponsor, mitra kampus, pegiat kreatif, dan UMKM lokal.'
        ]
      }
    ]
  },
  {
    id: 'audience',
    number: '04',
    category: 'Target & Inklusivitas',
    title: 'Audiens dan Prinsip Inklusivitas',
    headline: 'Didesain untuk semua orang, tanpa memandang kecepatan langkah.',
    lead: 'YOUTHON merangkul keberagaman audiens dengan pendekatan yang hangat, tidak mengintimidasi, dan berpusat pada kenyamanan peserta.',
    content: [
      {
        type: 'paragraph',
        text: 'Segmentasi audiens kami mencakup pelajar, mahasiswa, pekerja muda (young professionals), pelari rekreasional, hingga pemula yang baru pertama kali ingin mencicipi atmosfer ajang lari bersama sahabat.'
      },
      {
        type: 'quote',
        lead: 'Prinsip Inklusivitas Fisik',
        text: 'Format acara, rute, dan tingkat kesulitan disesuaikan dengan kapasitas peserta. Kami tidak mengasumsikan semua peserta memiliki stamina yang seragam. Jalan santai diizinkan dan didukung penuh.'
      }
    ]
  },
  {
    id: 'brand-character',
    number: '05',
    category: 'Kepribadian Brand',
    title: 'Karakter Brand & Nada Bicara',
    headline: 'Energetik, bersahabat, percaya diri, dan kontemporer.',
    lead: 'YOUTHON berkomunikasi dengan bahasa yang lugas, hangat, dan menginspirasi tindakan nyata untuk bergerak bersama.',
    content: [
      {
        type: 'bullet-list',
        title: 'Tujuh Sifat Kepribadian',
        items: [
          'Energetic: Membawa dorongan semangat positif yang menular di setiap interaksi.',
          'Youthful: Selaras dengan dinamika, aspirasi, dan gaya hidup anak muda masa kini.',
          'Inclusive: Terbuka untuk semua orang tanpa memandang latar belakang sosial atau tingkat kebugaran.',
          'Expressive: Memberi ruang bagi keunikan gaya busana, seni visual, dan ekspresi diri.',
          'Social: Mengutamakan kehangatan interaksi sosial dan pertemanan baru.',
          'Optimistic: Menyebarkan keyakinan masa depan cerah melalui kebiasaan sehat.',
          'Contemporary: Modern, adaptif terhadap perkembangan teknologi dan tren urban.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Eksplorasi Pesan Utama: "Switch Your Energy On." didukung oleh pesan sekunder: "Move Together. Feel the Energy. Keep the Movement Going." (Opsi kreatif awal yang disesuaikan saat finalisasi identitas visual).'
      }
    ]
  },
  {
    id: 'experience-pillars',
    number: '06',
    category: 'Arsitektur Pengalaman',
    title: 'Enam Pilar Pengalaman Acara',
    headline: 'Pengalaman multi-indera dari garis start hingga finis.',
    lead: 'YOUTHON mengorkestrasi enam pilar pengalaman terpadu agar setiap kilometer terasa berkesan dan menyenangkan.',
    content: [
      {
        type: 'bullet-list',
        items: [
          '1. Run Experience: Rute terstandarisasi yang nyaman, aman dari lalu lintas, dan cocok untuk pelari pemula maupun santai.',
          '2. Music & Rhythm: Penempatan pengeras suara beraudio jernih di titik rute untuk memacu ritme langkah peserta.',
          '3. Community Connection: Ruang temu bagi komunitas kampus, klub lari santai, dan kelompok kreatif lokal.',
          '4. Interactive Missions: Tantangan opsional ringan (seperti stempel checkpoint) yang tidak mengganggu kelancaran lari.',
          '5. Finish Line Celebration: Panggung selebrasi musik, hidrasi dingin, spot foto tematik, dan area relaksasi.',
          '6. Local Identity: Sentuhan khas lokal di setiap kota penyelenggaraan, mulai dari kuliner hingga musisi daerah.'
        ]
      }
    ]
  },
  {
    id: 'activations',
    number: '07',
    category: 'Modul Aktivasi',
    title: 'Enam Ide Aktivasi Inovatif',
    headline: 'Modul kreatif yang dapat disesuaikan dengan kapasitas tiap kota.',
    lead: 'Setiap ide aktivasi dirancang fleksibel, hemat biaya operasional, dan tunduk pada standar keselamatan rute.',
    content: [
      {
        type: 'bullet-list',
        items: [
          'Rhythm Run: Zona audio berenergi di titik strategis rute dengan tata suara yang tidak mengganggu warga sekitar.',
          'Hype Squad: Tim penyemangat dari komunitas tari kampus atau cheer lokal yang memotivasi peserta di tanjakan rute.',
          'Mission YOUTHON: Tantangan stempel pos hidrasi fisik ringan tanpa memaksa peserta menatap ponsel sambil berlari.',
          'Finish Line Festival: Oase relaksasi pasca-finis dengan medali finisher, tenant hidrasi, dan penampilan musik akustik.',
          'City Chapter Activation: Adaptasi seni dan hidangan lokal kota penyelenggara tanpa mengubah karakter brand inti.',
          'Community Takeover: Sesi pemanasan bersama dan peregangan yoga santai yang dipandu oleh komunitas lari kota setempat.'
        ]
      }
    ]
  },
  {
    id: 'safety',
    number: '08',
    category: 'Standar Operasional',
    title: 'Prinsip Penyelenggaraan & Keselamatan',
    headline: 'Keseruan acara wajib berpijak pada tanggung jawab penuh.',
    lead: 'Keselamatan peserta, tim medis, petugas rute, dan masyarakat umum adalah batas mutlak yang tidak dapat dikompromikan.',
    content: [
      {
        type: 'bullet-list',
        title: 'Enam Protokol Keselamatan Baku',
        items: [
          'Penilaian Risiko Rute (Risk Assessment): Audit aspal, persimpangan, elevasi, dan titik bottleneck sebelum izin diajukan.',
          'Perizinan & Sinergi Otoritas: Koordinasi terpadu dengan Polres, Dinas Perhubungan, Dinas Kesehatan, dan pengelola jalan.',
          'Sistem Medis & Evakuasi: Ambulans bersiaga, posko medis dokter berlisensi di finis, dan mobile medic dengan AED portabel.',
          'Petugas Marshal Terlatih: Penempatan marshal berompi reflektif di setiap tikungan dengan radio HT dan peluit komando.',
          'Stasiun Hidrasi & Kebersihan: Pos air mineral di setiap interval 2 km hingga 2.5 km serta armada pembersih sampah rute.',
          'SOP Cuaca & Darurat: Prosedur tertulis penundaan atau pembatalan jika terjadi hujan badai lebat atau keadaan luar biasa.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Regulasi Rute: Ketentuan batas waktu (Cut-off Time / COT) dan Cut-off Point (COP) hanya diberlakukan apabila dipersyaratkan oleh izin jalan raya Dishub. Peserta yang tertinggal diarahkan ke shuttle evakuasi dengan santun dan aman.'
      }
    ]
  },
  {
    id: 'organisasi',
    number: '08B',
    category: 'Tata Kelola Tim',
    title: 'Struktur Organisasi dan Tim',
    headline: 'Ramping, terfokus, dan akuntabel di setiap fungsi.',
    lead: 'Untuk event perdana, tim tidak perlu terlalu besar, tetapi setiap fungsi harus memiliki PIC yang jelas.',
    statusLabel: 'Pedoman Tata Kelola',
    content: [
      {
        type: 'statement',
        text: 'Beberapa fungsi dapat digabung dalam satu orang pada skala kecil. Namun, fungsi keselamatan tidak boleh sekadar menjadi tugas tambahan tanpa penanggung jawab yang kompeten. Vendor medis, keamanan, dan produksi juga harus memiliki jalur koordinasi yang jelas.'
      },
      {
        type: 'bullet-list',
        title: '8 Fungsi Kunci & Pembagian PIC',
        items: [
          'Event Director: Pemegang keputusan, anggaran, target, dan koordinasi seluruh divisi.',
          'Event Operations: Venue, rute, rundown, vendor, transportasi, perlengkapan, dan logistik.',
          'Safety & Medical: Penilaian risiko, layanan medis, marshal, keamanan, komunikasi darurat, dan evakuasi.',
          'Sponsorship & Partnership: Proposal, pencarian sponsor, negosiasi, kontrak, dan pemenuhan hak sponsor.',
          'Marketing & Community: Brand campaign, media sosial, KOL, kampus, komunitas lari, dan hubungan peserta.',
          'Registration & Participant Services: Pendaftaran, pembayaran, customer service, race pack, dan data peserta.',
          'Creative & Production: Desain, panggung, audio, signage, jersey, medali, foto, video, dan aktivasi.',
          'Finance & Administration: Budget control, procurement, kontrak vendor, pembayaran, dan pelaporan keuangan.'
        ]
      }
    ]
  },
  {
    id: 'journey',
    number: '09',
    category: 'Alur Peserta',
    title: 'Perjalanan Peserta (Participant Journey)',
    headline: 'Lima fase pengalaman terencana dari registrasi hingga kenangan komunitas.',
    lead: 'Setiap titik sentuh (touchpoint) dirancang mulus untuk menghadirkan rasa nyaman dan antusiasme.',
    content: [
      {
        type: 'bullet-list',
        items: [
          'Fase 1 - Penemuan & Inspirasi: Konten digital yang memperlihatkan keseruan atmosfer lari tanpa tekanan kompetisi.',
          'Fase 2 - Pendaftaran Digital Mandiri: Formulir web yang ringkas, pilihan paket komunitas, dan pembayaran instan terverifikasi.',
          'Fase 3 - Pengambilan Race Pack: Alur antrean cepat dengan pemindaian kode QR, panduan Race Guide digital, dan jersey berkualitas.',
          'Fase 4 - Hari Acara (Race Day): Pemanasan seru, rute berenergi, zona musik penyemangat, dan selebrasi medali di garis finis.',
          'Fase 5 - Gema Komunitas: Unduhan foto lari gratis, video kenangan, serta undangan lari santai bulanan di chapter kota.'
        ]
      }
    ]
  },
  {
    id: 'roadmap',
    number: '10',
    category: 'Ekspansi Gerakan',
    title: 'Strategi Skala Nasional',
    headline: 'Bermula dari Jawa Barat, bergerak ke berbagai kota Indonesia.',
    lead: 'Pengembangan movement dijalankan secara terstruktur dalam empat tahap agar konsistensi mutu dan keselamatan tetap terjaga.',
    content: [
      {
        type: 'bullet-list',
        items: [
          'Tahap 1 - Pilot Event (Jawa Barat): Uji coba konsep rute, sistem tiket, operasional lapangan, dan dokumentasi autentik.',
          'Tahap 2 - Penguatan Komunitas: Standarisasi modul aktivasi, pembentukan duta kampus, dan penguatan SOP penyelenggaraan.',
          'Tahap 3 - Ekspansi Kota: Membuka chapter kota baru (kandidat: Jabodetabek, Yogyakarta, Surabaya, Denpasar, Makassar) bersama mitra lokal.',
          'Tahap 4 - Movement Berkelanjutan: Kalender tahunan nasional, program latihan bulanan, dan kemitraan multi-tahun yang berdampak.'
        ]
      }
    ]
  },
  {
    id: 'partners',
    number: '11',
    category: 'Ekosistem Sponsor',
    title: 'Peluang Kolaborasi & Kemitraan',
    headline: 'Kemitraan bernilai nyata untuk peserta, brand, dan kota.',
    lead: 'YOUTHON membuka ruang kolaborasi lintas sektor yang saling menguatkan, bukan sekadar penempatan logo statis.',
    content: [
      {
        type: 'bullet-list',
        title: 'Delapan Sektor Mitra Potensial',
        items: [
          'Apparel & Footwear: Penyediaan jersey resmi berkualitas, hadiah finisher, dan promo perlengkapan olahraga.',
          'Hidrasi & Nutrisi Sehat: Pasokan air mineral teruji di stasiun hidrasi dan sampling minuman isotonik pasca-finis.',
          'FinTech & Pembayaran Digital: Kemudahan transaksi tiket online dan pembayaran nontunai di festival UMKM.',
          'Industri Musik & Kreatif: Kurasi panggung musik festival, talent muda daerah, dan aransemen audio rute.',
          'Kampus & Mahasiswa: Delegasi pelari komunitas, relawan marshal mahasiswa, dan aktivasi UKM seni.',
          'Pemerintah Daerah & Pariwisata: Sinergi promosi pariwisata sehat dan izin sterilisasi ruas jalan kota.',
          'Media & Kreator Konten: Liputan gaya hidup aktif, dokumentasi foto rute resolusi tinggi, dan amplifikasi media.',
          'UMKM Kuliner Lokal: Tenant makanan sehat dan minuman segar di desa festival setelah peserta finis.'
        ]
      }
    ]
  },
  {
    id: 'digital',
    number: '12',
    category: 'Arsitektur Digital',
    title: 'Website & Rencana Landing Page',
    headline: 'Pusat informasi resmi, registrasi aman, dan etalase komunitas.',
    lead: 'Website YOUTHON dibangun bertahap mulai dari landing page berkonversi tinggi hingga platform multi-kota.',
    content: [
      {
        type: 'bullet-list',
        title: 'Sepuluh Seksi Landing Page',
        items: [
          '1. Navbar: Identitas brand, menu navigasi cepat, dan tombol pendaftaran.',
          '2. Hero Section: Headline berenergi, visual inspiratif, ringkasan value, dan ajakan bertindak.',
          '3. What is YOUTHON: Narasi edukasi bahwa acara ini memadukan olahraga, musik, dan komunitas.',
          '4. Upcoming Event Card: Sorotan tanggal, kota pilot, kategori jarak, dan status registrasi [TBD].',
          '5. More Than a Run: Pengenalan 4 aktivasi unggulan (Rhythm Run, Hype Squad, Mission, Festival).',
          '6. Movement Across Indonesia: Peta persebaran chapter dari Jawa Barat menuju kota-kota ekspansi.',
          '7. Verified Community Proof: Dokumentasi nyata komunitas lari tanpa testimoni fiktif.',
          '8. Partners & Collaboration: Sektor kemitraan terbuka dan formulir kontak kerja sama resmi.',
          '9. Final Call to Action: Ajakan hangat mengikuti newsletter tiket dan mendaftarkan komunitas.',
          '10. Footer: Navigasi sitemap lengkap, media sosial resmi, dan informasi transparansi legal.'
        ]
      }
    ]
  },
  {
    id: 'engineering',
    number: '13',
    category: 'Rekayasa & Metrik',
    title: 'Tahapan Web & Indikator Keberhasilan (KPI)',
    headline: 'Teknologi berkinerja tinggi, aman, dan dapat diandalkan.',
    lead: 'Pengembangan platform digital menjamin integritas transaksi tiket dan waktu muat cepat di perangkat seluler.',
    content: [
      {
        type: 'bullet-list',
        title: 'Empat Fase Rekayasa Platform',
        items: [
          'Phase 1: Brand Foundation, landing page editorial responsif, sistem token desain, dan verifikasi lintas peramban.',
          'Phase 2: Event platform, katalog edisi kota, alur registrasi server-side, payment gateway, dan e-ticket QR.',
          'Phase 3: Community hub, galeri foto teroptimasi, sistem manajemen konten (CMS), dan modul hasil catatan waktu opsional.',
          'Phase 4: Admin dashboard operasional, aplikasi pemindai check-in race pack, analitik privasi, dan skalabilitas multi-kota.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Metrik Keberhasilan (KPI): Kunjungan unik web, rasio penyelesaian registrasi, tingkat kehadiran hari-H (turnout), skor kepuasan Net Promoter Score (NPS), nol insiden keselamatan mayor, serta kecepatan muat LCP di bawah 2.5 detik.'
      }
    ]
  },
  {
    id: 'checklist',
    number: '14',
    category: 'Verifikasi Keputusan',
    title: 'Checklist Informasi Pra-Implementasi',
    headline: 'Sebelas keputusan penting sebelum memulai tahap produksi lapangan.',
    lead: 'Sebagai dokumen konsep awal, parameter berikut perlu dikonfirmasi bersama tim pengarah dan mitra strategis.',
    content: [
      {
        type: 'bullet-list',
        items: [
          'Logo dan pedoman identitas visual resmi.',
          'Slogan dan pesan utama brand (misal: Switch Your Energy On).',
          'Kota dan titik lokasi venue pilot event di Jawa Barat.',
          'Tanggal penyelenggaraan, jarak rute, dan kuota maksimal peserta.',
          'Harga tiket, komposisi race pack, dan kebijakan pengembalian dana.',
          'Daftar aktivasi modul rute yang disetujui untuk digelar.',
          'Penyedia payment gateway dan mekanisme e-ticket QR barcode.',
          'Rencana perizinan jalan raya, rumah sakit rujukan, dan armada ambulans.',
          'Daftar sponsor dan mitra komersial yang telah menandatangani kesepakatan resmi.',
          'Kanal komunikasi media sosial resmi dan badan hukum pengelola acara.',
          'Infrastruktur hosting web, nama domain resmi, dan sistem pengelolaan konten.'
        ]
      }
    ]
  },
  {
    id: 'manifesto',
    number: '15',
    category: 'Kesimpulan & Dialog',
    title: 'Manifesto Gerakan & Kolaborasi',
    headline: 'Mari bergerak bersama. Menyalakan energi anak muda Indonesia.',
    lead: 'YOUTHON adalah undangan terbuka bagi siapapun yang meyakini kekuatan olahraga positif, kebersamaan, dan kreativitas.',
    content: [
      {
        type: 'statement',
        text: 'Sebuah movement bermula dari langkah pertama. Kami menyambut dialog kolaborasi bersama brand, kampus, komunitas, dan pemerintah daerah untuk mewujudkan edisi perdana YOUTHON di Jawa Barat.'
      }
    ]
  }
];

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: 'slide-01',
    slideNumber: 1,
    totalSlides: 17,
    category: 'Gerakan Fun Run',
    title: 'YOUTHON : Fun Run Movement',
    headline: 'Lebih dari lari. Tentang bergerak bersama.',
    lead: 'Konsep gerakan fun run generasi muda yang memadukan olahraga jalan-lari, kurasi musik, hiburan, dan komunitas dalam satu atmosfer festival yang inklusif.',
    layout: 'split-hero',
    accentBadge: 'Konsep Awal / Inisiasi Jawa Barat',
    sourceSectionId: 'hero',
    keyPoints: [
      { title: 'Inklusif Penuh', desc: 'Tidak berorientasi pada persaingan waktu semata. Pemula dan pelari santai disambut hangat.' },
      { title: 'Festival Energi', desc: 'Menggabungkan musik, penyemangat kreatif di rute, dan selebrasi meriah di garis finis.' },
      { title: 'Skala Nasional', desc: 'Bermula dari inisiasi pilot di Jawa Barat menuju chapter berbagai kota di Indonesia.' }
    ]
  },
  {
    id: 'slide-02',
    slideNumber: 2,
    totalSlides: 17,
    category: 'Konsep Inti',
    title: 'Mengapa YOUTHON?',
    headline: 'Menjawab kebutuhan generasi muda akan ruang bergerak yang membahagiakan.',
    lead: 'Banyak anak muda ingin hidup lebih aktif, namun ragu mengikuti lomba lari yang kaku atau menuntut kecepatan tinggi.',
    layout: 'statement',
    sourceSectionId: 'big-idea',
    keyPoints: [
      { title: 'Tantangan Saat Ini', desc: 'Event lari konvensional sering terasa intimidatif bagi pelari mula yang hanya ingin bersenang-senang.' },
      { title: 'Solusi YOUTHON', desc: 'Menghadirkan pengalaman lari santai yang menyatu dengan musik festival dan pertemanan nyata.' },
      { title: 'Dampak Sosial', desc: 'Membangun kebiasaan hidup sehat tanpa beban tekanan waktu tempuh.' }
    ]
  },
  {
    id: 'slide-03',
    slideNumber: 3,
    totalSlides: 17,
    category: 'Fondasi Brand',
    title: 'Empat Pilar Gerakan',
    headline: 'Movement, Fun, Youth, Run : Empat pilar yang membentuk jati diri YOUTHON.',
    lead: 'Setiap keputusan desain acara, rute lari, hingga komunikasi brand ditopang oleh empat pilar terpadu ini.',
    layout: 'pillars',
    sourceSectionId: 'pillars',
    keyPoints: [
      { title: 'Movement', desc: 'Gerakan dinamis yang dapat direplikasi dan bertumbuh lintas kota di Indonesia.', badge: '01' },
      { title: 'Fun', desc: 'Aktivitas yang membahagiakan, bebas stres, dan tidak murni kompetitif.', badge: '02' },
      { title: 'Youth', desc: 'Ruang positif bagi generasi muda untuk terhubung dan berekspresi secara sehat.', badge: '03' },
      { title: 'Run', desc: 'Olahraga lari atau jalan santai terstruktur dengan standar kenyamanan dan keselamatan tinggi.', badge: '04' }
    ]
  },
  {
    id: 'slide-04',
    slideNumber: 4,
    totalSlides: 17,
    category: 'Arah Strategis',
    title: 'Visi dan Misi Utama',
    headline: 'Menghubungkan anak muda di berbagai kota melalui olahraga dan kreativitas.',
    lead: 'Membangun jejaring generasi aktif yang menyebarkan kebiasaan hidup sehat dan kolaborasi positif.',
    layout: 'cards-grid',
    sourceSectionId: 'vision-mission',
    keyPoints: [
      { title: 'Inklusivitas Pemula', desc: 'Menghadirkan pengalaman yang mudah diikuti tanpa diskriminasi kemampuan fisik.' },
      { title: 'Gaya Hidup Aktif', desc: 'Menginspirasi kebiasaan bergerak sehat di kalangan pelajar dan profesional muda.' },
      { title: 'Ruang Kolaborasi', desc: 'Mewadahi sinergi antarkomunitas kampus, klub lari, kreator, dan brand partner.' },
      { title: 'Standar Mutu & Keamanan', desc: 'Mengutamakan izin resmi, pos medis teruji, dan kenyamanan rute di setiap edisi.' }
    ]
  },
  {
    id: 'slide-05',
    slideNumber: 5,
    totalSlides: 17,
    category: 'Target Audiens',
    title: 'Segmentasi & Inklusivitas',
    headline: 'Ruang ramah untuk pelajar, pekerja muda, hingga pelari pemula.',
    lead: 'Setiap format rute dan aktivitas dirancang agar peserta merasa diterima dengan hangat sejak langkah pertama.',
    layout: 'comparison',
    sourceSectionId: 'audience',
    keyPoints: [
      { title: 'Pelajar & Mahasiswa', desc: 'Mencari kegiatan akhir pekan positif, pelepasan penat, dan ajang foto seru bersama kawan.' },
      { title: 'Young Professionals', desc: 'Membutuhkan rutinitas olahraga yang seimbang, menyenangkan, dan memperluas jejaring sosial.' },
      { title: 'First-time Runners', desc: 'Pelari pemula yang membutuhkan atmosfer ramah, rute tanpa tekanan, dan dukungan marshal.' },
      { title: 'Komunitas & Brand', desc: 'Wadah kolaborasi interaktif untuk menyalurkan energi kreatif generasi muda.' }
    ]
  },
  {
    id: 'slide-06',
    slideNumber: 6,
    totalSlides: 17,
    category: 'Karakter Brand',
    title: 'Kepribadian & Nada Komunikasi',
    headline: 'Energetik, bersahabat, percaya diri, dan kontemporer.',
    lead: 'Bahasa komunikasi YOUTHON aktif dan lugas, tanpa memaksakan istilah slang yang cepat usang.',
    layout: 'cards-grid',
    sourceSectionId: 'brand-character',
    keyPoints: [
      { title: 'Energetic & Youthful', desc: 'Membawa dorongan semangat positif yang menular dalam setiap pesan dan visual.' },
      { title: 'Inclusive & Social', desc: 'Menyambut semua orang dan mengutamakan kehangatan interaksi antarpeserta.' },
      { title: 'Expressive & Optimistic', desc: 'Memberi ruang bagi keunikan gaya lari santai dan memandang masa depan cerah.' },
      { title: 'Eksplorasi Slogan', desc: '"Switch Your Energy On." - Move Together. Feel the Energy. Keep the Movement Going.' }
    ]
  },
  {
    id: 'slide-07',
    slideNumber: 7,
    totalSlides: 17,
    category: 'Pengalaman Acara',
    title: 'Enam Pilar Pengalaman Acara',
    headline: 'Kombinasi rute teratur, kurasi audio, dan selebrasi finis berkesan.',
    lead: 'Setiap kilometer dirancang agar peserta menikmati kebersamaan dari garis start hingga panggung festival.',
    layout: 'pillars',
    sourceSectionId: 'experience-pillars',
    keyPoints: [
      { title: '1. Run Experience', desc: 'Rute aman, steril dari lalu lintas kendaraan, dan nyaman bagi jalan-lari santai.' },
      { title: '2. Music & Rhythm', desc: 'Titik tata suara jernih di sepanjang rute untuk memompa ritme langkah peserta.' },
      { title: '3. Community Hub', desc: 'Area interaksi antarkomunitas kampus, kreator, dan klub lari santai.' },
      { title: '4. Finish Celebration', desc: 'Panggung musik selebrasi, medali finisher, hidrasi dingin, dan spot foto estetik.' }
    ]
  },
  {
    id: 'slide-08',
    slideNumber: 8,
    totalSlides: 17,
    category: 'Aktivasi Lapangan',
    title: 'Inovasi Modul Rute : Bagian 1',
    headline: 'Rhythm Run dan Hype Squad menghidupkan setiap kilometer lintasan.',
    lead: 'Aktivasi dirancang modular sehingga dapat disesuaikan dengan izin lokasi dan anggaran penyelenggaraan.',
    layout: 'cards-grid',
    sourceSectionId: 'activations',
    keyPoints: [
      { title: 'Rhythm Run Zone', desc: 'Titik musik terpilih di sepanjang rute untuk menjaga moral peserta. Desibel suara diatur agar tidak mengganggu instruksi marshal atau kenyamanan warga sekitar.' },
      { title: 'Hype Squad', desc: 'Tim penyemangat dari komunitas tari kampus atau kelompok cheer lokal di titik tanjakan untuk menyemangati peserta dengan tepukan, poster kreatif, dan sorakan ceria.' }
    ]
  },
  {
    id: 'slide-09',
    slideNumber: 9,
    totalSlides: 17,
    category: 'Aktivasi Lapangan',
    title: 'Inovasi Modul Rute : Bagian 2',
    headline: 'Mission YOUTHON, Festival Finis, dan sentuhan kearifan lokal.',
    lead: 'Menciptakan ruang perayaan yang aman, tertib, dan mempererat ikatan antarsesama peserta.',
    layout: 'cards-grid',
    sourceSectionId: 'activations',
    keyPoints: [
      { title: 'Mission YOUTHON', desc: 'Tantangan ringan non-kompetitif seperti stempel pos hidrasi fisik. Bersifat opsional dan dilarang menatap ponsel sambil berlari demi keselamatan.' },
      { title: 'Finish Line Festival', desc: 'Oase pemulihan pasca-finis dengan panggung musik akustik, booth hidrasi, kuliner sehat, dan instalasi foto kenangan.' },
      { title: 'City Chapter Nuance', desc: 'Kolaborasi dengan musisi dan kuliner khas daerah di setiap kota tanpa mengubah standar brand YOUTHON.' },
      { title: 'Community Takeover', desc: 'Sesi pemanasan bersama (warm-up) dan pendinginan yang dipandu langsung oleh pelatih komunitas lari setempat.' }
    ]
  },
  {
    id: 'slide-10',
    slideNumber: 10,
    totalSlides: 17,
    category: 'Prosedur Medis',
    title: 'Standar Keselamatan & Penyelenggaraan',
    headline: 'Keseruan acara wajib berpijak pada tanggung jawab penuh.',
    lead: 'Keselamatan peserta, petugas rute, dan masyarakat adalah prioritas nomor satu yang tidak dapat ditawar.',
    layout: 'cards-grid',
    sourceSectionId: 'safety',
    keyPoints: [
      { title: 'Audit Risiko Rute', desc: 'Pemeriksaan kondisi aspal, persimpangan, elevasi jalan, dan potensi penyempitan lintasan.' },
      { title: 'Perizinan Otoritas', desc: 'Sinergi resmi dengan Kepolisian, Dinas Perhubungan, Dinas Kesehatan, dan pengelola kawasan.' },
      { title: 'Sistem Medis Siaga', desc: 'Ambulans evakuasi bersiaga, dokter berlisensi di pos finis, dan mobile medic pembawa alat AED.' },
      { title: 'Stasiun Hidrasi Higienis', desc: 'Pos air minum mineral di interval 2 km hingga 2.5 km lengkap dengan tim pembersihan sampah rute.' }
    ]
  },
  {
    id: 'slide-11',
    slideNumber: 11,
    totalSlides: 17,
    category: 'Regulasi Rute',
    title: 'Regulasi Lari & Pedoman Peserta',
    headline: 'Ketentuan waktu yang manusiawi dan edukasi keselamatan.',
    lead: 'Menjelaskan fungsi Cut-off Time (COT) dan Cut-off Point (COP) secara bijak demi kelancaran lalu lintas kota.',
    layout: 'statement',
    sourceSectionId: 'safety',
    keyPoints: [
      { title: 'Penerapan Batas Waktu', desc: 'Batas Cut-off Time (COT) hanya digunakan jika dipersyaratkan oleh izin buka-tutup jalan raya Dishub setempat.' },
      { title: 'Evakuasi Santun', desc: 'Peserta yang melewati batas jam diarahkan ke armada shuttle panitia secara aman dan terhormat.' },
      { title: 'Race Guide Digital', desc: 'Panduan lengkap berisi denah rute, letak pos medis, stasiun hidrasi, dan nomor darurat dibagikan sebelum hari-H.' }
    ]
  },
  {
    id: 'slide-12',
    slideNumber: 12,
    totalSlides: 17,
    category: 'Tata Kelola Tim',
    title: 'Struktur Organisasi & Tim Inti',
    headline: 'Ramping, terfokus, dan akuntabel di setiap fungsi.',
    lead: 'Untuk event perdana, tim tidak perlu terlalu besar, tetapi setiap fungsi memiliki PIC jelas dengan fungsi keselamatan yang tidak boleh dikompromikan.',
    layout: 'cards-grid',
    sourceSectionId: 'organisasi',
    keyPoints: [
      { title: 'Event Director & Operations', desc: 'Pemegang keputusan tertinggi, alokasi anggaran, rundown acara, sterilisasi rute 5K, dan logistik.', badge: 'DIR & OPS' },
      { title: 'Safety & Medical (Mandatori)', desc: 'Penilaian risiko lintasan, armada medis, marshal berompi, radio HT, dan alur evakuasi cepat.', badge: 'KESELAMATAN' },
      { title: 'Sponsorship & Marketing', desc: 'Pencarian mitra brand, aktivasi hak sponsor, kampanye digital media sosial, dan roadshow kampus/komunitas.', badge: 'KEMITRAAN' },
      { title: 'Services, Production & Finance', desc: 'Registrasi online, customer support, race pack, panggung audio festival, dan budget control.', badge: 'LAYANAN' }
    ]
  },
  {
    id: 'slide-13',
    slideNumber: 13,
    totalSlides: 17,
    category: 'Alur Peserta',
    title: 'Perjalanan Peserta (Participant Journey)',
    headline: 'Lima tahap pengalaman terpadu dari pendaftaran hingga purnajual.',
    lead: 'Menjamin setiap titik interaksi terasa nyaman, transparan, dan membangun loyalitas komunitas.',
    layout: 'timeline',
    sourceSectionId: 'journey',
    keyPoints: [
      { title: '1. Discovery & Mindset', desc: 'Mengenal YOUTHON sebagai wadah bergerak santai yang ramah pemula.' },
      { title: '2. Seamless Register', desc: 'Pendaftaran online mandiri dengan validasi aman dan e-ticket instan.' },
      { title: '3. Race Pack Collection', desc: 'Pengambilan jersey dan nomor dada teratur dengan pemindaian barcode QR.' },
      { title: '4. Event Day Excitement', desc: 'Pemanasan bersama, lari santai berenergi, zona musik, dan selebrasi finis.' },
      { title: '5. Post-Event Bond', desc: 'Unduh foto gratis, survei kepuasan, dan keanggotaan komunitas lari santai bulanan.' }
    ]
  },
  {
    id: 'slide-14',
    slideNumber: 14,
    totalSlides: 17,
    category: 'Rencana Pertumbuhan',
    title: 'Roadmap Skala Nasional',
    headline: 'Bermula dari Jawa Barat, berkembang ke berbagai kota di Indonesia.',
    lead: 'Ekspansi terukur yang mempertahankan konsistensi mutu operasional dan keselamatan di setiap chapter.',
    layout: 'timeline',
    sourceSectionId: 'roadmap',
    keyPoints: [
      { title: 'Tahap 1 - Pilot Event (Jawa Barat)', desc: 'Pengujian konsep, alur tiket digital, SOP medis, dan dokumentasi rute di Jawa Barat.' },
      { title: 'Tahap 2 - Penguatan Komunitas', desc: 'Standardisasi playbook modul aktivasi, jejaring duta kampus, dan komunikasi rutin.' },
      { title: 'Tahap 3 - Ekspansi Kota', desc: 'Pembukaan chapter kota baru (kandidat: Jabodetabek, Jogja, Surabaya, Denpasar, Makassar).' },
      { title: 'Tahap 4 - Gerakan Berkelanjutan', desc: 'Kalender lari tahunan nasional, program latihan bulanan, dan kemitraan multi-tahun.' }
    ]
  },
  {
    id: 'slide-15',
    slideNumber: 15,
    totalSlides: 17,
    category: 'Model Kemitraan',
    title: 'Ekosistem Kolaborasi & Sponsor',
    headline: 'Kerja sama multisektor yang memberi dampak nyata bagi peserta.',
    lead: 'Menghubungkan brand dan institusi dengan ribuan anak muda melalui pengalaman langsung yang autentik.',
    layout: 'cards-grid',
    sourceSectionId: 'partners',
    keyPoints: [
      { title: 'Apparel & Footwear', desc: 'Penyediaan jersey resmi yang nyaman dan promosi perlengkapan lari berkualitas.' },
      { title: 'Minuman Hidrasi & F&B', desc: 'Dukungan air mineral murni di water station dan sampling produk bergizi di finis.' },
      { title: 'FinTech & Pembayaran', desc: 'Official payment gateway pendaftaran website dan transaksi cashless di tenant festival.' },
      { title: 'Kampus & Komunitas', desc: 'Kolaborasi relawan mahasiswa, klub lari santai, dan penampilan talenta kreatif lokal.' }
    ]
  },
  {
    id: 'slide-16',
    slideNumber: 16,
    totalSlides: 17,
    category: 'Infrastruktur Digital',
    title: 'Arsitektur Platform & Rekayasa Web',
    headline: 'Pusat informasi resmi, registrasi aman, dan etalase komunitas.',
    lead: 'Dibangun dengan fondasi teknis teruji, responsif ponsel, dan patuh standar aksesibilitas.',
    layout: 'cards-grid',
    sourceSectionId: 'digital',
    keyPoints: [
      { title: 'Landing Page Editorial', desc: 'Halaman berdaya konversi tinggi dengan narasi konsep, modul aktivasi, dan jadwal rute.' },
      { title: 'Sistem Tiket & Transaksi', desc: 'Validasi server-side aman, integrasi gateway pembayaran resmi, dan e-ticket QR mandiri.' },
      { title: 'Komponen Reusable', desc: 'Struktur kode modular untuk katalog event multi-kota, race guide interaktif, dan galeri cerita.' },
      { title: 'Keamanan Data Pribadi', desc: 'Enkripsi data peserta dan pemindaian barcode check-in cepat pada hari pengambilan race pack.' }
    ]
  },
  {
    id: 'slide-17',
    slideNumber: 17,
    totalSlides: 17,
    category: 'Langkah Lanjutan',
    title: 'Checklist Implementasi & Aksi',
    headline: 'Sebelas parameter keputusan menuju peluncuran perdana.',
    lead: 'YOUTHON adalah konsep matang yang siap dikembangkan bersama para mitra strategis.',
    layout: 'next-steps',
    accentBadge: 'Pintu Dialog Terbuka',
    sourceSectionId: 'checklist',
    keyPoints: [
      { title: 'Konfirmasi Brand', desc: 'Finalisasi logo, tipografi resmi, dan slogan utama kampanye.' },
      { title: 'Konfirmasi Event', desc: 'Penetapan venue Jawa Barat, tanggal pelaksanaan, dan kuota peserta.' },
      { title: 'Konfirmasi Finansial', desc: 'Struktur tier tiket, isi race pack, dan kesepakatan mitra sponsor.' },
      { title: 'Konfirmasi Operasional', desc: 'Izin rute kepolisian, tim medis ambulans, dan gateway tiket digital.' }
    ]
  }
];

export const INITIAL_CHECKLIST_STATE = [
  { id: 'c-1', label: 'Logo dan identitas visual final', category: 'Brand', confirmed: false, note: 'Palet warna master dan tipografi resmi.' },
  { id: 'c-2', label: 'Slogan dan pesan utama brand', category: 'Brand', confirmed: false, note: 'Eksplorasi "Switch Your Energy On" siap divalidasi.' },
  { id: 'c-3', label: 'Kota dan koordinat venue pilot Jawa Barat', category: 'Event', confirmed: false, note: 'Kurasi rute aman dan representatif di wilayah Jawa Barat.' },
  { id: 'c-4', label: 'Tanggal pelaksanaan, jarak, dan kuota peserta', category: 'Event', confirmed: false, note: 'Kategori lari santai (5K/jalan-lari) dan kapasitas peserta.' },
  { id: 'c-5', label: 'Harga tiket, benefit race pack, dan kebijakan refund', category: 'Ticketing', confirmed: false, note: 'Paket komunitas mahasiswa dan peserta umum.' },
  { id: 'c-6', label: 'Daftar modul aktivasi yang disetujui', category: 'Event', confirmed: false, note: 'Penetapan zona Rhythm Run, Hype Squad, dan festival finis.' },
  { id: 'c-7', label: 'Vendor gateway pembayaran dan sistem e-ticket', category: 'Digital', confirmed: false, note: 'Integrasi transaksi nontunai dan kode QR race pack.' },
  { id: 'c-8', label: 'Perizinan rute jalan raya, kepolisian, dan medis', category: 'Safety', confirmed: false, note: 'Kerja sama ambulans, pos medis dokter, dan sterilisasi rute.' },
  { id: 'c-9', label: 'Daftar mitra sponsor yang telah terkonfirmasi', category: 'Partners', confirmed: false, note: 'Penyelarasan hak penempatan logo dan aktivasi booth.' },
  { id: 'c-10', label: 'Kanal media sosial resmi dan entitas legal pengelola', category: 'Brand', confirmed: false, note: 'Hotline informasi publik dan syarat ketentuan layanan.' },
  { id: 'c-11', label: 'Infrastruktur hosting web, domain resmi, dan CMS', category: 'Digital', confirmed: false, note: 'Peluncuran domain resmi dan ketahanan beban server pendaftaran.' }
];

