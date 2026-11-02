import React, { useState } from 'react';
import { ROADMAP_DATA } from '../data/pitchdeckData';

export const SectionRoadmap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'phases' | 'chapters'>('phases');

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
          <span>MODEL PENGEMBANGAN: DARI JAWA BARAT KE SELURUH INDONESIA</span>
        </div>
        <p>
          YOUTHON dimulai dari inisiasi pilot event di Jawa Barat untuk menguji alur peserta dan sistem digital.
          Ekspansi ke kota berikutnya dieksekusi bertahap berdasarkan kesiapan mitra lokal, standar keselamatan rute, dan kapasitas operasional.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button
          type="button"
          onClick={() => setActiveTab('phases')}
          className={`btn ${activeTab === 'phases' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'phases'}
        >
          4 Tahapan Skalabilitas
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('chapters')}
          className={`btn ${activeTab === 'chapters' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'chapters'}
        >
          Katalog Chapter & Kandidat Kota
        </button>
      </div>

      {activeTab === 'phases' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {ROADMAP_DATA.phases.map((phase) => (
            <div
              key={phase.phase}
              className="tech-card"
              style={{
                borderLeft: phase.status === 'Current Focus' ? '3px solid var(--accent-cyan)' : '1px solid var(--border-color)'
              }}
            >
              <div className="tech-card-header">
                <span style={{ fontWeight: 700, color: phase.status === 'Current Focus' ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
                  {phase.phase.toUpperCase()} // {phase.timeframe}
                </span>
                <span className={`tag-badge ${phase.status === 'Current Focus' ? 'cyan' : ''}`}>
                  {phase.status}
                </span>
              </div>
              <h4 className="tech-card-title">{phase.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                Fokus Utama: {phase.focus}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                {phase.bullets.map((b, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'chapters' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Jaringan Gerakan Chapter Kota (Eksplorasi)
            </h3>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)' }}>
              STATUS SELURUH KOTA: KANDIDAT EKSPLORASI [TBD]
            </span>
          </div>

          <div className="grid-2col">
            {ROADMAP_DATA.candidateChapters.map((chap) => (
              <div
                key={chap.id}
                className="tech-card"
                style={{
                  borderLeft: chap.role === 'Pilot Region' ? '3px solid var(--accent-cyan)' : '1px solid var(--border-color)'
                }}
              >
                <div className="tech-card-header">
                  <span>{chap.region.toUpperCase()}</span>
                  <span className={`tag-badge ${chap.role === 'Pilot Region' ? 'cyan' : 'amber'}`}>
                    {chap.status}
                  </span>
                </div>
                <h4 className="tech-card-title">{chap.cityName}</h4>
                <div style={{ fontSize: '0.8125rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  Peran Rencana: {chap.role}
                </div>
                <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
                  <strong>Karakteristik Komunitas:</strong> {chap.communityProfile}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Prinsip Adaptasi: Menjaga standar mutu & keselamatan pusat, memperkaya konten kearifan lokal.
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

