import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import logo from './phone-book.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="logo" alt="" />
          <h1 className="title" >Phone Book</h1>
        </div>
        <div className="des">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;