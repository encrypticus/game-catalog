import React, { useEffect, useRef, useState } from 'react';

import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { MetroSpinner } from 'react-spinners-kit';

import { PageHead } from '../../components/Head';
import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { useStyles } from '../../styles/styles';
import { rawgConnector } from '../../utils/rawg-connector';

export default function Game({ game, screenshots }) {
  const {
    name, description, website,
  } = game;
  const descrRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const styles = useStyles();
  const router = useRouter();

  useEffect(() => {
    const descrBlock = descrRef.current;
    descrBlock && (descrBlock.innerHTML = description);
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const renderSpinner = () => (
    <div className="spinner-container">
      <MetroSpinner color="#83838A" size={60} />
    </div>
  );

  const renderLink = () => (
    <a
      className={styles.gameLink}
      href={website}
      target="_blank"
      rel="noreferrer"
    >
      {website}
    </a>
  );

  return (
    <div className="page-container">
      <PageHead title={name} />
      <Header page="game" />
      <main>
        <div className="container">
          <div className={styles.nameWrapper}>
            <button
              type="button"
              className={styles.btnBack}
              onClick={() => router.back()}
            >
              Back
            </button>
            <h1 className={styles.gameName}>
              {name}
            </h1>
          </div>
          <div className={styles.sliderWrapper}>
            <Slider
              urls={screenshots}
              alt={name}
            />
            {loading && renderSpinner()}
          </div>
          <div className={styles.linkWrapper}>
            homepage:
            {' '}
            {website ? renderLink() : <div className={styles.linkCap}>Unknown</div>}
          </div>
          <div className={styles.description} ref={descrRef} />
        </div>
      </main>
    </div>
  );
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  screenshots: PropTypes.array.isRequired,
};

export async function getServerSideProps({ query }) {
  const { slug, screenshots } = query;
  let game;

  try {
    game = await rawgConnector.getGameData(slug);
  } catch ({ message }) {
    game = { error: { message } };
  }

  return {
    props: {
      game,
      screenshots: JSON.parse(screenshots),
    },
  };
}
