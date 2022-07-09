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
    width: '70%',
    height: '70%',
    borderRadius: '40px',
    background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.40), 50%, rgba(255, 255, 255, 0.10))',
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.25)',
    padding: '30px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    rowGap: '20px',
  },
  title: {
    fontSize: 32,
    marginBottom: '10px',
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontFamily: 'Comfortaa',
  },
  row: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '20px',
    boxShadow: 'inset 0 0 10px 1px rgba(0, 0, 0, 0.25)',
    padding: '12px',
    borderRadius: '12px',
  },
  rowText: {
    fontSize: '16px',
    alignSelf: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontFamily: 'Comfortaa',
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
}));

export default useStyles;
