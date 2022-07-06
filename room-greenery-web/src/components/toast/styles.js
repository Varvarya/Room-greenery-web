import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: 10,
    right: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.background,
    borderRadius: '32px',
    fontWeight: 300,
    color: theme.palette.text.primary,
  },
  content: {
    fontSize: 15,
    paddingTop: 8,
    flexShrink: 0,
    textAlign: 'center',
    width: '30px',
  },
  text: {
    flexGrow: 1,
    fontSize: 18,
    padding: '8px 12px',
    margin: '20px 10px 10px 10px',
    fontWeight: 300,
    color: theme.palette.text.primary,
    fontFamily: 'Comfortaa',
  },
}));

export default useStyles;
