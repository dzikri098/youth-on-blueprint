import React from 'react';

export const EditorialPillars: React.FC = () => {
  const experiences = [
    {
      num: '01',
      name: 'Run',
      tagline: 'Lari Santai Inklusif',
      desc: 'Lari santai yang ramah bagi pelari pemula maupun komunitas lari berpengalaman, tanpa intimidasi catatan waktu dan bebas tekanan.'
    },
    {
      num: '02',
      name: 'Explore',
      tagline: 'Eksplorasi Kota & Musik',
      desc: 'Menjelajahi checkpoint tematik rute, aktivasi berenergi Rhythm Run perkusi, dan menikmati keunikan kearifan lokal kota tuan rumah.'
    },
    {
      num: '03',
      name: 'Connect',
      tagline: 'Jejaring Komunitas Muda',
      desc: 'Wadah temu terbuka bagi komunitas olahraga, kawan baru, mahasiswa kampus, insan kreatif, dan brand kolaboratif di ruang publik.'
    },
    {
      num: '04',
      name: 'Celebrate',
      tagline: 'Festival Garis Finis',
      desc: 'Merayakan pencapaian langkah bersama di garis finis, menikmati festival musik panggung, hidrasi segar, dan mengabadikan kenangan.'
    }
  ];

  return (
    <section id="pilar" className="editorial-section alt-bg" aria-labelledby="heading-pillars">
      <div className="editorial-container">
        <div className="section-header-block">
          <span className="section-eyebrow">02 / PENGALAMAN INTI PESERTA</span>
          <h2 id="heading-pillars" className="section-headline">
            Empat pilar pengalaman: Run, Explore, Connect, Celebrate.
          </h2>
          <p className="section-lead">
            YOUTHON dirancang bukan sekadar ajang lari satu hari, melainkan perpaduan gerakan anak muda
            yang memiliki format acara konsisten, identitas kuat, dan potensi tur antarkota.
          </p>
        </div>

        <div className="pillars-container" style={{ marginBottom: '2rem' }}>
          {experiences.map((item) => (
            <div key={item.num} className="pillar-editorial-card">
              <div className="pillar-number">{item.num}</div>
              <h3 className="pillar-name">{item.name}</h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                {item.tagline}
              </span>
              <p className="pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Guiding Principle Callout */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderLeft: '4px solid var(--color-green-deep)', borderRadius: '10px', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--color-green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', textTransform: 'uppercase' }}>
              PRINSIP INTEGRASI AKTIVITAS RUTE:
            </span>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', margin: '0.2rem 0 0 0', lineHeight: '1.55', fontWeight: 500 }}>
              Kuncinya, aktivitas inovatif harus memperkuat pengalaman berlari, bukan membuat rute terlalu padat atau mengganggu keselamatan peserta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
