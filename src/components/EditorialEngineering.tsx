import React, { useState } from 'react';
import { ENGINEERING_PHASES, TECHNICAL_STANDARDS } from '../data/pitchdeckData';

export const EditorialEngineering: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'kpis' | 'budget' | 'webPhases'>('kpis');
  const [selectedKpiIdx, setSelectedKpiIdx] = useState<number>(0);
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState<number>(0);

  const officialKpis = [
    {
      num: '01',
      name: 'Participation',
      metricTarget: 'Target Awal: 2.000 - 3.000 Peserta Terdaftar',
      whatIsMeasured: 'Jumlah pendaftar daring, peserta hadir (show-up count), dan rasio tingkat kehadiran (attendance rate).',
      relevance: 'Mengukur daya tarik awal gerakan di Jawa Barat dan validasi minat kelompok usia muda terhadap format 3K & 5K.'
    },
    {
      num: '02',
      name: 'Financial',
      metricTarget: 'Efisiensi Biaya & Arus Kas Terkendali',
      whatIsMeasured: 'Total pendapatan (tiket + sponsor), realisasi biaya aktual, margin operasional, dan kepatuhan timeline jatuh tempo vendor.',
      relevance: 'Menjamin gerakan tidak mengalami defisit dan model bisnis terbukti berkelanjutan untuk chapter kota berikutnya.'
    },
    {
      num: '03',
      name: 'Experience',
      metricTarget: '> 88% Indeks Kepuasan & Niat Hadir Kembali',
      whatIsMeasured: 'Tingkat kepuasan peserta (CSAT), jumlah keluhan operasional, dan persentase niat untuk mengikuti edisi berikutnya.',
      relevance: 'Indikator terpenting untuk memastikan peserta merasa dihargai, aman, dan membawa pulang kenangan positif.'
    },
    {
      num: '04',
      name: 'Community',
      metricTarget: 'Minimal 10+ Komunitas Pemuda & Kampus Terlibat',
      whatIsMeasured: 'Jumlah komunitas lari, klub mahasiswa kampus, kolektif kreatif lokal, dan partisipasi chapter yang aktif.',
      relevance: 'Membuktikan kekuatan akar rumput YOUTHON sebagai wadah jejaring sosial pemuda kota, bukan sekadar komersialisasi event.'
    },
    {
      num: '05',
      name: 'Marketing',
      metricTarget: 'Jangkauan Digital Organik & UGC Kuat',
      whatIsMeasured: 'Jangkauan publikasi, engagement media sosial, volume konten buatan peserta (User Generated Content), dan konversi pendaftaran.',
      relevance: 'Mengevaluasi efektivitas kampanye T-12 hingga T+14 dalam membangun reputasi brand gerakan.'
    },
    {
      num: '06',
      name: 'Partnership',
      metricTarget: '100% Hak Sponsor Terpenuhi Tepat Waktu',
      whatIsMeasured: 'Kepatuhan pemenuhan hak aktivasi sponsor, kepuasan brand mitra, dan bukti tayang (Proof of Performance).',
      relevance: 'Membangun kepercayaan korporasi dan mitra industri untuk kolaborasi jangka panjang berskala multi-kota.'
    },
    {
      num: '07',
      name: 'Safety',
      metricTarget: 'Zero Critical Incident & Respons Medis Cepat',
      whatIsMeasured: 'Jumlah insiden kecelakaan lintasan, kecepatan respons tim medis bergerak (< 3 menit), dan evaluasi mitigasi risiko.',
      relevance: 'Standar mutlak integritas penyelenggaraan: keseruan acara tidak boleh mengorbankan keselamatan nyawa peserta.'
    },
    {
      num: '08',
      name: 'Sustainability',
      metricTarget: 'Zero Waste to Landfill di Area Venue Utama',
      whatIsMeasured: 'Volume timbulan sampah rute, penggunaan material ramah lingkungan (tanpa kantong plastik sekali pakai), dan kebersihan venue pasca-acara.',
      relevance: 'Menunjukkan tanggung jawab sosial pemuda terhadap kelestarian ruang publik dan ketertiban lingkungan kota.'
    }
  ];

  const budgetComponents = [
    { num: '01', title: 'Venue & Izin', desc: 'Sewa lokasi start/finish, biaya perizinan instansi, pengamanan rute oleh kepolisian dan Dishub.' },
    { num: '02', title: 'Race Essentials', desc: 'Produksi jersey resmi berkualitas, nomor dada (BIB), medali finisher tematik, race pack, dan signage lintasan.' },
    { num: '03', title: 'Produksi Acara', desc: 'Sewa panggung rigging aman, sound system festival, genset listrik, tenda tenant, barikade penutup, dan perlengkapan rute.' },
    { num: '04', title: 'Safety & Medical', desc: 'Honor dokter spesialis darurat, perawat, armada ambulans, perlengkapan P3K, defibrilator (AED), dan honor marshal rute.' },
    { num: '05', title: 'Participant Services', desc: 'Sewa toilet portable higienis, penyediaan air minum/buah pos hidrasi, konsumsi kru relawan, dan sistem pendaftaran.' },
    { num: '06', title: 'Talent & Activities', desc: 'Honor performer perkusi Rhythm Run, MC profesional, tim dokumentasi foto/video rute, dan hadiah tantangan komunitas.' },
    { num: '07', title: 'Marketing & Desain', desc: 'Aset visual branding, kampanye iklan digital, pencetakan poster promosi, dan siaran pers media partner.' },
    { num: '08', title: 'Crew & Logistics', desc: 'Honor koordinator lapangan, akomodasi, armada mobil pick-up logistik, dan seragam rompi panitia.' },
    { num: '09', title: 'Contingency (Cadangan)', desc: 'Alokasi dana cadangan minimal 10 - 15% dari total anggaran untuk mengantisipasi kebutuhan darurat tak terduga.' }
  ];

  const currentKpi = officialKpis[selectedKpiIdx];
  const currentPhase = ENGINEERING_PHASES[selectedPhaseIdx];

  return (
    <section id="metrik" className="editorial-section alt-bg" aria-labelledby="heading-engineering">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">13 / ANGGARAN, METRIK & REKAYASA</span>
          <h2 id="heading-engineering" className="section-headline">
            Indikator keberhasilan, anggaran, dan kesiapan sistem.
          </h2>
          <p className="section-lead">
            YOUTHON mengukur keberhasilan lebih dari sekadar jumlah peserta. Anggaran disusun berdasarkan kebutuhan nyata,
            didukung platform digital yang andal dan aman bagi ribuan pelari.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveCategory('kpis')}
            className={`btn-editorial ${activeCategory === 'kpis' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeCategory === 'kpis'}
          >
            <span>8 Indikator Keberhasilan (KPI)</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeCategory === 'kpis' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeCategory === 'kpis' ? '#ffffff' : 'inherit' }}>
              Metrik
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('budget')}
            className={`btn-editorial ${activeCategory === 'budget' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeCategory === 'budget'}
          >
            <span>Perencanaan Anggaran & 9 Komponen</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeCategory === 'budget' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeCategory === 'budget' ? '#ffffff' : 'inherit' }}>
              Keuangan
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('webPhases')}
            className={`btn-editorial ${activeCategory === 'webPhases' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeCategory === 'webPhases'}
          >
            <span>4 Fase Rekayasa Platform Web</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeCategory === 'webPhases' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeCategory === 'webPhases' ? '#ffffff' : 'inherit' }}>
              Teknologi
            </span>
          </button>
        </div>

        {/* Tab 1: 8 Official KPIs */}
        {activeCategory === 'kpis' && (
          <div className="safety-sidebar-layout">
            <aside className="safety-sidebar-menu" aria-label="Daftar 8 KPI">
              {officialKpis.map((kpi, idx) => {
                const isActive = selectedKpiIdx === idx;
                return (
                  <button
                    key={kpi.name}
                    type="button"
                    onClick={() => setSelectedKpiIdx(idx)}
                    className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="safety-item-num">{kpi.num}</span>
                    <span className="safety-item-title">{kpi.name}</span>
                  </button>
                );
              })}
            </aside>

            <div className="safety-detail-card" role="region" aria-live="polite">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="status-pill">
                  Dimensi KPI {currentKpi.num} dari 08 : {currentKpi.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  KEY PERFORMANCE INDICATOR
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                  {currentKpi.name}
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-green-deep)', fontWeight: 600 }}>
                  {currentKpi.metricTarget}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  YANG DIUKUR & PARAMETER ANALISIS:
                </span>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6', margin: 0 }}>
                  {currentKpi.whatIsMeasured}
                </p>
              </div>

              <div style={{ padding: '1.125rem', backgroundColor: '#ffffff', borderRadius: '8px', borderLeft: '4px solid var(--color-green-deep)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  RELEVANSI STRATEGIS BAGI GERAKAN:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', lineHeight: '1.6', margin: 0 }}>
                  {currentKpi.relevance}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSelectedKpiIdx((prev) => Math.max(0, prev - 1))}
                  disabled={selectedKpiIdx === 0}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Indikator Sebelumnya
                </button>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                  {selectedKpiIdx + 1} / {officialKpis.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedKpiIdx((prev) => Math.min(officialKpis.length - 1, prev + 1))}
                  disabled={selectedKpiIdx === officialKpis.length - 1}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Indikator Berikutnya &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Budget Planning & 9 Components */}
        {activeCategory === 'budget' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {budgetComponents.map((b) => (
                <div key={b.num} style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
                    KOMPONEN {b.num}
                  </span>
                  <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                    {b.title}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.55', margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 3 Scenarios & Revenue Sources */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.75rem' }}>
                Prinsip Arus Kas & Tiga Skenario Proyeksi
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Anggaran disusun dari kebutuhan nyata dan penawaran vendor resmi, bukan menetapkan harga tiket terlebih dahulu lalu berharap semua biaya tertutup.
                Siapkan proyeksi 3 skenario: <strong>Konservatif, Dasar, dan Optimistis</strong>. Pisahkan uang sponsor yang sudah terikat kontrak legal dari prospek yang masih berupa pembicaraan.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>SKENARIO 1</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Konservatif</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>Bertumpu pada kuota tiket dasar dan sponsor terikat kontrak minimal.</span>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--color-green-deep)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>SKENARIO 2</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Dasar (Baseline)</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>Target moderat 2.000 - 3.000 peserta dengan 3 mitra sponsor utama.</span>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>SKENARIO 3</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Optimistis</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>Kapasitas maksimal venue, penjualan merchandise, dan tenant festival penuh.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Web Engineering Phases */}
        {activeCategory === 'webPhases' && (
          <div className="safety-sidebar-layout">
            <aside className="safety-sidebar-menu" aria-label="Daftar Fase Web">
              {ENGINEERING_PHASES.map((ph, idx) => {
                const isActive = selectedPhaseIdx === idx;
                return (
                  <button
                    key={ph.phase}
                    type="button"
                    onClick={() => setSelectedPhaseIdx(idx)}
                    className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="safety-item-num">0{idx + 1}</span>
                    <span className="safety-item-title">{ph.phase} : {ph.name}</span>
                  </button>
                );
              })}
            </aside>

            <div className="safety-detail-card" role="region" aria-live="polite">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="status-pill">
                  {currentPhase.phase} : {currentPhase.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  PLATFORM ENGINEERING
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                  {currentPhase.name}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-deep)', fontWeight: 600 }}>
                  Fokus Rekayasa: {currentPhase.objective}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  DELIVERABLE TEKNOLOGI & ARSITEKTUR:
                </span>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {currentPhase.deliverables.map((del, dIdx) => (
                    <li key={dIdx} style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.55' }}>
                      {del}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical & Privacy Standards Strip */}
              <div style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  STANDAR TEKNIS TERINTEGRASI ({TECHNICAL_STANDARDS.length} PRINSIP):
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {TECHNICAL_STANDARDS.slice(0, 4).map((std, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)', lineHeight: '1.4' }}>
                      <strong style={{ color: 'var(--color-green-text)' }}>&bull; {std.title}:</strong> {std.desc.slice(0, 75)}...
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSelectedPhaseIdx((prev) => Math.max(0, prev - 1))}
                  disabled={selectedPhaseIdx === 0}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Fase Sebelumnya
                </button>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                  {selectedPhaseIdx + 1} / {ENGINEERING_PHASES.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedPhaseIdx((prev) => Math.min(ENGINEERING_PHASES.length - 1, prev + 1))}
                  disabled={selectedPhaseIdx === ENGINEERING_PHASES.length - 1}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Fase Berikutnya &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
