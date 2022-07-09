import moment from 'moment';

const dateLocalization = ([year, month, day]) => {
  // eslint-disable-next-line no-undef
  const locale = localStorage.getItem('language');

  switch (locale) {
    case 'en':
      return `${year}.${month}.${day}`;
    case 'ua':
      return `${day}.${month}.${year}`;
    default:
      return `${day}.${month}.${year}`;
  }
};

const dateFormat = (date) => {
  // eslint-disable-next-line no-undef
  const locale = localStorage.getItem('language');

  switch (locale) {
    case 'en':
      return moment(date).format('YYYY.MM.DD');
    case 'ua':
      return moment(date).format('DD.MM.YYYY');
    default:
      return moment(date).format('DD.MM.YYYY');
  }
};

const timeLocalization = ([hour, minutes, seconds]) => `${hour}:${minutes}:${seconds}`;

export { dateLocalization, timeLocalization, dateFormat };
