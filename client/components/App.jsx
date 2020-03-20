import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
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
    axios.get(`/api/gallery/pictures/${roomId}`)
      .then(console.log)
      .catch(console.error);
  }

  toggleModal(value) {
    this.setState({
      showModal: value,
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Gallery showModal={showModal} toggleModal={this.toggleModal} />
        <Modal toggleModal={this.toggleModal} showModal={showModal} />
      </>
    );
  }
}

App.propTypes = {
  roomId: PropTypes.number.isRequired,
};

export default App;
