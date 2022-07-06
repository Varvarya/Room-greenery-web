import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    borderRadius: '40px',
    padding: '4px',
    border: '1px solid #ffffff',
    minWidth: '48px',
    maxWidth: '48px',
    minHeight: '48px',
    maxHeight: '48px',
    fontSize: '16px',
    fontFamily: 'Comfortaa',
    background: 'linear-gradient(145deg, #fffffe, #e6e6d5)',
    boxShadow: '17px 17px 50px #adada1, -17px -17px 50px #ffffff',
  },
  content: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
  },
  dialog: {
    backgroundColor: theme.palette.primary.background,
    back: 0.3,
  },
}));

export default useStyles;
