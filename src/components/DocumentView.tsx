import React, { useState, useEffect } from 'react';
import { SlideItem } from '../types';
import { SectionConcept } from './SectionConcept';
import { SectionBrand } from './SectionBrand';
import { SectionExperience } from './SectionExperience';
import { SectionSafety } from './SectionSafety';
import { SectionRoadmap } from './SectionRoadmap';
import { SectionPartners } from './SectionPartners';
import { SectionDigital } from './SectionDigital';
import { SectionEngineering } from './SectionEngineering';
import { SectionChecklist } from './SectionChecklist';
import { SectionSummary } from './SectionSummary';

interface DocumentViewProps {
  slides: SlideItem[];
}

export const DocumentView: React.FC<DocumentViewProps> = ({ slides }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('concept');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = slides.length - 1; i >= 0; i--) {
        const el = document.getElementById(slides[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(slides[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="document-layout">
      <aside className="doc-sidebar" aria-label="Daftar Isi Dokumen">
        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            DAFTAR ISI BRIEFING
          </span>
        </div>
        <nav className="doc-sidebar-nav">
          {slides.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(s.id)}
              className={`doc-nav-link ${activeSectionId === s.id ? 'active' : ''}`}
              style={{ textAlign: 'left', width: '100%' }}
              aria-current={activeSectionId === s.id ? 'true' : undefined}
            >
              <span style={{ color: 'var(--accent-cyan)', marginRight: '0.35rem' }}>{s.number}.</span>
              <span>{s.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="doc-content-area" id="main-content">
        <section id="concept" className="doc-section" aria-labelledby="heading-concept">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 01 // FONDASE GERAKAN</span>
          </div>
          <h2 id="heading-concept" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            01. Konsep, Visi, Misi & Audiens
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Fondasi gerakan fun run inklusif yang menghubungkan generasi muda di berbagai kota Indonesia.
          </p>
          <SectionConcept />
        </section>

        <section id="brand" className="doc-section" aria-labelledby="heading-brand">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 02 // SUARA & KARAKTER</span>
          </div>
          <h2 id="heading-brand" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            02. Karakter Brand & Arah Komunikasi
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Tujuh pilar kepribadian brand dan eksplorasi pesan utama generasi muda.
          </p>
          <SectionBrand />
        </section>

        <section id="experience" className="doc-section" aria-labelledby="heading-experience">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 03 // MODUL PENGALAMAN</span>
          </div>
          <h2 id="heading-experience" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            03. Pengalaman Event & Ide Aktivasi Inovatif
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Enam pilar pengalaman dan enam modul aktivasi di rute lari serta garis finis.
          </p>
          <SectionExperience />
        </section>

        <section id="safety" className="doc-section" aria-labelledby="heading-safety">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge emerald">BAB 04 // OPERASIONAL & KESELAMATAN</span>
          </div>
          <h2 id="heading-safety" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            04. Prinsip Penyelenggaraan & Standar Keselamatan
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Standar operasional rute, manajemen risiko medis, dan penegasan aturan lari (COT/COP).
          </p>
          <SectionSafety />
        </section>

        <section id="roadmap" className="doc-section" aria-labelledby="heading-roadmap">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 05 // SKALA NASIONAL</span>
          </div>
          <h2 id="heading-roadmap" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            05. Strategi Pengembangan Movement
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Ekspansi bertahap dari pilot Jawa Barat ke berbagai chapter kota di Indonesia.
          </p>
          <SectionRoadmap />
        </section>

        <section id="partners" className="doc-section" aria-labelledby="heading-partners">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 06 // EKOSISTEM KEMITRAAN</span>
          </div>
          <h2 id="heading-partners" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            06. Peluang Kolaborasi & Kemitraan
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Delapan sektor mitra strategis dengan nilai nyata bagi pelari dan brand.
          </p>
          <SectionPartners />
        </section>

        <section id="digital" className="doc-section" aria-labelledby="heading-digital">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 07 // ARSITEKTUR PLATFORM</span>
          </div>
          <h2 id="heading-digital" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            07. Sitemap & Rancangan Landing Page
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Arsitektur digital website resmi dan 10 urutan seksi berorientasi partisipasi.
          </p>
          <SectionDigital />
        </section>

        <section id="engineering" className="doc-section" aria-labelledby="heading-engineering">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge cyan">BAB 08 // REKAYASA & KPIS</span>
          </div>
          <h2 id="heading-engineering" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            08. Tahapan Rekayasa Web & Indikator Keberhasilan
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Empat fase peluncuran sistem digital, standar teknis, dan tolok ukur performa.
          </p>
          <SectionEngineering />
        </section>

        <section id="checklist" className="doc-section" aria-labelledby="heading-checklist">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge amber">BAB 09 // VERIFIKASI PRA-IMPLEMENTASI</span>
          </div>
          <h2 id="heading-checklist" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            09. Checklist Informasi yang Perlu Dikonfirmasi
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Sebelas parameter krusial yang perlu disepakati sebelum tahap produksi.
          </p>
          <SectionChecklist />
        </section>

        <section id="summary" className="doc-section" aria-labelledby="heading-summary">
          <div className="slide-badge-group" style={{ marginBottom: '0.5rem' }}>
            <span className="tag-badge emerald">BAB 10 // KESIMPULAN & AKSI</span>
          </div>
          <h2 id="heading-summary" className="slide-title" style={{ marginBottom: '0.5rem' }}>
            10. Rangkuman & Langkah Berikutnya
          </h2>
          <p className="slide-subtitle" style={{ marginBottom: '1.5rem' }}>
            Manifesto gerakan berkesinambungan dan pintu kolaborasi awal.
          </p>
          <SectionSummary />
        </section>
      </main>
    </div>
  );
};

