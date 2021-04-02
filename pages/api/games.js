import { rawgConnector } from '../../utils/rawg-connector';

export default async (req, res) => {
  const { search, ...options } = req.body;
  const perPage = 20;

  try {
    const gamesData = await rawgConnector.getGamesData({ search, options });
    const { count } = gamesData;
    const maxPage = Math.ceil(count / perPage);
    console.log(maxPage);
    res.statusCode = 200;
    res.json({
      gamesData,
      page: options.page,
      maxPage,
    });
  } catch ({ message }) {
    console.log(message);
  }
};
