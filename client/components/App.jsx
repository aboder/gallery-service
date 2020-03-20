import React, { Component } from 'react';
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
export default App;
