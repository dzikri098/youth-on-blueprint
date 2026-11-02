import React, { useState } from 'react';
import { ENGINEERING_PHASES, TECHNICAL_STANDARDS, KPI_METRICS } from '../data/pitchdeckData';

export const SectionEngineering: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'phases' | 'standards' | 'kpis'>('phases');

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>REKAYASA DIGITAL, PRINSIP TEKNIS & METRIK KEBERHASILAN</span>
        </div>
        <p>
          Pengembangan web mengikuti tahapan bertahap untuk memastikan stabilitas server saat penjualan tiket dibuka.
          Keamanan data pribadi peserta dan efisiensi waktu muat di jaringan seluler menjadi acuan utama rekayasa.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => setActiveTab('phases')}
          className={`btn ${activeTab === 'phases' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'phases'}
        >
          4 Fase Rekayasa Web
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('standards')}
          className={`btn ${activeTab === 'standards' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'standards'}
        >
          Standar Teknis & Keamanan
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('kpis')}
          className={`btn ${activeTab === 'kpis' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'kpis'}
        >
          Matriks Indikator Keberhasilan (KPI)
        </button>
      </div>

      {activeTab === 'phases' && (
        <div className="grid-2col">
          {ENGINEERING_PHASES.map((ph, idx) => (
            <div key={ph.phase} className="tech-card" style={{ borderLeft: idx === 0 ? '3px solid var(--accent-cyan)' : '1px solid var(--border-color)' }}>
              <div className="tech-card-header">
                <span>{ph.phase.toUpperCase()}</span>
                <span className={`tag-badge ${idx === 0 ? 'cyan' : ''}`}>
                  {idx === 0 ? 'ACTIVE TARGET' : 'PLANNED'}
                </span>
              </div>
              <h4 className="tech-card-title">{ph.name}</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                Tujuan: {ph.objective}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                {ph.deliverables.map((del, dIdx) => (
                  <li key={dIdx} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>&bull;</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'standards' && (
        <div className="grid-2col">
          {TECHNICAL_STANDARDS.map((std, idx) => (
            <div key={std.title} className="tech-card">
              <div className="tech-card-header">
                <span>STANDAR 0{idx + 1}</span>
                <span className="tag-badge emerald">ENGINEERING RULE</span>
              </div>
              <h4 className="tech-card-title" style={{ fontSize: '1.0625rem' }}>
                {std.title}
              </h4>
              <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'kpis' && (
        <div>
          <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Matriks Key Performance Indicators (KPI)
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th>Metrik Pengukuran</th>
                  <th>Tujuan Evaluasi</th>
                  <th>Aturan Penetapan Baseline</th>
                </tr>
              </thead>
              <tbody>
                {KPI_METRICS.map((k) => (
                  <tr key={k.metric}>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      {k.category}
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {k.metric}
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>
                      {k.purpose}
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                      {k.baselineRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </article>
  );
};

