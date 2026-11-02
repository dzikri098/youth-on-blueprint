import React, { useState } from 'react';

export const EditorialSafety: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'areas' | 'terms'>('areas');
  const [selectedAreaIdx, setSelectedAreaIdx] = useState<number>(0);
  const [selectedTermIdx, setSelectedTermIdx] = useState<number>(0);

  const safetyAreas = [
    {
      num: '01',
      title: 'Rute & Lintasan',
      lead: 'Survei kelayakan fisik, mitigasi titik rawan, pembatas, crossing, dan akses darurat.',
      checkpoints: [
        'Survei lapangan menyeluruh bersama instansi kepolisian dan Dishub minimal 30 hari sebelum acara.',
        'Pemasangan pembatas jalur (traffic cone & barikade) untuk memisahkan lintasan lari dari kendaraan.',
        'Penyediaan crossing point terjaga bagi warga lokal dengan marshal prioritas pejalan kaki.',
        'Jalur rute harus bebas lubang aspal kritis, tumpahan minyak, dan rintangan kabel.'
      ],
      escalation: 'Jika terdapat kerusakan jalan mendadak atau genangan air ekstrem, rute dialihkan ke jalur alternatif yang telah disetujui Dishub.'
    },
    {
      num: '02',
      title: 'Layanan Medis & Ambulans',
      lead: 'Tenaga medis kompeten, posko stasioner, perlengkapan darurat, dan alur evakuasi rujukan.',
      checkpoints: [
        'Dokter berlisensi spesialis gawat darurat dan perawat standby di posko medis utama garis finis.',
        'Armada ambulans siaga di titik rute strategis dengan rute evakuasi steril bebas kemacetan.',
        'Tim mobile medic bermotor/sepeda membawa tas trauma kit dan defibrilator otomatis (AED).',
        'Penetapan rumah sakit rujukan utama dengan koordinasi tertulis unit IGD sebelum hari pelaksanaan.'
      ],
      escalation: 'Kasus kegawatdaruratan kardiovaskular atau trauma kepala langsung dievakuasi tanpa menunggu prosedur administratif.'
    },
    {
      num: '03',
      title: 'Edukasi & Layanan Peserta',
      lead: 'Race guide komprehensif, aturan partisipasi, nomor darurat, hidrasi, dan informasi rute.',
      checkpoints: [
        'Penerbitan Race Guide digital berisi denah rute, lokasi pos hidrasi, titik medis, dan nomor darurat.',
        'Penyediaan stasiun air minum higienis setiap interval 1.5 km sampai 2 km.',
        'Pemberitahuan nomor dada (BIB) wajib memuat data kontak darurat dan riwayat alergi di sisi belakang.',
        'Pengingat hidrasi dan imbauan istirahat disampaikan berkala melalui MC dan marshal.'
      ],
      escalation: 'Peserta yang menunjukkan gejala heat stroke atau disorientasi wajib dihentikan oleh marshal medis demi keselamatannya.'
    },
    {
      num: '04',
      title: 'Pengendalian Kerumunan (Crowd Control)',
      lead: 'Sistem pelepasan bergelombang (wave start), kapasitas venue aman, dan alur jalur keluar teratur.',
      checkpoints: [
        'Penerapan sistem Start Bergelombang (Wave Start) dengan jeda 5 - 10 menit untuk mencegah penumpukan rute.',
        'Pemisahan tegas jalur gerak peserta finis (recovery flow) dengan area panggung penonton festival.',
        'Penetapan kapasitas maksimum venue utama dan perhitungan daya tampung gerbang masuk/keluar.',
        'Petugas crowd control ditempatkan di titik sempit (bottleneck) untuk menjaga kelancaran alur.'
      ],
      escalation: 'Jika terjadi kepadatan berlebih di rute, gelombang start berikutnya ditahan sementara hingga lintasan terurai.'
    },
    {
      num: '05',
      title: 'Mitigasi Cuaca Ekstrem',
      lead: 'Pemantauan prakiraan BMKG, ambang batas penghentian, dan shelter aman.',
      checkpoints: [
        'Pemantauan radar cuaca resmi BMKG 24 jam, 6 jam, dan 1 jam sebelum waktu pelepasan (flag-off).',
        'Kriteria tertulis penundaan atau perpendekan rute jika terjadi hujan lebat disertai petir di area terbuka.',
        'Penyediaan area berlindung (shelter) permanen bagi peserta dan kru di sekitar titik kumpul.',
        'Protokol pembatalan darurat jika terjadi bencana alam atau cuaca ekstrem berisiko tinggi.'
      ],
      escalation: 'Bila petir terdeteksi dalam radius 5 km, seluruh aktivitas luar ruang dihentikan seketika dan peserta diarahkan ke shelter.'
    },
    {
      num: '06',
      title: 'Komunikasi & Command Center',
      lead: 'Radio komunikasi antar-PIC, pusat komando terpadu, dan rantai eskalasi krisis.',
      checkpoints: [
        'Pembentukan Command Center fisik yang terhubung ke seluruh kepala divisi dan instansi luar.',
        'Penggunaan kanal radio HT berfrekuensi khusus yang terpisah antara medis, rute, dan logistik.',
        'Penyusunan bagan alur pelaporan insiden (Incident Escalation Chain) 1 pintu ke Event Director.',
        'Log pencatatan waktu setiap insiden, tindakan yang diambil, dan status penyelesaian.'
      ],
      escalation: 'Semua insiden kategori oranye dan merah wajib dilaporkan ke Command Center dalam waktu kurang dari 3 menit.'
    },
    {
      num: '07',
      title: 'Keamanan Instalasi & Aktivasi',
      lead: 'Pengecekan listrik, proteksi kabel, kekuatan struktur panggung, dan pemisahan dari rute lari.',
      checkpoints: [
        'Pemeriksaan instalasi kabel listrik panggung dan audio menggunakan pelindung karet (rubber cable ramp).',
        'Sertifikasi uji kelayakan konstruksi panggung (rigging) dan backdrop dari terpaan angin kencang.',
        'Seluruh aktivasi sponsor dan stan tenant diletakkan di luar lintasan aktif lari minimal 3 meter.',
        'Pemeriksaan tabung pemadam api (APAR) di area genset listrik, dapur tenant F&B, dan panggung.'
      ],
      escalation: 'Instalasi yang dinilai goyah atau membahayakan pelari wajib dibongkar sebelum pelepasan peserta.'
    },
    {
      num: '08',
      title: 'Kewenangan Stop-Event & Evakuasi',
      lead: 'Kriteria penghentian kegiatan, kewenangan mutlak pengambil keputusan, dan evakuasi instansi.',
      checkpoints: [
        'Penetapan wewenang tunggal penghentian acara (Stop-Event Authority) pada Event Director & Safety Lead.',
        'SOP evakuasi massal terkoordinasi dengan mobilisasi armada shuttle panitia ke titik penjemputan aman.',
        'Instruksi penghentian disampaikan secara jernih melalui pengeras suara rute dan sirine komando marshal.',
        'Koordinasi evakuasi terpadu bersama aparat kepolisian, TNI, dan dinas perhubungan kota.'
      ],
      escalation: 'Status Stop-Event berlaku mengikat bagi seluruh vendor, performer panggung, peserta, dan panitia.'
    }
  ];

  const raceTerms = [
    {
      term: 'COT (Cut-Off Time)',
      label: 'Batas Waktu Penyelesaian',
      definition: 'Batas waktu maksimum untuk menyelesaikan kategori atau melewati pos tertentu. Di YOUTHON, COT diterapkan manusiawi dan fleksibel untuk kelancaran rute kota.',
      illustration: 'Simulasi ilustratif: 3K Fun Run ~ 60 menit; 5K Fun Run ~ 90 menit (dihitung dari start gelombang).',
      handling: 'Peserta yang melewati batas waktu diarahkan ke shuttle panitia secara santun tanpa perlakuan diskriminatif, dan tetap diapresiasi atas usahanya.'
    },
    {
      term: 'COP (Course Closure Point)',
      label: 'Titik Penutupan Lintasan',
      definition: 'Titik pos atau waktu di mana lintasan resmi mulai ditutup bertahap dan dibuka kembali untuk lalu lintas umum sesuai izin Dishub.',
      illustration: 'Penting: COP berbeda dengan COT. COP berkaitan dengan operasi penutupan jalan umum, sedangkan COT adalah batas waktu peserta.',
      handling: 'Petugas sweeper menyisir lintasan di belakang rombongan terakhir dan memastikan rute steril dari peserta sebelum jalan dibuka kembali.'
    },
    {
      term: 'DNS (Did Not Start)',
      label: 'Terdaftar Namun Tidak Start',
      definition: 'Peserta terdaftar resmi yang tidak hadir atau tidak melintasi garis start pada jadwal pelepasan gelombang.',
      illustration: 'Status ini tercatat otomatis dalam sistem absensi/timing dan race pack yang belum diambil dialihkan ke pos pengembalian.',
      handling: 'Dicatat dalam rekonsiliasi data akhir untuk evaluasi tingkat kehadiran dan pelaporan sponsor.'
    },
    {
      term: 'DNF (Did Not Finish)',
      label: 'Memulai Namun Tidak Menuntaskan',
      definition: 'Peserta yang telah memulai perlombaan namun berhenti di tengah lintasan karena kelelahan, kram, cedera, atau keputusan sukarela.',
      illustration: 'Contoh: Peserta melintasi start 5K namun berhenti di KM 3.5 karena kram kaki.',
      handling: 'Prioritas utama adalah pemeriksaan fisik oleh tim medis. Petugas mencatat status dan memastikan peserta diantar dengan aman ke area pemulihan finis.'
    },
    {
      term: 'OTL (Over Time Limit)',
      label: 'Melewati Ambang Batas Waktu',
      definition: 'Status bagi peserta yang berhasil menuntaskan seluruh rute namun melewati batas waktu COT yang ditetapkan panitia.',
      illustration: 'Contoh: Menyelesaikan 5K dalam waktu 95 menit pada rute dengan COT 90 menit.',
      handling: 'Karena berjiwa fun run rekreasional, peserta OTL tetap disambut hangat di garis finis dan berhak atas medali partisipasi serta fasilitas hidrasi.'
    },
    {
      term: 'DSQ (Disqualified)',
      label: 'Diskualifikasi Pelanggaran',
      definition: 'Pembatalan status kepesertaan akibat pelanggaran berat terhadap aturan keselamatan atau etika gerakan.',
      illustration: 'Pelanggaran seperti: memotong rute secara sengaja, menggunakan identitas/nomor dada milik orang lain, atau bertindak anarkis terhadap sesama pelari.',
      handling: 'Pelanggaran didokumentasikan oleh marshal, dilaporkan ke Event Director, dan peserta tidak berhak atas medali finisher.'
    },
    {
      term: 'Wave Start & Sweeper',
      label: 'Pelepasan Gelombang & Tim Penyapu',
      definition: 'Wave Start mengatur kepadatan di garis start dengan pelepasan bertahap. Sweeper adalah tim pelari/petugas pendamping di barisan paling belakang rute.',
      illustration: 'Wave Start: Gelombang 1 (06:00), Gelombang 2 (06:10). Sweeper mengawal peserta paling santai.',
      handling: 'Sweeper secara aktif melaporkan kondisi pelari terakhir kepada Command Center dan memastikan tidak ada peserta tertinggal tanpa pemantauan.'
    },
    {
      term: 'Gun Time vs Chip Time',
      label: 'Pencatatan Waktu Lomba',
      definition: 'Gun Time dihitung sejak peluit start utama dibunyikan. Chip Time dihitung sejak masing-masing peserta melintasi timing mat sensor di garis start.',
      illustration: 'Untuk fun run inklusif, Chip Time lebih adil bagi peserta di gelombang belakang jika sistem timing digital digunakan.',
      handling: 'Hasil waktu (Race Result) bersifat opsional untuk evaluasi pribadi peserta, bukan penentu kejuaraan kompetitif yang kaku.'
    }
  ];

  const currentArea = safetyAreas[selectedAreaIdx];
  const currentTerm = raceTerms[selectedTermIdx];

  return (
    <section id="keselamatan" className="editorial-section" aria-labelledby="heading-safety">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">08 / SISTEM KESELAMATAN & REGULASI RUTE</span>
          <h2 id="heading-safety" className="section-headline">
            Keseruan acara wajib berpijak pada tanggung jawab penuh.
          </h2>
          <p className="section-lead">
            Keselamatan bukan checklist yang baru diselesaikan menjelang hari H. Sistemnya dirancang sejak rute,
            kapasitas peserta, dan regulasi lari mulai ditentukan bersama instansi berwenang.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveCategory('areas')}
            className={`btn-editorial ${activeCategory === 'areas' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeCategory === 'areas'}
          >
            <span>8 Area Keselamatan Baku</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeCategory === 'areas' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeCategory === 'areas' ? '#ffffff' : 'inherit' }}>
              Operasional
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('terms')}
            className={`btn-editorial ${activeCategory === 'terms' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeCategory === 'terms'}
          >
            <span>Terminologi & Regulasi Lari</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeCategory === 'terms' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeCategory === 'terms' ? '#ffffff' : 'inherit' }}>
              Regulasi
            </span>
          </button>
        </div>

        {/* Tab 1: 8 Area Keselamatan Baku */}
        {activeCategory === 'areas' && (
          <div className="safety-sidebar-layout">
            <aside className="safety-sidebar-menu" aria-label="Daftar 8 Area Keselamatan">
              {safetyAreas.map((area, idx) => {
                const isActive = selectedAreaIdx === idx;
                return (
                  <button
                    key={area.num}
                    type="button"
                    onClick={() => setSelectedAreaIdx(idx)}
                    className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="safety-item-num">{area.num}</span>
                    <span className="safety-item-title">{area.title}</span>
                  </button>
                );
              })}
            </aside>

            <div className="safety-detail-card" role="region" aria-live="polite">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="status-pill">
                  Area Keselamatan {currentArea.num} dari 08
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  SOP OPERASIONAL LINTASAN
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                  {currentArea.title}
                </h3>
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--color-green-muted)' }}>
                  {currentArea.lead}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  CHECKPOINT PROTOKOL WAJIB:
                </span>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {currentArea.checkpoints.map((cp, cIdx) => (
                    <li key={cIdx} style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.55' }}>
                      {cp}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ padding: '1.125rem', backgroundColor: '#ffffff', borderRadius: '8px', borderLeft: '4px solid var(--accent-amber)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  PROTOKOL ESKALASI KEDARURATAN:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.55', margin: 0 }}>
                  {currentArea.escalation}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSelectedAreaIdx((prev) => Math.max(0, prev - 1))}
                  disabled={selectedAreaIdx === 0}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Area Sebelumnya
                </button>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                  {selectedAreaIdx + 1} / {safetyAreas.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedAreaIdx((prev) => Math.min(safetyAreas.length - 1, prev + 1))}
                  disabled={selectedAreaIdx === safetyAreas.length - 1}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Area Berikutnya &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Terminologi & Regulasi Lari */}
        {activeCategory === 'terms' && (
          <div className="safety-sidebar-layout">
            <aside className="safety-sidebar-menu" aria-label="Daftar Istilah Lomba">
              {raceTerms.map((item, idx) => {
                const isActive = selectedTermIdx === idx;
                return (
                  <button
                    key={item.term}
                    type="button"
                    onClick={() => setSelectedTermIdx(idx)}
                    className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="safety-item-num">0{idx + 1}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <span className="safety-item-title">{item.term}</span>
                      <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', opacity: isActive ? 0.9 : 0.65 }}>
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </aside>

            <div className="safety-detail-card" role="region" aria-live="polite">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="status-pill">
                  Istilah 0{selectedTermIdx + 1} dari {raceTerms.length} : {currentTerm.label}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  RUNNING EVENT TERMINOLOGY
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                  {currentTerm.term}
                </h3>
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--color-green-muted)' }}>
                  {currentTerm.definition}
                </p>
              </div>

              <div style={{ padding: '1.125rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  PENJELASAN PRAKTIS & SIMULASI LINTASAN:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.6', margin: 0 }}>
                  {currentTerm.illustration}
                </p>
              </div>

              <div style={{ padding: '1.125rem', backgroundColor: '#ffffff', borderRadius: '8px', borderLeft: '4px solid var(--color-green-deep)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  PENANGANAN DALAM FUN RUN YOUTHON:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', lineHeight: '1.6', margin: 0 }}>
                  {currentTerm.handling}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSelectedTermIdx((prev) => Math.max(0, prev - 1))}
                  disabled={selectedTermIdx === 0}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Istilah Sebelumnya
                </button>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                  {selectedTermIdx + 1} / {raceTerms.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedTermIdx((prev) => Math.min(raceTerms.length - 1, prev + 1))}
                  disabled={selectedTermIdx === raceTerms.length - 1}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Istilah Berikutnya &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabletop Exercise & Stop-Event Authority Mandate Box */}
        <div style={{ marginTop: '2.5rem', backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 6px 20px rgba(21, 63, 53, 0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>
              SIMULASI OPERASIONAL & TABLETOP EXERCISE
            </span>
            <span className="status-pill" style={{ backgroundColor: 'var(--color-green-deep)', color: '#ffffff' }}>
              Mandatori
            </span>
          </div>

          <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
            Kewenangan Mutlak Penghentian Lomba (Stop-Event Authority)
          </h4>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
            Lakukan simulasi operasional dan tabletop exercise sebelum acara. Pastikan Event Director mengetahui secara pasti
            siapa yang berwenang menghentikan kegiatan ketika muncul risiko keselamatan yang tidak dapat dikendalikan.
            Untuk YOUTHON yang berfokus pada fun run inklusif, status administratif tidak boleh menghalangi prioritas keselamatan.
            Peserta yang mengalami cedera atau membutuhkan bantuan medis wajib ditangani terlebih dahulu sebelum urusan status lomba.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
                SIMULASI COT KATEGORI 3K:
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', fontWeight: 600, margin: 0 }}>
                ~60 Menit (Ilustratif)
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                Disesuaikan elevasi dan izin jam buka-tutup Dishub.
              </span>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
                SIMULASI COT KATEGORI 5K:
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', fontWeight: 600, margin: 0 }}>
                ~90 Menit (Ilustratif)
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                Memberikan waktu nyaman bagi pelari santai dan pemula.
              </span>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
                PENUTUPAN RUTE (COURSE CLOSURE):
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', fontWeight: 600, margin: 0 }}>
                Batas Waktu Operasional Rute
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                Penutupan rute resmi dan pembukaan kembali jalan umum.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
