import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useStyles from './styles';
import ResponsiveAppBar from '../../components/navbar';

import Home from './home';
import Organizations from '../MainPages/Organizations';

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
      </Switch>
    </div>
  );
};

export default Main;
