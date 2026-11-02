import React, { useState } from 'react';

export const EditorialTeam: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const teamDivisions = [
    {
      id: 'event-director',
      num: '01',
      code: 'DIR-01',
      title: 'Event Director',
      badge: 'Pimpinan Eksekutif',
      scopeSummary: 'Pemegang keputusan, anggaran, target, dan koordinasi seluruh divisi.',
      coreResponsibilities: [
        'Pengambilan keputusan tertinggi terkait arah strategis, jadwal pelaksanaan, dan kebijakan darurat.',
        'Penyusunan dan pengawasan anggaran global acara bersama divisi Finance.',
        'Penetapan indikator keberhasilan (KPI) peserta, kepuasan audiens, dan kualitas penyelenggaraan.',
        'Memimpin rapat koordinasi lintas divisi dan menjadi representasi resmi gerakan ke pemangku kepentingan kota.'
      ],
      coordinationLine: 'Bertanggung jawab langsung kepada Dewan Penasihat Gerakan dan memimpin seluruh PIC Divisi.',
      keyDeliverables: 'Master Rundown, Dokumen Budget Global, Target Capaian Acara, Persetujuan Akhir Rute & Vendor.'
    },
    {
      id: 'event-operations',
      num: '02',
      code: 'OPS-02',
      title: 'Event Operations',
      badge: 'Operasional & Lintasan',
      scopeSummary: 'Venue, rute, rundown, vendor, transportasi, perlengkapan, dan logistik.',
      coreResponsibilities: [
        'Perizinan penggunaan fasilitas publik, sterilisasi lintasan 5K, dan koordinasi kantong parkir.',
        'Penyusunan alur pergerakan peserta (flow management) dari gate kedatangan hingga panggung utama.',
        'Pengadaan dan penempatan fasilitas pendukung: toilet portable, tenda ganti, barikade, dan tempat sampah.',
        'Manajemen rantai pasok perlengkapan rute (meja hidrasi, mist equipment, sound system rute) dan armada logistik.'
      ],
      coordinationLine: 'Berkoordinasi erat dengan Safety & Medical, Dishub, Kepolisian, serta pengelola venue kota.',
      keyDeliverables: 'Peta Sterilisasi Lintasan, Izin Lokasi Resmi, Alur Bongkar-Muat Logistik, Manajemen Crowd.'
    },
    {
      id: 'safety-medical',
      num: '03',
      code: 'MED-03',
      title: 'Safety & Medical',
      badge: 'Mandatori Keselamatan',
      scopeSummary: 'Penilaian risiko, layanan medis, marshal, keamanan, komunikasi darurat, dan evakuasi.',
      coreResponsibilities: [
        'Pelaksanaan audit kelayakan rute lari (risk assessment) dan simulasi mitigasi bahaya kecelakaan.',
        'Penempatan pos medis stasioner, dokter spesialis gawat darurat, perawat, serta armada ambulans rujukan.',
        'Perekrutan, pembekalan SOP, dan penempatan marshal di setiap persimpangan kritis dan stasiun hidrasi.',
        'Penyediaan kanal komunikasi radio darurat (HT) khusus dan pengawalan jalur evakuasi bebas hambatan.'
      ],
      coordinationLine: 'Memiliki otoritas keselamatan mutlak (veto power). Berkoordinasi langsung dengan RS Rujukan, PMI, dan Kepolisian.',
      keyDeliverables: 'Risk Assessment Matrix, SOP Evakuasi Darurat, Alokasi Pos Medis, Sertifikasi Keselamatan Lintasan.'
    },
    {
      id: 'sponsorship-partnership',
      num: '04',
      code: 'PRT-04',
      title: 'Sponsorship & Partnership',
      badge: 'Kemitraan Komersial',
      scopeSummary: 'Proposal, pencarian sponsor, negosiasi, kontrak, dan pemenuhan hak sponsor.',
      coreResponsibilities: [
        'Penyusunan dokumen proposal penawaran komersial yang transparan, terukur, dan bernilai tambah.',
        'Pemetaan dan pendekatan ke calon sponsor brand (apparel, hidrasi, perbankan, telekomunikasi, F&B).',
        'Negosiasi hak eksklusivitas, skema barter produk peserta, serta penandatanganan kontrak kerja sama legal.',
        'Pengawasan eksekusi di lapangan agar seluruh hak aktivasi sponsor (booth, signage, branding) terpenuhi tepat waktu.'
      ],
      coordinationLine: 'Berkoordinasi dengan Finance & Administration untuk arus kas dan Creative & Production untuk penempatan materi promosi.',
      keyDeliverables: 'Deck Penawaran Sponsor, Perjanjian Kerja Sama (PKS), Laporan Bukti Tayang (Proof of Performance).'
    },
    {
      id: 'marketing-community',
      num: '05',
      code: 'MKT-05',
      title: 'Marketing & Community',
      badge: 'Komunikasi & Komunitas',
      scopeSummary: 'Brand campaign, media sosial, KOL, kampus, komunitas lari, dan hubungan peserta.',
      coreResponsibilities: [
        'Perancangan kampanye komunikasi terpadu untuk membangun antusiasme dan citra inklusif gerakan.',
        'Pengelolaan konten media sosial organik dan interaksi aktif menjawab pertanyaan audiens.',
        'Kolaborasi dengan Key Opinion Leaders (KOL) yang merepresentasikan semangat gaya hidup sehat dan positif.',
        'Pendekatan langsung (roadshow) ke kampus mahasiswa, sekolah, dan komunitas lari santai di Jawa Barat.'
      ],
      coordinationLine: 'Berkoordinasi dengan Creative untuk kebutuhan visual dan Registration Services untuk penyelarasan periode pendaftaran.',
      keyDeliverables: 'Kalender Konten Digital, Kerjasama Komunitas Lari, Rencana Distribusi Siaran Pers Media.'
    },
    {
      id: 'registration-services',
      num: '06',
      code: 'REG-06',
      title: 'Registration & Participant Services',
      badge: 'Layanan & Data Peserta',
      scopeSummary: 'Pendaftaran, pembayaran, customer service, race pack, dan data peserta.',
      coreResponsibilities: [
        'Pengawasan kelancaran alur registrasi daring, validasi data identitas, dan integrasi payment gateway.',
        'Penyediaan kanal bantuan (customer support) cepat tanggap melalui WhatsApp resmi dan surel dukungan.',
        'Manajemen pengepakan dan pembagian paket lomba (Race Pack Collection: jersey, nomor BIB, race guide).',
        'Penyimpanan dan perlindungan data pribadi peserta sesuai prinsip kerahasiaan dan kepatuhan hukum.'
      ],
      coordinationLine: 'Berkoordinasi dengan Tim Web Engineering untuk infrastruktur sistem dan Finance untuk rekonsiliasi tiket.',
      keyDeliverables: 'Database Peserta Tervalidasi, SOP Pengambilan Race Pack, Laporan Layanan Customer Service.'
    },
    {
      id: 'creative-production',
      num: '07',
      code: 'CRT-07',
      title: 'Creative & Production',
      badge: 'Visual & Panggung Acara',
      scopeSummary: 'Desain, panggung, audio, signage, jersey, medali, foto, video, dan aktivasi.',
      coreResponsibilities: [
        'Pengembangan aset visual brand yang konsisten: logo, tipografi, materi promosi, dan panduan gaya.',
        'Desain teknis jersey peserta yang nyaman, medali finisher tematik, serta nomor dada (BIB) yang mudah terbaca.',
        'Perancangan panggung utama, instalasi audio musik festival, gate start/finish megah, dan penunjuk arah kontras.',
        'Manajemen tim dokumentasi visual (fotografer dan videografer rute) untuk penyediaan foto gratis bagi pelari.'
      ],
      coordinationLine: 'Berkoordinasi dengan Event Operations untuk tata letak panggung dan Marketing untuk distribusi materi visual.',
      keyDeliverables: 'Brand Guideline, Desain Jersey & Medali, Rencana Tata Panggung & Audio, Bank Foto Dokumentasi.'
    },
    {
      id: 'finance-administration',
      num: '08',
      code: 'FIN-08',
      title: 'Finance & Administration',
      badge: 'Tata Kelola Keuangan',
      scopeSummary: 'Budget control, procurement, kontrak vendor, pembayaran, dan pelaporan keuangan.',
      coreResponsibilities: [
        'Pengendalian pengeluaran berkala agar seluruh biaya operasional tetap berada dalam batas anggaran yang disetujui.',
        'Pengadaan barang dan jasa (procurement) dengan perbandingan harga yang sehat, transparan, dan dapat dipertanggungjawabkan.',
        'Penerbitan dokumen kontrak kerja sama resmi untuk seluruh vendor, tenaga medis, dan mitra penyedia jasa.',
        'Pencairan dana bertahap, pembayaran faktur tepat waktu, serta penyusunan laporan keuangan pasca-acara yang akuntabel.'
      ],
      coordinationLine: 'Bekerja berdampingan dengan Event Director dan seluruh divisi operasional yang membutuhkan alokasi dana.',
      keyDeliverables: 'Laporan Arus Kas (Cash Flow), Arsip Kontrak Vendor, Rekonsiliasi Pendapatan Tiket, Laporan Pertanggungjawaban Keuangan.'
    }
  ];

  const currentDiv = teamDivisions[selectedIdx];

  return (
    <section id="organisasi" className="editorial-section" aria-labelledby="heading-team">
      <div className="editorial-container">
        {/* Section Header Block */}
        <div className="section-header-block">
          <span className="section-eyebrow">09 / TATA KELOLA & STRUKTUR TIM</span>
          <h2 id="heading-team" className="section-headline">
            Struktur organisasi dan pembagian fungsi tim.
          </h2>
          <p className="section-lead">
            Untuk event perdana, tim tidak perlu terlalu besar, tetapi setiap fungsi harus memiliki PIC (Person in Charge)
            yang jelas untuk menjamin akuntabilitas eksekusi dan perlindungan keselamatan peserta.
          </p>
        </div>

        {/* Master-Detail Layout : 8 Divisi Tim */}
        <div className="safety-sidebar-layout">
          {/* Sidebar Menu */}
          <aside className="safety-sidebar-menu" aria-label="Daftar Divisi Tim">
            {teamDivisions.map((div, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`safety-sidebar-item ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                >
                  <span className="safety-item-num">{div.num}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span className="safety-item-title">{div.title}</span>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', opacity: isActive ? 0.85 : 0.65 }}>
                      {div.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* Detail Card Panel */}
          <div className="safety-detail-card" role="region" aria-live="polite">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-pill">
                  Divisi {currentDiv.num} dari 08 : {currentDiv.code}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-deep)', fontWeight: 700 }}>
                  {currentDiv.badge}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-green-muted)' }}>
                TATA KELOLA PIC RESMI
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
                {currentDiv.title}
              </h3>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--color-green-deep)', fontWeight: 600 }}>
                {currentDiv.scopeSummary}
              </p>
            </div>

            {/* Tanggung Jawab Utama */}
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                TANGGUNG JAWAB & FUNGSI UTAMA:
              </span>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {currentDiv.coreResponsibilities.map((resp, rIdx) => (
                  <li key={rIdx} style={{ fontSize: '0.875rem', color: 'var(--color-green-text)', lineHeight: '1.6' }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Grid Detail : Koordinasi & Output */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  JALUR KOORDINASI UTAMA:
                </span>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-muted)', lineHeight: '1.55', margin: 0 }}>
                  {currentDiv.coordinationLine}
                </p>
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                  PRODUK & DOKUMEN KUNCI (OUTPUT):
                </span>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-green-text)', fontWeight: 600, lineHeight: '1.55', margin: 0 }}>
                  {currentDiv.keyDeliverables}
                </p>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setSelectedIdx((prev) => Math.max(0, prev - 1))}
                disabled={selectedIdx === 0}
                className="btn-editorial btn-secondary-editorial"
                style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
              >
                &larr; Divisi Sebelumnya
              </button>

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-green-muted)' }}>
                {selectedIdx + 1} / {teamDivisions.length}
              </span>

              <button
                type="button"
                onClick={() => setSelectedIdx((prev) => Math.min(teamDivisions.length - 1, prev + 1))}
                disabled={selectedIdx === teamDivisions.length - 1}
                className="btn-editorial btn-primary-editorial"
                style={{ minHeight: '38px', padding: '0.35rem 0.875rem', fontSize: '0.8125rem' }}
              >
                Divisi Berikutnya &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Governance Guidelines & Vendor Coordination Strip */}
        <div className="team-governance-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="section-eyebrow" style={{ marginBottom: 0 }}>
              PRINSIP TATA KELOLA SKALA PERDANA
            </span>
            <span className="status-pill" style={{ backgroundColor: 'var(--color-green-deep)', color: '#ffffff' }}>
              Aturan Kunci
            </span>
          </div>

          {/* Golden Rule Callout */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-amber)', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-amber)', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
              BATASAN PENGGABUNGAN FUNGSI & MANDATORI KESELAMATAN:
            </span>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-green-text)', lineHeight: '1.65', margin: 0, fontWeight: 500 }}>
              Beberapa fungsi dapat digabung dalam satu orang pada skala kecil (misalnya Finance dengan Administration, atau Marketing dengan Community).
              Namun, <strong>fungsi keselamatan (Safety & Medical) tidak boleh sekadar menjadi tugas tambahan</strong> tanpa penanggung jawab yang kompeten.
            </p>
          </div>

          {/* Critical Vendor Coordination Protocols */}
          <div>
            <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-green-text)', marginBottom: '0.35rem' }}>
              Standar Jalur Koordinasi 3 Vendor Kritis
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-green-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
              Vendor medis, keamanan, dan produksi harus memiliki jalur koordinasi yang jelas dan tidak boleh saling menunggu saat terjadi kendala lapangan:
            </p>

            <div className="team-vendor-grid">
              <div className="team-vendor-box">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>
                  01 // VENDOR MEDIS
                </span>
                <span className="team-vendor-title">Koordinasi Medis & Ambulans</span>
                <p className="team-vendor-desc">
                  Memiliki saluran komunikasi radio darurat tersendiri langsung ke PIC Safety & Medical, izin rute steril bagi ambulans, serta protokol tanggap darurat yang terhubung dengan rumah sakit rujukan.
                </p>
              </div>

              <div className="team-vendor-box">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>
                  02 // VENDOR KEAMANAN
                </span>
                <span className="team-vendor-title">Koordinasi Keamanan & Jalur</span>
                <p className="team-vendor-desc">
                  Bekerja di bawah arahan komando Event Operations dan Kepolisian untuk pengalihan arus lalu lintas, barikade penyeberangan warga di jam sibuk, serta pencegahan intrusi kendaraan bermotor ke rute lari.
                </p>
              </div>

              <div className="team-vendor-box">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-green-deep)' }}>
                  03 // VENDOR PRODUKSI
                </span>
                <span className="team-vendor-title">Koordinasi Audio & Panggung</span>
                <p className="team-vendor-desc">
                  Wajib melakukan uji kelayakan beban konstruksi panggung (rigging inspection), pembatasan desibel audio agar tidak mengaburkan instruksi marshal, serta memastikan seluruh jalur kabel terlindung ramp pengaman pelari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

