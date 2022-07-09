import React, { useEffect } from 'react';
import { Card, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import {
  addOrganization as addNewOrganization, deleteOrganizationById,
  getAllOrganizations, updateOrganization as updateOrganizationData,
} from '../../../store/modules/organizations/actionsCreator';
import { getMe } from '../../../store/modules/users/actionsCreator';

const Profile = ({ getUser, me }) => {
  const classes = useStyles();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getUser();
    console.log(me);
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
        <h2>
          {
              `${t('profile.greeting')}, ${me.name}`
}
        </h2>
        {
            Object.entries(me).map((e) => {
              if (e[1]) {
                return (
                  <div className={classes.row}>
                    <div>
                      {`${t(`profile.${e[0]}`)}:`}
                    </div>
                    <div>
                      {`${e[1]}`}
                    </div>
                  </div>
                );
              } return null;
            })
        }
      </Card>
    </div>
  );
};

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
  me: PropTypes.shape().isRequired,
};

Profile.defaultProps = {
};

const mapStateToProps = (state) => ({
  actionErrors: state.organizations.error,
  loading: state.organizations.loading,
  organizations: state.organizations.organizations,
  me: state.users.me,
});

export default connect(mapStateToProps, {
  getUser: getMe,
})(Profile);
