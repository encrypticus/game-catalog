import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    marginRight: 0,
    marginBottom: 10,

    height: 200,

    padding: 0,
    [theme.breakpoints.up(800)]: {
      width: '23%',
      maxWidth: '95%',
      marginBottom: 10,
      marginRight: 10,
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform .3s',
    '&:hover': {
      transform: 'translate(-50%, -50%) scale(1.1)',
    }
  },
}));
