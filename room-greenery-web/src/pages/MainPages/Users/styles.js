import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    width: '100vw',
    fontFamily: 'Comfortaa',
  },
  content: {
    display: 'flex',
    flex: 1,
    height: '90vh',
    width: '100vw',
    boxShadow: 'inset 15px 15px 19px #d1d1c2, -15px 15px 19px #d1d1c2, inset -15px -15px 19px #ffffff',
    marginTop: '70px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  searchField: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '5px solid rgba(255, 255, 255, .25)',
    width: '70%',
    borderRadius: '40px',
    background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.40), 50%, rgba(255, 255, 255, 0.10))',
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.25)',
    padding: '30px',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  image: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  title: {
    display: 'flex',
    fontFamily: 'Comfortaa',
    fontSize: '28px',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    margin: '8px 0px',
    padding: '8px 0px',
    fontFamily: 'Comfortaa',
    backgroundColor: '#ffffff',
  },
  input: {
    borderRadius: '4px',
    padding: '-10px',
    boxShadow: 'inset 5px 5px 10px #d1d1c2, inset -5px -5px 10px #ffffff',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    outline: 'none',
    fontFamily: 'Comfortaa',
  },
  label: {
    color: theme.palette.text.primary,
    fontFamily: 'Comfortaa',
  },
}));

export default useStyles;
