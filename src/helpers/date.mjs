/**
 * Format a localised date
 *
 * @param string date     the input date to parse
 * @param string locale   the locale to format the date for
 * @param object options  options forwarded to "toLocaleDateString"
 *
 * @return string
 */
export const formatDate = (
  date,
  locale = 'en-US',
  options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
) => new Date(date).toLocaleDateString(locale, options);
