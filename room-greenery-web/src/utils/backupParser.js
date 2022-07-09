import { dateLocalization, timeLocalization } from './dateTimeLocalization';

const parser = (fileName) => {
  const date = fileName.match(/\d{4}-\d{2}-\d{2}/gm);
  const time = fileName.match(/\d{2}.\d{2}.\d{2}/gm);

  return `${dateLocalization(date[0].split('-'))}   ${timeLocalization(time[1].split('.'))}`;
};

const getDateTimeFromName = (fileName) => {
  const res = fileName.match(/\d{4}-\d{2}-\d{2}_\d{2}.\d{2}.\d{2}/gm);
  return res;
};

export default parser;
export { getDateTimeFromName };
