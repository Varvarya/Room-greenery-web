import React from 'react';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon, Adb as AdbIcon, AccountCircle } from '@material-ui/icons';
import {
  AppBar, Avatar, Box, Button, Container, IconButton, MenuItem, Toolbar, Tooltip, Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import { navbarPages, roleIds } from '../../consts';
import Flags from '../languageSelector';

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const history = useHistory();

  // eslint-disable-next-line no-undef
  const role = localStorage.getItem('role');
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-undef
  const { t, i18n } = useTranslation();

  const pages = navbarPages[role];

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('token');

    history.push('/auth/login');
  };

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <div className={classes.menuContainer}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleMenu}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          />
        </div>
        <div className={classes.items}>
          {pages && pages.map((page) => (
            <Button
              className={classes.menuItem}
              onClick={() => history.push(page.toLowerCase())}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t(`navbar.${page}`)}
              </Typography>
            </Button>
          ))}
        </div>
        <div className={classes.avatarContainer}>
          <Flags />
          {token && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => history.push('profile')}>{t('menu.profile')}</MenuItem>
              <MenuItem onClick={logOut}>{t('menu.logout')}</MenuItem>
              {role === 'Administrator' && <MenuItem onClick={() => history.push('database')}>{t('menu.database')}</MenuItem>}
            </Menu>
          </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
