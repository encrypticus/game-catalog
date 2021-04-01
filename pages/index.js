import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { GameList } from '../components/GameList';
import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
// import styles from '../styles/Home.module.css';

export default function Home({ gamesData }) {
  useEffect(() => {
    try {
      console.log(gamesData);
    } catch ({ message }) {
      console.log(message);
    }
  }, []);

  return (
    <div className="page-container">
      <PageHead title="Главная" />
      <Header />
      <main>
        <GameList gameList={gamesData.results} />
      </main>
    </div>
  );
}

Home.propTypes = {
  gamesData: PropTypes.object.isRequired,
};

export async function getServerSideProps({ query }) {
  let gamesData = null;
  try {
    const response = await fetch(`${process.env.URL}/api/games`);
    gamesData = await response.json();
  } catch ({ message }) {
    gamesData = { error: { message } };
  }
  return { props: gamesData };
}
