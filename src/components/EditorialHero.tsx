import React, { useState } from 'react';
import { PRESENTATION_SLIDES } from '../data/youthonContent';
import { PixelRunnerDJScene } from './PixelRunnerDJScene';
import { IconGamepad, IconCompass } from './Icons';

interface EditorialHeroProps {
  onOpenPresentation: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenPresentation }) => {
  const [viewMode, setViewMode] = useState<'pixel' | 'blueprint'>('pixel');

  const scrollToConcept = () => {
    const el = document.getElementById('konsep');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Pengantar YOUTHON">
      <div className="hero-grid">
        {/* Left Column : Editorial Storytelling & Positioning */}
        <div>
          <div className="hero-eyebrow-container">
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>
              YOUTHON / SWITCH YOUR ENERGY ON
            </span>
            <span className="status-pill">
              <span className="status-dot"></span>
              <span>Chapter 01: West Java</span>
            </span>
          </div>

          <h1 className="hero-headline">
            Lebih dari lari.<br />
            <span className="hero-headline-highlight">Tentang bergerak</span><br />
            bersama.
          </h1>

          <p className="hero-lead">
            YOUTHON: Youth Fun Run & Lifestyle Movement. Event lari yang menggabungkan olahraga santai,
            musik live, aktivitas interaktif, komunitas, dan festival anak muda dalam satu identitas gerakan nasional.
          </p>

          <div className="hero-tag-list" aria-label="Karakteristik Utama Gerakan">
            <span className="hero-tag-pill hero-tag-pill-accent">
              Format: 3K & 5K Fun Run
            </span>
            <span className="hero-tag-pill">
              Target Awal: 2.000 - 3.000 Peserta
            </span>
            <span className="hero-tag-pill">
              Durasi: 1 Hari Festival
            </span>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              onClick={scrollToConcept}
              className="btn-editorial btn-primary-editorial"
            >
              <span>Jelajahi Konsep</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>

            <button
              type="button"
              onClick={onOpenPresentation}
              className="btn-editorial btn-secondary-editorial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Lihat Presentasi</span>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0.4rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                {PRESENTATION_SLIDES.length} Slide
              </span>
            </button>
          </div>

          <p className="hero-footnote">
            *Angka target peserta dan format merupakan asumsi perencanaan awal, bukan target mutlak. Kapasitas akhir bergantung pada evaluasi rute, izin venue, dan kesiapan operasional.
          </p>
        </div>

        {/* Right Column : Architectural Editorial Movement Canvas */}
        <div>
          <div className="hero-visual-card">
            {/* Corner Crosshairs for Editorial Polish */}
            <span className="corner-crosshair top-left" aria-hidden="true">+</span>
            <span className="corner-crosshair top-right" aria-hidden="true">+</span>
            <span className="corner-crosshair bottom-left" aria-hidden="true">+</span>
            <span className="corner-crosshair bottom-right" aria-hidden="true">+</span>

            {/* Visual Header */}
            <div className="hero-visual-header">
              <div className="hero-visual-blueprint-tag">
                <span className="status-dot-pulse" aria-hidden="true"></span>
                <span>
                  {viewMode === 'pixel'
                    ? 'SKETSA PIXEL // RHYTHM RUN & LIVE DJ'
                    : 'LINTASAN FUN RUN 3K & 5K // MODULAR'}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '0.2rem', backgroundColor: 'var(--bg-secondary)', padding: '2px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <button
                    type="button"
                    onClick={() => setViewMode('pixel')}
                    className={`pixel-view-toggle-btn ${viewMode === 'pixel' ? 'active' : ''}`}
                    aria-label="Tampilkan animasi sketsa pixel lari dan DJ"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <IconGamepad size={13} />
                    <span>Sketsa Pixel</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('blueprint')}
                    className={`pixel-view-toggle-btn ${viewMode === 'blueprint' ? 'active' : ''}`}
                    aria-label="Tampilkan blueprint lintasan 5K"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <IconCompass size={13} />
                    <span>Blueprint</span>
                  </button>
                </div>

                <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem' }}>
                  Chapter 01: West Java
                </span>
              </div>
            </div>

            {/* Canvas Body: Conditional View between Pixel Animation and Route Blueprint */}
            {viewMode === 'pixel' ? (
              <div className="hero-pixel-canvas-wrapper">
                <PixelRunnerDJScene />

                {/* Two Contextual Info Badges below the pixel scene */}
                <div className="pixel-context-strip">
                  <div className="pixel-context-item">
                    <span className="chip-meta-eyebrow">FILOSOFI ENERGI</span>
                    <span className="chip-meta-title">Non-Kompetitif & Inklusif</span>
                    <span className="chip-meta-sub">Tanpa Cut-Off Time &bull; Berlari Sesuai Irama Sendiri</span>
                  </div>
                  <div className="pixel-context-item">
                    <span className="chip-meta-eyebrow">SIGNATURE: RHYTHM RUN</span>
                    <span className="chip-meta-title">Live DJ & Performer Rute</span>
                    <span className="chip-meta-sub">Tempo 128 BPM &bull; Dentuman Bass Menemani Sepanjang Jalur</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hero-canvas-wrapper">
                {/* Asymmetric Floating Inspection Chip 1 */}
                <div
                  className="hero-floating-chip"
                  style={{ position: 'absolute', top: '12px', right: '12px' }}
                >
                  <span className="chip-meta-eyebrow">FILOSOFI ENERGI</span>
                  <span className="chip-meta-title">Non-Kompetitif & Inklusif</span>
                  <span className="chip-meta-sub">Tanpa Tekanan Cut-Off Time</span>
                </div>

                {/* Asymmetric Floating Inspection Chip 2 */}
                <div
                  className="hero-floating-chip"
                  style={{ position: 'absolute', bottom: '60px', left: '12px' }}
                >
                  <span className="chip-meta-eyebrow">MULTI-AKTIVASI</span>
                  <span className="chip-meta-title">6 Modul Rute Modular</span>
                  <span className="chip-meta-sub">Musik, Mist, Seni & Komunitas</span>
                </div>

                <svg
                  viewBox="0 0 480 270"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  aria-label="Diagram blueprint lintasan rute fun run 5K dan titik selebrasi"
                >
                  <defs>
                    {/* Subtle Grid Pattern */}
                    <pattern id="editorialGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#DFE5DA" strokeWidth="0.5" strokeOpacity="0.6" />
                    </pattern>

                    {/* Gradient for the Running Track Wave */}
                    <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#153F35" />
                      <stop offset="45%" stopColor="#256B5B" />
                      <stop offset="80%" stopColor="#4E8C78" />
                      <stop offset="100%" stopColor="#BFE632" />
                    </linearGradient>

                    <linearGradient id="elevationGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#153F35" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#153F35" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Background Grid */}
                  <rect width="480" height="270" fill="url(#editorialGrid)" />

                  {/* Giant Typographic Watermark */}
                  <text
                    x="240"
                    y="155"
                    textAnchor="middle"
                    fill="#153F35"
                    fillOpacity="0.04"
                    fontSize="78"
                    fontWeight="900"
                    fontFamily="var(--font-headline)"
                    letterSpacing="0.08em"
                  >
                    YOUTHON
                  </text>

                  {/* Topographic Contour Wave Guides */}
                  <path
                    d="M 10 190 C 90 140, 180 220, 290 170 C 360 140, 410 150, 470 120"
                    stroke="#DFE5DA"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <path
                    d="M 10 150 C 110 100, 200 180, 310 130 C 370 105, 420 120, 470 90"
                    stroke="#DFE5DA"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    fill="none"
                  />

                  {/* Kinetic Pulse Ribbon (Glow layer) */}
                  <path
                    d="M 35 175 C 95 90, 175 220, 255 120 C 310 45, 375 195, 445 75"
                    stroke="#D7FF3F"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.35"
                  />

                  {/* Main 5K Route Trajectory Line */}
                  <path
                    d="M 35 175 C 95 90, 175 220, 255 120 C 310 45, 375 195, 445 75"
                    stroke="url(#trackGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Dotted Accent Guide Line */}
                  <path
                    d="M 35 175 C 95 90, 175 220, 255 120 C 310 45, 375 195, 445 75"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeDasharray="6 8"
                    fill="none"
                    opacity="0.8"
                  />

                  {/* Waypoint 1 : Start Gate (0.0 KM) */}
                  <g transform="translate(35, 175)">
                    <circle r="12" fill="#153F35" />
                    <circle r="5" fill="#D7FF3F" />
                    <text x="0" y="24" textAnchor="middle" fill="#183B32" fontSize="9" fontWeight="700" fontFamily="var(--font-mono)">
                      0.0 KM
                    </text>
                    <text x="0" y="34" textAnchor="middle" fill="#68756A" fontSize="8" fontFamily="var(--font-body)">
                      Start Gate
                    </text>
                  </g>

                  {/* Waypoint 2 : Rhythm Beats Zone (1.5 KM) */}
                  <g transform="translate(142, 168)">
                    <circle r="8" fill="#ffffff" stroke="#153F35" strokeWidth="2.5" />
                    <circle r="3" fill="#153F35" />
                    <text x="0" y="-12" textAnchor="middle" fill="#183B32" fontSize="8.5" fontWeight="700" fontFamily="var(--font-mono)">
                      1.5 KM
                    </text>
                    <text x="0" y="-3" textAnchor="middle" fill="#68756A" fontSize="7.5" fontFamily="var(--font-body)">
                      Beats Zone
                    </text>
                  </g>

                  {/* Waypoint 3 : Mist & Bubble Tunnel (3.0 KM) */}
                  <g transform="translate(255, 120)">
                    <circle r="9" fill="#153F35" />
                    <path d="M -3 -2 L 3 2 M -3 2 L 3 -2" stroke="#D7FF3F" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="0" y="-14" textAnchor="middle" fill="#183B32" fontSize="8.5" fontWeight="700" fontFamily="var(--font-mono)">
                      3.0 KM
                    </text>
                    <text x="0" y="-5" textAnchor="middle" fill="#68756A" fontSize="7.5" fontFamily="var(--font-body)">
                      Mist Tunnel
                    </text>
                  </g>

                  {/* Waypoint 4 : Cheer Motivation (4.2 KM) */}
                  <g transform="translate(365, 165)">
                    <circle r="8" fill="#ffffff" stroke="#153F35" strokeWidth="2.5" />
                    <circle r="3" fill="#BFE632" />
                    <text x="0" y="19" textAnchor="middle" fill="#183B32" fontSize="8.5" fontWeight="700" fontFamily="var(--font-mono)">
                      4.2 KM
                    </text>
                    <text x="0" y="28" textAnchor="middle" fill="#68756A" fontSize="7.5" fontFamily="var(--font-body)">
                      Cheer Zone
                    </text>
                  </g>

                  {/* Waypoint 5 : Finish Celebration Stage (5.0 KM) */}
                  <g transform="translate(445, 75)">
                    <circle r="14" fill="#D7FF3F" />
                    <circle r="8" fill="#153F35" />
                    <circle r="3" fill="#D7FF3F" />
                    <text x="-8" y="-16" textAnchor="middle" fill="#153F35" fontSize="9" fontWeight="800" fontFamily="var(--font-mono)">
                      5.0 KM
                    </text>
                    <text x="-8" y="-7" textAnchor="middle" fill="#153F35" fontSize="8" fontWeight="700" fontFamily="var(--font-headline)">
                      Finish Oase
                    </text>
                  </g>

                  {/* Elevation Baseline Profile */}
                  <path
                    d="M 30 252 L 30 240 Q 140 236 250 238 Q 360 236 450 240 L 450 252 Z"
                    fill="url(#elevationGrad)"
                  />
                  <line x1="30" y1="240" x2="450" y2="240" stroke="#153F35" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
                  <text x="30" y="262" fill="#68756A" fontSize="8.5" fontFamily="var(--font-mono)">
                    Elevasi Datar (&lt; 1.5%) : Ramah Pelari Santai & Pemula
                  </text>
                  <text x="450" y="262" textAnchor="end" fill="#153F35" fontSize="8.5" fontFamily="var(--font-mono)" fontWeight="700">
                    TOTAL 5.0 KM
                  </text>
                </svg>
              </div>
            )}

            {/* Milestones Strip */}
            <div className="hero-milestones-row">
              <div className="hero-milestone-col">
                <span className="milestone-km">0.0 KM</span>
                <span className="milestone-name">Start Gate & Gathering</span>
              </div>
              <div className="hero-milestone-col">
                <span className="milestone-km">1.5 KM</span>
                <span className="milestone-name">Rhythm Beats Hub & Live DJ</span>
              </div>
              <div className="hero-milestone-col">
                <span className="milestone-km">3.0 KM</span>
                <span className="milestone-name">Mist Tunnel & Hidrasi</span>
              </div>
              <div className="hero-milestone-col">
                <span className="milestone-km">5.0 KM</span>
                <span className="milestone-name">Panggung Selebrasi Finis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Meta Strip : Crisp 4-Column Editorial Ticker */}
      <div className="hero-meta-strip" aria-label="Ringkasan Parameter Konsep">
        <div className="hero-meta-item">
          <div className="meta-item-label">01 / CHAPTER AWAL</div>
          <div className="meta-item-value">Jawa Barat (Bandung Raya Kandidat)</div>
        </div>
        <div className="hero-meta-item">
          <div className="meta-item-label">02 / FORMAT GERAKAN</div>
          <div className="meta-item-value">3K & 5K Fun Run & Festival Musik</div>
        </div>
        <div className="hero-meta-item">
          <div className="meta-item-label">03 / TARGET PERENCANAAN</div>
          <div className="meta-item-value">2.000 - 3.000 Peserta (Asumsi Awal)</div>
        </div>
        <div className="hero-meta-item">
          <div className="meta-item-label">04 / STATUS DOKUMEN</div>
          <div className="meta-item-value">Event Execution Blueprint [Draft v1.0]</div>
        </div>
      </div>
    </section>
  );
};
