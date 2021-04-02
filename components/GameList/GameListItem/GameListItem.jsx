import React from 'react';

import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const GameListItem = ({ gameInfo }) => {
  const {
    name, rating, released, background_image: bgImage,
  } = gameInfo;
  const styles = useStyles();
  return (
    <li className={`${styles.root} game-list__item`}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={bgImage} alt={name} />
        <div className={styles.info}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.rating}>{`rating: ${rating}`}</p>
          <p className={styles.released}>{`released: ${released}`}</p>
        </div>
      </div>
    </li>
  );
};

GameListItem.propTypes = {
  gameInfo: PropTypes.object.isRequired,
};
