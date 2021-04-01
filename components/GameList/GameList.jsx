import React from 'react';

import PropTypes from 'prop-types';

import { GameListItem } from './GameListItem';

export const GameList = () => (
  <div>GameList</div>
);

GameList.propTypes = {
  gameList: PropTypes.object.isRequired,
};
