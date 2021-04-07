import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    marginBottom: 10,
    padding: 0,
    [theme.breakpoints.up(768)]: {
      width: 'calc(50% - 10px)',
      height: 200,
      marginRight: 10,
    },
    [theme.breakpoints.up(992)]: {
      width: 'calc(33% - 10px)',
    },
    [theme.breakpoints.up(1200)]: {
      width: 'calc(25% - 10px)',
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
    height: 'auto !important',
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
    padding: '5px 10px',
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
  gameLink: {
    display: 'block',
    width: '100%',
  },
  emptyLink: {
    [theme.breakpoints.up(768)]: {
      transform: 'translateY(-25%)',
      '&:hover': {
        transform: 'scale(1.1) translateY(-25%)',
      },
    },
  },
}));
