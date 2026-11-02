import React from 'react';
import { SlideItem } from '../types';
import { SectionConcept } from './SectionConcept';
import { SectionBrand } from './SectionBrand';
import { SectionExperience } from './SectionExperience';
import { SectionSafety } from './SectionSafety';
import { SectionRoadmap } from './SectionRoadmap';
import { SectionPartners } from './SectionPartners';
import { SectionDigital } from './SectionDigital';
import { SectionEngineering } from './SectionEngineering';
import { SectionChecklist } from './SectionChecklist';
import { SectionSummary } from './SectionSummary';

interface SlideDeckViewProps {
  slides: SlideItem[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (idx: number) => void;
}

export const SlideDeckView: React.FC<SlideDeckViewProps> = ({
  slides,
  currentIndex,
  onPrev,
  onNext
}) => {
  const currentSlide = slides[currentIndex];
  const progressPercent = ((currentIndex + 1) / slides.length) * 100;

  const renderSlideContent = () => {
    switch (currentSlide.id) {
      case 'concept':
        return <SectionConcept />;
      case 'brand':
        return <SectionBrand />;
      case 'experience':
        return <SectionExperience />;
      case 'safety':
        return <SectionSafety />;
      case 'roadmap':
        return <SectionRoadmap />;
      case 'partners':
        return <SectionPartners />;
      case 'digital':
        return <SectionDigital />;
      case 'engineering':
        return <SectionEngineering />;
      case 'checklist':
        return <SectionChecklist />;
      case 'summary':
        return <SectionSummary />;
      default:
        return <div>Slide konten tidak ditemukan.</div>;
    }
  };

  return (
    <div className="slide-viewport" role="region" aria-label="Slide Presentasi Aktif">
      <div className="slide-card-main">
        <div className="slide-header-meta">
          <div>
            <div className="slide-badge-group">
              <span className="tag-badge cyan">SLIDE {currentSlide.number} / {slides.length.toString().padStart(2, '0')}</span>
              <span className="tag-badge">{currentSlide.category}</span>
              {currentSlide.badge && <span className="tag-badge amber">{currentSlide.badge}</span>}
            </div>
            <h1 className="slide-title" style={{ marginTop: '0.5rem' }}>
              {currentSlide.title}
            </h1>
            <p className="slide-subtitle">{currentSlide.subtitle}</p>
          </div>

          <div className="slide-stepper">
            <button
              type="button"
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="btn btn-icon"
              aria-label="Slide sebelumnya"
              title="Slide Sebelumnya (Panah Kiri)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="slide-progress-track" aria-hidden="true">
              <div
                className="slide-progress-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <button
              type="button"
              onClick={onNext}
              disabled={currentIndex === slides.length - 1}
              className="btn btn-icon"
              aria-label="Slide berikutnya"
              title="Slide Berikutnya (Panah Kanan atau Spasi)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div style={{ flex: 1 }}>{renderSlideContent()}</div>

        <div className="keyboard-hints">
          <span>NAVIGASI PAPAN KETIK:</span>
          <span>
            <kbd className="kbd-badge">&larr;</kbd> / <kbd className="kbd-badge">&rarr;</kbd> Ganti Slide
          </span>
          <span>
            <kbd className="kbd-badge">Spasi</kbd> Lanjut
          </span>
          <span>
            <kbd className="kbd-badge">1</kbd>-<kbd className="kbd-badge">9</kbd> Lompat Cepat
          </span>
        </div>
      </div>
    </div>
  );
};

