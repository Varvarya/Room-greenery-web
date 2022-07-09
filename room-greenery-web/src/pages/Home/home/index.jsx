import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from '../styles';
import ResponsiveAppBar from '../../../components/navbar';

const Home = () => {
  const classes = useStyles();

  const { t, i18n } = useTranslation();

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
        <Typography
          autoCapitalize
          className={classes.title}
        >
          {t('home.header')}
        </Typography>
        <Typography>
          {t('home.text')}
        </Typography>
      </Card>
    </div>
  );
};

export default Home;
