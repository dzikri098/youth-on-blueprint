import React, { useState } from 'react';
import { PARTNERS_DATA } from '../data/pitchdeckData';
import { PartnerCategory } from '../types';
import { Modal } from './Modal';

export const SectionPartners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerCategory | null>(null);

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>PELUANG KOLABORASI & EKOSISTEM SPONSORSHIP</span>
        </div>
        <p>
          YOUTHON membuka peluang kemitraan berbasis nilai nyata bagi peserta lari dan mitra.
          Setiap kerja sama dirancang saling menguntungkan dengan batasan hak dan kewajiban transparan.
          Saat ini belum ada sponsor resmi yang diklaim sebagai fakta final.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Delapan Sektor Kemitraan Strategis
        </h3>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
          [PILIH KARTU UNTUK TELAAH VALUE PROPOSITION]
        </span>
      </div>

      <div className="grid-2col">
        {PARTNERS_DATA.map((p) => (
          <div
            key={p.id}
            className="tech-card"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedPartner(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPartner(p);
              }
            }}
            aria-label={`Buka rincian kemitraan sektor ${p.sector}`}
          >
            <div className="tech-card-header">
              <span>{p.id.toUpperCase()}</span>
              <span className="tag-badge cyan">OPEN FOR DIALOGUE</span>
            </div>
            <h4 className="tech-card-title">{p.sector}</h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
              Contoh Mitra: {p.examples}
            </p>
            <p className="tech-card-body" style={{ fontSize: '0.875rem' }}>
              <strong>Manfaat Pelari:</strong> {p.valueForRunners}
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>Ruang Lingkup</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Buka Matriks &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedPartner !== null}
        onClose={() => setSelectedPartner(null)}
        title={selectedPartner ? `Matriks Kemitraan: ${selectedPartner.sector}` : 'Detail Kemitraan'}
      >
        {selectedPartner && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>CONTOH MITRA POTENSIAL:</span>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 600 }}>{selectedPartner.examples}</p>
            </div>

            <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                VALUE UNTUK PESERTA (RUNNERS VALUE)
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {selectedPartner.valueForRunners}
              </p>
            </div>

            <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-emerald)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                VALUE UNTUK BRAND (BRAND IMPACT & ROI)
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {selectedPartner.valueForBrand}
              </p>
            </div>

            <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-amber)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                RUANG LINGKUP & BENTUK KERJA SAMA
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {selectedPartner.scope}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="btn btn-primary"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </Modal>
    </article>
  );
};

