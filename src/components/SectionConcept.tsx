import React, { useState } from 'react';
import { CONCEPT_DATA } from '../data/pitchdeckData';

export const SectionConcept: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'vision-mission' | 'audience'>('overview');

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>STATUS: DOKUMEN KONSEP AWAL (DRAFT)</span>
        </div>
        <p>
          Dokumen ini disusun sebagai konsep awal yang dapat dikembangkan secara dinamis. Parameter yang belum diputuskan
          (tanggal event, lokasi venue pasti, harga tiket, dan sponsor) tidak diasumsikan sebagai fakta final dan dapat disesuaikan.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`btn ${activeTab === 'overview' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'overview'}
        >
          Ringkasan & 4 Pilar
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('vision-mission')}
          className={`btn ${activeTab === 'vision-mission' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'vision-mission'}
        >
          Visi, Misi & Positioning
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('audience')}
          className={`btn ${activeTab === 'audience' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'audience'}
        >
          Target Audiens & Inklusivitas
        </button>
      </div>

      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
            <div className="tech-card-header">
              <span>CORE ARCHITECTURE // MOVEMENT SUMMARY</span>
              <span className="tag-badge cyan">FOUNDATION</span>
            </div>
            <p className="tech-card-body" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
              {CONCEPT_DATA.overview}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Empat Pilar Inti Movement
            </h3>
            <div className="grid-4col">
              {CONCEPT_DATA.corePillars.map((pillar, idx) => (
                <div key={pillar.title} className="tech-card">
                  <div className="tech-card-header">
                    <span>PILAR 0{idx + 1}</span>
                    <span className="status-dot active"></span>
                  </div>
                  <h4 className="tech-card-title">{pillar.title}</h4>
                  <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'vision-mission' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-emerald)' }}>
            <div className="tech-card-header">
              <span>VISI STRATEGIS</span>
              <span className="tag-badge emerald">LONG-TERM GOAL</span>
            </div>
            <p className="tech-card-body" style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              &quot;{CONCEPT_DATA.vision}&quot;
            </p>
          </div>

          <div className="grid-2col">
            <div className="tech-card">
              <div className="tech-card-header">
                <span>ENAM MISI EKSEKUSI</span>
                <span className="tag-badge">MISSION MATRIX</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {CONCEPT_DATA.missions.map((mission, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700, flexShrink: 0 }}>
                      0{idx + 1}.
                    </span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-card">
              <div className="tech-card-header">
                <span>BRAND POSITIONING</span>
                <span className="tag-badge cyan">STRATEGIC NICHE</span>
              </div>
              <h4 className="tech-card-title">Festival Energi Positif Berstandar Tinggi</h4>
              <p className="tech-card-body" style={{ lineHeight: '1.7' }}>
                {CONCEPT_DATA.positioning}
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                BENCHMARK: Menyatukan keseruan festival musik dan lari komunitas tanpa mengorbankan prosedur operasional keselamatan.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'audience' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="grid-2col">
            {CONCEPT_DATA.targetAudience.map((aud, idx) => (
              <div key={aud.segment} className="tech-card">
                <div className="tech-card-header">
                  <span>AUDIENS TIER 0{idx + 1}</span>
                  <span className="tag-badge">SEGMENT</span>
                </div>
                <h4 className="tech-card-title">{aud.segment}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <p>
                    <strong style={{ color: 'var(--text-primary)' }}>Profil:</strong>{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>{aud.profile}</span>
                  </p>
                  <p>
                    <strong style={{ color: 'var(--accent-cyan)' }}>Ekspektasi:</strong>{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>{aud.expectation}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-card" style={{ backgroundColor: 'var(--bg-subtle)', borderLeft: '3px solid var(--accent-amber)' }}>
            <div className="tech-card-header">
              <span>MANDATORI INKLUSIVITAS</span>
              <span className="tag-badge amber">SAFETY & RESPECT</span>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {CONCEPT_DATA.inclusivityNote}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

