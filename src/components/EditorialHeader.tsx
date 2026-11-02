import React, { useState, useEffect, useRef } from 'react';
import { YOUTHON_METADATA, PRESENTATION_SLIDES } from '../data/youthonContent';

interface EditorialHeaderProps {
  onOpenPresentation: () => void;
  onOpenTree: () => void;
  onOpenBrand: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  onOpenPresentation,
  onOpenTree,
  onOpenBrand
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const popoverRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'konsep', label: 'Konsep' },
    { id: 'pilar', label: 'Pilar' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'keselamatan', label: 'Keselamatan' },
    { id: 'organisasi', label: 'Tim & PIC' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'mitra', label: 'Kemitraan' },
    { id: 'checklist', label: 'Checklist' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['konsep', 'pilar', 'pengalaman', 'keselamatan', 'organisasi', 'roadmap', 'mitra', 'checklist'];
      const scrollY = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPresentation = () => {
    setIsOpen(false);
    onOpenPresentation();
  };

  return (
    <>
      {/* Backdrop overlay when popover is open */}
      {isOpen && (
        <div
          className="floating-menu-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Bottom Sticky Dock */}
      <nav
        className="floating-bottom-dock"
        aria-label="Navigasi Mengambang YOUTHON"
      >
        {/* Expanded Popover Menu */}
        {isOpen && (
          <div
            ref={popoverRef}
            className="floating-menu-popover"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Utama YOUTHON"
          >
            {/* Popover Header */}
            <div className="floating-menu-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'var(--color-green-deep)',
                    color: 'var(--accent-lime)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 900,
                    fontSize: '1rem'
                  }}
                >
                  Y
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '1rem', color: 'var(--color-green-text)', lineHeight: 1.1 }}>
                    {YOUTHON_METADATA.brand}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-green-muted)', fontWeight: 500 }}>
                    {YOUTHON_METADATA.tagline}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem' }}>
                  Draft v1.0
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '32px', height: '32px', minHeight: '32px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Tutup Menu"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links Grid */}
            <div className="floating-menu-links-grid" role="menu">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`floating-menu-link-btn ${isActive ? 'active' : ''}`}
                    role="menuitem"
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span>{item.label}</span>
                    <span className="floating-link-dot" aria-hidden="true"></span>
                  </button>
                );
              })}
            </div>

            {/* Popover Footer : Brand Concept, Tree Page & Mode B Presentation CTA */}
            <div className="floating-menu-footer">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenBrand();
                }}
                className="btn-editorial btn-secondary-editorial"
                style={{ width: '100%', minHeight: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', backgroundColor: '#ffffff' }}
                aria-label="Buka Halaman Brand Konsep YOUTHON"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Brand Concept</span>
                <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.45rem', backgroundColor: 'var(--color-green-deep)', color: 'var(--accent-lime)' }}>
                  Manifesto
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenTree();
                }}
                className="btn-editorial btn-secondary-editorial"
                style={{ width: '100%', minHeight: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', backgroundColor: '#ffffff' }}
                aria-label="Buka Halaman Diagram Pohon Hierarkis"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="5" r="3"></circle>
                  <line x1="12" y1="8" x2="12" y2="14"></line>
                  <path d="M5 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  <path d="M19 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  <path d="M12 14l-7 2"></path>
                  <path d="M12 14l7 2"></path>
                </svg>
                <span>Diagram Pohon Hierarkis</span>
                <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.45rem' }}>
                  Peta Data
                </span>
              </button>

              <button
                type="button"
                onClick={handleOpenPresentation}
                className="btn-editorial btn-primary-editorial"
                style={{ width: '100%', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem' }}
                aria-label="Buka Mode Presentasi Interaktif"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span>Lihat Presentasi</span>
                <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0.45rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', color: '#ffffff', fontWeight: 700 }}>
                  {PRESENTATION_SLIDES.length} Slide
                </span>
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6875rem', color: 'var(--color-green-muted)', fontFamily: 'var(--font-mono)', padding: '0 0.25rem' }}>
                <span>Shortcut Cepat: Tekan [P]</span>
                <a href="#hero" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-green-deep)', textDecoration: 'none', fontWeight: 600 }}>
                  Kembali ke Atas &uarr;
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 1 Button Logo YOUTHON (Floating Bottom Sticky Trigger) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`floating-brand-btn ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi YOUTHON'}
          aria-expanded={isOpen}
          title={isOpen ? 'Tutup Menu' : 'Menu Navigasi YOUTHON'}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <span className="floating-brand-logo-text" aria-hidden="true">
              Y
            </span>
          )}
        </button>
      </nav>
    </>
  );
};
