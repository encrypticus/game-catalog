import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { GameList } from '../components/GameList';
import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
// import styles from '../styles/Home.module.css';

export default function Home({ gameList }) {
  useEffect(() => {
    try {
      console.log(gameList);
    } catch ({ message }) {
      console.log(message);
    }
  }, []);

  return (
    <div className="page-container">
      <PageHead title="Главная" />
      <Header />
      <main>
        <GameList gameList={gameList} />
      </main>
    </div>
  );
}

Home.propTypes = {
  gameList: PropTypes.object.isRequired,
};

export async function getServerSideProps({ query }) {
  let gameList = null;
  try {
    const response = await fetch(`${process.env.URL}/api/games`);
    gameList = await response.json();
  } catch ({ message }) {
    gameList = { error: { message } };
  }
  return { props: gameList };
}
