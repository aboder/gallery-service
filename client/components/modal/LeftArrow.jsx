import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ handleLeftClick }) => (
  <>
    <input
      onClick={handleLeftClick}
      type="image"
      src="https://assets.website-files.com/5bc896b312d7f756b08bc19e/5bd0d069e574a7d98d091061_left-arrow.png"
      alt=""
      className="leftArrow"
    />
  </>
);

LeftArrow.propTypes = {
  handleLeftClick: PropTypes.func.isRequired,
};

export default LeftArrow;
