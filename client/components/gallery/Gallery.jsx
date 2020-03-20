import React, { Component } from 'react';
import Pane from './Pane';
import PaneColumn from './PaneColumn';
import './galleryStyles.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
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
    const { pictures, photoBeingHovered, hoveredPhotoIndex } = this.state;
    return (
      <div className="gallery">
        <Pane
          className="main"
          imageUrl="https://picsum.photos/id/237/200/300"
          index={0}
          isMain
          photoBeingHovered={photoBeingHovered}
          hoveredPhotoIndex={hoveredPhotoIndex}
          handleOnHover={this.handleOnHover}
          handleOffHover={this.handleOffHover}
        />
        <PaneColumn
          className="col1"
          col={1}
          photoBeingHovered={photoBeingHovered}
          hoveredPhotoIndex={hoveredPhotoIndex}
          handleOnHover={this.handleOnHover}
          handleOffHover={this.handleOffHover}
        />
        <PaneColumn
          className="col2"
          col={2}
          photoBeingHovered={photoBeingHovered}
          hoveredPhotoIndex={hoveredPhotoIndex}
          handleOnHover={this.handleOnHover}
          handleOffHover={this.handleOffHover}
        />
      </div>
    );
  }
}

export default Gallery;
