import {
  SlideItem,
  ActivationModule,
  ChapterLocation,
  PartnerCategory,
  SitemapItem,
  ChecklistItem,
  MetricItem
} from '../types';

export const PITCH_METADATA = {
  brandName: 'YOUTHON',
  tagline: 'Fun Run Movement',
  version: 'Draft v1.0 [Konsep Awal]',
  dateUpdated: 'Oktober 2026',
  documentStatus: 'Konsep Awal / Siap Dikembangkan',
  classification: 'Pitch Deck & Rencana Strategis',
  originChapter: 'Jawa Barat (Inisiasi Pilot)'
};

export const SLIDES_CONFIG: SlideItem[] = [
  {
    id: 'concept',
    number: '01',
    title: 'Konsep, Visi, Misi & Audiens',
    subtitle: 'Fondasi gerakan fun run inklusif yang menghubungkan generasi muda',
    category: 'Fondasi Brand',
    badge: 'Core Identity'
  },
  {
    id: 'brand',
    number: '02',
    title: 'Karakter Brand & Arah Komunikasi',
    subtitle: 'Tujuh pilar kepribadian brand dan eksplorasi pesan utama',
    category: 'Identitas & Suara',
    badge: 'Brand Voice'
  },
  {
    id: 'experience',
    number: '03',
    title: 'Pengalaman Event & Ide Aktivasi',
    subtitle: 'Enam pilar pengalaman dan enam modul aktivasi inovatif di rute',
    category: 'Desain Pengalaman',
    badge: 'Event Modules'
  },
  {
    id: 'safety',
    number: '04',
    title: 'Prinsip Penyelenggaraan & Keselamatan',
    subtitle: 'Standar operasional, manajemen risiko rute, dan regulasi peserta',
    category: 'Operasional & Medis',
    badge: 'Safety First'
  },
  {
    id: 'roadmap',
    number: '05',
    title: 'Strategi Pengembangan Movement',
    subtitle: 'Ekspansi terstruktur dari pilot Jawa Barat ke berbagai kota Indonesia',
    category: 'Pertumbuhan Gerakan',
    badge: 'National Scale'
  },
  {
    id: 'partners',
    number: '06',
    title: 'Peluang Kolaborasi & Kemitraan',
    subtitle: 'Ekosistem kerja sama multisektor yang memberi dampak nyata',
    category: 'Kolaborasi & Sponsor',
    badge: 'Ecosystem'
  },
  {
    id: 'digital',
    number: '07',
    title: 'Sitemap & Rancangan Landing Page',
    subtitle: 'Arsitektur website resmi dan urutan 10 seksi halaman utama',
    category: 'Arsitektur Web',
    badge: 'Platform Design'
  },
  {
    id: 'engineering',
    number: '08',
    title: 'Tahapan Web & Indikator Keberhasilan',
    subtitle: 'Empat fase rekayasa platform digital dan matriks metrik terukur',
    category: 'Teknis & Metrik',
    badge: 'Tech & KPIs'
  },
  {
    id: 'checklist',
    number: '09',
    title: 'Checklist Pra-Implementasi',
    subtitle: 'Daftar keputusan krusial yang perlu dikonfirmasi sebelum produksi',
    category: 'Verifikasi Keputusan',
    badge: 'Action Items'
  },
  {
    id: 'summary',
    number: '10',
    title: 'Rangkuman & Langkah Berikutnya',
    subtitle: 'Manifesto gerakan dan komitmen kolaborasi terbuka',
    category: 'Executive Wrap',
    badge: 'Next Steps'
  }
];

export const CONCEPT_DATA = {
  overview:
    'YOUTHON adalah gerakan fun run yang memadukan olahraga, musik, hiburan, komunitas, dan interaksi kreatif dalam satu atmosfer yang berenergi tinggi serta ramah bagi pemula. Bukan sekadar mengejar catatan waktu tercepat di garis finis, YOUTHON merayakan kebersamaan, ekspresi diri, dan gaya hidup sehat berkelanjutan.',
  corePillars: [
    {
      title: 'Movement',
      desc: 'Gerakan dinamis yang dapat berkembang lintas kota dan komunitas di seluruh Indonesia.'
    },
    {
      title: 'Fun',
      desc: 'Aktivitas yang menyenangkan, inklusif, dan tidak semata-mata berorientasi pada kompetisi ketat.'
    },
    {
      title: 'Youth',
      desc: 'Ruang aman dan positif bagi generasi muda untuk bergerak aktif, terhubung, dan berekspresi.'
    },
    {
      title: 'Run',
      desc: 'Aktivitas lari atau jalan-lari terstruktur yang dapat disesuaikan dengan format dan kapasitas kota.'
    }
  ],
  vision:
    'Menjadi fun run movement yang menghubungkan generasi muda di berbagai kota di Indonesia melalui olahraga, kreativitas, dan pengalaman komunitas yang positif.',
  missions: [
    'Menghadirkan pengalaman lari yang menyenangkan, inklusif, dan mudah diikuti oleh pemula sekalipun.',
    'Mendorong gaya hidup aktif dan kebiasaan bergerak sehat di kalangan anak muda.',
    'Menciptakan ruang pertemanan nyata, kolaborasi komunitas, dan penguatan jejaring positif.',
    'Menggabungkan olahraga dengan kurasi musik, hiburan, tantangan interaktif, dan aktivitas kreatif.',
    'Mengembangkan jaringan event dan chapter komunitas YOUTHON yang solid di berbagai kota.',
    'Membuka peluang kemitraan setara bagi brand, pegiat kreatif, dan ekosistem lokal.'
  ],
  positioning:
    'YOUTHON adalah fun run movement untuk generasi muda yang ingin bergerak, terhubung, dan merayakan energi bersama, memadukan atmosfer festival komunitas yang semarak dengan standar keselamatan, kenyamanan, dan kualitas penyelenggaraan profesional.',
  targetAudience: [
    {
      segment: 'Pelajar, Mahasiswa & Young Professionals',
      profile: 'Rentang usia produktif yang mencari pelepasan stres sehat serta pertemanan baru.',
      expectation: 'Acara yang seru, visual estetik, musik berkualitas, dan waktu mulai yang ramah.'
    },
    {
      segment: 'Pelari Pemula (First-time Runners)',
      profile: 'Individu yang baru pertama kali tertarik mencoba ajang lari rekreasional.',
      expectation: 'Atmosfer tanpa intimidasi waktu, instruksi rute yang jelas, dan rute ramah jalan santai.'
    },
    {
      segment: 'Pelari Rekreasional & Komunitas',
      profile: 'Anggota klub lari santai yang menikmati berlari beramai-ramai dengan teman.',
      expectation: 'Fasilitas hidrasi terjamin, rute aman tanpa gangguan lalu lintas, dan medali perayaan.'
    },
    {
      segment: 'Brand & Mitra Kolaboratif',
      profile: 'Entitas yang ingin berinteraksi secara autentik dengan generasi muda Indonesia.',
      expectation: 'Eksposur bermakna, keterlibatan peserta secara langsung, dan asosiasi brand yang positif.'
    }
  ],
  inclusivityNote:
    'Prinsip Inklusivitas: Format acara, jarak tempuh, persyaratan usia, dan tingkat kesulitan disesuaikan dengan kapasitas penyelenggara dan kondisi peserta. YOUTHON tidak mengasumsikan semua peserta memiliki kemampuan fisik yang seragam.'
};

export const BRAND_DATA = {
  personalityTraits: [
    { name: 'Energetic', desc: 'Membawa dorongan semangat positif yang menular di setiap interaksi.' },
    { name: 'Youthful', desc: 'Relevan dengan gaya hidup, aspirasi, dan pola interaksi anak muda.' },
    { name: 'Inclusive', desc: 'Menyambut semua orang tanpa memandang latar belakang atau kecepatan lari.' },
    { name: 'Expressive', desc: 'Memberi ruang luas untuk gaya berpakaian, musik, dan kreativitas diri.' },
    { name: 'Social', desc: 'Membangun kehangatan interaksi antarpeserta dan kolaborasi komunitas.' },
    { name: 'Optimistic', desc: 'Menatap masa depan dengan keyakinan, kebiasaan sehat, dan keceriaan.' },
    { name: 'Contemporary', desc: 'Modern, adaptif terhadap perkembangan teknologi dan budaya urban.' }
  ],
  communicationDirection: [
    'Gunakan bahasa yang aktif, lugas, percaya diri, dan mudah dipahami.',
    'Komunikasi terasa hangat dan dekat tanpa memaksakan slang yang cepat usang.',
    'Fokus pada inspirasi tindakan nyata untuk bergerak bersama, bukan tekanan performa.',
    'Selalu sertakan transparansi informasi teknis mengenai keselamatan dan kesiapan diri.'
  ],
  messageExploration: {
    name: 'YOUTHON - Fun Run Movement',
    headlineCandidate: 'Switch Your Energy On.',
    supportingMessage: 'Move Together. Feel the Energy. Keep the Movement Going.',
    disclaimer:
      'Catatan: Headline dan slogan di atas adalah opsi eksplorasi awal untuk didiskusikan bersama, bukan keputusan final yang mengikat. Keselarasan visual dan narasi akan disesuaikan saat finalisasi identitas brand.'
  }
};

export const ACTIVATIONS_DATA: ActivationModule[] = [
  {
    id: 'act-1',
    name: 'Rhythm Run',
    tagline: 'Zona audio dan booster ritme di titik rute terpilih',
    description:
      'Titik-titik tertentu di sepanjang lintasan dilengkapi kurasi audio berenergi atau pertunjukan musik langsung untuk menjaga moral peserta saat melangkah.',
    safetyCheck:
      'Volume suara, penempatan speaker, dan kabel wajib ditata agar tidak menghalangi lintasan, tidak mengaburkan instruksi marshal, dan menghormati lingkungan warga sekitar.',
    readinessLevel: 'Pilot Ready',
    operationalNote: 'Kebutuhan: Genset silent/baterai, operator audio, koordinasi izin desibel lingkungan.'
  },
  {
    id: 'act-2',
    name: 'Hype Squad',
    tagline: 'Penyemangat jalan dari komunitas kreatif dan kampus lokal',
    description:
      'Tim pemberi semangat di titik-titik krusial lintasan (seperti tanjakan atau kilometer tengah) untuk menyemangati peserta dengan tepukan, poster jenaka, dan sorakan ceria.',
    safetyCheck:
      'Ditempatkan di luar batas tapak lari agar tidak menimbulkan penyempitan rute (bottleneck) atau kontak fisik mendadak.',
    readinessLevel: 'Pilot Ready',
    operationalNote: 'Kolaborasi ideal dengan UKM tari kampus, komunitas cheer, atau suporter olahraga lokal.'
  },
  {
    id: 'act-3',
    name: 'Mission: YOUTHON',
    tagline: 'Tantangan ringan opsional untuk interaksi komunitas',
    description:
      'Misi non-kompetitif seperti menemukan instalasi seni tertentu, mengumpulkan stempel di titik hidrasi khusus, atau berfoto di checkpoint tematik.',
    safetyCheck:
      'Partisipasi harus bersifat opsional penuh. Peserta dilarang menatap layar ponsel sambil berlari di lintasan utama demi mencegah tabrakan.',
    readinessLevel: 'Needs Validation',
    operationalNote: 'Desain stempel atau kartu fisik ringan lebih aman daripada aplikasi mobile di tengah rute lari.'
  },
  {
    id: 'act-4',
    name: 'Finish Line Festival',
    tagline: 'Pusat selebrasi, pendinginan, dan panggung musik',
    description:
      'Area pasca-finis yang dirancang sebagai oase istirahat: pembagian medali, hidrasi dingin, panggung selebrasi musik, booth kuliner lokal, dan instalasi foto kenangan.',
    safetyCheck:
      'Pemisahan tegas antara jalur finis lari (recovery flow) dengan area panggung agar tidak terjadi penumpukan peserta di ambang finis.',
    readinessLevel: 'Pilot Ready',
    operationalNote: 'Kapasitas venue harus menampung 100% peserta finis beserta keluarga/pendukung secara nyaman.'
  },
  {
    id: 'act-5',
    name: 'City Chapter Activation',
    tagline: 'Sentuhan kearifan lokal di setiap kota penyelenggaraan',
    description:
      'Setiap kota memiliki identitas edisi khusus, misalnya sajian kuliner khas di finis, instalasi karya seniman lokal, atau penampilan musik khas daerah.',
    safetyCheck:
      'Identitas inti brand YOUTHON tetap seragam dan konsisten, sementara elemen lokal melengkapi pengalaman.',
    readinessLevel: 'Needs Validation',
    operationalNote: 'Format disesuaikan dengan kurasi tim lokal di Jawa Barat dan kota-kota ekspansi.'
  },
  {
    id: 'act-6',
    name: 'Community Takeover',
    tagline: 'Panggung bersama untuk komunitas olahraga dan kreatif',
    description:
      'Sesi pra-event dan pasca-event diisi oleh komunitas lari lokal, misalnya memimpin pemanasan bersama (warm-up), sesi peregangan yoga santai, atau lokakarya gaya hidup aktif.',
    safetyCheck:
      'Instruktur wajib bersertifikasi atau berpengalaman menangani pemanasan kelompok besar untuk mencegah cedera otot peserta.',
    readinessLevel: 'Optional Module',
    operationalNote: 'Membangun kepemilikan acara bersama komunitas kota penyelenggara.'
  }
];

export const SAFETY_DATA = {
  corePrinciples: [
    {
      title: 'Penilaian Risiko Rute (Risk Assessment)',
      desc: 'Audit mendalam terhadap kondisi aspal, persimpangan jalan raya, elevasi tanjakan, potensi genangan air, dan titik penyempitan rute sebelum perizinan final.'
    },
    {
      title: 'Perizinan & Koordinasi Otoritas',
      desc: 'Koordinasi resmi dengan Kepolisian, Dinas Perhubungan, Dinas Kesehatan, dan pengelola kawasan publik kota setempat.'
    },
    {
      title: 'Sistem Medis & Jalur Evakuasi',
      desc: 'Penyediaan ambulans bersiaga di lintasan, tenda medis utama di finis, dokter berlisensi, serta tim First Aider bergerak (mobile medic) dengan AED portabel.'
    },
    {
      title: 'Petugas Rute & Marshal Terlatih',
      desc: 'Marshal ditempatkan di setiap belokan krusial dan persimpangan, dilengkapi radio komunikasi dua arah dan peluit pengatur arah.'
    },
    {
      title: 'Stasiun Hidrasi & Kebersihan',
      desc: 'Titik hidrasi air mineral higienis di setiap interval 2 km hingga 2.5 km, lengkap dengan kantong sampah ramah lingkungan dan relawan pembersih.'
    },
    {
      title: 'Prosedur Cuaca Ekstrem & Keadaan Darurat',
      desc: 'SOP tertulis untuk penundaan, pengalihan rute alternatif, atau penghentian acara bila terjadi hujan badai, petir berlebihan, atau insiden keamanan luar biasa.'
    }
  ],
  raceRulesClarification: [
    {
      term: 'Cut-off Time (COT)',
      meaning: 'Batas waktu maksimal peserta menyelesaikan rute keseluruhan secara aman sebelum jalur umum dibuka kembali.',
      application: 'Diterapkan hanya jika dipersyaratkan oleh izin lalu lintas Dishub/Polres setempat.'
    },
    {
      term: 'Cut-off Point (COP)',
      meaning: 'Titik pos tengah rute dengan batas jam tertentu untuk memastikan peserta tidak tertinggal terlalu jauh.',
      application: 'Peserta yang melewati batas jam akan diarahkan ke shuttle evakuasi panitia.'
    },
    {
      term: 'DNF & DNS',
      meaning: 'Did Not Finish (memulai tapi tidak menyelesaikan) dan Did Not Start (terdaftar tapi tidak hadir).',
      application: 'Dicatat secara tertib di sistem informasi untuk rekapitulasi data keamanan peserta.'
    },
    {
      term: 'Race Guide Digital',
      meaning: 'Buku panduan lengkap berisi peta rute, letak medis, letak toilet, nomor darurat, dan jadwal pengambilan race pack.',
      application: 'Wajib diunduh oleh setiap peserta terdaftar 7 hari sebelum pelaksanaan event.'
    }
  ]
};

export const ROADMAP_DATA = {
  phases: [
    {
      phase: 'Tahap 1',
      title: 'Pilot Event (Inisiasi Jawa Barat)',
      focus: 'Pengujian konsep, alur operasional, dan sistem digital',
      bullets: [
        'Penyelenggaraan edisi perdana di Jawa Barat (kandidat lokasi: Bandung / Kawasan Terpadu).',
        'Menguji efektivitas alur peserta: registrasi online, race pack collection, hingga alur finis.',
        'Mengumpulkan survei kepuasan peserta, data logistik, dan evaluasi tim medis/marshal.',
        'Mendokumentasikan materi foto dan video autentik untuk katalog promosi nasional.'
      ],
      timeframe: 'Fase Fondasi [TBD]',
      status: 'Current Focus'
    },
    {
      phase: 'Tahap 2',
      title: 'Penguatan Komunitas & Standarisasi',
      focus: 'Standard Operating Procedure (SOP) dan jejaring lokal',
      bullets: [
        'Penyusunan modul aktivasi terstandarisasi yang siap direplikasi ke kota lain.',
        'Membangun kanal konten komunitas dan grup komunikasi antarpelari muda.',
        'Menyempurnakan dashboard pendaftaran dan integrasi sistem e-ticket mandiri.',
        'Membuka program duta kampus (Campus Ambassador) untuk advokasi gaya hidup aktif.'
      ],
      timeframe: 'Fase Konsolidasi [TBD]',
      status: 'Roadmap Target'
    },
    {
      phase: 'Tahap 3',
      title: 'Ekspansi Lintas Kota di Indonesia',
      focus: 'Pembukaan Chapter Kota Baru secara terukur',
      bullets: [
        'Memilih kota penyelenggaraan berikutnya berdasarkan kesiapan mitra lokal dan infrastruktur rute.',
        'Mengadaptasi kearifan lokal tanpa mengubah nilai dan keselamatan brand YOUTHON.',
        'Pelatihan intensif tim panitia lokal menggunakan panduan baku penyelenggaraan.',
        'Menjaga konsistensi pengalaman peserta di setiap chapter kota baru.'
      ],
      timeframe: 'Fase Ekspansi [TBD]',
      status: 'Strategic Vision'
    },
    {
      phase: 'Tahap 4',
      title: 'Movement Berkelanjutan & Ekosistem Tahunan',
      focus: 'Kalender acara nasional dan kolaborasi jangka panjang',
      bullets: [
        'Menetapkan kalender event tahunan yang dinanti oleh komunitas di berbagai pulau.',
        'Aktivitas rutin bulanan di luar hari H event (Sunday Social Run, workshop nutrisi, dll).',
        'Kemitraan multi-tahun dengan sponsor utama yang memiliki visi sejalan.',
        'Mengukur dampak sosial: jumlah anak muda yang memulai kebiasaan lari rutin.'
      ],
      timeframe: 'Fase Berkelanjutan [TBD]',
      status: 'Long-term Horizon'
    }
  ],
  candidateChapters: [
    {
      id: 'jabar-pilot',
      cityName: 'Bandung & Kawasan Jawa Barat',
      region: 'Jawa Barat',
      role: 'Pilot Region',
      status: 'Kandidat Pilot [TBD]',
      communityProfile: 'Ekosistem kreatif yang kuat, antusiasme olahraga urban tinggi, basis universitas besar.'
    },
    {
      id: 'jabodetabek',
      cityName: 'Jabodetabek',
      region: 'DKI Jakarta & Sekitarnya',
      role: 'Expansion Wave 1',
      status: 'Eksplorasi [TBD]',
      communityProfile: 'Pasar pelari rekreasional terbesar, konektivitas transportasi publik prima.'
    },
    {
      id: 'yogyakarta',
      cityName: 'Yogyakarta',
      region: 'D.I. Yogyakarta',
      role: 'Expansion Wave 1',
      status: 'Eksplorasi [TBD]',
      communityProfile: 'Kota pelajar dengan komunitas seni dan musik independen yang sangat dinamis.'
    },
    {
      id: 'surabaya',
      cityName: 'Surabaya',
      region: 'Jawa Timur',
      role: 'Expansion Wave 1',
      status: 'Eksplorasi [TBD]',
      communityProfile: 'Metropolitan terbesar di wilayah timur Jawa dengan antusiasme lari yang terus melonjak.'
    },
    {
      id: 'denpasar',
      cityName: 'Denpasar & Sekitarnya',
      region: 'Bali',
      role: 'Expansion Wave 2',
      status: 'Eksplorasi [TBD]',
      communityProfile: 'Pusat wisata olahraga (sport tourism) dengan daya tarik peserta nasional dan internasional.'
    },
    {
      id: 'makassar',
      cityName: 'Makassar',
      region: 'Sulawesi Selatan',
      role: 'Expansion Wave 2',
      status: 'Eksplorasi [TBD]',
      communityProfile: 'Pusat pertumbuhan anak muda di Indonesia Timur dengan pemandangan rute pesisir indah.'
    }
  ] as ChapterLocation[]
};

export const PARTNERS_DATA: PartnerCategory[] = [
  {
    id: 'p-apparel',
    sector: 'Apparel Olahraga & Footwear',
    examples: 'Brand jersey lari, sepatu olahraga, aksesori pelindung matahari',
    valueForRunners: 'Jersey resmi yang nyaman, diskon gear lari, perlengkapan fungsional berkualitas.',
    valueForBrand: 'Eksposur langsung di dada ribuan pelari muda dan dokumentasi konten media sosial.',
    scope: 'Penyediaan race jersey, medali finisher, merchandise kit, dan hadiah aktivasi.'
  },
  {
    id: 'p-hydration',
    sector: 'Minuman Hidrasi & Nutrisi Sehat',
    examples: 'Air mineral kemasan teruji, minuman isotonik, camilan buah dan energi bar',
    valueForRunners: 'Asupan cairan optimal di setiap stasiun hidrasi untuk mencegah dehidrasi.',
    valueForBrand: 'Sampling produk langsung saat peserta membutuhkan hidrasi terbaik (peak moment).',
    scope: 'Dukungan pasokan air di water station rute lari dan refreshment pasca-finis.'
  },
  {
    id: 'p-tech',
    sector: 'FinTech, Pembayaran & Aplikasi Digital',
    examples: 'Dompet digital, perbankan digital, ekosistem voucher belanja',
    valueForRunners: 'Alur pembayaran tiket pendaftaran yang instan, aman, dan tanpa biaya tersembunyi.',
    valueForBrand: 'Akuisisi pengguna baru dan transaksi langsung di booth festival UMKM finis.',
    scope: 'Official payment gateway pendaftaran website dan transaksi cashless di venue.'
  },
  {
    id: 'p-music',
    sector: 'Industri Musik, Panggung & Kreatif',
    examples: 'Label musik, kurator playlist lari, penyedia tata panggung dan tata suara',
    valueForRunners: 'Pengalaman festival audio yang imersif dan tidak monoton sepanjang acara.',
    valueForBrand: 'Kanal showcase performer muda di hadapan ribuan penonton yang antusias.',
    scope: 'Kurasi line-up musik festival finis, tata suara rhythm zone, dan talent panggung.'
  },
  {
    id: 'p-campus',
    sector: 'Institusi Kampus & Organisasi Mahasiswa',
    examples: 'BEM Universitas, Unit Kegiatan Mahasiswa, komunitas olahraga kampus',
    valueForRunners: 'Tiket paket komunitas mahasiswa dengan harga bersahabat dan ruang berkumpul resmi.',
    valueForBrand: 'Penyaluran energi positif mahasiswa dalam kegiatan olahraga berskala besar.',
    scope: 'Penyedia relawan marshal, delegasi pelari, dan kolaborasi penampilan bakat.'
  },
  {
    id: 'p-gov',
    sector: 'Pemerintah Daerah & Pariwisata',
    examples: 'Dinas Pemuda dan Olahraga (Dispora), Dinas Pariwisata, Kepolisian Daerah',
    valueForRunners: 'Jaminan keamanan rute jalan raya yang steril dan pengawalan tertib.',
    valueForBrand: 'Dukungan terhadap program kota sehat, ramah pemuda, dan promosi pariwisata lokal.',
    scope: 'Izin penggunaan jalan, koordinasi rekayasa lalu lintas, dan posko kesehatan terpadu.'
  },
  {
    id: 'p-media',
    sector: 'Media, Fotografer & Kreator Konten',
    examples: 'Platform berita gaya hidup muda, fotografer lari profesional, kreator video',
    valueForRunners: 'Foto aksi lari berkualitas tinggi yang dapat diunduh gratis untuk kenangan.',
    valueForBrand: 'Amplifikasi liputan acara di berbagai kanal digital dan portal berita nasional.',
    scope: 'Dokumentasi resmi lintasan, publikasi artikel pra-event, dan distribusi konten.'
  },
  {
    id: 'p-umkm',
    sector: 'Pelaku Usaha Lokal & UMKM Kuliner',
    examples: 'Kedai kopi lokal, makanan sehat khas daerah, perajin cenderamata lokal',
    valueForRunners: 'Pilihan sarapan dan minuman nikmat di festival setelah menuntaskan lari.',
    valueForBrand: 'Dampak ekonomi langsung bagi ekosistem UMKM kota penyelenggaraan.',
    scope: 'Tenant di festival desa finis dan penyedia kudapan lokal di finish line.'
  }
];

export const SITEMAP_DATA: SitemapItem[] = [
  { priority: 1, title: 'Home / Landing Page', route: '/', role: 'Pintu gerbang utama memperkenalkan movement, nilai, dan event terdekat.', isInitialScope: true },
  { priority: 2, title: 'Events Directory', route: '/events', role: 'Daftar kalender event mendatang di setiap kota serta arsip edisi sebelumnya.', isInitialScope: true },
  { priority: 3, title: 'Event Detail', route: '/events/[event-slug]', role: 'Detail lengkap tanggal, lokasi, rute, kategori jarak, benefit tiket, dan rundown.', isInitialScope: true },
  { priority: 4, title: 'Registration Flow', route: '/events/[event-slug]/register', role: 'Formulir pendaftaran peserta dengan validasi data aman dan pemilihan tier.', isInitialScope: true },
  { priority: 5, title: 'Chapters Network', route: '/chapters', role: 'Mengenalkan persebaran chapter kota, jejaring komunitas, dan narasi lokal.', isInitialScope: true },
  { priority: 6, title: 'Experiences & Modules', route: '/experiences', role: 'Eksplorasi interaktif modul aktivasi (Rhythm Run, Hype Squad, Festival Finis).', isInitialScope: true },
  { priority: 7, title: 'Gallery & Stories', route: '/stories', role: 'Galeri foto autentik peserta, video rekapitulasi, dan kisah inspiratif anak muda.', isInitialScope: true },
  { priority: 8, title: 'Partners & Collaboration', route: '/partners', role: 'Peluang kolaborasi sponsor, proposal kemitraan, dan direktori partner terverifikasi.', isInitialScope: true },
  { priority: 9, title: 'Race Guide Digital', route: '/events/[event-slug]/race-guide', role: 'Panduan teknis resmi peserta (pengambilan BIB, rute, aturan keselamatan, fasilitas).', isInitialScope: true },
  { priority: 10, title: 'FAQ & Contact', route: '/faq & /contact', role: 'Pusat bantuan pertanyaan yang sering diajukan dan formulir kontak resmi panitia.', isInitialScope: true },
  { priority: 'Berikutnya', title: 'About Movement', route: '/about', role: 'Latar belakang pendirian, manifesto energi anak muda, dan susunan tim penggagas.', isInitialScope: false },
  { priority: 'Berikutnya', title: 'Race Results (Opsional)', route: '/events/[event-slug]/results', role: 'Pencarian catatan waktu peserta jika edisi tertentu menggunakan timing chip.', isInitialScope: false },
  { priority: 'Berikutnya', title: 'Participant Dashboard', route: '/my-account', role: 'Portal mandiri mengelola e-ticket, qr-code race pack, dan histori event.', isInitialScope: false },
  { priority: 'Berikutnya', title: 'Kebijakan & Legal', route: '/privacy-policy, /terms', role: 'Transparansi perlindungan data pribadi, syarat partisipasi, dan aturan pengembalian.', isInitialScope: false },
  { priority: 'Internal', title: 'Admin Operations Dashboard', route: '/admin', role: 'Portal manajemen kuota tiket, validasi check-in panitia, dan laporan operasional.', isInitialScope: false }
];

export const LANDING_PAGE_SECTIONS = [
  {
    step: 1,
    name: 'Navigation Bar',
    wireframeRole: 'Branding & Akses Cepat',
    items: 'Logo YOUTHON, tautan Events, Experiences, Chapters, About, serta CTA pendaftaran.'
  },
  {
    step: 2,
    name: 'Hero Section',
    wireframeRole: 'Kesan Pertama Berenergi',
    items: 'Headline berkarakter (eksplorasi Switch Your Energy On), video/foto aksi lari dinamis, ringkasan value proposition, dan CTA utama.'
  },
  {
    step: 3,
    name: 'What Is YOUTHON?',
    wireframeRole: 'Edukasi Konsep Movement',
    items: 'Penjelasan ringkas bahwa ini bukan sekadar lomba lari biasa, tetapi perayaan energi, musik, dan kebersamaan generasi muda.'
  },
  {
    step: 4,
    name: 'Upcoming Event Card',
    wireframeRole: 'Konversi Partisipasi',
    items: 'Kartu acara unggulan dengan info kota pilot, status pendaftaran [Segera Hadir / TBD], benefit race pack, dan tombol detail.'
  },
  {
    step: 5,
    name: 'More Than a Run',
    wireframeRole: 'Diferensiasi Pengalaman',
    items: 'Sorotan 4 pilar aktivasi: Rhythm Run (musik di lintasan), Hype Squad, Mission seru, dan Festival garis finis.'
  },
  {
    step: 6,
    name: 'Movement Across Indonesia',
    wireframeRole: 'Skala & Ambisi Nasional',
    items: 'Peta rute pertumbuhan dari pilot Jawa Barat menuju kota-kota kandidat ekspansi di Indonesia.'
  },
  {
    step: 7,
    name: 'Community & Verified Proof',
    wireframeRole: 'Kredibilitas Autentik',
    items: 'Dokumentasi nyata kegiatan komunitas pelari muda (hanya menampilkan data/foto riil, tanpa testimoni fiktif).'
  },
  {
    step: 8,
    name: 'Partners & Collaboration',
    wireframeRole: 'Keterbukaan Ekosistem',
    items: 'Sektor kemitraan strategis terbuka (Apparel, Hidrasi, FinTech, Musik) dan tombol formulir kontak kerja sama.'
  },
  {
    step: 9,
    name: 'Final Call to Action',
    wireframeRole: 'Penutupan Narasi',
    items: 'Ajakan hangat untuk mendaftar newsletter info tiket gelombang pertama atau mendaftarkan komunitas kampus.'
  },
  {
    step: 10,
    name: 'Footer',
    wireframeRole: 'Navigasi Utilitas & Legal',
    items: 'Tautan sitemap lengkap, media sosial resmi, kanal bantuan, kebijakan privasi, dan hak cipta movement.'
  }
];

export const ENGINEERING_PHASES = [
  {
    phase: 'Phase 1',
    name: 'Brand Foundation & Core Landing Page',
    objective: 'Membangun kehadiran digital resmi pertama dengan landing page performa tinggi dan ramah ponsel.',
    deliverables: [
      'Finalisasi pesan utama dan identitas desain web responsif.',
      'Sitemap dan struktur informasi dasar.',
      'Penyusunan design tokens (warna, tipografi fluid, elevasi teknis).',
      'Landing page performa tinggi dengan skor aksesibilitas WCAG AA.',
      'Halaman pendukung dasar: Experiences, FAQ, dan Formulir Kontak.',
      'Pengujian lintas peramban (Chrome, Safari, Firefox, Edge) dan verifikasi mobile.'
    ]
  },
  {
    phase: 'Phase 2',
    name: 'Event Platform & Ticketing Architecture',
    objective: 'Menyediakan sistem manajemen katalog event dan alur registrasi peserta mandiri.',
    deliverables: [
      'Halaman daftar event dan detail event dinamis berbasis slug.',
      'Halaman direktori chapter kota dan Race Guide interaktif.',
      'Alur formulir pendaftaran peserta dengan validasi server-side.',
      'Integrasi payment gateway terdaftar dengan konfirmasi instan.',
      'Penerbitan e-ticket dan kode QR unik untuk pengambilan race pack.'
    ]
  },
  {
    phase: 'Phase 3',
    name: 'Community Hub & Content Engine',
    objective: 'Mengembangkan wadah dokumentasi komunitas dan kanal apresiasi mitra.',
    deliverables: [
      'Halaman Gallery & Stories dengan optimasi pemuatan gambar modern.',
      'Sistem manajemen konten (CMS) ramah editor untuk publikasi berita.',
      'Modul Race Results (opsional jika edisi menggunakan timing chip).',
      'Halaman showcase partner dengan tautan pelaporan dampak kemitraan.'
    ]
  },
  {
    phase: 'Phase 4',
    name: 'Operations Scaling & Admin Control',
    objective: 'Otomatisasi operasional hari-H dan pengelolaan multi-kota berskala besar.',
    deliverables: [
      'Dashboard admin untuk pemantauan kuota tiket dan status pembayaran realtime.',
      'Aplikasi web pemindai check-in race pack berbasis kamera ponsel.',
      'Sistem analitik kepatuhan privasi, logging performa, dan pencadangan data otomatis.',
      'Arsitektur multi-tenant siap pakai untuk ekspansi puluhan chapter kota serentak.'
    ]
  }
];

export const TECHNICAL_STANDARDS = [
  {
    title: 'Arsitektur Komponen Reusable',
    desc: 'Pengembangan komponen UI mandiri seperti EventCard, TicketCard, ChapterCard, ExperienceCard, dan FAQAccordion agar mudah dirawat dan diperbarui.'
  },
  {
    title: 'Pemisahan Konten dari Komponen',
    desc: 'Data event, jadwal rute, dan teks editorial dipisahkan dalam berkas konfigurasi/API sehingga tim konten dapat memperbarui tanpa menyentuh kode inti.'
  },
  {
    title: 'Design Tokens & Variabel Tema',
    desc: 'Konsistensi warna, tipografi, dan spasi dikelola melalui CSS Custom Properties terpusat, mendukung tema gelap (Technical Slate) dan terang dengan kontras teruji.'
  },
  {
    title: 'Keamanan Transaksi & Data Server-Side',
    desc: 'Validasi identitas peserta, kalkulasi biaya tiket, dan verifikasi status pembayaran wajib dieksekusi di sisi server demi integritas data.'
  },
  {
    title: 'Perlindungan Data Pribadi (Privacy by Design)',
    desc: 'Data kontak peserta dan rekam medis darurat dienkripsi, hanya dapat diakses oleh staf medis dan panitia berwenang sesuai peran administratif.'
  },
  {
    title: 'Aksesibilitas & Kepatuhan WCAG AA',
    desc: 'Struktur semantik HTML5, navigasi penuh via papan ketik (Tab/Enter/Esc), rasio kontras teks minimum 4.5:1, dan indikator fokus yang tegas.'
  }
];

export const KPI_METRICS: MetricItem[] = [
  {
    category: 'Jangkauan Digital',
    metric: 'Pengunjung Unik Website & Rasio Sumber Trafik',
    purpose: 'Mengukur efektivitas kampanye promosi dan minat organik generasi muda terhadap movement.',
    baselineRule: 'Dihitung melalui analitik web tanpa melacak data pribadi sensitif.'
  },
  {
    category: 'Minat Event',
    metric: 'Rasio Buka Detail Event (Click-through Rate)',
    purpose: 'Melihat daya tarik informasi kota pilot dan konsep aktivasi terhadap calon peserta.',
    baselineRule: 'Target rasio ditetapkan setelah penentuan kapasitas venue pilot.'
  },
  {
    category: 'Konversi Pendaftaran',
    metric: 'Completion Rate Formulir Registrasi',
    purpose: 'Memastikan alur pendaftaran mudah dipahami, tidak membingungkan, dan minim hambatan teknis.',
    baselineRule: 'Evaluasi titik keluar (drop-off) di setiap langkah pendaftaran.'
  },
  {
    category: 'Kehadiran Nyata',
    metric: 'Rasio Kehadiran Peserta di Hari-H (Turnout Rate)',
    purpose: 'Membandingkan jumlah peserta terdaftar dengan peserta yang hadir mengambil race pack dan berlari.',
    baselineRule: 'Berdasarkan data pemindaian barcode check-in di lokasi.'
  },
  {
    category: 'Kepuasan & Sentimen',
    metric: 'Skor Net Promoter Score (NPS) Pasca-Event',
    purpose: 'Menilai kepuasan peserta terhadap rute, hidrasi, keseruan panggung, dan keramahan marshal.',
    baselineRule: 'Survei digital anonim dikirimkan 24 jam setelah garis finis ditutup.'
  },
  {
    category: 'Standar Keselamatan',
    metric: 'Nol Insiden Medis Kritis (Zero Major Safety Incident)',
    purpose: 'Menjamin standar penyelenggaraan yang bertanggung jawab dan keselamatan peserta sebagai prioritas utama.',
    baselineRule: 'Laporan rekapitulasi tim medis resmi dan catatan marshal rute.'
  },
  {
    category: 'Performa Platform',
    metric: 'Waktu Muat (LCP < 2.5s) & Ketersediaan Sistem 99.9%',
    purpose: 'Memastikan website cepat diakses di perangkat seluler dengan jaringan internet beragam.',
    baselineRule: 'Diukur menggunakan audit performa browser standar industri.'
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-1',
    topic: 'Logo & Identitas Visual Final',
    category: 'Brand',
    status: 'pending',
    notes: 'Karakter tipografi, palet warna resmi, dan aturan grafis brand belum diputuskan.',
    impact: 'Menentukan aset visual final website, merchandise, jersey, dan materi cetak rute.'
  },
  {
    id: 'chk-2',
    topic: 'Slogan & Pesan Utama (Headline)',
    category: 'Brand',
    status: 'pending',
    notes: 'Slogan seperti Switch Your Energy On masih berstatus eksplorasi awal.',
    impact: 'Menjadi jangkar narasi kampanye promosi dan teks pembuka hero section web.'
  },
  {
    id: 'chk-3',
    topic: 'Kota & Titik Lokasi Venue Pilot Event',
    category: 'Event',
    status: 'pending',
    notes: 'Wilayah Jawa Barat telah disepakati sebagai inisiasi, namun titik koordinat venue masih dikurasi.',
    impact: 'Menentukan peta rute, izin keramaian, kapasitas maksimal, dan logistik lapangan.'
  },
  {
    id: 'chk-4',
    topic: 'Tanggal Penyelenggaraan, Jarak & Kuota Peserta',
    category: 'Event',
    status: 'pending',
    notes: 'Kategori jarak (misal 5K atau fun walk) dan kapasitas kuota peserta belum dikunci.',
    impact: 'Dasar penghitungan alokasi medali, kapasitas jalan raya, dan jadwal rundown acara.'
  },
  {
    id: 'chk-5',
    topic: 'Struktur Harga Tiket, Benefit & Kebijakan Refund',
    category: 'Ticketing',
    status: 'pending',
    notes: 'Skema harga (Early Bird, Regular, Komunitas) dan rincian isi race pack belum ditetapkan.',
    impact: 'Diperlukan sebelum modul pembayaran online dan syarat ketentuan dapat diaktifkan.'
  },
  {
    id: 'chk-6',
    topic: 'Daftar Aktivasi yang Disetujui untuk Digelar',
    category: 'Event',
    status: 'pending',
    notes: 'Dari 6 ide inovasi (Rhythm Run, Hype Squad, dll), tentukan modul mana yang masuk edisi pilot.',
    impact: 'Menentukan kebutuhan anggaran produksi panggung, penempatan audio, dan izin desibel.'
  },
  {
    id: 'chk-7',
    topic: 'Penyedia Registrasi, Payment Gateway & E-Ticket',
    category: 'Digital',
    status: 'pending',
    notes: 'Vendor gateway pembayaran dan mekanisme barcode tiket perlu disepakati.',
    impact: 'Mempengaruhi integrasi teknis tahap 2 website dan kontrak kerja sama perbankan.'
  },
  {
    id: 'chk-8',
    topic: 'Rencana Izin Jalur, Keamanan, Tim Medis & Pengelolaan Sampah',
    category: 'Safety',
    status: 'pending',
    notes: 'Mitra rumah sakit rujukan, armada ambulans, kepolisian, dan dinas kebersihan belum diteken.',
    impact: 'Syarat mutlak keselamatan sebelum penjualan tiket dapat dibuka ke publik.'
  },
  {
    id: 'chk-9',
    topic: 'Daftar Partner & Sponsor yang Terkonfirmasi',
    category: 'Brand',
    status: 'pending',
    notes: 'Belum ada nama sponsor yang diasumsikan sebagai fakta sebelum ada kesepakatan formal.',
    impact: 'Penempatan logo partner di materi promosi dan penetapan hak aktivasi booth.'
  },
  {
    id: 'chk-10',
    topic: 'Kanal Media Sosial Resmi, Kontak & Entitas Legal',
    category: 'Brand',
    status: 'pending',
    notes: 'Alamat surel resmi panitia, nomor hotline WhatsApp, dan badan hukum pengelola.',
    impact: 'Dicantumkan pada footer website, faktur pembayaran, dan syarat ketentuan layanan.'
  },
  {
    id: 'chk-11',
    topic: 'Spesifikasi Hosting, Domain Resmi & CMS Website',
    category: 'Digital',
    status: 'pending',
    notes: 'Keputusan nama domain (.id/.com) dan infrastruktur server penampung lonjakan trafik registrasi.',
    impact: 'Fondasi peluncuran platform digital resmi YOUTHON di fase pertama.'
  }
];

