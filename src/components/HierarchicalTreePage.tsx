import React, { useState, useMemo } from 'react';
import { YOUTHON_METADATA, PRESENTATION_SLIDES } from '../data/youthonContent';
import { EditorialKnowledgeTree } from './EditorialKnowledgeTree';
import { IconLightbulb, IconTree, IconLayers } from './Icons';

interface TreeLeaf {
  id: string;
  title: string;
  summary: string;
  tag: string;
  targetSection: string;
}

interface TreeBranch {
  id: string;
  num: string;
  category: string;
  title: string;
  summary: string;
  primaryTarget: string;
  leaves: TreeLeaf[];
}

interface HierarchicalTreePageProps {
  onBackToEditorial: () => void;
  onDirectToSection: (sectionId: string) => void;
  onOpenPresentation: () => void;
  onOpenBrand?: () => void;
}

export const HierarchicalTreePage: React.FC<HierarchicalTreePageProps> = ({
  onBackToEditorial,
  onDirectToSection,
  onOpenPresentation,
  onOpenBrand
}) => {
  const [viewMode, setViewMode] = useState<'visual' | 'directory'>('visual');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedBranches, setCollapsedBranches] = useState<Record<string, boolean>>({});
  const [selectedLeafId, setSelectedLeafId] = useState<string | null>(null);
  const [activeLeafDetail, setActiveLeafDetail] = useState<{
    leaf: TreeLeaf;
    branchTitle: string;
    branchCategory: string;
  } | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeLeafDetail) {
        setActiveLeafDetail(null);
        setSelectedLeafId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLeafDetail]);

  const treeData: TreeBranch[] = [
    {
      id: 'branch-foundation',
      num: '01',
      category: 'IDENTITAS & STRATEGI',
      title: 'Fondasi, Filosofi & Segmentasi Gerakan',
      summary: 'Konsep inti festival lari komunitas, pilar pengalaman inklusif, visi jangka panjang, dan profil 5 segmen audiens pemuda.',
      primaryTarget: 'konsep',
      leaves: [
        {
          id: 'leaf-f1',
          title: 'Ide Besar: Festival Energi Komunitas',
          summary: 'Menggeser lomba lari individual yang intimidatif menjadi perayaan gaya hidup aktif yang membahagiakan bersama ribuan pemuda.',
          tag: 'Konsep Inti',
          targetSection: 'konsep'
        },
        {
          id: 'leaf-f2',
          title: 'Parameter Awal Chapter 01 Jawa Barat',
          summary: 'Format 3K & 5K fun run, target perencanaan 2.000 - 3.000 peserta, durasi 1 hari, dengan Bandung Raya sebagai opsi awal evaluasi.',
          tag: 'Parameter',
          targetSection: 'hero'
        },
        {
          id: 'leaf-f3',
          title: 'Empat Pilar Pengalaman: Run, Explore, Connect, Celebrate',
          summary: 'Lari santai inklusif, eksplorasi rute dan musik kota, koneksi komunitas hangat, dan perayaan meriah di garis finis.',
          tag: 'Pilar Utama',
          targetSection: 'pilar'
        },
        {
          id: 'leaf-f4',
          title: 'Visi & 6 Misi Strategis',
          summary: 'Visi menjadi gerakan fun run terdepan yang menghubungkan anak muda Indonesia melalui 6 komitmen pelaksanaan berkelanjutan.',
          tag: 'Arah Gerakan',
          targetSection: 'visi-misi'
        },
        {
          id: 'leaf-f5',
          title: 'Segmentasi 5 Audiens & Piagam Inklusivitas',
          summary: 'Menyambut pelajar, pelari pemula, pelari rekreasional, komunitas kreatif, dan brand dengan garansi tanpa diskriminasi waktu.',
          tag: 'Audiens & Inklusivitas',
          targetSection: 'audiens'
        },
        {
          id: 'leaf-f6',
          title: 'Karakter Brand & Nada Komunikasi',
          summary: 'Tujuh kepribadian: Energetic, Youthful, Inclusive, Expressive, Social, Optimistic, Contemporary.',
          tag: 'Brand Character',
          targetSection: 'karakter'
        }
      ]
    },
    {
      id: 'branch-experience',
      num: '02',
      category: 'PENGALAMAN & AKTIVASI',
      title: 'Desain Pengalaman Rute & Aktivasi Lapangan',
      summary: 'Kurasi 1 signature activity dan maksimal 3 aktivitas pendukung untuk Chapter 01 demi menjaga kelancaran dan keselamatan rute.',
      primaryTarget: 'pengalaman',
      leaves: [
        {
          id: 'leaf-e1',
          title: 'Signature Activity: Rhythm Run',
          summary: 'Performa perkusi lokal berenergi di titik strategis rute berbadan jalan lebar tanpa mengganggu alur lari.',
          tag: 'Signature 01',
          targetSection: 'pengalaman'
        },
        {
          id: 'leaf-e2',
          title: 'Supporting Activation: Mission: YOUTHON',
          summary: 'Pengumpulan badge digital melalui kode QR di pos checkpoint tematik secara opsional dan tidak membuat antrean sempit.',
          tag: 'Aktivasi Digital',
          targetSection: 'pengalaman'
        },
        {
          id: 'leaf-e3',
          title: 'Community Supporter: Hype Squad',
          summary: 'Zona sorak penyemangat mahasiswa kampus, dance crew lokal, dan komunitas di kilometer kritis rute.',
          tag: 'Suporter Komunitas',
          targetSection: 'pengalaman'
        },
        {
          id: 'leaf-e4',
          title: 'After-Run Celebration: Finish Line Festival',
          summary: 'Oase garis finis: pendinginan terpadu, hidrasi dingin, photobooth cetak instan, tenant kuliner lokal, dan panggung hiburan.',
          tag: 'Festival Finis',
          targetSection: 'pengalaman'
        },
        {
          id: 'leaf-e5',
          title: 'Katalog 6 Modul Rute Terstandarisasi',
          summary: 'Modul musik audio, terowongan mist, cheer zone, instalasi seni rute, stasiun hidrasi berirama, dan zona foto dinamis.',
          tag: 'Katalog Modul',
          targetSection: 'pengalaman'
        }
      ]
    },
    {
      id: 'branch-safety',
      num: '03',
      category: 'KESELAMATAN & MEDIS',
      title: 'Sistem Keselamatan, Medis & Regulasi Lari',
      summary: 'Protokol wajib 8 area keselamatan baku, simulasi tabletop exercise, Stop-Event Authority, dan kamus terminologi lari resmi.',
      primaryTarget: 'keselamatan',
      leaves: [
        {
          id: 'leaf-s1',
          title: '8 Area Keselamatan Baku',
          summary: 'Standar baku rute steril, armada ambulans dokter berlisensi, race guide BIB, crowd wave start, pantauan BMKG, HT darurat, dan evakuasi.',
          tag: '8 Area Baku',
          targetSection: 'keselamatan'
        },
        {
          id: 'leaf-s2',
          title: 'Regulasi Waktu: COT & COP',
          summary: 'Simulasi COT ilustratif (3K ~ 60 menit, 5K ~ 90 menit) dan Course Closure Point untuk pembukaan kembali jalan umum.',
          tag: 'Regulasi Waktu',
          targetSection: 'keselamatan'
        },
        {
          id: 'leaf-s3',
          title: 'Status Peserta: DNS, DNF, OTL, DSQ',
          summary: 'Penanganan etis peserta yang mengalami kelelahan atau melewati batas waktu dengan prioritas keselamatan medis di atas urusan administratif.',
          tag: 'Status Lomba',
          targetSection: 'keselamatan'
        },
        {
          id: 'leaf-s4',
          title: 'Tabletop Exercise & Stop-Event Authority',
          summary: 'Simulasi tanggap krisis pra-acara dan kepastian wewenang mutlak Event Director untuk menghentikan kegiatan jika keselamatan terancam.',
          tag: 'Otoritas Darurat',
          targetSection: 'keselamatan'
        }
      ]
    },
    {
      id: 'branch-team',
      num: '04',
      category: 'ORGANISASI & PIC',
      title: 'Struktur Organisasi & Tata Kelola Tim Inti',
      summary: 'Pembagian 8 divisi fungsional dengan kejelasan PIC, mandatori keselamatan, serta protokol koordinasi 3 vendor kritis.',
      primaryTarget: 'organisasi',
      leaves: [
        {
          id: 'leaf-t1',
          title: 'Event Director (Pimpinan Eksekutif)',
          summary: 'Pemegang keputusan tertinggi, alokasi anggaran komprehensif, target acara, dan representasi resmi ke pemangku kepentingan kota.',
          tag: 'Pimpinan Acara',
          targetSection: 'organisasi'
        },
        {
          id: 'leaf-t2',
          title: 'Event Operations & Safety Medical',
          summary: 'Manajemen perizinan rute, rundown acara, logistik lapangan, audit risiko lintasan, armada medis, dan koordinator marshal.',
          tag: 'Operasional & Medis',
          targetSection: 'organisasi'
        },
        {
          id: 'leaf-t3',
          title: 'Sponsorship & Marketing Community',
          summary: 'Proposal penawaran brand, kontrak kemitraan, kampanye komunikasi publik, media sosial, dan hubungan komunitas pemuda.',
          tag: 'Komersial & Media',
          targetSection: 'organisasi'
        },
        {
          id: 'leaf-t4',
          title: 'Participant Services, Creative & Finance',
          summary: 'Sistem registrasi web, customer service, race pack, identitas visual, panggung musik, jersey/medali, dan budget control.',
          tag: 'Layanan & Finansial',
          targetSection: 'organisasi'
        },
        {
          id: 'leaf-t5',
          title: 'Matriks Koordinasi 3 Vendor Kritis',
          summary: 'Jalur komando langsung dan protokol khusus untuk Vendor Medis, Vendor Keamanan Jalur, dan Vendor Konstruksi Panggung/Audio.',
          tag: 'Vendor Kritis',
          targetSection: 'organisasi'
        }
      ]
    },
    {
      id: 'branch-roadmap',
      num: '05',
      category: 'TIMELINE & PERTUMBUHAN',
      title: 'Roadmap Persiapan 12 - 16 Minggu & Skala Nasional',
      summary: 'Jadwal persiapan bertahap, strategi marketing T-12 hingga T+14, serta strategi ekspansi tur gerakan dari Jawa Barat ke kota-kota Indonesia.',
      primaryTarget: 'roadmap',
      leaves: [
        {
          id: 'leaf-r1',
          title: 'Roadmap Operasional 12 - 16 Minggu',
          summary: 'Enam fase: Foundation & Feasibility, Venue & Partnership, Launch & Registration, Production, Final Readiness, dan Evaluation.',
          tag: 'Roadmap Operasional',
          targetSection: 'roadmap'
        },
        {
          id: 'leaf-r2',
          title: 'Timeline Marketing (T-12 Minggu s/d T+14 Hari)',
          summary: 'Lima tahap kampanye: Build The Movement, Reveal & Register, Community Takeover, Countdown, dan Relive The Movement.',
          tag: 'Kampanye Publik',
          targetSection: 'roadmap'
        },
        {
          id: 'leaf-r3',
          title: 'Ketentuan Kritis Perizinan & Tiket',
          summary: 'Larangan mutlak membuka penjualan tiket dengan menjanjikan rute atau fasilitas yang belum mendapat persetujuan izin resmi.',
          tag: 'Integritas Perizinan',
          targetSection: 'roadmap'
        },
        {
          id: 'leaf-r4',
          title: 'Rute Replikasi Gerakan Nasional',
          summary: 'Chapter 01 West Java (Pilot) menuju Jawa Tengah, DI Yogyakarta, Jawa Timur, Bali, dan kota-kota strategis luar pulau Jawa.',
          tag: 'Ekspansi Nasional',
          targetSection: 'roadmap'
        }
      ]
    },
    {
      id: 'branch-partners',
      num: '06',
      category: 'KOLABORASI & SPONSOR',
      title: 'Ekosistem Kemitraan & Model Nilai Bersama',
      summary: 'Menjual akses komunitas muda dan keterlibatan langsung (bukan sekadar logo), 4 kategori mitra kunci, dan direktori 8 sektor.',
      primaryTarget: 'mitra',
      leaves: [
        {
          id: 'leaf-p1',
          title: '4 Kategori Kemitraan Kunci',
          summary: 'Hydration Partner (air minum & pemulihan), Apparel Partner (jersey & seragam), Experience Partner (aktivasi), Community Partner (UMKM & kampus).',
          tag: '4 Kategori Kunci',
          targetSection: 'mitra'
        },
        {
          id: 'leaf-p2',
          title: 'Prinsip Nilai Nyata Bagi Brand',
          summary: 'Proposal akuntabel yang memuat target terukur, profil demografi peserta, kalender aktivasi, dan laporan bukti tayang (Proof of Performance).',
          tag: 'Prinsip Kemitraan',
          targetSection: 'mitra'
        },
        {
          id: 'leaf-p3',
          title: 'Direktori & Pertukaran Nilai 8 Sektor',
          summary: 'Sinergi mutualisme dengan sektor Minuman Sehat, Apparel Olahraga, FinTech, Telekomunikasi, Kesehatan, Media, Edukasi, dan Pemkot.',
          tag: 'Direktori Sektor',
          targetSection: 'mitra'
        }
      ]
    },
    {
      id: 'branch-engineering',
      num: '07',
      category: 'ANGGARAN & METRIK',
      title: 'Anggaran, Metrik Keberhasilan (KPI) & Platform Web',
      summary: 'Perencanaan 9 komponen anggaran berbasis kebutuhan nyata, 3 skenario arus kas, 8 dimensi KPI, dan 4 fase rekayasa platform digital.',
      primaryTarget: 'metrik',
      leaves: [
        {
          id: 'leaf-m1',
          title: '8 Dimensi Indikator Keberhasilan (KPI)',
          summary: 'Participation, Financial, Experience, Community, Marketing, Partnership, Safety, dan Sustainability.',
          tag: '8 KPI Resmi',
          targetSection: 'metrik'
        },
        {
          id: 'leaf-m2',
          title: '9 Komponen Anggaran Acara',
          summary: 'Venue/izin, race essentials, produksi panggung, safety/medis, participant services, talent, marketing, logistik, dan cadangan (10-15%).',
          tag: '9 Komponen Budget',
          targetSection: 'metrik'
        },
        {
          id: 'leaf-m3',
          title: '3 Skenario Proyeksi Arus Kas',
          summary: 'Model proyeksi keuangan Konservatif, Dasar (Baseline), dan Optimistis dengan pemisahan uang kontrak vs prospek.',
          tag: 'Arus Kas',
          targetSection: 'metrik'
        },
        {
          id: 'leaf-m4',
          title: '4 Fase Rekayasa Platform Web',
          summary: 'Pengembangan landing page, arsitektur data pendaftaran mandiri, payment gateway aman, serta standar privasi data peserta.',
          tag: 'Platform Digital',
          targetSection: 'metrik'
        }
      ]
    },
    {
      id: 'branch-readiness',
      num: '08',
      category: 'KESIAPAN & PRIORITAS',
      title: 'Checklist Hari H & Prioritas Kerja Sekarang',
      summary: 'Pemeriksaan operasional 15 poin di 5 area lapangan sebelum flag-off dan urutan 6 prioritas aksi segera untuk inisiasi Chapter 01.',
      primaryTarget: 'checklist',
      leaves: [
        {
          id: 'leaf-c1',
          title: 'Checklist Hari H: 15 Poin Operational Readiness',
          summary: 'Pemeriksaan cepat: Venue & Production (3), Safety & Medical (3), Services (3), Experience (3), dan Closing (3).',
          tag: 'Checklist 15 Poin',
          targetSection: 'checklist'
        },
        {
          id: 'leaf-c2',
          title: '6 Prioritas Kerja Sekarang di Jawa Barat',
          summary: 'Skala & tujuan chapter, evaluasi Bandung Raya, event brief & anggaran, tim & izin, validasi Rhythm Run, baru peluncuran pendaftaran.',
          tag: '6 Prioritas Aksi',
          targetSection: 'checklist'
        },
        {
          id: 'leaf-c3',
          title: 'Verifikasi Pra-Implementasi Dokumen',
          summary: 'Daftar parameter kritis yang wajib disepakati tim inisiator sebelum menetapkan jadwal dan komitmen publik.',
          tag: 'Verifikasi',
          targetSection: 'checklist'
        }
      ]
    }
  ];

  const toggleBranch = (branchId: string) => {
    setCollapsedBranches((prev) => ({
      ...prev,
      [branchId]: !prev[branchId]
    }));
  };

  const expandAll = () => setCollapsedBranches({});
  const collapseAll = () => {
    const all: Record<string, boolean> = {};
    treeData.forEach((b) => (all[b.id] = true));
    setCollapsedBranches(all);
  };

  // Filtered branches based on search query
  const filteredTree = useMemo(() => {
    if (!searchQuery.trim()) return treeData;
    const q = searchQuery.toLowerCase();

    return treeData
      .map((branch) => {
        const branchMatch =
          branch.title.toLowerCase().includes(q) ||
          branch.summary.toLowerCase().includes(q) ||
          branch.category.toLowerCase().includes(q);

        const matchingLeaves = branch.leaves.filter(
          (leaf) =>
            leaf.title.toLowerCase().includes(q) ||
            leaf.summary.toLowerCase().includes(q) ||
            leaf.tag.toLowerCase().includes(q)
        );

        if (branchMatch || matchingLeaves.length > 0) {
          return {
            ...branch,
            leaves: branchMatch ? branch.leaves : matchingLeaves
          };
        }
        return null;
      })
      .filter(Boolean) as TreeBranch[];
  }, [searchQuery, treeData]);

  const totalLeavesCount = useMemo(() => {
    return treeData.reduce((acc, b) => acc + b.leaves.length, 0);
  }, [treeData]);

  return (
    <div className="tree-page-wrapper">
      {/* Sticky Tree Page Header */}
      <header className="tree-page-header" role="banner">
        <div className="tree-header-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onBackToEditorial}
              className="btn-editorial btn-secondary-editorial"
              style={{ minHeight: '38px', padding: '0.4rem 0.875rem', fontSize: '0.8125rem' }}
              aria-label="Kembali ke Website Editorial"
            >
              &larr; Website Editorial
            </button>

            {onOpenBrand && (
              <button
                type="button"
                onClick={onOpenBrand}
                className="btn-editorial btn-secondary-editorial"
                style={{ minHeight: '38px', padding: '0.4rem 0.875rem', fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center' }}
                aria-label="Buka Halaman Brand Konsep"
              >
                <IconLightbulb size={13} style={{ marginRight: '6px' }} />
                <span>Brand Konsep</span>
              </button>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: 'var(--color-green-deep)',
                  color: 'var(--accent-lime)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 900,
                  fontSize: '0.9375rem'
                }}
              >
                Y
              </div>
              <div style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '0.9375rem', color: 'var(--color-green-text)' }}>
                Knowledge Tree
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-green-muted)', pointerEvents: 'none' }}
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Cari konsep, PIC, SOP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="tree-search-input"
                aria-label="Cari node dalam diagram pohon"
              />
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: 'var(--bg-secondary)', padding: '3px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <button
                type="button"
                onClick={() => setViewMode('visual')}
                className={`pixel-view-toggle-btn ${viewMode === 'visual' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.65rem', display: 'inline-flex', alignItems: 'center' }}
                aria-label="Tampilkan diagram pohon editorial"
              >
                <IconTree size={12} style={{ marginRight: '5px' }} />
                <span>Bagan Pohon Editorial</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('directory')}
                className={`pixel-view-toggle-btn ${viewMode === 'directory' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.65rem', display: 'inline-flex', alignItems: 'center' }}
                aria-label="Tampilkan direktori detail komprehensif"
              >
                <IconLayers size={12} style={{ marginRight: '5px' }} />
                <span>Direktori Detail (35 Node)</span>
              </button>
            </div>

            {viewMode === 'directory' && (
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={expandAll}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '34px', padding: '0.25rem 0.625rem', fontSize: '0.75rem' }}
                  title="Buka semua cabang"
                >
                  Buka Semua
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '34px', padding: '0.25rem 0.625rem', fontSize: '0.75rem' }}
                  title="Tutup semua cabang"
                >
                  Tutup Semua
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onOpenPresentation}
              className="btn-editorial btn-primary-editorial"
              style={{ minHeight: '38px', padding: '0.4rem 0.875rem', fontSize: '0.8125rem' }}
            >
              <span>Mode Presentasi</span>
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', padding: '0.1rem 0.4rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>
                {PRESENTATION_SLIDES.length} Slide
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Tree Content Area */}
      <main className="tree-page-content">
        {/* Breadcrumb & Intro */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="section-eyebrow">
            STRUKTUR INFORMASI BERJENJANG / KNOWLEDGE TREE
          </span>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--color-green-text)', margin: '0.35rem 0 0.75rem 0', letterSpacing: '-0.025em' }}>
            Peta Informasi Hierarkis YOUTHON
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-green-muted)', maxWidth: '840px', lineHeight: '1.65', margin: 0 }}>
            Visualisasi terpadu dari seluruh kolektif data blueprint YOUTHON: dari filosofi gerakan, 8 divisi PIC,
            protokol medis, 12 - 16 minggu roadmap, 8 dimensi KPI, hingga checklist kesiapan lapangan.
            Setiap kartu node pada bagan dilengkapi tombol <strong>&ldquo;Direct ke data terkait&rdquo;</strong> untuk langsung beralih ke pembahasan lengkap di website editorial.
          </p>
        </div>

        {/* View Mode A: Bagan Visual Editorial */}
        {viewMode === 'visual' ? (
          <div>
            <EditorialKnowledgeTree
              onDirectToSection={onDirectToSection}
              searchQuery={searchQuery}
            />

            {/* Quick Switch Callout */}
            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', boxShadow: '0 4px 16px rgba(21, 63, 53, 0.03)' }}>
              <div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--color-green-text)', margin: '0 0 0.25rem 0' }}>
                  Ingin meninjau seluruh direktori lengkap 35 micro-node?
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', margin: 0 }}>
                  Buka tampilan direktori accordion untuk mencari, membaca ringkasan teknis, dan memeriksa tiap modul secara berurutan.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setViewMode('directory')}
                className="btn-editorial btn-secondary-editorial"
                style={{ minHeight: '38px', padding: '0.4rem 1rem', fontSize: '0.8125rem' }}
              >
                <span>Buka Direktori Detail (35 Node) &rarr;</span>
              </button>
            </div>
          </div>
        ) : (
          /* View Mode B: Direktori Detail Accordion Lengkap */
          <div>
            {/* Tree Root Node Card */}
            <div className="tree-root-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="tree-root-badge">
                  ROOT NODE // GERAKAN UTAMA
                </span>
                <span className="status-pill" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  {treeData.length} Cabang Utama &middot; {totalLeavesCount} Node Data Terkait
                </span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                {YOUTHON_METADATA.brand} : {YOUTHON_METADATA.tagline}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-green-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {YOUTHON_METADATA.subtitle} &middot; {YOUTHON_METADATA.chapter}
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-muted)', maxWidth: '780px', lineHeight: '1.6', margin: 0 }}>
                Gerakan anak muda yang memadukan olahraga lari santai (3K & 5K), kurasi musik live, aktivitas interaktif,
                komunitas, dan festival perayaan dalam satu identitas gerakan nasional yang ramah bagi pemula.
              </p>

              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => onDirectToSection('hero')}
                  className="btn-editorial btn-primary-editorial"
                  style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  Direct ke Pengantar Hero &rarr;
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('visual')}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                >
                  &larr; Kembali ke Bagan Visual
                </button>
              </div>
            </div>

            {/* Search Results Feedback */}
            {searchQuery && (
              <div style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--color-green-deep)', fontFamily: 'var(--font-mono)' }}>
                Menampilkan hasil pencarian untuk &quot;{searchQuery}&quot; : Ditemukan {filteredTree.length} cabang relevan.
              </div>
            )}

            {/* Level 1: 8 Main Tree Branches */}
            <div className="tree-branches-container">
              {filteredTree.map((branch) => {
                const isCollapsed = Boolean(collapsedBranches[branch.id]);
                return (
                  <div key={branch.id} className="tree-branch-block">
                    {/* Branch Header with Click-to-Toggle */}
                    <div
                      className="tree-branch-header"
                      onClick={() => toggleBranch(branch.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          toggleBranch(branch.id);
                        }
                      }}
                      aria-expanded={!isCollapsed}
                    >
                      <div className="tree-branch-title-group">
                        <span className="tree-branch-num">{branch.num}</span>
                        <div>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', letterSpacing: '0.05em', display: 'block' }}>
                            {branch.category}
                          </span>
                          <h3 className="tree-branch-title">{branch.title}</h3>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span className="status-pill" style={{ fontSize: '0.75rem' }}>
                          {branch.leaves.length} Node Sub-Topik
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDirectToSection(branch.primaryTarget);
                          }}
                          className="btn-editorial btn-secondary-editorial"
                          style={{ minHeight: '32px', padding: '0.2rem 0.625rem', fontSize: '0.75rem' }}
                          title="Direct ke seksi utama di website editorial"
                        >
                          Buka Seksi &rarr;
                        </button>
                        <span style={{ fontSize: '1rem', color: 'var(--color-green-muted)', transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', display: 'inline-block' }}>
                          &darr;
                        </span>
                      </div>
                    </div>

                    {/* Branch Body & Leaves Grid */}
                    {!isCollapsed && (
                      <div className="tree-branch-body">
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', margin: '0.75rem 0 0 0', lineHeight: '1.5' }}>
                          {branch.summary}
                        </p>

                        <div className="tree-leaves-grid">
                          {branch.leaves.map((leaf) => {
                            const isLeafSelected = selectedLeafId === leaf.id;
                            return (
                              <div
                                key={leaf.id}
                                className={`tree-leaf-card ${isLeafSelected ? 'selected' : ''}`}
                                style={{
                                  cursor: 'pointer',
                                  border: isLeafSelected ? '2px solid var(--color-green-deep)' : undefined,
                                  backgroundColor: isLeafSelected ? '#F8FBF6' : undefined,
                                  boxShadow: isLeafSelected ? '0 6px 20px rgba(21, 63, 53, 0.12)' : undefined
                                }}
                                onClick={() => {
                                  setSelectedLeafId(leaf.id);
                                  setActiveLeafDetail({
                                    leaf,
                                    branchTitle: branch.title,
                                    branchCategory: branch.category
                                  });
                                }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === ' ' || e.key === 'Enter') {
                                    e.preventDefault();
                                    setSelectedLeafId(leaf.id);
                                    setActiveLeafDetail({
                                      leaf,
                                      branchTitle: branch.title,
                                      branchCategory: branch.category
                                    });
                                  }
                                }}
                                aria-label={`${leaf.title}. Tag: ${leaf.tag}. Klik untuk buka detail terapung.`}
                              >
                                <div>
                                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
                                    {leaf.tag}
                                  </span>
                                  <h4 className="tree-leaf-title">{leaf.title}</h4>
                                  <p className="tree-leaf-summary">{leaf.summary}</p>
                                </div>

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onDirectToSection(leaf.targetSection);
                                  }}
                                  className="tree-leaf-jump-btn"
                                  aria-label={`Direct ke pembahasan ${leaf.title}`}
                                >
                                  <span>Direct ke data terkait</span>
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                  </svg>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Floating Detail Card Popover in Directory View */}
            {activeLeafDetail && (
              <div
                className="tree-floating-detail-card"
                style={{
                  position: 'fixed',
                  right: '2rem',
                  bottom: '2rem',
                  width: '320px',
                  zIndex: 9999,
                  boxShadow: '0 20px 48px rgba(21, 63, 53, 0.22), 0 4px 16px rgba(21, 63, 53, 0.08)'
                }}
                role="region"
                aria-label="Detail Kartu Terapung"
              >
                <div className="tree-floating-header">
                  <div>
                    <span className="tree-floating-eyebrow">
                      TAG // {activeLeafDetail.leaf.tag.toUpperCase()}
                    </span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--color-green-muted)', marginTop: '0.2rem' }}>
                      {activeLeafDetail.branchCategory}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveLeafDetail(null);
                      setSelectedLeafId(null);
                    }}
                    className="tree-floating-close-btn"
                    title="Tutup kartu detail (Esc)"
                    aria-label="Tutup kartu detail"
                  >
                    &#x2715;
                  </button>
                </div>

                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1rem', fontWeight: 800, color: 'var(--color-green-text)', margin: '0 0 0.35rem 0', lineHeight: '1.35' }}>
                  {activeLeafDetail.leaf.title}
                </h4>

                <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', margin: '0 0 0.85rem 0' }}>
                  {activeLeafDetail.leaf.summary}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: '0.5rem 0 0.75rem 0', padding: '0.5rem 0.65rem', backgroundColor: '#F8FBF6', border: '1px solid var(--border-light)', borderRadius: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>
                    TARGET MODUL BLUEPRINT:
                  </span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-green-text)', fontWeight: 600 }}>
                    Seksi {activeLeafDetail.leaf.targetSection.toUpperCase()}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onDirectToSection(activeLeafDetail.leaf.targetSection)}
                  className="btn-editorial btn-primary-editorial"
                  style={{ width: '100%', minHeight: '36px', fontSize: '0.8125rem', justifyContent: 'center' }}
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
        )}
      </main>
    </div>
  );
};

