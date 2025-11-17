
export type Language = 'en' | 'ar';

export enum PortfolioCategory {
  WEB_DESIGN = 'Web Design',
  PHOTOGRAPHY = 'Photography',
  EVENTS_MARKETING = 'Events Marketing',
  DIGITAL_MARKETING = 'Digital Marketing',
  BRANDING = 'Branding',
}

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  image: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  details: {
    goal: { en: string; ar: string };
    process: { en: string; ar: string };
    result: { en: string; ar: string };
  };
  gallery: string[];
}