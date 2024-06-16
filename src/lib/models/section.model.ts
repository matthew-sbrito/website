import { Dictionary } from '../dictionaries';

export type SectionModel = {
  id: keyof Dictionary['header'];
  link: string;
};
