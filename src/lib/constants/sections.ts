import { SectionModel } from '@/models/section.model';

export const HOME_SECTION: SectionModel = {
  id: 'home',
  link: '#home',
};

export const ABOUT_SECTION: SectionModel = {
  id: 'about',
  link: '#about',
};

export const SERVICES_SECTION: SectionModel = {
  id: 'skills',
  link: '#skills',
};

export const CONTACT_SECTION: SectionModel = {
  id: 'contact',
  link: '#contact',
};

export const SECTIONS: SectionModel[] = [
  HOME_SECTION,
  ABOUT_SECTION,
  SERVICES_SECTION,
  CONTACT_SECTION,
];
