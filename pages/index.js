import PropTypes from 'prop-types';

import { Filtering } from '../components/Filtering';
import { GameList } from '../components/GameList';
import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
import { Sorting } from '../components/Sorting';

export default function Home({ gamesData }) {
  return (
    <div className="page-container">
      <PageHead title="Home" />
      <Header />
      <main>
        <div className="container">
          <section className="filters">
            <Sorting />
            <Filtering platforms={gamesData.platforms} />
          </section>
          <GameList gamesData={gamesData} />
        </div>
      </main>
    </div>
  );
}

Home.propTypes = {
  gamesData: PropTypes.object.isRequired,
};

export async function getServerSideProps({ query }) {
  const { page = 1 } = query;
  let gamesData = null;
  try {
    const response = await fetch(`${process.env.URL}/api/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...query, page }),
    });
    gamesData = await response.json();
  } catch ({ message }) {
    gamesData = { error: { message } };
  }
  return { props: { gamesData } };
}
