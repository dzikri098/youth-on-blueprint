import React, { useEffect, useRef, useState, useCallback } from 'react';
import { PRESENTATION_SLIDES, PresentationSlide } from '../data/youthonContent';
import { YOUTHON_METADATA } from '../data/youthonContent';
import {
  IconZap,
  IconLightbulb,
  IconUsers,
  IconRocket,
  IconCheckCircle,
  IconRun,
  IconCompass,
  IconTarget,
  IconDiamond
} from './Icons';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlideIndex?: number;
}

export const InteractivePresentationModal: React.FC<PresentationModalProps> = ({
  isOpen,
  onClose,
  initialSlideIndex = 0
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(initialSlideIndex);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showPitchNotes, setShowPitchNotes] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIdx(initialSlideIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialSlideIndex]);

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => Math.min(PRESENTATION_SLIDES.length - 1, prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => Math.max(0, prev - 1));
  }, []);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setShowPitchNotes((prev) => !prev);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentIdx(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentIdx(PRESENTATION_SLIDES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  const slide = PRESENTATION_SLIDES[currentIdx];
  const progressPercent = ((currentIdx + 1) / PRESENTATION_SLIDES.length) * 100;

  // Custom Keynote Renderers per Slide Layout
  const renderSlideBody = (s: PresentationSlide) => {
    // 1. Flagship Split-Hero Layout (Slide 01)
    if (s.layout === 'split-hero') {
      return (
        <div className="pres-split-hero-container">
          {/* Left Column: Bold Storytelling & Positioning */}
          <div className="pres-hero-left">
            <div className="pres-slide-eyebrow">
              <span>TOPIK {s.slideNumber.toString().padStart(2, '0')}</span>
              <span>&bull;</span>
              <span>{s.title}</span>
              {s.accentBadge && (
                <>
                  <span>&bull;</span>
                  <span className="status-pill" style={{ padding: '0.15rem 0.5rem', fontSize: '0.6875rem' }}>
                    {s.accentBadge}
                  </span>
                </>
              )}
            </div>

            <h2 className="pres-slide-headline" style={{ marginBottom: '0.875rem' }}>
              Lebih dari lari.<br />
              <span className="pres-highlight-lime">Tentang bergerak</span> bersama.
            </h2>

            <p className="pres-slide-lead" style={{ marginBottom: '1.25rem' }}>
              {s.lead}
            </p>

            <div className="pres-dna-tag-list">
              <span className="pres-dna-tag-pill accent">
                <IconRun size={13} />
                <span>Format: 3K & 5K Fun Run</span>
              </span>
              <span className="pres-dna-tag-pill">
                <IconUsers size={13} />
                <span>Target Awal: 2.000 - 3.000 Peserta</span>
              </span>
              <span className="pres-dna-tag-pill">
                <IconCompass size={13} />
                <span>Chapter 01: Jawa Barat</span>
              </span>
              <span className="pres-dna-tag-pill">
                <IconZap size={13} />
                <span>Durasi: 1 Hari Festival</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3 Rich Bento Cards */}
          <div className="pres-bento-stack">
            <div className="pres-bento-card">
              <div className="pres-bento-icon-box">
                <IconUsers size={20} />
              </div>
              <div>
                <span className="pres-bento-badge">ZERO CUT-OFF TIME</span>
                <h3 className="pres-bento-title">Inklusif Penuh</h3>
                <p className="pres-bento-desc">
                  Tidak berorientasi pada persaingan waktu semata. Pemula, keluarga, dan pelari santai disambut dengan rasa aman dan hangat.
                </p>
              </div>
            </div>

            <div className="pres-bento-card">
              <div className="pres-bento-icon-box">
                <IconZap size={20} />
              </div>
              <div>
                <span className="pres-bento-badge">SIGNATURE RHYTHM RUN</span>
                <h3 className="pres-bento-title">Festival Energi</h3>
                <p className="pres-bento-desc">
                  Menggabungkan musik live drumline di lintasan rute, mist tunnel pendingin, cheer zone, dan selebrasi DJ meriah di garis finis.
                </p>
              </div>
            </div>

            <div className="pres-bento-card">
              <div className="pres-bento-icon-box">
                <IconRocket size={20} />
              </div>
              <div>
                <span className="pres-bento-badge">MULTI-CITY EXPANSION</span>
                <h3 className="pres-bento-title">Skala Nasional</h3>
                <p className="pres-bento-desc">
                  Bermula dari inisiasi pilot Chapter 01 di Jawa Barat menuju tur ke kota-kota strategis di seluruh Indonesia bersama jejaring komunitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 2. Pillars 4-Column Layout (Slide 03)
    if (s.layout === 'pillars') {
      const pillarIcons = [<IconCompass size={22} />, <IconZap size={22} />, <IconUsers size={22} />, <IconRun size={22} />];
      return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="pres-slide-eyebrow">
            <span>TOPIK {s.slideNumber.toString().padStart(2, '0')}</span>
            <span>&bull;</span>
            <span>{s.title}</span>
          </div>
          <h2 className="pres-slide-headline">{s.headline}</h2>
          <p className="pres-slide-lead">{s.lead}</p>

          <div className="pres-pillars-grid" style={{ marginTop: 'auto' }}>
            {s.keyPoints?.map((pt, idx) => (
              <div key={idx} className="pres-pillar-hero-card">
                <div className="pres-pillar-hero-num">
                  <span>0{idx + 1}</span>
                  <span style={{ color: 'var(--color-green-deep)', opacity: 0.85 }}>
                    {pillarIcons[idx] || <IconDiamond size={20} />}
                  </span>
                </div>
                <h3 className="pres-pillar-hero-title">{pt.title}</h3>
                <p className="pres-pillar-hero-desc">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 3. Roadmap Timeline Stepper (Slide 11)
    if (s.layout === 'timeline') {
      const roadmapWeeks = [
        { week: 'Minggu 1-2', label: 'Foundation & Feasibility' },
        { week: 'Minggu 3-4', label: 'Venue, Safety & Partner' },
        { week: 'Minggu 5-7', label: 'Brand & Registration' },
        { week: 'Minggu 8-10', label: 'Production & Activation' },
        { week: 'Minggu 11-12', label: 'Final Readiness' },
        { week: 'Hari H + 1-14d', label: 'Execution & Evaluation' }
      ];

      return (
        <div className="pres-timeline-container">
          <div>
            <div className="pres-slide-eyebrow">
              <span>TOPIK {s.slideNumber.toString().padStart(2, '0')}</span>
              <span>&bull;</span>
              <span>{s.title}</span>
            </div>
            <h2 className="pres-slide-headline">{s.headline}</h2>
            <p className="pres-slide-lead">{s.lead}</p>
          </div>

          <div className="pres-timeline-track" style={{ marginTop: 'auto' }}>
            {roadmapWeeks.map((st, idx) => (
              <div key={idx} className="pres-timeline-step-card">
                <span className="pres-timeline-step-num">0{idx + 1}</span>
                <span className="pres-timeline-step-week">{st.week}</span>
                <div className="pres-timeline-step-title">{st.label}</div>
                <p className="pres-timeline-step-desc">
                  {s.keyPoints && s.keyPoints[idx] ? s.keyPoints[idx].desc : 'Tahapan operasional terukur dengan kriteria lolos verifikasi.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 4. Checklist & Security Readiness (Slide 15)
    if (s.layout === 'checklist') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="pres-slide-eyebrow">
            <span>TOPIK {s.slideNumber.toString().padStart(2, '0')}</span>
            <span>&bull;</span>
            <span>{s.title}</span>
          </div>
          <h2 className="pres-slide-headline">{s.headline}</h2>
          <p className="pres-slide-lead">{s.lead}</p>

          <div className="pres-checklist-grid" style={{ marginTop: 'auto' }}>
            {s.keyPoints?.map((pt, idx) => (
              <div key={idx} className="pres-checklist-card">
                <div className="pres-checklist-icon-box">
                  <IconCheckCircle size={16} />
                </div>
                <div>
                  <h3 className="pres-checklist-title">{pt.title}</h3>
                  <p className="pres-checklist-desc">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 5. Next Steps Call to Action (Slide 17)
    if (s.layout === 'next-steps') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="pres-slide-eyebrow">
            <span>TOPIK {s.slideNumber.toString().padStart(2, '0')}</span>
            <span>&bull;</span>
            <span>{s.title}</span>
          </div>
          <h2 className="pres-slide-headline">{s.headline}</h2>
          <p className="pres-slide-lead">{s.lead}</p>

          <div className="pres-cta-card" style={{ marginTop: 'auto' }}>
            <h3 className="pres-cta-title">Siap Menyalakan Energi Pemuda Bersama YOUTHON?</h3>
            <p style={{ margin: 0, fontSize: '0.9375rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '720px' }}>
              Inisiasi Chapter 01 Jawa Barat dirancang sebagai showcase standar gerakan nasional. Kami membuka ruang kemitraan bagi brand, pemerintah daerah, dan komunitas kreatif.
            </p>

            <div className="pres-cta-grid">
              <div className="pres-cta-step">
                <span className="pres-cta-step-num">FASE A</span>
                <span className="pres-cta-step-title">Kemitraan Sponsor</span>
                <p className="pres-cta-step-desc">Penguncian tiering Title / Official Sponsor dan pemenuhan hak aktivasi rute.</p>
              </div>
              <div className="pres-cta-step">
                <span className="pres-cta-step-num">FASE B</span>
                <span className="pres-cta-step-title">Perizinan & Rute</span>
                <p className="pres-cta-step-desc">Simulasi lapangan, rekomendasi polantas, dan pengesahan venue steril.</p>
              </div>
              <div className="pres-cta-step">
                <span className="pres-cta-step-num">FASE C</span>
                <span className="pres-cta-step-title">Kampanye Tiket</span>
                <p className="pres-cta-step-desc">Peluncuran kanal registrasi resmi dan aktivasi komunitas lari kampus.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 6. Default Dynamic Grid (cards-grid, comparison, statement)
    const isTwoCol = s.keyPoints && s.keyPoints.length <= 2;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="pres-slide-eyebrow">
          <span>TOPIK {s.slideNumber.toString().padStart(2, '0')}</span>
          <span>&bull;</span>
          <span>{s.title}</span>
          {s.accentBadge && (
            <>
              <span>&bull;</span>
              <span className="status-pill" style={{ padding: '0.15rem 0.5rem', fontSize: '0.7rem' }}>
                {s.accentBadge}
              </span>
            </>
          )}
        </div>

        <h2 className="pres-slide-headline">{s.headline}</h2>
        <p className="pres-slide-lead">{s.lead}</p>

        {s.keyPoints && (
          <div className={isTwoCol ? 'pres-grid-2' : 'pres-grid-3'} style={{ marginTop: 'auto' }}>
            {s.keyPoints.map((pt, idx) => (
              <div key={idx} className="pres-point-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  {pt.badge ? (
                    <span className="pres-point-badge">{pt.badge}</span>
                  ) : (
                    <span className="pres-point-badge">POIN 0{idx + 1}</span>
                  )}
                  <span style={{ color: 'var(--color-green-deep)', opacity: 0.6 }}>
                    <IconTarget size={14} />
                  </span>
                </div>
                <h3 className="pres-point-title">{pt.title}</h3>
                <p className="pres-point-desc">{pt.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="presentation-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Presentasi Interaktif YOUTHON"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="presentation-inner-canvas">
        {/* Header */}
        <div className="pres-header">
          <div className="pres-header-left">
            <div className="pres-brand-logo">
              <span style={{ width: '22px', height: '22px', borderRadius: '4px', backgroundColor: 'var(--color-green-deep)', color: 'var(--accent-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                Y
              </span>
              <span>{YOUTHON_METADATA.brand}</span>
            </div>
            <span className="pres-category-badge">{slide.category}</span>
          </div>

          <div className="pres-header-right">
            {/* Toggle Speaker Notes */}
            <button
              type="button"
              onClick={() => setShowPitchNotes((prev) => !prev)}
              className={`pres-btn-icon ${showPitchNotes ? 'active' : ''}`}
              style={{ width: 'auto', padding: '0 0.6rem', fontSize: '0.75rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              title="Tampilkan catatan pemaparan presentasi (Shortcut: N)"
            >
              <IconLightbulb size={13} />
              <span>{showPitchNotes ? 'Tutup Catatan' : 'Catatan Pitch'}</span>
            </button>

            <span className="pres-counter-badge">
              Slide {slide.slideNumber.toString().padStart(2, '0')} / {PRESENTATION_SLIDES.length.toString().padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={handleToggleFullscreen}
              className="pres-btn-icon"
              aria-label={isFullscreen ? 'Keluar dari layar penuh' : 'Layar penuh'}
              title={isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {isFullscreen ? (
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                ) : (
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                )}
              </svg>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="pres-btn-icon"
              aria-label="Tutup presentasi (Esc)"
              title="Tutup (Esc)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Slide Viewport with Animated Key & Stylized Number Watermark */}
        <div key={slide.id} className="pres-slide-viewport">
            <div className="pres-slide-watermark" aria-hidden="true">
              {slide.slideNumber.toString().padStart(2, '0')}
            </div>
            {renderSlideBody(slide)}
          </div>

          {/* Presenter Speaker Notes Drawer */}
          {showPitchNotes && (
            <div className="pres-notes-drawer" role="complementary" aria-label="Catatan Pemaparan Pitch">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: 'var(--color-green-deep)', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.6875rem' }}>
                <IconZap size={12} />
                <span>PANDUAN PEMAPARAN PITCHING (SLIDE {slide.slideNumber} : {slide.title})</span>
              </div>
              <p style={{ margin: 0, lineHeight: 1.55, color: 'var(--color-green-text)', fontSize: '0.8125rem' }}>
                <strong>Poin Kunci Presenter:</strong> {slide.headline} Sampaikan bahwa YOUTHON bukan sekadar lomba lari satu hari, melainkan ruang bergerak inklusif bagi pemuda yang memadukan festival musik dan komunitas. Tekankan bahwa target awal 2.000 - 3.000 peserta adalah perencanaan terukur dengan rute steril berizin dan standar keselamatan medis prima.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="pres-footer">
            <div className="pres-keyboard-legend">
              <span>Navigasi:</span>
              <span><kbd className="pres-kbd">&larr;</kbd> / <kbd className="pres-kbd">&rarr;</kbd> Slide</span>
              <span><kbd className="pres-kbd">Spasi</kbd> Lanjut</span>
              <span><kbd className="pres-kbd">N</kbd> Catatan</span>
              <span><kbd className="pres-kbd">Esc</kbd> Keluar</span>
            </div>

            {/* Interactive Slide Dots Filmstrip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {PRESENTATION_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  style={{
                    width: idx === currentIdx ? '22px' : '7px',
                    height: '7px',
                    borderRadius: '100px',
                    backgroundColor: idx === currentIdx ? 'var(--color-green-deep)' : 'rgba(21, 63, 53, 0.22)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  title={`Slide ${idx + 1}: ${s.title}`}
                  aria-label={`Ke Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}>
              <div className="pres-progress-bar-track" aria-hidden="true">
                <div className="pres-progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>

              <div className="pres-nav-buttons">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="pres-btn-icon"
                  aria-label="Slide sebelumnya"
                  title="Sebelumnya (Panah Kiri)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIdx === PRESENTATION_SLIDES.length - 1}
                  className="pres-btn-icon"
                  aria-label="Slide berikutnya"
                  title="Berikutnya (Panah Kanan atau Spasi)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
};
