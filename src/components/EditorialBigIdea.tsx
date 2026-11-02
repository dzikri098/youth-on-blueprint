import React from 'react';

export const EditorialBigIdea: React.FC = () => {
  return (
    <section id="konsep" className="editorial-section" aria-labelledby="heading-big-idea">
      <div className="editorial-container">
        <div className="section-header-block">
          <span className="section-eyebrow">01 / KONSEP INTI</span>
          <h2 id="heading-big-idea" className="section-headline">
            Mengubah lari menjadi festival energi komunitas.
          </h2>
          <p className="section-lead">
            Banyak generasi muda ingin memulai kebiasaan hidup sehat, namun sering merasa terintimidasi
            oleh format lomba lari yang terlalu kompetitif, kaku, atau berorientasi murni pada kecepatan catatan waktu.
          </p>
        </div>

        <div className="editorial-split-grid">
          <div>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-green-text)' }}>
              Paradigma Baru Olahraga Kaum Muda
            </h3>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-green-muted)', marginBottom: '1.25rem' }}>
              YOUTHON menggeser paradigma dari sekadar ajang adu cepat individual menjadi sebuah gerakan festival bersama.
              Kami menggabungkan rute lari santai yang steril dan aman dengan titik musik beraudio jernih, tim penyemangat
              kreatif di lintasan, serta perayaan festival yang hangat di garis finis.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--color-green-muted)' }}>
              Inilah ruang bagi anak muda untuk bertemu teman baru, menikmati atmosfer kota di pagi hari, dan
              merayakan langkah bersama tanpa rasa cemas akan posisi podium atau penilaian catatan waktu.
            </p>
          </div>

          <div className="quote-statement-box" style={{ margin: 0 }}>
            <div className="quote-statement-lead">FILOSOFI UTAMA</div>
            <p className="quote-statement-text">
              &quot;Bukan tentang siapa yang tercepat melintasi garis finis, tetapi tentang energi positif,
              kreativitas, dan kebersamaan yang kita rayakan sepanjang rute.&quot;
            </p>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-mono)' }}>
              YOUTHON : Fun Run Movement Manifesto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

