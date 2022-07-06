import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.background,
    fontFamily: 'Comfortaa',
  },
  content: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
  },
}));

export default useStyles;
