import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(((theme) => ({
  root: {
    width: '100%',
    padding: 5,
    border: 0,
    outline: 0,
    borderRadius: 5,
    backgroundColor: '#505050',
    color: '#fff',
    font: 'inherit',
    '&:focus': {
      boxShadow: '0 0 10px #fff',
    },
  },
  form: {
    marginLeft: 10,
    flexGrow: 2,
    [theme.breakpoints.up(768)]: {
      flexGrow: 0,
      minWidth: '30%',
      marginLeft: 'auto',
    },
  },
})));
