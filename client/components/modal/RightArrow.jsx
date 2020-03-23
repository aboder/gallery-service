import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ handleRightClick }) => (
  <>
    <input
      onClick={handleRightClick}
      type="image"
      src="https://i.ya-webdesign.com/images/rightarrow-keys-png-14.png"
      alt=""
      className="rightArrow"
    />
  </>
);

RightArrow.propTypes = {
  handleRightClick: PropTypes.func.isRequired,
};

export default RightArrow;
