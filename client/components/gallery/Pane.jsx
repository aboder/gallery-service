import React from 'react';
import PropTypes from 'prop-types';
import './paneStyles.css';

const Pane = ({
  imageUrl, index, isMain, photoBeingHovered, hoveredPhotoIndex, handleOnHover, handleOffHover,
}) => {
  let classes = 'pane';
  if (isMain) {
    classes += ' main';
  }
  if (photoBeingHovered && hoveredPhotoIndex !== index) {
    classes += ' dim';
  }
  return (
    <div
      className={classes}
      onMouseEnter={() => {
        handleOnHover(index);
      }}
      onMouseLeave={() => {
        handleOffHover();
      }}
    >
      <img className="image" src={imageUrl} alt="" />
    </div>
  );
};

Pane.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isMain: PropTypes.bool,
  photoBeingHovered: PropTypes.bool.isRequired,
  hoveredPhotoIndex: PropTypes.number.isRequired,
  handleOnHover: PropTypes.func.isRequired,
  handleOffHover: PropTypes.func.isRequired,
};

Pane.defaultProps = {
  isMain: false,
};

export default Pane;
