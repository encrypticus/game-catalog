import { API_KEY } from '../constants/api-key';
import { getQueryString } from './query-string';

export default class RawgConnector {
  _gameURL = 'https://api.rawg.io/api/games?key';

  getGamesData = async ({ search, options } = { search: '', options: {} }) => {
    const queryString = getQueryString(options);
    try {
      const response = await fetch(`${this._gameURL}=${API_KEY}${queryString}`);
      return await response.json();
    } catch ({ message }) {
      console.log(message);
    }
  }
}

export const rawgConnector = new RawgConnector();
