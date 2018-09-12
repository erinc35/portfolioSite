import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div id="top" className="snow">
          <div id="fade" className="greeting">
            <FadeIn delay={300}>
              <div>
                <p className="intro-p">HELLO, I'M <span className="name"> ERINÇ EMER</span>. </p>
              </div>
              <div>
                <p className="intro-p">I SOLVE PROBLEMS IN</p>
              </div>
              <div>
                <p className="intro-p">ELEGANT WAYS.</p>
              </div>
            </FadeIn>
          </div>
          <div className="arrow bounce"></div>
        </div>
      </div>
    );
  }
}

export default App;
