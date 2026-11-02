import React from 'react';
import { ViewMode, ThemeMode, SlideItem } from '../types';
import { PITCH_METADATA } from '../data/pitchdeckData';

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  slides: SlideItem[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onViewModeChange,
  theme,
  onThemeToggle,
  slides,
  currentSlideIndex,
  onSelectSlide,
  onToggleFullscreen,
  isFullscreen
}) => {
  return (
    <>
      <div className="telemetry-bar">
        <div className="telemetry-group">
          <span className="telemetry-item">
            <span className="status-dot active"></span>
            <span>SYSTEM: {PITCH_METADATA.brandName} CORE ARCHIVE</span>
          </span>
          <span className="telemetry-item">
            <span>DOC-REV: {PITCH_METADATA.version}</span>
          </span>
          <span className="telemetry-item">
            <span>ORIGIN: {PITCH_METADATA.originChapter}</span>
          </span>
        </div>
        <div className="telemetry-group">
          <span className="telemetry-item">
            <span className="status-dot warning"></span>
            <span>STATUS: {PITCH_METADATA.documentStatus}</span>
          </span>
        </div>
      </div>

      <header className="main-header" role="banner">
        <div className="brand-wrapper">
          <div className="brand-logo-text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>{PITCH_METADATA.brandName}</span>
          </div>
          <span className="brand-badge">PITCH DECK</span>
        </div>

        <div className="nav-actions">
          {viewMode === 'slides' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label htmlFor="slide-select" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
                Pilih Slide
              </label>
              <select
                id="slide-select"
                value={currentSlideIndex}
                onChange={(e) => onSelectSlide(Number(e.target.value))}
                className="btn"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}
                aria-label="Navigasi lompat ke slide tertentu"
              >
                {slides.map((slide, idx) => (
                  <option key={slide.id} value={idx}>
                    {slide.number}. {slide.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--bg-subtle)', padding: '2px', borderRadius: '6px' }}>
            <button
              type="button"
              onClick={() => onViewModeChange('slides')}
              className={`btn ${viewMode === 'slides' ? 'btn-active' : ''}`}
              aria-pressed={viewMode === 'slides'}
              aria-label="Tampilan mode slide presentasi"
              style={{ minHeight: '38px', padding: '0.25rem 0.625rem' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span>Slide Deck</span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('document')}
              className={`btn ${viewMode === 'document' ? 'btn-active' : ''}`}
              aria-pressed={viewMode === 'document'}
              aria-label="Tampilan mode dokumen teks penuh"
              style={{ minHeight: '38px', padding: '0.25rem 0.625rem' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Dokumen Lengkap</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleFullscreen}
            className="btn btn-icon"
            aria-label={isFullscreen ? 'Keluar dari layar penuh' : 'Masuk ke mode layar penuh'}
            title={isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh'}
          >
            {isFullscreen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={onThemeToggle}
            className="btn btn-icon"
            aria-label={`Ubah ke mode ${theme === 'dark' ? 'terang' : 'gelap'}`}
            title={`Mode ${theme === 'dark' ? 'Terang' : 'Gelap'}`}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </header>
    </>
  );
};

