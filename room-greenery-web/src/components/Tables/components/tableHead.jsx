import * as React from 'react';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import {
  Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from '../styles';

const TableHeader = ({
  headCells, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,
}) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tableRow}>
        <TableCell padding="checkbox" className={classes.tableRow}>
          <Checkbox
            color="secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            className={classes.tableRow}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {t(`table.${headCell.label.toLowerCase()}`)}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object).isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default TableHeader;
