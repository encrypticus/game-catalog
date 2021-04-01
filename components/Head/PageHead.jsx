import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';

export const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
};
