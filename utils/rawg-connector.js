import { API_KEY } from '../constants/api-key';

export default class RawgConnector {
  _gameURL = 'https://api.rawg.io/api/games?key';

  getGamesData = async () => {
    try {
      const response = await fetch(`${this._gameURL}=${API_KEY}`);
      return await response.json();
    } catch ({ message }) {
      console.log(message);
    }
  }
}

export const rawgConnector = new RawgConnector();
