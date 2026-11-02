import React, { useState, useEffect } from 'react';
import { PRESENTATION_SLIDES } from '../data/youthonContent';
import { IconTree, IconCopy, IconCheck, IconZoomIn, IconMaximize, IconClose } from './Icons';

interface BrandConceptPageProps {
  onBackToEditorial: () => void;
  onOpenTree: () => void;
  onOpenPresentation: () => void;
}

export const BrandConceptPage: React.FC<BrandConceptPageProps> = ({
  onBackToEditorial,
  onOpenTree,
  onOpenPresentation
}) => {
  const [activeTaglineIndex, setActiveTaglineIndex] = useState<number>(0);
  const [copiedTagline, setCopiedTagline] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
        setLightboxZoom(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  const taglines = [
    {
      id: 'tag-1',
      tagline: 'Switch Your Energy On.',
      status: 'Tagline Utama (Primary Anthem)',
      tone: 'Inspiratif, Berenergi & Mengajak Aksi',
      context: 'Identitas resmi gerakan, kampanye brand utama, jersey finisher, dan panggung festival.'
    },
    {
      id: 'tag-2',
      tagline: 'Young Energy. Always On.',
      status: 'Opsi Pendukung',
      tone: 'Tegas, Berkelanjutan & Percaya Diri',
      context: 'Cocok untuk komunikasi jangka panjang komunitas YOUTHON CLUB dan konten media sosial.'
    },
    {
      id: 'tag-3',
      tagline: 'Turn Up. Run Out.',
      status: 'Opsi Pendukung',
      tone: 'Playful, Ringkas & Penuh Semangat',
      context: 'Ideal untuk poster rute, countdown pendaftaran tiket, dan video teaser Instagram Reels.'
    },
    {
      id: 'tag-4',
      tagline: 'More Youth. More Movement.',
      status: 'Opsi Pendukung',
      tone: 'Kolektif, Berdampak & Menjangkau Luas',
      context: 'Sangat kuat untuk proposal kemitraan sponsor, kolaborasi instansi kota, dan ekspansi tur.'
    },
    {
      id: 'tag-5',
      tagline: 'Run Together. Turn It On.',
      status: 'Opsi Pendukung',
      tone: 'Inklusif, Komunal & Bersahabat',
      context: 'Paling selaras untuk aktivasi pendaftaran grup komunitas, kampus, dan pelari pemula.'
    },
    {
      id: 'tag-6',
      tagline: 'The Youth Is On.',
      status: 'Opsi Pendukung',
      tone: 'Konteporer, Berani & Pernyataan Sikap',
      context: 'Efektif sebagai headline visual merchandise YOUTHON GOODS, poster tipografi, dan stiker.'
    }
  ];

  const handleCopyTagline = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTagline(text);
    setTimeout(() => setCopiedTagline(null), 2000);
  };

  return (
    <div className="brand-page-wrapper">
      {/* Top Sticky Header */}
      <header className="tree-page-header">
        <div className="tree-header-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <button
              type="button"
              onClick={onBackToEditorial}
              className="btn-editorial btn-secondary-editorial"
              style={{ minHeight: '36px', padding: '0.35rem 0.75rem', fontSize: '0.8125rem' }}
              aria-label="Kembali ke Blueprint Acara"
            >
              <span>&larr; Blueprint Acara</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: 'var(--color-green-deep)',
                  color: 'var(--accent-lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.875rem',
                  borderRadius: '6px'
                }}
              >
                Y
              </div>
              <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '0.9375rem', color: 'var(--color-green-text)' }}>
                YOUTHON
              </span>
              <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem' }}>
                Brand Concept
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenTree}
              className="btn-editorial btn-secondary-editorial"
              style={{ minHeight: '36px', padding: '0.35rem 0.75rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center' }}
              aria-label="Buka Diagram Pohon"
            >
              <IconTree size={13} style={{ marginRight: '5px' }} />
              <span>Bagan Pohon</span>
            </button>

            <button
              type="button"
              onClick={onOpenPresentation}
              className="btn-editorial btn-primary-editorial"
              style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.75rem' }}
              aria-label="Buka Mode Presentasi"
            >
              <span>Mode Presentasi</span>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0.4rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>
                {PRESENTATION_SLIDES.length} Slide
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="tree-page-content">
        {/* Section 1: Hero Manifesto */}
        <section className="brand-hero-card" aria-label="Manifesto Brand YOUTHON">
          <span className="corner-crosshair top-left" aria-hidden="true">+</span>
          <span className="corner-crosshair top-right" aria-hidden="true">+</span>
          <span className="corner-crosshair bottom-left" aria-hidden="true">+</span>
          <span className="corner-crosshair bottom-right" aria-hidden="true">+</span>

          <div className="brand-hero-eyebrow">
            <span className="status-dot-pulse" aria-hidden="true"></span>
            <span>BRAND CONCEPT // YOUTH MOVEMENT & LIFESTYLE</span>
          </div>

          <h1 className="brand-hero-title">
            YOUTHON.<br />
            <span className="hero-headline-highlight">Switch Your Energy On.</span>
          </h1>

          <p className="brand-hero-lead">
            YOUTHON adalah <strong>youth movement</strong> yang mengajak generasi muda untuk bergerak, berolahraga, membangun koneksi, dan merayakan energi mereka melalui pengalaman lari yang menyenangkan.
          </p>

          <p className="brand-hero-sublead">
            Bukan sekadar fun run biasa, YOUTHON adalah ruang bagi anak muda untuk bertemu, berekspresi, dan tumbuh bersama melalui gerakan positif yang inklusif dan berkelanjutan.
          </p>

          {/* 4 Core Pillars Strip */}
          <div className="brand-dna-grid" aria-label="Empat Pilar DNA Gerakan">
            <div className="brand-dna-item">
              <span className="dna-label">PERSONALITY</span>
              <span className="dna-value">Bold &bull; Playful &bull; Inclusive</span>
              <span className="dna-desc">Berani mendobrak rasa intimidasi, ceria penuh warna, dan merangkul semua kalangan.</span>
            </div>

            <div className="brand-dna-item">
              <span className="dna-label">AUDIENCE</span>
              <span className="dna-value">Gen Z & young adults</span>
              <span className="dna-desc">Pelajar SMA, mahasiswa, first-jobbers, pelari pemula, hingga komunitas kreatif muda.</span>
            </div>

            <div className="brand-dna-item">
              <span className="dna-label">CORE EXPERIENCE</span>
              <span className="dna-value">Run &bull; Connect &bull; Celebrate</span>
              <span className="dna-desc">Lari santai tanpa tekanan cut-off time, jalin kawan baru, dan selebrasi di garis finis.</span>
            </div>

            <div className="brand-dna-item">
              <span className="dna-label">AMBITION</span>
              <span className="dna-value">National youth movement</span>
              <span className="dna-desc">Bukan sebatas event satu hari, melainkan gerakan tur keliling berbagai kota di Indonesia.</span>
            </div>
          </div>
        </section>

        {/* Section 2: Name Anatomy & Meaning */}
        <section className="brand-section" aria-label="Etimologi dan Makna Nama">
          <div className="brand-section-header">
            <span className="section-eyebrow">ANATOMI & MAKNA FILOSOFIS NAMA</span>
            <h2 className="brand-section-title">Etimologi: Mengapa Dinamakan YOUTHON?</h2>
            <p className="brand-section-desc">
              Nama ini menggabungkan dua elemen fundamental yang saling melengkapi, melahirkan satu dorongan kuat bagi generasi baru Indonesia:
            </p>
          </div>

          <div className="brand-anatomy-row">
            {/* Word Element 1: YOUTH */}
            <div className="brand-anatomy-card youth-card">
              <div className="anatomy-badge">ELEMEN 01</div>
              <h3 className="anatomy-word">YOUTH</h3>
              <p className="anatomy-meaning">
                Generasi muda, energi melimpah, kreativitas tanpa batas, dan semangat kebersamaan yang hangat.
              </p>
              <div className="anatomy-chips">
                <span>Energi Muda</span>
                <span>Kreativitas</span>
                <span>Kolektif</span>
              </div>
            </div>

            {/* Plus Operator */}
            <div className="brand-anatomy-operator" aria-hidden="true">
              <span>+</span>
            </div>

            {/* Word Element 2: ON */}
            <div className="brand-anatomy-card on-card">
              <div className="anatomy-badge">ELEMEN 02</div>
              <h3 className="anatomy-word">ON</h3>
              <p className="anatomy-meaning">
                Aktif, menyala, sakelar energi dinyalakan, dimulai sekarang, dan terus bergerak maju.
              </p>
              <div className="anatomy-chips">
                <span>Menyala</span>
                <span>Aktif</span>
                <span>Bergerak</span>
              </div>
            </div>

            {/* Equals Operator */}
            <div className="brand-anatomy-operator" aria-hidden="true">
              <span>=</span>
            </div>

            {/* Result: YOUTHON */}
            <div className="brand-anatomy-card result-card">
              <div className="anatomy-badge result-badge">MAKNA KESELURUHAN</div>
              <h3 className="anatomy-word result-word">YOUTHON</h3>
              <p className="anatomy-meaning result-meaning">
                Saatnya generasi muda menyalakan energi dan bergerak bersama menuju gaya hidup yang lebih aktif dan positif.
              </p>
              <div className="anatomy-highlight-box">
                <span className="highlight-tag">POTENSI & SKALABILITAS LUAS</span>
                <p>
                  Nama ini punya potensi penggunaan yang luas, tidak terbatas pada lomba lari, sehingga nantinya dapat dikembangkan menjadi festival, komunitas hobi, maupun ekosistem rangkaian kegiatan anak muda di tingkat nasional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Visual Identity & Official Color Palette */}
        <section className="brand-section" aria-label="Sistem Warna & Palet Visual Resmi">
          <div className="brand-section-header">
            <span className="section-eyebrow">IDENTITAS VISUAL // SISTEM WARNA RESMI</span>
            <h2 className="brand-section-title">Palet Warna & Identitas Grafis YOUTHON</h2>
            <p className="brand-section-desc">
              Harmoni spektrum warna yang mengkombinasikan ketegasan Deep Forest Green dengan ledakan vitalitas High-Energy Lime, merepresentasikan semangat muda yang berani, aktif, dan inklusif:
            </p>
          </div>

          {/* Color Palette Visual Card */}
          <div className="brand-showcase-card">
            <div className="brand-showcase-header">
              <div className="brand-showcase-title-group">
                <span className="brand-showcase-badge">OFFICIAL COLOR GUIDE</span>
                <h3 className="brand-showcase-title">Visual Brand Palette // YOUTHON Identity System</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage({
                  src: '/Brand/color_pallate.png',
                  title: 'Panduan Palet Warna Resmi YOUTHON',
                  subtitle: 'High Resolution (2008 × 1528 px) - Deep Forest Green, Electric Lime, Warm Off-White, Solar Coral'
                })}
                className="btn-editorial btn-secondary-editorial"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                aria-label="Perbesar Panduan Warna Penuh"
              >
                <IconMaximize size={13} />
                <span>Perbesar Resolusi Penuh</span>
              </button>
            </div>

            <div
              className="brand-showcase-img-wrap"
              onClick={() => setLightboxImage({
                src: '/Brand/color_pallate.png',
                title: 'Panduan Palet Warna Resmi YOUTHON',
                subtitle: 'High Resolution (2008 × 1528 px) - Deep Forest Green, Electric Lime, Warm Off-White, Solar Coral'
              })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightboxImage({
                    src: '/Brand/color_pallate.png',
                    title: 'Panduan Palet Warna Resmi YOUTHON',
                    subtitle: 'High Resolution (2008 × 1528 px) - Deep Forest Green, Electric Lime, Warm Off-White, Solar Coral'
                  });
                }
              }}
              aria-label="Buka gambar panduan warna resolusi tinggi dalam modal lightbox"
            >
              <img
                src="/Brand/color_pallate.png"
                alt="Panduan Palet Warna Resmi YOUTHON: Deep Forest Green, High-Energy Lime, Warm Off-White, Solar Coral"
                className="brand-showcase-img"
                loading="lazy"
              />
              <div className="brand-showcase-hover-hint">
                <IconZoomIn size={14} />
                <span>Klik untuk zoom inspeksi (2008 × 1528 px)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Struktur Event YOUTHON (4 Pillars / Sub-Brands) */}
        <section className="brand-section" aria-label="Struktur Event YOUTHON">
          <div className="brand-section-header">
            <span className="section-eyebrow">ARSITEKTUR STRUKTUR EVENT</span>
            <h2 className="brand-section-title">Empat Pilar Ekosistem YOUTHON</h2>
            <p className="brand-section-desc">
              YOUTHON menstrukturkan setiap kegiatannya ke dalam 4 pilar fungsional yang menyatu, menciptakan pengalaman holistik dari rute lari hingga gaya hidup sehari-hari:
            </p>
          </div>

          <div className="brand-event-pillars-grid">
            {/* Pillar 1: YOUTHON RUN */}
            <div className="brand-event-card">
              <div className="event-card-header">
                <span className="event-badge run-badge">01 // MAIN EVENT</span>
                <span className="event-code">CORE</span>
              </div>
              <h3 className="event-title">YOUTHON RUN</h3>
              <span className="event-subtitle">Aktivitas Utama Gerakan</span>
              <p className="event-desc">
                Aktivitas utama dengan kategori 3K dan 5K fun run yang ramah pemula, serta opsi 10K sesuai karakter kota dan kesiapan peserta di tiap chapter.
              </p>
              <ul className="event-points">
                <li>Rute datar (&lt; 1.5%) tanpa intimidasi Cut-Off Time ketat</li>
                <li>Format 3K (Family & Fun) dan 5K (Komunitas & Lifestyle)</li>
                <li>Pilihan opsi 10K terukur untuk pelari rekreasional lanjut</li>
              </ul>
            </div>

            {/* Pillar 2: YOUTHON PLAY */}
            <div className="brand-event-card">
              <div className="event-card-header">
                <span className="event-badge play-badge">02 // FESTIVAL</span>
                <span className="event-code">EXPERIENCE</span>
              </div>
              <h3 className="event-title">YOUTHON PLAY</h3>
              <span className="event-subtitle">Festival Experience & Selebrasi</span>
              <p className="event-desc">
                Panggung musik live, permainan interaktif, checkpoint tematik, photo spot estetik, dan pengalaman selebrasi hangat setelah melintasi garis finis.
              </p>
              <ul className="event-points">
                <li>Live DJ & performa perkusi pengiring langkah lari</li>
                <li>Photobooth cetak instan kenang-kenangan bersama kawan</li>
                <li>Area bazaar kuliner UMKM lokal dan oase hidrasi dingin</li>
              </ul>
            </div>

            {/* Pillar 3: YOUTHON CLUB */}
            <div className="brand-event-card">
              <div className="event-card-header">
                <span className="event-badge club-badge">03 // NETWORK</span>
                <span className="event-code">COMMUNITY</span>
              </div>
              <h3 className="event-title">YOUTHON CLUB</h3>
              <span className="event-subtitle">Community Network & Kolaborasi</span>
              <p className="event-desc">
                Wadah kolaborasi berkelanjutan dengan running club lokal, organisasi mahasiswa kampus, komunitas kreatif, dan anak muda di berbagai kota chapter.
              </p>
              <ul className="event-points">
                <li>Sesi lari mingguan bersama komunitas (*easy morning run*)</li>
                <li>Aktivasi perwakilan duta kampus (*Campus Ambassadors*)</li>
                <li>Koneksi terbuka antara kreator lokal dan brand mitra</li>
              </ul>
            </div>

            {/* Pillar 4: YOUTHON GOODS */}
            <div className="brand-event-card">
              <div className="event-card-header">
                <span className="event-badge goods-badge">04 // COMMERCE</span>
                <span className="event-code">LIFESTYLE</span>
              </div>
              <h3 className="event-title">YOUTHON GOODS</h3>
              <span className="event-subtitle">Lifestyle & Merchandise Eksklusif</span>
              <p className="event-desc">
                Jersey berkualitas tinggi, kaus santai, topi lari, tote bag, dan merchandise eksklusif berciri khas kota penyelenggaraan (City Chapter Editions).
              </p>
              <ul className="event-points">
                <li>Jersey lari berteknologi cepat kering (*quick-dry*)</li>
                <li>Koleksi streetwear kasual yang bangga dipakai harian</li>
                <li>Edisi terbatas rilisan per chapter (Chapter 01: West Java)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Mockup & Collateral Merchandise Showcase */}
        <section className="brand-section" aria-label="Mockup Merchandise & Touchpoint Acara">
          <div className="brand-section-header">
            <span className="section-eyebrow">APLIKASI PRODUK // YOUTHON GOODS & MERCHANDISE</span>
            <h2 className="brand-section-title">Showcase Mockup & Touchpoint Acara</h2>
            <p className="brand-section-desc">
              Visualisasi nyata identitas brand pada touchpoint fisik kegiatan: Official Running Jersey, Racepack BIB Atlet, Finisher Medal, Lifestyle Apparel, hingga Panggung Festival:
            </p>
          </div>

          {/* Mockup Visual Card */}
          <div className="brand-showcase-card">
            <div className="brand-showcase-header">
              <div className="brand-showcase-title-group">
                <span className="brand-showcase-badge" style={{ backgroundColor: 'var(--color-green-deep)', color: 'var(--accent-lime)' }}>
                  OFFICIAL EVENT MOCKUP
                </span>
                <h3 className="brand-showcase-title">Apparel, Racepack & Festival Collateral Showcase</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage({
                  src: '/Brand/mockup.png',
                  title: 'Showcase Mockup & Merchandise YOUTHON GOODS',
                  subtitle: 'High Resolution (2008 × 1528 px) - Official Running Jersey, Finisher Medal, BIB Racepack & Festival Collateral'
                })}
                className="btn-editorial btn-secondary-editorial"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                aria-label="Perbesar Mockup Merchandise Penuh"
              >
                <IconMaximize size={13} />
                <span>Perbesar Resolusi Penuh</span>
              </button>
            </div>

            <div
              className="brand-showcase-img-wrap"
              onClick={() => setLightboxImage({
                src: '/Brand/mockup.png',
                title: 'Showcase Mockup & Merchandise YOUTHON GOODS',
                subtitle: 'High Resolution (2008 × 1528 px) - Official Running Jersey, Finisher Medal, BIB Racepack & Festival Collateral'
              })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightboxImage({
                    src: '/Brand/mockup.png',
                    title: 'Showcase Mockup & Merchandise YOUTHON GOODS',
                    subtitle: 'High Resolution (2008 × 1528 px) - Official Running Jersey, Finisher Medal, BIB Racepack & Festival Collateral'
                  });
                }
              }}
              aria-label="Buka mockup merchandise resolusi tinggi dalam modal lightbox"
            >
              <img
                src="/Brand/mockup.png"
                alt="Showcase Mockup Resmi YOUTHON: Jersey Running Dry-fit, Medali Finisher Custom, BIB Atlet, dan Apparel Streetwear"
                className="brand-showcase-img"
                loading="lazy"
              />
              <div className="brand-showcase-hover-hint">
                <IconZoomIn size={14} />
                <span>Klik untuk zoom inspeksi detail (2008 × 1528 px)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Pilihan Tagline (Tagline Vault) */}
        <section className="brand-section" aria-label="Eksplorasi Pilihan Tagline">
          <div className="brand-section-header">
            <span className="section-eyebrow">ARAH PESAN & NADA SUARA</span>
            <h2 className="brand-section-title">Pilihan Tagline Gerakan</h2>
            <p className="brand-section-desc">
              Kurasi 6 pilihan tagline dengan karakter vokal berbeda untuk memicu aksi generasi muda. Klik kartu untuk melihat peruntukan penggunaannya:
            </p>
          </div>

          <div className="brand-taglines-container">
            {/* Tagline Selection List */}
            <div className="brand-taglines-list" role="tablist" aria-label="Daftar Tagline">
              {taglines.map((t, idx) => {
                const isActive = activeTaglineIndex === idx;
                const isPrimary = idx === 0;

                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTaglineIndex(idx)}
                    className={`tagline-item-btn ${isActive ? 'active' : ''} ${isPrimary ? 'is-primary-item' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <span className="tagline-num">0{idx + 1}</span>
                      <div style={{ textAlign: 'left' }}>
                        <span className="tagline-text">{t.tagline}</span>
                        <span className="tagline-badge">{t.status}</span>
                      </div>
                    </div>

                    <span className="tagline-select-dot" aria-hidden="true"></span>
                  </button>
                );
              })}
            </div>

            {/* Tagline Focus Display Card */}
            <div className="brand-tagline-display-card">
              <div className="display-card-top">
                <span className="display-eyebrow">
                  {taglines[activeTaglineIndex].status.toUpperCase()}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyTagline(taglines[activeTaglineIndex].tagline)}
                  className="btn-copy-tagline"
                  aria-label="Salin tagline ini"
                  title="Salin ke clipboard"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                >
                  {copiedTagline === taglines[activeTaglineIndex].tagline ? (
                    <>
                      <IconCheck size={13} />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <IconCopy size={13} />
                      <span>Salin Teks</span>
                    </>
                  )}
                </button>
              </div>

              <div className="display-quote-box">
                <span className="quote-mark">&ldquo;</span>
                <h3 className="display-headline">{taglines[activeTaglineIndex].tagline}</h3>
              </div>

              <div className="display-meta-grid">
                <div className="meta-block">
                  <span className="meta-label">KARAKTER NADA (TONE OF VOICE)</span>
                  <span className="meta-content">{taglines[activeTaglineIndex].tone}</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">REKOMENDASI PENGGUNAAN</span>
                  <span className="meta-content">{taglines[activeTaglineIndex].context}</span>
                </div>
              </div>

              <div className="display-visual-preview">
                <span className="preview-label">SIMULASI APLIKASI BRAND:</span>
                <div className="preview-banner">
                  <span className="preview-brand">[Y] YOUTHON</span>
                  <span className="preview-slash">//</span>
                  <span className="preview-tag">{taglines[activeTaglineIndex].tagline}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for High-Resolution Brand Assets */}
      {lightboxImage && (
        <div
          className="brand-lightbox-backdrop"
          onClick={() => {
            setLightboxImage(null);
            setLightboxZoom(1);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
        >
          <div className="brand-lightbox-nav" onClick={(e) => e.stopPropagation()}>
            <div className="brand-lightbox-title-group">
              <span className="status-dot-pulse" aria-hidden="true"></span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-headline)' }}>
                  {lightboxImage.title}
                </h3>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', opacity: 0.85 }}>
                  {lightboxImage.subtitle}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setLightboxZoom((prev) => Math.max(0.75, prev - 0.25))}
                className="brand-lightbox-close-btn"
                title="Zoom Out"
                aria-label="Perkecil Gambar"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setLightboxZoom(1)}
                className="brand-lightbox-close-btn"
                title="Reset Zoom"
                aria-label="Reset Ukuran Normal"
              >
                {Math.round(lightboxZoom * 100)}%
              </button>
              <button
                type="button"
                onClick={() => setLightboxZoom((prev) => Math.min(2.5, prev + 0.25))}
                className="brand-lightbox-close-btn"
                title="Zoom In"
                aria-label="Perbesar Gambar"
              >
                +
              </button>

              <button
                type="button"
                onClick={() => {
                  setLightboxImage(null);
                  setLightboxZoom(1);
                }}
                className="brand-lightbox-close-btn"
                aria-label="Tutup Tampilan Penuh (Esc)"
              >
                <IconClose size={15} />
                <span>Tutup (Esc)</span>
              </button>
            </div>
          </div>

          <div
            className="brand-lightbox-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="brand-lightbox-img"
              style={{ transform: `scale(${lightboxZoom})`, transformOrigin: 'center center' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
