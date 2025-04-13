// Array representing one minute, hour, day, week, month, etc in seconds
const cutoffs = [
  60, // Minute
  3600, // Hour
  86400, // Day
  86400 * 7, // Week
  86400 * 30, // Month
  86400 * 365, // Year
  Infinity,
];

// Array equivalent to the above but in the string representation of the units
const units: Intl.RelativeTimeFormatUnit[] = [
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
];

export function getExperienceTime(date: Date, locale: string) {
  const lang = locale === 'pt' ? 'pt-BR' : 'en-US';

  const dateMs = date.getTime();
  const nowMs = new Date().getTime();

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((dateMs - nowMs) / 1000);

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(
    cutoff => cutoff > Math.abs(deltaSeconds)
  );

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat(lang, {
    numeric: 'auto',
  });

  return rtf
    .format(Math.floor(deltaSeconds / divisor), units[unitIndex])
    .replace('há', '')
    .replace('ago', '')
    .trim();
}
