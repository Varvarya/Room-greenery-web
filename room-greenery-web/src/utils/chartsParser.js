import moment from 'moment';

const labelParser = (utcString) => {
  const date = moment(utcString).format('DD/MM/YYYY');
  const time = moment(utcString).format('hh:mm');
  return `${date}\n${time}`;
};

export { labelParser };
