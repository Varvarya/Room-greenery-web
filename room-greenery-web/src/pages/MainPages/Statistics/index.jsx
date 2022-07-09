import React, { useEffect, useState } from 'react';
import {
  Button,
  Card, CircularProgress, Dialog, MenuItem, Select, Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DayPicker } from 'react-day-picker';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import Charts from '../../../components/charts';
import { getHistory } from '../../../store/modules/history/actionsCreator';
import { labelParser } from '../../../utils/chartsParser';
import { getByOrganization } from '../../../store/modules/devices/actionsCreator';
import 'react-day-picker/dist/style.css';
import { dateFormat } from '../../../utils/dateTimeLocalization';

const Statistics = ({
  fetchStatistics, records, getDevicesByOrganization, devices, loading,
}) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const [deviceId, setDeviceId] = useState(null);
  const [selectedDays, setSelectedDays] = useState({
    from: new Date(),
    till: new Date(),
  });

  useEffect(() => {
    getDevicesByOrganization();
    console.log(devices);
    if (deviceId) fetchStatistics(deviceId, selectedDays.from, selectedDays.till);
  }, [deviceId, selectedDays]);

  const [openDatePicker, setOpenDatePicker] = useState('none');

  const labels = [];
  const params = {
    co2_level: [],
    ground_humidity: [],
    air_humidity: [],
    air_temperature: [],
    light_level: [],
  };

  const colors = {
    co2_level: '#e24024',
    ground_humidity: '#7FB069',
    air_humidity: '#7cb6cc',
    air_temperature: '#be72ae',
    light_level: '#f2c582',
  };

  records.forEach((record, index) => {
    labels[index] = (labelParser(record.date_time));
    params.co2_level[index] = record.co2_level;
    params.ground_humidity[index] = record.ground_humidity;
    params.air_humidity[index] = record.air_humidity;
    params.air_temperature[index] = record.air_temperature;
    params.light_level[index] = record.light_level;
  });

  const datasets = Object.entries(params).map(([key, value]) => ({
    label: t(`statistics.${key}`),
    data: value,
    borderColor: colors[key],
  }));

  const data = {
    labels,
    datasets,
  };

  const renderDevices = () => {
    let allDevices = [];
    if (devices.taken && devices.available) allDevices = devices.taken.concat(devices.available);

    console.log(allDevices);

    return allDevices
      .map((dev) => (<MenuItem value={dev.id}>{dev.id}</MenuItem>));
  };

  return (
    <div
      className={classes.content}
    >
      <Card className={classes.card}>
        <Typography className={classes.title}>{t('statistics.header')}</Typography>
        {loading
          ? <CircularProgress color="secondary" />
          : (
            <div className={classes.selectAndChart}>
              <div className={classes.inputContainer}>
                <Select
                  className={classes.input}
                  value={deviceId}
                  label="Device"
                  variant="outlined"
                  onChange={(event) => {
                    setDeviceId(event.target.value);
                  }}
                >
                  {renderDevices()}
                </Select>
                <Button onClick={() => setOpenDatePicker('from')}>{dateFormat(selectedDays.from)}</Button>
                <Button onClick={() => setOpenDatePicker('till')}>{dateFormat(selectedDays.till)}</Button>
              </div>
              {deviceId && <Charts data={data} />}
            </div>
          )}
        <Dialog open={openDatePicker !== 'none'}>
          <DayPicker
            mode="single"
            selected={selectedDays[openDatePicker]}
            onSelect={(value) => {
              setSelectedDays({
                ...selectedDays,
                [openDatePicker]: value,
              });
              setOpenDatePicker('none');
            }}
            fromDate={openDatePicker !== 'from' ? selectedDays.from : undefined}
          />
        </Dialog>
      </Card>
    </div>
  );
};

Statistics.propTypes = {
  fetchStatistics: PropTypes.func.isRequired,
  records: PropTypes.arrayOf(PropTypes.shape({
    co2_level: PropTypes.number.isRequired,
    ground_humidity: PropTypes.number.isRequired,
    air_humidity: PropTypes.number.isRequired,
    air_temperature: PropTypes.number.isRequired,
    light_level: PropTypes.number.isRequired,
    date_time: PropTypes.string.isRequired,
  })),
  devices: PropTypes.shape({
    taken: PropTypes.arrayOf(PropTypes.shape()),
    available: PropTypes.arrayOf(PropTypes.shape()),
  }),
  getDevicesByOrganization: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Statistics.defaultProps = {
  records: [],
  devices: {},
  loading: true,
};

const mapStateToProps = (state) => ({
  records: state.history.history,
  devices: state.devices.devices,
  loading: state.history.loading,
});

export default connect(mapStateToProps, {
  getDevicesByOrganization: getByOrganization,
  fetchStatistics: getHistory,
})(Statistics);
