import { rawgConnector } from '../../utils/rawg-connector';

export default async (req, res) => {
  try {
    const gamesData = await rawgConnector.getGamesData();
    res.statusCode = 200;
    res.json({
      gamesData,
    });
  } catch ({ message }) {
    console.log(message);
  }
};
