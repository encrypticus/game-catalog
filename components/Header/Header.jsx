import React from 'react';

import PropTypes from 'prop-types';

import { Search } from '../Search';
import { useStyles } from './styles';

export const Header = ({ page }) => {
  const styles = useStyles();

  return (
    <header className={styles.root}>
      <img src="/logo.png" width={70} alt="Game Catalog" />
      <div className={styles.logoText}>
        game catalog
      </div>
      { page === 'home' && <Search /> }
    </header>
  );
};

Header.defaultProps = {
  page: 'home',
};

Header.propTypes = {
  page: PropTypes.string,
};
