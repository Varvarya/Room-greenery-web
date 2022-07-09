import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useStyles from './styles';
import ResponsiveAppBar from '../../components/navbar';

import Home from './home';
import Organizations from '../MainPages/Organizations';
import Devices from '../MainPages/Devices';
import Users from '../MainPages/Users';
import Profile from '../MainPages/Profile';
import Database from '../MainPages/Database';
import Statistics from '../MainPages/Statistics';

const Main = () => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  console.log(path);

  return (
    <div className={classes.root}>
      <ResponsiveAppBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/organizations">
          <Organizations />
        </Route>
        <Route exact path="/devices">
          <Devices />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/database">
          <Database />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
