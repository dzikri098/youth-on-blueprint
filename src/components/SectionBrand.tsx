import React, { useState } from 'react';
import { BRAND_DATA } from '../data/pitchdeckData';

export const SectionBrand: React.FC = () => {
  const [selectedTrait, setSelectedTrait] = useState<number>(0);

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>EKSPLORASI IDENTITAS: DALAM PENGEMBANGAN</span>
        </div>
        <p>
          Identitas visual final, palet warna baku, logo, serta headline utama berada pada tahap perumusan konsep kreatif.
          Eksplorasi berikut menjadi panduan arah kepribadian brand yang dapat diuji bersama pemangku kepentingan.
        </p>
      </div>

      <div className="grid-2col" style={{ marginBottom: '1.5rem' }}>
        <div className="tech-card">
          <div className="tech-card-header">
            <span>BRAND PERSONALITY MATRIX // 7 PILARS</span>
            <span className="tag-badge cyan">DNA</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0 1rem 0' }}>
            {BRAND_DATA.personalityTraits.map((trait, idx) => (
              <button
                key={trait.name}
                type="button"
                onClick={() => setSelectedTrait(idx)}
                className={`btn ${selectedTrait === idx ? 'btn-active' : ''}`}
                style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem', minHeight: '36px' }}
                aria-pressed={selectedTrait === idx}
              >
                {trait.name}
              </button>
            ))}
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
              KARAKTER TERPILIH:
            </span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.25rem 0' }}>
              {BRAND_DATA.personalityTraits[selectedTrait].name}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              {BRAND_DATA.personalityTraits[selectedTrait].desc}
            </p>
          </div>
        </div>

        <div className="tech-card">
          <div className="tech-card-header">
            <span>ARAH KOMUNIKASI & NADA SUARA</span>
            <span className="tag-badge">VOICE & TONE</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {BRAND_DATA.communicationDirection.map((dir, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>[0{idx + 1}]</span>
                <span>{dir}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-amber)' }}>
        <div className="tech-card-header">
          <span>EKSPLORASI PESAN BRAND // PENDING VALIDATION</span>
          <span className="tag-badge amber">PROPOSAL AWAL</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              HEADLINE EKSPLORASI UTAMA:
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
              &quot;{BRAND_DATA.messageExploration.headlineCandidate}&quot;
            </h3>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              PESAN PENDUKUNG (SUPPORTING COPY):
            </span>
            <p style={{ fontSize: '1.0625rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              &quot;{BRAND_DATA.messageExploration.supportingMessage}&quot;
            </p>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
            {BRAND_DATA.messageExploration.disclaimer}
          </p>
        </div>
      </div>
    </article>
  );
};

