import React, { useState } from 'react';
import { ACTIVATIONS_DATA } from '../data/pitchdeckData';

export const EditorialExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chapter01' | 'modularCatalog'>('chapter01');
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(0);
  const [selectedModularIdx, setSelectedModularIdx] = useState<number>(0);

  const chapter01Activities = [
    {
      id: 'rhythm-run',
      role: 'SIGNATURE ACTIVITY',
      title: 'Rhythm Run : Perkusi & Live Beat Rute',
      tagline: 'Performa perkusi lokal yang memompa irama langkah di lintasan',
      desc: 'Komunitas perkusi atau musisi perkusi jalanan lokal menghidupkan titik strategis lintasan. Penempatan performer dipilih pada area berbadan jalan lebar tanpa mengganggu alur gerak pelari.',
      benefit: 'Mengubah kelelahan fisik menjadi luapan energi komunal dengan dentuman drum dan musik berirama cepat.',
      safetyRule: 'Posisi stage performer berada di luar badan rute utama (off-track) minimal 2 meter, kabel audio ditanam di bawah rubber ramp.'
    },
    {
      id: 'mission-youthon',
      role: 'SUPPORTING ACTIVATION',
      title: 'Mission: YOUTHON : Checkpoint Badge Digital',
      tagline: 'Misi partisipasi santai tanpa tekanan catatan waktu',
      desc: 'Peserta dapat mengumpulkan badge digital melalui pemindaian kode QR di pos checkpoint tematik. Dirancang opsional, mudah diakses, dan tidak mewajibkan peserta berhenti di jalur sempit.',
      benefit: 'Menghadirkan unsur eksplorasi kota dan pencapaian gamifikasi yang menyenangkan bagi pelari pemula dan keluarga muda.',
      safetyRule: 'Titik pemindaian berada di area pelebaran jalan (pocket zone), tidak boleh ditempatkan di persimpangan atau turunan.'
    },
    {
      id: 'hype-squad',
      role: 'COMMUNITY SUPPORTER',
      title: 'Hype Squad : Cheer Zone Kampus & Kreator',
      tagline: 'Dukungan moral berenergi dari komunitas lokal dan mahasiswa',
      desc: 'Melibatkan mahasiswa kampus, dance crew lokal, dan komunitas kreatif sebagai supporter di zona khusus yang telah ditentukan di kilometer kritis.',
      benefit: 'Memberikan suntikan motivasi moral hangat saat pelari mulai merasa letih, menciptakan suasana perayaan yang inklusif.',
      safetyRule: 'Zona suporter dibatasi barikade pengaman jelas agar penonton tidak merangsek masuk dan menghalangi pelari.'
    },
    {
      id: 'finish-festival',
      role: 'AFTER-RUN CELEBRATION',
      title: 'Finish Line Festival : Oase Selebrasi Bersama',
      tagline: 'Area pemulihan fisik, kuliner sehat, dan panggung musik festival',
      desc: 'Penyediaan hidrasi dingin, area pendinginan/stretching terpadu, photobooth instan, games interaktif, stan tenant UMKM lokal, dan panggung musik hiburan.',
      benefit: 'Momen puncak selebrasi diri bersama kawan sebaya, merayakan keberhasilan menuntaskan garis finis bersama.',
      safetyRule: 'Alur recovery peserta finis (medali, air, buah) dipisahkan secara tegas dari akses penonton panggung festival untuk mencegah bottleneck kerumunan.'
    }
  ];

  const currentChapter = chapter01Activities[selectedChapterIdx];
  const currentModular = ACTIVATIONS_DATA[selectedModularIdx];

  return (
    <section id="pengalaman" className="editorial-section alt-bg" aria-labelledby="heading-experience">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-eyebrow">06 & 07 / DESAIN PENGALAMAN & AKTIVASI</span>
          <h2 id="heading-experience" className="section-headline">
            Pengalaman multi-indera dan aktivasi lapangan.
          </h2>
          <p className="section-lead">
            Untuk Chapter 01 Jawa Barat, fokus utama adalah 1 Signature Activity dan maksimal 3 Aktivitas Pendukung.
            Aktivitas inovatif harus memperkuat pengalaman berlari, bukan membuat rute terlalu padat.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('chapter01')}
            className={`btn-editorial ${activeTab === 'chapter01' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeTab === 'chapter01'}
          >
            <span>Fokus Chapter 01 (1 Signature + 3 Pendukung)</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeTab === 'chapter01' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeTab === 'chapter01' ? '#ffffff' : 'inherit' }}>
              Prioritas
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('modularCatalog')}
            className={`btn-editorial ${activeTab === 'modularCatalog' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeTab === 'modularCatalog'}
          >
            <span>Katalog 6 Modul Rute Modular</span>
            <span className="status-pill" style={{ marginLeft: '0.5rem', background: activeTab === 'modularCatalog' ? 'rgba(255,255,255,0.2)' : 'var(--bg-secondary)', color: activeTab === 'modularCatalog' ? '#ffffff' : 'inherit' }}>
              Katalog
            </span>
          </button>
        </div>

        {/* Tab 1: Fokus Chapter 01 */}
        {activeTab === 'chapter01' && (
          <div className="safety-sidebar-layout">
            {/* Sidebar Menu */}
            <aside className="safety-sidebar-menu" aria-label="Aktivasi Chapter 01">
              {chapter01Activities.map((act, idx) => {
                const isActive = selectedChapterIdx === idx;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => setSelectedChapterIdx(idx)}
                    className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="safety-item-num">0{idx + 1}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <span className="safety-item-title">{act.title}</span>
                      <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', opacity: isActive ? 0.9 : 0.65 }}>
                        {act.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </aside>

            {/* Detail Card Panel */}
            <div className="safety-detail-card" role="region" aria-live="polite">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="status-pill">
                  {currentChapter.role} : 0{selectedChapterIdx + 1} dari 04
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  CHAPTER 01 : WEST JAVA
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                  {currentChapter.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-deep)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {currentChapter.tagline}
                </p>
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-green-muted)' }}>
                  {currentChapter.desc}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--color-green-deep)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  NILAI PENGALAMAN BAGI PESERTA:
                </span>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6', margin: 0 }}>
                  {currentChapter.benefit}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--accent-amber)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  STANDAR KESELAMATAN & BEBAS HAMBATAN:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', lineHeight: '1.6', margin: 0 }}>
                  {currentChapter.safetyRule}
                </p>
              </div>

              {/* Stepper Navigation */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSelectedChapterIdx((prev) => Math.max(0, prev - 1))}
                  disabled={selectedChapterIdx === 0}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Aktivasi Sebelumnya
                </button>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                  {selectedChapterIdx + 1} / {chapter01Activities.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedChapterIdx((prev) => Math.min(chapter01Activities.length - 1, prev + 1))}
                  disabled={selectedChapterIdx === chapter01Activities.length - 1}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Aktivasi Berikutnya &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Katalog 6 Modul Modular */}
        {activeTab === 'modularCatalog' && (
          <div className="safety-sidebar-layout">
            {/* Sidebar Menu */}
            <aside className="safety-sidebar-menu" aria-label="Katalog 6 Modul Modular">
              {ACTIVATIONS_DATA.map((mod, idx) => {
                const isActive = selectedModularIdx === idx;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setSelectedModularIdx(idx)}
                    className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <span className="safety-item-num">0{idx + 1}</span>
                    <span className="safety-item-title">{mod.name}</span>
                  </button>
                );
              })}
            </aside>

            {/* Detail Card Panel */}
            <div className="safety-detail-card" role="region" aria-live="polite">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="status-pill">
                  Modul 0{selectedModularIdx + 1} dari {ACTIVATIONS_DATA.length} : {currentModular.readinessLevel}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                  {currentModular.id.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.25rem' }}>
                  {currentModular.name}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-deep)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {currentModular.tagline}
                </p>
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-green-muted)' }}>
                  {currentModular.description}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent-amber)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  STANDAR KESELAMATAN & KELANCARAN LINTASAN:
                </span>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.6', margin: 0 }}>
                  {currentModular.safetyCheck}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  CATATAN LOGISTIK & SUMBER DAYA:
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', lineHeight: '1.6', margin: 0 }}>
                  {currentModular.operationalNote}
                </p>
              </div>

              {/* Stepper Navigation */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSelectedModularIdx((prev) => Math.max(0, prev - 1))}
                  disabled={selectedModularIdx === 0}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Modul Sebelumnya
                </button>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                  {selectedModularIdx + 1} / {ACTIVATIONS_DATA.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedModularIdx((prev) => Math.min(ACTIVATIONS_DATA.length - 1, prev + 1))}
                  disabled={selectedModularIdx === ACTIVATIONS_DATA.length - 1}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Modul Berikutnya &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
