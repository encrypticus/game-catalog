/* eslint-disable no-console */
import { rawgConnector } from '../../utils/rawg-connector';

export default async (req, res) => {
  const { ...options } = req.body;
  const perPage = 20;

  try {
    const gamesData = await rawgConnector.getGamesData({ options });
    const platforms = await rawgConnector.getPlatformsData();
    const count = await gamesData.count;
    const maxPage = Math.ceil(count / perPage);
    const { page, ...otherOptions } = options;

    res.statusCode = 200;
    res.json({
      gamesData,
      platforms: platforms.results.map(({ name, id }) => ({ name, id })),
      page: options.page,
      maxPage,
      options: otherOptions,
    });
  } catch ({ message }) {
    console.log(message);
  }
};
