// Constants for time calculations
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;
const SECONDS_PER_WEEK = SECONDS_PER_DAY * 7;
const SECONDS_PER_MONTH = SECONDS_PER_DAY * 30;
const SECONDS_PER_YEAR = SECONDS_PER_DAY * 365;

// Array representing one minute, hour, day, week, month, etc in seconds
const cutoffs = [
  SECONDS_PER_MINUTE, // Minute
  SECONDS_PER_HOUR, // Hour
  SECONDS_PER_DAY, // Day
  SECONDS_PER_WEEK, // Week
  SECONDS_PER_MONTH, // Month
  SECONDS_PER_YEAR, // Year
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

/**
 * Formats a time value using Intl.RelativeTimeFormat
 */
function formatTimeUnit(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale: string
): string {
  const lang = locale === 'pt' ? 'pt-BR' : 'en-US';
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

  return rtf
    .format(value, unit)
    .replace('há', '')
    .replace('ago', '')
    .replace('em', '')
    .replace('in', '')
    .replace('próximo', '1')
    .replace('next', '1')
    .trim();
}

/**
 * Return time in correct unit based on seconds
 */
function formatTimeUnitBySeconds(locale: string, seconds: number) {
  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(seconds));

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // Get value in the correct unit divide by number represents unit in seconds
  const value = Math.floor(seconds / divisor);

  // Return formatted by unit
  return formatTimeUnit(value, units[unitIndex], locale);
}

/**
 * Calculates years and months from seconds
 */
function calculateYearsAndMonths(seconds: number): {
  years: number;
  months: number;
} {
  const years = Math.floor(seconds / SECONDS_PER_YEAR);
  const remainingSeconds = seconds % SECONDS_PER_YEAR;
  const months = Math.floor(remainingSeconds / SECONDS_PER_MONTH);

  return { years, months };
}

/**
 * Formats a time period with both years and months
 */
function formatYearsAndMonths(
  years: number,
  months: number,
  locale: string
): string {
  const isPortuguese = locale === 'pt';
  const yearText = formatTimeUnit(years, 'year', locale);
  const monthText = formatTimeUnit(months, 'month', locale);

  return isPortuguese
    ? `${yearText} e ${monthText}`
    : `${yearText} and ${monthText}`;
}

export function getCompanyExperienceTime(
  locale: string,
  startedAt: Date,
  endedAt?: Date
) {
  const startedMs = startedAt.getTime();
  const endedMs = (endedAt ?? new Date()).getTime();

  // Get the amount of seconds between the given start and end date
  const deltaSeconds = Math.round((endedMs - startedMs) / 1000);

  // calculate to get years
  const { years, months } = calculateYearsAndMonths(deltaSeconds);

  // Return formatted year and month
  if (years > 0 && months > 0) {
    return formatYearsAndMonths(years, months, locale);
  }

  // Return formatted year
  if (years > 0) {
    return formatTimeUnit(years, 'year', locale);
  }

  // Return formatted month
  if (months > 0) {
    return formatTimeUnit(months, 'month', locale);
  }

  return formatTimeUnitBySeconds(locale, deltaSeconds);
}

export function getStackExperienceTime(locale: string, startedAt: Date) {
  const startedMs = startedAt.getTime();
  const endedMs = new Date().getTime();

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((endedMs - startedMs) / 1000);

  return formatTimeUnitBySeconds(locale, deltaSeconds);
}
