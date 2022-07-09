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
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    fontFamily: 'Comfortaa',
    fontWeight: 600,
    fontSize: '24px',
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
}));

export default useStyles;
