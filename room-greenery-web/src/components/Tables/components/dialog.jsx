import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import useStyles from '../styles';

const FormDialog = ({
  initialValues, open, handleClose, title, text, confirmText, fields, handleConfirm,
}) => {
  const [obj, setObject] = useState(initialValues);

  console.log(fields);

  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
        {fields.map((e) => (
          <TextField
            className={classes.input}
            name={e.label}
            variant="filled"
            size="small"
            inputProps={{
              className: classes.input,
              classes: {
                root: classes.input,
                focused: classes.input,
              },
            }}
            InputLabelProps={{ className: classes.label }} // font size of input label
            value={obj[(e.id).toLowerCase()]}
            onChange={(event) => setObject({ ...obj, [e.id]: event.target.value })}
            id={e.id}
            label={e.label}
            type="text"
            fullWidth
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleConfirm(obj)}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};

FormDialog.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  confirmText: PropTypes.string,
  handleConfirm: PropTypes.func.isRequired,
};

FormDialog.defaultProps = {
  confirmText: 'Add',
};

export default FormDialog;
