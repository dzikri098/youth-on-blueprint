import React from 'react';

export const EditorialJourney: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Inspirasi & Penemuan',
      desc: 'Calon peserta mengenal YOUTHON melalui konten sosial dan ajakan teman sebagai ajang fun run tanpa tekanan rekor.'
    },
    {
      step: '02',
      title: 'Pendaftaran Mandiri',
      desc: 'Alur web pendaftaran yang cepat, pilihan paket komunitas mahasiswa, validasi server-side aman, dan konfirmasi tiket instan.'
    },
    {
      step: '03',
      title: 'Pengambilan Race Pack',
      desc: 'Antrean tertib dengan pemindaian kode QR di ponsel, pembagian jersey resmi berkualitas, nomor dada (BIB), dan buku Race Guide.'
    },
    {
      step: '04',
      title: 'Hari Pelaksanaan (Race Day)',
      desc: 'Pemanasan berenergi, rute lari santai dengan zona audio Rhythm Run, sorak Hype Squad di tanjakan, dan selebrasi festival finis.'
    },
    {
      step: '05',
      title: 'Koneksi Berkelanjutan',
      desc: 'Peserta mengunduh foto aksi resolusi tinggi secara gratis, mengisi survei kepuasan, dan bergabung dalam sesi lari komunitas bulanan.'
    }
  ];

  return (
    <section className="editorial-section alt-bg" aria-labelledby="heading-journey">
      <div className="editorial-container">
        <div className="section-header-block">
          <span className="section-eyebrow">09 / ALUR PESERTA</span>
          <h2 id="heading-journey" className="section-headline">
            Perjalanan peserta dari pendaftaran hingga komunitas.
          </h2>
          <p className="section-lead">
            Setiap titik sentuh (touchpoint) dirancang teliti demi menghadirkan kenyamanan, kepastian informasi,
            dan kegembiraan yang tulus.
          </p>
        </div>

        <div className="clean-feature-list">
          {steps.map((st) => (
            <div key={st.step} className="clean-feature-item" style={{ padding: '1.25rem 1.5rem' }}>
              <span className="feature-item-num" style={{ fontSize: '1rem', padding: '0.35rem 0.65rem' }}>
                Fase {st.step}
              </span>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-green-text)', marginBottom: '0.25rem' }}>
                  {st.title}
                </h3>
                <p className="feature-item-text">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

