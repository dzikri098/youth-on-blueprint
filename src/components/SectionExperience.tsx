import React, { useState } from 'react';
import { ACTIVATIONS_DATA } from '../data/pitchdeckData';
import { ActivationModule } from '../types';
import { Modal } from './Modal';

export const SectionExperience: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<ActivationModule | null>(null);

  const pillars = [
    { title: '1. Run Experience', desc: 'Rute lari terstandarisasi yang aman, teratur, dan cocok untuk pemula hingga pelari rekreasional.' },
    { title: '2. Music & Rhythm', desc: 'Titik pemantik semangat beraudio jernih tanpa mengganggu komunikasi darurat panitia.' },
    { title: '3. Community Connection', desc: 'Ruang interaksi inklusif untuk mempertemukan pelari muda dan jejaring komunitas kreatif.' },
    { title: '4. Interactive Missions', desc: 'Tantangan ringan non-kompetitif yang opsional dan tidak mengganggu kelancaran rute lari.' },
    { title: '5. Finish Line Celebration', desc: 'Area istirahat lapang dengan hiburan panggung, hidrasi lengkap, dan instalasi selebrasi foto.' },
    { title: '6. Local Identity', desc: 'Kolaborasi otentik dengan kreator, musisi, dan pegiat UMKM kuliner di kota penyelenggara.' }
  ];

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span>MODULAR EXPERIENCE ARCHITECTURE</span>
        </div>
        <p>
          Seluruh ide aktivasi di bawah ini merupakan modul acara yang dapat dipilih berdasarkan kapasitas anggaran,
          izin lokasi, profil peserta, dan kesiapan tim lapangan. Keselamatan dan kelancaran rute adalah prioritas mutlak.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          Enam Pilar Pengalaman Acara
        </h3>
        <div className="grid-3col">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="tech-card">
              <h4 className="tech-card-title" style={{ fontSize: '1rem', color: 'var(--accent-cyan)' }}>
                {pillar.title}
              </h4>
              <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Enam Ide Aktivasi Inovatif di Lapangan
          </h3>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
            [KLIK KARTU UNTUK AUDIT OPERASIONAL & MEDIS]
          </span>
        </div>

        <div className="grid-3col">
          {ACTIVATIONS_DATA.map((mod) => (
            <div
              key={mod.id}
              className="tech-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedModule(mod)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedModule(mod);
                }
              }}
              aria-label={`Lihat detail aktivasi ${mod.name}`}
            >
              <div className="tech-card-header">
                <span>{mod.id.toUpperCase()}</span>
                <span className={`tag-badge ${mod.readinessLevel === 'Pilot Ready' ? 'emerald' : mod.readinessLevel === 'Needs Validation' ? 'amber' : ''}`}>
                  {mod.readinessLevel}
                </span>
              </div>
              <h4 className="tech-card-title">{mod.name}</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {mod.tagline}
              </p>
              <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
                {mod.description}
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>Protokol Keselamatan</span>
                <span style={{ color: 'var(--accent-cyan)' }}>Buka Rincian &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedModule !== null}
        onClose={() => setSelectedModule(null)}
        title={selectedModule ? `Audit Operasional: ${selectedModule.name}` : 'Detail Aktivasi'}
      >
        {selectedModule && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <span className="tag-badge cyan">{selectedModule.tagline}</span>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                {selectedModule.description}
              </p>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: '4px', borderLeft: '3px solid var(--accent-amber)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                STANDAR KESELAMATAN & KELANCARAN RUTE
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {selectedModule.safetyCheck}
              </p>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                CATATAN OPERASIONAL & LOGISTIK
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {selectedModule.operationalNote}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setSelectedModule(null)}
                className="btn btn-primary"
              >
                Tutup Dokumen
              </button>
            </div>
          </div>
        )}
      </Modal>
    </article>
  );
};

