import React from 'react';

export const EditorialVisionMission: React.FC = () => {
  const missions = [
    'Menghadirkan pengalaman lari yang menyenangkan, inklusif, dan mudah diakses oleh pemula sekalipun.',
    'Mendorong gaya hidup aktif dan kebiasaan bergerak sehat di kalangan pelajar serta pekerja muda.',
    'Menciptakan ruang pertemanan nyata, interaksi sosial hangat, dan wadah kolaborasi komunitas.',
    'Menggabungkan olahraga jalan-lari dengan panggung musik festival, tantangan interaktif, dan seni.',
    'Mengembangkan jaringan chapter event dan komunitas YOUTHON yang solid di berbagai kota Indonesia.',
    'Membuka ruang kolaborasi bermakna bagi brand sponsor, mitra kampus, kreator, dan UMKM lokal.'
  ];

  return (
    <section className="editorial-section" aria-labelledby="heading-vision-mission">
      <div className="editorial-container">
        <div className="editorial-split-grid">
          <div>
            <span className="section-eyebrow">03 / ARAH STRATEGIS</span>
            <h2 id="heading-vision-mission" className="section-headline">
              Visi besar yang menghubungkan generasi muda Indonesia.
            </h2>
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--color-green-deep)', borderRadius: '0 12px 12px 0', marginTop: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                VISI GERAKAN
              </span>
              <p style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-green-text)', lineHeight: '1.5' }}>
                &quot;Menjadi fun run movement yang menghubungkan generasi muda di berbagai kota di Indonesia melalui olahraga, kreativitas, dan pengalaman komunitas yang positif.&quot;
              </p>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">ENAM MISI EKSEKUSI</span>
            <div className="clean-feature-list" style={{ marginTop: '0.5rem' }}>
              {missions.map((m, idx) => (
                <div key={idx} className="clean-feature-item">
                  <span className="feature-item-num">0{idx + 1}</span>
                  <p className="feature-item-text">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

