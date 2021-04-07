import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const GameListItem = ({ gameInfo }) => {
  const {
    name, rating, released, background_image: bgImage, slug, short_screenshots,
  } = gameInfo;
  const styles = useStyles();

  return (
    <li className={`${styles.root} game-list__item`}>
      <div className={styles.wrapper}>
        <Link
          href={{
            pathname: '/game/[slug]',
            query: {
              slug,
              screenshots: short_screenshots ? JSON.stringify(short_screenshots.map((scr) => scr.image)) : [],
            },
          }}
        >
          <a className={styles.gameLink}>
            <img
              className={`${styles.img} ${!bgImage ? styles.emptyLink : ''}`}
              src={bgImage || `https://via.placeholder.com/800.jpg?text=${name}`}
              alt={name}
            />
          </a>
        </Link>
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.rating}>{`rating: ${rating}`}</p>
        <p className={styles.released}>{`released: ${released || 'unknown'}`}</p>
      </div>
    </li>
  );
};

GameListItem.propTypes = {
  gameInfo: PropTypes.object.isRequired,
};
