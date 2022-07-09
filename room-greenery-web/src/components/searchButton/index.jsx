import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import useStyles from './styles';

const SearchButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      onClick={onClick}
      className={classes.button}
    >
      <SearchIcon />
    </IconButton>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
