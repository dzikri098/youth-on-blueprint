import React, { useState } from 'react';
import { ROADMAP_DATA } from '../data/pitchdeckData';

export const EditorialRoadmap: React.FC = () => {
  const [activeView, setActiveView] = useState<'prepRoadmap' | 'marketingTimeline' | 'nationalGrowth'>('prepRoadmap');

  const preparationPhases = [
    {
      num: '01',
      timeframe: 'Minggu 1 - 2',
      title: 'Foundation & Feasibility',
      badge: 'Inisiasi & Konsep',
      bullets: [
        'Tetapkan tujuan, konsep, target peserta awal (2.000 - 3.000 peserta), dan skala acara.',
        'Pilih 2 - 3 kandidat lokasi dan rute di Jawa Barat (Bandung Raya sebagai opsi awal evaluasi).',
        'Buat estimasi anggaran awal dan pemetaan kebutuhan perizinan instansi.',
        'Bentuk tim inti serta pembagian PIC tanggung jawab 8 divisi fungsional.'
      ]
    },
    {
      num: '02',
      timeframe: 'Minggu 3 - 4',
      title: 'Venue, Safety & Partnership',
      badge: 'Survei & Kemitraan',
      bullets: [
        'Lakukan survei lapangan detail dan simulasi rute bersama otoritas terkait.',
        'Mulai koordinasi awal dengan pemilik lokasi/venue dan pihak berwenang (Dishub/Kepolisian).',
        'Susun proposal sponsor, paket kemitraan bertingkat, dan kurasi brand yang relevan.',
        'Minta penawaran resmi vendor (panggung, audio, medali) dan tenaga medis bersertifikat.'
      ]
    },
    {
      num: '03',
      timeframe: 'Minggu 5 - 7',
      title: 'Brand Launch & Registration',
      badge: 'Peluncuran & Tiket',
      bullets: [
        'Luncurkan identitas visual resmi dan kanal informasi publik (website & media sosial).',
        'Buka portal pendaftaran daring dengan syarat, ketentuan, dan waiver keselamatan yang jelas.',
        'Aktifkan komunitas lari lokal, kampus mahasiswa, kreator konten, dan brand ambassador.',
        'Mulai kampanye penawaran sponsor terikat kontrak dan penjualan tiket berjenjang.'
      ]
    },
    {
      num: '04',
      timeframe: 'Minggu 8 - 10',
      title: 'Production & Activation',
      badge: 'Produksi & Logistik',
      bullets: [
        'Finalisasi kontrak vendor panggung festival, sound system, jersey, BIB, dan medali finisher.',
        'Konfirmasi alokasi petugas rute, koordinator marshal, tim medis, ambulans, dan keamanan.',
        'Umumkan detail aktivitas signature Rhythm Run, checkpoint rute, dan bagikan Race Guide digital.',
        'Evaluasi laju pendaftaran tiket dan proyeksikan arus kas (cash flow) operasional.'
      ]
    },
    {
      num: '05',
      timeframe: 'Minggu 11 - 12',
      title: 'Final Readiness',
      badge: 'Validasi Akhir',
      bullets: [
        'Lakukan technical meeting lintas divisi dan pemeriksaan kesiapan menyeluruh (tabletop exercise).',
        'Validasi sterilisasi rute, prakiraan radar cuaca BMKG, radio komunikasi, dan rencana darurat.',
        'Finalisasi database daftar peserta, pengepakan race pack, dan rundown menit demi menit.',
        'Tetapkan keputusan lanjut (Go), penyesuaian teknis, atau pembatalan jika terdapat kendala kritis.'
      ]
    },
    {
      num: '06',
      timeframe: 'Hari H + 1 s/d 14 Hari',
      title: 'Execution & Evaluation',
      badge: 'Eksekusi & Dampak',
      bullets: [
        'Jalankan acara dengan Command Center terpadu dan kehadiran PIC di setiap zona lapangan.',
        'Publikasikan dokumentasi foto aksi gratis bagi pelari dan laporan bukti tayang bagi sponsor.',
        'Evaluasi menyeluruh: realisasi keuangan, catatan keselamatan, kepuasan peserta, dan dampak sosial.',
        'Kumpulkan pembelajaran operasional sebagai bekal replikasi untuk chapter kota berikutnya.'
      ]
    }
  ];

  const marketingStages = [
    {
      stage: 'T-12 hingga T-9 Minggu',
      phase: 'BUILD THE MOVEMENT',
      lead: 'Perkenalkan cerita YOUTHON, identitas visual, teaser kota, dan ajakan bergabung ke komunitas.',
      focus: 'Fokus pada konten video pendek, filosofi Switch Your Energy On, dan membangun antusiasme awal.'
    },
    {
      stage: 'T-8 hingga T-6 Minggu',
      phase: 'REVEAL & REGISTER',
      lead: 'Umumkan lokasi yang sudah terkonfirmasi, kategori 3K & 5K, harga, benefit tiket, dan buka pendaftaran resmi.',
      focus: 'Peluncuran web pendaftaran, pengumuman benefit race pack, dan kuota gelombang awal (early bird).'
    },
    {
      stage: 'T-5 hingga T-3 Minggu',
      phase: 'COMMUNITY TAKEOVER',
      lead: 'Kolaborasi aktif dengan kampus, running club, kreator lokal, ambassador, dan partner komersial.',
      focus: 'Aktivasi sesi lari santai pra-acara (pre-event shakeout run) dan roadshow kampus se-Jawa Barat.'
    },
    {
      stage: 'T-2 Minggu hingga T-1 Hari',
      phase: 'COUNTDOWN TO YOUTHON',
      lead: 'Bagikan race guide digital, informasi pengambilan race pack, profil aktivitas musik, dan pengingat keselamatan.',
      focus: 'Edukasi kesiapan fisik pelari pemula, pengingat lokasi parkir, tata tertib, dan hitung mundur hari-H.'
    },
    {
      stage: 'Hari H hingga T+14 Hari',
      phase: 'RELIVE THE MOVEMENT',
      lead: 'Publikasikan video highlight, foto peserta resolusi tinggi gratis, recap sponsor, hasil survei kepuasan, dan teaser chapter selanjutnya.',
      focus: 'Merawat loyalitas komunitas, apresiasi mitra kolaboratif, dan pembukaan waitlist untuk kota berikutnya.'
    }
  ];

  return (
    <section id="roadmap" className="editorial-section" aria-labelledby="heading-roadmap">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">10 / ROADMAP & SKALA NASIONAL</span>
          <h2 id="heading-roadmap" className="section-headline">
            Roadmap persiapan 12 - 16 minggu dan ekspansi antarkota.
          </h2>
          <p className="section-lead">
            YOUTHON dipersiapkan bukan sekadar acara satu hari, tetapi gerakan yang konsisten, beridentitas kuat,
            dan memiliki kapasitas tur ke berbagai kota di Indonesia diawali dari Chapter 01 Jawa Barat.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveView('prepRoadmap')}
            className={`btn-editorial ${activeView === 'prepRoadmap' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeView === 'prepRoadmap'}
          >
            <span>Roadmap Persiapan 12 - 16 Minggu</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeView === 'prepRoadmap' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeView === 'prepRoadmap' ? '#ffffff' : 'inherit' }}>
              Operasional
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView('marketingTimeline')}
            className={`btn-editorial ${activeView === 'marketingTimeline' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeView === 'marketingTimeline'}
          >
            <span>Timeline Marketing (T-12 s/d T+14)</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeView === 'marketingTimeline' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeView === 'marketingTimeline' ? '#ffffff' : 'inherit' }}>
              Kampanye
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView('nationalGrowth')}
            className={`btn-editorial ${activeView === 'nationalGrowth' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeView === 'nationalGrowth'}
          >
            <span>Ekspansi Gerakan Nasional</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeView === 'nationalGrowth' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeView === 'nationalGrowth' ? '#ffffff' : 'inherit' }}>
              Skala
            </span>
          </button>
        </div>

        {/* View 1: 12-16 Minggu Preparation Roadmap */}
        {activeView === 'prepRoadmap' && (
          <div>
            <div className="timeline-flow-container">
              {preparationPhases.map((phase) => (
                <div key={phase.num} className="timeline-step-row">
                  <div className="timeline-step-marker" aria-hidden="true">
                    {phase.num}
                  </div>

                  <div className="timeline-step-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="status-pill">{phase.timeframe}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                          {phase.badge}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                        FASE 0{phase.num}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.75rem' }}>
                      {phase.title}
                    </h3>

                    <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                      <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {phase.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.55' }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Note on Permits */}
            <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', backgroundColor: '#ffffff', borderRadius: '10px', borderLeft: '4px solid var(--accent-amber)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                CATATAN KRITIS PERIZINAN & PENJUALAN TIKET:
              </span>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6', margin: 0 }}>
                Pengurusan izin tertentu (Dishub, Kepolisian, dan pengelola jalan) dapat membutuhkan waktu lebih lama dari roadmap ini.
                Mulailah koordinasi sejak awal dan <strong>jangan membuka penjualan tiket dengan menjanjikan rute atau fasilitas yang belum terkonfirmasi resmi</strong>.
              </p>
            </div>
          </div>
        )}

        {/* View 2: Marketing Timeline (T-12 to T+14) */}
        {activeView === 'marketingTimeline' && (
          <div>
            <div className="timeline-flow-container">
              {marketingStages.map((stg, sIdx) => (
                <div key={stg.phase} className="timeline-step-row">
                  <div className="timeline-step-marker" aria-hidden="true">
                    0{sIdx + 1}
                  </div>

                  <div className="timeline-step-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="status-pill">{stg.stage}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                        {stg.phase}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
                      {stg.phase}
                    </h3>

                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                      {stg.lead}
                    </p>

                    <div style={{ padding: '0.875rem 1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase' }}>
                        FOKUS KONTEN & SALURAN:
                      </span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', margin: 0, lineHeight: '1.5' }}>
                        {stg.focus}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 3: National Growth Context */}
        {activeView === 'nationalGrowth' && (
          <div>
            <div className="timeline-flow-container">
              {ROADMAP_DATA.phases.map((ph, idx) => {
                const isCurrent = ph.status === 'Current Focus';
                return (
                  <div
                    key={ph.phase}
                    className={`timeline-step-row ${isCurrent ? 'is-current' : ''}`}
                  >
                    <div className="timeline-step-marker" aria-hidden="true">
                      0{idx + 1}
                    </div>

                    <div className="timeline-step-body">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span className="status-pill">{ph.phase}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                            {ph.timeframe}
                          </span>
                        </div>
                        <span className={`status-pill ${isCurrent ? 'btn-lime' : ''}`} style={{ fontSize: '0.75rem' }}>
                          {ph.status}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
                        {ph.title}
                      </h3>

                      <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-deep)', fontWeight: 600, marginBottom: '0.75rem' }}>
                        Fokus Strategis: {ph.focus}
                      </p>

                      <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          {ph.bullets.map((b, bIdx) => (
                            <li key={bIdx} style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.55' }}>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
