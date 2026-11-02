import React, { useState, useEffect } from 'react';

interface ChecklistItem {
  id: string;
  category: 'Venue & Production' | 'Safety & Medical' | 'Participant Services' | 'Experience & Sponsor' | 'Closing & Post-Event';
  label: string;
  checked: boolean;
}

const INITIAL_DAY_CHECKLIST: ChecklistItem[] = [
  // Venue & Production (3)
  { id: 'vp-1', category: 'Venue & Production', label: 'Venue dan rute telah diperiksa dan dinyatakan siap', checked: false },
  { id: 'vp-2', category: 'Venue & Production', label: 'Panggung, audio, signage, barrier, dan listrik telah diuji', checked: false },
  { id: 'vp-3', category: 'Venue & Production', label: 'Command center dan jalur komunikasi berfungsi', checked: false },

  // Safety & Medical (3)
  { id: 'sm-1', category: 'Safety & Medical', label: 'PIC medis, marshal, dan keamanan sudah hadir', checked: false },
  { id: 'sm-2', category: 'Safety & Medical', label: 'Pos medis, hidrasi, dan akses darurat siap', checked: false },
  { id: 'sm-3', category: 'Safety & Medical', label: 'Prakiraan cuaca dan kriteria penghentian sudah dikonfirmasi', checked: false },

  // Participant Services (3)
  { id: 'ps-1', category: 'Participant Services', label: 'Check-in dan pembagian race pack siap', checked: false },
  { id: 'ps-2', category: 'Participant Services', label: 'Informasi start, rute, toilet, dan fasilitas terlihat jelas', checked: false },
  { id: 'ps-3', category: 'Participant Services', label: 'Petugas peserta dan volunteer memahami tugasnya', checked: false },

  // Experience & Sponsor (3)
  { id: 'es-1', category: 'Experience & Sponsor', label: 'Aktivasi telah diuji dan tidak menghalangi rute', checked: false },
  { id: 'es-2', category: 'Experience & Sponsor', label: 'Sponsor dan tenant memenuhi ketentuan yang disepakati', checked: false },
  { id: 'es-3', category: 'Experience & Sponsor', label: 'Dokumentasi dan izin publikasi sudah diatur', checked: false },

  // Closing & Post-Event (3)
  { id: 'cp-1', category: 'Closing & Post-Event', label: 'Penghitungan peserta dan penutupan rute terkendali', checked: false },
  { id: 'cp-2', category: 'Closing & Post-Event', label: 'Pembersihan venue dan pengembalian perlengkapan terkoordinasi', checked: false },
  { id: 'cp-3', category: 'Closing & Post-Event', label: 'Data insiden, keuangan, dokumentasi, dan evaluasi dikumpulkan', checked: false }
];

export const EditorialChecklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem('youthon_day_checklist_v2');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_DAY_CHECKLIST;
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('youthon_day_checklist_v2', JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  const resetChecklist = () => {
    setItems(INITIAL_DAY_CHECKLIST.map((it) => ({ ...it, checked: false })));
  };

  const copyChecklist = () => {
    const text = items
      .map((it) => `[${it.checked ? 'X' : ' '}] (${it.category}) ${it.label}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const totalCount = items.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const categories = [
    'All',
    'Venue & Production',
    'Safety & Medical',
    'Participant Services',
    'Experience & Sponsor',
    'Closing & Post-Event'
  ];

  const filtered = items.filter((it) => {
    if (activeCategory !== 'All' && it.category !== activeCategory) return false;
    return true;
  });

  return (
    <section id="checklist" className="editorial-section" aria-labelledby="heading-checklist">
      <div className="editorial-container">
        {/* Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">14 / KESIAPAN OPERASIONAL HARI H</span>
          <h2 id="heading-checklist" className="section-headline">
            Checklist 15 poin kesiapan operasional lapangan.
          </h2>
          <p className="section-lead">
            Pemeriksaan ringkas hari pelaksanaan di seluruh area vital. Checklist ini berfungsi sebagai verifikasi
            cepat kesiapan tim sebelum flag-off dan penutupan rute.
          </p>
        </div>

        {/* Progress Card */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(21, 63, 53, 0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--color-green-text)', display: 'block' }}>
                Operational Readiness Hari H
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                {checkedCount} / {totalCount} Poin Terverifikasi ({progressPercent}%)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={copyChecklist}
                className="btn-editorial btn-secondary-editorial"
                style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
              >
                {copied ? 'Tersalin!' : 'Salin Checklist'}
              </button>
              <button
                type="button"
                onClick={resetChecklist}
                className="btn-editorial btn-secondary-editorial"
                style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}
              >
                Reset
              </button>
            </div>
          </div>

          <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: progressPercent === 100 ? 'var(--color-green-deep)' : 'var(--accent-lime)', transition: 'width 0.3s ease' }}></div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`btn-editorial ${activeCategory === cat ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
              style={{ minHeight: '36px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
              aria-pressed={activeCategory === cat}
            >
              {cat === 'All' ? 'Semua Area (15)' : cat}
            </button>
          ))}
        </div>

        {/* Checklist Rows */}
        <div className="editorial-checklist">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`checklist-row ${item.checked ? 'is-confirmed' : ''}`}
              onClick={() => toggleItem(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleItem(item.id);
                }
              }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '8px', marginBottom: '0.625rem', cursor: 'pointer', transition: 'all 0.15s ease' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '4px', border: item.checked ? 'none' : '2px solid var(--border-dark)', backgroundColor: item.checked ? 'var(--color-green-deep)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', flexShrink: 0 }}>
                  {item.checked && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>

                <div>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: item.checked ? 'var(--color-green-muted)' : 'var(--color-green-text)', textDecoration: item.checked ? 'line-through' : 'none' }}>
                    {item.label}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginTop: '0.15rem' }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <span className="status-pill" style={{ fontSize: '0.6875rem', backgroundColor: item.checked ? 'var(--bg-secondary)' : '#ffffff', color: item.checked ? 'var(--color-green-deep)' : 'inherit' }}>
                {item.checked ? 'Siap' : 'Menunggu'}
              </span>
            </div>
          ))}
        </div>

        {/* Regulatory Note */}
        <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'var(--color-green-muted)', fontStyle: 'italic', textAlign: 'center' }}>
          *Checklist ini merupakan pemeriksaan ringkas kesiapan operasional lapangan, bukan pengganti risk assessment formal, dokumen SOP resmi, atau surat izin tertulis dari instansi berwenang.
        </p>
      </div>
    </section>
  );
};
