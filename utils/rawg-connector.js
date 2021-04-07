/* eslint-disable no-console */
import { API_KEY } from '../constants/api-key';
import { getQueryString } from './query-string';

export default class RawgConnector {
  _gameURL = 'https://api.rawg.io/api/games';

  _platformURL = 'https://api.rawg.io/api/platforms';

  getGamesData = async ({ search, options } = { search: '', options: {} }) => {
    const queryString = getQueryString(options);
    try {
      const response = await fetch(`${this._gameURL}?key=${API_KEY}${queryString}`);
      return await response.json();
    } catch ({ message }) {
      console.log(message);
    }
  };

  getGameData = async (slug) => {
    try {
      const response = await fetch(`${this._gameURL}/${slug}?key=${API_KEY}`);
      return await response.json();
    } catch ({ message }) {
      console.log(message);
    }
  };

  getPlatformsData = async () => {
    try {
      const response = await fetch(`${this._platformURL}?key=${API_KEY}`);
      return await response.json();
    } catch ({ message }) {
      console.log(message);
    }
  };
}

export const rawgConnector = new RawgConnector();
