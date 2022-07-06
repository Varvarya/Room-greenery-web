import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    flex: 1,
    fontFamily: 'Comfortaa',
    background: 'linear-gradient(45deg, #729e5f, #88bc70)',
    boxShadow: 'inset 8px -8px 16px #9fdc83, inset -8px 8px 16px #5f844f',
  },
  menuContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
  },
  items: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  menuItem: {
    display: 'flex',
    height: '100%',
    borderRadius: '40px',
    padding: '4px 20px',
    border: '1px solid #88bc70',
    fontSize: '16px',
    fontFamily: 'Comfortaa',
    background: 'linear-gradient(145deg, #88bc70, #729e5f)',
    boxShadow: '5px 5px 20px #567847 0.7, -5px -5px 20px #a8e88b 0.7',
  },
  avatarContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
