import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainPicture from './MainPicture';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Carousel from './Carousel';
import CloseButton from './CloseButton';
import './modalStyles.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    const { pictures } = props;
    this.state = {
      pictures,
      currentPicture: 0,
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleRightClick() {
    const { pictures, currentPicture } = this.state;
    if (currentPicture === pictures.length - 1) {
      this.setState({
        currentPicture: 0,
      });
    } else {
      this.setState({
        currentPicture: currentPicture + 1,
      });
    }
  }

  handleLeftClick() {
    const { pictures, currentPicture } = this.state;
    if (currentPicture === 0) {
      this.setState({
        currentPicture: pictures.length - 1,
      });
    } else {
      this.setState({
        currentPicture: currentPicture - 1,
      });
    }
  }

  render() {
    const { pictures, currentPicture } = this.state;
    const { showModal, toggleModal } = this.props;
    if (showModal) {
      return (
        <div className="modal">
          <MainPicture picture={pictures[currentPicture].imageUrl} />
          <LeftArrow handleLeftClick={this.handleLeftClick} />
          <RightArrow handleRightClick={this.handleRightClick} />
          <Carousel pictures={pictures} currentPicture={currentPicture} />
          <CloseButton toggleModal={toggleModal} />
        </div>
      );
    }
    return null;
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Modal;
