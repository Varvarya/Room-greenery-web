import * as React from 'react';
import PropTypes from 'prop-types';
import { Delete as DeleteIcon, FilterList as FilterListIcon } from '@mui/icons-material';
import {
  alpha, Toolbar, Typography, Tooltip, IconButton,
} from '@material-ui/core';
import useStyles from '../styles';

const TableToolbar = ({ numSelected, title, deleteRows }) => {
  const classes = useStyles();
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(
            theme.palette.primary.main,
            theme.palette.action.hover,
          ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
          className={classes.tableRow}
        >
          {numSelected}
          {' '}
          selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          className={classes.tableRow}
        >
          {title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon onClick={deleteRows} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deleteRows: PropTypes.func.isRequired,
};

export default TableToolbar;
