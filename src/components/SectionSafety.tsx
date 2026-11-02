import React from 'react';
import { SAFETY_DATA } from '../data/pitchdeckData';

export const SectionSafety: React.FC = () => {
  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <span>PRINSIP PENYELENGGARAAN & KESELAMATAN (SAFETY FIRST)</span>
        </div>
        <p>
          Keseruan dan kemeriahan event wajib berjalan seiring dengan penyelenggaraan yang bertanggung jawab.
          Keselamatan peserta, marshal rute, petugas medis, dan warga sekitar adalah prioritas nomor satu.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          Enam Protokol Keselamatan Baku
        </h3>
        <div className="grid-2col">
          {SAFETY_DATA.corePrinciples.map((item, idx) => (
            <div key={item.title} className="tech-card" style={{ borderLeft: '3px solid var(--accent-emerald)' }}>
              <div className="tech-card-header">
                <span>SOP PROSEDUR 0{idx + 1}</span>
                <span className="tag-badge emerald">STANDAR OPERASI</span>
              </div>
              <h4 className="tech-card-title">{item.title}</h4>
              <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          Panduan Terminologi & Regulasi Peserta
        </h3>
        <div className="grid-2col">
          {SAFETY_DATA.raceRulesClarification.map((rule) => (
            <div key={rule.term} className="tech-card">
              <div className="tech-card-header">
                <span>KETENTUAN REGULASI</span>
                <span className="tag-badge cyan">RACE RULES</span>
              </div>
              <h4 className="tech-card-title" style={{ color: 'var(--text-primary)' }}>
                {rule.term}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong>Definisi:</strong> {rule.meaning}
              </p>
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.625rem 0.75rem', borderRadius: '4px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                <strong>Penerapan:</strong> {rule.application}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

