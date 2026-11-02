import React from 'react';
import { YOUTHON_METADATA } from '../data/youthonContent';

export const EditorialFooter: React.FC = () => {
  return (
    <footer className="editorial-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-title">{YOUTHON_METADATA.brand}</div>
            <p className="footer-brand-desc">
              Gerakan fun run yang menggabungkan olahraga, kurasi musik, hiburan, dan komunitas
              dalam satu pengalaman berenergi tinggi yang inklusif bagi generasi muda Indonesia.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', display: 'block', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                NAVIGASI KONSEP
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <li><a href="#konsep" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Ide Besar</a></li>
                <li><a href="#pilar" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Empat Pilar</a></li>
                <li><a href="#pengalaman" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Modul Aktivasi</a></li>
                <li><a href="#keselamatan" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Standar Keselamatan</a></li>
              </ul>
            </div>

            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-lime)', display: 'block', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                EKSPANSI & MITRA
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <li><a href="#roadmap" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Roadmap Nasional</a></li>
                <li><a href="#mitra" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Peluang Kolaborasi</a></li>
                <li><a href="#checklist" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Checklist Pra-Implementasi</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 {YOUTHON_METADATA.brand} : {YOUTHON_METADATA.tagline}. Dokumen Konsep Awal ({YOUTHON_METADATA.version}).
          </div>
          <div className="footer-crafted-by">
            Planned and crafted by{' '}
            <a
              href="https://creadin.co"
              target="_blank"
              rel="noopener noreferrer"
              className="creadin-link"
              aria-label="Planned and crafted by creadin.co (buka tab baru)"
            >
              <span>creadin.co</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ marginLeft: '4px', verticalAlign: '-1px' }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

