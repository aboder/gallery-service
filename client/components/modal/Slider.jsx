import React from 'react';
import PropTypes from 'prop-types';
import './sliderStyle.css';

const Slider = ({ pictures, currentPicture }) => {
  if (currentPicture === 0) {
    return (
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentPicture * (100 / pictures.length)}%)`,
        }}
      >
        {pictures.slice(0, 4).map((picture, index) => {
          let classes = 'sliderItem';
          if (index === currentPicture) {
            classes += ' currentPic';
          }
          return (
            <input key={picture} className={classes} type="image" src={picture} alt="" />
          );
        })}
      </div>
    );
  }
  if (currentPicture === 1) {
    return (
      <div
        className="slider"
        style={{
          transform: `translateX(-${0 * (100 / pictures.length)}%)`,
        }}
      >
        {pictures.slice(0, 4).map((picture, index) => {
          let classes = 'sliderItem';
          if (index === currentPicture) {
            classes += ' currentPic';
          }
          return (
            <input key={picture} className={classes} type="image" src={picture} alt="" />
          );
        })}
      </div>
    );
  }
  return (
    <div
      className="slider"
      style={{
        transform: `translateX(-${currentPicture * (100 / pictures.length)}%)`,
      }}
    >
      {pictures.slice(currentPicture - 2, currentPicture + 3).map((picture, index) => {
        let classes = 'sliderItem';
        if (index === 2) {
          classes += ' currentPic';
        }
        return (
          <input key={picture} className={classes} type="image" src={picture} alt="" />
        );
      })}
    </div>
  );
};

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPicture: PropTypes.number.isRequired,
};

export default Slider;
