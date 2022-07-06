import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from '../styles';
import ResponsiveAppBar from '../../../components/navbar';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveAppBar />
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
          <Typography
            autoCapitalize
            className={classes.title}
          >
            Text
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default Home;
