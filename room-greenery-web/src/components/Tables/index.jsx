import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Checkbox, Paper, Table, TableCell, TableContainer,
  TablePagination, TableRow, TableBody, Button,
} from '@material-ui/core';
import { AddCircleOutlined, EditOutlined } from '@mui/icons-material';
import TableHeader from './components/tableHead';
import TableToolbar from './components/tableToolbar';
import FormDialog from './components/dialog';
import useStyles from './styles';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const CustomTable = ({
  data, headCells, title, fields, addRow, editRow, deleteRow,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = useState(true);
  const [obj, setObj] = useState({});

  const handleClickOpenAdd = () => {
    setAdd(true);
    setOpen(true);
  };

  const handleClickOpenEdit = (row) => {
    setObj(row);
    setAdd(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const printArray = (array) => (
    <TableCell>
      <ul>
        {array.map((e) => <li>{e.title}</li>)}
      </ul>
    </TableCell>
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <>
      <Card sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableToolbar
            title={title}
            numSelected={selected.length}
            deleteRows={() => selected.forEach((el) => deleteRow(el))}
          />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              color="secondary"
            >
              <TableHeader
                headCells={headCells}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data.sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="secondary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        {Object.values(row).map((e) => ((Array.isArray(e))
                          ? printArray(e) : (<TableCell align="left">{e}</TableCell>)))}
                        <TableCell>
                          <Button
                            className={classes.button}
                            onClick={() => handleClickOpenEdit(row)}
                          >
                            <EditOutlined sx={{ color: '#7FB069' }} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                <TableRow>
                  <TableCell sx={{ textAlign: 'center' }} colSpan={headCells.length + 2}>
                    <Button className={classes.button} onClick={handleClickOpenAdd}>
                      <AddCircleOutlined sx={{ color: '#7FB069' }} />
                    </Button>
                  </TableCell>
                </TableRow>
                {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Card>
      {open && (
        <FormDialog
          initialValues={add ? {} : obj}
          open={open}
          handleClose={handleClose}
          title={title}
          text={add ? `Add ${title.toLowerCase()}` : `Edit ${title.toLowerCase()}`}
          fields={fields}
          handleConfirm={add ? addRow : editRow}
        />
      )}
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headCells: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  addRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

export default CustomTable;
