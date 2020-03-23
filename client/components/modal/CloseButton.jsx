import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ toggleModal }) => (
  <>
    <input
      onClick={() => {
        toggleModal(false);
      }}
      className="closeButton"
      type="image"
      src="https://static.thenounproject.com/png/1374574-200.png"
      alt=""
    />
  </>
);

CloseButton.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default CloseButton;
