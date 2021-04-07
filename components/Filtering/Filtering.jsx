import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeOptions, clearGamesData, resetFilter } from '../../redux/reducers/games-data-reducer';
import { getQueryString } from '../../utils/query-string';
import { useStyles } from './styles';

export const Filtering = ({ platforms }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { gamesDataReducer: { options, options: { platforms: optionsPlatforms } } } = useSelector((state) => state);
  const styles = useStyles();

  useEffect(() => {
    if (value) {
      const optionsQueryString = getQueryString(options);
      const queryString = `${router.pathname}?${optionsQueryString}`;
      router.push(queryString);
    }
  }, [optionsPlatforms]);

  const handleChangeValue = ({ target: { value } }) => {
    setValue(value);
    if (value === 'none') {
      dispatch(resetFilter());
    } else {
      dispatch(changeOptions({ ...options, platforms: value }));
    }
    dispatch(clearGamesData());
  };

  const renderSelect = (platforms) => (
    platforms.map(({ id, name }) => (
      <option
        key={id}
        value={id}
        className={styles.item}
      >
        {name}
      </option>
    ))
  );

  return (
    <form className={styles.root}>
      <span className={styles.title}>Filter By: </span>
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
        {renderSelect(platforms)}
      </select>
    </form>
  );
};

Filtering.propTypes = {
  platforms: PropTypes.array.isRequired,
};
