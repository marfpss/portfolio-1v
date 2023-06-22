
import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: true,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.isHomePage && <Home />}
      </div>
    );
  }
}

export default App;
