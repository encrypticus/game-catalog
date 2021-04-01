import React from 'react';

import PropTypes from 'prop-types';

export const GameListItem = ({ gameList }) => (
  <div>GameListItem</div>
);

GameListItem.propTypes = {
  gameList: PropTypes.object.isRequired,
};
