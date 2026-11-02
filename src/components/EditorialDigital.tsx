import React, { useState } from 'react';
import { SITEMAP_DATA, LANDING_PAGE_SECTIONS } from '../data/pitchdeckData';

export const EditorialDigital: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'landing-page' | 'sitemap'>('landing-page');
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section className="editorial-section" aria-labelledby="heading-digital">
      <div className="editorial-container">
        <div className="section-header-block">
          <span className="section-eyebrow">12 / ARSITEKTUR DIGITAL</span>
          <h2 id="heading-digital" className="section-headline">
            Website resmi dan blueprint Landing Page.
          </h2>
          <p className="section-lead">
            Platform web bertindak sebagai pusat kebenaran informasi resmi, alur registrasi peserta mandiri,
            serta wadah dokumentasi komunitas yang terukur.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
          <button
            type="button"
            onClick={() => setActiveTab('landing-page')}
            className={`btn-editorial ${activeTab === 'landing-page' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeTab === 'landing-page'}
          >
            Alur 10 Seksi Landing Page
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sitemap')}
            className={`btn-editorial ${activeTab === 'sitemap' ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            aria-pressed={activeTab === 'sitemap'}
          >
            Struktur Rute Sitemap
          </button>
        </div>

        {activeTab === 'landing-page' && (
          <div className="editorial-split-grid">
            <div>
              <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', display: 'block', marginBottom: '0.75rem' }}>
                URUTAN SEKSI LANDING PAGE : PILIH UNTUK AUDIT WIREFRAME
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {LANDING_PAGE_SECTIONS.map((sec, idx) => (
                  <button
                    key={sec.step}
                    type="button"
                    onClick={() => setSelectedStep(idx)}
                    className={`btn-editorial ${selectedStep === idx ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
                    style={{ justifyContent: 'flex-start', textAlign: 'left', borderRadius: '8px', minHeight: '44px', padding: '0.625rem 1rem' }}
                    aria-pressed={selectedStep === idx}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', width: '32px', color: selectedStep === idx ? 'var(--accent-lime)' : 'var(--color-green-deep)' }}>
                      #{sec.step.toString().padStart(2, '0')}
                    </span>
                    <span>{sec.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="editorial-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-green-deep)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="status-pill">Seksi #{LANDING_PAGE_SECTIONS[selectedStep].step.toString().padStart(2, '0')}</span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)' }}>
                  WIREFRAME SPEC
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '1rem' }}>
                {LANDING_PAGE_SECTIONS[selectedStep].name}
              </h3>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  PERAN STRATEGIS DALAM FUNNEL:
                </span>
                <p style={{ fontWeight: 700, color: 'var(--color-green-deep)', fontSize: '1rem' }}>
                  {LANDING_PAGE_SECTIONS[selectedStep].wireframeRole}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  KOMPONEN DAN MUATAN KONTEN:
                </span>
                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--color-green-muted)' }}>
                  {LANDING_PAGE_SECTIONS[selectedStep].items}
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                Informasi yang belum final (tanggal, tiket, sponsor) ditampilkan dengan label penampung jujur tanpa asumsi fiktif.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sitemap' && (
          <div style={{ overflowX: 'auto', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid var(--border-light)', padding: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--color-green-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Prioritas</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Halaman</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Rute Usulan</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Fungsi Utama</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Cakupan</th>
                </tr>
              </thead>
              <tbody>
                {SITEMAP_DATA.map((item) => (
                  <tr key={item.route} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-green-deep)' }}>
                      {item.priority}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-green-text)' }}>
                      {item.title}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)' }}>
                      {item.route}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-green-muted)' }}>
                      {item.role}
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span className="status-pill">{item.isInitialScope ? 'Fase 1-2' : 'Roadmap'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

