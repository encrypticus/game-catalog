import { rawgConnector } from '../../utils/rawg-connector';

export default async (req, res) => {
  try {
    const gameList = await rawgConnector.getGameList();
    res.statusCode = 200;
    res.json({
      gameList,
    });
  } catch ({ message }) {
    console.log(message);
  }
};
