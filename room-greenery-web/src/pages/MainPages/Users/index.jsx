import React, { useEffect, useState } from 'react';
import {
  Card, CircularProgress, IconButton, TextField, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import Table from '../../../components/Tables';
import {
  deleteById,
  getAllUsersWithOrganizations,
  getUserByName,
  updateUser as updateUserFunc,
} from '../../../store/modules/users/actionsCreator';
import { registerUser } from '../../../store/modules/auth/actionsCreator';
import SearchButton from '../../../components/searchButton';

const Users = ({
  loading,
  users,
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  findUser,
}) => {
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  const [value, setValue] = useState('');

  useEffect(() => {
    getUsers();
    console.log(users);
    console.log(loading);
  }, []);

  let entries;

  if (users && users[0]) {
    entries = Object.entries(users[0]);
  }
  if (!entries) {
    entries = [
      ['id', ''],
      ['name', ''],
      ['surname', ''],
      ['email', ''],
      ['organization', ''],
      ['role', ''],
    ];
  }
  const headCells = entries.map(([k, v]) => ({
    id: k,
    numeric: Number.isNaN(v),
    disablePadding: true,
    label: k.charAt(0).toUpperCase() + k.slice(1),
  }));

  const findOnClick = () => {
    const [name, surname] = value.split(' ');
    const data = {};
    if (name) { data.name = name; }
    if (surname) { data.surname = surname; }
    findUser(data).then((res) => console.log('find', res));
  };

  const changeValue = (newValue) => {
    if (newValue.length === 0) {
      getUsers();
    }

    setValue(newValue);
  };

  return (
    <div
      className={classes.content}
    >
      <div className={classes.searchField}>
        <TextField
          className={classes.input}
          label={t('users.find')}
          name={t('users.find')}
          value={value}
          onChange={(event) => changeValue(event.target.value)}
          variant="filled"
          size="small"
          inputProps={{
            className: classes.input,
            classes: {
              root: classes.input,
              focused: classes.input,
            },
          }}
          InputLabelProps={{ className: classes.label }}
        />
        <SearchButton onClick={findOnClick} />
      </div>
      <Card className={classes.card}>
        {loading
          ? <CircularProgress color="secondary" />
          : (
            <Table
              addRow={addUser}
              data={users}
              deleteRow={deleteUser}
              editRow={updateUser}
              fields={headCells.slice(1, headCells.length - 4)}
              headCells={headCells}
              title={t('users.user')}
              defaultRowsPerPage={2}
            />
          )}
      </Card>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool,
  getUsers: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  findUser: PropTypes.func.isRequired,
};

Users.defaultProps = {
  users: [],
  loading: false,
};

const mapStateToProps = (state) => ({
  actionErrors: state.users.error,
  loading: state.users.loading,
  users: state.users.users,
});

export default connect(mapStateToProps, {
  getUsers: getAllUsersWithOrganizations,
  addUser: registerUser,
  deleteUser: deleteById,
  updateUser: updateUserFunc,
  findUser: getUserByName,
})(Users);
