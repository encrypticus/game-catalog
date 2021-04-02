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
  wrapper: {
    // position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    // transform: 'translate(-50%, -50%)',
  },
  img: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform .3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  info: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    left: 0,
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    color: '#fff',
    letterSpacing: 0.5,
  },
  name: {
    margin: 0,
    fontSize: '1.1em',
  },
  rating: {
    margin: 0,
  },
  released: {
    margin: 0,
  },
}));
