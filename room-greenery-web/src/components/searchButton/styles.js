import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
