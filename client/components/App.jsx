import React, { Component } from 'react';
import Gallery from './gallery/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  render() {
    return (
      <Gallery />
    );
  }
}
export default App;
