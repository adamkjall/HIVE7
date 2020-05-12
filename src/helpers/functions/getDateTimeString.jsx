import { format, formatDistanceStrict } from 'date-fns';
import svLocale from 'date-fns/locale/sv';

/**
 * Return a string with format "nameOfDay date nameOfMonth, hh:mm"
 * If the given date is today or tomorrow the string "Idag" or "Imorgon"
 * gets appended to the resulting string see second example.
 * e.g fredag 15 maj, 17:48
 * e.g Idag, fredag 15 maj, 17:48
 * @param {string} date - Date with format "yyyy-mm-dd"
 * @param {string} time - Time with format "hh:mm"
 */
export default (date, time) => {
  const [year_now, month_now, day_now] = format(new Date(), 'yyyy-MM-dd').split('-');
  const [year, month, day] = date.split('-');

  const distanceString = formatDistanceStrict(
    new Date(year_now, month_now - 1, day_now),
    new Date(year, month - 1, day),
    { unit: 'day' }
  );

  const distanceInDays = Number(distanceString.split(' ')[0]);
  const todayOrTomorrowString =
    distanceInDays === 0 ? 'Idag, ' : distanceInDays === 1 ? 'Imorgon, ' : '';

  return (
    todayOrTomorrowString +
    format(new Date(year, month - 1, day), 'EEEE d MMMM', { locale: svLocale }) +
    ', ' +
    time
  );
};
