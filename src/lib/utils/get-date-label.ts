import { getCompanyExperienceTime } from './get-experience-time';

const pt = new Intl.DateTimeFormat('pt-BR', {
  month: 'short',
  year: 'numeric',
});

const en = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

export function getDateLabel(locale: string, startedAt: Date, endedAt?: Date) {
  const startPt = pt.format(startedAt);
  const startEn = en.format(startedAt);

  const endPt = endedAt ? pt.format(endedAt) : 'presente';
  const endEn = endedAt ? en.format(endedAt) : 'present';

  const experienceTime = getCompanyExperienceTime(locale, startedAt, endedAt);

  const labels = {
    pt: `${startPt} • ${endPt} • (${experienceTime})`,
    en: `${startEn} • ${endEn} • (${experienceTime})`,
  };

  return locale === 'pt' ? labels.pt : labels.en;
}
