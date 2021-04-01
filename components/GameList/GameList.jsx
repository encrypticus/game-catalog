import React from 'react';

import PropTypes from 'prop-types';

import { GameListItem } from './GameListItem';
import { useStyles } from './styles';

export const GameList = ({ gameList }) => {
  const styles = useStyles();

  const renderGameList = () => (
    gameList.map((gameListItem) => {
      return (
        <GameListItem
          key={gameListItem.id}
          gameInfo={gameListItem}
        />
      );
    })
  );

  return (
    <>
      <ul className={styles.root}>
        {renderGameList()}
      </ul>
    </>
  );
};
GameList.propTypes = {
  gameList: PropTypes.array.isRequired,
};
