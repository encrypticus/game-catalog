import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { changeOptions, clearGamesData } from '../../redux/reducers/games-data-reducer';
import { getQueryString } from '../../utils/query-string';
import { useStyles } from './styles';

export const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { gamesDataReducer: { options } } = useSelector((state) => state);
  const styles = useStyles();

  const handleChangeQuery = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const optionsQueryString = getQueryString(options);
    const queryString = `${router.pathname}?${optionsQueryString}`;
    router.push(queryString);
    dispatch(clearGamesData());
  };

  useEffect(() => {
    dispatch(changeOptions({ search: query.trim() }));
  }, [query]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.root}
        value={query}
        onChange={handleChangeQuery}
        placeholder="Search..."
      />
    </form>
  );
};
