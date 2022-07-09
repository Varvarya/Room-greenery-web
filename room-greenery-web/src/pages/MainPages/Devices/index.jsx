import React, { useEffect, useState } from 'react';
import {
  Button, ButtonGroup, Card, CircularProgress, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import Table from '../../../components/Tables';
import {
  addDevice,
  deleteDeviceById,
  getByOrganization,
  updateDeviceById,
} from '../../../store/modules/devices/actionsCreator';

const Devices = ({
  devices,
  loading,
  getDevicesByOrganization,
  addNewDevice,
  deleteDevice,
  updateDevice,
}) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [activeBar, setActiveBar] = useState('taken');

  useEffect(() => {
    getDevicesByOrganization();
  }, []);

  let entries;

  if (devices && devices[activeBar] && devices[activeBar][0]) {
    entries = Object.entries(devices[activeBar][0]);
  }
  if (!entries) {
    entries = [
      ['id', ''],
      ['current_params', '']];
  }
  const headCells = entries.map(([k, v]) => ({
    id: k,
    numeric: Number.isNaN(v),
    disablePadding: true,
    label: k.charAt(0).toUpperCase() + k.slice(1),
  }));

  const handleClick = (event) => {
    setActiveBar(event.currentTarget.id);
  };

  return (
    <div
      className={classes.content}
    >
      <Card className={classes.card}>
        <ButtonGroup variant="contained" color="secondary" className={classes.buttons}>
          <Button className={classes.button} id="taken" onClick={handleClick}>{t('devices.taken')}</Button>
          <Button className={classes.button} id="available" onClick={handleClick}>{t('devices.available')}</Button>
        </ButtonGroup>
        {loading
          ? <CircularProgress color="secondary" />
          : (
            <Table
              addRow={addNewDevice}
              data={devices[activeBar]}
              deleteRow={deleteDevice}
              editRow={updateDevice}
              fields={headCells.slice(1, headCells.length - 4)}
              headCells={headCells}
              title={t('devices.device')}
              defaultRowsPerPage={1}
            />
          )}
      </Card>
    </div>
  );
};

Devices.propTypes = {
  devices: PropTypes.shape({
    taken: PropTypes.arrayOf(PropTypes.shape()),
    available: PropTypes.arrayOf(PropTypes.shape()),
  }),
  loading: PropTypes.bool,
  getDevicesByOrganization: PropTypes.func.isRequired,
  addNewDevice: PropTypes.func.isRequired,
  deleteDevice: PropTypes.func.isRequired,
  updateDevice: PropTypes.func.isRequired,
};

Devices.defaultProps = {
  devices: [],
  loading: false,
};

const mapStateToProps = (state) => ({
  actionErrors: state.devices.error,
  loading: state.devices.loading,
  devices: state.devices.devices,
});

export default connect(mapStateToProps, {
  getDevicesByOrganization: getByOrganization,
  addNewDevice: addDevice,
  deleteDevice: deleteDeviceById,
  updateDevice: updateDeviceById,
})(Devices);
