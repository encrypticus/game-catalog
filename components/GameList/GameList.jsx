import React, { useEffect, useRef, useState } from 'react';

import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { MetroSpinner } from 'react-spinners-kit';

import { GameListItem } from './GameListItem';
import { useStyles } from './styles';
import { getQueryString } from '../../utils/query-string';

export const GameList = ({ gamesData }) => {
  const styles = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  let currentPage = 1;

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const handleScroll = () => {
    const lastItemLoaded = document.querySelector('.game-list > .game-list__item:last-child');

    if (lastItemLoaded) {
      const lastItemLoadedOffset = lastItemLoaded.offsetTop + lastItemLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;

      if (pageOffset > lastItemLoadedOffset && !loading) {
        if (gamesData.page < gamesData.maxPage) {
          const nextPage = parseInt(gamesData.page, 10) + 1;
          // const settings = {
          //   options: { page: nextPage },
          // };
          // const optionsQueryString = getQueryString(settings.options);
          const queryString = `${router.pathname}?page=${nextPage}`;

          router.push(queryString);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const renderGameList = () => (
    gamesData.gamesData.results.map((gameListItem) => (
      <GameListItem
        key={gameListItem.id}
        gameInfo={gameListItem}
      />
    ))
  );

  const renderSpinner = () => (
    <div className="spinner-container">
      <MetroSpinner color="#83838A" size={60} />
    </div>
  );

  return (
    <>
      <ul className={`${styles.root} game-list`}>
        {renderGameList()}
      </ul>
      { loading && renderSpinner() }
    </>
  );
};

GameList.propTypes = {
  gamesData: PropTypes.object.isRequired,
};
