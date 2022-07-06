import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const TextField = ({
  label, value, errorText, onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <TextField
        className={classes.input}
        label={label}
        name={label}
        floatingLabelText={label}
        value={value}
        onChange={onChange}
        helperText={errorText}
        error={errorText !== undefined}
        variant="outlined"
        size="small"
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  errorText: undefined,
  onChange: undefined,
};

export default TextField;
