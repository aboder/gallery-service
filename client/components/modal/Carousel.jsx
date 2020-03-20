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
          Description
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPicture: PropTypes.number.isRequired,
};

export default Carousel;
