import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    padding: '10px',
    backgroundColor: '#000',
  },
  logoText: {
    display: 'none',
    marginLeft: '10px',
    color: '#fff',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    [theme.breakpoints.up(768)]: {
      display: 'block',
    },
  },
}));
