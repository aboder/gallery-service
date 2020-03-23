import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Gallery from './gallery/Gallery';
import Modal from './modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { roomId } = this.props;
    axios.get(`/api/gallery/pictures/${roomId}/`)
      .then((data) => {
        this.setState({
          pictures: data.data,
        });
      })
      .catch(console.error);
  }

  toggleModal(value) {
    this.setState({
      showModal: value,
    });
  }

  render() {
    const { showModal, pictures } = this.state;
    if (pictures.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <>
        <Gallery pictures={pictures} showModal={showModal} toggleModal={this.toggleModal} />
        <Modal pictures={pictures} toggleModal={this.toggleModal} showModal={showModal} />
      </>
    );
  }
}

App.propTypes = {
  roomId: PropTypes.number,
};

App.defaultProps = {
  roomId: 0,
};

export default App;
