import React from 'react';
import PropTypes from 'prop-types';

const MainPicture = ({ picture }) => (
  <>
    <img className="mainPic" src={picture} alt="" />
  </>
);

MainPicture.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default MainPicture;
