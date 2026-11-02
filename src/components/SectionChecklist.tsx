import React, { useState, useEffect } from 'react';
import { INITIAL_CHECKLIST } from '../data/pitchdeckData';
import { ChecklistItem } from '../types';

export const SectionChecklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    try {
      const saved = localStorage.getItem('youthon_checklist_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_CHECKLIST;
  });

  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  useEffect(() => {
    try {
      localStorage.setItem('youthon_checklist_v1', JSON.stringify(items));
    } catch {
      // Ignore write errors
    }
  }, [items]);

  const toggleStatus = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'confirmed' ? 'pending' : 'confirmed' }
          : item
      )
    );
  };

  const handleReset = () => {
    if (window.confirm('Reset semua checklist ke status awal (Belum Diputuskan)?')) {
      setItems(INITIAL_CHECKLIST);
    }
  };

  const confirmedCount = items.filter((i) => i.status === 'confirmed').length;
  const progressPercent = Math.round((confirmedCount / items.length) * 100);

  const filteredItems = items.filter((item) => {
    if (categoryFilter !== 'All' && item.category !== categoryFilter) return false;
    if (statusFilter === 'pending' && item.status !== 'pending') return false;
    if (statusFilter === 'confirmed' && item.status !== 'confirmed') return false;
    return true;
  });

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
          <span>CHECKLIST VERIFIKASI PRA-IMPLEMENTASI (INTERACTIVE TRACKER)</span>
        </div>
        <p>
          Sebelum konsep masuk ke tahap produksi rute atau penjualan tiket resmi, 11 parameter krusial berikut
          wajib diputuskan oleh tim pengarah dan mitra strategis. Klik kotak centang untuk mencatat progres verifikasi.
        </p>
      </div>

      <div className="tech-card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-cyan)' }}>
        <div className="tech-card-header">
          <span>PROGRESS VERIFIKASI KEPUTUSAN</span>
          <span className="tag-badge cyan">{confirmedCount} DARI {items.length} SELESAI ({progressPercent}%)</span>
        </div>
        <div className="slide-progress-track" style={{ width: '100%', height: '8px' }}>
          <div className="slide-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>Status: {confirmedCount === items.length ? 'Semua Parameter Terkonfirmasi' : 'Tahap Konseptual & Verifikasi Lapangan'}</span>
          <button
            type="button"
            onClick={handleReset}
            className="btn"
            style={{ minHeight: '36px', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
          >
            Reset Default
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {['All', 'Brand', 'Event', 'Ticketing', 'Safety', 'Digital'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={`btn ${categoryFilter === cat ? 'btn-active' : ''}`}
              style={{ minHeight: '36px', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
              aria-pressed={categoryFilter === cat}
            >
              {cat === 'All' ? 'Semua Kategori' : cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.35rem' }}>
          <button
            type="button"
            onClick={() => setStatusFilter('All')}
            className={`btn ${statusFilter === 'All' ? 'btn-active' : ''}`}
            style={{ minHeight: '36px', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
            aria-pressed={statusFilter === 'All'}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('pending')}
            className={`btn ${statusFilter === 'pending' ? 'btn-active' : ''}`}
            style={{ minHeight: '36px', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
            aria-pressed={statusFilter === 'pending'}
          >
            Pending ({items.filter(i => i.status === 'pending').length})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('confirmed')}
            className={`btn ${statusFilter === 'confirmed' ? 'btn-active' : ''}`}
            style={{ minHeight: '36px', padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
            aria-pressed={statusFilter === 'confirmed'}
          >
            Confirmed ({confirmedCount})
          </button>
        </div>
      </div>

      <div className="checklist-container">
        {filteredItems.map((item) => {
          const isConfirmed = item.status === 'confirmed';
          return (
            <div
              key={item.id}
              className={`checklist-item-card ${isConfirmed ? 'confirmed' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleStatus(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleStatus(item.id);
                }
              }}
              aria-label={`Ubah status ${item.topic} menjadi ${isConfirmed ? 'belum diputuskan' : 'terkonfirmasi'}`}
            >
              <div
                className={`checklist-checkbox-btn ${isConfirmed ? 'checked' : ''}`}
                aria-hidden="true"
              >
                {isConfirmed && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                    {item.topic}
                  </span>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <span className="tag-badge" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                    <span className={`tag-badge ${isConfirmed ? 'emerald' : 'amber'}`} style={{ fontSize: '0.7rem' }}>
                      {isConfirmed ? 'TERKONFIRMASI' : 'PENDING DECISION'}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <strong>Catatan:</strong> {item.notes}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  <strong>Dampak Teknis:</strong> {item.impact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

