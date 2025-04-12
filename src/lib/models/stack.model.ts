type StackProps = {
  name: string;
  imageUrl: string;
  grouping: 'front-end' | 'back-end' | 'database' | 'cloud' | 'others';
};
type ExperienceInMonths = { months: number };

type ExperienceInYears = { years: number };

type Experience = ExperienceInMonths | ExperienceInYears;

export type StackModel = StackProps & Experience;
