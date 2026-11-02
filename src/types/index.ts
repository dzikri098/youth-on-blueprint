export type ViewMode = 'slides' | 'document';
export type ThemeMode = 'dark' | 'light';

export interface SlideItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
}

export interface ActivationModule {
  id: string;
  name: string;
  tagline: string;
  description: string;
  safetyCheck: string;
  readinessLevel: 'Pilot Ready' | 'Needs Validation' | 'Optional Module';
  operationalNote: string;
}

export interface ChapterLocation {
  id: string;
  cityName: string;
  region: string;
  role: 'Pilot Region' | 'Expansion Wave 1' | 'Expansion Wave 2';
  status: 'Kandidat Pilot [TBD]' | 'Eksplorasi [TBD]';
  communityProfile: string;
}

export interface PartnerCategory {
  id: string;
  sector: string;
  examples: string;
  valueForRunners: string;
  valueForBrand: string;
  scope: string;
}

export interface SitemapItem {
  priority: number | string;
  title: string;
  route: string;
  role: string;
  isInitialScope: boolean;
}

export interface ChecklistItem {
  id: string;
  topic: string;
  category: 'Brand' | 'Event' | 'Ticketing' | 'Safety' | 'Digital';
  status: 'pending' | 'confirmed';
  notes: string;
  impact: string;
}

export interface MetricItem {
  category: string;
  metric: string;
  purpose: string;
  baselineRule: string;
}

