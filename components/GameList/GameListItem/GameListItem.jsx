import React from 'react';

import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const GameListItem = ({ gameInfo }) => {
  const { name, rating, released, background_image: bgImage } = gameInfo;
  const styles = useStyles();
  return (
    <li className={styles.root}>
      <img className={styles.img} src={bgImage} alt={name} />
      <div>{name}</div>
      <div>{rating}</div>
      <div>{released}</div>
    </li>
  );
};

GameListItem.propTypes = {
  gameInfo: PropTypes.object.isRequired,
};
