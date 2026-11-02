import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PRESENTATION_SLIDES } from '../data/youthonContent';
import { KineticTickerBanner } from './KineticTickerBanner';
import { EditorialHero } from './EditorialHero';
import { EditorialBigIdea } from './EditorialBigIdea';
import { EditorialVisionMission } from './EditorialVisionMission';
import { EditorialPillars } from './EditorialPillars';
import { EditorialAudience } from './EditorialAudience';
import { EditorialBrandCharacter } from './EditorialBrandCharacter';
import { EditorialExperience } from './EditorialExperience';
import { EditorialSafety } from './EditorialSafety';
import { EditorialTeam } from './EditorialTeam';
import { EditorialJourney } from './EditorialJourney';
import { EditorialRoadmap } from './EditorialRoadmap';
import { EditorialPartners } from './EditorialPartners';
import { EditorialDigital } from './EditorialDigital';
import { EditorialEngineering } from './EditorialEngineering';
import { EditorialChecklist } from './EditorialChecklist';
import { EditorialSummary } from './EditorialSummary';
import {
  IconZap,
  IconTarget,
  IconDiamond,
  IconUsers,
  IconRun,
  IconShield,
  IconBriefcase,
  IconCompass,
  IconCalendar,
  IconHandshake,
  IconMonitor,
  IconCheckCircle,
  IconRocket,
  IconScroll,
  IconTree,
  IconLightbulb,
  IconMenu,
  IconClose,
  IconCopy,
  IconCheck
} from './Icons';

export interface SectionModule {
  id: string;
  num: string;
  chapterNumber: string;
  chapterTitle: string;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  tagline: string;
  pitchTakeaway: string;
  pitchMetrics: { label: string; value: string }[];
  component: React.ReactNode;
}

interface EditorialSplitDossierProps {
  initialSectionId?: string;
  onOpenPresentation: () => void;
  onOpenTree: () => void;
  onOpenBrand: () => void;
  onSwitchToScrollMode: () => void;
}

export const EditorialSplitDossier: React.FC<EditorialSplitDossierProps> = ({
  initialSectionId = 'hero',
  onOpenPresentation,
  onOpenTree,
  onOpenBrand,
  onSwitchToScrollMode
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(initialSectionId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [copiedModuleId, setCopiedModuleId] = useState<string | null>(null);
  const stageBodyRef = useRef<HTMLDivElement>(null);

  // List of all 13 cohesive discussion modules with Pitch Deck Strategic Takeaways
  const sectionModules: SectionModule[] = useMemo(() => [
    {
      id: 'hero',
      num: '01',
      chapterNumber: 'CHAPTER 01',
      chapterTitle: 'IDENTITAS & FONDASI',
      title: 'Pembuka & Manifesto Gerakan',
      shortTitle: 'Manifesto',
      icon: <IconZap size={14} />,
      tagline: 'Switch Your Energy On : Youth Fun Run & Lifestyle Movement Jawa Barat',
      pitchTakeaway: 'YOUTHON bukan sekadar lomba lari satu hari, melainkan youth movement nasional yang menggabungkan olahraga santai, musik live, dan festival komunitas anak muda.',
      pitchMetrics: [
        { label: 'Target Partisipan', value: '2.000 - 3.000 Peserta' },
        { label: 'Format Lintasan', value: '3K & 5K Fun Run' },
        { label: 'Chapter Perdana', value: 'Jawa Barat' }
      ],
      component: <EditorialHero onOpenPresentation={onOpenPresentation} />
    },
    {
      id: 'konsep',
      num: '02',
      chapterNumber: 'CHAPTER 01',
      chapterTitle: 'IDENTITAS & FONDASI',
      title: 'Fondasi Konsep & Visi Multi-Kota',
      shortTitle: 'Fondasi Konsep',
      icon: <IconTarget size={14} />,
      tagline: 'Mengubah lari santai menjadi festival energi pemuda tanpa tekanan cut-off time',
      pitchTakeaway: 'Menggeser paradigma dari adu cepat catatan waktu individual menjadi selebrasi energi inklusif yang ramah pemula, kreatif, dan berorientasi ekspansi tur kota.',
      pitchMetrics: [
        { label: 'Filosofi Olahraga', value: 'Inklusif & Non-Kompetitif' },
        { label: 'Rhythm Run Hub', value: 'Live Drumline & DJ Booth' },
        { label: 'Visi Jangka Panjang', value: 'Tur Multi-Kota Indonesia' }
      ],
      component: (
        <>
          <EditorialBigIdea />
          <EditorialVisionMission />
        </>
      )
    },
    {
      id: 'pilar',
      num: '03',
      chapterNumber: 'CHAPTER 01',
      chapterTitle: 'IDENTITAS & FONDASI',
      title: '4 Pilar Pengalaman Peserta',
      shortTitle: '4 Pilar Gerakan',
      icon: <IconDiamond size={14} />,
      tagline: 'Run, Explore, Connect, Celebrate : Target awal 2.000 - 3.000 peserta',
      pitchTakeaway: 'Formula 4 pilar menjamin retensi dan antusiasme audiens: lari santai (Run), spot tematik kota (Explore), interaksi komunitas (Connect), dan selebrasi festival (Celebrate).',
      pitchMetrics: [
        { label: 'Pilar 01 & 02', value: 'Run & Explore' },
        { label: 'Pilar 03 & 04', value: 'Connect & Celebrate' },
        { label: 'Karakter Pengalaman', value: 'Zero Intimidation' }
      ],
      component: <EditorialPillars />
    },
    {
      id: 'audiens',
      num: '04',
      chapterNumber: 'CHAPTER 01',
      chapterTitle: 'IDENTITAS & FONDASI',
      title: 'Target Audiens & Karakter Brand',
      shortTitle: 'Audiens & Brand',
      icon: <IconUsers size={14} />,
      tagline: '5 Persona pemuda Gen Z serta kepribadian Bold, Playful, dan Inclusive',
      pitchTakeaway: 'Akses langsung ke demografi Gen Z dan young adults melalui 5 persona spesifik (first-timers, running club, mahasiswa, kreator konten, dan komunitas lifestyle).',
      pitchMetrics: [
        { label: 'Kelompok Sasaran', value: 'Gen Z & Young Adults' },
        { label: 'Brand Personality', value: 'Bold · Playful · Inclusive' },
        { label: 'Jangkauan Komunitas', value: 'Kampus & Kreatif' }
      ],
      component: (
        <>
          <EditorialAudience />
          <EditorialBrandCharacter />
        </>
      )
    },
    {
      id: 'pengalaman',
      num: '05',
      chapterNumber: 'CHAPTER 02',
      chapterTitle: 'PENGALAMAN & LAPANGAN',
      title: 'Rute Modular & Rhythm Run Signature',
      shortTitle: 'Rute & Pixel DJ',
      icon: <IconRun size={14} />,
      tagline: 'Lintasan 3K & 5K ramah pemula, mist tunnel, drumline, dan live DJ performance',
      pitchTakeaway: 'Aktivasi khas Rhythm Run Station: performer perkusi lokal di checkpoint 1.5KM, mist cooling tunnel di 3.0KM, dan panggung selebrasi musik di garis finis.',
      pitchMetrics: [
        { label: 'Kategori Lintasan', value: '3K & 5K Modular' },
        { label: 'Signature Aktivasi', value: 'Rhythm Beats Hub' },
        { label: 'Titik Penyemangat', value: 'Mist Tunnel & Cheer Zone' }
      ],
      component: <EditorialExperience />
    },
    {
      id: 'keselamatan',
      num: '06',
      chapterNumber: 'CHAPTER 02',
      chapterTitle: 'PENGALAMAN & LAPANGAN',
      title: 'Protokol Medis & Keselamatan Jalur',
      shortTitle: 'SOP Keselamatan',
      icon: <IconShield size={14} />,
      tagline: 'Ambulans ALS/BLS, tim respons darurat, mitigasi cuaca, dan perizinan instansi',
      pitchTakeaway: 'Sistem proteksi medis tanpa kompromi: rasio marshal rute 1:100, 3 ambulans ALS/BLS, respons tanggap darurat < 6 menit, serta matriks perizinan instansi lengkap.',
      pitchMetrics: [
        { label: 'Rasio Pengawasan', value: '1 Marshal : 100 Peserta' },
        { label: 'Dukungan Ambulans', value: '3 Unit ALS / BLS Siaga' },
        { label: 'Jalur Evakuasi', value: '100% Steril & Terkoordinasi' }
      ],
      component: <EditorialSafety />
    },
    {
      id: 'organisasi',
      num: '07',
      chapterNumber: 'CHAPTER 02',
      chapterTitle: 'PENGALAMAN & LAPANGAN',
      title: 'Struktur Organisasi & 8 Divisi PIC',
      shortTitle: 'Tim & PIC',
      icon: <IconBriefcase size={14} />,
      tagline: 'Garis komando Event Director, Operasional, Safety, Marketing, hingga Finansial',
      pitchTakeaway: 'Tata kelola eksekusi terstruktur dengan 8 fungsi divisi spesifik, command center terpusat, dan jalur komunikasi darurat radio yang teruji.',
      pitchMetrics: [
        { label: 'Jumlah Divisi Inti', value: '8 Fungsi Terpisah' },
        { label: 'Kepemimpinan', value: 'Event Director Komando' },
        { label: 'Fokus Utama', value: 'Safety & Operational Lead' }
      ],
      component: <EditorialTeam />
    },
    {
      id: 'journey',
      num: '08',
      chapterNumber: 'CHAPTER 02',
      chapterTitle: 'PENGALAMAN & LAPANGAN',
      title: 'Customer Journey (3 Fase)',
      shortTitle: 'Alur Peserta',
      icon: <IconCompass size={14} />,
      tagline: 'Alur touchpoint peserta dari pendaftaran, race pack, race day, hingga selebrasi finis',
      pitchTakeaway: 'End-to-end customer journey terkurasi: pra-acara (registrasi kilat & race pack collection), hari pelaksanaan (gathering & selebrasi finis), hingga pasca-acara (loyalitas komunitas).',
      pitchMetrics: [
        { label: 'Fase Pra-Acara', value: 'Digital Onboarding' },
        { label: 'Fase Hari H', value: 'Festival Immersion' },
        { label: 'Fase Pasca-Acara', value: 'Merch & Community Club' }
      ],
      component: <EditorialJourney />
    },
    {
      id: 'roadmap',
      num: '09',
      chapterNumber: 'CHAPTER 03',
      chapterTitle: 'ROADMAP & KEMITRAAN',
      title: 'Roadmap Persiapan 12 - 16 Minggu',
      shortTitle: 'Roadmap 16 Minggu',
      icon: <IconCalendar size={14} />,
      tagline: 'Fase 01 Foundation hingga Fase 06 Eksekusi & Evaluasi dengan gatekeeper kriteria',
      pitchTakeaway: 'Rencana kerja terstruktur 12 - 16 minggu yang memberikan kepastian waktu untuk negosiasi sponsor, survei rute, perizinan kepolisian, dan produksi perlengkapan.',
      pitchMetrics: [
        { label: 'Durasi Persiapan', value: '12 - 16 Minggu' },
        { label: 'Milestone Kunci', value: '6 Fase Terstruktur' },
        { label: 'Verifikasi Kesiapan', value: 'Technical Meeting & Gate' }
      ],
      component: <EditorialRoadmap />
    },
    {
      id: 'mitra',
      num: '10',
      chapterNumber: 'CHAPTER 03',
      chapterTitle: 'ROADMAP & KEMITRAAN',
      title: 'Paket Sponsorship & Skema Finansial',
      shortTitle: 'Sponsor & Anggaran',
      icon: <IconHandshake size={14} />,
      tagline: 'Tiering Title, Official, Co-Sponsor, proyeksi cashflow tiket, dan hak aktivasi brand',
      pitchTakeaway: 'Peluang kemitraan strategis dengan ROI nyata: hak penamaan acara, aktivasi booth festival, branding jersey finisher, dan eksposur konten digital ke ribuan pemuda.',
      pitchMetrics: [
        { label: 'Struktur Kemitraan', value: 'Title · Official · Co-Sponsor' },
        { label: 'Hak Aktivasi', value: 'Stage, Rute & Digital Media' },
        { label: 'Target Engagement', value: 'Tinggi & Terukur' }
      ],
      component: <EditorialPartners />
    },
    {
      id: 'digital',
      num: '11',
      chapterNumber: 'CHAPTER 03',
      chapterTitle: 'ROADMAP & KEMITRAAN',
      title: 'Ekosistem Digital & Rekayasa Lapangan',
      shortTitle: 'Digital & Engineering',
      icon: <IconMonitor size={14} />,
      tagline: 'Platform registrasi, validasi QR bib, command center, audio engineering, dan genset redundan',
      pitchTakeaway: 'Infrastruktur teknis modern: sistem pengambilan race pack berbasis scan QR kilat, sound system festival jernih, dan pasokan daya genset dengan redundansi ganda.',
      pitchMetrics: [
        { label: 'Sistem BIB', value: 'QR Code Anti-Antre' },
        { label: 'Akustik Panggung', value: 'Line-Array System' },
        { label: 'Daya Cadangan', value: 'Dual Generator Backup' }
      ],
      component: (
        <>
          <EditorialDigital />
          <EditorialEngineering />
        </>
      )
    },
    {
      id: 'checklist',
      num: '12',
      chapterNumber: 'CHAPTER 04',
      chapterTitle: 'KESIAPAN & EKSEKUSI',
      title: 'Checklist Kesiapan Lapangan & SOP',
      shortTitle: 'Checklist Kesiapan',
      icon: <IconCheckCircle size={14} />,
      tagline: 'Daftar periksa operasional H-14, H-3, dan Hari H lintas divisi untuk Go/No-Go Decision',
      pitchTakeaway: 'Matriks kontrol eksekusi ketat 15 poin per divisi: memastikan kesiapan rute steril, briefing marshal, simulasi medis, dan pelaporan keuangan tertib.',
      pitchMetrics: [
        { label: 'Area Validasi', value: '15 Poin Pemeriksaan' },
        { label: 'Jadwal Pengecekan', value: 'H-14, H-3 & Hari H' },
        { label: 'Kriteria Kelulusan', value: '100% Go-Decision Ready' }
      ],
      component: <EditorialChecklist />
    },
    {
      id: 'summary',
      num: '13',
      chapterNumber: 'CHAPTER 04',
      chapterTitle: 'KESIAPAN & EKSEKUSI',
      title: 'Ringkasan Eksekutif & Babak Berikutnya',
      shortTitle: 'Ringkasan Eksekutif',
      icon: <IconRocket size={14} />,
      tagline: 'Konsolidasi 8 area persiapan, rencana chapter lanjutan, dan inisiasi kemitraan',
      pitchTakeaway: 'Blueprint menyeluruh siap dieksekusi bersama mitra dan sponsor. YOUTHON siap menyalakan energi pemuda Jawa Barat dan membangun gerakan lari nasional.',
      pitchMetrics: [
        { label: 'Chapter Perdana', value: 'Jawa Barat' },
        { label: 'Kolaborasi', value: 'Creadin.co & Brand Partners' },
        { label: 'Langkah Berikutnya', value: 'Finalisasi Sponsor & Izin' }
      ],
      component: <EditorialSummary />
    }
  ], [onOpenPresentation]);

  // Synchronize initialSectionId if prop updates
  useEffect(() => {
    if (initialSectionId) {
      const targetId = initialSectionId === 'tim' ? 'organisasi' : initialSectionId;
      const found = sectionModules.find((s) => s.id === targetId);
      if (found) {
        setActiveSectionId(found.id);
      }
    }
  }, [initialSectionId, sectionModules]);

  // Current active index and section
  const currentIndex = sectionModules.findIndex((s) => s.id === activeSectionId);
  const activeModule = sectionModules[currentIndex] || sectionModules[0];
  const prevModule = currentIndex > 0 ? sectionModules[currentIndex - 1] : null;
  const nextModule = currentIndex < sectionModules.length - 1 ? sectionModules[currentIndex + 1] : null;

  // Handle jump to section
  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    setIsMobileDrawerOpen(false);
    window.location.hash = id;
    if (stageBodyRef.current) {
      stageBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (nextModule) {
      handleSelectSection(nextModule.id);
    }
  };

  const handlePrev = () => {
    if (prevModule) {
      handleSelectSection(prevModule.id);
    }
  };

  // Keyboard navigation: Arrow Left / Arrow Right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (nextModule) {
          handleSelectSection(nextModule.id);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (prevModule) {
          handleSelectSection(prevModule.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextModule, prevModule]);

  // Copy pitch takeaway to clipboard
  const handleCopyPitchSummary = (mod: SectionModule) => {
    const text = `[YOUTHON EXECUTIVE PITCH - MODUL ${mod.num}: ${mod.title.toUpperCase()}]\n\nTagline: ${mod.tagline}\n\nPoin Strategis:\n${mod.pitchTakeaway}\n\nMetrik Utama:\n${mod.pitchMetrics.map((m) => `• ${m.label}: ${m.value}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedModuleId(mod.id);
    setTimeout(() => setCopiedModuleId(null), 2200);
  };

  // Filter modules based on search query
  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return sectionModules;
    const q = searchQuery.toLowerCase();
    return sectionModules.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.shortTitle.toLowerCase().includes(q) ||
        s.chapterTitle.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.num.includes(q)
    );
  }, [searchQuery, sectionModules]);

  // Group filtered modules by chapter
  const groupedChapters = useMemo(() => {
    const groups: Record<string, { chapterNumber: string; chapterTitle: string; items: SectionModule[] }> = {};
    filteredModules.forEach((mod) => {
      const key = `${mod.chapterNumber} - ${mod.chapterTitle}`;
      if (!groups[key]) {
        groups[key] = {
          chapterNumber: mod.chapterNumber,
          chapterTitle: mod.chapterTitle,
          items: []
        };
      }
      groups[key].items.push(mod);
    });
    return Object.values(groups);
  }, [filteredModules]);

  const progressPercent = Math.round(((currentIndex + 1) / sectionModules.length) * 100);

  return (
    <div className="dossier-app-wrapper">
      {/* Top Mobile Bar */}
      <header className="dossier-mobile-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div className="dossier-brand-badge">Y</div>
          <div>
            <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: 1.1 }}>
              YOUTHON
            </div>
            <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)' }}>
              Topik {activeModule.num}/{sectionModules.length} : {activeModule.shortTitle}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
            className="btn-editorial btn-secondary-editorial"
            style={{ minHeight: '34px', padding: '0.25rem 0.625rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center' }}
            aria-label="Buka Menu Topik"
          >
            {isMobileDrawerOpen ? (
              <>
                <IconClose size={13} style={{ marginRight: '5px' }} />
                <span>Tutup</span>
              </>
            ) : (
              <>
                <IconMenu size={13} style={{ marginRight: '5px' }} />
                <span>Daftar Topik</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onSwitchToScrollMode}
            className="btn-editorial btn-secondary-editorial"
            style={{ minHeight: '34px', padding: '0.25rem 0.625rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center' }}
            title="Beralih ke Mode Scroll Panjang"
          >
            <IconScroll size={13} style={{ marginRight: '5px' }} />
            <span>Scroll</span>
          </button>
        </div>
      </header>

      {/* Backdrop for Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div
          className="dossier-drawer-backdrop"
          onClick={() => setIsMobileDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* SISI KIRI: Sidebar Navigator (Topic Index) */}
      <aside className={`dossier-sidebar ${isMobileDrawerOpen ? 'mobile-open' : ''}`}>
        {/* Sidebar Header */}
        <div className="dossier-sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div className="dossier-brand-badge">Y</div>
              <div>
                <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '1rem', color: 'var(--color-green-text)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  YOUTHON
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-green-muted)', fontFamily: 'var(--font-mono)' }}>
                  Blueprint · Chapter 01
                </div>
              </div>
            </div>

            <span className="status-pill" style={{ fontSize: '0.625rem', padding: '0.15rem 0.5rem' }}>
              Pitch Dossier
            </span>
          </div>

          {/* Progress Indicator */}
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
              <span>PROGRES BACA</span>
              <span style={{ fontWeight: 700, color: 'var(--color-green-text)' }}>
                {activeModule.num} / {sectionModules.length} ({progressPercent}%)
              </span>
            </div>
            <div className="dossier-progress-track">
              <div
                className="dossier-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Quick Search Input */}
          <div style={{ position: 'relative' }}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-green-muted)', pointerEvents: 'none' }}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Cari bagian (mis: safety, rute)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dossier-search-input"
              aria-label="Cari modul dalam blueprint"
            />
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <nav className="dossier-sidebar-nav" aria-label="Daftar Modul Pembahasan Blueprint">
          {groupedChapters.length === 0 ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
              Tidak ada topik yang cocok dengan &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            groupedChapters.map((grp) => (
              <div key={grp.chapterNumber} className="dossier-chapter-group">
                <div className="dossier-chapter-title">
                  <span>{grp.chapterNumber}</span> : {grp.chapterTitle}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {grp.items.map((mod) => {
                    const isActive = mod.id === activeSectionId;
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => handleSelectSection(mod.id)}
                        className={`dossier-nav-item ${isActive ? 'active' : ''}`}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <span className={`dossier-nav-num ${isActive ? 'active' : ''}`}>
                          {mod.num}
                        </span>
                        <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                          <div className={`dossier-nav-label ${isActive ? 'active' : ''}`}>
                            <span style={{ marginRight: '0.35rem', display: 'inline-flex', alignItems: 'center' }}>
                              {mod.icon}
                            </span>
                            {mod.shortTitle}
                          </div>
                        </div>
                        {isActive && (
                          <span className="dossier-nav-active-pip" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </nav>

        {/* Sidebar Footer Controls */}
        <div className="dossier-sidebar-footer">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.375rem', marginBottom: '0.75rem' }}>
            <button
              type="button"
              onClick={onOpenBrand}
              className="btn-editorial btn-secondary-editorial"
              style={{ minHeight: '34px', padding: '0.25rem 0.5rem', fontSize: '0.75rem', justifyContent: 'center', display: 'inline-flex', alignItems: 'center' }}
              title="Lihat Brand Concept"
            >
              <IconLightbulb size={13} style={{ marginRight: '5px' }} />
              <span>Brand</span>
            </button>
            <button
              type="button"
              onClick={onOpenTree}
              className="btn-editorial btn-secondary-editorial"
              style={{ minHeight: '34px', padding: '0.25rem 0.5rem', fontSize: '0.75rem', justifyContent: 'center', display: 'inline-flex', alignItems: 'center' }}
              title="Lihat Bagan Pohon"
            >
              <IconTree size={13} style={{ marginRight: '5px' }} />
              <span>Tree</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onSwitchToScrollMode}
            className="btn-editorial btn-secondary-editorial"
            style={{ width: '100%', minHeight: '34px', padding: '0.25rem 0.5rem', fontSize: '0.75rem', justifyContent: 'center', marginBottom: '0.625rem', display: 'inline-flex', alignItems: 'center' }}
            title="Beralih ke format halaman memanjang"
          >
            <IconScroll size={13} style={{ marginRight: '5px' }} />
            <span>Buka Mode Scroll Panjang</span>
          </button>

          <div style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'var(--color-green-muted)', fontFamily: 'var(--font-mono)' }}>
            Planned and crafted by{' '}
            <a
              href="https://creadin.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-green-text)', fontWeight: 700, textDecoration: 'none' }}
            >
              creadin.co
            </a>
          </div>
        </div>
      </aside>

      {/* SISI KANAN: Focus Stage Canvas */}
      <main className="dossier-stage" role="main">
        {/* Stage Top Bar */}
        <div className="dossier-stage-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
            <span className="section-eyebrow" style={{ marginBottom: 0, fontSize: '0.6875rem' }}>
              {activeModule.chapterNumber} // MODUL {activeModule.num}
            </span>
            <span style={{ color: 'var(--border-light)' }}>|</span>
            <h1 className="dossier-stage-title">
              {activeModule.title}
            </h1>
          </div>

          {/* Center Timeline Scrubber */}
          <div className="dossier-timeline-scrubber" role="tablist" aria-label="Linimasa Modul Pitching">
            {sectionModules.map((mod) => {
              const isCur = mod.id === activeSectionId;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => handleSelectSection(mod.id)}
                  className={`dossier-scrubber-pill ${isCur ? 'active' : ''}`}
                  title={`Modul ${mod.num}: ${mod.shortTitle}`}
                  aria-label={`Beralih ke Modul ${mod.num}: ${mod.shortTitle}`}
                  aria-selected={isCur}
                >
                  <span className="scrubber-num">{mod.num}</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* View Mode Switcher Pill */}
            <div className="dossier-mode-toggle-group">
              <button
                type="button"
                className="dossier-mode-toggle-btn active"
                title="Saat ini dalam Mode Fokus Per Bagian"
              >
                <IconTarget size={12} style={{ marginRight: '4px' }} />
                <span>Fokus</span>
              </button>
              <button
                type="button"
                onClick={onSwitchToScrollMode}
                className="dossier-mode-toggle-btn"
                title="Beralih ke Mode Scroll Panjang"
              >
                <IconScroll size={12} style={{ marginRight: '4px' }} />
                <span>Scroll</span>
              </button>
            </div>

            {/* Client Presentation Trigger Button */}
            <button
              type="button"
              onClick={onOpenPresentation}
              className="btn-editorial btn-pitch-presenter"
              style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Buka Slide Presentasi Interaktif Fullscreen"
            >
              <IconZap size={13} />
              <span>Presentasi Pitch</span>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0.35rem', backgroundColor: 'rgba(215,255,63,0.2)', color: 'var(--accent-lime)', borderRadius: '3px' }}>
                {PRESENTATION_SLIDES.length} Slide
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Running Energy Ticker Ribbon */}
        <KineticTickerBanner />

        {/* Stage Body: Renders Only The Active Module */}
        <div ref={stageBodyRef} className="dossier-stage-body" tabIndex={0} aria-label={`Konten pembahasan modul ${activeModule.num}`}>
          {/* Executive Pitch Hero Card */}
          <div className="dossier-pitch-hero" key={`hero-${activeModule.id}`}>
            {/* Big Watermark Number */}
            <div className="pitch-hero-watermark" aria-hidden="true">
              {activeModule.num}
            </div>

            <div className="pitch-hero-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pitch-hero-tag">
                  {activeModule.chapterNumber} // {activeModule.chapterTitle}
                </span>
                <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem' }}>
                  Modul {activeModule.num} dari {sectionModules.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopyPitchSummary(activeModule)}
                className="pitch-hero-btn-copy"
                title="Salin ringkasan pitching modul ini ke clipboard"
              >
                {copiedModuleId === activeModule.id ? (
                  <>
                    <IconCheck size={12} />
                    <span>Ringkasan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <IconCopy size={12} />
                    <span>Salin Poin Pitch</span>
                  </>
                )}
              </button>
            </div>

            <h2 className="pitch-hero-title">
              {activeModule.title}
            </h2>

            {/* Strategic Pitch Takeaway Box */}
            <div className="pitch-hero-takeaway-box">
              <div className="pitch-hero-takeaway-label">
                <IconZap size={11} />
                <span>POIN STRATEGIS PITCHING CLIENT</span>
              </div>
              <p className="pitch-hero-takeaway-text">
                &ldquo;{activeModule.pitchTakeaway}&rdquo;
              </p>
            </div>

            {/* Interactive Keynote Metric Chips */}
            <div className="pitch-hero-metrics-grid">
              {activeModule.pitchMetrics.map((met, mi) => (
                <div key={mi} className="pitch-metric-chip">
                  <span className="pitch-metric-chip-label">{met.label}</span>
                  <span className="pitch-metric-chip-value">{met.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Module Content with Key Animation */}
          <div key={`content-${activeModule.id}`} className="dossier-module-content-wrapper">
            {activeModule.component}
          </div>

          {/* Inner Stage Card Footer */}
          <div className="dossier-stage-inner-footer">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', textTransform: 'uppercase' }}>
                  YOUTHON BLUEPRINT // CHAPTER 01: WEST JAVA
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-green-text)', fontWeight: 600 }}>
                  Modul {activeModule.num} dari {sectionModules.length} : {activeModule.shortTitle}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                {prevModule && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-editorial btn-secondary-editorial"
                    style={{ minHeight: '36px', padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                  >
                    <span>&larr; {prevModule.shortTitle}</span>
                  </button>
                )}
                {nextModule ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-editorial btn-primary-editorial"
                    style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.75rem' }}
                  >
                    <span>Lanjut : {nextModule.shortTitle} &rarr;</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onOpenPresentation}
                    className="btn-editorial btn-lime"
                    style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.75rem' }}
                  >
                    <span>Selesai : Lihat Presentasi &rarr;</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stage Bottom Sticky Dock */}
        <footer className="dossier-stage-dock">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={!prevModule}
            className="btn-editorial btn-secondary-editorial"
            style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem', opacity: prevModule ? 1 : 0.4 }}
            aria-label={prevModule ? `Ke bagian sebelumnya: ${prevModule.shortTitle}` : 'Tidak ada bagian sebelumnya'}
          >
            <span>&larr;</span>
            <span className="dossier-dock-btn-text">
              {prevModule ? prevModule.shortTitle : 'Awal Dokumen'}
            </span>
          </button>

          {/* Center Indicator with Keyboard Navigation Hint */}
          <div className="dossier-dock-indicator">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="status-dot"></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.8125rem', color: 'var(--color-green-text)' }}>
                {activeModule.num} / {sectionModules.length}
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', fontWeight: 500 }} className="dossier-dock-name">
                · {activeModule.shortTitle}
              </span>
            </div>
            <div className="dossier-dock-shortcut-hint">
              <span>Gunakan tombol</span> <kbd className="dossier-kbd">&larr;</kbd> <kbd className="dossier-kbd">&rarr;</kbd> <span>untuk navigasi</span>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!nextModule}
            className={`btn-editorial ${nextModule ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
            style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem', opacity: nextModule ? 1 : 0.4 }}
            aria-label={nextModule ? `Ke bagian selanjutnya: ${nextModule.shortTitle}` : 'Akhir dokumen'}
          >
            <span className="dossier-dock-btn-text">
              {nextModule ? nextModule.shortTitle : 'Akhir Dokumen'}
            </span>
            <span>&rarr;</span>
          </button>
        </footer>
      </main>
    </div>
  );
};
