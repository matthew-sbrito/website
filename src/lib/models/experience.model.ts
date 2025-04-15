export type Experience = {
  key:
    | 'evolveIt'
    | 'techSolutio'
    | 'fransciscoFarm'
    | 'dantasEletro'
    | 'capitalNerd';
  company: string;
  link?: string;
  imageUrl?: string;
  startedAt: Date;
  endedAt?: Date;
  skills: string[];
};
