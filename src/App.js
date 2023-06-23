import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  state = {
    isHomePage: true,
  };

  render() {
    const { isHomePage } = this.state;

    return (
      <div className={`App ${isHomePage ? 'home-page' : ''}`}>
        {isHomePage && <Home />}
      </div>
    );
  }
}

export default App;
