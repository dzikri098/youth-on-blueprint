import React, { useState, useEffect } from 'react';
import { EditorialHeader } from './components/EditorialHeader';
import { EditorialHero } from './components/EditorialHero';
import { EditorialBigIdea } from './components/EditorialBigIdea';
import { EditorialPillars } from './components/EditorialPillars';
import { EditorialVisionMission } from './components/EditorialVisionMission';
import { EditorialAudience } from './components/EditorialAudience';
import { EditorialBrandCharacter } from './components/EditorialBrandCharacter';
import { EditorialExperience } from './components/EditorialExperience';
import { EditorialSafety } from './components/EditorialSafety';
import { EditorialTeam } from './components/EditorialTeam';
import { EditorialJourney } from './components/EditorialJourney';
import { EditorialRoadmap } from './components/EditorialRoadmap';
import { EditorialPartners } from './components/EditorialPartners';
import { EditorialDigital } from './components/EditorialDigital';
import { EditorialEngineering } from './components/EditorialEngineering';
import { EditorialChecklist } from './components/EditorialChecklist';
import { EditorialSummary } from './components/EditorialSummary';
import { EditorialFooter } from './components/EditorialFooter';
import { InteractivePresentationModal } from './components/InteractivePresentationModal';
import { HierarchicalTreePage } from './components/HierarchicalTreePage';
import { BrandConceptPage } from './components/BrandConceptPage';
import { EditorialSplitDossier } from './components/EditorialSplitDossier';
import { IconTarget } from './components/Icons';

export const App: React.FC = () => {
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [editorialDisplayMode, setEditorialDisplayMode] = useState<'focus' | 'scroll'>('focus');
  const [focusSectionId, setFocusSectionId] = useState<string>('hero');
  const [currentView, setCurrentView] = useState<'editorial' | 'tree' | 'brand'>(() => {
    if (window.location.hash.startsWith('#tree')) return 'tree';
    if (window.location.hash.startsWith('#brand')) return 'brand';
    return 'editorial';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#tree')) {
        setCurrentView('tree');
      } else if (hash.startsWith('#brand')) {
        setCurrentView('brand');
      } else {
        setCurrentView('editorial');
        const clean = hash.replace('#', '');
        if (clean && clean !== 'main-content') {
          setFocusSectionId(clean);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleDirectToSection = (sectionId: string) => {
    setCurrentView('editorial');
    setFocusSectionId(sectionId);
    window.location.hash = sectionId;
    if (editorialDisplayMode === 'scroll') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    }
  };

  const handleOpenTree = () => {
    setCurrentView('tree');
    window.location.hash = '#tree';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBrand = () => {
    setCurrentView('brand');
    window.location.hash = '#brand';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToEditorial = () => {
    setCurrentView('editorial');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleGlobalKeys = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      // Quick key 'p' to open presentation
      if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey && !isPresentationOpen) {
        e.preventDefault();
        setIsPresentationOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeys);
    return () => window.removeEventListener('keydown', handleGlobalKeys);
  }, [isPresentationOpen]);

  return (
    <div className="editorial-app-wrapper">
      <a
        href="#hero"
        className="btn-editorial btn-primary-editorial"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1.5rem',
          zIndex: 9999,
          transition: 'top 0.2s ease'
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '1rem';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-100px';
        }}
      >
        Lewati ke Konten Utama
      </a>

      {/* Conditional View: Hierarchical Tree Page vs Brand Concept Page vs Main Editorial Website */}
      {currentView === 'tree' ? (
        <>
          <HierarchicalTreePage
            onBackToEditorial={handleBackToEditorial}
            onDirectToSection={handleDirectToSection}
            onOpenPresentation={() => setIsPresentationOpen(true)}
            onOpenBrand={handleOpenBrand}
          />
          <EditorialFooter />
        </>
      ) : currentView === 'brand' ? (
        <>
          <BrandConceptPage
            onBackToEditorial={handleBackToEditorial}
            onOpenTree={handleOpenTree}
            onOpenPresentation={() => setIsPresentationOpen(true)}
          />
          <EditorialFooter />
        </>
      ) : editorialDisplayMode === 'focus' ? (
        /* Opsi 1: Split-Stage Dossier (Zero Scroll & High-Focus per Bagian) */
        <EditorialSplitDossier
          initialSectionId={focusSectionId}
          onOpenPresentation={() => setIsPresentationOpen(true)}
          onOpenTree={handleOpenTree}
          onOpenBrand={handleOpenBrand}
          onSwitchToScrollMode={() => setEditorialDisplayMode('scroll')}
        />
      ) : (
        /* Mode Alternatif: Editorial Long Continuous Scroll */
        <>
          <div className="scroll-mode-switch-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="status-pill" style={{ backgroundColor: 'var(--accent-lime)', color: 'var(--color-green-deep)', border: 'none', fontWeight: 800 }}>
                Mode Scroll Panjang
              </span>
              <span style={{ fontSize: '0.8125rem' }}>
                Halaman saat ini memanjang ke bawah. Ingin fokus membahas per bagian tanpa distraksi scroll?
              </span>
            </div>
            <button
              type="button"
              onClick={() => setEditorialDisplayMode('focus')}
              className="btn-editorial btn-lime"
              style={{ minHeight: '32px', padding: '0.2rem 0.75rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center' }}
            >
              <IconTarget size={13} style={{ marginRight: '6px' }} />
              <span>Beralih ke Mode Fokus (Opsi 1)</span>
            </button>
          </div>

          <EditorialHeader
            onOpenPresentation={() => setIsPresentationOpen(true)}
            onOpenTree={handleOpenTree}
            onOpenBrand={handleOpenBrand}
          />

          <main id="main-content">
            <EditorialHero onOpenPresentation={() => setIsPresentationOpen(true)} />
            <EditorialBigIdea />
            <EditorialPillars />
            <EditorialVisionMission />
            <EditorialAudience />
            <EditorialBrandCharacter />
            <EditorialExperience />
            <EditorialSafety />
            <EditorialTeam />
            <EditorialJourney />
            <EditorialRoadmap />
            <EditorialPartners />
            <EditorialDigital />
            <EditorialEngineering />
            <EditorialChecklist />
            <EditorialSummary />
          </main>

          <EditorialFooter />
        </>
      )}

      {/* Mode B : Interactive Presentation Modal (Reference 3) */}
      <InteractivePresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </div>
  );
};
