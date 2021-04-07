import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { changeOptions, clearGamesData } from '../../redux/reducers/games-data-reducer';
import { getQueryString } from '../../utils/query-string';
import { useStyles } from './styles';

export const Sorting = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { gamesDataReducer: { options, options: { ordering } } } = useSelector((state) => state);
  const styles = useStyles();

  useEffect(() => {
    if (value) {
      const optionsQueryString = getQueryString(options);
      const queryString = `${router.pathname}?${optionsQueryString}`;
      router.push(queryString);
    }
  }, [ordering]);

  const handleChangeValue = ({ target: { value } }) => {
    setValue(value);
    dispatch(changeOptions({ ...options, ordering: value }));
    dispatch(clearGamesData());
  };

  return (
    <form className={styles.root}>
      <span className={styles.title}>Sort By: </span>
      <select
        className={styles.field}
        value={value}
        onChange={handleChangeValue}
      >
        <option
          className={styles.item}
          value="none"
        >
          reset
        </option>
        <option
          className={styles.item}
          value="rating"
        >
          rating asc
        </option>
        <option
          className={styles.item}
          value="-rating"
        >
          rating desc
        </option>
        <option
          className={styles.item}
          value="released"
        >
          released asc
        </option>
        <option
          className={styles.item}
          value="-released"
        >
          released desc
        </option>
      </select>
    </form>
  );
};
