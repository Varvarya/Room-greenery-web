import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    color: '#ffffff',
  },
  inputContainer: {
    display: 'flex',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '15px 15px 44px #638952,  -15px -15px 44px #9bd780',
    border: '1px solid red',
  },
  input: {
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.light,
    boxShadow: '15px 15px 44px #638952,  -15px -15px 44px #9bd780, inset 15px 15px 30px #c9c9bb, inset -15px -15px 30px #ffffff',
    margin: '10px 0px',
    color: theme.palette.text.primary,
    outline: 'none',
  },

}));

export default useStyles;
