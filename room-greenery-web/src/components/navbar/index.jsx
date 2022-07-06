import React from 'react';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon, Adb as AdbIcon, AccountCircle } from '@material-ui/icons';
import {
  AppBar, Avatar, Box, Button, Container, IconButton, MenuItem, Toolbar, Tooltip, Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const pages = ['Organizations', 'Devices', 'Users'];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <div className={classes.menuContainer}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className={classes.items}>
          {pages.map((page) => (
            <Button
              className={classes.menuItem}
              onClick={() => history.push(page.toLowerCase())}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {page}
              </Typography>
            </Button>
          ))}
        </div>
        <div className={classes.avatarContainer}>
          {auth && (
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
