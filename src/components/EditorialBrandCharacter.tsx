import React, { useState } from 'react';

export const EditorialBrandCharacter: React.FC = () => {
  const traits = [
    { name: 'Energetic', desc: 'Membawa dorongan semangat positif yang menular di setiap interaksi dan materi komunikasi.' },
    { name: 'Youthful', desc: 'Selaras dengan gaya hidup, aspirasi, dan pola interaksi kreatif generasi muda masa kini.' },
    { name: 'Inclusive', desc: 'Menyambut semua orang tanpa memandang latar belakang sosial atau tingkat kebugaran fisik.' },
    { name: 'Expressive', desc: 'Memberi ruang luas bagi keunikan gaya busana lari, musik, dan kebebasan berekspresi.' },
    { name: 'Social', desc: 'Mengutamakan kehangatan interaksi antarpeserta, pertemanan baru, dan kolaborasi komunitas.' },
    { name: 'Optimistic', desc: 'Menatap masa depan dengan keyakinan, kebiasaan sehat, keceriaan, dan energi positif.' },
    { name: 'Contemporary', desc: 'Modern, adaptif terhadap perkembangan teknologi digital dan dinamika budaya urban.' }
  ];

  const [activeTrait, setActiveTrait] = useState<number>(0);

  return (
    <section className="editorial-section" aria-labelledby="heading-brand-character">
      <div className="editorial-container">
        <div className="section-header-block">
          <span className="section-eyebrow">05 / KEPRIBADIAN BRAND</span>
          <h2 id="heading-brand-character" className="section-headline">
            Karakter brand yang energetik, bersahabat, dan kontemporer.
          </h2>
          <p className="section-lead">
            YOUTHON berkomunikasi dengan bahasa yang aktif, percaya diri, dan mudah dipahami,
            tanpa memaksakan slang yang cepat usang.
          </p>
        </div>

        <div className="editorial-split-grid" style={{ marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              TUJUH SIFAT UTAMA KEPRIBADIAN
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {traits.map((t, idx) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActiveTrait(idx)}
                  className={`btn-editorial ${activeTrait === idx ? 'btn-primary-editorial' : 'btn-secondary-editorial'}`}
                  style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
                  aria-pressed={activeTrait === idx}
                >
                  {t.name}
                </button>
              ))}
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)', textTransform: 'uppercase' }}>
                KARAKTER TERPILIH
              </span>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, margin: '0.25rem 0 0.5rem 0', color: 'var(--color-green-text)' }}>
                {traits[activeTrait].name}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--color-green-muted)' }}>
                {traits[activeTrait].desc}
              </p>
            </div>
          </div>

          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              EKSPLORASI PESAN UTAMA
            </span>
            <div className="editorial-card" style={{ padding: '1.75rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)' }}>
                  HEADLINE CANDIDATE:
                </span>
                <p style={{ fontFamily: 'var(--font-headline)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-green-deep)', lineHeight: '1.2', marginTop: '0.25rem' }}>
                  &quot;Switch Your Energy On.&quot;
                </p>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-muted)' }}>
                  SUPPORTING COPY:
                </span>
                <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-green-text)', marginTop: '0.25rem' }}>
                  &quot;Move Together. Feel the Energy. Keep the Movement Going.&quot;
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.875rem', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                Catatan: Headline dan slogan di atas merupakan opsi eksplorasi awal untuk didiskusikan bersama,
                bukan keputusan final yang mengikat. Penyelarasan narasi akan disesuaikan saat finalisasi identitas visual.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

