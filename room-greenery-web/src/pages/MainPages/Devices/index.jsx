import React, { useEffect } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Card, CircularProgress, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
import Table from '../../../components/Tables';
import {
  getAllOrganizations,
  addOrganization as addNewOrganization,
  updateOrganization as updateOrganizationData,
  deleteOrganizationById,
} from '../../../store/modules/organizations/actionsCreator';

const Organizations = ({
  getOrganizations,
  addOrganization,
  deleteOrganization,
  updateOrganization,
  organizations,
  loading,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getOrganizations();
    console.log(organizations);
    console.log(loading);
  }, []);

  let entries;

  if (organizations && organizations[0]) {
    entries = Object.entries(organizations[0]);
    console.log(entries);
  }
  if (!entries) {
    entries = [
      ['id', ''],
      ['title', '']];
  }
  const headCells = entries.map(([k, v]) => ({
    id: k,
    numeric: Number.isNaN(v),
    disablePadding: true,
    label: k.charAt(0).toUpperCase() + k.slice(1),
  }));

  console.log('Organizations');

  return (
    <div
      className={classes.content}
    >
      <Card className={classes.card}>
        {loading
          ? <CircularProgress color="secondary" />
          : (
            organizations.map((org) => (
              <Accordion>
                <AccordionSummary>
                  <Typography>{org.title}</Typography>
                </AccordionSummary>
                <AccordionDetails />
              </Accordion>
            ))
          )}
      </Card>
    </div>
  );
};

Organizations.propTypes = {
  getOrganizations: PropTypes.func.isRequired,
  addOrganization: PropTypes.func.isRequired,
  deleteOrganization: PropTypes.func.isRequired,
  updateOrganization: PropTypes.func.isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool,
};

Organizations.defaultProps = {
  organizations: [],
  loading: false,
};

const mapStateToProps = (state) => ({
  actionErrors: state.organizations.error,
  loading: state.organizations.loading,
  organizations: state.organizations.organizations,
});

export default connect(mapStateToProps, {
  getOrganizations: getAllOrganizations,
  addOrganization: addNewOrganization,
  deleteOrganization: deleteOrganizationById,
  updateOrganization: updateOrganizationData,
})(Organizations);
