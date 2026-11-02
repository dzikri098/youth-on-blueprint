import React, { useState } from 'react';
import { Modal } from './Modal';

export const SectionSummary: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactCategory, setContactCategory] = useState('Sponsor & Brand Partnership');
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <article className="slide-content-block">
      <div className="concept-callout">
        <div className="concept-callout-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>PRINSIP UTAMA & MANIFESTO GERAKAN</span>
        </div>
        <p>
          YOUTHON bukan sekadar event lari satu kali. YOUTHON dikembangkan sebagai movement berkelanjutan
          yang mempertemukan olahraga, energi anak muda, kreativitas, dan komunitas.
        </p>
      </div>

      <div className="grid-2col" style={{ marginBottom: '1.5rem' }}>
        <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
          <div className="tech-card-header">
            <span>RINGKASAN EKSEKUTIF</span>
            <span className="tag-badge cyan">EXECUTIVE SUMMARY</span>
          </div>
          <h4 className="tech-card-title">Fondasi Movement Berkelanjutan</h4>
          <p className="tech-card-body" style={{ lineHeight: '1.7' }}>
            Setiap gelaran YOUTHON memiliki empat pilar tak terpisahkan: pengalaman lari yang ramah bagi pemula,
            identitas brand yang konsisten, pelaksanaan operasional rute yang bertanggung jawab, serta ruang berkembang
            yang nyata bersama komunitas lokal.
          </p>
          <p className="tech-card-body" style={{ lineHeight: '1.7' }}>
            Platform digital web bertindak sebagai tulang punggung resmi: memvalidasi tiket pendaftaran dengan aman,
            menyajikan panduan teknis Race Guide yang transparan, dan menghubungkan chapter kota dari Jawa Barat menuju
            puluhan kota di Indonesia.
          </p>
        </div>

        <div className="tech-card" style={{ borderLeft: '3px solid var(--accent-emerald)' }}>
          <div className="tech-card-header">
            <span>KOMITMEN KOLABORASI TERBUKA</span>
            <span className="tag-badge emerald">NEXT STEPS</span>
          </div>
          <h4 className="tech-card-title">Langkah Lanjutan Bersama Stakeholder</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>01.</span>
              <span>Finalisasi perizinan venue dan penentuan tanggal resmi edisi pilot Jawa Barat.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>02.</span>
              <span>Penyusunan identity visual guide baku (logo, tipografi, warna master).</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>03.</span>
              <span>Penandatanganan kerja sama mitra sponsor dan integrasi sistem registrasi payment.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>04.</span>
              <span>Peluncuran fase 1 Landing Page publik dan pembukaan pra-registrasi komunitas.</span>
            </li>
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={() => {
                setFormSubmitted(false);
                setIsContactOpen(true);
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Mulai Inisiasi Kolaborasi & Kemitraan &rarr;
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          YOUTHON: Fun Run Movement Concept Document v1.0. Dokumen ini disiapkan untuk diskusi strategis bersama calon mitra dan komunitas.
        </p>
      </div>

      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Formulir Inisiasi Kolaborasi YOUTHON"
      >
        {formSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-emerald-bg)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Inisiasi Terkirim
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Terima kasih atas minat kolaborasi Anda. Data dan kontak Anda telah dicatat dalam draf koordinasi internal tim inisiator YOUTHON.
            </p>
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              className="btn btn-primary"
            >
              Tutup Formulir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor="partner-name" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                Nama Lengkap / Instansi
              </label>
              <input
                id="partner-name"
                type="text"
                required
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                placeholder="Contoh: Tim Brand Apparel / Komunitas Lari Bandung"
                className="btn"
                style={{ width: '100%', textAlign: 'left', cursor: 'text' }}
              />
            </div>

            <div>
              <label htmlFor="partner-email" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                Alamat Surel (Email)
              </label>
              <input
                id="partner-email"
                type="email"
                required
                value={partnerEmail}
                onChange={(e) => setPartnerEmail(e.target.value)}
                placeholder="nama@domain.com"
                className="btn"
                style={{ width: '100%', textAlign: 'left', cursor: 'text' }}
              />
            </div>

            <div>
              <label htmlFor="contact-category" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                Kategori Kemitraan
              </label>
              <select
                id="contact-category"
                value={contactCategory}
                onChange={(e) => setContactCategory(e.target.value)}
                className="btn"
                style={{ width: '100%', textAlign: 'left' }}
              >
                <option value="Sponsor & Brand Partnership">Sponsor & Brand Partnership</option>
                <option value="Komunitas Lari / Kampus">Komunitas Lari / Kampus</option>
                <option value="Pemerintah Daerah & Pariwisata">Pemerintah Daerah & Pariwisata</option>
                <option value="Media & Kreator Konten">Media & Kreator Konten</option>
                <option value="Relawan & Penyelenggara Lapangan">Relawan & Penyelenggara Lapangan</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="btn"
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Kirim Inisiasi
              </button>
            </div>
          </form>
        )}
      </Modal>
    </article>
  );
};

