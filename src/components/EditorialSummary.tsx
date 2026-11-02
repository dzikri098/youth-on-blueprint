import React, { useState } from 'react';
import { Modal } from './Modal';

export const EditorialSummary: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Sponsor & Brand Partnership');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section className="editorial-section alt-bg" aria-labelledby="heading-manifesto">
      <div className="editorial-container">
        <div className="section-header-block">
          <span className="section-eyebrow">15 / MANIFESTO & PRIORITAS AKSI</span>
          <h2 id="heading-manifesto" className="section-headline">
            Mari bergerak bersama. Menyalakan energi anak muda Indonesia.
          </h2>
          <p className="section-lead">
            YOUTHON adalah undangan terbuka bagi siapapun yang meyakini kekuatan olahraga positif,
            kreativitas, dan kebersamaan komunitas.
          </p>
        </div>

        {/* 6 Prioritas Yang Harus Dikerjakan Sekarang */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '12px', padding: ' clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '2.5rem', boxShadow: '0 4px 16px rgba(21, 63, 53, 0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>
              ACTION PLAN : CHAPTER 01 WEST JAVA
            </span>
            <span className="status-pill" style={{ backgroundColor: 'var(--color-green-deep)', color: '#ffffff' }}>
              6 Langkah Kunci
            </span>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
            Prioritas Kerja yang Harus Dikerjakan Sekarang
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Jika YOUTHON benar-benar akan dimulai di Jawa Barat, urutan kerja paling efektif dan terstruktur adalah:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--color-green-deep)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>LANGKAH 01</span>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Tentukan Skala & Tujuan</p>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', display: 'block' }}>Putuskan apakah fokus utama chapter pertama adalah validasi konsep, membangun basis komunitas, atau menghasilkan keuntungan.</span>
            </div>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--color-green-deep)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>LANGKAH 02</span>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Pilih Kota & Lokasi Kandidat</p>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', display: 'block' }}>Bandung Raya bisa menjadi salah satu opsi awal untuk dievaluasi, bukan keputusan otomatis tanpa survei.</span>
            </div>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--color-green-deep)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>LANGKAH 03</span>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Buat Event Brief & Anggaran</p>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', display: 'block' }}>Dokumen ini menjadi dasar diskusi terarah dengan tim kerja, vendor panggung/medis, dan calon sponsor.</span>
            </div>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--color-green-deep)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>LANGKAH 04</span>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Bentuk Tim Inti & Koordinasi Izin</p>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', display: 'block' }}>Jangan menunggu seluruh materi visual selesai untuk mulai mengecek kelayakan izin lokasi ke Dishub & Kepolisian.</span>
            </div>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--color-green-deep)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>LANGKAH 05</span>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Validasi Signature Activity</p>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', display: 'block' }}>Pastikan aktivasi perkusi Rhythm Run realistis, aman dari kemacetan, dan sesuai alokasi anggaran operasional.</span>
            </div>

            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--color-green-deep)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>LANGKAH 06</span>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-green-text)', margin: '0.25rem 0' }}>Luncurkan Kampanye & Registrasi</p>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.5', display: 'block' }}>Informasi publik harus konsisten dengan fasilitas rute dan izin venue yang sudah terkonfirmasi resmi.</span>
            </div>
          </div>
        </div>

        <div className="quote-statement-box" style={{ marginBottom: '2.5rem' }}>
          <div className="quote-statement-lead">KOMITMEN GERAKAN</div>
          <p className="quote-statement-text">
            &quot;Sebuah movement bermula dari langkah pertama. Kami menyambut dialog kolaborasi bersama brand,
            kampus, komunitas lari, dan pemerintah daerah untuk bersama mewujudkan edisi perdana YOUTHON di Jawa Barat.&quot;
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                setIsSent(false);
                setIsModalOpen(true);
              }}
              className="btn-editorial btn-lime"
            >
              <span>Mulai Inisiasi Dialog Kemitraan</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Inisiasi Kolaborasi YOUTHON"
        >
          {isSent ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--color-green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-green-text)', marginBottom: '0.5rem' }}>
                Inisiasi Berhasil Dicatat
              </h3>
              <p style={{ color: 'var(--color-green-muted)', fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Terima kasih atas minat kolaborasi Anda. Kontak Anda telah dicatat dalam draf koordinasi tim inisiator YOUTHON.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="btn-editorial btn-primary-editorial"
              >
                Tutup Formulir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <div>
                <label htmlFor="collab-name" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
                  Nama Lengkap / Instansi
                </label>
                <input
                  id="collab-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Brand Apparel / Komunitas Kampus"
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '100%', textAlign: 'left', borderRadius: '8px', cursor: 'text' }}
                />
              </div>

              <div>
                <label htmlFor="collab-email" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
                  Alamat Surel (Email)
                </label>
                <input
                  id="collab-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@perusahaan.com"
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '100%', textAlign: 'left', borderRadius: '8px', cursor: 'text' }}
                />
              </div>

              <div>
                <label htmlFor="collab-sector" style={{ display: 'block', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)', marginBottom: '0.35rem' }}>
                  Sektor Kolaborasi
                </label>
                <select
                  id="collab-sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="btn-editorial btn-secondary-editorial"
                  style={{ width: '100%', textAlign: 'left', borderRadius: '8px' }}
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
                  onClick={() => setIsModalOpen(false)}
                  className="btn-editorial btn-secondary-editorial"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn-editorial btn-primary-editorial"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </section>
  );
};

