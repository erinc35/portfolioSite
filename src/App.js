import React, { Component } from 'react';
import './App.css';
import Intro from './Intro';
import Who from './Who';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Intro/>
        <Who/>
      </div>
    );
  }
}

export default App;
