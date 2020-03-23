import React from 'react';
import PropTypes from 'prop-types';
import Pane from './Pane';

const PaneColumn = ({
  pictures, col, photoBeingHovered, hoveredPhotoIndex, handleOnHover, handleOffHover, toggleModal,
}) => {
  if (col === 1) {
    return (
      <div className="column">
        <Pane
          imageUrl={pictures[1].imageUrl}
          toggleModal={toggleModal}
          index={1}
          photoBeingHovered={photoBeingHovered}
          hoveredPhotoIndex={hoveredPhotoIndex}
          handleOnHover={handleOnHover}
          handleOffHover={handleOffHover}
        />
        <Pane
          imageUrl={pictures[2].imageUrl}
          toggleModal={toggleModal}
          index={2}
          photoBeingHovered={photoBeingHovered}
          hoveredPhotoIndex={hoveredPhotoIndex}
          handleOnHover={handleOnHover}
          handleOffHover={handleOffHover}
        />
      </div>
    );
  }
  return (
    <div className="column">
      <Pane
        imageUrl={pictures[3].imageUrl}
        toggleModal={toggleModal}
        index={3}
        photoBeingHovered={photoBeingHovered}
        hoveredPhotoIndex={hoveredPhotoIndex}
        handleOnHover={handleOnHover}
        handleOffHover={handleOffHover}
      />
      <Pane
        imageUrl={pictures[4].imageUrl}
        toggleModal={toggleModal}
        index={4}
        photoBeingHovered={photoBeingHovered}
        hoveredPhotoIndex={hoveredPhotoIndex}
        handleOnHover={handleOnHover}
        handleOffHover={handleOffHover}
      />
    </div>
  );
};

PaneColumn.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  col: PropTypes.number.isRequired,
  photoBeingHovered: PropTypes.bool.isRequired,
  hoveredPhotoIndex: PropTypes.number.isRequired,
  handleOnHover: PropTypes.func.isRequired,
  handleOffHover: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

PaneColumn.defaultProps = {
  pictures: [],
};

export default PaneColumn;
