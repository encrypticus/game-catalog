import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  gameName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    fontSize: '1.5rem',
    [theme.breakpoints.up(768)]: {
      fontSize: '2rem',
    }
  },
  sliderWrapper: {
    margin: 'auto',
    [theme.breakpoints.up(992)]: {
      maxWidth: '80%',
    }
  },
  linkWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20,
    fontSize: '1.3rem',
    overflow: 'hidden',
  },
  gameLink: {
    display: 'block',
    marginLeft: 10,
    color: 'green',
  },
  description: {
    marginBottom: 20,
    padding: 10,
    boxShadow: '0 0 5px 5px rgba(0, 0, 0, .1)',
    fontSize: '1.2rem',
    letterSpacing: '.1px',
  },
  linkCap: {
    marginLeft: 10,
  },
  btnBack: {
    display: 'inline-block',
    marginRight: 30,
    backgroundColor: 'green',
    color: '#fff',
    textTransform: 'uppercase',
    padding: '8px 20px',
    border: 0,
    borderRadius: 5,
    fontSize: '1.1rem',
    letterSpacing: '.8px',
    cursor: 'pointer',
    transition: 'background-color .3s',
    '&:hover': {
      backgroundColor: '#006d00',
    }
  },
  nameWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  }
}));