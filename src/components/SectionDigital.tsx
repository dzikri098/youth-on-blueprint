import React, { useState } from 'react';
import { SITEMAP_DATA, LANDING_PAGE_SECTIONS } from '../data/pitchdeckData';

export const SectionDigital: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'landing-page'>('landing-page');
  const [selectedLandingStep, setSelectedLandingStep] = useState<number>(0);

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>ARSITEKTUR DIGITAL & BLUEPRINT LANDING PAGE</span>
        </div>
        <p>
          Website resmi bertindak sebagai pusat kebenaran informasi acara, registrasi peserta, dan etalase komunitas.
          Pengembangan diinisiasi dari landing page berkonversi tinggi sebelum modul platform event terpadu dibuka.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button
          type="button"
          onClick={() => setActiveTab('landing-page')}
          className={`btn ${activeTab === 'landing-page' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'landing-page'}
        >
          Rancangan 10 Seksi Landing Page
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('sitemap')}
          className={`btn ${activeTab === 'sitemap' ? 'btn-active' : ''}`}
          aria-pressed={activeTab === 'sitemap'}
        >
          Struktur Sitemap Lengkap
        </button>
      </div>

      {activeTab === 'landing-page' && (
        <div className="grid-2col">
          <div>
            <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Alur Urutan Seksi Landing Page
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {LANDING_PAGE_SECTIONS.map((sec, idx) => (
                <button
                  key={sec.step}
                  type="button"
                  onClick={() => setSelectedLandingStep(idx)}
                  className={`btn ${selectedLandingStep === idx ? 'btn-active' : ''}`}
                  style={{ justifyContent: 'flex-start', textAlign: 'left', minHeight: '44px' }}
                  aria-pressed={selectedLandingStep === idx}
                >
                  <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', width: '32px' }}>
                    #{sec.step.toString().padStart(2, '0')}
                  </span>
                  <span style={{ fontWeight: 600 }}>{sec.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
            <div className="tech-card-header">
              <span>INSPEKSI SEKSI #{LANDING_PAGE_SECTIONS[selectedLandingStep].step.toString().padStart(2, '0')}</span>
              <span className="tag-badge cyan">WIREFRAME SPEC</span>
            </div>
            <h4 className="tech-card-title" style={{ fontSize: '1.25rem' }}>
              {LANDING_PAGE_SECTIONS[selectedLandingStep].name}
            </h4>
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                PERAN SEKSI DALAM FUNNEL:
              </span>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9375rem' }}>
                {LANDING_PAGE_SECTIONS[selectedLandingStep].wireframeRole}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                KOMPONEN & ISI KONTEN:
              </span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6', marginTop: '0.25rem' }}>
                {LANDING_PAGE_SECTIONS[selectedLandingStep].items}
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              CATATAN INTEGRITAS: Informasi yang belum final (seperti sponsor atau harga tiket) ditampilkan dengan label placeholder yang jujur tanpa memalsukan fakta.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sitemap' && (
        <div>
          <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Matriks Rute & Hierarki Sitemap
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Prioritas</th>
                  <th>Halaman</th>
                  <th>Rute URL</th>
                  <th>Fungsi Utama</th>
                  <th>Cakupan Awal</th>
                </tr>
              </thead>
              <tbody>
                {SITEMAP_DATA.map((item) => (
                  <tr key={item.route}>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      {item.priority}
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item.title}
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                      {item.route}
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>
                      {item.role}
                    </td>
                    <td>
                      <span className={`tag-badge ${item.isInitialScope ? 'emerald' : 'amber'}`}>
                        {item.isInitialScope ? 'Phase 1-2' : 'Future Roadmap'}
                      </span>
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

