import React from 'react';

import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

export const Slider = ({ urls, alt }) => (
  <Carousel
    emulateTouch
    dynamicHeight
  >
    {
      urls.map((url, idx) => (
        <div key={idx}>
          <img src={url} alt={alt} />
        </div>
      ))
    }
  </Carousel>
);

Slider.propTypes = {
  urls: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
};
