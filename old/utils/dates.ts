import { defaultLang } from '@/i18n';
import { DateTime } from 'luxon';

export const DATE_FORMAT = 'MMM yyyy'

export const parseDate = (date: string, locale: string = defaultLang) => {
  let res = DateTime.now().toFormat(DATE_FORMAT, { locale });

  if (date !== '') {
    res = DateTime.fromISO(date, { locale }).toFormat(DATE_FORMAT);
  }

  return res[0]!.toUpperCase() + res.slice(1);
}

export const getDateDiff = (start: string, end: string, locale: string = defaultLang) => {
  let endDate = DateTime.local({ locale })

  if (end !== '') endDate = DateTime.fromISO(end, { locale })

  const { years, months } = endDate.diff(
    DateTime.fromISO(start, { locale }),
    ['years', 'months']
  ).toObject()

  const nextMonths = +(months ?? 0).toFixed(0)

  return { years: years ?? 0, months: nextMonths }
}