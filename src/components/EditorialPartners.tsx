import React, { useState } from 'react';
import { PARTNERS_DATA } from '../data/pitchdeckData';
import { Modal } from './Modal';

export const EditorialPartners: React.FC = () => {
  const [selectedSectorIdx, setSelectedSectorIdx] = useState<number>(0);
  const [isCollabModalOpen, setIsCollabModalOpen] = useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>(false);
  const [partnerName, setPartnerName] = useState<string>('');
  const [partnerEmail, setPartnerEmail] = useState<string>('');

  const activeSector = PARTNERS_DATA[selectedSectorIdx];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="mitra" className="editorial-section alt-bg" aria-labelledby="heading-partners">
      <div className="editorial-container">
        {/* Section Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">11 / EKOSISTEM KEMITRAAN</span>
          <h2 id="heading-partners" className="section-headline">
            Matriks kolaborasi bernilai nyata bagi peserta dan brand.
          </h2>
          <p className="section-lead">
            Jangan menjual YOUTHON hanya sebagai tempat memasang logo. Jual akses ke komunitas muda,
            pengalaman langsung, konten autentik, dan keterlibatan peserta yang berdampak positif jangka panjang.
          </p>
        </div>

        {/* 4 Pilar Kemitraan Kunci */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--color-green-deep)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
              01 // HIDRASI & ENERGI
            </span>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
              Hydration Partner
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.55', margin: 0 }}>
              Brand air minum atau hidrasi mendukung seluruh pos minum rute, produk starter pack, dan stasiun pendinginan pemulihan.
            </p>
          </div>

          <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--color-green-deep)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
              02 // APPAREL & MERCHANDISE
            </span>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
              Official Apparel Partner
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.55', margin: 0 }}>
              Mendukung pengadaan jersey resmi peserta berkualitas tinggi, seragam kru marshal, merchandise resmi, dan hadiah podium festival.
            </p>
          </div>

          <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--color-green-deep)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
              03 // PENGALAMAN & AKTIVASI
            </span>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
              Experience Partner
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.55', margin: 0 }}>
              Mendanai atau menghadirkan modul rute interaktif: photo installation, digital mission checkpoint, dan aktivasi gamifikasi rute.
            </p>
          </div>

          <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--color-green-deep)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem' }}>
              04 // KOMUNITAS LOKAL
            </span>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
              Local Community Partner
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.55', margin: 0 }}>
              UMKM kuliner khas kota, kampus universitas, running club, dan kolektif musik/kreatif lokal untuk memperluas gaung akar rumput.
            </p>
          </div>
        </div>

        {/* Master Partnership Matrix Container (Non-Card Layout) */}
        <div className="partner-matrix-layout">
          {/* Left: Sector Directory List */}
          <div className="partner-directory-column">
            <div className="partner-directory-header">
              <span>8 SEKTOR MITRA STRATEGIS</span>
            </div>

            <nav className="partner-directory-list" aria-label="Daftar Sektor Kemitraan">
              {PARTNERS_DATA.map((p, idx) => {
                const isActive = selectedSectorIdx === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedSectorIdx(idx)}
                    className={`partner-directory-item ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="feature-item-num" style={{ fontSize: '0.75rem', padding: '0.2rem 0.4rem' }}>
                        0{idx + 1}
                      </span>
                      <span className="partner-row-name">{p.sector}</span>
                    </div>

                    <span style={{ fontSize: '0.875rem', color: isActive ? 'var(--color-green-deep)' : 'var(--color-green-muted)', fontWeight: 700 }}>
                      &rarr;
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: Mutual Value Sheet */}
          <div className="partner-value-sheet-column" role="region" aria-live="polite">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-light)' }}>
              <div>
                <span className="status-pill" style={{ marginBottom: '0.35rem' }}>
                  Sektor 0{selectedSectorIdx + 1} : {activeSector.sector}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginTop: '0.25rem' }}>
                  {activeSector.sector}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-muted)', marginTop: '0.2rem' }}>
                  Contoh Mitra Potensial: <strong style={{ color: 'var(--color-green-text)' }}>{activeSector.examples}</strong>
                </p>
              </div>

              <span className="status-pill" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--color-green-deep)' }}>
                Terbuka untuk Dialog
              </span>
            </div>

            {/* Value Exchange Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '10px', borderLeft: '4px solid var(--color-green-deep)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  01. NILAI BAGI PESERTA (RUNNERS VALUE)
                </span>
                <p style={{ fontSize: '1rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                  {activeSector.valueForRunners}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--color-green-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-light)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  02. DAMPAK STRATEGIS BAGI BRAND (BRAND ROI & ENGAGEMENT)
                </span>
                <p style={{ fontSize: '1rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                  {activeSector.valueForBrand}
                </p>
              </div>

              <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--accent-amber)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  03. RUANG LINGKUP & PENYEDIAAN DUKUNGAN
                </span>
                <p style={{ fontSize: '1rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                  {activeSector.scope}
                </p>
              </div>
            </div>

            {/* Action Area */}
            <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', fontFamily: 'var(--font-mono)' }}>
                Hak aktivasi booth & eksposur disesuaikan per kesepakatan formal.
              </span>

              <button
                type="button"
                onClick={() => {
                  setFormSent(false);
                  setIsCollabModalOpen(true);
                }}
                className="btn-editorial btn-primary-editorial"
              >
                <span>Bahas Kemitraan Sektor Ini</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Sector Collaboration Inquiry */}
        <Modal
          isOpen={isCollabModalOpen}
          onClose={() => setIsCollabModalOpen(false)}
          title={`Inisiasi Kemitraan : ${activeSector.sector}`}
        >
          {formSent ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--color-green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
                Pengajuan Kemitraan Dicatat
              </h3>
              <p style={{ color: 'var(--color-green-muted)', fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Terima kasih atas minat kolaborasi sektor {activeSector.sector}. Tim YOUTHON akan segera menghubungi Anda untuk pembahasan lanjutan.
              </p>
              <button
                type="button"
                onClick={() => setIsCollabModalOpen(false)}
                className="btn-editorial btn-primary-editorial"
              >
                Tutup Formulir
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <div>
                <label htmlFor="partner-input-name" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
                  Nama Instansi / Brand Mitra
                </label>
                <input
                  id="partner-input-name"
                  type="text"
                  required
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder={`Contoh: Perwakilan ${activeSector.examples.split(',')[0]}`}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '100%', textAlign: 'left', borderRadius: '8px', cursor: 'text' }}
                />
              </div>

              <div>
                <label htmlFor="partner-input-email" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
                  Alamat Surel Resmi (Email)
                </label>
                <input
                  id="partner-input-email"
                  type="email"
                  required
                  value={partnerEmail}
                  onChange={(e) => setPartnerEmail(e.target.value)}
                  placeholder="partnership@brand.com"
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '100%', textAlign: 'left', borderRadius: '8px', cursor: 'text' }}
                />
              </div>

              <div>
                <label htmlFor="partner-selected-sector" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
                  Sektor Terpilih
                </label>
                <input
                  id="partner-selected-sector"
                  type="text"
                  disabled
                  value={activeSector.sector}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '100%', textAlign: 'left', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', opacity: 1, color: 'var(--color-green-text)', fontWeight: 600 }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setIsCollabModalOpen(false)}
                  className="btn-editorial btn-secondary-editorial"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-editorial btn-primary-editorial"
                >
                  Kirim Pengajuan
                </button>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </section>
  );
};
