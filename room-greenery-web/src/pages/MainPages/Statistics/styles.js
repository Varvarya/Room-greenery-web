import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '5px solid rgba(255, 255, 255, .25)',
    width: '80%',
    height: '80%',
    borderRadius: '40px',
    background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.40), 50%, rgba(255, 255, 255, 0.10))',
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.25)',
    padding: '30px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontFamily: 'Comfortaa',
  },
  selectAndChart: {
    padding: 0,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  dayPickerContainer: {
    position: 'absolute',
    height: '100px',
  },
  dayPicker: {
    display: 'flex',
    flex: 1,
  },
  button: {
    display: 'flex',
    padding: '8px',
    borderRadius: '8px',
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontFamily: 'Comfortaa',
  },
  biggerButton: {
    display: 'flex',
    padding: '8px',
    borderRadius: '30px',
    color: theme.palette.text.light,
    fontSize: '24px',
    fontFamily: 'Comfortaa',
    minWidth: '300px',
    width: '300px',
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
    margin: '8px 0px',
    padding: '8px 0px',
    fontFamily: 'Comfortaa',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
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
