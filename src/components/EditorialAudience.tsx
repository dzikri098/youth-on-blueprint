import React, { useState } from 'react';

export const EditorialAudience: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const audienceDossiers = [
    {
      id: 'core-youth',
      num: '01',
      title: 'Pelajar, Mahasiswa & Young Professionals',
      tag: 'Generasi Inti (16 - 30 Tahun)',
      category: 'Target Utama',
      summary: 'Generasi muda produktif yang mencari pelepasan stres sehat, sarana berekspresi, serta ruang interaksi sosial baru di luar kampus dan rutinitas kerja harian.',
      motivation: 'Melepaskan kejenuhan akademis dan kantor melalui kegiatan fisik luar ruang yang seru, dinamis, serta relevan dengan gaya hidup kekinian bersama kawan sebaya.',
      experienceApproach: 'Desain rute penuh instalasi audio-visual tematik, spot foto estetik, tiket ramah kantong pemuda, serta panggung musik santai pasca-finis tanpa kesan birokratis.',
      communityImpact: 'Membiasakan budaya bergerak aktif sejak dini dan memperluas jejaring pertemanan lintas kampus serta institusi kerja.'
    },
    {
      id: 'first-time-runners',
      num: '02',
      title: 'Pelari Pemula (First-Time Runners)',
      tag: 'Inklusivitas Langkah',
      category: 'Inklusivitas & Aksesibilitas',
      summary: 'Individu yang baru pertama kali tertarik mencoba ajang lari massal, namun kerap merasa ragu atau terintimidasi oleh ajang kompetisi lari formal.',
      motivation: 'Membuktikan pada diri sendiri bahwa olahraga itu menyenangkan dan tidak menakutkan, mencari pencapaian sehat perdana tanpa rasa takut tertinggal di belakang.',
      experienceApproach: 'Nol tekanan catatan waktu (zero cut-off time pressure), jalan santai diperbolehkan dan didukung penuh, kontur lintasan datar, serta marshal penyemangat di setiap pos.',
      communityImpact: 'Menghilangkan stigma elitisme olahraga lari dan membuka pintu masuk gaya hidup sehat bagi masyarakat awam.'
    },
    {
      id: 'recreational-runners',
      num: '03',
      title: 'Pelari Rekreasional & Penggiat Luar Ruang',
      tag: 'Euforia & Eksplorasi',
      category: 'Basis Komunitas',
      summary: 'Penggiat lari kasual dan keluarga muda yang rutin berolahraga santai di akhir pekan namun mengutamakan atmosfer keceriaan dibanding mengejar rekor pribadi.',
      motivation: 'Menikmati rute kota yang steril dengan suguhan musik berirama, berinteraksi bersama ribuan pelari lain, serta menikmati hiburan panggung festival akhir pekan.',
      experienceApproach: 'Modul aktivasi berenergi (terowongan mist, zonasi musik beritme cepat), alur flow peserta yang rapi, dan fasilitas recovery pasca-finis yang terstandarisasi.',
      communityImpact: 'Menghadirkan opsi rekreasi publik yang menyehatkan bagi warga urban kota penyelenggara.'
    },
    {
      id: 'community-collectives',
      num: '04',
      title: 'Komunitas Kreatif, Musik & Olahraga Lokal',
      tag: 'Jejaring Kolaboratif',
      category: 'Aktivasi Ekosistem',
      summary: 'Klub lari komunitas, kolektif musik independen, komunitas seni visual, dan kreator konten pemuda lokal di kota tuan rumah.',
      motivation: 'Mencari ruang publik yang terbuka untuk berekspresi, berkolaborasi dengan gerakan berskala luas, dan memamerkan kreativitas komunitasnya ke publik.',
      experienceApproach: 'Area khusus temu komunitas di zona pra-start dan pasca-finis, kolaborasi panggung seni rute dengan penampil lokal, dan ruang interaksi terbuka.',
      communityImpact: 'Menumbuhkan rasa kepemilikan lokal dan memperkuat ekosistem kreatif anak muda di setiap kota yang disinggahi.'
    },
    {
      id: 'brand-partners',
      num: '05',
      title: 'Brand & Mitra Gerakan Kolaboratif',
      tag: 'Ekosistem Sinergi',
      category: 'Mitra & Sponsor',
      summary: 'Entitas korporasi, apparel, produk nutrisi sehat, dan institusi yang ingin membangun relasi autentik dengan audiens pemuda melalui kegiatan berdampak positif.',
      motivation: 'Terhubung secara organik dan bermakna dengan generasi muda melalui aktivitas yang nyata, partisipatif, serta bebas dari kesan promosi yang kaku atau intrusif.',
      experienceApproach: 'Integrasi aktivasi bermakna di rute (seperti pos hidrasi berirama atau instalasi interaktif) dan ruang pengalaman terkurasi di area festival finis.',
      communityImpact: 'Menciptakan simbiosis mutualisme yang sehat antara pertumbuhan industri komersial dengan pembinaan kegiatan positif anak muda.'
    }
  ];

  const currentDossier = audienceDossiers[selectedIdx];

  const inclusivityPrinciples = [
    {
      num: '01',
      title: 'Zero COT Pressure',
      desc: 'Tidak ada batas waktu ketat yang mengintimidasi. Jalan santai, joging ringan, dan lari santai memiliki martabat perayaan yang sama.'
    },
    {
      num: '02',
      title: 'Rute Steril & Elevasi Bersahabat',
      desc: 'Kontur rute datar dengan kemiringan di bawah 1.5%, lebar jalur minimal 4 meter, dan terisolasi penuh dari bahaya lalu lintas bermotor.'
    },
    {
      num: '03',
      title: 'Marshal & Medis Empatik',
      desc: 'Marshal terlatih bertugas memberikan motivasi moral di rute, pos hidrasi teratur tiap 1.5 - 2 km, dan tim first responder siaga tinggi.'
    },
    {
      num: '04',
      title: 'Kesetaraan Apresiasi Finis',
      desc: 'Seluruh peserta yang menyelesaikan rute menerima medali finisher dan akses terbuka ke seluruh sajian oase festival panggung.'
    }
  ];

  return (
    <section id="audiens" className="editorial-section alt-bg" aria-labelledby="heading-audience">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">04 / TARGET & INKLUSIVITAS</span>
          <h2 id="heading-audience" className="section-headline">
            Ruang gerak yang menyambut semua, tanpa memandang kecepatan langkah.
          </h2>
          <p className="section-lead">
            YOUTHON merangkul keberagaman audiens muda melalui pendekatan persona terstruktur,
            memastikan setiap langkah dihargai dari pelari perdana hingga komunitas kreatif kota.
          </p>
        </div>

        {/* Master-Detail Audiens Dossier Layout */}
        <div className="audience-dossier-layout">
          {/* Left Column : Segment Navigator */}
          <aside className="audience-nav-list" aria-label="Daftar Segmen Audiens">
            {audienceDossiers.map((item, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`audience-nav-item ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="audience-nav-num">{item.num}</span>
                    <div className="audience-nav-meta">
                      <span className="audience-nav-title">{item.title}</span>
                      <span className="audience-nav-tag">{item.tag}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* Right Column : Detail Dossier Sheet */}
          <div className="audience-dossier-sheet" role="region" aria-live="polite">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-pill">
                  {currentDossier.category} : Segmen {currentDossier.num} dari 05
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  {currentDossier.tag}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                AUDIENCE PROFILE
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
                {currentDossier.title}
              </h3>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--color-green-muted)' }}>
                {currentDossier.summary}
              </p>
            </div>

            {/* Structured Persona Information Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1.125rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  MOTIVASI & KEBUTUHAN INTI:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                  {currentDossier.motivation}
                </p>
              </div>

              <div style={{ padding: '1.125rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  DAMPAK SOSIAL & NILAI KOMUNAL:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                  {currentDossier.communityImpact}
                </p>
              </div>
            </div>

            {/* Experience Approach Highlight Box */}
            <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', borderLeft: '4px solid var(--color-green-deep)', borderTop: '1px solid var(--border-light)', borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                PENDEKATAN PENGALAMAN KHUSUS YOUTHON:
              </span>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                {currentDossier.experienceApproach}
              </p>
            </div>

            {/* Stepper Navigation */}
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setSelectedIdx((prev) => Math.max(0, prev - 1))}
                disabled={selectedIdx === 0}
                className="btn-editorial btn-secondary-editorial"
                style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
              >
                &larr; Segmen Sebelumnya
              </button>

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                {selectedIdx + 1} / {audienceDossiers.length}
              </span>

              <button
                type="button"
                onClick={() => setSelectedIdx((prev) => Math.min(audienceDossiers.length - 1, prev + 1))}
                disabled={selectedIdx === audienceDossiers.length - 1}
                className="btn-editorial btn-primary-editorial"
                style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
              >
                Segmen Berikutnya &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Inclusivity Charter Block : 4 Principles & Mandatory Quote */}
        <div className="inclusivity-charter-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>
              STANDAR OPERASIONAL & AKSESIBILITAS
            </span>
            <span className="status-pill" style={{ backgroundColor: 'var(--color-green-deep)', color: '#ffffff' }}>
              Mandatori
            </span>
          </div>

          <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
            Piagam Inklusivitas Fisik YOUTHON
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-muted)', maxWidth: '780px', lineHeight: '1.6' }}>
            Ajang ini didedikasikan untuk merayakan gerak bersama, bukan mengeliminasi peserta melalui kompetisi waktu.
            Seluruh elemen rute, pos hidrasi, dan tim operasional berpegang pada empat standar inklusivitas:
          </p>

          <div className="inclusivity-principles-grid">
            {inclusivityPrinciples.map((prin) => (
              <div key={prin.num} className="inclusivity-principle-card">
                <span className="inclusivity-principle-num">{prin.num} // STANDAR</span>
                <span className="inclusivity-principle-title">{prin.title}</span>
                <p className="inclusivity-principle-desc">{prin.desc}</p>
              </div>
            ))}
          </div>

          {/* Official Manifesto Callout */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-lime-muted)', borderRadius: '8px', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-green-deep)', color: 'var(--accent-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.15rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                PRINSIP INKLUSIVITAS SUMBER DOKUMEN YOUTHON:
              </span>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }}>
                &ldquo;Format acara, jarak tempuh, persyaratan usia, aksesibilitas, dan tingkat kesulitan harus ditetapkan sesuai kapasitas penyelenggara serta kebutuhan peserta. Jangan mengasumsikan semua peserta memiliki kemampuan fisik yang sama.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
