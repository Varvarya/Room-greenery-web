import { makeStyles } from '@material-ui/core/styles';

import image from '../../assets/home_image.png';

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
  },
  navbar: {
    background: theme.palette.primary.background,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '5px solid rgba(255, 255, 255, .25)',
    width: '30%',
    height: '50%',
    borderRadius: '40px',
    background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.40), 50%, rgba(255, 255, 255, 0.10))',
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.25)',
    padding: '30px',
    alignItems: 'center',
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
