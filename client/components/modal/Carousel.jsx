import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import './carouselStyle.css';

const Carousel = ({ pictures, currentPicture }) => {
  return (
    <div className="carousel">
      <div className="grid">
        <Slider className="slider" pictures={pictures} currentPicture={currentPicture} />
        <div className="description">
          {pictures[currentPicture].description}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPicture: PropTypes.number.isRequired,
};

export default Carousel;
