import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pane from './Pane';
import PaneColumn from './PaneColumn';
import './galleryStyles.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoBeingHovered: false,
      hoveredPhotoIndex: 0,
    };
    this.handleOffHover = this.handleOffHover.bind(this);
    this.handleOnHover = this.handleOnHover.bind(this);
  }

  handleOnHover(photoIndex) {
    this.setState({
      hoveredPhotoIndex: photoIndex,
      photoBeingHovered: true,
    });
  }

  handleOffHover() {
    this.setState({
      photoBeingHovered: false,
    });
  }

  render() {
    const { photoBeingHovered, hoveredPhotoIndex } = this.state;
    const { toggleModal, showModal, pictures } = this.props;
    if (!showModal) {
      return (
        <div className="gallery">
          <Pane
            className="main"
            toggleModal={toggleModal}
            imageUrl={pictures[0].imageUrl}
            index={0}
            isMain
            photoBeingHovered={photoBeingHovered}
            hoveredPhotoIndex={hoveredPhotoIndex}
            handleOnHover={this.handleOnHover}
            handleOffHover={this.handleOffHover}
          />
          <PaneColumn
            className="col1"
            pictures={pictures}
            col={1}
            toggleModal={toggleModal}
            photoBeingHovered={photoBeingHovered}
            hoveredPhotoIndex={hoveredPhotoIndex}
            handleOnHover={this.handleOnHover}
            handleOffHover={this.handleOffHover}
          />
          <PaneColumn
            className="col2"
            pictures={pictures}
            col={2}
            toggleModal={toggleModal}
            photoBeingHovered={photoBeingHovered}
            hoveredPhotoIndex={hoveredPhotoIndex}
            handleOnHover={this.handleOnHover}
            handleOffHover={this.handleOffHover}
          />
        </div>
      );
    }
    return null;
  }
}

Gallery.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
