import React, { useEffect, useState } from 'react';
import {
  Button,
  Card, CircularProgress, IconButton, TextField, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import { createBackup, getBackups, restoreBackup } from '../../../store/modules/database/actionsCreator';
import backupParser, { getDateTimeFromName } from '../../../utils/backupParser';

const Backups = ({
  loading,
  list,
  actionErrors,
  getList,
  newBackup,
  restoreByDate,
}) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const backupRow = (row) => (
    <div className={classes.row}>
      <Typography
        className={classes.rowText}
      >
        {backupParser(row)}
      </Typography>
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => restoreByDate(getDateTimeFromName(row))}
      >
        {t('database.restore')}
      </Button>
    </div>
  );

  useEffect(() => {
    getList();
    console.log(list);
    console.log(loading);
  }, []);

  return (
    <div
      className={classes.content}
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/white-wall-empty-room-with-plants-floor-3d-rendering_41470-3271.jpg?w=2000)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxHeight: '90vh',
      }}
    >
      <Card className={classes.card}>
        <Typography className={classes.title}>{t('database.header')}</Typography>
        {loading
          ? <CircularProgress color="secondary" />
          : list.map((row) => backupRow(row))}
        <Button
          className={classes.biggerButton}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={createBackup}
        >
          {t('database.create')}
        </Button>
      </Card>
    </div>
  );
};

Backups.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool,
  actionErrors: PropTypes.shape(),
  getList: PropTypes.func.isRequired,
  newBackup: PropTypes.func.isRequired,
  restoreByDate: PropTypes.func.isRequired,
};

Backups.defaultProps = {
  list: [],
  loading: false,
  actionErrors: {},
};

const mapStateToProps = (state) => ({
  actionErrors: state.database.error,
  loading: state.database.loading,
  list: state.database.list,
});

export default connect(mapStateToProps, {
  getList: getBackups,
  newBackup: createBackup,
  restoreByDate: restoreBackup,
})(Backups);
