/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MetroSpinner } from 'react-spinners-kit';

import { add, changeOptions } from '../../redux/reducers/games-data-reducer';
import { getQueryString } from '../../utils/query-string';
import { GameListItem } from './GameListItem';
import { useStyles } from './styles';

export const GameList = ({ gamesData }) => {
  const styles = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { gamesDataReducer: { gamesData: { results }, options } } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    if (gamesData) {
      if (gamesData.error) {
        console.log(gamesData.error);
      } else {
        dispatch(add(gamesData.gamesData));
      }
    }
  }, [gamesData]);

  useEffect(() => {
    dispatch(changeOptions(gamesData.options));
  }, []);

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
          const optionsQueryString = getQueryString(options);
          const queryString = `${router.pathname}?page=${nextPage}${optionsQueryString}`;

          router.push(queryString, queryString, { scroll: false });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const renderGameList = (gamesList) => (
    gamesList.map((gameListItem) => (
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
        {renderGameList(results)}
      </ul>
      {loading && renderSpinner()}
    </>
  );
};

GameList.propTypes = {
  gamesData: PropTypes.object.isRequired,
};
