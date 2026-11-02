import React, { useState, useRef, useEffect, useCallback } from 'react';
import { IconHand, IconZoomIn, IconMaximize } from './Icons';

export interface TreeSubNode {
  id: string;
  title: string;
  tag: string;
  summary: string;
  targetSection: string;
  top: number;
  centerY: number;
  metrics?: string[];
}

export interface TreeBranchNode {
  id: string;
  num: string;
  category: string;
  title: string;
  summary: string;
  targetSection: string;
  top: number;
  centerY: number;
  subNodes: TreeSubNode[];
}

export interface FloatingDetailState {
  type: 'subnode' | 'branch';
  id: string;
  num?: string;
  tag?: string;
  category?: string;
  title: string;
  summary: string;
  targetSection: string;
  parentBranchTitle?: string;
  metrics?: string[];
  subNodes?: TreeSubNode[];
  top: number;
  centerY: number;
}

interface EditorialKnowledgeTreeProps {
  onDirectToSection: (sectionId: string) => void;
  searchQuery?: string;
}

const CANVAS_WIDTH = 1480;
const CANVAS_HEIGHT = 1760;

export const EditorialKnowledgeTree: React.FC<EditorialKnowledgeTreeProps> = ({
  onDirectToSection,
  searchQuery = ''
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(0.4);
  const zoomLevelRef = useRef<number>(0.4);
  zoomLevelRef.current = zoomLevel;

  const [isFitActive, setIsFitActive] = useState<boolean>(true);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('b1');
  const [selectedSubNodeId, setSelectedSubNodeId] = useState<string | null>('sn-1-1');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Active Floating Detail Card State (defaults to Konsep Inti on initial mount)
  const [activeDetail, setActiveDetail] = useState<FloatingDetailState | null>({
    type: 'subnode',
    id: 'sn-1-1',
    tag: 'Konsep Inti',
    title: 'Ide Besar & Parameter 3K/5K',
    summary: 'Format fun run 3K & 5K, estimasi awal 2.000 - 3.000 peserta, 1 hari festival gaya hidup & musik.',
    targetSection: 'hero',
    parentBranchTitle: '01 Fondasi, Filosofi & Segmentasi Gerakan',
    category: 'IDENTITAS & STRATEGI',
    metrics: ['Format: 3K & 5K', 'Target: 2.000 - 3.000 Peserta', 'Durasi: 1 Hari Festival'],
    top: 18,
    centerY: 55
  });

  // Dragging and Panning state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const isPointerDownRef = useRef<boolean>(false);
  const dragMovedRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; scrollLeft: number; scrollTop: number }>({
    x: 0,
    y: 0,
    scrollLeft: 0,
    scrollTop: 0
  });

  // Touch Pinch gesture state
  const pinchDataRef = useRef<{
    dist: number;
    zoom: number;
    midX: number;
    midY: number;
    contentX: number;
    contentY: number;
  }>({
    dist: 0,
    zoom: 0.4,
    midX: 0,
    midY: 0,
    contentX: 0,
    contentY: 0
  });

  // 8 Authentic Blueprint Branches with calculated vertical positions ensuring ample gaps
  const branches: TreeBranchNode[] = [
    {
      id: 'b1',
      num: '01',
      category: 'IDENTITAS & STRATEGI',
      title: 'Fondasi, Filosofi & Segmentasi Gerakan',
      summary: 'Konsep fun run festival non-kompetitif, 4 pilar inklusif, dan profil 5 segmen pemuda.',
      targetSection: 'konsep',
      top: 54,
      centerY: 100,
      subNodes: [
        {
          id: 'sn-1-1',
          title: 'Ide Besar & Parameter 3K/5K',
          tag: 'Konsep Inti',
          summary: 'Format fun run 3K & 5K, estimasi awal 2.000 - 3.000 peserta, 1 hari festival.',
          targetSection: 'hero',
          top: 18,
          centerY: 55,
          metrics: ['Format: 3K & 5K', 'Target: 2.000 - 3.000 Peserta', 'Durasi: 1 Hari Festival']
        },
        {
          id: 'sn-1-2',
          title: 'Empat Pilar: Run, Explore, Connect, Celebrate',
          tag: '4 Pilar Pengalaman',
          summary: 'Lari santai, kurasi musik rute, pertemanan baru, dan selebrasi garis finis.',
          targetSection: 'pilar',
          top: 108,
          centerY: 145,
          metrics: ['Run (Jalan & Lari Santai)', 'Explore (Eksplorasi Rute)', 'Connect (Jejaring Komunitas)', 'Celebrate (Finis Festival)']
        }
      ]
    },
    {
      id: 'b2',
      num: '02',
      category: 'PENGALAMAN & AKTIVASI',
      title: 'Desain Pengalaman Rute & Aktivasi Lapangan',
      summary: '1 signature activity dan 3 pendukung demi menjaga kelancaran alur lari.',
      targetSection: 'pengalaman',
      top: 269,
      centerY: 315,
      subNodes: [
        {
          id: 'sn-2-1',
          title: 'Signature: Rhythm Run & Live DJ',
          tag: 'Signature 01',
          summary: 'Komunitas perkusi dan DJ berenergi 128 BPM di titik strategis rute.',
          targetSection: 'pengalaman',
          top: 233,
          centerY: 270,
          metrics: ['Tempo: 128 BPM Energetik', 'Aktivasi: Live Percussion & DJ', 'Titik: KM 1.5, KM 3.5 & Finis']
        },
        {
          id: 'sn-2-2',
          title: 'Katalog 6 Modul Rute & Festival Finis',
          tag: 'Modul Aktivasi',
          summary: 'Mist tunnel, cheer squad kampus, photobooth cetak, dan panggung hiburan.',
          targetSection: 'pengalaman',
          top: 323,
          centerY: 360,
          metrics: ['Mist Tunnel Pendingin', 'Cheer Squad Mahasiswa', 'Instant Print Photobooth', 'Stage Festival Musik']
        }
      ]
    },
    {
      id: 'b3',
      num: '03',
      category: 'KESELAMATAN & MEDIS',
      title: 'Sistem Keselamatan, Medis & Regulasi Lari',
      summary: '8 area keselamatan baku, regulasi COT/COP, dan hak veto Stop-Event Authority.',
      targetSection: 'keselamatan',
      top: 484,
      centerY: 530,
      subNodes: [
        {
          id: 'sn-3-1',
          title: '8 Area Keselamatan Baku & Ambulans Medis',
          tag: 'Mandatori Medis',
          summary: 'Rute steril, tim medis dokter lisensi, evakuasi cepat, dan HT darurat.',
          targetSection: 'keselamatan',
          top: 448,
          centerY: 485,
          metrics: ['Ambulans Advance ICU', 'First Aid Station per 1.5K', 'Tim Medis Berlisensi', 'Kanal HT Terisolasi']
        },
        {
          id: 'sn-3-2',
          title: 'Regulasi COT/COP & Otoritas Stop-Event',
          tag: 'Protokol Darurat',
          summary: 'Simulasi batas waktu rute dan wewenang mutlak pembatalan jika terjadi krisis cuaca.',
          targetSection: 'keselamatan',
          top: 538,
          centerY: 575,
          metrics: ['Cut-Off Time (COT) Baku', 'Cut-Off Point (COP) Sapu', 'Stop-Event Authority Mutlak', 'Protokol Cuaca Ekstrem']
        }
      ]
    },
    {
      id: 'b4',
      num: '04',
      category: 'ORGANISASI & PIC',
      title: 'Struktur Organisasi & Tata Kelola Tim Inti',
      summary: 'Pembagian 8 divisi fungsional dengan PIC terarah dan jalur vendor kritis.',
      targetSection: 'organisasi',
      top: 699,
      centerY: 745,
      subNodes: [
        {
          id: 'sn-4-1',
          title: '8 Divisi PIC & Garis Tanggung Jawab',
          tag: 'Akuntabilitas PIC',
          summary: 'Event Director, Safety Medis, Operasional, Sponsor, Marketing, dan Keuangan.',
          targetSection: 'organisasi',
          top: 663,
          centerY: 700,
          metrics: ['8 Divisi Inti Blueprint', 'Single Point of Contact', 'Checklist H-14 s/d D-Day', 'Matrix Eskalasi Masalah']
        },
        {
          id: 'sn-4-2',
          title: 'Matriks Koordinasi 3 Vendor Kritis',
          tag: 'Vendor Kritis',
          summary: 'Jalur komando langsung untuk vendor medis, vendor keamanan, dan konstruksi audio.',
          targetSection: 'organisasi',
          top: 753,
          centerY: 790,
          metrics: ['Timing System Akurat', 'Rigging Panggung Teruji', 'Generator Daya Cadangan', 'SOP Bongkar Pasang Cepat']
        }
      ]
    },
    {
      id: 'b5',
      num: '05',
      category: 'TIMELINE & PERTUMBUHAN',
      title: 'Roadmap Persiapan 12 - 16 Minggu & Replikasi',
      summary: 'Jadwal persiapan bertahap, strategi kampanye publik, dan rencana tur nasional.',
      targetSection: 'roadmap',
      top: 914,
      centerY: 960,
      subNodes: [
        {
          id: 'sn-5-1',
          title: 'Roadmap Operasional 12 - 16 Minggu',
          tag: 'Jadwal Bertahap',
          summary: '6 fase: Feasibility, Venue & Partner, Launch, Production, Readiness, Execution.',
          targetSection: 'roadmap',
          top: 878,
          centerY: 915,
          metrics: ['Fase 1: Inisiasi (W-16)', 'Fase 2: Promosi (W-8)', 'Fase 3: Produksi (W-2)', 'Fase 4: D-Day & LPJ']
        },
        {
          id: 'sn-5-2',
          title: 'Timeline Marketing & Ekspansi Nasional',
          tag: 'Ekspansi Gerakan',
          summary: 'Kampanye T-12 hingga T+14 serta replikasi dari Jawa Barat ke kota-kota Indonesia.',
          targetSection: 'roadmap',
          top: 968,
          centerY: 1005,
          metrics: ['Pilot: Chapter 01 Jawa Barat', 'Fase 2: Kota Primer Jawa', 'Fase 3: Hub Nasional', 'Model Komunitas Mandiri']
        }
      ]
    },
    {
      id: 'b6',
      num: '06',
      category: 'KOLABORASI & SPONSOR',
      title: 'Ekosistem Kemitraan & Model Nilai Bersama',
      summary: 'Peluang kolaborasi bernilai nyata bagi brand, bukan sekadar tempel logo.',
      targetSection: 'mitra',
      top: 1129,
      centerY: 1175,
      subNodes: [
        {
          id: 'sn-6-1',
          title: '4 Kategori Kemitraan Kunci',
          tag: 'Kemitraan Kunci',
          summary: 'Hydration Partner, Apparel Partner, Experience Partner, dan Community Partner.',
          targetSection: 'mitra',
          top: 1093,
          centerY: 1130,
          metrics: ['Title Partner Eksklusif', 'Official Hydration & Apparel', 'Branded Engagement Zone', 'ROI & Media Exposure']
        },
        {
          id: 'sn-6-2',
          title: 'Direktori Pertukaran Nilai 8 Sektor',
          tag: 'Direktori 8 Sektor',
          summary: 'Sinergi mutualisme dengan sektor FMCG, FinTech, Telco, Kesehatan, dan Media.',
          targetSection: 'mitra',
          top: 1183,
          centerY: 1220,
          metrics: ['Apparel & Footwear', 'Isotonik & F&B Sehat', 'Fintech & Digital Banking', 'Komunitas & Kampus']
        }
      ]
    },
    {
      id: 'b7',
      num: '07',
      category: 'ANGGARAN & METRIK',
      title: 'Anggaran, 8 Dimensi KPI & Platform Digital',
      summary: 'Framework 9 komponen biaya, 3 skenario arus kas, dan 4 fase platform web.',
      targetSection: 'metrik',
      top: 1344,
      centerY: 1390,
      subNodes: [
        {
          id: 'sn-7-1',
          title: '8 Dimensi Indikator Keberhasilan (KPI)',
          tag: '8 Dimensi KPI',
          summary: 'Partisipasi, finansial, kepuasan pelari, komunitas, partnership, dan keselamatan.',
          targetSection: 'metrik',
          top: 1308,
          centerY: 1345,
          metrics: ['Target: 2.000 - 3.000 Peserta', 'NPS Kepuasan >= 85%', 'Zero Fatal Medical Accident', 'Social Media Reach']
        },
        {
          id: 'sn-7-2',
          title: '9 Komponen Budget & 3 Skenario Kas',
          tag: 'Manajemen Keuangan',
          summary: 'Perencanaan realistis dengan buffer darurat 10 - 15% serta model kas konservatif.',
          targetSection: 'metrik',
          top: 1398,
          centerY: 1435,
          metrics: ['Produksi Rute 45%', 'Keselamatan & Medis 20%', 'Marketing & Media 20%', 'Dana Kontinjensi 15%']
        }
      ]
    },
    {
      id: 'b8',
      num: '08',
      category: 'KESIAPAN & PRIORITAS',
      title: 'Checklist Hari H & Prioritas Kerja Sekarang',
      summary: 'Validasi kesiapan 15 poin sebelum flag-off dan 6 prioritas inisiasi Chapter 01.',
      targetSection: 'checklist',
      top: 1559,
      centerY: 1605,
      subNodes: [
        {
          id: 'sn-8-1',
          title: 'Checklist Hari H: 15 Poin Validasi',
          tag: 'Checklist 15 Poin',
          summary: 'Audit kesiapan panggung, ambulans steril, race pack, pos mist, dan evaluasi.',
          targetSection: 'checklist',
          top: 1523,
          centerY: 1560,
          metrics: ['Izin Polisi & Dishub Lengkap', 'Sterilisasi Rute H-1 Malam', 'Racepack Collection H-3', 'Briefing Marshal & Medis H-1']
        },
        {
          id: 'sn-8-2',
          title: '6 Prioritas Tindakan Segera',
          tag: 'Prioritas Aksi',
          summary: 'Finalisasi konsep, kunci lokasi Jabar, bentuk tim inti, dan susun proposal mitra.',
          targetSection: 'checklist',
          top: 1613,
          centerY: 1650,
          metrics: ['Kuadran 1: Rute & Legalitas', 'Kuadran 2: Sponsorship MoU', 'Kuadran 3: Tiket & Promosi', 'Kuadran 4: Vendor Pendukung']
        }
      ]
    }
  ];

  // Mathematical Focal Point Zoom helper
  const applyZoomWithFocal = useCallback((targetZoom: number, focalX: number, focalY: number) => {
    const vp = viewportRef.current;
    if (!vp) return;

    const currentZoom = zoomLevelRef.current;
    const newZoom = Math.max(0.18, Math.min(2.0, targetZoom));
    if (Math.abs(newZoom - currentZoom) < 0.001) return;

    // Content coordinate under focal point before zoom
    const contentX = (vp.scrollLeft + focalX) / currentZoom;
    const contentY = (vp.scrollTop + focalY) / currentZoom;

    const newScrollLeft = contentX * newZoom - focalX;
    const newScrollTop = contentY * newZoom - focalY;

    zoomLevelRef.current = newZoom;
    setZoomLevel(Number(newZoom.toFixed(3)));
    setIsFitActive(false);

    // Apply scroll synchronously to keep focal point anchored
    requestAnimationFrame(() => {
      if (vp) {
        vp.scrollLeft = Math.max(0, newScrollLeft);
        vp.scrollTop = Math.max(0, newScrollTop);
      }
    });
  }, []);

  // Auto Fit-to-Screen calculation
  const fitToScreen = useCallback(() => {
    if (!viewportRef.current) return;
    const vpWidth = viewportRef.current.clientWidth;
    const vpHeight = viewportRef.current.clientHeight || 650;

    const padX = 40;
    const padY = 40;

    const scaleX = (vpWidth - padX) / CANVAS_WIDTH;
    const scaleY = (vpHeight - padY) / CANVAS_HEIGHT;
    const bestScale = Math.min(scaleX, scaleY);

    const clampedScale = Math.max(0.2, Math.min(1.0, Number(bestScale.toFixed(3))));
    zoomLevelRef.current = clampedScale;
    setZoomLevel(clampedScale);
    setIsFitActive(true);

    if (viewportRef.current) {
      viewportRef.current.scrollLeft = 0;
      viewportRef.current.scrollTop = 0;
    }
  }, []);

  // Run Fit-to-screen on mount and window resize
  useEffect(() => {
    const timer = setTimeout(() => {
      fitToScreen();
    }, 60);

    window.addEventListener('resize', fitToScreen);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', fitToScreen);
    };
  }, [fitToScreen]);

  // Fullscreen toggle handler supporting HTML5 Fullscreen API & CSS fallback
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    const isNativeFs = Boolean(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement
    );

    if (isNativeFs || isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
      setIsFullscreen(false);
      setTimeout(() => fitToScreen(), 120);
    } else {
      const el = containerRef.current as any;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {
          setIsFullscreen(true);
        });
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else {
        setIsFullscreen(true);
      }
      setIsFullscreen(true);
      setTimeout(() => fitToScreen(), 120);
    }
  }, [isFullscreen, fitToScreen]);

  // Sync fullscreen state when user exits with browser Esc
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNativeFs = Boolean(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement
      );
      setIsFullscreen(isNativeFs);
      setTimeout(() => {
        fitToScreen();
      }, 120);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, [fitToScreen]);

  // Keyboard shortcut listener: Esc to exit fullscreen / close active detail, F to toggle fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
          setIsFullscreen(false);
          setTimeout(() => fitToScreen(), 120);
        } else if (activeDetail) {
          setActiveDetail(null);
          setSelectedSubNodeId(null);
        }
      } else if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          toggleFullscreen();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDetail, isFullscreen, toggleFullscreen, fitToScreen]);

  // Center-based button zoom
  const handleZoomDelta = (delta: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const focalX = vp.clientWidth / 2;
    const focalY = vp.clientHeight / 2;
    applyZoomWithFocal(zoomLevelRef.current + delta, focalX, focalY);
  };

  const handleReset100 = () => {
    const vp = viewportRef.current;
    if (!vp) return;
    const focalX = vp.clientWidth / 2;
    const focalY = vp.clientHeight / 2;
    applyZoomWithFocal(1.0, focalX, focalY);
  };

  // Direct Node Selection Functions with Auto-Center Viewport Assist
  const selectSubNode = useCallback((sn: TreeSubNode) => {
    const parentBranch = branches.find((branch) =>
      branch.subNodes.some((sub) => sub.id === sn.id)
    );
    if (parentBranch) {
      setSelectedBranchId(parentBranch.id);
    }
    setSelectedSubNodeId(sn.id);
    setActiveDetail({
      type: 'subnode',
      id: sn.id,
      tag: sn.tag,
      title: sn.title,
      summary: sn.summary,
      targetSection: sn.targetSection,
      parentBranchTitle: parentBranch ? `${parentBranch.num} ${parentBranch.title}` : undefined,
      category: parentBranch ? parentBranch.category : undefined,
      metrics: sn.metrics,
      top: sn.top,
      centerY: sn.centerY
    });

    // Auto-scroll viewport if floating card is outside visible view
    if (viewportRef.current) {
      const vp = viewportRef.current;
      const zoom = zoomLevelRef.current;
      const currentScrollLeft = vp.scrollLeft;
      const currentScrollTop = vp.scrollTop;
      const vpWidth = vp.clientWidth;
      const vpHeight = vp.clientHeight;

      const cardLeftInPx = 800 * zoom;
      const cardRightInPx = (1150 + 310) * zoom;
      const cardTopInPx = Math.max(0, (sn.top - 60) * zoom);

      let targetScrollLeft = currentScrollLeft;
      let targetScrollTop = currentScrollTop;

      if (currentScrollLeft + vpWidth < cardRightInPx + 30) {
        targetScrollLeft = Math.max(0, cardRightInPx + 60 - vpWidth);
      } else if (currentScrollLeft > cardLeftInPx - 30) {
        targetScrollLeft = Math.max(0, cardLeftInPx - 40);
      }

      if (currentScrollTop + vpHeight < cardTopInPx + 400 * zoom || currentScrollTop > cardTopInPx) {
        targetScrollTop = Math.max(0, cardTopInPx - 40);
      }

      if (Math.abs(targetScrollLeft - currentScrollLeft) > 10 || Math.abs(targetScrollTop - currentScrollTop) > 10) {
        vp.scrollTo({
          left: targetScrollLeft,
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }
  }, [branches]);

  const selectBranch = useCallback((b: TreeBranchNode) => {
    setSelectedBranchId(b.id);
    setSelectedSubNodeId(null);
    setActiveDetail({
      type: 'branch',
      id: b.id,
      num: b.num,
      category: b.category,
      title: b.title,
      summary: b.summary,
      targetSection: b.targetSection,
      top: b.top,
      centerY: b.centerY,
      subNodes: b.subNodes
    });

    if (viewportRef.current) {
      const vp = viewportRef.current;
      const zoom = zoomLevelRef.current;
      const currentScrollLeft = vp.scrollLeft;
      const currentScrollTop = vp.scrollTop;
      const vpWidth = vp.clientWidth;
      const vpHeight = vp.clientHeight;

      const branchLeftInPx = 420 * zoom;
      const cardRightInPx = (1150 + 310) * zoom;
      const branchTopInPx = Math.max(0, (b.top - 60) * zoom);

      let targetScrollLeft = currentScrollLeft;
      let targetScrollTop = currentScrollTop;

      if (currentScrollLeft + vpWidth < cardRightInPx + 30) {
        targetScrollLeft = Math.max(0, cardRightInPx + 60 - vpWidth);
      } else if (currentScrollLeft > branchLeftInPx - 30) {
        targetScrollLeft = Math.max(0, branchLeftInPx - 40);
      }

      if (currentScrollTop + vpHeight < branchTopInPx + 400 * zoom || currentScrollTop > branchTopInPx) {
        targetScrollTop = Math.max(0, branchTopInPx - 40);
      }

      if (Math.abs(targetScrollLeft - currentScrollLeft) > 10 || Math.abs(targetScrollTop - currentScrollTop) > 10) {
        vp.scrollTo({
          left: targetScrollLeft,
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  // Pointer / Mouse Drag-to-Pan Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!viewportRef.current) return;
    // Don't drag if clicking cards, floating detail, buttons, links, or inputs directly
    if ((e.target as HTMLElement).closest('button, a, input, .editorial-tree-branch-card, .editorial-tree-leaf-card, .tree-floating-detail-card, .editorial-tree-root-box')) {
      return;
    }

    isPointerDownRef.current = true;
    dragMovedRef.current = false;
    setIsDragging(true);

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: viewportRef.current.scrollLeft,
      scrollTop: viewportRef.current.scrollTop
    };

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current || !viewportRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (Math.hypot(dx, dy) > 5) {
      dragMovedRef.current = true;
    }

    viewportRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx;
    viewportRef.current.scrollTop = dragStartRef.current.scrollTop - dy;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isPointerDownRef.current) {
      isPointerDownRef.current = false;
      setIsDragging(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
    setTimeout(() => {
      dragMovedRef.current = false;
    }, 60);
  };

  // Native Wheel (Mac Trackpad Pinch & Ctrl+Wheel) and Touch Pinch Listeners
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    // Wheel handler: handles Mac Trackpad Pinch-to-Zoom (e.ctrlKey === true)
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const rect = vp.getBoundingClientRect();
        const focalX = e.clientX - rect.left;
        const focalY = e.clientY - rect.top;
        const zoomFactor = Math.exp(-e.deltaY * 0.007);
        applyZoomWithFocal(zoomLevelRef.current * zoomFactor, focalX, focalY);
      }
    };

    // Touch handlers for mobile & tablet drag and pinch
    const onTouchStart = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input')) return;

      const rect = vp.getBoundingClientRect();
      if (e.touches.length === 2) {
        // Pinch start
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        const midX = (t1.clientX + t2.clientX) / 2 - rect.left;
        const midY = (t1.clientY + t2.clientY) / 2 - rect.top;

        pinchDataRef.current = {
          dist,
          zoom: zoomLevelRef.current,
          midX,
          midY,
          contentX: (vp.scrollLeft + midX) / zoomLevelRef.current,
          contentY: (vp.scrollTop + midY) / zoomLevelRef.current
        };
        dragMovedRef.current = true;
      } else if (e.touches.length === 1) {
        // Single touch pan start
        const t = e.touches[0];
        dragStartRef.current = {
          x: t.clientX,
          y: t.clientY,
          scrollLeft: vp.scrollLeft,
          scrollTop: vp.scrollTop
        };
        dragMovedRef.current = false;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = vp.getBoundingClientRect();
      if (e.touches.length === 2 && pinchDataRef.current.dist > 0) {
        // Two-finger Pinch to Zoom
        e.preventDefault();
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const newDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        const ratio = newDist / pinchDataRef.current.dist;
        const newZoom = Math.max(0.18, Math.min(2.0, pinchDataRef.current.zoom * ratio));

        const currMidX = (t1.clientX + t2.clientX) / 2 - rect.left;
        const currMidY = (t1.clientY + t2.clientY) / 2 - rect.top;

        zoomLevelRef.current = newZoom;
        setZoomLevel(Number(newZoom.toFixed(3)));
        setIsFitActive(false);

        vp.scrollLeft = pinchDataRef.current.contentX * newZoom - currMidX;
        vp.scrollTop = pinchDataRef.current.contentY * newZoom - currMidY;
        dragMovedRef.current = true;
      } else if (e.touches.length === 1) {
        // Single finger Drag / Pan
        const t = e.touches[0];
        const dx = t.clientX - dragStartRef.current.x;
        const dy = t.clientY - dragStartRef.current.y;

        if (Math.hypot(dx, dy) > 4) {
          dragMovedRef.current = true;
        }

        vp.scrollLeft = dragStartRef.current.scrollLeft - dx;
        vp.scrollTop = dragStartRef.current.scrollTop - dy;
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        // Transition back from 2-finger to 1-finger gracefully
        const t = e.touches[0];
        dragStartRef.current = {
          x: t.clientX,
          y: t.clientY,
          scrollLeft: vp.scrollLeft,
          scrollTop: vp.scrollTop
        };
      } else if (e.touches.length === 0) {
        pinchDataRef.current.dist = 0;
      }
    };

    vp.addEventListener('wheel', onWheel, { passive: false });
    vp.addEventListener('touchstart', onTouchStart, { passive: false });
    vp.addEventListener('touchmove', onTouchMove, { passive: false });
    vp.addEventListener('touchend', onTouchEnd);
    vp.addEventListener('touchcancel', onTouchEnd);

    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('touchstart', onTouchStart);
      vp.removeEventListener('touchmove', onTouchMove);
      vp.removeEventListener('touchend', onTouchEnd);
      vp.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [applyZoomWithFocal]);

  // Helper function to build clean horizontal S-curve bezier path
  const buildSCurve = (x1: number, y1: number, x2: number, y2: number) => {
    const midX = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
  };

  const floatingCardTop = activeDetail
    ? Math.max(15, Math.min(CANVAS_HEIGHT - 480, activeDetail.top - 15))
    : 50;

  return (
    <div
      ref={containerRef}
      className={`editorial-tree-card ${isFullscreen ? 'is-fullscreen' : ''}`}
    >
      {/* Corner crosshairs for architectural branding */}
      <span className="corner-crosshair top-left" aria-hidden="true">+</span>
      <span className="corner-crosshair top-right" aria-hidden="true">+</span>
      <span className="corner-crosshair bottom-left" aria-hidden="true">+</span>
      <span className="corner-crosshair bottom-right" aria-hidden="true">+</span>

      {/* Toolbar / Header */}
      <div className="editorial-tree-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div className="hero-visual-blueprint-tag" style={{ margin: 0 }}>
            <span className="status-dot-pulse" aria-hidden="true"></span>
            <span>BAGAN STRUKTUR POHON INFORMASI // 8 PILAR UTAMA</span>
          </div>
          <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.2rem 0.5rem' }}>
            Chapter 01: West Java
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-green-deep)', fontFamily: 'var(--font-mono)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <IconHand size={12} />
              <span>Drag untuk geser</span>
            </span>
            <span style={{ opacity: 0.4 }}>&bull;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <IconZoomIn size={12} />
              <span>Pinch / Trackpad untuk zoom</span>
            </span>
          </span>
        </div>

        {/* Zoom Controls, Fit to Screen & Fullscreen Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {/* Fullscreen Toggle Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`pixel-view-toggle-btn ${isFullscreen ? 'active' : ''}`}
            style={{
              padding: '0.3rem 0.65rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: isFullscreen ? 'var(--color-green-deep)' : undefined,
              color: isFullscreen ? 'var(--accent-lime)' : undefined
            }}
            aria-label={isFullscreen ? 'Keluar layar penuh (Esc)' : 'Layar penuh (Fullscreen)'}
            title={isFullscreen ? 'Keluar Layar Penuh (Esc)' : 'Layar Penuh (F)'}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {isFullscreen ? (
                <>
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </>
              ) : (
                <>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </>
              )}
            </svg>
            <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>

          <button
            type="button"
            onClick={fitToScreen}
            className={`pixel-view-toggle-btn ${isFitActive ? 'active' : ''}`}
            style={{ padding: '0.3rem 0.65rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            aria-label="Paskan seluruh bagan ke layar"
            title="Fit to Screen"
          >
            <IconMaximize size={12} />
            <span>Fit to Screen</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--bg-primary)', padding: '2px 4px', borderRadius: '6px', border: '1px solid var(--border-light)' }}>
            <button
              type="button"
              onClick={() => handleZoomDelta(-0.1)}
              className="pixel-view-toggle-btn"
              style={{ width: '26px', height: '26px', justifyContent: 'center', padding: 0 }}
              aria-label="Perkecil diagram"
              title="Zoom Out (-)"
            >
              &minus;
            </button>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: 'var(--color-green-deep)',
                minWidth: '40px',
                textAlign: 'center'
              }}
            >
              {Math.round(zoomLevel * 100)}%
            </span>

            <button
              type="button"
              onClick={() => handleZoomDelta(0.1)}
              className="pixel-view-toggle-btn"
              style={{ width: '26px', height: '26px', justifyContent: 'center', padding: 0 }}
              aria-label="Perbesar diagram"
              title="Zoom In (+)"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleReset100}
            className={`pixel-view-toggle-btn ${Math.abs(zoomLevel - 1.0) < 0.05 && !isFitActive ? 'active' : ''}`}
            style={{ padding: '0.3rem 0.55rem', fontSize: '0.6875rem' }}
            aria-label="Skala asli 100%"
          >
            100%
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Architecture Viewport with Drag & Pinch */}
      <div
        ref={viewportRef}
        className={`editorial-tree-viewport ${isDragging ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="editorial-tree-scroll-container"
          style={{
            width: `${CANVAS_WIDTH * zoomLevel}px`,
            height: `${CANVAS_HEIGHT * zoomLevel}px`
          }}
        >
          <div
            className="editorial-tree-canvas"
            style={{
              width: `${CANVAS_WIDTH}px`,
              height: `${CANVAS_HEIGHT}px`,
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top left'
            }}
          >
            {/* SVG Connecting Branch Lines */}
            <svg
              className="editorial-tree-svg"
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#DFE5DA" strokeWidth="0.5" strokeOpacity="0.7" />
                </pattern>
              </defs>

              {/* Background Architecture Grid */}
              <rect width={CANVAS_WIDTH} height={CANVAS_HEIGHT} fill="url(#archGrid)" />

              {/* Vertical Guideline Columns */}
              <line x1="180" y1="20" x2="180" y2="1740" stroke="#DFE5DA" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="565" y1="20" x2="565" y2="1740" stroke="#DFE5DA" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="960" y1="20" x2="960" y2="1740" stroke="#DFE5DA" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="1295" y1="20" x2="1295" y2="1740" stroke="#DFE5DA" strokeWidth="1.2" strokeDasharray="4 4" />

              {/* Column Category Watermarks */}
              <text x="180" y="24" textAnchor="middle" fill="#153F35" fillOpacity="0.35" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)">
                LEVEL 0 : ROOT GERAKAN
              </text>
              <text x="565" y="24" textAnchor="middle" fill="#153F35" fillOpacity="0.35" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)">
                LEVEL 1 : 8 PILAR BLUEPRINT
              </text>
              <text x="960" y="24" textAnchor="middle" fill="#153F35" fillOpacity="0.35" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)">
                LEVEL 2 : SUB-TOPIK & AKSI
              </text>
              <text x="1295" y="24" textAnchor="middle" fill="#153F35" fillOpacity="0.35" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)">
                LEVEL 3 : KARTU DETAIL INTERAKTIF
              </text>

              {/* S-Curves from Root (x=320, y=860) to 8 Branches (x=420, y=b.centerY) */}
              {branches.map((b) => {
                const rootExitX = 320;
                const rootExitY = 860;
                const branchEntryX = 420;
                const branchEntryY = b.centerY;
                const isSelected = selectedBranchId === b.id;

                return (
                  <g key={`root-to-${b.id}`}>
                    <path
                      d={buildSCurve(rootExitX, rootExitY, branchEntryX, branchEntryY)}
                      stroke={isSelected ? '#153F35' : '#7D988E'}
                      strokeWidth={isSelected ? 3.0 : 1.8}
                      strokeLinecap="round"
                      strokeDasharray={isSelected ? undefined : '3 3'}
                      fill="none"
                      opacity={isSelected ? 0.95 : 0.6}
                    />
                    <circle
                      cx={branchEntryX}
                      cy={branchEntryY}
                      r={isSelected ? 5 : 3.5}
                      fill={isSelected ? '#D7FF3F' : '#ffffff'}
                      stroke="#153F35"
                      strokeWidth={isSelected ? 2.5 : 1.5}
                    />
                  </g>
                );
              })}

              {/* S-Curves from each Branch (x=710, y=b.centerY) to its Sub-Nodes (x=800, y=sn.centerY) */}
              {branches.map((b) => {
                const branchExitX = 710;
                const branchExitY = b.centerY;
                const isSelected = selectedBranchId === b.id;

                return b.subNodes.map((sn) => {
                  const subNodeEntryX = 800;
                  const subNodeEntryY = sn.centerY;
                  const isHovered = hoveredNodeId === sn.id;

                  return (
                    <g key={`branch-${b.id}-to-${sn.id}`}>
                      <path
                        d={buildSCurve(branchExitX, branchExitY, subNodeEntryX, subNodeEntryY)}
                        stroke={isHovered ? '#153F35' : isSelected ? '#256B5B' : '#B8C7BF'}
                        strokeWidth={isHovered ? 2.6 : isSelected ? 2.0 : 1.2}
                        strokeLinecap="round"
                        fill="none"
                        opacity={isHovered ? 1 : isSelected ? 0.9 : 0.45}
                      />
                      <circle
                        cx={subNodeEntryX}
                        cy={subNodeEntryY}
                        r={isHovered ? 4.5 : 3}
                        fill={isHovered ? '#D7FF3F' : '#ffffff'}
                        stroke="#153F35"
                        strokeWidth={1.5}
                      />
                    </g>
                  );
                });
              })}

              {/* Dynamic S-Curve Connector to Floating Detail Card */}
              {activeDetail && (
                <g key="active-detail-connector">
                  {activeDetail.type === 'subnode' ? (
                    <>
                      <path
                        d={buildSCurve(
                          1120,
                          activeDetail.centerY,
                          1150,
                          Math.min(floatingCardTop + 130, Math.max(floatingCardTop + 35, activeDetail.centerY))
                        )}
                        stroke="#153F35"
                        strokeWidth={2.8}
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle
                        cx={1120}
                        cy={activeDetail.centerY}
                        r={5}
                        fill="#D7FF3F"
                        stroke="#153F35"
                        strokeWidth={2}
                      />
                      <circle
                        cx={1150}
                        cy={Math.min(floatingCardTop + 130, Math.max(floatingCardTop + 35, activeDetail.centerY))}
                        r={4}
                        fill="#153F35"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d={buildSCurve(
                          710,
                          activeDetail.centerY,
                          1150,
                          Math.min(floatingCardTop + 130, Math.max(floatingCardTop + 35, activeDetail.centerY))
                        )}
                        stroke="#153F35"
                        strokeWidth={2.2}
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        fill="none"
                        opacity={0.65}
                      />
                      <circle
                        cx={710}
                        cy={activeDetail.centerY}
                        r={5}
                        fill="#D7FF3F"
                        stroke="#153F35"
                        strokeWidth={2}
                      />
                      <circle
                        cx={1150}
                        cy={Math.min(floatingCardTop + 130, Math.max(floatingCardTop + 35, activeDetail.centerY))}
                        r={4}
                        fill="#153F35"
                      />
                    </>
                  )}
                </g>
              )}
            </svg>

            {/* COLUMN 0: ROOT NODE CARD */}
            <div
              className="editorial-tree-root-box"
              style={{
                position: 'absolute',
                left: '50px',
                top: '760px',
                width: '270px',
                zIndex: 10
              }}
            >
              <div className="tree-root-badge" style={{ margin: '0 0 0.5rem 0', display: 'inline-flex' }}>
                ROOT // YOUTHON BLUEPRINT
              </div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-green-deep)', margin: '0 0 0.25rem 0', letterSpacing: '-0.02em' }}>
                YOUTHON
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-text)', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                Switch Your Energy On.
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)', lineHeight: '1.5', margin: '0 0 0.75rem 0' }}>
                Gerakan gaya hidup lari santai yang menggabungkan olahraga, live musik, komunitas, dan festival anak muda.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                  <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.45rem' }}>
                    3K & 5K Fun Run
                  </span>
                  <span className="status-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.45rem' }}>
                    2.000 - 3.000 Peserta (Jabar)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!dragMovedRef.current) {
                      onDirectToSection('hero');
                    }
                  }}
                  className="btn-editorial btn-primary-editorial"
                  style={{ width: '100%', minHeight: '32px', fontSize: '0.75rem', justifyContent: 'center', marginTop: '0.35rem' }}
                >
                  <span>Direct ke Hero</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* COLUMN 1: 8 CORE BLUEPRINT BRANCHES */}
            {branches.map((b) => {
              const isSelected = selectedBranchId === b.id;
              const matchesSearch =
                searchQuery.trim() !== '' &&
                (b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  b.summary.toLowerCase().includes(searchQuery.toLowerCase()));

              return (
                <div
                  key={b.id}
                  className={`editorial-tree-branch-card ${isSelected ? 'selected' : ''} ${matchesSearch ? 'search-match' : ''
                    }`}
                  style={{
                    position: 'absolute',
                    left: '420px',
                    top: `${b.top}px`,
                    width: '290px',
                    zIndex: isSelected ? 12 : 5
                  }}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectBranch(b);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      selectBranch(b);
                    }
                  }}
                  aria-label={`Pilar ${b.num}: ${b.title}`}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <span className="editorial-tree-num-badge">
                      {b.num}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-green-deep)', letterSpacing: '0.04em', display: 'block' }}>
                        {b.category}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '0.8125rem', fontWeight: 800, color: 'var(--color-green-text)', margin: '0.1rem 0 0.2rem 0', lineHeight: '1.3' }}>
                        {b.title}
                      </h4>
                      <p style={{ fontSize: '0.6875rem', color: 'var(--color-green-muted)', margin: 0, lineHeight: '1.4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {b.summary}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.45rem', paddingTop: '0.4rem', borderTop: '1px solid var(--border-light)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--color-green-muted)' }}>
                      {b.subNodes.length} Sub-Topik
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!dragMovedRef.current) {
                          onDirectToSection(b.targetSection);
                        }
                      }}
                      className="editorial-tree-direct-link"
                    >
                      <span>Direct</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* COLUMN 2: SUB-NODES (All 16 Tactical Nodes with ample vertical spacing) */}
            {branches.flatMap((b) => b.subNodes).map((sn) => {
              const isHovered = hoveredNodeId === sn.id;
              const isSelected = selectedSubNodeId === sn.id;
              const matchesSearch =
                searchQuery.trim() !== '' &&
                (sn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  sn.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  sn.summary.toLowerCase().includes(searchQuery.toLowerCase()));

              return (
                <div
                  key={sn.id}
                  className={`editorial-tree-leaf-card ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''} ${matchesSearch ? 'search-match' : ''
                    }`}
                  style={{
                    position: 'absolute',
                    left: '800px',
                    top: `${sn.top}px`,
                    width: '320px',
                    zIndex: isSelected ? 18 : isHovered ? 15 : 6
                  }}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                  }}
                  onMouseEnter={() => setHoveredNodeId(sn.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectSubNode(sn);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      selectSubNode(sn);
                    }
                  }}
                  aria-label={`${sn.title}. Tag: ${sn.tag}. Klik untuk buka kartu detail terapung.`}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-green-deep)', backgroundColor: 'var(--bg-secondary)', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>
                      {sn.tag}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDirectToSection(sn.targetSection);
                      }}
                      className="editorial-tree-direct-link"
                      style={{ padding: '0.1rem 0.35rem', fontSize: '0.625rem' }}
                      title={`Langsung direct ke seksi ${sn.targetSection}`}
                      aria-label={`Direct ke seksi ${sn.targetSection}`}
                    >
                      <span>Direct</span>
                      <span className="editorial-tree-jump-icon" aria-hidden="true">&rarr;</span>
                    </button>
                  </div>

                  <h5 style={{ fontFamily: 'var(--font-headline)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0 0 0.15rem 0', lineHeight: '1.3' }}>
                    {sn.title}
                  </h5>
                  <p style={{ fontSize: '0.6875rem', color: 'var(--color-green-muted)', margin: 0, lineHeight: '1.4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {sn.summary}
                  </p>
                </div>
              );
            })}

            {/* COLUMN 3: FLOATING DETAIL CARD (INTERACTIVE POPOVER) */}
            {activeDetail && (
              <div
                className="tree-floating-detail-card"
                style={{
                  top: `${floatingCardTop}px`
                }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                }}
                role="region"
                aria-label="Detail Kartu Terapung"
              >
                {/* Floating Header */}
                <div className="tree-floating-header">
                  <div>
                    <span className="tree-floating-eyebrow">
                      {activeDetail.type === 'subnode'
                        ? `TAG // ${activeDetail.tag?.toUpperCase() || 'DETAIL'}`
                        : `PILAR ${activeDetail.num} // ${activeDetail.category || 'DETAIL'}`}
                    </span>
                    {activeDetail.parentBranchTitle && (
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'var(--color-green-muted)', marginTop: '0.2rem' }}>
                        {activeDetail.parentBranchTitle}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveDetail(null);
                      setSelectedSubNodeId(null);
                    }}
                    className="tree-floating-close-btn"
                    title="Tutup kartu detail (Esc)"
                    aria-label="Tutup kartu detail"
                  >
                    &#x2715;
                  </button>
                </div>

                {/* Title */}
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-green-text)', margin: '0 0 0.35rem 0', lineHeight: '1.35' }}>
                  {activeDetail.title}
                </h4>

                {/* Summary */}
                <p style={{ fontSize: '0.75rem', color: 'var(--color-green-muted)', lineHeight: '1.5', margin: '0 0 0.65rem 0' }}>
                  {activeDetail.summary}
                </p>

                {/* Key Metrics Chips */}
                {activeDetail.metrics && activeDetail.metrics.length > 0 && (
                  <div className="tree-floating-metrics-grid">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', fontWeight: 700, color: 'var(--color-green-deep)', letterSpacing: '0.04em' }}>
                      PARAMETER KUNCI:
                    </span>
                    {activeDetail.metrics.map((m, idx) => (
                      <div key={idx} className="tree-floating-metric-item">
                        <span className="tree-floating-metric-dot" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* If Branch: Show Sub-topics list */}
                {activeDetail.type === 'branch' && activeDetail.subNodes && (
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem' }}>
                      SUB-TOPIK TERKAIT:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {activeDetail.subNodes.map((sn) => (
                        <button
                          key={sn.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            selectSubNode(sn);
                          }}
                          className="btn-editorial btn-secondary-editorial"
                          style={{ minHeight: '28px', padding: '0.2rem 0.5rem', fontSize: '0.6875rem', justifyContent: 'space-between', textAlign: 'left' }}
                        >
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sn.title}</span>
                          <span>&rarr;</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    onDirectToSection(activeDetail.targetSection);
                  }}
                  className="btn-editorial btn-primary-editorial"
                  style={{ width: '100%', minHeight: '34px', fontSize: '0.75rem', justifyContent: 'center', marginTop: '0.35rem' }}
                >
                  <span>Direct ke Data Terkait</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
